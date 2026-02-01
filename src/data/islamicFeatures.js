// Comprehensive Islamic Features Data
// 100+ features organized by category

// ==================== QURAN FEATURES ====================
export const quranFeatures = {
    // Recitation
    reciters: [
        { id: 'mishary', nameAr: 'مشاري العفاسي', nameEn: 'Mishary Alafasy' },
        { id: 'sudais', nameAr: 'عبدالرحمن السديس', nameEn: 'Abdulrahman Al-Sudais' },
        { id: 'shuraim', nameAr: 'سعود الشريم', nameEn: 'Saud Al-Shuraim' },
        { id: 'minshawi', nameAr: 'محمد صديق المنشاوي', nameEn: 'Al-Minshawi' },
        { id: 'hussary', nameAr: 'محمود خليل الحصري', nameEn: 'Al-Hussary' },
        { id: 'basit', nameAr: 'عبدالباسط عبدالصمد', nameEn: 'Abdul Basit' },
        { id: 'ghamdi', nameAr: 'سعد الغامدي', nameEn: 'Saad Al-Ghamdi' },
        { id: 'ajmi', nameAr: 'أحمد العجمي', nameEn: 'Ahmad Al-Ajmi' },
    ],

    // Reading modes
    readingModes: [
        { id: 'mushaf', ar: 'قراءة من المصحف', en: 'Mushaf Reading' },
        { id: 'tajweed', ar: 'تلاوة بالتجويد', en: 'Tajweed Mode' },
        { id: 'memorization', ar: 'وضع الحفظ', en: 'Memorization Mode' },
        { id: 'revision', ar: 'وضع المراجعة', en: 'Revision Mode' },
    ],

    // Verse bookmarks
    bookmarkCategories: [
        { id: 'favorites', ar: 'المفضلة', en: 'Favorites', icon: '⭐' },
        { id: 'memorized', ar: 'المحفوظات', en: 'Memorized', icon: '📚' },
        { id: 'toReview', ar: 'للمراجعة', en: 'To Review', icon: '🔄' },
        { id: 'reflection', ar: 'للتدبر', en: 'For Reflection', icon: '💭' },
    ],
};

// ==================== PRAYER FEATURES ====================
export const prayerFeatures = {
    // Prayer types
    prayerTypes: [
        { id: 'fard', ar: 'الفرض', en: 'Fard (Obligatory)' },
        { id: 'sunnah', ar: 'السنة', en: 'Sunnah' },
        { id: 'witr', ar: 'الوتر', en: 'Witr' },
        { id: 'duha', ar: 'الضحى', en: 'Duha' },
        { id: 'tahajjud', ar: 'التهجد', en: 'Tahajjud' },
        { id: 'istikhara', ar: 'الاستخارة', en: 'Istikhara' },
        { id: 'janazah', ar: 'الجنازة', en: 'Janazah' },
        { id: 'eid', ar: 'العيد', en: 'Eid' },
        { id: 'kusuf', ar: 'الكسوف', en: 'Eclipse Prayer' },
        { id: 'istisqa', ar: 'الاستسقاء', en: 'Rain Prayer' },
    ],

    // Sunnah prayers with rakaat
    sunnahPrayers: [
        { time: 'fajr', before: 2, after: 0, emphasis: 'مؤكدة' },
        { time: 'dhuhr', before: 4, after: 2, emphasis: 'مؤكدة' },
        { time: 'asr', before: 4, after: 0, emphasis: 'غير مؤكدة' },
        { time: 'maghrib', before: 0, after: 2, emphasis: 'مؤكدة' },
        { time: 'isha', before: 0, after: 2, emphasis: 'مؤكدة' },
    ],

    // Prayer location types
    locationTypes: [
        { id: 'mosque', ar: 'المسجد', en: 'Mosque', multiplier: 27 },
        { id: 'home', ar: 'المنزل', en: 'Home', multiplier: 1 },
        { id: 'work', ar: 'العمل', en: 'Work', multiplier: 1 },
        { id: 'travel', ar: 'السفر', en: 'Travel', multiplier: 1 },
    ],
};

