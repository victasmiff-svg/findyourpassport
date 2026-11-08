/**
 * FindYourPassport (findyourpassport.com)
 * Active Transfer Bonuses & Award Arbitrage Engine
 *
 * Sourced directly from Frequent Miler's live transferable currency database.
 * Strictly excludes hotel transfer partners per cartographic travel focus.
 * Promotions activate and expire automatically based on UTC date boundaries.
 */

var ACTIVE_TRANSFER_BONUSES = [
  // 1. Chase Ultimate Rewards -> British Airways & Iberia Avios (30% Bonus)
  {
    id: "chase-avios-nov2026",
    bank: "Chase Ultimate Rewards",
    bankCode: "chase",
    partnerName: "British Airways & Iberia Avios",
    partnerCode: "avios",
    alliance: "Oneworld",
    bonusPercent: 30,
    startDate: "2026-11-01T00:00:00Z",
    endDate: "2026-12-01T23:59:59Z",
    headline: "30% Chase UR Bonus to British Airways & Iberia Avios",
    badgeLabel: "+30% Chase Bonus",
    exampleStandardRate: 34000,
    cabinContext: "Off-Peak Transatlantic Business",
    currencyNeeded: "Chase Ultimate Rewards",
    keywords: ["avios", "british airways", "iberia", "aer lingus"],
    eligibleDestinations: ["sansebastian", "madrid", "barcelona", "mallorca", "dublin", "london", "edinburgh", "cotswolds"],
    notes: "Lowers off-peak transatlantic business class on Iberia (Madrid/Bilbao) down to only ~26,000 Chase points, or short-haul European/Caribbean hops from 4,750 Avios.",
    proTip: "Avios transfer freely and instantly 1:1 between British Airways, Iberia, Qatar Airways, and Aer Lingus."
  },

  // 2. Citi ThankYou Rewards -> Turkish Airlines Miles & Smiles (40% Bonus)
  {
    id: "citi-turkish-nov2026",
    bank: "Citi ThankYou Rewards",
    bankCode: "citi",
    partnerName: "Turkish Airlines Miles & Smiles",
    partnerCode: "turkish",
    alliance: "Star Alliance",
    bonusPercent: 40,
    startDate: "2026-11-01T00:00:00Z",
    endDate: "2026-11-30T23:59:59Z",
    headline: "40% Citi TYP Bonus to Turkish Miles & Smiles",
    badgeLabel: "+40% Citi Bonus",
    exampleStandardRate: 45000,
    cabinContext: "Star Alliance Business / Domestic US Saver",
    currencyNeeded: "Citi ThankYou Points",
    keywords: ["turkish", "miles&smiles", "miles & smiles", "istanbul"],
    eligibleDestinations: ["istanbul", "cappadocia", "kakheti", "athens", "crete", "prague", "budapest"],
    notes: "A massive 40% bonus brings 45,000-mile business class awards to Europe down to ~32,000 Citi points, and 10,000-mile domestic United flights down to ~7,000 points!",
    proTip: "One of the highest bonus percentages of the year. Unbeatable value for Star Alliance saver space."
  },

  // 3. Capital One Miles -> Copa Airlines ConnectMiles (30% Bonus)
  {
    id: "capone-copa-nov2026",
    bank: "Capital One Miles",
    bankCode: "capone",
    partnerName: "Copa Airlines ConnectMiles",
    partnerCode: "copa",
    alliance: "Star Alliance",
    bonusPercent: 30,
    customRatioMultiplier: 0.975, // Base 2:1.5 ratio * 1.30 bonus = 0.975 effective ratio
    baseRatioMultiplier: 0.75,
    startDate: "2026-11-02T00:00:00Z",
    endDate: "2026-12-01T23:59:59Z",
    headline: "30% Capital One Bonus to Copa Airlines ConnectMiles",
    badgeLabel: "+30% CapOne Bonus",
    exampleStandardRate: 25000,
    cabinContext: "Central & South America Economy / Business",
    currencyNeeded: "Capital One Miles",
    keywords: ["copa", "connectmiles", "panama"],
    eligibleDestinations: ["cartagena", "medellin", "costarica", "guatemala", "peru", "buenosaires", "santiago", "belize", "galapagos", "curacao", "salta", "bariloche"],
    notes: "With Capital One's base 2:1.5 ratio, a 30% transfer bonus yields 975 Copa miles per 1,000 Capital One miles (near 1:1 parity), unlocking routes via Panama City (PTY) without fuel surcharges.",
    proTip: "Capital One's newest transfer partner. Solves award inventory bottlenecks across Central and South America."
  },

  // 4. Capital One Miles -> Air France / KLM Flying Blue (20% Bonus)
  {
    id: "capone-flyingblue-nov2026",
    bank: "Capital One Miles",
    bankCode: "capone",
    partnerName: "Air France / KLM Flying Blue",
    partnerCode: "flyingblue",
    alliance: "SkyTeam",
    bonusPercent: 20,
    startDate: "2026-11-01T00:00:00Z",
    endDate: "2026-11-30T23:59:59Z",
    headline: "20% Capital One Bonus to Flying Blue",
    badgeLabel: "+20% CapOne Bonus",
    exampleStandardRate: 50000,
    cabinContext: "Transatlantic Business Class",
    currencyNeeded: "Capital One Miles",
    keywords: ["flying blue", "air france", "klm"],
    eligibleDestinations: ["paris", "amsterdam", "tahiti", "rotterdam", "lyon", "bordeaux", "nice", "curacao"],
    notes: "Reduces typical 50,000-mile saver business class awards to Europe down to ~41,500 Capital One miles.",
    proTip: "Combine with monthly Flying Blue Promo Rewards to book transatlantic flights at record-low point totals."
  },

  // 5. American Express -> Virgin Atlantic Flying Club (30% Bonus)
  {
    id: "amex-virgin-nov2026",
    bank: "American Express",
    bankCode: "amex",
    partnerName: "Virgin Atlantic Flying Club",
    partnerCode: "virgin",
    alliance: "SkyTeam",
    bonusPercent: 30,
    startDate: "2026-11-02T00:00:00Z",
    endDate: "2026-11-30T23:59:59Z",
    headline: "30% Amex MR Bonus to Virgin Atlantic Flying Club",
    badgeLabel: "+30% Amex Bonus",
    exampleStandardRate: 45000,
    cabinContext: "ANA / Delta Partner Long-Haul",
    currencyNeeded: "Amex Membership Rewards",
    keywords: ["virgin atlantic", "flying club"],
    eligibleDestinations: ["tokyo", "kyoto", "osaka", "london", "cornwall", "edinburgh"],
    notes: "Unlocks ANA business class to Tokyo for only ~34,500 Amex points, or Delta transatlantic flights to Europe without fuel surcharges.",
    proTip: "Target partner redemptions on ANA and Delta to avoid London Heathrow's high carrier fees."
  },

  // 6. Capital One Miles -> Virgin Atlantic Flying Club (30% Bonus)
  {
    id: "capone-virgin-nov2026",
    bank: "Capital One Miles",
    bankCode: "capone",
    partnerName: "Virgin Atlantic Flying Club",
    partnerCode: "virgin",
    alliance: "SkyTeam",
    bonusPercent: 30,
    startDate: "2026-10-21T00:00:00Z",
    endDate: "2026-11-20T23:59:59Z",
    headline: "30% Capital One Bonus to Virgin Atlantic Flying Club",
    badgeLabel: "+30% CapOne Bonus",
    exampleStandardRate: 45000,
    cabinContext: "ANA / Delta Partner Long-Haul",
    currencyNeeded: "Capital One Miles",
    keywords: ["virgin atlantic", "flying club"],
    eligibleDestinations: ["tokyo", "kyoto", "osaka", "london", "cornwall", "edinburgh"],
    notes: "Transfers 1,000 Capital One miles to 1,300 Virgin points, perfect for ANA suite redemptions.",
    proTip: "Pair with Capital One Venture X miles for instant partner bookings."
  },

  // 7. Citi ThankYou Rewards -> Cathay Pacific Asia Miles (10% Bonus)
  {
    id: "citi-asiamiles-nov2026",
    bank: "Citi ThankYou Rewards",
    bankCode: "citi",
    partnerName: "Cathay Pacific Asia Miles",
    partnerCode: "asiamiles",
    alliance: "Oneworld",
    bonusPercent: 10,
    startDate: "2026-10-25T00:00:00Z",
    endDate: "2026-11-14T23:59:59Z",
    headline: "10% Citi TYP Bonus to Cathay Pacific Asia Miles",
    badgeLabel: "+10% Citi Bonus",
    exampleStandardRate: 42000,
    cabinContext: "Transpacific & Asia Oneworld",
    currencyNeeded: "Citi ThankYou Points",
    keywords: ["asia miles", "cathay", "cathay pacific", "hong kong"],
    eligibleDestinations: ["hongkong", "taipei", "singapore", "bangkok", "tokyo"],
    notes: "Provides a 10% boost for Oneworld multi-carrier awards and long-haul premium cabins into Asia via Hong Kong.",
    proTip: "Cathay Pacific releases premium cabin award space to Asia Miles members before partner programs."
  },

  // 8. Rove Miles -> JetBlue TrueBlue (20% Bonus)
  {
    id: "rove-jetblue-nov2026",
    bank: "Rove Miles",
    bankCode: "rove",
    partnerName: "JetBlue TrueBlue",
    partnerCode: "jetblue",
    alliance: "Independent",
    bonusPercent: 20,
    startDate: "2026-10-15T00:00:00Z",
    endDate: "2026-11-14T23:59:59Z",
    headline: "20% Rove Miles Bonus to JetBlue TrueBlue",
    badgeLabel: "+20% Rove Bonus",
    exampleStandardRate: 25000,
    cabinContext: "Mint Suites & Caribbean Nonstops",
    currencyNeeded: "Rove Miles",
    keywords: ["jetblue", "trueblue", "mint"],
    eligibleDestinations: ["aruba", "curacao", "puertorico", "turks", "stlucia", "london", "paris", "amsterdam", "dublin", "edinburgh"],
    notes: "A 20% bonus into JetBlue TrueBlue maximizes value on Mint lie-flat suites to Europe and nonstop Caribbean beach routes with zero fuel surcharges.",
    proTip: "Rove Miles and Bilt are among the few currencies offering direct 1:1 JetBlue transfers."
  }
];

