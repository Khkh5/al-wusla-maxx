import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './IslamicCalendar.css';

const IslamicCalendar = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    const [currentDate, setCurrentDate] = useState(new Date());
    const [hijriDate, setHijriDate] = useState({ day: 1, month: 9, year: 1447 });
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    // Islamic months
    const islamicMonths = [
        { ar: 'محرم', en: 'Muharram' },
        { ar: 'صفر', en: 'Safar' },
        { ar: 'ربيع الأول', en: 'Rabi al-Awwal' },
        { ar: 'ربيع الثاني', en: 'Rabi al-Thani' },
        { ar: 'جمادى الأولى', en: 'Jumada al-Awwal' },
        { ar: 'جمادى الآخرة', en: 'Jumada al-Thani' },
        { ar: 'رجب', en: 'Rajab' },
        { ar: 'شعبان', en: 'Shaban' },
        { ar: 'رمضان', en: 'Ramadan' },
        { ar: 'شوال', en: 'Shawwal' },
        { ar: 'ذو القعدة', en: 'Dhu al-Qadah' },
        { ar: 'ذو الحجة', en: 'Dhu al-Hijjah' },
    ];

    // Islamic events
    const events = [
        { day: 1, month: 1, ar: 'رأس السنة الهجرية', en: 'Islamic New Year', icon: '🌙' },
        { day: 10, month: 1, ar: 'يوم عاشوراء', en: 'Day of Ashura', icon: '📿' },
        { day: 12, month: 3, ar: 'المولد النبوي', en: "Prophet's Birthday", icon: '🌟' },
        { day: 27, month: 7, ar: 'الإسراء والمعراج', en: 'Isra and Miraj', icon: '✨' },
        { day: 15, month: 8, ar: 'ليلة النصف من شعبان', en: 'Mid-Shaban', icon: '🌕' },
        { day: 1, month: 9, ar: 'بداية رمضان', en: 'Start of Ramadan', icon: '🌙' },
        { day: 21, month: 9, ar: 'ليالي القدر تبدأ', en: 'Laylat al-Qadr begins', icon: '⭐' },
        { day: 27, month: 9, ar: 'ليلة القدر', en: 'Laylat al-Qadr', icon: '🌟' },
        { day: 1, month: 10, ar: 'عيد الفطر', en: 'Eid al-Fitr', icon: '🎉' },
        { day: 9, month: 12, ar: 'يوم عرفة', en: 'Day of Arafah', icon: '🕋' },
        { day: 10, month: 12, ar: 'عيد الأضحى', en: 'Eid al-Adha', icon: '🐑' },
    ];

    // Simple Hijri date calculation (approximate)
    useEffect(() => {
        const gregorian = new Date();
        // Approximate conversion (for accurate use Intl or a library)
        const jd = Math.floor((gregorian.getTime() / 86400000) + 2440587.5);
        const l = jd - 1948440 + 10632;
        const n = Math.floor((l - 1) / 10631);
        const l2 = l - 10631 * n + 354;
        const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
            Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
        const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
            Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
        const month = Math.floor((24 * l3) / 709);
        const day = l3 - Math.floor((709 * month) / 24);
        const year = 30 * n + j - 30;

        setHijriDate({ day, month, year });

        // Get upcoming events
        const upcoming = events
            .filter(e => e.month >= month || (e.month < month && e.month + 12 >= month + 3))
            .slice(0, 5);
        setUpcomingEvents(upcoming);
    }, []);

    // Gregorian weekdays
    const weekdays = language === 'ar'
        ? ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
        : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Generate calendar days
    const generateCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date().getDate();

        const days = [];

        // Empty cells before first day
        for (let i = 0; i < firstDay; i++) {
            days.push({ day: null, isToday: false });
        }

        // Days of month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                isToday: i === today && month === new Date().getMonth(),
                isFriday: new Date(year, month, i).getDay() === 5
            });
        }

        return days;
    };

    const navigateMonth = (direction) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + direction);
            return newDate;
        });
    };

    return (
        <div className="calendar-page">
            <div className="calendar-header">
                <h1>📅 {language === 'ar' ? 'التقويم الإسلامي' : 'Islamic Calendar'}</h1>
            </div>

            {/* Hijri Date Display */}
            <div className="hijri-display">
                <div className="hijri-day">{hijriDate.day}</div>
                <div className="hijri-month">
                    {language === 'ar'
                        ? islamicMonths[hijriDate.month - 1]?.ar
                        : islamicMonths[hijriDate.month - 1]?.en}
                </div>
                <div className="hijri-year">{hijriDate.year} {language === 'ar' ? 'هـ' : 'AH'}</div>
            </div>

            {/* Gregorian Calendar */}
            <div className="gregorian-calendar">
                <div className="calendar-nav">
                    <button onClick={() => navigateMonth(-1)}>◀</button>
                    <span>
                        {currentDate.toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                            month: 'long',
                            year: 'numeric'
                        })}
                    </span>
                    <button onClick={() => navigateMonth(1)}>▶</button>
                </div>

                <div className="calendar-grid">
                    {weekdays.map(day => (
                        <div key={day} className="weekday-header">{day}</div>
                    ))}
                    {generateCalendarDays().map((item, idx) => (
                        <div
                            key={idx}
                            className={`calendar-day ${item.isToday ? 'today' : ''} ${item.isFriday ? 'friday' : ''} ${!item.day ? 'empty' : ''}`}
                        >
                            {item.day}
                        </div>
                    ))}
                </div>
            </div>

            {/* Upcoming Events */}
            <div className="events-section">
                <h3>{language === 'ar' ? '📌 المناسبات القادمة' : '📌 Upcoming Events'}</h3>
                <div className="events-list">
                    {events.slice(0, 6).map((event, idx) => (
                        <div key={idx} className="event-item">
                            <span className="event-icon">{event.icon}</span>
                            <div className="event-details">
                                <span className="event-name">{language === 'ar' ? event.ar : event.en}</span>
                                <span className="event-date">
                                    {event.day} {language === 'ar'
                                        ? islamicMonths[event.month - 1]?.ar
                                        : islamicMonths[event.month - 1]?.en}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Friday Reminder */}
            {new Date().getDay() === 5 && (
                <div className="friday-reminder">
                    <span>🕌</span>
                    <p>
                        {language === 'ar'
                            ? 'اليوم الجمعة - لا تنسَ سورة الكهف والصلاة على النبي ﷺ'
                            : "It's Friday - Don't forget Surah Al-Kahf and Salawat"}
                    </p>
                </div>
            )}
        </div>
    );
};

export default IslamicCalendar;
