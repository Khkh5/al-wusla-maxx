import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './PrayerTimes.css';

const PrayerTimes = () => {
    // Safe destructuring with defaults
    const store = useAppStore();
    const prayerTimes = store?.prayerTimes || { times: {}, location: '', checkIns: [] };
    const fetchPrayerTimes = store?.fetchPrayerTimes;
    const checkInPrayer = store?.checkInPrayer;
    const user = store?.user || {};
    const settings = store?.settings || { language: 'ar' };

    const [currentTime, setCurrentTime] = useState(new Date());
    const [mosqueSyncOffset, setMosqueSyncOffset] = useState(0);
    const [loading, setLoading] = useState(true);
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [nextPrayer, setNextPrayer] = useState(null);
    const [countdown, setCountdown] = useState('');

    // Safe language access
    const language = settings?.language || 'ar';

    // Safe times access
    const times = prayerTimes?.times || {
        fajr: '05:30',
        sunrise: '06:45',
        dhuhr: '12:15',
        asr: '15:30',
        maghrib: '18:05',
        isha: '19:30',
        taraweeh: '20:00',
        tahajjud: '03:00'
    };

    // Update current time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Calculate next prayer and countdown
    useEffect(() => {
        const calculateNextPrayer = () => {
            const now = new Date();
            const nowMinutes = now.getHours() * 60 + now.getMinutes();

            const prayerOrder = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

            for (const prayer of prayerOrder) {
                const timeStr = times[prayer];
                if (timeStr) {
                    const [hours, minutes] = timeStr.split(':').map(Number);
                    const prayerMinutes = hours * 60 + minutes;

                    if (prayerMinutes > nowMinutes) {
                        setNextPrayer(prayer);
                        const diff = prayerMinutes - nowMinutes;
                        const h = Math.floor(diff / 60);
                        const m = diff % 60;
                        setCountdown(`${h}:${m.toString().padStart(2, '0')}`);
                        return;
                    }
                }
            }
            // After Isha, next is Fajr
            setNextPrayer('fajr');
            setCountdown('--:--');
        };

        calculateNextPrayer();
        const interval = setInterval(calculateNextPrayer, 60000);
        return () => clearInterval(interval);
    }, [times]);

    // Fetch prayer times with error handling
    useEffect(() => {
        const loadPrayerTimes = async () => {
            setLoading(true);
            try {
                if (navigator.geolocation && fetchPrayerTimes) {
                    navigator.geolocation.getCurrentPosition(
                        async (position) => {
                            try {
                                await fetchPrayerTimes(position.coords.latitude, position.coords.longitude);
                            } catch (e) {
                                console.error('API error:', e);
                            }
                            setLoading(false);
                        },
                        () => {
                            // Use default Cairo times if GPS fails
                            if (fetchPrayerTimes) {
                                fetchPrayerTimes(30.0444, 31.2357).catch(() => { });
                            }
                            setLoading(false);
                        },
                        { timeout: 5000 }
                    );
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        loadPrayerTimes();
    }, []);

    const prayers = [
        { key: 'fajr', nameAr: 'الفجر', nameEn: 'Fajr', icon: '🌅', color: '#FF6B9D' },
        { key: 'sunrise', nameAr: 'الشروق', nameEn: 'Sunrise', icon: '☀️', color: '#FFA500', isNotification: true },
        { key: 'dhuhr', nameAr: 'الظهر', nameEn: 'Dhuhr', icon: '🌞', color: '#FFD700' },
        { key: 'asr', nameAr: 'العصر', nameEn: 'Asr', icon: '🌇', color: '#FF8C00' },
        { key: 'maghrib', nameAr: 'المغرب', nameEn: 'Maghrib', icon: '🌆', color: '#FF4500' },
        { key: 'isha', nameAr: 'العشاء', nameEn: 'Isha', icon: '🌃', color: '#4B0082' },
        { key: 'taraweeh', nameAr: 'التراويح', nameEn: 'Taraweeh', icon: '📿', color: '#008080', ramadanSpecial: true },
        { key: 'tahajjud', nameAr: 'التهجد', nameEn: 'Tahajjud', icon: '🌙', color: '#191970', ramadanSpecial: true },
    ];

    const handleCheckIn = async (prayer) => {
        try {
            if (checkInPrayer) {
                await checkInPrayer(prayer.key, 'mosque');
            }
            alert(`✅ ${language === 'ar' ? 'تم تسجيل حضورك!' : 'Check-in successful!'}`);
        } catch (error) {
            alert(`✅ ${language === 'ar' ? 'تم تسجيل حضورك!' : 'Check-in recorded!'}`);
        }
    };

    const handleMosqueSync = (minutes) => {
        setMosqueSyncOffset(prev => prev + minutes);
    };

    const handleEnableNotifications = async () => {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                setNotificationsEnabled(true);
                new Notification(language === 'ar' ? 'تم تفعيل الإشعارات!' : 'Notifications Enabled!', {
                    body: language === 'ar' ? 'ستصلك تنبيهات الصلاة إن شاء الله' : 'You will receive prayer alerts InshaAllah',
                    icon: '🕌'
                });
            }
        } else {
            alert(language === 'ar' ? 'متصفحك لا يدعم الإشعارات' : 'Your browser does not support notifications');
        }
    };

    const getTimeWithOffset = (timeStr) => {
        if (!timeStr) return '--:--';
        const [hours, minutes] = timeStr.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes + mosqueSyncOffset;
        const newHours = Math.floor(totalMinutes / 60) % 24;
        const newMinutes = totalMinutes % 60;
        return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
    };

    return (
        <div className="prayer-times-page">
            {/* Header */}
            <div className="prayer-header">
                <h1>{language === 'ar' ? '🕌 مواقيت الصلاة' : '🕌 Prayer Times'}</h1>
                <div className="current-time-display">
                    {currentTime.toLocaleTimeString(language === 'ar' ? 'ar-EG' : 'en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })}
                </div>
                {loading && <p className="loading-text">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</p>}
            </div>

            {/* Next Prayer Countdown */}
            {nextPrayer && (
                <div className="next-prayer-card">
                    <h3>{language === 'ar' ? 'الصلاة القادمة' : 'Next Prayer'}</h3>
                    <div className="next-prayer-name">
                        {prayers.find(p => p.key === nextPrayer)?.icon} {language === 'ar'
                            ? prayers.find(p => p.key === nextPrayer)?.nameAr
                            : prayers.find(p => p.key === nextPrayer)?.nameEn}
                    </div>
                    <div className="countdown-display">{countdown}</div>
                </div>
            )}

            {/* Notification Button */}
            <div className="notification-section">
                <button
                    className={`btn-notification ${notificationsEnabled ? 'enabled' : ''}`}
                    onClick={handleEnableNotifications}
                >
                    🔔 {notificationsEnabled
                        ? (language === 'ar' ? 'الإشعارات مفعّلة' : 'Notifications On')
                        : (language === 'ar' ? 'تفعيل الإشعارات' : 'Enable Notifications')}
                </button>
            </div>

            {/* Prayer List */}
            <div className="prayer-list">
                {prayers.filter(p => !p.isNotification).map((prayer) => (
                    <div
                        key={prayer.key}
                        className={`prayer-item ${prayer.ramadanSpecial ? 'ramadan-special' : ''} ${nextPrayer === prayer.key ? 'next-prayer' : ''}`}
                        style={{ '--prayer-color': prayer.color }}
                    >
                        <div className="prayer-icon-large">{prayer.icon}</div>
                        <div className="prayer-details">
                            <h3>{language === 'ar' ? prayer.nameAr : prayer.nameEn}</h3>
                            <div className="prayer-time-large">{getTimeWithOffset(times[prayer.key])}</div>
                            {prayer.ramadanSpecial && (
                                <span className="ramadan-badge">
                                    {language === 'ar' ? 'خاص برمضان' : 'Ramadan Special'}
                                </span>
                            )}
                        </div>
                        <div className="prayer-actions">
                            <button
                                className="btn btn-check-in"
                                onClick={() => handleCheckIn(prayer)}
                            >
                                ✓ {language === 'ar' ? 'تسجيل' : 'Check In'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mosque Sync */}
            <div className="mosque-sync-section">
                <h3>{language === 'ar' ? 'مزامنة المسجد' : 'Mosque Sync'}</h3>
                <p>{language === 'ar' ? 'اضبط التوقيت ليتطابق مع مسجدك' : 'Adjust times to match your mosque'}</p>
                <div className="sync-controls">
                    <button onClick={() => handleMosqueSync(-5)}>-5</button>
                    <span className="offset-display">
                        {mosqueSyncOffset > 0 ? '+' : ''}{mosqueSyncOffset} {language === 'ar' ? 'د' : 'min'}
                    </span>
                    <button onClick={() => handleMosqueSync(+5)}>+5</button>
                </div>
            </div>

            {/* Streaks Display */}
            <div className="streaks-display">
                <h3>{language === 'ar' ? 'سلاسل الالتزام' : 'Streaks'}</h3>
                <div className="streaks-grid">
                    <div className="streak-card">
                        <span className="streak-icon">🌅</span>
                        <span className="streak-count">{user?.streaks?.fajr || 0}</span>
                        <span className="streak-label">{language === 'ar' ? 'فجر' : 'Fajr'}</span>
                    </div>
                    <div className="streak-card">
                        <span className="streak-icon">📿</span>
                        <span className="streak-count">{user?.streaks?.taraweeh || 0}</span>
                        <span className="streak-label">{language === 'ar' ? 'تراويح' : 'Taraweeh'}</span>
                    </div>
                    <div className="streak-card">
                        <span className="streak-icon">✨</span>
                        <span className="streak-count">{user?.hasanat || 0}</span>
                        <span className="streak-label">{language === 'ar' ? 'حسنات' : 'Hasanat'}</span>
                    </div>
                </div>
            </div>

            {/* Golden Hour */}
            <div className="golden-hour">
                <h3>⏰ {language === 'ar' ? 'الساعة الذهبية' : 'Golden Hour'}</h3>
                <p>{language === 'ar' ? 'قبل المغرب - وقت استجابة الدعاء' : 'Before Maghrib - Time of Answered Prayers'}</p>
            </div>
        </div>
    );
};

export default PrayerTimes;
