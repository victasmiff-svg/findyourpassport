import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'public');

// Optional .env loading without external dependencies
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...rest] = trimmed.split('=');
        const val = rest.join('=').trim().replace(/^["']|["']$/g, '');
        if (!process.env[key.trim()]) {
          process.env[key.trim()] = val;
        }
      }
    }
  }
} catch {
  // Ignore env read issues
}

const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || process.env.ADMIN_EMAIL || 'victasmiff@gmail.com')
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean);
console.log(`[FindYourPassport] Configured admin accounts for Looker Studio analytics: ${ADMIN_EMAILS.join(', ')}`);

// Dynamically load Master Destination Repository from public/destinations.js
let DESTINATIONS = {};
try {
  const destPath = path.join(PUBLIC_DIR, 'destinations.js');
  const destContent = fs.readFileSync(destPath, 'utf8');
  const fn = new Function(destContent + '; return typeof DESTINATIONS !== "undefined" ? DESTINATIONS : {};');
  DESTINATIONS = fn();
  console.log(`[FindYourPassport] Loaded master repository with ${Object.keys(DESTINATIONS).length} global destinations.`);
} catch (err) {
  console.error('[FindYourPassport] Failed to load public/destinations.js:', err);
}

const CANDIDATE_KEYS = Object.keys(DESTINATIONS);

// Travel Archetypes Mapping (Catalog <-> Active FindYourPassport UI Archetypes)
const ARCHETYPE_MAPPING = {
  // Master catalog in destinations.js -> Active FindYourPassport UI archetypes
  "The Flâneur & Historian": "The Architectural Flâneur",
  "The Epic Trailblazer": "The Alpine Minimalist",
  "The Coastal Recharger": "The Meridian Navigator",
  "The Cosmopolitan Maverick": "The Metro Cartographer",
  "The Epicurean Curator": "The Epicurean Strategist",

  // Active UI Archetypes -> Master catalog in destinations.js
  "The Architectural Flâneur": "The Flâneur & Historian",
  "The Alpine Minimalist": "The Epic Trailblazer",
  "The Meridian Navigator": "The Coastal Recharger",
  "The Metro Cartographer": "The Cosmopolitan Maverick",
  "The Epicurean Strategist": "The Epicurean Curator"
};

const ARCHETYPE_METADATA = {
  "The Epicurean Strategist": {
    catalogArchetype: "The Epicurean Curator",
    title: "The Epicurean Strategist",
    subtitle: "Pursuer of terroir, regional craft, and unhurried dining rituals",
    verdict: "Your itinerary is measured by terroir and table conversation rather than flight segments logged. You prioritize regional gastronomy, unhurried dining rituals, and boutique sanctuaries that favor genuine culinary craft over sterile luxury."
  },
  "The Alpine Minimalist": {
    catalogArchetype: "The Epic Trailblazer",
    title: "The Alpine Minimalist",
    subtitle: "Seeker of high-altitude solitude, granite ridgelines, and crisp mountain passes",
    verdict: "You bypass crowded tourist promenades in pursuit of high-altitude solitude, razor-sharp granite ridgelines, and crisp mountain air. For you, the ultimate luxury is an early morning ascent well above the tree line before the world below wakes up."
  },
  "The Architectural Flâneur": {
    catalogArchetype: "The Flâneur & Historian",
    title: "The Architectural Flâneur",
    subtitle: "Collector of quiet courtyards, rain-slicked cobblestones, and deep cultural memory",
    verdict: "You navigate destinations through layers of architectural history, quiet courtyards, and rain-slicked cobblestones. Rather than checking off landmarks, you cultivate a deliberate rhythm built around historic libraries, local cafés, and neighborhoods with deep cultural resonance."
  },
  "The Metro Cartographer": {
    catalogArchetype: "The Cosmopolitan Maverick",
    title: "The Metro Cartographer",
    subtitle: "Conductor of high-frequency transit, midnight dining, and cutting-edge design",
    verdict: "You operate at the kinetic frequency of world-class transit networks, late-night dining alleys, and cutting-edge urban design. Your ideal expedition thrives on high-density cultural hubs, subterranean jazz venues, and seamless metropolitan exploration."
  },
  "The Meridian Navigator": {
    catalogArchetype: "The Coastal Recharger",
    title: "The Meridian Navigator",
    subtitle: "Navigator of oceanic headlands, coastal swells, and raw geographic frontiers",
    verdict: "You gravitate toward raw coastal geography, dramatic oceanic bluffs, and remote horizons where shifting weather shapes the day's itinerary. You thrive in untamed maritime environments that demand curiosity and reward spontaneous detours."
  }
};

function normalizeArchetype(name) {
  if (!name) return "The Epicurean Strategist";
  const mapped = ARCHETYPE_MAPPING[name];
  if (mapped && ARCHETYPE_METADATA[mapped]) return mapped;
  if (ARCHETYPE_METADATA[name]) return name;
  const n = name.toLowerCase();
  if (n.includes('flâneur') || n.includes('flaneur') || n.includes('historian') || n.includes('architect')) return "The Architectural Flâneur";
  if (n.includes('trailblazer') || n.includes('alpine') || n.includes('minimalist')) return "The Alpine Minimalist";
  if (n.includes('recharger') || n.includes('meridian') || n.includes('coastal') || n.includes('navigator')) return "The Meridian Navigator";
  if (n.includes('maverick') || n.includes('metro') || n.includes('cosmopolitan') || n.includes('cartographer')) return "The Metro Cartographer";
  if (n.includes('epicurean') || n.includes('curator') || n.includes('strategist')) return "The Epicurean Strategist";
  return "The Epicurean Strategist";
}

// Coordinates for all 80 master destinations
const COORDINATES = {
  malta: { lat: 35.8989, lng: 14.5146 },
  rome: { lat: 41.9028, lng: 12.4964 },
  porto: { lat: 41.1579, lng: -8.6291 },
  seville: { lat: 37.3891, lng: -5.9845 },
  edinburgh: { lat: 55.9533, lng: -3.1883 },
  prague: { lat: 50.0755, lng: 14.4378 },
  budapest: { lat: 47.4979, lng: 19.0402 },
  munich: { lat: 48.1351, lng: 11.5820 },
  stockholm: { lat: 59.3293, lng: 18.0686 },
  montreal: { lat: 45.5017, lng: -73.5673 },
  curacao: { lat: 12.1696, lng: -68.9900 },
  cartagena: { lat: 10.3910, lng: -75.4794 },
  kyoto: { lat: 35.0116, lng: 135.7681 },
  athens: { lat: 37.9838, lng: 23.7275 },
  istanbul: { lat: 41.0082, lng: 28.9784 },
  jordan: { lat: 31.9522, lng: 35.2332 },
  vienna: { lat: 48.2082, lng: 16.3738 },
  guatemala: { lat: 14.6349, lng: -90.5069 },
  granada: { lat: 37.1773, lng: -3.5986 },
  slovenia: { lat: 46.0569, lng: 14.5058 },
  iceland: { lat: 64.1466, lng: -21.9426 },
  norway: { lat: 60.3913, lng: 5.3221 },
  banff: { lat: 51.1784, lng: -115.5708 },
  alaska: { lat: 61.2181, lng: -149.9003 },
  costarica: { lat: 9.9281, lng: -84.0907 },
  peru: { lat: -13.5319, lng: -71.9675 },
  galapagos: { lat: -0.9538, lng: -90.9656 },
  thailand: { lat: 13.7563, lng: 100.5018 },
  komodo: { lat: -8.5833, lng: 119.4833 },
  egypt: { lat: 30.0444, lng: 31.2357 },
  morocco: { lat: 31.6295, lng: -7.9811 },
  tanzania: { lat: -6.1659, lng: 39.2026 },
  newzealand: { lat: -45.0312, lng: 168.6626 },
  patagonia: { lat: -53.1638, lng: -70.9171 },
  switzerland: { lat: 46.8182, lng: 8.2275 },
  atacama: { lat: -22.9087, lng: -68.1997 },
  cappadocia: { lat: 38.6431, lng: 34.8289 },
  halong: { lat: 20.9101, lng: 107.1839 },
  vancouver: { lat: 49.2827, lng: -123.1207 },
  vicfalls: { lat: -17.9243, lng: 25.8572 },
  malaysia: { lat: 5.4164, lng: 100.3327 },
  mallorca: { lat: 39.6953, lng: 3.0176 },
  croatia: { lat: 42.6507, lng: 18.0944 },
  puertorico: { lat: 18.4655, lng: -66.1057 },
  aruba: { lat: 12.5211, lng: -69.9683 },
  stlucia: { lat: 13.9094, lng: -60.9789 },
  bali: { lat: -8.4095, lng: 115.1889 },
  sydney: { lat: -33.8688, lng: 151.2093 },
  maldives: { lat: 4.1755, lng: 73.5093 },
  tahiti: { lat: -17.6509, lng: -149.4260 },
  turks: { lat: 21.6940, lng: -71.7979 },
  phuket: { lat: 7.8804, lng: 98.3923 },
  sayulita: { lat: 20.8689, lng: -105.4408 },
  amalfi: { lat: 40.6340, lng: 14.6027 },
  seychelles: { lat: -4.6796, lng: 55.4920 },
  crete: { lat: 35.2401, lng: 24.8093 },
  newyork: { lat: 40.7128, lng: -74.0060 },
  seoul: { lat: 37.5665, lng: 126.9780 },
  cdmx: { lat: 19.4326, lng: -99.1332 },
  singapore: { lat: 1.3521, lng: 103.8198 },
  taipei: { lat: 25.0330, lng: 121.5654 },
  london: { lat: 51.5074, lng: -0.1278 },
  berlin: { lat: 52.5200, lng: 13.4050 },
  hongkong: { lat: 22.3193, lng: 114.1694 },
  melbourne: { lat: -37.8136, lng: 144.9631 },
  chicago: { lat: 41.8781, lng: -87.6298 },
  sanfrancisco: { lat: 37.7749, lng: -122.4194 },
  paris: { lat: 48.8566, lng: 2.3522 },
  tokyo: { lat: 35.6762, lng: 139.6503 },
  buenosaires: { lat: -34.6037, lng: -58.3816 },
  oaxaca: { lat: 17.0732, lng: -96.7266 },
  capetown: { lat: -33.9249, lng: 18.4241 },
  dubai: { lat: 25.2048, lng: 55.2708 },
  sansebastian: { lat: 43.3183, lng: -1.9812 },
  bologna: { lat: 44.4949, lng: 11.3426 },
  hanoi: { lat: 21.0285, lng: 105.8542 },
  lyon: { lat: 45.7640, lng: 4.8357 },
  santiago: { lat: -33.4489, lng: -70.6693 },
  santafe: { lat: 35.6870, lng: -105.9378 },
  sicily: { lat: 37.5990, lng: 14.0154 },
  copenhagen: { lat: 55.6761, lng: 12.5683 },
  dublin: { lat: 53.3498, lng: -6.2603 },
  dolomites: { lat: 46.5333, lng: 11.8500 },
  jacksonhole: { lat: 43.4799, lng: -110.7624 },
  belgium: { lat: 50.8503, lng: 4.3517 },
  madeira: { lat: 32.6500, lng: -16.9083 },
  tromso: { lat: 69.6492, lng: 18.9553 },
  belize: { lat: 17.9214, lng: -87.9611 },
  tbilisi: { lat: 41.7151, lng: 44.8271 },
  bariloche: { lat: -41.1335, lng: -71.3103 },
  osaka: { lat: 34.6937, lng: 135.5023 },
  papeete: { lat: -17.5350, lng: -149.5696 },
  azores: { lat: 37.7412, lng: -25.6756 },
  kefalonia: { lat: 38.1754, lng: 20.4890 },
  cornwall: { lat: 50.2660, lng: -5.0527 },
  noronha: { lat: -3.8574, lng: -32.4297 },
  busan: { lat: 35.1796, lng: 129.0756 },
  medellin: { lat: 6.2442, lng: -75.5812 },
  rotterdam: { lat: 51.9244, lng: 4.4777 },
  valencia: { lat: 39.4699, lng: -0.3763 },
  sapporo: { lat: 43.0618, lng: 141.3545 },
  puglia: { lat: 40.7928, lng: 17.1012 },
  salta: { lat: -24.7821, lng: -65.4232 },
  alentejo: { lat: 38.5714, lng: -7.9135 },
  istria: { lat: 45.3376, lng: 13.9283 },
  sanmiguel: { lat: 20.9144, lng: -100.7452 },
  kakheti: { lat: 41.6168, lng: 45.9221 }
};