// ==================== DUA FEATURES ====================
export const duaFeatures = {
    // Dua occasions
    occasions: [
        { id: 'morning', ar: 'أذكار الصباح', en: 'Morning Adhkar', time: 'sunrise' },
        { id: 'evening', ar: 'أذكار المساء', en: 'Evening Adhkar', time: 'asr' },
        { id: 'sleep', ar: 'أذكار النوم', en: 'Sleep Adhkar', time: 'night' },
        { id: 'wakeup', ar: 'أذكار الاستيقاظ', en: 'Wake Up Adhkar', time: 'morning' },
        { id: 'afterPrayer', ar: 'أذكار بعد الصلاة', en: 'After Prayer', time: 'any' },
        { id: 'travel', ar: 'دعاء السفر', en: 'Travel Dua', time: 'any' },
        { id: 'food', ar: 'آداب الطعام', en: 'Food Etiquette', time: 'any' },
        { id: 'rain', ar: 'دعاء المطر', en: 'Rain Dua', time: 'any' },
        { id: 'anxiety', ar: 'دعاء الهم والحزن', en: 'Anxiety Relief', time: 'any' },
        { id: 'debt', ar: 'دعاء قضاء الدين', en: 'Debt Relief', time: 'any' },
        { id: 'sickness', ar: 'دعاء المريض', en: 'For Sick', time: 'any' },
        { id: 'parents', ar: 'دعاء للوالدين', en: 'For Parents', time: 'any' },
    ],

    // Special duas
    specialDuas: [
        {
            id: 'laylatalQadr', ar: 'دعاء ليلة القدر', en: 'Laylat al-Qadr',
            text: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي'
        },
        {
            id: 'sayyidulIstighfar', ar: 'سيد الاستغفار', en: 'Master of Forgiveness',
            text: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ...'
        },
        {
            id: 'istikhara', ar: 'دعاء الاستخارة', en: 'Istikhara',
            text: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ...'
        },
    ],
};

// ==================== FASTING FEATURES ====================
export const fastingFeatures = {
    // Fasting types
    fastingTypes: [
        { id: 'ramadan', ar: 'صيام رمضان', en: 'Ramadan', reward: 'فريضة' },
        { id: 'shawwal', ar: 'ست من شوال', en: 'Six of Shawwal', reward: 'كصيام الدهر' },
        { id: 'monday', ar: 'الإثنين', en: 'Monday', reward: 'تُرفع الأعمال' },
        { id: 'thursday', ar: 'الخميس', en: 'Thursday', reward: 'تُرفع الأعمال' },
        { id: 'ayyamBid', ar: 'الأيام البيض', en: 'White Days (13-15)', reward: 'كصيام الشهر' },
        { id: 'arafah', ar: 'يوم عرفة', en: 'Day of Arafah', reward: 'يكفر سنتين' },
        { id: 'ashura', ar: 'عاشوراء', en: 'Ashura', reward: 'يكفر سنة' },
        { id: 'muharram', ar: 'شهر محرم', en: 'Muharram', reward: 'أفضل الصيام بعد رمضان' },
        { id: 'dawud', ar: 'صيام داود', en: 'Dawud Fasting', reward: 'يوم ويوم' },
    ],

    // Suhoor tips
    suhoorTips: [
        { ar: 'تأخير السحور بركة', en: 'Delay Suhoor for blessing' },
        { ar: 'التمر والماء أساسي', en: 'Dates and water are essential' },
        { ar: 'تجنب الملح الزائد', en: 'Avoid excess salt' },
        { ar: 'البروتين للشبع الطويل', en: 'Protein for longer satiety' },
    ],

    // Iftar tips
    iftarTips: [
        { ar: 'ابدأ بالتمر والماء', en: 'Start with dates and water' },
        { ar: 'لا تأكل بسرعة', en: 'Eat slowly' },
        { ar: 'صلِّ المغرب ثم أكمل', en: 'Pray Maghrib then continue' },
        { ar: 'تجنب المقليات الثقيلة', en: 'Avoid heavy fried foods' },
    ],
};

