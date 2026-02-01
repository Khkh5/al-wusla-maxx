import { useState } from 'react';
import { hadithCollection, expertSuggestions, pdfResources } from '../data/islamicContent';
import AudioPlayer from '../components/AudioPlayer';
import './HadithPage.css';

const HadithPage = () => {
    const [activeTab, setActiveTab] = useState('hadith');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('ar');

    const categories = ['all', 'صيام', 'قرآن', 'دعاء', 'أخلاق', 'صدقة', 'قيام', 'رمضان'];

    const filteredHadith = hadithCollection.filter(h => {
        const matchesCategory = selectedCategory === 'all' || h.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            h.arabic.includes(searchQuery) ||
            h.english.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Get today's hadith (rotate daily)
    const todayIndex = new Date().getDate() % hadithCollection.length;
    const dailyHadith = hadithCollection[todayIndex];

    return (
        <div className="hadith-page">
            {/* Header */}
            <div className="hadith-header">
                <h1>📚 {language === 'ar' ? 'المكتبة الإسلامية' : 'Islamic Library'}</h1>
                <p className="subtitle">
                    {language === 'ar'
                        ? 'أحاديث نبوية • صوتيات • نصائح الخبراء'
                        : 'Hadith • Audio • Expert Tips'}
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="library-tabs">
                <button
                    className={activeTab === 'hadith' ? 'active' : ''}
                    onClick={() => setActiveTab('hadith')}
                >
                    📜 {language === 'ar' ? 'الأحاديث' : 'Hadith'}
                </button>
                <button
                    className={activeTab === 'audio' ? 'active' : ''}
                    onClick={() => setActiveTab('audio')}
                >
                    🎧 {language === 'ar' ? 'صوتيات' : 'Audio'}
                </button>
                <button
                    className={activeTab === 'expert' ? 'active' : ''}
                    onClick={() => setActiveTab('expert')}
                >
                    💡 {language === 'ar' ? 'نصائح' : 'Tips'}
                </button>
                <button
                    className={activeTab === 'resources' ? 'active' : ''}
                    onClick={() => setActiveTab('resources')}
                >
                    📖 {language === 'ar' ? 'كتب PDF' : 'PDFs'}
                </button>
            </div>

            {/* Hadith Tab */}
            {activeTab === 'hadith' && (
                <div className="hadith-content">
                    {/* Daily Hadith */}
                    <div className="daily-hadith-card">
                        <div className="daily-badge">🌟 {language === 'ar' ? 'حديث اليوم' : "Today's Hadith"}</div>
                        <p className="hadith-arabic">{dailyHadith.arabic}</p>
                        <p className="hadith-english">{dailyHadith.english}</p>
                        <div className="hadith-source">📖 {dailyHadith.source}</div>
                    </div>

                    {/* Search */}
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder={language === 'ar' ? 'ابحث في الأحاديث...' : 'Search hadith...'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        🔍
                    </div>

                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={selectedCategory === cat ? 'active' : ''}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat === 'all' ? (language === 'ar' ? 'الكل' : 'All') : cat}
                            </button>
                        ))}
                    </div>

                    {/* Hadith List */}
                    <div className="hadith-list">
                        {filteredHadith.map((h) => (
                            <div key={h.id} className="hadith-card">
                                <p className="hadith-arabic">{h.arabic}</p>
                                <p className="hadith-english">{h.english}</p>
                                <div className="hadith-meta">
                                    <span className="hadith-source">📖 {h.source}</span>
                                    <span className="hadith-category">🏷️ {h.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Audio Tab */}
            {activeTab === 'audio' && (
                <AudioPlayer language={language} />
            )}

            {/* Expert Tips Tab */}
            {activeTab === 'expert' && (
                <div className="expert-content">
                    <h2>💡 {language === 'ar' ? 'نصائح الخبراء لرمضان' : 'Expert Ramadan Tips'}</h2>

                    {Object.entries(expertSuggestions).map(([category, tips]) => (
                        <div key={category} className="tips-section">
                            <h3>
                                {category === 'fasting' && '🌙'}
                                {category === 'prayer' && '🕌'}
                                {category === 'quran' && '📖'}
                                {category === 'health' && '💪'}
                                {' '}
                                {language === 'ar'
                                    ? { fasting: 'الصيام', prayer: 'الصلاة', quran: 'القرآن', health: 'الصحة' }[category]
                                    : category.charAt(0).toUpperCase() + category.slice(1)}
                            </h3>
                            <div className="tips-grid">
                                {tips.map(tip => (
                                    <div key={tip.id} className="tip-card">
                                        <div className="tip-title">
                                            {language === 'ar' ? tip.titleAr : tip.titleEn}
                                        </div>
                                        <div className="tip-description">
                                            {language === 'ar' ? tip.descriptionAr : tip.descriptionEn}
                                        </div>
                                        <div className="tip-source">{tip.source}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
                <div className="resources-content">
                    <h2>📚 {language === 'ar' ? 'الكتب والمراجع' : 'Books & Resources'}</h2>

                    <div className="pdf-grid">
                        <a href={pdfResources.quran} target="_blank" rel="noopener noreferrer" className="pdf-card">
                            <div className="pdf-icon">📖</div>
                            <div className="pdf-title">{language === 'ar' ? 'القرآن الكريم' : 'The Holy Quran'}</div>
                            <div className="pdf-action">{language === 'ar' ? 'فتح PDF' : 'Open PDF'}</div>
                        </a>

                        <a href={pdfResources.tafsir} target="_blank" rel="noopener noreferrer" className="pdf-card">
                            <div className="pdf-icon">📚</div>
                            <div className="pdf-title">{language === 'ar' ? 'التفسير الميسر' : 'Simplified Tafsir'}</div>
                            <div className="pdf-action">{language === 'ar' ? 'فتح PDF' : 'Open PDF'}</div>
                        </a>

                        <a href={pdfResources.hadith} target="_blank" rel="noopener noreferrer" className="pdf-card">
                            <div className="pdf-icon">📜</div>
                            <div className="pdf-title">{language === 'ar' ? 'الأحاديث الصحيحة' : 'Authentic Hadith'}</div>
                            <div className="pdf-action">{language === 'ar' ? 'فتح PDF' : 'Open PDF'}</div>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HadithPage;