// Aliases for legacy or hyphenated keys
const KEY_ALIASES = {
  san_sebastian: 'sansebastian',
  lofoten: 'norway',
  bruges: 'belgium',
  ghent: 'belgium',
  senja: 'tromso',
  papeete: 'tahiti',
  kansai: 'osaka',
  san_miguel: 'sanmiguel',
  fernandodenoronha: 'noronha',
  fernando_de_noronha: 'noronha',
  scilly: 'cornwall'
};

function extractCountry(name) {
  if (!name) return 'Global';
  if (name.includes('Scottish') || name.includes('Edinburgh')) return 'Scotland, UK';
  if (name.includes('Banff') || name.includes('Rockies')) return 'Canada';
  if (name.includes('Alaska')) return 'USA';
  const parts = name.split(',');
  return parts.length > 1 ? parts.pop().trim() : name;
}

function deriveHighlightTitle(str) {
  if (!str) return 'Signature Highlight';
  const sepMatch = str.match(/^([^—:–]+)[—:–]/);
  if (sepMatch && sepMatch[1].trim().length >= 6 && sepMatch[1].trim().length <= 36) {
    return sepMatch[1].trim();
  }
  const words = str.split(/\s+/);
  if (words.length <= 4) return str.trim();
  return words.slice(0, 4).join(' ').trim();
}

function getHighlightIcon(text) {
  if (!text) return '📍';
  const t = text.toLowerCase();
  if (t.includes('wine') || t.includes('tasting') || t.includes('vineyard') || t.includes('cellar')) return '🍷';
  if (t.includes('hike') || t.includes('trail') || t.includes('trek') || t.includes('peak') || t.includes('mountain') || t.includes('ridge') || t.includes('glacier')) return '⛰️';
  if (t.includes('boat') || t.includes('cruise') || t.includes('ferry') || t.includes('lagoon') || t.includes('ocean') || t.includes('beach') || t.includes('water') || t.includes('bay') || t.includes('sea')) return '🌊';
  if (t.includes('eat') || t.includes('food') || t.includes('dine') || t.includes('market') || t.includes('pintxos') || t.includes('tapas') || t.includes('tasting') || t.includes('restaurant') || t.includes('seafood') || t.includes('ramen')) return '🍽️';
  if (t.includes('castle') || t.includes('temple') || t.includes('palace') || t.includes('cathedral') || t.includes('church') || t.includes('ruin') || t.includes('historic') || t.includes('museum')) return '🏛️';
  if (t.includes('sunset') || t.includes('sunrise') || t.includes('view') || t.includes('panorama') || t.includes('lookout')) return '🌅';
  if (t.includes('train') || t.includes('railway') || t.includes('tram')) return '🚂';
  if (t.includes('coffee') || t.includes('tea') || t.includes('cafe')) return '☕';
  if (t.includes('market') || t.includes('bazaar') || t.includes('shop')) return '🛍️';
  if (t.includes('wildlife') || t.includes('whale') || t.includes('safari') || t.includes('animal')) return '🐋';
  return '📍';
}

const HUB_COORDINATES = {
  // US Eastern Corridor
  JFK: { lat: 40.6413, lng: -73.7781 },
  BOS: { lat: 42.3656, lng: -71.0096 },
  ATL: { lat: 33.6407, lng: -84.4277 },
  MIA: { lat: 25.7959, lng: -80.2870 },
  EWR: { lat: 40.6895, lng: -74.1745 },
  IAD: { lat: 38.9531, lng: -77.4565 },

  // US Central Corridor
  ORD: { lat: 41.9742, lng: -87.9073 },
  DFW: { lat: 32.8998, lng: -97.0403 },
  DEN: { lat: 39.8561, lng: -104.6737 },
  MSP: { lat: 44.8848, lng: -93.2223 },
  IAH: { lat: 29.9902, lng: -95.3368 },

  // US Western Corridor
  LAX: { lat: 33.9416, lng: -118.4085 },
  SFO: { lat: 37.6213, lng: -122.3790 },
  SEA: { lat: 47.4502, lng: -122.3088 },

  // European Flagship Corridor
  LHR: { lat: 51.4700, lng: -0.4543 },
  CDG: { lat: 49.0097, lng: 2.5479 },
  AMS: { lat: 52.3105, lng: 4.7683 },
  FRA: { lat: 50.0379, lng: 8.5622 },
  MUC: { lat: 48.3537, lng: 11.7750 },
  MAD: { lat: 40.4839, lng: -3.5680 },

  // Asia & Oceania Corridor
  HND: { lat: 35.5494, lng: 139.7798 },
  NRT: { lat: 35.7720, lng: 140.3929 },
  ICN: { lat: 37.4602, lng: 126.4407 },
  HKG: { lat: 22.3080, lng: 113.9185 },
  SIN: { lat: 1.3644, lng: 103.9915 },
  SYD: { lat: -33.9399, lng: 151.1753 },
  MEL: { lat: -37.6690, lng: 144.8410 }
};

