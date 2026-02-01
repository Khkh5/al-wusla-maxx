import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { editablePageSettings } from '../utils/competitionHooks';
import './NarratorBubble.css';

const NarratorBubble = () => {
    const { settings, user, setUser } = useAppStore();
    const language = settings?.language || 'ar';
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);
    const [dismissed, setDismissed] = useState(false);
    const [mode, setMode] = useState('guide'); // 'guide', 'askEdit', 'editing', 'comfort'
    const [editValues, setEditValues] = useState({});
    const [comfortQuote, setComfortQuote] = useState(null);
    const [interactionCount, setInteractionCount] = useState(0);

    // Check if narrator was dismissed before
    useEffect(() => {
        const wasDismissed = localStorage.getItem('narratorDismissed');
        if (wasDismissed) setDismissed(true);
    }, []);

    // ESC key to dismiss
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') {
                if (mode === 'editing') {
                    setMode('guide');
                } else {
                    setVisible(false);
                }
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [mode]);

    // Global click listener for comfort quotes
    useEffect(() => {
        const handleInteraction = (e) => {
            // Check if user clicked on interactive elements
            const target = e.target;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.classList.contains('btn') ||
                target.classList.contains('card') ||
                target.closest('.ruling-card') ||
                target.closest('.myth-card') ||
                target.closest('.habit-card') ||
                target.closest('.reminder-card') ||
                target.closest('.list-item') ||
                target.closest('.challenge-card') ||
                target.closest('[data-comfort-trigger]');

            if (isInteractive && !dismissed) {
                setInteractionCount(prev => prev + 1);

                // Show comfort quote every 5 interactions
                if ((interactionCount + 1) % 5 === 0) {
                    const randomQuote = comfortQuotes[Math.floor(Math.random() * comfortQuotes.length)];
                    setComfortQuote(randomQuote);
                    setMode('comfort');
                    setVisible(true);

                    // Auto-hide after 5 seconds
                    setTimeout(() => {
                        if (mode === 'comfort') {
                            setMode('guide');
                            setComfortQuote(null);
                        }
                    }, 5000);
                }
            }
        };

        window.addEventListener('click', handleInteraction);
        return () => window.removeEventListener('click', handleInteraction);
    }, [interactionCount, dismissed, mode]);

    // Step-by-step narrator messages based on current page
    const narratorSteps = {
        '/welcome': [
            { ar: '🌙 مرحباً بك في الوُصلة!', en: '🌙 Welcome to Al-Wusla!' },
            { ar: 'اضغط "التالي" للتعرف على المميزات', en: 'Click "Next" to explore features' },
            { ar: 'أو اضغط "تخطي" للبدء مباشرة', en: 'Or click "Skip" to start directly' }
        ],
        '/login': [
            { ar: '🔐 سجل دخولك للتنافس مع أصدقائك', en: '🔐 Login to compete with friends' },
            { ar: 'ليس لديك حساب؟ اضغط "تسجيل"', en: 'No account? Click "Register"' },
            { ar: 'بياناتك آمنة ومشفرة 🔒', en: 'Your data is safe & encrypted 🔒' }
        ],
        '/register': [
            { ar: '✨ أنشئ حسابك في ثوانٍ', en: '✨ Create your account in seconds' },
            { ar: 'استخدم بريداً حقيقياً للاسترداد', en: 'Use a real email for recovery' },
            { ar: 'كلمة مرور قوية = أمان أكثر 💪', en: 'Strong password = more security 💪' }
        ],
        '/': [
            { ar: '📖 هذه صفحة القرآن الكريم', en: '📖 This is the Quran Reader' },
            { ar: 'اضغط على الأسهم للتنقل بين الصفحات', en: 'Use arrows to navigate pages' },
            { ar: 'اضغط "أتممت الصفحة" لكسب الحسنات! ✨', en: 'Click "Page Complete" to earn Hasanat! ✨' }
        ],
        '/hasanat': [
            { ar: '✨ هنا تشاهد حسناتك تتضاعف!', en: '✨ Watch your Hasanat multiply here!' },
            { ar: 'كل حسنة = ×10 أمثال على الأقل', en: 'Every good deed = at least 10x' },
            { ar: 'في رمضان قد تصل لـ ×700! 🌙', en: 'In Ramadan it can reach 700x! 🌙' }
        ],
        '/competition': [
            { ar: '🏆 تنافس مع أصدقائك هنا!', en: '🏆 Compete with friends here!' },
            { ar: 'شاهد ترتيبك في لوحة الشرف', en: 'See your rank on the leaderboard' },
            { ar: 'أرسل دعماً لصديق واكسب حسنات! ⚡', en: 'Boost a friend and earn Hasanat! ⚡' }
        ],
        '/habits': [
            { ar: '📝 أضف عاداتك اليومية هنا', en: '📝 Add your daily habits here' },
            { ar: 'حافظ على الـ Streak للحصول على أوسمة', en: 'Keep your Streak for badges' },
            { ar: 'العادة تتكون في 21 يوماً 💪', en: 'Habits form in 21 days 💪' }
        ],
        '/prayer': [
            { ar: '🕌 تتبع صلواتك هنا', en: '🕌 Track your prayers here' },
            { ar: 'صلاة الفجر = أعلى المكافآت', en: 'Fajr prayer = highest rewards' },
            { ar: 'حافظ على سلسلة الصلوات! 🔥', en: 'Keep your prayer streak! 🔥' }
        ],
        '/fasting': [
            { ar: '🌙 تتبع صيامك وصحتك', en: '🌙 Track your fast and health' },
            { ar: 'شاهد مؤشرات Autophagy و Ketosis', en: 'Watch Autophagy & Ketosis indicators' },
            { ar: 'اشرب الماء عند الإفطار! 💧', en: 'Drink water at Iftar! 💧' }
        ],
        '/health': [
            { ar: '💪 راقب صحتك أثناء الصيام', en: '💪 Monitor your health while fasting' },
            { ar: 'النوم الكافي = طاقة للعبادة', en: 'Enough sleep = energy for worship' },
            { ar: 'الترطيب مهم جداً! 💧', en: 'Hydration is very important! 💧' }
        ],
        default: [
            { ar: '🌟 استكشف هذه الصفحة', en: '🌟 Explore this page' },
            { ar: 'اضغط ESC لإخفاء هذه الفقاعة', en: 'Press ESC to hide this bubble' },
            { ar: 'استمتع برحلتك في رمضان! 🌙', en: 'Enjoy your Ramadan journey! 🌙' }
        ]
    };

    // ═══════════════════════════════════════════════════════════════
    // COMFORT QUOTES - Islamic encouragement when user interacts
    // ═══════════════════════════════════════════════════════════════
    const comfortQuotes = [
        { ar: '💚 الله يعلم أنك تحاول... وهذا يكفي', en: '💚 Allah knows you\'re trying... and that\'s enough' },
        { ar: '🤲 ربك يراك وهو راضٍ عنك', en: '🤲 Your Lord sees you and is pleased with you' },
        { ar: '💫 كل خطوة نحو الله تُحسب، حتى لو كانت صغيرة', en: '💫 Every step toward Allah counts, even small ones' },
        { ar: '🌙 من تعب اليوم، سيرتاح غداً إن شاء الله', en: '🌙 Who is tired today will rest tomorrow, in sha Allah' },
        { ar: '❤️ الله أرحم بك من أمك', en: '❤️ Allah is more merciful to you than your mother' },
        { ar: '✨ لا تقلل من حسنة واحدة، فربما تكون نجاتك', en: '✨ Don\'t belittle one good deed, it might be your salvation' },
        { ar: '🌸 الله يحب من يستمر، ولو بالقليل', en: '🌸 Allah loves consistency, even if it\'s little' },
        { ar: '💪 أنت أقوى مما تظن، والله معك', en: '💪 You\'re stronger than you think, and Allah is with you' },
        { ar: '🌟 هذه اللحظة من ذكرك لله... لن تُنسى أبداً', en: '🌟 This moment of remembering Allah... will never be forgotten' },
        { ar: '🕊️ استرح، فأنت في رحمة الله', en: '🕊️ Rest easy, you\'re in Allah\'s mercy' },
        { ar: '📖 كل آية تقرأها نور في قبرك', en: '📖 Every verse you read is light in your grave' },
        { ar: '🤍 مهما أخطأت، باب التوبة مفتوح', en: '🤍 No matter your mistakes, repentance\'s door is open' },
        { ar: '⭐ أنت من القِلة الذين يسعون للخير', en: '⭐ You\'re among the few who strive for good' },
        { ar: '🌺 الله فخور بك أنك تحاول', en: '🌺 Allah is proud you\'re trying' },
        { ar: '💎 هذه العبادة كنز لن تراه إلا يوم القيامة', en: '💎 This worship is a treasure you\'ll only see on Judgment Day' },
        { ar: '🌈 بعد كل عسر يسر، هذا وعد الله', en: '🌈 After every hardship comes ease, Allah\'s promise' },
        { ar: '🦋 تتحول بالتدريج، لا تستعجل على نفسك', en: '🦋 You\'re transforming gradually, don\'t rush yourself' },
        { ar: '☀️ نور قلبك يزداد مع كل طاعة', en: '☀️ Your heart\'s light increases with each obedience' },
        { ar: '🌿 الصبر صعب، لكن ثوابه بلا حساب', en: '🌿 Patience is hard, but its reward is without measure' },
        { ar: '💝 الله يحبك... فقط استمر', en: '💝 Allah loves you... just keep going' },
        { ar: '🎯 كل نية صادقة مكتوبة عند الله', en: '🎯 Every sincere intention is recorded with Allah' },
        { ar: '🌙 أنت أفضل مما كنت بالأمس', en: '🌙 You\'re better than you were yesterday' },
        { ar: '🏆 الفوز الحقيقي في الجنة، وأنت في الطريق', en: '🏆 Real victory is Paradise, and you\'re on the way' },
        { ar: '💐 شكراً لأنك تذكر الله في زمن الغفلة', en: '💐 Thank you for remembering Allah in times of heedlessness' },
        { ar: '🤲 دعاؤك مستجاب، فقط انتظر التوقيت المناسب', en: '🤲 Your dua is answered, just wait for the right timing' }
    ];

    const getSteps = () => {
        return narratorSteps[location.pathname] || narratorSteps.default;
    };

    const steps = getSteps();

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // After last step, ask if anything is wrong
            setMode('askEdit');
        }
    };

    const dismissPermanently = () => {
        localStorage.setItem('narratorDismissed', 'true');
        setDismissed(true);
        setVisible(false);
    };

    const handleEditResponse = (wantsToEdit) => {
        if (wantsToEdit) {
            setMode('editing');
            // Initialize edit values from user data
            const pageSettings = editablePageSettings[location.pathname];
            if (pageSettings) {
                const initialValues = {};
                pageSettings.editableFields.forEach(field => {
                    initialValues[field.key] = user?.[field.key] || 0;
                });
                setEditValues(initialValues);
            }
        } else {
            setVisible(false);
        }
    };

    const saveEdits = () => {
        // Save edits to user store
        const updatedUser = { ...user, ...editValues };
        setUser(updatedUser);

        // Also save to localStorage
        const savedProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
        Object.assign(savedProgress, editValues);
        localStorage.setItem('userProgress', JSON.stringify(savedProgress));

        setMode('guide');
        setVisible(false);
    };

    const updateEditValue = (key, value) => {
        setEditValues(prev => ({ ...prev, [key]: value }));
    };

    // Reset step when page changes
    useEffect(() => {
        setCurrentStep(0);
        setMode('guide');
        if (!dismissed) setVisible(true);
    }, [location.pathname]);

    if (!visible || dismissed) return null;

    const pageSettings = editablePageSettings[location.pathname];

    return (
        <div className={`narrator-bubble ${mode === 'editing' ? 'editing-mode' : ''} ${mode === 'comfort' ? 'comfort-mode' : ''}`}>
            <div className="narrator-avatar">
                {mode === 'editing' ? '⚙️' : mode === 'askEdit' ? '🤔' : mode === 'comfort' ? '💚' : '🧙‍♂️'}
            </div>
            <div className="narrator-content">
                {mode === 'comfort' && comfortQuote && (
                    <>
                        <p className="narrator-text comfort-text">
                            {language === 'ar' ? comfortQuote.ar : comfortQuote.en}
                        </p>
                        <div className="comfort-actions">
                            <button className="narrator-next comfort-btn" onClick={() => {
                                setMode('guide');
                                setComfortQuote(null);
                            }}>
                                {language === 'ar' ? 'جزاك الله خيراً 💚' : 'JazakAllah Khayr 💚'}
                            </button>
                        </div>
                    </>
                )}

                {mode === 'guide' && (
                    <>
                        <p className="narrator-text">
                            {language === 'ar' ? steps[currentStep].ar : steps[currentStep].en}
                        </p>
                        <div className="narrator-dots">
                            {steps.map((_, idx) => (
                                <span key={idx} className={`dot ${idx === currentStep ? 'active' : ''}`} />
                            ))}
                        </div>
                        <div className="narrator-actions">
                            <button className="narrator-next" onClick={nextStep}>
                                {currentStep < steps.length - 1
                                    ? (language === 'ar' ? 'التالي →' : 'Next →')
                                    : (language === 'ar' ? 'فهمت ✓' : 'Got it ✓')}
                            </button>
                            <button className="narrator-dismiss" onClick={dismissPermanently}>
                                {language === 'ar' ? 'لا تظهر مجدداً' : "Don't show again"}
                            </button>
                        </div>
                    </>
                )}

                {mode === 'askEdit' && (
                    <>
                        <p className="narrator-text ask-edit">
                            {language === 'ar'
                                ? '🔧 هل هناك شيء تريد تعديله أو تغييره أو إضافته؟'
                                : '🔧 Is there anything you want to edit, change, or add?'}
                        </p>
                        <div className="narrator-actions">
                            <button className="narrator-yes" onClick={() => handleEditResponse(true)}>
                                {language === 'ar' ? '✅ نعم، عدّل' : '✅ Yes, Edit'}
                            </button>
                            <button className="narrator-no" onClick={() => handleEditResponse(false)}>
                                {language === 'ar' ? '❌ لا، كل شيء صحيح' : '❌ No, all good'}
                            </button>
                        </div>
                    </>
                )}

                {mode === 'editing' && pageSettings && (
                    <>
                        <p className="narrator-text editing-title">
                            ⚙️ {language === 'ar' ? `تعديل ${pageSettings.name.ar}` : `Edit ${pageSettings.name.en}`}
                        </p>
                        <div className="edit-fields">
                            {pageSettings.editableFields.map(field => (
                                <div key={field.key} className="edit-field">
                                    <label>{language === 'ar' ? field.label.ar : field.label.en}</label>
                                    {field.type === 'number' && (
                                        <input
                                            type="number"
                                            value={editValues[field.key] || 0}
                                            min={field.min || 0}
                                            max={field.max || 99999}
                                            onChange={(e) => updateEditValue(field.key, parseInt(e.target.value) || 0)}
                                        />
                                    )}
                                    {field.type === 'time' && (
                                        <input
                                            type="time"
                                            value={editValues[field.key] || '00:00'}
                                            onChange={(e) => updateEditValue(field.key, e.target.value)}
                                        />
                                    )}
                                    {field.type === 'select' && (
                                        <select
                                            value={editValues[field.key] || field.options[0]}
                                            onChange={(e) => updateEditValue(field.key, e.target.value)}
                                        >
                                            {field.options.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="narrator-actions">
                            <button className="narrator-save" onClick={saveEdits}>
                                💾 {language === 'ar' ? 'حفظ التغييرات' : 'Save Changes'}
                            </button>
                            <button className="narrator-cancel" onClick={() => setMode('guide')}>
                                {language === 'ar' ? 'إلغاء' : 'Cancel'}
                            </button>
                        </div>
                    </>
                )}

                {mode === 'editing' && !pageSettings && (
                    <p className="narrator-text">
                        {language === 'ar'
                            ? 'لا توجد إعدادات قابلة للتعديل في هذه الصفحة'
                            : 'No editable settings on this page'}
                    </p>
                )}
            </div>
            <button className="narrator-close" onClick={() => setVisible(false)} title="ESC">
                ✕
            </button>
        </div>
    );
};

export default NarratorBubble;
