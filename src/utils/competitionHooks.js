/**
 * COMPETITION EXPERT HOOKS - 15 Logic + 20 Psychology + 5 Validation
 * Scientific approach to daily/weekly engagement
 * By K. for Al-Wusla Ramadan App
 */

// ═══════════════════════════════════════════════════════════════
// 15 EXPERT LOGIC SUGGESTIONS FOR COMPETITION
// ═══════════════════════════════════════════════════════════════

export const competitionLogicSuggestions = [
    {
        id: 1,
        name: 'League Tiering System',
        ar: 'نظام الدوريات المتدرجة',
        logic: `
            Bronze → Silver → Gold → Diamond → Mujahid
            - Users compete within their tier only
            - Top 10% promote, bottom 10% demote weekly
            - Creates achievable goals at every level
        `,
        implementation: 'user.league based on percentile'
    },
    {
        id: 2,
        name: 'Dynamic Matchmaking',
        ar: 'المطابقة الديناميكية',
        logic: `
            - Match users with similar activity levels
            - ±15% hasanat difference for fair competition
            - Prevents discouragement from impossible gaps
        `,
        implementation: 'competitionAPI.matchUsers(hasanat ± 15%)'
    },
    {
        id: 3,
        name: 'Weekly Reset Cycles',
        ar: 'دورات إعادة التعيين الأسبوعية',
        logic: `
            - Leaderboard resets every Sunday midnight
            - Previous week achievements saved as "Legacy"
            - Fresh start keeps competition exciting
        `,
        implementation: 'cron job: 0 0 * * 0 resetWeeklyLeaderboard()'
    },
    {
        id: 4,
        name: 'Daily Bonus Windows',
        ar: 'نوافذ المكافآت اليومية',
        logic: `
            Fajr (4-6 AM): 3x multiplier
            Dhuhr (12-2 PM): 1.5x multiplier
            Last Third (3-5 AM): 7x multiplier (Qiyam)
        `,
        implementation: 'getMultiplier(currentHour)'
    },
    {
        id: 5,
        name: 'Comeback Mechanic',
        ar: 'آلية العودة',
        logic: `
            - Users behind by 30%+ get temporary 2x boost
            - Lasts for 2 hours max
            - Prevents giving up early in the week
        `,
        implementation: 'if (userRank > top30%) applyBoost(2x, 2h)'
    },
    {
        id: 6,
        name: 'Streak Multiplier Stack',
        ar: 'تراكم مضاعف السلسلة',
        logic: `
            Day 1-7: 1x base
            Day 8-14: 1.5x
            Day 15-21: 2x
            Day 22-30: 3x (Ramadan Master)
        `,
        implementation: 'multiplier = getStreakMultiplier(streakDays)'
    },
    {
        id: 7,
        name: 'Team vs Team Mode',
        ar: 'وضع فريق ضد فريق',
        logic: `
            - 5-person "Katiba" teams
            - Combined hasanat compete against other teams
            - Individual slacking affects whole team (social pressure)
        `,
        implementation: 'teamHasanat = sum(members.hasanat)'
    },
    {
        id: 8,
        name: 'Challenge Tiers',
        ar: 'مستويات التحديات',
        logic: `
            Easy: +50 hasanat (e.g., read 1 page)
            Medium: +200 hasanat (e.g., pray Fajr 7 days)
            Hard: +1000 hasanat (e.g., complete Juz)
            Legendary: +5000 hasanat (e.g., Khatmah in week)
        `,
        implementation: 'challenge.tier determines reward'
    },
    {
        id: 9,
        name: 'Surprise Bonus Events',
        ar: 'أحداث المكافآت المفاجئة',
        logic: `
            - Random 30-minute "Golden Hour" 5x events
            - Announced 5 minutes before
            - Creates anticipation and checking behavior
        `,
        implementation: 'scheduleRandomEvent(5x, 30min)'
    },
    {
        id: 10,
        name: 'Near-Miss Notifications',
        ar: 'إشعارات الاقتراب',
        logic: `
            "You're only 20 hasanat behind Ahmed!"
            "5 more pages to overtake position #3!"
            - Shows achievable gaps, not total distance
        `,
        implementation: 'notifyNearMiss(user, closestRival)'
    },
    {
        id: 11,
        name: 'Decay Prevention System',
        ar: 'نظام منع التراجع',
        logic: `
            - Inactive users lose 5% hasanat per day
            - Maximum loss: 20%
            - Encourages daily minimum activity
        `,
        implementation: 'if (!activeToday) hasanat *= 0.95'
    },
    {
        id: 12,
        name: 'Milestone Celebrations',
        ar: 'احتفالات المعالم',
        logic: `
            1K hasanat: Bronze Badge
            10K: Silver Badge
            50K: Gold Badge
            100K: Diamond Badge + Feature on homepage
        `,
        implementation: 'checkMilestones(user.hasanat)'
    },
    {
        id: 13,
        name: 'Friend Rivalry System',
        ar: 'نظام منافسة الأصدقاء',
        logic: `
            - Direct 1v1 challenges with friends
            - Private leaderboard between friends only
            - More intimate competition = higher engagement
        `,
        implementation: 'createRivalry(user1, user2)'
    },
    {
        id: 14,
        name: 'Anti-Cheat Detection',
        ar: 'كشف الغش',
        logic: `
            - Rate limit: max 100 hasanat/minute
            - Unusual patterns flagged
            - Manual review for top 10 weekly
        `,
        implementation: 'validateAction(user, action, timestamp)'
    },
    {
        id: 15,
        name: 'Season Pass System',
        ar: 'نظام بطاقة الموسم',
        logic: `
            - Ramadan = 1 Season (30 days)
            - Unlock exclusive badges at season end
            - Historical records create legacy motivation
        `,
        implementation: 'seasonPass.level based on total activity'
    }
];

