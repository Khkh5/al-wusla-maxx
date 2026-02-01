// 10 Expert Color Themes from the MAXX Conversation
// Each theme is scientifically and spiritually designed

export const themeSystem = {
    // 1. Taqwa Teal - Main Brand (Balance + Divine)
    taqwaTeal: {
        name: { ar: 'تقوى تيل', en: 'Taqwa Teal' },
        description: 'Blue relaxes nervous system, Gold signals Divine value',
        primary: '#008080',
        secondary: '#d4af37',
        background: '#0a0e1a',
        text: '#ffffff',
        accent: '#f5e7a3'
    },

    // 2. Fajr Twilight - Dawn activation (20 mins before Fajr)
    fajrTwilight: {
        name: { ar: 'شفق الفجر', en: 'Fajr Twilight' },
        description: 'Mimics actual sky to wake brain gently',
        primary: '#1e3a8a',
        secondary: '#ec4899',
        background: '#0f172a',
        text: '#e2e8f0',
        accent: '#f472b6'
    },

    // 3. Sahur Amber - Low blue light for eating time
    sahurAmber: {
        name: { ar: 'عنبر السحور', en: 'Sahur Amber' },
        description: 'Stimulates appetite slightly, keeps sleep hormones intact',
        primary: '#f59e0b',
        secondary: '#d97706',
        background: '#1c1917',
        text: '#fef3c7',
        accent: '#fbbf24'
    },

    // 4. OLED Midnight - True black for battery and rest
    oledMidnight: {
        name: { ar: 'منتصف الليل', en: 'OLED Midnight' },
        description: 'True black screen for Qiyam reading',
        primary: '#000000',
        secondary: '#1f2937',
        background: '#000000',
        text: '#9ca3af',
        accent: '#6b7280'
    },

    // 5. Prophetic Green - Relaxation/Meditation
    propheticGreen: {
        name: { ar: 'الأخضر النبوي', en: 'Prophetic Green' },
        description: 'Based on Prophet\'s favorite color',
        primary: '#059669',
        secondary: '#10b981',
        background: '#064e3b',
        text: '#ecfdf5',
        accent: '#34d399'
    },

    // 6. Clay Earth - History/Stories section
    clayEarth: {
        name: { ar: 'طين الأرض', en: 'Clay & Earth' },
        description: 'Grounds the user, signals Heritage',
        primary: '#92400e',
        secondary: '#b45309',
        background: '#1c1917',
        text: '#fef3c7',
        accent: '#d97706'
    },

    // 7. Alert Crimson - Major sin/false hadith warning
    alertCrimson: {
        name: { ar: 'القرمزي التحذيري', en: 'Alert Crimson' },
        description: 'Subconscious STOP sign for warnings',
        primary: '#dc2626',
        secondary: '#ef4444',
        background: '#1f2937',
        text: '#fef2f2',
        accent: '#f87171'
    },

    // 8. Paper Warmth - Long-form reading (Tafsir)
    paperWarmth: {
        name: { ar: 'دفء الورق', en: 'Paper Warmth' },
        description: 'Sepia reduces eye strain by 40%',
        primary: '#a16207',
        secondary: '#ca8a04',
        background: '#fefce8',
        text: '#422006',
        accent: '#eab308'
    },

    // 9. Royal Purple - Laylatul Qadr (Last 10 nights)
    royalPurple: {
        name: { ar: 'البنفسجي الملكي', en: 'Royal Purple' },
        description: 'Signals Majesty and Power for special nights',
        primary: '#7c3aed',
        secondary: '#8b5cf6',
        background: '#1e1b4b',
        text: '#f5f3ff',
        accent: '#a78bfa'
    },

    // 10. Dynamic Flux - Auto day/night sync
    dynamicFlux: {
        name: { ar: 'التدفق الديناميكي', en: 'Dynamic Flux' },
        description: 'Auto-changes from Cool (Day) to Warm (Night)',
        primary: 'dynamic',
        secondary: 'dynamic',
        background: 'dynamic',
        text: '#ffffff',
        accent: 'dynamic'
    }
};

// Additional Visual Themes for Groups (20 more from conversation)
export const groupThemes = {
    cyberMedina: { name: 'Cyber-Medina', colors: ['#00ff88', '#000000', '#1a1f3a'] },
    kaabaGold: { name: 'Kaaba-Gold', colors: ['#d4af37', '#000000', '#1a1f3a'] },
    andalusianSun: { name: 'Andalusian-Sun', colors: ['#ea580c', '#7c2d12', '#fef3c7'] },
    caveOfHira: { name: 'Cave of Hira', colors: ['#6b7280', '#374151', '#1f2937'] },
    redSeaSplit: { name: 'Red Sea Split', colors: ['#0ea5e9', '#0284c7', '#0c4a6e'] },
    domeOfRock: { name: 'Dome of the Rock', colors: ['#d4af37', '#1d4ed8', '#fef3c7'] },
    ottomanTulip: { name: 'Ottoman Tulip', colors: ['#7c3aed', '#4c1d95', '#f5f3ff'] },
    desertNight: { name: 'Desert Night', colors: ['#1e3a8a', '#fbbf24', '#0f172a'] },
    fajrGradient: { name: 'Fajr Gradient', colors: ['#000000', '#1e3a8a', '#f9a8d4'] },
    oldParchment: { name: 'Old Parchment', colors: ['#92400e', '#fef3c7', '#1c1917'] },
    oliveBranch: { name: 'Olive Branch', colors: ['#4d7c0f', '#365314', '#ecfccb'] },
    damascusJasmine: { name: 'Damascus Jasmine', colors: ['#ffffff', '#f5f5f5', '#e5e7eb'] },
    uhudDust: { name: 'Uhud Dust', colors: ['#d97706', '#92400e', '#fef3c7'] },
    electricTasbih: { name: 'Electric Tasbih', colors: ['#06b6d4', '#22d3ee', '#0f172a'] },
    mamlukGlass: { name: 'Mamluk Glass', colors: ['#dc2626', '#2563eb', '#16a34a'] },
    inkQalam: { name: 'Ink & Qalam', colors: ['#000000', '#ffffff', '#6b7280'] },
    samarkandBlue: { name: 'Samarkand Blue', colors: ['#0891b2', '#06b6d4', '#083344'] },
    oasisMirage: { name: 'Oasis Mirage', colors: ['#14b8a6', '#2dd4bf', '#134e4a'] },
    silentVoid: { name: 'Silent Void', colors: ['#18181b', '#27272a', '#71717a'] },
    eidSparkle: { name: 'Eid Sparkle', colors: ['#fbbf24', '#f472b6', '#8b5cf6'] }
};

