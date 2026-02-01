import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './DailyHadith.css';

const DailyHadith = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    const [currentHadith, setCurrentHadith] = useState(0);
    const [saved, setSaved] = useState([]);

    // Collection of Authentic Hadith
    const hadiths = [
        {
            arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
            english: 'Actions are judged by intentions, and everyone will be rewarded according to their intention.',
            source: 'البخاري ومسلم',
            narrator: 'عمر بن الخطاب رضي الله عنه',
            topic: 'النية'
        },
        {
            arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
            english: 'The best among you are those who learn the Quran and teach it.',
            source: 'البخاري',
            narrator: 'عثمان بن عفان رضي الله عنه',
            topic: 'القرآن'
        },
        {
            arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
            english: 'Whoever takes a path seeking knowledge, Allah makes easy for him a path to Paradise.',
            source: 'مسلم',
            narrator: 'أبو هريرة رضي الله عنه',
            topic: 'العلم'
        },
        {
            arabic: 'الصَّلَوَاتُ الْخَمْسُ وَالْجُمُعَةُ إِلَى الْجُمُعَةِ كَفَّارَاتٌ لِمَا بَيْنَهُنَّ',
            english: 'The five prayers and Friday to Friday are expiation for what is between them.',
            source: 'مسلم',
            narrator: 'أبو هريرة رضي الله عنه',
            topic: 'الصلاة'
        },
        {
            arabic: 'مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
            english: 'Whoever fasts Ramadan with faith and seeking reward, his past sins will be forgiven.',
            source: 'البخاري ومسلم',
            narrator: 'أبو هريرة رضي الله عنه',
            topic: 'الصيام'
        },
        {
            arabic: 'مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ',
            english: 'Whoever says SubhanAllah wa bihamdihi 100 times, his sins will be wiped away.',
            source: 'البخاري ومسلم',
            narrator: 'أبو هريرة رضي الله عنه',
            topic: 'الذكر'
        },
        {
            arabic: 'الدُّعَاءُ هُوَ الْعِبَادَةُ',
            english: 'Dua is worship.',
            source: 'الترمذي',
            narrator: 'النعمان بن بشير رضي الله عنه',
            topic: 'الدعاء'
        },
        {
            arabic: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا',
            english: 'Fear Allah wherever you are and follow up a bad deed with a good deed to erase it.',
            source: 'الترمذي',
            narrator: 'معاذ بن جبل رضي الله عنه',
            topic: 'التقوى'
        },
        {
            arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
            english: 'None of you truly believes until he loves for his brother what he loves for himself.',
            source: 'البخاري ومسلم',
            narrator: 'أنس بن مالك رضي الله عنه',
            topic: 'الإيمان'
        },
        {
            arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ',
            english: 'Your smile in the face of your brother is charity.',
            source: 'الترمذي',
            narrator: 'أبو ذر رضي الله عنه',
            topic: 'الصدقة'
        },
    ];

    // Get daily hadith based on date
    useEffect(() => {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        setCurrentHadith(dayOfYear % hadiths.length);
    }, []);

    const hadith = hadiths[currentHadith];

    const handleNext = () => {
        setCurrentHadith((prev) => (prev + 1) % hadiths.length);
    };

    const handlePrev = () => {
        setCurrentHadith((prev) => (prev - 1 + hadiths.length) % hadiths.length);
    };

    const handleSave = () => {
        if (!saved.includes(currentHadith)) {
            setSaved([...saved, currentHadith]);
            alert(language === 'ar' ? '✅ تم الحفظ!' : '✅ Saved!');
        }
    };

    const handleShare = async () => {
        const text = `${hadith.arabic}\n\n${hadith.english}\n\n📚 ${hadith.source}`;

        if (navigator.share) {
            try {
                await navigator.share({ text });
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            navigator.clipboard.writeText(text);
            alert(language === 'ar' ? '📋 تم النسخ!' : '📋 Copied!');
        }
    };

    return (
        <div className="hadith-page">
            <div className="hadith-header">
                <h1>📿 {language === 'ar' ? 'حديث اليوم' : 'Daily Hadith'}</h1>
                <span className="hadith-count">{currentHadith + 1} / {hadiths.length}</span>
            </div>

            {/* Main Hadith Card */}
            <div className="hadith-card">
                <div className="hadith-topic">
                    {hadith.topic}
                </div>

                <p className="hadith-arabic">{hadith.arabic}</p>

                <p className="hadith-english">{hadith.english}</p>

                <div className="hadith-meta">
                    <span className="narrator">🧔 {hadith.narrator}</span>
                    <span className="source">📚 {hadith.source}</span>
                </div>
            </div>

            {/* Navigation */}
            <div className="hadith-nav">
                <button onClick={handlePrev}>◀ {language === 'ar' ? 'السابق' : 'Prev'}</button>
                <button onClick={handleNext}>{language === 'ar' ? 'التالي' : 'Next'} ▶</button>
            </div>

            {/* Actions */}
            <div className="hadith-actions">
                <button className="action-btn save" onClick={handleSave}>
                    {saved.includes(currentHadith) ? '💖' : '🤍'} {language === 'ar' ? 'حفظ' : 'Save'}
                </button>
                <button className="action-btn share" onClick={handleShare}>
                    📤 {language === 'ar' ? 'مشاركة' : 'Share'}
                </button>
            </div>

            {/* Topics */}
            <div className="topics-section">
                <h3>{language === 'ar' ? '📌 المواضيع' : '📌 Topics'}</h3>
                <div className="topics-grid">
                    {[...new Set(hadiths.map(h => h.topic))].map((topic, idx) => (
                        <button
                            key={idx}
                            className={`topic-btn ${hadiths[currentHadith].topic === topic ? 'active' : ''}`}
                            onClick={() => setCurrentHadith(hadiths.findIndex(h => h.topic === topic))}
                        >
                            {topic}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DailyHadith;