function getRouteDistanceMiles(hubCode, destCoords) {
  const hub = HUB_COORDINATES[(hubCode || 'JFK').toUpperCase()] || HUB_COORDINATES.JFK;
  if (!destCoords || typeof destCoords.lat !== 'number' || typeof destCoords.lng !== 'number') {
    return 3500;
  }
  const R = 3958.8; // Earth radius in miles
  const dLat = (destCoords.lat - hub.lat) * Math.PI / 180;
  const dLon = (destCoords.lng - hub.lng) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(hub.lat * Math.PI / 180) * Math.cos(destCoords.lat * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

function calculateDynamicBaseFare(distMiles, hubCode) {
  let fare = 70;

  if (distMiles <= 1000) {
    fare += distMiles * 0.135;
  } else if (distMiles <= 3000) {
    fare += 1000 * 0.135 + (distMiles - 1000) * 0.105;
  } else if (distMiles <= 6000) {
    fare += 1000 * 0.135 + 2000 * 0.105 + (distMiles - 3000) * 0.088;
  } else {
    fare += 1000 * 0.135 + 2000 * 0.105 + 3000 * 0.088 + (distMiles - 6000) * 0.076;
  }

  // Intercontinental oceanic / trans-oceanic flight operations fee
  if (distMiles > 3000) {
    fare += 85;
  }
  if (distMiles > 6000) {
    fare += 75;
  }

  // Slight hub fee adjustments (e.g. LHR passenger departure tax, Australia long-haul departure charges)
  const hubSurplus = {
    LHR: 1.06,
    CDG: 1.04,
    SYD: 1.05,
    MEL: 1.05,
    ICN: 1.02,
    HND: 1.03
  }[(hubCode || '').toUpperCase()] || 1.0;

  return Math.round((fare * hubSurplus) / 10) * 10;
}

function generateFareProjectionForRoute(hub, destCoords) {
  const distMiles = getRouteDistanceMiles(hub, destCoords);
  const dynamicBase = calculateDynamicBaseFare(distMiles, hub);
  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const multipliers = [0.94, 1.35, 0.98, 0.82, 0.90, 1.05];

  const fares = months.map((m, idx) => ({
    month: m,
    price: Math.round((dynamicBase * multipliers[idx]) / 10) * 10,
    isLowDeal: false
  }));

  let minPrice = Infinity;
  let minIdx = 0;
  fares.forEach((f, i) => {
    if (f.price < minPrice) {
      minPrice = f.price;
      minIdx = i;
    }
  });
  fares[minIdx].isLowDeal = true;
  return fares;
}

function generateFareProjection(baseFare, hub, destCoords = null) {
  if (destCoords) {
    return generateFareProjectionForRoute(hub, destCoords);
  }
  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const hubFactor = {
    JFK: 1.0, BOS: 1.02, ATL: 1.08, MIA: 1.07,
    ORD: 1.06, DFW: 1.10, DEN: 1.08, MSP: 1.07,
    LAX: 1.12, SFO: 1.12, SEA: 1.14,
    LHR: 1.05, CDG: 1.06, AMS: 1.05, FRA: 1.08, MUC: 1.09, MAD: 1.03,
    HND: 1.15, ICN: 1.12, HKG: 1.14, SIN: 1.16, SYD: 1.25, MEL: 1.26,
    EWR: 1.02, IAD: 1.06, IAH: 1.13
  }[hub] || 1.10;

  const multipliers = [0.94, 1.35, 0.98, 0.82, 0.90, 1.05];
  const fares = months.map((m, idx) => ({
    month: m,
    price: Math.round((baseFare * hubFactor * multipliers[idx]) / 10) * 10,
    isLowDeal: false
  }));

  let minPrice = Infinity;
  let minIdx = 0;
  fares.forEach((f, i) => {
    if (f.price < minPrice) {
      minPrice = f.price;
      minIdx = i;
    }
  });
  fares[minIdx].isLowDeal = true;
  return fares;
}

function sanitizeLodgingStayStyle(text) {
  if (!text || typeof text !== 'string') return text || '';
  let cleaned = text
    .replace(/(?:Convenient\s+)?direct\s+(?:transpacific\s+)?nonstop\s+(?:access\s+)?to\s+[^;.]+followed\s+by\s+the\s+[^;.]+Station;?\s*/gi, '')
    .replace(/(?:Convenient\s+)?direct\s+(?:transpacific\s+)?nonstop\s+(?:access\s+)?(?:to|into)\s+[^;.]+via\s+Alaska\s+Airlines[^;.]*;?\s*/gi, '')
    .replace(/Alaska\s+Airlines\s+direct\s+transpacific\s+nonstop[^;.]*;?\s*/gi, '')
    .replace(/Nonstop\s+flight[^;.]*;?\s*/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return cleaned;
}

function sanitizeRouteStrategy(text, hub) {
  if (!text || typeof text !== 'string') return text || '';
  if (hub === 'SEA') return text;
  // If hub is not SEA, strip any references to SEA/Seattle nonstop routes (KIX, PPT, etc.)
  let cleaned = text
    .replace(/(?:Convenient\s+)?direct\s+(?:transpacific\s+)?nonstop\s+(?:access\s+)?to\s+(?:Kansai(?:\s*\(KIX\))?|KIX|Osaka|Papeete|Tahiti(?:\s*\(PPT\))?|PPT)\s+via\s+Alaska\s+Airlines\s+from\s+Seattle\s*\((?:SEA)\)[^,.;]*[;,.]?\s*/gi, '')
    .replace(/Alaska\s+Airlines\s+direct\s+transpacific\s+nonstop\s+from\s+SEA\s+into\s+(?:KIX|PPT)[^,.;)]*(\([^)]*\))?[,.;]?\s*/gi, '')
    .replace(/Alaska\s+Airlines\s+direct\s+transpacific\s+nonstop\s+into\s+(?:Kansai(?:\/Osaka)?\s*\(KIX\)|KIX|Papeete(?:\s*\(PPT\))?|PPT)[^,.;)]*(\([^)]*\))?[,.;]?\s*/gi, '')
    .replace(/(?:plus\s+)?Alaska's\s+direct\s+transpacific\s+nonstops\s*\(SEA-KIX,\s*SEA-PPT\)[^,.;]*[,.;]?\s*/gi, '')
    .replace(/\b(?:SEA-KIX|SEA-PPT)\b/gi, '')
    .replace(/from\s+Seattle\s*\((?:SEA)\)/gi, '')
    .replace(/,\s*,/g, ',')
    .replace(/\(\s*\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return cleaned;
}

function hydrateDestination(key, dest, manifest, rank, geminiOverride = null) {
  const hub = (manifest.originHub || 'JFK').toUpperCase();
  
  // Alliance alignment across all 21 global departure hubs
  let defaultAlliance = 'Star Alliance';
  let carrierName = 'Star Alliance Carriers';

  if (['DFW', 'MIA', 'CLT', 'PHL', 'LHR', 'MAD', 'HKG', 'SYD', 'MEL'].includes(hub)) {
    defaultAlliance = 'Oneworld';
    carrierName = {
      DFW: 'American Airlines', MIA: 'American Airlines', CLT: 'American Airlines', PHL: 'American Airlines',
      LHR: 'British Airways', MAD: 'Iberia', HKG: 'Cathay Pacific', SYD: 'Qantas', MEL: 'Qantas'
    }[hub] || 'Oneworld Carriers';
  } else if (['ATL', 'DTW', 'MSP', 'SLC', 'CDG', 'AMS', 'ICN'].includes(hub)) {
    defaultAlliance = 'SkyTeam';
    carrierName = {
      ATL: 'Delta Air Lines', DTW: 'Delta Air Lines', MSP: 'Delta Air Lines', SLC: 'Delta Air Lines',
      CDG: 'Air France', AMS: 'KLM Royal Dutch Airlines',
      ICN: 'Korean Air (SkyTeam, combined with Asiana)'
    }[hub] || 'SkyTeam Carriers';
  } else if (hub === 'ORD') {
    const isOneworldDest = ['JFK', 'LGA', 'DFW', 'MIA', 'CLT', 'PHL', 'LHR', 'MAD', 'HND'].includes(dest.code);
    defaultAlliance = isOneworldDest ? 'Oneworld' : 'Star Alliance';
    carrierName = isOneworldDest ? 'American Airlines' : 'United Airlines';
  } else if (hub === 'HND') {
    defaultAlliance = 'Star Alliance / Oneworld';
    carrierName = 'ANA & Japan Airlines';
  } else if (['FRA', 'MUC'].includes(hub)) {
    defaultAlliance = 'Star Alliance';
    carrierName = 'Lufthansa';
  } else if (hub === 'SIN') {
    defaultAlliance = 'Star Alliance';
    carrierName = 'Singapore Airlines';
  } else if (['SFO', 'DEN', 'IAH', 'EWR', 'IAD'].includes(hub)) {
    defaultAlliance = 'Star Alliance';
    carrierName = 'United Airlines';
  } else if (hub === 'SEA') {
    defaultAlliance = 'Oneworld & SkyTeam';
    carrierName = 'Alaska Airlines & Delta';
  } else if (hub === 'BOS') {
    defaultAlliance = 'SkyTeam & Oneworld';
    carrierName = 'Delta & British Airways';
  } else if (['LAX', 'JFK'].includes(hub)) {
    defaultAlliance = 'Cross-Alliance Flagship';
    carrierName = 'Premier Flagship Carriers';
  }

  const coords = (dest.coordinates) || COORDINATES[key] || { lat: 40.0, lng: 0.0 };
  const distMiles = getRouteDistanceMiles(hub, coords);
  const basePrice = calculateDynamicBaseFare(distMiles, hub);
  const fareProjection = (geminiOverride && Array.isArray(geminiOverride.fareProjection) && geminiOverride.fareProjection.length >= 3)
    ? geminiOverride.fareProjection
    : generateFareProjectionForRoute(hub, coords);

  const bestTimesDetail = dest.season
    ? `Best Window: ${dest.season}. ${dest.seasonReason || ''} ${dest.weatherTip || ''}`.trim()
    : `${dest.seasonReason || ''} ${dest.weatherTip || ''}`.trim();

  const highlights = dest.highlights && dest.highlights.length > 0
    ? dest.highlights.map(h => ({
        title: deriveHighlightTitle(h),
        description: h,
        icon: getHighlightIcon(h)
      }))
    : (geminiOverride?.dossier?.signatureHighlights || []);

  // Primary Route logic
  let primaryRoute = (geminiOverride && geminiOverride.primaryRoute) || '';
  if (!primaryRoute || (hub === 'ORD' && dest.code === 'JFK')) {
    if (hub === 'ORD' && dest.code === 'JFK') {
      primaryRoute = 'ORD → JFK on American Airlines (Oneworld)';
    } else if (hub === 'SEA' && (key === 'kyoto' || key === 'osaka' || dest.code === 'KIX')) {
      primaryRoute = 'SEA → KIX on Alaska Airlines Nonstop (Oneworld)';
    } else if (hub === 'SEA' && (key === 'tahiti' || dest.code === 'PPT')) {
      primaryRoute = 'SEA → PPT on Alaska Airlines Nonstop (Oneworld)';
    } else if (['LAX', 'SFO', 'SEA'].includes(hub) && ['taipei', 'tokyo', 'kyoto', 'seoul', 'hongkong', 'singapore'].includes(key)) {
      primaryRoute = `${hub} → ${dest.code} on Pacific Flagship Corridors (EVA Air / STARLUX / ANA / JAL)`;
    } else {
      primaryRoute = `${hub} → ${dest.code} on ${carrierName} (${defaultAlliance})`;
    }
  }

  // Award and Route Strategy logic (sanitizing any mismatched partner suggestions like Virgin Atlantic on domestic AA corridors)
  let flightSecret = (geminiOverride && geminiOverride.flightSecret) || '';
  if (flightSecret && (hub === 'ORD' || dest.code === 'JFK') && /virgin atlantic/i.test(flightSecret)) {
    flightSecret = '';
  }

  if (!flightSecret) {
    const isPacificDest = ['taipei', 'tokyo', 'kyoto', 'seoul', 'hongkong', 'singapore', 'bali', 'thailand', 'phuket', 'hanoi', 'halong', 'malaysia', 'sydney', 'melbourne', 'newzealand', 'tahiti'].includes(key);

    if (hub === 'ORD' && dest.code === 'JFK') {
      flightSecret = `From ORD: High-frequency nonstop corridor on American Airlines (Oneworld). Primary award seat space is reliably booked through Atmos Rewards (Alaska Airlines) or British Airways Avios using American Airlines as the operating carrier, alongside United MileagePlus / Aeroplan into Newark (EWR). ${dest.points}`;
    } else if (hub === 'SEA' && (key === 'kyoto' || key === 'osaka' || dest.code === 'KIX')) {
      flightSecret = `From SEA: Alaska Airlines direct transpacific nonstop from SEA into KIX (bookable via Atmos Rewards or Oneworld), followed by the 75-minute Haruka Express to Kyoto Station. ${dest.points}`;
    } else if (hub === 'SEA' && (key === 'tahiti' || dest.code === 'PPT')) {
      flightSecret = `From SEA: Alaska Airlines direct transpacific nonstop from SEA into PPT (bookable via Atmos Rewards or Oneworld). ${dest.points}`;
    } else if (hub === 'ORD') {
      flightSecret = `From ORD (Dual Oneworld & Star Alliance Hub): ${dest.points} Target partner award availability via Atmos Rewards/Avios (American Airlines) or Aeroplan (United Airlines).`;
    } else if (hub === 'DEN') {
      flightSecret = `From DEN (United Star Alliance Fortress): ${dest.points} Target Star Alliance partner saver space on Air Canada Aeroplan or Avianca LifeMiles for long-haul business cabins, alongside United MileagePlus.`;
    } else if (hub === 'MSP') {
      flightSecret = `From MSP (Delta SkyTeam Fortress): ${dest.points} Leverage SkyTeam partner redemptions via Air France/KLM Flying Blue promo awards and Virgin Atlantic Flying Club to sidestep Delta dynamic pricing.`;
    } else if (isPacificDest && (['LAX', 'SFO', 'SEA'].includes(hub) || key === 'taipei')) {
      flightSecret = `From ${hub}: Pacific flagship corridor featuring Star Alliance awards on EVA Air via Aeroplan/United, or boutique luxury cabins on STARLUX Airlines booked via Atmos Rewards (Alaska) or American Airlines. ${dest.points}`;
    } else if (key === 'seoul' || hub === 'ICN') {
      flightSecret = `From ${hub}: Korean Air (SkyTeam, combined with Asiana) nonstop corridor. Target award space through Delta SkyMiles or Flying Blue promo awards. ${dest.points}`;
    } else if (hub === 'LHR') {
      flightSecret = `From LHR (British Airways Flagship): ${dest.points} Leverage British Airways Avios off-peak sweet spots (or Virgin Atlantic Flying Club on partner routes).`;
    } else if (['CDG', 'AMS'].includes(hub)) {
      flightSecret = `From ${hub} (Air France/KLM Fortress): ${dest.points} Capitalize on monthly Flying Blue Promo Rewards with business class sweet spots typically from 60k–75k pts.`;
    } else if (['FRA', 'MUC'].includes(hub)) {
      flightSecret = `From ${hub} (Lufthansa Group Hub): ${dest.points} Book via Lufthansa Miles & More (exclusive 1:1 transfer via Rove Miles) or Star Alliance partner redemptions on Air Canada Aeroplan.`;
    } else if (hub === 'MAD') {
      flightSecret = `From MAD (Iberia Oneworld Fortress): ${dest.points} Take advantage of legendary 34k–42k off-peak business class Avios sweet spots to the Americas.`;
    } else if (hub === 'HND') {
      flightSecret = `From Tokyo (ANA & JAL Dual Hub): ${dest.points} Target ANA premium cabins via Virgin Atlantic/Aeroplan, or JAL via Atmos Rewards / British Airways Avios.`;
    } else if (hub === 'HKG') {
      flightSecret = `From HKG (Cathay Pacific Fortress): ${dest.points} Target Asia Miles or partner awards via Atmos Rewards (Alaska Airlines) and British Airways Avios.`;
    } else if (hub === 'SIN') {
      flightSecret = `From SIN (Singapore Airlines Fortress): ${dest.points} Access KrisFlyer long-haul saver awards or partner bookings via Air Canada Aeroplan.`;
    } else if (['SYD', 'MEL'].includes(hub)) {
      flightSecret = `From ${hub} (Qantas Base): ${dest.points} Redeem Qantas Frequent Flyer, Atmos Rewards (Alaska Airlines), or British Airways Avios.`;
    } else {
      flightSecret = `From ${hub}: ${dest.points} Target partner transfer availability on ${defaultAlliance} corridors.`;
    }
  }

  // Ensure stayStyle is pure lodging and routeStrategy is sanitized
  const rawStayStyle = (geminiOverride && geminiOverride.stayStyle) || dest.cash;
  const stayStyle = sanitizeLodgingStayStyle(rawStayStyle);

  // Gate 1 Travel Party (Crew) Customization for Passenger Label & Lodging Architecture
  const crew = (manifest.crew || 'duo').toLowerCase();
  const passengerLabels = {
    solo: 'SOLO VOYAGER',
    duo: 'DUO TRAVELERS',
    inner_circle: 'INNER CIRCLE CREW',
    family: 'FAMILY EXPEDITION'
  };
  const passengerLabel = passengerLabels[crew] || 'EXPEDITION GUEST';

  const crewLodgingNotes = {
    family: ' · Family Architecture: Ideal for spacious multi-bedroom apartments, connected suites, or private villas with kitchenettes and child-friendly grounds.',
    solo: ' · Solo Mobility: High-walkability boutique stays and neighborhood hubs near rapid transit for safe, spontaneous exploration.',
    inner_circle: ' · Crew Sanctuary: Optimal for 3–5 traveler whole-home rentals, vineyard estates, or townhomes with private communal courtyards.',
    duo: ' · Intimate Sanctuary: Curated boutique properties featuring private balconies, quiet gardens, and candlelit ambiance.'
  };
  const tailoredStayStyle = stayStyle + (crewLodgingNotes[crew] || '');

  const rawPointsPlay = (geminiOverride && geminiOverride.pointsPlay) || dest.points;
  const pointsPlay = sanitizeRouteStrategy(rawPointsPlay, hub);
  flightSecret = sanitizeRouteStrategy(flightSecret, hub);
  primaryRoute = sanitizeRouteStrategy(primaryRoute, hub);

  return {
    destKey: key,
    destinationName: dest.name,
    country: extractCountry(dest.name),
    airportCode: dest.code,
    rank: rank,
    passengerLabel: passengerLabel,
    matchReason: (geminiOverride && geminiOverride.matchReason) || dest.narrative,
    stayStyle: tailoredStayStyle,
    flightSecret: flightSecret,
    bestWindow: dest.season,
    budgetVibe: dest.costTier || 'Curated Value',
    primaryRoute: primaryRoute,
    pointsPlay: pointsPlay,
    basePrice: basePrice,
    fareProjection: fareProjection,
    coordinates: coords,
    dossier: {
      overview: dest.narrative,
      bestTimesDetail: bestTimesDetail,
      costBreakdown: {
        lodging: dest.costLodging || '$150 – $300 / night',
        dining: dest.costFood || '$35 – $70 / day',
        transit: dest.costTransit || '$10 – $30 / day',
        pointsVal: pointsPlay
      },
      signatureHighlights: highlights,
      coordinates: coords
    }
  };
}

// 5 Supported Corridors Mapping (23 Global Hubs)
const HUB_CORRIDORS = {
  JFK: 'us_east', BOS: 'us_east', ATL: 'us_east', MIA: 'us_east', EWR: 'us_east',
  ORD: 'us_central', DFW: 'us_central', DEN: 'us_central', MSP: 'us_central',
  LAX: 'us_west', SFO: 'us_west', SEA: 'us_west',
  LHR: 'europe', CDG: 'europe', AMS: 'europe', FRA: 'europe', MUC: 'europe', MAD: 'europe',
  HND: 'asia_pac', NRT: 'asia_pac', ICN: 'asia_pac', HKG: 'asia_pac', SIN: 'asia_pac', SYD: 'asia_pac', MEL: 'asia_pac'
};

function selectTopMatchesForArchetype(archetype, manifest) {
  const catalogArch = ARCHETYPE_MAPPING[archetype] || archetype;
  const hub = (manifest.originHub || 'JFK').toUpperCase();
  const corridor = HUB_CORRIDORS[hub] || manifest.corridor || 'us_east';
  const vibe = (manifest.sensoryVibe || '').toLowerCase();
  const gastronomy = (manifest.culinarySignature || '').toLowerCase();
  const lodging = (manifest.lodgingSanctuary || '').toLowerCase();
  const funding = (manifest.fundingModel || manifest.flightClassPreference || '').toLowerCase();
  const tempo = (manifest.tempo || '').toLowerCase();
  const crew = (manifest.crew || 'duo').toLowerCase();

  // Exclude native home city from international recommendations
  const hubToDestKey = {
    JFK: ['newyork'], EWR: ['newyork'], BOS: ['newyork'],
    ORD: ['chicago'],
    SFO: ['sanfrancisco'], LAX: ['sanfrancisco'],
    LHR: ['london'],
    CDG: ['paris'],
    FRA: ['munich', 'berlin'], MUC: ['munich', 'berlin'],
    HND: ['tokyo', 'kyoto'], NRT: ['tokyo', 'kyoto'],
    ICN: ['seoul'],
    HKG: ['hongkong'],
    SIN: ['singapore'],
    SYD: ['sydney', 'melbourne'],
    MEL: ['melbourne', 'sydney']
  };
  const excludedKeys = hubToDestKey[hub] || [];

  const candidates = [];
  for (const [key, d] of Object.entries(DESTINATIONS)) {
    if (excludedKeys.includes(key)) continue;

    let score = 0;
    // Primary Archetype Alignment (Baseline +100 pts)
    if (d.archetype === catalogArch) {
      score += 100;
    } else {
      score += 10;
    }

    const fullText = (d.name + ' ' + d.narrative + ' ' + d.cash + ' ' + d.points + ' ' + (d.highlights || []).join(' ')).toLowerCase();

    // Gate 3 Sensory Vibe affinities (up to +15 pts)
    if (vibe === 'maritime_cliffs' && (fullText.includes('cliff') || fullText.includes('coast') || fullText.includes('ocean') || fullText.includes('fjord') || fullText.includes('sea'))) score += 15;
    if (vibe === 'alpine_silence' && (fullText.includes('mountain') || fullText.includes('alpine') || fullText.includes('glacier') || fullText.includes('snow') || fullText.includes('peak'))) score += 15;
    if (vibe === 'ancient_stones' && (fullText.includes('ancient') || fullText.includes('baroque') || fullText.includes('temple') || fullText.includes('ruin') || fullText.includes('castle') || fullText.includes('medieval'))) score += 15;
    if (vibe === 'neon_kinetic' && (fullText.includes('transit') || fullText.includes('night') || fullText.includes('skyline') || fullText.includes('metro') || fullText.includes('urban'))) score += 15;
    if (vibe === 'sunbaked_terracotta' && (fullText.includes('sun') || fullText.includes('mediterranean') || fullText.includes('terracotta') || fullText.includes('olive') || fullText.includes('wine'))) score += 15;

    // Gate 4 Gastronomy affinities (up to +16 pts keyword + up to +12 pts curated capitals)
    if (gastronomy === 'haute_gastronomy') {
      if (fullText.includes('michelin') || fullText.includes('gastronomy') || fullText.includes('degustation') || fullText.includes('chef') || fullText.includes('tasting')) score += 16;
      if (['sansebastian', 'paris', 'tokyo', 'bordeaux', 'copenhagen', 'florence', 'newyork', 'barcelona', 'kyoto', 'lyon'].includes(key)) score += 12;
    } else if (gastronomy === 'terroir_tavernas') {
      if (fullText.includes('wine') || fullText.includes('trattoria') || fullText.includes('taverna') || fullText.includes('pintxos') || fullText.includes('tapas') || fullText.includes('cellar')) score += 16;
      if (['sansebastian', 'crete', 'porto', 'bologna', 'alentejo', 'mallorca', 'oaxaca', 'douro', 'napavalley', 'sicily', 'salta', 'istria'].includes(key)) score += 12;
    } else if (gastronomy === 'street_food') {
      if (fullText.includes('street') || fullText.includes('market') || fullText.includes('stall') || fullText.includes('noodle') || fullText.includes('skewer') || fullText.includes('chaat')) score += 16;
      if (['tokyo', 'seoul', 'taipei', 'oaxaca', 'bangkok', 'hanoi', 'singapore', 'hongkong', 'cdmx', 'osaka', 'penang', 'marrakech'].includes(key)) score += 12;
    } else if (gastronomy === 'alpine_refuge') {
      if (fullText.includes('cheese') || fullText.includes('refuge') || fullText.includes('hearty') || fullText.includes('hearth') || fullText.includes('fondue') || fullText.includes('stew')) score += 16;
      if (['dolomites', 'switzerland', 'banff', 'munich', 'innsbruck', 'norway', 'patagonia', 'alaska'].includes(key)) score += 12;
    }

    // Gate 2 Dynamic Routing & Repositioning Affinities
    const region = d.region || '';
    if (corridor === 'us_west') {
      // US West prioritizes Transpacific gateways, Oceania, and Western/Pacific Americas
      if (region === 'Asia/Pacific') score += 28;
      if (['alaska', 'vancouver', 'banff', 'sayulita', 'costarica'].includes(key)) score += 22;
      if (region === 'Europe/Med' && ['iceland', 'norway', 'london', 'amsterdam', 'paris'].includes(key)) score += 12;
      // SEA direct nonstops (Osaka KIX, Tahiti PPT, Tokyo, Seoul)
      if (hub === 'SEA' && ['osaka', 'tahiti', 'tokyo', 'seoul'].includes(key)) score += 18;
      // SFO / LAX transpacific powerhouses
      if (['SFO', 'LAX'].includes(hub) && ['tokyo', 'kyoto', 'taipei', 'seoul', 'singapore', 'sydney', 'melbourne', 'bali'].includes(key)) score += 15;
    } else if (corridor === 'us_east') {
      // US East powers high-frequency transatlantic sprints, Caribbean hops, and direct Middle East / Africa
      if (region === 'Europe/Med') score += 24;
      if (region === 'Americas/Caribbean' && ['puertorico', 'aruba', 'curacao', 'turks', 'stlucia', 'cartagena', 'guatemala', 'montreal'].includes(key)) score += 24;
      if (region === 'Middle East/Africa') score += 14;
      // BOS shortest transatlantic hops
      if (hub === 'BOS' && ['azores', 'dublin', 'london', 'paris', 'lisbon', 'edinburgh', 'iceland'].includes(key)) score += 16;
      // MIA Caribbean & Latin American fortress + Iberia
      if (hub === 'MIA' && (region === 'Americas/Caribbean' || ['madrid', 'seville', 'sansebastian', 'mallorca', 'lisbon'].includes(key))) score += 22;
      // ATL SkyTeam European & Latin gateway
      if (hub === 'ATL' && ['paris', 'amsterdam', 'rome', 'costarica', 'peru', 'puertorico'].includes(key)) score += 14;
      // JFK Global flagship transatlantic
      if (hub === 'JFK' && ['paris', 'london', 'rome', 'milan', 'barcelona', 'tokyo'].includes(key)) score += 14;
    } else if (corridor === 'us_central') {
      // US Central balances Star Alliance & Oneworld fortresses to Latin America, Europe, and Asia
      if (region === 'Americas/Caribbean') score += 26;
      if (region === 'Europe/Med') score += 18;
      if (region === 'Asia/Pacific') score += 14;
      // DFW American Airlines Oneworld fortress
      if (hub === 'DFW' && ['buenosaires', 'santiago', 'salta', 'peru', 'oaxaca', 'cdmx', 'sayulita', 'belize', 'madrid', 'tokyo'].includes(key)) score += 18;
      // ORD Dual fortress hub
      if (hub === 'ORD' && ['london', 'paris', 'frankfurt', 'tokyo', 'dublin', 'peru', 'belize', 'costarica'].includes(key)) score += 16;
      // DEN United Star Alliance hub
      if (hub === 'DEN' && ['banff', 'vancouver', 'costarica', 'tokyo', 'munich', 'iceland', 'jacksonhole'].includes(key)) score += 18;
      // MSP Delta SkyTeam fortress
      if (hub === 'MSP' && ['amsterdam', 'paris', 'seoul', 'iceland', 'london', 'puertorico'].includes(key)) score += 16;
    } else if (corridor === 'europe') {
      // Europe unlocks single-hop Mediterranean sanctuaries, North Africa, and Central Asia / Caucasus
      if (region === 'Europe/Med') score += 26;
      if (region === 'Middle East/Africa' && ['morocco', 'egypt', 'jordan', 'tbilisi', 'kakheti', 'dubai', 'seychelles'].includes(key)) score += 24;
      if (region === 'Americas/Caribbean') score += 12;
      if (region === 'Asia/Pacific') score += 10;
      // MAD Iberian gateway
      if (hub === 'MAD' && (['mallorca', 'porto', 'azores', 'alentejo', 'buenosaires', 'santiago'].includes(key) || region === 'Americas/Caribbean')) score += 18;
      // FRA / MUC Central European & Alpine / Caucasus gateways
      if (['FRA', 'MUC'].includes(hub) && ['tbilisi', 'kakheti', 'slovenia', 'istria', 'dolomites', 'croatia', 'switzerland'].includes(key)) score += 18;
      // LHR British Airways / Virgin Atlantic
      if (hub === 'LHR' && ['edinburgh', 'cornwall', 'malta', 'capetown', 'dubai', 'newyork'].includes(key)) score += 14;
    } else if (corridor === 'asia_pac') {
      // Asia & Pacific surfaces Southeast Asian retreats, East Asian cultural treasures, and Oceania
      if (region === 'Asia/Pacific') score += 30;
      if (region === 'Middle East/Africa' && ['maldives', 'seychelles', 'dubai'].includes(key)) score += 20;
      if (region === 'Europe/Med') score += 10;
      if (region === 'Americas/Caribbean') score += 8;
      // HND / ICN East Asian gateways
      if (['HND', 'ICN'].includes(hub) && ['sapporo', 'busan', 'osaka', 'taipei', 'hongkong', 'thailand', 'bali', 'vietnam'].includes(key)) score += 18;
      // SIN Southeast Asian hub
      if (hub === 'SIN' && ['bali', 'komodo', 'phuket', 'thailand', 'halong', 'hanoi', 'malaysia', 'maldives'].includes(key)) score += 18;
      // SYD / MEL Transpacific & South Pacific hub
      if (['SYD', 'MEL'].includes(hub) && ['newzealand', 'tahiti', 'bali', 'tokyo', 'singapore', 'phuket'].includes(key)) score += 18;
    }

    // Gate 1 Travel Party (Crew) Soft Affinity Scoring (+10 to +26 pts)
    if (crew === 'family') {
      if (fullText.includes('family') || fullText.includes('villa') || fullText.includes('resort') || fullText.includes('beach') || fullText.includes('calm') || fullText.includes('bungalow') || fullText.includes('apartment') || fullText.includes('spacious')) {
        score += 14;
      }
      if (['costarica', 'banff', 'mallorca', 'hawaii', 'puertorico', 'aruba', 'curacao', 'crete', 'alaska', 'vancouver', 'lakecomo', 'london', 'tokyo', 'singapore', 'portugal', 'lisbon', 'valencia', 'edinburgh'].includes(key)) {
        score += 12;
      }
      if (fullText.includes('nightlife') || fullText.includes('backcountry') || fullText.includes('party') || fullText.includes('clubbing')) {
        score -= 8;
      }
    } else if (crew === 'solo') {
      if (fullText.includes('walkable') || fullText.includes('metro') || fullText.includes('transit') || fullText.includes('street food') || fullText.includes('counter') || fullText.includes('flâneur') || fullText.includes('wander') || fullText.includes('cafe')) {
        score += 14;
      }
      if (['kyoto', 'tokyo', 'seoul', 'taipei', 'berlin', 'oaxaca', 'tbilisi', 'edinburgh', 'cdmx', 'montreal', 'porto', 'bologna', 'madrid', 'budapest', 'osaka', 'lisbon', 'amsterdam'].includes(key)) {
        score += 12;
      }
    } else if (crew === 'inner_circle') {
      if (fullText.includes('charter') || fullText.includes('boat') || fullText.includes('wine') || fullText.includes('taverna') || fullText.includes('tapas') || fullText.includes('pintxos') || fullText.includes('communal') || fullText.includes('estate') || fullText.includes('villa')) {
        score += 14;
      }
      if (['sansebastian', 'crete', 'split', 'alentejo', 'salta', 'mallorca', 'cartagena', 'sayulita', 'oaxaca', 'croatia', 'istria', 'douro', 'napavalley', 'barcelona', 'medellin', 'bordeaux'].includes(key)) {
        score += 12;
      }
    } else if (crew === 'duo') {
      if (fullText.includes('intimate') || fullText.includes('boutique') || fullText.includes('romantic') || fullText.includes('terrace') || fullText.includes('balcony') || fullText.includes('sunset') || fullText.includes('quiet') || fullText.includes('pousada') || fullText.includes('candlelit')) {
        score += 14;
      }
      if (['kefalonia', 'lakecomo', 'amalfi', 'paris', 'bruges', 'kyoto', 'mallorca', 'azores', 'moorea', 'tahiti', 'santorini', 'florence', 'vienna', 'lucerne', 'cinqueterre'].includes(key)) {
        score += 12;
      }
    }

    // Gate 5 Lodging Sanctuary Affinities (+14 pts keyword + +12 pts curated properties)
    if (lodging === 'historic_ryokans') {
      if (fullText.includes('ryokan') || fullText.includes('onsen') || fullText.includes('tatami') || fullText.includes('machiya') || fullText.includes('cedar') || fullText.includes('zen') || fullText.includes('cypress')) {
        score += 14;
      }
      if (['kyoto', 'tokyo', 'sapporo', 'osaka', 'taipei', 'hakone'].includes(key)) {
        score += 12;
      }
    } else if (lodging === 'cliffside_cabins') {
      if (fullText.includes('cabin') || fullText.includes('rorbuer') || fullText.includes('secluded') || fullText.includes('fjord') || fullText.includes('chalet') || fullText.includes('lodge') || fullText.includes('sauna')) {
        score += 14;
      }
      if (['norway', 'iceland', 'patagonia', 'alaska', 'banff', 'faroe', 'dolomites', 'switzerland', 'newzealand'].includes(key)) {
        score += 12;
      }
    } else if (lodging === 'boutique_heritage') {
      if (fullText.includes('heritage') || fullText.includes('palace') || fullText.includes('manor') || fullText.includes('historic') || fullText.includes('courtyard') || fullText.includes('pousada') || fullText.includes('villa') || fullText.includes('belle époque')) {
        score += 14;
      }
      if (['sansebastian', 'florence', 'vienna', 'lisbon', 'oaxaca', 'paris', 'edinburgh', 'cartagena', 'porto', 'bordeaux', 'bruges', 'budapest'].includes(key)) {
        score += 12;
      }
    } else if (lodging === 'points_sweetspot') {
      if (fullText.includes('hyatt') || fullText.includes('slh') || fullText.includes('sweet spot') || fullText.includes('points') || fullText.includes('arbitrage') || fullText.includes('luxury') || fullText.includes('resort')) {
        score += 14;
      }
      if (['lakecomo', 'tokyo', 'mallorca', 'paris', 'bali', 'maldives', 'santorini', 'hawaii', 'amalfi', 'moorea', 'tahiti', 'dubai'].includes(key)) {
        score += 12;
      }
    }

    // Gate 6 Flight Arsenal / Funding Model Affinities (+10 to +12 pts)
    if (funding === 'transferable_points') {
      if (fullText.includes('avios') || fullText.includes('aeroplan') || fullText.includes('flying blue') || fullText.includes('transfer') || fullText.includes('partner') || fullText.includes('1:1') || fullText.includes('sweet spot')) {
        score += 12;
      }
      if (['madrid', 'paris', 'london', 'tokyo', 'frankfurt', 'dubai', 'singapore', 'doha', 'amsterdam'].includes(key)) {
        score += 10;
      }
    } else if (funding === 'cash_connoisseur') {
      if (fullText.includes('budget') || fullText.includes('value') || fullText.includes('affordable') || fullText.includes('cash') || fullText.includes('purchasing power') || fullText.includes('$30') || fullText.includes('$40') || fullText.includes('$50')) {
        score += 12;
      }
      if (['oaxaca', 'porto', 'tbilisi', 'vietnam', 'budapest', 'bali', 'split', 'cartagena', 'montreal', 'lisbon', 'buenosaires', 'santiago'].includes(key)) {
        score += 10;
      }
    } else if (funding === 'mixed_hybrid') {
      score += 8;
    }

    // Gate 7 Expedition Tempo Affinities (+10 to +12 pts)
    if (tempo === 'high_velocity') {
      if (fullText.includes('metro') || fullText.includes('transit') || fullText.includes('trail') || fullText.includes('hiking') || fullText.includes('climb') || fullText.includes('dense') || fullText.includes('adventure') || fullText.includes('rapid')) {
        score += 12;
      }
      if (['tokyo', 'london', 'paris', 'newyork', 'berlin', 'seoul', 'dolomites', 'banff', 'switzerland', 'iceland', 'hongkong'].includes(key)) {
        score += 10;
      }
    } else if (tempo === 'dolce_far_niente') {
      if (fullText.includes('unhurried') || fullText.includes('slow') || fullText.includes('quiet') || fullText.includes('terrace') || fullText.includes('cafe') || fullText.includes('relax') || fullText.includes('wine') || fullText.includes('mediterranean') || fullText.includes('coastal')) {
        score += 12;
      }
      if (['mallorca', 'lakecomo', 'amalfi', 'kefalonia', 'azores', 'crete', 'alentejo', 'sansebastian', 'tahiti', 'moorea', 'cornwall', 'cinqueterre'].includes(key)) {
        score += 10;
      }
    } else if (tempo === 'balanced_curated') {
      score += 8;
    }

    candidates.push({ key, dest: d, score });
  }

  candidates.sort((a, b) => b.score - a.score);
  return candidates.slice(0, 3).map(c => ({ key: c.key, dest: c.dest }));
}

// System Instruction enforcing strict Cartographer rules
const SYSTEM_INSTRUCTION = `You are The Lead Route Strategist of FindYourPassport (findyourpassport.com).
Analyze the traveler's 7-gate manifest to identify their travel archetype and recommend their top 3 curated global destination matches.

TRAVEL ARCHETYPES:
- The Epicurean Strategist (Pursuer of terroir, regional craft, and unhurried dining rituals)
- The Alpine Minimalist (Seeker of high-altitude solitude, granite ridgelines, and crisp mountain passes)
- The Architectural Flâneur (Collector of quiet courtyards, rain-slicked cobblestones, and deep cultural memory)
- The Metro Cartographer (Conductor of high-frequency transit, midnight dining, and cutting-edge design)
- The Meridian Navigator (Navigator of oceanic headlands, coastal swells, and raw geographic frontiers)

CRITICAL RULES & STRICT CONSTRAINTS:
1. Candidate Keys: You MUST pick the destKey for each of the top 3 matches strictly from our master destination catalog keys:
[${CANDIDATE_KEYS.join(', ')}]
2. Alliances: Always spell and capitalize the alliance as "Oneworld" (NEVER "OneWorld" or "ONEWORLD"). Use "Star Alliance" and "SkyTeam" accurately.
3. Origin Hub Weighting & Alliance Hub Realities:
   - 5 Supported Corridors (23 Global Hubs):
     * US East: JFK, BOS, ATL, MIA
     * US Central: ORD, DFW, DEN, MSP
     * US West: LAX, SFO, SEA
     * Europe: LHR, CDG, AMS, FRA, MUC, MAD
     * Asia & Australia: HND, ICN, HKG, SIN, SYD, MEL
   - Korean Air & Asiana: Asiana Airlines was recently purchased by Korean Air—they are combined and represented ONLY by the SkyTeam alliance (Asiana has left Star Alliance). Award space is accessible through Delta SkyMiles or Flying Blue. Never treat Asiana as separate or Star Alliance.
   - Pacific Routes (EVA Air & STARLUX Airlines): For Pacific routes and Asian destinations, do NOT disregard EVA Air and STARLUX Airlines alongside ANA and JAL:
     * EVA Air is a premier Star Alliance carrier (bookable via Air Canada Aeroplan or United MileagePlus).
     * STARLUX Airlines is a relatively new boutique luxury carrier; it is NOT in an alliance, but has established partnerships with both Atmos Rewards (Alaska Airlines) and American Airlines.
   - Alliance Fortresses:
     * ORD (Chicago O'Hare): DUAL fortress hub for both Oneworld (American Airlines) and Star Alliance (United Airlines). For American Airlines routes, prioritize Oneworld partner award space with Atmos Rewards (Alaska Airlines) or British Airways Avios. NEVER recommend Virgin Atlantic on domestic US corridors or American Airlines routes. For United routes, prioritize Aeroplan or LifeMiles.
     * DFW, MIA: American Airlines & Oneworld mega-fortresses. Award space primarily booked via Atmos Rewards (Alaska Airlines) or Avios.
     * DEN (Denver): United Airlines (Star Alliance) fortress mega-hub. Prioritize Air Canada Aeroplan and Avianca LifeMiles partner sweet spots alongside United MileagePlus.
     * MSP (Minneapolis / St. Paul): Delta Air Lines (SkyTeam) fortress mega-hub. Prioritize Air France/KLM Flying Blue and Virgin Atlantic Flying Club partner award sweet spots to bypass dynamic SkyMiles pricing.
     * ATL: Delta Air Lines & SkyTeam mega-fortress.
     * BOS: Premier Atlantic Great Circle gateway (Delta, British Airways, JetBlue).
     * SFO: United Star Alliance transpacific powerhouse featuring EVA Air, ANA, and Singapore Airlines.
     * LAX, SEA: Pacific gateways with STARLUX, EVA Air, ANA, and cross-alliance nonstops. When originHub is SEA ONLY, prioritize Alaska Airlines' direct transpacific nonstops from SEA to Osaka/Kansai (KIX) and Papeete, Tahiti (PPT). NEVER mention SEA-KIX or SEA-PPT routes when the origin is not SEA (such as MEL, SYD, JFK, ORD, LHR, HND, etc.).
     * LHR (London Heathrow): British Airways (Oneworld flagship fortress) & Virgin Atlantic (SkyTeam base). Prioritize Avios off-peak sweet spots.
     * CDG & AMS: Air France & KLM (SkyTeam mega-fortresses). Highlight monthly Flying Blue Promo Rewards (business class sweet spots typically 60k–75k pts).
     * FRA & MUC: Lufthansa Group (Star Alliance mega-hubs). Lufthansa Miles & More (exclusive 1:1 via Rove Miles) / Aeroplan.
     * Scandinavian Corridors (ARN, BGO, OSL): SAS (SkyTeam). Prioritize SAS EuroBonus (exclusive 1:1 transfer via Rove Miles) alongside SkyTeam partner redemptions.
     * MAD (Madrid-Barajas): Iberia Oneworld fortress. Off-peak Avios sweet spots (34k–42k pts business to the Americas).
     * HND/NRT (Tokyo): ANA (Star Alliance via Virgin/Aeroplan) & JAL (Oneworld via Atmos/Avios).
     * ICN (Seoul): Korean Air (SkyTeam fortress, combined with Asiana).
     * HKG (Hong Kong): Cathay Pacific (Oneworld fortress). Asia Miles & Atmos Rewards / Avios.
     * SIN (Singapore): Singapore Airlines (Star Alliance flagship). KrisFlyer & Aeroplan.
     * SYD & MEL (Australia): Qantas (Oneworld flagship). Qantas Points, Atmos Rewards, British Airways Avios.
   - Dynamic Gate 2 Repositioning Realities (Recommendations are NOT static lists):
     * The recommended destination picks MUST dynamically respond to the departure corridor and origin hub selected in Gate 2:
       - US West (SEA, SFO, LAX): Prioritize Transpacific gateways (Asia/Pacific, Japan, Korea, Taiwan, Southeast Asia, Oceania, Tahiti) and direct northern polar routes to Europe.
       - US Central (ORD, DFW, DEN, MSP): Balance continental connectivity to Latin America/Caribbean, Europe, and Asia.
       - US East (JFK, BOS, ATL, MIA): Prioritize high-frequency transatlantic European routes, Caribbean sanctuaries, and direct Middle Eastern connectivity.
       - Europe (LHR, CDG, AMS, FRA, MUC, MAD): Unlock single-hop Mediterranean sanctuaries, North Africa, and Central Asia/Caucasus without grueling 20-hour transits.
       - Asia & Australia (HND, ICN, HKG, SIN, SYD, MEL): Surface Southeast Asian retreats, East Asian cultural centers, Oceania, and Indian Ocean archipelagos.
     * While an iconic anchor destination (e.g. Paris or Dolomites) may appear across multiple origins if the traveler's sensory/gastronomy profile strongly aligns, the full top 3 destination picks and their ranking MUST distinctly reflect the departure corridor and origin hub.
4. Audited Points Transfer Rules & Neutral Geography:
   - Only recommend 1:1 transferable credit card currencies: Amex Membership Rewards, Chase Ultimate Rewards, Citi ThankYou, Capital One Miles, Bilt Rewards, and Rove Miles.
   - Detail audited partner sweet spots:
     * Bilt Rewards: 1:1 transfer partner with JetBlue TrueBlue (exceptional for Mint suites, Caribbean, and European routes) and Alaska Airlines (Atmos Rewards), alongside Air France/KLM Flying Blue, Avianca LifeMiles, British Airways Avios, Virgin Atlantic, and World of Hyatt.
     * Lufthansa Miles & More (exclusive 1:1 transfer via Rove Miles): Direct access to Lufthansa, SWISS, and Austrian premium cabins (including First Class) without Star Alliance partner blackout windows.
     * SAS EuroBonus (exclusive 1:1 transfer via Rove Miles, SkyTeam): Direct nonstop access to Scandinavian hubs (Stockholm ARN, Oslo OSL, Bergen BGO) and SkyTeam inventory.
     * Atmos Rewards (Alaska Airlines) & British Airways Avios: Best partner award availability for American Airlines (Oneworld) routes and STARLUX Airlines. When originHub is SEA ONLY, highlight Alaska's direct transpacific nonstops (SEA-KIX, SEA-PPT). Never mention SEA routes for other origins.
     * Air France/KLM Flying Blue promo rewards: Dynamic ranges with business class sweet spots typically from 60k–75k pts, and economy from 15k–25k miles.
     * British Airways/Iberia Avios: Distance-based off-peak sweet spots (typically 34k–42k partner business) and Oneworld domestic redemptions.
     * Virgin Atlantic Flying Club: Strictly for partner premium cabins on long-haul routes (e.g. ANA business awards at 45k–55k or London flights)—DO NOT recommend for domestic US corridors or American Airlines routes.
     * Avianca LifeMiles or Air Canada Aeroplan: Star Alliance routes (including EVA Air and Lufthansa Group) without carrier surcharges.
    - Lodging Architecture (stayStyle) MUST STRICTLY describe housing and accommodations (boutique hotels, traditional machiya townhouses, riads, hillside cabins, apartments, ryokans). stayStyle must NEVER contain flight routes, transit connections, airline names, or departure airports (e.g. NEVER mention Alaska Airlines, nonstops from SEA, or flights). Housing options only.
    - Route & Award Strategy (flightSecret / pointsPlay): Always tailor specifically to the user's selected originHub. Never mention SEA-KIX, SEA-PPT, or Alaska Airlines Seattle nonstops unless the selected originHub is explicitly SEA.
   - Always express point requirements using realistic ranges or partner sweet-spot terminology rather than static single numbers.
   - Use neutral routing framing like "long-haul corridor" or "intercontinental route" rather than directional assumptions like "transatlantic".
5. Tone & Voice:
   - The "sortingVerdict" must be exactly two clever, incisive, editorial sentences articulating the traveler's core aesthetic philosophy and ideal travel rhythm. Keep the voice sharp, sophisticated, and discerning—avoiding whimsical fantasy tropes, mystical destiny declarations, or theatrical melodrama.
6. Provide realistic 6-month fare projections starting from the next upcoming month, identifying the single best "LOW DEAL" month with isLowDeal: true.
7. For dossier.bestTimesDetail, formulate a sharp 1 to 2 sentence explainer in the Seasonal Intelligence section that explicitly begins with or reinforces the best times of the year (specifically the months) that are best to visit (e.g., 'Best Window: May – October. Mild sea breezes, calm waters, and unhurried local harvest tavernas.').
8. Return STRICT JSON conforming to the schema.`;

const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    assignedArchetype: { type: "STRING" },
    archetypeTitle: { type: "STRING" },
    archetypeSubtitle: { type: "STRING" },
    sortingVerdict: { type: "STRING" },
    recommendedRouting: { type: "STRING" },
    topMatches: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          destKey: { type: "STRING" },
          destinationName: { type: "STRING" },
          country: { type: "STRING" },
          airportCode: { type: "STRING" },
          rank: { type: "INTEGER" },
          matchReason: { type: "STRING" },
          stayStyle: { type: "STRING" },
          flightSecret: { type: "STRING" },
          bestWindow: { type: "STRING" },
          budgetVibe: { type: "STRING" },
          primaryRoute: { type: "STRING" },
          pointsPlay: { type: "STRING" },
          fareProjection: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                month: { type: "STRING" },
                price: { type: "INTEGER" },
                isLowDeal: { type: "BOOLEAN" }
              },
              required: ["month", "price", "isLowDeal"]
            }
          },
          dossier: {
            type: "OBJECT",
            properties: {
              overview: { type: "STRING" },
              bestTimesDetail: { type: "STRING" },
              costBreakdown: {
                type: "OBJECT",
                properties: {
                  lodging: { type: "STRING" },
                  dining: { type: "STRING" },
                  transit: { type: "STRING" },
                  pointsVal: { type: "STRING" }
                },
                required: ["lodging", "dining", "transit", "pointsVal"]
              },
              signatureHighlights: {
                type: "ARRAY",
                items: {
                  type: "OBJECT",
                  properties: {
                    title: { type: "STRING" },
                    description: { type: "STRING" },
                    icon: { type: "STRING" }
                  },
                  required: ["title", "description", "icon"]
                }
              },
              coordinates: {
                type: "OBJECT",
                properties: {
                  lat: { type: "NUMBER" },
                  lng: { type: "NUMBER" }
                },
                required: ["lat", "lng"]
              }
            },
            required: ["overview", "bestTimesDetail", "costBreakdown", "signatureHighlights", "coordinates"]
          }
        },
        required: [
          "destKey", "destinationName", "country", "airportCode", "rank",
          "matchReason", "stayStyle", "flightSecret", "bestWindow",
          "budgetVibe", "primaryRoute", "pointsPlay", "fareProjection", "dossier"
        ]
      }
    }
  },
  required: ["assignedArchetype", "archetypeTitle", "archetypeSubtitle", "sortingVerdict", "recommendedRouting", "topMatches"]
};

