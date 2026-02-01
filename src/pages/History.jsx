import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { expertSuggestions } from '../data/islamicContent';
import './History.css';

const History = () => {
    const { settings } = useAppStore();
    const history = useAppStore((state) => state.history) || { artifacts: [], pledges: [], viewedEvents: [] };
    const [currentDay, setCurrentDay] = useState(17); // Ramadan day
    const [pledge, setPledge] = useState('');
    const [showExpertTips, setShowExpertTips] = useState(true);

    // Calculate current Ramadan day based on date (approximate)
    useEffect(() => {
        const today = new Date();
        const ramadanStart = new Date(2026, 2, 1); // March 1, 2026 approx
        const daysDiff = Math.ceil((today - ramadanStart) / (1000 * 60 * 60 * 24));
        if (daysDiff >= 1 && daysDiff <= 30) {
            setCurrentDay(daysDiff);
        }
    }, []);

    const historicalEvents = {
        1: {
            ar: 'نزول أول آيات القرآن الكريم',
            en: 'First verses of Quran revealed',
            year: 610,
            detailAr: 'في غار حراء، نزل جبريل على النبي محمد ﷺ بأول آيات سورة العلق',
            detailEn: 'In the Cave of Hira, Gabriel descended upon Prophet Muhammad ﷺ with the first verses of Surah Al-Alaq'
        },
        2: { ar: 'بناء المسجد النبوي', en: 'Construction of Prophet\'s Mosque', year: 622 },
        3: { ar: 'وفاة السيدة فاطمة الزهراء', en: 'Death of Fatimah Az-Zahra', year: 632 },
        10: {
            ar: 'وفاة السيدة خديجة رضي الله عنها',
            en: 'Death of Khadijah (RA)',
            year: 619,
            detailAr: 'عام الحزن - وفاة أم المؤمنين خديجة بنت خويلد',
            detailEn: 'Year of Sorrow - Death of the Mother of Believers'
        },
        15: { ar: 'ولادة الحسن بن علي', en: 'Birth of Al-Hasan ibn Ali', year: 625 },
        17: {
            ar: 'غزوة بدر الكبرى - يوم الفرقان',
            en: 'Battle of Badr - Day of Criterion',
            year: 624,
            detailAr: '313 مؤمن ضد 1000 مشرك - أول انتصار كبير في الإسلام',
            detailEn: '313 believers vs 1000 - The first major victory in Islam',
            soundscape: { ar: 'صهيل الخيول... رياح الصحراء... تكبير المؤمنين...', en: 'Horses neighing... desert wind... believers\' Takbeer...' }
        },
        20: {
            ar: 'فتح مكة المكرمة',
            en: 'Conquest of Makkah',
            year: 630,
            detailAr: 'دخل النبي ﷺ مكة فاتحاً بـ 10000 مسلم وأعلن العفو العام',
            detailEn: 'The Prophet ﷺ entered Makkah with 10,000 Muslims and declared general amnesty'
        },
        21: { ar: 'استشهاد أمير المؤمنين علي بن أبي طالب', en: 'Martyrdom of Ali ibn Abi Talib', year: 661 },
        23: { ar: 'ليلة القدر (احتمال)', en: 'Laylatul Qadr (possible)', year: 610 },
        25: { ar: 'ليلة القدر (احتمال)', en: 'Laylatul Qadr (possible)', year: 610 },
        27: {
            ar: 'ليلة القدر',
            en: 'Laylatul Qadr',
            year: 610,
            detailAr: 'خير من ألف شهر - ليلة نزول القرآن',
            detailEn: 'Better than a thousand months - The Night of Power'
        },
    };

    // Digital Artifacts Collection
    const artifacts = [
        {
            id: 'sword',
            nameAr: 'سيف خالد بن الوليد',
            nameEn: 'Khalid\'s Sword',
            icon: '🗡️',
            unlockCondition: 'Read Battle of Badr',
            unlocked: history?.artifacts?.includes('sword') || false
        },
        {
            id: 'cannon',
            nameAr: 'مدفع السلطان محمد الفاتح',
            nameEn: 'Mehmed\'s Cannon',
            icon: '💣',
            unlockCondition: 'Read Conquest of Constantinople',
            unlocked: history?.artifacts?.includes('cannon') || false
        },
        {
            id: 'shield',
            nameAr: 'درع المدينة المنورة',
            nameEn: 'Madinah Shield',
            icon: '🛡️',
            unlockCondition: 'Read Battle of Uhud',
            unlocked: history?.artifacts?.includes('shield') || false
        },
        {
            id: 'quran',
            nameAr: 'مصحف عثماني',
            nameEn: 'Uthmani Mushaf',
            icon: '📖',
            unlockCondition: 'Complete first Khatmah',
            unlocked: history?.artifacts?.includes('quran') || false
        },
    ];

    // Hero Archetypes for problems (from expert conversation)
    const heroArchetypes = [
        {
            problemAr: 'تشعر بالظلم؟',
            problemEn: 'Feel oppressed?',
            heroAr: 'سعيد بن جبير مع الحجاج',
            heroEn: 'Said ibn Jubayr vs Al-Hajjaj'
        },
        {
            problemAr: 'تشعر بالفشل؟',
            problemEn: 'Feel like a failure?',
            heroAr: 'بدايات ابن حزم',
            heroEn: 'Ibn Hazm\'s Beginnings'
        },
        {
            problemAr: 'تشعر بالوحدة؟',
            problemEn: 'Feel lonely?',
            heroAr: 'يوسف عليه السلام في البئر',
            heroEn: 'Yusuf (AS) in the well'
        },
        {
            problemAr: 'تشعر بالخوف؟',
            problemEn: 'Feeling afraid?',
            heroAr: 'موسى عليه السلام أمام البحر',
            heroEn: 'Musa (AS) facing the sea'
        },
    ];

    const todayEvent = historicalEvents[currentDay];
    const language = settings?.language || 'ar';

    const handlePledge = () => {
        if (pledge.trim()) {
            alert(language === 'ar' ? '✅ تم حفظ عهدك!' : '✅ Pledge saved!');
            setPledge('');
        }
    };

    return (
        <div className="history-page">
            <div className="history-header">
                <h1>📜 {language === 'ar' ? 'بوابة السِجلّ' : 'The Sijill Portal'}</h1>
                <p>{language === 'ar' ? 'آلة الزمن الإسلامية - تاريخنا المجيد' : 'Islamic Time Machine - Our Glorious History'}</p>
            </div>

            {/* Day Selector */}
            <div className="day-selector">
                <button onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}>◀</button>
                <span>{currentDay} {language === 'ar' ? 'رمضان' : 'Ramadan'}</span>
                <button onClick={() => setCurrentDay(Math.min(30, currentDay + 1))}>▶</button>
            </div>

            {/* Today in Ramadan */}
            {todayEvent ? (
                <div className="today-event">
                    <h2>{language === 'ar' ? `في مثل هذا اليوم (${currentDay} رمضان)` : `On This Day (${currentDay} Ramadan)`}</h2>
                    <div className="event-card featured">
                        <h3>{language === 'ar' ? todayEvent.ar : todayEvent.en}</h3>
                        <p className="event-year">{todayEvent.year} {language === 'ar' ? 'م' : 'CE'}</p>
                        {todayEvent.detailAr && (
                            <p className="event-detail">{language === 'ar' ? todayEvent.detailAr : todayEvent.detailEn}</p>
                        )}
                        {todayEvent.soundscape && (
                            <div className="soundscape">
                                🔊 {language === 'ar' ? todayEvent.soundscape.ar : todayEvent.soundscape.en}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="today-event">
                    <h2>{language === 'ar' ? `${currentDay} رمضان` : `${currentDay} Ramadan`}</h2>
                    <div className="event-card">
                        <p>{language === 'ar' ? 'لا يوجد حدث مسجل لهذا اليوم' : 'No recorded event for this day'}</p>
                        <p className="wisdom">{language === 'ar' ? 'لكن كل يوم في رمضان هو فرصة لصنع التاريخ!' : 'But every day in Ramadan is a chance to make history!'}</p>
                    </div>
                </div>
            )}

            {/* Expert Tips Section */}
            <div className="expert-tips-section">
                <h3 onClick={() => setShowExpertTips(!showExpertTips)} style={{ cursor: 'pointer' }}>
                    💡 {language === 'ar' ? 'نصائح الخبراء للتاريخ' : 'Expert History Tips'} {showExpertTips ? '▼' : '▶'}
                </h3>
                {showExpertTips && (
                    <div className="tips-list">
                        <div className="tip-item">
                            <strong>{language === 'ar' ? 'خبير التاريخ:' : 'History Expert:'}</strong>
                            <p>{language === 'ar'
                                ? 'التاريخ يعيد نفسه لأن الناس لا يقرؤون. تعلم من أخطاء الماضي.'
                                : 'History repeats because people don\'t read. Learn from past mistakes.'}</p>
                        </div>
                        <div className="tip-item">
                            <strong>{language === 'ar' ? 'خبير علم النفس:' : 'Psychology Expert:'}</strong>
                            <p>{language === 'ar'
                                ? 'ربط نفسك بأبطال التاريخ يزيد من ثقتك وهويتك الإسلامية.'
                                : 'Connecting with historical heroes boosts your confidence and Islamic identity.'}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Hero Archetypes */}
            <div className="hero-archetypes">
                <h3>🦸 {language === 'ar' ? 'أبطال للقدوة' : 'Hero Archetypes'}</h3>
                <div className="heroes-grid">
                    {heroArchetypes.map((hero, index) => (
                        <div key={index} className="hero-card">
                            <p className="problem">{language === 'ar' ? hero.problemAr : hero.problemEn}</p>
                            <p className="hero">{language === 'ar' ? hero.heroAr : hero.heroEn}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* AR Artifacts Vault */}
            <div className="artifacts-section">
                <h3>🏺 {language === 'ar' ? 'خزانة الآثار الرقمية' : 'Digital Artifacts Vault'}</h3>
                <div className="artifacts-grid">
                    {artifacts.map((artifact) => (
                        <div key={artifact.id} className={`artifact-card ${artifact.unlocked ? 'unlocked' : 'locked'}`}>
                            <div className="artifact-icon">{artifact.icon}</div>
                            <h4>{language === 'ar' ? artifact.nameAr : artifact.nameEn}</h4>
                            {artifact.unlocked ? (
                                <button className="btn btn-primary">
                                    📱 {language === 'ar' ? 'عرض AR' : 'View AR'}
                                </button>
                            ) : (
                                <p className="unlock-hint">
                                    🔒 {language === 'ar' ? artifact.unlockCondition : artifact.unlockCondition}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legacy Bridge */}
            <div className="legacy-bridge">
                <h3>🔗 {language === 'ar' ? 'جسر الحفيد والجد' : 'Legacy Bridge'}</h3>
                <p>{language === 'ar'
                    ? 'في مثل هذا اليوم، صمد الصحابة في الحر الشديد ليصنعوا لك هذا الدين. أنت اليوم تملك الراية.'
                    : 'On this day, the Companions endured scorching heat to preserve this Deen for you. Today, you carry the flag.'}</p>
                <textarea
                    value={pledge}
                    onChange={(e) => setPledge(e.target.value)}
                    placeholder={language === 'ar' ? 'اكتب عهدك لأجدادك...' : 'Write your pledge to your ancestors...'}
                    className="pledge-input"
                />
                <button className="btn btn-primary" onClick={handlePledge}>
                    ✍️ {language === 'ar' ? 'تسليم الراية' : 'Pass the Flag'}
                </button>
            </div>
        </div>
    );
};

export default History;
