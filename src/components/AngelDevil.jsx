import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { angelDevilScenarios, fourthWallBreaks } from '../data/islamicContent';
import './AngelDevil.css';

const AngelDevil = () => {
    const { settings } = useAppStore();
    const [currentScenario, setCurrentScenario] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [showFourthWall, setShowFourthWall] = useState(false);
    const [currentBreak, setCurrentBreak] = useState(null);

    const language = settings?.language || 'ar';
    const scenario = angelDevilScenarios[currentScenario];

    // Check for 4th wall break triggers
    useEffect(() => {
        const hour = new Date().getHours();
        // VIP Hour check (2-3:30 AM)
        if (hour >= 2 && hour < 4) {
            const vipBreak = fourthWallBreaks.find(b => b.id === 'vip-hour');
            if (vipBreak && !localStorage.getItem('vip-hour-shown-today')) {
                setCurrentBreak(vipBreak);
                setShowFourthWall(true);
                localStorage.setItem('vip-hour-shown-today', new Date().toDateString());
            }
        }
    }, []);

    const handleChoice = (choice) => {
        setSelectedChoice(choice);

        // Show witness check after angel choice
        if (choice === 'angel') {
            setTimeout(() => {
                const witnessBreak = fourthWallBreaks.find(b => b.id === 'witness-check');
                if (witnessBreak) {
                    setCurrentBreak(witnessBreak);
                    setShowFourthWall(true);
                }
            }, 2000);
        }
    };

    const nextScenario = () => {
        setSelectedChoice(null);
        setCurrentScenario((prev) => (prev + 1) % angelDevilScenarios.length);
    };

    const closeFourthWall = () => {
        setShowFourthWall(false);
        setCurrentBreak(null);
    };

    return (
        <div className="angel-devil-container">
            {/* Fourth Wall Break Modal */}
            {showFourthWall && currentBreak && (
                <div className="fourth-wall-overlay">
                    <div className="fourth-wall-modal">
                        <div className="glitch-effect">
                            <h2>{language === 'ar' ? currentBreak.titleAr : currentBreak.titleEn}</h2>
                        </div>
                        <p className="fourth-wall-message">
                            {language === 'ar' ? currentBreak.messageAr : currentBreak.messageEn}
                        </p>
                        <button className="btn-understand" onClick={closeFourthWall}>
                            {language === 'ar' ? 'فهمت...' : 'I understand...'}
                        </button>
                    </div>
                </div>
            )}

            <div className="angel-devil-header">
                <h1>⚔️ {language === 'ar' ? 'معركة الضمير' : 'Battle of Conscience'}</h1>
                <p>{language === 'ar' ? 'من ستختار أن تسمع؟' : 'Who will you choose to listen to?'}</p>
            </div>

            {scenario && (
                <div className="scenario-card">
                    <div className="scenario-title">
                        <span className="scenario-icon">💭</span>
                        <h2>{language === 'ar' ? scenario.scenarioAr : scenario.scenarioEn}</h2>
                    </div>

                    <div className="voices-container">
                        {/* Devil Voice */}
                        <div
                            className={`voice-card devil ${selectedChoice === 'devil' ? 'selected rejected' : ''}`}
                            onClick={() => !selectedChoice && handleChoice('devil')}
                        >
                            <div className="voice-header">
                                <span className="voice-icon">😈</span>
                                <h3>{language === 'ar' ? 'الوسواس' : 'The Whisper'}</h3>
                            </div>
                            <p className="voice-text">
                                {language === 'ar' ? scenario.devil.ar : scenario.devil.en}
                            </p>
                            {selectedChoice === 'devil' && (
                                <div className="choice-result bad">
                                    ⚠️ {language === 'ar' ? 'هذا خداع!' : 'This is deception!'}
                                </div>
                            )}
                        </div>

                        <div className="vs-divider">VS</div>

                        {/* Angel Voice */}
                        <div
                            className={`voice-card angel ${selectedChoice === 'angel' ? 'selected approved' : ''}`}
                            onClick={() => !selectedChoice && handleChoice('angel')}
                        >
                            <div className="voice-header">
                                <span className="voice-icon">👼</span>
                                <h3>{language === 'ar' ? 'الإلهام' : 'The Inspiration'}</h3>
                            </div>
                            <p className="voice-text">
                                {language === 'ar' ? scenario.angel.ar : scenario.angel.en}
                            </p>
                            {selectedChoice === 'angel' && (
                                <div className="choice-result good">
                                    ✨ {language === 'ar' ? 'اللهم ثبتني!' : 'May Allah strengthen me!'}
                                </div>
                            )}
                        </div>
                    </div>

                    {selectedChoice && (
                        <button className="btn-next" onClick={nextScenario}>
                            {language === 'ar' ? 'السيناريو التالي ←' : 'Next Scenario →'}
                        </button>
                    )}
                </div>
            )}

            {/* Scenario Counter */}
            <div className="scenario-counter">
                {angelDevilScenarios.map((_, idx) => (
                    <span
                        key={idx}
                        className={`counter-dot ${idx === currentScenario ? 'active' : ''}`}
                        onClick={() => { setCurrentScenario(idx); setSelectedChoice(null); }}
                    />
                ))}
            </div>

            {/* Educational Note */}
            <div className="educational-note">
                <h4>💡 {language === 'ar' ? 'هل تعلم؟' : 'Did you know?'}</h4>
                <p>
                    {language === 'ar'
                        ? 'كل منا ملك على كتفه الأيمن يكتب الحسنات، وملك على الأيسر يكتب السيئات. الإنسان هو من يختار.'
                        : 'Each of us has an angel on the right recording good deeds, and one on the left recording sins. The human is the one who chooses.'}
                </p>
            </div>
        </div>
    );
};

export default AngelDevil;
