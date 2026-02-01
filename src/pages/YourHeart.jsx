import { useState, useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';
import { heartPurificationMethods, heartCategories } from '../data/heartPurificationData';
import './YourHeart.css';

const YourHeart = () => {
    const { settings } = useAppStore();
    const lang = settings?.language || 'ar';

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [expandedMethod, setExpandedMethod] = useState(null);
    const [completedMethods, setCompletedMethods] = useState(() => {
        const saved = localStorage.getItem('heartCompletedMethods');
        return saved ? JSON.parse(saved) : [];
    });
    const [showScience, setShowScience] = useState(true);

    // Filter methods
    const filteredMethods = useMemo(() => {
        return heartPurificationMethods.filter(method => {
            const categoryMatch = selectedCategory === 'all' || method.category === selectedCategory;
            const difficultyMatch = selectedDifficulty === 'all' || method.difficulty === selectedDifficulty;
            return categoryMatch && difficultyMatch;
        });
    }, [selectedCategory, selectedDifficulty]);

    // Toggle method completion
    const toggleComplete = (id) => {
        let newCompleted;
        if (completedMethods.includes(id)) {
            newCompleted = completedMethods.filter(m => m !== id);
        } else {
            newCompleted = [...completedMethods, id];
        }
        setCompletedMethods(newCompleted);
        localStorage.setItem('heartCompletedMethods', JSON.stringify(newCompleted));
    };

    // Progress calculation
    const progress = Math.round((completedMethods.length / heartPurificationMethods.length) * 100);

    const difficultyColors = {
        easy: '#10b981',
        medium: '#f59e0b',
        hard: '#ef4444'
    };

    const difficultyLabels = {
        easy: { ar: 'سهل', en: 'Easy' },
        medium: { ar: 'متوسط', en: 'Medium' },
        hard: { ar: 'صعب', en: 'Hard' }
    };

    return (
        <div className="your-heart-page">
            {/* Hero Header */}
            <div className="heart-hero">
                <div className="heart-icon-large">💚</div>
                <h1>{lang === 'ar' ? 'المضغة التي صلحت' : 'Your Heart - Healed'}</h1>
                <p className="heart-verse">
                    {lang === 'ar'
                        ? '﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾'
                        : '"Verily, in the remembrance of Allah do hearts find rest"'}
                </p>
                <p className="heart-hadith">
                    {lang === 'ar'
                        ? '«ألا وإن في الجسد مضغة إذا صلحت صلح الجسد كله وإذا فسدت فسد الجسد كله ألا وهي القلب»'
                        : '"In the body is a morsel of flesh; if it is sound, the whole body is sound, and if it is corrupt, the whole body is corrupt. It is the heart."'}
                </p>
            </div>

            {/* Progress Bar */}
            <div className="heart-progress-section">
                <div className="progress-header">
                    <span className="progress-label">
                        {lang === 'ar' ? 'تقدمك في إصلاح القلب' : 'Your Heart Healing Progress'}
                    </span>
                    <span className="progress-count">{completedMethods.length}/100</span>
                </div>
                <div className="progress-bar-bg">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <span className="progress-percentage">{progress}%</span>
            </div>

            {/* Filters */}
            <div className="heart-filters">
                <div className="filter-group">
                    <label>{lang === 'ar' ? 'التصنيف' : 'Category'}</label>
                    <div className="category-pills">
                        <button
                            className={`pill ${selectedCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('all')}
                        >
                            {lang === 'ar' ? 'الكل' : 'All'}
                        </button>
                        {Object.entries(heartCategories).map(([key, cat]) => (
                            <button
                                key={key}
                                className={`pill ${selectedCategory === key ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(key)}
                                style={{
                                    borderColor: selectedCategory === key ? cat.color : 'transparent',
                                    color: selectedCategory === key ? cat.color : 'inherit'
                                }}
                            >
                                {cat.icon} {lang === 'ar' ? cat.ar : cat.en}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter-row">
                    <div className="filter-group small">
                        <label>{lang === 'ar' ? 'الصعوبة' : 'Difficulty'}</label>
                        <select
                            value={selectedDifficulty}
                            onChange={(e) => setSelectedDifficulty(e.target.value)}
                        >
                            <option value="all">{lang === 'ar' ? 'الكل' : 'All'}</option>
                            <option value="easy">{lang === 'ar' ? 'سهل' : 'Easy'}</option>
                            <option value="medium">{lang === 'ar' ? 'متوسط' : 'Medium'}</option>
                            <option value="hard">{lang === 'ar' ? 'صعب' : 'Hard'}</option>
                        </select>
                    </div>

                    <div className="toggle-science">
                        <label>
                            <input
                                type="checkbox"
                                checked={showScience}
                                onChange={(e) => setShowScience(e.target.checked)}
                            />
                            {lang === 'ar' ? 'إظهار العلم الخفي' : 'Show Hidden Science'}
                        </label>
                    </div>
                </div>
            </div>

            {/* Methods Count */}
            <div className="methods-count">
                {lang === 'ar'
                    ? `عرض ${filteredMethods.length} طريقة`
                    : `Showing ${filteredMethods.length} methods`}
            </div>

            {/* Methods Grid */}
            <div className="heart-methods-grid">
                {filteredMethods.map(method => {
                    const category = heartCategories[method.category];
                    const isCompleted = completedMethods.includes(method.id);
                    const isExpanded = expandedMethod === method.id;

                    return (
                        <div
                            key={method.id}
                            className={`heart-method-card ${isCompleted ? 'completed' : ''} ${isExpanded ? 'expanded' : ''}`}
                            style={{ borderLeftColor: category.color }}
                        >
                            <div className="method-header" onClick={() => setExpandedMethod(isExpanded ? null : method.id)}>
                                <div className="method-number">{method.id}</div>
                                <div className="method-category-icon" style={{ background: `${category.color}20`, color: category.color }}>
                                    {category.icon}
                                </div>
                                <div className="method-main">
                                    <h3 className="method-title">
                                        {lang === 'ar' ? method.method.ar : method.method.en}
                                    </h3>
                                    <span
                                        className="method-difficulty"
                                        style={{ background: `${difficultyColors[method.difficulty]}20`, color: difficultyColors[method.difficulty] }}
                                    >
                                        {lang === 'ar' ? difficultyLabels[method.difficulty].ar : difficultyLabels[method.difficulty].en}
                                    </span>
                                </div>
                                <button
                                    className={`complete-btn ${isCompleted ? 'checked' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); toggleComplete(method.id); }}
                                >
                                    {isCompleted ? '✓' : '○'}
                                </button>
                            </div>

                            {isExpanded && (
                                <div className="method-details">
                                    <div className="detail-section islamic">
                                        <div className="detail-label">
                                            📜 {lang === 'ar' ? 'الأصل الإسلامي' : 'Islamic Basis'}
                                        </div>
                                        <p>{lang === 'ar' ? method.islamicBasis.ar : method.islamicBasis.en}</p>
                                    </div>

                                    {showScience && (
                                        <div className="detail-section science">
                                            <div className="detail-label">
                                                🧠 {lang === 'ar' ? 'العلم الخفي' : 'Hidden Science'}
                                            </div>
                                            <p>{lang === 'ar' ? method.hiddenScience.ar : method.hiddenScience.en}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Bottom Info */}
            <div className="heart-bottom-info">
                <div className="info-card">
                    <h4>{lang === 'ar' ? '💡 كيف تستخدم هذا القسم' : '💡 How to Use This Section'}</h4>
                    <ul>
                        <li>{lang === 'ar' ? 'اختر طريقة واحدة وطبقها لمدة 21 يوماً' : 'Choose one method and apply it for 21 days'}</li>
                        <li>{lang === 'ar' ? 'اضغط على الطريقة لمعرفة أصلها الإسلامي والعلم الخفي وراءها' : 'Click on method to see Islamic basis and hidden science'}</li>
                        <li>{lang === 'ar' ? 'علّم الطرق التي أتقنتها لتتبع تقدمك' : 'Mark methods you mastered to track progress'}</li>
                        <li>{lang === 'ar' ? 'ابدأ بالسهل ثم تدرج للصعب' : 'Start with easy, then progress to hard'}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default YourHeart;
