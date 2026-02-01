// ═══════════════════════════════════════════════════════════════════════════
// COMPETITION MAXX DATA - حلبة المسارعة المتقدمة
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// 1. DAILY QUESTS - المهام اليومية
// ═══════════════════════════════════════════════════════════════════════════

export const dailyQuests = [
    {
        id: 'fajr_warrior',
        icon: '🌅',
        title: { ar: 'محارب الفجر', en: 'Fajr Warrior' },
        description: { ar: 'صلِّ الفجر في وقته', en: 'Pray Fajr on time' },
        reward: 100,
        xp: 50,
        category: 'prayer'
    },
    {
        id: 'quran_daily',
        icon: '📖',
        title: { ar: 'قارئ اليوم', en: 'Daily Reader' },
        description: { ar: 'اقرأ صفحتين من القرآن', en: 'Read 2 pages of Quran' },
        reward: 50,
        xp: 30,
        category: 'quran'
    },
    {
        id: 'adhkar_morning',
        icon: '☀️',
        title: { ar: 'أذكار الصباح', en: 'Morning Adhkar' },
        description: { ar: 'أكمل أذكار الصباح', en: 'Complete morning remembrance' },
        reward: 30,
        xp: 20,
        category: 'dhikr'
    },
    {
        id: 'adhkar_evening',
        icon: '🌙',
        title: { ar: 'أذكار المساء', en: 'Evening Adhkar' },
        description: { ar: 'أكمل أذكار المساء', en: 'Complete evening remembrance' },
        reward: 30,
        xp: 20,
        category: 'dhikr'
    },
    {
        id: 'charity_day',
        icon: '💰',
        title: { ar: 'صدقة اليوم', en: 'Daily Charity' },
        description: { ar: 'تصدق ولو بأقل القليل', en: 'Give charity even if small' },
        reward: 70,
        xp: 40,
        category: 'charity'
    },
    {
        id: 'five_prayers',
        icon: '🕌',
        title: { ar: 'الصلوات الخمس', en: 'Five Prayers' },
        description: { ar: 'أكمل جميع الصلوات اليوم', en: 'Complete all 5 prayers today' },
        reward: 200,
        xp: 100,
        category: 'prayer'
    },
    {
        id: 'dua_list',
        icon: '🤲',
        title: { ar: 'داعي اليوم', en: 'Daily Supplicant' },
        description: { ar: 'ادعُ لـ 3 أشخاص بظهر الغيب', en: 'Make dua for 3 people secretly' },
        reward: 40,
        xp: 25,
        category: 'dua'
    },
    {
        id: 'istighfar_100',
        icon: '💎',
        title: { ar: 'مستغفر', en: 'Seeker of Forgiveness' },
        description: { ar: 'استغفر 100 مرة', en: 'Seek forgiveness 100 times' },
        reward: 50,
        xp: 30,
        category: 'dhikr'
    },
    {
        id: 'salawat_100',
        icon: '💚',
        title: { ar: 'مصلٍّ على النبي', en: 'Sender of Blessings' },
        description: { ar: 'صلِّ على النبي ﷺ 100 مرة', en: 'Send 100 blessings on Prophet ﷺ' },
        reward: 50,
        xp: 30,
        category: 'dhikr'
    },
    {
        id: 'night_prayer',
        icon: '🌌',
        title: { ar: 'قائم الليل', en: 'Night Worshipper' },
        description: { ar: 'صلِّ ركعتين في الثلث الأخير', en: 'Pray 2 rakaat in last third of night' },
        reward: 150,
        xp: 80,
        category: 'prayer'
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// 2. ACHIEVEMENTS SYSTEM - نظام الإنجازات
// ═══════════════════════════════════════════════════════════════════════════

export const achievements = [
    // Streak Achievements
    { id: 'streak_7', icon: '🔥', title: { ar: 'أسبوع مستمر', en: '7 Day Streak' }, description: { ar: '7 أيام متواصلة', en: '7 consecutive days' }, requirement: 7, type: 'streak', reward: 100, rarity: 'common' },
    { id: 'streak_30', icon: '💪', title: { ar: 'شهر كامل', en: '30 Day Streak' }, description: { ar: '30 يوماً متواصلاً', en: '30 consecutive days' }, requirement: 30, type: 'streak', reward: 500, rarity: 'rare' },
    { id: 'streak_100', icon: '👑', title: { ar: 'المائة المباركة', en: '100 Day Legend' }, description: { ar: '100 يوم متواصل', en: '100 consecutive days' }, requirement: 100, type: 'streak', reward: 2000, rarity: 'legendary' },

    // Prayer Achievements
    { id: 'fajr_7', icon: '🌅', title: { ar: 'صديق الفجر', en: 'Friend of Fajr' }, description: { ar: '7 فجور متتالية', en: '7 consecutive Fajr prayers' }, requirement: 7, type: 'fajr', reward: 200, rarity: 'uncommon' },
    { id: 'fajr_30', icon: '⭐', title: { ar: 'نجم الفجر', en: 'Fajr Star' }, description: { ar: '30 فجراً متتالياً', en: '30 consecutive Fajr' }, requirement: 30, type: 'fajr', reward: 1000, rarity: 'epic' },

    // Quran Achievements
    { id: 'quran_juz', icon: '📖', title: { ar: 'ختم جزء', en: 'Juz Complete' }, description: { ar: 'أكمل جزءاً كاملاً', en: 'Complete one Juz' }, requirement: 20, type: 'quran_pages', reward: 300, rarity: 'uncommon' },
    { id: 'quran_khatm', icon: '📗', title: { ar: 'خاتم القرآن', en: 'Quran Completer' }, description: { ar: 'ختمت القرآن كاملاً', en: 'Complete entire Quran' }, requirement: 604, type: 'quran_pages', reward: 5000, rarity: 'legendary' },

    // Hasanat Achievements
    { id: 'hasanat_1k', icon: '✨', title: { ar: 'ألف حسنة', en: '1K Hasanat' }, description: { ar: 'جمعت 1000 حسنة', en: 'Collected 1000 Hasanat' }, requirement: 1000, type: 'hasanat', reward: 100, rarity: 'common' },
    { id: 'hasanat_10k', icon: '💫', title: { ar: 'عشرة آلاف', en: '10K Hasanat' }, description: { ar: 'جمعت 10000 حسنة', en: 'Collected 10000 Hasanat' }, requirement: 10000, type: 'hasanat', reward: 500, rarity: 'rare' },
    { id: 'hasanat_100k', icon: '🌟', title: { ar: 'مائة ألف', en: '100K Hasanat' }, description: { ar: 'جمعت 100000 حسنة', en: 'Collected 100000 Hasanat' }, requirement: 100000, type: 'hasanat', reward: 2000, rarity: 'epic' },
    { id: 'hasanat_1m', icon: '🏆', title: { ar: 'المليونير', en: 'Millionaire' }, description: { ar: 'جمعت مليون حسنة', en: 'Collected 1 million Hasanat' }, requirement: 1000000, type: 'hasanat', reward: 10000, rarity: 'legendary' },

    // Social Achievements
    { id: 'boost_10', icon: '⚡', title: { ar: 'داعم', en: 'Supporter' }, description: { ar: 'دعمت 10 أصدقاء', en: 'Boosted 10 friends' }, requirement: 10, type: 'boosts', reward: 150, rarity: 'uncommon' },
    { id: 'duel_win_5', icon: '🆚', title: { ar: 'منافس', en: 'Competitor' }, description: { ar: 'فزت بـ 5 مبارزات', en: 'Won 5 duels' }, requirement: 5, type: 'duel_wins', reward: 300, rarity: 'rare' },

    // Special Achievements
    { id: 'ramadan_complete', icon: '🌙', title: { ar: 'رمضان كامل', en: 'Ramadan Complete' }, description: { ar: 'أكملت رمضان بالتتبع', en: 'Tracked full Ramadan' }, requirement: 30, type: 'ramadan_days', reward: 3000, rarity: 'epic' },
    { id: 'early_bird', icon: '🐦', title: { ar: 'الطائر المبكر', en: 'Early Bird' }, description: { ar: 'فتحت التطبيق قبل الفجر 7 مرات', en: 'Opened app before Fajr 7 times' }, requirement: 7, type: 'early_opens', reward: 200, rarity: 'uncommon' }
];

// ═══════════════════════════════════════════════════════════════════════════
// 3. DUEL SYSTEM - نظام المبارزات
// ═══════════════════════════════════════════════════════════════════════════

export const duelTypes = [
    {
        id: 'quran_race',
        icon: '📖',
        title: { ar: 'سباق القرآن', en: 'Quran Race' },
        description: { ar: 'من يقرأ أكثر خلال أسبوع؟', en: 'Who reads more in a week?' },
        metric: 'quran_pages',
        duration: 7, // days
        minReward: 100,
        maxReward: 500
    },
    {
        id: 'fajr_battle',
        icon: '🌅',
        title: { ar: 'معركة الفجر', en: 'Fajr Battle' },
        description: { ar: 'من يصلي أكثر فجور متتالية؟', en: 'Who prays more consecutive Fajrs?' },
        metric: 'fajr_streak',
        duration: 14,
        minReward: 200,
        maxReward: 1000
    },
    {
        id: 'hasanat_marathon',
        icon: '✨',
        title: { ar: 'ماراثون الحسنات', en: 'Hasanat Marathon' },
        description: { ar: 'من يجمع أكثر حسنات؟', en: 'Who collects more Hasanat?' },
        metric: 'hasanat',
        duration: 7,
        minReward: 150,
        maxReward: 750
    },
    {
        id: 'dhikr_challenge',
        icon: '📿',
        title: { ar: 'تحدي الذكر', en: 'Dhikr Challenge' },
        description: { ar: 'من يذكر الله أكثر؟', en: 'Who remembers Allah more?' },
        metric: 'dhikr_count',
        duration: 3,
        minReward: 50,
        maxReward: 300
    },
    {
        id: 'charity_race',
        icon: '💰',
        title: { ar: 'سباق الصدقة', en: 'Charity Race' },
        description: { ar: 'من يتصدق أكثر مرات؟', en: 'Who gives charity more times?' },
        metric: 'charity_count',
        duration: 7,
        minReward: 200,
        maxReward: 800
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// 4. STREAK REWARDS - مكافآت السلاسل
// ═══════════════════════════════════════════════════════════════════════════

export const streakRewards = [
    { days: 3, icon: '🌱', title: { ar: 'البداية', en: 'The Beginning' }, reward: 30, badge: 'beginner' },
    { days: 7, icon: '🔥', title: { ar: 'أسبوع مشتعل', en: 'Week on Fire' }, reward: 100, badge: 'week_streak' },
    { days: 14, icon: '💪', title: { ar: 'أسبوعان قوة', en: 'Two Weeks Strong' }, reward: 200, badge: 'two_week_streak' },
    { days: 21, icon: '🧠', title: { ar: 'عادة متكونة', en: 'Habit Formed' }, reward: 350, badge: 'habit_formed' },
    { days: 30, icon: '🏅', title: { ar: 'شهر الإنجاز', en: 'Month of Achievement' }, reward: 500, badge: 'month_streak' },
    { days: 40, icon: '⭐', title: { ar: 'الأربعون', en: 'The Forty' }, reward: 700, badge: 'forty_days' },
    { days: 60, icon: '💎', title: { ar: 'شهران ماسيان', en: 'Two Diamond Months' }, reward: 1000, badge: 'two_month_streak' },
    { days: 90, icon: '🎖️', title: { ar: 'ربع السنة', en: 'Quarter Year' }, reward: 1500, badge: 'quarter_year' },
    { days: 100, icon: '👑', title: { ar: 'المئوية', en: 'The Hundred' }, reward: 2000, badge: 'hundred_days' },
    { days: 180, icon: '🌟', title: { ar: 'نصف السنة', en: 'Half Year' }, reward: 3000, badge: 'half_year' },
    { days: 365, icon: '🏆', title: { ar: 'السنة الكاملة', en: 'Full Year' }, reward: 10000, badge: 'full_year' }
];

// ═══════════════════════════════════════════════════════════════════════════
// 5. WEEKLY REPORT TEMPLATE - قالب التقرير الأسبوعي
// ═══════════════════════════════════════════════════════════════════════════

export const weeklyReportConfig = {
    sections: [
        { id: 'prayers', icon: '🕌', title: { ar: 'الصلوات', en: 'Prayers' }, color: '#10b981' },
        { id: 'quran', icon: '📖', title: { ar: 'القرآن', en: 'Quran' }, color: '#d4af37' },
        { id: 'hasanat', icon: '✨', title: { ar: 'الحسنات', en: 'Hasanat' }, color: '#8b5cf6' },
        { id: 'streaks', icon: '🔥', title: { ar: 'السلاسل', en: 'Streaks' }, color: '#ef4444' },
        { id: 'rank', icon: '🏆', title: { ar: 'الترتيب', en: 'Rank' }, color: '#f59e0b' }
    ],
    motivationalMessages: [
        { ar: 'استمر! أنت في الطريق الصحيح 💪', en: 'Keep going! You\'re on the right path 💪' },
        { ar: 'ما شاء الله! أداء رائع هذا الأسبوع ✨', en: 'MashaAllah! Amazing performance this week ✨' },
        { ar: 'كل خطوة تقربك من الجنة 🌟', en: 'Every step brings you closer to Paradise 🌟' },
        { ar: 'الله يراك ويحفظ لك كل حسنة 💚', en: 'Allah sees you and records every good deed 💚' }
    ],
    shareText: {
        ar: 'تقريري الأسبوعي من تطبيق الوُصلة 🌙',
        en: 'My weekly report from Al-Wusla app 🌙'
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// TITLES & RANKS - الألقاب والرتب
// ═══════════════════════════════════════════════════════════════════════════

export const titlesAndRanks = [
    { id: 'newcomer', level: 0, icon: '🌱', title: { ar: 'مبتدئ', en: 'Newcomer' }, minXP: 0 },
    { id: 'seeker', level: 1, icon: '🔍', title: { ar: 'باحث', en: 'Seeker' }, minXP: 100 },
    { id: 'learner', level: 2, icon: '📚', title: { ar: 'متعلم', en: 'Learner' }, minXP: 500 },
    { id: 'practitioner', level: 3, icon: '💪', title: { ar: 'مجتهد', en: 'Practitioner' }, minXP: 1500 },
    { id: 'devoted', level: 4, icon: '🕌', title: { ar: 'عابد', en: 'Devoted' }, minXP: 3000 },
    { id: 'guardian', level: 5, icon: '⚔️', title: { ar: 'حارس', en: 'Guardian' }, minXP: 6000 },
    { id: 'knight', level: 6, icon: '🛡️', title: { ar: 'فارس', en: 'Knight' }, minXP: 10000 },
    { id: 'champion', level: 7, icon: '🏅', title: { ar: 'بطل', en: 'Champion' }, minXP: 20000 },
    { id: 'master', level: 8, icon: '⭐', title: { ar: 'أستاذ', en: 'Master' }, minXP: 50000 },
    { id: 'legend', level: 9, icon: '👑', title: { ar: 'أسطورة', en: 'Legend' }, minXP: 100000 },
    { id: 'saint', level: 10, icon: '🌟', title: { ar: 'ولي', en: 'Saint' }, minXP: 250000 }
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

export const getRarityColor = (rarity) => {
    const colors = {
        common: '#9ca3af',
        uncommon: '#10b981',
        rare: '#3b82f6',
        epic: '#8b5cf6',
        legendary: '#f59e0b'
    };
    return colors[rarity] || colors.common;
};

export const getUserTitle = (xp) => {
    const sorted = [...titlesAndRanks].sort((a, b) => b.minXP - a.minXP);
    return sorted.find(t => xp >= t.minXP) || titlesAndRanks[0];
};

export const getNextStreakReward = (currentStreak) => {
    return streakRewards.find(r => r.days > currentStreak) || streakRewards[streakRewards.length - 1];
};

export const generateDailyQuests = (count = 3) => {
    const shuffled = [...dailyQuests].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};
