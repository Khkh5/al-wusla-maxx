import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './FastingTracker.css';

const FastingTracker = () => {
    const { settings, prayerTimes } = useAppStore();
    const language = settings?.language || 'ar';
    const times = prayerTimes?.times || {};

    const [currentTime, setCurrentTime] = useState(new Date());
    const [fastingState, setFastingState] = useState('fasting'); // 'fasting', 'eating'
    const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [fastingHours, setFastingHours] = useState(0);
    const [hydrationLevel, setHydrationLevel] = useState(0);
    const [autophagyActive, setAutophagyActive] = useState(false);

    // Parse time string to minutes
    const timeToMinutes = (timeStr) => {
        if (!timeStr) return 0;
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Update timer every second
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);

            const nowMinutes = now.getHours() * 60 + now.getMinutes();
            const fajrMinutes = timeToMinutes(times.fajr || '05:00');
            const maghribMinutes = timeToMinutes(times.maghrib || '18:00');

            // Determine fasting state
            if (nowMinutes >= fajrMinutes && nowMinutes < maghribMinutes) {
                setFastingState('fasting');

                // Calculate countdown to Iftar
                const remaining = maghribMinutes - nowMinutes;
                const hours = Math.floor(remaining / 60);
                const minutes = remaining % 60;
                const seconds = 59 - now.getSeconds();
                setCountdown({ hours, minutes, seconds });

                // Calculate fasting hours
                const fasted = nowMinutes - fajrMinutes;
                setFastingHours(fasted / 60);

                // Autophagy kicks in after 16 hours
                setAutophagyActive(fasted >= 960); // 16 hours in minutes
            } else {
                setFastingState('eating');

                // Calculate countdown to Suhoor end (Fajr)
                let remaining;
                if (nowMinutes >= maghribMinutes) {
                    remaining = (24 * 60 - nowMinutes) + fajrMinutes;
                } else {
                    remaining = fajrMinutes - nowMinutes;
                }
                const hours = Math.floor(remaining / 60);
                const minutes = remaining % 60;
                const seconds = 59 - now.getSeconds();
                setCountdown({ hours, minutes, seconds });
                setFastingHours(0);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [times]);

    // Hydration tips for Suhoor
    const hydrationTips = [
        { ar: 'اشرب 2-3 أكواب ماء ببطء', en: 'Drink 2-3 glasses of water slowly' },
        { ar: 'تجنب الكافيين والملح الزائد', en: 'Avoid caffeine and excess salt' },
        { ar: 'تناول الخضروات والفواكه', en: 'Eat vegetables and fruits' },
        { ar: 'التمر مع الحليب مثالي', en: 'Dates with milk is ideal' },
    ];

    // Iftar tips
    const iftarTips = [
        { ar: 'ابدأ بالتمر والماء', en: 'Start with dates and water' },
        { ar: 'صلِّ المغرب ثم أكمل', en: 'Pray Maghrib then continue' },
        { ar: 'كُل ببطء وباعتدال', en: 'Eat slowly and moderately' },
        { ar: 'تجنب الإفراط في المقليات', en: 'Avoid excessive fried foods' },
    ];

    const formatTime = (num) => num.toString().padStart(2, '0');

    return (
        <div className="fasting-page">
            <div className="fasting-header">
                <h1>🌙 {language === 'ar' ? 'متتبع الصيام' : 'Fasting Tracker'}</h1>
                <p>
                    {fastingState === 'fasting'
                        ? (language === 'ar' ? 'أنت صائم الآن' : 'You are currently fasting')
                        : (language === 'ar' ? 'وقت الإفطار' : 'Eating time')}
                </p>
            </div>

            {/* Main Countdown */}
            <div className={`countdown-card ${fastingState}`}>
                <div className="countdown-label">
                    {fastingState === 'fasting'
                        ? (language === 'ar' ? '🌆 الوقت المتبقي للإفطار' : '🌆 Time until Iftar')
                        : (language === 'ar' ? '🌅 الوقت المتبقي للإمساك' : '🌅 Time until Suhoor ends')}
                </div>
                <div className="countdown-timer">
                    <div className="time-block">
                        <span className="time-value">{formatTime(countdown.hours)}</span>
                        <span className="time-unit">{language === 'ar' ? 'ساعة' : 'hrs'}</span>
                    </div>
                    <span className="time-sep">:</span>
                    <div className="time-block">
                        <span className="time-value">{formatTime(countdown.minutes)}</span>
                        <span className="time-unit">{language === 'ar' ? 'دقيقة' : 'min'}</span>
                    </div>
                    <span className="time-sep">:</span>
                    <div className="time-block">
                        <span className="time-value">{formatTime(countdown.seconds)}</span>
                        <span className="time-unit">{language === 'ar' ? 'ثانية' : 'sec'}</span>
                    </div>
                </div>
            </div>

            {/* Fasting Progress */}
            {fastingState === 'fasting' && (
                <div className="fasting-progress">
                    <h3>{language === 'ar' ? '⏱️ مدة الصيام' : '⏱️ Fasting Duration'}</h3>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${(fastingHours / 16) * 100}%` }}
                        />
                        <div className="progress-markers">
                            <span className="marker" style={{ left: '0%' }}>0h</span>
                            <span className="marker" style={{ left: '50%' }}>8h</span>
                            <span className="marker autophagy" style={{ left: '100%' }}>16h</span>
                        </div>
                    </div>
                    <p className="fasting-hours">
                        {Math.floor(fastingHours)}h {Math.round((fastingHours % 1) * 60)}m {language === 'ar' ? 'صائماً' : 'fasted'}
                    </p>

                    {/* Autophagy indicator */}
                    <div className={`autophagy-indicator ${autophagyActive ? 'active' : ''}`}>
                        <span className="autophagy-icon">🔥</span>
                        <span>
                            {autophagyActive
                                ? (language === 'ar' ? 'الالتهام الذاتي نشط!' : 'Autophagy Active!')
                                : (language === 'ar' ? `${Math.max(0, 16 - fastingHours).toFixed(1)}h حتى الالتهام الذاتي` : `${Math.max(0, 16 - fastingHours).toFixed(1)}h until Autophagy`)}
                        </span>
                    </div>
                </div>
            )}

            {/* Tips Section */}
            <div className="tips-section">
                <h3>
                    {fastingState === 'fasting'
                        ? (language === 'ar' ? '🥤 نصائح للإفطار' : '🥤 Iftar Tips')
                        : (language === 'ar' ? '🌙 نصائح للسحور' : '🌙 Suhoor Tips')}
                </h3>
                <div className="tips-list">
                    {(fastingState === 'fasting' ? iftarTips : hydrationTips).map((tip, idx) => (
                        <div key={idx} className="tip-item">
                            <span className="tip-number">{idx + 1}</span>
                            <span>{language === 'ar' ? tip.ar : tip.en}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
                <div className="stat-card">
                    <span className="stat-icon">🌅</span>
                    <span className="stat-label">{language === 'ar' ? 'الفجر' : 'Fajr'}</span>
                    <span className="stat-value">{times.fajr || '--:--'}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-icon">🌆</span>
                    <span className="stat-label">{language === 'ar' ? 'المغرب' : 'Maghrib'}</span>
                    <span className="stat-value">{times.maghrib || '--:--'}</span>
                </div>
            </div>

            {/* Dua */}
            <div className="iftar-dua">
                <p className="dua-arabic">ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ</p>
                <p className="dua-translation">
                    {language === 'ar'
                        ? 'دعاء الإفطار'
                        : 'Thirst has gone, the veins are moist, and the reward is assured, if Allah wills'}
                </p>
            </div>
        </div>
    );
};

export default FastingTracker;
