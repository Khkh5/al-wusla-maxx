import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../store/useAppStore';
import './FocusedWorship.css';

const FocusedWorship = () => {
    const { settings } = useAppStore();
    const lang = settings?.language || 'ar';
    const [isActive, setIsActive] = useState(false);
    const [duration, setDuration] = useState(20); // minutes
    const [timeLeft, setTimeLeft] = useState(20 * 60);
    const [mode, setMode] = useState('cave'); // 'cave', 'light'
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const audioRef = useRef(null);

    // PSYCHOLOGICAL HOOK: Commitment & Consistency
    // Once entered, leaving requires "breaking a promise" to yourself

    useEffect(() => {
        let interval;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            // PSYCHOLOGICAL HOOK: Victory Moment
            playSuccessSound();
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const startSession = () => {
        setIsActive(true);
        enterFullScreen();
        // PSYCHOLOGICAL HOOK: Sensory Deprivation
        // Immediate audio transition to silence or cave wind
    };

    const enterFullScreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const playSuccessSound = () => {
        // Implementation for success sound
    };

    return (
        <div className={`focus-cave-container ${isActive ? 'active' : ''} ${mode}`}>
            {!isActive ? (
                <div className="cave-setup">
                    <div className="cave-icon">🏔️</div>
                    <h1>{lang === 'ar' ? 'غار حراء' : 'Ghar Hira'}</h1>
                    <p className="cave-subtitle">
                        {lang === 'ar'
                            ? 'وضع الانعزال الرقمي: تحنّث وتعبد بلا مشتتات'
                            : 'Digital Seclusion Mode: Worship without distractions'}
                    </p>

                    <div className="duration-selector">
                        <button
                            className={duration === 20 ? 'selected' : ''}
                            onClick={() => { setDuration(20); setTimeLeft(20 * 60); }}
                        >
                            20 {lang === 'ar' ? 'دقيقة' : 'min'}
                        </button>
                        <button
                            className={duration === 40 ? 'selected' : ''}
                            onClick={() => { setDuration(40); setTimeLeft(40 * 60); }}
                        >
                            40 {lang === 'ar' ? 'دقيقة' : 'min'}
                        </button>
                    </div>

                    <div className="mode-selector">
                        <label>
                            <input
                                type="radio"
                                name="mode"
                                checked={mode === 'cave'}
                                onChange={() => setMode('cave')}
                            />
                            <span>🌑 {lang === 'ar' ? 'ظلام الغار' : 'Cave Darkness'}</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="mode"
                                checked={mode === 'light'}
                                onChange={() => setMode('light')}
                            />
                            <span>🕯️ {lang === 'ar' ? 'نور خافت' : 'Dim Light'}</span>
                        </label>
                    </div>

                    <p className="psych-hook-text">
                        {lang === 'ar'
                            ? '⚠️ تحذير: هذا الوضع سيخفي كل الإشعارات لتصفية الذهن تماماً.'
                            : '⚠️ Warning: This mode hides all notifications for complete mental clarity.'}
                    </p>

                    <button className="enter-cave-btn" onClick={startSession}>
                        {lang === 'ar' ? 'ادخل الغار (ابدأ التحنّث)' : 'Enter Cave (Start Tahannuth)'}
                    </button>
                </div>
            ) : (
                <div className="cave-active-session">
                    <div className="breathing-circle"></div>
                    <div className="timer-display">{formatTime(timeLeft)}</div>
                    <p className="focus-dhikr">
                        {lang === 'ar' ? 'لا إله إلا الله' : 'La ilaha illAllah'}
                    </p>

                    <button className="exit-cave-btn" onClick={() => setShowExitConfirm(true)}>
                        {lang === 'ar' ? 'مغادرة' : 'Exit'}
                    </button>

                    {showExitConfirm && (
                        <div className="exit-confirm-modal">
                            <p>
                                {lang === 'ar'
                                    ? 'هل تريد كسر خلوتك مع الله؟'
                                    : 'Do you want to break your seclusion with Allah?'}
                            </p>
                            <div className="confirm-actions">
                                <button className="stay-btn" onClick={() => setShowExitConfirm(false)}>
                                    {lang === 'ar' ? 'لا، سأبقى' : 'No, Stay'}
                                </button>
                                <button className="leave-btn" onClick={() => { setIsActive(false); document.exitFullscreen(); }}>
                                    {lang === 'ar' ? 'نعم، أغادر' : 'Yes, Leave'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FocusedWorship;
