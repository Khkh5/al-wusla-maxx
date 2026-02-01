import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './HabitTracker.css';

const HabitTracker = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    const [habits, setHabits] = useState(() => {
        const saved = localStorage.getItem('userHabits');
        return saved ? JSON.parse(saved) : [];
    });
    const [newHabit, setNewHabit] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('worship');

    // Habit categories
    const categories = [
        { id: 'worship', icon: '🕌', ar: 'عبادة', en: 'Worship' },
        { id: 'quran', icon: '📖', ar: 'قرآن', en: 'Quran' },
        { id: 'health', icon: '💪', ar: 'صحة', en: 'Health' },
        { id: 'social', icon: '👥', ar: 'اجتماعي', en: 'Social' },
        { id: 'personal', icon: '🎯', ar: 'شخصي', en: 'Personal' },
        { id: 'knowledge', icon: '📚', ar: 'علم', en: 'Knowledge' }
    ];

    // Suggested habits
    const suggestedHabits = {
        worship: [
            { ar: 'صلاة الفجر في المسجد', en: 'Fajr prayer in mosque' },
            { ar: 'صلاة الضحى', en: 'Duha prayer' },
            { ar: 'قيام الليل', en: 'Night prayer' },
            { ar: 'أذكار الصباح والمساء', en: 'Morning/Evening Adhkar' }
        ],
        quran: [
            { ar: 'قراءة صفحة من القرآن', en: 'Read a page of Quran' },
            { ar: 'حفظ آية جديدة', en: 'Memorize a new verse' },
            { ar: 'مراجعة الحفظ', en: 'Review memorization' },
            { ar: 'قراءة تفسير', en: 'Read Tafsir' }
        ],
        health: [
            { ar: 'شرب 8 أكواب ماء', en: 'Drink 8 cups of water' },
            { ar: 'المشي 30 دقيقة', en: 'Walk 30 minutes' },
            { ar: 'قيلولة 20 دقيقة', en: '20 min Qailula nap' },
            { ar: 'نوم قبل 11 مساءً', en: 'Sleep before 11 PM' }
        ],
        social: [
            { ar: 'صلة الرحم', en: 'Connect with family' },
            { ar: 'مساعدة محتاج', en: 'Help someone in need' },
            { ar: 'الاتصال بصديق', en: 'Call a friend' },
            { ar: 'إفطار صائم', en: 'Feed a fasting person' }
        ],
        personal: [
            { ar: 'استغفار 100 مرة', en: 'Istighfar 100 times' },
            { ar: 'صدقة يومية', en: 'Daily charity' },
            { ar: 'دعاء للوالدين', en: 'Dua for parents' },
            { ar: 'السيطرة على الغضب', en: 'Control anger' }
        ],
        knowledge: [
            { ar: 'قراءة 10 صفحات', en: 'Read 10 pages' },
            { ar: 'الاستماع لدرس علمي', en: 'Listen to Islamic lecture' },
            { ar: 'تعلم حديث جديد', en: 'Learn a new hadith' },
            { ar: 'مراجعة فقه', en: 'Review Fiqh' }
        ]
    };

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('userHabits', JSON.stringify(habits));
    }, [habits]);

    // Add new habit
    const addHabit = (habitText = null) => {
        const text = habitText || newHabit;
        if (!text.trim()) return;

        const habit = {
            id: Date.now(),
            text: text,
            category: selectedCategory,
            completed: false,
            streak: 0,
            createdAt: new Date().toISOString(),
            completedDates: []
        };

        setHabits([...habits, habit]);
        setNewHabit('');
        setShowAddForm(false);
    };

    // Toggle habit completion
    const toggleHabit = (id) => {
        const today = new Date().toDateString();
        setHabits(habits.map(h => {
            if (h.id === id) {
                const alreadyCompletedToday = h.completedDates.includes(today);
                if (alreadyCompletedToday) {
                    return {
                        ...h,
                        completed: false,
                        completedDates: h.completedDates.filter(d => d !== today),
                        streak: Math.max(0, h.streak - 1)
                    };
                } else {
                    return {
                        ...h,
                        completed: true,
                        completedDates: [...h.completedDates, today],
                        streak: h.streak + 1
                    };
                }
            }
            return h;
        }));
    };

    // Delete habit
    const deleteHabit = (id) => {
        setHabits(habits.filter(h => h.id !== id));
    };

    // Get category info
    const getCategoryInfo = (catId) => categories.find(c => c.id === catId) || categories[0];

    // Filter habits by category
    const [filterCategory, setFilterCategory] = useState('all');
    const filteredHabits = filterCategory === 'all'
        ? habits
        : habits.filter(h => h.category === filterCategory);

    // Stats
    const completedToday = habits.filter(h => h.completed).length;
    const totalHabits = habits.length;
    const progress = totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0;

    return (
        <div className="habits-page">
            <div className="habits-header">
                <h1>📝 {language === 'ar' ? 'عاداتي اليومية' : 'My Daily Habits'}</h1>
                <p>{language === 'ar' ? 'أضف عاداتك وتابع تقدمك' : 'Add your habits and track progress'}</p>
            </div>

            {/* Progress Summary */}
            <div className="habits-summary">
                <div className="summary-circle">
                    <svg viewBox="0 0 36 36">
                        <path
                            className="circle-bg"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="circle-progress"
                            strokeDasharray={`${progress}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <div className="circle-text">
                        <span className="circle-percent">{progress}%</span>
                    </div>
                </div>
                <div className="summary-stats">
                    <div className="stat-item">
                        <span className="stat-num">{completedToday}</span>
                        <span className="stat-label">{language === 'ar' ? 'مكتمل' : 'Completed'}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-num">{totalHabits - completedToday}</span>
                        <span className="stat-label">{language === 'ar' ? 'متبقي' : 'Remaining'}</span>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
                <button
                    className={`filter-btn ${filterCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setFilterCategory('all')}
                >
                    {language === 'ar' ? 'الكل' : 'All'}
                </button>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`filter-btn ${filterCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setFilterCategory(cat.id)}
                    >
                        {cat.icon}
                    </button>
                ))}
            </div>

            {/* Habits List */}
            <div className="habits-list">
                {filteredHabits.length === 0 ? (
                    <div className="no-habits">
                        <span>📋</span>
                        <p>{language === 'ar' ? 'لا توجد عادات. أضف عادتك الأولى!' : 'No habits yet. Add your first habit!'}</p>
                    </div>
                ) : (
                    filteredHabits.map(habit => {
                        const catInfo = getCategoryInfo(habit.category);
                        return (
                            <div key={habit.id} className={`habit-item ${habit.completed ? 'completed' : ''}`}>
                                <div className="habit-check" onClick={() => toggleHabit(habit.id)}>
                                    {habit.completed ? '✅' : '⬜'}
                                </div>
                                <div className="habit-content">
                                    <span className="habit-category">{catInfo.icon}</span>
                                    <span className="habit-text">{habit.text}</span>
                                    {habit.streak > 0 && (
                                        <span className="habit-streak">🔥 {habit.streak}</span>
                                    )}
                                </div>
                                <button className="habit-delete" onClick={() => deleteHabit(habit.id)}>🗑️</button>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Add Button */}
            <button className="add-habit-btn" onClick={() => setShowAddForm(true)}>
                ➕ {language === 'ar' ? 'إضافة عادة' : 'Add Habit'}
            </button>

            {/* Add Form Modal */}
            {showAddForm && (
                <div className="add-modal" onClick={() => setShowAddForm(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h3>{language === 'ar' ? 'إضافة عادة جديدة' : 'Add New Habit'}</h3>

                        {/* Category Selection */}
                        <div className="category-select">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat.id)}
                                >
                                    <span>{cat.icon}</span>
                                    <span>{language === 'ar' ? cat.ar : cat.en}</span>
                                </button>
                            ))}
                        </div>

                        {/* Suggested Habits */}
                        <div className="suggested-habits">
                            <p>{language === 'ar' ? 'اختر من المقترحات:' : 'Choose from suggestions:'}</p>
                            <div className="suggestions-grid">
                                {suggestedHabits[selectedCategory]?.map((habit, idx) => (
                                    <button
                                        key={idx}
                                        className="suggestion-btn"
                                        onClick={() => addHabit(language === 'ar' ? habit.ar : habit.en)}
                                    >
                                        {language === 'ar' ? habit.ar : habit.en}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Custom Input */}
                        <div className="custom-input">
                            <p>{language === 'ar' ? 'أو اكتب عادتك:' : 'Or write your own:'}</p>
                            <input
                                type="text"
                                value={newHabit}
                                onChange={(e) => setNewHabit(e.target.value)}
                                placeholder={language === 'ar' ? 'عادتي الجديدة...' : 'My new habit...'}
                                onKeyPress={(e) => e.key === 'Enter' && addHabit()}
                            />
                            <button onClick={() => addHabit()}>
                                {language === 'ar' ? 'إضافة' : 'Add'}
                            </button>
                        </div>

                        <button className="close-modal" onClick={() => setShowAddForm(false)}>✕</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HabitTracker;
