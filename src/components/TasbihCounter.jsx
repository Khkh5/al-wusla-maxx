import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './TasbihCounter.css';

const TasbihCounter = () => {
    const { settings, user } = useAppStore();
    const language = settings?.language || 'ar';

    const [count, setCount] = useState(0);
    const [target, setTarget] = useState(33);
    const [selectedDhikr, setSelectedDhikr] = useState(0);
    const [totalToday, setTotalToday] = useState(0);
    const [vibration, setVibration] = useState(true);

    // Dhikr collection
    const dhikrList = [
        {
            ar: 'سُبْحَانَ اللهِ',
            en: 'SubhanAllah',
            meaning: 'Glory be to Allah',
            reward: 'شجرة في الجنة',
            rewardEn: 'A tree in Paradise',
            recommended: 33
        },
        {
            ar: 'الْحَمْدُ لِلَّهِ',
            en: 'Alhamdulillah',
            meaning: 'Praise be to Allah',
            reward: 'ميزانك يمتلئ',
            rewardEn: 'Your scale fills',
            recommended: 33
        },
        {
            ar: 'اللهُ أَكْبَرُ',
            en: 'Allahu Akbar',
            meaning: 'Allah is the Greatest',
            reward: 'تملأ ما بين السماء والأرض',
            rewardEn: 'Fills between heavens and earth',
            recommended: 33
        },
        {
            ar: 'لَا إِلَهَ إِلَّا اللهُ',
            en: 'La ilaha illAllah',
            meaning: 'There is no god but Allah',
            reward: 'أفضل ما قلت أنا والنبيون من قبلي',
            rewardEn: 'Best thing said by prophets',
            recommended: 100
        },
        {
            ar: 'أَسْتَغْفِرُ اللهَ',
            en: 'Astaghfirullah',
            meaning: 'I seek forgiveness from Allah',
            reward: 'مخرج من كل ضيق ورزق من حيث لا يحتسب',
            rewardEn: 'Exit from hardship, provision',
            recommended: 100
        },
        {
            ar: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ',
            en: 'La hawla wala quwwata illa billah',
            meaning: 'No power except with Allah',
            reward: 'كنز من كنوز الجنة',
            rewardEn: 'Treasure from Paradise',
            recommended: 100
        },
        {
            ar: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ',
            en: 'SubhanAllahi wa bihamdihi',
            meaning: 'Glory and praise to Allah',
            reward: 'حُطَّت خطاياه وإن كانت مثل زبد البحر',
            rewardEn: 'Sins forgiven even if like sea foam',
            recommended: 100
        },
        {
            ar: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ',
            en: 'Allahumma salli ala Muhammad',
            meaning: 'O Allah send blessings upon Muhammad',
            reward: 'صلى الله عليك عشراً',
            rewardEn: 'Allah sends 10 blessings on you',
            recommended: 100
        },
    ];

    const currentDhikr = dhikrList[selectedDhikr];

    // Handle count increment
    const handleCount = () => {
        if (vibration && navigator.vibrate) {
            navigator.vibrate(50); // Phantom bead haptics
        }

        setCount(prev => {
            const newCount = prev + 1;
            if (newCount >= target) {
                // Target reached - celebration
                if (navigator.vibrate) {
                    navigator.vibrate([100, 50, 100, 50, 100]);
                }
                setTotalToday(t => t + newCount);
                return 0; // Reset after completing set
            }
            return newCount;
        });
    };

    // Handle target change
    const handleTargetChange = (newTarget) => {
        setTarget(newTarget);
        setCount(0);
    };

    // Switch dhikr
    const handleDhikrChange = (index) => {
        setSelectedDhikr(index);
        setCount(0);
        setTarget(dhikrList[index].recommended);
    };

    return (
        <div className="tasbih-page">
            <div className="tasbih-header">
                <h1>📿 {language === 'ar' ? 'المسبحة الرقمية' : 'Digital Tasbih'}</h1>
                <p>{language === 'ar' ? 'الذكر راحة القلوب' : 'Remembrance is the comfort of hearts'}</p>
            </div>

            {/* Dhikr Selection */}
            <div className="dhikr-selector">
                <div className="dhikr-tabs">
                    {dhikrList.map((dhikr, idx) => (
                        <button
                            key={idx}
                            className={`dhikr-tab ${selectedDhikr === idx ? 'active' : ''}`}
                            onClick={() => handleDhikrChange(idx)}
                        >
                            {language === 'ar' ? dhikr.ar.split(' ')[0] : dhikr.en.split(' ')[0]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Current Dhikr Display */}
            <div className="current-dhikr">
                <h2 className="dhikr-arabic">{currentDhikr.ar}</h2>
                <p className="dhikr-transliteration">{currentDhikr.en}</p>
                <p className="dhikr-meaning">{currentDhikr.meaning}</p>
                <div className="dhikr-reward">
                    ✨ {language === 'ar' ? currentDhikr.reward : currentDhikr.rewardEn}
                </div>
            </div>

            {/* Counter Display */}
            <div className="counter-section">
                <div className="counter-ring" onClick={handleCount}>
                    <svg viewBox="0 0 100 100">
                        <circle
                            className="counter-bg"
                            cx="50"
                            cy="50"
                            r="45"
                        />
                        <circle
                            className="counter-progress"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{
                                strokeDasharray: `${(count / target) * 283} 283`
                            }}
                        />
                    </svg>
                    <div className="counter-inner">
                        <span className="count-number">{count}</span>
                        <span className="count-target">/ {target}</span>
                    </div>
                </div>
                <p className="tap-hint">{language === 'ar' ? 'اضغط للعد' : 'Tap to count'}</p>
            </div>

            {/* Target Selection */}
            <div className="target-selector">
                <span>{language === 'ar' ? 'الهدف:' : 'Target:'}</span>
                <div className="target-buttons">
                    {[33, 99, 100, 1000].map(t => (
                        <button
                            key={t}
                            className={`target-btn ${target === t ? 'active' : ''}`}
                            onClick={() => handleTargetChange(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="tasbih-controls">
                <button className="reset-btn" onClick={() => setCount(0)}>
                    🔄 {language === 'ar' ? 'إعادة' : 'Reset'}
                </button>
                <button
                    className={`vibrate-btn ${vibration ? 'active' : ''}`}
                    onClick={() => setVibration(!vibration)}
                >
                    📳 {vibration
                        ? (language === 'ar' ? 'الاهتزاز نشط' : 'Vibration On')
                        : (language === 'ar' ? 'الاهتزاز متوقف' : 'Vibration Off')}
                </button>
            </div>

            {/* Today's Stats */}
            <div className="today-stats">
                <h3>{language === 'ar' ? 'إحصائيات اليوم' : 'Today\'s Stats'}</h3>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-value">{totalToday + count}</span>
                        <span className="stat-label">{language === 'ar' ? 'إجمالي الأذكار' : 'Total Dhikr'}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{Math.floor((totalToday + count) / 100)}</span>
                        <span className="stat-label">{language === 'ar' ? 'مجموعات مكتملة' : 'Sets Complete'}</span>
                    </div>
                </div>
            </div>

            {/* Expert Tip */}
            <div className="expert-tip">
                <h4>💡 {language === 'ar' ? 'نصيحة' : 'Tip'}</h4>
                <p>
                    {language === 'ar'
                        ? 'الذكر باللسان والقلب معاً أعظم أجراً. حاول أن تتدبر معنى ما تقول.'
                        : 'Dhikr with tongue AND heart together is greater in reward. Try to reflect on the meaning.'}
                </p>
            </div>
        </div>
    );
};

export default TasbihCounter;