/**
 * Filter currently active transfer bonuses based on UTC wall-clock time
 */
function getLiveTransferBonuses() {
  const now = new Date();
  return ACTIVE_TRANSFER_BONUSES.filter(bonus => {
    const start = new Date(bonus.startDate);
    const end = new Date(bonus.endDate);
    return now >= start && now <= end;
  });
}

/**
 * Match a destination against currently active transfer bonuses
 * @param {string} destKey - The destination identifier (e.g. 'sansebastian')
 * @param {string} pointsText - Raw points narrative text or flight secret
 * @returns {object|null} - Matching active bonus object or null
 */
function matchBonusForDestination(destKey, pointsText) {
  const activeBonuses = getLiveTransferBonuses();
  if (!activeBonuses.length) return null;

  const normalizedKey = (destKey || '').toLowerCase();
  const normalizedText = (pointsText || '').toLowerCase();

  for (const bonus of activeBonuses) {
    // 1. Explicit destination list check
    if (bonus.eligibleDestinations && bonus.eligibleDestinations.includes(normalizedKey)) {
      return bonus;
    }

    // 2. Keyword check against points strategy text
    if (bonus.keywords && bonus.keywords.some(kw => normalizedText.includes(kw.toLowerCase()))) {
      return bonus;
    }
  }

  return null;
}

