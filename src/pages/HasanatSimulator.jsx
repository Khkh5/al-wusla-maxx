import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './HasanatSimulator.css';

const HasanatSimulator = () => {
    const { user, incrementHasanat, settings } = useAppStore();
    const [activeAction, setActiveAction] = useState(null);
    const [explosionData, setExplosionData] = useState(null);

    const goodDeeds = [
        { id: 'dhikr', nameAr: 'ذكر الله', nameEn: 'Dhikr', icon: '📿', value: 1 },
        { id: 'quran', nameAr: 'قراءة القرآن', nameEn: 'Quran Reading', icon: '📖', value: 10 },
        { id: 'prayer', nameAr: 'صلاة', nameEn: 'Prayer', icon: '🕌', value: 25 },
        { id: 'charity', nameAr: 'صدقة', nameEn: 'Charity', icon: '💰', value: 50 },
        { id: 'smile', nameAr: 'ابتسامة', nameEn: 'Smile', icon: '😊', value: 1 },
        { id: 'kindness', nameAr: 'عمل صالح', nameEn: 'Good Deed', icon: '🤝', value: 5 },
    ];

    const handleGoodDeed = (deed) => {
        setActiveAction(deed.id);

        // Calculate multiplier (10% chance for 700x)
        const is700x = Math.random() < 0.1;
        const multiplier = is700x ? 700 : 10;
        const amount = deed.value * multiplier;

        incrementHasanat(amount, deed.id);

        setExplosionData({
            amount: amount,
            multiplier: multiplier,
            baseValue: deed.value
        });

        setTimeout(() => {
            setExplosionData(null);
            setActiveAction(null);
        }, 3000);
    };

    return (
        <div className="hasanat-simulator-page">
            <div className="simulator-header">
                <h1>✨ {settings?.language === 'ar' ? 'محاكي الرياضيات الإلهية' : 'Divine Math Simulator'}</h1>
                <div className="total-hasanat">
                    <span className="hasanat-value">{(user?.hasanat || 0).toLocaleString('ar-EG')}</span>
                    <span className="hasanat-label">{settings?.language === 'ar' ? 'حسنة' : 'Hasanat'}</span>
                </div>
            </div>

            {/* Good Deeds Grid */}
            <div className="good-deeds-grid">
                {goodDeeds.map((deed) => (
                    <button
                        key={deed.id}
                        className={`deed-button ${activeAction === deed.id ? 'active' : ''}`}
                        onClick={() => handleGoodDeed(deed)}
                        disabled={activeAction}
                    >
                        <div className="deed-icon">{deed.icon}</div>
                        <div className="deed-name">{settings?.language === 'ar' ? deed.nameAr : deed.nameEn}</div>
                        <div className="deed-value">+{deed.value}</div>
                    </button>
                ))}
            </div>

            {/* Light Reactor */}
            <div className="light-reactor">
                <div className="reactor-core">
                    <div className={`core-sphere ${explosionData ? 'active' : ''}`}>
                        ✨
                    </div>
                </div>
            </div>

            {/* Explosion Animation */}
            {explosionData && (
                <div className="hasanat-explosion-fullscreen">
                    <div className="explosion-container">
                        {Array.from({ length: explosionData.multiplier === 700 ? 20 : 10 }).map((_, i) => (
                            <div
                                key={i}
                                className={`particle ${explosionData.multiplier === 700 ? 'wheat' : 'gold'}`}
                                style={{
                                    '--angle': `${(360 / (explosionData.multiplier === 700 ? 20 : 10)) * i}deg`,
                                    '--distance': `${100 + Math.random() * 100}px`,
                                }}
                            />
                        ))}
                        <div className="explosion-text">
                            {explosionData.multiplier === 700 ? (
                                <div className="mega-multiplier">
                                    <div className="ayah">وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ</div>
                                    <div className="multiplier">×{explosionData.multiplier}</div>
                                    <div className="amount">+{explosionData.amount.toLocaleString('ar-EG')}</div>
                                </div>
                            ) : (
                                <div className="normal-multiplier">
                                    <div className="ayah">مَن جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا</div>
                                    <div className="multiplier">×{explosionData.multiplier}</div>
                                    <div className="amount">+{explosionData.amount.toLocaleString('ar-EG')}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Safe Vault */}
            <div className="safe-vault">
                <h3>🔒 {settings?.language === 'ar' ? 'المخزن الآمن' : 'Safe Vault'}</h3>
                <p>{settings?.language === 'ar'
                    ? 'كل حسنة تم حفظها. لا شيء يضيع عند الله'
                    : 'Every Hasanah is saved. Nothing is lost with Allah'}</p>
                <div className="vault-visual">
                    <div className="vault-icon">📦</div>
                    <div className="vault-count">{user?.totalGoodDeeds || 0} {settings?.language === 'ar' ? 'عمل صالح' : 'good deeds'}</div>
                </div>
            </div>
        </div>
    );
};

export default HasanatSimulator;
