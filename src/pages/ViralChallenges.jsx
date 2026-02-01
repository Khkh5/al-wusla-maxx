import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './ViralChallenges.css';

const ViralChallenges = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [participatingIn, setParticipatingIn] = useState([]);

    // 10 Viral Challenges from conversation
    const challenges = [
        {
            id: 'fajr-squad',
            icon: '🌅',
            title: { ar: 'فريق الفجر', en: 'Fajr Wake-Up Squad' },
            desc: { ar: 'فرقة إيقاظ 5 أصدقاء للفجر يومياً', en: 'Wake-up squad of 5 friends for Fajr daily' },
            participants: 12500,
            reward: { ar: 'فرسان الفجر', en: 'Dawn Warriors Badge' }
        },
        {
            id: 'mecca-race',
            icon: '🕋',
            title: { ar: 'سباق مكة', en: 'Steps to Mecca' },
            desc: { ar: 'حول خطواتك للمسجد إلى مسافة افتراضية لمكة', en: 'Convert your mosque steps to virtual distance to Mecca' },
            participants: 8200,
            reward: { ar: 'حاج افتراضي', en: 'Virtual Pilgrim Badge' }
        },
        {
            id: 'focus-wars',
            icon: '📵',
            title: { ar: 'حروب التركيز', en: 'Deep Focus Wars' },
            desc: { ar: 'من يترك هاتفه أطول فترة أثناء التراويح؟', en: 'Who can leave phone longest during Taraweeh?' },
            participants: 5800,
            reward: { ar: 'خاشع', en: 'Khushu Master Badge' }
        },
        {
            id: 'dish-of-light',
            icon: '🍽️',
            title: { ar: 'طبق النور', en: 'Dish of Light' },
            desc: { ar: 'صور طبق إفطار أرسلته لمحتاج', en: 'Photo of Iftar dish you sent to someone in need' },
            participants: 3200,
            reward: { ar: 'مطعم الطعام', en: 'Food Giver Badge' }
        },
        {
            id: 'hifz-relay',
            icon: '🎤',
            title: { ar: 'ريلاي الحفظ', en: 'Hifz Relay' },
            desc: { ar: 'تسجيل آية يتناوب عليه الأصدقاء لختمة جماعية', en: 'Friends take turns recording verses for collective Khatmah' },
            participants: 2100,
            reward: { ar: 'ختمة جماعية', en: 'Group Khatmah Badge' }
        },
        {
            id: 'mystery-dua',
            icon: '🎁',
            title: { ar: 'الدعاء الخفي', en: 'Mystery Dua Gift' },
            desc: { ar: 'ادعُ لصديق عشوائي بظهر الغيب يومياً', en: 'Pray for a random friend in their absence daily' },
            participants: 15000,
            reward: { ar: 'داعي الخير', en: 'Silent Supporter Badge' }
        },
        {
            id: 'trivia-royale',
            icon: '🧠',
            title: { ar: 'من سيربح الحسنات', en: 'Trivia Royale' },
            desc: { ar: 'مسابقة يومية في السيرة والفقه', en: 'Daily quiz on Seerah and Fiqh' },
            participants: 9500,
            reward: { ar: 'الراسخ في العلم', en: 'Knowledge Master Badge' }
        },
        {
            id: 'anti-gossip',
            icon: '🤐',
            title: { ar: 'حظر الغيبة', en: 'Anti-Gossip Zone' },
            desc: { ar: 'تعهد يومي بعدم الغيبة مع زر طوارئ', en: 'Daily pledge with emergency button' },
            participants: 7300,
            reward: { ar: 'حارس اللسان', en: 'Tongue Guardian Badge' }
        },
        {
            id: 'atomic-sunnah',
            icon: '⚛️',
            title: { ar: 'العادة الذرية', en: 'Atomic Sunnah' },
            desc: { ar: 'إحياء سنة مهجورة واحدة يومياً', en: 'Revive one forgotten Sunnah daily' },
            participants: 11000,
            reward: { ar: 'محيي السنة', en: 'Sunnah Reviver Badge' }
        },
        {
            id: 'ramadan-wrapped',
            icon: '📊',
            title: { ar: 'ملخص رمضان', en: 'Ramadan Wrapped' },
            desc: { ar: 'إنفوجرافيك شخصي بإنجازاتك في العيد', en: 'Personal infographic of your achievements on Eid' },
            participants: 25000,
            reward: { ar: 'رمضان مميز', en: 'Ramadan VIP Badge' }
        }
    ];

    const joinChallenge = (id) => {
        if (!participatingIn.includes(id)) {
            setParticipatingIn([...participatingIn, id]);
        }
    };

    return (
        <div className="challenges-page">
            <div className="challenges-header">
                <h1>🔥 {language === 'ar' ? 'تحديات فيروسية' : 'Viral Challenges'}</h1>
                <p>{language === 'ar' ? 'نافس وتسابق في الخير' : 'Compete and race in goodness'}</p>
            </div>

            {/* Stats */}
            <div className="challenge-stats">
                <div className="stat">
                    <span className="stat-num">{participatingIn.length}</span>
                    <span className="stat-label">{language === 'ar' ? 'تحدياتك' : 'Your Challenges'}</span>
                </div>
                <div className="stat">
                    <span className="stat-num">108K</span>
                    <span className="stat-label">{language === 'ar' ? 'مشاركين عالمياً' : 'Global Participants'}</span>
                </div>
            </div>

            {/* Challenges Grid */}
            <div className="challenges-grid">
                {challenges.map(challenge => (
                    <div
                        key={challenge.id}
                        className={`challenge-card ${participatingIn.includes(challenge.id) ? 'joined' : ''}`}
                        onClick={() => setActiveChallenge(challenge)}
                    >
                        <span className="challenge-icon">{challenge.icon}</span>
                        <h3>{language === 'ar' ? challenge.title.ar : challenge.title.en}</h3>
                        <p className="challenge-desc">{language === 'ar' ? challenge.desc.ar : challenge.desc.en}</p>
                        <div className="challenge-meta">
                            <span className="participants">👥 {challenge.participants.toLocaleString()}</span>
                            {participatingIn.includes(challenge.id) && (
                                <span className="joined-badge">✅</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Challenge Modal */}
            {activeChallenge && (
                <div className="challenge-modal" onClick={() => setActiveChallenge(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="modal-icon">{activeChallenge.icon}</span>
                        <h2>{language === 'ar' ? activeChallenge.title.ar : activeChallenge.title.en}</h2>
                        <p>{language === 'ar' ? activeChallenge.desc.ar : activeChallenge.desc.en}</p>

                        <div className="modal-stats">
                            <div className="modal-stat">
                                <span>👥</span>
                                <span>{activeChallenge.participants.toLocaleString()}</span>
                            </div>
                            <div className="modal-stat">
                                <span>🏆</span>
                                <span>{language === 'ar' ? activeChallenge.reward.ar : activeChallenge.reward.en}</span>
                            </div>
                        </div>

                        <button
                            className={`join-btn ${participatingIn.includes(activeChallenge.id) ? 'joined' : ''}`}
                            onClick={() => joinChallenge(activeChallenge.id)}
                        >
                            {participatingIn.includes(activeChallenge.id)
                                ? (language === 'ar' ? '✅ مشترك' : '✅ Joined')
                                : (language === 'ar' ? 'انضم للتحدي' : 'Join Challenge')}
                        </button>

                        <button className="close-btn" onClick={() => setActiveChallenge(null)}>✕</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViralChallenges;
