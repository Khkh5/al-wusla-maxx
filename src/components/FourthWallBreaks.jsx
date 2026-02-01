import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './FourthWallBreaks.css';

const FourthWallBreaks = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';
    const [currentBreak, setCurrentBreak] = useState(0);
    const [showBreak, setShowBreak] = useState(false);

    // 5 Fourth Wall Break Moments
    const breaks = [
        {
            id: 'glitch',
            trigger: 'App opened/closed too many times',
            icon: '📵',
            title: { ar: 'المقاطعة الرحيمة', en: 'The Compassionate Glitch' },
            message: {
                ar: 'أنا مجرد تطبيق، لا أملك لك نفعاً ولا ضراً. أنت تبحث عن شيء لا يمكن للهاتف أن يعطيك إياه. أغلقني، وتوضأ. الحل هناك، ليس هنا.',
                en: 'I am just an app. I cannot benefit or harm you. You are seeking something this phone cannot give. Close me and make Wudu. The answer is there, not here.'
            },
            action: { ar: 'حسناً، سأغلقك', en: 'Okay, I\'ll close you' }
        },
        {
            id: 'witness',
            trigger: 'After logging a major deed',
            icon: '✍️',
            title: { ar: 'تذكير الشهود', en: 'The Witnesses Reminder' },
            message: {
                ar: 'أنا سجلت هذا في قاعدة بيانات سحابية. ولكن، هناك من سجلها في كتاب لا يغادر صغيرة ولا كبيرة. لا تعتمد على توثيقي، اعتمد على توثيق الملائكة. هل كان قلبك حاضراً؟',
                en: 'I recorded this in a cloud database. But there is One who recorded it in a Book that misses nothing. Don\'t rely on my records. Rely on the Angels\' records. Was your heart present?'
            },
            action: { ar: 'نعم، الحمد لله', en: 'Yes, Alhamdulillah' }
        },
        {
            id: 'autopilot',
            trigger: 'Scrolling too fast through content',
            icon: '⏸️',
            title: { ar: 'كاشف الغفلة', en: 'The Autopilot Breaker' },
            message: {
                ar: 'لماذا تجري؟ هذه ليست تغريدات، هذا كلام النبوة. كل حرف هنا وزنه أثقل من جبل أحد. خذ نفساً.. واقرأ الحديث التالي بقلبك.',
                en: 'Why are you rushing? These are not tweets, this is Prophetic speech. Every letter here weighs more than Mount Uhud. Take a breath... and read the next Hadith with your heart.'
            },
            action: { ar: 'سأقرأ ببطء', en: 'I will read slowly' }
        },
        {
            id: 'vip',
            trigger: 'App opened in last third of night (2-4 AM)',
            icon: '🌙',
            title: { ar: 'ساعة الخلوة', en: 'The VIP Hour' },
            message: {
                ar: 'المدينة كلها نائمة. الملايين في غفلة. الله اختارك أنت لتستيقظ الآن. هذه ليست صدفة، هذه دعوة خاصة. هل ستقبلها أم تعود للنوم؟',
                en: 'The whole city is asleep. Millions in heedlessness. Allah chose YOU to wake up now. This is not coincidence, it is a private invitation. Will you accept or go back to sleep?'
            },
            action: { ar: 'لبيك اللهم', en: 'Here I am, O Allah' }
        },
        {
            id: 'farewell',
            trigger: 'Last day of Ramadan',
            icon: '💔',
            title: { ar: 'الوداع الأخير', en: 'The Final Farewell' },
            message: {
                ar: 'رمضان انتهى. سأبقى في هاتفك كأيقونة صامتة حتى العام القادم.. إن كنا من الأحياء. ولكن ماذا عنك؟ هل تضمن أن تفتحني في رمضان القادم؟ هذه الصحيفة طويت، فاجعل الختام مسكاً.',
                en: 'Ramadan is over. I will stay as a silent icon until next year... if we are alive. But what about you? Can you guarantee you will open me next Ramadan? This page is closed, so make the ending beautiful.'
            },
            action: { ar: 'اللهم بلغنا رمضان', en: 'O Allah let us reach Ramadan' }
        }
    ];

    const activeBreak = breaks[currentBreak];

    const handleAction = () => {
        setShowBreak(false);
        setCurrentBreak((currentBreak + 1) % breaks.length);
    };

    const triggerBreak = (index) => {
        setCurrentBreak(index);
        setShowBreak(true);
    };

    return (
        <div className="breaks-page">
            <div className="breaks-header">
                <h1>🪞 {language === 'ar' ? 'كسر الجدار الرابع' : '4th Wall Breaks'}</h1>
                <p>{language === 'ar' ? 'لحظات الوعي العميق' : 'Moments of Deep Awareness'}</p>
            </div>

            {/* Break Types */}
            <div className="breaks-grid">
                {breaks.map((brk, idx) => (
                    <div
                        key={brk.id}
                        className="break-card"
                        onClick={() => triggerBreak(idx)}
                    >
                        <span className="break-icon">{brk.icon}</span>
                        <h3>{language === 'ar' ? brk.title.ar : brk.title.en}</h3>
                        <p className="trigger-text">
                            {brk.trigger}
                        </p>
                    </div>
                ))}
            </div>

            {/* Active Break Overlay */}
            {showBreak && (
                <div className="break-overlay">
                    <div className="break-content">
                        <div className="glitch-effect"></div>
                        <span className="break-big-icon">{activeBreak.icon}</span>
                        <h2>{language === 'ar' ? activeBreak.title.ar : activeBreak.title.en}</h2>
                        <p className="break-message">
                            {language === 'ar' ? activeBreak.message.ar : activeBreak.message.en}
                        </p>
                        <button className="break-action" onClick={handleAction}>
                            {language === 'ar' ? activeBreak.action.ar : activeBreak.action.en}
                        </button>
                    </div>
                </div>
            )}

            {/* Explanation */}
            <div className="breaks-info">
                <h3>{language === 'ar' ? '📖 ما هذا؟' : '📖 What is this?'}</h3>
                <p>
                    {language === 'ar'
                        ? 'هذه لحظات مصممة علمياً لتذكيرك بأن التطبيق مجرد أداة، وأن الرقيب الحقيقي هو الله. عندما تتكرر، تبني وعياً دائماً بحضور الله في حياتك.'
                        : 'These are scientifically designed moments to remind you that this app is just a tool, and the real Observer is Allah. When repeated, they build constant awareness of Allah\'s presence in your life.'}
                </p>
            </div>
        </div>
    );
};

export default FourthWallBreaks;
