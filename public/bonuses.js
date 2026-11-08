/**
 * FindYourPassport (findyourpassport.com)
 * Active Transfer Bonuses & Award Arbitrage Engine
 *
 * Declarative configuration for limited-time credit card transfer bonuses.
 * Promotions activate and expire automatically based on UTC date boundaries.
 */

var ACTIVE_TRANSFER_BONUSES = [
  {
    id: "amex-flyingblue-nov2026",
    bank: "American Express",
    bankCode: "amex",
    partnerName: "Air France / KLM Flying Blue",
    partnerCode: "flyingblue",
    alliance: "SkyTeam",
    bonusPercent: 25,
    startDate: "2026-11-01T00:00:00Z",
    endDate: "2026-11-30T23:59:59Z",
    headline: "25% Amex MR Transfer Bonus to Flying Blue",
    badgeLabel: "+25% Amex Bonus",
    exampleStandardRate: 50000,
    cabinContext: "Transatlantic Business Class",
    currencyNeeded: "Amex Membership Rewards",
    keywords: ["flying blue", "air france", "klm"],
    eligibleDestinations: ["paris", "amsterdam", "tahiti", "rotterdam", "lyon", "bordeaux", "nice", "curacao"],
    notes: "Reduces typical transatlantic saver business awards to Europe or French Polynesia from 50k miles down to only 40,000 Amex points.",
    proTip: "Pair with monthly Flying Blue Promo Rewards for unmatched transatlantic business class pricing."
  },
  {
    id: "chase-virgin-nov2026",
    bank: "Chase Ultimate Rewards",
    bankCode: "chase",
    partnerName: "Virgin Atlantic Flying Club",
    partnerCode: "virgin",
    alliance: "SkyTeam",
    bonusPercent: 30,
    startDate: "2026-11-01T00:00:00Z",
    endDate: "2026-12-10T23:59:59Z",
    headline: "30% Chase UR Bonus to Virgin Atlantic",
    badgeLabel: "+30% Chase Bonus",
    exampleStandardRate: 45000,
    cabinContext: "ANA / Delta Partner Long-Haul",
    currencyNeeded: "Chase Ultimate Rewards",
    keywords: ["virgin atlantic", "flying club"],
    eligibleDestinations: ["tokyo", "kyoto", "osaka", "london", "cornwall", "edinburgh"],
    notes: "Unlocks ANA business class to Tokyo for only 35,000 Chase points (transferred to 45,500 Virgin points) or transatlantic Delta routes without fuel surcharges.",
    proTip: "Best utilized on partner premium cabins (ANA, Delta) rather than Virgin-operated flights through London."
  },
  {
    id: "capone-avios-nov2026",
    bank: "Capital One Miles",
    bankCode: "capone",
    partnerName: "British Airways & Iberia Avios",
    partnerCode: "avios",
    alliance: "Oneworld",
    bonusPercent: 20,
    startDate: "2026-11-01T00:00:00Z",
    endDate: "2026-12-05T23:59:59Z",
    headline: "20% Capital One Bonus to British Airways Avios",
    badgeLabel: "+20% CapOne Bonus",
    exampleStandardRate: 34000,
    cabinContext: "Off-Peak Transatlantic Business",
    currencyNeeded: "Capital One Miles",
    keywords: ["avios", "british airways", "iberia"],
    eligibleDestinations: ["sansebastian", "madrid", "barcelona", "mallorca", "dublin", "cotswolds"],
    notes: "Lowers legendary off-peak transatlantic business class on Iberia or British Airways down to ~28,500 Capital One miles with minimal taxes.",
    proTip: "Avios pool 1:1 freely across British Airways, Iberia, Qatar Airways, and Finnair."
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
  const ratioMultiplier = 1 + (bonus.bonusPercent / 100);

  // Bank points needed rounded to closest 500 points for real-world card transfer intervals
  const rawNeeded = baseline / ratioMultiplier;
  const pointsNeeded = Math.round(rawNeeded / 500) * 500;
  const pointsSaved = Math.max(0, baseline - pointsNeeded);
  const netDiscountPercent = Math.round((pointsSaved / baseline) * 100);

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