// ═══════════════════════════════════════════════════════════════
// 20 PSYCHOLOGICAL EXPERT SUGGESTIONS FOR ADDICTION (DAILY/WEEKLY)
// ═══════════════════════════════════════════════════════════════

export const competitionPsychologyHooks = [
    {
        id: 1,
        name: 'Variable Ratio Reinforcement',
        science: 'BF Skinner - Most addictive reward schedule',
        application: 'Random bonus hasanat (sometimes 10x, sometimes 100x)',
        frequency: 'Every action has unpredictable bonus chance'
    },
    {
        id: 2,
        name: 'Loss Aversion Trigger',
        science: 'Kahneman - Losses hurt 2x more than gains',
        application: '"Your streak will break in 3 hours!" notification',
        frequency: 'Daily at 9 PM if no activity'
    },
    {
        id: 3,
        name: 'Social Comparison Drive',
        science: 'Festinger - We define ourselves by comparison',
        application: 'Show exactly who is above/below user in leaderboard',
        frequency: 'Real-time updates'
    },
    {
        id: 4,
        name: 'Endowment Effect',
        science: 'Thaler - We overvalue what we own',
        application: '"You have 5,230 hasanat to protect!"',
        frequency: 'On every login'
    },
    {
        id: 5,
        name: 'Commitment Escalation',
        science: 'Staw - Sunk cost increases commitment',
        application: 'Show total days invested, not just current streak',
        frequency: 'Weekly summary'
    },
    {
        id: 6,
        name: 'Fear of Missing Out (FOMO)',
        science: 'Przybylski - Anxiety from exclusion',
        application: '"Last 10 nights special event! 35 friends active!"',
        frequency: 'During special Ramadan nights'
    },
    {
        id: 7,
        name: 'Zeigarnik Effect',
        science: 'Unfinished tasks create mental tension',
        application: '"You\'re 80% to your daily goal - just 2 more pages!"',
        frequency: 'When 70%+ complete'
    },
    {
        id: 8,
        name: 'Peak-End Rule',
        science: 'Kahneman - We remember peaks and endings',
        application: 'Big celebration animation at day end summary',
        frequency: 'Daily at Isha time'
    },
    {
        id: 9,
        name: 'Reciprocity Norm',
        science: 'Cialdini - We feel obligated to return favors',
        application: '"Ahmed boosted you +50 hasanat! Boost back?"',
        frequency: 'When boosted by friend'
    },
    {
        id: 10,
        name: 'Mere Exposure Effect',
        science: 'Zajonc - Familiarity breeds liking',
        application: 'Push notifications every 4 hours (not annoying)',
        frequency: '4-6 times daily'
    },
    {
        id: 11,
        name: 'Goal Gradient Effect',
        science: 'Kivetz - We speed up near goals',
        application: '"95% to your weekly goal! Final push!"',
        frequency: 'When 90%+ to milestone'
    },
    {
        id: 12,
        name: 'Cognitive Dissonance',
        science: 'Festinger - We rationalize our investments',
        application: '"You\'ve been consistent for 15 days - stopping now would waste it all"',
        frequency: 'When streak is high but activity drops'
    },
    {
        id: 13,
        name: 'Anchoring Bias',
        science: 'Tversky - First number influences judgment',
        application: 'Show high-achiever stats first: "Top user: 50,000 hasanat"',
        frequency: 'On leaderboard page'
    },
    {
        id: 14,
        name: 'Herd Behavior',
        science: 'Banerjee - We follow crowd actions',
        application: '"127 users just completed their Fajr streak!"',
        frequency: 'After Fajr time'
    },
    {
        id: 15,
        name: 'Instant Gratification',
        science: 'Dopamine spikes on immediate reward',
        application: 'Hasanat counter animates +10 immediately on action',
        frequency: 'Every single action'
    },
    {
        id: 16,
        name: 'Scarcity Principle',
        science: 'Cialdini - Limited resources seem more valuable',
        application: '"Only 3 spots left in Diamond League!"',
        frequency: 'Near promotion thresholds'
    },
    {
        id: 17,
        name: 'Self-Determination Theory',
        science: 'Deci & Ryan - Autonomy, competence, relatedness',
        application: 'Let users choose their daily goals (autonomy)',
        frequency: 'Weekly goal-setting'
    },
    {
        id: 18,
        name: 'Operant Conditioning Chamber',
        science: 'Skinner Box - Environment shapes behavior',
        application: 'App design rewards specific times (Fajr = most points)',
        frequency: 'Built into point system'
    },
    {
        id: 19,
        name: 'Narrative Transportation',
        science: 'Green - Stories create emotional investment',
        application: '"Your Ramadan story so far: Started weak, now top 10%!"',
        frequency: 'Weekly story summary'
    },
    {
        id: 20,
        name: 'Implementation Intentions',
        science: 'Gollwitzer - Specific plans increase follow-through',
        application: '"Tomorrow: Read 5 pages after Fajr" (user sets intention)',
        frequency: 'Every night before bed'
    }
];

