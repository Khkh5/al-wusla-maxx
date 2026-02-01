import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './QuranReader.css';

const TOTAL_PAGES = 604; // Total pages in Quran

const QuranReader = () => {
    const { quranProgress, updateQuranProgress, settings } = useAppStore();
    const [currentPage, setCurrentPage] = useState(quranProgress?.currentPage || 1);
    const [explosion, setExplosion] = useState(null);
    const [loading, setLoading] = useState(false);

    // Sample Ramadan verses that will "pulse"
    const ramadanVerses = [
        { surah: 2, ayah: 183, page: 28, text: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ..." },
        { surah: 2, ayah: 185, page: 28, text: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ..." },
        { surah: 97, ayah: 1, page: 598, text: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ" },
    ];

    const handlePageComplete = async () => {
        setLoading(true);
        try {
            // Call real API through Zustand store
            const result = await updateQuranProgress(currentPage);

            // Trigger explosion animation with real multiplier data
            setExplosion({
                amount: result?.hasanat || 10,
                multiplier: result?.multiplier || '10x'
            });

            setTimeout(() => setExplosion(null), 3000);

            // Move to next page
            setCurrentPage(Math.min(TOTAL_PAGES, currentPage + 1));
        } catch (error) {
            console.error('Error completing page:', error);
            // Show local explosion anyway
            setExplosion({ amount: 10, multiplier: '10x' });
            setTimeout(() => setExplosion(null), 3000);
            setCurrentPage(Math.min(TOTAL_PAGES, currentPage + 1));
        }
        setLoading(false);
    };

    const completedPages = quranProgress?.completedPages?.length || 0;
    const progress = (completedPages / TOTAL_PAGES) * 100;

    return (
        <div className="quran-reader">
            {/* Header */}
            <div className="quran-header">
                <div className="header-content">
                    <h1 className="page-title">
                        {settings.language === 'ar' ? 'القرآن الكريم' : 'The Noble Quran'}
                    </h1>
                    <div className="progress-display">
                        <div className="progress-stats">
                            <span>
                                {settings?.language === 'ar' ? 'الصفحة' : 'Page'}: {currentPage} / {TOTAL_PAGES}
                            </span>
                            <span>
                                {settings?.language === 'ar' ? 'الخَتمات' : 'Khatmah'}: {quranProgress?.khatmahCount || 0}
                            </span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="progress-percentage">{progress.toFixed(1)}%</div>
                    </div>
                </div>
            </div>

            {/* Quran Display Area */}
            <div className="quran-content">
                {/* Ramadan Verses Highlight Section */}
                <div className="ramadan-highlights">
                    <h3>{settings.language === 'ar' ? 'آيات رمضان' : 'Ramadan Verses'}</h3>
                    <div className="verses-grid">
                        {ramadanVerses.map((verse, idx) => (
                            <div
                                key={idx}
                                className="verse-card pulse-verse"
                                onClick={() => setCurrentPage(verse.page)}
                            >
                                <div className="verse-meta">
                                    {settings.language === 'ar' ? 'سورة' : 'Surah'} {verse.surah} • {settings.language === 'ar' ? 'آية' : 'Ayah'} {verse.ayah}
                                </div>
                                <div className="verse-text">{verse.text}</div>
                                <div className="verse-action">
                                    {settings.language === 'ar' ? 'انتقل إلى الصفحة' : 'Go to Page'} {verse.page}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Reading Area */}
                <div className="reading-area">
                    <div className="page-display">
                        <div className="page-number">
                            {settings.language === 'ar' ? 'صفحة' : 'Page'} {currentPage}
                        </div>
                        <div className="quran-viewer">
                            {/* Quran.com Embed - Shows actual Quran pages */}
                            <iframe
                                src={`https://quran.com/page/${currentPage}?embed=true`}
                                title="Quran Page"
                                className="quran-iframe"
                                frameBorder="0"
                                allow="autoplay"
                            />
                        </div>
                        <div className="quran-link">
                            <a
                                href={`https://quran.com/page/${currentPage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {settings.language === 'ar' ? '🔗 افتح في Quran.com' : '🔗 Open in Quran.com'}
                            </a>
                        </div>
                    </div>

                    {/* Page Controls */}
                    <div className="page-controls">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                        >
                            {settings.language === 'ar' ? '←' : '→'}
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={handlePageComplete}
                        >
                            {settings.language === 'ar' ? '✓ أتممت الصفحة' : '✓ Page Complete'}
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={() => setCurrentPage(Math.min(604, currentPage + 1))}
                            disabled={currentPage === 604}
                        >
                            {settings.language === 'ar' ? '→' : '←'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Explosion Animation */}
            {explosion && (
                <div className="hasanat-explosion">
                    <div className="explosion-container">
                        {Array.from({ length: explosion.multiplier === 700 ? 20 : 10 }).map((_, i) => (
                            <div
                                key={i}
                                className={`particle ${explosion.multiplier === 700 ? 'wheat' : 'gold'}`}
                                style={{
                                    '--angle': `${(360 / (explosion.multiplier === 700 ? 20 : 10)) * i}deg`,
                                    '--distance': `${100 + Math.random() * 100}px`,
                                }}
                            />
                        ))}
                        <div className="explosion-text">
                            {explosion.multiplier === 700 ? (
                                <div className="mega-multiplier">
                                    <div className="ayah">وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ</div>
                                    <div className="multiplier">×{explosion.multiplier}</div>
                                    <div className="amount">+{explosion.amount.toLocaleString('ar-EG')}</div>
                                </div>
                            ) : (
                                <div className="normal-multiplier">
                                    <div className="ayah">مَن جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا</div>
                                    <div className="multiplier">×{explosion.multiplier}</div>
                                    <div className="amount">+{explosion.amount.toLocaleString('ar-EG')}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Anti-Perfectionism Message */}
            {quranProgress.completedPages.length > 0 && quranProgress.completedPages.length < quranProgress.totalPages && (
                <div className="encouragement-box">
                    <p className="allah-name">
                        {settings.language === 'ar'
                            ? 'الله يكافئ الجهد، وليس الكمال فقط. لقد حفظنا مكانك. ✨'
                            : 'Allah rewards the effort, not just completion. We saved your spot. ✨'}
                    </p>
                </div>
            )}
        </div>
    );
};

export default QuranReader;
