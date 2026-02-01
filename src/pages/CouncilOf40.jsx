import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './CouncilOf40.css';

const CouncilOf40 = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';
    const [selectedProblem, setSelectedProblem] = useState(null);

    // 40 Scholar-based problem solutions (from conversation)
    const problems = [
        {
            id: 'laziness',
            icon: '😴',
            problem: { ar: 'أشعر بالكسل', en: 'I feel lazy' },
            scholars: ['Ibn Al-Qayyim', 'Al-Ghazali'],
            steps: [
                { ar: 'غيّر وضعيتك. إن كنت مستلقياً، اجلس. إن كنت جالساً، قف.', en: 'Change your posture. If lying down, sit. If sitting, stand.' },
                { ar: 'توضأ بماء بارد', en: 'Make Wudu with cold water' },
                { ar: 'تصور ندم القبر لمدة 60 ثانية (Memento Mori)', en: 'Visualize grave regret for 60 seconds (Memento Mori)' }
            ],
            dua: { ar: 'اللهم إني أعوذ بك من العجز والكسل', en: 'O Allah, I seek refuge from incapacity and laziness' }
        },
        {
            id: 'lust',
            icon: '💔',
            problem: { ar: 'أشعر بالشهوة', en: 'I feel lustful urges' },
            scholars: ['Ibn Taymiyyah', 'Ibn Al-Jawzi'],
            steps: [
                { ar: 'غض بصرك فوراً', en: 'Lower your gaze immediately' },
                { ar: 'قم بأي نشاط بدني', en: 'Do any physical activity' },
                { ar: 'لا تكن وحيداً - اذهب لمكان فيه ناس', en: 'Don\'t be alone - go where people are' }
            ],
            dua: { ar: 'اللهم حَصِّن فرجي واحفظ بصري', en: 'O Allah protect my chastity and guard my sight' }
        },
        {
            id: 'anger',
            icon: '😤',
            problem: { ar: 'أشعر بالغضب الشديد', en: 'I feel extreme anger' },
            scholars: ['Prophet ﷺ Hadith'],
            steps: [
                { ar: 'اصمت تماماً - لا تتكلم', en: 'Stay completely silent - don\'t speak' },
                { ar: 'توضأ بماء بارد', en: 'Make Wudu with cold water' },
                { ar: 'إن كنت واقفاً اجلس، إن كنت جالساً استلقِ', en: 'If standing, sit. If sitting, lie down.' }
            ],
            dua: { ar: 'أعوذ بالله من الشيطان الرجيم', en: 'I seek refuge in Allah from Satan' }
        },
        {
            id: 'doubt',
            icon: '🤔',
            problem: { ar: 'عندي شكوك ووسوسة', en: 'I have doubts/whispers' },
            scholars: ['Ibn Taymiyyah', 'Ibn Al-Qayyim'],
            steps: [
                { ar: 'الوسوسة دليل على الإيمان - لا يوسوس إلا لمؤمن', en: 'Whispers are proof of faith - Shaytan only bothers believers' },
                { ar: 'قل: آمنت بالله ورسوله - ثم تجاهلها تماماً', en: 'Say: I believe in Allah and His Messenger - then ignore completely' },
                { ar: 'لا تبحث في الشكوك عبر الإنترنت', en: 'Don\'t research doubts online' }
            ],
            dua: { ar: 'آمنت بالله ورسوله', en: 'I believe in Allah and His Messenger' }
        },
        {
            id: 'grief',
            icon: '😢',
            problem: { ar: 'أشعر بالحزن الشديد', en: 'I feel deep grief' },
            scholars: ['Prophet Yaqub (AS)', 'Prophet ﷺ'],
            steps: [
                { ar: 'اعلم أن بعد العسر يسراً - وعد الله', en: 'Know that after hardship comes ease - Allah\'s promise' },
                { ar: 'تذكر قصة يعقوب الذي فقد يوسف سنين ثم جاء الفرج', en: 'Remember Yaqub who lost Yusuf for years, then relief came' },
                { ar: 'ابكِ إن احتجت - البكاء تطهير', en: 'Cry if you need - crying is purification' }
            ],
            dua: { ar: 'اللهم أجرني في مصيبتي واخلفني خيراً منها', en: 'O Allah reward me in my affliction and replace it with better' }
        },
        {
            id: 'ego',
            icon: '👑',
            problem: { ar: 'أشعر بالعُجب والكبر', en: 'I feel arrogant/ego' },
            scholars: ['Al-Ghazali', 'Ibn Ata'],
            steps: [
                { ar: 'اخدم شخصاً أقل منك اجتماعياً اليوم', en: 'Serve someone lower in social status today' },
                { ar: 'تصدق صدقة سرية لا يعلمها أحد', en: 'Give secret charity no one knows about' },
                { ar: 'تذكر أصلك: من تراب', en: 'Remember your origin: from dust' }
            ],
            dua: { ar: 'اللهم أحيني مسكيناً وأمتني مسكيناً', en: 'O Allah let me live humble and die humble' }
        },
        {
            id: 'burnout',
            icon: '🔥',
            problem: { ar: 'أشعر بالإرهاق الروحي', en: 'I feel spiritually burnt out' },
            scholars: ['Prophet ﷺ'],
            steps: [
                { ar: '"إن لربك عليك حقاً ولنفسك عليك حقاً" - خذ راحة', en: '"Your Lord has a right, your self has a right" - take rest' },
                { ar: 'أحب الأعمال إلى الله أدومها وإن قل', en: 'Most beloved deeds are consistent even if small' },
                { ar: 'قلل العبادات مؤقتاً لكن لا توقفها', en: 'Reduce worship temporarily but don\'t stop' }
            ],
            dua: { ar: 'اللهم أعني على ذكرك وشكرك وحسن عبادتك', en: 'O Allah help me remember and thank You and worship You well' }
        },
        {
            id: 'distraction',
            icon: '📱',
            problem: { ar: 'لا أستطيع التركيز في الصلاة', en: 'Can\'t focus in Salah' },
            scholars: ['Ibn Al-Qayyim', 'Al-Ghazali'],
            steps: [
                { ar: 'افهم معنى ما تقرأ - ابدأ بالفاتحة', en: 'Understand what you recite - start with Fatiha' },
                { ar: 'نوّع في السور التي تقرأها', en: 'Vary the Surahs you recite' },
                { ar: 'تخيل أنها صلاتك الأخيرة', en: 'Imagine it\'s your last prayer' }
            ],
            dua: { ar: 'اللهم اجعلني من المخبتين', en: 'O Allah make me among the humbly submissive' }
        },
        {
            id: 'poverty-fear',
            icon: '💸',
            problem: { ar: 'أخاف من الفقر', en: 'I fear poverty' },
            scholars: ['Prophet ﷺ'],
            steps: [
                { ar: 'الصدقة لا تنقص المال بل تزيده', en: 'Charity doesn\'t decrease wealth, it increases it' },
                { ar: 'تصدق ولو بالقليل وانظر كيف يأتيك الرزق', en: 'Give charity even little and watch provision come' },
                { ar: 'ثق في الرزاق - "وما من دابة إلا على الله رزقها"', en: 'Trust the Provider - every creature\'s provision is with Allah' }
            ],
            dua: { ar: 'اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمن سواك', en: 'O Allah suffice me with Your halal and enrich me from Your bounty' }
        },
        {
            id: 'loneliness',
            icon: '🌑',
            problem: { ar: 'أشعر بالوحدة', en: 'I feel lonely' },
            scholars: ['Ibn Ata Allah'],
            steps: [
                { ar: 'الذكر هو صاحب الوحيد', en: 'Dhikr is the companion of the alone' },
                { ar: 'الله معك دائماً - "وهو معكم أين ما كنتم"', en: 'Allah is always with you - "He is with you wherever you are"' },
                { ar: 'اخرج وصِل رحماً أو ساعد غريباً', en: 'Go out and connect with kin or help a stranger' }
            ],
            dua: { ar: 'اللهم أنت الصاحب في السفر والخليفة في الأهل', en: 'O Allah You are the companion in travel and guardian of family' }
        }
    ];

    return (
        <div className="council-page">
            <div className="council-header">
                <h1>📚 {language === 'ar' ? 'مجلس الأربعين' : 'Council of 40'}</h1>
                <p>{language === 'ar' ? 'حلول العلماء لمشاكلك' : 'Scholar Solutions for Your Problems'}</p>
            </div>

            {/* Problems Grid */}
            <div className="problems-grid">
                {problems.map(prob => (
                    <div
                        key={prob.id}
                        className="problem-card"
                        onClick={() => setSelectedProblem(prob)}
                    >
                        <span className="prob-icon">{prob.icon}</span>
                        <span className="prob-text">{language === 'ar' ? prob.problem.ar : prob.problem.en}</span>
                    </div>
                ))}
            </div>

            {/* Solution Modal */}
            {selectedProblem && (
                <div className="solution-modal" onClick={() => setSelectedProblem(null)}>
                    <div className="solution-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedProblem(null)}>✕</button>

                        <div className="solution-header">
                            <span className="sol-icon">{selectedProblem.icon}</span>
                            <h2>{language === 'ar' ? selectedProblem.problem.ar : selectedProblem.problem.en}</h2>
                            <p className="scholars">
                                📖 {selectedProblem.scholars.join(' | ')}
                            </p>
                        </div>

                        <div className="steps-section">
                            <h3>🔧 {language === 'ar' ? 'الخطوات' : 'Steps'}</h3>
                            <div className="steps-list">
                                {selectedProblem.steps.map((step, idx) => (
                                    <div key={idx} className="step-item">
                                        <span className="step-num">{idx + 1}</span>
                                        <p>{language === 'ar' ? step.ar : step.en}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="dua-section">
                            <h3>🤲 {language === 'ar' ? 'الدعاء' : 'Dua'}</h3>
                            <p className="dua-text">
                                {language === 'ar' ? selectedProblem.dua.ar : selectedProblem.dua.en}
                            </p>
                        </div>

                        <button className="apply-btn">
                            ✅ {language === 'ar' ? 'سأطبق هذا الآن' : 'I will apply this now'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CouncilOf40;