// ═══════════════════════════════════════════════════════════════
// 5 VALIDATION LOGIC EXPERTS - 100% LOGICALLY TRUE
// ═══════════════════════════════════════════════════════════════

export const validationLogicExperts = [
    {
        id: 1,
        expert: 'Data Integrity Guardian',
        ar: 'حارس سلامة البيانات',
        rules: [
            'hasanat >= 0 (no negative values)',
            'streakDays <= 30 (max Ramadan)',
            'completedPages <= 604 (Quran total)',
            'prayers <= 5 per day',
            'timestamp must be in valid range'
        ],
        implementation: `
            function validateUserData(user) {
                if (user.hasanat < 0) user.hasanat = 0;
                if (user.streakDays > 30) user.streakDays = 30;
                if (user.completedPages > 604) user.completedPages = 604;
                return user;
            }
        `
    },
    {
        id: 2,
        expert: 'Time Logic Validator',
        ar: 'مدقق منطق الوقت',
        rules: [
            'Fajr actions only valid 4:00-6:00 local time',
            'Daily reset at midnight local time',
            'Weekly reset at Sunday 00:00',
            'No future timestamps allowed',
            'Rate limit: 1 action per second minimum'
        ],
        implementation: `
            function validateTimeLogic(action, timestamp) {
                const now = Date.now();
                if (timestamp > now) return false; // No future
                if (now - timestamp > 86400000) return false; // Not older than 24h
                return true;
            }
        `
    },
    {
        id: 3,
        expert: 'Competition Fairness Auditor',
        ar: 'مدقق عدالة المنافسة',
        rules: [
            'Max hasanat per hour: 1000 (anti-cheat)',
            'Same user can only boost same friend once per day',
            'Challenge can only be completed once',
            'League promotion requires minimum 7 days active',
            'Team size: exactly 5 members'
        ],
        implementation: `
            function auditCompetition(action) {
                const hourlyTotal = getHourlyHasanat(user);
                if (hourlyTotal > 1000) flagForReview(user);
                return hourlyTotal <= 1000;
            }
        `
    },
    {
        id: 4,
        expert: 'User Input Sanitizer',
        ar: 'منقي مدخلات المستخدم',
        rules: [
            'Username: 3-20 characters, alphanumeric + Arabic',
            'Goal values: positive integers only',
            'Custom habit names: max 50 characters',
            'No script injection in any text field',
            'Prayer times: valid within 24h format'
        ],
        implementation: `
            function sanitizeInput(field, value) {
                if (field === 'username') {
                    return value.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '').slice(0, 20);
                }
                if (field === 'goal') {
                    return Math.max(1, parseInt(value) || 1);
                }
                return escapeHtml(value);
            }
        `
    },
    {
        id: 5,
        expert: 'State Consistency Checker',
        ar: 'مدقق تناسق الحالة',
        rules: [
            'If completedKhatmah > 0, completedPages must be 604',
            'If streakDays > 0, must have activity yesterday',
            'If inTeam, team must exist and have user in members',
            'Badge unlocked only if condition was met',
            'Leaderboard position matches actual hasanat ranking'
        ],
        implementation: `
            function checkConsistency(user) {
                if (user.khatmahCount > 0 && user.totalPages % 604 !== 0) {
                    user.totalPages = user.khatmahCount * 604;
                }
                return user;
            }
        `
    }
];