// ==================== ZAKAT FEATURES ====================
export const zakatFeatures = {
    // Zakat types
    zakatTypes: [
        { id: 'mal', ar: 'زكاة المال', en: 'Wealth Zakat', rate: 2.5 },
        { id: 'fitr', ar: 'زكاة الفطر', en: 'Fitr Zakat', amount: 'صاع' },
        { id: 'gold', ar: 'زكاة الذهب', en: 'Gold Zakat', nisab: '85g' },
        { id: 'silver', ar: 'زكاة الفضة', en: 'Silver Zakat', nisab: '595g' },
        { id: 'trade', ar: 'عروض التجارة', en: 'Trade Goods', rate: 2.5 },
        { id: 'crops', ar: 'زكاة الزروع', en: 'Crops', rate: '5-10%' },
        { id: 'livestock', ar: 'زكاة الأنعام', en: 'Livestock', varies: true },
    ],

    // Recipients
    recipients: [
        { ar: 'الفقراء', en: 'The Poor', icon: '👤' },
        { ar: 'المساكين', en: 'The Needy', icon: '🏠' },
        { ar: 'العاملون عليها', en: 'Zakat Collectors', icon: '📋' },
        { ar: 'المؤلفة قلوبهم', en: 'New Muslims', icon: '💚' },
        { ar: 'في الرقاب', en: 'Freeing Slaves', icon: '🔓' },
        { ar: 'الغارمون', en: 'In Debt', icon: '💳' },
        { ar: 'في سبيل الله', en: 'In Allah\'s Cause', icon: '🛤️' },
        { ar: 'ابن السبيل', en: 'Stranded Traveler', icon: '🧳' },
    ],
};

// ==================== NAMES OF ALLAH ====================
export const asmaAlHusna = [
    { number: 1, ar: 'الله', en: 'Allah', meaning: 'The God' },
    { number: 2, ar: 'الرحمن', en: 'Ar-Rahman', meaning: 'The Most Merciful' },
    { number: 3, ar: 'الرحيم', en: 'Ar-Raheem', meaning: 'The Most Compassionate' },
    { number: 4, ar: 'الملك', en: 'Al-Malik', meaning: 'The King' },
    { number: 5, ar: 'القدوس', en: 'Al-Quddus', meaning: 'The Holy' },
    { number: 6, ar: 'السلام', en: 'As-Salam', meaning: 'The Peace' },
    { number: 7, ar: 'المؤمن', en: 'Al-Mu\'min', meaning: 'The Granter of Security' },
    { number: 8, ar: 'المهيمن', en: 'Al-Muhaymin', meaning: 'The Guardian' },
    { number: 9, ar: 'العزيز', en: 'Al-Aziz', meaning: 'The Mighty' },
    { number: 10, ar: 'الجبار', en: 'Al-Jabbar', meaning: 'The Compeller' },
    // ... continues to 99
    { number: 99, ar: 'الصبور', en: 'As-Sabur', meaning: 'The Patient' },
];

// ==================== PROPHETS ====================
export const prophets = [
    { ar: 'آدم', en: 'Adam', order: 1 },
    { ar: 'إدريس', en: 'Idris', order: 2 },
    { ar: 'نوح', en: 'Nuh', order: 3 },
    { ar: 'هود', en: 'Hud', order: 4 },
    { ar: 'صالح', en: 'Salih', order: 5 },
    { ar: 'إبراهيم', en: 'Ibrahim', order: 6 },
    { ar: 'لوط', en: 'Lut', order: 7 },
    { ar: 'إسماعيل', en: 'Ismail', order: 8 },
    { ar: 'إسحاق', en: 'Ishaq', order: 9 },
    { ar: 'يعقوب', en: 'Yaqub', order: 10 },
    { ar: 'يوسف', en: 'Yusuf', order: 11 },
    { ar: 'أيوب', en: 'Ayyub', order: 12 },
    { ar: 'شعيب', en: 'Shuayb', order: 13 },
    { ar: 'موسى', en: 'Musa', order: 14 },
    { ar: 'هارون', en: 'Harun', order: 15 },
    { ar: 'ذو الكفل', en: 'Dhul-Kifl', order: 16 },
    { ar: 'داود', en: 'Dawud', order: 17 },
    { ar: 'سليمان', en: 'Sulayman', order: 18 },
    { ar: 'إلياس', en: 'Ilyas', order: 19 },
    { ar: 'اليسع', en: 'Alyasa', order: 20 },
    { ar: 'يونس', en: 'Yunus', order: 21 },
    { ar: 'زكريا', en: 'Zakariya', order: 22 },
    { ar: 'يحيى', en: 'Yahya', order: 23 },
    { ar: 'عيسى', en: 'Isa', order: 24 },
    { ar: 'محمد ﷺ', en: 'Muhammad ﷺ', order: 25 },
];

