import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import ProgressEditor from '../components/ProgressEditor';
import {
    dailyQuests,
    achievements,
    duelTypes,
    streakRewards,
    weeklyReportConfig,
    titlesAndRanks,
    getRarityColor,
    getUserTitle,
    getNextStreakReward,
    generateDailyQuests
} from '../data/competitionMaxxData';
import { systemOpponents } from '../data/systemCompetitionData';
import SystemOpponentSelector from '../components/SystemOpponentSelector';
import './Competition.css';

const Competition = () => {
    const {
        user,
        competition,
        fetchLeaderboard,
        fetchChallenges,
        joinChallenge,
        sendBoost,
        subscribeToLeaderboard,
        settings,
        setUser
    } = useAppStore();

    const [activeTab, setActiveTab] = useState('leaderboard');
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [leaderboard, setLeaderboard] = useState([]);
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDataEditor, setShowDataEditor] = useState(false);

    // MAXX Features State
    const [todayQuests, setTodayQuests] = useState([]);
    const [completedQuests, setCompletedQuests] = useState([]);
    const [unlockedAchievements, setUnlockedAchievements] = useState([]);
    const [activeDuel, setActiveDuel] = useState(null);
    const [showWeeklyReport, setShowWeeklyReport] = useState(false);
    const [showSystemSelector, setShowSystemSelector] = useState(null);

    // Initialize daily quests
    useEffect(() => {
        const savedQuests = localStorage.getItem('todayQuests');
        const savedDate = localStorage.getItem('questsDate');
        const today = new Date().toDateString();

        if (savedDate === today && savedQuests) {
            setTodayQuests(JSON.parse(savedQuests));
        } else {
            const newQuests = generateDailyQuests(5);
            setTodayQuests(newQuests);
            localStorage.setItem('todayQuests', JSON.stringify(newQuests));
            localStorage.setItem('questsDate', today);
        }

        // Load completed quests
        const savedCompleted = localStorage.getItem('completedQuests');
        if (savedCompleted) {
            setCompletedQuests(JSON.parse(savedCompleted));
        }

        // Load unlocked achievements
        const savedAchievements = localStorage.getItem('unlockedAchievements');
        if (savedAchievements) {
            setUnlockedAchievements(JSON.parse(savedAchievements));
        }
    }, []);

    // Fetch leaderboard on mount
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const leaderboardData = await fetchLeaderboard('global');
            setLeaderboard(leaderboardData);

            await fetchChallenges();
            setLoading(false);
        };

        loadData();

        const unsubscribe = subscribeToLeaderboard((newLeaderboard) => {
            setLeaderboard(newLeaderboard);
        });

        return () => unsubscribe();
    }, []);

    const handleCompleteQuest = (quest) => {
        if (completedQuests.includes(quest.id)) return;

        const newCompleted = [...completedQuests, quest.id];
        setCompletedQuests(newCompleted);
        localStorage.setItem('completedQuests', JSON.stringify(newCompleted));

        // Award hasanat
        const updatedUser = {
            ...user,
            hasanat: (user.hasanat || 0) + quest.reward,
            xp: (user.xp || 0) + quest.xp
        };
        setUser(updatedUser);
        alert(`✨ +${quest.reward} حسنة | +${quest.xp} XP`);
    };

    const handleSendBoost = async (friend) => {
        try {
            await sendBoost(friend._id);
            alert(`تم إرسال دعم لـ ${friend.username}! +5 حسنات`);
        } catch (error) {
            console.error('Error sending boost:', error);
            alert('فشل إرسال الدعم');
        }
    };

    const handleActivateChallenge = async (challengeId) => {
        try {
            await joinChallenge(challengeId);
            alert('تم الانضمام للتحدي! +10 حسنات');
        } catch (error) {
            console.error('Error joining challenge:', error);
            alert('فشل الانضمام للتحدي');
        }
    };

    const handleStartDuel = (duelType) => {
        setActiveDuel(duelType);
        alert(settings.language === 'ar'
            ? `بدأت مبارزة ${duelType.title.ar}! شارك الكود مع صديقك`
            : `Started ${duelType.title.en} duel! Share code with friend`);
    };

    const startSystemDuel = (duelType, opponent) => {
        setActiveDuel({ ...duelType, opponent });
        setShowSystemSelector(null);
        alert(settings.language === 'ar'
            ? `بدأت التحدي ضد ${opponent.name.ar}! بالتوفيق`
            : `Challenge started against ${opponent.name.en}! Good luck`);
    };

    const userTitle = getUserTitle(user?.xp || 0);
    const nextStreakReward = getNextStreakReward(user?.streaks?.current || 0);

    const tabs = [
        { id: 'leaderboard', icon: '🏆', label: { ar: 'لوحة الشرف', en: 'Leaderboard' } },
        { id: 'quests', icon: '📋', label: { ar: 'المهام', en: 'Quests' } },
        { id: 'achievements', icon: '🏅', label: { ar: 'الإنجازات', en: 'Achievements' } },
        { id: 'duels', icon: '⚔️', label: { ar: 'المبارزات', en: 'Duels' } },
        { id: 'streaks', icon: '🔥', label: { ar: 'السلاسل', en: 'Streaks' } },
        { id: 'challenges', icon: '🎯', label: { ar: 'التحديات', en: 'Challenges' } },
        { id: 'squad', icon: '👥', label: { ar: 'الفريق', en: 'Squad' } },
        { id: 'data', icon: '⚙️', label: { ar: 'البيانات', en: 'Data' } }
    ];

    return (
        <div className="competition-page">
            {/* Header with Title */}
            <div className="competition-header">
                <h1>{settings.language === 'ar' ? '🏆 حلبة المسارعة MAXX' : '🏆 Fastabiqū Arena MAXX'}</h1>
                <p className="verse">
                    {settings.language === 'ar'
                        ? '﴿ فَاسْتَبِقُوا الْخَيْرَاتِ ﴾'
                        : '"Race toward good deeds"'}
                </p>
                <div className="user-title-badge">
                    <span className="title-icon">{userTitle.icon}</span>
                    <span className="title-name">{settings.language === 'ar' ? userTitle.title.ar : userTitle.title.en}</span>
                    <span className="xp-badge">{user?.xp || 0} XP</span>
                </div>
            </div>

            {/* Enhanced Tabs */}
            <div className="tabs maxx-tabs">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{settings.language === 'ar' ? tab.label.ar : tab.label.en}</span>
                    </button>
                ))}
            </div>

            {/* Daily Quests Tab */}
            {activeTab === 'quests' && (
                <div className="quests-section">
                    <div className="section-header">
                        <h2>📋 {settings.language === 'ar' ? 'مهام اليوم' : 'Today\'s Quests'}</h2>
                        <span className="quests-progress">{completedQuests.length}/{todayQuests.length}</span>
                    </div>
                    <div className="quests-grid">
                        {todayQuests.map(quest => (
                            <div
                                key={quest.id}
                                className={`quest-card ${completedQuests.includes(quest.id) ? 'completed' : ''}`}
                                onClick={() => handleCompleteQuest(quest)}
                            >
                                <div className="quest-icon">{quest.icon}</div>
                                <div className="quest-info">
                                    <h4>{settings.language === 'ar' ? quest.title.ar : quest.title.en}</h4>
                                    <p>{settings.language === 'ar' ? quest.description.ar : quest.description.en}</p>
                                </div>
                                <div className="quest-rewards">
                                    <span className="reward-hasanat">+{quest.reward} ✨</span>
                                    <span className="reward-xp">+{quest.xp} XP</span>
                                </div>
                                {completedQuests.includes(quest.id) && <div className="quest-check">✓</div>}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
                <div className="achievements-section">
                    <div className="section-header">
                        <h2>🏅 {settings.language === 'ar' ? 'الإنجازات' : 'Achievements'}</h2>
                        <span className="achievements-progress">{unlockedAchievements.length}/{achievements.length}</span>
                    </div>
                    <div className="achievements-grid">
                        {achievements.map(achievement => {
                            const isUnlocked = unlockedAchievements.includes(achievement.id);
                            return (
                                <div
                                    key={achievement.id}
                                    className={`achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`}
                                    style={{ borderColor: isUnlocked ? getRarityColor(achievement.rarity) : 'transparent' }}
                                >
                                    <div className="achievement-icon" style={{
                                        background: isUnlocked ? `${getRarityColor(achievement.rarity)}20` : 'rgba(255,255,255,0.05)'
                                    }}>
                                        {isUnlocked ? achievement.icon : '🔒'}
                                    </div>
                                    <div className="achievement-info">
                                        <h4 style={{ color: isUnlocked ? getRarityColor(achievement.rarity) : 'inherit' }}>
                                            {settings.language === 'ar' ? achievement.title.ar : achievement.title.en}
                                        </h4>
                                        <p>{settings.language === 'ar' ? achievement.description.ar : achievement.description.en}</p>
                                        <span className="achievement-reward">+{achievement.reward} ✨</span>
                                    </div>
                                    <span className={`rarity-badge ${achievement.rarity}`}>
                                        {achievement.rarity}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Duels Tab */}
            {activeTab === 'duels' && (
                <div className="duels-section">
                    <div className="section-header">
                        <h2>⚔️ {settings.language === 'ar' ? 'المبارزات 1v1' : '1v1 Duels'}</h2>
                    </div>

                    {activeDuel && (
                        <div className="active-duel-card">
                            <h3>🔥 {settings.language === 'ar' ? 'مبارزة نشطة' : 'Active Duel'}</h3>
                            <div className="duel-info">
                                <span className="duel-icon">{activeDuel.icon}</span>
                                <span>{settings.language === 'ar' ? activeDuel.title.ar : activeDuel.title.en}</span>
                            </div>
                            <button className="btn btn-danger" onClick={() => setActiveDuel(null)}>
                                {settings.language === 'ar' ? 'إنهاء المبارزة' : 'End Duel'}
                            </button>
                        </div>
                    )}

                    <div className="duels-grid">
                        {duelTypes.map(duel => (
                            <div key={duel.id} className="duel-card">
                                <div className="duel-icon-large">{duel.icon}</div>
                                <h4>{settings.language === 'ar' ? duel.title.ar : duel.title.en}</h4>
                                <p>{settings.language === 'ar' ? duel.description.ar : duel.description.en}</p>
                                <div className="duel-meta">
                                    <span>⏱️ {duel.duration} {settings.language === 'ar' ? 'أيام' : 'days'}</span>
                                    <span>🏆 {duel.minReward}-{duel.maxReward}</span>
                                </div>
                                <div className="duel-actions">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleStartDuel(duel)}
                                        disabled={activeDuel !== null}
                                    >
                                        {settings.language === 'ar' ? 'تحدي صديق' : 'Challenge Friend'}
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setShowSystemSelector(duel)}
                                        disabled={activeDuel !== null}
                                    >
                                        {settings.language === 'ar' ? 'تحدي النظام' : 'Challenge AI'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {showSystemSelector && (
                        <SystemOpponentSelector
                            onSelect={(opponent) => startSystemDuel(showSystemSelector, opponent)}
                            onClose={() => setShowSystemSelector(null)}
                            lang={settings.language}
                        />
                    )}
                </div>
            )}

            {/* Streaks Tab */}
            {activeTab === 'streaks' && (
                <div className="streaks-section">
                    <div className="section-header">
                        <h2>🔥 {settings.language === 'ar' ? 'مكافآت السلاسل' : 'Streak Rewards'}</h2>
                    </div>

                    <div className="current-streak-card">
                        <div className="streak-number">{user?.streaks?.current || 0}</div>
                        <div className="streak-label">{settings.language === 'ar' ? 'أيام متواصلة' : 'Day Streak'}</div>
                        {nextStreakReward && (
                            <div className="next-reward">
                                {settings.language === 'ar' ? 'المكافأة التالية' : 'Next Reward'}: {nextStreakReward.icon} {settings.language === 'ar' ? nextStreakReward.title.ar : nextStreakReward.title.en}
                                <br />
                                <small>{nextStreakReward.days - (user?.streaks?.current || 0)} {settings.language === 'ar' ? 'أيام متبقية' : 'days left'}</small>
                            </div>
                        )}
                    </div>

                    <div className="streak-rewards-list">
                        {streakRewards.map(reward => {
                            const isAchieved = (user?.streaks?.current || 0) >= reward.days;
                            return (
                                <div key={reward.days} className={`streak-reward-item ${isAchieved ? 'achieved' : ''}`}>
                                    <span className="reward-icon">{reward.icon}</span>
                                    <div className="reward-info">
                                        <span className="reward-title">{settings.language === 'ar' ? reward.title.ar : reward.title.en}</span>
                                        <span className="reward-days">{reward.days} {settings.language === 'ar' ? 'يوم' : 'days'}</span>
                                    </div>
                                    <span className="reward-hasanat">+{reward.reward} ✨</span>
                                    {isAchieved && <span className="achieved-check">✓</span>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Weekly Report Button */}
            {activeTab === 'leaderboard' && (
                <button className="weekly-report-btn" onClick={() => setShowWeeklyReport(true)}>
                    📊 {settings.language === 'ar' ? 'التقرير الأسبوعي' : 'Weekly Report'}
                </button>
            )}

            {/* Leaderboard Tab */}
            {activeTab === 'leaderboard' && (
                <div className="leaderboard-section">
                    <div className="league-badge">
                        <div className="league-icon">{user.level === 'Diamond' ? '💎' : user.level === 'Gold' ? '🥇' : user.level === 'Silver' ? '🥈' : '🥉'}</div>
                        <div className="league-info">
                            <h3>{settings.language === 'ar' ? 'دوري' : 'League'}: {user.level}</h3>
                            <p>{settings.language === 'ar' ? 'حسناتك' : 'Your Hasanat'}: {user.hasanat.toLocaleString('ar-EG')}</p>
                        </div>
                    </div>

                    {loading ? (
                        <div className="loading">Loading leaderboard...</div>
                    ) : (
                        <div className="leaderboard-list">
                            {leaderboard.map((player, index) => (
                                <div
                                    key={player._id}
                                    className={`leaderboard-item ${player._id === user?._id ? 'current-user' : ''} rank-${index + 1}`}
                                >
                                    <div className="rank">
                                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                                    </div>

                                    <div className="player-info">
                                        <div className="player-name">
                                            {player.username}
                                            {player._id !== user?._id && (
                                                <button
                                                    className="btn-boost"
                                                    onClick={() => handleSendBoost(player)}
                                                >
                                                    ⚡ {settings.language === 'ar' ? 'دعم' : 'Boost'}
                                                </button>
                                            )}
                                        </div>
                                        <div className="player-stats">
                                            <span>{player.level}</span>
                                            <span>🔥 {player.streaks?.fajr || 0}</span>
                                        </div>
                                    </div>

                                    <div className="player-hasanat">
                                        {player.hasanat.toLocaleString('ar-EG')}
                                        <span className="hasanat-label">حسنة</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Challenges Tab */}
            {activeTab === 'challenges' && (
                <div className="challenges-section">
                    <div className="challenges-grid">
                        {competition.challenges && competition.challenges.length > 0 ? (
                            competition.challenges.map((challenge) => (
                                <div key={challenge._id} className={`challenge-card ${challenge.active ? 'active' : ''}`}>
                                    <div className="challenge-icon">{challenge.icon || '🎯'}</div>
                                    <h3>{settings.language === 'ar' ? challenge.nameAr : challenge.nameEn}</h3>
                                    <p className="challenge-desc">{challenge.description}</p>
                                    <div className="challenge-reward">
                                        {settings.language === 'ar' ? 'مكافأة' : 'Reward'}: +{challenge.reward} {settings.language === 'ar' ? 'حسنة' : 'Hasanat'}
                                    </div>
                                    {challenge.active ? (
                                        <div className="challenge-status active-status">
                                            ✓ {settings.language === 'ar' ? 'نشط' : 'Active'}
                                        </div>
                                    ) : (
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleActivateChallenge(challenge._id)}
                                        >
                                            {settings.language === 'ar' ? 'انضم' : 'Join'}
                                        </button>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p>{settings.language === 'ar' ? 'لا توجد تحديات متاحة حالياً' : 'No challenges available'}</p>
                        )}
                    </div>

                    {/* Ramadan Wrapped Preview */}
                    <div className="wrapped-preview">
                        <h3>📊 {settings.language === 'ar' ? 'ملخص رمضان' : 'Ramadan Wrapped'}</h3>
                        <p>{settings.language === 'ar' ? 'سيتم إنشاء ملخص مفصل في نهاية الشهر!' : 'Detailed summary will be generated at the end of the month!'}</p>
                        <div className="stats-preview">
                            <div className="stat">
                                <span className="stat-value">{user?.totalGoodDeeds || 0}</span>
                                <span className="stat-label">{settings.language === 'ar' ? 'عمل صالح' : 'Good Deeds'}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">{user?.streaks?.fajr || 0}</span>
                                <span className="stat-label">{settings.language === 'ar' ? 'أيام الفجر' : 'Fajr Days'}</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">{user?.hasanat || 0}</span>
                                <span className="stat-label">{settings.language === 'ar' ? 'حسنات' : 'Hasanat'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Squad Tab */}
            {activeTab === 'squad' && (
                <div className="squad-section">
                    {competition.squad ? (
                        <div className="squad-info">
                            <h2>{settings.language === 'ar' ? 'فريقك' : 'Your Squad'}: {competition.squad}</h2>
                            <div className="squad-members">
                                {competition.friends.map((friend, idx) => (
                                    <div key={idx} className="squad-member">
                                        <span>{friend}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="no-squad">
                            <h3>{settings.language === 'ar' ? 'لم تنضم لفريق بعد' : 'No Squad Yet'}</h3>
                            <p>{settings.language === 'ar' ? 'الفرق تزيد من الحماس والمثابرة!' : 'Squads increase motivation and persistence!'}</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => joinSquad('فريق النور', ['أحمد', 'فاطمة', 'محمد'])}
                            >
                                {settings.language === 'ar' ? 'انضم لفريق النور' : 'Join Squad Noor'}
                            </button>
                        </div>
                    )}

                    <div className="info-box">
                        <h4>⚔️ {settings.language === 'ar' ? 'وضع الفريق' : 'Team Mode'}</h4>
                        <p>
                            {settings.language === 'ar'
                                ? 'الناس يترك الجهاد وحدهم، لكنهم يثبتون في القبائل. اصنع "كتيبة" وحدد هدفاً جماعياً!'
                                : 'People quit alone but persist in tribes. Form a "Katiba" and set collective goals!'}
                        </p>
                    </div>
                </div>
            )}

            {/* Data Editor Tab */}
            {activeTab === 'data' && (
                <ProgressEditor />
            )}

            {/* Weekly Report Modal */}
            {showWeeklyReport && (
                <div className="modal-overlay" onClick={() => setShowWeeklyReport(false)}>
                    <div className="weekly-report-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowWeeklyReport(false)}>✕</button>
                        <h2>📊 {settings.language === 'ar' ? 'تقريرك الأسبوعي' : 'Your Weekly Report'}</h2>

                        <div className="report-sections">
                            {weeklyReportConfig.sections.map(section => (
                                <div key={section.id} className="report-section" style={{ borderColor: section.color }}>
                                    <span className="section-icon">{section.icon}</span>
                                    <span className="section-title">{settings.language === 'ar' ? section.title.ar : section.title.en}</span>
                                    <span className="section-value" style={{ color: section.color }}>
                                        {user?.[section.id] || Math.floor(Math.random() * 100)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="report-motivation">
                            {settings.language === 'ar'
                                ? weeklyReportConfig.motivationalMessages[0].ar
                                : weeklyReportConfig.motivationalMessages[0].en}
                        </div>

                        <button className="btn btn-primary share-btn">
                            📤 {settings.language === 'ar' ? 'مشاركة' : 'Share'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Competition;
