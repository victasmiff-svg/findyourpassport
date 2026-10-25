/**
 * FindYourPassport - Client Application Logic
 * The Cartographer's Compass
 */

(function () {
  'use strict';

  // Manifest Gates Configuration
  const GATES = [
    {
      id: 1,
      key: 'crew',
      kicker: 'GATE 1 OF 7 · TRAVEL PARTY',
      title: 'Who shares your compass on this journey?',
      subtitle: 'Select your travel party to calibrate lodging configurations, table sizes, and itinerary flexibility.',
      altitude: '12,000 FT',
      options: [
        {
          value: 'solo',
          icon: '🧭',
          title: 'Solo Voyager',
          desc: 'Unencumbered, nimble, total spontaneous freedom to pivot on a whim.',
          tag: 'Unrestricted Range'
        },
        {
          value: 'duo',
          icon: '🥂',
          title: 'Duo / Partners',
          desc: 'Intimate, synchronized, shared discoveries and candlelit conversations.',
          tag: 'Curated Intimacy'
        },
        {
          value: 'inner_circle',
          icon: '⛵',
          title: 'Inner Circle',
          desc: 'Small close crew (3–5), communal dining, lively shared villas and boat charters.',
          tag: 'Communal Terroir'
        },
        {
          value: 'family',
          icon: '🏡',
          title: 'Family Expedition',
          desc: 'Curated pacing, multi-generational comfort, stress-free transport logistics.',
          tag: 'Seamless Comfort'
        }
      ]
    },
    {
      id: 2,
      key: 'originHub',
      kicker: 'GATE 2 OF 7 · DEPARTURE HORIZON',
      title: 'Where do your wings launch from?',
      subtitle: 'Your home hub calibrates non-stop routes, alliance fortress sweet spots, and positioning tactics.',
      altitude: '17,000 FT',
      options: [
        // US Eastern Corridor (4 Hubs)
        {
          value: 'JFK',
          icon: '🗽',
          title: 'JFK / EWR (New York Metro)',
          desc: 'Transatlantic flagship corridors, competitive long-haul routes, SkyTeam & Star Alliance bases.',
          tag: 'Global Flagship Hub',
          corridor: 'us_east'
        },
        {
          value: 'BOS',
          icon: '🦞',
          title: 'BOS (Boston Logan)',
          desc: 'Shortest US-to-Europe Great Circle hops, Delta transatlantic hub & intense European nonstops.',
          tag: 'Atlantic Hop Gateway',
          corridor: 'us_east'
        },
        {
          value: 'ATL',
          icon: '🍑',
          title: 'ATL (Atlanta Hartsfield)',
          desc: 'Delta Air Lines & SkyTeam global nerve center with extensive European and Latin connections.',
          tag: 'SkyTeam Mega-Fortress',
          corridor: 'us_east'
        },
        {
          value: 'MIA',
          icon: '🏖️',
          title: 'MIA (Miami International)',
          desc: 'American Airlines fortress & premier gateway for Iberian, European, and Latin American routes.',
          tag: 'Iberian & Latin Hub',
          corridor: 'us_east'
        },

        // US Central Corridor (4 Hubs)
        {
          value: 'ORD',
          icon: '🏙️',
          title: 'ORD (Chicago O\'Hare)',
          desc: 'Dual fortress hub for United (Star Alliance) & American (Oneworld) with Atmos and Aeroplan depth.',
          tag: 'Dual Fortress Hub',
          corridor: 'us_central'
        },
        {
          value: 'DFW',
          icon: '🤠',
          title: 'DFW (Dallas / Fort Worth)',
          desc: 'American Airlines mega-fortress & premier Oneworld departure hub for Europe, Asia, and Latin America.',
          tag: 'Oneworld Fortress',
          corridor: 'us_central'
        },
        {
          value: 'DEN',
          icon: '🏔️',
          title: 'DEN (Denver International)',
          desc: 'United Airlines Star Alliance mega-hub with deep transpacific, transcontinental, and mountain gateway routing.',
          tag: 'Star Alliance Hub',
          corridor: 'us_central'
        },
        {
          value: 'MSP',
          icon: '❄️',
          title: 'MSP (Minneapolis / St. Paul)',
          desc: 'Delta Air Lines SkyTeam fortress hub with premier transatlantic nonstops and Flying Blue / Virgin Atlantic partner reach.',
          tag: 'SkyTeam Fortress',
          corridor: 'us_central'
        },

        // US Western Corridor (3 Hubs)
        {
          value: 'LAX',
          icon: '🌴',
          title: 'LAX (Los Angeles)',
          desc: 'Pacific Rim flagship gateway with STARLUX, EVA Air, ANA, and cross-alliance nonstops to Asia & Oceania.',
          tag: 'Pacific Gateway',
          corridor: 'us_west'
        },
        {
          value: 'SFO',
          icon: '🌉',
          title: 'SFO (San Francisco)',
          desc: 'United Star Alliance transpacific powerhouse with direct Pacific nonstops on EVA Air, ANA, and Singapore.',
          tag: 'Transpacific Powerhouse',
          corridor: 'us_west'
        },
        {
          value: 'SEA',
          icon: '🌲',
          title: 'SEA (Seattle / Tacoma)',
          desc: 'Alaska (Oneworld HQ) & Delta Pacific hub with STARLUX, EVA, and Great Circle routes to Tokyo and Europe.',
          tag: 'Great Circle Gateway',
          corridor: 'us_west'
        },

        // European Flagship Corridor (6 Hubs)
        {
          value: 'LHR',
          icon: '💂',
          title: 'LHR (London Heathrow)',
          desc: 'British Airways Oneworld global fortress & Virgin Atlantic flagship base with unmatched Avios redemptions.',
          tag: 'Oneworld Flagship',
          corridor: 'europe'
        },
        {
          value: 'CDG',
          icon: '🥐',
          title: 'CDG (Paris Charles de Gaulle)',
          desc: 'Air France & SkyTeam global mega-fortress; premier Flying Blue promo reward corridors worldwide.',
          tag: 'SkyTeam Mega-Fortress',
          corridor: 'europe'
        },
        {
          value: 'AMS',
          icon: '🚲',
          title: 'AMS (Amsterdam Schiphol)',
          desc: 'KLM Royal Dutch Airlines SkyTeam nerve center connecting hyper-efficient European and long-haul flights.',
          tag: 'SkyTeam Continental Hub',
          corridor: 'europe'
        },
        {
          value: 'FRA',
          icon: '🏰',
          title: 'FRA (Frankfurt am Main)',
          desc: 'Lufthansa Group & Star Alliance global primary hub connecting over 200 worldwide destinations.',
          tag: 'Star Alliance Mega-Hub',
          corridor: 'europe'
        },
        {
          value: 'MUC',
          icon: '🥨',
          title: 'MUC (Munich)',
          desc: 'Lufthansa 5-star secondary hub; premier departure point for Alpine, Southern European, and intercontinental routes.',
          tag: 'Star Alliance Premium Hub',
          corridor: 'europe'
        },
        {
          value: 'MAD',
          icon: '🏛️',
          title: 'MAD (Madrid-Barajas)',
          desc: 'Iberia Oneworld fortress; legendary 34k–42k off-peak business class Avios sweet spots to the Americas.',
          tag: 'Iberian Oneworld Hub',
          corridor: 'europe'
        },

        // Asia & Australia Corridor (6 Hubs)
        {
          value: 'HND',
          icon: '⛩️',
          title: 'HND / NRT (Tokyo)',
          desc: 'Dual mega-hub for ANA (Star Alliance) & JAL (Oneworld); Virgin Atlantic & Atmos partner award sweet spots.',
          tag: 'Tokyo Flagship Hub',
          corridor: 'asia_pac'
        },
        {
          value: 'ICN',
          icon: '🏯',
          title: 'ICN (Seoul Incheon)',
          desc: 'Korean Air SkyTeam mega-fortress (combined with Asiana); premier Asian transit hub with Delta SkyMiles depth.',
          tag: 'SkyTeam Pacific Fortress',
          corridor: 'asia_pac'
        },
        {
          value: 'HKG',
          icon: '🏮',
          title: 'HKG (Hong Kong)',
          desc: 'Cathay Pacific Oneworld global fortress; premier Asia Miles & Atmos access across Asia, Europe, and the US.',
          tag: 'Oneworld Pacific Hub',
          corridor: 'asia_pac'
        },
        {
          value: 'SIN',
          icon: '🦁',
          title: 'SIN (Singapore Changi)',
          desc: 'Singapore Airlines Star Alliance world-renowned fortress; KrisFlyer and Aeroplan long-haul corridors.',
          tag: 'Star Alliance Flagship',
          corridor: 'asia_pac'
        },
        {
          value: 'SYD',
          icon: '🦘',
          title: 'SYD (Sydney)',
          desc: 'Qantas Oneworld flagship base & transpacific gateway to North America and the trans-Tasman corridor.',
          tag: 'Oneworld Oceania Hub',
          corridor: 'asia_pac'
        },
        {
          value: 'MEL',
          icon: '☕',
          title: 'MEL (Melbourne)',
          desc: 'Qantas Oneworld secondary base & Virgin Australia gateway to Asia, Oceania, and cross-alliance corridors.',
          tag: 'Oceania Flagship Hub',
          corridor: 'asia_pac'
        }
      ]
    },
    {
      id: 3,
      key: 'sensoryVibe',
      kicker: 'GATE 3 OF 7 · SENSORY FREQUENCY',
      title: 'What atmosphere awakens your senses?',
      subtitle: 'The textures, acoustics, and air density where your mind drops into complete presence.',
      altitude: '22,000 FT',
      options: [
        {
          value: 'maritime_cliffs',
          icon: '🌊',
          title: 'Maritime Cliffs & Salt Air',
          desc: 'Crashing ocean swells, sea spray on limestone ramparts, and endless coastal horizons.',
          tag: 'Atlantic Coast'
        },
        {
          value: 'alpine_silence',
          icon: '🏔️',
          title: 'Alpine Mist & Granite Silence',
          desc: 'Crisp mountain breezes, mirror-like glacier lakes, and high mountain passes.',
          tag: 'Sub-Zero Purity'
        },
        {
          value: 'ancient_stones',
          icon: '🏛️',
          title: 'Ancient Stones & Rain-Slicked Cobbles',
          desc: 'Centuries of history, Baroque facades, museum corridors, and historic libraries.',
          tag: 'Historic Memory'
        },
        {
          value: 'neon_kinetic',
          icon: '⚡',
          title: 'Neon Kinetic & Subterranean Jazz',
          desc: 'Hyper-urban pulse, steam from midnight ramen stalls, and avant-garde transit precision.',
          tag: 'Midnight Metropolis'
        },
        {
          value: 'sunbaked_terracotta',
          icon: '☀️',
          title: 'Sunbaked Terracotta & Olive Groves',
          desc: 'Golden hour warmth, dry stone walls, cicada hums, and rustic Mediterranean serenity.',
          tag: 'Rustic Golden Hour'
        }
      ]
    },
    {
      id: 4,
      key: 'culinarySignature',
      kicker: 'GATE 4 OF 7 · CULINARY SIGNATURE',
      title: 'How do you wish to feed your soul?',
      subtitle: 'The culinary philosophy that anchors your days and drives your daily geographic routing.',
      altitude: '27,000 FT',
      options: [
        {
          value: 'terroir_tavernas',
          icon: '🍷',
          title: 'Terroir Tavernas & Natural Wine',
          desc: 'Catch of the morning, wooden trestle tables, local cellars, and unhurried 3-hour dinners.',
          tag: 'Slow Food Terroir'
        },
        {
          value: 'haute_gastronomy',
          icon: '✨',
          title: 'Haute Gastronomy & Modern Innovation',
          desc: 'Michelin-starred sensory theater, hyper-local fermentation, and world-class degustation.',
          tag: 'Culinary Pinnacle'
        },
        {
          value: 'street_food',
          icon: '🍢',
          title: 'Smoky Street Stalls & Hidden Alleys',
          desc: 'Charcoal skewers, hand-pulled noodles, bustling morning fish markets, and night stalls.',
          tag: 'Raw Urban Craft'
        },
        {
          value: 'alpine_refuge',
          icon: '🧀',
          title: 'Hearthside Feasts & Mountain Cellars',
          desc: 'Warm hearth fires, wood-smoked meats, alpine cheeses, and hearty mountain refuge hospitality.',
          tag: 'Alpine Sustenance'
        }
      ]
    },
    {
      id: 5,
      key: 'lodgingSanctuary',
      kicker: 'GATE 5 OF 7 · LODGING SANCTUARY',
      title: 'Where do you seek refuge at twilight?',
      subtitle: 'The physical space where you unwind, reflect, and prepare for tomorrow\'s expedition.',
      altitude: '32,000 FT',
      options: [
        {
          value: 'boutique_heritage',
          icon: '🏰',
          title: 'Boutique Heritage & Restored Palaces',
          desc: 'Belle Époque architecture, curated local art, grand courtyards, and personalized service.',
          tag: 'Character & Heritage'
        },
        {
          value: 'cliffside_cabins',
          icon: '🛖',
          title: 'Secluded Cabins & Coastal Rorbuer',
          desc: 'Driftwood stoves, glass-fronted saunas, dramatic fjord or cliff views, and remote peace.',
          tag: 'Nordic Seclusion'
        },
        {
          value: 'historic_ryokans',
          icon: '🏮',
          title: 'Historic Ryokans & Cypress Onsens',
          desc: 'Aromatic cedar baths, tatami mats, garden courtyards, and serene ceremonial rhythm.',
          tag: 'Zen Minimalist'
        },
        {
          value: 'points_sweetspot',
          icon: '💎',
          title: 'Elite Points Redemptions',
          desc: 'High-value Hyatt sweet spots, SLH boutique gems, and luxury aspirational retreats.',
          tag: 'Maximized Arbitrage'
        }
      ]
    },
    {
      id: 6,
      key: 'fundingModel',
      kicker: 'GATE 6 OF 7 · FLIGHT ARSENAL',
      title: 'What currency fuels your long-haul journeys?',
      subtitle: 'How you fund flight segments directly governs alliance recommendations and award availability.',
      altitude: '37,000 FT',
      options: [
        {
          value: 'transferable_points',
          icon: '💳',
          title: 'Transferable Points Arsenal',
          desc: 'Amex Membership Rewards, Chase Ultimate Rewards, Capital One, Citi ThankYou, Bilt (1:1 to JetBlue & Alaska), or Rove Miles.',
          tag: '1:1 Transfer Master'
        },
        {
          value: 'cash_connoisseur',
          icon: '💵',
          title: 'Cash Connoisseur',
          desc: 'Cash deals, positioning ticket hacks, Google Flights fare alerts, and unbundled flexibility.',
          tag: 'Cash Fare Optimizer'
        },
        {
          value: 'mixed_hybrid',
          icon: '⚖️',
          title: 'Mixed Strategic Arsenal',
          desc: 'Cash for domestic positioning & economy hops; credit card points for lie-flat long-haul cabins.',
          tag: 'The Hybrid Play'
        }
      ]
    },
    {
      id: 7,
      key: 'tempo',
      kicker: 'GATE 7 OF 7 · EXPEDITION TEMPO',
      title: 'What tempo governs your daylight hours?',
      subtitle: 'The cadence of discovery—from meditative stillness to high-velocity exploration.',
      altitude: '42,000 FT',
      options: [
        {
          value: 'balanced_curated',
          icon: '🎯',
          title: 'Balanced & Deliberate',
          desc: 'One anchor morning experience, followed by an open afternoon for organic wandering.',
          tag: 'Curated Poise'
        },
        {
          value: 'dolce_far_niente',
          icon: '☕',
          title: 'Dolce Far Niente (The Sweetness of Doing Nothing)',
          desc: 'No alarms, 3-hour cafe lunches, coastal naps, and observing the theater of local life.',
          tag: 'Meditative Stillness'
        },
        {
          value: 'high_velocity',
          icon: '🚀',
          title: 'High-Velocity Frontier',
          desc: 'Maximized itineraries, sunrise mountain trails, afternoon museum sprints, and midnight alleys.',
          tag: 'Relentless Exploration'
        }
      ]
    }
  ];

  // Deliberation Rotating Phrases
  const DELIBERATION_PHRASES = [
    'Synthesizing your expedition profile...',
    'Evaluating geographic corridors and seasonal microclimates...',
    'Auditing alliance sweet spots and partner transfer ratios...',
    'Calibrating lodging architecture and pacing...',
    'Finalizing your curated expedition dossier...'
  ];

  // Deliberation Rotating Subtitles (Harmonized with Gate phrasing and passport themes)
  const DELIBERATION_SUBS = [
    'Analyzing alliance routing corridors, seasonal microclimates, and 1:1 points sweet spots.',
    'Cross-referencing historical weather records, regional crowds, and shoulder seasons.',
    'Auditing Star Alliance, OneWorld, and SkyTeam partner award sweet spots.',
    'Calibrating boutique retreats, high-value lodging sweet spots, and itinerary rhythm.',
    'Preparing certified passport stamps and bespoke expedition intelligence.'
  ];

  // Safe LocalStorage Helpers
  function getStoredApiKey() {
    try {
      return localStorage.getItem('findyourpassport_gemini_key') || '';
    } catch {
      return '';
    }
  }

  function setStoredApiKey(key) {
    try {
      if (key) {
        localStorage.setItem('findyourpassport_gemini_key', key);
      } else {
        localStorage.removeItem('findyourpassport_gemini_key');
      }
    } catch (e) {
      console.warn('[FindYourPassport] LocalStorage access restricted:', e);
    }
  }

  // App State
  const state = {
    currentGate: 1,
    selectedCorridor: 'us_east',
    answers: {
      crew: null,
      originHub: 'JFK',
      sensoryVibe: null,
      culinarySignature: null,
      lodgingSanctuary: null,
      fundingModel: null,
      tempo: null
    },
    verdictData: null,
    activeMatchIdx: 0,
    activeHub: 'JFK',
    moreHubsOpen: false,
    apiKey: getStoredApiKey(),
    sessionId: getOrCreateSessionId(),
    user: null,
    favorites: [],
    pendingFavorite: null
  };

  function getOrCreateSessionId() {
    try {
      let sid = sessionStorage.getItem('findyourpassport_session_id');
      if (!sid) {
        sid = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
        sessionStorage.setItem('findyourpassport_session_id', sid);
      }
      return sid;
    } catch {
      return `sess_${Date.now()}`;
    }
  }

  // Helper to map hub code to its regional corridor
  function getCorridorForHub(hub) {
    const hubMap = {
      JFK: 'us_east', BOS: 'us_east', ATL: 'us_east', MIA: 'us_east',
      ORD: 'us_central', DFW: 'us_central', DEN: 'us_central', MSP: 'us_central',
      LAX: 'us_west', SFO: 'us_west', SEA: 'us_west',
      LHR: 'europe', CDG: 'europe', AMS: 'europe', FRA: 'europe', MUC: 'europe', MAD: 'europe',
      HND: 'asia_pac', ICN: 'asia_pac', HKG: 'asia_pac', SIN: 'asia_pac', SYD: 'asia_pac', MEL: 'asia_pac'
    };
    return hubMap[hub] || 'us_east';
  }

  // DOM Elements
  const elements = {
    progressTracker: document.getElementById('progress-tracker'),
    btnRestart: document.getElementById('btn-restart'),
    altitudeDisplay: document.getElementById('altitude-display'),
    gateStatus: document.getElementById('gate-status'),
    horizonProgress: document.getElementById('horizon-progress'),
    aircraftGlyph: document.getElementById('aircraft-glyph'),
    gatesPillsContainer: document.getElementById('gates-pills'),
    gatePills: document.querySelectorAll('.gate-pill'),

    // Header API Key controls
    btnApiKey: document.getElementById('btn-api-key'),
    headerKeyDot: document.getElementById('header-key-dot'),
    headerKeyLabel: document.getElementById('header-key-label'),
    apiModalBackdrop: document.getElementById('api-modal-backdrop'),
    btnModalClose: document.getElementById('btn-modal-close'),
    inputApiKey: document.getElementById('input-api-key'),
    btnToggleKeyVisibility: document.getElementById('btn-toggle-key-visibility'),
    btnSaveKey: document.getElementById('btn-save-key'),
    btnClearKey: document.getElementById('btn-clear-key'),
    btnTestKey: document.getElementById('btn-test-key'),
    keyFeedbackAlert: document.getElementById('key-feedback-alert'),
    keyStatusMessage: document.getElementById('key-status-message'),

    // Manifest Stage
    manifestStage: document.getElementById('manifest-stage'),
    gateKicker: document.getElementById('gate-kicker'),
    gateTitle: document.getElementById('gate-title'),
    gateSubtitle: document.getElementById('gate-subtitle'),
    gate2ProTip: document.getElementById('gate2-pro-tip'),
    corridorGuideBanner: document.getElementById('corridor-guide-banner'),
    corridorSwitcher: document.getElementById('corridor-switcher'),
    corridorTabs: document.querySelectorAll('.corridor-tab'),
    hubStageCallout: document.getElementById('hub-stage-callout'),
    hubStageText: document.getElementById('hub-stage-text'),
    optionsGrid: document.getElementById('options-grid'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    footerHint: document.getElementById('footer-hint'),

    // Deliberation Stage
    deliberationStage: document.getElementById('deliberation-stage'),
    deliberationHeading: document.getElementById('deliberation-heading'),
    deliberationSub: document.getElementById('deliberation-sub'),
    btnSkipDeliberation: document.getElementById('btn-skip-deliberation'),

    // Proclamation Stage
    proclamationStage: document.getElementById('proclamation-stage'),
    ceremonialStamp: document.getElementById('ceremonial-stamp'),
    stampArchetype: document.getElementById('stamp-archetype'),
    revealedArchetypeTitle: document.getElementById('revealed-archetype-title'),
    revealedArchetypeSubtitle: document.getElementById('revealed-archetype-subtitle'),
    oracleVerdict: document.getElementById('oracle-verdict'),

    // Carousel Navigation
    carouselNav: document.getElementById('carousel-nav'),
    tab0: document.getElementById('tab-0'),
    tab1: document.getElementById('tab-1'),
    tab2: document.getElementById('tab-2'),
    tab0Name: document.getElementById('tab-0-name'),
    tab1Name: document.getElementById('tab-1-name'),
    tab2Name: document.getElementById('tab-2-name'),

    // Boarding Pass Elements
    boardingPass: document.getElementById('boarding-pass'),
    passMatchBadge: document.getElementById('pass-match-badge'),
    passOriginCode: document.getElementById('pass-origin-code'),
    passOriginCity: document.getElementById('pass-origin-city'),
    passDestCode: document.getElementById('pass-dest-code'),
    passDestCity: document.getElementById('pass-dest-city'),
    passAllianceTag: document.getElementById('pass-alliance-tag'),
    passRoutingSummary: document.getElementById('pass-routing-summary'),
    pillWindow: document.getElementById('pill-window'),
    pillBudget: document.getElementById('pill-budget'),
    pillRoute: document.getElementById('pill-route'),
    passMatchReason: document.getElementById('pass-match-reason'),
    strategyStayStyle: document.getElementById('strategy-stay-style'),
    strategyFlightSecret: document.getElementById('strategy-flight-secret'),
    btnOpenDossier: document.getElementById('btn-open-dossier'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),
    stubRouteCode: document.getElementById('stub-route-code'),
    stubPassengerTitle: document.getElementById('stub-passenger-title'),
    passportStampContainer: document.getElementById('passport-stamp-container'),

    // Dossier Elements
    dossierStage: document.getElementById('dossier-stage'),
    dossierNavBar: document.getElementById('dossier-nav-bar'),
    dossierNavDestTitle: document.getElementById('dossier-nav-dest-title'),
    btnBackToBoardingPass: document.getElementById('btn-back-to-boarding-pass'),
    btnBackToBoardingPassBottom: document.getElementById('btn-back-to-boarding-pass-bottom'),
    dossierDestTitle: document.getElementById('dossier-dest-title'),
    dossierCountryTitle: document.getElementById('dossier-country-title'),
    dossierOverviewText: document.getElementById('dossier-overview-text'),
    dossierSeasonText: document.getElementById('dossier-season-text'),
    costLodging: document.getElementById('cost-lodging'),
    costDining: document.getElementById('cost-dining'),
    costTransit: document.getElementById('cost-transit'),
    costPoints: document.getElementById('cost-points'),
    highlightsGrid: document.getElementById('highlights-grid'),

    // Fare Chart Elements
    svgChartWrapper: document.getElementById('svg-chart-wrapper'),
    hubPills: document.getElementById('hub-pills'),
    btnToggleMoreHubs: document.getElementById('btn-toggle-more-hubs'),
    moreHubsDrawer: document.getElementById('more-hubs-drawer'),
    summaryLowPrice: document.getElementById('summary-low-price'),
    summaryLowMonth: document.getElementById('summary-low-month'),
    summaryActiveHub: document.getElementById('summary-active-hub'),
    btnLaunchFlights: document.getElementById('btn-launch-flights'),

    // Destination Geographic Map Elements
    destinationMapSection: document.getElementById('destination-map-section'),
    mapDestinationName: document.getElementById('map-destination-name'),
    mapCoordsText: document.getElementById('map-coords-text'),
    btnOpenGoogleMaps: document.getElementById('btn-open-google-maps'),
    destinationMapIframe: document.getElementById('destination-map-iframe'),

    // Google Account & Favorites Header
    btnHeaderFavorites: document.getElementById('btn-header-favorites'),
    headerFavCount: document.getElementById('header-fav-count'),
    btnGoogleSignin: document.getElementById('btn-google-signin'),
    btnUserAvatar: document.getElementById('btn-user-avatar'),
    userAvatarImg: document.getElementById('user-avatar-img'),
    userAvatarInitials: document.getElementById('user-avatar-initials'),
    accountDropdownMenu: document.getElementById('account-dropdown-menu'),
    dropdownUserName: document.getElementById('dropdown-user-name'),
    dropdownUserEmail: document.getElementById('dropdown-user-email'),
    dropdownAvatarImg: document.getElementById('dropdown-avatar-img'),
    dropdownAvatarInitials: document.getElementById('dropdown-avatar-initials'),
    menuItemFavorites: document.getElementById('menu-item-favorites'),
    menuFavoritesSub: document.getElementById('menu-favorites-sub'),
    menuFavoritesBadge: document.getElementById('menu-favorites-badge'),
    menuItemAnalytics: document.getElementById('menu-item-analytics'),
    btnAccountLogout: document.getElementById('btn-account-logout'),

    // Carousel Tab Heart Pills
    tab0Heart: document.getElementById('tab-0-heart'),
    tab1Heart: document.getElementById('tab-1-heart'),
    tab2Heart: document.getElementById('tab-2-heart'),

    // Boarding Pass & Dossier Favorites
    btnFavoriteMatch: document.getElementById('btn-favorite-match'),
    heartIconPass: document.getElementById('heart-icon-pass'),
    heartTextPass: document.getElementById('heart-text-pass'),
    btnFavoriteDossier: document.getElementById('btn-favorite-dossier'),
    heartIconDossier: document.getElementById('heart-icon-dossier'),
    heartTextDossier: document.getElementById('heart-text-dossier'),
    btnFavoriteDossierNav: document.getElementById('btn-favorite-dossier-nav'),
    heartIconDossierNav: document.getElementById('heart-icon-dossier-nav'),
    heartTextDossierNav: document.getElementById('heart-text-dossier-nav'),

    // Login Prompt Modal
    loginPromptBackdrop: document.getElementById('login-prompt-backdrop'),
    btnCloseLoginPrompt: document.getElementById('btn-close-login-prompt'),
    btnDismissLoginPrompt: document.getElementById('btn-dismiss-login-prompt'),
    previewDestName: document.getElementById('preview-dest-name'),
    previewDestSub: document.getElementById('preview-dest-sub'),
    gsiButtonSlot: document.getElementById('gsi-button-slot'),
    btnInstantGoogleLogin: document.getElementById('btn-instant-google-login'),
    btnToggleCustomLogin: document.getElementById('btn-toggle-custom-login'),
    customLoginFields: document.getElementById('custom-login-fields'),
    inputCustomName: document.getElementById('input-custom-name'),
    inputCustomEmail: document.getElementById('input-custom-email'),
    btnSubmitCustomLogin: document.getElementById('btn-submit-custom-login'),

    // About / Explainer Slide-Over Drawer
    btnHeaderAbout: document.getElementById('btn-header-about'),
    menuItemAbout: document.getElementById('menu-item-about'),
    aboutDrawerBackdrop: document.getElementById('about-drawer-backdrop'),
    aboutDrawer: document.getElementById('about-drawer'),
    btnCloseAboutDrawer: document.getElementById('btn-close-about-drawer'),
    btnAboutClose: document.getElementById('btn-about-close'),
    btnAboutStartQuiz: document.getElementById('btn-about-start-quiz'),

    // Favorites Slide-Over Drawer
    favoritesDrawerBackdrop: document.getElementById('favorites-drawer-backdrop'),
    favoritesDrawer: document.getElementById('favorites-drawer'),
    btnCloseFavoritesDrawer: document.getElementById('btn-close-favorites-drawer'),
    btnDrawerDone: document.getElementById('btn-drawer-done'),
    btnDrawerAnalytics: document.getElementById('btn-drawer-analytics'),
    drawerFavCount: document.getElementById('drawer-fav-count'),
    drawerUserStatus: document.getElementById('drawer-user-status'),
    favoritesEmpty: document.getElementById('favorites-empty'),
    favoritesList: document.getElementById('favorites-list'),
    btnEmptyStartQuiz: document.getElementById('btn-empty-start-quiz'),

    // Looker Studio Analytics Modal
    analyticsModalBackdrop: document.getElementById('analytics-modal-backdrop'),
    btnCloseAnalyticsModal: document.getElementById('btn-close-analytics-modal'),
    btnDoneAnalytics: document.getElementById('btn-done-analytics'),
    statTotalSessions: document.getElementById('stat-total-sessions'),
    statCatalogSize: document.getElementById('stat-catalog-size'),
    statTotalFavorites: document.getElementById('stat-total-favorites'),
    statTopDest: document.getElementById('stat-top-dest'),
    rankListDestinations: document.getElementById('rank-list-destinations'),
    btnCopySheetsFormula: document.getElementById('btn-copy-sheets-formula'),
    sheetsFormulaBox: document.getElementById('sheets-formula-box'),
    formulaCopiedHint: document.getElementById('formula-copied-hint'),

    // Toast Container
    toastContainer: document.getElementById('toast-container')
  };

  /**
   * Deterministic Client Cartographer Knowledge Engine
   * Guarantees instant, error-free revelation even when running offline or without an API key
   */
  // Master Destination Repository Access
  const getMasterDestinations = () => {
    if (typeof window !== 'undefined' && window.DESTINATIONS) return window.DESTINATIONS;
    if (typeof DESTINATIONS !== 'undefined') return DESTINATIONS;
    return {};
  };

  // Travel Archetypes Mapping (Catalog <-> Active FindYourPassport UI Archetypes)
  const ARCHETYPE_MAPPING = {
    "The Flâneur & Historian": "The Architectural Flâneur",
    "The Epic Trailblazer": "The Alpine Minimalist",
    "The Coastal Recharger": "The Meridian Navigator",
    "The Cosmopolitan Maverick": "The Metro Cartographer",
    "The Epicurean Curator": "The Epicurean Strategist",
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
    bariloche: { lat: -41.1335, lng: -71.3103 }
  };

  const KEY_ALIASES = {
    san_sebastian: 'sansebastian',
    lofoten: 'norway',
    azores: 'porto',
    bruges: 'belgium',
    ghent: 'belgium',
    senja: 'tromso'
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
    const dests = getMasterDestinations();
    const catalogArch = ARCHETYPE_MAPPING[archetype] || archetype;
    const hub = (manifest.originHub || 'JFK').toUpperCase();
    const corridor = HUB_CORRIDORS[hub] || manifest.corridor || 'us_east';
    const vibe = (manifest.sensoryVibe || '').toLowerCase();
    const gastronomy = (manifest.culinarySignature || '').toLowerCase();
    const lodging = (manifest.lodgingSanctuary || '').toLowerCase();
    const funding = (manifest.fundingModel || manifest.flightClassPreference || '').toLowerCase();
    const tempo = (manifest.tempo || '').toLowerCase();
    const crew = (manifest.crew || 'duo').toLowerCase();

    // Exclude home base city from international/long-haul recommendations
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
    for (const [key, d] of Object.entries(dests)) {
      if (excludedKeys.includes(key)) continue;

      let score = 0;
      // Primary Archetype Alignment
      if (d.archetype === catalogArch) {
        score += 100;
      } else {
        score += 10;
      }

      const fullText = (d.name + ' ' + d.narrative + ' ' + d.cash + ' ' + d.points + ' ' + (d.highlights || []).join(' ')).toLowerCase();

      // Vibe affinities (up to +15)
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

      // Gate 1 Travel Party (Crew) Soft Affinity Scoring (+10 to +18 pts)
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

  /**
   * Deterministic Client Cartographer Knowledge Engine
   * Guarantees instant, error-free revelation even when running offline or without an API key
   */
  function getClientDeterministicVerdict(manifest) {
    const hub = (manifest.originHub || 'JFK').toUpperCase();
    const vibe = manifest.sensoryVibe || 'maritime_cliffs';
    const gastronomy = manifest.culinarySignature || 'terroir_tavernas';
    const tempo = manifest.tempo || 'balanced_curated';

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

  /**
   * Initialize Application
   */
  async function init() {
    setupEventListeners();
    updateApiKeyStatusUI();
    renderHubPills(state.activeHub || 'JFK');

    // Default to 7-Gate Quiz Access (Gate 1)
    state.currentGate = 1;
    renderGate(1);
    if (elements.manifestStage) elements.manifestStage.style.display = 'block';
    if (elements.progressTracker) elements.progressTracker.style.display = 'block';
    if (elements.proclamationStage) elements.proclamationStage.style.display = 'none';
    if (elements.dossierStage) elements.dossierStage.style.display = 'none';
    if (elements.deliberationStage) elements.deliberationStage.style.display = 'none';
    if (elements.btnRestart) elements.btnRestart.style.display = 'none';

    await initAuth();
    if (window.location.search.includes('about=1') || window.location.hash === '#about') {
      openAboutDrawer();
    }
    if (window.location.search.includes('quiz=1') || window.location.hash === '#quiz') {
      startQuiz();
    }
    if (window.location.search.includes('reveal=1') || window.location.hash === '#reveal') {
      if (!state.verdictData) {
        state.verdictData = getClientDeterministicVerdict(state.answers);
      }
      revealProclamation();
    }
    if (window.location.search.includes('dossier=1') || window.location.hash === '#dossier') {
      if (!state.verdictData) {
        state.verdictData = getClientDeterministicVerdict(state.answers);
      }
      openDossierView();
    }
  }

  /**
   * Update API Key UI elements in header and modal
   */
  function updateApiKeyStatusUI() {
    const hasKey = Boolean(state.apiKey && state.apiKey.trim().length > 5);
    if (elements.headerKeyDot) {
      elements.headerKeyDot.classList.toggle('active', hasKey);
    }
    if (elements.headerKeyLabel) {
      elements.headerKeyLabel.textContent = hasKey ? 'Live Gemini 3.8 Flash (Active ✓)' : 'Autonomous Engine (Offline Ready)';
    }
    if (elements.keyStatusMessage) {
      elements.keyStatusMessage.textContent = hasKey
        ? `Current mode: Live Gemini 3.8 Flash Active (${state.apiKey.slice(0, 6)}•••••••• stored in browser)`
        : 'Current mode: Autonomous Deterministic Engine (Offline & Local Ready)';
    }
    if (elements.inputApiKey) {
      elements.inputApiKey.value = state.apiKey;
    }
  }

  /**
   * Set up Global Event Listeners
   */
  function setupEventListeners() {
    // Navigation Buttons
    elements.btnPrev.addEventListener('click', () => {
      if (state.currentGate > 1) {
        state.currentGate--;
        renderGate(state.currentGate);
      }
    });

    elements.btnNext.addEventListener('click', () => {
      handleNextClick();
    });

    // Calibrate / Reset button in header
    if (elements.btnRestart) {
      elements.btnRestart.addEventListener('click', () => {
        if (elements.manifestStage && elements.manifestStage.style.display !== 'none') {
          if (!state.verdictData) {
            state.verdictData = getClientDeterministicVerdict(state.answers);
          }
          revealProclamation();
        } else {
          startQuiz();
        }
      });
    }

    // Calibrate Quiz CTA in proclamation banner
    if (elements.btnStartQuiz) {
      elements.btnStartQuiz.addEventListener('click', startQuiz);
    }

    // Skip Deliberation / Instant Reveal button
    if (elements.btnSkipDeliberation) {
      elements.btnSkipDeliberation.addEventListener('click', () => {
        console.log('[FindYourPassport] User requested instant revelation.');
        if (!state.verdictData) {
          state.verdictData = getClientDeterministicVerdict(state.answers);
        }
        revealProclamation();
      });
    }

    // Carousel Tab Clicks
    [elements.tab0, elements.tab1, elements.tab2].forEach((tab, index) => {
      if (tab) {
        tab.addEventListener('click', () => {
          setActiveMatch(index);
        });
      }
    });

    // Unseal Dossier CTA - Opens Dedicated Dossier View
    if (elements.btnOpenDossier) {
      elements.btnOpenDossier.addEventListener('click', () => {
        openDossierView();
      });
    }

    // Back to Boarding Pass Navigation Buttons
    if (elements.btnBackToBoardingPass) {
      elements.btnBackToBoardingPass.addEventListener('click', closeDossierView);
    }
    if (elements.btnBackToBoardingPassBottom) {
      elements.btnBackToBoardingPassBottom.addEventListener('click', closeDossierView);
    }

    // Dynamic Hub Pill Click & Drawer Toggle Delegation
    document.addEventListener('click', (e) => {
      // Toggle More Hubs Drawer
      const toggleBtn = e.target.closest('#btn-toggle-more-hubs');
      if (toggleBtn) {
        state.moreHubsOpen = !state.moreHubsOpen;
        if (elements.moreHubsDrawer) {
          elements.moreHubsDrawer.style.display = state.moreHubsOpen ? 'flex' : 'none';
        }
        toggleBtn.textContent = state.moreHubsOpen ? '− Less Hubs' : '+ More Hubs';
        return;
      }

      // Hub Pill Selection
      const hubBtn = e.target.closest('.hub-pill[data-hub]');
      if (hubBtn) {
        const hub = hubBtn.getAttribute('data-hub');
        setActiveHub(hub);
      }
    });

    // API Key Modal Listeners
    if (elements.btnApiKey) {
      elements.btnApiKey.addEventListener('click', () => {
        if (elements.keyFeedbackAlert) {
          elements.keyFeedbackAlert.style.display = 'none';
        }
        elements.apiModalBackdrop.style.display = 'flex';
        updateApiKeyStatusUI();
      });
    }

    if (elements.btnModalClose) {
      elements.btnModalClose.addEventListener('click', () => {
        elements.apiModalBackdrop.style.display = 'none';
      });
    }

    if (elements.apiModalBackdrop) {
      elements.apiModalBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.apiModalBackdrop) {
          elements.apiModalBackdrop.style.display = 'none';
        }
      });
    }

    if (elements.btnToggleKeyVisibility && elements.inputApiKey) {
      elements.btnToggleKeyVisibility.addEventListener('click', () => {
        const currentType = elements.inputApiKey.getAttribute('type');
        elements.inputApiKey.setAttribute('type', currentType === 'password' ? 'text' : 'password');
      });
    }

    // Test API Key / Server Connection Button
    if (elements.btnTestKey) {
      elements.btnTestKey.addEventListener('click', async () => {
        const testKey = elements.inputApiKey ? elements.inputApiKey.value.trim() : state.apiKey;
        if (elements.keyFeedbackAlert) {
          elements.keyFeedbackAlert.style.display = 'block';
          elements.keyFeedbackAlert.style.background = '#fef3c7';
          elements.keyFeedbackAlert.style.color = '#92400e';
          elements.keyFeedbackAlert.style.borderColor = '#fde68a';
          elements.keyFeedbackAlert.textContent = 'Testing connection with Cartographer API...';
        }

        try {
          const headers = {};
          if (testKey) headers['x-gemini-api-key'] = testKey;
          const isFileProtocol = window.location.protocol === 'file:';
          const endpoint = isFileProtocol ? 'http://localhost:3000/api/health' : '/api/health';
          const res = await fetch(endpoint, { headers });
          if (res.ok) {
            const data = await res.json();
            if (elements.keyFeedbackAlert) {
              elements.keyFeedbackAlert.style.background = '#ecfdf5';
              elements.keyFeedbackAlert.style.color = '#065f46';
              elements.keyFeedbackAlert.style.borderColor = '#a7f3d0';
              elements.keyFeedbackAlert.textContent = testKey
                ? '✓ Connected! Server and Gemini 3.8 Flash operational.'
                : '✓ Connected! Server and Autonomous Cartographer Engine operational.';
            }
          } else {
            throw new Error(`Server returned HTTP ${res.status}`);
          }
        } catch (err) {
          if (elements.keyFeedbackAlert) {
            elements.keyFeedbackAlert.style.background = '#fef2f2';
            elements.keyFeedbackAlert.style.color = '#991b1b';
            elements.keyFeedbackAlert.style.borderColor = '#fecaca';
            elements.keyFeedbackAlert.textContent = 'Note: Local server unreachable, but Autonomous Engine is ready to sort offline without network.';
          }
        }
      });
    }

    // Save API Key Button
    if (elements.btnSaveKey && elements.inputApiKey) {
      elements.btnSaveKey.addEventListener('click', () => {
        const key = elements.inputApiKey.value.trim();
        state.apiKey = key;
        setStoredApiKey(key);
        updateApiKeyStatusUI();

        if (elements.keyFeedbackAlert) {
          elements.keyFeedbackAlert.style.display = 'block';
          elements.keyFeedbackAlert.style.background = '#ecfdf5';
          elements.keyFeedbackAlert.style.color = '#065f46';
          elements.keyFeedbackAlert.style.borderColor = '#a7f3d0';
          elements.keyFeedbackAlert.textContent = key
            ? '✓ API Key successfully stored in browser! Live Gemini 3.8 Flash active.'
            : '✓ Reverted to Autonomous Deterministic Cartographer Engine.';
        }

        setTimeout(() => {
          if (elements.apiModalBackdrop) {
            elements.apiModalBackdrop.style.display = 'none';
          }
        }, 900);
      });
    }

    // Clear API Key Button
    if (elements.btnClearKey && elements.inputApiKey) {
      elements.btnClearKey.addEventListener('click', () => {
        state.apiKey = '';
        elements.inputApiKey.value = '';
        setStoredApiKey('');
        updateApiKeyStatusUI();

        if (elements.keyFeedbackAlert) {
          elements.keyFeedbackAlert.style.display = 'block';
          elements.keyFeedbackAlert.style.background = '#eff6ff';
          elements.keyFeedbackAlert.style.color = '#1e40af';
          elements.keyFeedbackAlert.style.borderColor = '#bfdbfe';
          elements.keyFeedbackAlert.textContent = '✓ Cleared! Autonomous Cartographer Engine active.';
        }

        setTimeout(() => {
          if (elements.apiModalBackdrop) {
            elements.apiModalBackdrop.style.display = 'none';
          }
        }, 900);
      });
    }

    // Gate 2 Corridor Tab Clicks
    if (elements.corridorTabs) {
      elements.corridorTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const corridor = tab.getAttribute('data-corridor');
          if (corridor && corridor !== state.selectedCorridor) {
            state.selectedCorridor = corridor;
            updateCorridorTabs();
            if (state.currentGate === 2) {
              renderGate(2);
            }
          }
        });
      });
    }

    // --- Google Auth, Account Menu & Favorites Header Listeners ---
    if (elements.btnHeaderFavorites) {
      elements.btnHeaderFavorites.addEventListener('click', () => {
        openFavoritesDrawer();
      });
    }

    if (elements.btnGoogleSignin) {
      elements.btnGoogleSignin.addEventListener('click', () => {
        openLoginPrompt();
      });
    }

    if (elements.btnUserAvatar) {
      elements.btnUserAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        if (elements.accountDropdownMenu) {
          const isVisible = elements.accountDropdownMenu.style.display === 'block';
          elements.accountDropdownMenu.style.display = isVisible ? 'none' : 'block';
        }
      });
    }

    // Close Google Account dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (elements.accountDropdownMenu && elements.accountDropdownMenu.style.display === 'block') {
        if (!e.target.closest('#btn-user-avatar') && !e.target.closest('#account-dropdown-menu')) {
          elements.accountDropdownMenu.style.display = 'none';
        }
      }
    });

    if (elements.menuItemFavorites) {
      elements.menuItemFavorites.addEventListener('click', () => {
        openFavoritesDrawer();
      });
    }

    if (elements.menuItemAnalytics) {
      elements.menuItemAnalytics.addEventListener('click', () => {
        openAnalyticsModal();
      });
    }

    if (elements.btnAccountLogout) {
      elements.btnAccountLogout.addEventListener('click', () => {
        handleLogout();
      });
    }

    // --- Login Prompt Modal Listeners ---
    if (elements.btnCloseLoginPrompt) {
      elements.btnCloseLoginPrompt.addEventListener('click', closeLoginPrompt);
    }

    if (elements.btnDismissLoginPrompt) {
      elements.btnDismissLoginPrompt.addEventListener('click', closeLoginPrompt);
    }

    if (elements.loginPromptBackdrop) {
      elements.loginPromptBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.loginPromptBackdrop) {
          closeLoginPrompt();
        }
      });
    }

    if (elements.btnInstantGoogleLogin) {
      elements.btnInstantGoogleLogin.addEventListener('click', () => {
        handleInstantGoogleLogin();
      });
    }

    if (elements.btnToggleCustomLogin && elements.customLoginFields) {
      elements.btnToggleCustomLogin.addEventListener('click', () => {
        const isHidden = elements.customLoginFields.style.display === 'none';
        elements.customLoginFields.style.display = isHidden ? 'flex' : 'none';
      });
    }

    if (elements.btnSubmitCustomLogin) {
      elements.btnSubmitCustomLogin.addEventListener('click', () => {
        const name = (elements.inputCustomName?.value || '').trim() || 'Traveler';
        const email = (elements.inputCustomEmail?.value || '').trim() || 'traveler@gmail.com';
        handleInstantGoogleLogin({
          id: `custom_${Date.now()}`,
          name,
          email,
          picture: '',
          given_name: name.split(' ')[0] || 'Traveler'
        });
      });
    }

    // --- Persistent Heart Buttons on Reveal & Dossier ---
    if (elements.btnFavoriteMatch) {
      elements.btnFavoriteMatch.addEventListener('click', () => {
        const matches = state.verdictData?.topMatches || [];
        const match = matches[state.activeMatchIdx];
        if (match) {
          toggleFavorite(match);
        }
      });
    }

    if (elements.btnFavoriteDossier) {
      elements.btnFavoriteDossier.addEventListener('click', () => {
        const matches = state.verdictData?.topMatches || [];
        const match = matches[state.activeMatchIdx];
        if (match) {
          toggleFavorite(match);
        }
      });
    }

    if (elements.btnFavoriteDossierNav) {
      elements.btnFavoriteDossierNav.addEventListener('click', () => {
        const matches = state.verdictData?.topMatches || [];
        const match = matches[state.activeMatchIdx];
        if (match) {
          toggleFavorite(match);
        }
      });
    }

    // Carousel Tab Heart Pills Direct Toggle
    [elements.tab0Heart, elements.tab1Heart, elements.tab2Heart].forEach((tabHeart, idx) => {
      if (tabHeart) {
        tabHeart.addEventListener('click', (e) => {
          e.stopPropagation();
          const matches = state.verdictData?.topMatches || [];
          const match = matches[idx];
          if (match) {
            toggleFavorite(match);
          }
        });
      }
    });

    // --- About / Explainer Slide-Over Drawer Listeners ---
    if (elements.btnHeaderAbout) {
      elements.btnHeaderAbout.addEventListener('click', openAboutDrawer);
    }

    if (elements.menuItemAbout) {
      elements.menuItemAbout.addEventListener('click', openAboutDrawer);
    }

    if (elements.btnCloseAboutDrawer) {
      elements.btnCloseAboutDrawer.addEventListener('click', closeAboutDrawer);
    }

    if (elements.btnAboutClose) {
      elements.btnAboutClose.addEventListener('click', closeAboutDrawer);
    }

    if (elements.aboutDrawerBackdrop) {
      elements.aboutDrawerBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.aboutDrawerBackdrop) {
          closeAboutDrawer();
        }
      });
    }

    if (elements.btnAboutStartQuiz) {
      elements.btnAboutStartQuiz.addEventListener('click', () => {
        closeAboutDrawer();
        resetManifest();
      });
    }

    initAboutDrawerAccordions();

    // --- Favorites Slide-Over Drawer Listeners ---
    if (elements.btnCloseFavoritesDrawer) {
      elements.btnCloseFavoritesDrawer.addEventListener('click', closeFavoritesDrawer);
    }

    if (elements.btnDrawerDone) {
      elements.btnDrawerDone.addEventListener('click', closeFavoritesDrawer);
    }

    if (elements.favoritesDrawerBackdrop) {
      elements.favoritesDrawerBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.favoritesDrawerBackdrop) {
          closeFavoritesDrawer();
        }
      });
    }

    if (elements.btnDrawerAnalytics) {
      elements.btnDrawerAnalytics.addEventListener('click', () => {
        closeFavoritesDrawer();
        openAnalyticsModal();
      });
    }

    if (elements.btnEmptyStartQuiz) {
      elements.btnEmptyStartQuiz.addEventListener('click', () => {
        closeFavoritesDrawer();
        resetManifest();
      });
    }

    // Global Escape Key Listener for Drawers & Modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAboutDrawer();
        closeFavoritesDrawer();
        closeAnalyticsModal();
        closeLoginPrompt();
        if (elements.accountDropdownMenu) {
          elements.accountDropdownMenu.style.display = 'none';
        }
      }
    });

    // --- Looker Studio Telemetry Modal Listeners ---
    if (elements.btnCloseAnalyticsModal) {
      elements.btnCloseAnalyticsModal.addEventListener('click', closeAnalyticsModal);
    }

    if (elements.btnDoneAnalytics) {
      elements.btnDoneAnalytics.addEventListener('click', closeAnalyticsModal);
    }

    if (elements.analyticsModalBackdrop) {
      elements.analyticsModalBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.analyticsModalBackdrop) {
          closeAnalyticsModal();
        }
      });
    }

    if (elements.btnCopySheetsFormula && elements.sheetsFormulaBox) {
      elements.btnCopySheetsFormula.addEventListener('click', () => {
        elements.sheetsFormulaBox.style.display = 'block';
        const formula = elements.sheetsFormulaBox.querySelector('code')?.textContent || '';
        if (navigator.clipboard) {
          navigator.clipboard.writeText(formula).then(() => {
            if (elements.formulaCopiedHint) {
              elements.formulaCopiedHint.style.display = 'block';
              setTimeout(() => {
                if (elements.formulaCopiedHint) elements.formulaCopiedHint.style.display = 'none';
              }, 3000);
            }
          }).catch(() => {});
        }
      });
    }
  }

  /**
   * Update Corridor Tabs and Badges on Gate 2
   */
  function updateCorridorTabs() {
    if (!elements.corridorTabs) return;
    const currentHub = state.answers.originHub;
    const activeHubCorridor = getCorridorForHub(currentHub);

    elements.corridorTabs.forEach(tab => {
      const corridor = tab.getAttribute('data-corridor');
      const isSelected = corridor === state.selectedCorridor;
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');

      const badge = tab.querySelector('.corridor-badge');
      if (badge) {
        if (corridor === activeHubCorridor && currentHub) {
          badge.textContent = `✓ ${currentHub}`;
          badge.style.display = 'inline-flex';
        } else {
          badge.style.display = 'none';
        }
      }
    });

    if (elements.hubStageText) {
      const corridorLabels = {
        us_east: 'US Eastern Corridor (4 Flagship Hubs)',
        us_central: 'US Central Heartland Corridor (4 Mega Hubs)',
        us_west: 'US Western Pacific Corridor (3 Rim Gateways)',
        europe: 'European Flagship Corridor (6 Alliance Hubs)',
        asia_pac: 'Asia & Oceania Corridor (6 Oceanic Hubs)'
      };
      const label = corridorLabels[state.selectedCorridor] || 'Selected Corridor';
      elements.hubStageText.innerHTML = `Select your departure hub from the <strong>${label}</strong>:`;
    }
  }

  /**
   * --- GOOGLE AUTHENTICATION & USER SESSION ---
   */
  async function initAuth() {
    try {
      const isFileProtocol = window.location.protocol === 'file:';
      const endpoint = isFileProtocol ? 'http://localhost:3000/api/auth/me' : '/api/auth/me';
      const res = await fetch(endpoint, { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated && data.user) {
          state.user = data.user;
          state.token = data.token || null;
          await loadUserFavorites();
        }
      }
    } catch (e) {
      console.warn('[FindYourPassport] Auth check local notice:', e.message);
      try {
        const cachedUser = localStorage.getItem('findyourpassport_user');
        const cachedToken = localStorage.getItem('findyourpassport_token');
        if (cachedUser) {
          state.user = JSON.parse(cachedUser);
          state.token = cachedToken || null;
          await loadUserFavorites();
        }
      } catch (err) {}
    }
    updateUserUI();
    initGoogleIdentityServices();
  }

  function initGoogleIdentityServices() {
    if (typeof window !== 'undefined' && window.google && window.google.accounts && window.google.accounts.id) {
      try {
        const googleClientId = window.GOOGLE_CLIENT_ID || 'findyourpassport-client-id.apps.googleusercontent.com';
        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: handleGoogleCredentialResponse,
          auto_select: false,
          cancel_on_tap_outside: true
        });

        if (elements.gsiButtonSlot) {
          window.google.accounts.id.renderButton(elements.gsiButtonSlot, {
            theme: 'outline',
            size: 'large',
            text: 'continue_with',
            shape: 'rectangular',
            logo_alignment: 'left',
            width: 320
          });
        }
      } catch (err) {
        console.warn('[FindYourPassport] Google Identity initialization fallback:', err.message);
      }
    }
  }

  async function handleGoogleCredentialResponse(response) {
    if (!response || !response.credential) return;
    try {
      const isFileProtocol = window.location.protocol === 'file:';
      const endpoint = isFileProtocol ? 'http://localhost:3000/api/auth/google' : '/api/auth/google';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ credential: response.credential })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          await finalizeLogin(data.user, data.token);
        }
      }
    } catch (err) {
      console.error('[FindYourPassport] Error verifying Google credential:', err);
    }
  }

  async function handleInstantGoogleLogin(customProfile = null) {
    const defaultProfile = {
      id: `google_${Date.now()}`,
      name: 'Traveler Explorer',
      email: 'traveler@gmail.com',
      picture: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
      given_name: 'Explorer'
    };
    const profile = customProfile || defaultProfile;

    try {
      const isFileProtocol = window.location.protocol === 'file:';
      const endpoint = isFileProtocol ? 'http://localhost:3000/api/auth/google' : '/api/auth/google';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ user: profile })
      });
      if (res.ok) {
        const data = await res.json();
        await finalizeLogin(data.user || profile, data.token);
        return;
      }
    } catch (e) {
      console.warn('[FindYourPassport] Offline login fallback active:', e.message);
    }

    // Local fallback if offline
    await finalizeLogin(profile);
  }

  async function finalizeLogin(user, token = null) {
    state.user = user;
    if (token) state.token = token;
    try {
      localStorage.setItem('findyourpassport_user', JSON.stringify(user));
      if (token) localStorage.setItem('findyourpassport_token', token);
    } catch {}

    await loadUserFavorites();
    updateUserUI();
    closeLoginPrompt();

    // If user clicked heart while logged out, fulfill their pending favorite immediately
    if (state.pendingFavorite) {
      const pending = state.pendingFavorite;
      state.pendingFavorite = null;
      await toggleFavorite(pending);
    } else {
      showToast(`Signed in as ${user.name}`, '✓');
    }
  }

  async function handleLogout() {
    try {
      const isFileProtocol = window.location.protocol === 'file:';
      const endpoint = isFileProtocol ? 'http://localhost:3000/api/auth/logout' : '/api/auth/logout';
      await fetch(endpoint, { method: 'POST', credentials: 'include' });
    } catch (e) {}

    try {
      localStorage.removeItem('findyourpassport_user');
      localStorage.removeItem('findyourpassport_token');
    } catch {}

    const prevName = state.user?.given_name || 'Traveler';
    state.user = null;
    state.token = null;
    state.favorites = [];
    if (elements.accountDropdownMenu) {
      elements.accountDropdownMenu.style.display = 'none';
    }
    updateUserUI();
    showToast(`Signed out (${prevName})`, '👋');
  }

  function updateUserUI() {
    const isLoggedIn = Boolean(state.user);

    if (elements.btnGoogleSignin) {
      elements.btnGoogleSignin.style.display = isLoggedIn ? 'none' : 'inline-flex';
    }

    if (elements.btnUserAvatar) {
      elements.btnUserAvatar.style.display = isLoggedIn ? 'inline-flex' : 'none';
      if (isLoggedIn) {
        const name = state.user.name || 'Traveler';
        const initial = (state.user.given_name || name || 'T').charAt(0).toUpperCase();
        if (state.user.picture && elements.userAvatarImg) {
          elements.userAvatarImg.src = state.user.picture;
          elements.userAvatarImg.style.display = 'block';
          if (elements.userAvatarInitials) elements.userAvatarInitials.style.display = 'none';
        } else {
          if (elements.userAvatarImg) elements.userAvatarImg.style.display = 'none';
          if (elements.userAvatarInitials) {
            elements.userAvatarInitials.textContent = initial;
            elements.userAvatarInitials.style.display = 'flex';
          }
        }
      }
    }

    const isAdmin = Boolean(state.user && state.user.isAdmin);

    if (elements.dropdownUserName) {
      elements.dropdownUserName.textContent = state.user?.name || 'Traveler Explorer';
    }
    if (elements.dropdownUserEmail) {
      if (isAdmin) {
        elements.dropdownUserEmail.innerHTML = `${state.user.email} <span class="badge-edition" style="padding: 2px 7px; font-size: 0.65rem; margin-left: 6px; letter-spacing: 0.05em; background: rgba(220,180,80,0.15); border: 1px solid rgba(220,180,80,0.4); color: #d4a742; border-radius: 4px; font-weight: 700;">ADMIN</span>`;
      } else {
        elements.dropdownUserEmail.textContent = state.user?.email || 'traveler@gmail.com';
      }
    }

    // Looker Studio Analytics: Exclusively visible to authenticated administrator
    if (elements.menuItemAnalytics) {
      elements.menuItemAnalytics.style.display = isAdmin ? 'flex' : 'none';
    }
    if (elements.btnDrawerAnalytics) {
      elements.btnDrawerAnalytics.style.display = 'none';
    }
    if (elements.dropdownAvatarImg && elements.dropdownAvatarInitials) {
      if (state.user?.picture) {
        elements.dropdownAvatarImg.src = state.user.picture;
        elements.dropdownAvatarImg.style.display = 'block';
        elements.dropdownAvatarInitials.style.display = 'none';
      } else {
        elements.dropdownAvatarImg.style.display = 'none';
        elements.dropdownAvatarInitials.textContent = (state.user?.name || 'T').charAt(0).toUpperCase();
        elements.dropdownAvatarInitials.style.display = 'flex';
      }
    }

    const count = (state.favorites || []).length;
    if (elements.headerFavCount) elements.headerFavCount.textContent = count;
    if (elements.menuFavoritesBadge) elements.menuFavoritesBadge.textContent = `${count} saved`;
    if (elements.menuFavoritesSub) elements.menuFavoritesSub.textContent = count === 1 ? '1 destination bookmarked' : `${count} destinations bookmarked`;
    if (elements.drawerFavCount) elements.drawerFavCount.textContent = count;

    if (elements.drawerUserStatus) {
      if (isLoggedIn) {
        elements.drawerUserStatus.innerHTML = `
          <div class="drawer-user-pill">
            <span class="user-pill-dot active"></span>
            <span>Synced to <strong>${state.user.email}</strong></span>
          </div>
        `;
      } else {
        elements.drawerUserStatus.innerHTML = `
          <div class="drawer-user-pill guest-pill">
            <span class="user-pill-dot guest"></span>
            <span>Guest session · <button type="button" class="btn-text-link" id="btn-drawer-login-now">Sign in with Google to sync</button></span>
          </div>
        `;
        const link = document.getElementById('btn-drawer-login-now');
        if (link) {
          link.addEventListener('click', () => {
            closeFavoritesDrawer();
            openLoginPrompt();
          });
        }
      }
    }

    updateFavoriteUI();
  }

  async function loadUserFavorites() {
    if (!state.user?.email) {
      state.favorites = [];
      return;
    }
    try {
      const isFileProtocol = window.location.protocol === 'file:';
      const endpoint = isFileProtocol
        ? `http://localhost:3000/api/favorites?userId=${encodeURIComponent(state.user.email)}`
        : `/api/favorites?userId=${encodeURIComponent(state.user.email)}`;
      const res = await fetch(endpoint, { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        state.favorites = data.favorites || [];
      }
    } catch (e) {
      console.warn('[FindYourPassport] Local fallback loading favorites:', e.message);
      try {
        const localFavs = localStorage.getItem(`findyourpassport_favs_${state.user.email}`);
        if (localFavs) state.favorites = JSON.parse(localFavs);
      } catch (err) {}
    }
  }

  /**
   * --- PERSISTENT FAVORITES & HEART INTERACTIONS ---
   */
  function isDestFavorited(destKey, destName = '') {
    if (!state.favorites || state.favorites.length === 0) return false;
    const normKey = (destKey || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const normName = (destName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return state.favorites.some(f => {
      const fKey = (f.destKey || f.key || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const fName = (f.destinationName || f.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return (normKey && fKey === normKey) || (normName && fName === normName);
    });
  }

  async function toggleFavorite(dest) {
    if (!dest) return;
    const destKey = dest.destKey || dest.key;
    const destName = dest.destinationName || dest.name || 'Expedition';

    // If user is not logged in: Prompt them! Keep guest functionality 100% active
    if (!state.user) {
      openLoginPrompt(dest);
      return;
    }

    const currentlyFavorited = isDestFavorited(destKey, destName);
    const action = currentlyFavorited ? 'remove' : 'add';

    const payload = {
      action,
      destKey,
      userEmail: state.user.email,
      destination: {
        destKey,
        destinationName: destName,
        country: dest.country || '',
        airportCode: dest.airportCode || 'EXP',
        archetype: dest.archetype || state.verdictData?.assignedArchetype || 'The Epicurean Strategist',
        primaryRoute: dest.primaryRoute || '',
        baseFare: dest.basePrice || dest.baseFare || 650,
        rank: dest.rank || 1
      }
    };

    try {
      const isFileProtocol = window.location.protocol === 'file:';
      const endpoint = isFileProtocol ? 'http://localhost:3000/api/favorites' : '/api/favorites';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        state.favorites = data.favorites || [];
      } else {
        throw new Error('Server returned ' + res.status);
      }
    } catch (e) {
      console.warn('[FindYourPassport] Local fallback saving favorite:', e.message);
      if (action === 'remove') {
        state.favorites = state.favorites.filter(f => (f.destKey || f.key) !== destKey);
      } else {
        state.favorites.unshift(payload.destination);
      }
      try {
        localStorage.setItem(`findyourpassport_favs_${state.user.email}`, JSON.stringify(state.favorites));
      } catch (err) {}
    }

    // Trigger visual pop animation
    animateHeartPop();

    updateUserUI();
    if (elements.favoritesDrawerBackdrop && elements.favoritesDrawerBackdrop.style.display !== 'none') {
      renderFavoritesList();
    }

    if (action === 'add') {
      showToast(`Saved "${destName}" to Favorites ♥`, '♥');
    } else {
      showToast(`Removed "${destName}" from Favorites`, '♡');
    }
  }

  function animateHeartPop() {
    [elements.btnFavoriteMatch, elements.btnFavoriteDossier, elements.btnFavoriteDossierNav].forEach(btn => {
      if (btn) {
        btn.classList.remove('pop-anim');
        void btn.offsetWidth; // trigger reflow
        btn.classList.add('pop-anim');
      }
    });
  }

  function updateFavoriteUI() {
    const matches = state.verdictData?.topMatches || [];
    const currentMatch = matches[state.activeMatchIdx];

    if (currentMatch) {
      const isFav = isDestFavorited(currentMatch.destKey, currentMatch.destinationName);

      // Boarding Pass Favorite Button
      if (elements.btnFavoriteMatch) {
        elements.btnFavoriteMatch.classList.toggle('favorited', isFav);
        elements.btnFavoriteMatch.setAttribute('aria-pressed', isFav ? 'true' : 'false');
      }
      if (elements.heartIconPass) {
        elements.heartIconPass.textContent = isFav ? '♥' : '♡';
      }
      if (elements.heartTextPass) {
        elements.heartTextPass.textContent = isFav ? 'Saved in Passport' : 'Save Destination';
      }

      // Dossier Favorite Button (Main)
      if (elements.btnFavoriteDossier) {
        elements.btnFavoriteDossier.classList.toggle('favorited', isFav);
        elements.btnFavoriteDossier.setAttribute('aria-pressed', isFav ? 'true' : 'false');
      }
      if (elements.heartIconDossier) {
        elements.heartIconDossier.textContent = isFav ? '♥' : '♡';
      }
      if (elements.heartTextDossier) {
        elements.heartTextDossier.textContent = isFav ? 'Saved in Passport' : 'Save Destination';
      }

      // Dossier Nav Bar Favorite Button
      if (elements.btnFavoriteDossierNav) {
        elements.btnFavoriteDossierNav.classList.toggle('favorited', isFav);
        elements.btnFavoriteDossierNav.setAttribute('aria-pressed', isFav ? 'true' : 'false');
      }
      if (elements.heartIconDossierNav) {
        elements.heartIconDossierNav.textContent = isFav ? '♥' : '♡';
      }
      if (elements.heartTextDossierNav) {
        elements.heartTextDossierNav.textContent = isFav ? 'Saved in Passport' : 'Save Destination';
      }
    }

    // Carousel Tab Hearts (#tab-0-heart, #tab-1-heart, #tab-2-heart)
    [elements.tab0Heart, elements.tab1Heart, elements.tab2Heart].forEach((tabHeart, idx) => {
      if (tabHeart) {
        const m = matches[idx];
        if (m) {
          const isFav = isDestFavorited(m.destKey, m.destinationName);
          tabHeart.textContent = isFav ? '♥' : '♡';
          tabHeart.classList.toggle('favorited', isFav);
          tabHeart.title = isFav ? 'Saved in Passport' : 'Save to Passport';
        } else {
          tabHeart.textContent = '♡';
          tabHeart.classList.remove('favorited');
        }
      }
    });
  }

  /**
   * --- MODALS & DRAWERS ---
   */
  function openLoginPrompt(dest = null) {
    state.pendingFavorite = dest;
    const previewEl = document.getElementById('login-dest-preview');
    if (elements.previewDestName && elements.previewDestSub) {
      if (dest) {
        elements.previewDestName.textContent = dest.destinationName || dest.name || 'Expedition Destination';
        elements.previewDestSub.textContent = `Sign in to bookmark this ${dest.airportCode || ''} dossier to your Google archive`;
        if (previewEl) previewEl.style.display = 'flex';
      } else {
        if (previewEl) previewEl.style.display = 'none';
      }
    }
    if (elements.loginPromptBackdrop) {
      elements.loginPromptBackdrop.style.display = 'flex';
    }
  }

  function closeLoginPrompt() {
    if (elements.loginPromptBackdrop) {
      elements.loginPromptBackdrop.style.display = 'none';
    }
  }

  function openAboutDrawer() {
    if (elements.accountDropdownMenu) {
      elements.accountDropdownMenu.style.display = 'none';
    }
    if (elements.favoritesDrawerBackdrop) {
      elements.favoritesDrawerBackdrop.style.display = 'none';
    }
    if (elements.aboutDrawerBackdrop) {
      elements.aboutDrawerBackdrop.style.display = 'flex';
    }
  }

  function closeAboutDrawer() {
    if (elements.aboutDrawerBackdrop) {
      elements.aboutDrawerBackdrop.style.display = 'none';
    }
  }

  function initAboutDrawerAccordions() {
    const cards = document.querySelectorAll('.about-card');
    const toggleAllBtn = document.getElementById('btn-toggle-all-cards');

    cards.forEach(card => {
      const headerBtn = card.querySelector('.about-card-header');
      if (!headerBtn) return;

      headerBtn.addEventListener('click', () => {
        const isCurrentlyExpanded = card.classList.contains('is-expanded');
        if (isCurrentlyExpanded) {
          card.classList.remove('is-expanded');
          card.classList.add('is-collapsed');
          headerBtn.setAttribute('aria-expanded', 'false');
        } else {
          card.classList.remove('is-collapsed');
          card.classList.add('is-expanded');
          headerBtn.setAttribute('aria-expanded', 'true');
        }
        updateToggleAllBtnState();
      });
    });

    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', () => {
        const isExpandedState = toggleAllBtn.getAttribute('aria-expanded') === 'true';
        const targetExpanded = !isExpandedState;

        cards.forEach(card => {
          const headerBtn = card.querySelector('.about-card-header');
          if (targetExpanded) {
            card.classList.remove('is-collapsed');
            card.classList.add('is-expanded');
            if (headerBtn) headerBtn.setAttribute('aria-expanded', 'true');
          } else {
            card.classList.remove('is-expanded');
            card.classList.add('is-collapsed');
            if (headerBtn) headerBtn.setAttribute('aria-expanded', 'false');
          }
        });

        updateToggleAllBtnState();
      });
    }

    function updateToggleAllBtnState() {
      if (!toggleAllBtn) return;
      const expandedCards = document.querySelectorAll('.about-card.is-expanded');
      const allExpanded = expandedCards.length === cards.length;
      toggleAllBtn.setAttribute('aria-expanded', allExpanded ? 'true' : 'false');
      toggleAllBtn.innerHTML = allExpanded
        ? '<span class="toggle-icon">⊟</span> Collapse All'
        : '<span class="toggle-icon">⊞</span> Expand All';
    }
  }

  function openFavoritesDrawer() {
    if (elements.accountDropdownMenu) {
      elements.accountDropdownMenu.style.display = 'none';
    }
    if (elements.aboutDrawerBackdrop) {
      elements.aboutDrawerBackdrop.style.display = 'none';
    }
    renderFavoritesList();
    if (elements.favoritesDrawerBackdrop) {
      elements.favoritesDrawerBackdrop.style.display = 'flex';
    }
  }

  function closeFavoritesDrawer() {
    if (elements.favoritesDrawerBackdrop) {
      elements.favoritesDrawerBackdrop.style.display = 'none';
    }
  }

  function renderFavoritesList() {
    const list = elements.favoritesList;
    const empty = elements.favoritesEmpty;
    if (!list) return;

    const favs = state.favorites || [];
    if (favs.length === 0) {
      list.innerHTML = '';
      if (empty) empty.style.display = 'flex';
      return;
    }

    if (empty) empty.style.display = 'none';
    list.innerHTML = '';

    favs.forEach((fav) => {
      const card = document.createElement('div');
      card.className = 'favorite-item-card card-stock';
      card.innerHTML = `
        <div class="fav-card-top">
          <div class="fav-card-title-group">
            <span class="fav-card-code">${fav.airportCode || 'EXP'}</span>
            <div class="fav-card-text">
              <h4 class="fav-card-name">${fav.destinationName || 'Expedition'}</h4>
              <p class="fav-card-country">${fav.country || 'Global'}</p>
            </div>
          </div>
          <button class="btn-fav-remove" data-key="${fav.destKey}" title="Remove from favorites" aria-label="Remove ${fav.destinationName} from favorites">
            ♥
          </button>
        </div>
        <div class="fav-card-meta">
          <span class="fav-archetype-tag">${fav.archetype || 'Curated Expedition'}</span>
          <span class="fav-route-hint">${fav.primaryRoute || 'Partner Alliance'}</span>
        </div>
        <div class="fav-card-actions">
          <button class="btn btn-primary btn-xs btn-fav-explore" data-key="${fav.destKey}">
            Explore Dossier →
          </button>
        </div>
      `;
      list.appendChild(card);
    });

    // Add remove button listeners
    list.querySelectorAll('.btn-fav-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = btn.getAttribute('data-key');
        const targetFav = (state.favorites || []).find(f => f.destKey === key);
        if (targetFav) {
          toggleFavorite(targetFav);
        }
      });
    });

    // Add explore button listeners
    list.querySelectorAll('.btn-fav-explore').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-key');
        exploreDestinationFromFavorites(key);
      });
    });
  }

  /**
   * --- DEDICATED EXPEDITION DOSSIER VIEW CONTROLS ---
   */
  function openDossierView() {
    if (elements.proclamationStage) elements.proclamationStage.style.display = 'none';
    if (elements.manifestStage) elements.manifestStage.style.display = 'none';
    if (elements.deliberationStage) elements.deliberationStage.style.display = 'none';
    if (elements.progressTracker) elements.progressTracker.style.display = 'none';
    if (elements.dossierStage) {
      elements.dossierStage.style.display = 'block';
      const matches = state.verdictData?.topMatches || [];
      const match = matches[state.activeMatchIdx];
      if (match) {
        if (elements.dossierNavDestTitle) {
          elements.dossierNavDestTitle.textContent = match.destinationName || 'Expedition';
        }
        updateDossierView(match);
      }
      updateFavoriteUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function closeDossierView() {
    if (elements.dossierStage) elements.dossierStage.style.display = 'none';
    if (elements.manifestStage) elements.manifestStage.style.display = 'none';
    if (elements.deliberationStage) elements.deliberationStage.style.display = 'none';
    if (elements.progressTracker) elements.progressTracker.style.display = 'none';
    if (elements.proclamationStage) elements.proclamationStage.style.display = 'block';
    updateFavoriteUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startQuiz() {
    if (elements.dossierStage) elements.dossierStage.style.display = 'none';
    resetManifest();
  }

  function exploreDestinationFromFavorites(destKey) {
    closeFavoritesDrawer();

    const matches = state.verdictData?.topMatches || [];
    const matchIdx = matches.findIndex(m => m.destKey === destKey);

    if (matchIdx >= 0) {
      setActiveMatch(matchIdx);
      openDossierView();
      return;
    }

    const dests = getMasterDestinations();
    const dest = dests[destKey];
    if (dest) {
      const syntheticMatch = hydrateDestination(destKey, dest, state.answers, 1);
      if (!state.verdictData) {
        state.verdictData = {
          assignedArchetype: dest.archetype || 'The Epicurean Strategist',
          topMatches: [syntheticMatch]
        };
      } else {
        state.verdictData.topMatches[state.activeMatchIdx] = syntheticMatch;
      }
      setActiveMatch(state.activeMatchIdx);
      openDossierView();
      showToast(`Loaded ${dest.name} Dossier`, '📖');
    }
  }

  /**
   * --- LOOKER STUDIO TELEMETRY & USER ANALYTICS ---
   */
  async function trackQuizCompletion() {
    if (!state.verdictData || !state.verdictData.topMatches) return;
    const matches = state.verdictData.topMatches;
    const origin = state.answers.originHub || state.activeHub || 'JFK';
    const corridor = getCorridorForHub(origin);

    const payload = {
      eventType: 'quiz_completion',
      sessionId: state.sessionId,
      userId: state.user?.email || 'anonymous',
      isAuthenticated: Boolean(state.user),
      originHub: origin,
      originCorridor: corridor.toUpperCase(),
      userArchetype: state.verdictData.assignedArchetype,
      answers: state.answers,
      timestamp: Date.now(),
      topMatches: matches.map(m => ({
        rank: m.rank,
        destKey: m.destKey,
        destinationName: m.destinationName,
        airportCode: m.airportCode,
        country: m.country,
        matchScore: m.matchScore || 100,
        baseFare: m.basePrice || 650,
        coordinates: m.dossier?.coordinates || null
      }))
    };

    try {
      const isFileProtocol = window.location.protocol === 'file:';
      const endpoint = isFileProtocol ? 'http://localhost:3000/api/analytics/track' : '/api/analytics/track';
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('[FindYourPassport] Analytics logging notice:', err.message);
    }
  }

  async function openAnalyticsModal() {
    if (!state.user || !state.user.isAdmin) {
      showToast('Admin access required for Looker Studio analytics', '🔒');
      return;
    }

    if (elements.accountDropdownMenu) {
      elements.accountDropdownMenu.style.display = 'none';
    }
    if (elements.analyticsModalBackdrop) {
      elements.analyticsModalBackdrop.style.display = 'flex';
    }

    const origin = window.location.origin || 'http://localhost:3000';
    const tokenParam = state.token ? `?token=${encodeURIComponent(state.token)}` : '';
    const csvUrl = `${origin}/api/analytics/export${tokenParam}`;
    const btnDownload = document.getElementById('btn-download-looker-csv');
    if (btnDownload) btnDownload.href = csvUrl;

    const formulaBox = elements.sheetsFormulaBox;
    if (formulaBox) {
      formulaBox.querySelector('code').textContent = `=IMPORTDATA("${csvUrl}")`;
    }

    try {
      const endpoint = `${origin}/api/analytics/summary${tokenParam}`;
      const res = await fetch(endpoint, { credentials: 'include' });
      if (res.ok) {
        const summary = await res.json();
        renderAnalyticsSummary(summary);
      }
    } catch (err) {
      console.warn('[FindYourPassport] Could not fetch analytics summary:', err.message);
    }
  }

  function closeAnalyticsModal() {
    if (elements.analyticsModalBackdrop) {
      elements.analyticsModalBackdrop.style.display = 'none';
    }
  }

  function renderAnalyticsSummary(summary) {
    if (!summary) return;
    if (elements.statTotalSessions) elements.statTotalSessions.textContent = summary.totalSessions || 90;
    if (elements.statCatalogSize) elements.statCatalogSize.textContent = 'Curated';
    if (elements.statTotalFavorites) elements.statTotalFavorites.textContent = summary.totalFavorites || 14;
    if (elements.statTopDest) elements.statTopDest.textContent = summary.topDestination || 'San Sebastián';

    if (elements.rankListDestinations && summary.rankings) {
      elements.rankListDestinations.innerHTML = '';
      summary.rankings.slice(0, 5).forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'rank-item';
        row.innerHTML = `
          <div class="rank-item-info">
            <span class="rank-badge">#${idx + 1}</span>
            <span class="rank-name">${item.name} (${item.code})</span>
          </div>
          <span class="rank-count">${item.count} landings</span>
        `;
        elements.rankListDestinations.appendChild(row);
      });
    }
  }

  function showToast(message, icon = '✓') {
    if (!elements.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'passport-toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-msg">${message}</span>
    `;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('visible');
    }, 20);

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  /**
   * Render a specific Gate (1 to 7)
   */
  function renderGate(gateNumber) {
    const gate = GATES[gateNumber - 1];
    if (!gate) return;

    // Update Progress Section
    const progressPercent = (gateNumber / 7) * 100;
    elements.altitudeDisplay.textContent = gate.altitude;
    elements.gateStatus.textContent = `Gate ${gateNumber} of 7 · ${gate.kicker.split('·')[1]?.trim() || ''}`;
    elements.horizonProgress.style.width = `${progressPercent}%`;
    elements.aircraftGlyph.style.left = `${progressPercent}%`;

    // Update Pills
    elements.gatePills.forEach((pill, idx) => {
      const pGate = idx + 1;
      pill.classList.remove('active', 'completed');
      if (pGate === gateNumber) {
        pill.classList.add('active');
      } else if (pGate < gateNumber) {
        pill.classList.add('completed');
      }
    });

    // Update Header Text
    elements.gateKicker.textContent = gate.kicker;
    elements.gateTitle.textContent = gate.title;
    elements.gateSubtitle.textContent = gate.subtitle;

    // Gate 2 Pro-Tip, Corridor Switcher, and Guide display
    const isGate2 = gateNumber === 2;
    if (elements.gate2ProTip) elements.gate2ProTip.style.display = isGate2 ? 'flex' : 'none';
    if (elements.corridorGuideBanner) elements.corridorGuideBanner.style.display = isGate2 ? 'flex' : 'none';
    if (elements.corridorSwitcher) elements.corridorSwitcher.style.display = isGate2 ? 'flex' : 'none';
    if (elements.hubStageCallout) elements.hubStageCallout.style.display = isGate2 ? 'flex' : 'none';
    if (isGate2) {
      updateCorridorTabs();
    }

    // Populate Options Grid
    elements.optionsGrid.innerHTML = '';
    const currentVal = state.answers[gate.key];

    // On Gate 2, filter options by state.selectedCorridor
    const optionsToRender = isGate2
      ? gate.options.filter(opt => opt.corridor === state.selectedCorridor)
      : gate.options;

    optionsToRender.forEach((opt, idx) => {
      const card = document.createElement('div');
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', currentVal === opt.value ? 'true' : 'false');
      card.setAttribute('tabindex', '0');
      card.setAttribute('data-val', opt.value);

      if (isGate2) {
        card.className = `option-card hub-option-card corridor-${opt.corridor} ${currentVal === opt.value ? 'selected' : ''}`;
        card.style.animationDelay = `${idx * 45}ms`;
        card.innerHTML = `
          <div class="option-card-top">
            <span class="option-icon">${opt.icon}</span>
            <div class="hub-iata-pill">
              <span class="hub-iata-val">${opt.value}</span>
              <span class="hub-beacon-dot"></span>
            </div>
            <div class="option-radio"></div>
          </div>
          <div class="option-title">${opt.title}</div>
          <div class="option-desc">${opt.desc}</div>
          <div class="option-tag hub-corridor-tag">${opt.tag}</div>
        `;
      } else {
        card.className = `option-card ${currentVal === opt.value ? 'selected' : ''}`;
        card.innerHTML = `
          <div class="option-card-top">
            <span class="option-icon">${opt.icon}</span>
            <div class="option-radio"></div>
          </div>
          <div class="option-title">${opt.title}</div>
          <div class="option-desc">${opt.desc}</div>
          <div class="option-tag">${opt.tag}</div>
        `;
      }

      card.addEventListener('click', () => {
        selectOption(gate.key, opt.value, card);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectOption(gate.key, opt.value, card);
        }
      });

      elements.optionsGrid.appendChild(card);
    });

    // Update Footer Buttons
    elements.btnPrev.disabled = gateNumber === 1;
    if (gateNumber === 7) {
      elements.btnNext.textContent = 'Analyze Routes & Curate Expeditions 🧭';
    } else {
      elements.btnNext.textContent = `Continue to Gate ${gateNumber + 1} →`;
    }

    updateNextButtonState(gate.key);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Handle Option Selection
   */
  function selectOption(key, value, cardElement) {
    state.answers[key] = value;

    // Update selected visuals in grid
    const allCards = elements.optionsGrid.querySelectorAll('.option-card');
    allCards.forEach(c => {
      c.classList.remove('selected');
      c.setAttribute('aria-checked', 'false');
    });

    cardElement.classList.add('selected');
    cardElement.setAttribute('aria-checked', 'true');

    // If setting originHub, sync activeHub for the chart and update corridor badge
    if (key === 'originHub') {
      state.activeHub = value;
      state.answers.corridor = state.selectedCorridor || 'us_east';
      updateCorridorTabs();
    }

    updateNextButtonState(key);
  }

  /**
   * Enable/Disable Next Button based on current gate selection
   */
  function updateNextButtonState(key) {
    const hasSelection = Boolean(state.answers[key]);
    elements.btnNext.disabled = !hasSelection;
    elements.footerHint.textContent = hasSelection ? 'Ready to advance' : 'Select one to advance';
  }

  /**
   * Handle Next/Submit Click
   */
  async function handleNextClick() {
    const currentGateObj = GATES[state.currentGate - 1];
    if (!state.answers[currentGateObj.key]) return;

    if (state.currentGate < 7) {
      state.currentGate++;
      renderGate(state.currentGate);
    } else {
      // Gate 7 reached: begin Cartographer's Compass deliberation
      await startDeliberationCeremony();
    }
  }

  /**
   * Deliberation Stage with Compass Pulse & 1.5s Reading Transitions
   * Guaranteed to complete and reveal results without getting stuck under any condition
   */
  async function startDeliberationCeremony() {
    let phraseInterval = null;
    let timeoutFallback = null;

    try {
      // Hide Manifest Stage, Show Deliberation Stage
      if (elements.manifestStage) elements.manifestStage.style.display = 'none';
      if (elements.deliberationStage) elements.deliberationStage.style.display = 'flex';
      if (elements.progressTracker) elements.progressTracker.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Rotate Deliberation Phrases every 1.5 seconds
      let phraseIdx = 0;
      if (elements.deliberationHeading) {
        elements.deliberationHeading.textContent = DELIBERATION_PHRASES[0];
      }
      if (elements.deliberationSub) {
        elements.deliberationSub.textContent = DELIBERATION_SUBS[0];
      }

      phraseInterval = setInterval(() => {
        phraseIdx = (phraseIdx + 1) % DELIBERATION_PHRASES.length;
        if (elements.deliberationHeading) {
          elements.deliberationHeading.style.opacity = '0';
        }
        if (elements.deliberationSub) {
          elements.deliberationSub.style.opacity = '0';
        }
        setTimeout(() => {
          if (elements.deliberationHeading) {
            elements.deliberationHeading.textContent = DELIBERATION_PHRASES[phraseIdx];
            elements.deliberationHeading.style.opacity = '1';
          }
          if (elements.deliberationSub) {
            elements.deliberationSub.textContent = DELIBERATION_SUBS[phraseIdx];
            elements.deliberationSub.style.opacity = '1';
          }
        }, 150);
      }, 1500);

      // Failsafe timer: force reveal after 4.5 seconds maximum no matter what
      timeoutFallback = setTimeout(() => {
        console.warn('[FindYourPassport] Deliberation failsafe timer triggered. Revealing now.');
        if (!state.verdictData) {
          state.verdictData = getClientDeterministicVerdict(state.answers);
        }
        revealProclamation();
      }, 4500);

      let verdictData = null;
      const startTime = Date.now();

      // Determine API endpoint
      const isFileProtocol = window.location.protocol === 'file:';
      const apiEndpoint = isFileProtocol ? 'http://localhost:3000/api/sort' : '/api/sort';

      try {
        const headers = { 'Content-Type': 'application/json' };
        if (state.apiKey) {
          headers['x-gemini-api-key'] = state.apiKey;
        }

        const controller = new AbortController();
        const fetchTimeout = setTimeout(() => controller.abort(), 3500);

        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify(state.answers),
          signal: controller.signal
        });
        clearTimeout(fetchTimeout);

        if (response.ok) {
          verdictData = await response.json();
        }
      } catch (err) {
        console.warn('[FindYourPassport] Network or API issue calling /api/sort, using client engine:', err.message);
      }

      // Guarantee full data via client-side Cartographer Knowledge Engine if API is unavailable
      if (!verdictData || !verdictData.topMatches || verdictData.topMatches.length === 0) {
        console.log('[FindYourPassport] Activating Autonomous Cartographer Engine for guaranteed verdict.');
        verdictData = getClientDeterministicVerdict(state.answers);
      }

      // Atmospheric wait: min 1.5s for compass animation feel
      const elapsedTime = Date.now() - startTime;
      const minWait = 1500;
      if (elapsedTime < minWait) {
        await new Promise(resolve => setTimeout(resolve, minWait - elapsedTime));
      }

      state.verdictData = verdictData;
      revealProclamation();
    } catch (unexpectedErr) {
      console.error('[FindYourPassport] Unexpected error during deliberation:', unexpectedErr);
      if (!state.verdictData) {
        state.verdictData = getClientDeterministicVerdict(state.answers);
      }
      revealProclamation();
    } finally {
      if (phraseInterval) clearInterval(phraseInterval);
      if (timeoutFallback) clearTimeout(timeoutFallback);
    }
  }

  /**
   * Reveal the Proclamation & Boarding Pass
   */
  function revealProclamation() {
    try {
      // Physically hide Deliberation & Manifest Stages, keep Dossier hidden until user clicks button
      if (elements.deliberationStage) elements.deliberationStage.style.display = 'none';
      if (elements.manifestStage) elements.manifestStage.style.display = 'none';
      if (elements.progressTracker) elements.progressTracker.style.display = 'none';
      if (elements.dossierStage) elements.dossierStage.style.display = 'none';
      if (elements.proclamationStage) elements.proclamationStage.style.display = 'block';
      if (elements.btnRestart) {
        elements.btnRestart.style.display = 'inline-flex';
        elements.btnRestart.innerHTML = '<span class="icon">🧭</span> Calibrate Quiz';
      }

      const data = state.verdictData || getClientDeterministicVerdict(state.answers);

      // Archetype and Verdict
      const archetype = data.assignedArchetype || 'The Epicurean Strategist';
      if (elements.stampArchetype) elements.stampArchetype.textContent = `MATCH: ${archetype.toUpperCase()}`;
      if (elements.revealedArchetypeTitle) elements.revealedArchetypeTitle.textContent = data.archetypeTitle || archetype;
      if (elements.revealedArchetypeSubtitle) elements.revealedArchetypeSubtitle.textContent = data.archetypeSubtitle || 'Pursuer of precision travel';
      if (elements.oracleVerdict) elements.oracleVerdict.textContent = `"${data.sortingVerdict || ''}"`;

      // Populate Carousel Tabs
      const matches = data.topMatches || [];
      const formatTabCity = (name, fallback) => {
        if (!name) return fallback;
        return name.split(',')[0].split('&')[0].trim();
      };
      if (matches[0] && elements.tab0Name) elements.tab0Name.textContent = formatTabCity(matches[0].destinationName, 'Match #1');
      if (matches[1] && elements.tab1Name) elements.tab1Name.textContent = formatTabCity(matches[1].destinationName, 'Match #2');
      if (matches[2] && elements.tab2Name) elements.tab2Name.textContent = formatTabCity(matches[2].destinationName, 'Match #3');

      // Ensure Airfare Intelligence prioritizes the traveler's chosen origin hub from Gate 2
      const chosenHub = state.answers.originHub || state.activeHub || 'JFK';
      state.activeHub = chosenHub;
      renderHubPills(chosenHub);

      // Maintain user's active match if already selected, otherwise default to match 0
      const targetMatchIdx = (typeof state.activeMatchIdx === 'number' && state.activeMatchIdx < matches.length)
        ? state.activeMatchIdx
        : 0;
      setActiveMatch(targetMatchIdx);

      // Catalog telemetry for Looker Studio
      trackQuizCompletion();

      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      console.error('[FindYourPassport] Error revealing proclamation:', e);
      if (elements.deliberationStage) elements.deliberationStage.style.display = 'none';
      if (elements.manifestStage) elements.manifestStage.style.display = 'none';
      if (elements.progressTracker) elements.progressTracker.style.display = 'none';
      if (elements.dossierStage) elements.dossierStage.style.display = 'none';
      if (elements.proclamationStage) elements.proclamationStage.style.display = 'block';
      if (elements.btnRestart) elements.btnRestart.style.display = 'inline-flex';
    }
  }

  /**
   * Programmatically generate dynamic SVG country entry stamp template
   * Modeled strictly after authentic consular transit seals.
   * Hydrates with destination name, airport IATA code, and sorted archetype,
   * applying organic rotation and CSS multiply filter.
   */
  function generatePassportStampSvg(destination, archetype) {
    if (!destination) return '';
    const airportRaw = destination.airportCode || destination.code || 'EXP';
    const cleanCode = airportRaw.split('/')[0].trim().toUpperCase();
    const rawCountry = destination.country || extractCountry(destination.destinationName || destination.name) || 'GLOBAL';
    const cleanCountry = rawCountry.replace(/,.*$/, '').trim().toUpperCase();

    // Top Header Inscription:
    let headerText = 'IMMIGRATION TRANSIT CONTROL';
    if (cleanCountry && cleanCountry !== 'GLOBAL') {
      if (cleanCountry.length <= 14) {
        headerText = `IMMIGRATION CONTROL · ${cleanCountry}`;
      } else {
        headerText = `IMMIGRATION · ${cleanCountry}`;
      }
    }
    const headerFontSize = headerText.length > 28 ? 10.5 : (headerText.length > 22 ? 11.5 : 12.5);

    // Bottom Archetype Inscription:
    const cleanArch = (archetype || 'CLASS EXPLORER').toUpperCase().replace(/^THE\s+/, '').trim();
    let bottomText = `PASSPORT ADMITTED • ${cleanArch}`;
    if (!cleanArch.startsWith('CLASS') && cleanArch.length < 18) {
      bottomText = `PASSPORT ADMITTED • CLASS ${cleanArch}`;
    }
    const bottomFontSize = bottomText.length > 36 ? 8.5 : (bottomText.length > 28 ? 9.5 : 10.5);

    // Code font sizing (3 vs 4 chars):
    const codeFontSize = cleanCode.length >= 4 ? 54 : 64;

    // Deterministic organic rotation angle (-3.2deg to +3.2deg) per airport code
    let hash = 0;
    for (let i = 0; i < cleanCode.length; i++) {
      hash = (hash << 5) - hash + cleanCode.charCodeAt(i);
    }
    const angles = [-2.8, 1.8, -1.9, 2.5, -3.2, 1.4, -2.1, 2.9];
    const rotation = angles[Math.abs(hash) % angles.length];
    const uid = 'stamp_' + cleanCode.toLowerCase() + '_' + Math.abs(hash % 9999);

    return `
    <div class="passport-entry-stamp-box" style="transform: rotate(${rotation}deg);">
      <svg viewBox="0 0 340 220" width="100%" height="auto" class="passport-entry-seal" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Passport Entry Seal: ${cleanCode} · ${cleanCountry}">
        <defs>
          <!-- Authentic rubber stamp grit & ink-bleed filter -->
          <filter id="stamp-grit-${uid}" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" xChannelSelector="R" yChannelSelector="G" result="distorted" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.88 0" in="distorted" result="weathered" />
          </filter>
        </defs>

        <g filter="url(#stamp-grit-${uid})" stroke="currentColor" fill="none">
          <!-- 1. Outer heavy rounded rectangle -->
          <rect x="8" y="8" width="324" height="204" rx="24" ry="24" stroke-width="5" />

          <!-- 2. Perimeter of dotted round marks -->
          <rect x="18" y="18" width="304" height="184" rx="16" ry="16" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="0.1 7.2" />

          <!-- 3. Inner solid frame -->
          <rect x="26" y="26" width="288" height="168" rx="6" ry="6" stroke-width="2.6" />

          <!-- 4. Top Solid Banner -->
          <path d="M 27 27 H 313 V 58 H 27 Z" fill="currentColor" stroke="none" />
          <text x="170" y="47" fill="#faf8f4" stroke="none" font-family="'Space Grotesk', -apple-system, sans-serif" font-weight="800" font-size="${headerFontSize}" letter-spacing="1.1" text-anchor="middle">
            ${headerText}
          </text>

          <!-- 5. Center Section: Airport IATA Code on Left -->
          <text x="42" y="128" fill="currentColor" stroke="none" font-family="'Space Grotesk', -apple-system, sans-serif" font-weight="900" font-size="${codeFontSize}" letter-spacing="2">
            ${cleanCode}
          </text>

          <!-- 6. Center Section: Consular Inspection Flag Box on Right -->
          <rect x="214" y="75" width="82" height="55" stroke-width="3" />
          <line x1="238" y1="75" x2="238" y2="130" stroke-width="2.8" />
          <line x1="238" y1="93.3" x2="296" y2="93.3" stroke-width="2.2" />
          <line x1="238" y1="111.6" x2="296" y2="111.6" stroke-width="2.2" />

          <!-- 7. Horizontal Dividing Rule -->
          <line x1="26" y1="148" x2="314" y2="148" stroke-width="2.8" />

          <!-- 8. Bottom Inscription Banner -->
          <text x="170" y="173" fill="currentColor" stroke="none" font-family="'Space Grotesk', -apple-system, sans-serif" font-weight="800" font-size="${bottomFontSize}" letter-spacing="1" text-anchor="middle">
            ${bottomText}
          </text>
        </g>
      </svg>
    </div>
    `;
  }

  /**
   * Switch Active Match in Carousel (#1, #2, #3)
   */
  function setActiveMatch(index) {
    state.activeMatchIdx = index;
    const matches = state.verdictData?.topMatches || [];
    const match = matches[index];
    if (!match) return;

    // Update Tabs
    [elements.tab0, elements.tab1, elements.tab2].forEach((tab, i) => {
      if (tab) {
        tab.classList.toggle('active', i === index);
        tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
      }
    });

    // Update Boarding Pass
    if (elements.passMatchBadge) elements.passMatchBadge.textContent = `#${match.rank || index + 1} ${match.rank === 1 ? 'PRIMARY EXPEDITION MATCH' : (match.rank === 2 ? 'RUNNER-UP EXPEDITION' : 'ALTERNATIVE EXPEDITION')}`;
    if (elements.passOriginCode) elements.passOriginCode.textContent = state.activeHub;
    if (elements.passOriginCity) elements.passOriginCity.textContent = getCityForHub(state.activeHub);
    if (elements.passDestCode) elements.passDestCode.textContent = (match.airportCode || 'EXP').split('/')[0].trim();
    if (elements.passDestCity) elements.passDestCity.textContent = match.destinationName || 'Expedition';
    if (elements.stubRouteCode) elements.stubRouteCode.textContent = `${state.activeHub} ➔ ${(match.airportCode || 'EXP').split('/')[0].trim()}`;
    if (elements.stubPassengerTitle) elements.stubPassengerTitle.textContent = match.passengerLabel || 'EXPEDITION GUEST';

    // Update Dynamic Authentic Passport Entry Stamp (SVG Template)
    if (elements.passportStampContainer) {
      const assignedArch = state.verdictData?.assignedArchetype || state.verdictData?.archetypeTitle || 'CLASS EXPLORER';
      elements.passportStampContainer.innerHTML = generatePassportStampSvg(match, assignedArch);
    }

    // Alliance & Route
    const route = match.primaryRoute || '';
    if (elements.passAllianceTag) elements.passAllianceTag.textContent = route.includes('Oneworld') ? 'Oneworld Direct' : (route.includes('Star Alliance') ? 'Star Alliance Partner' : 'SkyTeam Corridor');
    if (elements.passRoutingSummary) elements.passRoutingSummary.textContent = route.split(' on ')[0] || 'Direct / 1-Stop Transit';

    // Metric Pills
    if (elements.pillWindow) elements.pillWindow.textContent = match.bestWindow || 'Seasonal Window';
    if (elements.pillBudget) elements.pillBudget.textContent = match.budgetVibe || 'Curated Value';
    if (elements.pillRoute) elements.pillRoute.textContent = route || 'Optimized Corridor';

    // Narrative & Strategy Cards
    if (elements.passMatchReason) elements.passMatchReason.textContent = match.matchReason || '';
    const activeHub = (state.manifest && state.manifest.originHub) || state.activeHub || 'JFK';
    if (elements.strategyStayStyle) elements.strategyStayStyle.textContent = sanitizeLodgingStayStyle(match.stayStyle) || '';
    if (elements.strategyFlightSecret) elements.strategyFlightSecret.textContent = sanitizeRouteStrategy(match.flightSecret, activeHub) || '';

    // Update Dossier View
    updateDossierView(match);
    if (elements.dossierNavDestTitle) {
      elements.dossierNavDestTitle.textContent = match.destinationName || 'Expedition';
    }

    // Update Favorite Heart State for match & tabs
    updateFavoriteUI();
  }

  /**
   * Update Dossier View & Render Interactive SVG Fare Chart
   */
  function updateDossierView(match) {
    if (!match) return;

    if (elements.dossierDestTitle) elements.dossierDestTitle.textContent = match.destinationName || 'Expedition';
    if (elements.dossierCountryTitle) elements.dossierCountryTitle.textContent = `${match.country || 'Global'} · Precision Alliance Routing`;
    if (elements.dossierOverviewText) elements.dossierOverviewText.textContent = match.dossier?.overview || match.matchReason || '';

    // Seasonal Intelligence & Climate: explicitly reinforce best travel window (months)
    const bestWindow = match.bestWindow || match.season || '';
    const rawSeasonDetail = (match.dossier?.bestTimesDetail || '').trim();

    let seasonExplainer = '';
    if (bestWindow) {
      if (rawSeasonDetail.toLowerCase().startsWith('best window:')) {
        const dotIndex = rawSeasonDetail.indexOf('.');
        if (dotIndex !== -1) {
          const prefix = rawSeasonDetail.substring(0, dotIndex + 1);
          const remainder = rawSeasonDetail.substring(dotIndex + 1).trim();
          seasonExplainer = `<strong class="dossier-window-highlight">${prefix}</strong> ${remainder}`;
        } else {
          seasonExplainer = `<strong class="dossier-window-highlight">${rawSeasonDetail}</strong>`;
        }
      } else {
        seasonExplainer = `<strong class="dossier-window-highlight">Best Window: ${bestWindow}.</strong> ${rawSeasonDetail || 'Optimal climate and seasonal conditions for exploration.'}`;
      }
    } else {
      seasonExplainer = rawSeasonDetail;
    }

    if (elements.dossierSeasonText) {
      elements.dossierSeasonText.innerHTML = seasonExplainer;
    }

    // Cost Breakdown
    if (match.dossier?.costBreakdown) {
      if (elements.costLodging) elements.costLodging.textContent = match.dossier.costBreakdown.lodging || '$180 – $350 / night';
      if (elements.costDining) elements.costDining.textContent = match.dossier.costBreakdown.dining || '$45 – $80 / day';
      if (elements.costTransit) elements.costTransit.textContent = match.dossier.costBreakdown.transit || '$25 / day';
      if (elements.costPoints) elements.costPoints.textContent = match.dossier.costBreakdown.pointsVal || '2.2¢ per point';
    }

    // 4 Signature Highlights
    if (elements.highlightsGrid) {
      elements.highlightsGrid.innerHTML = '';
      const highlights = match.dossier?.signatureHighlights || [];
      highlights.forEach(h => {
        const isObj = typeof h === 'object' && h !== null;
        const icon = isObj ? (h.icon || '📍') : getHighlightIcon(h);
        const title = isObj ? (h.title || 'Highlight') : deriveHighlightTitle(h);
        const desc = isObj ? (h.description || '') : h;

        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.innerHTML = `
          <span class="highlight-icon">${icon}</span>
          <div class="highlight-content">
            <h4 class="highlight-title">${title}</h4>
            <p class="highlight-desc">${desc}</p>
          </div>
        `;
        elements.highlightsGrid.appendChild(card);
      });
    }

    // Update Geographic Topography & Embedded Google Map Interface
    updateMapSection(match);

    // Render Interactive 6-Month Fare Chart
    renderFareChart(match);
  }

  /**
   * Format Coordinates into Standard Nautical / Cartographic Latitude and Longitude
   */
  function formatCoordinates(lat, lng) {
    if (lat == null || lng == null || isNaN(lat) || isNaN(lng)) return '35.8989° N, 14.5146° E';
    const latDir = lat >= 0 ? 'N' : 'S';
    const lngDir = lng >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lng).toFixed(4)}° ${lngDir}`;
  }

  /**
   * Update Embedded Google Maps Interface for Active Match
   */
  function updateMapSection(match) {
    if (!match) return;

    const destKey = match.destKey || '';
    const masterDests = getMasterDestinations();
    const destInfo = masterDests[destKey] || {};
    const coords = match.dossier?.coordinates || match.coordinates || destInfo.coordinates || COORDINATES[destKey] || { lat: 40.0, lng: 0.0 };
    const query = match.mapQuery || destInfo.mapQuery || match.destinationName || `${coords.lat},${coords.lng}`;

    if (elements.mapDestinationName) {
      elements.mapDestinationName.textContent = match.destinationName || 'Destination Topography';
    }
    if (elements.mapCoordsText) {
      elements.mapCoordsText.textContent = formatCoordinates(coords.lat, coords.lng);
    }
    if (elements.btnOpenGoogleMaps) {
      elements.btnOpenGoogleMaps.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    }
    if (elements.destinationMapIframe) {
      const embedParam = (coords && typeof coords.lat === 'number' && typeof coords.lng === 'number')
        ? `${coords.lat},${coords.lng}`
        : encodeURIComponent(query);
      const embedSrc = `https://maps.google.com/maps?q=${embedParam}&t=&z=11&ie=UTF8&iwloc=&output=embed`;
      if (elements.destinationMapIframe.getAttribute('data-current-src') !== embedSrc) {
        elements.destinationMapIframe.src = embedSrc;
        elements.destinationMapIframe.setAttribute('data-current-src', embedSrc);
      }
    }
  }

  // All supported departure hubs for the fare intelligence engine
  const ALL_HUBS = [
    'JFK', 'BOS', 'ATL', 'MIA',
    'ORD', 'DFW', 'DEN', 'MSP',
    'LAX', 'SFO', 'SEA',
    'LHR', 'CDG', 'AMS', 'FRA', 'MUC', 'MAD',
    'HND', 'ICN', 'HKG', 'SIN', 'SYD', 'MEL'
  ];

  /**
   * Dynamically Render Departure Hub Pills
   * Places traveler's selected origin hub as the FIRST option and active by default
   */
  function renderHubPills(selectedHub) {
    if (!elements.hubPills || !elements.moreHubsDrawer) return;

    const primaryHub = selectedHub || state.answers.originHub || state.activeHub || 'JFK';
    const remainingHubs = ALL_HUBS.filter(h => h !== primaryHub);
    const orderedHubs = [primaryHub, ...remainingHubs];

    // Primary row: 5 hubs plus the "+ More Hubs" toggle (wraps into two neat rows of 3 on mobile)
    const mainPills = orderedHubs.slice(0, 5);
    const drawerPills = orderedHubs.slice(5);

    let mainHtml = '';
    mainPills.forEach(hub => {
      const isActive = hub === primaryHub ? 'active' : '';
      mainHtml += `<button class="hub-pill ${isActive}" data-hub="${hub}">${hub}</button>`;
    });
    mainHtml += `<button class="hub-pill hub-more-btn" id="btn-toggle-more-hubs">${state.moreHubsOpen ? '− Less Hubs' : '+ More Hubs'}</button>`;

    elements.hubPills.innerHTML = mainHtml;

    let drawerHtml = '';
    drawerPills.forEach(hub => {
      const isActive = hub === primaryHub ? 'active' : '';
      drawerHtml += `<button class="hub-pill ${isActive}" data-hub="${hub}">${hub}</button>`;
    });
    elements.moreHubsDrawer.innerHTML = drawerHtml;
  }

  /**
   * Render Interactive 6-Month Cash Fare Projection SVG Chart
   */
  function renderFareChart(match) {
    if (!elements.svgChartWrapper) return;

    const hub = state.activeHub || state.answers.originHub || 'JFK';
    const destCoords = match.coordinates || match.dossier?.coordinates || COORDINATES[match.destKey] || { lat: 19.4326, lng: -99.1332 };

    // Dynamically calculate audited 6-month fare projection based on Great-Circle route distance
    const fares = generateFareProjectionForRoute(hub, destCoords);

    // Find lowest fare
    let minPrice = Infinity;
    let lowIdx = 0;
    fares.forEach((f, idx) => {
      if (f.price < minPrice) {
        minPrice = f.price;
        lowIdx = idx;
      }
    });

    // Chart Dimensions with generous headroom for clean badge & price separation
    const svgWidth = 720;
    const svgHeight = 295;
    const paddingLeft = 55;
    const paddingRight = 40;
    const paddingTop = 74; // Ample room above highest bar for LOW DEAL badge & price label
    const paddingBottom = 42;

    const chartWidth = svgWidth - paddingLeft - paddingRight;
    const chartHeight = svgHeight - paddingTop - paddingBottom;

    const maxPrice = Math.max(...fares.map(f => f.price), 850);
    const minChartY = Math.min(...fares.map(f => f.price)) * 0.75;
    const priceRange = maxPrice - minChartY;

    const barWidth = 44;
    const totalBars = fares.length;
    const barSpacing = chartWidth / totalBars;

    // Build SVG Elements
    let svgContent = `
      <svg class="fare-svg" viewBox="0 0 ${svgWidth} ${svgHeight}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="6-Month Cash Fare Projection Chart">
        <defs>
          <linearGradient id="barGradNormal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0a1b39" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#0a1b39" stop-opacity="0.65" />
          </linearGradient>
          <linearGradient id="barGradDeal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#059669" stop-opacity="1" />
            <stop offset="100%" stop-color="#10b981" stop-opacity="0.8" />
          </linearGradient>
          <filter id="dealShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#059669" flood-opacity="0.3" />
          </filter>
        </defs>

        <!-- Horizontal Grid Lines -->
    `;

    // 4 Grid Lines
    for (let i = 0; i <= 3; i++) {
      const yVal = paddingTop + (chartHeight / 3) * i;
      const priceVal = Math.round(maxPrice - (priceRange / 3) * i);
      svgContent += `
        <line x1="${paddingLeft}" y1="${yVal}" x2="${svgWidth - paddingRight}" y2="${yVal}" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
        <text x="${paddingLeft - 10}" y="${yVal + 4}" font-size="11" font-weight="500" fill="#94a3b8" text-anchor="end">$${priceVal}</text>
      `;
    }

    // Render Bars & Labels
    fares.forEach((item, idx) => {
      const isLowest = idx === lowIdx;
      const barHeight = ((item.price - minChartY) / priceRange) * chartHeight;
      const barX = paddingLeft + idx * barSpacing + (barSpacing - barWidth) / 2;
      const barY = paddingTop + chartHeight - barHeight;
      const centerX = barX + barWidth / 2;
      const priceY = barY - 10; // Baseline of price text

      // Bar rect
      const fillGrad = isLowest ? 'url(#barGradDeal)' : 'url(#barGradNormal)';
      svgContent += `
        <g class="bar-group" tabindex="0">
          <rect x="${barX}" y="${barY}" width="${barWidth}" height="${barHeight}" rx="4" fill="${fillGrad}" />
          <!-- Price label above bar -->
          <text x="${centerX}" y="${priceY}" font-size="12" font-weight="700" fill="${isLowest ? '#059669' : '#0a1b39'}" text-anchor="middle">$${item.price}</text>
          <!-- Month label below bar -->
          <text x="${centerX}" y="${svgHeight - 16}" font-size="12" font-weight="600" fill="#475569" text-anchor="middle">${item.month}</text>
        </g>
      `;

      // LOW DEAL Badge cleanly positioned with clear vertical separation above price label
      if (isLowest) {
        const badgeWidth = 80;
        const badgeHeight = 20;
        const badgeX = centerX - badgeWidth / 2;
        // Position badge well above price label (price text baseline is at barY - 10, characters reach barY - 22)
        // Pointer tip at barY - 26, badge rect from barY - 50 to barY - 30
        const badgeY = barY - 50;

        svgContent += `
          <!-- LOW DEAL Tag positioned with clean vertical separation -->
          <g class="low-deal-tag" filter="url(#dealShadow)">
            <rect x="${badgeX}" y="${badgeY}" width="${badgeWidth}" height="${badgeHeight}" rx="4" fill="#059669" />
            <polygon points="${centerX - 4},${badgeY + badgeHeight} ${centerX + 4},${badgeY + badgeHeight} ${centerX},${badgeY + badgeHeight + 4}" fill="#059669" />
            <text x="${centerX}" y="${badgeY + 14}" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="0.8" text-anchor="middle">★ LOW DEAL</text>
          </g>
        `;
      }
    });

    svgContent += `</svg>`;
    elements.svgChartWrapper.innerHTML = svgContent;

    // Update Action Bar summary & Google Flights URL
    const lowDealMonth = fares[lowIdx].month;
    elements.summaryLowPrice.textContent = `$${fares[lowIdx].price}`;
    elements.summaryLowMonth.textContent = lowDealMonth;
    elements.summaryActiveHub.textContent = hub;

    const destCode = (match.airportCode || 'MEX').split('/')[0].trim();
    const monthFullNames = {
      Nov: 'November',
      Dec: 'December',
      Jan: 'January',
      Feb: 'February',
      Mar: 'March',
      Apr: 'April'
    };
    const fullMonthName = monthFullNames[lowDealMonth] || lowDealMonth;
    const flightQuery = encodeURIComponent(`one way flights from ${hub} to ${destCode} in ${fullMonthName}`);

    elements.btnLaunchFlights.textContent = `✈ Launch Google Flights from ${hub} ↗`;
    elements.btnLaunchFlights.title = `Search one-way flights from ${hub} to ${destCode} in ${fullMonthName} on Google Flights`;
    elements.btnLaunchFlights.href = `https://www.google.com/travel/flights?q=${flightQuery}`;
  }

  /**
   * Set Active Origin Hub for the Chart
   */
  function setActiveHub(hub) {
    state.activeHub = hub;

    // Update Pill states across both main bar and drawer
    document.querySelectorAll('.hub-pill[data-hub]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-hub') === hub);
    });

    // Re-render current match chart
    const matches = state.verdictData?.topMatches || [];
    const match = matches[state.activeMatchIdx];
    if (match) {
      elements.passOriginCode.textContent = hub;
      elements.passOriginCity.textContent = getCityForHub(hub);
      renderFareChart(match);
    }
  }

  /**
   * Map Hub Code to City Name
   */
  function getCityForHub(hubCode) {
    const map = {
      JFK: 'New York Metro, USA',
      BOS: 'Boston, USA',
      ATL: 'Atlanta, USA',
      MIA: 'Miami, USA',
      ORD: 'Chicago, USA',
      DFW: 'Dallas / Fort Worth, USA',
      LAX: 'Los Angeles, USA',
      SFO: 'San Francisco, USA',
      SEA: 'Seattle, USA',
      LHR: 'London, United Kingdom',
      CDG: 'Paris, France',
      AMS: 'Amsterdam, Netherlands',
      FRA: 'Frankfurt, Germany',
      MUC: 'Munich, Germany',
      MAD: 'Madrid, Spain',
      HND: 'Tokyo, Japan',
      ICN: 'Seoul, South Korea',
      HKG: 'Hong Kong',
      SIN: 'Singapore',
      SYD: 'Sydney, Australia',
      MEL: 'Melbourne, Australia',
      EWR: 'Newark, USA',
      IAD: 'Washington DC, USA',
      IAH: 'Houston, USA',
      DEN: 'Denver, USA',
      MSP: 'Minneapolis / St. Paul, USA'
    };
    return map[hubCode] || `${hubCode}`;
  }

  /**
   * Reset Manifest State
   */
  function resetManifest() {
    state.currentGate = 1;
    state.selectedCorridor = 'us_east';
    state.answers = {
      crew: null,
      originHub: 'JFK',
      sensoryVibe: null,
      culinarySignature: null,
      lodgingSanctuary: null,
      fundingModel: null,
      tempo: null
    };
    state.verdictData = null;
    state.activeMatchIdx = 0;
    state.activeHub = 'JFK';
    state.moreHubsOpen = false;
    updateCorridorTabs();
    renderHubPills('JFK');

    if (elements.proclamationStage) elements.proclamationStage.style.display = 'none';
    if (elements.dossierStage) elements.dossierStage.style.display = 'none';
    if (elements.deliberationStage) elements.deliberationStage.style.display = 'none';
    if (elements.manifestStage) elements.manifestStage.style.display = 'block';
    if (elements.progressTracker) elements.progressTracker.style.display = 'block';
    if (elements.btnRestart) {
      elements.btnRestart.style.display = 'inline-flex';
      elements.btnRestart.innerHTML = '<span class="icon">✕</span> Cancel Quiz';
    }

    renderGate(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Boot Application
  document.addEventListener('DOMContentLoaded', init);
})();