// ==================== ISLAMIC MONTHS ====================
export const islamicMonths = [
    { number: 1, ar: 'محرم', en: 'Muharram', significance: 'شهر حرام' },
    { number: 2, ar: 'صفر', en: 'Safar', significance: '' },
    { number: 3, ar: 'ربيع الأول', en: 'Rabi al-Awwal', significance: 'شهر المولد النبوي' },
    { number: 4, ar: 'ربيع الثاني', en: 'Rabi al-Thani', significance: '' },
    { number: 5, ar: 'جمادى الأولى', en: 'Jumada al-Awwal', significance: '' },
    { number: 6, ar: 'جمادى الآخرة', en: 'Jumada al-Thani', significance: '' },
    { number: 7, ar: 'رجب', en: 'Rajab', significance: 'شهر حرام - الإسراء والمعراج' },
    { number: 8, ar: 'شعبان', en: 'Shaban', significance: 'ليلة النصف' },
    { number: 9, ar: 'رمضان', en: 'Ramadan', significance: 'شهر الصيام' },
    { number: 10, ar: 'شوال', en: 'Shawwal', significance: 'عيد الفطر' },
    { number: 11, ar: 'ذو القعدة', en: 'Dhu al-Qadah', significance: 'شهر حرام' },
    { number: 12, ar: 'ذو الحجة', en: 'Dhu al-Hijjah', significance: 'شهر الحج - عيد الأضحى' },
];

// ==================== PILLARS OF ISLAM ====================
export const pillarsOfIslam = [
    { number: 1, ar: 'الشهادة', en: 'Shahada', description: 'شهادة أن لا إله إلا الله وأن محمداً رسول الله' },
    { number: 2, ar: 'الصلاة', en: 'Salah', description: 'إقام الصلاة خمس مرات يومياً' },
    { number: 3, ar: 'الزكاة', en: 'Zakat', description: 'إيتاء الزكاة للمستحقين' },
    { number: 4, ar: 'الصوم', en: 'Sawm', description: 'صوم شهر رمضان' },
    { number: 5, ar: 'الحج', en: 'Hajj', description: 'حج البيت لمن استطاع إليه سبيلاً' },
];

// ==================== PILLARS OF IMAN ====================
export const pillarsOfIman = [
    { number: 1, ar: 'الإيمان بالله', en: 'Belief in Allah' },
    { number: 2, ar: 'الإيمان بالملائكة', en: 'Belief in Angels' },
    { number: 3, ar: 'الإيمان بالكتب', en: 'Belief in Books' },
    { number: 4, ar: 'الإيمان بالرسل', en: 'Belief in Messengers' },
    { number: 5, ar: 'الإيمان باليوم الآخر', en: 'Belief in Last Day' },
    { number: 6, ar: 'الإيمان بالقدر', en: 'Belief in Destiny' },
];

