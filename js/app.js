// =========================================================
// GUIDO - KARNATAKA TRAVEL INTELLIGENCE & VERIFICATION ENGINE
// Live Ground Photos · Local Call Enquiries · Verified Guides
// =========================================================

// 1. COMPREHENSIVE 22 DESTINATIONS DATASET
const destinationsData = [
    {
        id: "hampi",
        name: "Hampi",
        district: "Vijayanagara",
        categories: ["heritage", "adventure"],
        img: "assets/images/hampi.jpg",
        description: "UNESCO World Heritage Site with mesmerizing 14th-century Vijayanagara ruins, monolithic boulder hills, and sacred river banks.",
        guideCount: 28,
        spotterCount: 14,
        liveStatus: "🟢 Sunny & Dry · Clear Skies",
        livePhotoImg: "assets/images/live-hampi.jpg",
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
        img: "assets/images/coorg.jpg",
        description: "The Scotland of India renowned for misty Western Ghats, sprawling coffee & spice estates, and cascading waterfalls.",
        guideCount: 24,
        spotterCount: 18,
        liveStatus: "🌸 Coffee Blossom Season · Mild Mist",
        livePhotoImg: "assets/images/live-coorg.jpg",
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
        img: "assets/images/gokarna.jpg",
        description: "Pristine Arabian Sea shores, cliffside beach treks, bohemian sunsets, and the sacred Mahabaleshwar temple.",
        guideCount: 20,
        spotterCount: 11,
        liveStatus: "🌊 Calm Arabian Sea · Sunset 6:35 PM",
        livePhotoImg: "assets/images/live-gokarna.jpg",
        rating: 4.9,
        bestTime: "October – March",
        topFood: "Gadbad Ice Cream, Coastal Prawn Curry, Neer Dosa, Fresh Kokum Juice",
        secrets: "Bioluminescent night plankton at Paradise beach, cliff hiking from Kudle to Half Moon Beach.",
        popularHighlights: ["Om Beach", "Kudle Beach Trek", "Mahabaleshwar Temple", "Paradise Beach"]
    },
    {
        id: "jogfalls",
        name: "Jog Falls",
        district: "Shivamogga",
        categories: ["nature", "adventure"],
        img: "assets/images/jogfalls.jpg",
        description: "Second highest plunge waterfall in India where the Sharavathi River drops 830 ft in four cascades: Raja, Roarer, Rocket, and Rani.",
        guideCount: 12,
        spotterCount: 9,
        liveStatus: "🌊 80% High Surge Flow · Plunge Base Open",
        livePhotoImg: "assets/images/live-jogfalls.jpg",
        rating: 4.6,
        bestTime: "July – December (Monsoon peak)",
        topFood: "Pathrode, Akki Rotti with coconut chutney, Sharavathi freshwater fish",
        secrets: "1,400 steps descent to the plunge pool base with a certified forest guide, viewpoint from British Bungalow.",
        popularHighlights: ["Raja & Rani Viewpoints", "Sharavathi Valley View", "Honnemaradu Backwaters", "Linganamakki Dam"]
    },
    {
        id: "chikmagalur",
        name: "Chikmagalur",
        district: "Chikkamagaluru",
        categories: ["mountains", "nature", "food"],
        img: "assets/images/chikmagalur.jpg",
        description: "Birthplace of Indian coffee surrounded by majestic peaks, lush coffee plantations, and cool mountain clouds.",
        guideCount: 22,
        spotterCount: 16,
        liveStatus: "☁️ Mullayanagiri Cloud Sea · 19°C",
        livePhotoImg: "assets/images/chikmagalur.jpg",
        rating: 4.8,
        bestTime: "September – May",
        topFood: "Malnad Style Akki Roti, Jackfruit Curry, Fresh Roasted Arabica/Robusta Coffee",
        secrets: "Early morning hike to Mullayanagiri (highest peak in Karnataka), offbeat Baba Budangiri caves.",
        popularHighlights: ["Mullayanagiri Peak", "Baba Budangiri", "Hebbe Falls", "Coffee Estate Walks"]
    },
    {
        id: "kabini",
        name: "Kabini & Nagarhole",
        district: "Mysuru",
        categories: ["nature", "adventure", "wildlife"],
        img: "assets/images/kabini.jpg",
        description: "One of Asia's premier wildlife reserves on the Kabini River backwaters, renowned for black panthers, wild tigers, and massive elephant herds.",
        guideCount: 21,
        spotterCount: 8,
        liveStatus: "🐅 Big Cat Sighting Zone B · Elephants at River",
        livePhotoImg: "assets/images/kabini.jpg",
        rating: 4.9,
        bestTime: "October – May",
        topFood: "Jungle Camp Barbecue, Mysore Thali, Bamboo Steamed Puttu",
        secrets: "Boat safari during evening golden hour when hundreds of wild elephants gather at the riverbank.",
        popularHighlights: ["Kabini River Boat Safari", "Nagarhole National Park Safari", "Taraka Dam", "Kutta Tribal Village Trail"]
    },
    {
        id: "mysore",
        name: "Mysore (Mysuru)",
        district: "Mysuru",
        categories: ["heritage", "food"],
        img: "assets/images/mysore.jpg",
        description: "The royal cultural capital of Karnataka celebrated for opulent palaces, silk sarees, sandalwood, and sweet Mysore Pak.",
        guideCount: 32,
        spotterCount: 22,
        liveStatus: "🏛️ Palace Illuminations Ready · Low Traffic",
        livePhotoImg: "assets/images/mysore.jpg",
        rating: 4.9,
        bestTime: "September – March",
        topFood: "Mysore Pak, Mylari Dosa, Mysore Rasam, Filter Kaapi",
        secrets: "Sunday night lighting of 100,000 palace bulbs, Devaraja fruit and spice heritage market tour at 7 AM.",
        popularHighlights: ["Mysore Palace", "Chamundi Hill", "Devaraja Market", "Brindavan Gardens"]
    },
    {
        id: "udupi",
        name: "Udupi & Malpe",
        district: "Udupi",
        categories: ["beaches", "food", "heritage"],
        img: "assets/images/udupi.jpg",
        description: "Temple town famed for Krishna Mutt, St. Mary's volcanic basalt islands, world-famous vegetarian cuisine, and clean beaches.",
        guideCount: 18,
        spotterCount: 12,
        liveStatus: "⛵ St. Mary's Ferry Operational · 28°C",
        livePhotoImg: "assets/images/udupi.jpg",
        rating: 4.8,
        bestTime: "October – March",
        topFood: "Udupi Sambar, Goli Baje, Neer Dosa, Mangalore Buns, Kotte Kadubu",
        secrets: "Kayaking in the mangrove backwaters of Saligrama, unique hexagonal rock pillars at St. Mary's.",
        popularHighlights: ["Sri Krishna Temple", "Malpe Beach & Sea Walk", "St. Mary's Island", "Kapu Lighthouse"]
    },
    {
        id: "badami",
        name: "Badami & Aihole",
        district: "Bagalkot",
        categories: ["heritage"],
        img: "assets/images/badami.jpg",
        description: "Ancient Chalukya capital nestled between red sandstone canyons, famous for 6th-century rock-cut cave temples and forts.",
        guideCount: 15,
        spotterCount: 7,
        liveStatus: "☀️ Clear Canyons · Low Queue at Cave 1",
        livePhotoImg: "assets/images/badami.jpg",
        rating: 4.7,
        bestTime: "October – February",
        topFood: "Jolada Rotti Oota, Shenga Chutney, Yennegai (stuffed brinjal)",
        secrets: "Agastya Lake reflection of Bhutanatha temples at sunrise, rock climbing on Badami red sandstone cliffs.",
        popularHighlights: ["Cave Temples (Caves 1-4)", "Bhutanatha Temple", "Badami Fort", "Agastya Lake"]
    },
    {
        id: "murudeshwar",
        name: "Murudeshwar",
        district: "Uttara Kannada",
        categories: ["beaches", "heritage", "adventure"],
        img: "assets/images/murudeshwar.jpg",
        description: "Home to the world's second-tallest Shiva statue (123 ft) surrounded by the Arabian Sea, and scuba diving hub at Netrani Island.",
        guideCount: 17,
        spotterCount: 10,
        liveStatus: "🤿 Netrani Scuba Active · 15m Visibility",
        livePhotoImg: "assets/images/murudeshwar.jpg",
        rating: 4.8,
        bestTime: "October – April",
        topFood: "Anjal Fish Tawa Fry, Crab Masala, Neer Dosa, Tender Coconut Pudding",
        secrets: "Scuba diving coral reefs at Netrani Island with certified divemasters, elevator ride to 18th floor of the 249-ft Rajagopura.",
        popularHighlights: ["Lord Shiva Statue", "Murudeshwar Rajagopura", "Netrani Island Scuba", "Bhatkal Light House"]
    },
    {
        id: "agumbe",
        name: "Agumbe",
        district: "Shivamogga",
        categories: ["nature", "adventure"],
        img: "assets/images/agumbe.jpg",
        description: "The 'Cherrapunji of the South' — a pristine rainforest sanctuary famous for King Cobra research, Western Ghats sunsets, and hidden waterfalls.",
        guideCount: 14,
        spotterCount: 6,
        liveStatus: "🌧️ Dense Rain Canopy · Sunset Peak Clear",
        livePhotoImg: "assets/images/agumbe.jpg",
        rating: 4.8,
        bestTime: "June – February",
        topFood: "Kashaya (herbal brew), Akki Rotti with Chutney Pudi, Jackfruit Chips",
        secrets: "Rainforest canopy walks guided by certified herpetologists, sunset over the Arabian Sea horizon from Agumbe Ghat.",
        popularHighlights: ["Agumbe Sunset Point", "Barkana Falls", "Onake Abbi Falls", "ARRS Rainforest Station"]
    },
    {
        id: "kudremukh",
        name: "Kudremukh",
        district: "Chikkamagaluru",
        categories: ["mountains", "adventure", "nature"],
        img: "assets/images/kudremukh.jpg",
        description: "Iconic horse-face mountain peak rising 1,894m above sea level, carpeted in endless emerald shola grasslands and evergreen rainforests.",
        guideCount: 18,
        spotterCount: 8,
        liveStatus: "🟢 50 Trek Permits Open · Cool Breeze",
        livePhotoImg: "assets/images/kudremukh.jpg",
        rating: 4.9,
        bestTime: "September – February",
        topFood: "Malnad Jackfruit Biryani, Pathrode, Filter Coffee, Hot Uppittu",
        secrets: "Forest department licensed high-altitude 22km day trek through shola forest valleys and cloud beds.",
        popularHighlights: ["Kudremukh Peak Trek", "Hanuman Gundi Falls", "Kalasa Temple Town", "Lobo House Grasslands"]
    },
    {
        id: "belur-halebidu",
        name: "Belur & Halebidu",
        district: "Hassan",
        categories: ["heritage"],
        img: "assets/images/belur-halebidu.jpg",
        description: "Masterpieces of 12th-century Hoysala soapstone architecture, featuring thousands of microscopic dancing figures and detailed friezes.",
        guideCount: 15,
        spotterCount: 9,
        liveStatus: "🏛️ Open for Visitors · Audio Guides Active",
        livePhotoImg: "assets/images/belur-halebidu.jpg",
        rating: 4.9,
        bestTime: "October – March",
        topFood: "Hassan Bisi Bele Bath, Davanagere Benne Dosa, Fresh Filter Coffee",
        secrets: "Madanika dancer sculptures with rotating stone bangles, star-shaped foundations that have withstood 900 years.",
        popularHighlights: ["Chennakesava Temple (Belur)", "Hoysaleswara Temple (Halebidu)", "Kedareshwara Temple", "Archeological Museum"]
    },
    {
        id: "dandeli",
        name: "Dandeli",
        district: "Uttara Kannada",
        categories: ["nature", "adventure", "wildlife"],
        img: "assets/images/dandeli.jpg",
        description: "Adventure hub nestled along the Kali River, famous for grade-3 white water rafting, hornbill birding, and dense teak forests.",
        guideCount: 19,
        spotterCount: 11,
        liveStatus: "🚣 Kali River Rafting Grade 3 Active",
        livePhotoImg: "assets/images/dandeli.jpg",
        rating: 4.8,
        bestTime: "October – May",
        topFood: "North Canara Fish Curry, Bamboo Rice Kheer, Jowar Bhakri",
        secrets: "Night jungle camping, natural jacuzzis in the Kali river rapids, spotting Great Indian Hornbills at Timber Depot.",
        popularHighlights: ["Kali River Rafting", "Dandeli Wildlife Sanctuary", "Syntheri Rocks", "Shiroli Peak"]
    },
    {
        id: "sakleshpur",
        name: "Sakleshpur",
        district: "Hassan",
        categories: ["mountains", "nature"],
        img: "assets/images/sakleshpur.jpg",
        description: "Enchanting hill town in the Western Ghats surrounded by tea, coffee, cardamom plantations, and medieval star-shaped forts.",
        guideCount: 16,
        spotterCount: 9,
        liveStatus: "⛰️ Bisle Ghat Viewpoint 100% Clear",
        livePhotoImg: "assets/images/sakleshpur.jpg",
        rating: 4.7,
        bestTime: "August – April",
        topFood: "Bamboo Shoot Pickle, Halasina Hannina Kadabu, Cardamom Chai",
        secrets: "Railway track trek over ancient British bridges, 360-degree hilltop views at Manjarabad Star Fort.",
        popularHighlights: ["Manjarabad Fort", "Bisle Ghat Viewpoint", "Jenukal Gudda", "Mookanamane Falls"]
    },
    {
        id: "bandipur",
        name: "Bandipur National Park",
        district: "Chamarajanagar",
        categories: ["nature", "wildlife", "adventure"],
        img: "assets/images/bandipur.jpg",
        description: "A flagship Project Tiger reserve where the Deccan Plateau meets the Western Ghats, featuring dry deciduous forests and thriving biodiversity.",
        guideCount: 16,
        spotterCount: 6,
        liveStatus: "🐅 Gypsy Safaris Operating on Time",
        livePhotoImg: "assets/images/bandipur.jpg",
        rating: 4.7,
        bestTime: "September – April",
        topFood: "Traditional Kannada Oota, Maddur Vada, Ragi Mudde with Nati Koli Saaru",
        secrets: "Gopalaswamy Betta mist-covered peak inside the tiger reserve with 700-year-old temple.",
        popularHighlights: ["Open Gypsy Safari", "Gopalaswamy Betta Peak", "Moyar River Gorge", "Forest Interpretation Centre"]
    },
    {
        id: "mangalore",
        name: "Mangalore (Mangaluru)",
        district: "Dakshina Kannada",
        categories: ["beaches", "food", "heritage"],
        img: "assets/images/mangalore.jpg",
        description: "Coastal port city famed for pristine Sasihithlu surf beaches, legendary Ghee Roast seafood, and ancient Kadri Manjunatha temple.",
        guideCount: 22,
        spotterCount: 14,
        liveStatus: "🏄 Surf Waves 1.2m · Sunny Coast",
        livePhotoImg: "assets/images/mangalore.jpg",
        rating: 4.8,
        bestTime: "October – March",
        topFood: "Chicken Ghee Roast, Kori Rotti, Anjal Masala Fry, Pabba's Gadbad Ice Cream",
        secrets: "Tannirbhavi floating bridge sunset, tasting 40+ ice cream varieties at original Pabba's parlour.",
        popularHighlights: ["Panambur & Tannirbhavi Beach", "Kadri Manjunatha Temple", "St. Aloysius Chapel", "Sasihithlu Surf Spot"]
    },
    {
        id: "nandi-hills",
        name: "Nandi Hills",
        district: "Chikkaballapur",
        categories: ["mountains", "heritage", "adventure"],
        img: "assets/images/nandi-hills.jpg",
        description: "Historic fortress hill perched 1,478m above sea level, famous for majestic cloud bed sunrises and Tipu Sultan's summer residence.",
        guideCount: 20,
        spotterCount: 15,
        liveStatus: "☁️ 5:45 AM Cloud Bed Visible",
        livePhotoImg: "assets/images/nandi-hills.jpg",
        rating: 4.7,
        bestTime: "Year-Round (Best September – March)",
        topFood: "Masala Chai with Nippattu, Sweet Corn, South Indian breakfast at foothill Darshinis",
        secrets: "Bhoga Nandeeshwara temple at the foothills (1000 years old), cycling up the 40 hairpin curves at dawn.",
        popularHighlights: ["Sunrise Viewpoint", "Tipu's Drop", "Bhoga Nandeeshwara Temple", "Amrith Sarovar Lake"]
    },
    {
        id: "bijapur",
        name: "Vijayapura (Bijapur)",
        district: "Vijayapura",
        categories: ["heritage"],
        img: "assets/images/bijapur.jpg",
        description: "Medieval Deccan Sultanate capital home to Gol Gumbaz, possessing the second-largest unsupported dome in the world with whispering galleries.",
        guideCount: 14,
        spotterCount: 6,
        liveStatus: "🏛️ Gol Gumbaz Whispering Gallery Open",
        livePhotoImg: "assets/images/bijapur.jpg",
        rating: 4.7,
        bestTime: "October – March",
        topFood: "Bijapur Biryani, Shenga Poli, Jawari Rotti with Kaalu Saaru",
        secrets: "Acoustic experiment: a single clap echoes 11 times in the Gol Gumbaz dome, stunning Ibrahim Rauza minarets.",
        popularHighlights: ["Gol Gumbaz", "Ibrahim Rauza", "Bara Kaman", "Malik-e-Maidan Cannon"]
    },
    {
        id: "shravanabelagola",
        name: "Shravanabelagola",
        district: "Hassan",
        categories: ["heritage"],
        img: "assets/images/shravanabelagola.jpg",
        description: "World's most sacred Jain pilgrimage center featuring the 57-foot monolithic statue of Lord Bahubali (Gommateshwara), carved in 981 AD.",
        guideCount: 12,
        spotterCount: 5,
        liveStatus: "☀️ Steps Barefoot Friendly Till 11 AM",
        livePhotoImg: "assets/images/shravanabelagola.jpg",
        rating: 4.8,
        bestTime: "October – March",
        topFood: "Pure Jain Thali, Sugarcane Juice, Tender Coconut, Hassan Jackfruit chips",
        secrets: "Early morning 650-step climb before granite stones heat up in the afternoon sun.",
        popularHighlights: ["Bahubali Monolithic Statue", "Vindhyagiri Hill", "Chandragiri Hill Basadis", "Kalyani Temple Tank"]
    },
    {
        id: "pattadakal-aihole",
        name: "Pattadakal & Aihole",
        district: "Bagalkot",
        categories: ["heritage"],
        img: "assets/images/pattadakal-aihole.jpg",
        description: "The cradle of Indian temple architecture on the banks of Malaprabha River, showcasing a unique synthesis of Dravidian and Nagara styles.",
        guideCount: 13,
        spotterCount: 5,
        liveStatus: "🏛️ Malaprabha River Banks Clear",
        livePhotoImg: "assets/images/pattadakal-aihole.jpg",
        rating: 4.8,
        bestTime: "October – March",
        topFood: "North Karnataka Sajje Rotti, Stuffed Capsicum, Shenga Holige",
        secrets: "Durga Temple with rare horseshoe apsidal plan in Aihole, astronomical carvings on Virupaksha temple ceiling.",
        popularHighlights: ["Virupaksha Temple (Pattadakal)", "Durga Temple Complex (Aihole)", "Mallikarjuna Temple", "Lad Khan Temple"]
    },
    {
        id: "chitradurga",
        name: "Chitradurga Fort",
        district: "Chitradurga",
        categories: ["heritage", "adventure"],
        img: "assets/images/chitradurga.jpg",
        description: "The legendary 'Kallina Kote' (Stone Fortress) with 7 concentric defensive fortification walls, 18 temples, and heroic lore of Onake Obavva.",
        guideCount: 11,
        spotterCount: 6,
        liveStatus: "🏰 Fort Walk Open · Pleasant Morning",
        livePhotoImg: "assets/images/chitradurga.jpg",
        rating: 4.7,
        bestTime: "October – March",
        topFood: "Chitradurga Benne Dosa, Mirchi Bajji, Kadabu",
        secrets: "Hidden secret passage of Onake Obavva Kindi where a single brave woman defended the fort with a pestle.",
        popularHighlights: ["7 Concentric Fort Walls", "Obavva Kindi", "Ekanatheshwari Temple", "Windmill Hills Viewpoint"]
    }
];

