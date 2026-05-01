const TEN_Y_DATA = {
  "NABIL": {
    symbol: "NABIL", name: "Nabil Bank Limited",
    cagr_revenue: 12.5, cagr_profit: 10.2,
    avg_roe: 15.3, avg_dividend: 3.1,
    verdict_en: "Consistent performer.",
    verdict_ne: "लगातारको प्रदर्शनकर्ता।"
  },
  "NTC": {
    symbol: "NTC", name: "Nepal Doorsanchar Company Ltd.",
    cagr_revenue: 2.1, cagr_profit: -1.5,
    avg_roe: 8.7, avg_dividend: 4.5,
    verdict_en: "Slow growth, high dividend.",
    verdict_ne: "ढिलो वृद्धि, उच्च लाभांश।"
  },
  "CHILIME": {
    symbol: "CHILIME", name: "Chilime Hydropower Co. Ltd.",
    cagr_revenue: 8.3, cagr_profit: 9.1,
    avg_roe: 18.4, avg_dividend: 2.8,
    verdict_en: "Steady hydro income.",
    verdict_ne: "स्थिर जलविद्युत आय।"
  },
  "SHIVAM": {
    symbol: "SHIVAM", name: "Shivam Cements Ltd.",
    cagr_revenue: 15.2, cagr_profit: 22.1,
    avg_roe: 21.3, avg_dividend: 1.5,
    verdict_en: "Fast grower, lower div.",
    verdict_ne: "द्रुत वृद्धि, कम लाभांश।"
  },
  "NIBL": {
    symbol: "NIBL", name: "Nepal Investment Bank Ltd.",
    cagr_revenue: 10.8, cagr_profit: 11.3,
    avg_roe: 14.2, avg_dividend: 3.0,
    verdict_en: "Solid banking franchise.",
    verdict_ne: "बलियो बैंकिङ फ्रेन्चाइज।"
  },
  "PRVU": {
    symbol: "PRVU", name: "Prabhu Bank Ltd.",
    cagr_revenue: 13.1, cagr_profit: 14.8,
    avg_roe: 12.5, avg_dividend: 2.2,
    verdict_en: "Growing aggressively.",
    verdict_ne: "आक्रामक रूपमा बढ्दै।"
  },
  "GBIME": {
    symbol: "GBIME", name: "Global IME Bank Ltd.",
    cagr_revenue: 11.7, cagr_profit: 11.9,
    avg_roe: 13.8, avg_dividend: 2.9,
    verdict_en: "Strong IME network.",
    verdict_ne: "बलियो आइएमई नेटवर्क।"
  },
  "SBL": {
    symbol: "SBL", name: "Siddhartha Bank Ltd.",
    cagr_revenue: 9.8, cagr_profit: 9.5,
    avg_roe: 13.1, avg_dividend: 3.2,
    verdict_en: "Stable mid-tier bank.",
    verdict_ne: "स्थिर मध्यमस्तर बैंक।"
  },
  "EBL": {
    symbol: "EBL", name: "Everest Bank Ltd.",
    cagr_revenue: 10.3, cagr_profit: 10.1,
    avg_roe: 14.0, avg_dividend: 3.0,
    verdict_en: "Everest-brand trust.",
    verdict_ne: "एभरेष्ट ब्रान्ड विश्वास।"
  },
  "HBL": {
    symbol: "HBL", name: "Himalayan Bank Ltd.",
    cagr_revenue: 8.5, cagr_profit: 8.2,
    avg_roe: 12.1, avg_dividend: 2.7,
    verdict_en: "Steady conservative bank.",
    verdict_ne: "स्थिर रुढीवादी बैंक।"
  },
  "ADBL": {
    symbol: "ADBL", name: "Agricultural Development Bank Ltd.",
    cagr_revenue: 7.6, cagr_profit: 6.9,
    avg_roe: 10.5, avg_dividend: 2.0,
    verdict_en: "Social mandate, moderate.",
    verdict_ne: "सामाजिक जिम्मेवारी, मध्यम।"
  },
  "KRBL": {
    symbol: "KRBL", name: "Kumari Bank Ltd.",
    cagr_revenue: 9.2, cagr_profit: 8.8,
    avg_roe: 12.8, avg_dividend: 2.5,
    verdict_en: "Growing with Kumari brand.",
    verdict_ne: "कुमारी ब्रान्डसँग बढ्दै।"
  },
  "SANIMA": {
    symbol: "SANIMA", name: "Sanima Bank Ltd.",
    cagr_revenue: 12.0, cagr_profit: 13.1,
    avg_roe: 15.0, avg_dividend: 2.4,
    verdict_en: "Strong corporate ties.",
    verdict_ne: "बलियो कर्पोरेट सम्बन्ध।"
  },
  "NICA": {
    symbol: "NICA", name: "NIC Asia Bank Ltd.",
    cagr_revenue: 11.1, cagr_profit: 10.9,
    avg_roe: 13.5, avg_dividend: 2.8,
    verdict_en: "Well-managed Asia focus.",
    verdict_ne: "राम्रोसँग व्यवस्थित एसिया फोकस।"
  },
  "MBL": {
    symbol: "MBL", name: "Machhapuchchhre Bank Ltd.",
    cagr_revenue: 8.9, cagr_profit: 9.0,
    avg_roe: 12.3, avg_dividend: 2.6,
    verdict_en: "Pokhara-based steady.",
    verdict_ne: "पोखरा आधारित स्थिर।"
  },
  "JBL": {
    symbol: "JBL", name: "Janata Bank Nepal Ltd.",
    cagr_revenue: 6.3, cagr_profit: 5.7,
    avg_roe: 9.8, avg_dividend: 1.8,
    verdict_en: "Public sector, modest.",
    verdict_ne: "सार्वजनिक क्षेत्र, मध्यम।"
  },
  "NMB": {
    symbol: "NMB", name: "NMB Bank Ltd.",
    cagr_revenue: 10.2, cagr_profit: 10.5,
    avg_roe: 13.7, avg_dividend: 2.9,
    verdict_en: "Good retail presence.",
    verdict_ne: "राम्रो खुद्रा उपस्थिति।"
  },
  "SCB": {
    symbol: "SCB", name: "Standard Chartered Bank Nepal Ltd.",
    cagr_revenue: 5.5, cagr_profit: 6.2,
    avg_roe: 16.1, avg_dividend: 4.0,
    verdict_en: "Premium brand, high ROE.",
    verdict_ne: "प्रिमियम ब्रान्ड, उच्च आरओई।"
  },
  "CBL": {
    symbol: "CBL", name: "Citizens Bank International Ltd.",
    cagr_revenue: 9.0, cagr_profit: 8.7,
    avg_roe: 11.9, avg_dividend: 2.3,
    verdict_en: "Newer bank, growing.",
    verdict_ne: "नयाँ बैंक, बढ्दै।"
  },
  "SHINE": {
    symbol: "SHINE", name: "Shine Resunga Development Bank Ltd.",
    cagr_revenue: 12.3, cagr_profit: 13.0,
    avg_roe: 14.8, avg_dividend: 1.9,
    verdict_en: "Fastest dev bank.",
    verdict_ne: "सबभन्दा छिटो विकास बैंक।"
  },
  "LICN": {
    symbol: "LICN", name: "Life Insurance Corporation Nepal Ltd.",
    cagr_revenue: 14.2, cagr_profit: 18.5,
    avg_roe: 22.1, avg_dividend: 2.2,
    verdict_en: "Insurance giant, steady.",
    verdict_ne: "बीमा क्षेत्रको विशाल, स्थिर।"
  },
  "NLIC": {
    symbol: "NLIC", name: "National Life Insurance Co. Ltd.",
    cagr_revenue: 11.4, cagr_profit: 13.2,
    avg_roe: 19.8, avg_dividend: 2.8,
    verdict_en: "Strong life insurance play.",
    verdict_ne: "बलियो जीवन बीमा कम्पनी।"
  },
  "SLICL": {
    symbol: "SLICL", name: "Surya Life Insurance Co. Ltd.",
    cagr_revenue: 9.5, cagr_profit: 10.8,
    avg_roe: 17.2, avg_dividend: 2.5,
    verdict_en: "Growing insurer.",
    verdict_ne: "बढ्दो बीमक।"
  },
  "PLIC": {
    symbol: "PLIC", name: "Prime Life Insurance Co. Ltd.",
    cagr_revenue: 8.7, cagr_profit: 9.3,
    avg_roe: 16.5, avg_dividend: 2.1,
    verdict_en: "Steady performer.",
    verdict_ne: "स्थिर प्रदर्शनकर्ता।"
  },
  "ULI": {
    symbol: "ULI", name: "Union Life Insurance Co. Ltd.",
    cagr_revenue: 7.8, cagr_profit: 8.4,
    avg_roe: 15.9, avg_dividend: 1.9,
    verdict_en: "Decent growth.",
    verdict_ne: "राम्रो वृद्धि।"
  },
  "HDL": {
    symbol: "HDL", name: "Himalayan Distillery Ltd.",
    cagr_revenue: 16.2, cagr_profit: 20.5,
    avg_roe: 24.3, avg_dividend: 3.5,
    verdict_en: "High-margin spirits.",
    verdict_ne: "उच्च मार्जिन मदिरा।"
  },
  "SHIV": {
    symbol: "SHIV", name: "Shivam Cements Ltd.",
    cagr_revenue: 15.1, cagr_profit: 21.9,
    avg_roe: 22.8, avg_dividend: 1.6,
    verdict_en: "Cement demand boom.",
    verdict_ne: "सिमेन्टको माग वृद्धि।"
  },
  "UNL": {
    symbol: "UNL", name: "Unilever Nepal Ltd.",
    cagr_revenue: 9.8, cagr_profit: 11.2,
    avg_roe: 28.5, avg_dividend: 5.0,
    verdict_en: "Dividend king, defensive.",
    verdict_ne: "लाभांश राजा, रक्षात्मक।"
  },
  "BNT": {
    symbol: "BNT", name: "Bottlers Nepal (Terai) Ltd.",
    cagr_revenue: 10.5, cagr_profit: 12.1,
    avg_roe: 26.7, avg_dividend: 4.2,
    verdict_en: "Strong franchise.",
    verdict_ne: "बलियो फ्रेन्चाइज।"
  },
  "NHPC": {
    symbol: "NHPC", name: "National Hydro Power Co. Ltd.",
    cagr_revenue: 4.2, cagr_profit: 3.8,
    avg_roe: 9.2, avg_dividend: 1.5,
    verdict_en: "Modest hydro utility.",
    verdict_ne: "मध्यम जलविद्युत उपयोगिता।"
  },
  "API": {
    symbol: "API", name: "Arun Valley Hydropower Development Co. Ltd.",
    cagr_revenue: 6.8, cagr_profit: 7.5,
    avg_roe: 11.3, avg_dividend: 1.2,
    verdict_en: "Small hydro, growing.",
    verdict_ne: "सानो जलविद्युत, बढ्दो।"
  },
  "AKJCL": {
    symbol: "AKJCL", name: "Arun Kabeli Jalvidyut Co. Ltd.",
    cagr_revenue: 5.9, cagr_profit: 6.3,
    avg_roe: 10.8, avg_dividend: 1.0,
    verdict_en: "Early stage hydro.",
    verdict_ne: "प्रारम्भिक चरणको जलविद्युत।"
  },
  "BPCL": {
    symbol: "BPCL", name: "Butwal Power Co. Ltd.",
    cagr_revenue: 7.1, cagr_profit: 8.0,
    avg_roe: 12.4, avg_dividend: 2.0,
    verdict_en: "Established hydro.",
    verdict_ne: "स्थापित जलविद्युत कम्पनी।"
  },
  "SPHL": {
    symbol: "SPHL", name: "Sanima Mai Hydropower Ltd.",
    cagr_revenue: 6.5, cagr_profit: 7.1,
    avg_roe: 11.1, avg_dividend: 1.3,
    verdict_en: "Run-of-river plant.",
    verdict_ne: "नदी प्रवाहमा आधारित।"
  },
  "RADHI": {
    symbol: "RADHI", name: "Radhi Bidhyut Co. Ltd.",
    cagr_revenue: 3.8, cagr_profit: 4.1,
    avg_roe: 8.5, avg_dividend: 0.8,
    verdict_en: "Small hydro, slow.",
    verdict_ne: "सानो जलविद्युत, ढिलो।"
  },
  "KPCL": {
    symbol: "KPCL", name: "Kalika Power Co. Ltd.",
    cagr_revenue: 5.2, cagr_profit: 5.9,
    avg_roe: 9.8, avg_dividend: 1.1,
    verdict_en: "Developing hydro.",
    verdict_ne: "विकासशील जलविद्युत।"
  },
  "NIFRA": {
    symbol: "NIFRA", name: "Nepal Infrastructure Bank Ltd.",
    cagr_revenue: 13.8, cagr_profit: 15.2,
    avg_roe: 16.8, avg_dividend: 2.5,
    verdict_en: "Infra financing growth.",
    verdict_ne: "पूर्वाधार वित्तपोषण वृद्धि।"
  },
  "SRBL": {
    symbol: "SRBL", name: "Sunrise Bank Ltd.",
    cagr_revenue: 10.0, cagr_profit: 9.8,
    avg_roe: 12.9, avg_dividend: 2.4,
    verdict_en: "Good retail bank.",
    verdict_ne: "राम्रो खुद्रा बैंक।"
  },
  "PCBL": {
    symbol: "PCBL", name: "Prime Commercial Bank Ltd.",
    cagr_revenue: 11.5, cagr_profit: 12.3,
    avg_roe: 13.9, avg_dividend: 2.6,
    verdict_en: "Commercial banking.",
    verdict_ne: "वाणिज्य बैंकिङ।"
  },
  "NBL": {
    symbol: "NBL", name: "Nepal Bank Ltd.",
    cagr_revenue: 5.8, cagr_profit: 4.7,
    avg_roe: 9.1, avg_dividend: 1.3,
    verdict_en: "Oldest bank, slow.",
    verdict_ne: "सबैभन्दा पुरानो बैंक, ढिलो।"
  },
  "RMDC": {
    symbol: "RMDC", name: "Rural Microfinance Development Centre Ltd.",
    cagr_revenue: 14.5, cagr_profit: 16.8,
    avg_roe: 20.2, avg_dividend: 1.0,
    verdict_en: "Microfinance leader.",
    verdict_ne: "लघुवित्त नेता।"
  },
  "CBBL": {
    symbol: "CBBL", name: "Chhimek Laghubitta Bittiya Sanstha Ltd.",
    cagr_revenue: 15.9, cagr_profit: 18.7,
    avg_roe: 22.3, avg_dividend: 1.2,
    verdict_en: "Top microfinance.",
    verdict_ne: "शीर्ष लघुवित्त।"
  },
  "MLBL": {
    symbol: "MLBL", name: "Mahila Laghubitta Bittiya Sanstha Ltd.",
    cagr_revenue: 13.2, cagr_profit: 15.1,
    avg_roe: 19.7, avg_dividend: 0.9,
    verdict_en: "Women-focused microfinance.",
    verdict_ne: "महिला केन्द्रित लघुवित्त।"
  },
  "SWBBL": {
    symbol: "SWBBL", name: "Swabalamban Laghubitta Bittiya Sanstha Ltd.",
    cagr_revenue: 14.1, cagr_profit: 16.5,
    avg_roe: 20.8, avg_dividend: 1.1,
    verdict_en: "Self-reliance microfinance.",
    verdict_ne: "स्वावलम्बन लघुवित्त।"
  },
  "SICL": {
    symbol: "SICL", name: "Shikhar Insurance Co. Ltd.",
    cagr_revenue: 12.8, cagr_profit: 14.9,
    avg_roe: 18.2, avg_dividend: 2.9,
    verdict_en: "Top non-life insurer.",
    verdict_ne: "शीर्ष निर्जीवन बीमक।"
  },
  "NIL": {
    symbol: "NIL", name: "Neco Insurance Ltd.",
    cagr_revenue: 10.3, cagr_profit: 11.7,
    avg_roe: 17.5, avg_dividend: 2.5,
    verdict_en: "Growing non-life insurance.",
    verdict_ne: "बढ्दो निर्जीवन बीमा।"
  },
  "LGIL": {
    symbol: "LGIL", name: "Lumbini General Insurance Ltd.",
    cagr_revenue: 9.6, cagr_profit: 10.2,
    avg_roe: 16.4, avg_dividend: 2.0,
    verdict_en: "Steady general insurer.",
    verdict_ne: "स्थिर साधारण बीमक।"
  },
  "PICL": {
    symbol: "PICL", name: "Prudential Insurance Co. Ltd.",
    cagr_revenue: 8.9, cagr_profit: 9.5,
    avg_roe: 15.8, avg_dividend: 2.2,
    verdict_en: "Insurance with potential.",
    verdict_ne: "सम्भावना भएको बीमा।"
  },
  "CIT": {
    symbol: "CIT", name: "Citizen Investment Trust",
    cagr_revenue: 6.1, cagr_profit: 7.8,
    avg_roe: 12.5, avg_dividend: 3.0,
    verdict_en: "Government-backed trust.",
    verdict_ne: "सरकारी लगानी कोष।"
  },
  "HIDCL": {
    symbol: "HIDCL", name: "Hydroelectricity Investment and Development Company Ltd.",
    cagr_revenue: 8.2, cagr_profit: 9.1,
    avg_roe: 13.8, avg_dividend: 1.4,
    verdict_en: "Hydropower financing.",
    verdict_ne: "जलविद्युत लगानी।"
  },
  "NRN": {
    symbol: "NRN", name: "NRN Infrastructure and Development Ltd.",
    cagr_revenue: 12.1, cagr_profit: 14.3,
    avg_roe: 17.1, avg_dividend: 1.5,
    verdict_en: "Infra and hydro dev.",
    verdict_ne: "पूर्वाधार र जलविद्युत विकास।"
  },
  "CHL": {
    symbol: "CHL", name: "Chhyangdi Hydropower Ltd.",
    cagr_revenue: 4.5, cagr_profit: 5.0,
    avg_roe: 9.5, avg_dividend: 0.9,
    verdict_en: "Small hydro.",
    verdict_ne: "सानो जलविद्युत।"
  },
  "PURW": {
    symbol: "PURW", name: "Purwanchal Vidyut Co. Ltd.",
    cagr_revenue: 3.2, cagr_profit: 3.6,
    avg_roe: 7.8, avg_dividend: 0.6,
    verdict_en: "Eastern Nepal hydro.",
    verdict_ne: "पूर्वी नेपाल जलविद्युत।"
  },
  "JALPA": {
    symbol: "JALPA", name: "Jalpa Samudayik Laghubitta Bittiya Sanstha Ltd.",
    cagr_revenue: 12.5, cagr_profit: 14.0,
    avg_roe: 19.2, avg_dividend: 1.0,
    verdict_en: "Community microfinance.",
    verdict_ne: "सामुदायिक लघुवित्त।"
  }
};
