import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './ShawwalBridge.css';

const ShawwalBridge = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    // 6 days of Shawwal tracking
    const [fastedDays, setFastedDays] = useState([false, false, false, false, false, false]);
    const [selectedHabit, setSelectedHabit] = useState(null);

    const habits = [
        { id: 'quran', icon: '📖', ar: 'صفحة قرآن يومياً', en: 'Daily Quran page' },
        { id: 'fajr', icon: '🌅', ar: 'صلاة الفجر في وقتها', en: 'Fajr on time' },
        { id: 'dhikr', icon: '📿', ar: 'أذكار الصباح والمساء', en: 'Morning/Evening Adhkar' },
        { id: 'dua', icon: '🤲', ar: 'الدعاء عند الأكل', en: 'Dua before eating' },
        { id: 'sadaqa', icon: '💝', ar: 'صدقة أسبوعية', en: 'Weekly charity' },
        { id: 'qiyam', icon: '🌙', ar: 'وتر قبل النوم', en: 'Witr before sleep' }
    ];

    const toggleDay = (index) => {
        const newDays = [...fastedDays];
        newDays[index] = !newDays[index];
        setFastedDays(newDays);
    };

    const completedDays = fastedDays.filter(d => d).length;
    const bridgeComplete = completedDays === 6;

    return (
        <div className="shawwal-page">
            <div className="shawwal-header">
                <h1>🌉 {language === 'ar' ? 'جسر الستة' : 'Shawwal Bridge'}</h1>
                <p>{language === 'ar' ? 'صيام 6 أيام من شوال = أجر الدهر' : '6 days of Shawwal = Reward of a lifetime'}</p>
            </div>

            {/* Bridge Visual */}
            <div className="bridge-visual">
                <div className="island ramadan-island">
                    <span>🕌</span>
                    <p>{language === 'ar' ? 'رمضان' : 'Ramadan'}</p>
                </div>
                <div className="bridge-tiles">
                    {fastedDays.map((fasted, idx) => (
                        <div
                            key={idx}
                            className={`bridge-tile ${fasted ? 'complete' : ''}`}
                            onClick={() => toggleDay(idx)}
                        >
                            <span className="tile-num">{idx + 1}</span>
                            {fasted && <span className="tile-check">✓</span>}
                        </div>
                    ))}
                </div>
                <div className="island year-island">
                    <span>🌟</span>
                    <p>{language === 'ar' ? 'أجر سنة' : 'Year Reward'}</p>
                </div>
            </div>

            {/* Progress */}
            <div className="bridge-progress">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(completedDays / 6) * 100}%` }} />
                </div>
                <span className="progress-text">{completedDays}/6 {language === 'ar' ? 'أيام' : 'days'}</span>
            </div>

            {/* Completion Message */}
            {bridgeComplete && (
                <div className="bridge-complete">
                    <span className="complete-icon">🏆</span>
                    <h2>{language === 'ar' ? 'مبارك! أكملت الجسر' : 'Congratulations! Bridge Complete'}</h2>
                    <p>{language === 'ar'
                        ? 'من صام رمضان ثم أتبعه بست من شوال كان كصيام الدهر'
                        : 'Whoever fasts Ramadan then follows it with 6 days of Shawwal, it is as if they fasted the entire year'}
                    </p>
                    <div className="badge-earned">
                        🎖️ {language === 'ar' ? 'وسام صائم الدهر' : 'Perpetual Faster Badge'}
                    </div>
                </div>
            )}

            {/* Hadith */}
            <div className="shawwal-hadith">
                <p>
                    {language === 'ar'
                        ? 'قال ﷺ: "مَنْ صامَ رمضانَ ثم أتبعهُ سِتًّا من شوَّالٍ كان كصيامِ الدَّهرِ"'
                        : 'Prophet ﷺ said: "Whoever fasts Ramadan and follows it with six days of Shawwal, it is as if he fasted for a lifetime"'
                    }
                </p>
                <span>📚 {language === 'ar' ? 'صحيح مسلم' : 'Sahih Muslim'}</span>
            </div>

            {/* Habit Incubator */}
            <div className="habit-section">
                <h2>🌱 {language === 'ar' ? 'حاضنة العادة الذهبية' : 'Golden Habit Incubator'}</h2>
                <p className="habit-intro">
                    {language === 'ar'
                        ? 'اختر عادة واحدة فقط من رمضان لتحافظ عليها طوال العام. أحب الأعمال إلى الله أدومها وإن قل.'
                        : 'Choose ONE habit from Ramadan to keep all year. The most beloved deeds to Allah are the consistent ones, even if small.'}
                </p>
                <div className="habits-grid">
                    {habits.map(habit => (
                        <div
                            key={habit.id}
                            className={`habit-card ${selectedHabit === habit.id ? 'selected' : ''}`}
                            onClick={() => setSelectedHabit(habit.id)}
                        >
                            <span className="habit-icon">{habit.icon}</span>
                            <span className="habit-name">{language === 'ar' ? habit.ar : habit.en}</span>
                        </div>
                    ))}
                </div>
                {selectedHabit && (
                    <div className="habit-locked">
                        ✅ {language === 'ar' ? 'تم تأمين عادتك الذهبية!' : 'Your golden habit is locked!'}
                    </div>
                )}
            </div>

            {/* Orbital Countdown */}
            <div className="orbital-section">
                <h2>🌙 {language === 'ar' ? 'المدار السنوي' : 'Annual Orbit'}</h2>
                <div className="orbit-visual">
                    <div className="orbit-ring" />
                    <div className="orbit-center">🌙</div>
                    <div className="orbit-earth">🌍</div>
                </div>
                <p className="orbit-countdown">
                    {language === 'ar' ? 'رمضان القادم بعد' : 'Next Ramadan in'}: <strong>340</strong> {language === 'ar' ? 'يوماً' : 'days'}
                </p>
                <div className="checkpoints">
                    <div className="checkpoint">
                        <span>رجب</span>
                        <small>{language === 'ar' ? 'بذر البذور' : 'Plant seeds'}</small>
                    </div>
                    <div className="checkpoint">
                        <span>شعبان</span>
                        <small>{language === 'ar' ? 'سقي الزرع' : 'Water plants'}</small>
                    </div>
                    <div className="checkpoint active">
                        <span>رمضان</span>
                        <small>{language === 'ar' ? 'الحصاد' : 'Harvest'}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShawwalBridge;
