// ==========================================
// GUIDO - KARNATAKA LOCAL TRAVEL INTELLIGENCE
// ==========================================

// 1. COMPREHENSIVE KARNATAKA DESTINATIONS DATASET (22 LOCATIONS)
const destinationsData = [
    {
        id: "hampi",
        name: "Hampi",
        district: "Vijayanagara",
        categories: ["heritage", "adventure"],
        img: "https://images.unsplash.com/photo-1600100397608-f010e9a8d6b1?auto=format&fit=crop&w=900&q=80",
        description: "UNESCO World Heritage Site with mesmerizing 14th-century Vijayanagara ruins, monolithic boulder hills, and sacred river banks.",
        guideCount: 28,
        rating: 4.9,
        bestTime: "October – March",
        topFood: "Benne Dosa, Mango Tree Thali, Filter Coffee",
        secrets: "Sunset at Sanapur Lake, Coracle ride across Tungabhadra, bouldering at Hippie Island.",
        popularHighlights: ["Virupaksha Temple", "Vijaya Vittala Stone Chariot", "Matanga Hill Sunrise", "Lotus Mahal"]
    },
    {
        id: "coorg",
        name: "Coorg (Madikeri)",
        district: "Kodagu",
        categories: ["mountains", "nature"],
        img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
        description: "The Scotland of India renowned for misty Western Ghats, sprawling coffee & spice estates, and cascading waterfalls.",
        guideCount: 24,
        rating: 4.8,
        bestTime: "September – April",
        topFood: "Pandi Curry, Kadambuttu, Akki Roti, Wild Bamboo Shoot Curry",
        secrets: "Hidden trails of Mandalpatti peak at dawn, authentic Kodava estate homestays, Abbey & Iruppu falls.",
        popularHighlights: ["Raja's Seat", "Mandalpatti Peak", "Abbey Falls", "Namdroling Golden Temple"]
    },
    {
        id: "gokarna",
        name: "Gokarna",
        district: "Uttara Kannada",
        categories: ["beaches", "adventure"],
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
        description: "Pristine Arabian Sea shores, cliffside beach treks, bohemian sunsets, and the sacred Mahabaleshwar temple.",
        guideCount: 20,
        rating: 4.9,
        bestTime: "October – March",
        topFood: "Gadbad Ice Cream, Coastal Prawn Curry, Neer Dosa, Fresh Kokum Juice",
        secrets: "Bioluminescent night plankton at Paradise beach, cliff hiking from Kudle to Half Moon Beach.",
        popularHighlights: ["Om Beach", "Kudle Beach Trek", "Mahabaleshwar Temple", "Paradise Beach"]
    },
    {
        id: "mysore",
        name: "Mysore (Mysuru)",
        district: "Mysuru",
        categories: ["heritage", "food"],
        img: "https://images.unsplash.com/photo-1600056781444-2f0c8c6a9a9d?auto=format&fit=crop&w=900&q=80",
        description: "The royal cultural capital of Karnataka celebrated for opulent palaces, silk sarees, sandalwood, and sweet Mysore Pak.",
        guideCount: 32,
        rating: 4.9,
        bestTime: "September – March",
        topFood: "Mysore Pak (Guru Sweet Mart), Mylari Dosa, Mysore Rasam, Filter Kaapi",
        secrets: "Sunday night lighting of 100,000 palace bulbs, Devaraja fruit and spice heritage market tour at 7 AM.",
        popularHighlights: ["Mysore Palace", "Chamundi Hill", "Devaraja Market", "Brindavan Gardens"]
    },
    {
        id: "chikmagalur",
        name: "Chikmagalur",
        district: "Chikkamagaluru",
        categories: ["mountains", "nature", "food"],
        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
        description: "Birthplace of Indian coffee surrounded by majestic peaks, lush coffee plantations, and cool mountain clouds.",
        guideCount: 22,
        rating: 4.8,
        bestTime: "September – May",
        topFood: "Malnad Style Akki Roti, Jackfruit Curry, Fresh Roasted Arabica/Robusta Coffee",
        secrets: "Early morning hike to Mullayanagiri (highest peak in Karnataka), offbeat Baba Budangiri caves.",
        popularHighlights: ["Mullayanagiri Peak", "Baba Budangiri", "Hebbe Falls", "Coffee Estate Walks"]
    },
    {
        id: "udupi",
        name: "Udupi",
        district: "Udupi",
        categories: ["beaches", "food", "heritage"],
        img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80",
        description: "Temple town famed for Krishna Mutt, St. Mary's volcanic basalt islands, world-famous vegetarian cuisine, and clean beaches.",
        guideCount: 18,
        rating: 4.8,
        bestTime: "October – March",
        topFood: "Udupi Sambar, Goli Baje, Neer Dosa, Mangalore Buns, Kotte Kadubu",
        secrets: "Kayaking in the mangrove backwaters of Saligrama, unique hexagonal rock pillars at St. Mary's.",
        popularHighlights: ["Sri Krishna Temple", "Malpe Beach & Sea Walk", "St. Mary's Island", "Kapu Lighthouse"]
    },
    {
        id: "badami",
        name: "Badami",
        district: "Bagalkot",
        categories: ["heritage"],
        img: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=900&q=80",
        description: "Ancient Chalukya capital nestled between red sandstone canyons, famous for 6th-century rock-cut cave temples and forts.",
        guideCount: 15,
        rating: 4.7,
        bestTime: "October – February",
        topFood: "Jolada Rotti Oota, Shenga Chutney, Yennegai (stuffed brinjal), North Karnataka meals",
        secrets: "Agastya Lake reflection of Bhutanatha temples at sunrise, rock climbing on Badami red sandstone cliffs.",
        popularHighlights: ["Cave Temples (Caves 1-4)", "Bhutanatha Temple", "Badami Fort", "Agastya Lake"]
    },
    {
        id: "jogfalls",
        name: "Jog Falls",
        district: "Shivamogga",
        categories: ["nature", "adventure"],
        img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
        description: "Second highest plunge waterfall in India where the Sharavathi River drops 830 ft in four cascades: Raja, Roarer, Rocket, and Rani.",
        guideCount: 12,
        rating: 4.6,
        bestTime: "July – December (Monsoon peak)",
        topFood: "Pathrode, Akki Rotti with coconut chutney, Sharavathi freshwater fish",
        secrets: "1,400 steps descent to the plunge pool base with a certified forest guide, viewpoint from British Bungalow.",
        popularHighlights: ["Raja & Rani Viewpoints", "Sharavathi Valley View", "Honnemaradu Backwaters", "Linganamakki Dam"]
    },
    {
        id: "sakleshpur",
        name: "Sakleshpur",
        district: "Hassan",
        categories: ["mountains", "nature"],
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
        description: "Enchanting hill town in the Western Ghats surrounded by tea, coffee, cardamom plantations, and medieval star-shaped forts.",
        guideCount: 16,
        rating: 4.7,
        bestTime: "August – April",
        topFood: "Bamboo Shoot Pickle, Halasina Hannina Kadabu (Jackfruit sweets), Cardamom Chai",
        secrets: "Railway track trek over ancient British bridges, 360-degree hilltop views at Manjarabad Star Fort.",
        popularHighlights: ["Manjarabad Fort", "Bisle Ghat Viewpoint", "Jenukal Gudda", "Mookanamane Falls"]
    },
    {
        id: "dandeli",
        name: "Dandeli",
        district: "Uttara Kannada",
        categories: ["nature", "adventure", "wildlife"],
        img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
        description: "Adventure hub nestled along the Kali River, famous for grade-3 white water rafting, hornbill birding, and dense teak forests.",
        guideCount: 19,
        rating: 4.8,
        bestTime: "October – May",
        topFood: "North Canara Fish Curry, Bamboo Rice Kheer, Jowar Bhakri",
        secrets: "Night jungle camping, natural jacuzzis in the Kali river rapids, spotting Great Indian Hornbills at Timber Depot.",
        popularHighlights: ["Kali River White Water Rafting", "Dandeli Wildlife Sanctuary", "Syntheri Rocks", "Shiroli Peak"]
    },

    // +12 NEW KARNATAKA LOCATIONS
    {
        id: "murudeshwar",
        name: "Murudeshwar",
        district: "Uttara Kannada",
        categories: ["beaches", "heritage", "adventure"],
        img: "https://images.unsplash.com/photo-1627894006066-b45786537123?auto=format&fit=crop&w=900&q=80",
        description: "Home to the world's second-tallest Shiva statue (123 ft) surrounded on three sides by the Arabian Sea, and scuba diving hub at Netrani Island.",
        guideCount: 17,
        rating: 4.8,
        bestTime: "October – April",
        topFood: "Anjal Fish Tawa Fry, Crab Masala, Neer Dosa, Tender Coconut Pudding",
        secrets: "Scuba diving coral reefs at Netrani Island with certified divemasters, elevator ride to 18th floor of the 249-ft Rajagopura.",
        popularHighlights: ["Lord Shiva Statue", "Murudeshwar Rajagopura", "Netrani Island Scuba", "Bhatkal Light House"]
    },
    {
        id: "belur-halebidu",
        name: "Belur & Halebidu",
        district: "Hassan",
        categories: ["heritage"],
        img: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80",
        description: "Masterpieces of 12th-century Hoysala soapstone architecture, featuring thousands of microscopic dancing figures and detailed friezes.",
        guideCount: 15,
        rating: 4.9,
        bestTime: "October – March",
        topFood: "Hassan Bisi Bele Bath, Davanagere Benne Dosa, Fresh Filter Coffee",
        secrets: "Madanika dancer sculptures with rotating stone bangles, star-shaped foundations that have withstood 900 years.",
        popularHighlights: ["Chennakesava Temple (Belur)", "Hoysaleswara Temple (Halebidu)", "Kedareshwara Temple", "Belur Archeological Museum"]
    },
    {
        id: "agumbe",
        name: "Agumbe",
        district: "Shivamogga",
        categories: ["nature", "adventure"],
        img: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=900&q=80",
        description: "The 'Cherrapunji of the South' — a pristine rainforest sanctuary famous for King Cobra research, misty Western Ghats sunsets, and hidden waterfalls.",
        guideCount: 14,
        rating: 4.8,
        bestTime: "June – February",
        topFood: "Kashaya (herbal brew), Akki Rotti with Chutney Pudi, Jackfruit Chips",
        secrets: "Rainforest canopy walks guided by certified herpetologists, sunset over the Arabian Sea horizon from Agumbe Ghat.",
        popularHighlights: ["Agumbe Sunset Point", "Barkana Falls", "Onake Abbi Falls", "Agumbe Rainforest Research Station (ARRS)"]
    },
    {
        id: "kabini",
        name: "Kabini & Nagarhole",
        district: "Mysuru",
        categories: ["nature", "adventure", "wildlife"],
        img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80",
        description: "One of Asia's premier wildlife reserves on the Kabini River backwaters, renowned for black panthers, wild tigers, and massive elephant herds.",
        guideCount: 21,
        rating: 4.9,
        bestTime: "October – May",
        topFood: "Jungle Camp Barbecue, Mysore Thali, Bamboo Steamed Puttu",
        secrets: "Boat safari during evening golden hour when hundreds of wild elephants gather at the riverbank, black panther tracking in zone B.",
        popularHighlights: ["Kabini River Boat Safari", "Nagarhole National Park Safari", "Taraka Dam", "Kutta Tribal Village Trail"]
    },
    {
        id: "pattadakal-aihole",
        name: "Pattadakal & Aihole",
        district: "Bagalkot",
        categories: ["heritage"],
        img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
        description: "The cradle of Indian temple architecture on the banks of Malaprabha River, showcasing a unique synthesis of Dravidian and Nagara styles.",
        guideCount: 13,
        rating: 4.8,
        bestTime: "October – March",
        topFood: "North Karnataka Sajje Rotti, Stuffed Capsicum, Shenga Holige",
        secrets: "Durga Temple with rare horseshoe apsidal plan in Aihole, astronomical carvings on Virupaksha temple ceiling.",
        popularHighlights: ["Virupaksha Temple (Pattadakal)", "Durga Temple Complex (Aihole)", "Mallikarjuna Temple", "Lad Khan Temple"]
    },
    {
        id: "bandipur",
        name: "Bandipur National Park",
        district: "Chamarajanagar",
        categories: ["nature", "wildlife", "adventure"],
        img: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=900&q=80",
        description: "A flagship Project Tiger reserve where the Deccan Plateau meets the Western Ghats, featuring dry deciduous forests and thriving biodiversity.",
        guideCount: 16,
        rating: 4.7,
        bestTime: "September – April",
        topFood: "Traditional Kannada Oota, Maddur Vada, Ragi Mudde with Nati Koli Saaru",
        secrets: "Gopalaswamy Betta mist-covered peak inside the tiger reserve with 700-year-old temple.",
        popularHighlights: ["Bandipur Open Gypsy Safari", "Gopalaswamy Betta Peak", "Moyar River Gorge", "Forest Interpretation Centre"]
    },
    {
        id: "kudremukh",
        name: "Kudremukh",
        district: "Chikkamagaluru",
        categories: ["mountains", "adventure", "nature"],
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
        description: "Iconic horse-face mountain peak rising 1,894m above sea level, carpeted in endless emerald shola grasslands and evergreen rainforests.",
        guideCount: 18,
        rating: 4.9,
        bestTime: "September – February",
        topFood: "Malnad Jackfruit Biryani, Pathrode, Filter Coffee, Hot Uppittu",
        secrets: "Forest department licensed high-altitude 22km day trek through shola forest valleys and cloud beds.",
        popularHighlights: ["Kudremukh Peak Trek", "Hanuman Gundi Falls", "Kalasa Temple Town", "L监管 Grasslands"]
    },
    {
        id: "mangalore",
        name: "Mangalore (Mangaluru)",
        district: "Dakshina Kannada",
        categories: ["beaches", "food", "heritage"],
        img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=80",
        description: "Vibrant coastal port city famous for its spicy Ghee Roast, surf schools, Roman Catholic chapels, and rich Tulu Nadu heritage.",
        guideCount: 26,
        rating: 4.9,
        bestTime: "October – March",
        topFood: "Chicken/Prawn Ghee Roast, Kori Rotti, Anjal Masala Fry, Pabba's Ice Cream (Gudbud)",
        secrets: "Surfing lessons at Sasihithlu Beach, Aloysius Chapel's 19th-century Italian frescoes painted by Antony Moscheni.",
        popularHighlights: ["Panambur Beach", "St. Aloysius Chapel", "Tannirbhavi Tree Park", "Kudroli Gokarnanatheshwara Temple"]
    },
    {
        id: "nandi-hills",
        name: "Nandi Hills",
        district: "Chikkaballapur",
        categories: ["mountains", "adventure"],
        img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80",
        description: "Ancient fortress perched 4,850 ft high, famous for surreal sea-of-clouds sunrises, Tipu Sultan's summer lodge, and cycling trails.",
        guideCount: 20,
        rating: 4.6,
        bestTime: "Year-round (Best for sunrise: 5:30 AM)",
        topFood: "Nandi Valley Fresh Grapes, Crisp Masala Dosa, Filter Coffee",
        secrets: "Bhoga Nandeeshwara temple at the hill base with 1000-year-old stepped kalyani tank, paragliding launches.",
        popularHighlights: ["Tipu's Drop Viewpoint", "Sunrise Cloud Bed", "Bhoga Nandeeshwara Temple", "Amrita Sarovar"]
    },
    {
        id: "bijapur",
        name: "Vijayapura (Bijapur)",
        district: "Vijayapura",
        categories: ["heritage", "food"],
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
        description: "Adil Shahi dynasty capital famous for the colossal Gol Gumbaz with its circular dome and acoustic whispering gallery.",
        guideCount: 14,
        rating: 4.7,
        bestTime: "October – March",
        topFood: "Jowar Rotti with Badanekayi Yennegai, North Karnataka Shenga Chutney, Sheermal",
        secrets: "Whispering gallery in Gol Gumbaz where even the faintest whisper echoes 11 times across 38 meters.",
        popularHighlights: ["Gol Gumbaz & Whispering Gallery", "Ibrahim Rauza", "Bara Kaman", "Malik-e-Maidan Cannon"]
    },
    {
        id: "shivanasamudra",
        name: "Shivanasamudra Falls",
        district: "Mandya",
        categories: ["nature", "adventure"],
        img: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=900&q=80",
        description: "Spectacular island town where the Kaveri river splits into two twin roaring waterfalls: Gaganachukki and Bharachukki.",
        guideCount: 11,
        rating: 4.7,
        bestTime: "July – January",
        topFood: "Fresh Kaveri River Fish Fry, Maddur Vada, Mandya Sugarcane Juice",
        secrets: "Coracle boat rides up to the mist spray of Bharachukki falls, Asia's first hydroelectric power station (1902).",
        popularHighlights: ["Gaganachukki Watchtower", "Bharachukki Cascade", "Ranganatha Swamy Temple", "Darga Viewpoint"]
    },
    {
        id: "shravanabelagola",
        name: "Shravanabelagola",
        district: "Hassan",
        categories: ["heritage"],
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
        description: "Renowned Jain pilgrimage center home to the 57-foot monolithic statue of Lord Bahubali (Gommateshwara), carved in 981 AD.",
        guideCount: 12,
        rating: 4.8,
        bestTime: "October – March",
        topFood: "Pure Satvik Jain Thali, Hassan Holige, Fresh Butter Milk",
        secrets: "Climbing 650 rock steps of Vindhyagiri barefoot in early morning breeze for panoramic Deccan views.",
        popularHighlights: ["Gommateshwara Monolith (Vindhyagiri)", "Chandragiri Hill Temples", "Kalyani Pond", "Ancient Epigraphs"]
    }
];