// ==================== HAJJ & UMRAH ====================
export const hajjUmrah = {
    hajjSteps: [
        { order: 1, ar: 'الإحرام', en: 'Ihram', location: 'ميقات' },
        { order: 2, ar: 'طواف القدوم', en: 'Tawaf al-Qudum', location: 'الكعبة' },
        { order: 3, ar: 'السعي', en: 'Sa\'i', location: 'الصفا والمروة' },
        { order: 4, ar: 'يوم التروية', en: 'Day of Tarwiyah', location: 'منى' },
        { order: 5, ar: 'الوقوف بعرفة', en: 'Standing at Arafat', location: 'عرفة' },
        { order: 6, ar: 'المبيت بمزدلفة', en: 'Night at Muzdalifah', location: 'مزدلفة' },
        { order: 7, ar: 'رمي الجمرات', en: 'Stoning', location: 'منى' },
        { order: 8, ar: 'الذبح', en: 'Sacrifice', location: 'منى' },
        { order: 9, ar: 'الحلق أو التقصير', en: 'Shaving/Trimming', location: 'منى' },
        { order: 10, ar: 'طواف الإفاضة', en: 'Tawaf al-Ifadah', location: 'الكعبة' },
        { order: 11, ar: 'طواف الوداع', en: 'Tawaf al-Wada', location: 'الكعبة' },
    ],

    umrahSteps: [
        { order: 1, ar: 'الإحرام', en: 'Ihram' },
        { order: 2, ar: 'الطواف', en: 'Tawaf' },
        { order: 3, ar: 'صلاة ركعتين', en: 'Two Rakat' },
        { order: 4, ar: 'السعي', en: 'Sa\'i' },
        { order: 5, ar: 'الحلق أو التقصير', en: 'Shaving/Trimming' },
    ],
};

// ==================== DAILY CHALLENGES ====================
export const dailyChallenges = [
    { id: 'fajrJamaah', ar: 'صلاة الفجر جماعة', en: 'Fajr in Congregation', hasanat: 27 },
    { id: 'quranPage', ar: 'قراءة صفحة من القرآن', en: 'Read 1 Quran Page', hasanat: 10 },
    { id: 'sadaqa', ar: 'صدقة اليوم', en: 'Daily Charity', hasanat: 70 },
    { id: 'smile', ar: 'ابتسم في وجه أخيك', en: 'Smile at Someone', hasanat: 1 },
    { id: 'salam', ar: 'ألقِ السلام', en: 'Spread Salams', hasanat: 10 },
    { id: 'dhikr100', ar: '100 تسبيحة', en: '100 Tasbeeh', hasanat: 100 },
    { id: 'duha', ar: 'صلاة الضحى', en: 'Duha Prayer', hasanat: 20 },
    { id: 'parentsDua', ar: 'دعاء للوالدين', en: 'Dua for Parents', hasanat: 50 },
    { id: 'fastMonday', ar: 'صيام الإثنين', en: 'Monday Fast', hasanat: 700 },
    { id: 'visitSick', ar: 'زيارة مريض', en: 'Visit the Sick', hasanat: 100 },
];

// ==================== NOTIFICATION SETTINGS ====================
export const notificationTypes = [
    { id: 'prayerTime', ar: 'تنبيه الصلاة', en: 'Prayer Time Alert', default: true },
    { id: 'prayerReminder', ar: 'تذكير قبل 15 دقيقة', en: '15 min Reminder', default: true },
    { id: 'fajrSpecial', ar: 'تنبيه خاص للفجر', en: 'Special Fajr Alert', default: true },
    { id: 'suhoor', ar: 'تنبيه السحور', en: 'Suhoor Alert', default: true },
    { id: 'iftar', ar: 'تنبيه الإفطار', en: 'Iftar Alert', default: true },
    { id: 'quranReminder', ar: 'تذكير القرآن', en: 'Quran Reminder', default: false },
    { id: 'adhkarMorning', ar: 'أذكار الصباح', en: 'Morning Adhkar', default: true },
    { id: 'adhkarEvening', ar: 'أذكار المساء', en: 'Evening Adhkar', default: true },
    { id: 'dailyChallenge', ar: 'التحدي اليومي', en: 'Daily Challenge', default: false },
    { id: 'streakReminder', ar: 'تذكير السلسلة', en: 'Streak Reminder', default: true },
];