// 2. REAL-TIME VERIFIED GROUND PHOTOS DATASET
const livePhotosData = [
    {
        id: "p1",
        destId: "jogfalls",
        destName: "Jog Falls",
        spotName: "Sharavathi Plunge Pool Viewpoint",
        timeAgo: "8 mins ago",
        statusBadge: "🌊 Heavy Water Surge",
        img: "assets/images/live-jogfalls.jpg",
        caption: "Water flow is thunderous today after heavy rains in Linganamakki catchment. Raja & Rani cascades full.",
        author: "Vasant Bhat",
        authorRole: "Local Sagara Guide",
        avatar: "assets/images/guide-vasant.jpg"
    },
    {
        id: "p2",
        destId: "hampi",
        destName: "Hampi",
        spotName: "Virupaksha Temple River Ghat",
        timeAgo: "15 mins ago",
        statusBadge: "☀️ Clear Skies · 24°C",
        img: "assets/images/live-hampi.jpg",
        caption: "Tungabhadra river coracle rides are fully operational. Very light crowd at the temple complex right now.",
        author: "Ravi Kumar",
        authorRole: "ASI Heritage Guide",
        avatar: "assets/images/guide-ravi.jpg"
    },
    {
        id: "p3",
        destId: "coorg",
        destName: "Coorg (Madikeri)",
        spotName: "Mandalpatti Peak Trailhead",
        timeAgo: "26 mins ago",
        statusBadge: "🌸 White Blossom Bloom",
        img: "assets/images/live-coorg.jpg",
        caption: "Estates smelling like fresh jasmine! Jeep trails open to Mandalpatti peak with zero mud blockage.",
        author: "Ananya Shetty",
        authorRole: "Coffee Planter & Host",
        avatar: "assets/images/guide-ananya.jpg"
    },
    {
        id: "p4",
        destId: "gokarna",
        destName: "Gokarna",
        spotName: "Om Beach Cliffside Path",
        timeAgo: "41 mins ago",
        statusBadge: "✨ Calm Sea & Dolphins",
        img: "assets/images/live-gokarna.jpg",
        caption: "Spotted 3 dolphins off Om Beach viewpoint! Cliff trek path to Half Moon beach is clean and dry.",
        author: "Vikram Gowda",
        authorRole: "Beach Trek Guide",
        avatar: "assets/images/guide-vikram.jpg"
    }
];