// Deterministic Audited Cartographer Knowledge Engine (for offline resilience and zero-downtime fallback)
function getDeterministicCartographerVerdict(manifest) {
  const hub = (manifest.originHub || 'JFK').toUpperCase();
  const vibe = manifest.sensoryVibe || 'maritime_cliffs';
  const gastronomy = manifest.culinarySignature || 'terroir_tavernas';
  const tempo = manifest.tempo || 'balanced_curated';

  // Determine Hub Alliance alignment across all 21 global departure hubs
  let defaultAlliance = 'Star Alliance';
  let primaryPartner = 'Air Canada Aeroplan / United';

  if (['DFW', 'MIA', 'CLT', 'PHL', 'LHR', 'MAD', 'HKG', 'SYD', 'MEL'].includes(hub)) {
    defaultAlliance = 'Oneworld';
    primaryPartner = {
      LHR: 'British Airways Avios / Virgin Atlantic',
      MAD: 'Iberia Avios / Oneworld',
      HKG: 'Cathay Pacific Asia Miles / Atmos Rewards',
      SYD: 'Qantas Frequent Flyer / Atmos Rewards',
      MEL: 'Qantas Frequent Flyer / Atmos Rewards'
    }[hub] || 'British Airways Avios / American Airlines';
  } else if (hub === 'ORD') {
    defaultAlliance = 'Oneworld & Star Alliance Dual Hub';
    primaryPartner = 'Atmos Rewards / Avios (American) & Aeroplan (United)';
  } else if (hub === 'DEN') {
    defaultAlliance = 'Star Alliance';
    primaryPartner = 'United MileagePlus / Air Canada Aeroplan & LifeMiles';
  } else if (['ATL', 'DTW', 'MSP', 'SLC', 'CDG', 'AMS', 'ICN'].includes(hub)) {
    defaultAlliance = 'SkyTeam';
    primaryPartner = {
      MSP: 'Delta SkyMiles / Air France Flying Blue',
      CDG: 'Air France/KLM Flying Blue',
      AMS: 'Air France/KLM Flying Blue',
      ICN: 'Korean Air SkyTeam / Delta SkyMiles'
    }[hub] || 'Air France/KLM Flying Blue / Delta';
  } else if (['FRA', 'MUC', 'SIN'].includes(hub)) {
    defaultAlliance = 'Star Alliance';
    primaryPartner = hub === 'SIN' ? 'Singapore Airlines KrisFlyer / Aeroplan' : 'Lufthansa Miles & More (Rove 1:1) / Aeroplan';
  } else if (hub === 'HND') {
    defaultAlliance = 'Star Alliance / Oneworld';
    primaryPartner = 'ANA (Virgin Atlantic / Aeroplan) & JAL (Atmos / Avios)';
  } else if (['LAX', 'SFO', 'SEA'].includes(hub)) {
    defaultAlliance = 'Pacific Rim Alliances & Boutique Partners';
    primaryPartner = 'EVA Air (Aeroplan), STARLUX (Atmos/American), ANA & Delta';
  } else if (hub === 'BOS') {
    defaultAlliance = 'SkyTeam & Oneworld Atlantic Gateway';
    primaryPartner = 'Delta SkyMiles, Flying Blue, & British Airways Avios';
  }

  // Archetype logic based on inputs
  let archetype = 'The Epicurean Strategist';
  if (vibe === 'alpine_silence') {
    archetype = 'The Alpine Minimalist';
  } else if (vibe === 'ancient_stones') {
    archetype = 'The Architectural Flâneur';
  } else if (vibe === 'neon_kinetic' || gastronomy === 'street_food') {
    archetype = 'The Metro Cartographer';
  } else if (vibe === 'maritime_cliffs') {
    archetype = 'The Meridian Navigator';
  }

  const meta = ARCHETYPE_METADATA[archetype];
  const title = meta.title;
  const subtitle = meta.subtitle;
  const verdict = meta.verdict;

  // Retrieve top 3 curated picks from the master destination catalog
  const picks = selectTopMatchesForArchetype(archetype, manifest);
  const topMatches = picks.map((p, idx) => hydrateDestination(p.key, p.dest, manifest, idx + 1));

  return {
    assignedArchetype: archetype,
    archetypeTitle: title,
    archetypeSubtitle: subtitle,
    sortingVerdict: verdict,
    recommendedRouting: `${hub} departure prioritized via ${defaultAlliance} with ${primaryPartner} partner programs.`,
    topMatches
  };
}