// ==================== ACHIEVEMENTS ====================
export const achievements = [
    { id: 'fajrWarrior7', ar: 'محارب الفجر - 7 أيام', en: 'Fajr Warrior - 7 Days', icon: '🌅' },
    { id: 'fajrWarrior30', ar: 'محارب الفجر - 30 يوم', en: 'Fajr Warrior - 30 Days', icon: '⚔️' },
    { id: 'quranKhatim', ar: 'خاتم القرآن', en: 'Quran Completer', icon: '📖' },
    { id: 'ramadanChamp', ar: 'بطل رمضان', en: 'Ramadan Champion', icon: '🏆' },
    { id: 'sadaqaKing', ar: 'ملك الصدقة', en: 'Charity King', icon: '👑' },
    { id: 'dhikrMaster', ar: 'سيد الذكر', en: 'Dhikr Master', icon: '📿' },
    { id: 'taraweehNinja', ar: 'نينجا التراويح', en: 'Taraweeh Ninja', icon: '🥷' },
    { id: 'nightOwl', ar: 'بومة الليل', en: 'Night Owl (Tahajjud)', icon: '🦉' },
    { id: 'socialButterfly', ar: 'فراشة اجتماعية', en: 'Social Butterfly', icon: '🦋' },
    { id: 'scholar', ar: 'طالب العلم', en: 'Scholar', icon: '🎓' },
];

// ==================== QIBLA DATA ====================
export const qiblaData = {
    kaabaCoords: { lat: 21.4225, lng: 39.8262 },
    calculateQibla: (userLat, userLng) => {
        const kaabaLat = 21.4225 * Math.PI / 180;
        const kaabaLng = 39.8262 * Math.PI / 180;
        const userLatRad = userLat * Math.PI / 180;
        const userLngRad = userLng * Math.PI / 180;

        const y = Math.sin(kaabaLng - userLngRad);
        const x = Math.cos(userLatRad) * Math.tan(kaabaLat) -
            Math.sin(userLatRad) * Math.cos(kaabaLng - userLngRad);

        let qibla = Math.atan2(y, x) * 180 / Math.PI;
        return (qibla + 360) % 360;
    }
};

// ==================== ISLAMIC CALENDAR EVENTS ====================
export const islamicEvents = [
    { date: '1 Muharram', ar: 'رأس السنة الهجرية', en: 'Islamic New Year' },
    { date: '10 Muharram', ar: 'يوم عاشوراء', en: 'Day of Ashura' },
    { date: '12 Rabi al-Awwal', ar: 'المولد النبوي', en: 'Prophet\'s Birthday' },
    { date: '27 Rajab', ar: 'الإسراء والمعراج', en: 'Isra and Miraj' },
    { date: '15 Shaban', ar: 'ليلة النصف من شعبان', en: 'Mid-Shaban Night' },
    { date: '1 Ramadan', ar: 'بداية رمضان', en: 'Start of Ramadan' },
    { date: '27 Ramadan', ar: 'ليلة القدر (تقريباً)', en: 'Laylat al-Qadr (approx)' },
    { date: '1 Shawwal', ar: 'عيد الفطر', en: 'Eid al-Fitr' },
    { date: '9 Dhu al-Hijjah', ar: 'يوم عرفة', en: 'Day of Arafah' },
    { date: '10 Dhu al-Hijjah', ar: 'عيد الأضحى', en: 'Eid al-Adha' },
];

// ==================== QUICK TIPS ====================
export const quickTips = [
    { ar: 'من صلى الفجر في جماعة فهو في ذمة الله', en: 'Praying Fajr in congregation puts you under Allah\'s protection' },
    { ar: 'أحب الأعمال إلى الله أدومها وإن قل', en: 'The best deeds are consistent ones, even if small' },
    { ar: 'الدعاء بين الأذان والإقامة لا يرد', en: 'Dua between Adhan and Iqama is not rejected' },
    { ar: 'سورة الكهف يوم الجمعة نور', en: 'Surah Al-Kahf on Friday is light' },
    { ar: 'صوم الإثنين والخميس تُرفع فيهما الأعمال', en: 'Fasting Mon/Thu - deeds are presented to Allah' },
    { ar: 'الصلاة على النبي ﷺ تفتح أبواب الرزق', en: 'Salawat opens doors of provision' },
    { ar: 'آخر ساعة من الجمعة وقت استجابة', en: 'Last hour of Friday is time of acceptance' },
    { ar: 'قيام الليل شرف المؤمن', en: 'Night prayer is the honor of a believer' },
];