// 3. VERIFIED LOCAL SPOTTERS & DIRECT CALL CONTACTS
const localCallContacts = [
    {
        id: "c1",
        name: "Ravi Kumar",
        role: "Hampi Historian & Spotter",
        destId: "hampi",
        location: "Hampi, Vijayanagara",
        phone: "+91 98801 24510",
        languages: "Kannada, English, Hindi",
        avatar: "assets/images/guide-ravi.jpg",
        status: "Available Now",
        audioSnippet: "Namaskara! Hampi weather is super pleasant today, 24°C. River coracles running normally. Call or WhatsApp me anytime for crowd status at Virupaksha temple!"
    },
    {
        id: "c2",
        name: "Ananya Shetty",
        role: "Estate Host & Spotter",
        destId: "coorg",
        location: "Madikeri, Coorg",
        phone: "+91 94482 63319",
        languages: "Kannada, English, Kodava",
        avatar: "assets/images/guide-ananya.jpg",
        status: "Available Now",
        audioSnippet: "Hello! Coffee blossoms are in full bloom across Madikeri this week. If you need estate homestay tips or road condition updates from Mysore road, I am here."
    },
    {
        id: "c3",
        name: "Vasant Bhat",
        role: "Jog Falls Canyon Lead",
        destId: "jogfalls",
        location: "Sagara & Jog Falls",
        phone: "+91 97412 89042",
        languages: "Kannada, English, Hindi",
        avatar: "assets/images/guide-vasant.jpg",
        status: "Available Now",
        audioSnippet: "Namaskara! Jog Falls has 80% surge today. 1400 steps base path is open with guide accompaniment. Rain forecast light. Feel free to call for live water levels!"
    },
    {
        id: "c4",
        name: "Vikram Gowda",
        role: "Gokarna Trek Lead",
        destId: "gokarna",
        location: "Gokarna, Uttara Kannada",
        phone: "+91 98450 11234",
        languages: "Kannada, English, Hindi",
        avatar: "assets/images/guide-vikram.jpg",
        status: "Available Now",
        audioSnippet: "Hey traveler! Arabian sea is calm at Kudle and Om beach today. Bioluminescence active late evening at Paradise beach. Ask me about cliff safety and boat rides."
    }
];

