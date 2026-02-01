import { useAppStore } from '../store/useAppStore';
import './ProgressDashboard.css';

const ProgressDashboard = () => {
    const { settings, user, quranProgress, prayerTimes, health } = useAppStore();
    const language = settings?.language || 'ar';

    // Calculate stats
    const stats = {
        quranPages: quranProgress?.completedPages?.length || 45,
        khatmah: quranProgress?.khatmahCount || 1,
        prayerStreak: Math.max(user?.streaks?.fajr || 0, user?.streaks?.taraweeh || 0),
        hasanat: user?.hasanat || 1250,
        fastingDays: 15,
        sadaqahCount: 12,
        dhikrCount: 5000,
        hydrationGoal: health?.hydrationCurrent || 3,
    };

    // Weekly activity data (simulated)
    const weeklyActivity = [
        { day: 'Sat', prayers: 5, quran: 2, dhikr: 100 },
        { day: 'Sun', prayers: 5, quran: 1, dhikr: 200 },
        { day: 'Mon', prayers: 5, quran: 3, dhikr: 150 },
        { day: 'Tue', prayers: 4, quran: 2, dhikr: 300 },
        { day: 'Wed', prayers: 5, quran: 1, dhikr: 100 },
        { day: 'Thu', prayers: 5, quran: 2, dhikr: 250 },
        { day: 'Fri', prayers: 5, quran: 4, dhikr: 500 },
    ];

    // Level thresholds
    const levelThresholds = {
        Bronze: 0,
        Silver: 5000,
        Gold: 15000,
        Diamond: 50000,
    };

    const getCurrentLevelProgress = () => {
        const levels = Object.entries(levelThresholds);
        const currentIdx = levels.findIndex(([level]) => level === (user?.level || 'Bronze'));
        const current = levels[currentIdx];
        const next = levels[currentIdx + 1];

        if (!next) return 100;

        const progress = ((stats.hasanat - current[1]) / (next[1] - current[1])) * 100;
        return Math.min(100, Math.max(0, progress));
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <h1>📊 {language === 'ar' ? 'لوحة التقدم' : 'Progress Dashboard'}</h1>
            </div>

            {/* Level Progress */}
            <div className="level-section">
                <div className="level-header">
                    <span className="level-icon">
                        {user?.level === 'Diamond' ? '💎' : user?.level === 'Gold' ? '🥇' : user?.level === 'Silver' ? '🥈' : '🥉'}
                    </span>
                    <div className="level-info">
                        <span className="level-name">{user?.level || 'Bronze'}</span>
                        <span className="level-hasanat">{stats.hasanat.toLocaleString()} {language === 'ar' ? 'حسنة' : 'Hasanat'}</span>
                    </div>
                </div>
                <div className="level-progress">
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${getCurrentLevelProgress()}%` }} />
                    </div>
                    <span className="next-level">
                        {language === 'ar' ? 'المستوى التالي' : 'Next Level'}: Silver
                    </span>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card quran">
                    <span className="stat-icon">📖</span>
                    <span className="stat-value">{stats.quranPages}</span>
                    <span className="stat-label">{language === 'ar' ? 'صفحة قرآن' : 'Quran Pages'}</span>
                </div>
                <div className="stat-card prayer">
                    <span className="stat-icon">🕌</span>
                    <span className="stat-value">{stats.prayerStreak}</span>
                    <span className="stat-label">{language === 'ar' ? 'سلسلة صلاة' : 'Prayer Streak'}</span>
                </div>
                <div className="stat-card fasting">
                    <span className="stat-icon">🌙</span>
                    <span className="stat-value">{stats.fastingDays}</span>
                    <span className="stat-label">{language === 'ar' ? 'يوم صيام' : 'Fasting Days'}</span>
                </div>
                <div className="stat-card sadaqah">
                    <span className="stat-icon">❤️</span>
                    <span className="stat-value">{stats.sadaqahCount}</span>
                    <span className="stat-label">{language === 'ar' ? 'صدقة' : 'Sadaqah'}</span>
                </div>
                <div className="stat-card dhikr">
                    <span className="stat-icon">📿</span>
                    <span className="stat-value">{(stats.dhikrCount / 1000).toFixed(1)}k</span>
                    <span className="stat-label">{language === 'ar' ? 'ذكر' : 'Dhikr'}</span>
                </div>
                <div className="stat-card khatmah">
                    <span className="stat-icon">✨</span>
                    <span className="stat-value">{stats.khatmah}</span>
                    <span className="stat-label">{language === 'ar' ? 'ختمة' : 'Khatmah'}</span>
                </div>
            </div>

            {/* Weekly Activity */}
            <div className="weekly-section">
                <h3>{language === 'ar' ? '📈 النشاط الأسبوعي' : '📈 Weekly Activity'}</h3>
                <div className="weekly-chart">
                    {weeklyActivity.map((day, idx) => (
                        <div key={idx} className="day-column">
                            <div className="day-bars">
                                <div
                                    className="bar prayers"
                                    style={{ height: `${(day.prayers / 5) * 100}%` }}
                                    title={`${day.prayers} prayers`}
                                />
                                <div
                                    className="bar quran"
                                    style={{ height: `${(day.quran / 5) * 100}%` }}
                                    title={`${day.quran} juz`}
                                />
                                <div
                                    className="bar dhikr"
                                    style={{ height: `${(day.dhikr / 500) * 100}%` }}
                                    title={`${day.dhikr} dhikr`}
                                />
                            </div>
                            <span className="day-label">{day.day}</span>
                        </div>
                    ))}
                </div>
                <div className="chart-legend">
                    <span><span className="dot prayers"></span> {language === 'ar' ? 'صلاة' : 'Prayer'}</span>
                    <span><span className="dot quran"></span> {language === 'ar' ? 'قرآن' : 'Quran'}</span>
                    <span><span className="dot dhikr"></span> {language === 'ar' ? 'ذكر' : 'Dhikr'}</span>
                </div>
            </div>

            {/* Goals */}
            <div className="goals-section">
                <h3>{language === 'ar' ? '🎯 الأهداف' : '🎯 Goals'}</h3>
                <div className="goals-list">
                    <div className="goal-item">
                        <span className="goal-name">{language === 'ar' ? 'ختم القرآن' : 'Complete Quran'}</span>
                        <div className="goal-progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${(stats.quranPages / 604) * 100}%` }} />
                            </div>
                            <span>{Math.round((stats.quranPages / 604) * 100)}%</span>
                        </div>
                    </div>
                    <div className="goal-item">
                        <span className="goal-name">{language === 'ar' ? 'صيام الشهر' : 'Full Month Fast'}</span>
                        <div className="goal-progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${(stats.fastingDays / 30) * 100}%` }} />
                            </div>
                            <span>{Math.round((stats.fastingDays / 30) * 100)}%</span>
                        </div>
                    </div>
                    <div className="goal-item">
                        <span className="goal-name">{language === 'ar' ? 'صدقة يومية' : 'Daily Sadaqah'}</span>
                        <div className="goal-progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${(stats.sadaqahCount / 30) * 100}%` }} />
                            </div>
                            <span>{Math.round((stats.sadaqahCount / 30) * 100)}%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Motivational Quote */}
            <div className="motivation">
                <p>
                    {language === 'ar'
                        ? '﴿وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ﴾'
                        : '"Whatever good you send forth for yourselves, you will find it with Allah"'}
                </p>
                <span>📖 {language === 'ar' ? 'البقرة ١١٠' : 'Al-Baqarah 110'}</span>
            </div>
        </div>
    );
};

export default ProgressDashboard;
