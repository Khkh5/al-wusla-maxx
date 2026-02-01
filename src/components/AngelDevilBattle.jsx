import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './AngelDevilBattle.css';

const AngelDevilBattle = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    const [activeScenario, setActiveScenario] = useState(0);
    const [angelWins, setAngelWins] = useState(0);
    const [devilDefeated, setDevilDefeated] = useState(false);
    const [swipeProgress, setSwipeProgress] = useState(50);

    // Battle scenarios with Angel vs Devil whispers
    const scenarios = [
        {
            situation: { ar: 'عندي كسل عن التراويح', en: 'Feeling lazy about Taraweeh' },
            devil: {
                ar: 'قدمك تؤلمك. صليت أمس. الإمام يطيل القراءة. ارتح قليلاً وشاهد المسلسل، الله غفور رحيم.',
                en: 'Your feet hurt. You prayed yesterday. The Imam reads too long. Rest and watch a show, Allah is forgiving.'
            },
            angel: {
                ar: 'الألم يذهب والأجر يبقى. هذه الركعة قد تكون هي المنجية. هل تبيع الجنة بحلقة مسلسل؟ قم الآن.',
                en: 'The pain goes, the reward stays. This Rakah might be your salvation. Will you sell Jannah for a TV episode? Rise now.'
            },
            action: { ar: 'قم للصلاة', en: 'Get up to pray' }
        },
        {
            situation: { ar: 'أريد ترك السحور والنوم', en: 'Want to skip Suhoor and sleep' },
            devil: {
                ar: 'النوم لذيذ.. اشرب ماء فقط ونم. السحور كله تمر وماء، ليس مهماً.',
                en: 'Sleep is sweet.. Just drink water and sleep. Suhoor is just dates and water, not important.'
            },
            angel: {
                ar: 'تسحروا فإن في السحور بركة. تمرة واحدة تفرق بين صيام المؤمن وغيره. قم واستمتع بهدوء الفجر.',
                en: 'Have Suhoor for in it is blessing. One date makes the difference. Rise and enjoy the peaceful dawn.'
            },
            action: { ar: 'استيقظ للسحور', en: 'Wake up for Suhoor' }
        },
        {
            situation: { ar: 'أريد التصدق لكن أخاف الحاجة', en: 'Want to give charity but fear poverty' },
            devil: {
                ar: 'ستحتاج هذا المال للعيد. الأسعار غالية. تصدق السنة القادمة عندما تكون أغنى.',
                en: 'You\'ll need this money for Eid. Prices are high. Give charity next year when you\'re richer.'
            },
            angel: {
                ar: 'ما نقص مال من صدقة. المال الذي تخرجه هو الوحيد الذي سيبقى لك. جرّب ثقتك بالله.',
                en: 'Charity never decreased wealth. The money you give is the only investment that stays. Test your trust in Allah.'
            },
            action: { ar: 'تصدق الآن', en: 'Give charity now' }
        },
        {
            situation: { ar: 'شخص أغضبني وأريد الرد', en: 'Someone angered me, I want to respond' },
            devil: {
                ar: 'أهان كرامتك! رد عليه الكلمة بعشرة! لا تكن ضعيفاً أمام الناس.',
                en: 'He insulted your dignity! Reply with ten words! Don\'t look weak in front of others.'
            },
            angel: {
                ar: 'إني صائم. القوة هي أن تملك نفسك الآن. العفو عند المقدرة. اكظم الغيظ وخذ الأجر.',
                en: 'I am fasting. Real strength is controlling yourself now. Forgiveness when capable. Swallow anger and take reward.'
            },
            action: { ar: 'اكظم الغيظ', en: 'Control your anger' }
        },
        {
            situation: { ar: 'أريد تأخير قراءة القرآن', en: 'Want to delay Quran reading' },
            devil: {
                ar: 'اقرأ لاحقاً، الوقت طويل. شاهد هذا الفيديو القصير أولاً ثم ابدأ.',
                en: 'Read later, plenty of time. Watch this short video first then start.'
            },
            angel: {
                ar: 'كل حرف بحسنة والحسنة بعشر أمثالها. ابدأ بآية واحدة فقط، وستجد نفسك تكمل صفحة.',
                en: 'Every letter is a reward multiplied by ten. Start with just one verse, and you\'ll find yourself finishing a page.'
            },
            action: { ar: 'افتح المصحف', en: 'Open the Quran' }
        }
    ];

    const currentScenario = scenarios[activeScenario];

    const handleSwipe = (direction) => {
        if (direction === 'right') {
            // Angel wins
            setSwipeProgress(prev => Math.min(100, prev + 25));
            if (swipeProgress >= 75) {
                setDevilDefeated(true);
                setAngelWins(prev => prev + 1);
                setTimeout(() => {
                    setDevilDefeated(false);
                    setSwipeProgress(50);
                    setActiveScenario((activeScenario + 1) % scenarios.length);
                }, 2000);
            }
        } else {
            // Devil gaining
            setSwipeProgress(prev => Math.max(0, prev - 10));
        }
    };

    // Victory message
    const getVictoryMessage = () => {
        if (angelWins >= 5) return { ar: '🏆 أسد الإرادة', en: '🏆 Lion of Willpower' };
        if (angelWins >= 3) return { ar: '⚔️ محارب النفس', en: '⚔️ Soul Warrior' };
        return { ar: '🌟 بداية قوية', en: '🌟 Strong Start' };
    };

    return (
        <div className="battle-page">
            <div className="battle-header">
                <h1>⚔️ {language === 'ar' ? 'معركة النفس' : 'Soul Battle'}</h1>
                <div className="wins-counter">
                    {language === 'ar' ? 'انتصارات' : 'Wins'}: {angelWins}
                </div>
            </div>

            {/* Situation */}
            <div className="situation-card">
                <span className="situation-icon">🤔</span>
                <p>{language === 'ar' ? currentScenario.situation.ar : currentScenario.situation.en}</p>
            </div>

            {/* Battle Arena */}
            <div className="battle-arena">
                {/* Devil Side */}
                <div className={`side devil-side ${swipeProgress < 30 ? 'winning' : ''}`}>
                    <div className="side-header">
                        <span className="side-icon">😈</span>
                        <span>{language === 'ar' ? 'الهوى' : 'Desire'}</span>
                    </div>
                    <p className="whisper devil-whisper">
                        {language === 'ar' ? currentScenario.devil.ar : currentScenario.devil.en}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="battle-progress">
                    <div
                        className="progress-indicator"
                        style={{ left: `${swipeProgress}%` }}
                    >
                        ⚔️
                    </div>
                    <div className="progress-bar">
                        <div
                            className="angel-progress"
                            style={{ width: `${swipeProgress}%` }}
                        />
                    </div>
                </div>

                {/* Angel Side */}
                <div className={`side angel-side ${swipeProgress > 70 ? 'winning' : ''}`}>
                    <div className="side-header">
                        <span className="side-icon">😇</span>
                        <span>{language === 'ar' ? 'الفطرة' : 'Fitrah'}</span>
                    </div>
                    <p className="whisper angel-whisper">
                        {language === 'ar' ? currentScenario.angel.ar : currentScenario.angel.en}
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="battle-actions">
                <button
                    className="action-btn devil-btn"
                    onClick={() => handleSwipe('left')}
                >
                    {language === 'ar' ? 'لاحقاً...' : 'Later...'}
                </button>
                <button
                    className="action-btn angel-btn"
                    onClick={() => handleSwipe('right')}
                >
                    {language === 'ar' ? currentScenario.action.ar : currentScenario.action.en}
                </button>
            </div>

            {/* Victory Overlay */}
            {devilDefeated && (
                <div className="victory-overlay">
                    <div className="victory-content">
                        <span className="victory-icon">✨</span>
                        <h2>{language === 'ar' ? 'انتصرت على نفسك!' : 'You defeated your ego!'}</h2>
                        <p>{language === 'ar' ? '+100 حسنة' : '+100 Hasanat'}</p>
                    </div>
                </div>
            )}

            {/* 4th Wall Break */}
            <div className="fourth-wall">
                <p>
                    {language === 'ar'
                        ? 'هذه محاكاة بسيطة. المعركة الحقيقية تحدث في قلبك كل لحظة. الله يراك الآن.'
                        : 'This is a simple simulation. The real battle happens in your heart every moment. Allah sees you now.'}
                </p>
            </div>

            {/* Badge */}
            <div className="battle-badge">
                <span>{language === 'ar' ? getVictoryMessage().ar : getVictoryMessage().en}</span>
            </div>
        </div>
    );
};

export default AngelDevilBattle;
