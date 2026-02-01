import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './BarakahOrchard.css';

const BarakahOrchard = () => {
    const { settings, user } = useAppStore();
    const lang = settings?.language || 'ar';

    // Asset Logic: 100 SubhanAllah = 1 Palm Tree
    // We'll use mocked tasbih count if real one isn't connected yet, or connect to user.tasbihCount
    const totalTasbih = user?.tasbihCount || 1543; // Mock start

    const trees = Math.floor(totalTasbih / 100);
    const progressToNext = totalTasbih % 100;

    // Psychological Hook: Tangibility Bias
    // Making the unseen rewards tangible increases motivation

    return (
        <div className="orchard-container">
            <div className="orchard-header">
                <div className="orchard-icon">🌴</div>
                <h1>{lang === 'ar' ? 'بستان البركة' : 'Barakah Orchard'}</h1>
                <p className="orchard-subtitle">
                    {lang === 'ar'
                        ? 'حصادك في الآخرة: كل 100 تسبيحة تغرس نخلة في الجنة'
                        : 'Your Afterlife Harvest: Every 100 Tasbih plants a palm tree in Jannah'}
                </p>

                <div className="orchard-stats">
                    <div className="stat-card gold">
                        <span className="stat-value">{trees}</span>
                        <span className="stat-label">{lang === 'ar' ? 'نخلة ذهبية' : 'Golden Palms'}</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{totalTasbih}</span>
                        <span className="stat-label">{lang === 'ar' ? 'إجمالي التسبيح' : 'Total Tasbih'}</span>
                    </div>
                </div>

                <div className="next-tree-progress">
                    <div className="progress-info">
                        <span>{lang === 'ar' ? 'النخلة القادمة' : 'Next Tree'}</span>
                        <span>{progressToNext}/100</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${progressToNext}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Visual Garden Grid */}
            <div className="garden-grid">
                {Array.from({ length: trees }).map((_, index) => (
                    <div key={index} className="garden-slot occupied animate-pop">
                        <div className="tree-asset">🌴</div>
                        <div className="tree-glow"></div>
                        {/* Randomize delay for organic feel */}
                        <div className="tree-shadow" style={{ animationDelay: `${Math.random() * 2}s` }}></div>
                    </div>
                ))}

                {/* Phantom slot for next tree */}
                <div className="garden-slot next">
                    <div className="tree-asset ghost">🌱</div>
                    <div className="soil-mound"></div>
                </div>

                {/* Empty slots to fill grid */}
                {Array.from({ length: Math.max(0, 11 - (trees % 12)) }).map((_, index) => (
                    <div key={`empty-${index}`} className="garden-slot empty">
                        <div className="soil-patch"></div>
                    </div>
                ))}
            </div>

            <div className="orchard-hadith">
                <p>
                    {lang === 'ar'
                        ? 'قال ﷺ: "من قال سبحان الله العظيم وبحمده غرست له نخلة في الجنة"'
                        : 'Prophet ﷺ said: "Who says SubhanAllah al-Azim wa bihamdihi, a palm tree is planted for him in Paradise"'}
                </p>
            </div>
        </div>
    );
};

export default BarakahOrchard;