// 40 Negative Prompts for AI (from conversation)
export const negativePrompts = [
    'NO Music Instruments: Only vocals/nature/silence',
    'NO Weak Hadiths: Unless explicitly flagged as warning',
    'NO Human Depiction of Prophets/Sahaba',
    'NO Guilt-Tripping Language: Replace shame with hope',
    'NO Sectarian Debates: Block theological conflict keywords',
    'NO Gender Mixing: No private DMs between genders',
    'NO Halo Effect on Users: Do not canonize users',
    'NO Instant Fatwa: Use only approved database',
    'NO Western Dates First: Hijri then Gregorian',
    'NO God-Mode Tone: AI speaks as servant',
    'NO Infinite Scrolling: Enforce reading stops',
    'NO Slot Machine Mechanics: Earned rewards only',
    'NO Data Selling: Privacy is absolute',
    'NO English-First UI: Arabic RTL is foundation',
    'NO Franco-Arab: Pure Arabic in official text',
    'NO Notification Spam: Smart scheduling only',
    'NO Bright White at Night: Auto-Dark Mode',
    'NO Unverified Charity Links: Official NGOs only',
    'NO Dream Interpretation: Block random interpretations',
    'NO Disrespectful Emojis beside Quran',
    'NO Stock Photos: Custom Islamic Art only',
    'NO Celebrity Culture: Pious users > Influencers',
    'NO Ignoring GPS: Prayer times must be local',
    'NO Dead Ends: Always offer next action',
    'NO Battery Drain: Kill idle processes',
    'NO Voice Assistant Interference: Isolate audio',
    'NO Over-Gamification: Worship is not a joke',
    'NO Delayed Adhan: Priority thread for audio',
    'NO Tajweed Errors: AI Voice must be verified',
    'NO Cultural Insensitivity: Respect global traditions',
    'NO Lorem Ipsum: No placeholder text',
    'NO Hidden Fees: Transparent pricing',
    'NO Complicated Login: Guest mode enabled',
    'NO Magic/Sorcery: Block occult keywords',
    'NO Political Propaganda: Neutral spiritual ground',
    'NO Medical Diagnosis: Wellness advice only',
    'NO Hey Siri triggers: Prevent accidental wakes',
    'NO Flashy Animations during Reading: Static focus',
    'NO Auto-Play Audio: User initiated only',
    'NO SKIPPING BISMILLAH: The code starts with it'
];

// 20 Cool Language (Cyber-Islamic Slang)
export const coolLanguage = {
    'dunya-lag': { ar: 'لاق دنيوي', meaning: 'مشتت بالدنيا / Distracted by world' },
    'glitching': { ar: 'يُجلّج', meaning: 'يرتكب ذنوباً / Committing sins' },
    'patching': { ar: 'تحميل التوبة', meaning: 'يستغفر / Doing Istighfar' },
    'night-ops': { ar: 'عمليات ليلية', meaning: 'قيام الليل / Tahajjud' },
    'shield-wall': { ar: 'جدار الدرع', meaning: 'دعاء جماعي / Collective Dua' },
    'off-world': { ar: 'خارج الكوكب', meaning: 'في خلوة / In seclusion' },
    'zero-point': { ar: 'نقطة الصفر', meaning: 'وقت الإفطار / Iftar time' },
    'hasanat-farming': { ar: 'زراعة الحسنات', meaning: 'ذكر مكثف / Intensive dhikr' },
    'bio-break': { ar: 'استراحة بيولوجية', meaning: 'الوضوء / Wudu' },
    'shadow-work': { ar: 'عمل الظل', meaning: 'صدقة السر / Secret charity' },
    'ping': { ar: 'بينغ', meaning: 'صلِّ على النبي / Send salawat' },
    'echo': { ar: 'صدى', meaning: 'آمين / Ameen' },
    'sync': { ar: 'مزامنة', meaning: 'صلاة الجماعة / Congregational prayer' },
    'source-code': { ar: 'الكود المصدري', meaning: 'القرآن / The Quran' },
    'noor-out': { ar: 'خروج نوراني', meaning: 'إغلاق الهاتف للعبادة / Closing phone for worship' },
    'the-hacker': { ar: 'الهكر', meaning: 'الشيطان / Shaytan' },
    'amir': { ar: 'الأمير', meaning: 'أدمن المجموعة / Group admin' },
    'traveler': { ar: 'عابر سبيل', meaning: 'أخ/أخت في الله / Brother/Sister in faith' },
    'rayyan-run': { ar: 'سباق الريان', meaning: 'الاجتهاد في رمضان / Ramadan sprint' },
    'base': { ar: 'القاعدة', meaning: 'الجنة / Jannah' }
};