// 4. VERIFIED GUIDES DIRECTORY DATASET
const guidesData = [
    {
        id: "g1",
        name: "Ravi Kumar",
        destinationId: "hampi",
        location: "Hampi, Vijayanagara",
        avatar: "assets/images/guide-ravi.jpg",
        rating: 4.9,
        reviewsCount: 142,
        specialties: ["History", "Architecture", "Sunset Treks", "Boulder Walks"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 2200,
        priceHour: 350,
        badge: "Govt Certified",
        verified: true,
        experience: "9 years",
        bio: "Born and raised in Hampi. Certified ASI guide specializing in 14th century Vijayanagara empire history, sacred temple symbolism, and secret boulder viewpoints.",
        tours: ["Virupaksha & Sacred Center Heritage Walk", "Matanga Hill Sunrise & Bouldering Path", "Hippie Island & Sanapur Lake Sunset Tour"]
    },
    {
        id: "g2",
        name: "Ananya Shetty",
        destinationId: "coorg",
        location: "Madikeri, Coorg",
        avatar: "assets/images/guide-ananya.jpg",
        rating: 4.9,
        reviewsCount: 118,
        specialties: ["Coffee", "Plantations", "Kodava Cuisine", "Nature Trails"],
        languages: ["Kannada", "English", "Kodava", "Hindi"],
        priceDay: 2400,
        priceHour: 380,
        badge: "Estate Host",
        verified: true,
        experience: "7 years",
        bio: "3rd generation coffee planter in Madikeri. I offer hands-on coffee cupping, spice tasting, and insider visits to secluded waterfalls and authentic Kodava kitchens.",
        tours: ["Artisan Coffee & Spice Estate Walk", "Mandalpatti 4x4 Dawn Jeep Expedition", "Kodava Culinary & Homestay Feast"]
    },
    {
        id: "g3",
        name: "Vikram Gowda",
        destinationId: "gokarna",
        location: "Gokarna, Uttara Kannada",
        avatar: "assets/images/guide-vikram.jpg",
        rating: 4.8,
        reviewsCount: 95,
        specialties: ["Trek", "Scuba", "Temple Lore", "Coastal Trails"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 2000,
        priceHour: 300,
        badge: "Coastal Lead",
        verified: true,
        experience: "6 years",
        bio: "Local coastal hiker and storyteller. Leading guided cliffside walks connecting 5 famous beaches, secret caves, and evening bioluminescence expeditions.",
        tours: ["5-Beach Cliffside Traverse", "Mahabaleshwar Temple & Heritage Walk", "Paradise Beach Night Bioluminescence Watch"]
    },
    {
        id: "g4",
        name: "Vasant Bhat",
        destinationId: "jogfalls",
        location: "Jog Falls & Sagara",
        avatar: "assets/images/guide-vasant.jpg",
        rating: 4.7,
        reviewsCount: 58,
        specialties: ["Trek", "Nature", "Waterfall Canyon Descent"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 1700,
        priceHour: 250,
        badge: "Canyon Guide",
        verified: true,
        experience: "9 years",
        bio: "Lifelong resident of Sagara. I guide travelers to the base of Jog Falls, secret viewpoint bungalows from the colonial era, and serene Sharavathi river islands.",
        tours: ["Jog Falls 1400 Steps Base Descent", "Sharavathi Valley Backwaters & Boat Cruise", "Monsoon Rainforest & Stream Trek"]
    },
    {
        id: "g5",
        name: "Somanna Kariappa",
        destinationId: "kabini",
        location: "Kabini, Mysuru",
        avatar: "assets/images/guide-somanna.jpg",
        rating: 4.9,
        reviewsCount: 156,
        specialties: ["Wildlife", "Trek", "Big Cat Tracking", "Elephant Lore"],
        languages: ["Kannada", "English", "Tamil", "Hindi"],
        priceDay: 3000,
        priceHour: 500,
        badge: "Master Tracker",
        verified: true,
        experience: "14 years",
        bio: "Indigenous forest tracker with over a decade of experience in Nagarhole & Kabini backwaters. Known for highest success rate in spotting leopards and elephants.",
        tours: ["Dawn Tiger & Leopard Jungle Safari", "Sunset Kabini Backwaters Boat Cruise", "Forest Edge Birding & Tribal Flora Tour"]
    },
    {
        id: "g6",
        name: "Prashanth Shetty",
        destinationId: "chikmagalur",
        location: "Chikmagalur",
        avatar: "assets/images/guide-prashanth.jpg",
        rating: 4.8,
        reviewsCount: 88,
        specialties: ["Coffee", "Trek", "Mullayanagiri Peak", "Malnad Food"],
        languages: ["Kannada", "English", "Hindi"],
        priceDay: 2100,
        priceHour: 320,
        badge: "Peak Guide",
        verified: true,
        experience: "8 years",
        bio: "Mullayanagiri summit lead. I arrange sunrise peak climbs with zero crowd congestion and organize tastings of single-estate Arabicas.",
        tours: ["Mullayanagiri Cloud Sea Sunrise Hike", "Baba Budangiri Historical Caves Tour", "Chikmagalur Coffee Estate Trail & Tasting"]
    }
];

// 5. STATE MANAGEMENT
let selectedCategory = "all";
let selectedGuideSpecialty = "all";
let currentSearchQuery = "";
let currentSort = "popular";
let wishlist = JSON.parse(localStorage.getItem("guido_wishlist") || "[]");

// DOM Elements
const destinationGrid = document.querySelector("#destinationGrid");
const guidesGrid = document.querySelector("#guidesGrid");
const livePhotosGrid = document.querySelector("#livePhotosGrid");
const callSpottersGrid = document.querySelector("#callSpottersGrid");
const searchInput = document.querySelector("#placeSearch");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const sortSelect = document.querySelector("#sortSelect");
const categoryButtons = [...document.querySelectorAll(".category-btn")];
const guideFilterButtons = [...document.querySelectorAll(".guide-filter-btn")];
const noResults = document.querySelector("#noResults");
const searchResultsCount = document.querySelector("#searchResultsCount");
const totalDestCountEl = document.querySelector("#totalDestCount");
const totalSpottersCountEl = document.querySelector("#totalSpottersCount");
const wishlistCountEls = document.querySelectorAll(".wishlist-count");
const wishlistDrawer = document.querySelector("#wishlistDrawer");
const wishlistItemsList = document.querySelector("#wishlistItemsList");

// Modals
const requestPhotoModal = document.querySelector("#requestPhotoModal");
const callLocalModal = document.querySelector("#callLocalModal");
const destinationModal = document.querySelector("#destinationModal");
const guideProfileModal = document.querySelector("#guideProfileModal");
const bookGuideModal = document.querySelector("#bookGuideModal");
const becomeGuideModal = document.querySelector("#becomeGuideModal");
const toastContainer = document.querySelector("#toastContainer");

// =========================================================
// RENDER FUNCTIONS
// =========================================================

// 1. Render Live Ground Photo Radar Stream
function renderLivePhotos() {
    if (!livePhotosGrid) return;

    livePhotosGrid.innerHTML = livePhotosData.map(photo => `
        <article class="live-photo-card" data-dest="${photo.destId}">
            <div class="live-photo-img-wrap">
                <img src="${photo.img}" alt="${photo.spotName}" loading="lazy">
                <span class="live-condition-badge">${photo.statusBadge}</span>
                <span class="live-time-ago">⏱️ ${photo.timeAgo}</span>
            </div>
            <div class="live-photo-content">
                <span class="live-photo-location">📍 ${photo.destName}</span>
                <h3 class="live-photo-title">${photo.spotName}</h3>
                <p class="live-photo-desc">${photo.caption}</p>
                <div class="live-photo-footer">
                    <div class="spotter-tag">
                        <img src="${photo.avatar}" alt="${photo.author}">
                        <span>${photo.author}</span>
                    </div>
                    <button class="btn-request-same-spot" onclick="openRequestPhotoModal('${photo.destId}')" type="button">
                        Request Update 📸
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}

// 2. Render Call Spotters Dial Cards
function renderCallSpotters() {
    if (!callSpottersGrid) return;

    callSpottersGrid.innerHTML = localCallContacts.map(contact => `
        <div class="quick-call-card">
            <div class="spotter-header">
                <img src="${contact.avatar}" alt="${contact.name}">
                <div class="spotter-info">
                    <h4>${contact.name}</h4>
                    <span>📍 ${contact.location}</span>
                </div>
            </div>
            <p style="font-size:12px;color:#64748b;margin:0;">🗣️ ${contact.languages}</p>
            <button class="btn-dial-now" onclick="openCallModal('${contact.id}')" type="button">
                <span>📞</span> Quick Call / Ask Question
            </button>
        </div>
    `).join("");
}

// 3. Render 22 Destinations with 3-Tier Action Buttons
function renderDestinations() {
    if (!destinationGrid) return;

    let filtered = destinationsData.filter(dest => {
        const matchesCategory = selectedCategory === "all" || dest.categories.includes(selectedCategory);
        const q = currentSearchQuery.toLowerCase().trim();
        const matchesQuery = q === "" ||
            dest.name.toLowerCase().includes(q) ||
            dest.district.toLowerCase().includes(q) ||
            dest.categories.some(c => c.toLowerCase().includes(q)) ||
            dest.topFood.toLowerCase().includes(q) ||
            dest.description.toLowerCase().includes(q);

        return matchesCategory && matchesQuery;
    });

    // Sorting
    if (currentSort === "popular") {
        filtered.sort((a, b) => b.spotterCount - a.spotterCount);
    } else if (currentSort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (searchResultsCount) {
        searchResultsCount.textContent = `Showing ${filtered.length} of ${destinationsData.length} Karnataka destinations`;
    }

    if (filtered.length === 0) {
        destinationGrid.innerHTML = "";
        if (noResults) noResults.style.display = "block";
        return;
    }

    if (noResults) noResults.style.display = "none";

    destinationGrid.innerHTML = filtered.map(dest => {
        const isFav = wishlist.includes(dest.id);
        
        return `
            <article class="destination-card" data-id="${dest.id}">
                <div class="card-image-wrap">
                    <img src="${dest.img}" alt="${dest.name}" loading="lazy">
                    <span class="badge-district">${dest.district}</span>
                    <span class="live-indicator-chip"><span class="pulse-dot"></span> ${dest.spotterCount} Active</span>
                    <button class="btn-fav ${isFav ? 'active' : ''}" data-id="${dest.id}" type="button" title="Save" aria-label="Favorite ${dest.name}">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                </div>
                
                <div class="destination-info">
                    <h3>${dest.name}</h3>
                    <p>${dest.description}</p>
                    
                    <div class="destination-meta-chips">
                        <div class="meta-chip"><span>⭐</span> <strong>${dest.rating}</strong></div>
                        <div class="meta-chip"><span>🗓️</span> ${dest.bestTime.split('–')[0].trim()}</div>
                        <div class="meta-chip" style="background:#ecfdf5;color:#047857;"><span>⚡</span> ${dest.liveStatus.substring(0, 20)}...</div>
                    </div>

                    <!-- 3-TIER CORE ACTION BUTTONS -->
                    <div class="card-tier-actions">
                        <button class="btn-card-action btn-action-photo" onclick="openRequestPhotoModal('${dest.id}')" type="button">
                            <span>📸</span> Live Photo
                        </button>
                        <button class="btn-card-action btn-action-call" onclick="openCallForDestination('${dest.id}')" type="button">
                            <span>📞</span> Call Local
                        </button>
                        <button class="btn-card-action btn-action-guide-full" onclick="openDestinationModal('${dest.id}')" type="button">
                            <span>🧭 Explore & Guides (${dest.guideCount})</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    attachDestinationCardListeners();
}

// 4. Render Guides Directory
function renderGuides() {
    if (!guidesGrid) return;

    let filtered = guidesData.filter(guide => {
        if (selectedGuideSpecialty === "all") return true;
        return guide.specialties.some(s => s.toLowerCase().includes(selectedGuideSpecialty.toLowerCase())) ||
               guide.destinationId === selectedGuideSpecialty;
    });

    guidesGrid.innerHTML = filtered.map(guide => {
        const skills = guide.specialties.map(s => `<span class="skill-pill">${s}</span>`).join("");
        
        return `
            <article class="guide-profile" data-id="${guide.id}">
                <div class="guide-card-top">
                    <img class="guide-avatar-img" src="${guide.avatar}" alt="${guide.name}" loading="lazy">
                    <div class="guide-header-info">
                        <div class="guide-name-row">
                            <h3>${guide.name}</h3>
                            <span class="verified-badge">✓</span>
                        </div>
                        <span class="guide-location-tag">📍 ${guide.location}</span>
                        <div class="guide-score-row">
                            <span class="stars">★★★★★ ${guide.rating}</span>
                            <span class="reviews-count">(${guide.reviewsCount} reviews)</span>
                        </div>
                    </div>
                </div>

                <p class="guide-bio">${guide.bio.substring(0, 115)}...</p>
                <div class="guide-skills-pills">${skills}</div>
                <div class="guide-languages">🗣️ Speaks: <strong>${guide.languages.join(", ")}</strong></div>

                <div class="guide-card-footer">
                    <div class="guide-price">
                        <strong>₹${guide.priceDay}</strong>
                        <span>per day</span>
                    </div>
                    <div class="guide-actions">
                        <button class="guide-view-btn" onclick="openGuideProfileModal('${guide.id}')" type="button">View Profile</button>
                        <button class="guide-book-quick-btn" onclick="openBookGuideModal('${guide.id}')" type="button">Book Guide</button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// 5. Update Category Counts
function updateCategoryCounts() {
    categoryButtons.forEach(btn => {
        const cat = btn.dataset.category;
        const countSpan = btn.querySelector(".cat-count");
        if (!countSpan) return;

        if (cat === "all") {
            countSpan.textContent = destinationsData.length;
        } else {
            countSpan.textContent = destinationsData.filter(d => d.categories.includes(cat)).length;
        }
    });

    if (totalDestCountEl) totalDestCountEl.textContent = `${destinationsData.length}+`;
    if (totalSpottersCountEl) totalSpottersCountEl.textContent = `${destinationsData.reduce((acc, d) => acc + d.spotterCount, 0)}+`;
}

// =========================================================
// INTERACTIVE MODALS (LIVE PHOTO, LOCAL CALL, GUIDES)
// =========================================================

// 1. OPEN LIVE PHOTO REQUEST MODAL
window.openRequestPhotoModal = function(destId) {
    closeAllModals();
    if (!requestPhotoModal) return;

    const modalBody = requestPhotoModal.querySelector(".modal-body");
    const currentDest = destinationsData.find(d => d.id === destId) || destinationsData[0];

    modalBody.innerHTML = `
        <span class="modal-subtitle">📸 INSTANT ON-GROUND PROOF</span>
        <h2 style="font-size:26px;font-weight:900;margin:6px 0 8px;">Request a Live Photo of Any Spot</h2>
        <p style="color:var(--text-muted);margin-bottom:20px;font-size:14.5px;">Get an active local spotter to take and upload a real-time ground photo within 5-10 minutes.</p>

        <form class="custom-form" onsubmit="handleLivePhotoSubmit(event, '${currentDest.id}')">
            <div>
                <label class="form-label">Select Karnataka Destination</label>
                <select class="form-control" id="reqPhotoDest" onchange="updatePhotoPresetSpots(this.value)">
                    ${destinationsData.map(d => `<option value="${d.id}" ${d.id === currentDest.id ? 'selected' : ''}>${d.name} (${d.district}) — ${d.spotterCount} spotters online</option>`).join('')}
                </select>
            </div>

            <div>
                <label class="form-label">Specific Landmark / Spot to Check</label>
                <input class="form-control" id="reqPhotoSpot" type="text" placeholder="e.g. Abbey Falls Water Surge, Virupaksha Temple Queue, Om Beach Sunset" value="${currentDest.popularHighlights[0]}" required>
            </div>

            <div class="form-row-2">
                <div>
                    <label class="form-label">What do you want to verify?</label>
                    <select class="form-control" id="reqPhotoReason">
                        <option value="weather">☀️ Current Weather & Cloud Sea</option>
                        <option value="waterfall">🌊 Waterfall Surge & Water Level</option>
                        <option value="crowd">👥 Crowd Level & Ticket Queue</option>
                        <option value="bloom">🌸 Blossom & Flower Season</option>
                        <option value="road">🚗 Road / Ghat Trail Condition</option>
                    </select>
                </div>
                <div>
                    <label class="form-label">Urgency</label>
                    <select class="form-control">
                        <option>⚡ Immediate (Next 5-10 mins)</option>
                        <option>🕒 Today Evening</option>
                        <option>🌅 Tomorrow Morning</option>
                    </select>
                </div>
            </div>

            <div class="dispatch-progress-box" id="dispatchBox">
                <div class="dispatch-radar-circle">📡</div>
                <h4 style="text-align:center;font-size:16px;color:var(--dark);margin-bottom:4px;">Broadcasting Request to Local Spotters...</h4>
                <p style="text-align:center;font-size:13px;color:var(--text-muted);" id="dispatchMsg">Pinging active spotters in ${currentDest.name}...</p>
            </div>

            <button class="form-submit-btn" id="btnSubmitPhotoReq" type="submit">
                📡 Dispatch Live Photo Request (Free) →
            </button>
        </form>
    `;

    requestPhotoModal.classList.add("active");
};

// Update preset spot helper
window.updatePhotoPresetSpots = function(destId) {
    const dest = destinationsData.find(d => d.id === destId);
    const spotInput = document.querySelector("#reqPhotoSpot");
    if (dest && spotInput) {
        spotInput.value = dest.popularHighlights[0];
    }
};

// Handle Live Photo Submission
window.handleLivePhotoSubmit = function(e, destId) {
    e.preventDefault();
    const destSelect = document.querySelector("#reqPhotoDest").value;
    const spot = document.querySelector("#reqPhotoSpot").value;
    const dest = destinationsData.find(d => d.id === destSelect) || destinationsData[0];

    const dispatchBox = document.querySelector("#dispatchBox");
    const dispatchMsg = document.querySelector("#dispatchMsg");
    const submitBtn = document.querySelector("#btnSubmitPhotoReq");

    dispatchBox.style.display = "block";
    submitBtn.style.display = "none";

    setTimeout(() => {
        dispatchMsg.innerHTML = `🟢 <strong>${dest.spotterCount} spotters in ${dest.name} notified!</strong> Ganesh & Ravi accepted your request.`;
    }, 1200);

    setTimeout(() => {
        closeAllModals();
        showToast(`📸 Live Photo Request Dispatched! Spotters at ${spot} are capturing the photo. You will receive an instant notification.`);
    }, 2800);
};

// 2. OPEN INSTANT LOCAL CALL & ENQUIRY MODAL
window.openCallModal = function(contactId) {
    closeAllModals();
    if (!callLocalModal) return;

    const modalBody = callLocalModal.querySelector(".modal-body");
    const contact = localCallContacts.find(c => c.id === contactId) || localCallContacts[0];

    modalBody.innerHTML = `
        <div class="call-simulator-screen">
            <img class="call-avatar-pulse" src="${contact.avatar}" alt="${contact.name}">
            <div class="call-status-text">🟢 DIRECT AUDIO CALL CONNECTED</div>
            <div class="call-name-text">${contact.name}</div>
            <div class="call-location-text">📍 ${contact.location} · 🗣️ ${contact.languages}</div>
            
            <div class="call-audio-box">
                <strong style="color:#86efac;display:block;font-size:12px;margin-bottom:4px;">📻 LOCAL VOICE RESPONSE / LIVE ADVICE:</strong>
                <p>"${contact.audioSnippet}"</p>
            </div>

            <div class="call-actions-row">
                <a class="btn-whatsapp-direct" href="https://wa.me/919880124510?text=Hi%20${contact.name},%20I%20saw%20your%20profile%20on%20Guido.%20Can%20I%20ask%20about%20current%20conditions%20in%20${contact.location}?" target="_blank">
                    <span>💬</span> Continue on WhatsApp
                </a>
                <button class="btn-end-call" onclick="closeAllModals()" type="button">
                    <span>🔴</span> End Call
                </button>
            </div>
        </div>

        <div style="background:#f8fafc;padding:16px;border-radius:var(--radius-sm);border:1px solid var(--border-color);">
            <strong style="font-size:13px;color:var(--dark);display:block;margin-bottom:8px;">💡 Popular Questions to ask ${contact.name}:</strong>
            <ul style="font-size:13px;color:#475569;line-height:1.6;padding-left:18px;">
                <li>"Is the Ghat road clear of mist/traffic today?"</li>
                <li>"What is the best time this week to visit without huge crowds?"</li>
                <li>"Where do locals eat authentic regional food nearby?"</li>
            </ul>
        </div>
    `;

    callLocalModal.classList.add("active");
};

// Open call for specific destination
window.openCallForDestination = function(destId) {
    const contact = localCallContacts.find(c => c.destId === destId) || localCallContacts[0];
    openCallModal(contact.id);
};

// 3. OPEN DESTINATION MODAL
window.openDestinationModal = function(destId) {
    const dest = destinationsData.find(d => d.id === destId);
    if (!dest || !destinationModal) return;

    const modalBody = destinationModal.querySelector(".modal-body");
    const matchingGuides = guidesData.filter(g => g.destinationId === destId);
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
            <button class="modal-tab-btn active" onclick="switchModalTab(event, 'tab-overview')">Live Status & Overview</button>
            <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-guides')">Local Guides (${dest.guideCount})</button>
            <button class="modal-tab-btn" onclick="switchModalTab(event, 'tab-plan')">Highlights & Secrets</button>
        </div>

        <div id="tab-overview" class="modal-tab-content active">
            <div style="background:#ecfdf5;border:1px solid #a7f3d0;padding:12px 16px;border-radius:var(--radius-sm);margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;">
                <div>
                    <strong style="color:#047857;font-size:14px;display:block;">⚡ Live Condition: ${dest.liveStatus}</strong>
                    <span style="font-size:12.5px;color:#065f46;">${dest.spotterCount} verified spotters active right now</span>
                </div>
                <button class="primary-btn" style="padding:6px 12px;font-size:12px;background:#059669;" onclick="openRequestPhotoModal('${dest.id}')">Request Live Photo 📸</button>
            </div>

            <p style="font-size:15.5px;color:#334155;line-height:1.65;margin-bottom:20px;">${dest.description}</p>
            
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

            <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap;">
                <button class="primary-btn" onclick="openRequestPhotoModal('${dest.id}')">📸 Request Live Ground Photo</button>
                <button class="secondary-btn" style="color:var(--dark);border-color:var(--border-color);" onclick="openCallForDestination('${dest.id}')">📞 Call a Local Spotter</button>
            </div>
        </div>

        <div id="tab-guides" class="modal-tab-content">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                <h4 style="font-size:17px;">Available Verified Guides in ${dest.name}</h4>
                <span style="font-size:13px;color:var(--text-muted);">${dest.guideCount} locals available</span>
            </div>
            <div class="modal-guides-list">${guidesHtml}</div>
        </div>

        <div id="tab-plan" class="modal-tab-content">
            <h4 style="font-size:17px;margin-bottom:12px;">Top Must-Do Highlights</h4>
            <ul style="list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px;">
                ${dest.popularHighlights.map(h => `<li style="padding:10px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;font-size:13.5px;">✨ ${h}</li>`).join("")}
            </ul>

            <div class="detail-card-small">
                <strong>🍲 Authentic Food Specialties in ${dest.name}</strong>
                <p style="margin-top:6px;">${dest.topFood}. Ask your local guide for non-commercial heritage eateries!</p>
            </div>
        </div>
    `;

    destinationModal.classList.add("active");
};

// Switch tabs inside modal
window.switchModalTab = function(e, tabId) {
    const parent = e.target.closest(".modal-body");
    parent.querySelectorAll(".modal-tab-btn").forEach(btn => btn.classList.remove("active"));
    parent.querySelectorAll(".modal-tab-content").forEach(content => content.classList.remove("active"));

    e.target.classList.add("active");
    const target = parent.querySelector(`#${tabId}`);
    if (target) target.classList.add("active");
};

// 4. OPEN GUIDE PROFILE MODAL
window.openGuideProfileModal = function(guideId) {
    const guide = guidesData.find(g => g.id === guideId);
    if (!guide || !guideProfileModal) return;

    const modalBody = guideProfileModal.querySelector(".modal-body");
    const toursList = guide.tours.map(t => `<li style="padding:8px 12px;background:#f8fafc;border-radius:6px;margin-bottom:6px;border:1px solid #e2e8f0;font-size:14px;">🧭 ${t}</li>`).join("");

    modalBody.innerHTML = `
        <div style="display:flex;gap:20px;align-items:center;margin-bottom:20px;flex-wrap:wrap;">
            <img src="${guide.avatar}" alt="${guide.name}" style="width:85px;height:85px;border-radius:50%;object-fit:cover;border:4px solid var(--primary-light);">
            <div>
                <span class="modal-subtitle">📍 ${guide.location}</span>
                <h2 style="font-size:26px;font-weight:900;color:var(--dark);margin:4px 0;">${guide.name} <span class="verified-badge">✓</span></h2>
                <div style="display:flex;gap:12px;align-items:center;font-size:13.5px;color:var(--text-muted);">
                    <span style="color:#f59e0b;font-weight:700;">★★★★★ ${guide.rating} (${guide.reviewsCount} reviews)</span>
                    <span>• Exp: ${guide.experience}</span>
                    <span style="color:var(--secondary);font-weight:700;">🟢 Available</span>
                </div>
            </div>
        </div>

        <p style="font-size:15px;color:#334155;line-height:1.6;margin-bottom:20px;">${guide.bio}</p>

        <h4 style="font-size:16px;margin-bottom:10px;">Curated Tours & Trails</h4>
        <ul style="list-style:none;margin-bottom:24px;">${toursList}</ul>

        <div style="display:flex;justify-content:space-between;align-items:center;padding-top:16px;border-top:1px solid #e2e8f0;">
            <div>
                <strong style="font-size:22px;color:var(--dark);">₹${guide.priceDay}</strong>
                <span style="font-size:13px;color:var(--text-muted);"> / full day (₹${guide.priceHour}/hr)</span>
            </div>
            <button class="primary-btn" onclick="openBookGuideModal('${guide.id}')">Book ${guide.name.split(' ')[0]} Now →</button>
        </div>
    `;

    guideProfileModal.classList.add("active");
};

// 5. OPEN BOOK GUIDE MODAL
window.openBookGuideModal = function(guideId) {
    const guide = guidesData.find(g => g.id === guideId) || guidesData[0];
    if (!bookGuideModal) return;

    closeAllModals();
    const modalBody = bookGuideModal.querySelector(".modal-body");

    modalBody.innerHTML = `
        <span class="modal-subtitle">RESERVE LOCAL GUIDE</span>
        <h2 style="font-size:24px;font-weight:900;margin:4px 0 6px;">Book with ${guide.name}</h2>
        <p style="color:var(--text-muted);font-size:14px;margin-bottom:20px;">📍 ${guide.location} · 🗣️ ${guide.languages.join(', ')}</p>

        <form class="custom-form" onsubmit="handleBookingSubmit(event, '${guide.name}', ${guide.priceDay})">
            <div class="form-row-2">
                <div>
                    <label class="form-label">Travel Date</label>
                    <input class="form-control" type="date" id="bookDate" required>
                </div>
                <div>
                    <label class="form-label">Duration</label>
                    <select class="form-control" id="bookDuration" onchange="calculateBookingTotal(${guide.priceDay}, ${guide.priceHour})">
                        <option value="1day">Full Day (₹${guide.priceDay})</option>
                        <option value="halfday">Half Day 4 hrs (₹${guide.priceHour * 4})</option>
                        <option value="2days">2 Days (₹${guide.priceDay * 2})</option>
                    </select>
                </div>
            </div>

            <div class="form-row-2">
                <div>
                    <label class="form-label">Your Name</label>
                    <input class="form-control" type="text" id="bookName" placeholder="e.g. Anand Sharma" required>
                </div>
                <div>
                    <label class="form-label">WhatsApp Number</label>
                    <input class="form-control" type="tel" id="bookPhone" placeholder="+91 98765 43210" required>
                </div>
            </div>

            <div style="background:#f8fafc;padding:14px;border-radius:var(--radius-sm);border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;">
                <span style="font-weight:700;color:var(--dark);">Estimated Total:</span>
                <strong style="font-size:20px;color:var(--primary);" id="bookingTotalDisplay">₹${guide.priceDay}</strong>
            </div>

            <button class="form-submit-btn" type="submit">Confirm & Connect on WhatsApp →</button>
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
};

// Handle Booking Submission
window.handleBookingSubmit = function(e, guideName, price) {
    e.preventDefault();
    const date = document.querySelector("#bookDate").value;
    closeAllModals();
    showToast(`🎉 Booking Request Sent! ${guideName} has received your request for ${date}. They will connect directly on WhatsApp.`);
};

// 6. BECOME A GUIDE / SPOTTER MODAL
window.openBecomeGuideModal = function() {
    closeAllModals();
    if (!becomeGuideModal) return;

    const modalBody = becomeGuideModal.querySelector(".modal-body");
    const districts = [...new Set(destinationsData.map(d => d.district))].sort();

    modalBody.innerHTML = `
        <span class="modal-subtitle">JOIN OUR COMMUNITY</span>
        <h2 style="font-size:26px;font-weight:900;margin:6px 0 8px;">Become a Verified Guido Spotter or Guide</h2>
        <p style="color:var(--text-muted);margin-bottom:20px;font-size:14.5px;">Earn by uploading real-time ground photos, answering local calls, or leading tours in Karnataka.</p>

        <form class="custom-form" onsubmit="handleBecomeGuideSubmit(event)">
            <div class="form-row-2">
                <div>
                    <label class="form-label">Full Name</label>
                    <input class="form-control" type="text" placeholder="e.g. Ramesh Gowda" required>
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
                    <label class="form-label">Languages Spoken</label>
                    <input class="form-control" type="text" placeholder="e.g. Kannada, English, Tulu" required>
                </div>
                <div>
                    <label class="form-label">Role You Wish to Join</label>
                    <select class="form-control">
                        <option>📸 Live Photo Spotter (Upload ground photos)</option>
                        <option>📞 Local Call Advisor</option>
                        <option>🧭 Full Guided Tour Leader</option>
                        <option>🌟 All of the above</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="form-label">Contact Email & Phone</label>
                <div class="form-row-2">
                    <input class="form-control" type="email" placeholder="email@example.com" required>
                    <input class="form-control" type="tel" placeholder="+91 Phone" required>
                </div>
            </div>

            <button class="form-submit-btn" type="submit">Submit Verification Application →</button>
        </form>
    `;

    becomeGuideModal.classList.add("active");
};

// Handle Become Guide Form Submit
window.handleBecomeGuideSubmit = function(e) {
    e.preventDefault();
    closeAllModals();
    showToast("✅ Application Submitted! Our Karnataka local onboarding team will connect within 24 hours.");
};

// Close all active modals
function closeAllModals() {
    document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
}

// =========================================================
// WISHLIST, TOAST & TRIP PLANNER
// =========================================================

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
    wishlistCountEls.forEach(el => el.textContent = wishlist.length);

    if (wishlistItemsList) {
        if (wishlist.length === 0) {
            wishlistItemsList.innerHTML = `<p style="text-align:center;color:var(--text-muted);margin-top:30px;">No saved destinations yet.<br>Click ❤️ on places you love!</p>`;
            return;
        }

        wishlistItemsList.innerHTML = wishlist.map(id => {
            const dest = destinationsData.find(d => d.id === id);
            if (!dest) return "";
            return `
                <div class="wishlist-item-card">
                    <img src="${dest.img}" alt="${dest.name}">
                    <div class="wishlist-item-info">
                        <h4>${dest.name}</h4>
                        <span>📍 ${dest.district} · ${dest.spotterCount} Spotters</span>
                    </div>
                    <button class="btn-remove-fav" onclick="toggleWishlist('${dest.id}')" title="Remove">✕</button>
                </div>
            `;
        }).join("");
    }
}

window.toggleWishlistDrawer = function() {
    if (wishlistDrawer) wishlistDrawer.classList.toggle("open");
};

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

// Custom Trip Plan Generator
window.generateCustomPlan = function(e) {
    e.preventDefault();
    const interest = document.querySelector("#planInterest").value;
    const duration = document.querySelector("#planDuration").value;
    const outputCard = document.querySelector("#plannerOutput");

    if (!outputCard) return;

    let matchedPlaces = destinationsData.filter(d => interest === "all" || d.categories.includes(interest));
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
                <div style="margin-top:10px;display:flex;gap:6px;">
                    <button class="primary-btn" style="padding:4px 8px;font-size:11px;" onclick="openRequestPhotoModal('${place.id}')">Live Photo 📸</button>
                    <button class="secondary-btn" style="padding:4px 8px;font-size:11px;color:#fff;border-color:rgba(255,255,255,0.3);" onclick="openDestinationModal('${place.id}')">Guides 🧭</button>
                </div>
            </div>
        `;
    }

    outputCard.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <div>
                <span class="eyebrow" style="background:rgba(255,255,255,0.15);color:#fff;border:none;">CURATED ITINERARY</span>
                <h3 style="font-size:24px;font-weight:900;color:#fff;margin-top:4px;">Your ${daysCount}-Day ${interest.toUpperCase()} Journey in Karnataka</h3>
            </div>
            <button class="secondary-btn" style="padding:8px 14px;font-size:13px;" onclick="showToast('📋 Itinerary saved! You can request live photos or book local spotters for each day.')">Save Itinerary</button>
        </div>
        <div class="itinerary-days-grid">${daysHtml}</div>
    `;

    outputCard.style.display = "block";
    outputCard.scrollIntoView({ behavior: "smooth" });
};

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

// =========================================================
// EVENT LISTENERS INITIALIZATION
// =========================================================

function attachDestinationCardListeners() {
    document.querySelectorAll(".btn-fav").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleWishlist(btn.dataset.id);
        });
    });
}

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

    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedCategory = btn.dataset.category;
            categoryButtons.forEach(b => b.classList.toggle("active", b === btn));
            renderDestinations();
        });
    });

    guideFilterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedGuideSpecialty = btn.dataset.specialty || "all";
            guideFilterButtons.forEach(b => b.classList.toggle("active", b === btn));
            renderGuides();
        });
    });

    document.querySelectorAll(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", closeAllModals);
    });

    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) closeAllModals();
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAllModals();
            if (wishlistDrawer) wishlistDrawer.classList.remove("open");
        }
    });

    document.querySelectorAll(".btn-become-guide").forEach(btn => {
        btn.addEventListener("click", openBecomeGuideModal);
    });
}

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
    updateCategoryCounts();
    renderLivePhotos();
    renderCallSpotters();
    renderDestinations();
    renderGuides();
    updateWishlistUI();
    initSearchAndFilters();
});
