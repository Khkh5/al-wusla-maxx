import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import {
    methodology,
    islamicRulings,
    mythsAndSuperstitions,
    dontDoList,
    doList,
    whenToSilent,
    truthAlgorithm,
    habitBuildingMethods,
    categoryDefinitions,
    islamicReminders
} from '../data/realMuslimData';
import './RealMuslim.css';

const RealMuslim = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';
    const [activeTab, setActiveTab] = useState('methodology');
    const [expandedItem, setExpandedItem] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const tabs = [
        { id: 'methodology', icon: '🧭', ar: 'المنهج', en: 'Methodology' },
        { id: 'rulings', icon: '⚖️', ar: 'أحكام', en: 'Rulings' },
        { id: 'myths', icon: '🚫', ar: 'خرافات', en: 'Myths' },
        { id: 'do', icon: '✅', ar: 'افعل', en: 'Do' },
        { id: 'dont', icon: '❌', ar: 'لا تفعل', en: 'Don\'t' },
        { id: 'silence', icon: '🤫', ar: 'متى تسكت', en: 'When Silent' },
        { id: 'truth', icon: '🔍', ar: 'التحقق', en: 'Verify' },
        { id: 'habits', icon: '💪', ar: 'بناء العادات', en: 'Habits' },
        { id: 'reminders', icon: '💚', ar: 'تذكيرات', en: 'Reminders' }
    ];

    const categories = Object.keys(categoryDefinitions);

    const renderMethodology = () => (
        <div className="methodology-section">
            <div className="core-principle">
                <div className="principle-icon">🕋</div>
                <h3>{language === 'ar' ? 'المبدأ الأساسي' : 'Core Principle'}</h3>
                <p className="principle-text">
                    {language === 'ar' ? methodology.principle.ar : methodology.principle.en}
                </p>
            </div>

            <div className="approach-steps">
                <h4>{language === 'ar' ? 'منهج التسليم (Ta\'abbudi)' : 'Submission Methodology'}</h4>
                {methodology.approach.map((step, idx) => (
                    <div key={idx} className="approach-step">
                        <span className="step-order">{step.order}</span>
                        <span className="step-text">
                            {language === 'ar' ? step.ar : step.en}
                        </span>
                    </div>
                ))}
            </div>

            <div className="warning-box">
                <span className="warning-icon">⚠️</span>
                <p>{language === 'ar' ? methodology.warning.ar : methodology.warning.en}</p>
            </div>
        </div>
    );

    const renderRulings = () => (
        <div className="rulings-section">
            {islamicRulings.map((ruling) => (
                <div
                    key={ruling.id}
                    className={`ruling-card ${expandedItem === ruling.id ? 'expanded' : ''}`}
                    onClick={() => setExpandedItem(expandedItem === ruling.id ? null : ruling.id)}
                >
                    <div className="ruling-header">
                        <span className="ruling-icon">{ruling.icon}</span>
                        <h4>{language === 'ar' ? ruling.topic.ar : ruling.topic.en}</h4>
                    </div>

                    {expandedItem === ruling.id && (
                        <div className="ruling-details">
                            <div className="ruling-layer taabbudi">
                                <span className="layer-badge">🕋 {language === 'ar' ? 'التسليم' : 'Submission'}</span>
                                <p>{language === 'ar' ? ruling.taabbudi.ar : ruling.taabbudi.en}</p>
                            </div>
                            <div className="ruling-layer psychology">
                                <span className="layer-badge">🧠 {language === 'ar' ? 'النفسي' : 'Psychology'}</span>
                                <p>{language === 'ar' ? ruling.psychology.ar : ruling.psychology.en}</p>
                            </div>
                            <div className="ruling-layer science">
                                <span className="layer-badge">🔬 {language === 'ar' ? 'العلمي' : 'Science'}</span>
                                <p>{language === 'ar' ? ruling.science.ar : ruling.science.en}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    const renderMyths = () => {
        const filteredMyths = selectedCategory === 'all'
            ? mythsAndSuperstitions
            : mythsAndSuperstitions.filter(m => m.category === selectedCategory);

        return (
            <div className="myths-section">
                <div className="category-filters">
                    <button
                        className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        {language === 'ar' ? 'الكل' : 'All'} ({mythsAndSuperstitions.length})
                    </button>
                    {categories.map((cat) => {
                        const count = mythsAndSuperstitions.filter(m => m.category === cat).length;
                        if (count === 0) return null;
                        return (
                            <button
                                key={cat}
                                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    borderColor: selectedCategory === cat ? categoryDefinitions[cat].color : 'transparent',
                                    color: selectedCategory === cat ? categoryDefinitions[cat].color : 'inherit'
                                }}
                            >
                                {language === 'ar' ? categoryDefinitions[cat].ar.split(' - ')[0] : categoryDefinitions[cat].en.split(' - ')[0]} ({count})
                            </button>
                        );
                    })}
                </div>

                <div className="myths-grid">
                    {filteredMyths.map((myth) => (
                        <div
                            key={myth.id}
                            className={`myth-card ${expandedItem === `myth-${myth.id}` ? 'expanded' : ''}`}
                            onClick={() => setExpandedItem(expandedItem === `myth-${myth.id}` ? null : `myth-${myth.id}`)}
                            style={{ borderLeftColor: categoryDefinitions[myth.category]?.color }}
                        >
                            <div className="myth-header">
                                <span className="myth-icon">{myth.icon}</span>
                                <div className="myth-content">
                                    <p className="myth-text">
                                        {language === 'ar' ? myth.myth.ar : myth.myth.en}
                                    </p>
                                    <span
                                        className="myth-verdict"
                                        style={{ background: `${categoryDefinitions[myth.category]?.color}20`, color: categoryDefinitions[myth.category]?.color }}
                                    >
                                        {language === 'ar' ? myth.verdict.ar : myth.verdict.en}
                                    </span>
                                </div>
                            </div>

                            {expandedItem === `myth-${myth.id}` && (
                                <div className="myth-correction">
                                    <span className="correction-label">✓ {language === 'ar' ? 'التصحيح' : 'Correction'}:</span>
                                    <p>{language === 'ar' ? myth.correction.ar : myth.correction.en}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderDoList = () => (
        <div className="list-section do-list">
            <div className="list-header">
                <h3>✅ {language === 'ar' ? 'قائمة افعل (٢٠)' : 'Do List (20)'}</h3>
            </div>
            <div className="list-items">
                {doList.map((item) => (
                    <div key={item.id} className="list-item do-item">
                        <span className="item-number">{item.id}</span>
                        <div className="item-content">
                            <p className="item-text">{language === 'ar' ? item.ar : item.en}</p>
                            <span className="item-benefit">
                                💡 {language === 'ar' ? item.benefit.ar : item.benefit.en}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderDontList = () => (
        <div className="list-section dont-list">
            <div className="list-header">
                <h3>❌ {language === 'ar' ? 'قائمة لا تفعل (٢٠)' : 'Don\'t List (20)'}</h3>
            </div>
            <div className="list-items">
                {dontDoList.map((item) => (
                    <div key={item.id} className="list-item dont-item">
                        <span className="item-number">{item.id}</span>
                        <div className="item-content">
                            <p className="item-text">{language === 'ar' ? item.ar : item.en}</p>
                            <span className="item-reason">
                                ⚠️ {language === 'ar' ? item.reason.ar : item.reason.en}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderSilence = () => (
        <div className="silence-section">
            <div className="silence-header">
                <h3>🤫 {language === 'ar' ? 'متى يكون السكوت حكماً؟' : 'When is Silence Ruling?'}</h3>
            </div>
            <div className="silence-items">
                {whenToSilent.map((item) => (
                    <div key={item.id} className="silence-item">
                        <span className="silence-number">{item.id}</span>
                        <div className="silence-content">
                            <p className="silence-situation">
                                {language === 'ar' ? item.ar : item.en}
                            </p>
                            <span className="silence-action">
                                → {language === 'ar' ? item.action.ar : item.action.en}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderTruth = () => (
        <div className="truth-section">
            <h3>🔍 {language === 'ar' ? truthAlgorithm.title.ar : truthAlgorithm.title.en}</h3>
            <div className="algorithm-steps">
                {truthAlgorithm.steps.map((step) => (
                    <div key={step.step} className="algorithm-step">
                        <div className="step-header">
                            <span className="step-num">{step.step}</span>
                            <h4>{language === 'ar' ? step.title.ar : step.title.en}</h4>
                        </div>
                        <ul className="step-questions">
                            {step.questions.map((q, idx) => (
                                <li key={idx}>{language === 'ar' ? q.ar : q.en}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderHabits = () => (
        <div className="habits-section">
            <h3>💪 {language === 'ar' ? '٢٠ طريقة علمية لبناء العادات' : '20 Scientific Habit Building Methods'}</h3>
            <div className="habits-grid">
                {habitBuildingMethods.map((item) => (
                    <div key={item.id} className="habit-card">
                        <span className="habit-number">{item.id}</span>
                        <div className="habit-content">
                            <h5>{language === 'ar' ? item.method.ar : item.method.en}</h5>
                            <p>{language === 'ar' ? item.example.ar : item.example.en}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderReminders = () => (
        <div className="reminders-section">
            <h3>💚 {language === 'ar' ? 'تذكيرات إيمانية' : 'Islamic Reminders'}</h3>
            <div className="reminders-grid">
                {islamicReminders.map((item) => (
                    <div key={item.id} className="reminder-card">
                        <div className="reminder-verse">
                            <span className="verse-text">
                                {language === 'ar' ? item.reminder.ar : item.reminder.en}
                            </span>
                            <span className="verse-source">
                                📖 {language === 'ar' ? item.source.ar : item.source.en}
                            </span>
                        </div>
                        <div className="reminder-encouragement">
                            💚 {language === 'ar' ? item.encouragement.ar : item.encouragement.en}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="real-muslim-page">
            <div className="page-header">
                <h1>🕌 {language === 'ar' ? 'المسلم الحقيقي' : 'Real Muslim'}</h1>
                <p>{language === 'ar' ? 'منهج التسليم: النص أولاً، الحكمة ثانياً' : 'Submission Methodology: Text First, Wisdom Second'}</p>
            </div>

            <div className="tabs-container">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{language === 'ar' ? tab.ar : tab.en}</span>
                    </button>
                ))}
            </div>

            <div className="content-container">
                {activeTab === 'methodology' && renderMethodology()}
                {activeTab === 'rulings' && renderRulings()}
                {activeTab === 'myths' && renderMyths()}
                {activeTab === 'do' && renderDoList()}
                {activeTab === 'dont' && renderDontList()}
                {activeTab === 'silence' && renderSilence()}
                {activeTab === 'truth' && renderTruth()}
                {activeTab === 'habits' && renderHabits()}
                {activeTab === 'reminders' && renderReminders()}
            </div>

            <div className="stats-bar">
                <div className="stat">
                    <span className="stat-num">{islamicRulings.length}</span>
                    <span className="stat-label">{language === 'ar' ? 'حُكم' : 'Rulings'}</span>
                </div>
                <div className="stat">
                    <span className="stat-num">{mythsAndSuperstitions.length}</span>
                    <span className="stat-label">{language === 'ar' ? 'خرافة' : 'Myths'}</span>
                </div>
                <div className="stat">
                    <span className="stat-num">{doList.length + dontDoList.length}</span>
                    <span className="stat-label">{language === 'ar' ? 'قاعدة' : 'Rules'}</span>
                </div>
                <div className="stat">
                    <span className="stat-num">{habitBuildingMethods.length}</span>
                    <span className="stat-label">{language === 'ar' ? 'طريقة' : 'Methods'}</span>
                </div>
            </div>
        </div>
    );
};

export default RealMuslim;
