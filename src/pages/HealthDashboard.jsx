import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './HealthDashboard.css';

const HealthDashboard = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    const [fastingHours, setFastingHours] = useState(0);
    const [waterCups, setWaterCups] = useState(0);
    const [sleepCycles, setSleepCycles] = useState(0);
    const [ketosisActive, setKetosisActive] = useState(false);
    const [autophagyActive, setAutophagyActive] = useState(false);

    // Calculate fasting status
    useEffect(() => {
        const timer = setInterval(() => {
            // Simulate fasting hours (in real app, use actual Suhoor time)
            const now = new Date();
            const suhoorTime = new Date();
            suhoorTime.setHours(4, 30, 0); // 4:30 AM

            if (now > suhoorTime && now.getHours() < 18) {
                const diff = (now - suhoorTime) / (1000 * 60 * 60);
                setFastingHours(Math.floor(diff));
                setKetosisActive(diff >= 12);
                setAutophagyActive(diff >= 16);
            }
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    // Sleep cycle calculator
    const calculateSleepTimes = (wakeUpTime) => {
        const cycles = [];
        const wakeUp = new Date();
        const [hours, mins] = wakeUpTime.split(':');
        wakeUp.setHours(parseInt(hours), parseInt(mins), 0);

        // Calculate 4, 5, 6 cycles back (90 mins each)
        for (let i = 4; i <= 6; i++) {
            const sleepTime = new Date(wakeUp.getTime() - (i * 90 * 60 * 1000));
            cycles.push({
                cycles: i,
                time: sleepTime.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
                hours: (i * 1.5).toFixed(1)
            });
        }
        return cycles;
    };

    // Bio-hack features from the conversation
    const bioHacks = [
        {
            icon: '🧬',
            title: { ar: 'الالتهام الذاتي', en: 'Autophagy' },
            active: autophagyActive,
            threshold: 16,
            desc: {
                ar: 'بعد 16 ساعة صيام، الجسم يبدأ بتنظيف الخلايا التالفة',
                en: 'After 16 hours fasting, body starts cleaning damaged cells'
            }
        },
        {
            icon: '🔥',
            title: { ar: 'الكيتوزية', en: 'Ketosis' },
            active: ketosisActive,
            threshold: 12,
            desc: {
                ar: 'بعد 12 ساعة، الجسم يحرق الدهون كوقود',
                en: 'After 12 hours, body burns fat as fuel'
            }
        },
        {
            icon: '🧠',
            title: { ar: 'هرمون BDNF', en: 'BDNF Hormone' },
            active: fastingHours >= 14,
            threshold: 14,
            desc: {
                ar: 'يرتفع بعد 14 ساعة لتعزيز الذاكرة والتركيز',
                en: 'Rises after 14 hours to boost memory and focus'
            }
        },
        {
            icon: '💪',
            title: { ar: 'هرمون النمو', en: 'Growth Hormone' },
            active: fastingHours >= 13,
            threshold: 13,
            desc: {
                ar: 'يزيد 5 أضعاف لتجديد الخلايا والعضلات',
                en: 'Increases 5x for cell and muscle regeneration'
            }
        }
    ];

    // 30 Myth Busters
    const mythBusters = [
        {
            myth: { ar: 'يجب النوم 8 ساعات متواصلة', en: 'Must sleep 8 continuous hours' },
            truth: { ar: 'النوم متعدد الأطوار (4+2) أفضل في رمضان', en: 'Polyphasic sleep (4+2) is better in Ramadan' }
        },
        {
            myth: { ar: 'السكر يعطي طاقة فورية عند الإفطار', en: 'Sugar gives instant energy at Iftar' },
            truth: { ar: 'السكر يسبب انهياراً بعد ساعة. ابدأ بالتمر والبروتين', en: 'Sugar causes crash after an hour. Start with dates and protein' }
        },
        {
            myth: { ar: 'شرب ماء كثير دفعة واحدة يمنع العطش', en: 'Drinking lots of water at once prevents thirst' },
            truth: { ar: 'الجسم يخرج الماء الزائد فوراً. اشرب رشفات كل 45 دقيقة', en: 'Body expels excess water immediately. Sip every 45 mins' }
        },
        {
            myth: { ar: 'لا أستطيع المذاكرة وأنا صائم', en: 'I can\'t study while fasting' },
            truth: { ar: 'الصيام يزيد التركيز! الساعات قبل المغرب هي الأفضل للتركيز', en: 'Fasting increases focus! Hours before Maghrib are best for concentration' }
        },
        {
            myth: { ar: 'القهوة ضرورية للتركيز في رمضان', en: 'Coffee is essential for focus in Ramadan' },
            truth: { ar: 'الكافيين يسبب الجفاف. جرب الماء والتمر والقيلولة', en: 'Caffeine causes dehydration. Try water, dates, and nap' }
        }
    ];

    // Hydration tracker
    const addWater = () => {
        if (waterCups < 8) {
            setWaterCups(prev => prev + 1);
        }
    };

    return (
        <div className="health-page">
            <div className="health-header">
                <h1>🏥 {language === 'ar' ? 'المختبر الحيوي' : 'Bio-Lab Dashboard'}</h1>
                <p>{language === 'ar' ? 'علوم الصيام التطبيقية' : 'Applied Fasting Science'}</p>
            </div>

            {/* Fasting Timer */}
            <div className="fasting-meter">
                <div className="meter-display">
                    <span className="hours-big">{fastingHours}</span>
                    <span className="hours-label">{language === 'ar' ? 'ساعة صيام' : 'hours fasting'}</span>
                </div>
                <div className="meter-bar">
                    <div className="meter-fill" style={{ width: `${(fastingHours / 18) * 100}%` }}>
                        {autophagyActive && <span className="autophagy-marker">🧬</span>}
                    </div>
                </div>
                <div className="meter-labels">
                    <span>0h</span>
                    <span>12h 🔥</span>
                    <span>16h 🧬</span>
                    <span>18h</span>
                </div>
            </div>

            {/* Bio-Hacks Grid */}
            <div className="biohacks-grid">
                {bioHacks.map((hack, idx) => (
                    <div key={idx} className={`biohack-card ${hack.active ? 'active' : ''}`}>
                        <span className="hack-icon">{hack.icon}</span>
                        <h3>{language === 'ar' ? hack.title.ar : hack.title.en}</h3>
                        <p className="hack-desc">{language === 'ar' ? hack.desc.ar : hack.desc.en}</p>
                        <div className="hack-status">
                            {hack.active ? (
                                <span className="status-active">✅ {language === 'ar' ? 'نشط الآن!' : 'Active Now!'}</span>
                            ) : (
                                <span className="status-pending">⏳ {hack.threshold - fastingHours}h {language === 'ar' ? 'متبقية' : 'remaining'}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Hydration Tracker */}
            <div className="hydration-section">
                <h2>💧 {language === 'ar' ? 'متتبع الترطيب' : 'Hydration Tracker'}</h2>
                <p className="hydration-tip">
                    {language === 'ar'
                        ? 'اشرب نصف كوب كل 45 دقيقة من الإفطار للسحور'
                        : 'Drink half cup every 45 mins from Iftar to Suhoor'}
                </p>
                <div className="water-cups">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className={`cup ${i < waterCups ? 'filled' : ''}`}
                            onClick={addWater}
                        >
                            💧
                        </div>
                    ))}
                </div>
                <p className="cups-count">{waterCups}/8 {language === 'ar' ? 'أكواب' : 'cups'}</p>
            </div>

            {/* Sleep Calculator */}
            <div className="sleep-section">
                <h2>😴 {language === 'ar' ? 'حاسبة النوم النبوي' : 'Prophetic Sleep Calculator'}</h2>
                <p className="sleep-tip">
                    {language === 'ar'
                        ? 'النوم بالدورات (90 دقيقة) أفضل من الساعات المتصلة'
                        : 'Sleep in cycles (90 mins) is better than continuous hours'}
                </p>
                <div className="sleep-times">
                    {calculateSleepTimes('05:00').map((cycle, idx) => (
                        <div key={idx} className="sleep-time-card">
                            <span className="cycle-count">{cycle.cycles} {language === 'ar' ? 'دورات' : 'cycles'}</span>
                            <span className="sleep-at">{cycle.time}</span>
                            <span className="hours-sleep">{cycle.hours}h</span>
                        </div>
                    ))}
                </div>
                <div className="qailula-tip">
                    <span>☀️</span>
                    <p>
                        {language === 'ar'
                            ? 'قِيلوا فإن الشياطين لا تقيل - قيلولة 20 دقيقة قبل الظهر تعادل 90 دقيقة ليلية'
                            : 'Take the Qailula (20 min nap) as the Prophet advised - equals 90 mins of night sleep'}
                    </p>
                </div>
            </div>

            {/* Myth Busters */}
            <div className="myths-section">
                <h2>🚫 {language === 'ar' ? 'تدمير الخرافات' : 'Myth Busters'}</h2>
                {mythBusters.map((item, idx) => (
                    <div key={idx} className="myth-card">
                        <div className="myth-side">
                            <span className="myth-label">❌ {language === 'ar' ? 'الخرافة' : 'Myth'}</span>
                            <p>{language === 'ar' ? item.myth.ar : item.myth.en}</p>
                        </div>
                        <div className="truth-side">
                            <span className="truth-label">✅ {language === 'ar' ? 'الحقيقة' : 'Truth'}</span>
                            <p>{language === 'ar' ? item.truth.ar : item.truth.en}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Food Sequence */}
            <div className="food-sequence">
                <h2>🍽️ {language === 'ar' ? 'درع الأنسولين' : 'Insulin Shield'}</h2>
                <p>{language === 'ar' ? 'الترتيب الصحيح للإفطار' : 'Correct Iftar Sequence'}</p>
                <div className="sequence-steps">
                    <div className="step">
                        <span className="step-num">1</span>
                        <span className="step-icon">🌴</span>
                        <span>{language === 'ar' ? 'تمر + ماء' : 'Dates + Water'}</span>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step">
                        <span className="step-num">2</span>
                        <span className="step-icon">🕌</span>
                        <span>{language === 'ar' ? 'صلاة المغرب' : 'Maghrib Prayer'}</span>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step">
                        <span className="step-num">3</span>
                        <span className="step-icon">🥗</span>
                        <span>{language === 'ar' ? 'سلطة' : 'Salad'}</span>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step">
                        <span className="step-num">4</span>
                        <span className="step-icon">🍖</span>
                        <span>{language === 'ar' ? 'بروتين' : 'Protein'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthDashboard;
