import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './Settings.css';

const Settings = () => {
    const { settings, user, logout } = useAppStore();
    const language = settings?.language || 'ar';

    const [localSettings, setLocalSettings] = useState({
        language: settings?.language || 'ar',
        theme: settings?.theme || 'taqwa-teal',
        notifications: {
            prayerTime: true,
            prayerReminder: true,
            fajrSpecial: true,
            suhoor: true,
            iftar: true,
            quranReminder: false,
            adhkarMorning: true,
            adhkarEvening: true,
            dailyChallenge: false,
        },
        prayerCalculation: 'MuslimWorldLeague',
        asrCalculation: 'Standard',
    });

    const themes = [
        { id: 'taqwa-teal', nameAr: 'تقوى تيل', nameEn: 'Taqwa Teal', color: '#008080' },
        { id: 'midnight-blue', nameAr: 'أزرق ليلي', nameEn: 'Midnight Blue', color: '#191970' },
        { id: 'royal-gold', nameAr: 'ذهبي ملكي', nameEn: 'Royal Gold', color: '#d4af37' },
        { id: 'emerald-green', nameAr: 'أخضر زمردي', nameEn: 'Emerald Green', color: '#10b981' },
        { id: 'sunset-orange', nameAr: 'برتقالي غروب', nameEn: 'Sunset Orange', color: '#f97316' },
        { id: 'deep-purple', nameAr: 'بنفسجي عميق', nameEn: 'Deep Purple', color: '#7c3aed' },
    ];

    const prayerMethods = [
        { id: 'MuslimWorldLeague', nameAr: 'رابطة العالم الإسلامي', nameEn: 'Muslim World League' },
        { id: 'Egyptian', nameAr: 'الهيئة المصرية', nameEn: 'Egyptian Authority' },
        { id: 'Karachi', nameAr: 'جامعة كراتشي', nameEn: 'Karachi University' },
        { id: 'UmmAlQura', nameAr: 'أم القرى', nameEn: 'Umm Al-Qura' },
        { id: 'Dubai', nameAr: 'دبي', nameEn: 'Dubai' },
        { id: 'MoonsightingCommittee', nameAr: 'لجنة رؤية الهلال', nameEn: 'Moonsighting Committee' },
    ];

    const handleToggleNotification = (key) => {
        setLocalSettings(prev => ({
            ...prev,
            notifications: {
                ...prev.notifications,
                [key]: !prev.notifications[key]
            }
        }));
    };

    const handleEnableAllNotifications = async () => {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                new Notification(language === 'ar' ? 'تم تفعيل الإشعارات!' : 'Notifications Enabled!');
            }
        }
    };

    const handleExportData = () => {
        const data = {
            user: user,
            settings: localSettings,
            exportDate: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'alwusla-backup.json';
        a.click();
    };

    return (
        <div className="settings-page">
            <div className="settings-header">
                <h1>⚙️ {language === 'ar' ? 'الإعدادات' : 'Settings'}</h1>
            </div>

            {/* Language */}
            <div className="settings-section">
                <h3>🌐 {language === 'ar' ? 'اللغة' : 'Language'}</h3>
                <div className="language-toggle">
                    <button
                        className={`lang-btn ${localSettings.language === 'ar' ? 'active' : ''}`}
                        onClick={() => setLocalSettings(prev => ({ ...prev, language: 'ar' }))}
                    >
                        العربية
                    </button>
                    <button
                        className={`lang-btn ${localSettings.language === 'en' ? 'active' : ''}`}
                        onClick={() => setLocalSettings(prev => ({ ...prev, language: 'en' }))}
                    >
                        English
                    </button>
                </div>
            </div>

            {/* Theme */}
            <div className="settings-section">
                <h3>🎨 {language === 'ar' ? 'السمة' : 'Theme'}</h3>
                <div className="theme-grid">
                    {themes.map(theme => (
                        <button
                            key={theme.id}
                            className={`theme-btn ${localSettings.theme === theme.id ? 'active' : ''}`}
                            style={{ '--theme-color': theme.color }}
                            onClick={() => setLocalSettings(prev => ({ ...prev, theme: theme.id }))}
                        >
                            <span className="theme-preview" style={{ background: theme.color }}></span>
                            <span className="theme-name">{language === 'ar' ? theme.nameAr : theme.nameEn}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Notifications */}
            <div className="settings-section">
                <h3>🔔 {language === 'ar' ? 'الإشعارات' : 'Notifications'}</h3>
                <button className="enable-all-btn" onClick={handleEnableAllNotifications}>
                    {language === 'ar' ? 'تفعيل إشعارات المتصفح' : 'Enable Browser Notifications'}
                </button>

                <div className="notification-list">
                    {Object.entries(localSettings.notifications).map(([key, value]) => {
                        const labels = {
                            prayerTime: { ar: 'تنبيه وقت الصلاة', en: 'Prayer Time Alert' },
                            prayerReminder: { ar: 'تذكير قبل 15 دقيقة', en: '15 min Reminder' },
                            fajrSpecial: { ar: 'تنبيه خاص للفجر', en: 'Special Fajr Alert' },
                            suhoor: { ar: 'تنبيه السحور', en: 'Suhoor Alert' },
                            iftar: { ar: 'تنبيه الإفطار', en: 'Iftar Alert' },
                            quranReminder: { ar: 'تذكير القرآن', en: 'Quran Reminder' },
                            adhkarMorning: { ar: 'أذكار الصباح', en: 'Morning Adhkar' },
                            adhkarEvening: { ar: 'أذكار المساء', en: 'Evening Adhkar' },
                            dailyChallenge: { ar: 'التحدي اليومي', en: 'Daily Challenge' },
                        };
                        return (
                            <div key={key} className="notification-item">
                                <span>{labels[key]?.[language] || key}</span>
                                <button
                                    className={`toggle-btn ${value ? 'active' : ''}`}
                                    onClick={() => handleToggleNotification(key)}
                                >
                                    <span className="toggle-slider"></span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Prayer Calculation */}
            <div className="settings-section">
                <h3>🕌 {language === 'ar' ? 'طريقة حساب الصلاة' : 'Prayer Calculation'}</h3>
                <select
                    value={localSettings.prayerCalculation}
                    onChange={(e) => setLocalSettings(prev => ({ ...prev, prayerCalculation: e.target.value }))}
                    className="settings-select"
                >
                    {prayerMethods.map(method => (
                        <option key={method.id} value={method.id}>
                            {language === 'ar' ? method.nameAr : method.nameEn}
                        </option>
                    ))}
                </select>
            </div>

            {/* User Info */}
            <div className="settings-section">
                <h3>👤 {language === 'ar' ? 'الحساب' : 'Account'}</h3>
                <div className="user-info">
                    <p><strong>{language === 'ar' ? 'الاسم:' : 'Name:'}</strong> {user?.username || 'Guest'}</p>
                    <p><strong>{language === 'ar' ? 'الحسنات:' : 'Hasanat:'}</strong> {user?.hasanat || 0}</p>
                    <p><strong>{language === 'ar' ? 'المستوى:' : 'Level:'}</strong> {user?.level || 'Bronze'}</p>
                </div>
            </div>

            {/* Actions */}
            <div className="settings-actions">
                <button className="action-btn export" onClick={handleExportData}>
                    📤 {language === 'ar' ? 'تصدير البيانات' : 'Export Data'}
                </button>
                <button className="action-btn logout" onClick={logout}>
                    🚪 {language === 'ar' ? 'تسجيل الخروج' : 'Logout'}
                </button>
            </div>

            {/* App Info */}
            <div className="app-info">
                <p>AL-WUSLA v2.0</p>
                <p>الوُصلة - الرابط الأبدي</p>
            </div>
        </div>
    );
};

export default Settings;