// Call Google AI Studio Gemini API with model fallback
async function callGeminiApi(manifest, userKey = '') {
  const activeKey = userKey || GEMINI_API_KEY;
  if (!activeKey) {
    console.log('[FindYourPassport] No Gemini API key provided. Using autonomous Cartographer engine with master destination catalog.');
    return getDeterministicCartographerVerdict(manifest);
  }

  const prompt = `Traveler 7-Gate Manifest:
- Traveling Crew: ${manifest.crew || 'duo'}
- Origin Hub: ${manifest.originHub || 'JFK'}
- Sensory Vibe: ${manifest.sensoryVibe || 'maritime_cliffs'}
- Culinary Signature: ${manifest.culinarySignature || 'terroir_tavernas'}
- Lodging Sanctuary: ${manifest.lodgingSanctuary || 'boutique_heritage'}
- Funding Model: ${manifest.fundingModel || 'transferable_points'}
- Expedition Tempo: ${manifest.tempo || 'balanced_curated'}

Candidate Keys: Pick strictly from: [${CANDIDATE_KEYS.join(', ')}].
Assign one of our 5 archetypes (The Epicurean Strategist, The Alpine Minimalist, The Architectural Flâneur, The Metro Cartographer, The Meridian Navigator), write a 2-sentence clever editorial sorting verdict that cuts directly to their travel philosophy, and deliver the Top 3 destination matches with destKey strictly matching our master catalog.`;

  const models = ['gemini-3.8-flash', 'gemini-3.5-flash-lite'];

  for (const model of models) {
    try {
      console.log(`[FindYourPassport] Calling Gemini model: ${model}...`);
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${activeKey}`;
      
      const requestBody = {
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }]
          }
        ],
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: RESPONSE_SCHEMA,
          temperature: 0.7
        }
      };

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
        signal: AbortSignal.timeout(7000)
      });

      if (!res.ok) {
        const errText = await res.text();
        console.warn(`[FindYourPassport] ${model} returned error status ${res.status}: ${errText}`);
        continue; // Try fallback model
      }

      const data = await res.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) {
        console.warn(`[FindYourPassport] ${model} returned empty response parts.`);
        continue;
      }

      const parsed = JSON.parse(rawText);
      if (parsed && parsed.topMatches && parsed.topMatches.length > 0) {
        console.log(`[FindYourPassport] Successfully generated live verdict via ${model}`);

        // Normalize assigned archetype and metadata
        const normalizedArch = normalizeArchetype(parsed.assignedArchetype);
        parsed.assignedArchetype = normalizedArch;
        parsed.archetypeTitle = ARCHETYPE_METADATA[normalizedArch]?.title || normalizedArch;
        parsed.archetypeSubtitle = ARCHETYPE_METADATA[normalizedArch]?.subtitle || 'Precision Expedition';

        // Hydrate matches using the exact master 80 destination catalog
        parsed.topMatches = parsed.topMatches.map((m, idx) => {
          const rawKey = m.destKey || '';
          const key = KEY_ALIASES[rawKey] || rawKey;
          const masterDest = DESTINATIONS[key];
          if (masterDest) {
            return hydrateDestination(key, masterDest, manifest, idx + 1, m);
          }
          // If returned key was not in catalog, fallback to top match for archetype
          const fallbackPick = selectTopMatchesForArchetype(normalizedArch, manifest)[idx];
          if (fallbackPick) {
            return hydrateDestination(fallbackPick.key, fallbackPick.dest, manifest, idx + 1, m);
          }
          return m;
        });

        return parsed;
      }
    } catch (err) {
      console.warn(`[FindYourPassport] Failed calling ${model}:`, err.message);
    }
  }

  console.log('[FindYourPassport] All Gemini models failed or timed out. Falling back to autonomous Cartographer engine with master destination catalog.');
  return getDeterministicCartographerVerdict(manifest);
}

// MIME types dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

// Data Directory & Looker Studio Analytics Persistence
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const USERS_FILE = path.join(DATA_DIR, 'users.json');
const FAVORITES_FILE = path.join(DATA_DIR, 'favorites.json');
const ANALYTICS_EVENTS_FILE = path.join(DATA_DIR, 'analytics_events.jsonl');
const LOOKER_CSV_FILE = path.join(DATA_DIR, 'analytics_looker_studio.csv');

function readJsonFile(filePath, defaultVal = {}) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content || '{}');
    }
  } catch (err) {
    console.error(`[FindYourPassport] Error reading ${filePath}:`, err.message);
  }
  return defaultVal;
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`[FindYourPassport] Error writing ${filePath}:`, err.message);
  }
}

function escapeCsvField(val) {
  if (val == null) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const LOOKER_CSV_HEADER = [
  'event_id', 'event_date', 'event_time', 'timestamp',
  'session_id', 'user_id', 'is_authenticated', 'event_type',
  'origin_hub', 'origin_corridor', 'user_archetype',
  'destination_code', 'destination_name', 'destination_region',
  'match_rank', 'match_score', 'is_favorited',
  'gate_crew', 'gate_vibe', 'gate_gastronomy', 'gate_lodging', 'gate_arsenal', 'gate_tempo',
  'latitude', 'longitude', 'base_fare'
].join(',');

function initLookerStudioDataset() {
  const needsHeader = !fs.existsSync(LOOKER_CSV_FILE) || fs.statSync(LOOKER_CSV_FILE).size < 100;
  if (!needsHeader) return;

  console.log('[FindYourPassport] Initializing Looker Studio dataset with baseline historical trends...');
  let csvContent = LOOKER_CSV_HEADER + '\n';

  // Seed 100 diverse historical deliberation sessions across the past 30 days
  const now = Date.now();
  const hubs = [
    { hub: 'JFK', corridor: 'US_EAST' }, { hub: 'BOS', corridor: 'US_EAST' },
    { hub: 'ORD', corridor: 'US_CENTRAL' }, { hub: 'DFW', corridor: 'US_CENTRAL' },
    { hub: 'DEN', corridor: 'US_CENTRAL' }, { hub: 'MSP', corridor: 'US_CENTRAL' },
    { hub: 'SEA', corridor: 'US_WEST' }, { hub: 'SFO', corridor: 'US_WEST' }, { hub: 'LAX', corridor: 'US_WEST' },
    { hub: 'LHR', corridor: 'EUROPE' }, { hub: 'CDG', corridor: 'EUROPE' }, { hub: 'FRA', corridor: 'EUROPE' },
    { hub: 'HND', corridor: 'ASIA_PACIFIC' }, { hub: 'SIN', corridor: 'ASIA_PACIFIC' }, { hub: 'SYD', corridor: 'ASIA_PACIFIC' }
  ];

  const archetypes = [
    'The Epicurean Strategist', 'The Alpine Minimalist',
    'The Architectural Flâneur', 'The Metro Cartographer', 'The Meridian Navigator'
  ];

  const destKeys = Object.keys(DESTINATIONS);
  if (destKeys.length > 0) {
    for (let i = 0; i < 90; i++) {
      const daysAgo = Math.floor(Math.random() * 30);
      const sessionDate = new Date(now - daysAgo * 86400000 - Math.floor(Math.random() * 86400000));
      const dateStr = sessionDate.toISOString().split('T')[0];
      const timeStr = sessionDate.toTimeString().split(' ')[0];
      const isoStr = sessionDate.toISOString();
      const sessionId = `seed_sess_${i + 1000}`;
      const isAuth = Math.random() > 0.45;
      const userId = isAuth ? `traveler_${(i % 18) + 1}@gmail.com` : 'anonymous';

      const hubChoice = hubs[Math.floor(Math.random() * hubs.length)];
      const archetypeChoice = archetypes[Math.floor(Math.random() * archetypes.length)];

      // Pick 3 random destinations
      const shuffled = [...destKeys].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      const isFavIdx = Math.random() > 0.4 ? Math.floor(Math.random() * 3) : -1;

      selected.forEach((key, rankIdx) => {
        const dest = DESTINATIONS[key];
        if (!dest) return;
        const row = [
          `evt_seed_${i}_r${rankIdx + 1}`,
          dateStr,
          timeStr,
          isoStr,
          sessionId,
          userId,
          isAuth ? 'true' : 'false',
          'destination_match',
          hubChoice.hub,
          hubChoice.corridor,
          archetypeChoice,
          dest.code || 'EXP',
          dest.name || key,
          dest.region || 'Global',
          rankIdx + 1,
          95 - rankIdx * 4 + Math.floor(Math.random() * 3),
          rankIdx === isFavIdx ? 1 : 0,
          'Duo / Couple',
          archetypeChoice,
          'Heritage Taverns',
          'Boutique Historic',
          'Chase / Hyatt',
          'Curated Immersion',
          dest.coordinates?.lat || 0,
          dest.coordinates?.lng || 0,
          dest.baseFare || 650
        ].map(escapeCsvField).join(',');
        csvContent += row + '\n';
      });
    }
  }

  fs.writeFileSync(LOOKER_CSV_FILE, csvContent, 'utf8');
  console.log('[FindYourPassport] Looker Studio baseline dataset seeded successfully.');
}

initLookerStudioDataset();

function appendLookerEvent(event) {
  try {
    // 1. Append JSONL
    fs.appendFileSync(ANALYTICS_EVENTS_FILE, JSON.stringify(event) + '\n', 'utf8');

    // 2. Append CSV Rows (one row per destination match, or one row for events like favorite_saved)
    const dateObj = new Date(event.timestamp || Date.now());
    const dateStr = dateObj.toISOString().split('T')[0];
    const timeStr = dateObj.toTimeString().split(' ')[0];
    const isoStr = dateObj.toISOString();

    let rowsToAppend = '';

    if (event.eventType === 'quiz_completion' && Array.isArray(event.matches)) {
      event.matches.forEach((m, idx) => {
        const dest = (m.destKey && DESTINATIONS[m.destKey]) || {};
        const row = [
          `${event.eventId || 'evt_' + Date.now()}_m${idx + 1}`,
          dateStr,
          timeStr,
          isoStr,
          event.sessionId || 'anonymous',
          event.userId || 'anonymous',
          event.isAuthenticated ? 'true' : 'false',
          'destination_match',
          event.originHub || 'JFK',
          event.originCorridor || 'US_EAST',
          event.userArchetype || 'The Epicurean Strategist',
          m.airportCode || dest.code || 'EXP',
          m.destinationName || dest.name || 'Unknown',
          dest.region || m.region || 'Global',
          m.rank || idx + 1,
          m.matchScore || (96 - idx * 4),
          m.isFavorited ? 1 : 0,
          event.manifest?.travelParty || 'Solo',
          event.manifest?.atmosphere || 'Gastronomy',
          event.manifest?.culinarySignature || 'Local',
          event.manifest?.lodgingType || 'Boutique',
          event.manifest?.pointsStrategy || 'Chase',
          event.manifest?.tempo || 'Balanced',
          dest.coordinates?.lat || 0,
          dest.coordinates?.lng || 0,
          dest.baseFare || 650
        ].map(escapeCsvField).join(',');
        rowsToAppend += row + '\n';
      });
    } else {
      // Single event row (e.g. favorite_saved, favorite_removed, user_login)
      const dest = (event.destination?.destKey && DESTINATIONS[event.destination.destKey]) || {};
      const row = [
        event.eventId || `evt_${Date.now()}`,
        dateStr,
        timeStr,
        isoStr,
        event.sessionId || 'anonymous',
        event.userId || 'anonymous',
        event.isAuthenticated ? 'true' : 'false',
        event.eventType || 'interaction',
        event.originHub || 'JFK',
        event.originCorridor || 'US_EAST',
        event.userArchetype || '',
        event.destination?.airportCode || dest.code || '',
        event.destination?.destinationName || dest.name || '',
        dest.region || '',
        event.destination?.rank || '',
        '',
        event.eventType === 'favorite_saved' ? 1 : 0,
        '', '', '', '', '', '',
        dest.coordinates?.lat || 0,
        dest.coordinates?.lng || 0,
        dest.baseFare || 0
      ].map(escapeCsvField).join(',');
      rowsToAppend += row + '\n';
    }

    if (rowsToAppend) {
      fs.appendFileSync(LOOKER_CSV_FILE, rowsToAppend, 'utf8');
    }
  } catch (err) {
    console.error('[FindYourPassport] Error appending Looker event:', err.message);
  }
}

function parseCookies(req) {
  const list = {};
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return list;
  cookieHeader.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    const name = parts[0]?.trim();
    if (!name) return;
    const value = parts.slice(1).join('=').trim();
    list[name] = decodeURIComponent(value);
  });
  return list;
}

function decodeGoogleJwt(credential) {
  try {
    const parts = String(credential || '').split('.');
    if (parts.length !== 3) return null;
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name || payload.email?.split('@')[0] || 'Traveler',
      picture: payload.picture || '',
      given_name: payload.given_name || payload.name?.split(' ')[0] || 'Traveler'
    };
  } catch {
    return null;
  }
}

function getAuthenticatedUser(req) {
  const cookies = parseCookies(req);
  const token = cookies.session_token || req.headers['authorization']?.replace(/^Bearer\s+/i, '') || req.headers['x-user-token'];
  if (!token) return null;

  const users = readJsonFile(USERS_FILE, { sessions: {}, profiles: {} });
  const email = users.sessions[token];
  if (email && users.profiles[email]) {
    const profile = users.profiles[email];
    const isAdmin = ADMIN_EMAILS.includes((profile.email || '').toLowerCase().trim());
    return { ...profile, isAdmin };
  }
  return null;
}

function isUserAdmin(req, parsedUrl) {
  const user = getAuthenticatedUser(req);
  if (user && user.isAdmin) return true;

  // Check query token fallback for Google Sheets =IMPORTDATA(".../api/analytics/export?token=...")
  const queryToken = parsedUrl ? (parsedUrl.searchParams.get('token') || parsedUrl.searchParams.get('key')) : null;
  if (queryToken) {
    const users = readJsonFile(USERS_FILE, { sessions: {}, profiles: {} });
    const email = users.sessions[queryToken];
    if (email && ADMIN_EMAILS.includes(email.toLowerCase().trim())) {
      return true;
    }
  }
  return false;
}

// HTTP Server
const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-gemini-api-key, Authorization, x-user-token, x-user-id');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Helper to read JSON request body
  const readBody = () => new Promise(resolve => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 2e6) req.destroy();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });

  // API Health Check
  if (pathname === '/api/health' && req.method === 'GET') {
    const headerKey = req.headers['x-gemini-api-key'] || '';
    const hasKey = Boolean(headerKey || GEMINI_API_KEY);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'ok',
      service: 'FindYourPassport Cartographer API',
      modelPrimary: 'gemini-3.8-flash',
      modelFallback: 'gemini-3.5-flash-lite',
      hasApiKey: hasKey,
      destinationsCount: Object.keys(DESTINATIONS).length,
      timestamp: new Date().toISOString()
    }));
    return;
  }

  // --- GOOGLE AUTH ENDPOINTS ---
  // GET /api/auth/me - Current User Session
  if (pathname === '/api/auth/me' && req.method === 'GET') {
    const user = getAuthenticatedUser(req);
    const cookies = parseCookies(req);
    const token = cookies.session_token || req.headers['authorization']?.replace(/^Bearer\s+/i, '') || req.headers['x-user-token'];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      authenticated: Boolean(user),
      user: user || null,
      token: user ? token : null
    }));
    return;
  }

  // POST /api/auth/google - Sign In with Google
  if (pathname === '/api/auth/google' && req.method === 'POST') {
    const body = await readBody();
    let user = null;

    if (body.credential) {
      user = decodeGoogleJwt(body.credential);
    } else if (body.user && body.user.email) {
      user = {
        id: body.user.id || `usr_${Date.now()}`,
        email: body.user.email,
        name: body.user.name || body.user.email.split('@')[0],
        picture: body.user.picture || '',
        given_name: body.user.given_name || (body.user.name || '').split(' ')[0] || 'Traveler'
      };
    }

    if (!user || !user.email) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Invalid Google credential or user profile' }));
      return;
    }

    // Persist user and create session
    const users = readJsonFile(USERS_FILE, { sessions: {}, profiles: {} });
    users.sessions = users.sessions || {};
    users.profiles = users.profiles || {};

    const sessionToken = `sid_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    users.profiles[user.email] = user;
    users.sessions[sessionToken] = user.email;
    writeJsonFile(USERS_FILE, users);

    // Set HTTP session cookie
    res.setHeader('Set-Cookie', `session_token=${sessionToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000`);

    // Log analytics event
    appendLookerEvent({
      eventType: 'user_login',
      userId: user.email,
      isAuthenticated: true,
      timestamp: Date.now()
    });

    const isAdmin = ADMIN_EMAILS.includes((user.email || '').toLowerCase().trim());
    const userWithAdmin = { ...user, isAdmin };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, user: userWithAdmin, token: sessionToken }));
    return;
  }

  // POST /api/auth/logout - Sign Out
  if (pathname === '/api/auth/logout' && req.method === 'POST') {
    const cookies = parseCookies(req);
    const token = cookies.session_token;
    if (token) {
      const users = readJsonFile(USERS_FILE, { sessions: {}, profiles: {} });
      if (users.sessions) {
        delete users.sessions[token];
        writeJsonFile(USERS_FILE, users);
      }
    }
    res.setHeader('Set-Cookie', 'session_token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // --- FAVORITES ENDPOINTS ---
  // GET /api/favorites - List User Favorites
  if (pathname === '/api/favorites' && req.method === 'GET') {
    const user = getAuthenticatedUser(req);
    const requestedEmail = parsedUrl.searchParams.get('userId') || parsedUrl.searchParams.get('email');
    const email = (user && user.email) || requestedEmail;

    if (!email) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ favorites: [] }));
      return;
    }

    const allFavs = readJsonFile(FAVORITES_FILE, {});
    const userFavs = allFavs[email] || [];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ favorites: userFavs }));
    return;
  }

  // POST /api/favorites - Add/Remove/Toggle Favorite
  if (pathname === '/api/favorites' && req.method === 'POST') {
    const body = await readBody();
    const user = getAuthenticatedUser(req);
    const email = (user && user.email) || body.userEmail;

    if (!email) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        success: false,
        requiresLogin: true,
        message: 'Please sign in with your Google account to save destinations.'
      }));
      return;
    }

    const allFavs = readJsonFile(FAVORITES_FILE, {});
    let userFavs = allFavs[email] || [];
    const dest = body.destination || {};
    const destKey = body.destKey || dest.destKey;

    if (!destKey) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: 'Destination key required' }));
      return;
    }

    const existingIdx = userFavs.findIndex(f => f.destKey === destKey);
    let isFavorited = false;

    if (body.action === 'remove' || (body.action === 'toggle' && existingIdx >= 0)) {
      if (existingIdx >= 0) userFavs.splice(existingIdx, 1);
      isFavorited = false;
      appendLookerEvent({
        eventType: 'favorite_removed',
        userId: email,
        isAuthenticated: true,
        destination: dest,
        timestamp: Date.now()
      });
    } else {
      // Add or toggle-add
      const destCatalog = DESTINATIONS[destKey] || {};
      const newFav = {
        destKey,
        destinationName: dest.destinationName || destCatalog.name || destKey,
        airportCode: dest.airportCode || destCatalog.code || 'EXP',
        country: dest.country || (destCatalog.name || '').split(',').slice(-1)[0]?.trim() || 'Global',
        flag: dest.flag || destCatalog.flag || '🧭',
        archetype: dest.archetype || destCatalog.archetype || 'The Epicurean Strategist',
        primaryRoute: dest.primaryRoute || 'Partner Alliance Sweet Spot',
        baseFare: destCatalog.baseFare || 650,
        savedAt: new Date().toISOString()
      };
      if (existingIdx >= 0) {
        userFavs[existingIdx] = newFav;
      } else {
        userFavs.unshift(newFav);
      }
      isFavorited = true;
      appendLookerEvent({
        eventType: 'favorite_saved',
        userId: email,
        isAuthenticated: true,
        destination: newFav,
        timestamp: Date.now()
      });
    }

    allFavs[email] = userFavs;
    writeJsonFile(FAVORITES_FILE, allFavs);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      isFavorited,
      favorites: userFavs
    }));
    return;
  }

  // --- USER ANALYTICS FOR LOOKER STUDIO ENDPOINTS ---
  // POST /api/analytics/track - Track Quiz Completion & Interaction Events
  if (pathname === '/api/analytics/track' && req.method === 'POST') {
    const body = await readBody();
    appendLookerEvent(body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // GET /api/analytics/export - Export Clean CSV for Looker Studio / Google Sheets (Admin Only)
  if (pathname === '/api/analytics/export' && (req.method === 'GET' || req.method === 'HEAD')) {
    if (!isUserAdmin(req, parsedUrl)) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Forbidden: Looker Studio analytics export is restricted to administrator accounts.' }));
      return;
    }

    if (fs.existsSync(LOOKER_CSV_FILE)) {
      const csv = fs.readFileSync(LOOKER_CSV_FILE);
      res.writeHead(200, {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="findyourpassport_looker_analytics.csv"'
      });
      if (req.method === 'HEAD') {
        res.end();
      } else {
        res.end(csv);
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/csv; charset=utf-8' });
      res.end(LOOKER_CSV_HEADER + '\n');
    }
    return;
  }

  // GET /api/analytics/summary - High-Level Analytics Trends for In-App Dashboard (Admin Only)
  if (pathname === '/api/analytics/summary' && req.method === 'GET') {
    if (!isUserAdmin(req, parsedUrl)) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Forbidden: Looker Studio analytics summary is restricted to administrator accounts.' }));
      return;
    }

    try {
      let csvContent = '';
      if (fs.existsSync(LOOKER_CSV_FILE)) {
        csvContent = fs.readFileSync(LOOKER_CSV_FILE, 'utf8');
      }
      const lines = csvContent.split('\n').filter(l => l.trim().length > 0);
      const dataRows = lines.slice(1);

      const destCounts = {};
      const archetypeCounts = {};
      const originCounts = {};
      let totalFavorites = 0;
      let totalSessions = new Set();

      dataRows.forEach(row => {
        const cols = row.split(',');
        if (cols.length < 15) return;
        const sessionId = cols[4];
        const destName = cols[12]?.replace(/^"|"$/g, '');
        const archetype = cols[10]?.replace(/^"|"$/g, '');
        const hub = cols[8]?.replace(/^"|"$/g, '');
        const isFav = cols[16] === '1';

        if (sessionId) totalSessions.add(sessionId);
        if (destName && destName !== 'Unknown') destCounts[destName] = (destCounts[destName] || 0) + 1;
        if (archetype) archetypeCounts[archetype] = (archetypeCounts[archetype] || 0) + 1;
        if (hub) originCounts[hub] = (originCounts[hub] || 0) + 1;
        if (isFav) totalFavorites++;
      });

      const topDestinations = Object.entries(destCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([name, count]) => ({ name, count, percentage: Math.round((count / (dataRows.length || 1)) * 100) }));

      const topArchetypes = Object.entries(archetypeCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([name, count]) => ({ name, count }));

      const topOrigins = Object.entries(originCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([hub, count]) => ({ hub, count }));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        totalSessions: totalSessions.size,
        totalEvents: dataRows.length,
        totalFavorites,
        topDestinations,
        topArchetypes,
        topOrigins,
        lookerStudioExportUrl: '/api/analytics/export',
        catalogSize: Object.keys(DESTINATIONS).length
      }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // API Sort Manifest Endpoint
  if (pathname === '/api/sort' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) req.destroy(); // 1MB limit
    });

    req.on('end', async () => {
      try {
        const headerKey = req.headers['x-gemini-api-key'] || '';
        const parsedBody = JSON.parse(body || '{}');
        const manifest = parsedBody.manifest || parsedBody;
        const result = await callGeminiApi(manifest, headerKey);

        // Catalog to Looker Studio analytics
        appendLookerEvent({
          eventType: 'quiz_completion',
          sessionId: parsedBody.sessionId || `sess_${Date.now()}`,
          userId: parsedBody.userId || 'anonymous',
          isAuthenticated: Boolean(parsedBody.userId && parsedBody.userId !== 'anonymous'),
          originHub: manifest.originHub || 'JFK',
          originCorridor: manifest.corridor || 'US_EAST',
          userArchetype: result.assignedArchetype || 'The Epicurean Strategist',
          manifest: manifest,
          matches: result.topMatches || [],
          timestamp: Date.now()
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (err) {
        console.error('[FindYourPassport] Error processing /api/sort, falling back to autonomous engine:', err);
        const parsedBody = JSON.parse(body || '{}');
        const manifest = parsedBody.manifest || parsedBody;
        const fallback = getDeterministicCartographerVerdict(manifest);

        // Catalog fallback to Looker Studio analytics as well
        appendLookerEvent({
          eventType: 'quiz_completion',
          sessionId: parsedBody.sessionId || `sess_${Date.now()}`,
          userId: parsedBody.userId || 'anonymous',
          isAuthenticated: Boolean(parsedBody.userId && parsedBody.userId !== 'anonymous'),
          originHub: manifest.originHub || 'JFK',
          originCorridor: manifest.corridor || 'US_EAST',
          userArchetype: fallback.assignedArchetype || 'The Epicurean Strategist',
          manifest: manifest,
          matches: fallback.topMatches || [],
          timestamp: Date.now()
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(fallback));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(PUBLIC_DIR, pathname === '/' ? 'index.html' : pathname);
  
  // Guard against directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Access Denied');
  }

  // If file doesn't exist, fallback to index.html for SPA routing
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }

  try {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🧭 FindYourPassport server running at http://localhost:${PORT}`);
  console.log(`✈ Model: gemini-3.8-flash (fallback: gemini-3.5-flash-lite) | Master Catalog: ${Object.keys(DESTINATIONS).length} destinations | API Key: ${GEMINI_API_KEY ? 'Present' : 'Not Set (Autonomous Deterministic Engine Active)'}`);
});
