import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './MizanScale.css';

const MizanScale = () => {
    const { settings, user } = useAppStore();
    const lang = settings?.language || 'ar';

    // In a real app, this would recalculate daily based on recent logs
    // For now, we simulate "live" tipping
    const hasanatWeight = (user?.hasanat || 1000) % 5000; // Mock weight
    const [tilt, setTilt] = useState(0); // -45 (bad) to 45 (good)

    useEffect(() => {
        // Calculate tilt based on "balance"
        // Let's assume a hypothetical "sin weight" for demo (or just use hasanat growth)
        // If hasanat increases, tilt right (good side in visual)
        const calculatedTilt = Math.min(45, Math.max(-45, (hasanatWeight / 100) * 5));
        setTilt(calculatedTilt);
    }, [hasanatWeight]);

    return (
        <div className="mizan-widget">
            <div className="mizan-header">
                <h3>{lang === 'ar' ? 'الميزان اليومي' : 'Daily Mizan'}</h3>
                <span className="live-badge">LIVE</span>
            </div>

            <div className="scale-container">
                <div className="scale-base"></div>
                <div className="scale-pillar"></div>

                <div
                    className="scale-beam"
                    style={{ transform: `rotate(${tilt}deg)` }}
                >
                    {/* Left Pan (Sins/Light) */}
                    <div className="scale-pan left">
                        <div className="pan-chain"></div>
                        <div className="pan-dish">
                            <span className="pan-label">⛔</span>
                        </div>
                    </div>

                    {/* Right Pan (Hasanat/Heavy) */}
                    <div className="scale-pan right">
                        <div className="pan-chain"></div>
                        <div className="pan-dish gold">
                            <span className="pan-label">✨</span>
                            <div className="hasanat-particles"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mizan-status">
                {tilt > 10 ? (
                    <span className="status-good">
                        {lang === 'ar' ? 'موازينك ثقيلة، استمر!' : 'Your scales are heavy, keep going!'}
                    </span>
                ) : tilt < -10 ? (
                    <span className="status-bad">
                        {lang === 'ar' ? 'انتبه! استغفر الآن' : 'Warning! Seek forgiveness now'}
                    </span>
                ) : (
                    <span className="status-neutral">
                        {lang === 'ar' ? 'متوازن.. سابق بالخيرات' : 'Balanced.. Race for good'}
                    </span>
                )}
            </div>
        </div>
    );
};

export default MizanScale;