// ═══════════════════════════════════════════════════════════════
// EDITABLE SETTINGS PER PAGE
// ═══════════════════════════════════════════════════════════════

export const editablePageSettings = {
    '/': {
        name: { ar: 'القرآن', en: 'Quran' },
        editableFields: [
            { key: 'dailyGoalPages', label: { ar: 'هدف الصفحات اليومي', en: 'Daily Page Goal' }, type: 'number', min: 1, max: 20 },
            { key: 'currentPage', label: { ar: 'الصفحة الحالية', en: 'Current Page' }, type: 'number', min: 1, max: 604 },
            { key: 'khatmahCount', label: { ar: 'عدد الختمات', en: 'Khatmah Count' }, type: 'number', min: 0, max: 100 }
        ]
    },
    '/hasanat': {
        name: { ar: 'الحسنات', en: 'Hasanat' },
        editableFields: [
            { key: 'hasanat', label: { ar: 'مجموع الحسنات', en: 'Total Hasanat' }, type: 'number', min: 0 },
            { key: 'todayHasanat', label: { ar: 'حسنات اليوم', en: 'Today Hasanat' }, type: 'number', min: 0 }
        ]
    },
    '/prayer': {
        name: { ar: 'الصلاة', en: 'Prayer' },
        editableFields: [
            { key: 'prayersToday', label: { ar: 'صلوات اليوم', en: 'Today Prayers' }, type: 'number', min: 0, max: 5 },
            { key: 'fajrStreak', label: { ar: 'سلسلة الفجر', en: 'Fajr Streak' }, type: 'number', min: 0, max: 30 }
        ]
    },
    '/fasting': {
        name: { ar: 'الصيام', en: 'Fasting' },
        editableFields: [
            { key: 'fastingDays', label: { ar: 'أيام الصيام', en: 'Fasting Days' }, type: 'number', min: 0, max: 30 },
            { key: 'fastingStartTime', label: { ar: 'وقت بدء الصيام', en: 'Fast Start Time' }, type: 'time' }
        ]
    },
    '/competition': {
        name: { ar: 'المنافسة', en: 'Competition' },
        editableFields: [
            { key: 'weeklyGoal', label: { ar: 'الهدف الأسبوعي', en: 'Weekly Goal' }, type: 'number', min: 100 },
            { key: 'preferredLeague', label: { ar: 'الدوري المفضل', en: 'Preferred League' }, type: 'select', options: ['Bronze', 'Silver', 'Gold', 'Diamond'] }
        ]
    },
    '/habits': {
        name: { ar: 'العادات', en: 'Habits' },
        editableFields: [
            { key: 'customHabits', label: { ar: 'عادات مخصصة', en: 'Custom Habits' }, type: 'array' },
            { key: 'reminderTime', label: { ar: 'وقت التذكير', en: 'Reminder Time' }, type: 'time' }
        ]
    },
    '/health': {
        name: { ar: 'الصحة', en: 'Health' },
        editableFields: [
            { key: 'sleepGoalHours', label: { ar: 'هدف النوم (ساعات)', en: 'Sleep Goal (hours)' }, type: 'number', min: 4, max: 10 },
            { key: 'waterCups', label: { ar: 'أكواب الماء', en: 'Water Cups' }, type: 'number', min: 0, max: 20 }
        ]
    }
};

export default {
    competitionLogicSuggestions,
    competitionPsychologyHooks,
    validationLogicExperts,
    editablePageSettings
};
