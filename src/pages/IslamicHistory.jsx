import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import {
    prophetMuhammad,
    prophets,
    companions,
    goldenAgeScholars,
    goldenAgeScientists,
    recommendedBooks,
    readingPath,
    ramadanEvents
} from '../data/islamicHistoryData';
import './IslamicHistory.css';

const IslamicHistory = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';
    const [activeTab, setActiveTab] = useState('prophet'); // prophet, prophets, companions, scholars, books
    const [selectedFigure, setSelectedFigure] = useState(null);
    const [selectedBook, setSelectedBook] = useState(null);

    const tabs = [
        { id: 'prophet', icon: '🕋', ar: 'القدوة الأعظم', en: 'Ultimate Role Model' },
        { id: 'prophets', icon: '✨', ar: 'الأنبياء', en: 'Prophets' },
        { id: 'companions', icon: '⭐', ar: 'الصحابة', en: 'Companions' },
        { id: 'scholars', icon: '📚', ar: 'العلماء', en: 'Scholars' },
        { id: 'scientists', icon: '🔬', ar: 'العصر الذهبي', en: 'Golden Age' },
        { id: 'books', icon: '📖', ar: 'الكتب الموصى بها', en: 'Recommended Books' },
        { id: 'events', icon: '📅', ar: 'أحداث رمضان', en: 'Ramadan Events' }
    ];

    const renderProphetMuhammad = () => (
        <div className="prophet-section">
            <div className="prophet-hero">
                <div className="prophet-icon">{prophetMuhammad.image}</div>
                <h2>{language === 'ar' ? prophetMuhammad.nameAr : prophetMuhammad.nameEn}</h2>
                <p className="prophet-title">
                    {language === 'ar' ? prophetMuhammad.title.ar : prophetMuhammad.title.en}
                </p>
                <p className="prophet-dates">{prophetMuhammad.born} — {prophetMuhammad.died}</p>
            </div>

            <p className="prophet-desc">
                {language === 'ar' ? prophetMuhammad.description.ar : prophetMuhammad.description.en}
            </p>

            {/* Key Events */}
            <div className="prophet-events">
                <h3>⚡ {language === 'ar' ? 'أحداث مفصلية' : 'Key Events'}</h3>
                <div className="events-timeline">
                    {prophetMuhammad.keyEvents.map((event, idx) => (
                        <div key={idx} className="event-item">
                            <span className="event-year">{event.year}</span>
                            <span className="event-name">
                                {language === 'ar' ? event.ar : event.en}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Qualities */}
            <div className="prophet-qualities">
                <h3>💎 {language === 'ar' ? 'صفاته ﷺ' : 'His Qualities ﷺ'}</h3>
                <div className="qualities-grid">
                    {prophetMuhammad.qualities.map((q, idx) => (
                        <span key={idx} className="quality-badge">
                            {language === 'ar' ? q.ar : q.en}
                        </span>
                    ))}
                </div>
            </div>

            {/* Lessons */}
            <div className="prophet-lessons">
                <h3>📖 {language === 'ar' ? 'دروس نتعلمها' : 'Lessons to Learn'}</h3>
                {prophetMuhammad.lessons.map((lesson, idx) => (
                    <div key={idx} className="lesson-item">
                        ✓ {language === 'ar' ? lesson.ar : lesson.en}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderFigures = (figures, type) => (
        <div className="figures-grid">
            {figures.map((figure) => (
                <div
                    key={figure.id}
                    className={`figure-card ${selectedFigure?.id === figure.id ? 'selected' : ''}`}
                    onClick={() => setSelectedFigure(selectedFigure?.id === figure.id ? null : figure)}
                >
                    <div className="figure-icon">{figure.image}</div>
                    <h3>{language === 'ar' ? figure.nameAr : figure.nameEn}</h3>
                    <p className="figure-title">
                        {language === 'ar' ? figure.title.ar : figure.title.en}
                    </p>
                    {figure.lived && <span className="figure-dates">{figure.lived}</span>}

                    {selectedFigure?.id === figure.id && (
                        <div className="figure-details">
                            {figure.keyStory && (
                                <p className="figure-story">
                                    📜 {language === 'ar' ? figure.keyStory.ar : figure.keyStory.en}
                                </p>
                            )}
                            {figure.lesson && (
                                <p className="figure-lesson">
                                    💡 {language === 'ar' ? figure.lesson.ar : figure.lesson.en}
                                </p>
                            )}
                            {figure.relation && (
                                <p className="figure-relation">
                                    🤝 {language === 'ar' ? figure.relation.ar : figure.relation.en}
                                </p>
                            )}
                            {figure.achievement && (
                                <p className="figure-achievement">
                                    🏆 {language === 'ar' ? figure.achievement.ar : figure.achievement.en}
                                </p>
                            )}
                            {figure.quality && (
                                <p className="figure-quality">
                                    ⭐ {language === 'ar' ? figure.quality.ar : figure.quality.en}
                                </p>
                            )}
                            {figure.field && (
                                <p className="figure-field">
                                    📚 {language === 'ar' ? figure.field.ar : figure.field.en}
                                </p>
                            )}
                            {figure.work && (
                                <p className="figure-work">
                                    📖 {language === 'ar' ? figure.work.ar : figure.work.en}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    const renderBooks = () => {
        const categories = [
            { key: 'seerah', ar: 'السيرة النبوية', en: 'Prophetic Biography' },
            { key: 'companions', ar: 'الصحابة', en: 'Companions' },
            { key: 'prophets', ar: 'قصص الأنبياء', en: 'Prophet Stories' },
            { key: 'scholars', ar: 'تراجم العلماء', en: 'Scholar Biographies' },
            { key: 'hadith', ar: 'الحديث', en: 'Hadith' },
            { key: 'spirituality', ar: 'التزكية', en: 'Spirituality' }
        ];

        return (
            <div className="books-section">
                {/* Reading Path */}
                <div className="reading-path">
                    <h3>🛤️ {language === 'ar' ? 'المسار المقترح للقراءة' : 'Suggested Reading Path'}</h3>
                    <div className="path-steps">
                        {readingPath.map((step, idx) => {
                            const book = Object.values(recommendedBooks).flat().find(b => b.id === step.bookId);
                            return (
                                <div key={idx} className="path-step">
                                    <span className="step-number">{step.order}</span>
                                    <div className="step-content">
                                        <strong>{language === 'ar' ? book?.titleAr : book?.titleEn}</strong>
                                        <span className="step-reason">
                                            {language === 'ar' ? step.reason.ar : step.reason.en}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Books by Category */}
                {categories.map((cat) => (
                    recommendedBooks[cat.key] && (
                        <div key={cat.key} className="book-category">
                            <h4>{language === 'ar' ? cat.ar : cat.en}</h4>
                            <div className="books-grid">
                                {recommendedBooks[cat.key].map((book) => (
                                    <div
                                        key={book.id}
                                        className={`book-card ${selectedBook?.id === book.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedBook(selectedBook?.id === book.id ? null : book)}
                                    >
                                        <div className="book-rating">
                                            {'⭐'.repeat(book.rating)}
                                        </div>
                                        <h5>{language === 'ar' ? book.titleAr : book.titleEn}</h5>
                                        <p className="book-author">
                                            ✍️ {language === 'ar' ? book.author.ar : book.author.en}
                                        </p>
                                        <span className={`book-level ${book.level}`}>
                                            {book.level === 'beginner' ? (language === 'ar' ? 'مبتدئ' : 'Beginner') :
                                                book.level === 'intermediate' ? (language === 'ar' ? 'متوسط' : 'Intermediate') :
                                                    (language === 'ar' ? 'متقدم' : 'Advanced')}
                                        </span>
                                        {selectedBook?.id === book.id && (
                                            <p className="book-desc">
                                                {language === 'ar' ? book.description.ar : book.description.en}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>
        );
    };

    const renderRamadanEvents = () => (
        <div className="ramadan-events-section">
            <h3>📅 {language === 'ar' ? 'أحداث تاريخية في رمضان' : 'Historical Ramadan Events'}</h3>
            <div className="events-list">
                {ramadanEvents.map((event, idx) => (
                    <div key={idx} className="ramadan-event-card">
                        <div className="event-day">{event.day}</div>
                        <div className="event-content">
                            <div className="event-icon">{event.icon}</div>
                            <div className="event-info">
                                <h4>{language === 'ar' ? event.event.ar : event.event.en}</h4>
                                <span className="event-year">{event.year}</span>
                                <p>{language === 'ar' ? event.description.ar : event.description.en}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="history-page">
            <div className="history-header">
                <h1>📜 {language === 'ar' ? 'سجل الأمجاد' : 'Glory Almanac'}</h1>
                <p>{language === 'ar' ? '٢٥+ شخصية مؤثرة في تاريخ الإسلام' : '25+ Influential Figures in Islamic History'}</p>
            </div>

            {/* Tabs */}
            <div className="history-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => { setActiveTab(tab.id); setSelectedFigure(null); }}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{language === 'ar' ? tab.ar : tab.en}</span>
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="history-content">
                {activeTab === 'prophet' && renderProphetMuhammad()}
                {activeTab === 'prophets' && renderFigures(prophets, 'prophet')}
                {activeTab === 'companions' && renderFigures(companions, 'companion')}
                {activeTab === 'scholars' && renderFigures(goldenAgeScholars, 'scholar')}
                {activeTab === 'scientists' && renderFigures(goldenAgeScientists, 'scientist')}
                {activeTab === 'books' && renderBooks()}
                {activeTab === 'events' && renderRamadanEvents()}
            </div>

            {/* Stats */}
            <div className="history-stats">
                <div className="stat">
                    <span className="stat-number">1</span>
                    <span className="stat-label">{language === 'ar' ? 'القدوة الأعظم ﷺ' : 'Ultimate Role Model ﷺ'}</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{prophets.length}</span>
                    <span className="stat-label">{language === 'ar' ? 'أنبياء' : 'Prophets'}</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{companions.length}</span>
                    <span className="stat-label">{language === 'ar' ? 'صحابة' : 'Companions'}</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{goldenAgeScholars.length + goldenAgeScientists.length}</span>
                    <span className="stat-label">{language === 'ar' ? 'علماء' : 'Scholars'}</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{Object.values(recommendedBooks).flat().length}</span>
                    <span className="stat-label">{language === 'ar' ? 'كتب' : 'Books'}</span>
                </div>
            </div>

            {/* Fourth Wall */}
            <div className="history-fourth-wall">
                <p>
                    {language === 'ar'
                        ? 'هؤلاء لم يكونوا ملائكة... كانوا بشراً مثلك. الفرق الوحيد: قرروا أن يكونوا استثنائيين. ماذا قررت أنت؟'
                        : 'These were not angels... they were humans like you. The only difference: they decided to be exceptional. What have you decided?'}
                </p>
            </div>
        </div>
    );
};

export default IslamicHistory;
