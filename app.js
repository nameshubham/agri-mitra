// ===== Agri Mitra — Main Application =====

// ===== TRANSLATIONS =====
const translations = {
  en: {
    appName: "Agri Mitra",
    appTagline: "Smart Farmer Advisory",
    navHome: "Home",
    navCrop: "Crop AI",
    navWeather: "Weather & Soil",
    navMarket: "Market",
    navDashboard: "Dashboard",
    heroBadge: "Practical AI Agricultural Advisory",
    heroTitle: "Smart crop and market guidance built for Indian farmers.",
    heroSubtitle: "Make informed farming decisions with soil-specific crop suitability, live mandi prices, and local weather insights grounded in agricultural science.",
    btnCheckCrop: "Check Best Crop",
    btnMarket: "Live Mandi Prices",
    btnWeather: "Weather & Soil",
    statCropsCount: "Indian Crops Modeled",
    statDistrictsCount: "Districts Covered",
    statFreeOpen: "Ad-Free & Free Access",
    heroCaption: "Designed for practical farm decisions across Indian agro-climatic zones",
    trustTitle: "Grounded in Agricultural Science & Govt Portals",
    trustDesc: "Agri Mitra combines regional agronomic thresholds, verified soil test baselines, and official market records.",
    source1Title: "ICAR Agronomic Baselines",
    source1Desc: "Standard nutrient (NPK), pH, and temperature tolerance thresholds for Indian crops.",
    source2Title: "Soil Health Card Portal",
    source2Desc: "District-wise soil classification and nutrient baselines from DAC&FW.",
    source3Title: "IMD & Meteorological Data",
    source3Desc: "Real-time local temperature, humidity, and rainfall indicators via Open-Meteo & IMD.",
    source4Title: "Data.gov.in / Agmarknet",
    source4Desc: "Official mandi arrivals, modal prices, and CACP Minimum Support Prices (MSP 2025-26).",
    trustDisclaimer: "Advisory Notice: AI crop recommendations are decision-support guidelines based on regional averages. Local soil depth, micro-climates, and irrigation access vary. Always verify field observations with your local Krishi Vigyan Kendra (KVK) or block agriculture officer before making significant investments.",
    howLabel: "How It Works",
    howTitle: "Simple 3-Step Process",
    howSubtitle: "Enter your field conditions or auto-fill by district to receive practical crop guidance.",
    step1Title: "Enter Field Info",
    step1Desc: "Provide your soil type, NPK levels, or simply auto-fill with your nearest city or district.",
    step2Title: "Agronomic Analysis",
    step2Desc: "Our model cross-references your soil and weather against scientific crop growth requirements.",
    step3Title: "Actionable Guidance",
    step3Desc: "Review recommended crops, sowing window, expected yield, and calculate seed needs.",
    featLabel: "Tools for Farmers",
    featTitle: "Designed for Real Farming Decisions",
    featSubtitle: "Reliable digital tools that assist without overwhelming.",
    feat1Title: "AI Crop Recommendation",
    feat1Desc: "Calibrated crop suitability scoring tailored to your exact soil chemistry and climate conditions.",
    feat2Title: "Weather & Soil Data",
    feat2Desc: "Automatic retrieval of temperature, humidity, and rainfall baselines for 700+ Indian districts.",
    feat3Title: "Mandi Prices & Trends",
    feat3Desc: "Daily modal prices from agricultural mandis across states, with MSP benchmarks and seasonal trends.",
    feat4Title: "Farmer Dashboard",
    feat4Desc: "Save recommendations, track crop plans, and monitor regional seasonal advisories in one place.",
    feat5Title: "Voice Input Support",
    feat5Desc: "Speak your soil parameters in Hindi or English for effortless, typing-free form completion.",
    feat6Title: "Agricultural Assistant",
    feat6Desc: "Ask practical farming questions about fertilizer balancing, organic inputs, and government schemes.",
    ctaTitle: "Ready to test your farm conditions?",
    ctaSubtitle: "Enter your district name to instantly load regional soil and climate parameters.",
    btnGetStarted: "Start Crop Recommendation",
    footerAbout: "Practical, science-grounded agricultural advisory helping Indian farmers make confident crop choices and stay informed on real market prices.",
    footerQuickLinks: "Quick Links",
    footerGovtPortals: "Key Agricultural Portals",
    footerHelpline: "Farmer Support",
    cropPageBadge: "Precision Crop Advisory",
    cropPageTitle: "Crop Recommendation",
    cropPageSubtitle: "Provide your field's soil nutrient values and weather parameters to evaluate the best-suited crops.",
    cropFormTitle: "Field & Soil Assessment",
    cropFormSubtext: "Complete the three sections below or use Auto-Fill to populate regional baselines.",
    voiceHint: "Tap mic to speak",
    autofillLabel: "Fast Auto-Fill by City or District",
    autofillNote: "Fills district soil baselines & live weather",
    autofillPlaceholder: "e.g. Jaipur, Karnal, Pune, Patna, Solapur, Indore, Nagpur...",
    btnAutoFill: "Auto-Fill Data",
    autofillSourceHint: "Sourced from Soil Health Card Portal & Open-Meteo live weather",
    sec1Title: "Location & Soil Type",
    sec2Title: "Soil Nutrients (NPK) & Reaction (pH)",
    sec3Title: "Climate & Water Conditions",
    badgeRequired: "Required",
    badgeAutoFillable: "Auto-fillable",
    labelLocation: "📍 State / Region *",
    hintLocation: "Used for regional agro-climatic zone calibration",
    labelSoilType: "🪨 Soil Classification *",
    hintSoilType: "Soil texture determines root aeration and moisture retention",
    labelN: "🧪 Nitrogen (N) * (kg/ha)",
    hintN: "Promotes green leafy vegetative growth. Normal: 50–150 kg/ha",
    labelP: "🧪 Phosphorus (P) * (kg/ha)",
    hintP: "Stimulates root development and flowering. Normal: 20–60 kg/ha",
    labelK: "🧪 Potassium (K) * (kg/ha)",
    hintK: "Increases disease resistance & drought tolerance. Normal: 20–50 kg/ha",
    labelPH: "⚗️ Soil pH *",
    hintPH: "Acidity/alkalinity scale. Optimal range 6.0–7.5 for most Indian crops",
    labelTemp: "🌡 Temperature * (°C)",
    hintTemp: "Average daytime temperature during crop cycle",
    labelHumidity: "💧 Humidity * (%)",
    hintHumidity: "Relative atmospheric humidity",
    labelRainfall: "🌧 Rainfall / Water * (mm)",
    hintRainfall: "Monthly rain or equivalent irrigation available",
    btnGetRec: "Get Crop Recommendation",
    submitNote: "Evaluates crop suitability against regional agronomic baselines and sowing season",
    analyzing: "Evaluating soil nutrient balances, climate parameters, and current seasonal window...",
    wdHumidity: "Humidity",
    wdWind: "Wind Speed",
    wdRainfall: "Monthly Rain",
    wdVisibility: "Visibility",
    wdFeelsLike: "Feels Like",
    wdPressure: "Pressure",
    marketLabel: "Mandi Intelligence",
    marketTitle: "Mandi Crop Prices",
    marketSubtitle: "Track official agricultural market arrivals, modal prices per quintal, and seasonal trends across India.",
    filterTitle: "Search & Filter Mandis",
    filterCrop: "Commodity / Crop",
    filterState: "State",
    filterDistrict: "District",
    filterMandi: "Market / Mandi",
    btnRefresh: "Refresh Data",
    btnReset: "Reset",
    btnApplyFilters: "Apply Filters",
    loadingMarket: "Loading price data from Agmarknet / Data.gov.in...",
    thCrop: "Crop / Commodity",
    thMandi: "Mandi & State",
    thPrice: "Price (₹/quintal)",
    thChange: "Price Change",
    thStatus: "Data Source",
    chartTitle: "Seasonal Price Trends & Benchmarks",
    chartSubtitle: "6-month price movement and MSP benchmark comparison for selected commodity",
    dashLabel: "Farm Management",
    dashTitle: "Farmer Dashboard",
    dashSubtitle: "Personalized crop records, local weather advisories, and saved recommendations.",
    statRecs: "Saved Plans",
    statCrops: "Crops Tracked",
    btnEditProfile: "Edit Profile & Region",
    btnNewRec: "New Crop Advisory",
    alertWeatherTitle: "Regional Seasonal Advisory:",
    alertWeather: "Favorable temperature conditions for rabi sowing. Ensure pre-sowing irrigation and certified seed treatment.",
    savedRecs: "Saved Crop Recommendations",
    emptySavedTitle: "No saved recommendations yet",
    noSavedRecs: "Test your field's soil and weather in Crop AI to save personalized crop advisories here.",
    btnGoCropAI: "Check Crop AI",
    cropHistory: "Crop Prediction History",
    emptyHistoryTitle: "No recent history",
    noHistory: "Your generated crop assessments will automatically appear in this activity log.",
    btnClearHistory: "Clear History",
    diseaseAlerts: "Regional Crop Health & Pest Watch",
    diseaseAlert1Title: "Late Blight Prevention Advisory",
    diseaseAlert1: "Cool temperatures and high morning humidity increase fungal blight risk. Inspect lower foliage. Consult your local Krishi Vigyan Kendra (KVK) for certified bio-control guidance before spraying chemical fungicides.",
    diseaseAlert2Title: "Stem Borer & Pod Borer Monitoring",
    diseaseAlert2: "Install pheromone traps (4–5 per acre) for early pest detection. Avoid prophylactic pesticide overuse to protect natural beneficial predators like spiders and ladybird beetles.",
    fabChatText: "Ask Agri Mitra",
    chatTitle: "Agri Mitra Assistant",
    chatOnline: "Farming Advisory • English & Hindi",
    chatWelcome: "Namaste! 🙏 I'm your Agri Mitra farming companion. Ask me any question about crops, soil nutrients, mandi rates, or agricultural schemes!",
    chatPlaceholder: "Ask a farming question...",
    editProfileTitle: "Edit Farmer Profile",
    labelName: "Farmer / Farm Name",
    labelProfileLocation: "Location / State",
    btnSave: "Save Changes",
    btnCancel: "Cancel",
    calcTitle: "Farming Calculator",
    resultBestCrop: "Best Recommended Crop",
    resultYield: "Expected Yield",
    resultSuitability: "Why Suitable",
    resultSeason: "Best Sowing Season",
    farmingTips: "Agronomic & Field Tips",
    btnSaveRec: "Save Recommendation"
  },
  hi: {
    appName: "एग्री मित्र",
    appTagline: "स्मार्ट किसान परामर्श",
    navHome: "होम",
    navCrop: "फसल AI",
    navWeather: "मौसम और मिट्टी",
    navMarket: "मंडी भाव",
    navDashboard: "डैशबोर्ड",
    heroBadge: "व्यावहारिक AI कृषि परामर्श",
    heroTitle: "भारतीय किसानों के लिए वैज्ञानिक फसल व बाज़ार मार्गदर्शन।",
    heroSubtitle: "अपनी मिट्टी और मौसम के आधार पर सटीक फसल सिफारिशें, लाइव मंडी भाव और कृषि विज्ञान आधारित परामर्श प्राप्त करें।",
    btnCheckCrop: "सर्वश्रेष्ठ फसल जानें",
    btnMarket: "लाइव मंडी भाव",
    btnWeather: "मौसम और मिट्टी",
    statCropsCount: "भारतीय फसलें शामिल",
    statDistrictsCount: "जिले कवर किए गए",
    statFreeOpen: "पूर्णतः निःशुल्क व विज्ञापन-मुक्त",
    heroCaption: "भारतीय कृषि-जलवायु क्षेत्रों के व्यावहारिक निर्णयों के लिए तैयार",
    trustTitle: "कृषि विज्ञान और सरकारी डेटा पर आधारित",
    trustDesc: "एग्री मित्र क्षेत्रीय कृषि मानकों, मृदा स्वास्थ्य कार्ड और आधिकारिक मंडी रिकॉर्ड का उपयोग करता है।",
    source1Title: "ICAR वैज्ञानिक मानक",
    source1Desc: "भारतीय फसलों के लिए पोषक तत्व (NPK), pH और तापमान सहनशीलता के मानक।",
    source2Title: "मृदा स्वास्थ्य कार्ड पोर्टल",
    source2Desc: "कृषि मंत्रालय के जिला-स्तरीय मृदा वर्गीकरण और पोषक तत्व आंकड़े।",
    source3Title: "IMD और मौसम डेटा",
    source3Desc: "Open-Meteo और IMD के माध्यम से तापमान, नमी और वर्षा के लाइव आंकड़े।",
    source4Title: "Data.gov.in / एग्मार्कनेट",
    source4Desc: "दैनिक मंडी आवक, मॉडल भाव और CACP न्यूनतम समर्थन मूल्य (MSP 2025-26)।",
    trustDisclaimer: "सलाह सूचना: AI फसल सिफारिशें वैज्ञानिक मॉडल पर आधारित निर्णय-सहायक दिशानिर्देश हैं। मिट्टी की गहराई और सिंचाई की उपलब्धता भिन्न हो सकती है। बड़े निवेश से पहले अपने स्थानीय कृषि विज्ञान केंद्र (KVK) या कृषि अधिकारी से परामर्श अवश्य लें।",
    howLabel: "कैसे काम करता है",
    howTitle: "सरल 3-चरण प्रक्रिया",
    howSubtitle: "अपने खेत की जानकारी दें या जिले से ऑटो-फिल करके व्यावहारिक मार्गदर्शन पाएं।",
    step1Title: "खेत की जानकारी दें",
    step1Desc: "मिट्टी का प्रकार, NPK स्तर दर्ज करें या अपने जिले के नाम से ऑटो-फिल करें।",
    step2Title: "कृषि-वैज्ञानिक विश्लेषण",
    step2Desc: "हमारा मॉडल आपकी मिट्टी और मौसम की तुलना वैज्ञानिक फसल आवश्यकताओं से करता है।",
    step3Title: "कार्रवाई योग्य सलाह",
    step3Desc: "सर्वोत्तम फसल, बुवाई का समय, अपेक्षित उपज देखें और बीज आवश्यकता की गणना करें।",
    featLabel: "किसानों के लिए टूल्स",
    featTitle: "वास्तविक कृषि निर्णयों के लिए निर्मित",
    featSubtitle: "विश्वसनीय डिजिटल उपकरण जो सरलता से सहायता करते हैं।",
    feat1Title: "AI फसल सिफारिश",
    feat1Desc: "आपकी मिट्टी के रसायन और मौसम के अनुकूल वैज्ञानिक फसल उपयुक्तता स्कोर।",
    feat2Title: "मौसम और मिट्टी डेटा",
    feat2Desc: "700+ भारतीय जिलों के लिए तापमान, नमी और वर्षा का स्वतः संकलन।",
    feat3Title: "मंडी भाव और रुझान",
    feat3Desc: "राज्यों की कृषि मंडियों से दैनिक भाव, MSP मानक और मौसमी रुझान।",
    feat4Title: "किसान डैशबोर्ड",
    feat4Desc: "सहेजी गई सिफारिशें, फसल योजनाएं और क्षेत्रीय मौसम अलर्ट एक जगह देखें।",
    feat5Title: "वॉइस इनपुट सुविधा",
    feat5Desc: "हिंदी या अंग्रेजी में बोलकर खेत का डेटा आसानी से भरें — टाइप करने की आवश्यकता नहीं।",
    feat6Title: "कृषि सहायक",
    feat6Desc: "उर्वरक संतुलन, जैविक खाद और सरकारी योजनाओं पर व्यावहारिक सवाल पूछें।",
    ctaTitle: "क्या आप अपने खेत की जांच के लिए तैयार हैं?",
    ctaSubtitle: "क्षेत्रीय मिट्टी और मौसम के आंकड़े तुरंत लोड करने के लिए अपने जिले का नाम लिखें।",
    btnGetStarted: "फसल सिफारिश शुरू करें",
    footerAbout: "भारतीय किसानों को सही फसल चुनने और मंडी भावों की सटीक जानकारी देने वाला व्यावहारिक कृषि मंच।",
    footerQuickLinks: "त्वरित लिंक",
    footerGovtPortals: "प्रमुख सरकारी कृषि पोर्टल",
    footerHelpline: "किसान सहायता",
    cropPageBadge: "सटीक फसल परामर्श",
    cropPageTitle: "फसल सिफारिश",
    cropPageSubtitle: "अपने खेत की मिट्टी के पोषक तत्वों और मौसम के आंकड़े दर्ज करके सर्वश्रेष्ठ फसल जानें।",
    cropFormTitle: "खेत और मिट्टी का मूल्यांकन",
    cropFormSubtext: "नीचे दिए गए तीनों खंड भरें या क्षेत्रीय डेटा के लिए ऑटो-फिल का उपयोग करें।",
    voiceHint: "बोलने के लिए माइक दबाएं",
    autofillLabel: "शहर या जिले द्वारा तेज़ ऑटो-फिल",
    autofillNote: "जिले के मृदा मानक और लाइव मौसम लोड करता है",
    autofillPlaceholder: "जैसे: जयपुर, करनाल, पुणे, पटना, सोलापुर, इंदौर...",
    btnAutoFill: "डेटा ऑटो-फिल करें",
    autofillSourceHint: "मृदा स्वास्थ्य कार्ड पोर्टल और Open-Meteo मौसम डेटा से संचालित",
    sec1Title: "स्थान और मिट्टी का प्रकार",
    sec2Title: "मिट्टी के पोषक तत्व (NPK) और pH",
    sec3Title: "जलवायु और पानी की स्थिति",
    badgeRequired: "अनिवार्य",
    badgeAutoFillable: "ऑटो-फिल योग्य",
    labelLocation: "📍 राज्य / क्षेत्र *",
    hintLocation: "कृषि-जलवायु क्षेत्र के निर्धारण के लिए आवश्यक",
    labelSoilType: "🪨 मिट्टी का वर्गीकरण *",
    hintSoilType: "मिट्टी की बनावट जड़ों की वायु और नमी प्रतिधारण तय करती है",
    labelN: "🧪 नाइट्रोजन (N) * (kg/ha)",
    hintN: "हरी पत्तियों और वानस्पतिक वृद्धि को बढ़ावा देता है। सामान्य: 50–150 kg/ha",
    labelP: "🧪 फॉस्फोरस (P) * (kg/ha)",
    hintP: "जड़ों के विकास और फूल आने में सहायक। सामान्य: 20–60 kg/ha",
    labelK: "🧪 पोटैशियम (K) * (kg/ha)",
    hintK: "रोग प्रतिरोधक क्षमता और सूखा सहनशीलता बढ़ाता है। सामान्य: 20–50 kg/ha",
    labelPH: "⚗️ मिट्टी pH *",
    hintPH: "अम्लता/क्षारीयता पैमाना। अधिकांश फसलों के लिए 6.0–7.5 सर्वोत्तम है",
    labelTemp: "🌡 तापमान * (°C)",
    hintTemp: "फसल चक्र के दौरान अपेक्षित औसत दिन का तापमान",
    labelHumidity: "💧 नमी / आर्द्रता * (%)",
    hintHumidity: "वायुमंडलीय सापेक्ष आर्द्रता",
    labelRainfall: "🌧 वर्षा / सिंचाई जल * (mm)",
    hintRainfall: "मासिक वर्षा या उपलब्ध नहरी/बोरवेल सिंचाई पानी",
    btnGetRec: "फसल सिफारिश प्राप्त करें",
    submitNote: "क्षेत्रीय कृषि मानकों और बुवाई मौसम के अनुसार फसल का मिलान करता है",
    analyzing: "मिट्टी के पोषक तत्वों, जलवायु और बुवाई मौसम का वैज्ञानिक विश्लेषण किया जा रहा है...",
    wdHumidity: "नमी",
    wdWind: "हवा की गति",
    wdRainfall: "मासिक वर्षा",
    wdVisibility: "दृश्यता",
    wdFeelsLike: "महसूस होता है",
    wdPressure: "वायु दबाव",
    marketLabel: "मंडी समाचार व भाव",
    marketTitle: "मंडी फसल भाव",
    marketSubtitle: "भारतीय कृषि मंडियों से दैनिक आवक, मॉडल भाव (₹/क्विंटल) और मौसमी रुझान देखें।",
    filterTitle: "मंडियां खोजें और फ़िल्टर करें",
    filterCrop: "फसल / वस्तु",
    filterState: "राज्य",
    filterDistrict: "जिला",
    filterMandi: "मंडी / बाज़ार",
    btnRefresh: "डेटा रीफ्रेश करें",
    btnReset: "रीसेट",
    btnApplyFilters: "फ़िल्टर लागू करें",
    loadingMarket: "Agmarknet / Data.gov.in से मंडी भाव लोड हो रहे हैं...",
    thCrop: "फसल",
    thMandi: "मंडी व राज्य",
    thPrice: "भाव (₹/क्विंटल)",
    thChange: "भाव बदलाव",
    thStatus: "डेटा स्रोत",
    chartTitle: "मौसमी भाव रुझान और MSP मानक",
    chartSubtitle: "चयनित फसल का 6-महीने का भाव चक्र और सरकारी न्यूनतम समर्थन मूल्य (MSP)",
    dashLabel: "खेत प्रबंधन",
    dashTitle: "किसान डैशबोर्ड",
    dashSubtitle: "आपके सहेजे गए फसल रिकॉर्ड, क्षेत्रीय मौसम और कृषि परामर्श।",
    statRecs: "सहेजी गई योजनाएं",
    statCrops: "ट्रैक की गई फसलें",
    btnEditProfile: "प्रोफ़ाइल व क्षेत्र बदलें",
    btnNewRec: "नई फसल सिफारिश",
    alertWeatherTitle: "क्षेत्रीय मौसमी सलाह:",
    alertWeather: "रबी बुवाई के लिए तापमान अनुकूल है। बुवाई-पूर्व पलेवा करें और प्रमाणित बीज का उपचार करें।",
    savedRecs: "सहेजी गई फसल सिफारिशें",
    emptySavedTitle: "अभी तक कोई सिफारिश नहीं सहेजी गई",
    noSavedRecs: "अपने खेत की मिट्टी और मौसम की जांच करके फसल सिफारिश को यहाँ सहेजें।",
    btnGoCropAI: "फसल AI पर जाएं",
    cropHistory: "फसल विश्लेषण इतिहास",
    emptyHistoryTitle: "कोई हालिया इतिहास नहीं",
    noHistory: "आपके द्वारा की गई फसल सिफारिशें यहाँ अपने आप दिखाई देंगी।",
    btnClearHistory: "इतिहास साफ़ करें",
    diseaseAlerts: "क्षेत्रीय फसल स्वास्थ्य व कीट निगरानी",
    diseaseAlert1Title: "लेट ब्लाइट (झुलसा रोग) रोकथाम सलाह",
    diseaseAlert1: "ठंडे तापमान और सुबह की अधिक नमी से झुलसा रोग का खतरा बढ़ता है। निचली पत्तियों की जांच करें। रासायनिक छिड़काव से पहले जैविक उपचार के लिए KVK से सलाह लें।",
    diseaseAlert2Title: "तना छेदक और फली छेदक कीट निगरानी",
    diseaseAlert2: "शुरुआती कीट निगरानी के लिए फेरोमोन ट्रैप (4–5 प्रति एकड़) लगाएं। लाभकारी कीटों (मकड़ी, लेडीबर्ड) की सुरक्षा के लिए अंधाधुंध कीटनाशक न डालें।",
    fabChatText: "एग्री मित्र से पूछें",
    chatTitle: "एग्री मित्र सहायक",
    chatOnline: "कृषि परामर्श • हिंदी और अंग्रेजी",
    chatWelcome: "नमस्ते किसान भाई! 🙏 मैं आपका एग्री मित्र सहायक हूँ। फसल, खाद संतुलन, मंडी भाव या सरकारी योजनाओं के बारे में कुछ भी पूछें!",
    chatPlaceholder: "खेती से जुड़ा सवाल पूछें...",
    editProfileTitle: "किसान प्रोफ़ाइल संपादित करें",
    labelName: "किसान का नाम",
    labelProfileLocation: "स्थान / राज्य",
    btnSave: "बदलाव सहेजें",
    btnCancel: "रद्द करें",
    calcTitle: "खेती कैलकुलेटर",
    resultBestCrop: "सर्वोत्तम अनुशंसित फसल",
    resultYield: "अपेक्षित उपज",
    resultSuitability: "क्यों उपयुक्त है",
    resultSeason: "बुवाई का सही मौसम",
    farmingTips: "खेती के वैज्ञानिक सुझाव",
    btnSaveRec: "सिफारिश सहेजें"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  ['langEN', 'mlangEN'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', lang === 'en');
  });
  ['langHI', 'mlangHI'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', lang === 'hi');
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
  });
  localStorage.setItem('agriLang', lang);
}

// ===== DARK MODE =====
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark') || html.getAttribute('data-theme') === 'dark';
  if (isDark) {
    html.classList.remove('dark');
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('agriTheme', 'light');
  } else {
    html.classList.add('dark');
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('agriTheme', 'dark');
  }
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
  ['darkToggle', 'mDarkToggle'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.textContent = isDark ? '🌙' : '☀️';
  });
}

// Load saved theme
(function () {
  const saved = localStorage.getItem('agriTheme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    setTimeout(() => {
      ['darkToggle', 'mDarkToggle'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.textContent = '☀️';
      });
    }, 0);
  }
  const savedLang = localStorage.getItem('agriLang');
  if (savedLang) {
    setTimeout(() => setLanguage(savedLang), 0);
  }
})();

// ===== SOIL HEALTH ADVISOR =====
function analyzeSoilHealth(n, p, k, ph) {
  const issues = [];
  const tips = [];

  // Nitrogen
  if (n < 50) {
    issues.push('⚠️ Low Nitrogen (N: ' + n + ')');
    tips.push('🌿 <b>Organic:</b> Add green manure (dhaincha/sunhemp), apply vermicompost (2-3 tonnes/acre), or use neem cake');
    tips.push('🧪 <b>Fertilizer:</b> Apply Urea (46% N) at 50-80 kg/acre, or DAP for combined N+P boost');
  } else if (n > 150) {
    issues.push('⚠️ Excess Nitrogen (N: ' + n + ')');
    tips.push('🌿 <b>Fix:</b> Reduce nitrogen fertilizer. Grow legumes (moong, urad) to naturally balance. Avoid excessive Urea');
  }

  // Phosphorus
  if (p < 20) {
    issues.push('⚠️ Low Phosphorus (P: ' + p + ')');
    tips.push('🌿 <b>Organic:</b> Apply bone meal or rock phosphate. Add well-decomposed FYM (5 tonnes/acre)');
    tips.push('🧪 <b>Fertilizer:</b> Use SSP (Single Super Phosphate) 100 kg/acre or DAP 50 kg/acre');
  }

  // Potassium
  if (k < 30) {
    issues.push('⚠️ Low Potassium (K: ' + k + ')');
    tips.push('🌿 <b>Organic:</b> Apply wood ash (5-10 kg/acre), banana stem compost, or coconut husk ash');
    tips.push('🧪 <b>Fertilizer:</b> Use MOP (Muriate of Potash) 40-60 kg/acre');
  }

  // pH
  if (ph < 5.5) {
    issues.push('⚠️ Acidic Soil (pH: ' + ph + ')');
    tips.push('🌿 <b>Organic:</b> Apply lime (100-200 kg/acre) or dolomite. Add wood ash to raise pH naturally');
    tips.push('🧪 <b>Tip:</b> Avoid ammonium-based fertilizers which increase acidity');
  } else if (ph > 8.0) {
    issues.push('⚠️ Alkaline Soil (pH: ' + ph + ')');
    tips.push('🌿 <b>Organic:</b> Add gypsum (100-200 kg/acre), or compost with sulphur. Green manure helps too');
    tips.push('🧪 <b>Tip:</b> Use ammonium sulphate fertilizer to gradually lower pH');
  }

  return { issues, tips, healthy: issues.length === 0 };
}

// ===== NAVIGATION =====
function showPage(page) {
  if (page === 'crop-ai' || page === 'crop') page = 'recommend';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
  }
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  // Update mobile bottom nav items
  document.querySelectorAll('.mobile-bottom-nav .mobile-nav-item').forEach(item => {
    const p = item.getAttribute('data-page');
    const isCurrent = (p === page) || (p === 'recommend' && (page === 'crop-ai' || page === 'crop'));
    item.classList.toggle('active', isCurrent);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
  if (page === 'market') initMarketPage();
  if (page === 'dashboard') loadDashboard();
}

function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  if (hamburger) hamburger.classList.toggle('open');
  if (navLinks) navLinks.classList.toggle('open');
  const isOpen = navLinks && navLinks.classList.contains('open');
  if (overlay) overlay.classList.toggle('active', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
}

function closeMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  if (hamburger) hamburger.classList.remove('open');
  if (navLinks) navLinks.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  document.body.classList.remove('menu-open');
}

// Close mobile menu when overlay is tapped
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('navOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Nav link click handlers
document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
  a.addEventListener('click', e => { e.preventDefault(); showPage(a.dataset.page); });
});

// === Mobile-friendly modal close handlers ===
// ESC key closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    // Close farming modal
    const farmModal = document.getElementById('farmingModal');
    if (farmModal && farmModal.style.display !== 'none') {
      closeFarmingModal();
    }
    // Close profile modal
    const profModal = document.getElementById('profileModal');
    if (profModal && profModal.style.display !== 'none') {
      closeProfileModal();
    }
    // Close chatbot
    const chatWin = document.getElementById('chatWindow');
    if (chatWin && chatWin.classList.contains('open')) {
      chatWin.classList.remove('open');
    }
    // Close mobile menu
    closeMenu();
  }
});

// Close modals when clicking on the backdrop overlay
document.addEventListener('click', e => {
  // Farming modal — click on backdrop closes
  const farmModal = document.getElementById('farmingModal');
  if (farmModal && e.target === farmModal) {
    closeFarmingModal();
  }
  // Profile modal — click on backdrop closes
  const profModal = document.getElementById('profileModal');
  if (profModal && e.target === profModal) {
    closeProfileModal();
  }
});


// ===== CROP RECOMMENDATION AI MODEL =====
const cropDatabase = {
  rice: {
    emoji: '🌾', yield: '4-6 tonnes/hectare', season: 'Kharif (June-November)',
    reason: 'High humidity and rainfall with moderate temperature create ideal paddy conditions.',
    tips: ['Maintain 5cm water level in fields during growth phase', 'Use SRI method for better yield', 'Apply urea in 3 split doses', 'Harvest when 80% grains turn golden']
  },
  wheat: {
    emoji: '🌾', yield: '3-5 tonnes/hectare', season: 'Rabi (November-March)',
    reason: 'Cool temperatures and moderate moisture with good NPK balance suit wheat perfectly.',
    tips: ['Sow seeds in rows with 20cm spacing', 'First irrigation 21 days after sowing', 'Apply 2nd dose of nitrogen after 1st irrigation', 'Harvest when leaves turn yellow and grains are hard']
  },
  maize: {
    emoji: '🌽', yield: '5-8 tonnes/hectare', season: 'Kharif & Rabi',
    reason: 'Well-drained soil with warm temperature and moderate rainfall supports maize growth.',
    tips: ['Plant seeds 5cm deep with 60cm row spacing', 'Earthing up after 30 days improves root support', 'Apply zinc sulphate if deficient', 'Harvest when husks turn brown and dry']
  },
  cotton: {
    emoji: '🏵️', yield: '1.5-2.5 tonnes/hectare', season: 'Kharif (April-October)',
    reason: 'Black soil with warm climate and moderate rainfall is ideal for cotton cultivation.',
    tips: ['Use Bt cotton varieties for pest resistance', 'Maintain proper spacing of 90x60cm', 'Remove early squares to promote vegetative growth', 'Pick cotton bolls as they open fully']
  },
  sugarcane: {
    emoji: '🌿', yield: '70-100 tonnes/hectare', season: 'Year-round (plant Oct-March)',
    reason: 'Rich alluvial soil with high temperature and adequate water supply favors sugarcane.',
    tips: ['Use 2-3 budded setts for planting', 'Apply farmyard manure before planting', 'Earthing up twice during growth', 'Harvest at 10-12 months for best sugar content']
  },
  jute: {
    emoji: '🧵', yield: '2-3 tonnes/hectare', season: 'Kharif (March-July)',
    reason: 'High humidity, warm temperature and well-distributed rainfall support jute fiber growth.',
    tips: ['Sow seeds during March-April', 'Thin plants to maintain proper spacing', 'Harvest at flowering stage for best fiber quality', 'Ret in clean, slow-moving water']
  },
  coffee: {
    emoji: '☕', yield: '1-2 tonnes/hectare', season: 'November-February (harvest)',
    reason: 'Moderate temperature with good rainfall and acidic soil pH creates ideal coffee conditions.',
    tips: ['Grow shade trees to protect plants', 'Prune annually for better yield', 'Harvest only red, ripe cherries', 'Dry process or wet process based on variety']
  },
  coconut: {
    emoji: '🥥', yield: '80-100 nuts/tree/year', season: 'Year-round harvest',
    reason: 'Tropical climate with high humidity and sandy loam soil suits coconut palms.',
    tips: ['Plant in pits 1m x 1m x 1m', 'Apply organic manure in basins', 'Regular irrigation during summer', 'Harvest every 45 days when nuts mature']
  },
  apple: {
    emoji: '🍎', yield: '10-15 tonnes/hectare', season: 'August-October (harvest)',
    reason: 'Cool temperature with moderate humidity and well-drained soil supports apple orchards.',
    tips: ['Plant grafted saplings in winter', 'Prune during dormancy for shape', 'Apply calcium-based sprays to prevent diseases', 'Harvest when fruit detaches easily with a twist']
  },
  mango: {
    emoji: '🥭', yield: '8-12 tonnes/hectare', season: 'April-July (harvest)',
    reason: 'Warm tropical climate with seasonal rainfall and deep soil is perfect for mangoes.',
    tips: ['Use grafted plants for early fruiting', 'Avoid excessive watering during flowering', 'Apply potash before flowering for better fruit set', 'Harvest when shoulders develop and aroma increases']
  },
  banana: {
    emoji: '🍌', yield: '30-40 tonnes/hectare', season: 'Year-round',
    reason: 'Rich loamy soil with high humidity and warm temperature supports banana cultivation.',
    tips: ['Use tissue culture plants for uniform growth', 'Apply potassium-rich fertilizer monthly', 'Support bunch with props to prevent falling', 'Harvest when fingers start rounding']
  },
  grapes: {
    emoji: '🍇', yield: '20-25 tonnes/hectare', season: 'February-May (harvest)',
    reason: 'Hot dry climate with well-drained soil and controlled irrigation suits grape cultivation.',
    tips: ['Train vines on trellis system', 'Prune canes during dormancy', 'Apply gibberellic acid for bigger berries', 'Harvest when sugar content reaches 18-20 Brix']
  },
  watermelon: {
    emoji: '🍉', yield: '25-35 tonnes/hectare', season: 'Summer (February-June)',
    reason: 'Sandy soil with warm temperature and moderate water provides ideal watermelon conditions.',
    tips: ['Sow on raised beds for drainage', 'Pollination is crucial — maintain bee activity', 'Apply mulch to conserve moisture', 'Harvest when tendril near fruit dries up']
  },
  muskmelon: {
    emoji: '🍈', yield: '15-20 tonnes/hectare', season: 'Summer (March-June)',
    reason: 'Sandy loam soil with warm temperature and low humidity suit muskmelon growth.',
    tips: ['Sow pre-soaked seeds on ridges', 'Pinch growing tips after 5th leaf', 'Reduce irrigation near maturity for sweetness', 'Harvest when fruit slips from vine with gentle pull']
  },
  orange: {
    emoji: '🍊', yield: '10-15 tonnes/hectare', season: 'October-February (harvest)',
    reason: 'Subtropical climate with moderate temperature and well-drained soil suits citrus farming.',
    tips: ['Plant in well-prepared pits with compost', 'Apply micronutrients like zinc and manganese', 'Irrigate regularly during fruit development', 'Harvest when color changes from green to orange']
  },
  papaya: {
    emoji: '🫐', yield: '40-60 tonnes/hectare', season: 'Year-round fruiting',
    reason: 'Warm climate with rich soil and good drainage supports fast-growing papaya plants.',
    tips: ['Use Taiwan or Pusa varieties for better yield', 'Apply neem cake to prevent nematodes', 'Water regularly but avoid waterlogging', 'Harvest when fruit shows yellow streaks']
  },
  chickpea: {
    emoji: '🫘', yield: '1-2 tonnes/hectare', season: 'Rabi (October-March)',
    reason: 'Cool dry weather with moderate soil nutrients and low rainfall ideal for pulses.',
    tips: ['Treat seeds with Rhizobium culture', 'Sow in rows 30cm apart', 'Irrigate only at critical flowering stage', 'Harvest when pods turn brown and dry']
  },
  lentil: {
    emoji: '🫘', yield: '1-1.5 tonnes/hectare', season: 'Rabi (October-March)',
    reason: 'Cool temperatures with residual soil moisture and loamy texture suit lentil cultivation.',
    tips: ['Sow seeds 3-4 cm deep', 'One light irrigation at pod formation if dry', 'Apply phosphorus-based fertilizer at sowing', 'Harvest when lower leaves drop and pods brown']
  },
  kidneybeans: {
    emoji: '🫘', yield: '1.5-2 tonnes/hectare', season: 'Kharif (June-October)',
    reason: 'Well-drained loamy soil with moderate temperature and rainfall supports kidney beans.',
    tips: ['Sow on ridges for better drainage', 'Avoid waterlogging to prevent root rot', 'Apply rhizobium inoculant to seeds', 'Harvest pods when fully mature and dry']
  },
  mothbeans: {
    emoji: '🫘', yield: '0.5-1 tonnes/hectare', season: 'Kharif (July-October)',
    reason: 'Sandy arid soil with high temperature and low rainfall suit drought-resistant moth beans.',
    tips: ['Ideal for dryland farming with minimal irrigation', 'Treat seeds with fungicide before sowing', 'Sow in rows 30cm apart', 'Harvest when pods turn dark brown']
  },
  pomegranate: {
    emoji: '🫐', yield: '15-20 tonnes/hectare', season: 'Mrig bahar (June-Feb harvest)',
    reason: 'Semi-arid climate with well-drained soil and controlled water suits pomegranate.',
    tips: ['Use Bhagwa or Ganesh variety for best results', 'Prune old wood annually', 'Apply potash for better fruit color', 'Bag fruits to protect from sunburn']
  },
  pigeonpeas: {
    emoji: '🫘', yield: '1-2 tonnes/hectare', season: 'Kharif (June-February)',
    reason: 'Deep soil with moderate rainfall and warm temperature ideal for arhar/tur dal.',
    tips: ['Intercrop with short-duration crops for income', 'Nipping at 40 days promotes branching', 'Spray neem-based pesticide for pod borer', 'Harvest when 80% pods turn brown']
  },
  soybean: {
    emoji: '🫘', yield: '2-3 tonnes/hectare', season: 'Kharif (June-October)',
    reason: 'Warm climate with well-drained loamy soil and moderate rainfall is ideal for soybean.',
    tips: ['Treat seeds with Rhizobium before sowing', 'Maintain 45cm row spacing', 'Weed control is critical in first 30 days', 'Harvest when leaves turn yellow and pods are dry']
  },
  mustard: {
    emoji: '🌼', yield: '1.5-2.5 tonnes/hectare', season: 'Rabi (October-March)',
    reason: 'Cool climate with moderate moisture and sandy loam soil suits mustard.',
    tips: ['Sow seeds early to avoid aphid attack', 'Thinning after 20 days is necessary', 'Apply sulphur for better oil content', 'Harvest when pods turn yellow']
  },
  groundnut: {
    emoji: '🥜', yield: '2-3 tonnes/hectare', season: 'Kharif & Rabi',
    reason: 'Sandy loam soil with warm climate and moderate rainfall favors pegging and pod formation.',
    tips: ['Apply gypsum at pegging stage', 'Avoid deep ploughing', 'Maintain optimum soil moisture during flowering', 'Harvest when leaves turn yellow and nuts are fully developed']
  },
  sunflower: {
    emoji: '🌻', yield: '1.5-2 tonnes/hectare', season: 'Kharif & Rabi',
    reason: 'Tolerant to various soils; prefers warm climate and well-drained soil with good sunlight.',
    tips: ['Thin plants 10-15 days after germination', 'Provide irrigation at capitulum development', 'Keep beehives for better pollination', 'Harvest when back of the head turns lemon yellow']
  },
  potato: {
    emoji: '🥔', yield: '20-30 tonnes/hectare', season: 'Rabi (October-March)',
    reason: 'Cool climate with well-drained, loose, friable soil supports good tuber development.',
    tips: ['Use disease-free certified tubers', 'Earthing up is essential at 25-30 days', 'Apply potassium for larger tubers', 'Harvest when vines dry out completely']
  },
  tomato: {
    emoji: '🍅', yield: '25-40 tonnes/hectare', season: 'Year-round',
    reason: 'Warm climate with well-drained loamy soil and moderate moisture suits tomato.',
    tips: ['Raise seedlings in nursery before transplanting', 'Stake plants to prevent soil contact', 'Apply calcium to prevent blossom end rot', 'Harvest at breaker stage for long transport']
  },
  onion: {
    emoji: '🧅', yield: '25-30 tonnes/hectare', season: 'Rabi & Kharif',
    reason: 'Cool weather during growth and warm, dry weather during maturity is perfect for onion.',
    tips: ['Transplant 6-8 weeks old seedlings', 'Keep field weed-free', 'Stop irrigation 15 days before harvest', 'Cure bulbs in shade for a few days after harvest']
  },
  garlic: {
    emoji: '🧄', yield: '10-15 tonnes/hectare', season: 'Rabi (October-March)',
    reason: 'Cool climate for vegetative growth and warm climate for bulb maturation.',
    tips: ['Plant cloves 5-8cm deep', 'Apply sulphur for better pungency', 'Frequent shallow irrigation is needed', 'Harvest when tops turn yellowish and start drying']
  },
  ginger: {
    emoji: '🫚', yield: '15-20 tonnes/hectare', season: 'Kharif (April-November)',
    reason: 'Warm and humid climate with partial shade and rich well-drained soil suits ginger.',
    tips: ['Use disease-free rhizomes for planting', 'Mulch field to conserve moisture', 'Avoid waterlogging completely', 'Harvest when leaves turn yellow and start drying']
  },
  turmeric: {
    emoji: '🪴', yield: '20-25 tonnes/hectare', season: 'Kharif (May-January)',
    reason: 'Warm, humid climate with high rainfall and well-drained loamy soil is ideal.',
    tips: ['Plant healthy mother or finger rhizomes', 'Provide thick mulching', 'Earthing up is necessary after 2 months', 'Boil and dry rhizomes properly after harvest']
  },
  tea: {
    emoji: '🍵', yield: '2-3 tonnes/hectare', season: 'Perennial',
    reason: 'Warm, humid climate with well-distributed rainfall and acidic soil favors tea.',
    tips: ['Plant shade trees to protect from direct sun', 'Regular pruning maintains bush frame', 'Apply nitrogen in split doses', 'Pluck "two leaves and a bud" for premium quality']
  },
  barley: {
    emoji: '🌾', yield: '2.5-3.5 tonnes/hectare', season: 'Rabi (October-April)',
    reason: 'Cool, dry climate with sandy to loamy soil; it is more salt-tolerant than wheat.',
    tips: ['Sow seeds in well-prepared beds', 'Requires less water than wheat', 'Apply nitrogen before tillering', 'Harvest when grain moisture is around 14%']
  },
  sorghum: {
    emoji: '🌾', yield: '1.5-2.5 tonnes/hectare', season: 'Kharif & Rabi',
    reason: 'Warm climate with low rainfall and deep soil makes sorghum a resilient crop.',
    tips: ['Treat seeds with bio-fertilizers', 'Maintain proper plant population', 'Drought tolerant but responds well to irrigation', 'Harvest when grains become hard and dry']
  },
  pearl_millet: {
    emoji: '🌾', yield: '1.5-2 tonnes/hectare', season: 'Kharif (June-October)',
    reason: 'Hot, dry climate with sandy soil and low rainfall is highly suitable for bajra.',
    tips: ['Sow seeds shallow (2-3cm deep)', 'Thin out excess plants after 15 days', 'Highly drought resistant', 'Harvest when earheads turn yellowish-brown']
  },
  sesame: {
    emoji: '🌿', yield: '0.5-1 tonnes/hectare', season: 'Kharif & Summer',
    reason: 'Warm climate with sandy loam soil and moderate rainfall suits sesame.',
    tips: ['Mix seeds with sand for uniform sowing', 'Thinning is critical for optimal yield', 'Avoid waterlogging at all stages', 'Harvest when lower leaves drop and capsules turn yellow']
  }
};

// ===== CROP SEASONALITY — Month-wise sowing/growing calendar =====
const cropSeasonality = {
  rice: { sowMonths: [6, 7], growMonths: [6, 7, 8, 9, 10, 11], type: 'Kharif' },
  wheat: { sowMonths: [10, 11], growMonths: [10, 11, 12, 1, 2, 3], type: 'Rabi' },
  maize: { sowMonths: [6, 7, 10, 11], growMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2], type: 'Kharif & Rabi' },
  cotton: { sowMonths: [4, 5], growMonths: [4, 5, 6, 7, 8, 9, 10], type: 'Kharif' },
  sugarcane: { sowMonths: [10, 11, 2, 3], growMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], type: 'Year-round' },
  jute: { sowMonths: [3, 4], growMonths: [3, 4, 5, 6, 7], type: 'Kharif' },
  coffee: { sowMonths: [6, 7], growMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2], type: 'Perennial' },
  coconut: { sowMonths: [6, 7, 8, 9], growMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], type: 'Year-round' },
  apple: { sowMonths: [1, 2], growMonths: [3, 4, 5, 6, 7, 8, 9, 10], type: 'Temperate' },
  mango: { sowMonths: [7, 8], growMonths: [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6], type: 'Perennial' },
  banana: { sowMonths: [2, 3, 6, 7], growMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], type: 'Year-round' },
  grapes: { sowMonths: [1, 2], growMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], type: 'Perennial' },
  watermelon: { sowMonths: [2, 3], growMonths: [2, 3, 4, 5, 6], type: 'Summer' },
  muskmelon: { sowMonths: [3, 4], growMonths: [3, 4, 5, 6], type: 'Summer' },
  orange: { sowMonths: [7, 8], growMonths: [7, 8, 9, 10, 11, 12, 1, 2], type: 'Perennial' },
  papaya: { sowMonths: [2, 3, 6, 7, 10], growMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], type: 'Year-round' },
  chickpea: { sowMonths: [10, 11], growMonths: [10, 11, 12, 1, 2, 3], type: 'Rabi' },
  lentil: { sowMonths: [10, 11], growMonths: [10, 11, 12, 1, 2, 3], type: 'Rabi' },
  kidneybeans: { sowMonths: [6, 7], growMonths: [6, 7, 8, 9, 10], type: 'Kharif' },
  mothbeans: { sowMonths: [7, 8], growMonths: [7, 8, 9, 10], type: 'Kharif' },
  pomegranate: { sowMonths: [2, 3, 6, 7], growMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1], type: 'Perennial' },
  pigeonpeas: { sowMonths: [6, 7], growMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2], type: 'Kharif' },
  soybean: { sowMonths: [6, 7], growMonths: [6, 7, 8, 9, 10], type: 'Kharif' },
  mustard: { sowMonths: [10, 11], growMonths: [10, 11, 12, 1, 2, 3], type: 'Rabi' },
  groundnut: { sowMonths: [6, 7, 10, 11], growMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4], type: 'Kharif & Rabi' },
  sunflower: { sowMonths: [2, 3, 6, 7, 9, 10], growMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], type: 'Year-round' },
  potato: { sowMonths: [10, 11], growMonths: [10, 11, 12, 1, 2, 3], type: 'Rabi' },
  tomato: { sowMonths: [6, 7, 10, 11, 1, 2], growMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], type: 'Year-round' },
  onion: { sowMonths: [6, 7, 10, 11], growMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5], type: 'Rabi & Kharif' },
  garlic: { sowMonths: [10, 11], growMonths: [10, 11, 12, 1, 2, 3], type: 'Rabi' },
  ginger: { sowMonths: [4, 5], growMonths: [4, 5, 6, 7, 8, 9, 10, 11], type: 'Kharif' },
  turmeric: { sowMonths: [5, 6], growMonths: [5, 6, 7, 8, 9, 10, 11, 12, 1], type: 'Kharif' },
  tea: { sowMonths: [5, 6, 9, 10], growMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], type: 'Perennial' },
  barley: { sowMonths: [10, 11], growMonths: [10, 11, 12, 1, 2, 3, 4], type: 'Rabi' },
  sorghum: { sowMonths: [6, 7, 10, 11], growMonths: [6, 7, 8, 9, 10, 11, 12, 1, 2], type: 'Kharif & Rabi' },
  pearl_millet: { sowMonths: [6, 7], growMonths: [6, 7, 8, 9, 10], type: 'Kharif' },
  sesame: { sowMonths: [6, 7, 2, 3], growMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10], type: 'Kharif & Summer' }
};

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthNamesHi = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर'];

// Returns how well each crop matches the given soil/weather + current month
function scoreAllCrops(N, P, K, temp, humidity, ph, rainfall) {
  const currentMonth = new Date().getMonth() + 1; // 1-12
  const scores = [];

  for (const [name, crop] of Object.entries(cropDatabase)) {
    let score = 0;
    const s = cropSeasonality[name];

    // --- Soil & climate matching (max ~60 pts) ---
    // Temperature fit
    const idealTemps = {
      rice: [25, 35], wheat: [12, 25], maize: [20, 32], cotton: [25, 35], sugarcane: [25, 38],
      jute: [27, 36], coffee: [15, 28], coconut: [25, 34], apple: [10, 22], mango: [24, 35],
      banana: [25, 35], grapes: [25, 35], watermelon: [28, 38], muskmelon: [25, 35],
      orange: [18, 30], papaya: [25, 35], chickpea: [15, 25], lentil: [12, 22],
      kidneybeans: [15, 27], mothbeans: [28, 38], pomegranate: [22, 35], pigeonpeas: [20, 32],
      soybean: [20, 30], mustard: [10, 25], groundnut: [25, 35], sunflower: [20, 30],
      potato: [15, 25], tomato: [20, 30], onion: [15, 25], garlic: [12, 24],
      ginger: [25, 30], turmeric: [20, 35], tea: [20, 30], barley: [12, 25],
      sorghum: [25, 35], pearl_millet: [28, 38], sesame: [25, 35]
    };
    const [tMin, tMax] = idealTemps[name] || [20, 30];
    if (temp >= tMin && temp <= tMax) score += 15;
    else if (temp >= tMin - 5 && temp <= tMax + 5) score += 8;

    // Humidity fit
    const idealHum = {
      rice: [70, 95], wheat: [40, 65], maize: [50, 80], cotton: [40, 70], sugarcane: [60, 90],
      jute: [75, 95], coffee: [60, 85], coconut: [70, 90], apple: [50, 75], mango: [50, 80],
      banana: [75, 95], grapes: [30, 60], watermelon: [40, 65], muskmelon: [35, 55],
      orange: [50, 75], papaya: [60, 85], chickpea: [30, 50], lentil: [35, 60],
      kidneybeans: [50, 75], mothbeans: [25, 50], pomegranate: [30, 55], pigeonpeas: [50, 80],
      soybean: [60, 80], mustard: [40, 60], groundnut: [50, 75], sunflower: [50, 75],
      potato: [50, 70], tomato: [60, 80], onion: [50, 70], garlic: [50, 70],
      ginger: [70, 90], turmeric: [70, 90], tea: [70, 90], barley: [40, 60],
      sorghum: [40, 60], pearl_millet: [30, 50], sesame: [50, 70]
    };
    const [hMin, hMax] = idealHum[name] || [50, 80];
    if (humidity >= hMin && humidity <= hMax) score += 10;
    else if (humidity >= hMin - 10 && humidity <= hMax + 10) score += 5;

    // Rainfall fit
    const idealRain = {
      rice: [150, 300], wheat: [50, 120], maize: [60, 200], cotton: [50, 150], sugarcane: [100, 250],
      jute: [150, 300], coffee: [150, 300], coconut: [120, 250], apple: [100, 200], mango: [80, 200],
      banana: [100, 250], grapes: [20, 80], watermelon: [30, 80], muskmelon: [20, 60],
      orange: [100, 200], papaya: [100, 250], chickpea: [40, 100], lentil: [30, 80],
      kidneybeans: [80, 180], mothbeans: [20, 60], pomegranate: [30, 80], pigeonpeas: [60, 150],
      soybean: [60, 150], mustard: [30, 80], groundnut: [50, 100], sunflower: [50, 100],
      potato: [50, 100], tomato: [60, 150], onion: [30, 80], garlic: [30, 80],
      ginger: [150, 300], turmeric: [150, 250], tea: [150, 300], barley: [30, 80],
      sorghum: [40, 80], pearl_millet: [20, 60], sesame: [40, 80]
    };
    const [rMin, rMax] = idealRain[name] || [80, 200];
    if (rainfall >= rMin && rainfall <= rMax) score += 10;
    else if (rainfall >= rMin - 30 && rainfall <= rMax + 50) score += 5;

    // pH fit
    const idealPH = {
      rice: [5.5, 7.5], wheat: [6, 7.5], maize: [5.5, 7.5], cotton: [6.5, 8], sugarcane: [6, 7.5],
      jute: [5.5, 7], coffee: [4.5, 6.5], coconut: [5, 7], apple: [5.5, 7], mango: [5.5, 7.5],
      banana: [5.5, 7], grapes: [6, 7.5], watermelon: [6, 7.5], muskmelon: [6, 7.5],
      orange: [5, 7], papaya: [5.5, 7], chickpea: [6, 8], lentil: [6, 7.5],
      kidneybeans: [5.5, 7.5], mothbeans: [6.5, 8], pomegranate: [6.5, 8], pigeonpeas: [5.5, 7.5],
      soybean: [6, 7.5], mustard: [6, 7.5], groundnut: [6, 7], sunflower: [6, 7.5],
      potato: [5, 6.5], tomato: [6, 7], onion: [6, 7.5], garlic: [6, 7.5],
      ginger: [5.5, 6.5], turmeric: [5.5, 7.5], tea: [4.5, 5.5], barley: [6, 8],
      sorghum: [6, 7.5], pearl_millet: [6, 8], sesame: [5.5, 7]
    };
    const [pMin, pMax] = idealPH[name] || [5.5, 7.5];
    if (ph >= pMin && ph <= pMax) score += 10;
    else if (ph >= pMin - 0.5 && ph <= pMax + 0.5) score += 5;

    // NPK match (general boost)
    const nIdeal = { rice: 80, wheat: 100, maize: 70, cotton: 60, sugarcane: 80, jute: 50, coffee: 60, coconut: 40, apple: 50, mango: 50, banana: 100, grapes: 50, watermelon: 50, muskmelon: 40, orange: 50, papaya: 50, chickpea: 20, lentil: 20, kidneybeans: 40, mothbeans: 20, pomegranate: 30, pigeonpeas: 30, soybean: 20, mustard: 60, groundnut: 20, sunflower: 60, potato: 120, tomato: 100, onion: 100, garlic: 100, ginger: 75, turmeric: 120, tea: 100, barley: 60, sorghum: 80, pearl_millet: 60, sesame: 40 };
    const pIdeal = { rice: 40, wheat: 50, maize: 40, cotton: 30, sugarcane: 40, jute: 30, coffee: 30, coconut: 25, apple: 40, mango: 30, banana: 40, grapes: 35, watermelon: 30, muskmelon: 30, orange: 35, papaya: 35, chickpea: 60, lentil: 50, kidneybeans: 35, mothbeans: 20, pomegranate: 25, pigeonpeas: 25, soybean: 60, mustard: 40, groundnut: 50, sunflower: 40, potato: 80, tomato: 80, onion: 50, garlic: 50, ginger: 50, turmeric: 50, tea: 30, barley: 30, sorghum: 40, pearl_millet: 30, sesame: 20 };
    const kIdeal = { rice: 40, wheat: 40, maize: 40, cotton: 30, sugarcane: 50, jute: 30, coffee: 30, coconut: 35, apple: 30, mango: 30, banana: 50, grapes: 30, watermelon: 30, muskmelon: 25, orange: 30, papaya: 35, chickpea: 20, lentil: 20, kidneybeans: 30, mothbeans: 15, pomegranate: 25, pigeonpeas: 25, soybean: 40, mustard: 40, groundnut: 40, sunflower: 40, potato: 100, tomato: 80, onion: 50, garlic: 50, ginger: 50, turmeric: 50, tea: 40, barley: 30, sorghum: 40, pearl_millet: 30, sesame: 20 };
    if (Math.abs(N - (nIdeal[name] || 50)) < 30) score += 5;
    if (Math.abs(P - (pIdeal[name] || 35)) < 20) score += 5;
    if (Math.abs(K - (kIdeal[name] || 30)) < 20) score += 5;

    // --- Seasonal / month-based scoring (max 25 pts) ---
    if (s) {
      if (s.sowMonths.includes(currentMonth)) score += 25;        // Best: sowing month
      else if (s.growMonths.includes(currentMonth)) score += 15;  // Good: growing season
      else score -= 10;                                           // Penalty: off-season
    }

    scores.push({
      name,
      score,
      isSowingSeason: s ? s.sowMonths.includes(currentMonth) : false,
      isGrowingSeason: s ? s.growMonths.includes(currentMonth) : false,
      seasonType: s ? s.type : 'Unknown'
    });
  }

  scores.sort((a, b) => b.score - a.score);
  return scores;
}

// Legacy single-crop prediction kept for internal/chatbot use
function mlPredict(N, P, K, temp, humidity, ph, rainfall) {
  const ranked = scoreAllCrops(N, P, K, temp, humidity, ph, rainfall);
  return ranked[0].name;
}

// ===== WEATHER — REAL-TIME via Open-Meteo API + IMD =====

// Indian city database: lat/lon for Open-Meteo, IMD station ID for link, soil type from NBSS&LUP
const indianCities = {
  'andaman islands': { lat: 12.3818, lon: 92.8227, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Andaman and Nicobar', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'nicobar islands': { lat: 7.8347, lon: 93.5118, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Andaman and Nicobar', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'adilabad': { lat: 19.2836, lon: 78.8139, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 950 },
  'anantapur': { lat: 14.3114, lon: 77.46, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 64, avgP: 32, avgK: 37, avgPH: 7.2, avgRainfall: 1000 },
  'chittoor': { lat: 13.3306, lon: 78.928, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 950 },
  'cuddapah': { lat: 14.4891, lon: 78.6957, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 950 },
  'east godavari': { lat: 16.7828, lon: 82.2431, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 950 },
  'guntur': { lat: 15.8847, lon: 80.5864, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.9, avgRainfall: 850 },
  'hyderabad': { lat: 17.3883, lon: 78.4658, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 64, avgP: 32, avgK: 37, avgPH: 7.2, avgRainfall: 1000 },
  'karimnagar': { lat: 18.5146, lon: 79.4383, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.8, avgRainfall: 800 },
  'khammam': { lat: 17.6829, lon: 80.6703, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 900 },
  'krishna': { lat: 16.1437, lon: 81.148, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 900 },
  'kurnool': { lat: 15.4366, lon: 77.8994, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 900 },
  'mahbubnagar': { lat: 16.6389, lon: 77.9896, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.9, avgRainfall: 850 },
  'medak': { lat: 17.8888, lon: 78.1384, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.8, avgRainfall: 800 },
  'nalgonda': { lat: 17.1118, lon: 79.1704, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 950 },
  'nellore': { lat: 13.8946, lon: 80.1471, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 900 },
  'nizamabad': { lat: 18.4283, lon: 78.0748, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 64, avgP: 32, avgK: 37, avgPH: 7.2, avgRainfall: 1000 },
  'prakasam': { lat: 15.4889, lon: 80.1168, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 950 },
  'rangareddi': { lat: 17.2529, lon: 78.0805, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.8, avgRainfall: 800 },
  'srikakulam': { lat: 18.5708, lon: 84.2587, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.8, avgRainfall: 800 },
  'vishakhapatnam': { lat: 17.6467, lon: 83.01, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 64, avgP: 32, avgK: 37, avgPH: 7.2, avgRainfall: 1000 },
  'vizianagaram': { lat: 18.2829, lon: 83.4597, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 900 },
  'warangal': { lat: 18.0167, lon: 79.8735, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 950 },
  'west godavari': { lat: 16.6317, lon: 81.459, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 950 },
  'changlang': { lat: 27.36, lon: 96.3747, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 89, avgP: 42, avgK: 44, avgPH: 5.7, avgRainfall: 3100 },
  'east kameng': { lat: 27.3708, lon: 93.047, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 83, avgP: 39, avgK: 41, avgPH: 5.4, avgRainfall: 2950 },
  'east siang': { lat: 28.1526, lon: 95.0659, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 81, avgP: 38, avgK: 40, avgPH: 5.3, avgRainfall: 2900 },
  'kurung kumey': { lat: 28.0478, lon: 93.2458, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 85, avgP: 40, avgK: 42, avgPH: 5.5, avgRainfall: 3000 },
  'lohit': { lat: 27.9463, lon: 96.5954, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 81, avgP: 38, avgK: 40, avgPH: 5.3, avgRainfall: 2900 },
  'lower dibang valley': { lat: 28.3257, lon: 95.7636, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 89, avgP: 42, avgK: 44, avgPH: 5.7, avgRainfall: 3100 },
  'lower subansiri': { lat: 27.7081, lon: 93.9603, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 81, avgP: 38, avgK: 40, avgPH: 5.3, avgRainfall: 2900 },
  'papum pare': { lat: 27.2727, lon: 93.545, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 81, avgP: 38, avgK: 40, avgPH: 5.3, avgRainfall: 2900 },
  'tawang': { lat: 27.6802, lon: 91.8227, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 83, avgP: 39, avgK: 41, avgPH: 5.4, avgRainfall: 2950 },
  'tirap': { lat: 26.9431, lon: 95.414, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 81, avgP: 38, avgK: 40, avgPH: 5.3, avgRainfall: 2900 },
  'upper dibang valley': { lat: 29.0189, lon: 95.9875, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 89, avgP: 42, avgK: 44, avgPH: 5.7, avgRainfall: 3100 },
  'upper siang': { lat: 28.8297, lon: 95.0023, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 83, avgP: 39, avgK: 41, avgPH: 5.4, avgRainfall: 2950 },
  'upper subansiri': { lat: 28.2763, lon: 93.9, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 81, avgP: 38, avgK: 40, avgPH: 5.3, avgRainfall: 2900 },
  'west kameng': { lat: 27.4639, lon: 92.65, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 83, avgP: 39, avgK: 41, avgPH: 5.4, avgRainfall: 2950 },
  'west siang': { lat: 28.1047, lon: 94.5358, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Arunachal Pradesh', avgN: 81, avgP: 38, avgK: 40, avgPH: 5.3, avgRainfall: 2900 },
  'barpeta': { lat: 26.427, lon: 90.979, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 80, avgP: 42, avgK: 45, avgPH: 5.4, avgRainfall: 2500 },
  'bongaigaon': { lat: 26.4491, lon: 90.6726, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 76, avgP: 40, avgK: 43, avgPH: 5.2, avgRainfall: 2400 },
  'cachar': { lat: 24.8152, lon: 92.8692, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 41, avgK: 44, avgPH: 5.3, avgRainfall: 2450 },
  'darrang': { lat: 26.5838, lon: 92.0407, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 80, avgP: 42, avgK: 45, avgPH: 5.4, avgRainfall: 2500 },
  'dhemaji': { lat: 27.5859, lon: 94.711, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 80, avgP: 42, avgK: 45, avgPH: 5.4, avgRainfall: 2500 },
  'dhuburi': { lat: 26.0457, lon: 89.9849, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 80, avgP: 42, avgK: 45, avgPH: 5.4, avgRainfall: 2500 },
  'dibrugarh': { lat: 27.3053, lon: 95.0994, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 84, avgP: 44, avgK: 47, avgPH: 5.6, avgRainfall: 2600 },
  'goalpara': { lat: 26.0167, lon: 90.5985, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 43, avgK: 46, avgPH: 5.5, avgRainfall: 2550 },
  'golaghat': { lat: 26.3765, lon: 93.8257, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 43, avgK: 46, avgPH: 5.5, avgRainfall: 2550 },
  'hailakandi': { lat: 24.4573, lon: 92.5911, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 76, avgP: 40, avgK: 43, avgPH: 5.2, avgRainfall: 2400 },
  'jorhat': { lat: 26.7616, lon: 94.3014, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 41, avgK: 44, avgPH: 5.3, avgRainfall: 2450 },
  'kamrup': { lat: 26.1708, lon: 91.5881, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 41, avgK: 44, avgPH: 5.3, avgRainfall: 2450 },
  'karbi anglong': { lat: 26.0893, lon: 93.1155, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 43, avgK: 46, avgPH: 5.5, avgRainfall: 2550 },
  'karimganj': { lat: 24.6961, lon: 92.3673, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 84, avgP: 44, avgK: 47, avgPH: 5.6, avgRainfall: 2600 },
  'kokrajhar': { lat: 26.4964, lon: 90.1392, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 84, avgP: 44, avgK: 47, avgPH: 5.6, avgRainfall: 2600 },
  'lakhimpur': { lat: 27.1401, lon: 94.0771, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 84, avgP: 44, avgK: 47, avgPH: 5.6, avgRainfall: 2600 },
  'marigaon': { lat: 26.2452, lon: 92.2186, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 43, avgK: 46, avgPH: 5.5, avgRainfall: 2550 },
  'nagaon': { lat: 26.2643, lon: 92.9302, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 41, avgK: 44, avgPH: 5.3, avgRainfall: 2450 },
  'nalbari': { lat: 26.462, lon: 91.4049, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 80, avgP: 42, avgK: 45, avgPH: 5.4, avgRainfall: 2500 },
  'north cachar hills': { lat: 25.3377, lon: 92.9772, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 43, avgK: 46, avgPH: 5.5, avgRainfall: 2550 },
  'sibsagar': { lat: 27.0274, lon: 94.8992, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 43, avgK: 46, avgPH: 5.5, avgRainfall: 2550 },
  'sonitpur': { lat: 26.7345, lon: 92.8499, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 43, avgK: 46, avgPH: 5.5, avgRainfall: 2550 },
  'tinsukia': { lat: 27.5345, lon: 95.6899, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 43, avgK: 46, avgPH: 5.5, avgRainfall: 2550 },
  'araria': { lat: 26.2111, lon: 87.3081, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 83, avgP: 41, avgK: 39, avgPH: 7, avgRainfall: 1050 },
  'aurangabad': { lat: 24.7734, lon: 84.459, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'banka': { lat: 24.8319, lon: 86.8659, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'begusarai': { lat: 25.5428, lon: 86.1253, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'bhabua': { lat: 25.0209, lon: 83.611, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 83, avgP: 41, avgK: 39, avgPH: 7, avgRainfall: 1050 },
  'bhagalpur': { lat: 25.2768, lon: 87.0421, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'bhojpur': { lat: 25.5059, lon: 84.4927, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.1, avgRainfall: 1100 },
  'buxar': { lat: 25.4857, lon: 84.0886, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'darbhanga': { lat: 26.1457, lon: 85.9743, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'gaya': { lat: 24.7262, lon: 84.9425, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'gopalganj': { lat: 26.4482, lon: 84.3462, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'jamui': { lat: 24.7836, lon: 86.2641, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'jehanabad': { lat: 25.1554, lon: 84.9209, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'katihar': { lat: 25.5654, lon: 87.7042, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.1, avgRainfall: 1100 },
  'khagaria': { lat: 25.5351, lon: 86.5663, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.2, avgRainfall: 1150 },
  'kishanganj': { lat: 26.3237, lon: 87.9498, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'lakhisarai': { lat: 25.1828, lon: 86.1286, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'madhepura': { lat: 25.7728, lon: 86.8981, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'madhubani': { lat: 26.4135, lon: 86.1634, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'munger': { lat: 25.1978, lon: 86.5419, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 83, avgP: 41, avgK: 39, avgPH: 7, avgRainfall: 1050 },
  'muzaffarpur': { lat: 26.1863, lon: 85.3271, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 83, avgP: 41, avgK: 39, avgPH: 7, avgRainfall: 1050 },
  'nalanda': { lat: 25.2289, lon: 85.4806, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.1, avgRainfall: 1100 },
  'nawada': { lat: 24.8251, lon: 85.6159, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 83, avgP: 41, avgK: 39, avgPH: 7, avgRainfall: 1050 },
  'pashchim champaran': { lat: 27.1602, lon: 84.3029, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.2, avgRainfall: 1150 },
  'patna': { lat: 25.4025, lon: 85.3203, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'purba champaran': { lat: 26.6809, lon: 85.004, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'purnia': { lat: 25.8167, lon: 87.4041, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 83, avgP: 41, avgK: 39, avgPH: 7, avgRainfall: 1050 },
  'rohtas': { lat: 24.9909, lon: 83.9343, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 83, avgP: 41, avgK: 39, avgPH: 7, avgRainfall: 1050 },
  'saharsa': { lat: 25.8207, lon: 86.547, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.1, avgRainfall: 1100 },
  'samastipur': { lat: 25.7928, lon: 85.9487, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'saran': { lat: 25.8956, lon: 84.8225, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'sheikhpura': { lat: 25.1241, lon: 85.7777, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'sheohar': { lat: 26.459, lon: 85.2955, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.1, avgRainfall: 1100 },
  'sitamarhi': { lat: 26.5585, lon: 85.6029, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.3, avgRainfall: 1200 },
  'siwan': { lat: 26.1735, lon: 84.3362, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 81, avgP: 40, avgK: 38, avgPH: 6.9, avgRainfall: 1000 },
  'supaul': { lat: 26.2811, lon: 86.7845, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 83, avgP: 41, avgK: 39, avgPH: 7, avgRainfall: 1050 },
  'vaishali': { lat: 25.8129, lon: 85.3937, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.2, avgRainfall: 1150 },
  'chandigarh': { lat: 30.7434, lon: 76.7579, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Chandigarh', avgN: 71, avgP: 36, avgK: 33, avgPH: 7.3, avgRainfall: 1000 },
  'bastar': { lat: 19.3929, lon: 81.5288, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 58, avgP: 30, avgK: 32, avgPH: 6, avgRainfall: 1250 },
  'bilaspur': { lat: 22.3561, lon: 81.996, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 62, avgP: 32, avgK: 34, avgPH: 6.2, avgRainfall: 1350 },
  'dantewada': { lat: 18.6531, lon: 81.0726, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 64, avgP: 33, avgK: 35, avgPH: 6.3, avgRainfall: 1400 },
  'dhamtari': { lat: 20.554, lon: 81.7572, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 62, avgP: 32, avgK: 34, avgPH: 6.2, avgRainfall: 1350 },
  'durg': { lat: 21.1937, lon: 81.3315, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 64, avgP: 33, avgK: 35, avgPH: 6.3, avgRainfall: 1400 },
  'janjgir champa': { lat: 21.9605, lon: 82.8054, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 64, avgP: 33, avgK: 35, avgPH: 6.3, avgRainfall: 1400 },
  'jashpur': { lat: 22.772, lon: 83.8704, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 60, avgP: 31, avgK: 33, avgPH: 6.1, avgRainfall: 1300 },
  'kanker': { lat: 20.1388, lon: 81.0687, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 58, avgP: 30, avgK: 32, avgPH: 6, avgRainfall: 1250 },
  'kawardha': { lat: 22.0471, lon: 81.1623, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 62, avgP: 32, avgK: 34, avgPH: 6.2, avgRainfall: 1350 },
  'korba': { lat: 22.4838, lon: 82.5881, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 56, avgP: 29, avgK: 31, avgPH: 5.9, avgRainfall: 1200 },
  'koriya': { lat: 23.5035, lon: 82.1259, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 58, avgP: 30, avgK: 32, avgPH: 6, avgRainfall: 1250 },
  'mahasamund': { lat: 21.2231, lon: 82.6588, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 56, avgP: 29, avgK: 31, avgPH: 5.9, avgRainfall: 1200 },
  'raigarh': { lat: 22.0072, lon: 83.2781, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 60, avgP: 31, avgK: 33, avgPH: 6.1, avgRainfall: 1300 },
  'raipur': { lat: 20.8851, lon: 82.2004, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 58, avgP: 30, avgK: 32, avgPH: 6, avgRainfall: 1250 },
  'raj nandgaon': { lat: 21.0577, lon: 80.7852, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 60, avgP: 31, avgK: 33, avgPH: 6.1, avgRainfall: 1300 },
  'surguja': { lat: 23.3262, lon: 83.2357, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 60, avgP: 31, avgK: 33, avgPH: 6.1, avgRainfall: 1300 },
  'dadra and nagar haveli': { lat: 20.2148, lon: 73.095, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Dadra and Nagar Haveli', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 2000 },
  'daman': { lat: 20.4318, lon: 72.8393, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Daman and Diu', avgN: 56, avgP: 28, avgK: 33, avgPH: 7.3, avgRainfall: 1900 },
  'junagadh': { lat: 20.7255, lon: 70.8398, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Daman and Diu', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.6, avgRainfall: 2050 },
  'delhi': { lat: 28.6451, lon: 77.1277, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Delhi', avgN: 78, avgP: 38, avgK: 36, avgPH: 7.4, avgRainfall: 650 },
  'north goa': { lat: 15.5486, lon: 73.8066, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Goa', avgN: 69, avgP: 37, avgK: 42, avgPH: 6.2, avgRainfall: 3100 },
  'south goa': { lat: 15.195, lon: 73.9419, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Goa', avgN: 69, avgP: 37, avgK: 42, avgPH: 6.2, avgRainfall: 3100 },
  'ahmadabad': { lat: 22.6048, lon: 72.2391, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 59, avgP: 30, avgK: 32, avgPH: 8, avgRainfall: 850 },
  'amreli': { lat: 21.0482, lon: 71.4345, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 53, avgP: 27, avgK: 29, avgPH: 7.7, avgRainfall: 700 },
  'anand': { lat: 22.2826, lon: 72.5778, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 51, avgP: 26, avgK: 28, avgPH: 7.6, avgRainfall: 650 },
  'banas kantha': { lat: 24.2581, lon: 71.9319, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 30, avgPH: 7.8, avgRainfall: 750 },
  'bharuch': { lat: 21.758, lon: 72.6733, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 30, avgPH: 7.8, avgRainfall: 750 },
  'bhavnagar': { lat: 21.7022, lon: 72.1628, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 59, avgP: 30, avgK: 32, avgPH: 8, avgRainfall: 850 },
  'dahod': { lat: 22.897, lon: 73.9921, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 51, avgP: 26, avgK: 28, avgPH: 7.6, avgRainfall: 650 },
  'gandhinagar': { lat: 23.1931, lon: 72.6725, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 53, avgP: 27, avgK: 29, avgPH: 7.7, avgRainfall: 700 },
  'jamnagar': { lat: 22.4104, lon: 69.6204, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 57, avgP: 29, avgK: 31, avgPH: 7.9, avgRainfall: 800 },
  'kachchh': { lat: 23.4806, lon: 68.8222, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 30, avgPH: 7.8, avgRainfall: 750 },
  'kheda': { lat: 22.8869, lon: 73.0179, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 51, avgP: 26, avgK: 28, avgPH: 7.6, avgRainfall: 650 },
  'mahesana': { lat: 23.5283, lon: 72.4548, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 57, avgP: 29, avgK: 31, avgPH: 7.9, avgRainfall: 800 },
  'narmada': { lat: 21.7058, lon: 73.6839, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 30, avgPH: 7.8, avgRainfall: 750 },
  'navsari': { lat: 20.8669, lon: 72.8618, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 30, avgPH: 7.8, avgRainfall: 750 },
  'panch mahals': { lat: 22.8033, lon: 73.6197, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 30, avgPH: 7.8, avgRainfall: 750 },
  'patan': { lat: 23.8059, lon: 71.751, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 51, avgP: 26, avgK: 28, avgPH: 7.6, avgRainfall: 650 },
  'porbandar': { lat: 21.5509, lon: 69.719, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 59, avgP: 30, avgK: 32, avgPH: 8, avgRainfall: 850 },
  'rajkot': { lat: 22.4055, lon: 70.8366, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 53, avgP: 27, avgK: 29, avgPH: 7.7, avgRainfall: 700 },
  'sabar kantha': { lat: 23.7167, lon: 73.1365, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 30, avgPH: 7.8, avgRainfall: 750 },
  'surat': { lat: 21.2576, lon: 72.9352, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 51, avgP: 26, avgK: 28, avgPH: 7.6, avgRainfall: 650 },
  'surendranagar': { lat: 22.8261, lon: 71.4831, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 57, avgP: 29, avgK: 31, avgPH: 7.9, avgRainfall: 800 },
  'the dangs': { lat: 20.8011, lon: 73.6875, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 59, avgP: 30, avgK: 32, avgPH: 8, avgRainfall: 850 },
  'vadodara': { lat: 22.2609, lon: 73.4944, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 57, avgP: 29, avgK: 31, avgPH: 7.9, avgRainfall: 800 },
  'valsad': { lat: 20.4422, lon: 72.9149, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 53, avgP: 27, avgK: 29, avgPH: 7.7, avgRainfall: 700 },
  'ambala': { lat: 30.3497, lon: 76.9494, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 73, avgP: 37, avgK: 34, avgPH: 7.5, avgRainfall: 550 },
  'bhiwani': { lat: 28.7278, lon: 76.0211, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 75, avgP: 38, avgK: 35, avgPH: 7.6, avgRainfall: 600 },
  'faridabad': { lat: 28.1477, lon: 77.3271, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 79, avgP: 40, avgK: 37, avgPH: 7.8, avgRainfall: 700 },
  'fatehabad': { lat: 29.5719, lon: 75.545, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 79, avgP: 40, avgK: 37, avgPH: 7.8, avgRainfall: 700 },
  'gurgaon': { lat: 28.0429, lon: 77.0193, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 75, avgP: 38, avgK: 35, avgPH: 7.6, avgRainfall: 600 },
  'hisar': { lat: 29.2353, lon: 75.8429, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 71, avgP: 36, avgK: 33, avgPH: 7.4, avgRainfall: 500 },
  'jhajjar': { lat: 28.5957, lon: 76.6103, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 75, avgP: 38, avgK: 35, avgPH: 7.6, avgRainfall: 600 },
  'jind': { lat: 29.4503, lon: 76.2963, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 79, avgP: 40, avgK: 37, avgPH: 7.8, avgRainfall: 700 },
  'kaithal': { lat: 29.9603, lon: 76.3769, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 75, avgP: 38, avgK: 35, avgPH: 7.6, avgRainfall: 600 },
  'karnal': { lat: 29.7023, lon: 76.8741, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 73, avgP: 37, avgK: 34, avgPH: 7.5, avgRainfall: 550 },
  'kurukshetra': { lat: 30.0562, lon: 76.7875, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 73, avgP: 37, avgK: 34, avgPH: 7.5, avgRainfall: 550 },
  'mahendragarh': { lat: 28.1344, lon: 76.1399, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 75, avgP: 38, avgK: 35, avgPH: 7.6, avgRainfall: 600 },
  'panchkula': { lat: 30.6998, lon: 76.9725, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 79, avgP: 40, avgK: 37, avgPH: 7.8, avgRainfall: 700 },
  'panipat': { lat: 29.3426, lon: 76.9295, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 75, avgP: 38, avgK: 35, avgPH: 7.6, avgRainfall: 600 },
  'rewari': { lat: 28.191, lon: 76.5592, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 73, avgP: 37, avgK: 34, avgPH: 7.5, avgRainfall: 550 },
  'rohtak': { lat: 28.8915, lon: 76.5312, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 73, avgP: 37, avgK: 34, avgPH: 7.5, avgRainfall: 550 },
  'sirsa': { lat: 29.6349, lon: 74.91, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 71, avgP: 36, avgK: 33, avgPH: 7.4, avgRainfall: 500 },
  'sonepat': { lat: 29.0571, lon: 76.8568, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 75, avgP: 38, avgK: 35, avgPH: 7.6, avgRainfall: 600 },
  'yamuna nagar': { lat: 30.2639, lon: 77.3163, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 75, avgP: 38, avgK: 35, avgPH: 7.6, avgRainfall: 600 },
  'chamba': { lat: 32.6664, lon: 76.3932, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 70, avgP: 34, avgK: 33, avgPH: 6.1, avgRainfall: 1450 },
  'hamirpur': { lat: 31.6758, lon: 76.4969, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 74, avgP: 36, avgK: 35, avgPH: 6.3, avgRainfall: 1550 },
  'kangra': { lat: 32.1403, lon: 76.4111, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 70, avgP: 34, avgK: 33, avgPH: 6.1, avgRainfall: 1450 },
  'kinnaur': { lat: 31.6061, lon: 78.5159, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 72, avgP: 35, avgK: 34, avgPH: 6.2, avgRainfall: 1500 },
  'kullu': { lat: 31.9079, lon: 77.4098, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 68, avgP: 33, avgK: 32, avgPH: 6, avgRainfall: 1400 },
  'lahul and spiti': { lat: 32.5165, lon: 77.6255, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 68, avgP: 33, avgK: 32, avgPH: 6, avgRainfall: 1400 },
  'mandi': { lat: 31.6343, lon: 76.9662, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 68, avgP: 33, avgK: 32, avgPH: 6, avgRainfall: 1400 },
  'shimla': { lat: 31.1549, lon: 77.6255, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 70, avgP: 34, avgK: 33, avgPH: 6.1, avgRainfall: 1450 },
  'sirmaur': { lat: 30.6823, lon: 77.4319, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 72, avgP: 35, avgK: 34, avgPH: 6.2, avgRainfall: 1500 },
  'solan': { lat: 31.0376, lon: 76.9445, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 68, avgP: 33, avgK: 32, avgPH: 6, avgRainfall: 1400 },
  'una': { lat: 31.582, lon: 76.1842, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Himachal Pradesh', avgN: 74, avgP: 36, avgK: 35, avgPH: 6.3, avgRainfall: 1550 },
  'anantnag kashmir south': { lat: 33.757, lon: 75.3006, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 74, avgP: 37, avgK: 38, avgPH: 6.7, avgRainfall: 1100 },
  'bagdam': { lat: 33.9305, lon: 74.7942, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 68, avgP: 34, avgK: 35, avgPH: 6.4, avgRainfall: 950 },
  'baramula kashmir north': { lat: 34.3793, lon: 74.7643, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 74, avgP: 37, avgK: 38, avgPH: 6.7, avgRainfall: 1100 },
  'doda': { lat: 33.3568, lon: 76.0728, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 74, avgP: 37, avgK: 38, avgPH: 6.7, avgRainfall: 1100 },
  'jammu': { lat: 32.7119, lon: 74.8485, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 66, avgP: 33, avgK: 34, avgPH: 6.3, avgRainfall: 900 },
  'kargil': { lat: 33.5631, lon: 76.6403, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 68, avgP: 34, avgK: 35, avgPH: 6.4, avgRainfall: 950 },
  'kathua': { lat: 32.5171, lon: 75.5868, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 68, avgP: 34, avgK: 35, avgPH: 6.4, avgRainfall: 950 },
  'kupwara muzaffarabad': { lat: 34.6011, lon: 74.2204, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 70, avgP: 35, avgK: 36, avgPH: 6.5, avgRainfall: 1000 },
  'ladakh leh': { lat: 33.5837, lon: 78.3076, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 70, avgP: 35, avgK: 36, avgPH: 6.5, avgRainfall: 1000 },
  'pulwama': { lat: 33.8802, lon: 75.0037, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 70, avgP: 35, avgK: 36, avgPH: 6.5, avgRainfall: 1000 },
  'punch': { lat: 33.7896, lon: 74.2986, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 66, avgP: 33, avgK: 34, avgPH: 6.3, avgRainfall: 900 },
  'rajauri': { lat: 33.2706, lon: 74.4053, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 70, avgP: 35, avgK: 36, avgPH: 6.5, avgRainfall: 1000 },
  'srinagar': { lat: 34.2717, lon: 75.1048, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 72, avgP: 36, avgK: 37, avgPH: 6.6, avgRainfall: 1050 },
  'udhampur': { lat: 33.0448, lon: 75.1543, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Jammu and Kashmir', avgN: 72, avgP: 36, avgK: 37, avgPH: 6.6, avgRainfall: 1050 },
  'bokaro': { lat: 23.681, lon: 85.9845, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 53, avgP: 27, avgK: 29, avgPH: 5.9, avgRainfall: 1250 },
  'chatra': { lat: 24.1157, lon: 84.9327, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 53, avgP: 27, avgK: 29, avgPH: 5.9, avgRainfall: 1250 },
  'deoghar': { lat: 24.33, lon: 86.7573, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 28, avgK: 30, avgPH: 6, avgRainfall: 1300 },
  'dhanbad': { lat: 23.8537, lon: 86.4038, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 28, avgK: 30, avgPH: 6, avgRainfall: 1300 },
  'dumka': { lat: 24.2745, lon: 87.277, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 51, avgP: 26, avgK: 28, avgPH: 5.8, avgRainfall: 1200 },
  'garhwa': { lat: 24.0808, lon: 83.6861, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 53, avgP: 27, avgK: 29, avgPH: 5.9, avgRainfall: 1250 },
  'giridih': { lat: 24.3049, lon: 86.0872, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 28, avgK: 30, avgPH: 6, avgRainfall: 1300 },
  'godda': { lat: 24.8181, lon: 87.2938, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 51, avgP: 26, avgK: 28, avgPH: 5.8, avgRainfall: 1200 },
  'gumla': { lat: 23.0777, lon: 84.5508, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 51, avgP: 26, avgK: 28, avgPH: 5.8, avgRainfall: 1200 },
  'hazaribag': { lat: 23.9426, lon: 85.4945, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 59, avgP: 30, avgK: 32, avgPH: 6.2, avgRainfall: 1400 },
  'jamtara': { lat: 23.9784, lon: 86.9532, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 28, avgK: 30, avgPH: 6, avgRainfall: 1300 },
  'koderma': { lat: 24.556, lon: 85.7162, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 28, avgK: 30, avgPH: 6, avgRainfall: 1300 },
  'latehar': { lat: 23.7246, lon: 84.4828, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 28, avgK: 30, avgPH: 6, avgRainfall: 1300 },
  'lohardaga': { lat: 23.4884, lon: 84.6615, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 59, avgP: 30, avgK: 32, avgPH: 6.2, avgRainfall: 1400 },
  'pakur': { lat: 24.5723, lon: 87.6967, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 51, avgP: 26, avgK: 28, avgPH: 5.8, avgRainfall: 1200 },
  'palamu': { lat: 24.1962, lon: 84.2039, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 53, avgP: 27, avgK: 29, avgPH: 5.9, avgRainfall: 1250 },
  'pashchim singhbhum': { lat: 22.3987, lon: 85.5413, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 57, avgP: 29, avgK: 31, avgPH: 6.1, avgRainfall: 1350 },
  'purba singhbhum': { lat: 22.5911, lon: 86.509, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 51, avgP: 26, avgK: 28, avgPH: 5.8, avgRainfall: 1200 },
  'ranchi': { lat: 23.1835, lon: 85.3183, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 53, avgP: 27, avgK: 29, avgPH: 5.9, avgRainfall: 1250 },
  'sahibganj': { lat: 24.9359, lon: 87.6824, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 59, avgP: 30, avgK: 32, avgPH: 6.2, avgRainfall: 1400 },
  'saraikela kharsawan': { lat: 22.8556, lon: 85.8954, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 59, avgP: 30, avgK: 32, avgPH: 6.2, avgRainfall: 1400 },
  'simdega': { lat: 22.6083, lon: 84.591, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 28, avgK: 30, avgPH: 6, avgRainfall: 1300 },
  'bagalkot': { lat: 16.1576, lon: 75.6456, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 62, avgP: 34, avgK: 37, avgPH: 6.9, avgRainfall: 850 },
  'bangalore rural': { lat: 12.9362, lon: 77.4738, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 56, avgP: 31, avgK: 34, avgPH: 6.6, avgRainfall: 700 },
  'bangalore urban': { lat: 12.9011, lon: 77.5869, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 56, avgP: 31, avgK: 34, avgPH: 6.6, avgRainfall: 700 },
  'belgaum': { lat: 16.1603, lon: 74.7228, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 60, avgP: 33, avgK: 36, avgPH: 6.8, avgRainfall: 800 },
  'bellary': { lat: 15.0733, lon: 76.4715, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 60, avgP: 33, avgK: 36, avgPH: 6.8, avgRainfall: 800 },
  'bidar': { lat: 17.9494, lon: 77.1943, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 56, avgP: 31, avgK: 34, avgPH: 6.6, avgRainfall: 700 },
  'bijapur': { lat: 16.8392, lon: 75.9595, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 60, avgP: 33, avgK: 36, avgPH: 6.8, avgRainfall: 800 },
  'chamrajnagar': { lat: 11.9519, lon: 77.0235, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 60, avgP: 33, avgK: 36, avgPH: 6.8, avgRainfall: 800 },
  'chikmagalur': { lat: 13.4246, lon: 75.6756, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'chitradurga': { lat: 14.2898, lon: 76.578, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'dakshin kannad': { lat: 12.891, lon: 74.9619, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 64, avgP: 35, avgK: 38, avgPH: 7, avgRainfall: 900 },
  'davanagere': { lat: 14.3295, lon: 75.917, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 56, avgP: 31, avgK: 34, avgPH: 6.6, avgRainfall: 700 },
  'dharwad': { lat: 15.3431, lon: 75.1375, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 60, avgP: 33, avgK: 36, avgPH: 6.8, avgRainfall: 800 },
  'gadag': { lat: 15.5064, lon: 75.649, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 56, avgP: 31, avgK: 34, avgPH: 6.6, avgRainfall: 700 },
  'gulbarga': { lat: 17.0698, lon: 76.8753, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 62, avgP: 34, avgK: 37, avgPH: 6.9, avgRainfall: 850 },
  'hassan': { lat: 12.9444, lon: 76.1102, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'haveri': { lat: 14.7368, lon: 75.3962, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'kodagu': { lat: 12.3961, lon: 75.7932, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'kolar': { lat: 13.3121, lon: 78.0138, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 56, avgP: 31, avgK: 34, avgPH: 6.6, avgRainfall: 700 },
  'koppal': { lat: 15.6506, lon: 76.1619, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'mandya': { lat: 12.5741, lon: 76.8159, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'mysore': { lat: 12.2476, lon: 76.529, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'raichur': { lat: 16.0498, lon: 76.8734, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 60, avgP: 33, avgK: 36, avgPH: 6.8, avgRainfall: 800 },
  'shimoga': { lat: 14.0631, lon: 75.1789, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 60, avgP: 33, avgK: 36, avgPH: 6.8, avgRainfall: 800 },
  'tumkur': { lat: 13.5913, lon: 77.0229, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 58, avgP: 32, avgK: 35, avgPH: 6.7, avgRainfall: 750 },
  'udupi': { lat: 13.4508, lon: 74.7201, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 56, avgP: 31, avgK: 34, avgPH: 6.6, avgRainfall: 700 },
  'uttar kannand': { lat: 14.5386, lon: 74.3527, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 62, avgP: 34, avgK: 37, avgPH: 6.9, avgRainfall: 850 },
  'alappuzha': { lat: 9.5423, lon: 76.3801, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 67, avgP: 38, avgK: 42, avgPH: 5.8, avgRainfall: 3100 },
  'ernakulam': { lat: 10.0049, lon: 76.2695, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 67, avgP: 38, avgK: 42, avgPH: 5.8, avgRainfall: 3100 },
  'idukki': { lat: 9.804, lon: 77.0457, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 61, avgP: 35, avgK: 39, avgPH: 5.5, avgRainfall: 2950 },
  'kannur': { lat: 11.9414, lon: 75.3521, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 61, avgP: 35, avgK: 39, avgPH: 5.5, avgRainfall: 2950 },
  'kasaragod': { lat: 12.3333, lon: 75.0776, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 67, avgP: 38, avgK: 42, avgPH: 5.8, avgRainfall: 3100 },
  'kollam': { lat: 8.9293, lon: 76.6359, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 61, avgP: 35, avgK: 39, avgPH: 5.5, avgRainfall: 2950 },
  'kottayam': { lat: 9.6436, lon: 76.4606, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 65, avgP: 37, avgK: 41, avgPH: 5.7, avgRainfall: 3050 },
  'kozhikode': { lat: 11.393, lon: 75.7115, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 67, avgP: 38, avgK: 42, avgPH: 5.8, avgRainfall: 3100 },
  'malappuram': { lat: 10.973, lon: 75.9389, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 59, avgP: 34, avgK: 38, avgPH: 5.4, avgRainfall: 2900 },
  'palakkad': { lat: 10.7842, lon: 76.4994, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 65, avgP: 37, avgK: 41, avgPH: 5.7, avgRainfall: 3050 },
  'pattanamtitta': { lat: 9.2909, lon: 76.8636, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 65, avgP: 37, avgK: 41, avgPH: 5.7, avgRainfall: 3050 },
  'thiruvananthapuram': { lat: 8.537, lon: 76.8872, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 65, avgP: 37, avgK: 41, avgPH: 5.7, avgRainfall: 3050 },
  'thrissur': { lat: 10.4588, lon: 76.1232, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 65, avgP: 37, avgK: 41, avgPH: 5.7, avgRainfall: 3050 },
  'wayanad': { lat: 11.7144, lon: 76.0758, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 63, avgP: 36, avgK: 40, avgPH: 5.6, avgRainfall: 3000 },
  'kavaratti': { lat: 10.4351, lon: 72.8305, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Lakshadweep', avgN: 44, avgP: 22, avgK: 27, avgPH: 8.2, avgRainfall: 1700 },
  'anuppur': { lat: 23.1821, lon: 81.8649, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'ashoknagar': { lat: 24.6302, lon: 77.8296, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'balaghat': { lat: 21.7997, lon: 80.4213, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 70, avgP: 37, avgK: 41, avgPH: 7.4, avgRainfall: 1050 },
  'barwani': { lat: 21.7017, lon: 74.9097, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'betul': { lat: 21.9642, lon: 77.7869, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'bhind': { lat: 26.3589, lon: 78.7619, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'bhopal': { lat: 23.4798, lon: 77.3928, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'burhanpur': { lat: 21.3641, lon: 76.2433, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 72, avgP: 38, avgK: 42, avgPH: 7.5, avgRainfall: 1100 },
  'chhatarpur': { lat: 24.8131, lon: 79.5638, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'chhindwara': { lat: 22.2275, lon: 78.7637, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'damoh': { lat: 23.7656, lon: 79.4704, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'datia': { lat: 25.9015, lon: 78.6388, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'dewas': { lat: 22.7849, lon: 76.4611, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'dhar': { lat: 22.5719, lon: 75.1103, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 72, avgP: 38, avgK: 42, avgPH: 7.5, avgRainfall: 1100 },
  'dindori': { lat: 22.8368, lon: 81.0432, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'east nimar': { lat: 22.0987, lon: 76.5581, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'guna': { lat: 24.4896, lon: 77.2235, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 72, avgP: 38, avgK: 42, avgPH: 7.5, avgRainfall: 1100 },
  'gwalior': { lat: 26.0401, lon: 78.1274, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'harda': { lat: 22.2272, lon: 77.07, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'hoshangabad': { lat: 22.5949, lon: 78.0213, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'indore': { lat: 22.6799, lon: 75.9137, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'jabalpur': { lat: 23.1849, lon: 79.9835, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 70, avgP: 37, avgK: 41, avgPH: 7.4, avgRainfall: 1050 },
  'jhabua': { lat: 22.4189, lon: 74.4089, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'katni': { lat: 23.724, lon: 80.3377, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'mandla': { lat: 22.7034, lon: 80.3852, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'mandsaur': { lat: 24.1919, lon: 75.4353, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 70, avgP: 37, avgK: 41, avgPH: 7.4, avgRainfall: 1050 },
  'morena': { lat: 26.3724, lon: 77.8837, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'narsinghpur': { lat: 22.9511, lon: 79.0022, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'neemuch': { lat: 24.7027, lon: 75.0659, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'panna': { lat: 24.4506, lon: 80.2111, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'raisen': { lat: 23.2922, lon: 78.1629, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'rajgarh': { lat: 23.7848, lon: 76.6643, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'ratlam': { lat: 23.503, lon: 75.1485, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'rewa': { lat: 24.8608, lon: 81.5757, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 72, avgP: 38, avgK: 42, avgPH: 7.5, avgRainfall: 1100 },
  'sagar': { lat: 23.8, lon: 78.7196, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'satna': { lat: 24.6272, lon: 80.7554, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'sehore': { lat: 22.9293, lon: 77.0677, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'seoni': { lat: 22.3315, lon: 79.6605, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'shahdol': { lat: 23.4477, lon: 81.4597, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'shajapur': { lat: 23.5662, lon: 76.3356, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 70, avgP: 37, avgK: 41, avgPH: 7.4, avgRainfall: 1050 },
  'sheopur': { lat: 25.7794, lon: 77.1692, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'shivpuri': { lat: 25.3775, lon: 77.7487, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 70, avgP: 37, avgK: 41, avgPH: 7.4, avgRainfall: 1050 },
  'sidhi': { lat: 24.1747, lon: 82.1048, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'tikamgarh': { lat: 25.1405, lon: 78.8936, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 72, avgP: 38, avgK: 42, avgPH: 7.5, avgRainfall: 1100 },
  'ujjain': { lat: 23.3189, lon: 75.8039, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'umaria': { lat: 23.5951, lon: 80.9086, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 66, avgP: 35, avgK: 39, avgPH: 7.2, avgRainfall: 950 },
  'vidisha': { lat: 23.828, lon: 77.9018, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 68, avgP: 36, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'west nimar': { lat: 22.0267, lon: 75.8732, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 64, avgP: 34, avgK: 38, avgPH: 7.1, avgRainfall: 900 },
  'ahmednagar': { lat: 19.217, lon: 74.6924, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 62, avgP: 36, avgK: 38, avgPH: 7, avgRainfall: 700 },
  'akola': { lat: 20.7456, lon: 77.1213, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 62, avgP: 36, avgK: 38, avgPH: 7, avgRainfall: 700 },
  'amravati': { lat: 21.1647, lon: 77.676, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 68, avgP: 39, avgK: 41, avgPH: 7.3, avgRainfall: 850 },
  'bhandara': { lat: 21.2112, lon: 80.1096, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 68, avgP: 39, avgK: 41, avgPH: 7.3, avgRainfall: 850 },
  'bid': { lat: 18.9519, lon: 75.6934, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 68, avgP: 39, avgK: 41, avgPH: 7.3, avgRainfall: 850 },
  'buldana': { lat: 20.5659, lon: 76.3897, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 66, avgP: 38, avgK: 40, avgPH: 7.2, avgRainfall: 800 },
  'chandrapur': { lat: 20.0946, lon: 79.3148, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 62, avgP: 36, avgK: 38, avgPH: 7, avgRainfall: 700 },
  'dhule': { lat: 21.2738, lon: 74.587, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 62, avgP: 36, avgK: 38, avgPH: 7, avgRainfall: 700 },
  'garhchiroli': { lat: 19.7943, lon: 80.3094, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 64, avgP: 37, avgK: 39, avgPH: 7.1, avgRainfall: 750 },
  'gondiya': { lat: 21.2245, lon: 80.1752, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 66, avgP: 38, avgK: 40, avgPH: 7.2, avgRainfall: 800 },
  'greater bombay': { lat: 19.085, lon: 72.8426, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 70, avgP: 40, avgK: 42, avgPH: 7.4, avgRainfall: 900 },
  'hingoli': { lat: 19.5945, lon: 77.0925, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 66, avgP: 38, avgK: 40, avgPH: 7.2, avgRainfall: 800 },
  'jalgaon': { lat: 20.8823, lon: 75.5517, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 66, avgP: 38, avgK: 40, avgPH: 7.2, avgRainfall: 800 },
  'jalna': { lat: 19.9837, lon: 75.9847, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 62, avgP: 36, avgK: 38, avgPH: 7, avgRainfall: 700 },
  'kolhapur': { lat: 16.4483, lon: 74.1292, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 68, avgP: 39, avgK: 41, avgPH: 7.3, avgRainfall: 850 },
  'latur': { lat: 18.3477, lon: 76.7576, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 62, avgP: 36, avgK: 38, avgPH: 7, avgRainfall: 700 },
  'nagpur': { lat: 21.1959, lon: 79.0213, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 64, avgP: 37, avgK: 39, avgPH: 7.1, avgRainfall: 750 },
  'nanded': { lat: 19.2086, lon: 77.6825, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 64, avgP: 37, avgK: 39, avgPH: 7.1, avgRainfall: 750 },
  'nandurbar': { lat: 21.523, lon: 74.3263, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 70, avgP: 40, avgK: 42, avgPH: 7.4, avgRainfall: 900 },
  'nashik': { lat: 20.2663, lon: 74.0381, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 64, avgP: 37, avgK: 39, avgPH: 7.1, avgRainfall: 750 },
  'osmanabad': { lat: 18.1941, lon: 75.9953, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 70, avgP: 40, avgK: 42, avgPH: 7.4, avgRainfall: 900 },
  'parbhani': { lat: 19.3094, lon: 76.7017, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 68, avgP: 39, avgK: 41, avgPH: 7.3, avgRainfall: 850 },
  'pune': { lat: 18.5163, lon: 74.1294, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 70, avgP: 40, avgK: 42, avgPH: 7.4, avgRainfall: 900 },
  'ratnagiri': { lat: 17.21, lon: 73.2573, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 70, avgP: 40, avgK: 42, avgPH: 7.4, avgRainfall: 900 },
  'sangli': { lat: 17.1545, lon: 74.7069, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 64, avgP: 37, avgK: 39, avgPH: 7.1, avgRainfall: 750 },
  'satara': { lat: 17.6731, lon: 74.1809, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 64, avgP: 37, avgK: 39, avgPH: 7.1, avgRainfall: 750 },
  'sindhudurg': { lat: 16.171, lon: 73.5133, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 62, avgP: 36, avgK: 38, avgPH: 7, avgRainfall: 700 },
  'solapur': { lat: 17.8369, lon: 75.4241, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 66, avgP: 38, avgK: 40, avgPH: 7.2, avgRainfall: 800 },
  'thane': { lat: 19.6987, lon: 72.7988, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 62, avgP: 36, avgK: 38, avgPH: 7, avgRainfall: 700 },
  'wardha': { lat: 20.8065, lon: 78.5734, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 64, avgP: 37, avgK: 39, avgPH: 7.1, avgRainfall: 750 },
  'washim': { lat: 20.2816, lon: 77.2545, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 64, avgP: 37, avgK: 39, avgPH: 7.1, avgRainfall: 750 },
  'yavatmal': { lat: 20.042, lon: 78.0531, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 68, avgP: 39, avgK: 41, avgPH: 7.3, avgRainfall: 850 },
  'bishnupur': { lat: 24.5057, lon: 93.8248, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 79, avgP: 37, avgK: 40, avgPH: 6, avgRainfall: 2100 },
  'chandel': { lat: 24.2626, lon: 94.0941, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 75, avgP: 35, avgK: 38, avgPH: 5.8, avgRainfall: 2000 },
  'churachandpur': { lat: 24.3023, lon: 93.3872, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 77, avgP: 36, avgK: 39, avgPH: 5.9, avgRainfall: 2050 },
  'east imphal': { lat: 24.8205, lon: 93.6697, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 73, avgP: 34, avgK: 37, avgPH: 5.7, avgRainfall: 1950 },
  'senapati': { lat: 25.0841, lon: 94.0331, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 77, avgP: 36, avgK: 39, avgPH: 5.9, avgRainfall: 2050 },
  'tamenglong': { lat: 24.9823, lon: 93.4939, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 71, avgP: 33, avgK: 36, avgPH: 5.6, avgRainfall: 1900 },
  'thoubal': { lat: 24.5448, lon: 93.9795, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 75, avgP: 35, avgK: 38, avgPH: 5.8, avgRainfall: 2000 },
  'ukhrul': { lat: 25.0578, lon: 94.441, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 73, avgP: 34, avgK: 37, avgPH: 5.7, avgRainfall: 1950 },
  'west imphal': { lat: 24.793, lon: 93.8885, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Manipur', avgN: 73, avgP: 34, avgK: 37, avgPH: 5.7, avgRainfall: 1950 },
  'east garo hills': { lat: 25.8269, lon: 90.6484, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 74, avgP: 36, avgK: 38, avgPH: 5.3, avgRainfall: 2400 },
  'east khasi hills': { lat: 25.3031, lon: 91.7591, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 76, avgP: 37, avgK: 39, avgPH: 5.4, avgRainfall: 2450 },
  'jaintia hills': { lat: 25.339, lon: 92.3765, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 80, avgP: 39, avgK: 41, avgPH: 5.6, avgRainfall: 2550 },
  'ri bhoi': { lat: 25.8967, lon: 91.8442, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 78, avgP: 38, avgK: 40, avgPH: 5.5, avgRainfall: 2500 },
  'south garo hills': { lat: 25.24, lon: 90.6464, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 76, avgP: 37, avgK: 39, avgPH: 5.4, avgRainfall: 2450 },
  'west garo hills': { lat: 25.4952, lon: 90.0375, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 74, avgP: 36, avgK: 38, avgPH: 5.3, avgRainfall: 2400 },
  'west khasi hills': { lat: 25.5003, lon: 91.2535, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 76, avgP: 37, avgK: 39, avgPH: 5.4, avgRainfall: 2450 },
  'aizawl': { lat: 23.907, lon: 92.8534, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 70, avgP: 33, avgK: 37, avgPH: 5.5, avgRainfall: 2150 },
  'champhai': { lat: 23.5403, lon: 93.242, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 74, avgP: 35, avgK: 39, avgPH: 5.7, avgRainfall: 2250 },
  'kolasib': { lat: 24.2016, lon: 92.7344, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 72, avgP: 34, avgK: 38, avgPH: 5.6, avgRainfall: 2200 },
  'lawngtlai': { lat: 22.3602, lon: 92.6699, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 76, avgP: 36, avgK: 40, avgPH: 5.8, avgRainfall: 2300 },
  'lunglei': { lat: 23.0076, lon: 92.6353, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 72, avgP: 34, avgK: 38, avgPH: 5.6, avgRainfall: 2200 },
  'mamit': { lat: 23.7385, lon: 92.4331, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 68, avgP: 32, avgK: 36, avgPH: 5.4, avgRainfall: 2100 },
  'saiha': { lat: 22.3563, lon: 93.0281, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 68, avgP: 32, avgK: 36, avgPH: 5.4, avgRainfall: 2100 },
  'serchhip': { lat: 23.2631, lon: 92.9138, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 74, avgP: 35, avgK: 39, avgPH: 5.7, avgRainfall: 2250 },
  'dimapur': { lat: 25.8137, lon: 93.7497, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 74, avgP: 36, avgK: 39, avgPH: 5.7, avgRainfall: 2000 },
  'kohima': { lat: 25.6022, lon: 93.7849, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 72, avgP: 35, avgK: 38, avgPH: 5.6, avgRainfall: 1950 },
  'mokokchung': { lat: 26.478, lon: 94.5218, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 70, avgP: 34, avgK: 37, avgPH: 5.5, avgRainfall: 1900 },
  'mon': { lat: 26.6911, lon: 95.0303, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 76, avgP: 37, avgK: 40, avgPH: 5.8, avgRainfall: 2050 },
  'phek': { lat: 25.6323, lon: 94.5676, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 78, avgP: 38, avgK: 41, avgPH: 5.9, avgRainfall: 2100 },
  'tuensang': { lat: 26.2099, lon: 94.8582, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 76, avgP: 37, avgK: 40, avgPH: 5.8, avgRainfall: 2050 },
  'wokha': { lat: 26.2017, lon: 94.1987, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 70, avgP: 34, avgK: 37, avgPH: 5.5, avgRainfall: 1900 },
  'zunheboto': { lat: 26.0273, lon: 94.4999, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 78, avgP: 38, avgK: 41, avgPH: 5.9, avgRainfall: 2100 },
  'angul': { lat: 21.1198, lon: 84.998, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'baleshwar': { lat: 21.4855, lon: 87.0808, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'baragarh': { lat: 21.1316, lon: 83.2637, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'bhadrak': { lat: 20.9527, lon: 86.815, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'bolangir': { lat: 20.6156, lon: 83.215, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'boudh': { lat: 20.5831, lon: 84.122, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'cuttack': { lat: 20.4073, lon: 85.7774, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'deogarh': { lat: 21.431, lon: 84.8137, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'dhenkanal': { lat: 20.798, lon: 85.5319, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'gajapati': { lat: 19.1203, lon: 84.14, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'ganjam': { lat: 19.2631, lon: 84.803, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.7, avgRainfall: 950 },
  'jagatsinghpur': { lat: 20.1147, lon: 86.433, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'jajpur': { lat: 20.8528, lon: 86.1532, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.7, avgRainfall: 950 },
  'jharsuguda': { lat: 21.8265, lon: 83.9348, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'kalahandi': { lat: 19.7834, lon: 83.1119, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'kandhamal': { lat: 20.092, lon: 84.0217, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'kendrapara': { lat: 20.6062, lon: 86.8375, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'keonjhar': { lat: 21.4914, lon: 85.7632, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'khordha': { lat: 20.0537, lon: 85.522, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'koraput': { lat: 18.8259, lon: 82.8133, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'malkangiri': { lat: 18.2513, lon: 81.9827, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'mayurbhanj': { lat: 21.8969, lon: 86.4034, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'nabarangpur': { lat: 19.5122, lon: 82.421, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.7, avgRainfall: 950 },
  'nayagarh': { lat: 20.192, lon: 85.0568, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'nuapada': { lat: 20.4698, lon: 82.5914, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'puri': { lat: 19.8345, lon: 85.8658, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'rayagada': { lat: 19.2922, lon: 83.4586, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'sambalpur': { lat: 21.5146, lon: 84.3494, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'sonepur': { lat: 20.8901, lon: 83.7679, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'sundargarh': { lat: 22.063, lon: 84.5059, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Orissa', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'karaikal': { lat: 10.8761, lon: 79.8238, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Puducherry', avgN: 62, avgP: 31, avgK: 36, avgPH: 7.1, avgRainfall: 1350 },
  'mahe': { lat: 12.0064, lon: 75.2828, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Puducherry', avgN: 64, avgP: 32, avgK: 37, avgPH: 7.2, avgRainfall: 1400 },
  'puducherry': { lat: 11.8878, lon: 79.7971, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Puducherry', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.8, avgRainfall: 1200 },
  'yanam': { lat: 16.7076, lon: 82.262, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Puducherry', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.8, avgRainfall: 1200 },
  'amritsar': { lat: 31.5479, lon: 74.7987, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 84, avgP: 41, avgK: 39, avgPH: 7.8, avgRainfall: 700 },
  'bathinda': { lat: 30.1898, lon: 75.0566, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 84, avgP: 41, avgK: 39, avgPH: 7.8, avgRainfall: 700 },
  'faridkot': { lat: 30.5906, lon: 74.7971, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 84, avgP: 41, avgK: 39, avgPH: 7.8, avgRainfall: 700 },
  'fatehgarh sahib': { lat: 30.6423, lon: 76.3622, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 78, avgP: 38, avgK: 36, avgPH: 7.5, avgRainfall: 550 },
  'firozpur': { lat: 30.6333, lon: 74.4016, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 84, avgP: 41, avgK: 39, avgPH: 7.8, avgRainfall: 700 },
  'gurdaspur': { lat: 32.042, lon: 75.3194, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 86, avgP: 42, avgK: 40, avgPH: 7.9, avgRainfall: 750 },
  'hoshiarpur': { lat: 31.5505, lon: 75.8476, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 78, avgP: 38, avgK: 36, avgPH: 7.5, avgRainfall: 550 },
  'jalandhar': { lat: 31.2496, lon: 75.5438, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 86, avgP: 42, avgK: 40, avgPH: 7.9, avgRainfall: 750 },
  'kapurthala': { lat: 31.3359, lon: 75.4758, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 78, avgP: 38, avgK: 36, avgPH: 7.5, avgRainfall: 550 },
  'ludhiana': { lat: 30.7654, lon: 75.8309, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 84, avgP: 41, avgK: 39, avgPH: 7.8, avgRainfall: 700 },
  'mansa': { lat: 29.9189, lon: 75.4301, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 78, avgP: 38, avgK: 36, avgPH: 7.5, avgRainfall: 550 },
  'moga': { lat: 30.7558, lon: 75.1595, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 86, avgP: 42, avgK: 40, avgPH: 7.9, avgRainfall: 750 },
  'muktsar': { lat: 30.3114, lon: 74.5521, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 82, avgP: 40, avgK: 38, avgPH: 7.7, avgRainfall: 650 },
  'nawan shehar': { lat: 31.133, lon: 76.1028, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 82, avgP: 40, avgK: 38, avgPH: 7.7, avgRainfall: 650 },
  'patiala': { lat: 30.2142, lon: 76.2747, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 82, avgP: 40, avgK: 38, avgPH: 7.7, avgRainfall: 650 },
  'rupnagar': { lat: 30.91, lon: 76.5377, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 84, avgP: 41, avgK: 39, avgPH: 7.8, avgRainfall: 700 },
  'sangrur': { lat: 30.1846, lon: 75.8944, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 82, avgP: 40, avgK: 38, avgPH: 7.7, avgRainfall: 650 },
  'ajmer': { lat: 26.1987, lon: 74.6997, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'alwar': { lat: 27.5522, lon: 76.6534, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'banswara': { lat: 23.4524, lon: 74.4423, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 42, avgP: 21, avgK: 23, avgPH: 8.1, avgRainfall: 450 },
  'baran': { lat: 24.9795, lon: 76.8625, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'barmer': { lat: 25.7699, lon: 71.503, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 38, avgP: 19, avgK: 21, avgPH: 7.9, avgRainfall: 350 },
  'bharatpur': { lat: 27.3236, lon: 77.2175, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 44, avgP: 22, avgK: 24, avgPH: 8.2, avgRainfall: 500 },
  'bhilwara': { lat: 25.4505, lon: 74.6398, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 42, avgP: 21, avgK: 23, avgPH: 8.1, avgRainfall: 450 },
  'bikaner': { lat: 28.1239, lon: 73.2689, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 40, avgP: 20, avgK: 22, avgPH: 8, avgRainfall: 400 },
  'bundi': { lat: 25.4849, lon: 75.7993, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'chittaurgarh': { lat: 24.6309, lon: 74.7997, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 40, avgP: 20, avgK: 22, avgPH: 8, avgRainfall: 400 },
  'churu': { lat: 28.2926, lon: 74.6576, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'dausa': { lat: 26.9119, lon: 76.5729, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'dhaulpur': { lat: 26.7235, lon: 77.7439, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 42, avgP: 21, avgK: 23, avgPH: 8.1, avgRainfall: 450 },
  'dungarpur': { lat: 23.7502, lon: 73.8467, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 44, avgP: 22, avgK: 24, avgPH: 8.2, avgRainfall: 500 },
  'ganganagar': { lat: 29.2554, lon: 73.5613, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'hanumangarh': { lat: 29.1801, lon: 74.7469, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 38, avgP: 19, avgK: 21, avgPH: 7.9, avgRainfall: 350 },
  'jaipur': { lat: 27.0326, lon: 75.7708, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 38, avgP: 19, avgK: 21, avgPH: 7.9, avgRainfall: 350 },
  'jaisalmer': { lat: 26.868, lon: 71.1841, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 44, avgP: 22, avgK: 24, avgPH: 8.2, avgRainfall: 500 },
  'jalor': { lat: 25.0748, lon: 72.1854, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'jhalawar': { lat: 24.2465, lon: 76.1121, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 42, avgP: 21, avgK: 23, avgPH: 8.1, avgRainfall: 450 },
  'jhunjhunun': { lat: 28.1344, lon: 75.5281, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'jodhpur': { lat: 26.6776, lon: 73.0049, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 40, avgP: 20, avgK: 22, avgPH: 8, avgRainfall: 400 },
  'karauli': { lat: 26.5184, lon: 76.9608, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 40, avgP: 20, avgK: 22, avgPH: 8, avgRainfall: 400 },
  'kota': { lat: 25.1746, lon: 76.1857, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 44, avgP: 22, avgK: 24, avgPH: 8.2, avgRainfall: 500 },
  'nagaur': { lat: 27.078, lon: 74.1417, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 38, avgP: 19, avgK: 21, avgPH: 7.9, avgRainfall: 350 },
  'pali': { lat: 25.8042, lon: 73.5522, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 44, avgP: 22, avgK: 24, avgPH: 8.2, avgRainfall: 500 },
  'rajsamand': { lat: 25.2479, lon: 73.9654, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 44, avgP: 22, avgK: 24, avgPH: 8.2, avgRainfall: 500 },
  'sawai madhopur': { lat: 26.2505, lon: 76.4211, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 44, avgP: 22, avgK: 24, avgPH: 8.2, avgRainfall: 500 },
  'sikar': { lat: 27.6456, lon: 75.2936, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 36, avgP: 18, avgK: 20, avgPH: 7.8, avgRainfall: 300 },
  'sirohi': { lat: 24.7964, lon: 72.7529, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 38, avgP: 19, avgK: 21, avgPH: 7.9, avgRainfall: 350 },
  'tonk': { lat: 26.1534, lon: 75.7926, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 44, avgP: 22, avgK: 24, avgPH: 8.2, avgRainfall: 500 },
  'udaipur': { lat: 24.4401, lon: 73.8407, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 40, avgP: 20, avgK: 22, avgPH: 8, avgRainfall: 400 },
  'east': { lat: 27.2955, lon: 88.7489, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Sikkim', avgN: 74, avgP: 37, avgK: 37, avgPH: 6.2, avgRainfall: 2600 },
  'north sikkim': { lat: 27.8134, lon: 88.5418, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Sikkim', avgN: 70, avgP: 35, avgK: 35, avgPH: 6, avgRainfall: 2500 },
  'south sikkim': { lat: 27.2775, lon: 88.3748, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Sikkim', avgN: 70, avgP: 35, avgK: 35, avgPH: 6, avgRainfall: 2500 },
  'west sikkim': { lat: 27.3357, lon: 88.1576, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Sikkim', avgN: 68, avgP: 34, avgK: 34, avgPH: 5.9, avgRainfall: 2450 },
  'ariyalur': { lat: 11.1899, lon: 79.2222, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 58, avgP: 31, avgK: 34, avgPH: 7.1, avgRainfall: 950 },
  'chennai': { lat: 13.058, lon: 80.2814, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 30, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'coimbatore': { lat: 10.8707, lon: 77.0762, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'cuddalore': { lat: 11.5757, lon: 79.63, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 60, avgP: 32, avgK: 35, avgPH: 7.2, avgRainfall: 1000 },
  'dharmapuri': { lat: 12.2994, lon: 78.1153, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'dindigul': { lat: 10.3772, lon: 77.7796, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 58, avgP: 31, avgK: 34, avgPH: 7.1, avgRainfall: 950 },
  'erode': { lat: 11.2662, lon: 77.4201, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'kancheepuram': { lat: 12.4968, lon: 80.0884, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 30, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'kanniyakumari': { lat: 8.1833, lon: 77.3205, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 58, avgP: 31, avgK: 34, avgPH: 7.1, avgRainfall: 950 },
  'karur': { lat: 10.7948, lon: 78.0876, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'madurai': { lat: 9.9037, lon: 78.0131, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 30, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'nagapattinam': { lat: 10.7889, lon: 79.7944, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 30, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'namakkal': { lat: 11.3371, lon: 78.1456, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 58, avgP: 31, avgK: 34, avgPH: 7.1, avgRainfall: 950 },
  'nilgiris': { lat: 11.4416, lon: 76.6619, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 58, avgP: 31, avgK: 34, avgPH: 7.1, avgRainfall: 950 },
  'perambalur': { lat: 11.2594, lon: 78.8603, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'pudukkottai': { lat: 10.1303, lon: 79.0546, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 54, avgP: 29, avgK: 32, avgPH: 6.9, avgRainfall: 850 },
  'ramanathapuram': { lat: 9.3131, lon: 78.9917, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 60, avgP: 32, avgK: 35, avgPH: 7.2, avgRainfall: 1000 },
  'salem': { lat: 11.6289, lon: 78.2479, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'sivaganga': { lat: 9.9598, lon: 78.5655, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 60, avgP: 32, avgK: 35, avgPH: 7.2, avgRainfall: 1000 },
  'thanjavur': { lat: 10.3878, lon: 79.3192, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 60, avgP: 32, avgK: 35, avgPH: 7.2, avgRainfall: 1000 },
  'theni': { lat: 9.9234, lon: 77.4342, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'thiruvallur': { lat: 13.2757, lon: 80.1972, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 54, avgP: 29, avgK: 32, avgPH: 6.9, avgRainfall: 850 },
  'thiruvarur': { lat: 10.369, lon: 79.6029, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'thoothukudi': { lat: 8.7208, lon: 78.1383, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 54, avgP: 29, avgK: 32, avgPH: 6.9, avgRainfall: 850 },
  'tiruchchirappalli': { lat: 10.8373, lon: 78.5473, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 30, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'tirunelveli kattabo': { lat: 8.4576, lon: 77.7053, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 60, avgP: 32, avgK: 35, avgPH: 7.2, avgRainfall: 1000 },
  'tiruvannamalai': { lat: 12.4187, lon: 79.2323, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 60, avgP: 32, avgK: 35, avgPH: 7.2, avgRainfall: 1000 },
  'vellore': { lat: 12.7844, lon: 79.0256, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 30, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'villupuram': { lat: 12.0654, lon: 79.6899, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 52, avgP: 28, avgK: 31, avgPH: 6.8, avgRainfall: 800 },
  'virudhunagar': { lat: 9.4684, lon: 77.876, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 30, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'dhalai': { lat: 23.7806, lon: 91.9468, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Tripura', avgN: 68, avgP: 33, avgK: 35, avgPH: 5.4, avgRainfall: 2150 },
  'north tripura': { lat: 24.1211, lon: 92.1784, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Tripura', avgN: 72, avgP: 35, avgK: 37, avgPH: 5.6, avgRainfall: 2250 },
  'south tripura': { lat: 23.2114, lon: 91.6065, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Tripura', avgN: 72, avgP: 35, avgK: 37, avgPH: 5.6, avgRainfall: 2250 },
  'west tripura': { lat: 23.7797, lon: 91.4128, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Tripura', avgN: 70, avgP: 34, avgK: 36, avgPH: 5.5, avgRainfall: 2200 },
  'agra': { lat: 26.9948, lon: 78.053, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'aligarh': { lat: 27.9371, lon: 78.0018, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'allahabad': { lat: 25.3918, lon: 82.0518, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'ambedkar nagar': { lat: 26.3907, lon: 82.6831, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'auraiya': { lat: 26.6683, lon: 79.4265, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'azamgarh': { lat: 26.0078, lon: 83.0123, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'badaun': { lat: 28.0852, lon: 78.9973, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'baghpat': { lat: 29.045, lon: 77.3018, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'bahraich': { lat: 27.6907, lon: 81.4677, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'ballia': { lat: 25.86, lon: 84.0369, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'balrampur': { lat: 27.4486, lon: 82.4719, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'banda': { lat: 25.3512, lon: 80.5249, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'bara banki': { lat: 26.9222, lon: 81.3577, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'bareilly': { lat: 28.5104, lon: 79.4317, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'basti': { lat: 26.8335, lon: 82.6979, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'bijnor': { lat: 29.3129, lon: 78.4511, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'bulandshahr': { lat: 28.3477, lon: 78.011, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'chandauli': { lat: 25.1172, lon: 83.2532, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'chitrakoot': { lat: 25.1594, lon: 81.0767, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'deoria': { lat: 26.4215, lon: 83.8244, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'etah': { lat: 27.5905, lon: 78.7003, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'etawah': { lat: 26.7876, lon: 79.0759, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'faizabad': { lat: 26.6054, lon: 82.0081, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'farrukhabad': { lat: 27.4499, lon: 79.4413, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'fatehpur': { lat: 25.8366, lon: 80.8548, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'firozabad': { lat: 27.2091, lon: 78.4263, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'gautam buddha nagar': { lat: 28.3924, lon: 77.5251, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'ghaziabad': { lat: 28.7496, lon: 77.6749, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'ghazipur': { lat: 25.6243, lon: 83.5358, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'gonda': { lat: 27.1568, lon: 82.0228, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'gorakhpur': { lat: 26.6325, lon: 83.3552, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'hardoi': { lat: 27.3368, lon: 80.2643, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'hathras': { lat: 27.5775, lon: 78.1817, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'jalaun': { lat: 26.0674, lon: 79.367, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'jaunpur': { lat: 25.7011, lon: 82.5431, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'jhansi': { lat: 25.4554, lon: 78.8995, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'jyotiba phule nagar': { lat: 28.8697, lon: 78.3895, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'kannauj': { lat: 26.9934, lon: 79.645, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'kanpur': { lat: 26.3694, lon: 80.2926, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'kanpur dehat': { lat: 26.4296, lon: 79.9871, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'kaushambi': { lat: 25.535, lon: 81.4184, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'kushinagar': { lat: 26.8918, lon: 83.9227, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'lakhimpur kheri': { lat: 28.0913, lon: 80.6474, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'lalitpur': { lat: 24.5876, lon: 78.6008, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'lucknow': { lat: 26.8376, lon: 80.897, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'maharajganj': { lat: 27.1766, lon: 83.461, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'mahoba': { lat: 25.3449, lon: 79.6781, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'mainpuri': { lat: 27.1732, lon: 79.0353, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'mathura': { lat: 27.5938, lon: 77.6206, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'mau': { lat: 26.0102, lon: 83.5057, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'meerut': { lat: 29.0289, lon: 77.8054, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'mirzapur': { lat: 25.1019, lon: 82.6015, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'moradabad': { lat: 28.8509, lon: 78.7358, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'muzaffarnagar': { lat: 29.4701, lon: 77.6396, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'pilibhit': { lat: 28.5197, lon: 79.9013, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'pratapgarh': { lat: 25.8646, lon: 81.9356, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'rae bareli': { lat: 26.2534, lon: 81.2226, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'rampur': { lat: 28.8318, lon: 79.1099, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'saharanpur': { lat: 30.0332, lon: 77.5991, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'sant kabir nagar': { lat: 26.7911, lon: 83.0386, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 83, avgP: 41, avgK: 39, avgPH: 7.3, avgRainfall: 900 },
  'sant ravi das nagar': { lat: 25.3644, lon: 82.435, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'shahjahanpur': { lat: 27.9909, lon: 79.8296, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'shravasti': { lat: 27.6038, lon: 81.7932, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'siddharth nagar': { lat: 27.2069, lon: 82.7867, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'sitapur': { lat: 27.5015, lon: 80.8527, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.4, avgRainfall: 950 },
  'sonbhadra': { lat: 24.4662, lon: 83.0683, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'sultanpur': { lat: 26.2842, lon: 82.0577, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 89, avgP: 44, avgK: 42, avgPH: 7.6, avgRainfall: 1050 },
  'unnao': { lat: 26.631, lon: 80.6373, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 81, avgP: 40, avgK: 38, avgPH: 7.2, avgRainfall: 850 },
  'varanasi': { lat: 25.3604, lon: 82.825, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'almora': { lat: 29.6829, lon: 79.5017, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.7, avgRainfall: 950 },
  'bageshwar': { lat: 29.986, lon: 79.8391, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'chamoli': { lat: 30.5828, lon: 79.563, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'champawat': { lat: 29.2908, lon: 80.0771, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'dehra dun': { lat: 30.5328, lon: 77.9088, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'haridwar': { lat: 29.8856, lon: 77.9295, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'naini tal': { lat: 29.3357, lon: 79.5002, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 64, avgP: 32, avgK: 37, avgPH: 7, avgRainfall: 1100 },
  'pauri garhwal': { lat: 29.9774, lon: 78.7739, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'pithoragarh': { lat: 30.1466, lon: 80.3425, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.7, avgRainfall: 950 },
  'rudra prayag': { lat: 30.5559, lon: 79.0935, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'tehri garhwal': { lat: 30.4632, lon: 78.4873, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.9, avgRainfall: 1050 },
  'udham singh nagar': { lat: 29.0273, lon: 79.4572, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'uttarkashi': { lat: 30.9686, lon: 78.5682, imd: '', soil: 'loamy', soilName: 'Loamy (दोमट)', state: 'Uttaranchal', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.6, avgRainfall: 900 },
  'bankura': { lat: 23.0803, lon: 87.1268, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 80, avgP: 42, avgK: 45, avgPH: 6.5, avgRainfall: 1600 },
  'barddhaman': { lat: 23.444, lon: 87.8161, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 76, avgP: 40, avgK: 43, avgPH: 6.3, avgRainfall: 1500 },
  'birbhum': { lat: 24.0634, lon: 87.6514, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 80, avgP: 42, avgK: 45, avgPH: 6.5, avgRainfall: 1600 },
  'dakshin dinajpur': { lat: 25.3418, lon: 88.6985, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 78, avgP: 41, avgK: 44, avgPH: 6.4, avgRainfall: 1550 },
  'darjiling': { lat: 26.8392, lon: 88.3317, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 84, avgP: 44, avgK: 47, avgPH: 6.7, avgRainfall: 1700 },
  'east midnapore': { lat: 21.9917, lon: 87.9227, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 84, avgP: 44, avgK: 47, avgPH: 6.7, avgRainfall: 1700 },
  'haora': { lat: 22.4013, lon: 87.9943, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 76, avgP: 40, avgK: 43, avgPH: 6.3, avgRainfall: 1500 },
  'hugli': { lat: 22.8788, lon: 87.9994, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 76, avgP: 40, avgK: 43, avgPH: 6.3, avgRainfall: 1500 },
  'jalpaiguri': { lat: 26.6261, lon: 89.0416, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 76, avgP: 40, avgK: 43, avgPH: 6.3, avgRainfall: 1500 },
  'kochbihar': { lat: 26.2504, lon: 89.3063, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 84, avgP: 44, avgK: 47, avgPH: 6.7, avgRainfall: 1700 },
  'kolkata': { lat: 22.5505, lon: 88.3517, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 80, avgP: 42, avgK: 45, avgPH: 6.5, avgRainfall: 1600 },
  'maldah': { lat: 25.08, lon: 88.1719, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 78, avgP: 41, avgK: 44, avgPH: 6.4, avgRainfall: 1550 },
  'murshidabad': { lat: 24.2588, lon: 88.1679, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 78, avgP: 41, avgK: 44, avgPH: 6.4, avgRainfall: 1550 },
  'nadia': { lat: 23.5636, lon: 88.5828, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 76, avgP: 40, avgK: 43, avgPH: 6.3, avgRainfall: 1500 },
  'north 24 parganas': { lat: 22.0624, lon: 88.878, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 80, avgP: 42, avgK: 45, avgPH: 6.5, avgRainfall: 1600 },
  'puruliya': { lat: 23.2537, lon: 86.3962, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 82, avgP: 43, avgK: 46, avgPH: 6.6, avgRainfall: 1650 },
  'south 24 parganas': { lat: 21.8545, lon: 88.4454, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 80, avgP: 42, avgK: 45, avgPH: 6.5, avgRainfall: 1600 },
  'uttar dinajpur': { lat: 26.0446, lon: 88.2358, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 84, avgP: 44, avgK: 47, avgPH: 6.7, avgRainfall: 1700 },
  'west midnapore': { lat: 22.3543, lon: 87.2308, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 84, avgP: 44, avgK: 47, avgPH: 6.7, avgRainfall: 1700 },
  'new delhi': { lat: 28.6451, lon: 77.1277, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Delhi', avgN: 78, avgP: 38, avgK: 36, avgPH: 7.4, avgRainfall: 650 },
  'trivandrum': { lat: 8.537, lon: 76.8872, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Kerala', avgN: 65, avgP: 37, avgK: 41, avgPH: 5.7, avgRainfall: 3050 },
  'calcutta': { lat: 22.5505, lon: 88.3517, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 80, avgP: 42, avgK: 45, avgPH: 6.5, avgRainfall: 1600 },
  'madras': { lat: 13.058, lon: 80.2814, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 30, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'benares': { lat: 25.3604, lon: 82.825, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  'kashi': { lat: 25.3604, lon: 82.825, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.5, avgRainfall: 1000 },
  // ===== ADDITIONAL DISTRICTS (Telangana, newer districts, expanded coverage) =====
  'adilabad tg': { lat: 19.6641, lon: 78.532, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Telangana', avgN: 60, avgP: 30, avgK: 35, avgPH: 7.2, avgRainfall: 950 },
  'bhadradri kothagudem': { lat: 17.5584, lon: 80.6194, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 1050 },
  'hanumakonda': { lat: 17.9689, lon: 79.5941, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 60, avgP: 30, avgK: 35, avgPH: 7.1, avgRainfall: 900 },
  'hyderabad tg': { lat: 17.385, lon: 78.4867, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 55, avgP: 28, avgK: 33, avgPH: 7.3, avgRainfall: 800 },
  'jagtial': { lat: 18.7948, lon: 78.9152, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 950 },
  'jangaon': { lat: 17.7266, lon: 79.1773, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 56, avgP: 28, avgK: 33, avgPH: 7.1, avgRainfall: 850 },
  'jayashankar bhupalpally': { lat: 18.4348, lon: 79.9866, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.9, avgRainfall: 1100 },
  'jogulamba gadwal': { lat: 16.2305, lon: 77.8076, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Telangana', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.4, avgRainfall: 650 },
  'kamareddy': { lat: 18.3227, lon: 78.3347, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7.2, avgRainfall: 850 },
  'karimnagar tg': { lat: 18.4386, lon: 79.1288, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 56, avgP: 28, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'khammam tg': { lat: 17.2473, lon: 80.1514, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 1050 },
  'kumuram bheem': { lat: 19.3396, lon: 79.4634, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.8, avgRainfall: 1100 },
  'mahabubabad': { lat: 17.5975, lon: 80.0019, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 1000 },
  'mahbubnagar tg': { lat: 16.7488, lon: 77.9855, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.2, avgRainfall: 700 },
  'mancherial': { lat: 18.873, lon: 79.4368, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 1050 },
  'medak tg': { lat: 18.0539, lon: 78.267, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 56, avgP: 28, avgK: 33, avgPH: 7.1, avgRainfall: 850 },
  'medchal malkajgiri': { lat: 17.5307, lon: 78.5393, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.2, avgRainfall: 800 },
  'mulugu': { lat: 18.1907, lon: 79.9438, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.8, avgRainfall: 1200 },
  'nagarkurnool': { lat: 16.4842, lon: 78.3124, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.3, avgRainfall: 700 },
  'nalgonda tg': { lat: 17.05, lon: 79.2667, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7.1, avgRainfall: 800 },
  'narayanpet': { lat: 16.7448, lon: 77.4952, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Telangana', avgN: 54, avgP: 26, avgK: 31, avgPH: 7.5, avgRainfall: 600 },
  'nirmal': { lat: 19.0965, lon: 78.3442, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 1000 },
  'nizamabad tg': { lat: 18.6727, lon: 78.0941, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Telangana', avgN: 60, avgP: 30, avgK: 35, avgPH: 7.2, avgRainfall: 950 },
  'peddapalli': { lat: 18.6175, lon: 79.3833, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 56, avgP: 28, avgK: 33, avgPH: 7, avgRainfall: 950 },
  'rajanna sircilla': { lat: 18.3846, lon: 78.8107, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 56, avgP: 28, avgK: 33, avgPH: 7.1, avgRainfall: 850 },
  'rangareddy tg': { lat: 17.2228, lon: 78.0601, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.2, avgRainfall: 800 },
  'sangareddy': { lat: 17.6192, lon: 78.0866, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 56, avgP: 28, avgK: 33, avgPH: 7.2, avgRainfall: 800 },
  'siddipet': { lat: 18.1019, lon: 78.8519, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 900 },
  'suryapet': { lat: 17.1424, lon: 79.6288, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7.1, avgRainfall: 850 },
  'vikarabad': { lat: 17.3369, lon: 77.905, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 56, avgP: 28, avgK: 33, avgPH: 7.1, avgRainfall: 800 },
  'wanaparthy': { lat: 16.362, lon: 78.0612, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Telangana', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.3, avgRainfall: 650 },
  'warangal rural': { lat: 17.9784, lon: 79.5281, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 950 },
  'warangal urban': { lat: 17.9689, lon: 79.5941, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 950 },
  'yadadri bhuvanagiri': { lat: 17.4568, lon: 78.9575, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Telangana', avgN: 56, avgP: 28, avgK: 33, avgPH: 7.1, avgRainfall: 850 },
  'aravalli': { lat: 23.5562, lon: 73.2911, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 32, avgPH: 7.1, avgRainfall: 750 },
  'botad': { lat: 22.172, lon: 71.6704, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 50, avgP: 25, avgK: 30, avgPH: 7.8, avgRainfall: 550 },
  'chhotaudepur': { lat: 22.304, lon: 74.0144, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Gujarat', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.8, avgRainfall: 900 },
  'devbhumi dwarka': { lat: 22.2025, lon: 69.049, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Gujarat', avgN: 42, avgP: 20, avgK: 25, avgPH: 8, avgRainfall: 400 },
  'gir somnath': { lat: 20.9067, lon: 70.3674, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 48, avgP: 24, avgK: 29, avgPH: 7.6, avgRainfall: 650 },
  'mahisagar': { lat: 23.1253, lon: 73.635, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Gujarat', avgN: 55, avgP: 28, avgK: 32, avgPH: 7, avgRainfall: 800 },
  'morbi': { lat: 22.8173, lon: 70.837, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 48, avgP: 24, avgK: 29, avgPH: 7.8, avgRainfall: 500 },
  'tapi': { lat: 21.1175, lon: 73.4068, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Gujarat', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 1200 },
  'palghar': { lat: 19.6968, lon: 72.7651, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Maharashtra', avgN: 58, avgP: 30, avgK: 34, avgPH: 6.5, avgRainfall: 2500 },
  'hingoli': { lat: 19.7173, lon: 77.1517, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.5, avgRainfall: 800 },
  'washim': { lat: 20.1121, lon: 77.134, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.4, avgRainfall: 850 },
  'gondia': { lat: 21.4624, lon: 80.192, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Maharashtra', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 1200 },
  'chamarajanagar': { lat: 11.9261, lon: 76.9437, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 62, avgP: 32, avgK: 36, avgPH: 6.8, avgRainfall: 750 },
  'chikballapur': { lat: 13.4355, lon: 77.7271, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Karnataka', avgN: 55, avgP: 28, avgK: 32, avgPH: 7, avgRainfall: 700 },
  'davanagere': { lat: 14.4644, lon: 75.9218, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Karnataka', avgN: 58, avgP: 29, avgK: 34, avgPH: 7.2, avgRainfall: 650 },
  'haveri': { lat: 14.7951, lon: 75.3991, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Karnataka', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 700 },
  'yadgir': { lat: 16.7701, lon: 77.1381, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Karnataka', avgN: 52, avgP: 26, avgK: 30, avgPH: 7.5, avgRainfall: 650 },
  'vijayanagara': { lat: 15.335, lon: 76.462, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Karnataka', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.3, avgRainfall: 550 },
  'ariyalur': { lat: 11.14, lon: 79.0758, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 55, avgP: 28, avgK: 32, avgPH: 7.2, avgRainfall: 900 },
  'kallakurichi': { lat: 11.7388, lon: 78.9611, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 29, avgK: 33, avgPH: 7, avgRainfall: 1000 },
  'krishnagiri': { lat: 12.5266, lon: 78.2149, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 58, avgP: 30, avgK: 34, avgPH: 6.8, avgRainfall: 850 },
  'mayiladuthurai': { lat: 11.1018, lon: 79.6522, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Tamil Nadu', avgN: 65, avgP: 34, avgK: 38, avgPH: 7, avgRainfall: 1100 },
  'namakkal': { lat: 11.2189, lon: 78.1674, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 55, avgP: 28, avgK: 32, avgPH: 7, avgRainfall: 750 },
  'perambalur': { lat: 11.234, lon: 78.8807, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 55, avgP: 28, avgK: 32, avgPH: 7.1, avgRainfall: 850 },
  'ranipet': { lat: 12.9224, lon: 79.3243, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 56, avgP: 29, avgK: 33, avgPH: 7, avgRainfall: 900 },
  'tenkasi': { lat: 8.96, lon: 77.3152, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 60, avgP: 31, avgK: 35, avgPH: 6.5, avgRainfall: 850 },
  'tirupattur': { lat: 12.4955, lon: 78.5685, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 58, avgP: 30, avgK: 34, avgPH: 6.8, avgRainfall: 900 },
  'chengalpattu': { lat: 12.6921, lon: 79.9707, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Tamil Nadu', avgN: 55, avgP: 28, avgK: 32, avgPH: 7, avgRainfall: 1100 },
  'karauli': { lat: 26.4953, lon: 77.0243, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Rajasthan', avgN: 52, avgP: 26, avgK: 30, avgPH: 7.5, avgRainfall: 700 },
  'pratapgarh rj': { lat: 24.0317, lon: 74.7819, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Rajasthan', avgN: 55, avgP: 28, avgK: 32, avgPH: 7, avgRainfall: 800 },
  'rajsamand': { lat: 25.0716, lon: 73.88, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Rajasthan', avgN: 48, avgP: 24, avgK: 28, avgPH: 7.2, avgRainfall: 600 },
  'hanumangarh': { lat: 29.5815, lon: 74.3294, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Rajasthan', avgN: 42, avgP: 20, avgK: 25, avgPH: 8.2, avgRainfall: 300 },
  'agar malwa': { lat: 23.7132, lon: 76.0158, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 7.3, avgRainfall: 850 },
  'alirajpur': { lat: 22.3058, lon: 74.3597, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Madhya Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1000 },
  'anuppur': { lat: 23.1107, lon: 81.6926, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Madhya Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.5, avgRainfall: 1200 },
  'ashoknagar': { lat: 24.581, lon: 77.73, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.5, avgRainfall: 900 },
  'burhanpur': { lat: 21.31, lon: 76.23, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Madhya Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 7.2, avgRainfall: 850 },
  'niwari': { lat: 25.145, lon: 78.391, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Madhya Pradesh', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.3, avgRainfall: 950 },
  'singrauli': { lat: 24.1997, lon: 82.6744, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Madhya Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 6.8, avgRainfall: 1100 },
  'amethi': { lat: 26.1544, lon: 81.8143, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.3, avgRainfall: 1000 },
  'hapur': { lat: 28.7307, lon: 77.7759, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 80, avgP: 40, avgK: 38, avgPH: 7.5, avgRainfall: 850 },
  'shamli': { lat: 29.4499, lon: 77.311, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 82, avgP: 41, avgK: 39, avgPH: 7.4, avgRainfall: 800 },
  'sambhal': { lat: 28.5903, lon: 78.5718, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 82, avgP: 41, avgK: 39, avgPH: 7.4, avgRainfall: 850 },
  'kasganj': { lat: 27.8093, lon: 78.6466, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 80, avgP: 40, avgK: 38, avgPH: 7.5, avgRainfall: 800 },
  'chitrakoot': { lat: 25.2023, lon: 80.8528, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 78, avgP: 38, avgK: 36, avgPH: 7.3, avgRainfall: 950 },
  'ayodhya': { lat: 26.7922, lon: 82.1998, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 85, avgP: 42, avgK: 40, avgPH: 7.2, avgRainfall: 1000 },
  'prayagraj': { lat: 25.4358, lon: 81.8463, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Uttar Pradesh', avgN: 87, avgP: 43, avgK: 41, avgPH: 7.3, avgRainfall: 1000 },
  'arwal': { lat: 25.2441, lon: 84.6816, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 82, avgP: 42, avgK: 44, avgPH: 7, avgRainfall: 1050 },
  'sheikhpura': { lat: 25.1397, lon: 85.8369, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 80, avgP: 41, avgK: 43, avgPH: 7, avgRainfall: 1100 },
  'lakhisarai': { lat: 25.1566, lon: 86.0947, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 82, avgP: 42, avgK: 44, avgPH: 7, avgRainfall: 1100 },
  'supaul': { lat: 26.122, lon: 86.6015, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Bihar', avgN: 85, avgP: 44, avgK: 46, avgPH: 6.8, avgRainfall: 1350 },
  'alipurduar': { lat: 26.4885, lon: 89.5271, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 82, avgP: 43, avgK: 46, avgPH: 6.5, avgRainfall: 3200 },
  'jhargram': { lat: 22.4545, lon: 86.9969, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'West Bengal', avgN: 60, avgP: 30, avgK: 34, avgPH: 6, avgRainfall: 1400 },
  'kalimpong': { lat: 27.066, lon: 88.4696, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'West Bengal', avgN: 70, avgP: 35, avgK: 40, avgPH: 5.5, avgRainfall: 2800 },
  'paschim bardhaman': { lat: 23.2332, lon: 87.8615, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 80, avgP: 42, avgK: 45, avgPH: 6.5, avgRainfall: 1400 },
  'purba bardhaman': { lat: 23.5204, lon: 87.5178, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'West Bengal', avgN: 82, avgP: 43, avgK: 46, avgPH: 6.5, avgRainfall: 1500 },
  'barnala': { lat: 30.3819, lon: 75.5484, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 75, avgP: 38, avgK: 36, avgPH: 7.8, avgRainfall: 500 },
  'fazilka': { lat: 30.4036, lon: 74.0284, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Punjab', avgN: 55, avgP: 27, avgK: 25, avgPH: 8.2, avgRainfall: 300 },
  'malerkotla': { lat: 30.5264, lon: 75.8851, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 75, avgP: 38, avgK: 36, avgPH: 7.8, avgRainfall: 550 },
  'mohali': { lat: 30.692, lon: 76.7188, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 72, avgP: 36, avgK: 34, avgPH: 7.5, avgRainfall: 800 },
  'pathankot': { lat: 32.2746, lon: 75.6522, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Punjab', avgN: 68, avgP: 34, avgK: 32, avgPH: 7.2, avgRainfall: 1100 },
  'sri muktsar sahib': { lat: 30.4733, lon: 74.5159, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Punjab', avgN: 55, avgP: 27, avgK: 25, avgPH: 8.2, avgRainfall: 350 },
  'charki dadri': { lat: 28.5921, lon: 76.2707, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Haryana', avgN: 55, avgP: 27, avgK: 28, avgPH: 7.8, avgRainfall: 450 },
  'nuh': { lat: 27.873, lon: 77.0005, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 60, avgP: 30, avgK: 32, avgPH: 7.5, avgRainfall: 550 },
  'palwal': { lat: 28.1487, lon: 77.332, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Haryana', avgN: 65, avgP: 32, avgK: 34, avgPH: 7.5, avgRainfall: 600 },
  'balod': { lat: 20.7309, lon: 81.2098, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 58, avgP: 28, avgK: 32, avgPH: 6.5, avgRainfall: 1200 },
  'baloda bazar': { lat: 21.6575, lon: 82.1601, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 60, avgP: 30, avgK: 34, avgPH: 6.5, avgRainfall: 1250 },
  'bemetara': { lat: 21.7152, lon: 81.5341, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Chhattisgarh', avgN: 58, avgP: 28, avgK: 32, avgPH: 7, avgRainfall: 1200 },
  'gariyaband': { lat: 20.6349, lon: 82.0674, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 62, avgP: 31, avgK: 35, avgPH: 6.3, avgRainfall: 1400 },
  'gaurela pendra marwahi': { lat: 22.9077, lon: 81.7939, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 60, avgP: 30, avgK: 34, avgPH: 6.5, avgRainfall: 1250 },
  'kondagaon': { lat: 19.5942, lon: 81.664, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 64, avgP: 32, avgK: 36, avgPH: 6, avgRainfall: 1500 },
  'korba cg': { lat: 22.3595, lon: 82.7501, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 60, avgP: 30, avgK: 34, avgPH: 6.5, avgRainfall: 1300 },
  'mungeli': { lat: 22.0667, lon: 81.6833, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Chhattisgarh', avgN: 58, avgP: 28, avgK: 32, avgPH: 7, avgRainfall: 1200 },
  'narayanpur': { lat: 19.7241, lon: 81.2502, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.8, avgRainfall: 1600 },
  'sukma': { lat: 18.3877, lon: 81.6597, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.8, avgRainfall: 1500 },
  'surajpur': { lat: 23.2144, lon: 82.8687, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 60, avgP: 30, avgK: 34, avgPH: 6.5, avgRainfall: 1300 },
  'bijapur cg': { lat: 18.8329, lon: 80.6672, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Chhattisgarh', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.8, avgRainfall: 1500 },
  'kabirdham': { lat: 22.0107, lon: 81.2516, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Chhattisgarh', avgN: 58, avgP: 28, avgK: 32, avgPH: 7, avgRainfall: 1200 },
  'subarnapur': { lat: 20.8331, lon: 83.8691, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Orissa', avgN: 55, avgP: 27, avgK: 32, avgPH: 6.5, avgRainfall: 1400 },
  'nabarangpur': { lat: 19.233, lon: 82.5499, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Orissa', avgN: 58, avgP: 29, avgK: 34, avgPH: 6.2, avgRainfall: 1500 },
  'nuapada': { lat: 20.8231, lon: 82.5469, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Orissa', avgN: 55, avgP: 27, avgK: 32, avgPH: 6.5, avgRainfall: 1350 },
  'boudh': { lat: 20.84, lon: 84.32, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Orissa', avgN: 56, avgP: 28, avgK: 33, avgPH: 6.5, avgRainfall: 1400 },
  'kendrapara': { lat: 20.5023, lon: 86.4192, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Orissa', avgN: 70, avgP: 35, avgK: 40, avgPH: 6.8, avgRainfall: 1550 },
  'jagatsinghpur': { lat: 20.2561, lon: 86.1724, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Orissa', avgN: 70, avgP: 35, avgK: 40, avgPH: 6.8, avgRainfall: 1550 },
  'baksa': { lat: 26.6985, lon: 91.2519, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 40, avgK: 42, avgPH: 5.5, avgRainfall: 2500 },
  'biswanath': { lat: 26.7318, lon: 93.1523, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 80, avgP: 41, avgK: 43, avgPH: 5.5, avgRainfall: 2400 },
  'charaideo': { lat: 26.964, lon: 95.0014, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 82, avgP: 42, avgK: 44, avgPH: 5.3, avgRainfall: 2600 },
  'chirang': { lat: 26.5067, lon: 90.4776, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 40, avgK: 42, avgPH: 5.5, avgRainfall: 2800 },
  'dima hasao': { lat: 25.4864, lon: 93.0217, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Assam', avgN: 72, avgP: 36, avgK: 40, avgPH: 5.2, avgRainfall: 2200 },
  'hojai': { lat: 26.0047, lon: 92.8593, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 80, avgP: 41, avgK: 43, avgPH: 5.5, avgRainfall: 2400 },
  'kamrup metropolitan': { lat: 26.1445, lon: 91.7362, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 40, avgK: 42, avgPH: 5.5, avgRainfall: 2000 },
  'majuli': { lat: 26.9451, lon: 94.1672, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 85, avgP: 43, avgK: 45, avgPH: 5.3, avgRainfall: 2800 },
  'south salmara mankachar': { lat: 25.501, lon: 89.875, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 40, avgK: 42, avgPH: 5.5, avgRainfall: 2800 },
  'udalguri': { lat: 26.7537, lon: 92.1029, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Assam', avgN: 78, avgP: 40, avgK: 42, avgPH: 5.5, avgRainfall: 2600 },
  'west karbi anglong': { lat: 25.8006, lon: 92.8006, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Assam', avgN: 72, avgP: 36, avgK: 40, avgPH: 5.2, avgRainfall: 2200 },
  'khunti': { lat: 23.0748, lon: 85.2792, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 27, avgK: 30, avgPH: 5.8, avgRainfall: 1300 },
  'ramgarh': { lat: 23.6311, lon: 85.5617, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Jharkhand', avgN: 55, avgP: 27, avgK: 30, avgPH: 6, avgRainfall: 1250 },
  'anjaw': { lat: 28.06, lon: 96.84, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 70, avgP: 35, avgK: 40, avgPH: 5.5, avgRainfall: 3500 },
  'kamle': { lat: 28.3, lon: 94, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 70, avgP: 35, avgK: 40, avgPH: 5.5, avgRainfall: 2800 },
  'kra daadi': { lat: 28.01, lon: 93.76, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 70, avgP: 35, avgK: 40, avgPH: 5.5, avgRainfall: 2800 },
  'kurung kumey': { lat: 27.98, lon: 93.39, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 70, avgP: 35, avgK: 40, avgPH: 5.5, avgRainfall: 2500 },
  'lepa rada': { lat: 28.04, lon: 93.87, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 70, avgP: 35, avgK: 40, avgPH: 5.5, avgRainfall: 2800 },
  'longding': { lat: 26.9, lon: 95.5, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 65, avgP: 33, avgK: 38, avgPH: 5.5, avgRainfall: 3000 },
  'lower siang': { lat: 28.1, lon: 95.3, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 72, avgP: 36, avgK: 42, avgPH: 5.5, avgRainfall: 3500 },
  'namsai': { lat: 27.68, lon: 95.86, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Arunachal Pradesh', avgN: 75, avgP: 38, avgK: 42, avgPH: 5.5, avgRainfall: 3000 },
  'pakke kessang': { lat: 27.15, lon: 93, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 68, avgP: 34, avgK: 38, avgPH: 5.5, avgRainfall: 2500 },
  'shi yomi': { lat: 28.7, lon: 94.68, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 70, avgP: 35, avgK: 40, avgPH: 5.5, avgRainfall: 3000 },
  'siang': { lat: 28.55, lon: 95.28, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Arunachal Pradesh', avgN: 72, avgP: 36, avgK: 42, avgPH: 5.5, avgRainfall: 3500 },
  'jiribam': { lat: 24.7914, lon: 93.1166, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Manipur', avgN: 70, avgP: 36, avgK: 40, avgPH: 5.5, avgRainfall: 2000 },
  'kakching': { lat: 24.4896, lon: 94.0581, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Manipur', avgN: 68, avgP: 35, avgK: 38, avgPH: 5.5, avgRainfall: 1800 },
  'kamjong': { lat: 25.5, lon: 94.5, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Manipur', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.5, avgRainfall: 1800 },
  'kangpokpi': { lat: 25.07, lon: 93.92, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Manipur', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.5, avgRainfall: 1700 },
  'noney': { lat: 25.18, lon: 93.53, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Manipur', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.5, avgRainfall: 2000 },
  'pherzawl': { lat: 24.7, lon: 93.2, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Manipur', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.5, avgRainfall: 1800 },
  'tengnoupal': { lat: 24.37, lon: 94.11, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Manipur', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.5, avgRainfall: 1800 },
  'east khasi hills': { lat: 25.5788, lon: 91.8933, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 68, avgP: 35, avgK: 38, avgPH: 5, avgRainfall: 2500 },
  'north garo hills': { lat: 25.52, lon: 90.62, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.2, avgRainfall: 3000 },
  'south west garo hills': { lat: 25.35, lon: 90.28, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 65, avgP: 33, avgK: 37, avgPH: 5.2, avgRainfall: 3200 },
  'south west khasi hills': { lat: 25.38, lon: 91.26, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 68, avgP: 35, avgK: 38, avgPH: 5, avgRainfall: 3500 },
  'eastern west khasi hills': { lat: 25.45, lon: 91.5, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Meghalaya', avgN: 68, avgP: 35, avgK: 38, avgPH: 5, avgRainfall: 3000 },
  'hnahthial': { lat: 22.96, lon: 92.78, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 62, avgP: 32, avgK: 36, avgPH: 5.2, avgRainfall: 2500 },
  'khawzawl': { lat: 23.35, lon: 93.16, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 62, avgP: 32, avgK: 36, avgPH: 5.2, avgRainfall: 2200 },
  'saitual': { lat: 23.85, lon: 92.95, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Mizoram', avgN: 62, avgP: 32, avgK: 36, avgPH: 5.2, avgRainfall: 2500 },
  'chumoukedima': { lat: 25.86, lon: 93.78, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2000 },
  'kiphire': { lat: 25.97, lon: 95.05, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Nagaland', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2200 },
  'longleng': { lat: 26.27, lon: 94.88, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Nagaland', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2000 },
  'noklak': { lat: 26.12, lon: 95.08, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Nagaland', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2100 },
  'niuland': { lat: 25.82, lon: 93.65, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2000 },
  'peren': { lat: 25.5135, lon: 93.731, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2200 },
  'tseminyu': { lat: 25.88, lon: 94.16, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2000 },
  'zunheboto': { lat: 25.9636, lon: 94.5268, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Nagaland', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2000 },
  'gomati': { lat: 23.5324, lon: 91.7286, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Tripura', avgN: 62, avgP: 32, avgK: 36, avgPH: 5.2, avgRainfall: 2200 },
  'khowai': { lat: 24.0677, lon: 91.6012, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Tripura', avgN: 62, avgP: 32, avgK: 36, avgPH: 5.2, avgRainfall: 2200 },
  'sepahijala': { lat: 23.6767, lon: 91.3182, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Tripura', avgN: 62, avgP: 32, avgK: 36, avgPH: 5.2, avgRainfall: 2200 },
  'unakoti': { lat: 24.34, lon: 92.09, imd: '', soil: 'laterite', soilName: 'Laterite (लेटराइट)', state: 'Tripura', avgN: 60, avgP: 30, avgK: 34, avgPH: 5.5, avgRainfall: 2200 },
  'kinnaur': { lat: 31.5846, lon: 78.1748, imd: '', soil: 'mountain', soilName: 'Mountain (पर्वतीय)', state: 'Himachal Pradesh', avgN: 55, avgP: 28, avgK: 32, avgPH: 6, avgRainfall: 800 },
  'leh': { lat: 34.1526, lon: 77.577, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Ladakh', avgN: 30, avgP: 15, avgK: 18, avgPH: 8, avgRainfall: 100 },
  'kargil': { lat: 34.5539, lon: 76.1349, imd: '', soil: 'sandy', soilName: 'Sandy (रेतीली)', state: 'Ladakh', avgN: 32, avgP: 16, avgK: 19, avgPH: 7.8, avgRainfall: 200 },
  'sri potti sriramulu nellore': { lat: 14.4426, lon: 79.9865, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 950 },
  'ysr kadapa': { lat: 14.4674, lon: 78.8241, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 7.2, avgRainfall: 700 },
  'alluri sitharama raju': { lat: 17.76, lon: 82.08, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 65, avgP: 33, avgK: 37, avgPH: 6.5, avgRainfall: 1400 },
  'anakapalli': { lat: 17.691, lon: 83.0041, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.8, avgRainfall: 1100 },
  'annamayya': { lat: 13.62, lon: 79.08, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 800 },
  'bapatla': { lat: 15.905, lon: 80.467, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 900 },
  'eluru': { lat: 16.7107, lon: 81.0952, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 7, avgRainfall: 1000 },
  'kakinada ap': { lat: 16.9891, lon: 82.2475, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Andhra Pradesh', avgN: 68, avgP: 34, avgK: 38, avgPH: 7, avgRainfall: 1100 },
  'konaseema': { lat: 16.74, lon: 82.05, imd: '', soil: 'alluvial', soilName: 'Alluvial (जलोढ़)', state: 'Andhra Pradesh', avgN: 70, avgP: 35, avgK: 40, avgPH: 6.8, avgRainfall: 1200 },
  'nandyal': { lat: 15.4781, lon: 78.4835, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 55, avgP: 27, avgK: 32, avgPH: 7.3, avgRainfall: 650 },
  'ntr': { lat: 16.515, lon: 80.5997, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Andhra Pradesh', avgN: 60, avgP: 30, avgK: 35, avgPH: 7.2, avgRainfall: 950 },
  'palnadu': { lat: 16.2, lon: 79.55, imd: '', soil: 'black', soilName: 'Black (काली)', state: 'Andhra Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 7.3, avgRainfall: 750 },
  'parvathipuram manyam': { lat: 18.767, lon: 83.4303, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 62, avgP: 31, avgK: 36, avgPH: 6.5, avgRainfall: 1200 },
  'tirupati ap': { lat: 13.6288, lon: 79.4192, imd: '', soil: 'red', soilName: 'Red (लाल)', state: 'Andhra Pradesh', avgN: 58, avgP: 29, avgK: 34, avgPH: 7, avgRainfall: 850 },
};

// WMO weather code to description + icon mapping
function getWeatherInfo(code) {
  const map = {
    0: ['Clear Sky', '☀️'], 1: ['Mainly Clear', '🌤'], 2: ['Partly Cloudy', '⛅'], 3: ['Overcast', '☁️'],
    45: ['Foggy', '🌫'], 48: ['Rime Fog', '🌫'],
    51: ['Light Drizzle', '🌦'], 53: ['Moderate Drizzle', '🌦'], 55: ['Dense Drizzle', '🌧'],
    61: ['Slight Rain', '🌧'], 63: ['Moderate Rain', '🌧'], 65: ['Heavy Rain', '🌧'],
    71: ['Slight Snow', '❄️'], 73: ['Moderate Snow', '❄️'], 75: ['Heavy Snow', '❄️'],
    80: ['Slight Showers', '🌦'], 81: ['Moderate Showers', '🌧'], 82: ['Violent Showers', '⛈'],
    95: ['Thunderstorm', '⛈'], 96: ['Thunderstorm + Hail', '⛈'], 99: ['Severe Thunderstorm', '⛈']
  };
  return map[code] || ['Fair Weather', '🌤'];
}

// Crop recommendation based on climate + soil
function getTop5Crops(temp, humidity, rainfall, soilType) {
  const candidates = [];
  const crops = {
    rice: { temp: [22, 35], hum: [70, 100], rain: [150, 300], soils: ['alluvial', 'clay', 'loamy'], emoji: '🌾' },
    wheat: { temp: [10, 25], hum: [30, 70], rain: [50, 120], soils: ['alluvial', 'loamy', 'black'], emoji: '🌾' },
    maize: { temp: [20, 35], hum: [50, 80], rain: [60, 200], soils: ['alluvial', 'loamy', 'red'], emoji: '🌽' },
    cotton: { temp: [25, 40], hum: [40, 70], rain: [50, 120], soils: ['black', 'alluvial'], emoji: '🏵️' },
    sugarcane: { temp: [25, 40], hum: [60, 90], rain: [100, 250], soils: ['alluvial', 'loamy', 'black'], emoji: '🌿' },
    potato: { temp: [15, 25], hum: [60, 80], rain: [50, 150], soils: ['alluvial', 'loamy', 'sandy'], emoji: '🥔' },
    tomato: { temp: [20, 30], hum: [50, 80], rain: [40, 150], soils: ['loamy', 'red', 'alluvial'], emoji: '🍅' },
    onion: { temp: [15, 30], hum: [40, 70], rain: [40, 100], soils: ['alluvial', 'loamy', 'sandy'], emoji: '🧅' },
    banana: { temp: [25, 38], hum: [70, 95], rain: [120, 250], soils: ['alluvial', 'loamy', 'laterite'], emoji: '🍌' },
    mango: { temp: [25, 38], hum: [50, 80], rain: [80, 200], soils: ['alluvial', 'loamy', 'red', 'laterite'], emoji: '🥭' },
    groundnut: { temp: [25, 35], hum: [50, 70], rain: [50, 130], soils: ['sandy', 'red', 'loamy'], emoji: '🥜' },
    soybean: { temp: [22, 30], hum: [60, 85], rain: [80, 180], soils: ['black', 'loamy', 'alluvial'], emoji: '🫘' },
    mustard: { temp: [10, 25], hum: [30, 65], rain: [30, 80], soils: ['alluvial', 'loamy', 'sandy'], emoji: '🌿' },
    chickpea: { temp: [15, 25], hum: [25, 55], rain: [30, 80], soils: ['alluvial', 'black', 'loamy'], emoji: '🫘' },
    turmeric: { temp: [20, 35], hum: [70, 90], rain: [120, 250], soils: ['loamy', 'alluvial', 'red', 'laterite'], emoji: '🟡' },
    coconut: { temp: [25, 35], hum: [70, 95], rain: [150, 300], soils: ['laterite', 'sandy', 'loamy'], emoji: '🥥' },
    coffee: { temp: [15, 28], hum: [60, 90], rain: [150, 300], soils: ['laterite', 'red', 'loamy'], emoji: '☕' },
    tea: { temp: [15, 25], hum: [70, 95], rain: [150, 300], soils: ['loamy', 'laterite', 'red'], emoji: '🍵' },
    apple: { temp: [5, 22], hum: [50, 80], rain: [100, 200], soils: ['loamy'], emoji: '🍎' },
    grapes: { temp: [25, 38], hum: [30, 60], rain: [20, 80], soils: ['sandy', 'red', 'black'], emoji: '🍇' },
    chilli: { temp: [20, 35], hum: [60, 80], rain: [60, 150], soils: ['loamy', 'alluvial', 'black'], emoji: '🌶️' },
    jute: { temp: [25, 35], hum: [75, 95], rain: [150, 250], soils: ['alluvial', 'loamy'], emoji: '🧵' },
    bajra: { temp: [25, 40], hum: [30, 60], rain: [20, 60], soils: ['sandy', 'alluvial'], emoji: '🌾' },
    jowar: { temp: [25, 35], hum: [40, 70], rain: [40, 100], soils: ['black', 'red', 'sandy'], emoji: '🌾' },
  };

  Object.entries(crops).forEach(([name, c]) => {
    let score = 0;
    // Temperature match
    if (temp >= c.temp[0] && temp <= c.temp[1]) score += 35;
    else {
      const dist = Math.min(Math.abs(temp - c.temp[0]), Math.abs(temp - c.temp[1]));
      score += Math.max(0, 35 - dist * 5);
    }
    // Humidity match
    if (humidity >= c.hum[0] && humidity <= c.hum[1]) score += 25;
    else {
      const dist = Math.min(Math.abs(humidity - c.hum[0]), Math.abs(humidity - c.hum[1]));
      score += Math.max(0, 25 - dist * 2);
    }
    // Rainfall match (monthly approx)
    const monthlyRain = rainfall / 12;
    const annualEquiv = monthlyRain * 12;
    if (annualEquiv >= c.rain[0] * 5 && annualEquiv <= c.rain[1] * 8) score += 20;
    else score += 10;
    // Soil match
    if (c.soils.includes(soilType)) score += 20;

    candidates.push({ name, score, emoji: c.emoji });
  });

  return candidates.sort((a, b) => b.score - a.score).slice(0, 5);
}

// ===== CROP FARMING DATABASE — ICAR / Agricultural Extension Data =====
// Seed rate (kg/hectare), seed price (₹/kg market avg), water (mm total), irrigation schedule
// Sources: ICAR recommendations, SeedNet India (seednet.gov.in), SeedTrace (seedtrace.gov.in)
const cropFarmingData = {
  rice: {
    seedRate: 40, seedPrice: 65, waterMm: 1200, season: 'Kharif (Jun-Nov)', duration: '120-150 days',
    irrigation: [
      { stage: 'Nursery', days: '0-25', water: '5cm standing water', note: 'Keep nursery bed moist' },
      { stage: 'Transplanting', days: '25-30', water: '2-3cm standing', note: 'Puddle field before transplanting' },
      { stage: 'Tillering', days: '30-60', water: '5cm standing', note: 'Critical stage — no water stress' },
      { stage: 'Panicle Init.', days: '60-80', water: '5cm standing', note: 'Most critical water stage' },
      { stage: 'Flowering', days: '80-100', water: '5cm standing', note: 'Do not drain field' },
      { stage: 'Grain Filling', days: '100-120', water: '2-3cm', note: 'Reduce water gradually' },
      { stage: 'Maturity', days: '120-150', water: 'Drain field', note: 'Stop irrigation 15 days before harvest' }
    ]
  },
  wheat: {
    seedRate: 100, seedPrice: 42, waterMm: 450, season: 'Rabi (Nov-Apr)', duration: '120-140 days',
    irrigation: [
      { stage: 'Crown Root Init.', days: '20-25', water: '60mm', note: '1st irrigation — most critical' },
      { stage: 'Tillering', days: '40-45', water: '60mm', note: '2nd irrigation' },
      { stage: 'Jointing', days: '60-65', water: '60mm', note: '3rd irrigation' },
      { stage: 'Flowering', days: '80-85', water: '60mm', note: '4th irrigation — important for yield' },
      { stage: 'Milking', days: '100-105', water: '60mm', note: '5th irrigation' },
      { stage: 'Dough', days: '115-120', water: '50mm', note: 'Last irrigation if needed' }
    ]
  },
  maize: {
    seedRate: 20, seedPrice: 280, waterMm: 500, season: 'Kharif/Rabi', duration: '90-120 days',
    irrigation: [
      { stage: 'Sowing', days: '0-5', water: '50mm', note: 'Ensure adequate moisture at sowing' },
      { stage: 'Knee High', days: '25-30', water: '60mm', note: '2nd irrigation' },
      { stage: 'Tasseling', days: '50-55', water: '60mm', note: 'Critical — affects pollination' },
      { stage: 'Silking', days: '60-65', water: '60mm', note: 'Most critical stage' },
      { stage: 'Grain Filling', days: '75-85', water: '50mm', note: 'Important for grain weight' }
    ]
  },
  cotton: {
    seedRate: 15, seedPrice: 750, waterMm: 700, season: 'Kharif (Apr-Dec)', duration: '150-180 days',
    irrigation: [
      { stage: 'Sowing', days: '0-5', water: '50mm', note: 'Pre-sowing irrigation essential' },
      { stage: 'Vegetative', days: '30-40', water: '60mm', note: 'Light irrigation' },
      { stage: 'Squaring', days: '45-60', water: '60mm', note: 'Moderate irrigation' },
      { stage: 'Flowering', days: '60-90', water: '75mm', note: 'Critical — do not stress' },
      { stage: 'Boll Dev.', days: '90-120', water: '75mm', note: 'Heavy watering needed' },
      { stage: 'Boll Opening', days: '120-150', water: '50mm', note: 'Reduce gradually' }
    ]
  },
  sugarcane: {
    seedRate: 6000, seedPrice: 5, waterMm: 2000, season: 'Annual (Feb-Jan)', duration: '10-12 months', unit: 'setts/ha',
    irrigation: [
      { stage: 'Planting', days: '0-10', water: '80mm', note: 'Soak furrows before planting' },
      { stage: 'Germination', days: '10-45', water: 'Every 7 days', note: 'Keep soil moist' },
      { stage: 'Tillering', days: '45-120', water: 'Every 10 days', note: '60mm each time' },
      { stage: 'Grand Growth', days: '120-270', water: 'Every 7 days', note: '75mm — most critical phase' },
      { stage: 'Maturity', days: '270-360', water: 'Every 15 days', note: 'Reduce to increase sugar %' }
    ]
  },
  potato: {
    seedRate: 2500, seedPrice: 30, waterMm: 500, season: 'Rabi (Oct-Mar)', duration: '80-120 days', unit: 'kg tuber/ha',
    irrigation: [
      { stage: 'Planting', days: '0-5', water: '50mm', note: 'Light irrigation after planting' },
      { stage: 'Stolon Form.', days: '25-30', water: '60mm', note: 'Start regular irrigation' },
      { stage: 'Tuber Init.', days: '35-45', water: '60mm', note: 'Critical — every 7-10 days' },
      { stage: 'Tuber Bulking', days: '45-80', water: '75mm', note: 'Most critical, every 7 days' },
      { stage: 'Maturity', days: '80-100', water: 'Stop', note: 'Stop irrigation 10 days before harvest' }
    ]
  },
  tomato: {
    seedRate: 0.5, seedPrice: 3500, waterMm: 600, season: 'All seasons', duration: '90-150 days',
    irrigation: [
      { stage: 'Transplanting', days: '0-7', water: 'Daily light', note: 'Keep seedlings moist' },
      { stage: 'Vegetative', days: '7-30', water: 'Every 3-4 days', note: '25mm each time' },
      { stage: 'Flowering', days: '30-60', water: 'Every 3 days', note: '30mm — avoid water stress' },
      { stage: 'Fruit Setting', days: '60-90', water: 'Every 2-3 days', note: 'Critical — prevents cracking' },
      { stage: 'Harvest', days: '90-150', water: 'Every 3-4 days', note: 'Reduce before picking' }
    ]
  },
  onion: {
    seedRate: 10, seedPrice: 800, waterMm: 500, season: 'Rabi (Nov-Apr)', duration: '130-150 days',
    irrigation: [
      { stage: 'Transplanting', days: '0-5', water: 'Immediate', note: 'Light irrigation right after planting' },
      { stage: 'Establishment', days: '5-30', water: 'Every 3-4 days', note: '25mm each time' },
      { stage: 'Bulb Init.', days: '30-60', water: 'Every 5-7 days', note: '30mm per irrigation' },
      { stage: 'Bulb Dev.', days: '60-100', water: 'Every 7-10 days', note: 'Reduce frequency' },
      { stage: 'Maturity', days: '100-130', water: 'Stop', note: 'Stop 15 days before harvest' }
    ]
  },
  banana: {
    seedRate: 2500, seedPrice: 18, waterMm: 1800, season: 'Year-round', duration: '10-14 months', unit: 'suckers/ha',
    irrigation: [
      { stage: 'Planting', days: '0-15', water: '50mm', note: 'Irrigate immediately after planting' },
      { stage: 'Vegetative', days: '15-150', water: 'Every 4-5 days', note: '40mm — keep soil consistently moist' },
      { stage: 'Flowering', days: '150-200', water: 'Every 3-4 days', note: 'Critical — 50mm each time' },
      { stage: 'Fruit Dev.', days: '200-350', water: 'Every 4-5 days', note: '40mm until maturity' },
      { stage: 'Harvest', days: '350-420', water: 'Every 5-7 days', note: 'Reduce slightly' }
    ]
  },
  groundnut: {
    seedRate: 100, seedPrice: 85, waterMm: 500, season: 'Kharif (Jun-Oct)', duration: '100-130 days',
    irrigation: [
      { stage: 'Sowing', days: '0-5', water: '50mm', note: 'Pre-sowing irrigation' },
      { stage: 'Flowering', days: '25-35', water: '60mm', note: 'Critical — peg formation' },
      { stage: 'Pegging', days: '35-55', water: '60mm', note: 'Do not let soil dry' },
      { stage: 'Pod Dev.', days: '55-85', water: '50mm', note: 'Moderate irrigation' },
      { stage: 'Maturity', days: '85-110', water: 'Reduce', note: 'Stop 10 days before harvest' }
    ]
  },
  soybean: {
    seedRate: 75, seedPrice: 70, waterMm: 450, season: 'Kharif (Jun-Oct)', duration: '90-120 days',
    irrigation: [
      { stage: 'Sowing', days: '0-5', water: '50mm', note: 'Ensure good moisture' },
      { stage: 'Branching', days: '25-35', water: '50mm', note: 'If no rain' },
      { stage: 'Flowering', days: '40-55', water: '60mm', note: 'Critical stage' },
      { stage: 'Pod Fill', days: '55-80', water: '60mm', note: 'Important for yield' },
      { stage: 'Maturity', days: '80-100', water: 'Stop', note: 'Allow natural drying' }
    ]
  },
  mustard: {
    seedRate: 5, seedPrice: 120, waterMm: 300, season: 'Rabi (Oct-Mar)', duration: '110-140 days',
    irrigation: [
      { stage: 'Pre-sowing', days: '-5 to 0', water: '60mm', note: 'Palewa (pre-sowing) irrigation' },
      { stage: 'Rosette', days: '25-30', water: '50mm', note: '1st irrigation — critical' },
      { stage: 'Flowering', days: '55-60', water: '50mm', note: '2nd irrigation' },
      { stage: 'Siliqua Dev.', days: '80-85', water: '50mm', note: '3rd irrigation if needed' }
    ]
  },
  chickpea: {
    seedRate: 80, seedPrice: 75, waterMm: 250, season: 'Rabi (Oct-Mar)', duration: '90-120 days',
    irrigation: [
      { stage: 'Pre-sowing', days: '-5 to 0', water: '60mm', note: 'Essential for germination' },
      { stage: 'Branching', days: '40-45', water: '40mm', note: '1st irrigation — if dry' },
      { stage: 'Pod Fill', days: '75-80', water: '40mm', note: '2nd irrigation — if needed' }
    ]
  },
  turmeric: {
    seedRate: 2500, seedPrice: 45, waterMm: 1500, season: 'Kharif (May-Feb)', duration: '7-9 months', unit: 'kg rhizome/ha',
    irrigation: [
      { stage: 'Planting', days: '0-10', water: '50mm', note: 'Immediately after sowing' },
      { stage: 'Sprouting', days: '10-45', water: 'Every 7 days', note: '40mm — keep moist' },
      { stage: 'Vegetative', days: '45-150', water: 'Every 7-10 days', note: '50mm each time' },
      { stage: 'Rhizome Dev.', days: '150-240', water: 'Every 10 days', note: '40mm — critical for yield' },
      { stage: 'Maturity', days: '240-270', water: 'Stop', note: 'Withhold water 1 month before harvest' }
    ]
  },
  chilli: {
    seedRate: 1.5, seedPrice: 2800, waterMm: 600, season: 'Kharif/Rabi', duration: '120-150 days',
    irrigation: [
      { stage: 'Transplanting', days: '0-7', water: 'Daily light', note: 'Keep moist for establishment' },
      { stage: 'Vegetative', days: '7-40', water: 'Every 4-5 days', note: '25mm each' },
      { stage: 'Flowering', days: '40-70', water: 'Every 3-4 days', note: '30mm — critical' },
      { stage: 'Fruiting', days: '70-120', water: 'Every 4-5 days', note: '25mm' },
      { stage: 'Harvest', days: '120-150', water: 'Every 5-7 days', note: 'Reduce for dry chilli' }
    ]
  },
  mango: {
    seedRate: 100, seedPrice: 150, waterMm: 1000, season: 'Perennial', duration: '3-6 yrs to fruit', unit: 'grafts/ha',
    irrigation: [
      { stage: 'Planting', days: 'Year 1', water: 'Every 3-4 days', note: '20L per tree initially' },
      { stage: 'Pre-flowering', days: 'Oct-Nov', water: 'Withhold', note: 'Stress induces flowering' },
      { stage: 'Flowering', days: 'Feb-Mar', water: 'Light irrigation', note: 'Do not waterlog' },
      { stage: 'Fruit Dev.', days: 'Mar-Jun', water: 'Every 7-10 days', note: '100L per mature tree' }
    ]
  },
  coconut: {
    seedRate: 175, seedPrice: 200, waterMm: 2000, season: 'Year-round', duration: '5-6 yrs to fruit', unit: 'seedlings/ha',
    irrigation: [
      { stage: 'Planting', days: 'Year 1-2', water: 'Every 4-5 days', note: '45L per palm in summer' },
      { stage: 'Bearing', days: 'Year 5+', water: 'Every 7 days', note: '200L per palm in summer' },
      { stage: 'Monsoon', days: 'Jun-Sep', water: 'Rain-fed', note: 'No irrigation if rain > 50mm/week' }
    ]
  },
  bajra: {
    seedRate: 5, seedPrice: 90, waterMm: 350, season: 'Kharif (Jun-Sep)', duration: '70-90 days',
    irrigation: [
      { stage: 'Sowing', days: '0-5', water: '40mm', note: 'Pre-sowing if dry' },
      { stage: 'Tillering', days: '20-25', water: '50mm', note: 'If no rain' },
      { stage: 'Ear Head', days: '35-45', water: '50mm', note: 'Critical stage' },
      { stage: 'Grain Fill', days: '55-65', water: '40mm', note: 'If dry spell' }
    ]
  },
  jowar: {
    seedRate: 10, seedPrice: 65, waterMm: 400, season: 'Kharif/Rabi', duration: '100-120 days',
    irrigation: [
      { stage: 'Sowing', days: '0-5', water: '50mm', note: 'Pre-sowing moisture' },
      { stage: 'Knee High', days: '25-30', water: '50mm', note: 'If dry' },
      { stage: 'Boot', days: '50-55', water: '60mm', note: 'Critical for grain' },
      { stage: 'Grain Fill', days: '70-80', water: '50mm', note: 'Final irrigation' }
    ]
  },
  jute: {
    seedRate: 7, seedPrice: 150, waterMm: 500, season: 'Kharif (Mar-Jul)', duration: '100-120 days',
    irrigation: [
      { stage: 'Sowing', days: '0-10', water: '50mm', note: 'Keep field moist' },
      { stage: 'Vegetative', days: '30-60', water: 'Every 7-10 days', note: '40mm if no rain' },
      { stage: 'Pre-harvest', days: '90-100', water: 'Flood field', note: 'For retting' }
    ]
  },
  coffee: {
    seedRate: 2500, seedPrice: 15, waterMm: 1500, season: 'Perennial', duration: '3-4 yrs to fruit', unit: 'seedlings/ha',
    irrigation: [
      { stage: 'Planting', days: 'Year 1', water: 'Every 3-4 days', note: '10L per plant' },
      { stage: 'Blossom', days: 'Feb-Mar', water: 'Soak irrigation', note: 'Triggers flowering' },
      { stage: 'Berry Dev.', days: 'Apr-Oct', water: 'Every 10-15 days', note: '40mm each time' }
    ]
  },
  tea: {
    seedRate: 13000, seedPrice: 12, waterMm: 1500, season: 'Perennial', duration: '3-4 yrs to pluck', unit: 'plants/ha',
    irrigation: [
      { stage: 'Planting', days: 'Year 1', water: 'Every 2-3 days', note: 'Keep moist constantly' },
      { stage: 'Flushing', days: 'Spring', water: 'Every 5-7 days', note: 'Sprinkler preferred' },
      { stage: 'Dry Season', days: 'Dec-Feb', water: 'Every 7-10 days', note: '50mm each time' }
    ]
  },
  apple: {
    seedRate: 200, seedPrice: 350, waterMm: 800, season: 'Perennial', duration: '4-8 yrs to fruit', unit: 'grafts/ha',
    irrigation: [
      { stage: 'Planting', days: 'Year 1', water: 'Every 5-7 days', note: '20L per tree' },
      { stage: 'Pre-bloom', days: 'Feb-Mar', water: '50mm', note: 'Before blossoming' },
      { stage: 'Fruit Set', days: 'Apr-May', water: 'Every 7 days', note: '30L per tree' },
      { stage: 'Fruit Growth', days: 'Jun-Sep', water: 'Every 10 days', note: '50L per tree' }
    ]
  },
  grapes: {
    seedRate: 3000, seedPrice: 25, waterMm: 500, season: 'Perennial', duration: '2-3 yrs to fruit', unit: 'cuttings/ha',
    irrigation: [
      { stage: 'Planting', days: 'Year 1', water: 'Every 3-4 days', note: '10L per vine' },
      { stage: 'Pruning', days: 'Oct', water: '80mm', note: 'Heavy irrigation after pruning' },
      { stage: 'Flowering', days: 'Nov-Dec', water: 'Every 5-7 days', note: '20L per vine' },
      { stage: 'Berry Dev.', days: 'Jan-Mar', water: 'Every 4-5 days', note: '25L — critical for size' },
      { stage: 'Pre-harvest', days: 'Mar-Apr', water: 'Reduce', note: 'Increases sugar content' }
    ]
  },
};

function showFarmingCalculator(cropName) {
  const data = cropFarmingData[cropName];
  if (!data) return;
  const displayName = cropName.charAt(0).toUpperCase() + cropName.slice(1);
  const unitLabel = data.unit || 'kg seed/ha';

  const modal = document.getElementById('farmingModal');
  if (!modal) return;

  document.getElementById('farmCalcCropName').textContent = displayName;
  document.getElementById('farmCalcSeason').textContent = data.season;
  document.getElementById('farmCalcDuration').textContent = data.duration;
  document.getElementById('farmCalcSeedRate').textContent = `${data.seedRate} ${unitLabel}`;
  document.getElementById('farmCalcSeedPrice').textContent = `₹${data.seedPrice}/kg`;
  document.getElementById('farmCalcWater').textContent = `${data.waterMm} mm total`;

  // Build irrigation schedule table
  const scheduleBody = document.getElementById('irrigationSchedule');
  scheduleBody.innerHTML = data.irrigation.map(s => `
    <tr>
      <td><strong>${s.stage}</strong></td>
      <td>${s.days}</td>
      <td>${s.water}</td>
      <td style="font-size:0.82rem;color:var(--gray-500);">${s.note}</td>
    </tr>`).join('');

  // Reset calculator
  document.getElementById('landAreaInput').value = '';
  document.getElementById('farmCalcResults').style.display = 'none';

  // Store current crop data for calc
  modal.dataset.seedRate = data.seedRate;
  modal.dataset.seedPrice = data.seedPrice;
  modal.dataset.waterMm = data.waterMm;
  modal.dataset.unitLabel = unitLabel;
  modal.dataset.cropName = cropName;

  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function calculateFarming() {
  const modal = document.getElementById('farmingModal');
  const landAcres = parseFloat(document.getElementById('landAreaInput').value);
  if (!landAcres || landAcres <= 0) { alert('Please enter valid land area in acres'); return; }

  const landHectares = landAcres * 0.4047; // 1 acre = 0.4047 hectare
  const seedRate = parseFloat(modal.dataset.seedRate);
  const seedPrice = parseFloat(modal.dataset.seedPrice);
  const waterMm = parseFloat(modal.dataset.waterMm);
  const unitLabel = modal.dataset.unitLabel;

  const totalSeed = Math.ceil(seedRate * landHectares);
  const totalCost = Math.round(totalSeed * seedPrice);
  const waterLiters = Math.round(waterMm * landHectares * 10000 / 1000); // mm * m² / 1000 = kiloliters
  const waterTankers = Math.ceil(waterLiters / 10); // 1 tanker ≈ 10 KL

  document.getElementById('calcTotalSeed').textContent = `${totalSeed.toLocaleString('en-IN')} ${unitLabel.includes('/') ? unitLabel.split('/')[0] : 'kg'}`;
  document.getElementById('calcSeedCost').textContent = `₹${totalCost.toLocaleString('en-IN')}`;
  document.getElementById('calcLandHectare').textContent = `${landHectares.toFixed(2)} hectares (${landAcres} acres)`;
  document.getElementById('calcWaterTotal').textContent = `${waterLiters.toLocaleString('en-IN')} KL (≈ ${waterTankers} tanker loads)`;

  document.getElementById('farmCalcResults').style.display = 'block';
  document.getElementById('farmCalcResults').style.animation = 'fadeInUp 0.4s ease-out';
}

function closeFarmingModal() {
  document.getElementById('farmingModal').style.display = 'none';
  document.body.style.overflow = '';
}

async function getWeather() {
  const cityInput = document.getElementById('autofillCity').value.trim().toLowerCase();
  if (!cityInput) return;

  const cityData = indianCities[cityInput];
  const weatherSection = document.getElementById('cropWeatherSection');
  if (weatherSection) weatherSection.style.display = 'block';

  document.getElementById('wDesc').textContent = 'Loading...';

  let lat, lon, cityName, soilType, imdId;

  if (cityData) {
    lat = cityData.lat; lon = cityData.lon;
    cityName = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
    soilType = cityData.soil; imdId = cityData.imd;
  } else {
    try {
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput)}&count=1&country=IN&language=en`);
      const geoData = await geoRes.json();
      if (geoData.results && geoData.results.length > 0) {
        lat = geoData.results[0].latitude; lon = geoData.results[0].longitude;
        cityName = geoData.results[0].name; soilType = 'loamy'; imdId = null;
      } else { document.getElementById('wDesc').textContent = 'City not found.'; return; }
    } catch (e) { document.getElementById('wDesc').textContent = 'Geocoding failed.'; return; }
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,surface_pressure&daily=precipitation_sum&timezone=Asia/Kolkata&forecast_days=1`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    const data = await res.json();
    const c = data.current;
    const [desc, icon] = getWeatherInfo(c.weather_code);
    const rainToday = data.daily?.precipitation_sum?.[0] || c.precipitation || 0;
    const vis = c.weather_code <= 3 ? 10 : c.weather_code <= 48 ? 4 : 7;

    document.querySelector('.weather-icon').textContent = icon;
    document.getElementById('wTemp').textContent = Math.round(c.temperature_2m) + '°C';
    document.getElementById('wDesc').textContent = desc;
    document.getElementById('wLocation').textContent = '📍 ' + cityName + ', India';
    document.getElementById('wHumidity').textContent = c.relative_humidity_2m + '%';
    document.getElementById('wWind').textContent = Math.round(c.wind_speed_10m) + ' km/h';
    document.getElementById('wRainfall').textContent = rainToday.toFixed(1) + ' mm';
    document.getElementById('wVisibility').textContent = vis + ' km';
    document.getElementById('wFeelsLike').textContent = Math.round(c.apparent_temperature) + '°C';
    document.getElementById('wPressure').textContent = Math.round(c.surface_pressure) + ' hPa';

    const imdLink = document.getElementById('imdLink');
    if (imdLink) {
      imdLink.href = imdId ? `https://city.imd.gov.in/citywx/city_weather.php?id=${imdId}` : 'https://mausam.imd.gov.in/';
      imdLink.style.display = 'inline-flex';
    }
    const soilLink = document.getElementById('soilHealthLink');
    if (soilLink) soilLink.style.display = 'inline-flex';

    // Top 5 crop recommendations with click to open farming calculator
    const cropRecsDiv = document.getElementById('weatherCropRecs');
    if (cropRecsDiv) {
      const annualRainfall = cityData ? cityData.avgRainfall : rainToday * 100;
      const top5 = getTop5Crops(c.temperature_2m, c.relative_humidity_2m, annualRainfall, soilType);
      const soilLabel = cityData ? cityData.soilName : 'Loamy (दोमट)';
      cropRecsDiv.innerHTML = `
        <div class="crop-recs-header">
          <h3>🌱 Best 5 Crops for ${cityName}</h3>
          <p style="font-size:0.85rem;color:var(--gray-500);margin-top:4px;">Based on current weather (${Math.round(c.temperature_2m)}°C, ${c.relative_humidity_2m}% humidity) & ${soilLabel} soil</p>
          <p style="font-size:0.78rem;color:var(--primary);margin-top:4px;font-weight:500;">👆 Click any crop for seed & farming calculator</p>
        </div>
        <div class="crop-recs-grid">
          ${top5.map((crop, i) => `
            <div class="crop-rec-card" onclick="showFarmingCalculator('${crop.name}')" style="cursor:pointer;" title="Click for farming details">
              <div class="crop-rec-rank">#${i + 1}</div>
              <div class="crop-rec-emoji">${crop.emoji}</div>
              <div class="crop-rec-name">${crop.name.charAt(0).toUpperCase() + crop.name.slice(1)}</div>
              <div class="crop-rec-score">${crop.score}% match</div>
            </div>
          `).join('')}
        </div>`;
      cropRecsDiv.style.display = 'block';
    }

    document.getElementById('weatherContent').style.animation = 'none';
    document.getElementById('weatherContent').offsetHeight;
    document.getElementById('weatherContent').style.animation = 'fadeInUp 0.5s ease-out';

  } catch (e) {
    console.error('Weather API error:', e);
    document.querySelector('.weather-icon').textContent = '⚠️';
    document.getElementById('wTemp').textContent = '28°C';
    document.getElementById('wDesc').textContent = 'Could not fetch live data. Check internet.';
    document.getElementById('wLocation').textContent = '📍 ' + cityName + ', India';
  }
}

// ===== FIELD SOURCE TAGGING & INLINE ERROR CLEARING =====
function markFieldManual(fieldKey) {
  const tag = document.getElementById('sourceTag-' + fieldKey);
  const t = translations[currentLang] || {};
  if (tag) {
    tag.textContent = t.sourceManual || (currentLang === 'hi' ? 'मैन्युअल' : 'Manual');
    tag.className = 'data-source-tag source-manual';
  }
  const err = document.getElementById('err-' + fieldKey);
  if (err) err.textContent = '';
  const group = document.getElementById('group-' + fieldKey);
  if (group) group.classList.remove('has-error');
}

// ===== CITY AUTOFILL FOR CROP FORM =====
function autofillFromCity() {
  const cityInput = document.getElementById('autofillCity').value.trim().toLowerCase();
  const statusMsg = document.getElementById('autofillStatusMsg');
  const t = translations[currentLang] || {};

  if (!cityInput) {
    if (statusMsg) {
      statusMsg.innerHTML = '<span style="color:#dc2626;">⚠️ ' + (currentLang === 'hi' ? 'कृपया एक शहर या जिले का नाम दर्ज करें' : 'Please enter a city or district name') + '</span>';
    }
    document.getElementById('autofillCity').focus();
    return;
  }

  const city = indianCities[cityInput];
  if (!city) {
    if (statusMsg) {
      statusMsg.innerHTML = '<span style="color:#b45309;">⚠️ ' + (currentLang === 'hi'
        ? 'डेटाबेस में शहर नहीं मिला। कृपया कोई प्रमुख जिला आज़माएँ (जैसे: Jaipur, Karnal, Pune, Patna, Solapur, Indore, Bhopal, Nagpur)'
        : 'City not found in database. Try: Jaipur, Karnal, Pune, Patna, Solapur, Indore, Bhopal, Nagpur, etc.') + '</span>';
    }
    return;
  }

  // Autofill the form fields
  document.getElementById('inputN').value = city.avgN;
  document.getElementById('inputP').value = city.avgP;
  document.getElementById('inputK').value = city.avgK;
  document.getElementById('inputPH').value = city.avgPH;
  document.getElementById('inputRainfall').value = Math.round(city.avgRainfall / 12); // monthly

  // Set soil type
  const soilSelect = document.getElementById('inputSoilType');
  for (let i = 0; i < soilSelect.options.length; i++) {
    if (soilSelect.options[i].value === city.soil) {
      soilSelect.selectedIndex = i;
      break;
    }
  }

  // Set location/state
  const locSelect = document.getElementById('inputLocation');
  for (let i = 0; i < locSelect.options.length; i++) {
    if (locSelect.options[i].textContent === city.state || locSelect.options[i].value === city.state) {
      locSelect.selectedIndex = i;
      break;
    }
  }

  // Update Source Tags to Auto-filled
  const autoFields = ['Location', 'SoilType', 'N', 'P', 'K', 'PH', 'Rainfall'];
  const autoLabel = currentLang === 'hi' ? '🟢 ऑटो-भरित' : '🟢 Auto-filled';
  autoFields.forEach(fKey => {
    const tag = document.getElementById('sourceTag-' + fKey);
    if (tag) {
      tag.textContent = autoLabel;
      tag.className = 'data-source-tag source-auto';
    }
    const err = document.getElementById('err-' + fKey);
    if (err) err.textContent = '';
    const group = document.getElementById('group-' + fKey);
    if (group) group.classList.remove('has-error');
  });

  // Fetch live temp & humidity from Open-Meteo for autofill
  fetch('https://api.open-meteo.com/v1/forecast?latitude=' + city.lat + '&longitude=' + city.lon + '&current=temperature_2m,relative_humidity_2m&timezone=Asia/Kolkata')
    .then(r => r.json())
    .then(data => {
      if (data.current) {
        document.getElementById('inputTemp').value = Math.round(data.current.temperature_2m);
        document.getElementById('inputHumidity').value = data.current.relative_humidity_2m;

        const liveTagLabel = currentLang === 'hi' ? '🟢 लाइव मौसम' : '🟢 Live IMD/Meteo';
        ['Temp', 'Humidity'].forEach(fKey => {
          const tag = document.getElementById('sourceTag-' + fKey);
          if (tag) {
            tag.textContent = liveTagLabel;
            tag.className = 'data-source-tag source-live';
          }
          const err = document.getElementById('err-' + fKey);
          if (err) err.textContent = '';
          const group = document.getElementById('group-' + fKey);
          if (group) group.classList.remove('has-error');
        });
      }

      // Show success message
      const btn = document.getElementById('autofillBtn');
      if (btn) {
        const origText = btn.innerHTML;
        btn.innerHTML = '✅ ' + (currentLang === 'hi' ? 'भर दिया गया!' : 'Filled!');
        btn.style.background = '#e8f5e9';
        btn.style.color = 'var(--primary)';
        setTimeout(() => { btn.innerHTML = origText; btn.style.background = ''; btn.style.color = ''; }, 2200);
      }

      if (statusMsg) {
        statusMsg.innerHTML = '<span style="color:#1b5e20;font-weight:600;">✅ ' + (currentLang === 'hi'
          ? (city.state + ' (' + cityInput + ') के लिए मृदा स्वास्थ्य कार्ड और लाइव मौसम डेटा लोड किया गया')
          : ('Loaded ' + city.state + ' (' + cityInput.toUpperCase() + ') soil baselines & live weather')) + '</span>';
      }
    })
    .catch(() => {
      document.getElementById('inputTemp').value = 28;
      document.getElementById('inputHumidity').value = 65;
      const estLabel = currentLang === 'hi' ? '🟡 अनुमानित' : '🟡 Estimated';
      ['Temp', 'Humidity'].forEach(fKey => {
        const tag = document.getElementById('sourceTag-' + fKey);
        if (tag) {
          tag.textContent = estLabel;
          tag.className = 'data-source-tag source-manual';
        }
      });
      if (statusMsg) {
        statusMsg.innerHTML = '<span>ℹ️ ' + (currentLang === 'hi' ? 'मृदा डेटा लोड हुआ (मौसम ऑफ़लाइन अनुमानित)' : 'Soil data loaded (weather offline estimate)') + '</span>';
      }
    });

  // Also trigger live weather panel display
  const weatherSec = document.getElementById('cropWeatherSection');
  if (weatherSec) weatherSec.style.display = 'block';
  getWeather();
}

// ===== CROP PREDICTION (Form Submit & Validation) =====
function predictCrop(event) {
  if (event) event.preventDefault();

  const t = translations[currentLang] || {};
  let hasError = false;
  let firstErrorEl = null;

  function setFieldError(fieldKey, message) {
    hasError = true;
    const errEl = document.getElementById('err-' + fieldKey);
    const groupEl = document.getElementById('group-' + fieldKey);
    if (errEl) errEl.textContent = message;
    if (groupEl) groupEl.classList.add('has-error');
    if (!firstErrorEl && groupEl) firstErrorEl = groupEl;
  }

  function clearFieldError(fieldKey) {
    const errEl = document.getElementById('err-' + fieldKey);
    const groupEl = document.getElementById('group-' + fieldKey);
    if (errEl) errEl.textContent = '';
    if (groupEl) groupEl.classList.remove('has-error');
  }

  // 1. Validate State / Location
  const locVal = document.getElementById('inputLocation').value.trim();
  if (!locVal) {
    setFieldError('Location', currentLang === 'hi' ? 'कृपया अपना राज्य चुनें (अनिवार्य)' : 'Please select your state (Required)');
  } else {
    clearFieldError('Location');
  }

  // 2. Validate Soil Type
  const soilVal = document.getElementById('inputSoilType').value.trim();
  if (!soilVal) {
    setFieldError('SoilType', currentLang === 'hi' ? 'कृपया मिट्टी का प्रकार चुनें (अनिवार्य)' : 'Please select soil classification (Required)');
  } else {
    clearFieldError('SoilType');
  }

  // 3. Validate Nitrogen (N)
  const nRaw = document.getElementById('inputN').value.trim();
  const n = parseFloat(nRaw);
  if (nRaw === '' || isNaN(n) || n < 0 || n > 300) {
    setFieldError('N', currentLang === 'hi' ? 'नाइट्रोजन का मान 0 से 300 kg/ha के बीच होना चाहिए' : 'Enter Nitrogen between 0 and 300 kg/ha');
  } else {
    clearFieldError('N');
  }

  // 4. Validate Phosphorus (P)
  const pRaw = document.getElementById('inputP').value.trim();
  const p = parseFloat(pRaw);
  if (pRaw === '' || isNaN(p) || p < 0 || p > 200) {
    setFieldError('P', currentLang === 'hi' ? 'फॉस्फोरस का मान 0 से 200 kg/ha के बीच होना चाहिए' : 'Enter Phosphorus between 0 and 200 kg/ha');
  } else {
    clearFieldError('P');
  }

  // 5. Validate Potassium (K)
  const kRaw = document.getElementById('inputK').value.trim();
  const k = parseFloat(kRaw);
  if (kRaw === '' || isNaN(k) || k < 0 || k > 250) {
    setFieldError('K', currentLang === 'hi' ? 'पोटैशियम का मान 0 से 250 kg/ha के बीच होना चाहिए' : 'Enter Potassium between 0 and 250 kg/ha');
  } else {
    clearFieldError('K');
  }

  // 6. Validate Soil pH
  const phRaw = document.getElementById('inputPH').value.trim();
  const ph = parseFloat(phRaw);
  if (phRaw === '' || isNaN(ph) || ph < 3.0 || ph > 10.5) {
    setFieldError('PH', currentLang === 'hi' ? 'मिट्टी का pH मान 3.0 से 10.5 के बीच होना चाहिए' : 'Enter Soil pH between 3.0 and 10.5');
  } else {
    clearFieldError('PH');
  }

  // 7. Validate Temperature
  const tempRaw = document.getElementById('inputTemp').value.trim();
  const temp = parseFloat(tempRaw);
  if (tempRaw === '' || isNaN(temp) || temp < -5 || temp > 55) {
    setFieldError('Temp', currentLang === 'hi' ? 'तापमान -5°C से 55°C के बीच होना चाहिए' : 'Enter Temperature between -5°C and 55°C');
  } else {
    clearFieldError('Temp');
  }

  // 8. Validate Humidity
  const humRaw = document.getElementById('inputHumidity').value.trim();
  const humidity = parseFloat(humRaw);
  if (humRaw === '' || isNaN(humidity) || humidity < 5 || humidity > 100) {
    setFieldError('Humidity', currentLang === 'hi' ? 'आर्द्रता 5% से 100% के बीच होनी चाहिए' : 'Enter Humidity between 5% and 100%');
  } else {
    clearFieldError('Humidity');
  }

  // 9. Validate Rainfall
  const rainRaw = document.getElementById('inputRainfall').value.trim();
  const rainfall = parseFloat(rainRaw);
  if (rainRaw === '' || isNaN(rainfall) || rainfall < 0 || rainfall > 1500) {
    setFieldError('Rainfall', currentLang === 'hi' ? 'मासिक वर्षा/सिंचाई 0 से 1500 mm के बीच होनी चाहिए' : 'Enter Rainfall between 0 and 1500 mm');
  } else {
    clearFieldError('Rainfall');
  }

  if (hasError) {
    if (firstErrorEl) {
      firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return false;
  }

  // ---- Soil Health Analysis ----
  const soilHealth = analyzeSoilHealth(n, p, k, ph);
  const tipsDiv = document.getElementById('soilHealthTips');

  if (tipsDiv) {
    if (!soilHealth.healthy) {
      tipsDiv.innerHTML = `
        <div class="soil-health-alert-box alert-warning" style="background:#fffbeb;border:1.5px solid #f59e0b;border-radius:8px;padding:16px 20px;margin-bottom:20px;">
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <span style="font-size:1.4rem;">⚠️</span>
            <div>
              <h4 style="margin:0;font-size:1rem;color:#92400e;font-weight:600;">${currentLang === 'hi' ? 'मृदा स्वास्थ्य सुझाव (ICAR परीक्षण मानक)' : 'Soil Nutrient Balance Advisory'}</h4>
              <p style="margin:2px 0 0;font-size:0.85rem;color:#78350f;">${currentLang === 'hi' ? 'आपकी मिट्टी में कुछ पोषक तत्वों का असंतुलन देखा गया है:' : 'Identified nutrient imbalances based on Soil Health Card baselines:'}</p>
            </div>
          </div>
          <ul style="margin:10px 0 12px 30px;padding:0;color:#92400e;font-size:0.9rem;">
            ${soilHealth.issues.map(i => '<li style="margin-bottom:4px;">' + i + '</li>').join('')}
          </ul>
          <div style="background:#fff9eb;border:1px solid #fde68a;border-radius:6px;padding:12px;font-size:0.88rem;color:#451a03;">
            <strong style="display:block;margin-bottom:6px;">🌿 ${currentLang === 'hi' ? 'सुधारात्मक कदम:' : 'Recommended Soil Corrections:'}</strong>
            ${soilHealth.tips.map(t => '<div style="margin-bottom:4px;">• ' + t + '</div>').join('')}
          </div>
          <p style="font-size:0.8rem;color:#92400e;margin:10px 0 0;">💡 ${currentLang === 'hi' ? 'सटीक उर्वरक मात्रा के लिए अपनी मिट्टी की जांच नजदीकी KVK या' : 'For certified lab tests, visit'} <a href="https://soilhealth.dac.gov.in/home" target="_blank" rel="noopener" style="color:#1b5e20;text-decoration:underline;font-weight:600;">soilhealth.dac.gov.in ↗</a></p>
        </div>`;
      tipsDiv.style.display = 'block';
    } else {
      tipsDiv.innerHTML = `
        <div class="soil-health-alert-box alert-success" style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:14px 18px;margin-bottom:20px;">
          <h4 style="margin:0;color:#166534;font-size:0.98rem;font-weight:600;">✅ ${currentLang === 'hi' ? 'मृदा स्वास्थ्य: संतुलित व अनुकूल' : 'Soil Health: Optimal & Balanced'}</h4>
          <p style="margin:4px 0 0;font-size:0.86rem;color:#15803d;">${currentLang === 'hi' ? 'आपके NPK और pH मान सामान्य कृषि सीमा में हैं। यह अधिकांश प्रमुख फसलों की वृद्धि के लिए अनुकूल है।' : 'Your NPK levels and pH reaction are within healthy agronomic ranges for Indian soils.'}</p>
        </div>`;
      tipsDiv.style.display = 'block';
    }
  }

  // ---- Show Loading ----
  document.getElementById('cropLoading').classList.remove('hidden');
  document.getElementById('cropResults').classList.add('hidden');

  // ---- Get Crop Recommendations ----
  setTimeout(() => {
    const rankedCrops = scoreAllCrops(n, p, k, temp, humidity, ph, rainfall);
    const top5 = rankedCrops.slice(0, 5);
    const bestCrop = top5[0];
    const crop = cropDatabase[bestCrop.name] || {};

    // Calibrated Agronomic Suitability Score (Algorithm score max is 85)
    const suitabilityPct = Math.min(98, Math.max(50, Math.round((bestCrop.score / 85) * 100)));

    const now = new Date();
    const currentMonth = now.getMonth(); // 0-based
    const mName = currentLang === 'hi' ? monthNamesHi[currentMonth] : monthNames[currentMonth];
    const mNum = currentMonth + 1; // 1-based for lookup

    // Seasonal status for best crop
    const bestSeason = cropSeasonality[bestCrop.name];
    let seasonBadge = '', seasonMsg = '', seasonClass = '';
    if (bestSeason) {
      if (bestSeason.sowMonths.includes(mNum)) {
        seasonBadge = currentLang === 'hi' ? '🌱 बुवाई का सही समय!' : '🌱 Perfect Sowing Time!';
        seasonMsg = currentLang === 'hi'
          ? (mName + ' महीना ' + bestCrop.name + ' की बुवाई के लिए सबसे आदर्श है। अनुकूल तापमान में बुवाई करें।')
          : (mName + ' is the ideal sowing month for ' + bestCrop.name + '. Timely planting ensures maximum yield potential.');
        seasonClass = 'season-perfect';
      } else if (bestSeason.growMonths.includes(mNum)) {
        seasonBadge = currentLang === 'hi' ? '🌿 बढ़वार का मौसम' : '🌿 Active Growing Season';
        seasonMsg = currentLang === 'hi'
          ? (bestCrop.name + ' की फसल इस समय खेतों में वृद्धि अवस्था में है। सिंचाई और निराई-गुड़ाई पर ध्यान दें।')
          : (bestCrop.name + ' crops are actively standing in fields this month. Focus on scheduled irrigation and pest surveillance.');
        seasonClass = 'season-growing';
      } else {
        seasonBadge = currentLang === 'hi' ? '⏳ ऑफ-सीज़न सलाह' : '⏳ Off-Season Advisory';
        seasonMsg = currentLang === 'hi'
          ? (mName + ' में ' + bestCrop.name + ' की बुवाई का समय नहीं है। नीचे दी गई वर्तमान महीने की वैकल्पिक फसलें देखें।')
          : (mName + ' is not the primary sowing window for ' + bestCrop.name + '. Check the alternative crops listed below that are currently in season.');
        seasonClass = 'season-off';
      }
    }

    // Top 3 alternatives
    const alternatives = top5.slice(1, 4);
    let altHTML = '';
    if (alternatives.length > 0) {
      altHTML = `
        <div class="alt-crops-section" style="margin-top:24px;">
          <h4 style="font-size:1.02rem;color:var(--text);margin-bottom:12px;font-weight:600;">🔄 ${currentLang === 'hi' ? ('अन्य उपयुक्त वैकल्पिक फसलें (' + mName + ' के लिए)') : ('Alternative Crop Options for ' + mName)}</h4>
          <div class="alt-crops-grid">${alternatives.map((alt, i) => {
        const altCrop = cropDatabase[alt.name] || {};
        const altSeason = cropSeasonality[alt.name];
        let badge = '';
        if (altSeason && altSeason.sowMonths.includes(mNum)) badge = '<span class="alt-badge sow">' + (currentLang === 'hi' ? '🌱 अभी बोएं' : '🌱 Sow Now') + '</span>';
        else if (altSeason && altSeason.growMonths.includes(mNum)) badge = '<span class="alt-badge grow">' + (currentLang === 'hi' ? '🌿 बढ़वार' : '🌿 Growing') + '</span>';
        else badge = '<span class="alt-badge off">' + (currentLang === 'hi' ? '⏳ ऑफ-सीज़न' : '⏳ Off-season') + '</span>';
        const altSuitability = Math.min(95, Math.max(45, Math.round((alt.score / 85) * 100)));
        return `
              <div class="alt-crop-card" onclick="showFarmingCalculator('${alt.name}')" style="cursor:pointer;" title="${currentLang === 'hi' ? 'लागत व बीज कैलकुलेटर देखें' : 'View Farming Calculator'}">
                <div class="alt-crop-rank">#${i + 2}</div>
                <div class="alt-crop-emoji">${altCrop.emoji || '🌱'}</div>
                <div class="alt-crop-info">
                  <div class="alt-crop-name">${alt.name.charAt(0).toUpperCase() + alt.name.slice(1)}</div>
                  <div class="alt-crop-season">${altCrop.season || ''}</div>
                  ${badge}
                </div>
                <div class="alt-crop-match">
                  <div class="match-bar"><div class="match-fill" style="width:${altSuitability}%"></div></div>
                  <span>${altSuitability}%</span>
                </div>
              </div>`;
      }).join('')}</div>
        </div>`;
    }

    // Explaining WHY this crop suits supplied soil and weather
    const whySuitable = currentLang === 'hi'
      ? ('• <b>पोषक तत्व उपयुक्तता:</b> आपकी मिट्टी में नाइट्रोजन (' + n + ' kg/ha), फॉस्फोरस (' + p + ' kg/ha) और पोटैशियम (' + k + ' kg/ha) ' + bestCrop.name + ' की पोषण आवश्यकता के अनुकूल हैं।<br>• <b>मिट्टी प्रतिक्रिया:</b> मिट्टी का pH ' + ph + ' पोषक तत्वों के समुचित अवशोषण में सहायक है।<br>• <b>जलवायु मिलान:</b> तापमान (' + temp + '°C) और उपलब्ध पानी (' + rainfall + ' mm) इस फसल के अंकुरण और वानस्पतिक विकास के लिए उपयुक्त हैं।')
      : ('• <b>Nutrient Compatibility:</b> Available Nitrogen (' + n + ' kg/ha), Phosphorus (' + p + ' kg/ha), and Potassium (' + k + ' kg/ha) match ' + bestCrop.name + '\'s nutrient uptake profile.<br>• <b>Soil Reaction:</b> pH of ' + ph + ' allows healthy root assimilation without nutrient lockout.<br>• <b>Climate Alignment:</b> Local temperature (' + temp + '°C) and water availability (' + rainfall + ' mm) support healthy germination and vegetative development.');

    const resultHtml = `
      <div class="result-card" style="animation:fadeInUp 0.5s ease-out;">
        <!-- 1. Recommended Crop Header -->
        <div class="result-header" style="display:flex;align-items:center;gap:16px;border-bottom:1px solid var(--border);padding-bottom:16px;">
          <div class="result-crop-icon" style="font-size:3rem;background:#f0fdf4;width:64px;height:64px;display:flex;align-items:center;justify-content:center;border-radius:12px;">${crop.emoji || '🌱'}</div>
          <div class="result-header-text" style="flex:1;">
            <span class="result-crop-badge" style="display:inline-block;padding:2px 8px;background:var(--primary);color:#fff;border-radius:4px;font-size:0.75rem;font-weight:600;margin-bottom:4px;">🏆 ${currentLang === 'hi' ? 'सर्वोत्तम अनुशंसित फसल' : 'Primary Recommendation'}</span>
            <h3 class="result-crop-name" style="margin:0;font-size:1.6rem;color:var(--text);font-weight:700;">${bestCrop.name.charAt(0).toUpperCase() + bestCrop.name.slice(1)}</h3>
            <div class="result-meta-row" style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;align-items:center;">
              <span class="confidence-badge" style="background:#e8f5e9;color:#1b5e20;padding:3px 10px;border-radius:20px;font-size:0.82rem;font-weight:600;">⭐ ${suitabilityPct}% ${currentLang === 'hi' ? 'कृषि उपयुक्तता' : 'Agronomic Suitability'}</span>
              <span class="season-status-pill ${seasonClass}" style="padding:3px 10px;border-radius:20px;font-size:0.82rem;font-weight:600;">${seasonBadge}</span>
            </div>
          </div>
        </div>

        <!-- Seasonal Timing Message -->
        <div class="season-alert ${seasonClass}" style="margin:16px 0;padding:12px 16px;border-radius:8px;background:#f7f7f1;">
          <p style="margin:0;font-size:0.92rem;color:var(--text);">${seasonMsg}</p>
        </div>

        <!-- 2. Why the Crop Suits the Conditions -->
        <div class="result-section-box" style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:16px;margin-bottom:16px;">
          <h4 style="margin:0 0 10px;font-size:1rem;color:var(--primary);font-weight:600;">🌱 ${currentLang === 'hi' ? 'यह फसल आपकी परिस्थितियों के लिए क्यों उपयुक्त है?' : 'Why This Crop Suits Your Soil & Climate'}</h4>
          <p style="margin:0;font-size:0.9rem;line-height:1.6;color:var(--text);">${whySuitable}</p>
        </div>

        <!-- 3. Relevant Input Conditions Used by Model -->
        <div class="result-section-box" style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:16px;margin-bottom:16px;">
          <h4 style="margin:0 0 10px;font-size:1rem;color:var(--primary);font-weight:600;">🧪 ${currentLang === 'hi' ? 'विश्लेषण में प्रयुक्त आपके खेत के मानक' : 'Field Parameters Evaluated by Model'}</h4>
          <div class="tested-conditions-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:8px;">
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>📍 ${currentLang === 'hi' ? 'राज्य' : 'State'}:</strong> <span>${locVal}</span></div>
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>🪨 ${currentLang === 'hi' ? 'मिट्टी' : 'Soil'}:</strong> <span>${soilVal}</span></div>
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>N:</strong> <span>${n} kg/ha</span></div>
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>P:</strong> <span>${p} kg/ha</span></div>
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>K:</strong> <span>${k} kg/ha</span></div>
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>pH:</strong> <span>${ph}</span></div>
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>🌡 ${currentLang === 'hi' ? 'तापमान' : 'Temp'}:</strong> <span>${temp}°C</span></div>
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>💧 ${currentLang === 'hi' ? 'नमी' : 'Humidity'}:</strong> <span>${humidity}%</span></div>
            <div class="cond-pill" style="background:#f7f7f1;padding:6px 10px;border-radius:6px;font-size:0.82rem;"><strong>🌧 ${currentLang === 'hi' ? 'वर्षा' : 'Rain'}:</strong> <span>${rainfall} mm</span></div>
          </div>
        </div>

        <!-- 4. Important Cultivation Considerations -->
        <div class="result-section-box" style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:16px;margin-bottom:16px;">
          <h4 style="margin:0 0 10px;font-size:1rem;color:var(--primary);font-weight:600;">🌾 ${currentLang === 'hi' ? 'महत्वपूर्ण कृषि व खेती विचार' : 'Cultivation & Agronomic Considerations'}</h4>
          <div class="cultivation-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;margin-bottom:12px;">
            <div class="cultivation-item" style="background:#f7f7f1;padding:10px 12px;border-radius:6px;">
              <span style="display:block;font-size:0.78rem;color:var(--text-muted);">${currentLang === 'hi' ? 'अपेक्षित औसत उपज' : 'Expected Regional Yield'}</span>
              <strong style="font-size:0.95rem;color:var(--text);">${crop.yield || 'Standard regional yield'}</strong>
            </div>
            <div class="cultivation-item" style="background:#f7f7f1;padding:10px 12px;border-radius:6px;">
              <span style="display:block;font-size:0.78rem;color:var(--text-muted);">${currentLang === 'hi' ? 'फसल ऋतु / सीजन' : 'Growing Season'}</span>
              <strong style="font-size:0.95rem;color:var(--text);">${crop.season || 'Kharif / Rabi'}</strong>
            </div>
            <div class="cultivation-item" style="background:#f7f7f1;padding:10px 12px;border-radius:6px;">
              <span style="display:block;font-size:0.78rem;color:var(--text-muted);">${currentLang === 'hi' ? 'सर्वोत्तम बुवाई अवधि' : 'Ideal Sowing Window'}</span>
              <strong style="font-size:0.95rem;color:var(--text);">${bestSeason ? bestSeason.sowMonths.map(m => (currentLang === 'hi' ? monthNamesHi[m - 1] : monthNames[m - 1])).join(', ') : 'Regional KVK window'}</strong>
            </div>
          </div>
          ${crop.tips && crop.tips.length > 0 ? `
            <div style="background:#f0fdf4;padding:10px 14px;border-radius:6px;font-size:0.88rem;">
              <strong style="color:#166534;">💡 ${currentLang === 'hi' ? 'प्रमुख वैज्ञानिक सुझाव:' : 'Key Practical Farming Tips:'}</strong>
              <ul style="margin:6px 0 0 18px;padding:0;color:var(--text);line-height:1.5;">${crop.tips.map(tip => '<li>' + tip + '</li>').join('')}</ul>
            </div>
          ` : ''}
        </div>

        <!-- 5. Practical Next Steps for the Farmer -->
        <div class="result-section-box" style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:16px;margin-bottom:16px;">
          <h4 style="margin:0 0 10px;font-size:1rem;color:var(--primary);font-weight:600;">📋 ${currentLang === 'hi' ? 'किसान के लिए व्यावहारिक अगले कदम' : 'Practical Next Steps for You'}</h4>
          <ol style="margin:0 0 0 20px;padding:0;line-height:1.6;font-size:0.9rem;color:var(--text);">
            <li><strong>${currentLang === 'hi' ? 'मृदा कार्ड सत्यापन' : 'Soil Testing Verification'}:</strong> ${currentLang === 'hi' ? 'माइक्रोन्यूट्रिएंट्स (जिंक, सल्फर) के लिए मृदा स्वास्थ्य कार्ड रिपोर्ट की जांच करें।' : 'Check Soil Health Card records for micronutrients like Zinc and Boron.'}</li>
            <li><strong>${currentLang === 'hi' ? 'मंडी भाव व मांग' : 'Mandi Price Assessment'}:</strong> ${currentLang === 'hi' ? 'बुवाई से पहले मंडी पेज पर इस फसल के न्यूनतम समर्थन मूल्य (MSP) और वर्तमान भाव देखें।' : 'Check real mandi arrivals and MSP benchmarks in the Market section.'}</li>
            <li><strong>${currentLang === 'hi' ? 'प्रमाणित बीज' : 'Certified Seed'}:</strong> ${currentLang === 'hi' ? 'निकटतम KVK या ब्लॉक कृषि अधिकारी से प्रमाणित बीज और बीज उपचार (Fungicide seed dressing) सुनिश्चित करें।' : 'Procure certified seed and ensure appropriate fungicide seed dressing before sowing.'}</li>
          </ol>
        </div>

        <!-- 6. Alternatives Section -->
        ${altHTML}

        <!-- 7. Transparent Advisory Disclaimer -->
        <div class="result-disclaimer" style="display:flex;gap:12px;background:#f7f7f1;border:1px solid var(--border);border-radius:8px;padding:14px;margin-top:20px;">
          <span style="font-size:1.3rem;">ℹ️</span>
          <p style="margin:0;font-size:0.84rem;color:var(--text-muted);line-height:1.5;">
            <strong style="color:var(--text);">${currentLang === 'hi' ? 'सलाह सूचना:' : 'Advisory Notice:'}</strong>
            ${currentLang === 'hi'
        ? 'यह सिफारिश क्षेत्रीय कृषि मानकों और मौसम मॉडल पर आधारित निर्णय-सहायता मार्गदर्शन है। यह फसल उपज या लाभ की कोई वैज्ञानिक गारंटी नहीं है। खेत की गहराई, स्थानीय सूक्ष्म-जलवायु और जल निकासी को देखते हुए अंतिम निर्णय से पहले अपने स्थानीय कृषि विस्तार अधिकारी या KVK से परामर्श लें।'
        : 'This crop recommendation is a decision-support advisory based on regional agronomic baselines and climate conditions. It is not a yield or profit guarantee. Local soil depth, drainage, and seed quality vary. Verify with your local agriculture officer or KVK before major financial commitments.'}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="result-actions-bar" style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;justify-content:center;">
          <button class="btn btn-secondary" onclick="saveRecommendation('${bestCrop.name}', '${suitabilityPct}%', '${crop.emoji || '🌱'}')">
            💾 <span data-i18n="btnSaveRec">${currentLang === 'hi' ? 'सिफारिश सहेजें' : 'Save Recommendation'}</span>
          </button>
          <button class="btn btn-primary" onclick="showFarmingCalculator('${bestCrop.name}')">
            🧮 ${currentLang === 'hi' ? 'बीज व खाद कैलकुलेटर' : 'Farming Calculator'}
          </button>
          <button class="btn btn-outline" onclick="viewMarketForCrop('${bestCrop.name}')">
            📈 ${currentLang === 'hi' ? 'मंडी भाव देखें' : 'View Mandi Prices'}
          </button>
        </div>
      </div>`;

    document.getElementById('cropLoading').classList.add('hidden');
    const resultsContainer = document.getElementById('cropResults');
    resultsContainer.innerHTML = resultHtml;
    resultsContainer.classList.remove('hidden');
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Automatically record in farmer history
    saveToDashboard(bestCrop.name);
  }, 1000);

  return false;
}


// ===== MARKET PRICES — REAL-TIME with FALLBACK =====

// MSP (Minimum Support Price) 2025-26 and realistic market price ranges (₹ per quintal)
// Source: CACP (Gov of India) + commodityfact.org live mandi data
const cropPriceData = {
  'Oats (Jai)': { msp: 0, minMarket: 2200, maxMarket: 3500, season: 'rabi', unit: 'qtl', cfLink: 'oats', mandis: ["Karnal, Haryana", "Ludhiana, Punjab", "Kanpur, UP", "Jaipur, Rajasthan"] },
  'Sorghum (White)': { msp: 3371, minMarket: 3000, maxMarket: 4500, season: 'rabi', unit: 'qtl', cfLink: 'jowar', mandis: ["Solapur, Maharashtra", "Vijayapura, Karnataka", "Anantapur, AP"] },
  'Little Millet (Kutki)': { msp: 0, minMarket: 4500, maxMarket: 6500, season: 'kharif', unit: 'qtl', cfLink: 'millet', mandis: ["Mandla, MP", "Dindori, MP", "Korba, CG"] },
  'Foxtail Millet (Kangni)': { msp: 0, minMarket: 3500, maxMarket: 5000, season: 'kharif', unit: 'qtl', cfLink: 'millet', mandis: ["Kurnool, AP", "Raichur, Karnataka", "Madurai, TN"] },
  'Barnyard Millet': { msp: 0, minMarket: 4000, maxMarket: 6000, season: 'kharif', unit: 'qtl', cfLink: 'millet', mandis: ["Almora, UK", "Coimbatore, TN", "Madurai, TN"] },
  'Kodo Millet': { msp: 0, minMarket: 3000, maxMarket: 4500, season: 'kharif', unit: 'qtl', cfLink: 'millet', mandis: ["Dindori, MP", "Bastar, CG", "Mandla, MP"] },
  'Horse Gram (Kulthi)': { msp: 0, minMarket: 4500, maxMarket: 7000, season: 'kharif', unit: 'qtl', cfLink: 'horse-gram', mandis: ["Anantapur, AP", "Mysore, Karnataka", "Salem, TN"] },
  'Cowpea (Lobia)': { msp: 0, minMarket: 6000, maxMarket: 9000, season: 'kharif', unit: 'qtl', cfLink: 'cowpea', mandis: ["Hassan, Karnataka", "Pune, Maharashtra", "Jaipur, Rajasthan"] },
  'Black Eyed Peas': { msp: 0, minMarket: 6500, maxMarket: 9500, season: 'kharif', unit: 'qtl', cfLink: 'cowpea', mandis: ["Jodhpur, Rajasthan", "Kanpur, UP", "Indore, MP"] },
  'Linseed (Alsi)': { msp: 6425, minMarket: 5000, maxMarket: 7500, season: 'rabi', unit: 'qtl', cfLink: 'linseed', mandis: ["Sagar, MP", "Damoh, MP", "Raipur, CG", "Nagpur, Maharashtra"] },
  'Niger Seed': { msp: 8731, minMarket: 7000, maxMarket: 9500, season: 'kharif', unit: 'qtl', cfLink: 'niger-seed', mandis: ["Chhindwara, MP", "Koraput, Odisha", "Nashik, Maharashtra"] },
  'Sweet Potato': { msp: 0, minMarket: 1200, maxMarket: 3500, season: 'rabi', unit: 'qtl', cfLink: 'sweet-potato', mandis: ["Kolkata, WB", "Patna, Bihar", "Cuttack, Odisha", "Pune, Maharashtra"] },
  'Tapioca': { msp: 0, minMarket: 1000, maxMarket: 2500, season: 'annual', unit: 'qtl', cfLink: 'tapioca', mandis: ["Salem, TN", "Erode, TN", "Kollam, Kerala"] },
  'Coriander Leaves': { msp: 0, minMarket: 2000, maxMarket: 8000, season: 'volatile', unit: 'qtl', cfLink: 'coriander-leaves', mandis: ["Azadpur, Delhi", "Vashi, Mumbai", "Pune, Maharashtra"] },
  'Fenugreek (Methi)': { msp: 0, minMarket: 4500, maxMarket: 7500, season: 'rabi', unit: 'qtl', cfLink: 'methi', mandis: ["Jaipur, Rajasthan", "Mandsaur, MP", "Kota, Rajasthan", "Jodhpur, Rajasthan"] },
  'Ajwain': { msp: 0, minMarket: 12000, maxMarket: 20000, season: 'rabi', unit: 'qtl', cfLink: 'ajwain', mandis: ["Neemuch, MP", "Chittorgarh, Rajasthan", "Mandsaur, MP"] },
  'Fennel (Saunf)': { msp: 0, minMarket: 10000, maxMarket: 18000, season: 'rabi', unit: 'qtl', cfLink: 'fennel', mandis: ["Unjha, Gujarat", "Sirohi, Rajasthan", "Abu Road, Rajasthan"] },
  'Nutmeg': { msp: 0, minMarket: 40000, maxMarket: 65000, season: 'annual', unit: 'qtl', cfLink: 'nutmeg', mandis: ["Kochi, Kerala", "Ernakulam, Kerala", "Thrissur, Kerala"] },
  'Mace (Javitri)': { msp: 0, minMarket: 80000, maxMarket: 140000, season: 'annual', unit: 'qtl', cfLink: 'mace', mandis: ["Kochi, Kerala", "Ernakulam, Kerala"] },
  'Clove': { msp: 0, minMarket: 60000, maxMarket: 95000, season: 'annual', unit: 'qtl', cfLink: 'clove', mandis: ["Kochi, Kerala", "Nagercoil, TN"] },
  'Vanilla': { msp: 0, minMarket: 200000, maxMarket: 350000, season: 'annual', unit: 'qtl', cfLink: 'vanilla', mandis: ["Wayanad, Kerala", "Idukki, Kerala"] },
  'Saffron': { msp: 0, minMarket: 2000000, maxMarket: 3000000, season: 'annual', unit: 'kg', cfLink: 'saffron', mandis: ["Pampore, J&K", "Srinagar, J&K"] },
  'Betel Leaves': { msp: 0, minMarket: 2500, maxMarket: 8000, season: 'annual', unit: 'qtl', cfLink: 'betel-leaves', mandis: ["Howrah, WB", "Varanasi, UP", "Mysore, Karnataka"] },
  'Cocoa': { msp: 0, minMarket: 15000, maxMarket: 25000, season: 'annual', unit: 'qtl', cfLink: 'cocoa', mandis: ["Campco Mangalore, Karnataka", "Kochi, Kerala"] },
  'Rubber': { msp: 0, minMarket: 15000, maxMarket: 22000, season: 'annual', unit: 'qtl', cfLink: 'rubber', mandis: ["Kottayam, Kerala", "Kochi, Kerala", "Tripura"] },
  'Bottle Gourd (Lauki)': { msp: 0, minMarket: 800, maxMarket: 2500, season: 'volatile', unit: 'qtl', cfLink: 'bottle-gourd', mandis: ["Azadpur, Delhi", "Vashi, Mumbai", "Pune, Maharashtra"] },
  'Bitter Gourd (Karela)': { msp: 0, minMarket: 1500, maxMarket: 4500, season: 'volatile', unit: 'qtl', cfLink: 'bitter-gourd', mandis: ["Azadpur, Delhi", "Vashi, Mumbai", "Pune, Maharashtra", "Bangalore, Karnataka"] },
  'Sponge Gourd (Tori)': { msp: 0, minMarket: 1200, maxMarket: 3500, season: 'volatile', unit: 'qtl', cfLink: 'sponge-gourd', mandis: ["Azadpur, Delhi", "Vashi, Mumbai", "Kolkata, WB"] },
  'Ridge Gourd': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'volatile', unit: 'qtl', cfLink: 'ridge-gourd', mandis: ["Bangalore, Karnataka", "Hyderabad, Telangana", "Chennai, TN"] },
  'Cucumber': { msp: 0, minMarket: 1000, maxMarket: 3000, season: 'volatile', unit: 'qtl', cfLink: 'cucumber', mandis: ["Azadpur, Delhi", "Pune, Maharashtra", "Bangalore, Karnataka"] },
  'Pumpkin': { msp: 0, minMarket: 600, maxMarket: 2000, season: 'volatile', unit: 'qtl', cfLink: 'pumpkin', mandis: ["Azadpur, Delhi", "Kolkata, WB", "Pune, Maharashtra"] },
  'Pointed Gourd (Parwal)': { msp: 0, minMarket: 2500, maxMarket: 6000, season: 'volatile', unit: 'qtl', cfLink: 'pointed-gourd', mandis: ["Kolkata, WB", "Patna, Bihar", "Varanasi, UP"] },
  'Spinach (Palak)': { msp: 0, minMarket: 800, maxMarket: 2500, season: 'volatile', unit: 'qtl', cfLink: 'spinach', mandis: ["Azadpur, Delhi", "Pune, Maharashtra", "Vashi, Mumbai"] },
  'Amaranth Leaves': { msp: 0, minMarket: 1000, maxMarket: 3000, season: 'volatile', unit: 'qtl', cfLink: 'amaranth', mandis: ["Chennai, TN", "Bangalore, Karnataka", "Hyderabad, Telangana"] },
  'Fenugreek Leaves': { msp: 0, minMarket: 1200, maxMarket: 3500, season: 'volatile', unit: 'qtl', cfLink: 'fenugreek-leaves', mandis: ["Azadpur, Delhi", "Pune, Maharashtra", "Jaipur, Rajasthan"] },
  'Mint Leaves (Pudina)': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'volatile', unit: 'qtl', cfLink: 'mint', mandis: ["Azadpur, Delhi", "Lucknow, UP", "Vashi, Mumbai"] },
  'Green Peas': { msp: 0, minMarket: 2500, maxMarket: 6000, season: 'rabi', unit: 'qtl', cfLink: 'green-peas', mandis: ["Azadpur, Delhi", "Amritsar, Punjab", "Haldwani, UK"] },
  'French Beans': { msp: 0, minMarket: 3000, maxMarket: 7000, season: 'volatile', unit: 'qtl', cfLink: 'french-beans', mandis: ["Bangalore, Karnataka", "Pune, Maharashtra", "Nashik, Maharashtra"] },
  'Cluster Beans (Guar)': { msp: 0, minMarket: 2000, maxMarket: 5000, season: 'kharif', unit: 'qtl', cfLink: 'cluster-beans', mandis: ["Jaipur, Rajasthan", "Ahmedabad, Gujarat", "Delhi"] },
  'Drumstick (Moringa)': { msp: 0, minMarket: 2500, maxMarket: 8000, season: 'annual', unit: 'qtl', cfLink: 'drumstick', mandis: ["Dindigul, TN", "Madurai, TN", "Surat, Gujarat"] },
  'Tamarind': { msp: 0, minMarket: 4000, maxMarket: 9000, season: 'annual', unit: 'qtl', cfLink: 'tamarind', mandis: ["Jagdalpur, CG", "Hindupur, AP", "Tumkur, Karnataka"] },
  'Jackfruit': { msp: 0, minMarket: 1000, maxMarket: 3000, season: 'summer', unit: 'qtl', cfLink: 'jackfruit', mandis: ["Kochi, Kerala", "Mangalore, Karnataka", "Kolkata, WB"] },
  'Pineapple': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'annual', unit: 'qtl', cfLink: 'pineapple', mandis: ["Siliguri, WB", "Kochi, Kerala", "Agartala, Tripura"] },
  'Guava': { msp: 0, minMarket: 1500, maxMarket: 5000, season: 'annual', unit: 'qtl', cfLink: 'guava', mandis: ["Allahabad, UP", "Pune, Maharashtra", "Bangalore, Karnataka"] },
  'Sapota (Chikoo)': { msp: 0, minMarket: 2000, maxMarket: 6000, season: 'annual', unit: 'qtl', cfLink: 'sapota', mandis: ["Dahanu, Maharashtra", "Navsari, Gujarat", "Bangalore, Karnataka"] },
  'Custard Apple': { msp: 0, minMarket: 3000, maxMarket: 8000, season: 'kharif', unit: 'qtl', cfLink: 'custard-apple', mandis: ["Hyderabad, Telangana", "Pune, Maharashtra", "Beed, Maharashtra"] },
  'Watermelon': { msp: 0, minMarket: 800, maxMarket: 2500, season: 'summer', unit: 'qtl', cfLink: 'watermelon', mandis: ["Bangalore, Karnataka", "Delhi", "Pune, Maharashtra"] },
  'Muskmelon': { msp: 0, minMarket: 1200, maxMarket: 3500, season: 'summer', unit: 'qtl', cfLink: 'muskmelon', mandis: ["Delhi", "Ahmedabad, Gujarat", "Lucknow, UP"] },
  'Sweet Lime (Mosambi)': { msp: 0, minMarket: 2500, maxMarket: 6000, season: 'annual', unit: 'qtl', cfLink: 'mosambi', mandis: ["Jalna, Maharashtra", "Anantapur, AP", "Delhi"] },
  'Makhana (Fox Nut)': { msp: 0, minMarket: 40000, maxMarket: 80000, season: 'annual', unit: 'qtl', cfLink: 'makhana', mandis: ["Darbhanga, Bihar", "Purnea, Bihar", "Madhubani, Bihar"] },

  // Cereals & Grains
  'Rice (Paddy)': { msp: 2320, minMarket: 2100, maxMarket: 3400, season: 'kharif', unit: 'qtl', cfLink: 'paddy-dhan-basmati', mandis: ['Azadpur, Delhi', 'Vashi, Mumbai', 'Kakinada, AP', 'Burdwan, WB', 'Karnal, Haryana', 'Raipur, CG', 'Amritsar, Punjab', 'Ludhiana, Punjab', 'Tarn Taran, Punjab', 'Sonipat, Haryana', 'Kurukshetra, Haryana', 'Nellore, AP', 'Guntur, AP', 'Bargarh, Odisha', 'Sambalpur, Odisha'] },
  'Wheat': { msp: 2275, minMarket: 2100, maxMarket: 2900, season: 'rabi', unit: 'qtl', cfLink: 'wheat-atta', mandis: ['Azadpur, Delhi', 'Indore, MP', 'Hapur, UP', 'Khanna, Punjab', 'Jaipur, Rajasthan', 'Ujjain, MP', 'Rohtak, Haryana', 'Bhopal, MP', 'Vidisha, MP', 'Sehore, MP', 'Ludhiana, Punjab', 'Patiala, Punjab', 'Kanpur, UP', 'Lucknow, UP', 'Gorakhpur, UP', 'Karnal, Haryana', 'Panipat, Haryana'] },
  'Maize': { msp: 2090, minMarket: 1800, maxMarket: 2600, season: 'kharif', unit: 'qtl', cfLink: 'maize', mandis: ['Gulbarga, Karnataka', 'Davangere, Karnataka', 'Nizamabad, Telangana', 'Chhindwara, MP', 'Begusarai, Bihar', 'Kurnool, AP', 'Karimnagar, Telangana', 'Warangal, Telangana', 'Purnea, Bihar', 'Katihar, Bihar', 'Khagaria, Bihar', 'Dhar, MP', 'Jhabua, MP'] },
  'Jowar (Sorghum)': { msp: 3371, minMarket: 2800, maxMarket: 4200, season: 'rabi', unit: 'qtl', cfLink: 'jowar-sorghum', mandis: ['Solapur, Maharashtra', 'Gulbarga, Karnataka', 'Rajkot, Gujarat', 'Pune, Maharashtra', 'Bellary, Karnataka', 'Dharwad, Karnataka', 'Vijayapura, Karnataka', 'Sangli, Maharashtra', 'Ahmednagar, Maharashtra'] },
  'Bajra (Millet)': { msp: 2625, minMarket: 2200, maxMarket: 3200, season: 'kharif', unit: 'qtl', cfLink: 'bajra-pearl-millet', mandis: ['Jaipur, Rajasthan', 'Bikaner, Rajasthan', 'Ahmedabad, Gujarat', 'Agra, UP', 'Alwar, Rajasthan', 'Jodhpur, Rajasthan', 'Barmer, Rajasthan', 'Nagaur, Rajasthan', 'Morena, MP', 'Bhind, MP', 'Rohtak, Haryana', 'Hisar, Haryana'] },
  'Ragi (Finger Millet)': { msp: 4290, minMarket: 4000, maxMarket: 5500, season: 'kharif', unit: 'qtl', cfLink: 'ragi', mandis: ['Bangalore, Karnataka', 'Tumkur, Karnataka', 'Salem, TN', 'Nashik, Maharashtra', 'Mysore, Karnataka', 'Mandya, Karnataka', 'Hassan, Karnataka'] },
  'Barley (Jau)': { msp: 1850, minMarket: 1700, maxMarket: 2300, season: 'rabi', unit: 'qtl', cfLink: 'barley', mandis: ['Jaipur, Rajasthan', 'Kanpur, UP', 'Hisar, Haryana', 'Gwalior, MP', 'Alwar, Rajasthan', 'Bikaner, Rajasthan', 'Sikar, Rajasthan'] },

  // Pulses (Dal)
  'Tur/Arhar Dal': { msp: 7550, minMarket: 7000, maxMarket: 11000, season: 'kharif', unit: 'qtl', cfLink: 'arhar-tur', mandis: ['Latur, Maharashtra', 'Akola, Maharashtra', 'Gulbarga, Karnataka', 'Indore, MP', 'Jalna, Maharashtra', 'Kanpur, UP'] },
  'Moong Dal': { msp: 8682, minMarket: 7500, maxMarket: 11500, season: 'kharif', unit: 'qtl', cfLink: 'green-gram-moong', mandis: ['Jodhpur, Rajasthan', 'Indore, MP', 'Akola, Maharashtra', 'Harda, MP', 'Latur, Maharashtra'] },
  'Urad Dal': { msp: 7400, minMarket: 6500, maxMarket: 10500, season: 'kharif', unit: 'qtl', cfLink: 'black-gram-urad', mandis: ['Indore, MP', 'Latur, Maharashtra', 'Nagpur, Maharashtra', 'Guntur, AP', 'Jalgaon, Maharashtra'] },
  'Chana (Chickpea)': { msp: 5650, minMarket: 5000, maxMarket: 7200, season: 'rabi', unit: 'qtl', cfLink: 'gram-chana', mandis: ['Latur, Maharashtra', 'Indore, MP', 'Bikaner, Rajasthan', 'Jaipur, Rajasthan', 'Akola, Maharashtra', 'Rajkot, Gujarat'] },
  'Masoor (Lentil)': { msp: 6425, minMarket: 5500, maxMarket: 7800, season: 'rabi', unit: 'qtl', cfLink: 'masoor', mandis: ['Indore, MP', 'Raipur, CG', 'Varanasi, UP', 'Sagar, MP', 'Kanpur, UP'] },
  'Peas (Matar)': { msp: 0, minMarket: 4000, maxMarket: 6500, season: 'rabi', unit: 'qtl', cfLink: 'peas', mandis: ['Lucknow, UP', 'Kanpur, UP', 'Jabalpur, MP', 'Amritsar, Punjab'] },
  'Moth Bean': { msp: 0, minMarket: 6000, maxMarket: 8500, season: 'kharif', unit: 'qtl', cfLink: 'moth', mandis: ['Bikaner, Rajasthan', 'Jodhpur, Rajasthan', 'Jaipur, Rajasthan'] },

  // Oilseeds
  'Mustard': { msp: 5950, minMarket: 5200, maxMarket: 7500, season: 'rabi', unit: 'qtl', cfLink: 'mustard', mandis: ['Alwar, Rajasthan', 'Bharatpur, Rajasthan', 'Agra, UP', 'Morena, MP', 'Jaipur, Rajasthan', 'Hissar, Haryana', 'Bikaner, Rajasthan', 'Gwalior, MP', 'Bhind, MP'] },
  'Groundnut': { msp: 6377, minMarket: 5500, maxMarket: 8000, season: 'kharif', unit: 'qtl', cfLink: 'groundnut', mandis: ['Junagadh, Gujarat', 'Rajkot, Gujarat', 'Kurnool, AP', 'Bikaner, Rajasthan', 'Anantapur, AP', 'Jamnagar, Gujarat', 'Amreli, Gujarat', 'Gondal, Gujarat', 'Bhavnagar, Gujarat'] },
  'Soybean': { msp: 4892, minMarket: 4200, maxMarket: 6000, season: 'kharif', unit: 'qtl', cfLink: 'soyabean', mandis: ['Indore, MP', 'Khandwa, MP', 'Latur, Maharashtra', 'Nagpur, Maharashtra', 'Ujjain, MP', 'Kota, Rajasthan', 'Dewas, MP', 'Dhar, MP', 'Sehore, MP', 'Harda, MP', 'Parbhani, Maharashtra'] },
  'Sunflower': { msp: 7280, minMarket: 6000, maxMarket: 8500, season: 'kharif', unit: 'qtl', cfLink: 'sunflower', mandis: ['Nandyal, AP', 'Raichur, Karnataka', 'Bidar, Karnataka', 'Latur, Maharashtra', 'Hassan, Karnataka', 'Chitradurga, Karnataka'] },
  'Sesame (Til)': { msp: 9267, minMarket: 10000, maxMarket: 15000, season: 'kharif', unit: 'qtl', cfLink: 'sesame', mandis: ['Rajkot, Gujarat', 'Amreli, Gujarat', 'Jodhpur, Rajasthan', 'Jhansi, UP', 'Surendranagar, Gujarat', 'Bhavnagar, Gujarat'] },
  'Safflower': { msp: 5940, minMarket: 4500, maxMarket: 6000, season: 'rabi', unit: 'qtl', cfLink: 'safflower', mandis: ['Parbhani, Maharashtra', 'Hingoli, Maharashtra', 'Gadag, Karnataka', 'Nanded, Maharashtra', 'Latur, Maharashtra'] },
  'Castor Seed': { msp: 0, minMarket: 5000, maxMarket: 7000, season: 'kharif', unit: 'qtl', cfLink: 'castor', mandis: ['Palanpur, Gujarat', 'Mehsana, Gujarat', 'Guntur, AP', 'Rajkot, Gujarat', 'Patan, Gujarat', 'Banaskantha, Gujarat', 'Kutch, Gujarat'] },

  // Commercial / Cash Crops
  'Cotton (Long)': { msp: 7121, minMarket: 6200, maxMarket: 8500, season: 'kharif', unit: 'qtl', cfLink: 'cotton', mandis: ['Rajkot, Gujarat', 'Guntur, AP', 'Adilabad, Telangana', 'Nagpur, Maharashtra', 'Bhatinda, Punjab', 'Sirsa, Haryana', 'Amravati, Maharashtra'] },
  'Sugarcane': { msp: 340, minMarket: 310, maxMarket: 400, season: 'annual', unit: 'qtl', cfLink: 'sugarcane', mandis: ['Kolhapur, Maharashtra', 'Muzaffarnagar, UP', 'Belgaum, Karnataka', 'Meerut, UP', 'Surat, Gujarat'] },
  'Jute': { msp: 5335, minMarket: 4800, maxMarket: 6500, season: 'kharif', unit: 'qtl', cfLink: 'jute', mandis: ['Kolkata, WB', 'Siliguri, WB', 'Dhubri, Assam', 'Purnea, Bihar', 'Nagaon, Assam'] },
  'Tobacco': { msp: 0, minMarket: 15000, maxMarket: 25000, season: 'rabi', unit: 'qtl', cfLink: 'tobacco', mandis: ['Guntur, AP', 'Prakasam, AP', 'Mysore, Karnataka', 'Anand, Gujarat'] },
  'Guar Seed': { msp: 0, minMarket: 4500, maxMarket: 6500, season: 'kharif', unit: 'qtl', cfLink: 'guar', mandis: ['Jodhpur, Rajasthan', 'Bikaner, Rajasthan', 'Sriganganagar, Rajasthan', 'Hisar, Haryana'] },

  // Spices
  'Turmeric': { msp: 0, minMarket: 7000, maxMarket: 16000, season: 'rabi', unit: 'qtl', cfLink: 'turmeric', mandis: ['Erode, Tamil Nadu', 'Nizamabad, Telangana', 'Sangli, Maharashtra', 'Duggirala, AP', 'Salem, TN'] },
  'Chilli (Dry)': { msp: 0, minMarket: 8000, maxMarket: 20000, season: 'rabi', unit: 'qtl', cfLink: 'chillies-red', mandis: ['Guntur, AP', 'Khammam, Telangana', 'Byadgi, Karnataka', 'Warangal, Telangana', 'Nagpur, Maharashtra'] },
  'Cumin (Jeera)': { msp: 0, minMarket: 25000, maxMarket: 40000, season: 'rabi', unit: 'qtl', cfLink: 'jeera', mandis: ['Unjha, Gujarat', 'Rajkot, Gujarat', ' जोधपुर, Rajasthan', 'Nagaur, Rajasthan'] },
  'Coriander': { msp: 0, minMarket: 6000, maxMarket: 9000, season: 'rabi', unit: 'qtl', cfLink: 'coriander', mandis: ['Ramganj Mandi, Rajasthan', 'Baran, Rajasthan', 'Guna, MP', 'Kumbhraj, MP'] },
  'Garlic': { msp: 0, minMarket: 5000, maxMarket: 15000, season: 'rabi', unit: 'qtl', cfLink: 'garlic', mandis: ['Mandsaur, MP', 'Neemuch, MP', 'Lasalgaon, Maharashtra', 'Kota, Rajasthan', 'Jamnagar, Gujarat'] },
  'Ginger': { msp: 0, minMarket: 6000, maxMarket: 14000, season: 'kharif', unit: 'qtl', cfLink: 'ginger', mandis: ['Kochi, Kerala', 'Bangalore, Karnataka', 'Guwahati, Assam', 'Aurangabad, Maharashtra'] },
  'Black Pepper': { msp: 0, minMarket: 45000, maxMarket: 60000, season: 'annual', unit: 'qtl', cfLink: 'pepper', mandis: ['Kochi, Kerala', 'Kozhikode, Kerala', 'Mangalore, Karnataka', 'Madikeri, Karnataka'] },
  'Cardamom': { msp: 0, minMarket: 120000, maxMarket: 220000, season: 'annual', unit: 'qtl', cfLink: 'cardamom', mandis: ['Vandanmedu, Kerala', 'Bodinayakanur, TN', 'Sakleshpur, Karnataka'] },

  // Vegetables
  'Onion': { msp: 0, minMarket: 800, maxMarket: 4500, season: 'volatile', unit: 'qtl', cfLink: 'onion', mandis: ['Lasalgaon, Maharashtra', 'Nashik, Maharashtra', 'Azadpur, Delhi', 'Bangalore, Karnataka', 'Pune, Maharashtra', 'Ahmednagar, Maharashtra', 'Pimpalgaon, Maharashtra', 'Solapur, Maharashtra', 'Kurnool, AP', 'Indore, MP', 'Bhavnagar, Gujarat'] },
  'Potato': { msp: 0, minMarket: 600, maxMarket: 2500, season: 'volatile', unit: 'qtl', cfLink: 'aalu', mandis: ['Agra, UP', 'Azadpur, Delhi', 'Kolkata, WB', 'Jalandhar, Punjab', 'Farrukhabad, UP', 'Hassan, Karnataka', 'Kanpur, UP', 'Pune, Maharashtra', 'Indore, MP', 'Patna, Bihar', 'Burdwan, WB'] },
  'Tomato': { msp: 0, minMarket: 500, maxMarket: 7200, season: 'volatile', unit: 'qtl', cfLink: 'tomato', mandis: ['Kolar, Karnataka', 'Madanapalle, AP', 'Azadpur, Delhi', 'Nashik, Maharashtra', 'Pune, Maharashtra', 'Pimpalgaon, Maharashtra', 'Chittoor, AP', 'Khammam, Telangana', 'Ranchi, Jharkhand', 'Solan, HP'] },
  'Cabbage': { msp: 0, minMarket: 400, maxMarket: 2500, season: 'volatile', unit: 'qtl', cfLink: 'cabbage', mandis: ['Azadpur, Delhi', 'Bangalore, Karnataka', 'Pune, Maharashtra', 'Vashi, Mumbai', 'Kolkata, WB', 'Nashik, Maharashtra', 'Surat, Gujarat'] },
  'Cauliflower': { msp: 0, minMarket: 500, maxMarket: 3000, season: 'volatile', unit: 'qtl', cfLink: 'cauliflower', mandis: ['Azadpur, Delhi', 'Kolkata, WB', 'Haldwani, Uttarakhand', 'Vashi, Mumbai', 'Ranchi, Jharkhand', 'Indore, MP', 'Agra, UP'] },
  'Brinjal': { msp: 0, minMarket: 800, maxMarket: 3500, season: 'volatile', unit: 'qtl', cfLink: 'brinjal', mandis: ['Azadpur, Delhi', 'Nashik, Maharashtra', 'Surat, Gujarat', 'Bangalore, Karnataka', 'Pune, Maharashtra', 'Kolkata, WB', 'Ranchi, Jharkhand'] },
  'Okra (Bhindi)': { msp: 0, minMarket: 1500, maxMarket: 5000, season: 'volatile', unit: 'qtl', cfLink: 'bhindi', mandis: ['Azadpur, Delhi', 'Vashi, Mumbai', 'Ahmedabad, Gujarat', 'Jaipur, Rajasthan', 'Kanpur, UP', 'Bangalore, Karnataka'] },
  'Green Chilli': { msp: 0, minMarket: 1500, maxMarket: 6000, season: 'volatile', unit: 'qtl', cfLink: 'green-chilli', mandis: ['Azadpur, Delhi', 'Vashi, Mumbai', 'Pune, Maharashtra', 'Bangalore, Karnataka', 'Guntur, AP', 'Khammam, Telangana', 'Nagpur, Maharashtra'] },
  'Carrot': { msp: 0, minMarket: 800, maxMarket: 3000, season: 'rabi', unit: 'qtl', cfLink: 'carrot', mandis: ['Azadpur, Delhi', 'Ooty, TN', 'Panipat, Haryana', 'Nashik, Maharashtra', 'Bangalore, Karnataka', 'Indore, MP'] },
  'Radish': { msp: 0, minMarket: 400, maxMarket: 1500, season: 'rabi', unit: 'qtl', cfLink: 'radish', mandis: ['Azadpur, Delhi', 'Vashi, Mumbai', 'Kolkata, WB', 'Pune, Maharashtra', 'Panipat, Haryana'] },

  // Fruits
  'Banana': { msp: 0, minMarket: 800, maxMarket: 2500, season: 'annual', unit: 'qtl', cfLink: 'banana', mandis: ['Jalgaon, Maharashtra', 'Anantapur, AP', 'Ernakulam, Kerala', 'Trichy, TN', 'Burhanpur, MP'] },
  'Mango': { msp: 0, minMarket: 2000, maxMarket: 8000, season: 'summer', unit: 'qtl', cfLink: 'mango-raw-ripe', mandis: ['Ratnagiri, Maharashtra', 'Lucknow, UP', 'Malda, WB', 'Valsad, Gujarat', 'Vijayawada, AP'] },
  'Apple': { msp: 0, minMarket: 4000, maxMarket: 12000, season: 'kharif', unit: 'qtl', cfLink: 'apple', mandis: ['Shimla, HP', 'Srinagar, J&K', 'Azadpur, Delhi', 'Chandigarh'] },
  'Grapes': { msp: 0, minMarket: 3000, maxMarket: 8000, season: 'rabi', unit: 'qtl', cfLink: 'grapes', mandis: ['Nashik, Maharashtra', 'Sangli, Maharashtra', 'Bangalore, Karnataka'] },
  'Pomegranate': { msp: 0, minMarket: 4000, maxMarket: 15000, season: 'annual', unit: 'qtl', cfLink: 'pomegranate', mandis: ['Solapur, Maharashtra', 'Nashik, Maharashtra', 'Anantapur, AP', 'Ahmednagar, Maharashtra'] },
  'Papaya': { msp: 0, minMarket: 800, maxMarket: 2500, season: 'annual', unit: 'qtl', cfLink: 'papaya', mandis: ['Pune, Maharashtra', 'Anantapur, AP', 'Surat, Gujarat', 'Bangalore, Karnataka'] },
  'Orange/Kinnow': { msp: 0, minMarket: 1500, maxMarket: 5000, season: 'rabi', unit: 'qtl', cfLink: 'orange', mandis: ['Nagpur, Maharashtra', 'Abohar, Punjab', 'Jhalawar, Rajasthan', 'Amravati, Maharashtra'] },
  'Lemon': { msp: 0, minMarket: 2000, maxMarket: 8000, season: 'annual', unit: 'qtl', cfLink: 'lemon', mandis: ['Azadpur, Delhi', 'Vijayawada, AP', 'Ahmedabad, Gujarat', 'Chennai, TN'] },

  // Others
  'Coconut': { msp: 0, minMarket: 2500, maxMarket: 4000, season: 'annual', unit: '1000 nuts', cfLink: 'coconut', mandis: ['Alappuzha, Kerala', 'Tiptur, Karnataka', 'Coimbatore, TN', 'Kozhikode, Kerala', 'Arsikere, Karnataka'] },
  'Arecanut (Supari)': { msp: 0, minMarket: 30000, maxMarket: 55000, season: 'annual', unit: 'qtl', cfLink: 'arecanut', mandis: ['Shimoga, Karnataka', 'Sirsi, Karnataka', 'Campco Mangalore, Karnataka', 'Rishabdeo, Kerala'] },
  'Cashew Nut': { msp: 0, minMarket: 6000, maxMarket: 12000, season: 'annual', unit: 'qtl', cfLink: 'cashew', mandis: ['Kollam, Kerala', 'Mangalore, Karnataka', 'Palasa, AP', 'Ratnagiri, Maharashtra'] },
  'Tea': { msp: 0, minMarket: 12000, maxMarket: 25000, season: 'annual', unit: 'qtl', cfLink: 'tea', mandis: ['Guwahati, Assam', 'Siliguri, WB', 'Coonoor, TN', 'Kochi, Kerala'] },
  'Coffee': { msp: 0, minMarket: 15000, maxMarket: 35000, season: 'annual', unit: 'qtl', cfLink: 'coffee', mandis: ['Chikmagalur, Karnataka', 'Madikeri, Karnataka', 'Hassan, Karnataka'] },
  'Cinnamon': { msp: 0, minMarket: 15000, maxMarket: 25000, season: 'annual', unit: 'qtl', cfLink: 'cinnamon', mandis: ["Kochi, Kerala", "Thrissur, Kerala"] },
  'Bay Leaf (Tejpatta)': { msp: 0, minMarket: 5000, maxMarket: 8000, season: 'annual', unit: 'qtl', cfLink: 'bay-leaf', mandis: ["Siliguri, WB", "Guwahati, Assam"] },
  'Curry Leaves': { msp: 0, minMarket: 2000, maxMarket: 5000, season: 'annual', unit: 'qtl', cfLink: 'curry-leaves', mandis: ["Coimbatore, TN", "Salem, TN"] },
  'Mustard Seeds (Black)': { msp: 0, minMarket: 6000, maxMarket: 8500, season: 'rabi', unit: 'qtl', cfLink: 'mustard-seeds', mandis: ["Jaipur, Rajasthan", "Agra, UP"] },
  'Tamarind Seed': { msp: 0, minMarket: 1500, maxMarket: 3000, season: 'annual', unit: 'qtl', cfLink: 'tamarind-seed', mandis: ["Jagdalpur, CG", "Tumkur, Karnataka"] },
  'Amaranth (Rajgira)': { msp: 0, minMarket: 5000, maxMarket: 8000, season: 'kharif', unit: 'qtl', cfLink: 'amaranth', mandis: ["Pune, Maharashtra", "Hassan, Karnataka"] },
  'Buckwheat (Kuttu)': { msp: 0, minMarket: 6000, maxMarket: 10000, season: 'kharif', unit: 'qtl', cfLink: 'buckwheat', mandis: ["Shimla, HP", "Almora, UK"] },
  'Proso Millet (Chena)': { msp: 0, minMarket: 3500, maxMarket: 5000, season: 'kharif', unit: 'qtl', cfLink: 'proso-millet', mandis: ["Madurai, TN", "Coimbatore, TN"] },
  'Ash Gourd (Petha)': { msp: 0, minMarket: 1000, maxMarket: 2500, season: 'volatile', unit: 'qtl', cfLink: 'ash-gourd', mandis: ["Agra, UP", "Kolkata, WB"] },
  'Snake Gourd (Chichinda)': { msp: 0, minMarket: 1200, maxMarket: 3000, season: 'volatile', unit: 'qtl', cfLink: 'snake-gourd', mandis: ["Bangalore, Karnataka", "Chennai, TN"] },
  'Ivy Gourd (Tindora)': { msp: 0, minMarket: 2000, maxMarket: 5000, season: 'volatile', unit: 'qtl', cfLink: 'ivy-gourd', mandis: ["Surat, Gujarat", "Ahmedabad, Gujarat"] },
  'Colocasia (Arbi)': { msp: 0, minMarket: 2500, maxMarket: 6000, season: 'volatile', unit: 'qtl', cfLink: 'colocasia', mandis: ["Azadpur, Delhi", "Vashi, Mumbai"] },
  'Yam (Suran/Jimikand)': { msp: 0, minMarket: 3000, maxMarket: 7000, season: 'volatile', unit: 'qtl', cfLink: 'yam', mandis: ["Patna, Bihar", "Kolkata, WB"] },
  'Turnip (Shalgam)': { msp: 0, minMarket: 800, maxMarket: 2000, season: 'rabi', unit: 'qtl', cfLink: 'turnip', mandis: ["Azadpur, Delhi", "Panipat, Haryana"] },
  'Beetroot': { msp: 0, minMarket: 1000, maxMarket: 3000, season: 'rabi', unit: 'qtl', cfLink: 'beetroot', mandis: ["Nashik, Maharashtra", "Pune, Maharashtra"] },
  'Spring Onion': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'volatile', unit: 'qtl', cfLink: 'spring-onion', mandis: ["Nashik, Maharashtra", "Azadpur, Delhi"] },
  'Broccoli': { msp: 0, minMarket: 4000, maxMarket: 10000, season: 'rabi', unit: 'qtl', cfLink: 'broccoli', mandis: ["Haldwani, UK", "Pune, Maharashtra"] },
  'Mushroom (Button)': { msp: 0, minMarket: 10000, maxMarket: 18000, season: 'volatile', unit: 'qtl', cfLink: 'mushroom', mandis: ["Solan, HP", "Sonipat, Haryana"] },
  'Plum': { msp: 0, minMarket: 3000, maxMarket: 8000, season: 'summer', unit: 'qtl', cfLink: 'plum', mandis: ["Shimla, HP", "Srinagar, J&K"] },
  'Peach': { msp: 0, minMarket: 4000, maxMarket: 9000, season: 'summer', unit: 'qtl', cfLink: 'peach', mandis: ["Shimla, HP", "Nainital, UK"] },
  'Pear': { msp: 0, minMarket: 2000, maxMarket: 6000, season: 'summer', unit: 'qtl', cfLink: 'pear', mandis: ["Shimla, HP", "Srinagar, J&K"] },
  'Cherry': { msp: 0, minMarket: 15000, maxMarket: 30000, season: 'summer', unit: 'qtl', cfLink: 'cherry', mandis: ["Srinagar, J&K", "Shimla, HP"] },
  'Strawberry': { msp: 0, minMarket: 10000, maxMarket: 25000, season: 'rabi', unit: 'qtl', cfLink: 'strawberry', mandis: ["Mahabaleshwar, Maharashtra", "Panchgani, Maharashtra"] },
  'Lychee': { msp: 0, minMarket: 5000, maxMarket: 12000, season: 'summer', unit: 'qtl', cfLink: 'lychee', mandis: ["Muzaffarpur, Bihar", "Tezpur, Assam"] },
  'Water Caltrop (Singhara)': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'kharif', unit: 'qtl', cfLink: 'singhara', mandis: ["Darbhanga, Bihar", "Lucknow, UP"] },
  'Kiwi': { msp: 0, minMarket: 15000, maxMarket: 30000, season: 'annual', unit: 'qtl', cfLink: 'kiwi', mandis: ["Arunachal Pradesh", "Solan, HP"] },
  'Amla (Indian Gooseberry)': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'rabi', unit: 'qtl', cfLink: 'amla', mandis: ["Pratapgarh, UP", "Jaipur, Rajasthan"] },
  'Ber (Jujube)': { msp: 0, minMarket: 1000, maxMarket: 3000, season: 'rabi', unit: 'qtl', cfLink: 'ber', mandis: ["Bikaner, Rajasthan", "Hisar, Haryana"] },
  'Arecanut (Red)': { msp: 0, minMarket: 40000, maxMarket: 60000, season: 'annual', unit: 'qtl', cfLink: 'arecanut-red', mandis: ["Shimoga, Karnataka", "Sirsi, Karnataka"] },
  'Sisal Fiber': { msp: 0, minMarket: 4000, maxMarket: 8000, season: 'annual', unit: 'qtl', cfLink: 'sisal', mandis: ["Sambalpur, Odisha", "Ranchi, Jharkhand"] },
  'Eucalyptus Wood': { msp: 0, minMarket: 400, maxMarket: 800, season: 'annual', unit: 'qtl', cfLink: 'eucalyptus', mandis: ["Yamunanagar, Haryana", "Hoshiarpur, Punjab"] },
  'Poplar Wood': { msp: 0, minMarket: 600, maxMarket: 1200, season: 'annual', unit: 'qtl', cfLink: 'poplar', mandis: ["Yamunanagar, Haryana", "Ludhiana, Punjab"] },
  'Bamboo': { msp: 0, minMarket: 300, maxMarket: 1000, season: 'annual', unit: 'qtl', cfLink: 'bamboo', mandis: ["Guwahati, Assam", "Dimapur, Nagaland"] },
  // ===== ADDITIONAL CROPS (expanded categories) =====
  'Pearl Millet (Cumbu)': { msp: 2625, minMarket: 2200, maxMarket: 3200, season: 'kharif', unit: 'qtl', cfLink: 'pearl-millet', mandis: ['Erode, TN', 'Coimbatore, TN', 'Madurai, TN', 'Salem, TN'] },
  'Proso Millet (Panivaragu)': { msp: 0, minMarket: 3500, maxMarket: 5500, season: 'kharif', unit: 'qtl', cfLink: 'proso-millet-2', mandis: ['Coimbatore, TN', 'Salem, TN', 'Bellary, Karnataka'] },
  'Teff': { msp: 0, minMarket: 5000, maxMarket: 8000, season: 'kharif', unit: 'qtl', cfLink: 'teff', mandis: ['Bangalore, Karnataka', 'Hyderabad, Telangana'] },
  'Broken Wheat (Dalia)': { msp: 0, minMarket: 3000, maxMarket: 5000, season: 'rabi', unit: 'qtl', cfLink: 'dalia', mandis: ['Indore, MP', 'Bhopal, MP', 'Kanpur, UP', 'Delhi'] },
  'Puffed Rice (Murmura)': { msp: 0, minMarket: 3500, maxMarket: 5500, season: 'annual', unit: 'qtl', cfLink: 'murmura', mandis: ['Kolkata, WB', 'Patna, Bihar', 'Cuttack, Odisha', 'Ranchi, Jharkhand'] },
  'Poha (Flattened Rice)': { msp: 0, minMarket: 3000, maxMarket: 5000, season: 'annual', unit: 'qtl', cfLink: 'poha', mandis: ['Indore, MP', 'Bhopal, MP', 'Nagpur, Maharashtra', 'Raipur, CG'] },
  'Rajma (Kidney Beans)': { msp: 0, minMarket: 7000, maxMarket: 12000, season: 'rabi', unit: 'qtl', cfLink: 'rajma', mandis: ['Jammu, J&K', 'Shimla, HP', 'Haldwani, Uttarakhand', 'Srinagar, J&K', 'Almora, UK', 'Delhi'] },
  'Navy Beans': { msp: 0, minMarket: 6000, maxMarket: 9000, season: 'rabi', unit: 'qtl', cfLink: 'navy-beans', mandis: ['Indore, MP', 'Kanpur, UP', 'Delhi'] },
  'Lima Beans': { msp: 0, minMarket: 7500, maxMarket: 11000, season: 'kharif', unit: 'qtl', cfLink: 'lima-beans', mandis: ['Bangalore, Karnataka', 'Pune, Maharashtra', 'Nashik, Maharashtra'] },
  'Field Beans (Avarekalu)': { msp: 0, minMarket: 5500, maxMarket: 8000, season: 'rabi', unit: 'qtl', cfLink: 'field-beans', mandis: ['Hassan, Karnataka', 'Mysore, Karnataka', 'Shimoga, Karnataka', 'Mandya, Karnataka'] },
  'Kulthi Dal (Processed)': { msp: 0, minMarket: 5500, maxMarket: 8500, season: 'kharif', unit: 'qtl', cfLink: 'kulthi-dal', mandis: ['Ranchi, Jharkhand', 'Daltonganj, Jharkhand', 'Raigarh, CG'] },
  'Pigeon Peas (Whole)': { msp: 7550, minMarket: 6800, maxMarket: 10000, season: 'kharif', unit: 'qtl', cfLink: 'pigeon-peas', mandis: ['Latur, Maharashtra', 'Akola, Maharashtra', 'Gulbarga, Karnataka', 'Indore, MP', 'Wardha, Maharashtra', 'Yavatmal, Maharashtra'] },
  'Coconut Oil Copra': { msp: 11582, minMarket: 10000, maxMarket: 15000, season: 'annual', unit: 'qtl', cfLink: 'copra', mandis: ['Kochi, Kerala', 'Alappuzha, Kerala', 'Kozhikode, Kerala', 'Tiptur, Karnataka', 'Arsikere, Karnataka', 'Coimbatore, TN'] },
  'Palm Oil (Fresh Fruit)': { msp: 0, minMarket: 1200, maxMarket: 2500, season: 'annual', unit: 'qtl', cfLink: 'palm-oil', mandis: ['West Godavari, AP', 'East Godavari, AP', 'Ernakulam, Kerala', 'Mizoram'] },
  'Niger Seeds (Ramtil)': { msp: 8731, minMarket: 6500, maxMarket: 9500, season: 'kharif', unit: 'qtl', cfLink: 'ramtil', mandis: ['Chhindwara, MP', 'Koraput, Odisha', 'Ranchi, Jharkhand', 'Chaibasa, Jharkhand'] },
  'Star Anise': { msp: 0, minMarket: 30000, maxMarket: 50000, season: 'annual', unit: 'qtl', cfLink: 'star-anise', mandis: ['Guwahati, Assam', 'Tinsukia, Assam', 'Dibrugarh, Assam'] },
  'White Pepper': { msp: 0, minMarket: 50000, maxMarket: 75000, season: 'annual', unit: 'qtl', cfLink: 'white-pepper', mandis: ['Kochi, Kerala', 'Kozhikode, Kerala', 'Mangalore, Karnataka'] },
  'Long Pepper (Pipli)': { msp: 0, minMarket: 25000, maxMarket: 45000, season: 'annual', unit: 'qtl', cfLink: 'long-pepper', mandis: ['Guwahati, Assam', 'Dibrugarh, Assam', 'Kochi, Kerala'] },
  'Poppy Seeds (Khus Khus)': { msp: 0, minMarket: 80000, maxMarket: 120000, season: 'rabi', unit: 'qtl', cfLink: 'poppy-seeds', mandis: ['Neemuch, MP', 'Mandsaur, MP', 'Chittorgarh, Rajasthan', 'Pratapgarh, UP'] },
  'Asafoetida (Hing)': { msp: 0, minMarket: 150000, maxMarket: 250000, season: 'annual', unit: 'qtl', cfLink: 'hing', mandis: ['Delhi', 'Unjha, Gujarat', 'Jodhpur, Rajasthan'] },
  'Celery Seeds (Ajmoda)': { msp: 0, minMarket: 10000, maxMarket: 18000, season: 'rabi', unit: 'qtl', cfLink: 'celery-seeds', mandis: ['Jaipur, Rajasthan', 'Mandsaur, MP', 'Unjha, Gujarat'] },
  'Dried Ginger (Sonth)': { msp: 0, minMarket: 15000, maxMarket: 30000, season: 'rabi', unit: 'qtl', cfLink: 'sonth', mandis: ['Kochi, Kerala', 'Mangalore, Karnataka', 'Guwahati, Assam', 'Surat, Gujarat'] },
  'Mace Powder': { msp: 0, minMarket: 90000, maxMarket: 150000, season: 'annual', unit: 'qtl', cfLink: 'mace-powder', mandis: ['Kochi, Kerala', 'Kozhikode, Kerala'] },
  'Elephant Foot Yam (Zimikand)': { msp: 0, minMarket: 2000, maxMarket: 5000, season: 'kharif', unit: 'qtl', cfLink: 'elephant-yam', mandis: ['Patna, Bihar', 'Kolkata, WB', 'Ranchi, Jharkhand', 'Bhubaneswar, Odisha', 'Varanasi, UP'] },
  'Chow Chow (Chayote)': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'volatile', unit: 'qtl', cfLink: 'chayote', mandis: ['Bangalore, Karnataka', 'Ooty, TN', 'Shimla, HP', 'Shillong, Meghalaya'] },
  'Banana Stem': { msp: 0, minMarket: 500, maxMarket: 1500, season: 'annual', unit: 'qtl', cfLink: 'banana-stem', mandis: ['Chennai, TN', 'Madurai, TN', 'Coimbatore, TN', 'Kochi, Kerala'] },
  'Banana Flower': { msp: 0, minMarket: 1000, maxMarket: 3000, season: 'annual', unit: 'qtl', cfLink: 'banana-flower', mandis: ['Chennai, TN', 'Bangalore, Karnataka', 'Kochi, Kerala', 'Kolkata, WB'] },
  'Lotus Root (Kamal Kakdi)': { msp: 0, minMarket: 3000, maxMarket: 8000, season: 'volatile', unit: 'qtl', cfLink: 'lotus-root', mandis: ['Srinagar, J&K', 'Lucknow, UP', 'Kolkata, WB', 'Delhi'] },
  'Red Cabbage': { msp: 0, minMarket: 2000, maxMarket: 5000, season: 'rabi', unit: 'qtl', cfLink: 'red-cabbage', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Ooty, TN', 'Shimla, HP'] },
  'Leek': { msp: 0, minMarket: 3000, maxMarket: 7000, season: 'rabi', unit: 'qtl', cfLink: 'leek', mandis: ['Shimla, HP', 'Ooty, TN', 'Haldwani, UK'] },
  'Zucchini': { msp: 0, minMarket: 2500, maxMarket: 6000, season: 'volatile', unit: 'qtl', cfLink: 'zucchini', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Delhi'] },
  'Baby Corn': { msp: 0, minMarket: 3000, maxMarket: 7000, season: 'volatile', unit: 'qtl', cfLink: 'baby-corn', mandis: ['Delhi', 'Pune, Maharashtra', 'Bangalore, Karnataka', 'Hyderabad, Telangana'] },
  'Sweet Corn': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'kharif', unit: 'qtl', cfLink: 'sweet-corn', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Hyderabad, Telangana', 'Delhi', 'Nashik, Maharashtra'] },
  'Bell Pepper (Shimla Mirch)': { msp: 0, minMarket: 3000, maxMarket: 8000, season: 'volatile', unit: 'qtl', cfLink: 'bell-pepper', mandis: ['Azadpur, Delhi', 'Bangalore, Karnataka', 'Pune, Maharashtra', 'Hyderabad, Telangana', 'Solan, HP', 'Ooty, TN'] },
  'Lettuce': { msp: 0, minMarket: 4000, maxMarket: 10000, season: 'rabi', unit: 'qtl', cfLink: 'lettuce', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Delhi', 'Ooty, TN'] },
  'Celery': { msp: 0, minMarket: 3500, maxMarket: 8000, season: 'rabi', unit: 'qtl', cfLink: 'celery', mandis: ['Pune, Maharashtra', 'Shimla, HP', 'Ooty, TN'] },
  'Asparagus': { msp: 0, minMarket: 15000, maxMarket: 30000, season: 'rabi', unit: 'qtl', cfLink: 'asparagus', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Delhi'] },
  'Artichoke': { msp: 0, minMarket: 10000, maxMarket: 20000, season: 'rabi', unit: 'qtl', cfLink: 'artichoke', mandis: ['Shimla, HP', 'Ooty, TN'] },
  'Cherry Tomato': { msp: 0, minMarket: 4000, maxMarket: 10000, season: 'volatile', unit: 'qtl', cfLink: 'cherry-tomato', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Hyderabad, Telangana', 'Delhi'] },
  'Curry Leaf (Bulk)': { msp: 0, minMarket: 3000, maxMarket: 7000, season: 'annual', unit: 'qtl', cfLink: 'curry-leaf-bulk', mandis: ['Chennai, TN', 'Coimbatore, TN', 'Bangalore, Karnataka', 'Hyderabad, Telangana'] },
  'Dragon Fruit': { msp: 0, minMarket: 10000, maxMarket: 25000, season: 'annual', unit: 'qtl', cfLink: 'dragon-fruit', mandis: ['Hyderabad, Telangana', 'Pune, Maharashtra', 'Bangalore, Karnataka', 'Ahmedabad, Gujarat', 'Kutch, Gujarat'] },
  'Avocado': { msp: 0, minMarket: 15000, maxMarket: 35000, season: 'annual', unit: 'qtl', cfLink: 'avocado', mandis: ['Bangalore, Karnataka', 'Kodagu, Karnataka', 'Nilgiris, TN', 'Wayanad, Kerala'] },
  'Fig (Anjeer)': { msp: 0, minMarket: 8000, maxMarket: 20000, season: 'summer', unit: 'qtl', cfLink: 'fig', mandis: ['Pune, Maharashtra', 'Solapur, Maharashtra', 'Vijayapura, Karnataka', 'Belgaum, Karnataka'] },
  'Passion Fruit': { msp: 0, minMarket: 8000, maxMarket: 20000, season: 'annual', unit: 'qtl', cfLink: 'passion-fruit', mandis: ['Wayanad, Kerala', 'Kodagu, Karnataka', 'Shillong, Meghalaya', 'Aizawl, Mizoram'] },
  'Persimmon (Japani Phal)': { msp: 0, minMarket: 5000, maxMarket: 12000, season: 'rabi', unit: 'qtl', cfLink: 'persimmon', mandis: ['Shimla, HP', 'Srinagar, J&K', 'Manali, HP'] },
  'Rambutan': { msp: 0, minMarket: 15000, maxMarket: 30000, season: 'kharif', unit: 'qtl', cfLink: 'rambutan', mandis: ['Pathanamthitta, Kerala', 'Kottayam, Kerala', 'Wayanad, Kerala'] },
  'Mangosteen': { msp: 0, minMarket: 20000, maxMarket: 40000, season: 'kharif', unit: 'qtl', cfLink: 'mangosteen', mandis: ['Konni, Kerala', 'Kottayam, Kerala'] },
  'Star Fruit (Kamrakh)': { msp: 0, minMarket: 3000, maxMarket: 7000, season: 'annual', unit: 'qtl', cfLink: 'star-fruit', mandis: ['Guwahati, Assam', 'Kochi, Kerala', 'Kolkata, WB'] },
  'Jamun (Java Plum)': { msp: 0, minMarket: 3000, maxMarket: 8000, season: 'summer', unit: 'qtl', cfLink: 'jamun', mandis: ['Lucknow, UP', 'Varanasi, UP', 'Patna, Bihar', 'Delhi', 'Pune, Maharashtra'] },
  'Wood Apple (Bael)': { msp: 0, minMarket: 1500, maxMarket: 4000, season: 'summer', unit: 'qtl', cfLink: 'bael', mandis: ['Varanasi, UP', 'Lucknow, UP', 'Patna, Bihar', 'Ranchi, Jharkhand'] },
  'Mulberry (Shahtoot)': { msp: 0, minMarket: 5000, maxMarket: 12000, season: 'summer', unit: 'qtl', cfLink: 'mulberry', mandis: ['Bangalore, Karnataka', 'Mysore, Karnataka', 'Shimla, HP'] },
  'Sitaphal (Sugar Apple)': { msp: 0, minMarket: 3000, maxMarket: 7000, season: 'kharif', unit: 'qtl', cfLink: 'sugar-apple', mandis: ['Solapur, Maharashtra', 'Pune, Maharashtra', 'Hyderabad, Telangana', 'Nagpur, Maharashtra'] },
  'Chiku (Large)': { msp: 0, minMarket: 2500, maxMarket: 6500, season: 'annual', unit: 'qtl', cfLink: 'chiku-large', mandis: ['Dahanu, Maharashtra', 'Navsari, Gujarat', 'Valsad, Gujarat', 'Goa'] },
  'Dates (Khajoor)': { msp: 0, minMarket: 8000, maxMarket: 25000, season: 'annual', unit: 'qtl', cfLink: 'dates', mandis: ['Kutch, Gujarat', 'Jaisalmer, Rajasthan', 'Barmer, Rajasthan', 'Jodhpur, Rajasthan'] },
  'Cashew Apple': { msp: 0, minMarket: 1000, maxMarket: 3000, season: 'summer', unit: 'qtl', cfLink: 'cashew-apple', mandis: ['Goa', 'Sindhudurg, Maharashtra', 'Ratnagiri, Maharashtra', 'Kollam, Kerala'] },
  'Areca Husk': { msp: 0, minMarket: 800, maxMarket: 2000, season: 'annual', unit: 'qtl', cfLink: 'areca-husk', mandis: ['Shimoga, Karnataka', 'Sirsi, Karnataka', 'Mangalore, Karnataka'] },
  'Silk Cocoon': { msp: 0, minMarket: 30000, maxMarket: 55000, season: 'annual', unit: 'qtl', cfLink: 'silk-cocoon', mandis: ['Ramanagara, Karnataka', 'Kolar, Karnataka', 'Sidlaghatta, Karnataka', 'Mysore, Karnataka'] },
  'Lac': { msp: 0, minMarket: 15000, maxMarket: 30000, season: 'annual', unit: 'qtl', cfLink: 'lac', mandis: ['Ranchi, Jharkhand', 'Kanker, CG', 'Purulia, WB', 'Mirzapur, UP'] },
  'Honey (Natural)': { msp: 0, minMarket: 15000, maxMarket: 25000, season: 'annual', unit: 'qtl', cfLink: 'honey', mandis: ['Shimla, HP', 'Srinagar, J&K', 'Munger, Bihar', 'Sundarbans, WB', 'Nilgiris, TN'] },
  'Jaggery (Gur)': { msp: 0, minMarket: 3500, maxMarket: 6000, season: 'rabi', unit: 'qtl', cfLink: 'jaggery', mandis: ['Kolhapur, Maharashtra', 'Muzaffarnagar, UP', 'Belgaum, Karnataka', 'Anakapalli, AP', 'Mandya, Karnataka', 'Surat, Gujarat'] },
  'Kolhu Oil (Cold Pressed)': { msp: 0, minMarket: 15000, maxMarket: 25000, season: 'annual', unit: 'qtl', cfLink: 'cold-pressed-oil', mandis: ['Kannauj, UP', 'Jaipur, Rajasthan', 'Indore, MP'] },
  'Ashwagandha': { msp: 0, minMarket: 15000, maxMarket: 30000, season: 'rabi', unit: 'qtl', cfLink: 'ashwagandha', mandis: ['Neemuch, MP', 'Mandsaur, MP', 'Nagaur, Rajasthan', 'Pratapgarh, UP'] },
  'Shatavari': { msp: 0, minMarket: 20000, maxMarket: 40000, season: 'annual', unit: 'qtl', cfLink: 'shatavari', mandis: ['Neemuch, MP', 'Mandsaur, MP', 'Ratlam, MP'] },
  'Isabgol (Psyllium)': { msp: 0, minMarket: 12000, maxMarket: 20000, season: 'rabi', unit: 'qtl', cfLink: 'isabgol', mandis: ['Unjha, Gujarat', 'Mehsana, Gujarat', 'Sidhpur, Gujarat', 'Jodhpur, Rajasthan'] },
  'Aloe Vera': { msp: 0, minMarket: 3000, maxMarket: 6000, season: 'annual', unit: 'qtl', cfLink: 'aloe-vera', mandis: ['Jodhpur, Rajasthan', 'Jaipur, Rajasthan', 'Ahmedabad, Gujarat', 'Indore, MP'] },
  'Tulsi (Holy Basil)': { msp: 0, minMarket: 5000, maxMarket: 10000, season: 'annual', unit: 'qtl', cfLink: 'tulsi', mandis: ['Lucknow, UP', 'Indore, MP', 'Pune, Maharashtra', 'Bangalore, Karnataka'] },
  'Lemongrass': { msp: 0, minMarket: 8000, maxMarket: 15000, season: 'annual', unit: 'qtl', cfLink: 'lemongrass', mandis: ['Kochi, Kerala', 'Bangalore, Karnataka', 'Pune, Maharashtra'] },
  'Stevia': { msp: 0, minMarket: 50000, maxMarket: 80000, season: 'annual', unit: 'qtl', cfLink: 'stevia', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Indore, MP'] },
  'Vetiver (Khus)': { msp: 0, minMarket: 10000, maxMarket: 20000, season: 'annual', unit: 'qtl', cfLink: 'vetiver', mandis: ['Kannauj, UP', 'Raebareli, UP', 'Lucknow, UP'] },
  'Neem Seed': { msp: 0, minMarket: 2000, maxMarket: 4000, season: 'annual', unit: 'qtl', cfLink: 'neem-seed', mandis: ['Jodhpur, Rajasthan', 'Indore, MP', 'Nagpur, Maharashtra', 'Hyderabad, Telangana'] },
  'Moringa Seeds': { msp: 0, minMarket: 10000, maxMarket: 20000, season: 'annual', unit: 'qtl', cfLink: 'moringa-seeds', mandis: ['Madurai, TN', 'Coimbatore, TN', 'Dindigul, TN'] },
  'Marigold': { msp: 0, minMarket: 2000, maxMarket: 8000, season: 'volatile', unit: 'qtl', cfLink: 'marigold', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Kolkata, WB', 'Delhi', 'Hyderabad, Telangana', 'Chennai, TN'] },
  'Rose (Cut Flower)': { msp: 0, minMarket: 5000, maxMarket: 15000, season: 'annual', unit: 'qtl', cfLink: 'rose', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Hosur, TN', 'Kolkata, WB', 'Delhi'] },
  'Jasmine (Mogra)': { msp: 0, minMarket: 10000, maxMarket: 40000, season: 'volatile', unit: 'qtl', cfLink: 'jasmine', mandis: ['Madurai, TN', 'Chennai, TN', 'Mysore, Karnataka', 'Pune, Maharashtra', 'Kolkata, WB'] },
  'Chrysanthemum': { msp: 0, minMarket: 3000, maxMarket: 10000, season: 'rabi', unit: 'qtl', cfLink: 'chrysanthemum', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Kolkata, WB', 'Delhi'] },
  'Tuberose': { msp: 0, minMarket: 4000, maxMarket: 12000, season: 'annual', unit: 'qtl', cfLink: 'tuberose', mandis: ['Kolkata, WB', 'Bangalore, Karnataka', 'Mysore, Karnataka', 'Pune, Maharashtra'] },
  'Gladiolus': { msp: 0, minMarket: 5000, maxMarket: 15000, season: 'rabi', unit: 'qtl', cfLink: 'gladiolus', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Delhi', 'Kolkata, WB'] },
  'Crossandra': { msp: 0, minMarket: 6000, maxMarket: 18000, season: 'annual', unit: 'qtl', cfLink: 'crossandra', mandis: ['Chennai, TN', 'Madurai, TN', 'Bangalore, Karnataka'] },
  'Carnation': { msp: 0, minMarket: 8000, maxMarket: 20000, season: 'rabi', unit: 'qtl', cfLink: 'carnation', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Ooty, TN'] },
  'Orchid': { msp: 0, minMarket: 15000, maxMarket: 40000, season: 'annual', unit: 'qtl', cfLink: 'orchid', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Shillong, Meghalaya'] },
  'Lotus Flower': { msp: 0, minMarket: 5000, maxMarket: 15000, season: 'annual', unit: 'qtl', cfLink: 'lotus-flower', mandis: ['Kolkata, WB', 'Lucknow, UP', 'Srinagar, J&K'] },
  'Peanut (Shelled)': { msp: 0, minMarket: 8000, maxMarket: 12000, season: 'kharif', unit: 'qtl', cfLink: 'peanut-shelled', mandis: ['Junagadh, Gujarat', 'Rajkot, Gujarat', 'Anantapur, AP', 'Kurnool, AP', 'Jamnagar, Gujarat'] },
  'Sunflower Seeds (Edible)': { msp: 0, minMarket: 10000, maxMarket: 18000, season: 'kharif', unit: 'qtl', cfLink: 'sunflower-edible', mandis: ['Raichur, Karnataka', 'Bidar, Karnataka', 'Latur, Maharashtra'] },
  'Chia Seeds': { msp: 0, minMarket: 20000, maxMarket: 35000, season: 'rabi', unit: 'qtl', cfLink: 'chia-seeds', mandis: ['Indore, MP', 'Pune, Maharashtra', 'Bangalore, Karnataka'] },
  'Flax Seeds (Alsi)': { msp: 0, minMarket: 6000, maxMarket: 10000, season: 'rabi', unit: 'qtl', cfLink: 'flax-seeds', mandis: ['Sagar, MP', 'Raipur, CG', 'Nagpur, Maharashtra', 'Indore, MP'] },
  'Walnut (Akhrot)': { msp: 0, minMarket: 40000, maxMarket: 80000, season: 'annual', unit: 'qtl', cfLink: 'walnut', mandis: ['Srinagar, J&K', 'Anantnag, J&K', 'Shimla, HP', 'Kullu, HP'] },
  'Almond (Badam)': { msp: 0, minMarket: 50000, maxMarket: 100000, season: 'annual', unit: 'qtl', cfLink: 'almond', mandis: ['Srinagar, J&K', 'Delhi', 'Mumbai'] },
  'Pistachio': { msp: 0, minMarket: 80000, maxMarket: 150000, season: 'annual', unit: 'qtl', cfLink: 'pistachio', mandis: ['Delhi', 'Mumbai', 'Kochi, Kerala'] },
  'Dry Dates (Chuara)': { msp: 0, minMarket: 10000, maxMarket: 25000, season: 'annual', unit: 'qtl', cfLink: 'dry-dates', mandis: ['Kutch, Gujarat', 'Jaisalmer, Rajasthan', 'Delhi'] },
  'Raisin (Kishmish)': { msp: 0, minMarket: 15000, maxMarket: 30000, season: 'annual', unit: 'qtl', cfLink: 'raisin', mandis: ['Nashik, Maharashtra', 'Sangli, Maharashtra', 'Solapur, Maharashtra'] },
  'Berseem (Egyptian Clover)': { msp: 0, minMarket: 1500, maxMarket: 3000, season: 'rabi', unit: 'qtl', cfLink: 'berseem', mandis: ['Karnal, Haryana', 'Ludhiana, Punjab', 'Kanpur, UP', 'Jaipur, Rajasthan'] },
  'Lucerne (Alfalfa)': { msp: 0, minMarket: 2000, maxMarket: 4000, season: 'annual', unit: 'qtl', cfLink: 'alfalfa', mandis: ['Pune, Maharashtra', 'Bangalore, Karnataka', 'Jaipur, Rajasthan'] },
  'Napier Grass': { msp: 0, minMarket: 500, maxMarket: 1500, season: 'annual', unit: 'qtl', cfLink: 'napier-grass', mandis: ['Karnal, Haryana', 'Pune, Maharashtra', 'Bangalore, Karnataka'] },
  'Sorghum Fodder': { msp: 0, minMarket: 800, maxMarket: 2000, season: 'kharif', unit: 'qtl', cfLink: 'sorghum-fodder', mandis: ['Pune, Maharashtra', 'Solapur, Maharashtra', 'Jaipur, Rajasthan'] },
};

let mandiPrices = [];
let filteredPrices = [];
let currentPage = 1;
const ROWS_PER_PAGE = 25;
let priceChart = null;
let liveDataLoaded = false;

// Generate today's date as a seed for consistent daily prices
function dateSeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

// Seeded pseudo-random for consistency within a day
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate realistic prices for today based on MSP and market range
function generateRealisticPrices() {
  const seed = dateSeed();
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const month = today.getMonth(); // 0=Jan
  const prices = [];

  Object.entries(cropPriceData).forEach(([crop, data], cropIdx) => {
    // Seasonal price adjustment factor
    let seasonFactor = 1.0;
    if (data.season === 'kharif') {
      // Kharif harvested Oct-Dec → prices lower in Nov-Jan, higher Apr-Jul
      seasonFactor = [1.05, 1.08, 1.10, 1.12, 1.15, 1.12, 1.08, 1.02, 0.98, 0.95, 0.92, 0.95][month];
    } else if (data.season === 'rabi') {
      // Rabi harvested Mar-May → prices lower Apr-Jun, higher Oct-Jan
      seasonFactor = [1.10, 1.12, 1.08, 0.95, 0.92, 0.90, 0.95, 1.00, 1.05, 1.08, 1.10, 1.12][month];
    } else if (data.season === 'volatile') {
      // Vegetables: high volatility
      seasonFactor = 0.7 + seededRandom(seed + cropIdx * 31) * 0.8;
    } else {
      seasonFactor = 0.95 + seededRandom(seed + cropIdx * 17) * 0.15;
    }

    data.mandis.forEach((mandi, mandiIdx) => {
      const localSeed = seed + cropIdx * 100 + mandiIdx * 7;
      const range = data.maxMarket - data.minMarket;
      // Base price within realistic range
      const baseRatio = seededRandom(localSeed);
      let price = Math.round((data.minMarket + range * baseRatio * 0.6 + range * 0.2) * seasonFactor);
      // Clamp to realistic range
      price = Math.max(data.minMarket, Math.min(data.maxMarket, price));
      // Daily change: small realistic fluctuation (±0.5-3%)
      const changePct = (seededRandom(localSeed + 999) - 0.48) * 0.04;
      const change = Math.round(price * changePct);

      prices.push({
        crop,
        mandi,
        price,
        change,
        date: dateStr,
        msp: data.msp,
        unit: data.unit
      });
    });
  });

  return prices;
}

// ===== CACHE CONFIG =====
const MANDI_CACHE_KEY = 'agrimitra_mandi_cache';
const MANDI_CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

// Check if cached data is still valid
function getCachedMandiData() {
  try {
    const cached = localStorage.getItem(MANDI_CACHE_KEY);
    if (!cached) return null;
    const { timestamp, data } = JSON.parse(cached);
    const age = Date.now() - timestamp;
    if (age < MANDI_CACHE_TTL && data && data.length > 0) {
      console.log(`✅ Using cached mandi data (${data.length} records, ${Math.round(age / 60000)} min old)`);
      return data;
    }
    console.log('⏰ Cache expired, will fetch fresh data');
    return null;
  } catch (e) {
    console.warn('Cache read error:', e);
    return null;
  }
}

// Save data to cache
function setCachedMandiData(data) {
  try {
    localStorage.setItem(MANDI_CACHE_KEY, JSON.stringify({
      timestamp: Date.now(),
      data: data
    }));
    console.log(`💾 Cached ${data.length} mandi records`);
  } catch (e) {
    console.warn('Cache write error (storage full?):', e);
  }
}

// Get cache age for display
function getCacheAge() {
  try {
    const cached = localStorage.getItem(MANDI_CACHE_KEY);
    if (!cached) return null;
    const { timestamp } = JSON.parse(cached);
    return Date.now() - timestamp;
  } catch (e) { return null; }
}

// Force clear cache (used by refresh button)
function clearMandiCache() {
  localStorage.removeItem(MANDI_CACHE_KEY);
  liveDataLoaded = false;
  console.log('🗑️ Mandi cache cleared');
}

// Fetch a single API page with retry + exponential backoff
async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(12000) });
      if (res.status === 429) {
        // Rate limited — wait longer before retry
        console.warn(`⚠️ Rate limited (429). Retry ${attempt}/${retries} in ${delay}ms...`);
        await new Promise(r => setTimeout(r, delay));
        delay *= 2; // exponential backoff
        continue;
      }
      if (!res.ok) throw new Error('API returned ' + res.status);
      return await res.json();
    } catch (e) {
      if (attempt === retries) {
        console.warn(`❌ Failed after ${retries} attempts: ${e.message}`);
        return null;
      }
      console.warn(`⚠️ Attempt ${attempt}/${retries} failed: ${e.message}. Retrying in ${delay}ms...`);
      await new Promise(r => setTimeout(r, delay));
      delay *= 2;
    }
  }
  return null;
}

// Try to fetch real data from data.gov.in API (with caching + retry)
async function fetchLivePrices(forceRefresh = false) {
  // Step 1: Check cache first (unless force refresh)
  if (!forceRefresh) {
    const cached = getCachedMandiData();
    if (cached) {
      liveDataLoaded = true;
      return cached;
    }
  }

  // Step 2: Fetch fresh data from API
  try {
    const API_KEY = '579b464db66ec23bdd0000013167f312c5a9466a6707b81914364341';
    const BASE_URL = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${API_KEY}&format=json&limit=2000`;

    // Fetch up to 10 pages concurrently (20,000 records max)
    const fetchPromises = [];
    for (let i = 0; i < 10; i++) {
      const offset = i * 2000;
      fetchPromises.push(fetchWithRetry(`${BASE_URL}&offset=${offset}`, 2, 800 + i * 200));
    }

    const results = await Promise.all(fetchPromises);
    let allRecords = [];

    results.forEach(data => {
      if (data && data.records && data.records.length > 0) {
        allRecords = allRecords.concat(data.records);
      }
    });

    if (allRecords.length > 0) {
      liveDataLoaded = true;
      const mapped = allRecords.map(r => ({
        crop: r.commodity || r.Commodity,
        mandi: (r.market || r.Market) + ', ' + (r.state || r.State),
        marketName: r.market || r.Market,
        stateName: r.state || r.State,
        districtName: r.district || r.District,
        price: parseInt(r.modal_price || r.Modal_Price || 0),
        change: Math.round((Math.random() - 0.48) * parseInt(r.modal_price || 3000) * 0.03),
        date: r.arrival_date || r.Arrival_Date || new Date().toLocaleDateString('en-IN'),
        msp: 0,
        unit: 'qtl'
      })).filter(p => p.price > 0);

      // Save to cache for next time
      if (mapped.length > 0) {
        setCachedMandiData(mapped);
      }
      return mapped;
    }
  } catch (e) {
    console.log('Live API unavailable, using realistic simulated prices:', e.message);
  }
  return null;
}

// Monthly historical price trends based on seasonal patterns (realistic)
function getSeasonalTrend(crop, currentPrice) {
  const info = cropPriceData[crop];
  if (!info) {
    // Generic trend for unknown crops from the API
    return [0.94, 0.96, 0.97, 0.98, 1.0, 1.02].map(f => Math.round(currentPrice * f));
  }
  const month = new Date().getMonth();
  let factors;
  if (info.season === 'kharif') {
    factors = [1.05, 1.08, 1.10, 1.12, 1.15, 1.12, 1.08, 1.02, 0.98, 0.95, 0.92, 0.95];
  } else if (info.season === 'rabi') {
    factors = [1.10, 1.12, 1.08, 0.95, 0.92, 0.90, 0.95, 1.00, 1.05, 1.08, 1.10, 1.12];
  } else if (info.season === 'volatile') {
    factors = [1.0, 0.90, 0.80, 0.85, 1.2, 1.5, 1.3, 1.1, 0.95, 0.88, 0.82, 0.90];
  } else {
    factors = [1.0, 1.01, 1.02, 1.0, 0.99, 0.98, 0.97, 0.98, 0.99, 1.0, 1.01, 1.02];
  }
  const basePrice = currentPrice / factors[month];
  const trend = [];
  for (let i = 5; i >= 0; i--) {
    const m = (month - i + 12) % 12;
    trend.push(Math.round(basePrice * factors[m]));
  }
  return trend;
}

async function initMarketPage(forceRefresh = false) {
  const tbody = document.getElementById('priceTableBody');
  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:30px;color:var(--gray-400);">Loading latest market data from India portals...</td></tr>';

  // If force refreshing, clear the cache first
  if (forceRefresh) {
    clearMandiCache();
  }

  // ALWAYS start with the full commodity list from our local database
  const simulatedPrices = generateRealisticPrices();
  // Ensure all simulated entries have marketName/stateName parsed
  simulatedPrices.forEach(p => {
    if (!p.marketName || !p.stateName) {
      const parts = p.mandi.split(',');
      p.marketName = parts[0].trim();
      p.stateName = parts.length > 1 ? parts[1].trim() : 'India';
    }
  });

  // Try to fetch live data from government API (with caching)
  const liveData = await fetchLivePrices(forceRefresh);

  // Add data source indicator to the page
  const sourceNote = document.getElementById('dataSourceNote');
  let liveCount = 0;

  // Helper to format cache age
  function formatCacheAge() {
    const age = getCacheAge();
    if (!age) return '';
    const mins = Math.round(age / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins} min ago`;
    const hrs = Math.round(mins / 60);
    return `${hrs}h ago`;
  }

  if (liveDataLoaded && liveData && liveData.length > 0) {
    // MERGE STRATEGY: Start with all simulated prices, then overlay live data
    const liveLookup = new Map();
    liveData.forEach(lp => {
      const key = (lp.crop + '|' + (lp.marketName || '') + '|' + (lp.stateName || '')).toLowerCase();
      liveLookup.set(key, lp);
    });

    // Update matching simulated entries with live prices
    mandiPrices = simulatedPrices.map(sp => {
      const key = (sp.crop + '|' + sp.marketName + '|' + sp.stateName).toLowerCase();
      if (liveLookup.has(key)) {
        const lp = liveLookup.get(key);
        liveLookup.delete(key);
        liveCount++;
        return { ...sp, price: lp.price, change: lp.change, date: lp.date, _live: true };
      }
      return sp;
    });

    // Also add any live entries that didn't match existing commodities
    liveLookup.forEach(lp => {
      if (lp.price > 0) {
        liveCount++;
        mandiPrices.push({ ...lp, _live: true });
      }
    });

    const cacheAgeText = formatCacheAge();
    const cacheInfo = cacheAgeText ? ` · Cached: ${cacheAgeText}` : '';

    if (sourceNote) {
      sourceNote.innerHTML = `🟢 <strong>Live Data</strong> from Govt of India (data.gov.in) — ${liveCount.toLocaleString('en-IN')} live prices merged${cacheInfo} · <a href="https://data.gov.in" target="_blank" style="color:#16a34a;text-decoration:underline;">data.gov.in ↗</a> <button onclick="refreshMandiPrices()" style="margin-left:12px;padding:4px 14px;border:1.5px solid #16a34a;border-radius:6px;background:#f0fdf4;color:#16a34a;font-weight:600;font-size:0.78rem;cursor:pointer;font-family:Poppins,sans-serif;transition:all 0.2s;" onmouseover="this.style.background='#16a34a';this.style.color='#fff'" onmouseout="this.style.background='#f0fdf4';this.style.color='#16a34a'">🔄 Refresh</button>`;
      sourceNote.style.color = '#16a34a';
      sourceNote.style.background = '#f0fdf4';
      sourceNote.style.borderColor = '#bbf7d0';
    }
  } else {
    // API was offline — use simulated prices as-is
    mandiPrices = simulatedPrices;

    if (sourceNote) {
      sourceNote.innerHTML = `🟡 <strong>Simulated Prices based on MSP 2025-26 & seasonal patterns</strong> | Data API offline · <a href="https://data.gov.in" target="_blank" style="color:#d97706;font-weight:600;text-decoration:underline;">Try data.gov.in ↗</a> <button onclick="refreshMandiPrices()" style="margin-left:12px;padding:4px 14px;border:1.5px solid #d97706;border-radius:6px;background:#fffbeb;color:#d97706;font-weight:600;font-size:0.78rem;cursor:pointer;font-family:Poppins,sans-serif;transition:all 0.2s;" onmouseover="this.style.background='#d97706';this.style.color='#fff'" onmouseout="this.style.background='#fffbeb';this.style.color='#d97706'">🔄 Retry</button>`;
      sourceNote.style.color = '#d97706';
      sourceNote.style.background = '#fffbeb';
      sourceNote.style.borderColor = '#fde68a';
    }
  }

  // Initialize filters
  updateAdvFilters('init');
  applyAdvFilters();
}

// Manual refresh handler — clears cache and re-fetches
async function refreshMandiPrices() {
  const sourceNote = document.getElementById('dataSourceNote');
  if (sourceNote) {
    sourceNote.innerHTML = '⏳ <strong>Refreshing...</strong> Fetching latest prices from data.gov.in...';
    sourceNote.style.color = '#6366f1';
    sourceNote.style.background = '#eef2ff';
    sourceNote.style.borderColor = '#c7d2fe';
  }
  await initMarketPage(true);
}

function updateAdvFilters(changed) {
  const cropSelect = document.getElementById('advCropFilter');
  const stateSelect = document.getElementById('advStateFilter');
  const districtSelect = document.getElementById('advDistrictFilter');
  const marketSelect = document.getElementById('advMarketFilter');

  const selectedCrop = cropSelect.value;
  const selectedState = stateSelect.value;

  let filteredForOptions = mandiPrices;

  if (selectedCrop !== 'all') {
    filteredForOptions = filteredForOptions.filter(p => p.crop === selectedCrop);
  }

  if (changed === 'init' || changed === 'crop') {
    const states = [...new Set(filteredForOptions.map(p => p.stateName))].filter(Boolean).sort();
    stateSelect.innerHTML = '<option value="all">All States</option>';
    states.forEach(s => stateSelect.add(new Option(s, s)));
    stateSelect.value = 'all';
  }

  if (changed === 'init' || changed === 'crop' || changed === 'state') {
    const currentState = stateSelect.value;
    let distFiltered = filteredForOptions;
    if (currentState !== 'all') {
      distFiltered = distFiltered.filter(p => p.stateName === currentState);
    }
    if (districtSelect) {
      const districts = [...new Set(distFiltered.map(p => p.districtName))].filter(Boolean).sort();
      districtSelect.innerHTML = '<option value="all">All Districts</option>';
      districts.forEach(d => districtSelect.add(new Option(d, d)));
      districtSelect.value = 'all';
    }
  }

  if (changed === 'init' || changed === 'crop' || changed === 'state' || changed === 'district') {
    const currentState = stateSelect.value;
    const currentDistrict = districtSelect ? districtSelect.value : 'all';
    let marketFiltered = filteredForOptions;
    if (currentState !== 'all') {
      marketFiltered = marketFiltered.filter(p => p.stateName === currentState);
    }
    if (currentDistrict !== 'all') {
      marketFiltered = marketFiltered.filter(p => p.districtName === currentDistrict);
    }
    const markets = [...new Set(marketFiltered.map(p => p.marketName))].filter(Boolean).sort();
    marketSelect.innerHTML = '<option value="all">All Markets</option>';
    markets.forEach(m => marketSelect.add(new Option(m, m)));
    marketSelect.value = 'all';
  }

  if (changed === 'init') {
    const crops = [...new Set(mandiPrices.map(p => p.crop))].filter(Boolean).sort();
    cropSelect.innerHTML = '<option value="all">All Commodities</option>';
    crops.forEach(c => cropSelect.add(new Option(c, c)));
  }

  // Auto-apply whenever filters change
  if (changed !== 'init') {
    applyAdvFilters();
  }
}

function applyAdvFilters() {
  const crop = document.getElementById('advCropFilter').value;
  const state = document.getElementById('advStateFilter').value;
  const districtSelect = document.getElementById('advDistrictFilter');
  const district = districtSelect ? districtSelect.value : 'all';
  const market = document.getElementById('advMarketFilter').value;

  let filtered = mandiPrices;
  if (crop !== 'all') filtered = filtered.filter(p => p.crop === crop);
  if (state !== 'all') filtered = filtered.filter(p => p.stateName === state);
  if (district !== 'all') filtered = filtered.filter(p => p.districtName === district);
  if (market !== 'all') filtered = filtered.filter(p => p.marketName === market);

  filteredPrices = filtered;
  currentPage = 1;
  renderMarketPage();

  let cropToRender = null;
  if (crop !== 'all') {
    cropToRender = crop;
  } else if (filtered.length > 0) {
    const uniqueCrops = [...new Set(filtered.map(p => p.crop))];
    cropToRender = uniqueCrops[0];
  }

  if (cropToRender) renderPriceChart(cropToRender);
}

function renderMarketPage() {
  const tbody = document.getElementById('priceTableBody');
  const cardsContainer = document.getElementById('priceCardsContainer');
  const totalRows = filteredPrices.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / ROWS_PER_PAGE));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * ROWS_PER_PAGE;
  const end = Math.min(start + ROWS_PER_PAGE, totalRows);
  const pageRows = filteredPrices.slice(start, end);

  // Desktop / Tablet Table View
  if (totalRows === 0) {
    if (tbody) tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:30px;color:var(--text-muted);">' + (currentLang === 'hi' ? 'चयनित मापदंडों के अनुसार कोई परिणाम नहीं मिला।' : 'No results found matching these criteria.') + '</td></tr>';
  } else if (tbody) {
    tbody.innerHTML = pageRows.map(p => {
      const cfData = cropPriceData[p.crop];
      const cfUrl = cfData && cfData.cfLink ? 'https://commodityfact.org/mandi-prices/' + cfData.cfLink : 'https://commodityfact.org/mandi-prices';
      const liveTag = p._live
        ? '<span style="color:#1b5e20;font-size:0.78rem;font-weight:600;background:#e8f5e9;padding:2px 8px;border-radius:4px;">🟢 Live</span>'
        : '<span style="color:#b45309;font-size:0.78rem;font-weight:600;background:#fef3c7;padding:2px 8px;border-radius:4px;">🟡 Est.</span>';
      const isUp = p.change >= 0;
      const changeClass = isUp ? 'up' : 'down';
      const arrow = isUp ? '▲' : '▼';
      const pct = p.price ? ((Math.abs(p.change) / p.price) * 100).toFixed(1) : 0;
      return `
      <tr>
        <td><strong>${p.crop}</strong></td>
        <td>${p.mandi}</td>
        <td><strong>₹${p.price.toLocaleString('en-IN')}</strong>/${p.unit || 'qtl'}</td>
        <td class="price-change ${changeClass}">${arrow} ₹${Math.abs(p.change).toLocaleString('en-IN')} (${pct}%)</td>
        <td>${liveTag} <a href="${cfUrl}" target="_blank" rel="noopener" style="color:var(--primary);text-decoration:underline;font-weight:600;margin-left:6px;">↗</a></td>
      </tr>`;
    }).join('');
  }

  // Mobile Smartphone Cards View
  if (cardsContainer) {
    if (totalRows === 0) {
      cardsContainer.innerHTML = '<div class="dash-empty-state"><div class="empty-icon">🔍</div><h4>' + (currentLang === 'hi' ? 'कोई मंडी परिणाम नहीं मिला' : 'No mandi results found') + '</h4><p>' + (currentLang === 'hi' ? 'कृपया अन्य फसल या जिला चुनकर देखें।' : 'Try selecting a different commodity, state, or district.') + '</p></div>';
    } else {
      cardsContainer.innerHTML = pageRows.map(p => {
        const isUp = p.change >= 0;
        const changeClass = isUp ? 'up' : 'down';
        const arrow = isUp ? '▲' : '▼';
        const pct = p.price ? ((Math.abs(p.change) / p.price) * 100).toFixed(1) : 0;
        const liveTag = p._live
          ? '<span style="color:#1b5e20;font-size:0.75rem;font-weight:600;background:#e8f5e9;padding:2px 6px;border-radius:4px;">🟢 Live Agmarknet</span>'
          : '<span style="color:#b45309;font-size:0.75rem;font-weight:600;background:#fef3c7;padding:2px 6px;border-radius:4px;">🟡 Benchmark Est.</span>';
        return `
        <div class="mobile-price-card" style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px;">
            <strong style="font-size:1.05rem;color:var(--text);">${p.crop}</strong>
            ${liveTag}
          </div>
          <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:8px;">📍 ${p.mandi}</div>
          <div style="display:flex;justify-content:space-between;align-items:baseline;border-top:1px dashed var(--border);padding-top:8px;">
            <div style="font-size:1.25rem;font-weight:700;color:var(--primary);">₹${p.price.toLocaleString('en-IN')}<span style="font-size:0.8rem;color:var(--text-muted);font-weight:400;">/${p.unit || 'qtl'}</span></div>
            <div class="price-change ${changeClass}" style="font-size:0.88rem;font-weight:600;">${arrow} ₹${Math.abs(p.change).toLocaleString('en-IN')} (${pct}%)</div>
          </div>
          <div style="display:flex;gap:8px;margin-top:10px;">
            <button class="btn btn-outline btn-sm" style="flex:1;" onclick="renderPriceChart('${p.crop}')">📊 ${currentLang === 'hi' ? 'रुझान' : 'Trend'}</button>
            <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="showFarmingCalculator('${p.crop}')">🌾 ${currentLang === 'hi' ? 'कैलकुलेटर' : 'Calculator'}</button>
          </div>
        </div>`;
      }).join('');
    }
  }

  // Update or create pagination controls
  let paginationEl = document.getElementById('marketPagination');
  if (!paginationEl) {
    paginationEl = document.createElement('div');
    paginationEl.id = 'marketPagination';
    paginationEl.style.cssText = 'display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:14px 20px;background:#fff;border-top:1px solid var(--border);border-radius:0 0 var(--radius) var(--radius);';
    const wrapper = document.querySelector('.price-table-wrapper');
    if (wrapper) wrapper.appendChild(paginationEl);
  }

  const uniqueCommodities = new Set(filteredPrices.map(p => p.crop)).size;
  paginationEl.innerHTML = `
    <div style="font-size:0.85rem;color:var(--text-muted);">
      ${currentLang === 'hi' ? 'दिखा रहे हैं' : 'Showing'} <strong>${totalRows === 0 ? 0 : start + 1}–${end}</strong> ${currentLang === 'hi' ? 'कुल' : 'of'} <strong>${totalRows}</strong> ${currentLang === 'hi' ? 'प्रविष्टियां' : 'entries'}
      &nbsp;·&nbsp; <strong>${uniqueCommodities}</strong> ${currentLang === 'hi' ? 'फसलें' : 'commodities'}
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <button onclick="changePricePage(${currentPage - 1})" ${currentPage <= 1 ? 'disabled style="opacity:0.4;cursor:not-allowed;padding:6px 14px;border:1px solid var(--border);border-radius:6px;background:#f7f7f1;"' : 'style="padding:6px 14px;border:1px solid var(--primary);border-radius:6px;background:#fff;color:var(--primary);font-weight:600;cursor:pointer;"'}>
        ← ${currentLang === 'hi' ? 'पिछला' : 'Prev'}
      </button>
      <span style="font-size:0.88rem;color:var(--text);font-weight:500;">${currentPage} / ${totalPages}</span>
      <button onclick="changePricePage(${currentPage + 1})" ${currentPage >= totalPages ? 'disabled style="opacity:0.4;cursor:not-allowed;padding:6px 14px;border:1px solid var(--border);border-radius:6px;background:#f7f7f1;"' : 'style="padding:6px 14px;border:1px solid var(--primary);border-radius:6px;background:#fff;color:var(--primary);font-weight:600;cursor:pointer;"'}>
        ${currentLang === 'hi' ? 'अगला' : 'Next'} →
      </button>
    </div>`;
}

function resetAdvFilters() {
  const cropSelect = document.getElementById('advCropFilter');
  const stateSelect = document.getElementById('advStateFilter');
  const districtSelect = document.getElementById('advDistrictFilter');
  const marketSelect = document.getElementById('advMarketFilter');
  if (cropSelect) cropSelect.value = 'all';
  if (stateSelect) stateSelect.value = 'all';
  if (districtSelect) districtSelect.value = 'all';
  if (marketSelect) marketSelect.value = 'all';
  filteredPrices = [...mandiPrices];
  currentPage = 1;
  renderMarketPage();
  if (filteredPrices.length > 0) renderPriceChart(filteredPrices[0].crop);
}

function viewMarketForCrop(cropName) {
  showPage('market');
  const cropSelect = document.getElementById('advCropFilter');
  if (cropSelect) {
    for (let i = 0; i < cropSelect.options.length; i++) {
      if (cropSelect.options[i].value.toLowerCase().includes(cropName.toLowerCase()) ||
        cropName.toLowerCase().includes(cropSelect.options[i].value.toLowerCase())) {
        cropSelect.selectedIndex = i;
        break;
      }
    }
  }
  applyAdvFilters();
}

function changePricePage(page) {
  const totalPages = Math.max(1, Math.ceil(filteredPrices.length / ROWS_PER_PAGE));
  currentPage = Math.max(1, Math.min(page, totalPages));
  renderMarketPage();
  // Scroll table into view smoothly
  const wrapper = document.querySelector('.price-table-wrapper');
  if (wrapper) wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPriceChart(cropName) {
  if (priceChart) priceChart.destroy();
  const now = new Date();
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push(d.toLocaleString('en-IN', { month: 'short', year: '2-digit' }));
  }

  const currentEntry = mandiPrices.find(p => p.crop === cropName);
  const currentPrice = currentEntry ? currentEntry.price : 3000;
  const trendData = getSeasonalTrend(cropName, currentPrice);
  const mspInfo = cropPriceData[cropName];
  const mspValue = mspInfo ? mspInfo.msp : 0;

  const datasets = [{
    label: cropName + ' Market Price (₹/qtl)',
    data: trendData,
    borderColor: '#16a34a',
    backgroundColor: 'rgba(22,163,74,0.1)',
    borderWidth: 3, fill: true, tension: 0.4,
    pointBackgroundColor: '#16a34a', pointRadius: 6, pointHoverRadius: 8,
  }];

  // Add MSP line if available
  if (mspValue > 0) {
    datasets.push({
      label: 'MSP (₹' + mspValue.toLocaleString('en-IN') + '/qtl)',
      data: Array(6).fill(mspValue),
      borderColor: '#ef4444',
      borderWidth: 2,
      borderDash: [8, 4],
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 4,
    });
  }

  const ctx = document.getElementById('priceChart').getContext('2d');
  priceChart = new Chart(ctx, {
    type: 'line',
    data: { labels: months, datasets },
    options: {
      responsive: true,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: true, labels: { font: { family: 'Poppins', size: 12 }, color: '#374151', usePointStyle: true } },
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleFont: { family: 'Poppins' },
          bodyFont: { family: 'Poppins' },
          callbacks: { label: ctx => ctx.dataset.label.split('(')[0].trim() + ': ₹' + ctx.raw.toLocaleString('en-IN') }
        }
      },
      scales: {
        y: { beginAtZero: false, grid: { color: '#f3f4f6' }, ticks: { font: { family: 'Poppins' }, callback: v => '₹' + v.toLocaleString('en-IN') } },
        x: { grid: { display: false }, ticks: { font: { family: 'Poppins' } } }
      }
    }
  });
}


// ===== DASHBOARD =====
function loadDashboard() {
  const profile = JSON.parse(localStorage.getItem('agriProfile') || '{"name":"Kisan Bhai","location":"Uttar Pradesh"}');
  const nameEl = document.getElementById('profileName');
  const locEl = document.getElementById('profileLocation');
  if (nameEl) nameEl.textContent = profile.name;
  if (locEl) locEl.textContent = '📍 ' + profile.location;

  const recs = JSON.parse(localStorage.getItem('agriRecs') || '[]');
  const statRecs = document.getElementById('statRecs');
  if (statRecs) statRecs.textContent = recs.length;

  const uniqueCrops = [...new Set(recs.map(r => r.crop))];
  const statCrops = document.getElementById('statCrops');
  if (statCrops) statCrops.textContent = uniqueCrops.length;

  const savedCountPill = document.getElementById('savedCountPill');
  if (savedCountPill) {
    savedCountPill.textContent = currentLang === 'hi' ? (recs.length + ' सुरक्षित') : (recs.length + ' Saved');
  }

  // Saved Recommendations List
  const savedList = document.getElementById('savedRecsList');
  if (savedList) {
    if (recs.length === 0) {
      savedList.innerHTML = `
        <div class="dash-empty-state" style="text-align:center;padding:36px 20px;">
          <div class="empty-icon" style="font-size:2.4rem;margin-bottom:8px;">🌾</div>
          <h4 style="margin:0 0 6px;color:var(--text);font-size:1.05rem;">${currentLang === 'hi' ? 'कोई सुरक्षित सिफ़ारिश नहीं है' : 'No saved crop recommendations yet'}</h4>
          <p style="margin:0 0 16px;color:var(--text-muted);font-size:0.88rem;max-width:380px;margin-left:auto;margin-right:auto;">${currentLang === 'hi' ? 'अपनी मिट्टी और मौसम का विश्लेषण करके फसल सलाह प्राप्त करें और उसे यहां सहेजें।' : 'Test your field soil and climate in Crop AI to save personalized crop advisories here.'}</p>
          <button class="btn btn-primary btn-sm" onclick="showPage('recommend')">
            🌱 ${currentLang === 'hi' ? 'फसल सलाह प्राप्त करें' : 'Get Crop Advisory'}
          </button>
        </div>`;
    } else {
      savedList.innerHTML = `
        <div class="saved-recs-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:14px;padding:8px 0;">
          ${recs.slice().reverse().map((r, revIdx) => {
        const actualIdx = recs.length - 1 - revIdx;
        const db = cropDatabase[r.crop] || { emoji: '🌱' };
        return `
            <div class="saved-rec-card" style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:16px;display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="font-size:1.8rem;">${r.emoji || db.emoji || '🌱'}</span>
                  <div>
                    <strong style="font-size:1.05rem;color:var(--text);display:block;">${r.crop.charAt(0).toUpperCase() + r.crop.slice(1)}</strong>
                    <span style="font-size:0.78rem;color:var(--text-muted);">📅 ${r.date}</span>
                  </div>
                </div>
                <span style="background:#e8f5e9;color:#1b5e20;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:600;">${r.score || 'Recommended'}</span>
              </div>
              <div style="display:flex;gap:8px;margin-top:6px;border-top:1px solid var(--border);padding-top:10px;">
                <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="showFarmingCalculator('${r.crop}')">🌾 ${currentLang === 'hi' ? 'योजना' : 'Plan'}</button>
                <button class="btn btn-outline btn-sm" style="flex:1;" onclick="viewMarketForCrop('${r.crop}')">📈 ${currentLang === 'hi' ? 'मंडी' : 'Mandi'}</button>
                <button class="btn btn-outline btn-sm" style="color:#dc2626;border-color:#fca5a5;" onclick="removeSavedRec(${actualIdx})" title="Remove">🗑</button>
              </div>
            </div>`;
      }).join('')}
        </div>`;
    }
  }

  // Crop History List
  const historyList = document.getElementById('cropHistoryList');
  const history = JSON.parse(localStorage.getItem('agriHistory') || '[]');
  if (historyList) {
    if (history.length === 0) {
      historyList.innerHTML = `
        <div class="dash-empty-state" style="text-align:center;padding:32px 20px;">
          <div class="empty-icon" style="font-size:2.2rem;margin-bottom:8px;">📋</div>
          <h4 style="margin:0 0 6px;color:var(--text);font-size:1.02rem;">${currentLang === 'hi' ? 'कोई हालिया इतिहास नहीं' : 'No assessment history yet'}</h4>
          <p style="margin:0;color:var(--text-muted);font-size:0.86rem;">${currentLang === 'hi' ? 'आपके द्वारा किए गए सभी फसल परीक्षण यहां अपने आप रिकॉर्ड होंगे।' : 'Your generated crop evaluations will automatically appear in this activity log.'}</p>
        </div>`;
    } else {
      historyList.innerHTML = history.slice(-6).reverse().map(h => {
        const db = cropDatabase[h.crop] || { emoji: '🌱' };
        return `
        <div class="history-item" style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--border);">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:1.4rem;">${db.emoji || '🌱'}</span>
            <div>
              <strong style="color:var(--text);font-size:0.95rem;">${h.crop.charAt(0).toUpperCase() + h.crop.slice(1)}</strong>
              <div style="font-size:0.78rem;color:var(--text-muted);">${currentLang === 'hi' ? 'आकलन तिथि:' : 'Assessed on:'} ${h.date}</div>
            </div>
          </div>
          <button class="btn btn-outline btn-sm" onclick="showFarmingCalculator('${h.crop}')">🌾 ${currentLang === 'hi' ? 'विवरण' : 'Details'}</button>
        </div>`;
      }).join('');
    }
  }
}

function saveToDashboard(cropName) {
  const history = JSON.parse(localStorage.getItem('agriHistory') || '[]');
  history.push({ crop: cropName, date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) });
  localStorage.setItem('agriHistory', JSON.stringify(history));
}

function saveRecommendation(cropName, matchScore, cropEmoji) {
  const recs = JSON.parse(localStorage.getItem('agriRecs') || '[]');
  const existing = recs.find(r => r.crop.toLowerCase() === cropName.toLowerCase());
  if (!existing) {
    recs.push({
      crop: cropName,
      score: matchScore || 'Recommended',
      emoji: cropEmoji || '🌱',
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
    });
    localStorage.setItem('agriRecs', JSON.stringify(recs));
  }
  if (typeof event !== 'undefined' && event && event.target) {
    const btn = event.target;
    btn.textContent = currentLang === 'hi' ? '✅ सहेजा गया!' : '✅ Saved!';
    btn.disabled = true;
    btn.style.background = '#e8f5e9';
    btn.style.color = '#1b5e20';
  }
}

function removeSavedRec(index) {
  const recs = JSON.parse(localStorage.getItem('agriRecs') || '[]');
  recs.splice(index, 1);
  localStorage.setItem('agriRecs', JSON.stringify(recs));
  loadDashboard();
}

function clearHistory() {
  const msg = currentLang === 'hi' ? 'क्या आप फसल इतिहास साफ़ करना चाहते हैं?' : 'Are you sure you want to clear your crop assessment history?';
  if (confirm(msg)) {
    localStorage.removeItem('agriHistory');
    loadDashboard();
  }
}

function editProfile() {
  const profile = JSON.parse(localStorage.getItem('agriProfile') || '{"name":"Kisan Bhai","location":"Uttar Pradesh"}');
  document.getElementById('editName').value = profile.name;
  document.getElementById('editLocation').value = profile.location;
  document.getElementById('editGeminiKey').value = localStorage.getItem('gemini_api_key') || '';
  document.getElementById('profileModal').style.display = 'flex';
}

function saveProfile() {
  const name = document.getElementById('editName').value.trim() || 'Kisan Bhai';
  const location = document.getElementById('editLocation').value.trim() || 'India';
  const geminiKey = document.getElementById('editGeminiKey').value.trim();
  localStorage.setItem('agriProfile', JSON.stringify({ name, location }));
  if (geminiKey) {
    localStorage.setItem('gemini_api_key', geminiKey);
  } else {
    localStorage.removeItem('gemini_api_key');
  }
  document.getElementById('profileModal').style.display = 'none';
  loadDashboard();
}

function closeProfileModal() {
  const modal = document.getElementById('profileModal');
  if (modal) modal.style.display = 'none';
}

function sendQuickPrompt(promptText) {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.value = promptText;
    sendChat();
  }
}

// ===== SMART AI CHATBOT — Data-Aware with API Access =====

const chatKnowledge = {
  fertilizer: "For balanced nutrition, apply NPK (Nitrogen-Phosphorus-Potassium) based on soil test. General: 120:60:40 kg/hectare for cereals. Always follow soil test reports! 🧪",
  pest: "Integrated Pest Management (IPM): Use neem-based sprays, install pheromone traps, maintain crop rotation, introduce beneficial insects like ladybugs. Avoid excessive chemical pesticides! 🐛",
  organic: "Organic farming: Use vermicompost, green manure, bio-fertilizers. Neem oil for pest control. Get organic certification for premium prices (30-40% more). 🌿",
  loan: "Government schemes: PM-KISAN (₹6000/year), KCC (Kisan Credit Card), PM Fasal Bima Yojana (crop insurance). Visit your nearest bank or CSC center to apply. 🏦",
  harvest: "Post-harvest tips: Dry grains to 12-14% moisture, use proper storage bins, apply neem leaf powder to prevent storage pests. Avoid selling at distress prices! 🌾",
  disease: "Common crop diseases: Late Blight (potato/tomato), Rust (wheat), Blast (rice). Prevention: Use resistant varieties, crop rotation, timely fungicide spraying. 🔬",
  irrigation: "Smart irrigation: Drip irrigation saves 40-50% water. Water early morning or evening. Mulching reduces evaporation. Install soil moisture sensors for precision farming. 💧",
  government: "Key govt portals for farmers:\n🌐 SeedTrace: seedtrace.gov.in\n🌐 SeedNet: seednet.gov.in\n🌐 Soil Health: soilhealth.dac.gov.in\n🌐 IMD Weather: mausam.imd.gov.in\n🌐 Agmarknet: agmarknet.gov.in\n🌐 PM-KISAN: pmkisan.gov.in",
  mandi: "Check our Market page for live mandi prices! Tips: Sell when demand peaks (festivals), use cold storage for perishables, join FPOs for better pricing. 📈",
  subsidy: "Available subsidies: PM-KISAN (₹6K/yr), SMAM (farm machinery), PMFBY (crop insurance), Soil Health Card (free testing). Apply at nearest agriculture office. 🏛",
};

function toggleChat() {
  document.getElementById('chatWindow').classList.toggle('open');
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  addChatMessage(msg, 'user');
  input.value = '';

  // Show typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-msg bot';
  typingDiv.id = 'chatTyping';
  typingDiv.textContent = '🤖 Thinking...';
  document.getElementById('chatMessages').appendChild(typingDiv);
  document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;

  // Process async
  getSmartResponse(msg).then(response => {
    const typing = document.getElementById('chatTyping');
    if (typing) typing.remove();
    addChatMessage(response, 'bot');
  });
}

function addChatMessage(text, type) {
  const div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.innerHTML = text.replace(/\n/g, '<br>');
  document.getElementById('chatMessages').appendChild(div);
  document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
}

async function getSmartResponse(msg) {
  const lower = msg.toLowerCase();

  // Detect city names in the message
  const detectedCity = Object.keys(indianCities).find(c => lower.includes(c));

  // Detect crop names in the message
  const allCrops = Object.keys(cropFarmingData);
  const detectedCrop = allCrops.find(c => lower.includes(c));

  // --- WEATHER QUERY ---
  if (lower.match(/weather|temperature|temp|mausam|barish|rain|humidity|climate|forecast|गर्मी|बारिश|मौसम/)) {
    const city = detectedCity || extractCityFromMsg(lower);
    if (city && indianCities[city]) {
      try {
        const cd = indianCities[city];
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cd.lat}&longitude=${cd.lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&timezone=Asia/Kolkata`);
        const data = await res.json();
        const c = data.current;
        const [desc] = getWeatherInfo(c.weather_code);
        const cityName = city.charAt(0).toUpperCase() + city.slice(1);
        return `🌦 <b>Live Weather in ${cityName}:</b>\n🌡 Temperature: ${Math.round(c.temperature_2m)}°C\n💧 Humidity: ${c.relative_humidity_2m}%\n💨 Wind: ${Math.round(c.wind_speed_10m)} km/h\n🌧 Rain: ${c.precipitation} mm\n☁ Condition: ${desc}\n\n📌 Source: Open-Meteo API (Live)\n🔗 Official IMD: <a href="https://mausam.imd.gov.in/" target="_blank">mausam.imd.gov.in</a>`;
      } catch (e) {
        return `⚠️ Couldn't fetch live weather right now. Try the Auto-Fill feature on the Crop AI page, or visit <a href="https://mausam.imd.gov.in/" target="_blank">mausam.imd.gov.in</a> directly.`;
      }
    }
    return `🌦 I can check live weather for any Indian city!\nJust ask: <i>"weather in Delhi"</i> or <i>"Mumbai temperature"</i>\n\nI have data for 35+ cities including Delhi, Mumbai, Kolkata, Chennai, Bangalore, Hyderabad, Pune, Jaipur, Lucknow, and more.`;
  }

  // --- SOIL QUERY ---
  if (lower.match(/soil|mitti|मिट्टी|npk|ph|nitrogen|phosphorus|potassium|soil health/)) {
    const city = detectedCity || extractCityFromMsg(lower);
    if (city && indianCities[city]) {
      const cd = indianCities[city];
      const cityName = city.charAt(0).toUpperCase() + city.slice(1);
      return `🪨 <b>Soil Data for ${cityName}:</b>\n🏷 Type: ${cd.soilName}\n🧪 Avg Nitrogen (N): ${cd.avgN} kg/ha\n🧪 Avg Phosphorus (P): ${cd.avgP} kg/ha\n🧪 Avg Potassium (K): ${cd.avgK} kg/ha\n⚗️ Avg pH: ${cd.avgPH}\n🌧 Avg Annual Rainfall: ${cd.avgRainfall} mm\n📍 State: ${cd.state}\n\n📌 Source: NBSS&LUP / Soil Health Card data\n🔗 <a href="https://soilhealth.dac.gov.in/home" target="_blank">soilhealth.dac.gov.in</a>`;
    }
    return `🪨 I can look up soil data for Indian cities!\nAsk: <i>"soil in Pune"</i> or <i>"Delhi soil type"</i>\n\n🔗 Official: <a href="https://soilhealth.dac.gov.in/home" target="_blank">Soil Health Card Portal</a>`;
  }

  // --- CROP FARMING DETAILS ---
  if (detectedCrop && lower.match(/seed|बीज|cost|price|rate|water|irrigation|sowing|how to grow|farming|pani|खेती|बोना|कैसे|kitna/)) {
    const cd = cropFarmingData[detectedCrop];
    const name = detectedCrop.charAt(0).toUpperCase() + detectedCrop.slice(1);
    const unit = cd.unit || 'kg seed/ha';
    let resp = `🌾 <b>${name} Farming Guide:</b>\n📅 Season: ${cd.season}\n⏱ Duration: ${cd.duration}\n🌱 Seed Rate: ${cd.seedRate} ${unit}\n💰 Seed Price: ₹${cd.seedPrice}/kg (market avg)\n💧 Total Water: ${cd.waterMm} mm\n\n💧 <b>Irrigation Schedule:</b>`;
    cd.irrigation.forEach(s => {
      resp += `\n📍 ${s.stage} (Day ${s.days}): ${s.water} — ${s.note}`;
    });
    resp += `\n\n🔗 <a href="https://seedtrace.gov.in/ms014/" target="_blank">SeedTrace Portal</a> | <a href="https://seednet.gov.in/" target="_blank">SeedNet India</a>`;
    return resp;
  }

  // --- CROP RECOMMENDATION ---
  if (lower.match(/best crop|recommend|suggest|kya ugaye|konsa|कौन सा|which crop|top crop|grow/)) {
    const city = detectedCity || extractCityFromMsg(lower);
    if (city && indianCities[city]) {
      const cd = indianCities[city];
      const cityName = city.charAt(0).toUpperCase() + city.slice(1);
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cd.lat}&longitude=${cd.lon}&current=temperature_2m,relative_humidity_2m&timezone=Asia/Kolkata`);
        const data = await res.json();
        const top5 = getTop5Crops(data.current.temperature_2m, data.current.relative_humidity_2m, cd.avgRainfall, cd.soil);
        let resp = `🌱 <b>Top 5 Crops for ${cityName}:</b>\n(Based on live weather: ${Math.round(data.current.temperature_2m)}°C, ${data.current.relative_humidity_2m}% humidity, ${cd.soilName} soil)\n`;
        top5.forEach((crop, i) => {
          resp += `\n${i + 1}. ${crop.emoji} <b>${crop.name.charAt(0).toUpperCase() + crop.name.slice(1)}</b> — ${crop.score}% match`;
        });
        resp += `\n\n👆 Click any crop on the Crop AI page for the full farming calculator!`;
        return resp;
      } catch (e) {
        return `⚠️ Couldn't fetch live data. Use the Auto-Fill feature on the Crop AI page — enter "${city}" and click ⚡ Auto-Fill!`;
      }
    }
    return `🌱 I can recommend crops for your city!\nAsk: <i>"best crop for Pune"</i> or <i>"what to grow in Delhi"</i>\n\nOr use the Crop AI page → enter your city → click ⚡ Auto-Fill for complete recommendations.`;
  }

  // --- MARKET PRICE ---
  if (lower.match(/price|rate|mandi|market|bhav|दाम|भाव|कीमत|cost of crop/)) {
    if (detectedCrop) {
      const name = detectedCrop.charAt(0).toUpperCase() + detectedCrop.slice(1);
      const fd = cropFarmingData[detectedCrop];
      return `📈 <b>${name} Price Info:</b>\n💰 Seed Price: ₹${fd ? fd.seedPrice : '--'}/kg (market avg)\n\nFor live mandi produce prices, check our Market page or visit:\n🔗 <a href="https://commodityfact.org/" target="_blank">CommodityFact.org</a>\n🔗 <a href="https://agmarknet.gov.in/" target="_blank">Agmarknet (Govt)</a>`;
    }
    return `📈 For market prices, check:\n• Our <b>Market page</b> for live mandi data\n• <a href="https://commodityfact.org/" target="_blank">CommodityFact.org</a> for real-time commodity prices\n• <a href="https://agmarknet.gov.in/" target="_blank">Agmarknet</a> (Government mandi portal)\n\nAsk me about a specific crop: <i>"rice price"</i> or <i>"wheat rate"</i>`;
  }

  // --- GREETING ---
  if (lower.match(/^(hi|hello|hey|namaste|namaskar|हैलो|नमस्ते)$/)) {
    return `नमस्ते! 🙏 I'm your <b>Agri Mitra</b> smart assistant.\n\nI can help you with:\n🌦 <b>Live weather</b> — "weather in Delhi"\n🪨 <b>Soil data</b> — "soil in Mumbai"\n🌱 <b>Crop recommendations</b> — "best crop for Pune"\n🌾 <b>Farming guide</b> — "how to grow rice"\n💰 <b>Market prices</b> — "wheat price"\n\n✨ <b>AI Powered:</b> Ask me any farming question!`;
  }

  // --- GEMINI AI INTEGRATION (Advanced General Knowledge) ---
  const GEMINI_API_KEY = localStorage.getItem('gemini_api_key') || "";

  if (GEMINI_API_KEY) {
    try {
      const prompt = `You are Agri-Mitra, an expert AI farming assistant for Indian farmers. Answer this question clearly, accurately, and concisely. Use simple language and emojis. Use basic HTML like <b>, <i>, <br> for formatting. DO NOT use markdown like **bold**, use HTML <b>bold</b> instead. The user asked: "${msg}"`;
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });

      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
        // Strip markdown and ensure HTML formatting
        let aiText = data.candidates[0].content.parts[0].text;
        aiText = aiText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // Convert markdown bold to html
        aiText = aiText.replace(/\*(.*?)\*/g, '<i>$1</i>'); // Convert markdown italic to html
        return aiText;
      } else if (data.error) {
        console.error("Gemini API Error:", data.error.message);
      }
    } catch (e) {
      console.error("Gemini Fetch Error:", e);
    }
  }

  // --- LOCAL FALLBACK (If Gemini key is missing) ---
  for (const [key, response] of Object.entries(chatKnowledge)) {
    if (lower.includes(key)) return response;
  }

  // --- HELP / DEFAULT ---
  return `🤖 <b>I can help with:</b>\n\n🌦 <b>Weather</b> — <i>"weather in [city]"</i>\n🪨 <b>Soil</b> — <i>"soil in [city]"</i>\n🌱 <b>Crops</b> — <i>"best crop for [city]"</i>\n🌾 <b>Farming</b> — <i>"how to grow [crop]"</i>\n💰 <b>Prices</b> — <i>"[crop] price"</i>\n\n💡 <b>Want a smarter AI?</b>\nTo enable Gemini AI, open your browser console (F12) and type:\n<code>localStorage.setItem('gemini_api_key', 'YOUR_FREE_API_KEY_HERE');</code> then refresh.`;
}

// Helper: extract city name from message even without explicit keyword
function extractCityFromMsg(msg) {
  const cities = Object.keys(indianCities);
  for (const city of cities) {
    if (msg.includes(city)) return city;
  }
  // Try common patterns like "in mumbai", "for delhi"
  const match = msg.match(/(?:in|for|of|at)\s+([a-z]+)/);
  if (match && cities.includes(match[1])) return match[1];
  return null;
}

// ===== VOICE INPUT =====
let recognition = null;
let isListening = false;

function toggleVoice() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Voice input not supported in this browser. Please use Chrome.');
    return;
  }
  if (isListening) { stopVoice(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-IN';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onstart = () => {
    isListening = true;
    document.getElementById('voiceBtn').classList.add('listening');
    document.getElementById('voiceStatus').textContent = currentLang === 'hi' ? '🔴 सुन रहा है...' : '🔴 Listening...';
  };
  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    parseVoiceInput(transcript);
    stopVoice();
  };
  recognition.onerror = () => stopVoice();
  recognition.onend = () => stopVoice();
  recognition.start();
}

function stopVoice() {
  isListening = false;
  if (recognition) recognition.stop();
  document.getElementById('voiceBtn').classList.remove('listening');
  document.getElementById('voiceStatus').textContent = translations[currentLang].voiceHint;
}

function parseVoiceInput(text) {
  const numbers = text.match(/\d+\.?\d*/g);
  if (numbers && numbers.length > 0) {
    const fields = ['inputN', 'inputP', 'inputK', 'inputPH', 'inputTemp', 'inputHumidity', 'inputRainfall'];
    numbers.forEach((num, i) => { if (i < fields.length) document.getElementById(fields[i]).value = num; });
  }
  document.getElementById('voiceStatus').textContent = '✅ ' + text;
}

// ===== INTERSECTION OBSERVER (reveal animations) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== INIT =====
const savedLang = localStorage.getItem('agriLang');
if (savedLang) setLanguage(savedLang);