/**
 * Calculate Arbitrage Math for a given bonus
 * @param {object} bonus - The active bonus record
 * @param {number} [customBaselineRate] - Optional custom mileage rate
 */
function calculateArbitrageMath(bonus, customBaselineRate) {
  if (!bonus) return null;

  const baseline = customBaselineRate || bonus.exampleStandardRate || 50000;
  
  // Custom ratio handling (e.g. Capital One 2:1.5 with bonus) vs standard 1:1 base
  const ratioMultiplier = bonus.customRatioMultiplier || (1 + (bonus.bonusPercent / 100));
  const baseMultiplier = bonus.baseRatioMultiplier || 1.0;

  // Bank points needed rounded to closest 500 points for real-world card transfer intervals
  const rawNeeded = baseline / ratioMultiplier;
  const pointsNeeded = Math.round(rawNeeded / 500) * 500;
  
  const standardNeeded = Math.round((baseline / baseMultiplier) / 500) * 500;
  const pointsSaved = Math.max(0, standardNeeded - pointsNeeded);
  const netDiscountPercent = Math.round((pointsSaved / standardNeeded) * 100);

  const now = new Date();
  const endDate = new Date(bonus.endDate);
  const msRemaining = endDate.getTime() - now.getTime();
  const daysRemaining = Math.max(1, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)));

  const options = { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
  const formattedEndDate = endDate.toLocaleDateString('en-US', options);

  return {
    exampleStandardRate: baseline,
    pointsNeeded: pointsNeeded,
    pointsSaved: pointsSaved,
    netDiscountPercent: netDiscountPercent,
    daysRemaining: daysRemaining,
    formattedEndDate: formattedEndDate,
    headline: bonus.headline,
    badgeLabel: bonus.badgeLabel,
    currencyNeeded: bonus.currencyNeeded || `${bonus.bank} Points`,
    partnerName: bonus.partnerName,
    notes: bonus.notes || ''
  };
}

// Global browser scope exports
if (typeof window !== 'undefined') {
  window.ACTIVE_TRANSFER_BONUSES = ACTIVE_TRANSFER_BONUSES;
  window.getLiveTransferBonuses = getLiveTransferBonuses;
  window.matchBonusForDestination = matchBonusForDestination;
  window.calculateArbitrageMath = calculateArbitrageMath;
}
