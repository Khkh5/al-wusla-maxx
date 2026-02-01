// 5 Expert Logic Personas for System Competition

export const systemOpponents = [
    {
        id: 'the_dev',
        name: { ar: 'المطور', en: 'The Developer' },
        title: { ar: 'مصمم النظام', en: 'System Architect' },
        avatar: '👨‍💻',
        difficulty: 'hard',
        style: 'consistent', // Always hits targets
        logic: 'efficiency', // High XP generation
        bio: {
            ar: 'مبرمج الوُصلة. يعرف كل أسرار التطبيق ولا يضيع ثانية.',
            en: 'Creator of Al-Wusla. Knows every shortcut. Never wastes a second.'
        },
        baseStats: { dailyXP: 1500, consistency: 0.98 }
    },
    {
        id: 'the_scholar',
        name: { ar: 'الفقيه', en: 'The Scholar' },
        title: { ar: 'حارس العلم', en: 'Guardian of Knowledge' },
        avatar: '👳',
        difficulty: 'extreme',
        style: 'quality', // High Hasanat per action
        logic: 'knowledge', // Bonus on Sunnahs
        bio: {
            ar: 'يقضي وقته في طلب العلم والتدبر. منافس صعب جداً.',
            en: 'Spends time in deep study. Extremely tough opponent.'
        },
        baseStats: { dailyXP: 2000, consistency: 0.95 }
    },
    {
        id: 'the_warrior',
        name: { ar: 'المجاهد', en: 'The Warrior' },
        title: { ar: 'أسد الفجر', en: 'Lion of Fajr' },
        avatar: '⚔️',
        difficulty: 'medium',
        style: 'aggressive', // Huge bursts of activity
        logic: 'power', // Fajr & Qiyam focus
        bio: {
            ar: 'لا ينام بعد الفجر. نوبات نشاطه مرعبة ولكن يمكن سبقه.',
            en: 'Never sleeps after Fajr. Huge bursts of activity but beatable.'
        },
        baseStats: { dailyXP: 1200, consistency: 0.85 }
    },
    {
        id: 'the_monk',
        name: { ar: 'الزاهد', en: 'The Ascetic' },
        title: { ar: 'صاحب الخلوة', en: 'The Recluse' },
        avatar: '🪵',
        difficulty: 'easy',
        style: 'minimal', // Low but steady
        logic: 'focus',
        bio: {
            ar: 'يركز على الكيف لا الكم. خصم جيد للمبتدئين.',
            en: 'Focuses on quality over quantity. Good for beginners.'
        },
        baseStats: { dailyXP: 800, consistency: 0.90 }
    },
    {
        id: 'the_system',
        name: { ar: 'النظام', en: 'The System' },
        title: { ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence' },
        avatar: '🤖',
        difficulty: 'adaptive', // Matches user level
        style: 'adaptive',
        logic: 'mirror',
        bio: {
            ar: 'يتعلم من أسلوبك ويتحداك لتتجاوز حدودك.',
            en: 'Learns your style and challenges you to exceed your limits.'
        },
        baseStats: { dailyXP: 1000, consistency: 1.0 }
    }
];

export const generateOpponentProgres = (opponentId, userLevel) => {
    // Logic to simulate opponent progress based on time of day and persona
    const opponent = systemOpponents.find(o => o.id === opponentId);
    if (!opponent) return 0;

    const hour = new Date().getHours();
    let variableFactor = 1;

    // Behavioral Logic
    if (opponent.id === 'the_warrior' && hour >= 4 && hour <= 7) variableFactor = 3.0; // Fajr boost
    else if (opponent.id === 'the_dev' && hour >= 22) variableFactor = 2.0; // Late night coding
    else if (opponent.id === 'the_scholar' && hour >= 8 && hour <= 12) variableFactor = 0.5; // Studying/Work (less logging)

    // Base XP * Time progress (hour/24) * Random variance * Factor
    const currentProgress = (opponent.baseStats.dailyXP * (hour / 24)) * variableFactor * (0.9 + Math.random() * 0.2);

    return Math.floor(currentProgress);
};
