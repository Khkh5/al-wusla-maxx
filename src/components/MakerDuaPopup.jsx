import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './MakerDuaPopup.css';

const MakerDuaPopup = () => {
    const { settings } = useAppStore();
    const lang = settings?.language || 'ar';
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already seen the dua
        const hasSeen = localStorage.getItem('hasSeenMakerDua');

        // Show after a short delay if not seen
        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000); // 2 second delay after app load
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('hasSeenMakerDua', 'true');
    };

    const handleAmeen = () => {
        // Play soft success sound if available
        handleClose();
        // Maybe trigger a small confetti or "Heart" animation?
    };

    if (!isVisible) return null;

    return (
        <div className="dua-popup-overlay">
            <div className="dua-popup-content animate-pop">
                <div className="dua-icon">🤲</div>
                <h2>{lang === 'ar' ? 'دعوة لصانع هذا العمل' : 'A Dua for the Maker'}</h2>

                <p className="dua-text">
                    {lang === 'ar'
                        ? 'اللهم اجعل هذا العمل صدقة جارية لصانعه، واغفر له ولوالديه، وافتح عليه فتوح العارفين، وبارك له في وقته وعمله.'
                        : 'O Allah, make this work a continuous charity (Sadaqah Jariyah) for its maker, forgive him and his parents, grant him the opening of the knowers, and bless his time and work.'}
                </p>

                <div className="dua-actions">
                    <button className="ameen-btn" onClick={handleAmeen}>
                        {lang === 'ar' ? 'آمين' : 'Ameen'}
                    </button>
                    <button className="skip-btn" onClick={handleClose}>
                        {lang === 'ar' ? 'تخطي' : 'Skip'} (ESC)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MakerDuaPopup;