// 2. EXPANDED VERIFIED LOCAL GUIDES DATASET (18+ GUIDES)
const guidesData = [
    {
        id: "g1",
        name: "Arjun Rao",
        destinationId: "hampi",
        location: "Hampi, Vijayanagara",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 142,
        specialties: ["Vijayanagara History", "Boulder Biking", "Sunset Trails", "Mythology"],
        languages: ["Kannada", "English", "Telugu", "Hindi"],
        priceDay: 2200,
        priceHour: 350,
        badge: "Master Historian",
        verified: true,
        experience: "9 years",
        bio: "Born and raised along the Tungabhadra river. I bring the stone ruins of the 14th century Vijayanagara Empire alive through royal folklore, secret architectural passages, and golden hour photography trails.",
        tours: ["Complete Ruins & Hidden Temples (Full Day)", "Sunset Bouldering & Sanapur Lake Coracle Tour", "Vijayanagara Night Heritage Walk"]
    },
    {
        id: "g2",
        name: "Ananya Shetty",
        destinationId: "coorg",
        location: "Madikeri, Coorg",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 98,
        specialties: ["Coffee Plantation Hikes", "Kodava Cuisine", "Birding", "Trekking"],
        languages: ["Kodava", "Kannada", "English", "Hindi"],
        priceDay: 2000,
        priceHour: 300,
        badge: "Estate Expert",
        verified: true,
        experience: "6 years",
        bio: "3rd generation coffee planter. I host immersive estate walks showing bean-to-cup coffee processing, sacred grove explorations, and authentic Kodava cooking workshops in Madikeri.",
        tours: ["Aromas of Kodagu: Coffee & Spice Walk", "Mandalpatti 4x4 Jeep Sunrise Safari", "Traditional Kodava Homestyle Cooking Demo"]
    },
    {
        id: "g3",
        name: "Vikram Gowda",
        destinationId: "gokarna",
        location: "Gokarna, Uttara Kannada",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        rating: 5.0,
        reviewsCount: 164,
        specialties: ["Cliff Trekking", "Bioluminescence Tours", "Surfing", "Beach Yoga"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 2400,
        priceHour: 400,
        badge: "Adventure Leader",
        verified: true,
        experience: "7 years",
        bio: "Local coastal surfer and certified wilderness trekker. I guide travelers across 5 secluded beaches, hidden cliff lookout points, and night boat tours to witness glowing bioluminescent plankton.",
        tours: ["5-Beach Cliffside Trek & Sunset Lookout", "Night Bioluminescence Boat Expedition", "Beginner Surfing & Tide Safety Session"]
    },
    {
        id: "g4",
        name: "Priya Nair",
        destinationId: "mysore",
        location: "Mysuru",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 210,
        specialties: ["Royal Palace Heritage", "Silk & Sandalwood", "Street Food Safari", "Architecture"],
        languages: ["Kannada", "English", "Tamil", "Hindi"],
        priceDay: 1900,
        priceHour: 300,
        badge: "Super Guide",
        verified: true,
        experience: "11 years",
        bio: "Former arts professor and Mysuru native. I host curated royal history trails through Mysore Palace, century-old sweet makers, and the bustling Devaraja spice bazaar.",
        tours: ["Royal Mysore: Palace & Private Galleries", "Devaraja Market Dawn Heritage & Tasting", "Mysore Pak & Mylari Dosa Food Trail"]
    },
    {
        id: "g5",
        name: "Kiran Kumar",
        destinationId: "chikmagalur",
        location: "Chikmagalur",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 115,
        specialties: ["Mullayanagiri Trek", "Offbeat Waterfalls", "Wildlife Photography", "Camping"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 2300,
        priceHour: 350,
        badge: "Trek Master",
        verified: true,
        experience: "8 years",
        bio: "High-altitude trek leader certified by IMF. I specialize in scaling Karnataka's highest peaks, remote waterfalls deep inside coffee estates, and dark-sky astrophotography camps.",
        tours: ["Mullayanagiri & Baba Budangiri Ridge Trek", "Hidden Estate Waterfalls & Off-road 4x4", "Ghats Night Camping & Stargazing"]
    },
    {
        id: "g6",
        name: "Megha Rao",
        destinationId: "udupi",
        location: "Udupi & Malpe",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 88,
        specialties: ["Temple Culture", "Coastal Mangrove Kayaking", "Udupi Veg Feasts", "Island Geology"],
        languages: ["Tulu", "Kannada", "English", "Hindi"],
        priceDay: 2000,
        priceHour: 300,
        badge: "Culture Curator",
        verified: true,
        experience: "5 years",
        bio: "Tuluva heritage researcher and kayak guide. Join me for temple town morning rituals, St. Mary's volcanic geological secrets, and peaceful mangrove kayaking.",
        tours: ["Krishna Mutt & Traditional Sattvic Feast", "St. Mary's Hexagonal Rocks Boat Tour", "Mangrove Forest Kayaking Safari"]
    },
    {
        id: "g7",
        name: "Santosh Naik",
        destinationId: "murudeshwar",
        location: "Murudeshwar & Netrani",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 104,
        specialties: ["Scuba Diving (PADI)", "Coastal Temples", "Marine Biology", "Deep Sea Boat"],
        languages: ["Kannada", "Konkani", "English", "Hindi"],
        priceDay: 2800,
        priceHour: 450,
        badge: "PADI Diver",
        verified: true,
        experience: "8 years",
        bio: "PADI-certified Divemaster and coastal local. I guide underwater scuba expeditions at Netrani Island and show travelers hidden sea cliffs around Murudeshwar temple.",
        tours: ["Netrani Island Scuba & Snorkel Trip", "Shiva Temple & Coastal Cliffs Walk", "Fresh Coastal Seafood & Tawa Fry Tasting"]
    },
    {
        id: "g8",
        name: "Manjunath Patil",
        destinationId: "badami",
        location: "Badami & Aihole",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 76,
        specialties: ["Chalukya Architecture", "Rock Climbing", "Cave Inscriptions", "Jowar Rotti Oota"],
        languages: ["Kannada", "Hindi", "English"],
        priceDay: 1800,
        priceHour: 280,
        badge: "Govt Certified",
        verified: true,
        experience: "12 years",
        bio: "ASI certified Badami historian. I decode the intricate rock carvings of the 6th century caves, guide historical walks around Agastya lake, and introduce authentic North Karnataka rustic meals.",
        tours: ["4 Rock Cave Temples Deep Dive", "Badami Fort & Agastya Lake Circuit", "North Karnataka Jolada Rotti Farm Feast"]
    },
    {
        id: "g9",
        name: "Dr. Arvind Hegde",
        destinationId: "agumbe",
        location: "Agumbe, Shivamogga",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
        rating: 5.0,
        reviewsCount: 92,
        specialties: ["Rainforest Ecology", "Herpetology", "Canopy Treks", "Waterfall Hikes"],
        languages: ["Kannada", "English"],
        priceDay: 2600,
        priceHour: 400,
        badge: "Naturalist",
        verified: true,
        experience: "10 years",
        bio: "Wildlife biologist and Western Ghats researcher. Experience rainforest ecology, nocturnal reptile walks, and stunning hidden water cascades with safety protocols.",
        tours: ["Rainforest Canopy & Wildlife Track", "Barkana & Onake Abbi Falls Expedition", "Nocturnal Amphibian & Snake Walk"]
    },
    {
        id: "g10",
        name: "Somanna Kariappa",
        destinationId: "kabini",
        location: "Kabini, Mysuru",
        avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 156,
        specialties: ["Big Cat Tracking", "Elephant Behavior", "Boat Safaris", "Tribal Lore"],
        languages: ["Kannada", "English", "Tamil", "Hindi"],
        priceDay: 3000,
        priceHour: 500,
        badge: "Master Tracker",
        verified: true,
        experience: "14 years",
        bio: "Indigenous forest tracker with over a decade of experience in Nagarhole & Kabini backwaters. Known for highest success rate in spotting leopards, wild dogs, and black panthers.",
        tours: ["Dawn Tiger & Leopard Jungle Safari", "Sunset Kabini Backwaters Boat Cruise", "Forest Edge Birding & Tribal Flora Tour"]
    },
    {
        id: "g11",
        name: "Shweta Kulkarni",
        destinationId: "belur-halebidu",
        location: "Belur & Halebidu",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 84,
        specialties: ["Hoysala Sculptures", "Epigraphy", "Dance Motifs", "Temple Geometry"],
        languages: ["Kannada", "English", "Marathi", "Hindi"],
        priceDay: 2100,
        priceHour: 320,
        badge: "Art Historian",
        verified: true,
        experience: "7 years",
        bio: "Specialist in Hoysala temple iconography. I walk you through the astonishing 3D bracket figures (Madanikas), detailing 900-year-old stone filigree techniques.",
        tours: ["Belur Chennakesava Iconography Walk", "Halebidu Hoysaleswara Twin Temple Tour", "Hassan Hoysala Heritage Road Trip"]
    },
    {
        id: "g12",
        name: "Naveen Poojary",
        destinationId: "mangalore",
        location: "Mangalore",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 120,
        specialties: ["Ghee Roast Trails", "Surfing Coach", "Tuluva Traditions", "Old Mangalore"],
        languages: ["Tulu", "Kannada", "English", "Hindi"],
        priceDay: 2200,
        priceHour: 350,
        badge: "Culinary & Surf",
        verified: true,
        experience: "6 years",
        bio: "Passionate foodie and surf instructor. I show travelers where locals eat the crispiest Kori Rotti, freshest sea fish fry, and catch the best morning waves at Sasihithlu.",
        tours: ["Mangalore Ultimate Seafood & Ghee Roast Trail", "Morning Surf Class & Beach Safety", "Colonial Churches & Kudroli Temple Trail"]
    },
    {
        id: "g13",
        name: "Ramesh Shastri",
        destinationId: "pattadakal-aihole",
        location: "Pattadakal, Bagalkot",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 65,
        specialties: ["UNESCO Monument Walk", "Vedic Temple Design", "Malaprabha River Walks"],
        languages: ["Kannada", "Sanskrit", "English", "Hindi"],
        priceDay: 1900,
        priceHour: 280,
        badge: "Heritage Scholar",
        verified: true,
        experience: "15 years",
        bio: "Sanskrit scholar and architectural guide who has guided international archaeological delegations across the 100+ temples of Aihole and Pattadakal complex.",
        tours: ["Pattadakal UNESCO World Heritage Walk", "Aihole: 100 Temples Open Air Museum", "Rural North Karnataka Temple Village Circuit"]
    },
    {
        id: "g14",
        name: "Deepak Sharma",
        destinationId: "nandi-hills",
        location: "Nandi Hills, Chikkaballapur",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        reviewsCount: 130,
        specialties: ["Early Sunrise Cycles", "Tipu Sultan Forts", "Paragliding", "Bird Watching"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 1800,
        priceHour: 280,
        badge: "Sunrise Guide",
        verified: true,
        experience: "5 years",
        bio: "Cyclist and hill trekker. I organize early morning cycling ascents, sunrise viewpoints bypassing traffic jams, and heritage walks of Bhoga Nandeeshwara temple.",
        tours: ["5:00 AM Sunrise & Cloud Sea Expedition", "Bhoga Nandeeshwara 1000-Year Heritage Walk", "Nandi Foothills Vineyards & Grape Tasting"]
    },
    {
        id: "g15",
        name: "Ismail Inamdar",
        destinationId: "bijapur",
        location: "Vijayapura",
        avatar: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 79,
        specialties: ["Adil Shahi Architecture", "Gol Gumbaz Acoustics", "Islamic Calligraphy"],
        languages: ["Urdu", "Kannada", "Hindi", "English"],
        priceDay: 1800,
        priceHour: 270,
        badge: "Heritage Master",
        verified: true,
        experience: "13 years",
        bio: "Specialist in Indo-Islamic medieval monuments. I demonstrate the incredible acoustic acoustics of Gol Gumbaz and unveil the architectural poetry of Ibrahim Rauza.",
        tours: ["Gol Gumbaz Acoustic & Dome Exploration", "Ibrahim Rauza: The Black Taj of the South", "Old Bijapur Bazaars & Traditional Crafts"]
    },
    {
        id: "g16",
        name: "Pradeep Gowda",
        destinationId: "kudremukh",
        location: "Kudremukh, Chikkamagaluru",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 110,
        specialties: ["Kudremukh Peak Trek", "Wilderness First Aid", "Shola Forest Ecology"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 2500,
        priceHour: 380,
        badge: "Wilderness Lead",
        verified: true,
        experience: "8 years",
        bio: "Certified Wilderness First Responder and licensed Kudremukh forest guide. I lead guided ascents up the 1894m peak while maintaining strict zero-waste eco standards.",
        tours: ["Kudremukh 22km Peak Ascent & Permits", "Hanuman Gundi Waterfall Trek", "Shola Grassland Eco-Photography Tour"]
    },
    {
        id: "g17",
        name: "Vasant Bhat",
        destinationId: "jogfalls",
        location: "Jog Falls & Sagara",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        reviewsCount: 58,
        specialties: ["Waterfall Canyon Descent", "Sharavathi Valley", "Monsoon Treks"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 1700,
        priceHour: 250,
        badge: "Canyon Guide",
        verified: true,
        experience: "9 years",
        bio: "Lifelong resident of Sagara. I guide travelers to the base of Jog Falls, secret viewpoint bungalows from the colonial era, and serene Sharavathi river islands.",
        tours: ["Jog Falls 1400 Steps Base Descent", "Sharavathi Valley Backwaters & Boat Cruise", "Monsoon Rainforest & Wild Stream Trek"]
    },
    {
        id: "g18",
        name: "Ganesh Acharya",
        destinationId: "shravanabelagola",
        location: "Shravanabelagola & Hassan",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 82,
        specialties: ["Jain Epigraphy", "Vindhyagiri Hill Ascent", "Mahamastakabhisheka Lore"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 1800,
        priceHour: 260,
        badge: "Sacred Historian",
        verified: true,
        experience: "11 years",
        bio: "Historian specializing in ancient Kannada and Prakrit inscriptions on Vindhyagiri and Chandragiri hills. I share the profound spiritual history of Lord Bahubali.",
        tours: ["Vindhyagiri Monolith Sunrise Pilgrimage Walk", "Chandragiri Hill Ancient Basadis & Inscriptions", "Hassan Rural Temple Circuit"]
    }
];

// 3. LIVE LOCAL COMMUNITY UPDATES (REAL-TIME TRAVEL INTELLIGENCE)
const liveUpdatesData = [
    {
        destination: "Hampi",
        tag: "Weather & Trails",
        status: "good",
        statusText: "🟢 Clear & Ideal",
        time: "15 mins ago",
        title: "Bouldering trails & Sanapur Lake clear today",
        message: "Early morning temp is a pleasant 23°C. Tungabhadra coracle services operational. Sunset at Matanga hill expected to be spectacular with zero cloud cover.",
        author: "Arjun Rao",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
        destination: "Coorg",
        tag: "Blossom Season",
        status: "seasonal",
        statusText: "🌸 White Coffee Blossom",
        time: "42 mins ago",
        title: "Coffee blossom showers started in Madikeri & Somwarpet",
        message: "Sprawling estates are turning white with fragrant jasmine-like coffee blossoms following yesterday's pre-monsoon showers. Perfect week for plantation walks!",
        author: "Ananya Shetty",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
        destination: "Gokarna",
        tag: "Night Wildlife",
        status: "good",
        statusText: "✨ Active Tonight",
        time: "1 hour ago",
        title: "Bioluminescent algae spotted at Paradise & Half Moon beach",
        message: "Clear new-moon waters with high visibility. Glowing blue waves observed between 8:30 PM and 11 PM on the south cliffside rocks.",
        author: "Vikram Gowda",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
        destination: "Kabini",
        tag: "Safari Sighting",
        status: "good",
        statusText: "🐅 Big Cat Alert",
        time: "2 hours ago",
        title: "Tigress with 2 cubs spotted at Zone B waterhole",
        message: "Both morning boat safari and jeep safari had direct sightings. Herd of 40+ wild elephants currently feeding along the Kabini river meadow.",
        author: "Somanna Kariappa",
        avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80"
    },
    {
        destination: "Agumbe",
        tag: "Trail Advisory",
        status: "alert",
        statusText: "⚠️ Rain & Leech Alert",
        time: "3 hours ago",
        title: "Heavy mist on Agumbe Ghat; carry leech socks",
        message: "Visibility on hairpin curves under 50 meters in late evenings. Forest department requires licensed guides for Barkana falls entry.",
        author: "Dr. Arvind Hegde",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
    },
    {
        destination: "Murudeshwar",
        tag: "Sea Condition",
        status: "good",
        statusText: "🤿 15m Visibility",
        time: "4 hours ago",
        title: "Netrani Island scuba dives 100% operational",
        message: "Calm Arabian sea conditions. Coral reef sightings include sea turtles, parrotfish, and harmless blacktip reef sharks.",
        author: "Santosh Naik",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    }
];

// 4. STATE MANAGEMENT & DOM SELECTION
let selectedCategory = "all";
let selectedGuideSpecialty = "all";
let currentSearchQuery = "";
let currentSort = "popular";
let wishlist = JSON.parse(localStorage.getItem("guido_wishlist") || "[]");

// DOM Elements
const destinationGrid = document.querySelector("#destinationGrid");
const guidesGrid = document.querySelector("#guidesGrid");
const liveFeedGrid = document.querySelector("#liveFeedGrid");
const searchInput = document.querySelector("#placeSearch");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const sortSelect = document.querySelector("#sortSelect");
const categoryButtons = [...document.querySelectorAll(".category-btn")];
const guideFilterButtons = [...document.querySelectorAll(".guide-filter-btn")];
const noResults = document.querySelector("#noResults");
const searchResultsCount = document.querySelector("#searchResultsCount");
const totalDestCountEl = document.querySelector("#totalDestCount");
const totalGuidesCountEl = document.querySelector("#totalGuidesCount");
const wishlistCountEls = document.querySelectorAll(".wishlist-count");
const wishlistDrawer = document.querySelector("#wishlistDrawer");
const wishlistItemsList = document.querySelector("#wishlistItemsList");

// Modals
const destinationModal = document.querySelector("#destinationModal");
const guideProfileModal = document.querySelector("#guideProfileModal");
const bookGuideModal = document.querySelector("#bookGuideModal");
const becomeGuideModal = document.querySelector("#becomeGuideModal");
const toastContainer = document.querySelector("#toastContainer");

// ==========================================
// RENDER FUNCTIONS
// ==========================================

// 1. Render Destination Cards
function renderDestinations() {
    if (!destinationGrid) return;

    let filtered = destinationsData.filter((dest) => {
        const matchesCategory =
            selectedCategory === "all" ||
            dest.categories.includes(selectedCategory);

        const q = currentSearchQuery.toLowerCase().trim();
        const matchesQuery =
            q === "" ||
            dest.name.toLowerCase().includes(q) ||
            dest.district.toLowerCase().includes(q) ||
            dest.categories.some(c => c.toLowerCase().includes(q)) ||
            dest.topFood.toLowerCase().includes(q) ||
            dest.description.toLowerCase().includes(q);

        return matchesCategory && matchesQuery;
    });

    // Sorting
    if (currentSort === "popular") {
        filtered.sort((a, b) => b.guideCount - a.guideCount);
    } else if (currentSort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update Counts
    if (searchResultsCount) {
        searchResultsCount.textContent = `Showing ${filtered.length} of ${destinationsData.length} Karnataka destinations`;
    }

    if (filtered.length === 0) {
        destinationGrid.innerHTML = "";
        if (noResults) noResults.style.display = "block";
        return;
    }

    if (noResults) noResults.style.display = "none";

    destinationGrid.innerHTML = filtered.map((dest) => {
        const isFav = wishlist.includes(dest.id);
        const catBadges = dest.categories.map(c => `<span class="cat-pill">${c.toUpperCase()}</span>`).join("");
        
        return `
            <article class="destination-card" data-id="${dest.id}" data-category="${dest.categories.join(' ')}">
                <div class="card-image-wrap">
                    <img src="${dest.img}" alt="${dest.name}" loading="lazy">
                    <span class="badge-district">${dest.district}</span>
                    <button class="btn-fav ${isFav ? 'active' : ''}" data-id="${dest.id}" type="button" title="Save to Wishlist" aria-label="Favorite ${dest.name}">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                    <div class="category-tags-overlay">${catBadges}</div>
                </div>
                <div class="destination-info">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                    
                    <div class="destination-meta-chips">
                        <div class="meta-chip"><span>⭐</span> <strong>${dest.rating}</strong></div>
                        <div class="meta-chip"><span>🗓️</span> ${dest.bestTime.split('–')[0].trim()}</div>
                        <div class="meta-chip"><span>🍛</span> ${dest.topFood.split(',')[0]}</div>
                    </div>

                    <div class="card-bottom">
                        <span class="guide-count-badge" data-dest="${dest.id}">
                            <span>👥</span> <strong>${dest.guideCount} Guides</strong>
                        </span>
                        <button class="btn-explore" data-id="${dest.id}" type="button">
                            Explore →
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    attachDestinationCardListeners();
}

// 2. Render Guides Directory Cards
function renderGuides() {
    if (!guidesGrid) return;

    let filtered = guidesData.filter((guide) => {
        if (selectedGuideSpecialty === "all") return true;
        return guide.specialties.some(s => s.toLowerCase().includes(selectedGuideSpecialty.toLowerCase())) ||
               guide.destinationId === selectedGuideSpecialty;
    });

    guidesGrid.innerHTML = filtered.map((guide) => {
        const skills = guide.specialties.map(s => `<span class="skill-pill">${s}</span>`).join("");
        const languages = guide.languages.join(", ");

        return `
            <article class="guide-profile" data-id="${guide.id}" data-dest="${guide.destinationId}">
                <div class="guide-card-top">
                    <img class="guide-avatar-img" src="${guide.avatar}" alt="${guide.name}" loading="lazy">
                    <div class="guide-header-info">
                        <div class="guide-name-row">
                            <h3>${guide.name}</h3>
                            <span class="verified-badge" title="Verified Local Guide">✓</span>
                        </div>
                        <span class="guide-location-tag">📍 ${guide.location}</span>
                        <div class="guide-score-row">
                            <span class="stars">★★★★★ ${guide.rating}</span>
                            <span class="reviews-count">(${guide.reviewsCount} reviews)</span>
                        </div>
                    </div>
                </div>

                <p class="guide-bio">${guide.bio.substring(0, 110)}...</p>

                <div class="guide-skills-pills">${skills}</div>

                <div class="guide-languages">
                    <span>🗣️ Speaks:</span> <strong>${languages}</strong>
                </div>

                <div class="guide-card-footer">
                    <div class="guide-price">
                        <strong>₹${guide.priceDay}</strong>
                        <span>per day · ₹${guide.priceHour}/hr</span>
                    </div>
                    <div class="guide-actions">
                        <button class="guide-view-btn" data-guide-id="${guide.id}" type="button">View Profile</button>
                        <button class="guide-book-quick-btn" data-guide-id="${guide.id}" type="button">Book</button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    attachGuideCardListeners();
}

// 3. Render Live Local Updates Feed
function renderLiveUpdates() {
    if (!liveFeedGrid) return;

    liveFeedGrid.innerHTML = liveUpdatesData.map((item) => {
        let statusClass = "status-good";
        if (item.status === "alert") statusClass = "status-alert";
        if (item.status === "seasonal") statusClass = "status-seasonal";

        return `
            <article class="live-card">
                <div class="live-card-top">
                    <span class="live-badge-status ${statusClass}">${item.statusText}</span>
                    <span class="live-time">${item.time}</span>
                </div>
                <h4>${item.destination}: ${item.title}</h4>
                <p>${item.message}</p>
                <div class="live-author">
                    <img src="${item.avatar}" alt="${item.author}">
                    <div>
                        <span>${item.author}</span>
                        <small>Verified Local Guide · ${item.destination}</small>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// 4. Update Header Counts
function updateCategoryCounts() {
    categoryButtons.forEach(btn => {
        const cat = btn.dataset.category;
        const countSpan = btn.querySelector(".cat-count");
        if (!countSpan) return;

        if (cat === "all") {
            countSpan.textContent = destinationsData.length;
        } else {
            const count = destinationsData.filter(d => d.categories.includes(cat)).length;
            countSpan.textContent = count;
        }
    });

    if (totalDestCountEl) totalDestCountEl.textContent = `${destinationsData.length}+`;
    if (totalGuidesCountEl) totalGuidesCountEl.textContent = `${guidesData.length * 15}+`;
}

// ==========================================
// INTERACTIVE MODALS & ACTIONS
// ==========================================

// Open Destination Detail Modal
function openDestinationModal(destId) {
    const dest = destinationsData.find(d => d.id === destId);
    if (!dest || !destinationModal) return;

    const modalBody = destinationModal.querySelector(".modal-body");
    const matchingGuides = guidesData.filter(g => g.destinationId === destId);

    // If no exact match in mock, pick closest 2
    const displayGuides = matchingGuides.length > 0 ? matchingGuides : guidesData.slice(0, 3);

    const guidesHtml = displayGuides.map(g => `
        <div class="modal-guide-item">
            <img src="${g.avatar}" alt="${g.name}">
            <div class="modal-guide-item-info">
                <h4>${g.name} <span style="color:var(--secondary)">✓ Verified</span></h4>
                <span>⭐ ${g.rating} (${g.reviewsCount} reviews) · 🗣️ ${g.languages.join(', ')}</span>
                <p style="font-size:12.5px;color:#64748b;margin:4px 0 0;">${g.specialties.join(' • ')}</p>
            </div>
            <div style="text-align:right;">
                <div class="modal-guide-item-price">₹${g.priceDay}/day</div>
                <button class="primary-btn" style="padding:7px 14px;font-size:13px;" onclick="openBookGuideModal('${g.id}')">Book Guide</button>
            </div>
        </div>
    `).join("");

    const highlightsList = dest.popularHighlights.map(h => `<li>✨ ${h}</li>`).join("");

    modalBody.innerHTML = `
        <img class="modal-hero-img" src="${dest.img}" alt="${dest.name}">
        <div class="modal-header-row" style="margin-top:20px;">
            <div>
                <span class="modal-subtitle">📍 ${dest.district} District, Karnataka</span>
                <h2 class="modal-title">${dest.name}</h2>
            </div>
            <button class="btn-fav ${wishlist.includes(dest.id) ? 'active' : ''}" data-id="${dest.id}" style="position:static;" onclick="toggleWishlist('${dest.id}')">
                ${wishlist.includes(dest.id) ? '❤️ Saved' : '🤍 Save Place'}
            </button>
        </div>

        <div class="modal-tabs">
            <button class="modal-tab-btn active" onclick="switchModalTab(event, 'tab-overview')">Overview & Local Tips</button>
            <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-guides')">Local Guides (${dest.guideCount})</button>
            <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-plan')">Highlights & Food</button>
        </div>

        <div id="tab-overview" class="modal-tab-content active">
            <p style="font-size:16px;color:#334155;line-height:1.7;margin-bottom:20px;">${dest.description}</p>
            
            <div class="detail-info-grid">
                <div class="detail-card-small">
                    <strong>🗓️ Best Time to Visit</strong>
                    <p>${dest.bestTime}</p>
                </div>
                <div class="detail-card-small">
                    <strong>🍛 Top Local Delicacies</strong>
                    <p>${dest.topFood}</p>
                </div>
                <div class="detail-card-small" style="grid-column: span 2;">
                    <strong>🗝️ Local Insider Secrets</strong>
                    <p>${dest.secrets}</p>
                </div>
            </div>

            <div style="display:flex;gap:12px;margin-top:20px;">
                <button class="primary-btn" onclick="switchModalTabDirect('tab-guides')">View Verified Local Guides (${dest.guideCount}) →</button>
                <button class="secondary-btn" style="color:var(--dark);border-color:var(--border-color);" onclick="filterToDestination('${dest.id}')">Filter Main Feed</button>
            </div>
        </div>

        <div id="tab-guides" class="modal-tab-content">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                <h4 style="font-size:17px;">Available Verified Guides in ${dest.name}</h4>
                <span style="font-size:13px;color:var(--text-muted);">${dest.guideCount} locals available</span>
            </div>
            <div class="modal-guides-list">
                ${guidesHtml}
            </div>
        </div>

        <div id="tab-plan" class="modal-tab-content">
            <h4 style="font-size:17px;margin-bottom:12px;">Top Must-Do Highlights</h4>
            <ul style="list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px;">
                ${highlightsList}
            </ul>

            <div class="detail-card-small">
                <strong>🍲 Authentic Food Specialties to try in ${dest.name}</strong>
                <p style="margin-top:6px;">${dest.topFood}. Ask your local guide for non-commercial heritage eateries!</p>
            </div>
        </div>
    `;

    destinationModal.classList.add("active");
}

// Switch tabs inside modal
window.switchModalTab = function(e, tabId) {
    const parent = e.target.closest(".modal-body");
    parent.querySelectorAll(".modal-tab-btn").forEach(btn => btn.classList.remove("active"));
    parent.querySelectorAll(".modal-tab-content").forEach(content => content.classList.remove("active"));

    e.target.classList.add("active");
    const target = parent.querySelector(`#${tabId}`);
    if (target) target.classList.add("active");
};

window.switchModalTabDirect = function(tabId) {
    const parent = destinationModal.querySelector(".modal-body");
    parent.querySelectorAll(".modal-tab-btn").forEach(btn => {
        if (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(tabId)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    parent.querySelectorAll(".modal-tab-content").forEach(content => content.classList.remove("active"));
    const target = parent.querySelector(`#${tabId}`);
    if (target) target.classList.add("active");
};

// Filter main page to specific destination and scroll
window.filterToDestination = function(destId) {
    const dest = destinationsData.find(d => d.id === destId);
    if (!dest) return;
    
    closeAllModals();
    if (searchInput) {
        searchInput.value = dest.name;
        currentSearchQuery = dest.name;
        renderDestinations();
        document.querySelector("#explore").scrollIntoView({ behavior: "smooth" });
    }
};

// Open Guide Profile Modal
function openGuideProfileModal(guideId) {
    const guide = guidesData.find(g => g.id === guideId);
    if (!guide || !guideProfileModal) return;

    const modalBody = guideProfileModal.querySelector(".modal-body");
    const toursList = guide.tours.map(t => `<li style="padding:8px 12px;background:#f8fafc;border-radius:6px;margin-bottom:6px;border:1px solid #e2e8f0;font-size:14px;">🧭 ${t}</li>`).join("");

    modalBody.innerHTML = `
        <div style="display:flex;gap:20px;align-items:center;margin-bottom:20px;flex-wrap:wrap;">
            <img src="${guide.avatar}" alt="${guide.name}" style="width:90px;height:90px;border-radius:50%;object-fit:cover;border:4px solid var(--primary-light);">
            <div>
                <span class="modal-subtitle">📍 ${guide.location}</span>
                <h2 style="font-size:28px;font-weight:900;color:var(--dark);margin:4px 0;">${guide.name} <span class="verified-badge">✓</span></h2>
                <div style="display:flex;gap:12px;align-items:center;font-size:14px;color:var(--text-muted);">
                    <span style="color:#f59e0b;font-weight:700;">★★★★★ ${guide.rating} (${guide.reviewsCount} reviews)</span>
                    <span>• Experience: ${guide.experience}</span>
                    <span style="color:var(--secondary);font-weight:700;">🟢 Available</span>
                </div>
            </div>
        </div>

        <div style="margin-bottom:20px;">
            <h4 style="font-size:16px;margin-bottom:8px;">About the Guide</h4>
            <p style="color:#475569;line-height:1.6;font-size:15px;">${guide.bio}</p>
        </div>

        <div class="detail-info-grid" style="margin-bottom:20px;">
            <div class="detail-card-small">
                <strong>🗣️ Languages Spoken</strong>
                <p>${guide.languages.join(", ")}</p>
            </div>
            <div class="detail-card-small">
                <strong>🎖️ Certifications & Badges</strong>
                <p>${guide.badge} · Verified Karnataka Native</p>
            </div>
        </div>

        <div style="margin-bottom:24px;">
            <h4 style="font-size:16px;margin-bottom:10px;">Signature Guided Tours Offered</h4>
            <ul style="list-style:none;">${toursList}</ul>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:20px;border-top:1px solid #e2e8f0;">
            <div>
                <div style="font-size:24px;font-weight:900;color:var(--dark);">₹${guide.priceDay} <span style="font-size:14px;color:var(--text-muted);font-weight:500;">/ full day</span></div>
                <div style="font-size:13px;color:var(--text-muted);">Hourly rate: ₹${guide.priceHour}/hr</div>
            </div>
            <div style="display:flex;gap:10px;">
                <button class="secondary-btn" style="color:var(--dark);border-color:var(--border-color);" onclick="showToast('💬 Chat message sent to ${guide.name}! They will reply within 5 mins.')">Send Message</button>
                <button class="primary-btn" onclick="openBookGuideModal('${guide.id}')">Book Guided Trip</button>
            </div>
        </div>
    `;

    guideProfileModal.classList.add("active");
}

// Open Booking Modal
window.openBookGuideModal = function(guideId) {
    closeAllModals();
    const guide = guidesData.find(g => g.id === guideId) || guidesData[0];
    if (!bookGuideModal) return;

    const modalBody = bookGuideModal.querySelector(".modal-body");
    const today = new Date().toISOString().split("T")[0];

    modalBody.innerHTML = `
        <h2 style="font-size:26px;font-weight:900;margin-bottom:6px;">Book Local Guide</h2>
        <p style="color:var(--text-muted);margin-bottom:20px;">You are booking <strong>${guide.name}</strong> (📍 ${guide.location})</p>

        <form class="custom-form" id="bookingForm" onsubmit="handleBookingSubmit(event, '${guide.name}', ${guide.priceDay})">
            <div class="form-row-2">
                <div>
                    <label class="form-label">Trip Date</label>
                    <input class="form-control" type="date" min="${today}" value="${today}" required id="bookDate">
                </div>
                <div>
                    <label class="form-label">Duration</label>
                    <select class="form-control" id="bookDuration" onchange="calculateBookingTotal(${guide.priceDay}, ${guide.priceHour})">
                        <option value="1day">Full Day (8 hours) — ₹${guide.priceDay}</option>
                        <option value="halfday">Half Day (4 hours) — ₹${guide.priceHour * 4}</option>
                        <option value="2days">2-Day Immersion — ₹${guide.priceDay * 2}</option>
                        <option value="3days">3-Day Complete Circuit — ₹${guide.priceDay * 3}</option>
                    </select>
                </div>
            </div>

            <div class="form-row-2">
                <div>
                    <label class="form-label">Number of Travelers</label>
                    <input class="form-control" type="number" min="1" max="15" value="2" required id="bookTravelers">
                </div>
                <div>
                    <label class="form-label">Preferred Tour / Focus</label>
                    <select class="form-control" id="bookTour">
                        ${guide.tours.map(t => `<option value="${t}">${t}</option>`).join('')}
                    </select>
                </div>
            </div>

            <div>
                <label class="form-label">Your Name & Phone (WhatsApp)</label>
                <div class="form-row-2">
                    <input class="form-control" type="text" placeholder="Full Name" required id="bookName">
                    <input class="form-control" type="tel" placeholder="+91 Phone Number" required id="bookPhone">
                </div>
            </div>

            <div style="background:#f8fafc;padding:16px;border-radius:8px;border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <span style="font-size:12px;color:var(--text-muted);display:block;">ESTIMATED TOTAL</span>
                    <strong style="font-size:22px;color:var(--dark);" id="bookingTotalDisplay">₹${guide.priceDay}</strong>
                </div>
                <span style="font-size:12px;color:var(--secondary);font-weight:700;">✓ Free Cancellation up to 24h</span>
            </div>

            <button class="form-submit-btn" type="submit">Confirm & Request Guide →</button>
        </form>
    `;

    bookGuideModal.classList.add("active");
};

// Calculate Booking Total
window.calculateBookingTotal = function(dayPrice, hourPrice) {
    const duration = document.querySelector("#bookDuration").value;
    const totalDisplay = document.querySelector("#bookingTotalDisplay");
    if (!totalDisplay) return;

    if (duration === "1day") totalDisplay.textContent = `₹${dayPrice}`;
    else if (duration === "halfday") totalDisplay.textContent = `₹${hourPrice * 4}`;
    else if (duration === "2days") totalDisplay.textContent = `₹${dayPrice * 2}`;
    else if (duration === "3days") totalDisplay.textContent = `₹${dayPrice * 3}`;
};

// Handle Booking Submission
window.handleBookingSubmit = function(e, guideName, price) {
    e.preventDefault();
    const date = document.querySelector("#bookDate").value;
    const name = document.querySelector("#bookName").value;
    
    closeAllModals();
    showToast(`🎉 Booking Request Sent! ${guideName} has received your request for ${date}. They will connect on WhatsApp.`);
};

// Open "Become a Guide" Modal
window.openBecomeGuideModal = function() {
    closeAllModals();
    if (!becomeGuideModal) return;

    const modalBody = becomeGuideModal.querySelector(".modal-body");
    const districts = [...new Set(destinationsData.map(d => d.district))].sort();

    modalBody.innerHTML = `
        <span class="modal-subtitle">JOIN OUR COMMUNITY</span>
        <h2 style="font-size:28px;font-weight:900;margin:6px 0 8px;">Become a Verified Guido Local</h2>
        <p style="color:var(--text-muted);margin-bottom:20px;font-size:15px;">Earn by showing travelers the real authentic Karnataka you know and love.</p>

        <form class="custom-form" onsubmit="handleBecomeGuideSubmit(event)">
            <div class="form-row-2">
                <div>
                    <label class="form-label">Full Name</label>
                    <input class="form-control" type="text" placeholder="e.g. Ramesh K" required>
                </div>
                <div>
                    <label class="form-label">Your Home District</label>
                    <select class="form-control" required>
                        ${districts.map(d => `<option value="${d}">${d}</option>`).join('')}
                    </select>
                </div>
            </div>

            <div class="form-row-2">
                <div>
                    <label class="form-label">Languages You Speak</label>
                    <input class="form-control" type="text" placeholder="e.g. Kannada, English, Tulu" required>
                </div>
                <div>
                    <label class="form-label">Years of Local Knowledge</label>
                    <input class="form-control" type="number" min="1" max="50" value="5" required>
                </div>
            </div>

            <div>
                <label class="form-label">Your Local Specialty & Expertise</label>
                <input class="form-control" type="text" placeholder="e.g. Heritage Temples, Coffee Estates, Scuba & Surfing, Hidden Trekking Trails" required>
            </div>

            <div>
                <label class="form-label">Contact Email & Phone</label>
                <div class="form-row-2">
                    <input class="form-control" type="email" placeholder="email@example.com" required>
                    <input class="form-control" type="tel" placeholder="+91 Phone" required>
                </div>
            </div>

            <button class="form-submit-btn" type="submit">Submit Application for Verification →</button>
        </form>
    `;

    becomeGuideModal.classList.add("active");
};

// Handle Become Guide Form Submit
window.handleBecomeGuideSubmit = function(e) {
    e.preventDefault();
    closeAllModals();
    showToast("✅ Application Submitted! Our Karnataka verification team will reach out in 24 hours.");
};

// Close all active modals
function closeAllModals() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
}

// Wishlist Functionality
window.toggleWishlist = function(destId) {
    const index = wishlist.indexOf(destId);
    const dest = destinationsData.find(d => d.id === destId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`Removed ${dest ? dest.name : 'destination'} from Wishlist`);
    } else {
        wishlist.push(destId);
        showToast(`❤️ Saved ${dest ? dest.name : 'destination'} to your Wishlist!`);
    }

    localStorage.setItem("guido_wishlist", JSON.stringify(wishlist));
    updateWishlistUI();
    renderDestinations();
};

function updateWishlistUI() {
    wishlistCountEls.forEach(el => {
        el.textContent = wishlist.length;
    });

    if (wishlistItemsList) {
        if (wishlist.length === 0) {
            wishlistItemsList.innerHTML = `<p style="text-align:center;color:var(--text-muted);margin-top:30px;">No saved destinations yet.<br>Click ❤️ on places you love!</p>`;
            return;
        }

        const items = wishlist.map(id => {
            const dest = destinationsData.find(d => d.id === id);
            if (!dest) return "";
            return `
                <div class="wishlist-item-card">
                    <img src="${dest.img}" alt="${dest.name}">
                    <div class="wishlist-item-info">
                        <h4>${dest.name}</h4>
                        <span>📍 ${dest.district} · ${dest.guideCount} Guides</span>
                    </div>
                    <button class="btn-remove-fav" onclick="toggleWishlist('${dest.id}')" title="Remove">✕</button>
                </div>
            `;
        }).join("");

        wishlistItemsList.innerHTML = items;
    }
}

// Wishlist Drawer Toggle
window.toggleWishlistDrawer = function() {
    if (wishlistDrawer) {
        wishlistDrawer.classList.toggle("open");
    }
};

// Toast Notifications
function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>⚡</span> <div>${message}</div>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100%)";
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Trip Planner Interactive Engine
window.generateCustomPlan = function(e) {
    e.preventDefault();
    const region = document.querySelector("#planRegion").value;
    const interest = document.querySelector("#planInterest").value;
    const duration = document.querySelector("#planDuration").value;
    const outputCard = document.querySelector("#plannerOutput");

    if (!outputCard) return;

    let matchedPlaces = destinationsData.filter(d => {
        if (interest !== "all" && !d.categories.includes(interest)) return false;
        return true;
    });

    if (matchedPlaces.length < 3) matchedPlaces = destinationsData.slice(0, 4);

    let daysHtml = "";
    const daysCount = parseInt(duration) || 3;

    for (let i = 1; i <= daysCount; i++) {
        const place = matchedPlaces[(i - 1) % matchedPlaces.length];
        daysHtml += `
            <div class="itinerary-day-box">
                <h4>Day ${i}: ${place.name} (${place.district})</h4>
                <p><strong>Highlights:</strong> ${place.popularHighlights.slice(0, 2).join(", ")}</p>
                <p style="margin-top:6px;font-size:12.5px;color:#94a3b8;"><strong>Local Taste:</strong> ${place.topFood.split(',')[0]}</p>
                <button class="primary-btn" style="padding:5px 10px;font-size:12px;margin-top:10px;" onclick="openDestinationModal('${place.id}')">Explore & Guides →</button>
            </div>
        `;
    }

    outputCard.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <div>
                <span class="eyebrow" style="background:rgba(255,255,255,0.15);color:#fff;border:none;">CURATED ITINERARY</span>
                <h3 style="font-size:24px;font-weight:900;color:#fff;margin-top:4px;">Your ${daysCount}-Day ${interest.toUpperCase()} Journey in Karnataka</h3>
            </div>
            <button class="secondary-btn" style="padding:8px 14px;font-size:13px;" onclick="showToast('📋 Itinerary saved! You can book local guides for each destination.')">Save Itinerary</button>
        </div>
        <div class="itinerary-days-grid">${daysHtml}</div>
    `;

    outputCard.style.display = "block";
    outputCard.scrollIntoView({ behavior: "smooth" });
};

// ==========================================
// EVENT LISTENERS ATTACHMENT
// ==========================================

function attachDestinationCardListeners() {
    // "Explore →" buttons
    document.querySelectorAll(".btn-explore").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            openDestinationModal(id);
        });
    });

    // Guide count badges click
    document.querySelectorAll(".guide-count-badge").forEach(badge => {
        badge.addEventListener("click", (e) => {
            e.stopPropagation();
            const destId = badge.dataset.dest;
            openDestinationModal(destId);
        });
    });

    // Wishlist buttons click
    document.querySelectorAll(".btn-fav").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            toggleWishlist(id);
        });
    });

    // Card click opens modal
    document.querySelectorAll(".destination-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.closest("button") || e.target.closest(".guide-count-badge")) return;
            const id = card.dataset.id;
            openDestinationModal(id);
        });
    });
}

function attachGuideCardListeners() {
    document.querySelectorAll(".guide-view-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.guideId;
            openGuideProfileModal(id);
        });
    });

    document.querySelectorAll(".guide-book-quick-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.guideId;
            openBookGuideModal(id);
        });
    });
}

// Search & Filter Events
function initSearchAndFilters() {
    if (searchButton) {
        searchButton.addEventListener("click", () => {
            currentSearchQuery = searchInput.value;
            renderDestinations();
        });
    }

    if (clearButton) {
        clearButton.addEventListener("click", () => {
            searchInput.value = "";
            currentSearchQuery = "";
            selectedCategory = "all";
            categoryButtons.forEach(b => b.classList.toggle("active", b.dataset.category === "all"));
            renderDestinations();
            searchInput.focus();
        });
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                currentSearchQuery = searchInput.value;
                renderDestinations();
            }
        });

        searchInput.addEventListener("input", () => {
            currentSearchQuery = searchInput.value;
            renderDestinations();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            currentSort = sortSelect.value;
            renderDestinations();
        });
    }

    // Category button clicks
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedCategory = btn.dataset.category;
            categoryButtons.forEach(b => b.classList.toggle("active", b === btn));
            renderDestinations();
        });
    });

    // Guide filter tag buttons
    guideFilterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedGuideSpecialty = btn.dataset.specialty || "all";
            guideFilterButtons.forEach(b => b.classList.toggle("active", b === btn));
            renderGuides();
        });
    });

    // Close modals on clicking backdrop or close button
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", closeAllModals);
    });

    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeAllModals();
        });
    });

    // ESC key closes modals
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAllModals();
            if (wishlistDrawer) wishlistDrawer.classList.remove("open");
        }
    });

    // Nav "Become a Guide" buttons
    document.querySelectorAll(".btn-become-guide").forEach(btn => {
        btn.addEventListener("click", openBecomeGuideModal);
    });
}

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
    updateCategoryCounts();
    renderDestinations();
    renderGuides();
    renderLiveUpdates();
    updateWishlistUI();
    initSearchAndFilters();
});
