import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './Badges.css';

const Badges = () => {
    const { settings, user } = useAppStore();
    const language = settings?.language || 'ar';

    const [selectedBadge, setSelectedBadge] = useState(null);

    // All available badges
    const badgeCategories = [
        {
            category: { ar: 'الصلاة', en: 'Prayer' },
            badges: [
                { id: 'fajr7', icon: '🌅', ar: 'محارب الفجر', en: 'Fajr Warrior', desc: { ar: '7 أيام فجر متتالية', en: '7 consecutive Fajr prayers' }, unlocked: true },
                { id: 'fajr30', icon: '⚔️', ar: 'أسد الفجر', en: 'Fajr Lion', desc: { ar: '30 يوم فجر متتالية', en: '30 consecutive Fajr prayers' }, unlocked: false },
                { id: 'taraweeh', icon: '🥷', ar: 'نينجا التراويح', en: 'Taraweeh Ninja', desc: { ar: 'كل التراويح', en: 'All Taraweeh prayers' }, unlocked: true },
                { id: 'tahajjud', icon: '🦉', ar: 'بومة الليل', en: 'Night Owl', desc: { ar: '10 ليالي تهجد', en: '10 nights Tahajjud' }, unlocked: false },
            ]
        },
        {
            category: { ar: 'القرآن', en: 'Quran' },
            badges: [
                { id: 'khatim', icon: '📖', ar: 'خاتم القرآن', en: 'Quran Completer', desc: { ar: 'ختم القرآن', en: 'Completed Quran' }, unlocked: false },
                { id: 'daily', icon: '📚', ar: 'قارئ يومي', en: 'Daily Reader', desc: { ar: 'قراءة يومية 30 يوم', en: '30 days daily reading' }, unlocked: true },
                { id: 'hafiz', icon: '🎓', ar: 'الحافظ الصغير', en: 'Young Hafiz', desc: { ar: 'حفظ جزء عمّ', en: 'Memorized Juz Amma' }, unlocked: false },
            ]
        },
        {
            category: { ar: 'الصيام', en: 'Fasting' },
            badges: [
                { id: 'ramadan', icon: '🏆', ar: 'بطل رمضان', en: 'Ramadan Champion', desc: { ar: 'صيام رمضان كاملاً', en: 'Full Ramadan fast' }, unlocked: true },
                { id: 'shawwal', icon: '⭐', ar: 'الستة البيض', en: 'White Six', desc: { ar: 'صيام 6 شوال', en: '6 days of Shawwal' }, unlocked: false },
                { id: 'monday', icon: '📅', ar: 'صائم الإثنين', en: 'Monday Faster', desc: { ar: '4 أسابيع إثنين', en: '4 weeks Monday fasting' }, unlocked: false },
            ]
        },
        {
            category: { ar: 'الصدقة', en: 'Charity' },
            badges: [
                { id: 'generous', icon: '👑', ar: 'الكريم', en: 'The Generous', desc: { ar: 'صدقة 30 يوم', en: '30 days charity' }, unlocked: true },
                { id: 'iftar', icon: '🍽️', ar: 'مُطعم الصائم', en: 'Iftar Provider', desc: { ar: 'إطعام 10 صائمين', en: 'Fed 10 fasters' }, unlocked: false },
                { id: 'zakat', icon: '💰', ar: 'مُزكّي', en: 'Zakat Giver', desc: { ar: 'دفع الزكاة', en: 'Paid Zakat' }, unlocked: true },
            ]
        },
        {
            category: { ar: 'الذكر', en: 'Dhikr' },
            badges: [
                { id: 'dhikr', icon: '📿', ar: 'ذاكر الله', en: 'Dhikr Master', desc: { ar: '10000 تسبيحة', en: '10,000 Tasbeeh' }, unlocked: true },
                { id: 'salawat', icon: '💚', ar: 'مُصلّي على النبي', en: 'Salawat Lover', desc: { ar: '1000 صلاة على النبي', en: '1,000 Salawat' }, unlocked: false },
                { id: 'istighfar', icon: '🤲', ar: 'التوّاب', en: 'The Repenter', desc: { ar: '10000 استغفار', en: '10,000 Istighfar' }, unlocked: false },
            ]
        },
        {
            category: { ar: 'الإنجازات', en: 'Achievements' },
            badges: [
                { id: 'streak', icon: '🔥', ar: 'سلسلة الـ 30', en: '30-Day Streak', desc: { ar: '30 يوم متتالية', en: '30 consecutive days' }, unlocked: false },
                { id: 'early', icon: '⏰', ar: 'المبكر', en: 'Early Bird', desc: { ar: 'سجل قبل الفجر', en: 'Logged before Fajr' }, unlocked: true },
                { id: 'social', icon: '🦋', ar: 'الفراشة الاجتماعية', en: 'Social Butterfly', desc: { ar: 'انضم لـ 5 مجموعات', en: 'Joined 5 groups' }, unlocked: false },
            ]
        },
    ];

    const unlockedCount = badgeCategories.flatMap(c => c.badges).filter(b => b.unlocked).length;
    const totalCount = badgeCategories.flatMap(c => c.badges).length;

    return (
        <div className="badges-page">
            <div className="badges-header">
                <h1>🏅 {language === 'ar' ? 'الأوسمة والإنجازات' : 'Badges & Achievements'}</h1>
                <div className="badges-count">
                    {unlockedCount} / {totalCount} {language === 'ar' ? 'مفتوحة' : 'unlocked'}
                </div>
            </div>

            {/* Progress */}
            <div className="badges-progress">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                    />
                </div>
            </div>

            {/* Badge Categories */}
            {badgeCategories.map((category, idx) => (
                <div key={idx} className="badge-category">
                    <h3>{language === 'ar' ? category.category.ar : category.category.en}</h3>
                    <div className="badges-grid">
                        {category.badges.map(badge => (
                            <div
                                key={badge.id}
                                className={`badge-card ${badge.unlocked ? 'unlocked' : 'locked'} ${selectedBadge === badge.id ? 'selected' : ''}`}
                                onClick={() => setSelectedBadge(selectedBadge === badge.id ? null : badge.id)}
                            >
                                <span className="badge-icon">{badge.icon}</span>
                                <span className="badge-name">
                                    {language === 'ar' ? badge.ar : badge.en}
                                </span>
                                {!badge.unlocked && <span className="lock-icon">🔒</span>}

                                {selectedBadge === badge.id && (
                                    <div className="badge-desc">
                                        {language === 'ar' ? badge.desc.ar : badge.desc.en}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* User Level */}
            <div className="user-level">
                <h3>{language === 'ar' ? '📊 مستواك الحالي' : '📊 Your Level'}</h3>
                <div className="level-display">
                    <span className="level-badge">🥉</span>
                    <div className="level-info">
                        <span className="level-name">{user?.level || 'Bronze'}</span>
                        <span className="level-hasanat">{user?.hasanat || 0} {language === 'ar' ? 'حسنة' : 'Hasanat'}</span>
                    </div>
                </div>
                <div className="levels-path">
                    <span className={`level bronze ${(user?.level || 'Bronze') === 'Bronze' ? 'current' : ''}`}>🥉</span>
                    <span className="level-connector">→</span>
                    <span className={`level silver ${user?.level === 'Silver' ? 'current' : ''}`}>🥈</span>
                    <span className="level-connector">→</span>
                    <span className={`level gold ${user?.level === 'Gold' ? 'current' : ''}`}>🥇</span>
                    <span className="level-connector">→</span>
                    <span className={`level diamond ${user?.level === 'Diamond' ? 'current' : ''}`}>💎</span>
                </div>
            </div>
        </div>
    );
};

export default Badges;
