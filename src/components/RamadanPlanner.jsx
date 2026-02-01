import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './RamadanPlanner.css';

const RamadanPlanner = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    const [currentDay, setCurrentDay] = useState(15);
    const [completedTasks, setCompletedTasks] = useState({});

    // 30-day Ramadan plan
    const dailyPlans = [
        { day: 1, focusAr: 'النية الصادقة', focusEn: 'Sincere Intention', quran: 1, extra: 'تحديد الأهداف' },
        { day: 2, focusAr: 'التوبة', focusEn: 'Repentance', quran: 1, extra: 'استغفار 100 مرة' },
        { day: 3, focusAr: 'الصبر', focusEn: 'Patience', quran: 1, extra: 'تدريب النفس' },
        { day: 4, focusAr: 'الشكر', focusEn: 'Gratitude', quran: 1, extra: 'عد النعم' },
        { day: 5, focusAr: 'الإحسان', focusEn: 'Excellence', quran: 1, extra: 'صدقة' },
        { day: 6, focusAr: 'التقوى', focusEn: 'Piety', quran: 1, extra: 'مراقبة النفس' },
        { day: 7, focusAr: 'صلة الرحم', focusEn: 'Family Ties', quran: 1, extra: 'اتصل بقريب' },
        { day: 8, focusAr: 'الذكر', focusEn: 'Remembrance', quran: 1, extra: '1000 تسبيحة' },
        { day: 9, focusAr: 'الدعاء', focusEn: 'Supplication', quran: 1, extra: 'قائمة دعاء' },
        { day: 10, focusAr: 'التهجد', focusEn: 'Night Prayer', quran: 1, extra: '8 ركعات' },
        { day: 11, focusAr: 'الصدق', focusEn: 'Truthfulness', quran: 1, extra: 'لا كذب اليوم' },
        { day: 12, focusAr: 'الأمانة', focusEn: 'Trustworthiness', quran: 1, extra: 'وفاء الوعد' },
        { day: 13, focusAr: 'حفظ اللسان', focusEn: 'Guarding Tongue', quran: 1, extra: 'لا غيبة' },
        { day: 14, focusAr: 'الكرم', focusEn: 'Generosity', quran: 1, extra: 'إفطار صائم' },
        { day: 15, focusAr: 'التواضع', focusEn: 'Humility', quran: 1, extra: 'خدمة الآخرين' },
        { day: 16, focusAr: 'الصلاة بخشوع', focusEn: 'Focused Prayer', quran: 1, extra: 'تدبر' },
        { day: 17, focusAr: 'بداء العشر', focusEn: 'Start of Last 10', quran: 2, extra: 'اجتهاد' },
        { day: 18, focusAr: 'الاعتكاف', focusEn: "I'tikaf Spirit", quran: 2, extra: 'ساعة منفردة' },
        { day: 19, focusAr: 'طلب ليلة القدر', focusEn: 'Seek Laylat al-Qadr', quran: 2, extra: 'قيام' },
        { day: 20, focusAr: 'المحاسبة', focusEn: 'Self-Accounting', quran: 2, extra: 'مراجعة' },
        { day: 21, focusAr: 'ليلة وترية', focusEn: 'Odd Night', quran: 2, extra: 'دعاء القدر' },
        { day: 22, focusAr: 'الإخلاص', focusEn: 'Sincerity', quran: 2, extra: 'سرية' },
        { day: 23, focusAr: 'ليلة وترية', focusEn: 'Odd Night', quran: 2, extra: 'قيام كامل' },
        { day: 24, focusAr: 'السخاء', focusEn: 'Magnanimity', quran: 2, extra: 'زكاة' },
        { day: 25, focusAr: 'ليلة وترية', focusEn: 'Odd Night', quran: 2, extra: 'اعتكاف' },
        { day: 26, focusAr: 'ختم القرآن', focusEn: 'Khatmah', quran: 3, extra: 'دعاء الختم' },
        { day: 27, focusAr: 'ليلة القدر', focusEn: 'Laylat al-Qadr', quran: 2, extra: 'قيام كامل' },
        { day: 28, focusAr: 'الفرح', focusEn: 'Joy', quran: 1, extra: 'فرح بالعيد' },
        { day: 29, focusAr: 'التكبير', focusEn: 'Takbeer', quran: 1, extra: 'زكاة الفطر' },
        { day: 30, focusAr: 'الوداع', focusEn: 'Farewell', quran: 1, extra: 'استمرار' },
    ];

    // Daily tasks for each day
    const dailyTasks = [
        { id: 'fajr', ar: 'صلاة الفجر جماعة', en: 'Fajr in Congregation' },
        { id: 'quran', ar: 'قراءة الورد', en: 'Daily Quran Portion' },
        { id: 'adhkar', ar: 'أذكار الصباح والمساء', en: 'Morning/Evening Adhkar' },
        { id: 'sadaqa', ar: 'صدقة اليوم', en: 'Daily Charity' },
        { id: 'dua', ar: 'الدعاء قبل الإفطار', en: 'Dua before Iftar' },
        { id: 'taraweeh', ar: 'صلاة التراويح', en: 'Taraweeh Prayer' },
        { id: 'focus', ar: 'هدف اليوم', en: "Today's Focus" },
    ];

    const currentPlan = dailyPlans[currentDay - 1] || dailyPlans[0];

    const toggleTask = (taskId) => {
        setCompletedTasks(prev => ({
            ...prev,
            [currentDay]: {
                ...prev[currentDay],
                [taskId]: !prev[currentDay]?.[taskId]
            }
        }));
    };

    const getCompletionPercentage = () => {
        const dayTasks = completedTasks[currentDay] || {};
        const completed = Object.values(dayTasks).filter(Boolean).length;
        return Math.round((completed / dailyTasks.length) * 100);
    };

    return (
        <div className="planner-page">
            <div className="planner-header">
                <h1>📋 {language === 'ar' ? 'مخطط رمضان' : 'Ramadan Planner'}</h1>
            </div>

            {/* Day Selector */}
            <div className="day-selector">
                <button onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}>◀</button>
                <div className="day-display">
                    <span className="day-number">{currentDay}</span>
                    <span className="day-label">{language === 'ar' ? 'رمضان' : 'Ramadan'}</span>
                </div>
                <button onClick={() => setCurrentDay(Math.min(30, currentDay + 1))}>▶</button>
            </div>

            {/* Today's Focus */}
            <div className="focus-card">
                <h3>🎯 {language === 'ar' ? 'تركيز اليوم' : "Today's Focus"}</h3>
                <div className="focus-title">
                    {language === 'ar' ? currentPlan.focusAr : currentPlan.focusEn}
                </div>
                <div className="focus-extra">
                    📌 {currentPlan.extra}
                </div>
                <div className="quran-goal">
                    📖 {currentPlan.quran} {language === 'ar' ? 'جزء قرآن' : 'Juz Quran'}
                </div>
            </div>

            {/* Progress */}
            <div className="progress-section">
                <div className="progress-header">
                    <span>{language === 'ar' ? 'التقدم اليومي' : 'Daily Progress'}</span>
                    <span className="progress-percent">{getCompletionPercentage()}%</span>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${getCompletionPercentage()}%` }}
                    />
                </div>
            </div>

            {/* Tasks Checklist */}
            <div className="tasks-checklist">
                <h3>{language === 'ar' ? '✅ مهام اليوم' : '✅ Daily Tasks'}</h3>
                {dailyTasks.map(task => (
                    <div
                        key={task.id}
                        className={`task-item ${completedTasks[currentDay]?.[task.id] ? 'completed' : ''}`}
                        onClick={() => toggleTask(task.id)}
                    >
                        <span className="task-check">
                            {completedTasks[currentDay]?.[task.id] ? '✓' : '○'}
                        </span>
                        <span className="task-label">
                            {language === 'ar' ? task.ar : task.en}
                        </span>
                    </div>
                ))}
            </div>

            {/* Days Overview */}
            <div className="days-overview">
                <h3>{language === 'ar' ? '📅 نظرة عامة' : '📅 Overview'}</h3>
                <div className="days-grid">
                    {[...Array(30)].map((_, i) => {
                        const dayNum = i + 1;
                        const dayCompleted = completedTasks[dayNum];
                        const tasksCompleted = dayCompleted ? Object.values(dayCompleted).filter(Boolean).length : 0;

                        return (
                            <button
                                key={dayNum}
                                className={`day-btn ${currentDay === dayNum ? 'current' : ''} ${tasksCompleted === dailyTasks.length ? 'complete' : tasksCompleted > 0 ? 'partial' : ''}`}
                                onClick={() => setCurrentDay(dayNum)}
                            >
                                {dayNum}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RamadanPlanner;
