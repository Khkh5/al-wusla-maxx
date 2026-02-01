import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './ProgressEditor.css';

const ProgressEditor = () => {
    const { settings, user, setUser } = useAppStore();
    const language = settings?.language || 'ar';

    const [showConfirm, setShowConfirm] = useState(null);
    const [customValue, setCustomValue] = useState('');
    const [activeTab, setActiveTab] = useState('progress');

    // Progress data from store
    const progressData = {
        hasanat: user?.hasanat || 0,
        quranPages: user?.quranPages || 0,
        prayers: user?.prayers || 0,
        fasts: user?.fasts || 0,
        sadaqah: user?.sadaqah || 0,
        tasbih: user?.tasbih || 0,
    };

    const progressItems = [
        { key: 'hasanat', icon: '✨', ar: 'الحسنات', en: 'Hasanat', value: progressData.hasanat },
        { key: 'quranPages', icon: '📖', ar: 'صفحات القرآن', en: 'Quran Pages', value: progressData.quranPages },
        { key: 'prayers', icon: '🕌', ar: 'الصلوات', en: 'Prayers', value: progressData.prayers },
        { key: 'fasts', icon: '🌙', ar: 'أيام الصيام', en: 'Fasting Days', value: progressData.fasts },
        { key: 'sadaqah', icon: '❤️', ar: 'مرات الصدقة', en: 'Charity Times', value: progressData.sadaqah },
        { key: 'tasbih', icon: '📿', ar: 'التسبيحات', en: 'Tasbih Count', value: progressData.tasbih },
    ];

    // Update progress value
    const updateProgress = (key, value) => {
        const newValue = Math.max(0, parseInt(value) || 0);
        setUser({ ...user, [key]: newValue });
        // Also save to localStorage
        const savedProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
        savedProgress[key] = newValue;
        localStorage.setItem('userProgress', JSON.stringify(savedProgress));
    };

    // Reset single item
    const resetItem = (key) => {
        updateProgress(key, 0);
        setShowConfirm(null);
    };

    // Reset all progress
    const resetAll = () => {
        progressItems.forEach(item => {
            updateProgress(item.key, 0);
        });
        setShowConfirm(null);
    };

    // 10 Expert Suggestions for UX/Auth
    const expertSuggestions = [
        {
            icon: '🔐',
            title: { ar: 'كلمة مرور قوية', en: 'Strong Password' },
            desc: { ar: 'استخدم 8 أحرف على الأقل مع رقم ورمز خاص', en: 'Use at least 8 chars with number and special character' }
        },
        {
            icon: '📧',
            title: { ar: 'بريد إلكتروني صحيح', en: 'Valid Email' },
            desc: { ar: 'تأكد من كتابة بريدك الإلكتروني بشكل صحيح للاسترداد', en: 'Make sure email is correct for recovery' }
        },
        {
            icon: '🔄',
            title: { ar: 'إعادة تحميل الصفحة', en: 'Refresh Page' },
            desc: { ar: 'إذا واجهت مشكلة، جرب إعادة تحميل الصفحة', en: 'If you face issues, try refreshing the page' }
        },
        {
            icon: '🌐',
            title: { ar: 'اتصال الإنترنت', en: 'Internet Connection' },
            desc: { ar: 'تأكد من اتصالك بالإنترنت للمزامنة', en: 'Ensure internet connection for sync' }
        },
        {
            icon: '🗑️',
            title: { ar: 'مسح الذاكرة المؤقتة', en: 'Clear Cache' },
            desc: { ar: 'امسح ذاكرة المتصفح المؤقتة إذا واجهت أخطاء', en: 'Clear browser cache if facing errors' }
        },
        {
            icon: '📱',
            title: { ar: 'تحديث المتصفح', en: 'Update Browser' },
            desc: { ar: 'استخدم أحدث إصدار من المتصفح للحصول على أفضل تجربة', en: 'Use latest browser version for best experience' }
        },
        {
            icon: '👤',
            title: { ar: 'اسم مستخدم فريد', en: 'Unique Username' },
            desc: { ar: 'اختر اسماً مميزاً غير مستخدم من قبل', en: 'Choose a unique name not taken before' }
        },
        {
            icon: '🔒',
            title: { ar: 'تسجيل الخروج الآمن', en: 'Safe Logout' },
            desc: { ar: 'سجل الخروج دائماً من الأجهزة المشتركة', en: 'Always logout from shared devices' }
        },
        {
            icon: '💾',
            title: { ar: 'النسخ الاحتياطي', en: 'Backup Data' },
            desc: { ar: 'بياناتك محفوظة تلقائياً على الخادم', en: 'Your data is auto-saved to server' }
        },
        {
            icon: '🆘',
            title: { ar: 'طلب المساعدة', en: 'Ask for Help' },
            desc: { ar: 'تواصل مع الدعم إذا واجهت مشكلة مستمرة', en: 'Contact support for persistent issues' }
        }
    ];

    return (
        <div className="progress-editor">
            <div className="editor-header">
                <h2>⚙️ {language === 'ar' ? 'إدارة البيانات' : 'Data Management'}</h2>
            </div>

            {/* Tabs */}
            <div className="editor-tabs">
                <button
                    className={`tab-btn ${activeTab === 'progress' ? 'active' : ''}`}
                    onClick={() => setActiveTab('progress')}
                >
                    📊 {language === 'ar' ? 'التقدم' : 'Progress'}
                </button>
                <button
                    className={`tab-btn ${activeTab === 'tips' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tips')}
                >
                    💡 {language === 'ar' ? 'نصائح' : 'Tips'}
                </button>
            </div>

            {activeTab === 'progress' && (
                <>
                    {/* Progress Items */}
                    <div className="progress-items">
                        {progressItems.map(item => (
                            <div key={item.key} className="progress-item">
                                <div className="item-info">
                                    <span className="item-icon">{item.icon}</span>
                                    <span className="item-name">{language === 'ar' ? item.ar : item.en}</span>
                                </div>
                                <div className="item-controls">
                                    <button
                                        className="control-btn minus"
                                        onClick={() => updateProgress(item.key, item.value - 1)}
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        value={item.value}
                                        onChange={(e) => updateProgress(item.key, e.target.value)}
                                        className="value-input"
                                    />
                                    <button
                                        className="control-btn plus"
                                        onClick={() => updateProgress(item.key, item.value + 1)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="reset-btn"
                                        onClick={() => setShowConfirm(item.key)}
                                    >
                                        🔄
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Reset All Button */}
                    <button
                        className="reset-all-btn"
                        onClick={() => setShowConfirm('all')}
                    >
                        🗑️ {language === 'ar' ? 'إعادة تعيين الكل' : 'Reset All Progress'}
                    </button>

                    {/* Netlify Deploy Info */}
                    <div className="deploy-info">
                        <h3>🌐 {language === 'ar' ? 'معلومات النشر' : 'Deployment Info'}</h3>
                        <p>
                            {language === 'ar'
                                ? 'عند النشر على Netlify، سيتمكن أصدقاؤك من إنشاء حساباتهم الخاصة والتنافس. كل مستخدم سيكون له بياناته الخاصة المخزنة على الخادم.'
                                : 'When deployed to Netlify, your friends can create their own accounts and compete. Each user will have their own data stored on the server.'}
                        </p>
                        <div className="deploy-checklist">
                            <div className="check-item">✅ {language === 'ar' ? 'حسابات منفصلة لكل مستخدم' : 'Separate accounts per user'}</div>
                            <div className="check-item">✅ {language === 'ar' ? 'لوحة متصدرين مباشرة' : 'Live leaderboard'}</div>
                            <div className="check-item">✅ {language === 'ar' ? 'مزامنة البيانات' : 'Data sync'}</div>
                            <div className="check-item">✅ {language === 'ar' ? 'تنافس حقيقي' : 'Real competition'}</div>
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'tips' && (
                <div className="tips-section">
                    <h3>💡 {language === 'ar' ? '10 نصائح من الخبراء' : '10 Expert Suggestions'}</h3>
                    <div className="tips-grid">
                        {expertSuggestions.map((tip, idx) => (
                            <div key={idx} className="tip-card">
                                <span className="tip-icon">{tip.icon}</span>
                                <div className="tip-content">
                                    <strong>{language === 'ar' ? tip.title.ar : tip.title.en}</strong>
                                    <p>{language === 'ar' ? tip.desc.ar : tip.desc.en}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Confirm Modal */}
            {showConfirm && (
                <div className="confirm-modal">
                    <div className="confirm-content">
                        <h3>⚠️ {language === 'ar' ? 'تأكيد' : 'Confirm'}</h3>
                        <p>
                            {showConfirm === 'all'
                                ? (language === 'ar' ? 'هل أنت متأكد من إعادة تعيين كل التقدم؟' : 'Are you sure you want to reset all progress?')
                                : (language === 'ar' ? 'هل أنت متأكد من إعادة تعيين هذا العنصر؟' : 'Are you sure you want to reset this item?')
                            }
                        </p>
                        <div className="confirm-buttons">
                            <button className="cancel-btn" onClick={() => setShowConfirm(null)}>
                                {language === 'ar' ? 'إلغاء' : 'Cancel'}
                            </button>
                            <button
                                className="confirm-btn"
                                onClick={() => showConfirm === 'all' ? resetAll() : resetItem(showConfirm)}
                            >
                                {language === 'ar' ? 'تأكيد' : 'Confirm'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgressEditor;
