/**
 * FindYourPassport (findyourpassport.com)
 * Master Destination Repository (106 Global Destinations)
 * All entries include exact 4-highlight arrays and seasonal explainers.
 */


var DESTINATIONS = {
    // ==========================================
    // THE FLÂNEUR & HISTORIAN (23 Destinations)
    // ==========================================
    malta: {
        name: "Valletta & Gozo, Malta", code: "MLA", flag: "🇲🇹", archetype: "The Flâneur & Historian", mapQuery: "Valletta, Malta", coordinates: { lat: 35.8989, lng: 14.5146 }, region: "Europe/Med", baseFare: 620,
        narrative: "Sun-drenched ancient history, fortified stone harbors, and crystal Mediterranean waters. Prehistoric megaliths older than the pyramids meet secluded swimming spots like the Blue Lagoon.",
        cash: "Charming stone townhouses & Airbnbs in Sliema or Gozo ($110-$170/night); inexpensive ferry & bus transit.",
        points: "Fly via Air France/KLM Flying Blue or Turkish miles; redeem bank points for historic boutique palazzos in Valletta.",
        season: "April – June & September – October",
        seasonReason: "Mild Mediterranean warmth and calm, swimmable seas with far fewer crowds than peak August.",
        weatherTip: "Spring brings vibrant wildflowers across Gozo; autumn sea temperatures remain warm into November.",
        costLodging: "$100 - $180 / night (Airbnb / Boutique)", costFood: "$35 - $60 / day (Pastizzi & seafood trattorias)", costTransit: "$3 - $10 / day (Ferries & public bus)", costTier: "Moderate / High European Value",
        highlights: [
            "Cruising the turquoise waters of the Blue Lagoon on Comino island",
            "Wandering the Baroque palaces and fortified bastions of Valletta",
            "Touring the Ħaġar Qim temples—older than Stonehenge and the pyramids",
            "Watching traditional painted Luzzu fishing boats in Marsaxlokk harbor"
        ]
    },
    rome: {
        name: "Rome, Italy", code: "FCO", flag: "🇮🇹", archetype: "The Flâneur & Historian", mapQuery: "Colosseum, Rome, Italy", coordinates: { lat: 41.9028, lng: 12.4964 }, region: "Europe/Med", baseFare: 550,
        narrative: "Living history, timeless cobblestones, and unmatched trattoria hospitality. Rome rewards unhurried wanderers who love ancient ruins followed by candlelit cacio e pepe.",
        cash: "High-density apartments in Trastevere or Monti; affordable high-speed train connections across Italy.",
        points: "Off-peak SkyTeam or Star Alliance awards; redeem Marriott Bonvoy or Small Luxury Hotels (SLH) points.",
        season: "March – May & September – November",
        seasonReason: "Crisp blue skies and comfortable walking temperatures for exploring outdoor ruins without mid-summer heat.",
        weatherTip: "Avoid peak July/August when afternoon temperatures frequently exceed 95°F (35°C).",
        costLodging: "$130 - $240 / night (Trastevere apartments)", costFood: "$40 - $75 / day (Pasta, espresso, gelato, house wine)", costTransit: "$2 - $8 / day (Walkable city + metro)", costTier: "Moderate European",
        highlights: [
            "Morning espresso overlooking the Pantheon before crowds arrive",
            "Strolling the Roman Forum and Colosseum with an archaeologist",
            "Handmade carbonara and carciofi alla giudia in Trastevere",
            "Late-night gelato walks past illuminated fountains in Piazza Navona"
        ]
    },
    porto: {
        name: "Porto & Douro Valley, Portugal", code: "OPO", flag: "🇵🇹", archetype: "The Flâneur & Historian", mapQuery: "Ribeira, Porto, Portugal", coordinates: { lat: 41.1579, lng: -8.6291 }, region: "Europe/Med", baseFare: 510,
        narrative: "Azulejo tile-covered facades, riverside port wine lodges, and dramatic iron bridges. One of Western Europe's most walkable and budget-friendly cultural escapes.",
        cash: "Outstanding Airbnb apartments along Ribeira and Cedofeita ($90-$140/night); low-cost dining and wine tastings.",
        points: "Transfer to TAP Air Portugal via Capital One or Chase; book boutique properties via card portals.",
        season: "April – June & September – October",
        seasonReason: "Sunny skies, pleasant river breezes, and the active autumn Douro grape harvest season.",
        weatherTip: "Winter and early spring can see coastal Atlantic drizzle, so late spring is prime.",
        costLodging: "$80 - $140 / night (Historic city center flats)", costFood: "$25 - $45 / day (Pastel de nata, fresh sardines, francesinhas)", costTransit: "$3 - $10 / day (Walkable + historic wooden trams)", costTier: "Affordable Western Europe",
        highlights: [
            "Tasting vintage tawny port wine in historic Gaia riverside cellars",
            "Cruising the terraced vineyard hills of the Douro Valley on a rabelo boat",
            "Admiring blue azulejo tiles at São Bento Station and Capela das Almas",
            "Sunset views over Dom Luís I Bridge from Jardim do Morro"
        ]
    },
    seville: {
        name: "Seville & Andalusia, Spain", code: "SVQ", flag: "🇪🇸", archetype: "The Flâneur & Historian", mapQuery: "Royal Alcázar of Seville, Spain", coordinates: { lat: 37.3891, lng: -5.9845 }, region: "Europe/Med", baseFare: 560,
        narrative: "Intricate Moorish palaces (Alcázar), orange-blossom scented courtyards, passionate flamenco, and spirited tapas bar-hopping through Santa Cruz.",
        cash: "Affordable heritage apartments with rooftop terraces; tapas culture allows world-class dining on $30/day.",
        points: "Connect via Madrid on Iberia Avios; high-value boutique hotel redemption options.",
        season: "March – May & October – November",
        seasonReason: "Fragrant orange blossoms bloom across the city before intense southern Spanish summer heat arrives.",
        weatherTip: "Mid-summer frequently climbs above 105°F (40°C)—spring and autumn are far better.",
        costLodging: "$85 - $150 / night (Santa Cruz apartments)", costFood: "$25 - $45 / day (Tapas bar-hopping with jamón ibérico & manzanilla)", costTransit: "$2 - $6 / day (Extremely compact and walkable)", costTier: "High Spanish Value",
        highlights: [
            "Exploring the Mudéjar arches and peaceful courtyard gardens of the Real Alcázar",
            "Catching raw, authentic flamenco in an intimate neighborhood peña",
            "Bar-hopping for tapas and Cruzcampo beer in Alameda de Hércules",
            "Sunset reflections over the tilework of Plaza de España"
        ]
    },
    edinburgh: {
        name: "Edinburgh & Scottish Highlands", code: "EDI", flag: "🇬🇧", archetype: "The Flâneur & Historian", mapQuery: "Edinburgh Castle, Scotland", coordinates: { lat: 55.9533, lng: -3.1883 }, region: "Europe/Med", baseFare: 580,
        narrative: "Atmospheric medieval closes, dramatic volcanic crags, world-class pubs, and scenic drives through misty Highland lochs and castles.",
        cash: "Traditional Georgian stone flat rentals in New Town or Stockbridge; great train connections north to the Highlands.",
        points: "Virgin Atlantic or British Airways Avios; book boutique inns via Chase / Amex travel.",
        season: "May – September",
        seasonReason: "Long daylight hours of up to 17 hours, open hiking passes, and bustling summer arts energy.",
        weatherTip: "Pack a waterproof shell jacket regardless of season—Scottish weather changes fast.",
        costLodging: "$120 - $220 / night (Stockbridge or Old Town flats)", costFood: "$40 - $70 / day (Hearty pub fare, Scottish salmon, craft ales)", costTransit: "$5 - $15 / day (Walkable city center + ScotRail trains)", costTier: "Moderate British",
        highlights: [
            "Climbing Arthur's Seat for panoramic views across Edinburgh",
            "Exploring the atmospheric underground closes beneath the Royal Mile",
            "Sampling single-malt Scotch whiskies in cozy historic pubs",
            "Scenic road trip north through Glencoe and the Isle of Skye"
        ]
    },
    prague: {
        name: "Prague, Czechia", code: "PRG", flag: "🇨🇿", archetype: "The Flâneur & Historian", mapQuery: "Charles Bridge, Prague", coordinates: { lat: 50.0755, lng: 14.4378 }, region: "Europe/Med", baseFare: 570,
        narrative: "The 'City of a Hundred Spires' offers fairy-tale Gothic architecture, winding medieval cobblestones, and the world's finest historic brewing tradition.",
        cash: "Spacious historic Old Town and Vinohrady apartments ($70-$130/night); world-class beer for under $3 a mug.",
        points: "Austrian / Lufthansa awards (Miles & More exclusive 1:1 via Rove Miles) or Star Alliance partners; Marriott Bonvoy and Hyatt category 3-4 properties in city center.",
        season: "May – June & September – October",
        seasonReason: "Mild walking temperatures, golden afternoon light, and thinner crowds across the Charles Bridge.",
        weatherTip: "Cross the Charles Bridge at dawn before tour groups arrive for an unforgettable quiet stroll.",
        costLodging: "$75 - $140 / night (Historic central apartments)", costFood: "$20 - $45 / day (Goulash, roast pork, svíčková, world-class pilsner)", costTransit: "$3 - $6 / day (High-efficiency tram network)", costTier: "High Central European Value",
        highlights: [
            "Sunrise walks across the statue-lined Charles Bridge without crowds",
            "Exploring the courtyards and Gothic St. Vitus Cathedral of Prague Castle",
            "Sipping fresh Pilsner Urquell poured from traditional side-pour taps",
            "Wandering the Art Nouveau residential avenues of Vinohrady"
        ]
    },
    budapest: {
        name: "Budapest, Hungary", code: "BUD", flag: "🇭🇺", archetype: "The Flâneur & Historian", mapQuery: "Hungarian Parliament Building, Budapest", coordinates: { lat: 47.4979, lng: 19.0402 }, region: "Europe/Med", baseFare: 560,
        narrative: "Grand Austro-Hungarian boulevards, thermal spa palaces, and vibrant nightlife inside historic 'ruin bars' carved out of abandoned courtyards.",
        cash: "High-ceilinged Jewish Quarter apartments ($60-$110/night); exceptionally cheap dining and bathhouse entry.",
        points: "Wizz Air / Star Alliance connections; Marriott Luxury Collection (Matild Palace) and Hyatt Regency.",
        season: "April – June & September – November",
        seasonReason: "Crisp outdoor cafe weather and perfectly temperate conditions for steaming open-air mineral baths.",
        weatherTip: "Thermal bathhouses are naturally heated year-round—visiting during crisp morning hours is magical.",
        costLodging: "$60 - $120 / night (Boutique Jewish Quarter flats)", costFood: "$20 - $40 / day (Paprikash, lángos, chimney cakes, Tokaji wine)", costTransit: "$2 - $6 / day (Historic metro line 1 and yellow Danube trams)", costTier: "Exceptional European Value",
        highlights: [
            "Soaking in the steaming open-air mineral waters of Széchenyi Thermal Baths",
            "Evening boat cruise along the Danube past the illuminated Parliament",
            "Exploring the creative labyrinth of Szimpla Kert ruin pub",
            "Watching sunset views from the neo-Gothic lookout towers of Fisherman's Bastion"
        ]
    },
    munich: {
        name: "Munich & Bavarian Alps, Germany", code: "MUC", flag: "🇩🇪", archetype: "The Flâneur & Historian", mapQuery: "Marienplatz, Munich, Germany", coordinates: { lat: 48.1351, lng: 11.582 }, region: "Europe/Med", baseFare: 590,
        narrative: "Bavarian warmth, leafy chestnut-shaded beer gardens, Baroque palaces, and high-speed rail access to fairytale alpine peaks and castles.",
        cash: "Cozy guest apartments near Maxvorstadt or alpine chalets near Garmisch; excellent grocery and bakery options.",
        points: "Lufthansa Star Alliance hub nonstops (Miles & More exclusive 1:1 via Rove Miles, or Aeroplan partner space); Marriott Bonvoy and IHG properties.",
        season: "May – October",
        seasonReason: "Chestnut-shaded beer gardens are open daily, with sunny alpine hiking conditions.",
        weatherTip: "Rent a bike—Munich is one of the most bicycle-friendly major cities in Europe.",
        costLodging: "$100 - $190 / night (City apartments or alpine guesthouses)", costFood: "$30 - $60 / day (Pretzels, weisswurst, roast chicken, Augustiner lager)", costTransit: "$5 - $15 / day (MVV transit + regional Bayern train tickets)", costTier: "Moderate Central European",
        highlights: [
            "Sitting under chestnut trees in the Englischer Garten beer gardens",
            "Watching daredevil surfers ride the permanent river wave on the Eisbachwelle",
            "Taking a day train to the fairytale towers of Neuschwanstein Castle",
            "Exploring historic brewery halls and vibrant food stalls at Viktualienmarkt"
        ]
    },
    stockholm: {
        name: "Stockholm, Sweden", code: "ARN", flag: "🇸🇪", archetype: "The Flâneur & Historian", mapQuery: "Gamla Stan, Stockholm, Sweden", coordinates: { lat: 59.3293, lng: 18.0686 }, region: "Europe/Med", baseFare: 520,
        narrative: "Minimalist Scandinavian design, historic archipelago islands, and relaxed waterside cafes. Pairs medieval cobblestones with innovative dining.",
        cash: "Design apartments in Södermalm or Gamla Stan; archipelago ferry passes offer inexpensive island day trips.",
        points: "SAS EuroBonus (exclusive 1:1 transfer via Rove Miles, SkyTeam hub) or British Airways Avios for regional connections; design-forward boutique properties via bank portals.",
        season: "June – August",
        seasonReason: "Endless Scandinavian summer daylight, warm waterfront terraces, and clean urban swimming.",
        weatherTip: "Join in 'fika'—the daily Swedish ritual of coffee and cinnamon cardamom buns.",
        costLodging: "$100 - $190 / night (Södermalm boutique apartments)", costFood: "$35 - $65 / day (Cardamom buns, Swedish meatballs, gravlax)", costTransit: "$4 - $10 / day (Waxholmsbolaget archipelago ferries and metro)", costTier: "Moderate Scandinavian",
        highlights: [
            "Wandering medieval cobblestone alleys and ochre buildings in Gamla Stan",
            "Taking a public ferry to explore outer islands in the Stockholm archipelago",
            "Viewing the preserved 17th-century warship at the Vasa Museum",
            "Browsing Scandinavian design shops in hipster Södermalm"
        ]
    },
    montreal: {
        name: "Montreal & Quebec City, Canada", code: "YUL", flag: "🇨🇦", archetype: "The Flâneur & Historian", mapQuery: "Old Montreal, Canada", coordinates: { lat: 45.5017, lng: -73.5673 }, region: "Americas/Caribbean", baseFare: 280,
        narrative: "French-Canadian cobblestone charm, historic patisseries, vibrant music festivals, and European romance without a transatlantic flight.",
        cash: "Brownstone walkups in Mile End or Plateau Mont-Royal ($100-$160/night); highly walkable and bike-friendly.",
        points: "Air Canada Aeroplan short-haul sweet spots from the US; Hyatt and Marriott city center redemptions.",
        season: "June – September",
        seasonReason: "Lively pedestrian street terrasses, open-air international jazz festivals, and peak fall foliage in October.",
        weatherTip: "Autumn (late September/October) offers world-class fall foliage across the Laurentians.",
        costLodging: "$90 - $160 / night (Plateau / Mile End brownstones)", costFood: "$30 - $60 / day (Bagels, smoked meat, craft microbrews)", costTransit: "$3 - $8 / day (BIXI bike shares and clean metro)", costTier: "High North American Value",
        highlights: [
            "Strolling the 17th-century cobblestone alleys of Old Montreal",
            "Grabbing hot wood-fired bagels 24/7 from St-Viateur in Mile End",
            "Picnicking with local cheese and wine at the Mount Royal summit",
            "Exploring international street art murals along Boulevard Saint-Laurent"
        ]
    },
    curacao: {
        name: "Curaçao", code: "CUR", flag: "🇨🇼", archetype: "The Flâneur & Historian", mapQuery: "Willemstad, Curacao", coordinates: { lat: 12.1696, lng: -68.99 }, region: "Americas/Caribbean", baseFare: 390,
        narrative: "Vibrant Dutch colonial architecture in Willemstad paired with secluded cove diving, coral reefs, and lively Caribbean arts.",
        cash: "Pietermaai district boutique apartments; affordable car rentals to explore remote western beaches.",
        points: "Air France/KLM Flying Blue or JetBlue TrueBlue (1:1 transfer partner from Bilt Rewards); beachfront point stays at Renaissance Wind Creek or Dreams Curacao.",
        season: "December – April",
        seasonReason: "Constant trade winds keep temperatures comfortable, with minimal seasonal rainfall outside the hurricane belt.",
        weatherTip: "Low seasonal rainfall variation makes Curaçao reliable year-round.",
        costLodging: "$90 - $160 / night (Historic Pietermaai district flats)", costFood: "$30 - $55 / day (Keshi yena, fresh catch, Dutch-Caribbean fusion)", costTransit: "$20 - $35 / day (Rental car is best to access west-coast coves)", costTier: "High Caribbean Value",
        highlights: [
            "Photographing pastel colonial merchant buildings along Handelskade",
            "Snorkeling at crystal-clear coves like Grote Knip and Playa Lagun",
            "Watching the historic Queen Emma pontoon bridge swing open",
            "Diving the famous Tugboat shipwreck surrounded by reef fish"
        ]
    },
    cartagena: {
        name: "Cartagena, Colombia", code: "CTG", flag: "🇨🇴", archetype: "The Flâneur & Historian", mapQuery: "Cartagena Walled City, Colombia", coordinates: { lat: 10.391, lng: -75.4794 }, region: "Americas/Caribbean", baseFare: 370,
        narrative: "Colonial walled fortifications, bougainvillea-draped balconies, and lively Caribbean music in historic squares. Tropical warmth meets deep coastal history.",
        cash: "Old Town restored colonial mansion apartments ($80-$140/night); budget-friendly tropical dining and boat trips.",
        points: "Avianca LifeMiles or JetBlue; historic boutique mansion conversions via Chase / Capital One portals.",
        season: "December – April",
        seasonReason: "The dry tropical season guarantees sunshine and breezy coastal evenings perfect for plaza dining.",
        weatherTip: "Afternoons are humid—plan museum visits mid-day and sunset strolls after 5 PM.",
        costLodging: "$60 - $130 / night (Restored colonial mansion flats)", costFood: "$20 - $40 / day (Arepas de huevo, fresh ceviche, coconut rice)", costTransit: "$2 - $6 / day (Extremely walkable + cheap taxis)", costTier: "Exceptional Value",
        highlights: [
            "Walking atop 400-year-old stone ramparts with sunset cocktails",
            "Dancing salsa in the colorful street art neighborhood of Getsemaní",
            "Taking a speedboat to the powdery sand of the Rosario Islands",
            "Exploring the massive stone tunnels of Castillo San Felipe"
        ]
    },
    kyoto: {
        name: "Kyoto & Nara, Japan", code: "KIX", flag: "🇯🇵", archetype: "The Flâneur & Historian", mapQuery: "Gion, Kyoto, Japan", coordinates: { lat: 35.0116, lng: 135.7681 }, region: "Asia/Pacific", baseFare: 860,
        narrative: "The cultural soul of Japan. Quiet stone alleys, preserved wooden machiya townhouses, moss-covered temple gardens, and roaming deer in ancient Nara.",
        cash: "Traditional Machiya townhouse rentals or boutique guesthouses in Higashiyama ($90-$170/night); peaceful residential ryokans near Nanzen-ji; inexpensive bento and noodle stalls.",
        points: "Oneworld (JAL via Atmos Rewards or British Airways Avios) or Star Alliance (ANA via Virgin Atlantic or Aeroplan); World of Hyatt redemptions at Park Hyatt Kyoto or Hyatt Regency.",
        season: "October – November & late March – April",
        seasonReason: "Blazing autumn maples or delicate spring sakura blooms with crisp, dry walking temperatures.",
        weatherTip: "Visit Kiyomizu-dera and Arashiyama bamboo forest at 7:00 AM for serenity before crowds.",
        costLodging: "$90 - $180 / night (Machiya rentals or boutique hotels)", costFood: "$25 - $55 / day (Soba, matcha sweets, kaiseki lunch sets)", costTransit: "$5 - $12 / day (Kyoto city buses and Hankyu train line)", costTier: "Moderate / High Value",
        highlights: [
            "Early morning walking through thousands of vermilion gates at Fushimi Inari",
            "Strolling lantern-lit Shirakawa canal in Gion as dusk falls",
            "Feeding respectful wild bow-deer in the park surrounding Todai-ji Temple in Nara",
            "Reflecting in the dry-landscape rock gardens of Ryoan-ji"
        ]
    },
    athens: {
        name: "Athens & Peloponnese, Greece", code: "ATH", flag: "🇬🇷", archetype: "The Flâneur & Historian", mapQuery: "Acropolis, Athens, Greece", coordinates: { lat: 37.9838, lng: 23.7275 }, region: "Europe/Med", baseFare: 540,
        narrative: "The birthplace of democracy and Western philosophy. Ancient marble monuments tower over lively, unpretentious neighborhood tavernas, flea markets, and coastal drives.",
        cash: "Airbnbs in Plaka, Koukaki, or Pangrati ($70-$120/night); incredibly cheap gyros, souvlaki, and Greek salads.",
        points: "Star Alliance awards on United/Lufthansa/Aegean; Marriott Luxury Collection (Hotel Grande Bretagne).",
        season: "April – May & September – October",
        seasonReason: "Mild sunshine allows comfortable climbs up the Acropolis before extreme mid-summer heatwaves.",
        weatherTip: "Purchase the multi-site archaeological ticket to skip ticket booth lines at the Acropolis.",
        costLodging: "$70 - $130 / night (Koukaki or Plaka apartments)", costFood: "$20 - $45 / day (Gyros, moussaka, Greek wine, frappés)", costTransit: "$2 - $6 / day (Clean metro and walkable center)", costTier: "High Mediterranean Value",
        highlights: [
            "Standing before the Parthenon atop the rocky Acropolis citadel at sunset",
            "Browsing brass antiques and dining in Monastiraki and Anafiotika",
            "Day trips through ancient olive groves to the theater of Epidaurus",
            "Evening rooftop wine overlooking the illuminated Acropolis pillars"
        ]
    },
    istanbul: {
        name: "Istanbul, Turkey", code: "IST", flag: "🇹🇷", archetype: "The Flâneur & Historian", mapQuery: "Hagia Sophia, Istanbul, Turkey", coordinates: { lat: 41.0082, lng: 28.9784 }, region: "Europe/Med", baseFare: 590,
        narrative: "Where continents collide. Byzantine domes, soaring Ottoman minarets, vibrant spice bazaars, and cross-continental public commuter ferries sailing between Europe and Asia.",
        cash: "Boutique hotels or restored apartments in Galata, Cihangir, or Kadıköy ($60-$110/night); unmatched street food value.",
        points: "Turkish Airlines Miles&Smiles hub with extensive award availability; Hyatt and Marriott waterfront stays.",
        season: "April – May & September – November",
        seasonReason: "Breezy, temperate weather along the Bosphorus without summer humidity or winter coastal rain.",
        weatherTip: "Take the public ferry from Karaköy to Kadıköy on the Asian side during golden hour with a glass of tea.",
        costLodging: "$60 - $120 / night (Galata or Kadıköy boutique flats)", costFood: "$15 - $35 / day (Simit, döner, meze spreads, Turkish coffee)", costTransit: "$2 - $5 / day (Istanbulkart covers trams and Bosphorus ferries)", costTier: "Exceptional Global Value",
        highlights: [
            "Marveling at the 1,500-year-old mosaic gold ceilings of Hagia Sophia",
            "Sailing on a public ferry across the Bosphorus Strait at sunset",
            "Getting happily lost in the labyrinthine vaulted corridors of the Grand Bazaar",
            "Exploring Kadıköy's vibrant open-air fish markets and third-wave cafes"
        ]
    },
    jordan: {
        name: "Petra & Wadi Rum, Jordan", code: "AMM", flag: "🇯🇴", archetype: "The Flâneur & Historian", mapQuery: "Petra, Jordan", coordinates: { lat: 31.9522, lng: 35.2332 }, region: "Middle East/Africa", baseFare: 730,
        narrative: "Carved rose-red Nabataean rock cities, Mars-like red sandstone deserts, and ancient Roman outposts. A timeless desert crossroads of civilization.",
        cash: "Bedouin desert camps in Wadi Rum and Wadi Musa guesthouses ($50-$100/night); shared or private driver road trips.",
        points: "Royal Jordanian Oneworld awards via American Airlines or Alaska; Marriott and Hyatt in Amman and Dead Sea.",
        season: "March – May & September – November",
        seasonReason: "Comfortable desert daytime temperatures in the 70s paired with cool, stargazing nights.",
        weatherTip: "Enter Petra through the Siq at 6:00 AM when the Treasury glows pink in complete silence.",
        costLodging: "$60 - $130 / night (Desert glamping and Petra hotels)", costFood: "$18 - $38 / day (Mansaf, freshly baked shrak bread, hummus, mint tea)", costTransit: "$25 - $50 / day (Rental car or private driver along the King's Highway)", costTier: "High Middle East Value",
        highlights: [
            "Walking through the narrow canyon Siq to reveal the Treasury of Petra",
            "Stargazing from a Bedouin bubble tent amidst the silence of Wadi Rum",
            "Floating weightlessly in the mineral-rich waters of the Dead Sea",
            "Wandering the well-preserved Roman colonnades and oval forum of Jerash"
        ]
    },
    vienna: {
        name: "Vienna & Wachau Valley, Austria", code: "VIE", flag: "🇦🇹", archetype: "The Flâneur & Historian", mapQuery: "Schönbrunn Palace, Vienna", coordinates: { lat: 48.2082, lng: 16.3738 }, region: "Europe/Med", baseFare: 570,
        narrative: "Imperial grandeur, historic marble coffeehouse culture, Mozart and Beethoven legacy, and manicured palaces surrounded by terraced Danube vineyards.",
        cash: "Central apartments in Spittelberg or Neubau ($85-$150/night); affordable city-subsidized museum passes and bakeries.",
        points: "Austrian Airlines / Lufthansa Group hub (Miles & More exclusive 1:1 transfer via Rove Miles); Park Hyatt Vienna or The Ritz-Carlton Vienna points redemptions.",
        season: "April – May & September – October",
        seasonReason: "Mild temperatures for palace gardens and festive autumn openings of rustic vineyard wine taverns.",
        weatherTip: "Slow down in a traditional kaffeehaus with an Einspänner coffee and Sachertorte—waiters never rush you.",
        costLodging: "$85 - $160 / night (Historic central apartments)", costFood: "$30 - $60 / day (Wiener schnitzel, tafelspitz, apple strudel)", costTransit: "$3 - $7 / day (U-Bahn and historic ring tram)", costTier: "Moderate European",
        highlights: [
            "Wandering the state rooms and Baroque gardens of Schönbrunn Palace",
            "Spending a long morning reading newspapers in historic Cafe Central",
            "Biking through the terraced Grüner Veltliner vineyards of the Wachau Valley",
            "Attending an evening classical concert inside the ornate golden Musikverein hall"
        ]
    },
    guatemala: {
        name: "Antigua & Lake Atitlán, Guatemala", code: "GUA", flag: "🇬🇹", archetype: "The Flâneur & Historian", mapQuery: "Antigua Guatemala", coordinates: { lat: 14.6349, lng: -90.5069 }, region: "Americas/Caribbean", baseFare: 330,
        narrative: "Cobblestone Spanish colonial streets framed by smoking volcanoes, ruined Baroque monasteries, and indigenous Mayan villages ringing an emerald crater lake.",
        cash: "Colonial courtyard Airbnbs and lakeview casitas ($50-$90/night); extraordinarily inexpensive local dining and market crafts.",
        points: "United/American nonstops to Guatemala City; boutique card portal hotel redemptions in Antigua.",
        season: "November – April",
        seasonReason: "Clear blue dry-season skies with unobstructed views of erupting volcanic peaks.",
        weatherTip: "Antigua is known as the 'City of Eternal Spring'—temperatures hover in the mid-70s year-round.",
        costLodging: "$50 - $95 / night (Colonial courtyards or lakeside casitas)", costFood: "$12 - $28 / day (Pepián stews, fresh handmade corn tortillas, craft coffee)", costTransit: "$5 - $15 / day (Shuttles and wooden lancha boats on the lake)", costTier: "Outstanding Global Value",
        highlights: [
            "Photographing the yellow Santa Catalina Arch with Volcán de Agua in the background",
            "Taking a boat across Lake Atitlán to explore indigenous textile craft villages",
            "Hiking the slopes of Volcán Pacaya and roasting marshmallows on thermal rock vents",
            "Sipping single-origin bourbon coffee in historic plant-filled courtyard cafes"
        ]
    },
    granada: {
        name: "Granada & Córdoba, Spain", code: "GRX", flag: "🇪🇸", archetype: "The Flâneur & Historian", mapQuery: "Alhambra, Granada, Spain", coordinates: { lat: 37.1773, lng: -3.5986 }, region: "Europe/Med", baseFare: 580,
        narrative: "The last Moorish kingdom in Western Europe. The majestic Alhambra fortress, white-washed Albaicín alleys, and authentic Andalusian free-tapas culture.",
        cash: "Traditional Carmen houses with Alhambra views in the Albaicín ($70-$120/night); free generous tapas with every drink.",
        points: "Fly Iberia to Madrid and take the high-speed AVE train; boutique hotel portal redemptions.",
        season: "March – May & October – November",
        seasonReason: "Snow-capped Sierra Nevada mountains frame warm cobblestone plazas before summer heat peaks.",
        weatherTip: "Order any beverage at a traditional Granada bar and a complimentary plate of food is served automatically.",
        costLodging: "$70 - $125 / night (Albaicín apartments)", costFood: "$20 - $40 / day (Generous tapas culture makes dining exceptionally cheap)", costTransit: "$2 - $5 / day (Walkable historic core + city minibuses)", costTier: "High Spanish Value",
        highlights: [
            "Exploring the intricate geometric plasterwork of the Alhambra's Nasrid Palaces",
            "Watching sunset light turn the Alhambra red from the Mirador de San Nicolás",
            "Walking through the forest of candy-cane red-and-white arches inside Córdoba's Mezquita",
            "Tasting local jamón and fried eggplant with cane honey in lively plazas"
        ]
    },
    slovenia: {
        name: "Ljubljana & Lake Bled, Slovenia", code: "LJU", flag: "🇸🇮", archetype: "The Flâneur & Historian", mapQuery: "Lake Bled, Slovenia", coordinates: { lat: 46.0569, lng: 14.5058 }, region: "Europe/Med", baseFare: 630,
        narrative: "Fairytale emerald alpine lakes, Julian Alps hiking trails, and a pedestrian-only capital city dotted with riverside cafes and dragon bridges.",
        cash: "Cozy alpine chalets and guest rooms ($70-$120/night); budget-friendly car rentals for mountain road trips.",
        points: "Lufthansa / Austrian awards (Miles & More exclusive 1:1 via Rove Miles) or Star Alliance partners; flexible bank portal redemptions.",
        season: "May – September",
        seasonReason: "Warm sunny days for alpine lake swimming and outdoor cafe culture along car-free riverbanks.",
        weatherTip: "Alpine weather can change quickly—pack layers even during sunny summer trips.",
        costLodging: "$70 - $130 / night (Alpine chalets and Ljubljana flats)", costFood: "$25 - $45 / day (Kranjska klobasa, lake trout, Bled cream cake)", costTransit: "$15 - $30 / day (Affordable rental car)", costTier: "Affordable Central Europe",
        highlights: [
            "Rowing a wooden pletna boat to the island church in Lake Bled",
            "Hiking the wooden walkways above turquoise waters in Vintgar Gorge",
            "Driving the hairpin switchbacks over Vršič Pass in Triglav National Park",
            "Sipping Slovenian wine along the car-free Ljubljanica riverfront"
        ]
    },
    dublin: {
        name: "Dublin & Wild Atlantic Way, Ireland", code: "DUB", flag: "🇮🇪", archetype: "The Flâneur & Historian", mapQuery: "Trinity College, Dublin, Ireland", coordinates: { lat: 53.3498, lng: -6.2603 }, region: "Europe/Med", baseFare: 490,
        narrative: "Warm Georgian brick squares, centuries of literary genius, and fiddle music spilling from historic pub snugs. Connects city storytelling with the towering sea cliffs and wind-carved peat valleys of the Atlantic coast.",
        cash: "Traditional guesthouses in Portobello or coastal Dún Laoghaire ($90-$160/night); generous pub lunches with hearty brown soda bread.",
        points: "Aer Lingus or British Airways Avios (1:1 transfer from Amex, Chase, Bilt, Capital One); direct Delta awards from MSP/BOS; Hyatt Centric The Liberties Dublin.",
        season: "May – September",
        seasonReason: "Longest daylight hours of the year and warmer coastal breezes across the Atlantic headlands.",
        weatherTip: "Always carry a lightweight waterproof shell—Atlantic weather front changes bring brief, refreshing showers between sunny skies.",
        costLodging: "$95 - $180 / night (Historic Georgian quarters or coastal bed & breakfasts)", costFood: "$30 - $60 / day (Seafood chowder, Irish stew, artisanal farmhouse cheeses, fresh Guinness)", costTransit: "$4 - $12 / day (Luas tram and DART coastal train)", costTier: "Moderate Celtic Heritage",
        highlights: [
            "Walking beneath the soaring barrel-vaulted ceiling of the Long Room library at Trinity College",
            "Listening to unamplified traditional fiddle sessions over a creamy pint inside historic pubs",
            "Taking the coastal DART train to hike the dramatic maritime cliffs of Howth Peninsula",
            "Road-tripping through the wild peat bogs and glacial valleys of Connemara"
        ]
    },
    belgium: {
        name: "Brussels, Bruges & Ghent, Belgium", code: "BRU", flag: "🇧🇪", archetype: "The Flâneur & Historian", mapQuery: "Grand Place, Brussels, Belgium", coordinates: { lat: 50.8503, lng: 4.3517 }, region: "Europe/Med", baseFare: 520,
        narrative: "Flamboyant Gothic guildhalls, quiet swans gliding along medieval Bruges canals, cutting-edge comic art murals, and centuries-old brewing monasteries crafting the world's most complex beers.",
        cash: "Step-gabled canal apartments in Ghent or Brussels' Saint-Géry ($80-$140/night); high-speed Belgian rail links every city in under 40 minutes for pennies.",
        points: "Brussels Airlines / Lufthansa Group via Miles & More (exclusive 1:1 via Rove Miles) or United/Aeroplan Star Alliance awards; Marriott and IHG historic city center properties.",
        season: "April – June & September – October",
        seasonReason: "Mild canal-walking weather, outdoor cafe terraces, and fewer tour groups along the cobblestone bridges of Bruges.",
        weatherTip: "Base yourself in Ghent—it has all the medieval canal beauty of Bruges with a vibrant local university food scene.",
        costLodging: "$80 - $150 / night (Historic city center canal flats)", costFood: "$25 - $55 / day (Belgian frites with samurai sauce, Liège waffles, carbonnade flamande, Trappist ales)", costTransit: "$5 - $12 / day (Frequent regional trains and clean trams)", costTier: "High European Cultural Value",
        highlights: [
            "Standing in awe amid the gold-leaf Baroque guildhalls of Brussels' Grand Place illuminated at night",
            "Cruising the serene willow-lined medieval canals of Bruges past the Rozenhoedkaai",
            "Exploring the fortress towers and cobblestone quays of Gravensteen castle in Ghent",
            "Savoring rare abbey Trappist ales paired with aged gouda in a 400-year-old tavern"
        ]
    },
    tbilisi: {
        name: "Tbilisi & Kazbegi, Georgia", code: "TBS", flag: "🇬🇪", archetype: "The Flâneur & Historian", mapQuery: "Old Town, Tbilisi, Georgia", coordinates: { lat: 41.7151, lng: 44.8271 }, region: "Europe/Med", baseFare: 670,
        narrative: "Carved wooden balconies overhanging dramatic river gorges, historic thermal sulfur bathhouses, and an 8,000-year unbroken tradition of amber wine aged in clay qvevri jars under Caucasus mountain peaks.",
        cash: "High-ceilinged 19th-century Old Town apartments ($40-$80/night); feast like royalty on handmade khinkali dumplings and local natural wine for $15/day.",
        points: "Lufthansa / Turkish Star Alliance awards via Miles & More (exclusive 1:1 via Rove Miles); Design Hotels / Marriott redemptions at Rooms Hotel Tbilisi and Kazbegi.",
        season: "May – June & September – October",
        seasonReason: "Pleasant temperate weather for courtyard dining and crisp mountain air during the autumn grape harvest (Rtveli).",
        weatherTip: "Take a marshrutka or private driver north along the Georgian Military Highway to wake up facing Mount Kazbek.",
        costLodging: "$45 - $90 / night (Charming Sololaki flats or design boutique hotels)", costFood: "$12 - $28 / day (Cheese-filled adjaruli khachapuri, juicy khinkali, qvevri amber wine)", costTransit: "$2 - $6 / day (High-efficiency metro and cheap local taxis)", costTier: "Exceptional Global Value",
        highlights: [
            "Wandering the winding cobblestone lanes and pastel wooden balconies of Old Tbilisi",
            "Soaking in the steaming private domed brick thermal sulfur baths of Abanotubani",
            "Viewing the 14th-century Gergeti Trinity Church silhouetted against the snows of Mount Kazbek",
            "Tasting ancient skin-contact orange wines poured from clay qvevri jars at rustic wine cellars"
        ]
    },

    // ==========================================
    // THE EPIC TRAILBLAZER (25 Destinations)
    // ==========================================
    iceland: {
        name: "Reykjavik & Ring Road, Iceland", code: "KEF", flag: "🇮🇸", archetype: "The Epic Trailblazer", mapQuery: "Reykjavik, Iceland", coordinates: { lat: 64.1466, lng: -21.9426 }, region: "Europe/Med", baseFare: 490,
        narrative: "Dramatic landscapes forged by ice and fire. Volcanic craters, roaring waterfalls, black sand beaches, and geothermal lagoons under endless daylight.",
        cash: "Camper van rentals or rural farm stay cottages equipped with kitchenettes to manage dining costs.",
        points: "Direct transfers to Flying Blue, Delta, or Icelandair partner awards; boutique design lodges.",
        season: "June – August (Midnight Sun) or September – March (Auroras)",
        seasonReason: "Summer unlocks all interior mountain roads and 24-hour daylight; autumn and winter offer dark skies for Northern Lights.",
        weatherTip: "Camper van travel lets you follow good weather and saves on dining.",
        costLodging: "$120 - $240 / night (Camper vans or rural cottages)", costFood: "$40 - $80 / day (Grocery cooking + bakery hot dogs and seafood soup)", costTransit: "$50 - $90 / day (4WD rental car or camper van)", costTier: "High Arctic / Self-Catering Value",
        highlights: [
            "Walking behind the roaring 200-foot curtain of Seljalandsfoss waterfall",
            "Soaking in geothermal mineral waters surrounded by black volcanic basalt rocks",
            "Watching icebergs drift out to the Atlantic at Jökulsárlón Glacier Lagoon",
            "Photographing basalt sea stacks on Reynisfjara black sand beach"
        ]
    },
    norway: {
        name: "Bergen & The Fjords, Norway", code: "BGO", flag: "🇳🇴", archetype: "The Epic Trailblazer", mapQuery: "Geirangerfjord, Norway", coordinates: { lat: 60.3913, lng: 5.3221 }, region: "Europe/Med", baseFare: 590,
        narrative: "Sheer granite peaks, calm glacial fjords, and historic wooden wharf towns. Enjoy scenic mountain railways, fresh seafood, and peaceful hiking trails.",
        cash: "Traditional fjord-side wooden rorbuer cabins with kitchens; grocery store picnics balance travel budgets.",
        points: "SAS EuroBonus awards (exclusive 1:1 transfer via Rove Miles, now SkyTeam) or Star Alliance/SkyTeam partner connections; boutique fjord lodges via bank portals.",
        season: "June – August",
        seasonReason: "Snow has melted off high mountain hiking passes and passenger ferries operate full scenic timetables.",
        weatherTip: "Fjord ferries run year-round, but mountain trails open fully in June.",
        costLodging: "$110 - $220 / night (Wooden rorbuer cabins and fjord flats)", costFood: "$35 - $70 / day (Bakery sourdough, brown cheese, fjord salmon)", costTransit: "$35 - $65 / day (Fjord car ferries and scenic train passes)", costTier: "Moderate / Scenic High Tier",
        highlights: [
            "Cruising beneath vertical rock walls on Geirangerfjord",
            "Riding the Flam Railway—one of the world's steepest train routes",
            "Exploring colorful UNESCO wooden merchant wharves of Bryggen in Bergen",
            "Hiking to panoramic rock ledges overlooking mirrored glacial waters"
        ]
    },
    banff: {
        name: "Banff & Canadian Rockies", code: "YYC", flag: "🇨🇦", archetype: "The Epic Trailblazer", mapQuery: "Moraine Lake, Banff, Canada", coordinates: { lat: 51.1784, lng: -115.5708 }, region: "Americas/Caribbean", baseFare: 360,
        narrative: "Luminous turquoise glacial lakes (Lake Louise, Moraine), dramatic alpine peaks, and world-class hiking trails through untamed wilderness.",
        cash: "Rustic mountain cabins in Canmore or camper van road trips along the Icefields Parkway.",
        points: "Direct flights to Calgary via WestJet/Delta/Air Canada; Fairmont or Marriott mountain redemptions.",
        season: "Late June – Mid-September",
        seasonReason: "Glacial lakes have completely thawed to their electric-turquoise colors and high alpine trails are clear.",
        weatherTip: "Lakes stay frozen until early June; mid-July to August offers optimal lake colors.",
        costLodging: "$140 - $260 / night (Canmore apartments or mountain cabins)", costFood: "$40 - $70 / day (Hearty mountain grills and trail provisions)", costTransit: "$35 - $65 / day (Rental car or Parks Canada shuttles)", costTier: "Moderate / High Alpine",
        highlights: [
            "Canoeing across the neon-turquoise waters of Moraine Lake",
            "Driving the Icefields Parkway alongside towering glaciers",
            "Hiking the Sentinel Pass trail through the Valley of the Ten Peaks",
            "Soaking in mineral hot springs after a day on mountain trails"
        ]
    },
    alaska: {
        name: "Kenai Fjords & Anchorage, Alaska", code: "ANC", flag: "🇺🇸", archetype: "The Epic Trailblazer", mapQuery: "Kenai Fjords National Park, Alaska", coordinates: { lat: 61.2181, lng: -149.9003 }, region: "Americas/Caribbean", baseFare: 420,
        narrative: "Tidewater glaciers calving into the sea, grizzly bear viewing, scenic wilderness railways, and midnight sun mountain panoramas.",
        cash: "Camper van rentals, rustic coastal yurts, or cozy Seward cabins; affordable seafood dockside shacks.",
        points: "Alaska Airlines Atmos/Mileage Plan sweet spots; flexible portal redemptions for wilderness excursions.",
        season: "June – August",
        seasonReason: "Up to 19 hours of summer daylight, active salmon runs, and peak marine wildlife encounters.",
        weatherTip: "Coastal Alaska is maritime—bring high-quality waterproof shells for boats.",
        costLodging: "$130 - $240 / night (Cabins and camper vans)", costFood: "$40 - $70 / day (Fresh wild salmon, halibut tacos, local chowder)", costTransit: "$45 - $85 / day (Rental car or camper van)", costTier: "Moderate / Wilderness Splurge",
        highlights: [
            "Taking a catamaran into Kenai Fjords to watch glaciers calve",
            "Riding the historic Alaska Railroad through dramatic mountain valleys",
            "Kayaking alongside sea otters and puffins in Resurrection Bay",
            "Hiking the Harding Icefield Trail alongside an ancient glacier"
        ]
    },
    costarica: {
        name: "Arenal & Manuel Antonio, Costa Rica", code: "SJO", flag: "🇨🇷", archetype: "The Epic Trailblazer", mapQuery: "Arenal Volcano, Costa Rica", coordinates: { lat: 9.9281, lng: -84.0907 }, region: "Americas/Caribbean", baseFare: 340,
        narrative: "Mist-shrouded volcano hot springs, hanging bridges over rainforest canopies, sloth and toucan spotting, and Pacific surf breaks.",
        cash: "Eco-lodge bungalows, rainforest treehouses, and family villa rentals; great local 'soda' dining value.",
        points: "Direct US awards via United, American, or JetBlue; luxury eco-redemptions via Hyatt (Tabacón) and Marriott.",
        season: "December – April",
        seasonReason: "The dry 'verano' season provides sunny beach weather and clear canopy views around Arenal Volcano.",
        weatherTip: "The 'green season' (May to August) brings afternoon showers but lush scenery.",
        costLodging: "$80 - $160 / night (Rainforest eco-bungalows)", costFood: "$20 - $45 / day (Casados at local sodas, fresh tropical fruit)", costTransit: "$30 - $50 / day (4WD rental car or shared shuttles)", costTier: "Moderate Eco-Value",
        highlights: [
            "Soaking in natural geothermal hot springs near Arenal Volcano",
            "Spotting sloths, monkeys, and toucans in Manuel Antonio National Park",
            "Walking across suspension bridges high in the rainforest canopy",
            "Ziplining over misty waterfalls and jungle gorges"
        ]
    },
    peru: {
        name: "Cusco & Sacred Valley, Peru", code: "CUZ", flag: "🇵🇪", archetype: "The Epic Trailblazer", mapQuery: "Machu Picchu, Peru", coordinates: { lat: -13.5319, lng: -71.9675 }, region: "Americas/Caribbean", baseFare: 580,
        narrative: "Ancient Incan masonry, towering Andean peaks, and pioneering high-altitude gastronomy. From Machu Picchu sunrises to artisan village markets.",
        cash: "Charming historic adobe rentals in San Blas ($50-$90/night); incredible multi-course lunch menus for under $20.",
        points: "Avianca LifeMiles or LATAM via Delta; stay at historic monastery hotels via Marriott Luxury Collection.",
        season: "May – October",
        seasonReason: "The dry Andean winter provides clear blue skies and optimal trekking trail conditions.",
        weatherTip: "Cusco sits at 11,150 ft—rest your first 48 hours to acclimatize properly.",
        costLodging: "$45 - $95 / night (San Blas historic adobe rentals)", costFood: "$15 - $35 / day (Quinoa soups, lomo saltado, ceviche)", costTransit: "$10 - $25 / day (Colectivos, taxis, and PeruRail trains)", costTier: "Outstanding Global Value",
        highlights: [
            "Watching morning mist clear above the stone citadel of Machu Picchu",
            "Exploring the colossal polygonal stone walls of Sacsayhuamán",
            "Bartering for handwoven alpaca textiles in Pisac market",
            "Experiencing modern Peruvian gastronomy fusing Andean flavors with coastal ceviche"
        ]
    },
    galapagos: {
        name: "Galápagos Islands & Quito, Ecuador", code: "GPS", flag: "🇪🇨", archetype: "The Epic Trailblazer", mapQuery: "Galapagos Islands, Ecuador", coordinates: { lat: -0.9538, lng: -90.9656 }, region: "Americas/Caribbean", baseFare: 690,
        narrative: "Darwin's living laboratory of fearless wildlife, volcanic lava tubes, and marine sanctuaries, combined with the Andean colonial architecture of Quito.",
        cash: "Land-based island hopping stays in Puerto Ayora; great local seafood kiosks on Charles Binford Street.",
        points: "Avianca LifeMiles or United awards to Baltra/San Cristobal; Marriott properties in Quito.",
        season: "December – May",
        seasonReason: "Warmer ocean temperatures and calm sea conditions offer the best snorkeling clarity.",
        weatherTip: "The islands use the US Dollar officially, making budgeting straightforward.",
        costLodging: "$80 - $170 / night (Santa Cruz island guesthouses)", costFood: "$25 - $50 / day (Fresh ceviche, almuerzos, grilled tuna)", costTransit: "$30 - $70 / day (Inter-island speedboats and day tour boats)", costTier: "Adventure / Nature Splurge",
        highlights: [
            "Snorkeling alongside sea lions, penguins, and marine iguanas",
            "Walking beside giant tortoises roaming wild in the Santa Cruz highlands",
            "Exploring the massive twin volcanic craters of Los Gemelos",
            "Strolling the UNESCO colonial plazas and gold-leaf churches of Quito"
        ]
    },
    thailand: {
        name: "Bangkok & Chiang Mai, Thailand", code: "BKK", flag: "🇹🇭", archetype: "The Epic Trailblazer", mapQuery: "Grand Palace, Bangkok, Thailand", coordinates: { lat: 13.7563, lng: 100.5018 }, region: "Asia/Pacific", baseFare: 720,
        narrative: "Vibrant night markets, ornate river temples, lush northern jungles, and bold culinary flavors. Balances energetic city life with mountain sanctuaries.",
        cash: "Luxury high-rise condo rentals with rooftop pools ($40-$80/night); some of the best $3 street food in the world.",
        points: "Air Canada Aeroplan or Singapore KrisFlyer awards; high cash-stretching 5-star luxury hotel rates.",
        season: "November – February",
        seasonReason: "The 'cool and dry' monsoon break brings pleasant tropical evenings and comfortable temple walking.",
        weatherTip: "March to May is the hottest period; pack light linen clothing.",
        costLodging: "$30 - $75 / night (Modern condos with rooftop pools)", costFood: "$10 - $25 / day (Street food, pad kra pao, mango sticky rice)", costTransit: "$3 - $8 / day (BTS Skytrain, Chao Phraya river boats, Grab)", costTier: "Exceptional Global Value",
        highlights: [
            "Cruising the Chao Phraya River by longtail boat to Wat Arun",
            "Grazing through street food stalls at the Chiang Mai night bazaar",
            "Spending a peaceful day at an ethical elephant rescue sanctuary",
            "Sipping sunset cocktails atop a soaring Bangkok skyscraper rooftop"
        ]
    },
    komodo: {
        name: "Komodo & Flores, Indonesia", code: "LBJ", flag: "🇮🇩", archetype: "The Epic Trailblazer", mapQuery: "Komodo National Park, Indonesia", coordinates: { lat: -8.5833, lng: 119.4833 }, region: "Asia/Pacific", baseFare: 920,
        narrative: "Raw natural beauty and remote island expeditions. Trek alongside prehistoric Komodo dragons, snorkel pink sand beaches, and sail across volcanic archipelagos.",
        cash: "Harbor town guest lodges in Labuan Bajo; affordable multi-day shared boat trips across the national park.",
        points: "Connect through Bali via Garuda Indonesia; book liveaboard diving excursions.",
        season: "April – November",
        seasonReason: "Dry weather provides calm sea navigation, crystal underwater visibility, and active manta ray aggregations.",
        weatherTip: "Water visibility peaks from June to September for manta rays and reefs.",
        costLodging: "$45 - $110 / night (Labuan Bajo harbor hotels or boat cabins)", costFood: "$15 - $30 / day (Fresh grilled harbor fish, Indonesian sambal)", costTransit: "$50 - $120 / day (Multi-day Phinisi boat charters)", costTier: "Remote Adventure Value",
        highlights: [
            "Hiking the three-colored crescent ridge of Padar Island for sunrise views",
            "Walking with park rangers among wild Komodo dragons on Rinca Island",
            "Snorkeling the pastel pink coral sands of Pink Beach",
            "Watching thousands of flying fox fruit bats take flight at sunset over Kalong Island"
        ]
    },
    egypt: {
        name: "Cairo & Luxor, Egypt", code: "CAI", flag: "🇪🇬", archetype: "The Epic Trailblazer", mapQuery: "Giza Pyramids, Cairo, Egypt", coordinates: { lat: 30.0444, lng: 31.2357 }, region: "Middle East/Africa", baseFare: 680,
        narrative: "Jaw-dropping ancient wonders and deep archaeological exploration. Gaze at the Pyramids of Giza, sail a felucca down the Nile, and explore tombs in the Valley of the Kings.",
        cash: "Affordable Nile-view guesthouses ($40-$80/night); private tour guides and transport are very budget-friendly.",
        points: "Turkish Airlines Miles&Smiles sweet spot awards; iconic Nile-side stays via Marriott Luxury Collection.",
        season: "October – April",
        seasonReason: "Mild winter sunshine makes exploring massive unshaded stone temple complexes comfortable.",
        weatherTip: "Summer (June to August) brings intense heat; winter is pleasant and sunny.",
        costLodging: "$40 - $90 / night (Nile-view boutique guesthouses)", costFood: "$12 - $30 / day (Koshari, falafel, grilled meats, spiced mint tea)", costTransit: "$15 - $35 / day (Private drivers and Nile feluccas)", costTier: "Exceptional Global Value",
        highlights: [
            "Standing at the foot of the Great Pyramid of Giza and the Sphinx",
            "Drifting along the Nile on a traditional wooden felucca at sunset",
            "Descending into painted pharaonic tombs in the Valley of the Kings",
            "Walking through the towering stone columns of Karnak Temple in Luxor"
        ]
    },
    morocco: {
        name: "Marrakech & Atlas Mtns, Morocco", code: "RAK", flag: "🇲🇦", archetype: "The Epic Trailblazer", mapQuery: "Jemaa el-Fnaa, Marrakech, Morocco", coordinates: { lat: 31.6295, lng: -7.9811 }, region: "Middle East/Africa", baseFare: 610,
        narrative: "Spiced scents, labyrinthine medina alleys, quiet tiled riad courtyards, and dramatic snow-capped Atlas mountain passes. A feast for sensory discovery.",
        cash: "Traditional Medina riad courtyard stays with home-cooked breakfasts ($60-$120/night); excellent souk dining.",
        points: "Air France Flying Blue or Iberia Avios; boutique riads booked through Capital One Premier Collection.",
        season: "October – April",
        seasonReason: "Sunny daytime warmth and crisp desert evenings avoid blistering summer medina heat.",
        weatherTip: "Mid-summer reaches over 105°F; plan for spring or autumn for best walking conditions.",
        costLodging: "$50 - $110 / night (Tiled courtyard riads with plunge pools)", costFood: "$15 - $35 / day (Slow-cooked tagines, fresh couscous, mint tea)", costTransit: "$3 - $10 / day (Walkable medinas + inexpensive petit taxis)", costTier: "Outstanding Global Value",
        highlights: [
            "Sleeping in a quiet tiled riad courtyard hidden inside the medina",
            "Experiencing evening musicians and food stalls in Jemaa el-Fnaa",
            "Bartering for handcrafted rugs, leather, and ceramics in the souks",
            "Taking a day trip to Berber villages in the high Atlas Mountains"
        ]
    },
    tanzania: {
        name: "Zanzibar & Serengeti, Tanzania", code: "ZNZ", flag: "🇹🇿", archetype: "The Epic Trailblazer", mapQuery: "Stone Town, Zanzibar, Tanzania", coordinates: { lat: -6.1659, lng: 39.2026 }, region: "Middle East/Africa", baseFare: 980,
        narrative: "The ultimate African dream pairing: witnessing the Great Migration across vast Serengeti savannas, followed by barefoot relaxation on Zanzibar's white sand spice islands.",
        cash: "Historic Stone Town merchant hotels ($60-$110/night) or beach bungalows in Nungwi; local seafood night markets.",
        points: "Qatar Airways or Turkish Airlines awards to Kilimanjaro/Zanzibar; Park Hyatt Zanzibar on the beachfront.",
        season: "June – October & December – February",
        seasonReason: "The dry winter season concentrates wildlife around waterholes and brings dry, sunny island breezes.",
        weatherTip: "Zanzibar tides are dramatic—plan swimming around high tide and reef walks during low tide.",
        costLodging: "$70 - $160 / night (Zanzibar beach chalets or Stone Town inns)", costFood: "$15 - $40 / day (Zanzibar pizza, fresh lobster, coconut curries)", costTransit: "$20 - $50 / day (Private island drivers and dhow boats)", costTier: "Adventure Safari Splurge / High Island Value",
        highlights: [
            "Witnessing lions, cheetahs, and elephants across the vast Serengeti plains",
            "Exploring the carved wooden doors and labyrinthine alleys of Stone Town",
            "Sailing on a traditional wooden dhow boat across turquoise Indian Ocean reefs",
            "Snorkeling among wild dolphins at Mnemba Atoll"
        ]
    },
    newzealand: {
        name: "Queenstown & South Island, New Zealand", code: "ZQN", flag: "🇳🇿", archetype: "The Epic Trailblazer", mapQuery: "Milford Sound, New Zealand", coordinates: { lat: -45.0312, lng: 168.6626 }, region: "Asia/Pacific", baseFare: 1050,
        narrative: "The adventure capital of the world. Dramatic sheer fjords at Milford Sound, turquoise glacial lakes, world-class Central Otago Pinot Noir, and alpine hiking.",
        cash: "Scenic lakeside apartments in Wanaka or Queenstown; camper van rentals are the gold standard for South Island exploration.",
        points: "Air New Zealand / Star Alliance via United or Aeroplan; boutique stays through card portals.",
        season: "December – March",
        seasonReason: "Southern Hemisphere summer delivers long warm daylight hours for Great Walks and lake adventures.",
        weatherTip: "Pack sturdy hiking boots and an insect repellent for sandflies near west coast fjords.",
        costLodging: "$110 - $210 / night (Lakeside apartments or self-contained camper vans)", costFood: "$35 - $65 / day (Fergburger, lamb pies, Central Otago Pinot Noir)", costTransit: "$45 - $80 / day (Rental car or camper van essential)", costTier: "Moderate / Scenic Expedition",
        highlights: [
            "Cruising beneath vertical granite peaks and waterfalls in Milford Sound",
            "Hiking along the ridgeline of Roy's Peak for views over Lake Wanaka",
            "Tasting world-renowned Pinot Noir at boutique vineyards in the Gibbston Valley",
            "Riding the Skyline Gondola and scenic luge high above Queenstown"
        ]
    },
    patagonia: {
        name: "Patagonia & Torres del Paine, Chile", code: "PUQ", flag: "🇨🇱", archetype: "The Epic Trailblazer", mapQuery: "Torres del Paine, Chile", coordinates: { lat: -53.1638, lng: -70.9171 }, region: "Americas/Caribbean", baseFare: 980,
        narrative: "The raw edge of the Earth. Soaring granite horn peaks, electric-blue calving glaciers, guanacos grazing on windswept steppes, and world-class alpine trekking.",
        cash: "Guesthouses in Puerto Natales or self-drive camper vans ($70-$140/night); national park refugios.",
        points: "Delta/LATAM awards to Santiago connecting to Punta Arenas; luxury adventure lodges via Chase/Amex portals.",
        season: "November – March",
        seasonReason: "Austral summer brings up to 17 hours of daylight and open hiking trails through mountain passes.",
        weatherTip: "Expect all four seasons in a single hour—windproof Gore-Tex and technical base layers are essential.",
        costLodging: "$80 - $180 / night (Puerto Natales apartments & hosterías)", costFood: "$30 - $60 / day (Magellanic lamb asados, king crab, hearty stews)", costTransit: "$45 - $85 / day (Rental 4WD or park bus shuttles)", costTier: "Wilderness Adventure Splurge",
        highlights: [
            "Hiking to the base viewpoint of the iconic three granite Towers of Paine",
            "Watching house-sized icebergs calve off Grey Glacier into glacial lakes",
            "Spotting wild guanacos and condors across windswept Patagonian steppes",
            "Cruising the Patagonian fjords past hidden tidewater glaciers"
        ]
    },
    switzerland: {
        name: "Lauterbrunnen & Interlaken, Switzerland", code: "ZRH", flag: "🇨🇭", archetype: "The Epic Trailblazer", mapQuery: "Lauterbrunnen, Switzerland", coordinates: { lat: 46.8182, lng: 8.2275 }, region: "Europe/Med", baseFare: 680,
        narrative: "A vertical wonderland of 72 roaring waterfalls plunging from vertical limestone cliffs, cogwheel mountain trains, cowbell pastures, and snow-capped alpine peaks.",
        cash: "Traditional wood-shingle chalets with kitchens in Lauterbrunnen or Mürren; grocery picnics offset dining costs.",
        points: "Swiss International Air Lines (Lufthansa Group / Miles & More exclusive 1:1 via Rove Miles) hub in Zurich; redemption stays in Interlaken.",
        season: "June – September",
        seasonReason: "High-altitude mountain trails and panoramic gondolas operate under sunny, wildflower-filled skies.",
        weatherTip: "Invest in a Swiss Travel Pass—it covers unlimited trains, cogwheel rails, lake steamers, and buses.",
        costLodging: "$130 - $260 / night (Alpine chalets and valley apartments)", costFood: "$40 - $80 / day (Cheese fondue, rösti, alpine chocolates)", costTransit: "$30 - $55 / day (Swiss Travel Pass or Berner Oberland regional pass)", costTier: "High Alpine Splurge",
        highlights: [
            "Hiking through Lauterbrunnen Valley beneath 72 roaring cliffside waterfalls",
            "Riding the cogwheel train through mountain rock tunnels to the Jungfraujoch summit",
            "Paragliding tandem over the valley with views of the Eiger and Jungfrau",
            "Walking the car-free cliffside paths of Mürren and Gimmelwald"
        ]
    },
    atacama: {
        name: "San Pedro de Atacama, Chile", code: "CJC", flag: "🇨🇱", archetype: "The Epic Trailblazer", mapQuery: "San Pedro de Atacama, Chile", coordinates: { lat: -22.9087, lng: -68.1997 }, region: "Americas/Caribbean", baseFare: 820,
        narrative: "The driest non-polar desert on Earth. Sculpted moonscapes, steaming high-altitude geyser basins, blinding white salt flats, and the clearest stargazing skies in the world.",
        cash: "Adobe desert lodges in San Pedro town ($60-$120/night); rental 4x4 or affordable group excursions.",
        points: "LATAM miles via Delta; boutique desert lodge bookings through bank credit card portals.",
        season: "September – November & March – May",
        seasonReason: "Mild daytime temperatures and crystal-clear night skies avoid extreme winter freezes.",
        weatherTip: "The desert sits at 8,000 ft and geysers are at 14,000 ft—bring warm thermal layers for freezing dawn tours.",
        costLodging: "$60 - $130 / night (Adobe desert guesthouses)", costFood: "$20 - $45 / day (Empanadas, quinoa salads, Chilean pastel de choclo)", costTransit: "$35 - $60 / day (Rental 4WD or organized day tours)", costTier: "High Expedition Value",
        highlights: [
            "Watching sunset shadows turn red across the lunar dunes of Valle de la Luna",
            "Floating in the turquoise hyper-saline waters of Laguna Cejar",
            "Watching steam plumes erupt at dawn at the high-altitude El Tatio Geysers",
            "Stargazing under the world's darkest skies with an astronomer and telescope"
        ]
    },
    cappadocia: {
        name: "Göreme & Cappadocia, Turkey", code: "NAV", flag: "🇹🇷", archetype: "The Epic Trailblazer", mapQuery: "Goreme, Cappadocia, Turkey", coordinates: { lat: 38.6431, lng: 34.8289 }, region: "Europe/Med", baseFare: 640,
        narrative: "A honeycombed fairy-tale landscape of volcanic rock 'fairy chimneys', multi-level underground cities, cave hotels, and hundreds of hot-air balloons rising at dawn.",
        cash: "Carved volcanic cave suite hotels in Göreme or Uçhisar ($70-$130/night); very inexpensive Anatolian pottery meals.",
        points: "Turkish Airlines domestic connections via Istanbul for as little as 6,000 miles; boutique card redemptions.",
        season: "April – June & September – October",
        seasonReason: "Calm morning wind patterns optimize hot-air balloon launches amidst mild hiking temperatures.",
        weatherTip: "Book hot-air balloon flights for your very first morning so you have backup weather days.",
        costLodging: "$70 - $140 / night (Authentic carved volcanic cave suites)", costFood: "$15 - $35 / day (Pottery kebabs cooked in clay jars, Turkish meze)", costTransit: "$15 - $30 / day (Rental car or green valley tour shuttles)", costTier: "Exceptional Adventure Value",
        highlights: [
            "Drifting at sunrise in a hot-air balloon over honeycombed volcanic valleys",
            "Sleeping inside a temperature-regulated cave suite carved into rock formations",
            "Hiking through the pink rock pillars and cave churches of Rose Valley",
            "Exploring the 8-level subterranean tunnels of Derinkuyu Underground City"
        ]
    },
    halong: {
        name: "Ha Long Bay & Ninh Binh, Vietnam", code: "HAN", flag: "🇻🇳", archetype: "The Epic Trailblazer", mapQuery: "Ha Long Bay, Vietnam", coordinates: { lat: 20.9101, lng: 107.1839 }, region: "Asia/Pacific", baseFare: 690,
        narrative: "Thousands of towering emerald limestone karst islands rising dramatically from calm coastal waters, paired with the tranquil inland river caves of Ninh Binh.",
        cash: "Luxury multi-day wooden junk boat cruises ($120-$200/night all-inclusive); extraordinarily cheap land guesthouses.",
        points: "Cathay Pacific, EVA Air, or Qatar Avios to Hanoi; boutique cruise portal redemptions.",
        season: "March – May & September – November",
        seasonReason: "Clear blue skies and calm bay waters provide optimal conditions for sea kayaking and boating.",
        weatherTip: "Combine an overnight cruise in less-crowded Bai Tu Long Bay with a 2-day land trip to Ninh Binh.",
        costLodging: "$25 - $70 / night (Ninh Binh eco-bungalows) or $130 (Overnight cruise)", costFood: "$10 - $25 / day (Bún chả, fresh spring rolls, Vietnamese iced coffee)", costTransit: "$10 - $25 / day (Shared luxury limousine shuttles from Hanoi)", costTier: "Exceptional Global Value",
        highlights: [
            "Kayaking through sea caves into enclosed lagoons in Ha Long Bay",
            "Waking up to mist rising over thousands of karst pillars from a cruise sundeck",
            "Taking a traditional sampan boat through the flooded limestone river caves of Tam Cốc",
            "Climbing the 500 dragon-carved stone steps of Mua Cave for panoramic valley views"
        ]
    },
    vancouver: {
        name: "Whistler & Vancouver Island, Canada", code: "YVR", flag: "🇨🇦", archetype: "The Epic Trailblazer", mapQuery: "Whistler, Canada", coordinates: { lat: 49.2827, lng: -123.1207 }, region: "Americas/Caribbean", baseFare: 380,
        narrative: "Where the Pacific temperate rainforest meets the Coast Mountains. Sea-to-sky alpine trails, coastal grizzly bear and orca viewing, and world-class mountain biking.",
        cash: "Mountain village apartments in Creekside or Tofino surf cabins; camper road trips across Vancouver Island.",
        points: "Air Canada Aeroplan short-haul domestic sweet spots; Westin Resort Whistler or Fairmont Empress redemptions.",
        season: "July – September",
        seasonReason: "Dry summer weather opens high-altitude alpine hiking trails and prime coastal whale watching.",
        weatherTip: "Drive the Sea-to-Sky Highway (Highway 99) in the morning for sun-drenched views over Howe Sound.",
        costLodging: "$120 - $230 / night (Mountain village condos & coastal cabins)", costFood: "$35 - $65 / day (Wild Pacific salmon, craft ciders, farm-to-table grills)", costTransit: "$35 - $60 / day (Rental car + BC Ferries)", costTier: "Moderate / Pacific Northwest",
        highlights: [
            "Riding the Peak 2 Peak Gondola spanning suspended between Whistler and Blackcomb",
            "Sea-kayaking with bald eagles and harbor seals in the waters off Tofino",
            "Driving the dramatic cliffside curves of the Sea-to-Sky Highway",
            "Hiking through ancient old-growth temperate rainforests of Cathedral Grove"
        ]
    },
    vicfalls: {
        name: "Victoria Falls & Chobe, Zimbabwe/Botswana", code: "VFA", flag: "🇿🇼", archetype: "The Epic Trailblazer", mapQuery: "Victoria Falls, Zimbabwe", coordinates: { lat: -17.9243, lng: 25.8572 }, region: "Middle East/Africa", baseFare: 990,
        narrative: "'The Smoke That Thunders'—the world's largest sheet of falling water—paired with legendary riverboat safaris along Botswana's elephant-packed Chobe River.",
        cash: "Boutique safari lodges in Victoria Falls town ($80-$160/night); shared day trips to Chobe National Park.",
        points: "Qatar Airways or South African Airways awards; Marriott Protea hotels in Livingstone.",
        season: "May – October",
        seasonReason: "Dry season weather clears the dense mist for great waterfall views and concentrates wildlife along the river.",
        weatherTip: "At peak water flow (March to May), the spray can be seen from 30 miles away—waterproof gear is mandatory.",
        costLodging: "$80 - $180 / night (Town boutique lodges and safari camps)", costFood: "$20 - $45 / day (Game meats, fresh tilapia, braai barbecues)", costTransit: "$20 - $50 / day (Transfers and Chobe riverboat day charters)", costTier: "Safari Adventure Value",
        highlights: [
            "Standing in the roaring rainforest spray facing the 350-foot drop of Victoria Falls",
            "Watching herds of hundreds of elephants swim across the Chobe River at sunset",
            "Taking a sunset catamaran cruise along the upper Zambezi River with hippos and crocs",
            "Microlight flight or helicopter flip over the Batoka Gorge and the falls"
        ]
    },
    malaysia: {
        name: "Penang & Langkawi, Malaysia", code: "PEN", flag: "🇲🇾", archetype: "The Epic Trailblazer", mapQuery: "George Town, Penang, Malaysia", coordinates: { lat: 5.4164, lng: 100.3327 }, region: "Asia/Pacific", baseFare: 740,
        narrative: "Asia's premier street food capital with UNESCO heritage shophouses in George Town, paired with duty-free turquoise island beaches and ancient rainforests in Langkawi.",
        cash: "Colonial British shophouse apartments in George Town ($40-$80/night) or Langkawi beach chalets; phenomenal street dining on $10/day.",
        points: "Singapore KrisFlyer or Qatar Airways Avios connections; Ritz-Carlton Langkawi or St. Regis luxury redemptions.",
        season: "December – April",
        seasonReason: "Dry, sunny weather along the Andaman coast is ideal for island hopping and walking night markets.",
        weatherTip: "The Malaysian Ringgit makes luxury stays and street dining some of the absolute cheapest in Asia.",
        costLodging: "$45 - $95 / night (Colonial shophouses & beachfront chalets)", costFood: "$10 - $25 / day (Char kway teow, assam laksa, roti canai)", costTransit: "$4 - $12 / day (Inexpensive Grab rides and island ferry)", costTier: "Exceptional Global Value",
        highlights: [
            "Hunting for whimsical wrought-iron street art across George Town's alleys",
            "Feasting on smoky wok-fried char kway teow along Gurney Drive",
            "Taking the Langkawi SkyCab and walking across the curved suspension SkyBridge",
            "Kayaking through the limestone sea caves and mangrove forests of Kilim Geoforest"
        ]
    },
    dolomites: {
        name: "Dolomites & South Tyrol, Italy", code: "BZO", flag: "🇮🇹", archetype: "The Epic Trailblazer", mapQuery: "Tre Cime di Lavaredo, Italy", coordinates: { lat: 46.5333, lng: 11.8500 }, region: "Europe/Med", baseFare: 660,
        narrative: "Sheer vertical limestone spires that glow rose-pink at sunset, wildflower alpine meadows, and mountain rifugio culture where Ladin traditions meet Michelin-starred alpine gastronomy.",
        cash: "Alpine farm-stay chalets (Roter Hahn) and mountain guesthouses ($85-$160/night); rifugio lunches with hearty speck and dumplings.",
        points: "Lufthansa or Austrian awards via Miles & More (exclusive 1:1 via Rove Miles) or Aeroplan into Munich/Venice; boutique alpine hotels via bank portals.",
        season: "June – September & December – March",
        seasonReason: "High-altitude hiking passes and scenic cable cars run all summer; winter transforms the valleys into world-class ski domains.",
        weatherTip: "Rifugios serve exceptional hot three-course lunches on scenic panoramic sundecks—hike early and eat high.",
        costLodging: "$90 - $180 / night (South Tyrolean farm chalets and alpine inns)", costFood: "$30 - $65 / day (Speck knödel dumplings, alpine cheeses, Lagrein red wine)", costTransit: "$20 - $45 / day (Rental car or Südtirol Mobilcard bus passes)", costTier: "Moderate Alpine Splurge",
        highlights: [
            "Hiking the breathtaking loop beneath the sheer triple pillars of Tre Cime di Lavaredo",
            "Watching the dramatic pink sunset alpenglow (Enrosadira) illuminate vertical limestone crags",
            "Rowing a wooden heritage boat across the emerald waters of Lago di Braies",
            "Feasting on handmade Schlutzkrapfen ravioli on the sun terrace of a high mountain rifugio"
        ]
    },
    jacksonhole: {
        name: "Jackson Hole & Grand Teton, USA", code: "JAC", flag: "🇺🇸", archetype: "The Epic Trailblazer", mapQuery: "Grand Teton National Park, Wyoming", coordinates: { lat: 43.4799, lng: -110.7624 }, region: "Americas/Caribbean", baseFare: 340,
        narrative: "Dramatic craggy granite peaks that rise 7,000 feet directly from the sagebrush valley floor without foothills. Wildlife-rich braided rivers, alpine glacial lakes, and legendary mountain hospitality.",
        cash: "Rustic mountain cabins in Victor or Driggs on the quiet Teton side ($110-$180/night); national park picnic provisions.",
        points: "Direct nonstops from DEN, MSP, and ORD on United/Delta; transfer to Aeroplan or LifeMiles for United saver space; World of Hyatt category 7-8 boutique lodges.",
        season: "July – September & January – March",
        seasonReason: "Summer reveals thawed turquoise alpine lakes and clear trails; winter offers world-class powder skiing.",
        weatherTip: "Drive Antelope Flats road at dawn to photograph historic Mormon Row barns with grazing bison herds under the Tetons.",
        costLodging: "$120 - $240 / night (Valley cabins or Jackson motels)", costFood: "$35 - $70 / day (Bison burgers, huckleberry pancakes, local craft breweries)", costTransit: "$35 - $60 / day (Rental SUV essential for national park touring)", costTier: "High American Wilderness",
        highlights: [
            "Taking the boat across Jenny Lake to hike through the vertical granite walls of Cascade Canyon",
            "Spotting moose and grizzly bears grazing along the braided banks of the Snake River",
            "Photographing sunrise light hitting the Cathedral Group from Mormon Row",
            "Riding the aerial tram 4,139 vertical feet to Rendezvous Peak for mountaintop waffles"
        ]
    },
    tromso: {
        name: "Tromsø & Senja, Norway", code: "TOS", flag: "🇳🇴", archetype: "The Epic Trailblazer", mapQuery: "Tromso, Norway", coordinates: { lat: 69.6492, lng: 18.9553 }, region: "Europe/Med", baseFare: 610,
        narrative: "Far above the Arctic Circle, dramatic granite peaks drop directly into icy fjords. Experience the dancing curtains of the Northern Lights in winter or golden 24-hour midnight sun hiking in summer.",
        cash: "Traditional waterfront fishermen's cabins (rorbuer) with kitchenettes ($90-$160/night); local supermarket foraging balances Nordic restaurant costs.",
        points: "SAS EuroBonus (exclusive 1:1 transfer via Rove Miles, SkyTeam) or Air France/KLM Flying Blue awards; Clarion Collection and boutique fjord stays.",
        season: "September – March (Auroras) or June – August (Midnight Sun)",
        seasonReason: "Deep dark polar night skies offer prime Aurora Borealis viewing; summer unlocks high mountain fjord hiking.",
        weatherTip: "Pack high-quality thermal wool base layers and ice microspikes for effortless winter city walking.",
        costLodging: "$90 - $170 / night (Wooden rorbuer cabins or central fjord flats)", costFood: "$30 - $65 / day (Arctic char, reindeer stew, bakery cinnamon knots)", costTransit: "$25 - $50 / day (Winterized rental car for aurora chasing)", costTier: "High Arctic Adventure",
        highlights: [
            "Chasing the vibrant green ribbons of the Northern Lights across pitch-black Arctic fjords",
            "Hiking to the jagged razor-edge granite summits of Senja Island overlooking turquoise seas",
            "Steaming in a floating harbor sauna before plunging into freezing sub-zero fjord water",
            "Taking the Fjellheisen cable car at golden hour for panoramic vistas of Tromsø island"
        ]
    },

    // ==========================================
    // THE COASTAL RECHARGER (21 Destinations)
    // ==========================================
    mallorca: {
        name: "Mallorca, Spain", code: "PMI", flag: "🇪🇸", archetype: "The Coastal Recharger", mapQuery: "Mallorca, Spain", coordinates: { lat: 39.6953, lng: 3.0176 }, region: "Europe/Med", baseFare: 590,
        narrative: "Dramatic limestone cliffs, hidden turquoise calas, and charming hilltop stone villages. Combines relaxing beach days with mountain driving and fresh Balearic seafood.",
        cash: "Rustic inland fincas & apartment rentals; rental cars are cheap and essential for cove hopping.",
        points: "Fly using Iberia or British Airways Avios; book high-value World of Hyatt resort redemptions.",
        season: "May – June & September – October",
        seasonReason: "Warm Mediterranean swimming water without the extreme high-season crowds and prices of July and August.",
        weatherTip: "Autumn waters remain warm enough for swimming through early November.",
        costLodging: "$120 - $220 / night (Fincas or coastal rentals)", costFood: "$40 - $70 / day (Fresh fish, tapas, and local ensaïmadas)", costTransit: "$25 - $45 / day (Rental car is essential)", costTier: "Moderate Mediterranean",
        highlights: [
            "Snorkeling in secluded turquoise coves like Cala Llombards",
            "Driving the hairpin turns of the Serra de Tramuntana mountains to Sa Calobra",
            "Exploring the artist village of Deià and historic Valldemossa",
            "Tasting local sobrassada and Balearic wines at an inland vineyard finca"
        ]
    },
    croatia: {
        name: "Dubrovnik & Split, Croatia", code: "DBV", flag: "🇭🇷", archetype: "The Coastal Recharger", mapQuery: "Dubrovnik Old Town, Croatia", coordinates: { lat: 42.6507, lng: 18.0944 }, region: "Europe/Med", baseFare: 650,
        narrative: "White limestone walled seaside cities, crystal Adriatic waters, and easy island-hopping ferries to Hvar, Korčula, and Vis.",
        cash: "Abundant local 'Sobe' guest apartments with sea balconies; easy public ferry connections.",
        points: "Star Alliance or Oneworld European connections; Marriott oceanfront resorts outside Dubrovnik.",
        season: "May – June & September – Early October",
        seasonReason: "September is the sweet spot: sea temperatures are at their warmest and walled ramparts are uncrowded.",
        weatherTip: "September is the sweet spot: sea is warm and accommodation rates drop noticeably.",
        costLodging: "$90 - $180 / night (Coastal sobe apartments)", costFood: "$35 - $65 / day (Grilled Adriatic squid, truffles, local pošip wine)", costTransit: "$10 - $25 / day (Catamarans and Jadrolinija ferries)", costTier: "Moderate Mediterranean",
        highlights: [
            "Walking the intact medieval ramparts encircling Dubrovnik's Old Town",
            "Kayaking into sea caves around Lokrum Island",
            "Exploring the Roman corridors inside Diocletian's Palace in Split",
            "Taking a catamaran to the quiet pine-lined coves of Korčula island"
        ]
    },
    puertorico: {
        name: "San Juan & Vieques, Puerto Rico", code: "SJU", flag: "🇵🇷", archetype: "The Coastal Recharger", mapQuery: "Old San Juan, Puerto Rico", coordinates: { lat: 18.4655, lng: -66.1057 }, region: "Americas/Caribbean", baseFare: 260,
        narrative: "Colonial pastel streets of Old San Juan, lush El Yunque rainforest hikes, and bioluminescent bay adventures in Vieques. No US passport required.",
        cash: "Oceanfront Condado apartments or Vieques guesthouses; great street food at local chinchorros.",
        points: "Nonstop domestic awards on JetBlue TrueBlue (1:1 transfer partner from Bilt Rewards), Delta, and United; beachfront points at Hyatt Regency or St. Regis.",
        season: "December – April",
        seasonReason: "Sunny, dry winter weather outside the Caribbean hurricane season with constant trade winds.",
        weatherTip: "Trade winds keep coastal temperatures comfortable in the mid-80s year-round.",
        costLodging: "$100 - $180 / night (Oceanfront Condado rentals)", costFood: "$30 - $55 / day (Mofongo, empanadillas, craft rum cocktails)", costTransit: "$15 - $35 / day (Uber in San Juan; rental car for rainforest)", costTier: "Moderate Caribbean",
        highlights: [
            "Nighttime kayaking through glowing waters at Mosquito Bay",
            "Walking the 500-year-old stone ramparts of El Morro fortress",
            "Swimming in hidden natural rock pools beneath El Yunque waterfalls",
            "Enjoying roast pork and live music along the Guavate lechón trail"
        ]
    },
    aruba: {
        name: "Aruba", code: "AUA", flag: "🇦🇼", archetype: "The Coastal Recharger", mapQuery: "Eagle Beach, Aruba", coordinates: { lat: 12.5211, lng: -69.9683 }, region: "Americas/Caribbean", baseFare: 380,
        narrative: "Calm turquoise waters, soft white sand, and warm trade winds outside the hurricane belt. Ideal for unhurried days and sunset catamaran sails.",
        cash: "Palm Beach garden apartments and quiet Noord vacation rentals; easy island grocery shopping.",
        points: "JetBlue TrueBlue (1:1 transfer partner from Bilt Rewards), American AAdvantage; beachfront redemptions with Marriott Bonvoy and Hilton.",
        season: "January – August",
        seasonReason: "Consistently dry, sunny weather year-round safely positioned far south of the hurricane belt.",
        weatherTip: "Aruba is south of the hurricane belt, making it safe for summer trips.",
        costLodging: "$120 - $220 / night (Noord vacation rentals)", costFood: "$35 - $65 / day (Fresh grouper, pastechi snacks, beachfront dining)", costTransit: "$10 - $25 / day (Arubus or rental car for desert exploring)", costTier: "Moderate Caribbean",
        highlights: [
            "Snorkeling with sea turtles over coral reefs at Tres Trapi",
            "Sunset catamaran sailing with open bars and trade-wind breezes",
            "Exploring the desert dunes and natural pools of Arikok National Park",
            "Lounging under divi-divi trees on the white sand of Eagle Beach"
        ]
    },
    stlucia: {
        name: "St. Lucia", code: "UVF", flag: "🇱🇨", archetype: "The Coastal Recharger", mapQuery: "Pitons, St. Lucia", coordinates: { lat: 13.9094, lng: -60.9789 }, region: "Americas/Caribbean", baseFare: 440,
        narrative: "Dramatic volcanic Pitons rising directly from the sea, tropical rainforests, and open-air cliffside suites made for unforgettable romance.",
        cash: "Boutique hillside apartments and Soufrière guesthouses with Piton views ($120-$180/night).",
        points: "American or Delta direct flights; luxury points redemptions via Hyatt (Zoëtry) or Marriott Luxury Collection.",
        season: "December – April",
        seasonReason: "Warm Caribbean sunshine and low humidity provide ideal catamaran and beach conditions.",
        weatherTip: "May and June are great shoulder months with lower villa rates.",
        costLodging: "$140 - $260 / night (Hillside Piton-view villas)", costFood: "$40 - $75 / day (Creole spiced fish, green fig and saltfish, rum punch)", costTransit: "$25 - $45 / day (Water taxis and mountain taxis)", costTier: "Moderate / Luxury Caribbean",
        highlights: [
            "Taking a private catamaran sail between the volcanic Pitons",
            "Soaking in natural volcanic sulfur mud baths at Soufrière",
            "Snorkeling over coral gardens at Anse Chastanet beach",
            "Hiking the Tet Paul Nature Trail for panoramic Caribbean Sea views"
        ]
    },
    bali: {
        name: "Bali & Nusa Penida, Indonesia", code: "DPS", flag: "🇮🇩", archetype: "The Coastal Recharger", mapQuery: "Ubud, Bali, Indonesia", coordinates: { lat: -8.4095, lng: 115.1889 }, region: "Asia/Pacific", baseFare: 830,
        narrative: "Spiritual wellness, lush terraced hillsides, and cliffside beach sunsets. Private villa living meets jungle waterfalls in Ubud and clear reefs.",
        cash: "Private pool villas in Canggu, Ubud, or Uluwatu ($70-$150/night); budget-friendly scooter rentals and local warungs.",
        points: "Qatar Airways Qsuite via Avios; transfer points to Alila or Ritz-Carlton Mandapa.",
        season: "May – September",
        seasonReason: "The dry season brings low humidity, refreshing offshore breezes, and clear blue coastal water.",
        weatherTip: "July and August offer the coolest, least humid tropical conditions.",
        costLodging: "$60 - $140 / night (Private pool villas with breakfast)", costFood: "$15 - $35 / day (Smoothie bowls, nasi goreng at local warungs)", costTransit: "$5 - $25 / day (Daily scooter rental or private driver)", costTier: "Exceptional Tropical Value",
        highlights: [
            "Waking up to misty jungle views from an open-air private pool villa in Ubud",
            "Watching sunset fire dances on the cliffs of Uluwatu Temple",
            "Snorkeling alongside giant manta rays in Nusa Penida bays",
            "Strolling the emerald cascading terraces of Tegallalang rice paddies"
        ]
    },
    sydney: {
        name: "Sydney, Australia", code: "SYD", flag: "🇦🇺", archetype: "The Coastal Recharger", mapQuery: "Sydney Opera House, Australia", coordinates: { lat: -33.8688, lng: 151.2093 }, region: "Asia/Pacific", baseFare: 980,
        narrative: "Sweeping harbor waters, scenic coastal walking trails, and relaxed outdoor dining. Pairs clean metropolitan living with legendary beaches like Bondi and Manly.",
        cash: "Beachside apartments in Manly or Coogee; public ferries double as scenic harbor cruises on standard transit cards.",
        points: "Qantas Oneworld awards via Alaska or American; Park Hyatt Sydney or Marriott harborfront redemptions.",
        season: "October – April",
        seasonReason: "Warm Australian summer delivers prime ocean swimming temperatures and bustling harbor dining.",
        weatherTip: "Public commuter ferries offer million-dollar harbor views for a few dollars.",
        costLodging: "$120 - $220 / night (Beachside Manly/Bondi apartments)", costFood: "$35 - $70 / day (Flat whites, fresh rock oysters, beach cafe dining)", costTransit: "$5 - $12 / day (Opal card covers iconic harbor ferries)", costTier: "Moderate Western",
        highlights: [
            "Taking the scenic ferry from Circular Quay past the Opera House to Manly Beach",
            "Walking the 6-kilometer cliffside coastal path from Bondi to Coogee",
            "Swimming in the iconic ocean tide pool at Bondi Icebergs Club",
            "Dining on fresh Sydney rock oysters and local barramundi with harbor views"
        ]
    },
    maldives: {
        name: "Maldives", code: "MLE", flag: "🇲🇻", archetype: "The Coastal Recharger", mapQuery: "Maldives", coordinates: { lat: 4.1755, lng: 73.5093 }, region: "Asia/Pacific", baseFare: 920,
        narrative: "The quintessential tropical fantasy. Overwater bungalows perched over fluorescent turquoise lagoons, thriving house coral reefs, and total barefoot seclusion.",
        cash: "Local inhabited island guesthouses in Maafushi or Dhigurah ($70-$120/night); luxury resort speedboats.",
        points: "One of the greatest points redemptions on Earth: Park Hyatt Maldives, Alila Kothaifaru, or Conrad Maldives via Hilton/Hyatt points.",
        season: "November – April",
        seasonReason: "The dry northeast monsoon brings glass-flat seas, maximum underwater clarity, and minimal rainfall.",
        weatherTip: "Local islands now allow affordable travel with local speedboats, or use credit card free night certificates for 5-star private islands.",
        costLodging: "$80 - $160 / night (Local island guesthouses) or 30k+ pts for luxury overwater villas", costFood: "$25 - $70 / day (Fresh tuna curries, tropical fruit, resort dining)", costTransit: "$30 - $150 / day (Public ferry or resort speedboat transfers)", costTier: "Luxury Points Sweet Spot",
        highlights: [
            "Stepping directly from your overwater villa deck into crystal lagoon water",
            "Snorkeling with gentle giant whale sharks in South Ari Atoll",
            "Dining under the ocean in glass underwater restaurant suites",
            "Watching sunset dolphins leap alongside traditional dhoni wooden boats"
        ]
    },
    tahiti: {
        name: "Tahiti & French Polynesia (Papeete, Moorea & Bora Bora)", code: "PPT", flag: "🇵🇫", archetype: "The Coastal Recharger", mapQuery: "Bora Bora, French Polynesia", coordinates: { lat: -17.6509, lng: -149.426 }, region: "Asia/Pacific", baseFare: 890,
        narrative: "Jagged emerald volcanic peaks rising dramatically from fluorescent turquoise coral lagoons. The ultimate dreamscape for romance, coral gardens, and Polynesian warmth.",
        cash: "Family-run beachfront pensions and garden fares on Moorea ($90-$160/night); overwater bungalow points redemptions on Bora Bora; local fare shacks along lagoon shores.",
        points: "Air France or Air Tahiti Nui awards via Flying Blue; Oneworld partner awards via Atmos Rewards; Bilt 1:1 transfer options; luxury points stays via IHG and Hilton.",
        season: "May – October",
        seasonReason: "The dry austral winter brings comfortable trade winds, minimal humidity, and calm lagoon waters.",
        weatherTip: "Stay on Moorea for affordable local culture and easy ferry access, then spend points on Bora Bora.",
        costLodging: "$100 - $220 / night (Moorea guesthouses) or luxury points villas", costFood: "$30 - $65 / day (Poisson cru with fresh coconut milk, tropical baguettes)", costTransit: "$20 - $45 / day (Aremiti ferry from Tahiti + scooter rentals)", costTier: "South Pacific Paradise",
        highlights: [
            "Swimming with friendly stingrays and blacktip reef sharks in shallow turquoise water",
            "Kayaking across Moorea's Cook's Bay framed by jagged green peaks",
            "Savoring fresh poisson cru (raw tuna in coconut milk) from a beach shack",
            "Taking a 4x4 safari through pineapple plantations up to the Belvedere Lookout"
        ]
    },
    turks: {
        name: "Turks and Caicos", code: "PLS", flag: "🇹🇨", archetype: "The Coastal Recharger", mapQuery: "Grace Bay, Turks and Caicos", coordinates: { lat: 21.694, lng: -71.7979 }, region: "Americas/Caribbean", baseFare: 360,
        narrative: "World-famous powdery white sands of Grace Bay, electric-turquoise water with clarity like a swimming pool, and pristine barrier reef diving.",
        cash: "Boutique villa rentals and condo apartments in Providenciales ($130-$230/night); affordable grocery shopping.",
        points: "Nonstop flights on JetBlue TrueBlue (1:1 transfer partner from Bilt Rewards, Chase, Citi), American, and Delta; Point Grace and Ritz-Carlton redemptions.",
        season: "December – April",
        seasonReason: "Warm sunshine, low rainfall, and comfortable trade winds outside the hurricane season.",
        weatherTip: "Rent a compact car to explore uncrowded secluded coves like Taylor Bay and Sapodilla Bay.",
        costLodging: "$130 - $250 / night (Providenciales condos & villas)", costFood: "$40 - $80 / day (Conch fritters, cracked conch, oceanfront seafood)", costTransit: "$25 - $45 / day (Rental car is essential for island exploring)", costTier: "Moderate / Luxury Caribbean",
        highlights: [
            "Strolling the unblemished 12-mile crescent of powdery white sand on Grace Bay",
            "Snorkeling over the vibrant reef wall dropping into deep blue water at Bight Reef",
            "Feasting on fresh cracked conch at the lively Thursday Island Fish Fry",
            "Wading the ankle-deep, calm turquoise waters of secluded Taylor Bay"
        ]
    },
    phuket: {
        name: "Phuket & Phi Phi Islands, Thailand", code: "HKT", flag: "🇹🇭", archetype: "The Coastal Recharger", mapQuery: "Phuket, Thailand", coordinates: { lat: 7.8804, lng: 98.3923 }, region: "Asia/Pacific", baseFare: 740,
        narrative: "Limestone sea stacks rising from Andaman waters, hidden coves like Freedom Beach, vibrant night markets, and cliffside private pool villas.",
        cash: "Boutique private pool villas in Rawai or Bang Tao ($60-$120/night); unmatched street food and massage affordability.",
        points: "Air Canada Aeroplan or Singapore KrisFlyer awards; high cash-stretching 5-star luxury Hyatt and Marriott properties.",
        season: "November – April",
        seasonReason: "The dry northeast monsoon brings sunny skies, calm emerald waters, and gentle breezes.",
        weatherTip: "Avoid the crowded Patong area—stay in peaceful Kata, Nai Harn, or Old Phuket Town.",
        costLodging: "$45 - $110 / night (Private pool villas and beach resorts)", costFood: "$12 - $30 / day (Pad Thai, fresh mango sticky rice, grilled tiger prawns)", costTransit: "$5 - $20 / day (Scooter rental or Grab app rides)", costTier: "Exceptional Tropical Value",
        highlights: [
            "Chartering a traditional wooden longtail boat through the limestone cliffs of Pileh Lagoon",
            "Watching golden sunsets from the open-air wooden deck of Promthep Cape",
            "Snorkeling among tropical clownfish in the clear turquoise bays of Koh Phi Phi",
            "Exploring colorful Sino-Portuguese heritage shophouses in Old Phuket Town"
        ]
    },
    sayulita: {
        name: "Sayulita & Puerto Vallarta, Mexico", code: "PVR", flag: "🇲🇽", archetype: "The Coastal Recharger", mapQuery: "Sayulita, Mexico", coordinates: { lat: 20.8689, lng: -105.4408 }, region: "Americas/Caribbean", baseFare: 320,
        narrative: "Bohemian Pacific surf culture, colorful street flags, artisan cafes, jungle-backed sand coves, and fresh roadside ceviche tostadas.",
        cash: "Palapa-roofed open-air apartments or private surf casitas ($60-$110/night); incredible street taco dining.",
        points: "Nonstop flights on Alaska, United, Delta, and American; W Punta de Mita or Conrad Punta de Mita.",
        season: "November – April",
        seasonReason: "Dry, sunny days in the low 80s with virtually zero rainfall and consistent Pacific surf swells.",
        weatherTip: "Rent a golf cart in Sayulita to cruise between town and secluded beaches like Playa de los Muertos.",
        costLodging: "$60 - $120 / night (Bohemian surf casitas & village apartments)", costFood: "$15 - $35 / day (Mahi-mahi fish tacos, ceviche bowls, craft mezcal cocktails)", costTransit: "$5 - $15 / day (Golf cart rentals or local bus to Puerto Vallarta)", costTier: "High Mexican Beach Value",
        highlights: [
            "Catching mellow sunset surf waves at the main beach break",
            "Hiking the coastal jungle trail to the secluded cove of Playa San Pancho",
            "Tasting fresh mahi-mahi fish tacos under papel picado flags in the plaza",
            "Taking a boat trip to snorkel through the crater rock dome of the Marietas Islands"
        ]
    },
    amalfi: {
        name: "Amalfi Coast & Capri, Italy", code: "NAP", flag: "🇮🇹", archetype: "The Coastal Recharger", mapQuery: "Positano, Italy", coordinates: { lat: 40.634, lng: 14.6027 }, region: "Europe/Med", baseFare: 610,
        narrative: "Pastel villages clinging to vertical Mediterranean cliffs, terraced lemon groves, cliffside beach clubs, and unhurried coastal ferry rides.",
        cash: "Guest apartments in quieter cliffside towns like Praiano or Minori ($110-$200/night); affordable public ferries.",
        points: "Fly to Naples via SkyTeam or Star Alliance; redeem card points for coastal cliffside hotels.",
        season: "May – June & September – October",
        seasonReason: "Warm sea swimming and open cliffside restaurants without peak August gridlock and high-season surcharges.",
        weatherTip: "Take public coastal ferries between towns instead of buses—ferries avoid cliff traffic and offer million-dollar views.",
        costLodging: "$120 - $240 / night (Praiano or Minori coastal apartments)", costFood: "$40 - $80 / day (Spaghetti alle vongole, limoncello spritz, mozzarella)", costTransit: "$10 - $25 / day (Travelmar public passenger ferries)", costTier: "Moderate / Mediterranean Splurge",
        highlights: [
            "Sailing on a passenger ferry past the pastel stacked houses of Positano",
            "Hiking the breathtaking high cliffside Path of the Gods (Sentiero degli Dei)",
            "Sipping limoncello on a shaded terrace surrounded by fragrant Sorrento lemon groves",
            "Taking a wooden boat around the limestone sea stacks of Capri's Faraglioni"
        ]
    },
    seychelles: {
        name: "Seychelles (Mahé & Praslin)", code: "SEZ", flag: "🇸🇨", archetype: "The Coastal Recharger", mapQuery: "Praslin, Seychelles", coordinates: { lat: -4.6796, lng: 55.492 }, region: "Middle East/Africa", baseFare: 940,
        narrative: "Prehistoric granite boulders framing white powdery beaches, ancient coco de mer palm forests, giant Aldabra tortoises, and turquoise Indian Ocean shallows.",
        cash: "Self-catering Creole beach chalets on Mahé and Praslin ($80-$150/night); local take-away Creole curries.",
        points: "Qatar Airways Qsuite via Doha using Avios; Hilton or Constance properties on points.",
        season: "April – May & October – November",
        seasonReason: "The inter-monsoon periods bring glass-calm waters with peak 100-foot snorkeling visibility.",
        weatherTip: "Rent a small car on Mahé to discover uncrowded wild beaches like Anse Intendance.",
        costLodging: "$85 - $170 / night (Creole self-catering beach chalets)", costFood: "$20 - $50 / day (Take-away Creole octopus curries, fresh grilled fish)", costTransit: "$25 - $45 / day (Small rental car + Cat Cocos ferry)", costTier: "Exotic Island Value",
        highlights: [
            "Wandering among the giant sculpted granite boulders of Anse Source d'Argent on La Digue",
            "Hiking through the prehistoric palm canopy of Vallée de Mai to see rare Coco de Mer",
            "Feeding and walking alongside giant Aldabra tortoises roaming wild",
            "Snorkeling over shallow coral reefs in the clear waters of Curieuse Island"
        ]
    },
    crete: {
        name: "Crete, Greece", code: "HER", flag: "🇬🇷", archetype: "The Coastal Recharger", mapQuery: "Chania, Crete, Greece", coordinates: { lat: 35.2401, lng: 24.8093 }, region: "Europe/Med", baseFare: 640,
        narrative: "Rugged coastlines, ancient Minoan mythology, and farm-to-table culinary purity. Explore secluded Libyan Sea beaches and family-run olive-oil tavernas.",
        cash: "Seaside village studios and family villas ($80-$140/night); incredible value dining at local tavernas.",
        points: "Star Alliance awards via United/Aegean; Marriott Luxury Collection resort certificates.",
        season: "May – June & September – Late October",
        seasonReason: "Greece's southernmost island enjoys Europe's longest summer, keeping sea waters warm into late October.",
        weatherTip: "Crete is Greece's southernmost major island, enjoying Europe's longest summer weather.",
        costLodging: "$75 - $150 / night (Chania/Rethymno apartments)", costFood: "$25 - $50 / day (Organic Cretan olive oil, lamb, dako salads)", costTransit: "$20 - $35 / day (Rental car for southern coast)", costTier: "High Mediterranean Value",
        highlights: [
            "Wading the pink sands and turquoise shallows of Elafonisi Beach",
            "Hiking the towering limestone cliffs of Samaria Gorge",
            "Wandering the Venetian harbor and maze-like alleys of old town Chania",
            "Touring the Bronze Age ruins of the Palace of Knossos"
        ]
    },
    madeira: {
        name: "Madeira, Portugal", code: "FNC", flag: "🇵🇹", archetype: "The Coastal Recharger", mapQuery: "Funchal, Madeira, Portugal", coordinates: { lat: 32.6500, lng: -16.9083 }, region: "Europe/Med", baseFare: 580,
        narrative: "The emerald Atlantic island where jagged volcanic sea cliffs plunge into deep blue water. Prehistoric laurel forests, narrow centuries-old irrigation canal trails (levadas), and natural volcanic ocean pools.",
        cash: "Oceanfront apartments in Funchal or mountain guesthouses ($65-$120/night); fresh grilled black scabbard fish and bolo do caco bread on $20/day.",
        points: "Star Alliance awards on TAP Air Portugal via United or Aeroplan; design-forward boutique properties via Chase and Capital One card portals.",
        season: "Year-Round (Best: April – October)",
        seasonReason: "Eternal spring temperatures hovering in the 70s, lush botanical blooms, and swimmable ocean rock pools.",
        weatherTip: "The south coast around Ponta do Sol is consistently sunny, even when northern peaks are shrouded in misty clouds.",
        costLodging: "$65 - $130 / night (Oceanview apartments and traditional quintas)", costFood: "$20 - $45 / day (Espetada beef skewers on laurel wood, fresh passionfruit, Madeira wine)", costTransit: "$15 - $30 / day (Affordable rental car essential for mountain switchbacks)", costTier: "Exceptional Island Value",
        highlights: [
            "Walking along the sheer misty cliff edges of the 25 Fontes levada water canal trail",
            "Swimming in natural volcanic basalt rock pools filled by Atlantic ocean swells in Porto Moniz",
            "Catching dawn above a sea of clouds from the craggy summit of Pico do Arieiro",
            "Riding traditional wicker toboggans down steep cobblestone streets from Monte to Funchal"
        ]
    },
    belize: {
        name: "Ambergris Caye & Caye Caulker, Belize", code: "BZE", flag: "🇧🇿", archetype: "The Coastal Recharger", mapQuery: "Ambergris Caye, Belize", coordinates: { lat: 17.9214, lng: -87.9611 }, region: "Americas/Caribbean", baseFare: 360,
        narrative: "Laid-back Caribbean rhythm, turquoise coral flats, and the world's second-largest barrier reef. Barefoot golf-cart transport, overwater palapa bars, and world-class marine life encounters.",
        cash: "Breezy beachfront cabanas in Caye Caulker or San Pedro ($60-$110/night); fresh grilled lobster tails and fry jacks for under $15.",
        points: "Direct nonstops from DEN, MSP, and IAH via United or Delta; transfer points to Hyatt for boutique retreats or book via bank travel portals.",
        season: "December – May",
        seasonReason: "Dry season sunshine, calm sea visibility for reef diving, and refreshing trade winds.",
        weatherTip: "Take the 45-minute water taxi from Belize City to Caye Caulker for an ultra-relaxed 'Go Slow' vibe without cars.",
        costLodging: "$65 - $125 / night (Beachfront thatch cabanas and island guesthouses)", costFood: "$15 - $35 / day (Grilled jerk chicken, fresh conch ceviche, fry jacks)", costTransit: "$5 - $15 / day (Bicycle rentals, golf carts, and water taxis)", costTier: "High Caribbean Value",
        highlights: [
            "Snorkeling alongside gentle nurse sharks and southern stingrays in the crystal shallows of Shark Ray Alley",
            "Sipping cold Belikin beer while sitting in overwater inner tubes at the split in Caye Caulker",
            "Kayaking over shallow turquoise turtle grass flats looking for spotted eagle rays",
            "Taking a boat expedition into the deep blue circular abyss of the Great Blue Hole"
        ]
    },

        azores: {
        name: "Azores (São Miguel & Flores), Portugal", code: "PDL", flag: "🇵🇹", archetype: "The Coastal Recharger", mapQuery: "Sete Cidades, Azores, Portugal", coordinates: { lat: 37.7412, lng: -25.6756 }, region: "Europe/Med", baseFare: 520,
        narrative: "The emerald volcanic paradise of the mid-Atlantic. Twin crater lakes of Sete Cidades, natural warm geothermal ocean baths, sea cliffs blanketed in hydrangeas, and restorative Atlantic serenity.",
        cash: "Charming oceanfront stone quintas and boutique studio lofts in Ponta Delgada ($80-$140/night); incredible value for fresh island cheeses, grass-fed beef, and volcanic cozido stews.",
        points: "Direct seasonal Star Alliance awards (United via Aeroplan/MileagePlus) or year-round TAP Air Portugal via Capital One or Chase; book boutique quintas via bank portals.",
        season: "May – October",
        seasonReason: "Mild Atlantic temperatures, vibrant blue hydrangeas lining every road, and peak conditions for whale and dolphin watching.",
        weatherTip: "Pack layers—the Azores can experience four seasons in a single afternoon, but natural thermal springs like Ferraria are warm year-round.",
        costLodging: "$80 - $150 / night (Historic quintas & oceanfront flats)", costFood: "$25 - $50 / day (Volcanic cozido das Furnas, lapas limpets, fresh tuna steaks)", costTransit: "$20 - $40 / day (Rental car is essential for discovering remote volcanic miradouros)", costTier: "High European Island Value",
        highlights: [
            "Standing on the rim of Sete Cidades caldera gazing over the blue and green crater lakes",
            "Soaking in the natural ocean thermal hot springs of Ponta da Ferraria at low tide",
            "Whale and dolphin watching excursions in the deep Atlantic waters off São Miguel",
            "Hiking through mist-shrouded mossy waterfalls to Salto do Prego in Faial da Terra"
        ]
    },
    kefalonia: {
        name: "Kefalonia & Ithaca, Greece", code: "EFL", flag: "🇬🇷", archetype: "The Coastal Recharger", mapQuery: "Myrtos Beach, Kefalonia, Greece", coordinates: { lat: 38.1754, lng: 20.489 }, region: "Europe/Med", baseFare: 590,
        narrative: "Emerald pine forests plunging into fluorescent cyan Ionian seas. Dramatic limestone cliffs framing Myrtos Beach, subterranean lake caves, pastel Venetian fishing ports, and Homeric coastal tranquility.",
        cash: "Hillside villas with panoramic sea balconies in Assos or Fiskardo ($80-$150/night); family tavernas serving local meat pie and Robola wine.",
        points: "Star Alliance awards via Aegean or Lufthansa (1:1 from Aeroplan, United, or Avianca LifeMiles); Hyatt and Marriott points properties in the Greek islands.",
        season: "May – June & September – October",
        seasonReason: "Warm crystal waters and glorious Mediterranean sunshine with far less boat traffic than midsummer peak July and August.",
        weatherTip: "Rent a small motorboat in Fiskardo to discover private pebble coves accessible only from the water.",
        costLodging: "$80 - $160 / night (Hillside sea-view villas & harbor studios)", costFood: "$25 - $55 / day (Kefalonian meat pie, fresh sea bass, wild greens, crisp Robola wine)", costTransit: "$25 - $45 / day (Rental car is best for navigating rugged coastal headlands)", costTier: "High Mediterranean Value",
        highlights: [
            "Swimming in the electric-turquoise surf beneath towering white cliffs at Myrtos Beach",
            "Drifting by rowboat inside the sunlit turquoise underground cavern of Melissani Lake",
            "Strolling past pastel Venetian waterfront townhouses in the historic port of Fiskardo",
            "Taking a morning ferry to neighboring Ithaca to hike ancient olive-terraced ruins"
        ]
    },
    cornwall: {
        name: "Cornwall & Isles of Scilly, United Kingdom", code: "NQY", flag: "🇬🇧", archetype: "The Coastal Recharger", mapQuery: "St Ives, Cornwall, UK", coordinates: { lat: 50.266, lng: -5.0527 }, region: "Europe/Med", baseFare: 560,
        narrative: "Dramatic granite Atlantic headlands, turquoise tidal lagoons, subtropical gardens, and whitewashed artist harbors. Coastal footpaths terminate at centuries-old stone pubs serving cider and fresh crab.",
        cash: "Harborside cottages and cliff-top boutique inns in St Ives or Falmouth ($110-$190/night); fresh warm Cornish pasties and cream teas for under £8.",
        points: "Virgin Atlantic Flying Club (1:1 from Bilt, Chase, Amex, Citi) or British Airways Avios off-peak transatlantic flights into London, connecting via Great Western Railway Night Riviera sleeper train.",
        season: "May – September",
        seasonReason: "Long daylight hours, blooming wild coastal heather, and the warmest sea swimming temperatures along the Gulf Stream.",
        weatherTip: "Walk the South West Coast Path between St Ives and Zennor for untamed ocean views, then reward yourself at the 700-year-old Tinners Arms.",
        costLodging: "$110 - $210 / night (Seaside granite cottages & boutique inns)", costFood: "$30 - $65 / day (Cornish pasties, Newlyn crab sandwiches, clotted cream teas)", costTransit: "$10 - $25 / day (Scenic coastal branch rail lines & local buses)", costTier: "Moderate British Heritage",
        highlights: [
            "Walking across the tidal causeway to the medieval stone fortress of St Michael's Mount",
            "Watching an open-air theater performance carved directly into ocean granite cliffs at the Minack Theatre",
            "Exploring modern British art galleries and cobblestone alleys in the seaside colony of St Ives",
            "Taking the ferry or helicopter to the secluded, car-free white sand beaches of the Isles of Scilly"
        ]
    },
    noronha: {
        name: "Fernando de Noronha, Brazil", code: "FEN", flag: "🇧🇷", archetype: "The Coastal Recharger", mapQuery: "Baia do Sancho, Fernando de Noronha, Brazil", coordinates: { lat: -3.8574, lng: -32.4297 }, region: "Americas/Caribbean", baseFare: 890,
        narrative: "South America's premier protected oceanic sanctuary. Volcanic black basalt spires rising from sapphire seas, spinner dolphin pods, green sea turtle nurseries, and strictly regulated barefoot paradise.",
        cash: "Intimate family-run pousadas with hammock verandas ($120-$220/night); unhurried seafood dining under coconut palms.",
        points: "Book GOL award flights using American Airlines AAdvantage miles or LATAM flights via partner programs; credit card travel portal redemptions for boutique eco-pousadas.",
        season: "August – February",
        seasonReason: "Calm, crystal-clear water visibility exceeding 150 feet for diving and snorkeling; gentle trade winds.",
        weatherTip: "Visitor numbers are strictly limited by national park quotas—secure environmental tax permits (TPA) online in advance.",
        costLodging: "$120 - $250 / night (Charming eco-pousadas with tropical breakfasts)", costFood: "$35 - $70 / day (Fresh grilled mahi-mahi, moqueca fish stew, açaí bowls)", costTransit: "$15 - $30 / day (Dune buggy rentals or island public buses)", costTier: "Protected Oceanic Eco-Sanctuary",
        highlights: [
            "Descending the cliff ladder to Baía do Sancho, consistently rated among the world's most spectacular beaches",
            "Snorkeling alongside wild sea turtles, lemon sharks, and manta rays in the natural pools of Baía dos Porcos",
            "Watching hundreds of acrobatic spinner dolphins leap at sunrise from the cliffs of Mirante dos Golfinhos",
            "Watching dramatic Atlantic sunsets behind the iconic twin volcanic sea stacks of Morro Dois Irmãos"
        ]
    },
    // ==========================================
    // THE COSMOPOLITAN MAVERICK (18 Destinations)
    // ==========================================
    newyork: {
        name: "New York City, USA", code: "JFK", flag: "🇺🇸", archetype: "The Cosmopolitan Maverick", mapQuery: "Times Square, New York City", coordinates: { lat: 40.7128, lng: -74.006 }, region: "Americas/Caribbean", baseFare: 190,
        narrative: "Continuous urban momentum, landmark theatrical stages, skyline cocktail lounges, and unmatched neighborhood dining across every borough.",
        cash: "Brooklyn brownstone rentals or Queens transit-adjacent boutique stays for easier accommodation costs.",
        points: "Atmos Rewards (Alaska) or British Airways Avios for American Airlines corridor flights, or United MileagePlus / Aeroplan; World of Hyatt Category 5–7 properties in Midtown or Lower Manhattan.",
        season: "May – June & September – November",
        seasonReason: "Crisp, sunny walking temperatures perfect for Central Park foliage and outdoor dining.",
        weatherTip: "Autumn in New York (October/November) provides ideal walking temperatures.",
        costLodging: "$160 - $320 / night (Boutique hotels or outer-borough rentals)", costFood: "$40 - $90 / day (Dollar slices, dim sum, skyline dining)", costTransit: "$5 - $10 / day (24-hour subway and walking)", costTier: "High-Energy Splurge",
        highlights: [
            "Strolling the elevated gardens of the High Line through Chelsea",
            "Catching world-class stage performances in Broadway's theater district",
            "Wandering culinary spots through Chinatown and the Lower East Side",
            "Taking the East River Ferry from Brooklyn to Wall Street at golden hour"
        ]
    },
    seoul: {
        name: "Seoul, South Korea", code: "ICN", flag: "🇰🇷", archetype: "The Cosmopolitan Maverick", mapQuery: "Myeongdong, Seoul, South Korea", coordinates: { lat: 37.5665, lng: 126.978 }, region: "Asia/Pacific", baseFare: 790,
        narrative: "Creative urban momentum, royal palaces, cutting-edge fashion, and 24-hour food culture. Explore lively night markets and scenic mountain fortress trails.",
        cash: "Traditional Hanok stay experiences or stylish Hongdae apartments ($70-$120/night); ultra-cheap public transit.",
        points: "Delta SkyMiles or Flying Blue awards on Korean Air (SkyTeam); flexible hotel redemptions in Gangnam or Myeongdong.",
        season: "September – November & April – May",
        seasonReason: "Crisp autumn foliage and mild spring blooms offer relief from summer monsoons and winter freezes.",
        weatherTip: "Winters are cold; summers have monsoons. Spring and autumn are the prime windows.",
        costLodging: "$60 - $120 / night (Hongdae apartments or Bukchon hanoks)", costFood: "$20 - $45 / day (Korean BBQ, street tteokbokki, craft cafe hopping)", costTransit: "$3 - $6 / day (High-tech subway network with T-money card)", costTier: "High Asian Value",
        highlights: [
            "Wandering the historic wooden courtyard alleys of Bukchon Hanok Village",
            "Feasting on sizzling pork belly at a late-night Korean BBQ tent",
            "Hiking the ancient stone fortress wall trails overlooking Seoul",
            "Grazing through bindaetteok and dumplings at Gwangjang Market"
        ]
    },
    cdmx: {
        name: "Mexico City, Mexico", code: "MEX", flag: "🇲🇽", archetype: "The Cosmopolitan Maverick", mapQuery: "Roma Norte, Mexico City", coordinates: { lat: 19.4326, lng: -99.1332 }, region: "Americas/Caribbean", baseFare: 310,
        narrative: "Tree-lined boulevards in Roma and Condesa, world-class modern culinary tasting menus, Aztec ruins, and an explosion of contemporary design.",
        cash: "Stunning, design-forward apartments in Roma Norte for $70-$120/night; extraordinary street taco dining for $15/day.",
        points: "Aeromexico / Delta awards; luxury redemptions at Andaz Condesa or St. Regis Mexico City.",
        season: "October – April",
        seasonReason: "Mild, dry daytime weather with pleasant sunshine and minimal seasonal rainfall.",
        weatherTip: "CDMX sits at 7,300 ft elevation—mornings and evenings are crisp.",
        costLodging: "$60 - $120 / night (Design-forward Roma/Condesa Airbnbs)", costFood: "$15 - $40 / day (Street tacos to Michelin tasting menus)", costTransit: "$2 - $8 / day (Extremely affordable Uber and metro)", costTier: "High Global Value",
        highlights: [
            "Tasting tacos al pastor and mezcal across Roma Norte and Condesa",
            "Visiting the blue courtyard home of Frida Kahlo in Coyoacán",
            "Floating on traditional trajineras through the canals of Xochimilco",
            "Climbing the ancient Sun and Moon pyramids of Teotihuacán"
        ]
    },
    singapore: {
        name: "Singapore", code: "SIN", flag: "🇸🇬", archetype: "The Cosmopolitan Maverick", mapQuery: "Gardens by the Bay, Singapore", coordinates: { lat: 1.3521, lng: 103.8198 }, region: "Asia/Pacific", baseFare: 880,
        narrative: "A hyper-modern garden city where futuristic architecture like Marina Bay Sands meets UNESCO-recognized hawker food markets and lush tropical rainforests.",
        cash: "Boutique heritage shophouse hotels in Chinatown or Katong ($120-$180/night); world-class Michelin-starred meals for under $8 at hawker centers.",
        points: "Singapore Airlines KrisFlyer sweet spots (transfers 1:1 from Chase, Amex, Capital One, Citi); prime Marriott and Hyatt redemptions.",
        season: "November – March",
        seasonReason: "Comfortable tropical breezes and festive illuminated night markets across Chinatown and Marina Bay.",
        weatherTip: "Afternoon tropical downpours are common but brief—hawker centers and malls are seamlessly connected by underground walkways.",
        costLodging: "$120 - $240 / night (Modern city hotels & shophouse suites)", costFood: "$15 - $45 / day (Hainanese chicken rice, laksa, satay, chili crab)", costTransit: "$2 - $6 / day (Ultra-clean MRT subway network)", costTier: "Moderate / Hawker-Friendly Luxury",
        highlights: [
            "Strolling the illuminated Supertree Grove and Cloud Forest at Gardens by the Bay",
            "Tasting Michelin-starred chicken rice and char kway teow at Maxwell Hawker Centre",
            "Swimming in the iconic infinity pool high above Marina Bay",
            "Exploring colorful Peranakan shophouse facades and cafes in Joo Chiat"
        ]
    },
    taipei: {
        name: "Taipei, Taiwan", code: "TPE", flag: "🇹🇼", archetype: "The Cosmopolitan Maverick", mapQuery: "Taipei 101, Taiwan", coordinates: { lat: 25.033, lng: 121.5654 }, region: "Asia/Pacific", baseFare: 760,
        narrative: "Neon-lit night market corridors, natural volcanic hot springs, mist-covered tea mountains, and Asia's friendliest, most accessible urban transit.",
        cash: "Stylish design apartments in Da'an or Ximending ($60-$110/night); world-renowned soup dumplings and scallion pancakes for pocket change.",
        points: "EVA Air (Star Alliance) awards via Aeroplan/United, or boutique luxury flights on STARLUX Airlines booked via Atmos Rewards (Alaska) or American Airlines; Grand Hyatt Taipei or boutique cards portal redemptions.",
        season: "October – December & March – May",
        seasonReason: "Pleasant autumn and spring temperatures with minimal rainfall, ideal for hiking and night markets.",
        weatherTip: "The Taipei MRT subway is so efficient and clean that you'll rarely need a taxi.",
        costLodging: "$60 - $115 / night (Modern Da'an or Xinyi apartments)", costFood: "$12 - $30 / day (Xiao long bao soup dumplings, beef noodle soup, night markets)", costTransit: "$2 - $5 / day (EasyCard for MRT and YouBike)", costTier: "Outstanding Asian Value",
        highlights: [
            "Grazing on crispy pepper buns and stinky tofu at Raohe and Shilin Night Markets",
            "Hiking the stone steps of Elephant Mountain for sunset views of Taipei 101",
            "Taking the Maokong Gondola up to mountain tea plantations for high-mountain oolong",
            "Soaking in natural sulfur hot springs in the historic Beitou bathhouses"
        ]
    },
    london: {
        name: "London, United Kingdom", code: "LHR", flag: "🇬🇧", archetype: "The Cosmopolitan Maverick", mapQuery: "Big Ben, London, UK", coordinates: { lat: 51.5074, lng: -0.1278 }, region: "Europe/Med", baseFare: 520,
        narrative: "Global cultural crossroads. World-class West End theater, royal green parks, historic river pubs, cutting-edge contemporary art, and distinct borough neighborhoods.",
        cash: "Apartment rentals in Islington, Southwark, or Shoreditch ($130-$220/night); world-class free national museums.",
        points: "Virgin Atlantic Flying Club & British Airways Avios transatlantic sweet spots; extensive Marriott, Hyatt, and Hilton properties.",
        season: "May – September",
        seasonReason: "Long summer evenings, open-air pub courtyards, and green parks operating in full bloom.",
        weatherTip: "All national museums (British Museum, Tate Modern, National Gallery) have 100% free admission year-round.",
        costLodging: "$130 - $260 / night (Borough apartments & boutique hotels)", costFood: "$35 - $75 / day (Sunday roast, fish and chips, Borough Market street eats)", costTransit: "$6 - $12 / day (Contactless Tube and iconic red double-decker buses)", costTier: "Moderate / High Culture",
        highlights: [
            "Watching a world-class theater production in the West End",
            "Browsing artisanal food stalls under the Victorian railway arches of Borough Market",
            "Strolling along the South Bank from the London Eye past Tate Modern to Tower Bridge",
            "Having a pint of real ale in a 400-year-old riverside pub along the Thames"
        ]
    },
    berlin: {
        name: "Berlin, Germany", code: "BER", flag: "🇩🇪", archetype: "The Cosmopolitan Maverick", mapQuery: "Brandenburg Gate, Berlin", coordinates: { lat: 52.52, lng: 13.405 }, region: "Europe/Med", baseFare: 550,
        narrative: "Raw creative energy, complex 20th-century history, leafy canal pathways, third-wave coffee roasters, and the world's most legendary electronic music culture.",
        cash: "Spacious Altbau apartments in Kreuzberg, Neukölln, or Prenzlauer Berg ($75-$130/night); affordable currywurst and döner.",
        points: "Lufthansa (Miles & More exclusive 1:1 via Rove Miles) or British Airways connections; high-value Grand Hyatt Berlin or Marriott stays.",
        season: "May – September",
        seasonReason: "Outdoor beer gardens, canal-side flea markets, and lively open-air urban festivals run all summer.",
        weatherTip: "Rent a bicycle—Berlin is wide, flat, and features dedicated bike paths on almost every street.",
        costLodging: "$75 - $140 / night (Kreuzberg or Prenzlauer Berg apartments)", costFood: "$20 - $45 / day (Mustafa's döner kebabs, currywurst, craft beer, specialty coffee)", costTransit: "$3 - $8 / day (Comprehensive U-Bahn and S-Bahn network)", costTier: "High European Urban Value",
        highlights: [
            "Walking the open-air gallery along the preserved concrete slabs of the Berlin Wall",
            "Cycling through the lush pathways of the Tiergarten to the Brandenburg Gate",
            "Spending an afternoon browsing vintage flea markets and vinyl shops in Mauerpark",
            "Exploring world-class classical antiquities on UNESCO Museum Island"
        ]
    },
    hongkong: {
        name: "Hong Kong", code: "HKG", flag: "🇭🇰", archetype: "The Cosmopolitan Maverick", mapQuery: "Victoria Peak, Hong Kong", coordinates: { lat: 22.3193, lng: 114.1694 }, region: "Asia/Pacific", baseFare: 820,
        narrative: "Vertical density framed by green mountain ridges and Victoria Harbour. Ancient double-decker trams rattle past skyscrapers, traditional dim sum halls, and island trails.",
        cash: "Compact, impeccably clean hotels in Wan Chai or Sheung Wan ($80-$140/night); world-class Michelin dim sum for under $15.",
        points: "Cathay Pacific Asia Miles sweet spots; Grand Hyatt Hong Kong and The Ritz-Carlton Hong Kong.",
        season: "October – December",
        seasonReason: "Crisp, sunny autumn weather with clear harbor visibility and zero tropical typhoon risk.",
        weatherTip: "The historic Star Ferry across Victoria Harbour costs less than $0.50 and offers one of the world's top skyline views.",
        costLodging: "$80 - $160 / night (Wan Chai or Central boutique hotels)", costFood: "$18 - $45 / day (Dim sum carts, roast goose, egg tarts, wonton noodles)", costTransit: "$2 - $6 / day (Octopus card for MTR, Ding Ding trams, and Star Ferry)", costTier: "High Asian Cosmopolitan Value",
        highlights: [
            "Riding the historic Peak Tram to Victoria Peak for the world's most dramatic skyline view",
            "Ordering steaming bamboo baskets of har gow and siu mai at a traditional dim sum hall",
            "Crossing Victoria Harbour on the green-and-white wooden Star Ferry at night",
            "Hiking the scenic coastal ridge of the Dragon's Back trail"
        ]
    },
    melbourne: {
        name: "Melbourne, Australia", code: "MEL", flag: "🇦🇺", archetype: "The Cosmopolitan Maverick", mapQuery: "Flinders Street Station, Melbourne", coordinates: { lat: -37.8136, lng: 144.9631 }, region: "Asia/Pacific", baseFare: 990,
        narrative: "The undisputed cultural and coffee capital of Australia. Hidden graffiti-covered laneways, basement jazz bars, world-leading espresso culture, and coastal tram lines.",
        cash: "Trendy loft apartments in Fitzroy or Carlton ($90-$160/night); world-class cafe brunch menus.",
        points: "Qantas Oneworld awards via American/Alaska; Marriott and Hyatt properties in central Melbourne.",
        season: "November – March",
        seasonReason: "Warm Australian summer delivers outdoor rooftop cinema nights, open-air concerts, and beach culture.",
        weatherTip: "Trams within the entire central Melbourne downtown grid are 100% free—no ticket needed.",
        costLodging: "$90 - $170 / night (Fitzroy or CBD loft apartments)", costFood: "$30 - $65 / day (World's best flat white coffee, inventive cafe brunches, wine)", costTransit: "$3 - $8 / day (Free CBD tram zone + myki card)", costTier: "Moderate Western",
        highlights: [
            "Getting lost in the bluestone laneways of Hosier Lane and Degraves Street",
            "Sipping world-class magic coffees in neighborhood cafes across hipster Fitzroy",
            "Driving the dramatic coastal curves and limestone sea stacks of the Great Ocean Road",
            "Catching live music in a basement bar or watching sunset over St Kilda beach"
        ]
    },
    chicago: {
        name: "Chicago, USA", code: "ORD", flag: "🇺🇸", archetype: "The Cosmopolitan Maverick", mapQuery: "Millennium Park, Chicago", coordinates: { lat: 41.8781, lng: -87.6298 }, region: "Americas/Caribbean", baseFare: 190,
        narrative: "Monumental architecture, sparkling Lake Michigan beaches, world-renowned improvisational comedy, deep-dish and tavern-style pizza, and legendary neighborhood summer fests.",
        cash: "Loop or West Loop apartments ($120-$200/night); easy 'L' train transit from O'Hare directly to downtown.",
        points: "Major United (Star Alliance) and American (Oneworld) mega-hub; Park Hyatt Chicago and LondonHouse.",
        season: "June – September",
        seasonReason: "Warm sunny lakefront weather, buzzing riverwalk patios, and legendary neighborhood street fests.",
        weatherTip: "Take the Chicago Architecture Center river cruise—it is consistently ranked one of the best guided tours in North America.",
        costLodging: "$120 - $230 / night (West Loop or River North flats)", costFood: "$30 - $65 / day (Tavern-style pizza, Italian beef, Fulton Market dining)", costTransit: "$3 - $8 / day (Ventra card for the iconic 'L' train)", costTier: "Moderate North American",
        highlights: [
            "Cruising on an architecture boat tour along the Chicago River between towering skyscrapers",
            "Photographing the skyline reflections in 'The Bean' at Millennium Park",
            "Feasting on award-winning dining along the culinary corridor of Fulton Market",
            "Biking along the 18-mile paved trail directly along the sandy shores of Lake Michigan"
        ]
    },
    sanfrancisco: {
        name: "San Francisco & Bay Area, USA", code: "SFO", flag: "🇺🇸", archetype: "The Cosmopolitan Maverick", mapQuery: "Golden Gate Bridge, San Francisco", coordinates: { lat: 37.7749, lng: -122.4194 }, region: "Americas/Caribbean", baseFare: 240,
        narrative: "Dramatic fog rolling across the Golden Gate, historic cable cars climbing steep Victorian hills, Michelin-recognized sourdough bakeries, and vibrant Mission taquerias.",
        cash: "Boutique hotels or rentals in Nob Hill, Marina, or Mission ($130-$230/night); excellent public transit.",
        points: "United Airlines transpacific hub; Hyatt Regency Embarcadero or The St. Regis San Francisco.",
        season: "September – November",
        seasonReason: "The city's famous 'Indian Summer' brings the warmest, sunniest days of the entire year.",
        weatherTip: "Summer (June/July) is famously chilly and foggy ('Karl the Fog')—pack layers even in July.",
        costLodging: "$130 - $260 / night (Nob Hill or Marina apartments)", costFood: "$35 - $75 / day (Mission burritos, fresh clam chowder in sourdough bowls, dim sum)", costTransit: "$4 - $10 / day (Muni Metro, cable cars, and BART)", costTier: "High Coastal Splurge",
        highlights: [
            "Walking or biking across the 1.7-mile span of the Golden Gate Bridge",
            "Riding a historic wooden cable car over the steep hills of California Street",
            "Eating authentic mission-style burritos in the colorful mural alleys of the Mission District",
            "Taking a morning ferry to the historic island fortress of Alcatraz"
        ]
    },
    copenhagen: {
        name: "Copenhagen & Danish Riviera, Denmark", code: "CPH", flag: "🇩🇰", archetype: "The Cosmopolitan Maverick", mapQuery: "Nyhavn, Copenhagen, Denmark", coordinates: { lat: 55.6761, lng: 12.5683 }, region: "Europe/Med", baseFare: 540,
        narrative: "The global benchmark for urban livability, New Nordic gastronomy, and effortless design. Glide along canal quays on a bicycle past historic copper spires, cutting-edge harbor baths, and Michelin-starred bakeries.",
        cash: "Design-forward studio flats in Vesterbro or Nørrebro ($110-$190/night); world-class smørrebrød and street market halls keep dining delicious and accessible.",
        points: "SAS EuroBonus (exclusive 1:1 transfer via Rove Miles, SkyTeam hub) with low transatlantic saver pricing, or Air France/KLM Flying Blue promo awards; boutique stays via Chase/Capital One.",
        season: "May – September",
        seasonReason: "Long daylight hours, vibrant open-air harbor swimming in clean canals, and lively sidewalk cafe terraces.",
        weatherTip: "Rent a Donkey Republic bicycle on day one—Copenhagen's cycle superhighways are the fastest and most immersive way to travel.",
        costLodging: "$120 - $220 / night (Nordic design flats in Vesterbro)", costFood: "$35 - $75 / day (Cardamom buns, open-faced smørrebrød, craft microbreweries)", costTransit: "$4 - $12 / day (City bicycle rental or 24/7 Metro)", costTier: "Moderate Scandinavian Design",
        highlights: [
            "Cycling past colorful 17th-century townhouses and wooden sailing ships along Nyhavn",
            "Taking a morning dip in the clean seawater harbor baths at Islands Brygge",
            "Grazing through artisanal Danish smørrebrød and natural wines at Torvehallerne food hall",
            "Visiting the fairy-tale moated Renaissance castle of Frederiksborg in the Danish countryside"
        ]
    },
    osaka: {
        name: "Osaka & Kansai Culinary Heartland, Japan", code: "KIX", flag: "🇯🇵", archetype: "The Cosmopolitan Maverick", mapQuery: "Dotonbori, Osaka, Japan", coordinates: { lat: 34.6937, lng: 135.5023 }, region: "Asia/Pacific", baseFare: 840,
        narrative: "Japan's neon-drenched culinary capital and kinetic urban powerhouse. Towering neon canyons over the Dotonbori canal meet historic castle moats, alleyway izakayas, and relentless street-food energy.",
        cash: "Boutique design hotels in Namba, Umeda, or Shinsaibashi ($70-$130/night); serviced high-rise apartments near Dotonbori; legendary standing tachinomi bars and street food for under $20/day.",
        points: "Partner awards via British Airways Avios on JAL (Oneworld), or Virgin Atlantic/Aeroplan for ANA (Star Alliance); W Osaka or Hyatt Regency points redemptions.",
        season: "March – May & October – November",
        seasonReason: "Mild springtime cherry blossoms along Osaka Castle park and crisp autumn foliage across Minoh Falls.",
        weatherTip: "Board the JR Haruka Express straight from Kansai Airport (KIX) into Tennoji, Shin-Osaka, or Kyoto in under an hour.",
        costLodging: "$70 - $140 / night (Namba design hotels & apartments)", costFood: "$20 - $50 / day (Takoyaki, okonomiyaki, kushikatsu, ramen)", costTransit: "$5 - $10 / day (Osaka Metro & Kansai Thru Pass)", costTier: "High Asian Urban Value",
        highlights: [
            "Grazing through sizzling takoyaki and crab grills under the giant Dotonbori neon signs",
            "Exploring the multi-tiered stone ramparts and moat gardens of Osaka Castle",
            "Tasting fresh uni and sashimi skewers at the historic Kuromon Ichiba Market",
            "Wandering retro neon alleyways and vintage record bars in Shinsekai under Tsutenkaku Tower"
        ]
    },

        busan: {
        name: "Busan & Southern Coast, South Korea", code: "PUS", flag: "🇰🇷", archetype: "The Cosmopolitan Maverick", mapQuery: "Haeundae Beach, Busan, South Korea", coordinates: { lat: 35.1796, lng: 129.0756 }, region: "Asia/Pacific", baseFare: 820,
        narrative: "South Korea's dynamic maritime design metropolis. Roaring fish auctions at Jagalchi at dawn, neon-illuminated suspension bridges over ocean bays, pastel cliffside artist alleys, and midnight street pocha tents.",
        cash: "High-rise design hotels overlooking Haeundae or Gwangalli Beach ($70-$130/night); incredibly fresh seafood and pork soup (dwaeji gukbap) for under $10.",
        points: "SkyTeam (Korean Air via Delta / Flying Blue) or Star Alliance (Asiana via Aeroplan); easily connected from Seoul via the 2.5-hour KTX bullet train; Park Hyatt Busan points redemptions.",
        season: "April – June & September – November",
        seasonReason: "Mild spring cherry blossoms along Dalmaji Hill and crisp autumn skies for walking coastal temple trails.",
        weatherTip: "Take the Haeundae Sky Capsule retro monorail along coastal cliffs for spectacular sunset views over the ocean.",
        costLodging: "$65 - $135 / night (Modern beachfront towers & design flats)", costFood: "$18 - $45 / day (Dwaeji gukbap, grilled eel, fresh sashimi, craft beer)", costTransit: "$3 - $8 / day (Clean subway network with T-money card)", costTier: "High Asian Value",
        highlights: [
            "Sampling live seafood prepared on the spot at the legendary Jagalchi Fish Market",
            "Wandering colorful tiered hillside art alleys in the cliffside Gamcheon Culture Village",
            "Visiting the rare coastal Buddhist sanctuary of Haedong Yonggungsa Temple built directly on sea rocks",
            "Enjoying craft beer and midnight street food under the illuminated spans of Gwangan Diamond Bridge"
        ]
    },
    medellin: {
        name: "Medellín & Antioquia Highlands, Colombia", code: "MDE", flag: "🇨🇴", archetype: "The Cosmopolitan Maverick", mapQuery: "El Poblado, Medellin, Colombia", coordinates: { lat: 6.2442, lng: -75.5812 }, region: "Americas/Caribbean", baseFare: 360,
        narrative: "The City of Eternal Spring nestled in an emerald Andean valley. Pioneering civic architecture, revolutionary mountain Metrocable transit, lush open-air design libraries, and third-wave coffee roasters.",
        cash: "Sleek designer studio apartments in El Poblado or Laureles ($50-$95/night); world-class gourmet dining and craft cocktails for a fraction of US prices.",
        points: "Avianca LifeMiles (1:1 transfer partner from Bilt, Capital One, Citi) with nonstops to Miami and JFK; JetBlue TrueBlue nonstops from FLL/MCO (1:1 from Bilt Rewards); boutique stays via card portals.",
        season: "Year-Round (Best: December – March & July – August)",
        seasonReason: "High-altitude 5,000-foot geography delivers year-round spring weather with daytime temperatures steadily in the high 70s.",
        weatherTip: "Ride the public Metrocable up to Parque Arví for an instant transition from urban design to mist-covered pine forest.",
        costLodging: "$50 - $110 / night (El Poblado design lofts & boutique hotels)", costFood: "$15 - $35 / day (Bandeja paisa, third-wave specialty pour-overs, craft dining)", costTransit: "$2 - $6 / day (Pristine Metro and aerial cable car transit)", costTier: "Exceptional Global Value",
        highlights: [
            "Riding the aerial Metrocable gondola soaring above hillside barrios into cloud forest nature reserves",
            "Exploring vibrant street murals and community hip-hop history in transformed Comuna 13",
            "Sipping single-origin Gesha coffee at third-wave specialty roasteries in leafy Manila and Provenza",
            "Day tripping to the monolithic granite climb and pastel tiled streets of Guatapé"
        ]
    },
    rotterdam: {
        name: "Rotterdam & South Holland, Netherlands", code: "RTM", flag: "🇳🇱", archetype: "The Cosmopolitan Maverick", mapQuery: "Erasmus Bridge, Rotterdam, Netherlands", coordinates: { lat: 51.9244, lng: 4.4777 }, region: "Europe/Med", baseFare: 540,
        narrative: "Europe's boldest architectural laboratory. Rebuilt from the ground up with audacious tilted Cube Houses, the soaring swan-like Erasmus Bridge, converted maritime warehouses, and experimental art spaces.",
        cash: "Modern loft apartments along the Nieuwe Maas river ($90-$160/night); vibrant covered Markthal food stalls and waterfront microbreweries.",
        points: "Fly into Amsterdam (AMS) on Flying Blue promo awards (transfers 1:1 from all major currencies), then catch the 24-minute Intercity Direct train straight to Rotterdam Centraal; Marriott and Hilton waterfront redemptions.",
        season: "May – September",
        seasonReason: "Long daylight hours, open-air harbor terraces, rooftop sculpture gardens, and architectural summer festivals.",
        weatherTip: "Take the fast water taxi across the harbor—it operates like a high-speed speedboat network between architectural landmarks.",
        costLodging: "$90 - $170 / night (Architectural harbor lofts & boutique hotels)", costFood: "$30 - $65 / day (Dutch bitterballen, Indonesian rijsttafel, Markthal street eats)", costTransit: "$4 - $10 / day (Bicycle rentals, trams, and water taxis)", costTier: "Moderate European Design",
        highlights: [
            "Touring the gravity-defying tilted yellow Cube Houses designed by Piet Blom",
            "Grazing beneath the massive 11,000-square-meter painted ceiling fresco inside the Markthal",
            "Crossing the iconic cable-stayed Erasmus Bridge connecting futuristic harbor districts",
            "Exploring cutting-edge contemporary art and rooftop forest gardens at Depot Boijmans Van Beuningen"
        ]
    },
    valencia: {
        name: "Valencia & The Turia Green Riverbed, Spain", code: "VLC", flag: "🇪🇸", archetype: "The Cosmopolitan Maverick", mapQuery: "City of Arts and Sciences, Valencia, Spain", coordinates: { lat: 39.4699, lng: -0.3763 }, region: "Europe/Med", baseFare: 550,
        narrative: "Futuristic Mediterranean brilliance where an entire former riverbed has been transformed into a lush 9-kilometer sunken park. Santiago Calatrava's white titanium monuments meet bohemian design ateliers in Ruzafa.",
        cash: "Spacious historic apartments with high ceilings in Ruzafa or El Carmen ($75-$130/night); authentic wood-fired paella valenciana for under €15.",
        points: "Iberia Plus or British Airways Avios off-peak awards via Madrid (1:1 from Bilt, Chase, Amex); or easy 100-minute AVE bullet train from MAD.",
        season: "April – June & September – October",
        seasonReason: "Golden Mediterranean sunshine, comfortable walking temperatures, and warm sea breezes along Malvarrosa beach.",
        weatherTip: "Rent a city bike and ride the entire car-free length of the Turia River park from the biopark to the Mediterranean.",
        costLodging: "$75 - $140 / night (Ruzafa bohemian flats & design boutiques)", costFood: "$20 - $45 / day (Authentic paella valenciana, horchata with fartons, tapas)", costTransit: "$3 - $8 / day (Valenbisi bike share network and modern metro)", costTier: "High Spanish Urban Value",
        highlights: [
            "Walking among the futuristic white sculptural pavilions of the City of Arts and Sciences",
            "Cycling through 9 kilometers of palm gardens and orange groves in the sunken Turia riverbed park",
            "Savoring genuine wood-fired Paella Valenciana with rabbit and snails in its birthplace at El Palmar",
            "Browsing local cheeses and Iberian ham under the stained-glass dome of the historic Central Market"
        ]
    },
    sapporo: {
        name: "Sapporo & Otaru, Japan", code: "CTS", flag: "🇯🇵", archetype: "The Cosmopolitan Maverick", mapQuery: "Odori Park, Sapporo, Japan", coordinates: { lat: 43.0618, lng: 141.3545 }, region: "Asia/Pacific", baseFare: 860,
        narrative: "Japan's northern frontier metropolis, laid out on a spacious North American grid. Subterranean heated shopping labyrinths, midnight butter-corn ramen alleys in Susukino, historic brick breweries, and snowy mountain vistas.",
        cash: "Modern city center hotels near Odori Park ($60-$110/night); Hokkaido's legendary dairy, snow crab, and Genghis Khan lamb barbecues at local prices.",
        points: "ANA or JAL partner awards via Virgin Atlantic, Aeroplan, or Alaska Airlines Atmos Rewards; easy connection from KIX or HND; Marriott and IHG points properties.",
        season: "December – February (Snow) & June – September (Mild Summer)",
        seasonReason: "Winter brings world-class powder snow and ice sculptures; summer offers refreshingly cool escapes from Tokyo's humidity.",
        weatherTip: "Sapporo features an extensive 5-kilometer underground pedestrian walkway connecting stations, perfect in cold weather.",
        costLodging: "$60 - $120 / night (Central Odori Park business & design hotels)", costFood: "$20 - $45 / day (Miso butter corn ramen, soup curry, Hokkaido soft cream, craft beer)", costTransit: "$4 - $9 / day (Sapporo subway and historic streetcar)", costTier: "High Japanese Urban Value",
        highlights: [
            "Tasting piping hot rich miso ramen at the legendary Ganso Ramen Yokocho alley in Susukino",
            "Sampling draft lagers and Genghis Khan grilled lamb at the red-brick Sapporo Beer Museum",
            "Taking a 30-minute coastal train to stroll the gas-lamp lit canals and glass studios of Otaru",
            "Riding the Mt. Moiwa ropeway for a panoramic nighttime view of Sapporo's illuminated geometric grid"
        ]
    },
    // ==========================================
    // THE EPICUREAN CURATOR (20 Destinations)
    // ==========================================
    paris: {
        name: "Paris, France", code: "CDG", flag: "🇫🇷", archetype: "The Epicurean Curator", mapQuery: "Eiffel Tower, Paris, France", coordinates: { lat: 48.8566, lng: 2.3522 }, region: "Europe/Med", baseFare: 520,
        narrative: "Grand aesthetic culture, legendary culinary landmarks, and riverside elegance. Enjoy quiet morning cafe terraces, world-class art collections, and strolls along the Seine.",
        cash: "Haussmannian studio apartments in the Marais or Canal Saint-Martin; boulangeries and markets keep food costs reasonable.",
        points: "Air France/KLM Flying Blue promo awards (sweet spot 60K–75K pts Business); boutique World of Hyatt stays in central arrondissements.",
        season: "April – May & September – October",
        seasonReason: "Mild sidewalk bistro weather and golden afternoon light with uncrowded museum galleries.",
        weatherTip: "Grab fresh baguettes, cheese, and wine from markets for budget gourmet picnics.",
        costLodging: "$140 - $260 / night (Studio flats in the Marais / Latin Quarter)", costFood: "$40 - $80 / day (Morning croissants, neighborhood bistros, wine)", costTransit: "$3 - $8 / day (Walkable neighborhoods + comprehensive Metro)", costTier: "Moderate / Cultured Splurge",
        highlights: [
            "Sunset picnics with wine and comté cheese along the stone banks of the Seine",
            "Discovering Impressionist masterpieces in the Musée d'Orsay",
            "Wandering the historic cobblestone alleys of the Marais",
            "Watching the Eiffel Tower sparkle across the skyline after nightfall"
        ]
    },
    tokyo: {
        name: "Tokyo & Kyoto, Japan", code: "HND", flag: "🇯🇵", archetype: "The Epicurean Curator", mapQuery: "Shinjuku, Tokyo, Japan", coordinates: { lat: 35.6762, lng: 139.6503 }, region: "Asia/Pacific", baseFare: 840,
        narrative: "A mesmerizing balance of ultra-modern precision and centuries-old tranquility. Experience Michelin-starred ramen counters, neon alleys, and quiet zen gardens.",
        cash: "Compact, impeccably clean business hotels or traditional Machiya house rentals in Kyoto ($90-$160/night).",
        points: "Transfer Amex/Virgin Atlantic to ANA First/Business; redeem Chase/Bilt points for Hyatt Centric or Park Hyatt.",
        season: "March – May & October – November",
        seasonReason: "Spring cherry blossoms and vibrant autumn maples offer crisp, dry weather ideal for extensive walking.",
        weatherTip: "June is rainy season and mid-summer is hot; spring and autumn are perfection.",
        costLodging: "$80 - $160 / night (Modern design hotels or Kyoto machiyas)", costFood: "$25 - $60 / day (Ramen ticket machines, conveyor sushi, izakayas)", costTransit: "$6 - $12 / day (The world's best subway network + Suica card)", costTier: "Moderate / High Precision Value",
        highlights: [
            "Wandering the lantern-lit yakitori alleys of Omoide Yokocho in Shinjuku",
            "Walking beneath thousands of vermilion torii gates at Fushimi Inari Shrine",
            "Experiencing early morning tranquility inside quiet moss rock gardens",
            "Crossing the world's busiest pedestrian crossing at Shibuya Crossing at dusk"
        ]
    },
    buenosaires: {
        name: "Buenos Aires & Mendoza, Argentina", code: "EZE", flag: "🇦🇷", archetype: "The Epicurean Curator", mapQuery: "Palermo, Buenos Aires, Argentina", coordinates: { lat: -34.6037, lng: -58.3816 }, region: "Americas/Caribbean", baseFare: 780,
        narrative: "Grand European-style avenues, passionate tango halls, world-class Malbec vineyards, and legendary late-night steakhouses.",
        cash: "Upscale apartments in Palermo Soho ($60-$100/night); favorable exchange rates make luxury dining very affordable.",
        points: "American AAdvantage or United MileagePlus; high-value Park Hyatt Mendoza points redemptions.",
        season: "October – December & March – May",
        seasonReason: "Spring jacaranda blossoms line the avenues, while autumn delivers the active Mendoza grape harvest.",
        weatherTip: "Dinner in Buenos Aires rarely starts before 9:30 PM—plan for an afternoon siesta!",
        costLodging: "$55 - $110 / night (Palermo Soho design flats)", costFood: "$20 - $45 / day (Prime grass-fed steaks, empanadas, Malbec wine)", costTransit: "$2 - $6 / day (Subte metro + inexpensive radio taxis)", costTier: "High Global Value",
        highlights: [
            "Feasting on prime bife de chorizo at iconic neighborhood parrillas",
            "Cycling through Malbec vineyards with views of Andean peaks in Mendoza",
            "Watching spontaneous street tango in San Telmo's historic squares",
            "Wandering through ornate marble mausoleums at Recoleta Cemetery"
        ]
    },
    oaxaca: {
        name: "Oaxaca & Puerto Escondido, Mexico", code: "OAX", flag: "🇲🇽", archetype: "The Epicurean Curator", mapQuery: "Oaxaca City, Mexico", coordinates: { lat: 17.0732, lng: -96.7266 }, region: "Americas/Caribbean", baseFare: 360,
        narrative: "The culinary soul of Mexico with complex moles, artisan mezcal distilleries, and indigenous markets, paired with laid-back Pacific surf breaks.",
        cash: "Courtyard colonial guest rentals in Centro ($60-$110/night); exceptional food and artisanal craft value.",
        points: "Short-haul connecting awards via United or American; boutique historic hotel conversions.",
        season: "October – March",
        seasonReason: "Warm, dry sunny days ideal for outdoor craft markets, courtyard dining, and Pacific beach trips.",
        weatherTip: "Day of the Dead (late October/early November) is magical but requires early booking.",
        costLodging: "$50 - $110 / night (Colonial courtyard apartments)", costFood: "$15 - $35 / day (Tlayudas, 7 styles of mole, craft mezcal)", costTransit: "$3 - $10 / day (Walkable city center + local colectivos)", costTier: "Outstanding Global Value",
        highlights: [
            "Sampling complex 30-ingredient mole sauces in 20 de Noviembre market",
            "Visiting artisanal palenques to learn how wild agave mezcal is made",
            "Exploring the ancient Zapotec mountain ruins of Monte Albán",
            "Releasing baby sea turtles at sunset on Pacific beaches in Puerto Escondido"
        ]
    },
    capetown: {
        name: "Cape Town & Winelands, South Africa", code: "CPT", flag: "🇿🇦", archetype: "The Epicurean Curator", mapQuery: "Table Mountain, Cape Town, South Africa", coordinates: { lat: -33.9249, lng: 18.4241 }, region: "Middle East/Africa", baseFare: 890,
        narrative: "Where dramatic Atlantic cliffs meet rolling wine estates and world-class restaurants. Hike Table Mountain, tour Cape Point, and relax on Clifton's beaches.",
        cash: "Spectacular seaside apartments in Camps Bay or vineyard cottages in Franschhoek; superb wine and dining value.",
        points: "Qatar Airways Qsuite via Avios; Marriott Protea hotels or boutique Winelands stays.",
        season: "November – March",
        seasonReason: "Warm, sunny Southern Hemisphere summer delivers dry beach days and bustling vineyard garden dining.",
        weatherTip: "The South African Rand offers extraordinary purchasing power for dining.",
        costLodging: "$70 - $150 / night (Sea-view flats or wine cottages)", costFood: "$20 - $45 / day (Gourmet multi-course dining, braai, top-tier wines)", costTransit: "$8 - $20 / day (Uber is remarkably inexpensive and reliable)", costTier: "Outstanding Global Value",
        highlights: [
            "Taking the rotating cable car to the flat summit of Table Mountain",
            "Sipping world-class Chenin Blanc on historic Cape Dutch wine estates",
            "Watching wild African penguins on the white sands of Boulders Beach",
            "Driving the dramatic coastal cliff bends of Chapman's Peak Drive"
        ]
    },
    dubai: {
        name: "Dubai, United Arab Emirates", code: "DXB", flag: "🇦🇪", archetype: "The Epicurean Curator", mapQuery: "Burj Khalifa, Dubai", coordinates: { lat: 25.2048, lng: 55.2708 }, region: "Middle East/Africa", baseFare: 790,
        narrative: "Awe-inspiring architectural ambition, luxury desert glamping sanctuaries, glamorous beach clubs, and Michelin-starred global dining.",
        cash: "Chic Marina or Downtown high-rise apartments ($110-$190/night); affordable rideshares and desert safari packages.",
        points: "Emirates Skywards awards; transfer Amex/Capital One points to Emirates or Air Canada Aeroplan; luxury stays at JW Marriott Marquis or Park Hyatt Dubai.",
        season: "November – March",
        seasonReason: "Balmy 75°F to 82°F winter beach days with pleasantly cool desert nights.",
        weatherTip: "Avoid June to August when daytime temperatures regularly cross 110°F (43°C).",
        costLodging: "$110 - $250 / night (Marina or Downtown luxury apartments)", costFood: "$35 - $80 / day (Shawarma street eats to world-class fine dining)", costTransit: "$8 - $20 / day (Driverless Dubai Metro and Careem taxis)", costTier: "Luxury / High Aspirational",
        highlights: [
            "Sunset dune bashing and luxury desert camp dining under starry skies",
            "Standing on the observation deck of Burj Khalifa—the world's tallest tower",
            "Lounging at glamorous Palm Jumeirah beach clubs overlooking the Arabian Gulf",
            "Taking a traditional wooden abra boat across Dubai Creek to the spice souks"
        ]
    },
    sansebastian: {
        name: "San Sebastián & Basque Country, Spain", code: "EAS", flag: "🇪🇸", archetype: "The Epicurean Curator", mapQuery: "La Concha, San Sebastian, Spain", coordinates: { lat: 43.3183, lng: -1.9812 }, region: "Europe/Med", baseFare: 630,
        narrative: "The culinary crown of Europe. Perched on the shell-shaped bay of La Concha, this Basque haven boasts the world's highest concentration of Michelin stars and legendary counter pintxos bars.",
        cash: "Old Town (Parte Vieja) boutique apartments ($90-$160/night); bar-hopping pintxos for under $3-$5 per bite.",
        points: "Connect via Madrid on Iberia Avios; Hotel Maria Cristina (Marriott Luxury Collection).",
        season: "May – October",
        seasonReason: "Warm Bay of Biscay beach weather paired with lively evening sidewalk dining and cider harvests.",
        weatherTip: "Pair pintxos with local Basque Txakoli—a crisp, slightly effervescent white wine poured from high above the glass.",
        costLodging: "$90 - $180 / night (Parte Vieja historic apartments)", costFood: "$30 - $65 / day (Pintxos bar-hopping, txangurro crab, local cider)", costTransit: "$2 - $6 / day (Extremely walkable along La Concha bay)", costTier: "High Culinary Value",
        highlights: [
            "Bar-hopping through the bustling alleys of Parte Vieja for sea urchin and foie gras pintxos",
            "Strolling the golden-sand crescent of La Concha promenade",
            "Visiting a traditional Basque cider house (sagardotegia) for txuleton steak and cider straight from the barrel",
            "Sunset panoramic views over the bay from Mount Igueldo"
        ]
    },
    bologna: {
        name: "Bologna & Emilia-Romagna, Italy", code: "BLQ", flag: "🇮🇹", archetype: "The Epicurean Curator", mapQuery: "Piazza Maggiore, Bologna, Italy", coordinates: { lat: 44.4949, lng: 11.3426 }, region: "Europe/Med", baseFare: 570,
        narrative: "'La Grassa' (The Fat One). The gastronomic heart of Italy. Kilometers of UNESCO terracotta porticoes shelter artisanal pasta workshops rolling out tortellini, tagliatelle al ragù, and aged Parmigiano.",
        cash: "Apartments inside the medieval city gates ($75-$130/night); incredibly reasonable trattoria dining.",
        points: "Lufthansa or Air France connections; high-speed Frecciarossa train from Milan or Florence on points.",
        season: "April – June & September – November",
        seasonReason: "Mild temperatures coincide with regional autumn food harvests of white truffles and balsamic vinegar.",
        weatherTip: "Over 38 miles of covered porticoes mean you can walk everywhere dry even if it rains.",
        costLodging: "$75 - $135 / night (Medieval center portico apartments)", costFood: "$25 - $50 / day (Tagliatelle al ragù, mortadella, Parmigiano-Reggiano, Lambrusco)", costTransit: "$2 - $5 / day (Compact and thoroughly walkable)", costTier: "Outstanding Italian Value",
        highlights: [
            "Savoring authentic handmade tagliatelle al ragù in a family-run osteria",
            "Touring artisanal dairies in Parma to see 80-pound wheels of Parmigiano aging",
            "Climbing the steep internal wooden stairs of the medieval leaning Asinelli Tower",
            "Tasting traditional balsamic vinegar aged for 25 years in oak barrels in Modena"
        ]
    },
    hanoi: {
        name: "Hanoi & Hoi An, Vietnam", code: "HAN", flag: "🇻🇳", archetype: "The Epicurean Curator", mapQuery: "Old Quarter, Hanoi, Vietnam", coordinates: { lat: 21.0285, lng: 105.8542 }, region: "Asia/Pacific", baseFare: 690,
        narrative: "Sensory culinary overload. Tiny plastic stools on Old Quarter sidewalks, steaming bowls of phở, rich egg coffee, and the lantern-lit historic merchant streets of Hoi An.",
        cash: "Boutique French-colonial hotels in Hanoi or riverside villas in Hoi An ($35-$75/night); the best $2-$4 street meals in the world.",
        points: "Singapore KrisFlyer, EVA Air, or Cathay Asia Miles; luxury boutique stays through bank card portals.",
        season: "October – April",
        seasonReason: "Cool, dry conditions make walking through street food corridors and outdoor markets pleasant.",
        weatherTip: "Join local food walking tours in the Old Quarter to uncover hidden alleyway kitchens you'd never find alone.",
        costLodging: "$30 - $75 / night (Heritage boutique hotels and riverside villas)", costFood: "$8 - $22 / day (Phở bò, bánh mì, bún chả, creamy egg coffee)", costTransit: "$2 - $6 / day (Grab rides and cyclos are extremely cheap)", costTier: "Exceptional Global Value",
        highlights: [
            "Sitting on tiny sidewalk stools eating bún chả grilled over hot coals",
            "Sipping decadent frothy egg coffee in a hidden French-colonial balcony cafe",
            "Floating in a lantern-lit wooden boat down the Thu Bon River in Hoi An at night",
            "Taking a cooking class starting in morning wet markets to master Vietnamese broths"
        ]
    },
    lyon: {
        name: "Lyon & Burgundy, France", code: "LYS", flag: "🇫🇷", archetype: "The Epicurean Curator", mapQuery: "Vieux Lyon, France", coordinates: { lat: 45.764, lng: 4.8357 }, region: "Europe/Med", baseFare: 560,
        narrative: "The undisputed culinary capital of France. Convivial traditional bouchons serving quenelles and Beaujolais, historic secret traboule passageways, and Grand Cru Burgundy wine slopes.",
        cash: "Apartments in Presqu'île or Renaissance Vieux Lyon ($80-$140/night); high-speed TGV from Paris in 2 hours.",
        points: "Air France Flying Blue; boutique stays via Chase Luxury Hotel & Resort or Capital One Premier Collection.",
        season: "May – June & September – October",
        seasonReason: "Lively outdoor terrace dining and the autumn wine harvest in neighboring Beaujolais and Burgundy.",
        weatherTip: "Look for the official 'Authentique Bouchon Lyonnais' seal to ensure you're in a real heritage tavern.",
        costLodging: "$80 - $150 / night (Historic Vieux Lyon or Presqu'île flats)", costFood: "$30 - $65 / day (Pike quenelles, coq au vin, local Saint-Marcellin cheese)", costTransit: "$3 - $7 / day (Clean metro and funicular)", costTier: "High French Value",
        highlights: [
            "Dining in a boisterous wood-paneled bouchon with a carafe of Côtes du Rhône",
            "Exploring secret Renaissance traboule passageways connecting courtyard corridors",
            "Browsing the gourmet cheese and charcuterie counters at Les Halles de Lyon Paul Bocuse",
            "Taking a day train through the legendary Grand Cru vineyards of the Côte de Nuits"
        ]
    },
    santiago: {
        name: "Santiago & Colchagua Valley, Chile", code: "SCL", flag: "🇨🇱", archetype: "The Epicurean Curator", mapQuery: "Lastarria, Santiago, Chile", coordinates: { lat: -33.4489, lng: -70.6693 }, region: "Americas/Caribbean", baseFare: 740,
        narrative: "Dramatic snow-capped Andes mountains towering behind modern neighborhoods, bohemian wine bars in Lastarria, Pacific seafood markets, and world-class Carménère vineyards.",
        cash: "Stylish design apartments in Providencia or Lastarria ($60-$110/night); world-class winery tours and dining value.",
        points: "Delta SkyMiles or American AAdvantage nonstops; W Santiago or The Ritz-Carlton Santiago.",
        season: "October – April",
        seasonReason: "Sunny Mediterranean climate with warm daytime weather and the bustling March grape harvest.",
        weatherTip: "Take the funicular up Cerro San Cristóbal at sunset for breathtaking views of the city framed by the Andes.",
        costLodging: "$60 - $120 / night (Providencia or Lastarria design flats)", costFood: "$20 - $45 / day (Fresh sea bass, empanadas de pino, Carménère wine)", costTransit: "$2 - $6 / day (High-tech clean metro system)", costTier: "High South American Value",
        highlights: [
            "Tasting velvety Carménère and Cabernet Sauvignon at historic Colchagua Valley estates",
            "Wandering the bohemian cafes and cobblestones of the Lastarria neighborhood",
            "Feasting on fresh Pacific king crab and sea urchin at local seafood markets",
            "Taking the cable car up Cerro San Cristóbal for panoramic Andean vistas"
        ]
    },
    santafe: {
        name: "Santa Fe & Taos, USA", code: "SAF", flag: "🇺🇸", archetype: "The Epicurean Curator", mapQuery: "Santa Fe Plaza, New Mexico", coordinates: { lat: 35.687, lng: -105.9378 }, region: "Americas/Caribbean", baseFare: 320,
        narrative: "Earth-toned adobe architecture, aromatic piñon woodsmoke, legendary red and green chile culinary traditions, world-class gallery walking on Canyon Road, and Georgia O'Keeffe vistas.",
        cash: "Adobe casitas with kiva fireplaces ($110-$190/night); local farmers markets and green chile diners.",
        points: "Fly to Albuquerque (ABQ) or Santa Fe (SAF) on Southwest, United, or American; Inn and Spa at Loretto or Hyatt.",
        season: "September – November & May – June",
        seasonReason: "Golden aspen foliage lights up the Sangre de Cristo range amid the autumn green chile harvest.",
        weatherTip: "When asked 'Red or green?' at any restaurant, answer 'Christmas' to get both traditional chile sauces.",
        costLodging: "$110 - $210 / night (Adobe casitas with kiva fireplaces)", costFood: "$25 - $55 / day (Green chile cheeseburgers, blue corn enchiladas, sopapillas)", costTransit: "$25 - $45 / day (Rental car is best to explore Taos and high-road villages)", costTier: "Moderate American Heritage",
        highlights: [
            "Savoring blue corn enchiladas smothered in roasted Hatch green chile",
            "Walking past hundreds of fine art sculpture gardens and galleries along Canyon Road",
            "Exploring the 1,000-year-old multi-story adobe pueblo of Taos",
            "Sunset cocktails overlooking the red-rock Sangre de Cristo mountain ridges"
        ]
    },
    sicily: {
        name: "Palermo & Western Sicily, Italy", code: "PMO", flag: "🇮🇹", archetype: "The Epicurean Curator", mapQuery: "Ballaro Market, Palermo, Italy", coordinates: { lat: 37.599, lng: 14.0154 }, region: "Europe/Med", baseFare: 590,
        narrative: "A sun-baked crossroads of Arab, Norman, and Mediterranean civilizations. Boisterous historic street food markets, cannoli filled to order, pistachio pesto, and seaside Baroque palazzos.",
        cash: "Historic center apartments with balconies in Palermo or Cefalù ($65-$120/night); street food dining on $15/day.",
        points: "Connect via Rome or Milan on ITA/SkyTeam or Lufthansa; boutique seaside points stays.",
        season: "April – June & September – October",
        seasonReason: "Warm sunny days and temperate seas with abundant citrus harvests before peak summer heat.",
        weatherTip: "Never leave Sicily without trying a brioche con gelato—a warm sweet brioche bun stuffed with pistachio gelato.",
        costLodging: "$65 - $130 / night (Palermo historic center flats)", costFood: "$18 - $40 / day (Arancini, panelle, pasta alla Norma, fresh cannoli)", costTransit: "$3 - $10 / day (Walkable city + regional trains to coastal Cefalù)", costTier: "Exceptional Mediterranean Value",
        highlights: [
            "Navigating the screaming street vendors and sizzling grill smoke of Ballarò Market",
            "Eating fresh crunchy cannoli piped with sweet sheep's milk ricotta before your eyes",
            "Marveling at the glittering Byzantine gold mosaics inside the Cappella Palatina",
            "Swimming in the clear turquoise waters beneath the dramatic crag of Cefalù"
        ]
    },
    bariloche: {
        name: "Bariloche & Nahuel Huapi, Argentina", code: "BRC", flag: "🇦🇷", archetype: "The Epicurean Curator", mapQuery: "San Carlos de Bariloche, Argentina", coordinates: { lat: -41.1335, lng: -71.3103 }, region: "Americas/Caribbean", baseFare: 780,
        narrative: "Glacial sapphire lakes framed by snow-capped Andean peaks, Swiss-style timber and stone chalets, world-class artisanal chocolate ateliers, and smoky Patagonian lamb roasting slowly over open wood embers.",
        cash: "Lakeview stone chalets along Avenida Bustillo ($70-$130/night); outstanding Argentine steak and Malbec value.",
        points: "Aerolineas Argentinas (SkyTeam) via Delta or Flying Blue awards; luxury boutique redemptions at Llao Llao Resort via credit card travel portals.",
        season: "December – March (Summer) & July – September (Ski)",
        seasonReason: "Warm sunny summer days are ideal for lake kayaking and mountain trekking; winter delivers premier Andean skiing.",
        weatherTip: "Rent a car to drive the breathtaking 'Circuito Chico' peninsula and stop at local craft microbreweries in Colonia Suiza.",
        costLodging: "$70 - $140 / night (Lakeview timber chalets or boutique lodges)", costFood: "$20 - $45 / day (Wood-fired cordero al palo lamb, artisanal chocolate, Malbec wine)", costTransit: "$15 - $35 / day (Rental car or reliable local lakeside bus)", costTier: "High South American Value",
        highlights: [
            "Tasting rich artisanal truffles and hot chocolate at historic chocolate shops along Calle Mitre",
            "Taking a catamaran across the mirrored waters of Lake Nahuel Huapi to the Arrayanes forest",
            "Hiking to the panoramic rock ledge summit of Cerro Campanario overlooking dozens of blue lakes",
            "Feasting on crispy wood-roasted Patagonian lamb paired with high-altitude Patagonian Pinot Noir"
        ]
    },
    puglia: {
        name: "Puglia & Itria Valley, Italy", code: "BDS", flag: "🇮🇹", archetype: "The Epicurean Curator", mapQuery: "Alberobello, Puglia, Italy", coordinates: { lat: 40.7928, lng: 17.1012 }, region: "Europe/Med", baseFare: 580,
        narrative: "Centuries-old olive groves rooted in red Mediterranean soil, conical whitewashed trulli stone dwellings, and grand fortified masseria estates. Nonnas hand-shape orecchiette on sunlit doorsteps, paired with bold Primitivo wine.",
        cash: "Restored trullo houses or boutique countryside masserias ($90-$160/night); incredibly generous seafood antipasti spreads and house carafes of wine for under €25.",
        points: "SkyTeam (Air France/KLM via Rome) or Star Alliance (Lufthansa via Munich to Bari/Brindisi); book boutique masseria stays via card travel portals or Small Luxury Hotels (SLH).",
        season: "May – June & September – October",
        seasonReason: "Pleasant sunshine for exploring whitewashed hilltop villages, active olive and wine harvests in autumn, and uncrowded Adriatic coves.",
        weatherTip: "Rent a car to explore the triangle of Alberobello, Locorotondo, and Ostuni, then drive down to Polignano a Mare's sea cliffs.",
        costLodging: "$90 - $170 / night (Historic whitewashed trulli & countryside masserias)", costFood: "$25 - $50 / day (Handmade orecchiette con cime di rapa, burrata, Primitivo wine)", costTransit: "$20 - $40 / day (Rental car is best for navigating rural country lanes)", costTier: "Exceptional Italian Terroir Value",
        highlights: [
            "Sleeping inside a restored conical stone trullo dwelling amidst ancient olive groves in Alberobello",
            "Watching nonnas shape handmade orecchiette pasta along the cobblestone alleys of Bari Vecchia",
            "Dining on fresh burrata and raw Adriatic red prawns overlooking the limestone cliffs of Polignano a Mare",
            "Touring centuries-old subterranean olive oil mills and tasting bold Primitivo di Manduria wines"
        ]
    },
    salta: {
        name: "Salta & Cafayate Calchaquí Valley, Argentina", code: "SLA", flag: "🇦🇷", archetype: "The Epicurean Curator", mapQuery: "Cafayate, Salta, Argentina", coordinates: { lat: -24.7821, lng: -65.4232 }, region: "Americas/Caribbean", baseFare: 820,
        narrative: "High-altitude Andean desert viticulture at 5,500+ feet. Floral crisp Torrontés wines, clay-oven wood-fired empanadas salteñas, dramatic red sandstone amphitheaters, and centuries-old colonial adobe estancias.",
        cash: "Historic adobe winery fincas with vine-covered courtyards ($70-$130/night); world-class Argentine beef and regional stews at remarkable value.",
        points: "Aerolíneas Argentinas (SkyTeam) domestic awards via Delta SkyMiles or Flying Blue connecting through Buenos Aires (EZE/AEP); boutique winery stays via credit card portals.",
        season: "March – May & September – November",
        seasonReason: "Sunny high-desert days in the 70s with crisp stargazing nights; grape harvest season in March and April.",
        weatherTip: "Drive the dramatic Quebrada de las Conchas canyon route between Salta and Cafayate during late afternoon golden hour.",
        costLodging: "$70 - $140 / night (Historic vineyard estancias & boutique adobe hotels)", costFood: "$18 - $40 / day (Empanadas salteñas, locro stew, world-class Torrontés and Malbec)", costTransit: "$25 - $45 / day (Rental car is essential for the scenic Calchaquí Valley road trip)", costTier: "High South American Value",
        highlights: [
            "Tasting crisp floral Torrontés wines at high-altitude desert vineyards framed by Andean peaks in Cafayate",
            "Driving through the surreal towering red rock formations of the Quebrada de las Conchas canyon",
            "Enjoying live Andean folkloric music and clay-oven beef empanadas at a traditional peña in Salta",
            "Relaxing in an open-air colonial courtyard courtyard at a 19th-century working vineyard estancia"
        ]
    },
    alentejo: {
        name: "Alentejo & Évora, Portugal", code: "LIS", flag: "🇵🇹", archetype: "The Epicurean Curator", mapQuery: "Evora, Alentejo, Portugal", coordinates: { lat: 38.5714, lng: -7.9135 }, region: "Europe/Med", baseFare: 510,
        narrative: "Portugal's rustic gastronomic heartland. Rolling golden plains dotted with cork oaks, Roman temple ruins in medieval Évora, Roman-era clay amphora (talha) natural winemaking, and olive oil mills operating since antiquity.",
        cash: "Historic countryside herdades (farm estates) and whitewashed village cottages ($75-$130/night); rustic tavernas serving acorn-fed black pork and açorda bread stews.",
        points: "Fly TAP Air Portugal into Lisbon (transfers 1:1 from Capital One, Chase) and drive 75 minutes east; redeem points for luxury Pousadas de Portugal conversions.",
        season: "April – June & September – October",
        seasonReason: "Mild spring wildflowers, pleasant temperatures before the mid-summer heat, and autumn grape and olive harvests.",
        weatherTip: "Alentejo is one of the world's certified Dark Sky Reserves—spend evenings stargazing outside whitewashed village walls.",
        costLodging: "$75 - $145 / night (Historic herdades, boutique wine hotels & village houses)", costFood: "$20 - $45 / day (Porco preto, serpa cheese, açorda de marisco, talha wine)", costTransit: "$18 - $35 / day (Rental car is ideal for exploring sleepy fortified villages)", costTier: "High European Terroir Value",
        highlights: [
            "Standing before the 1st-century Roman Temple of Diana in the UNESCO-listed center of Évora",
            "Tasting rare natural wines fermented inside ancient clay amphorae (vinho de talha) in Vidigueira",
            "Feasting on melt-in-your-mouth acorn-fed Iberian black pork in a traditional vaulted stone taverna",
            "Stargazing under unpolluted night skies over the serene waters of Lake Alqueva"
        ]
    },
    istria: {
        name: "Istria Peninsula & Motovun, Croatia", code: "PUY", flag: "🇭🇷", archetype: "The Epicurean Curator", mapQuery: "Motovun, Istria, Croatia", coordinates: { lat: 45.3376, lng: 13.9283 }, region: "Europe/Med", baseFare: 570,
        narrative: "The 'Tuscan heart of the Adriatic'. Hilltop Venetian stone villages ringed by medieval walls, wild white truffle hunting in the dense Mirna oak forest, world-renowned olive oil groves, and crisp Malvazija wine cellars.",
        cash: "Hillside stone cottages and boutique wine hotels in Motovun or Grožnjan ($80-$150/night); generous truffle pasta portions at local konobas.",
        points: "Lufthansa Group connections via Frankfurt or Austrian via Vienna to Pula (PUY) or Zagreb (ZAG), bookable via Rove Miles (1:1 Miles & More) or Air Canada Aeroplan.",
        season: "May – June & September – November",
        seasonReason: "Autumn is the peak white truffle harvest season, paired with wine harvests and warm, pleasant daytime weather.",
        weatherTip: "Dine at a rustic family-run konoba in the hills—ask for 'fuži s tartufima' (traditional pasta smothered in fresh shaved truffles).",
        costLodging: "$80 - $160 / night (Charming hilltop stone villas & boutique wine resorts)", costFood: "$25 - $60 / day (Fresh shaved truffles, handmade fuži pasta, Istrian prosciutto, Malvazija)", costTransit: "$20 - $40 / day (Rental car is essential for exploring hilltop medieval towns)", costTier: "High Adriatic Gastronomic Value",
        highlights: [
            "Joining a local truffle hunter and trained hounds through the damp oak forests of the Mirna Valley",
            "Walking along the medieval ramparts of hilltop Motovun gazing over mist-covered vineyard valleys",
            "Tasting award-winning peppery extra virgin olive oils at family-owned groves in Vodnjan",
            "Exploring the artist colony of Grožnjan with its cobblestone galleries and open-air classical music"
        ]
    },
    sanmiguel: {
        name: "San Miguel de Allende & Guanajuato, Mexico", code: "BJX", flag: "🇲🇽", archetype: "The Epicurean Curator", mapQuery: "San Miguel de Allende, Mexico", coordinates: { lat: 20.9144, lng: -100.7452 }, region: "Americas/Caribbean", baseFare: 340,
        narrative: "Colonial baroque architectural sanctuary in the central Mexican highlands. Ochre and terracotta courtyards, rooftop mezcal bars overlooking the pink neo-Gothic Parroquia spires, and organic farm-to-table culinary ateliers.",
        cash: "Colonial boutique suites with stone fireplaces ($80-$160/night); incredible street gorditas and churros under jacaranda trees.",
        points: "Nonstop flights on American or United to Del Bajío (BJX) or Querétaro (QRO); luxury points stays at Rosewood San Miguel or boutique card portal properties.",
        season: "October – April",
        seasonReason: "Crisp blue skies and dry, sunny 70-degree days with cool desert evenings ideal for rooftop dining.",
        weatherTip: "Pack sturdy, comfortable walking shoes—San Miguel's dramatic cobblestone inclines are best navigated on foot.",
        costLodging: "$80 - $170 / night (Historic colonial casitas & boutique courtyard hotels)", costFood: "$20 - $45 / day (Artisanal mole, blue-corn gorditas, craft mezcal, churros con chocolate)", costTransit: "$5 - $15 / day (Walkable town center & inexpensive local taxis)", costTier: "Exceptional Cultural & Culinary Value",
        highlights: [
            "Gazing up at the pink sandstone spires of the iconic Parroquia de San Miguel Arcángel at twilight",
            "Sipping artisanal Oaxaca mezcal on a rooftop terrace overlooking the terracotta rooftops of the town",
            "Tasting multi-regional moles and organic heritage corn tortillas at farm-to-table estates in the valley",
            "Walking through subterranean stone tunnels and pastel plazas in nearby colonial Guanajuato"
        ]
    },
    kakheti: {
        name: "Kakheti Wine Cradle & Sighnaghi, Georgia", code: "TBS", flag: "🇬🇪", archetype: "The Epicurean Curator", mapQuery: "Sighnaghi, Kakheti, Georgia", coordinates: { lat: 41.6168, lng: 45.9221 }, region: "Europe/Med", baseFare: 680,
        narrative: "The 8,000-year-old UNESCO birthplace of winemaking. Centuries of amber skin-contact natural wines fermented inside massive subterranean clay qvevri, framed by the snow-peaked Greater Caucasus mountains and polyphonic feasting traditions.",
        cash: "Hilltop guesthouses in the walled city of Sighnaghi ($40-$80/night); unmatched generosity with multi-course homemade supra feasts for under $15.",
        points: "Turkish Airlines Miles&Smiles (1:1 from Bilt, Capital One, Citi) via Istanbul into Tbilisi (TBS), followed by a 90-minute scenic countryside drive; Marriott and boutique stays.",
        season: "September – October (Rtveli Harvest) & May – June",
        seasonReason: "Autumn Rtveli is the festive grape harvest season where travelers can stomp grapes, press wine, and join village supra banquets.",
        weatherTip: "Hire a private driver from Tbilisi for the day or weekend—it costs under $50 and lets you visit remote family monasteries and cellars.",
        costLodging: "$40 - $95 / night (Charming vineyard guesthouses & boutique châteaux)", costFood: "$12 - $28 / day (Hot khachapuri, walnut-stuffed pkhali, clay-pot shashlik, qvevri wine)", costTransit: "$15 - $35 / day (Private driver or shared local marshrutka vans)", costTier: "Extraordinary Global Gastronomic Value",
        highlights: [
            "Tasting 8,000-year tradition amber Rkatsiteli and Saperavi wines drawn straight from underground clay qvevri",
            "Walking along the 18th-century stone defensive ramparts of Sighnaghi overlooking the Alazani Valley",
            "Participating in the traditional autumn Rtveli grape harvest and bread-baking inside clay tone ovens",
            "Experiencing an authentic multi-course Georgian supra feast with emotional toasts and polyphonic singing"
        ]
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DESTINATIONS;
}
if (typeof window !== 'undefined') {
    window.DESTINATIONS = DESTINATIONS;
}