import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './DuaCollection.css';

const DuaCollection = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';
    const [selectedCategory, setSelectedCategory] = useState('morning');
    const [searchTerm, setSearchTerm] = useState('');

    const duaCategories = [
        { id: 'morning', ar: 'أذكار الصباح', en: 'Morning', icon: '🌅' },
        { id: 'evening', ar: 'أذكار المساء', en: 'Evening', icon: '🌆' },
        { id: 'prayer', ar: 'أدعية الصلاة', en: 'Prayer', icon: '🕌' },
        { id: 'food', ar: 'أدعية الطعام', en: 'Food', icon: '🍽️' },
        { id: 'sleep', ar: 'أدعية النوم', en: 'Sleep', icon: '😴' },
        { id: 'protection', ar: 'أدعية الحماية', en: 'Protection', icon: '🛡️' },
        { id: 'forgiveness', ar: 'أدعية الاستغفار', en: 'Forgiveness', icon: '🙏' },
        { id: 'ramadan', ar: 'أدعية رمضان', en: 'Ramadan', icon: '🌙' },
    ];

    const duaCollection = {
        morning: [
            {
                ar: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
                en: 'We have reached the morning and at this very time all sovereignty belongs to Allah. Praise is to Allah. None has the right to be worshipped except Allah alone.',
                source: 'أبو داود',
                repeat: 1
            },
            {
                ar: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
                en: 'O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.',
                source: 'الترمذي',
                repeat: 1
            },
            {
                ar: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ',
                en: 'Glory and praise be to Allah',
                source: 'مسلم',
                repeat: 100
            },
        ],
        evening: [
            {
                ar: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
                en: 'We have reached the evening and at this very time all sovereignty belongs to Allah. Praise is to Allah.',
                source: 'أبو داود',
                repeat: 1
            },
            {
                ar: 'أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
                en: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
                source: 'مسلم',
                repeat: 3
            },
        ],
        prayer: [
            {
                ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
                en: 'Our Lord, give us in this world good and in the Hereafter good and protect us from the punishment of the Fire.',
                source: 'القرآن ٢:٢٠١',
                repeat: 1
            },
            {
                ar: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
                en: 'O Allah, I seek refuge in You from the punishment of the grave and from the trial of the False Messiah.',
                source: 'البخاري',
                repeat: 1
            },
        ],
        food: [
            {
                ar: 'بِسْمِ اللَّهِ',
                en: 'In the name of Allah',
                source: 'قبل الأكل',
                repeat: 1
            },
            {
                ar: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
                en: 'Praise be to Allah Who has fed me this and provided me with it without any strength or power from me.',
                source: 'أبو داود - بعد الأكل',
                repeat: 1
            },
            {
                ar: 'اللهم بارك لنا فيما رزقتنا وقنا عذاب النار',
                en: 'O Allah, bless us in what You have provided for us and protect us from the Fire.',
                source: 'عند الإفطار',
                repeat: 1
            },
        ],
        sleep: [
            {
                ar: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
                en: 'In Your name, O Allah, I die and I live.',
                source: 'البخاري',
                repeat: 1
            },
            {
                ar: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
                en: 'O Allah, protect me from Your punishment on the Day You resurrect Your servants.',
                source: 'أبو داود',
                repeat: 3
            },
        ],
        protection: [
            {
                ar: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
                en: 'In the name of Allah, with Whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.',
                source: 'الترمذي',
                repeat: 3
            },
            {
                ar: 'أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
                en: 'I seek refuge in the perfect words of Allah from every devil and poisonous pest, and from every evil eye.',
                source: 'البخاري - للأطفال',
                repeat: 1
            },
        ],
        forgiveness: [
            {
                ar: 'أَسْتَغْفِرُ اللهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ',
                en: 'I seek forgiveness from Allah the Almighty, whom there is none worthy of worship except Him, the Living, the Self-Subsisting, and I repent to Him.',
                source: 'أبو داود',
                repeat: 3
            },
            {
                ar: 'سَيِّدُ الِاسْتِغْفَارِ: اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ',
                en: 'Master of Forgiveness: O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your slave.',
                source: 'البخاري',
                repeat: 1
            },
        ],
        ramadan: [
            {
                ar: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
                en: 'O Allah, You are Most Forgiving, and You love forgiveness; so forgive me.',
                source: 'الترمذي - ليلة القدر',
                repeat: 100
            },
            {
                ar: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
                en: 'Thirst has gone, the veins are moist, and the reward is assured, if Allah wills.',
                source: 'أبو داود - عند الإفطار',
                repeat: 1
            },
            {
                ar: 'اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',
                en: 'O Allah, for You I have fasted and upon Your provision I have broken my fast.',
                source: 'أبو داود',
                repeat: 1
            },
        ],
    };

    const currentDuas = duaCollection[selectedCategory] || [];

    const filteredDuas = searchTerm
        ? currentDuas.filter(dua =>
            dua.ar.includes(searchTerm) ||
            dua.en.toLowerCase().includes(searchTerm.toLowerCase()))
        : currentDuas;

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert(language === 'ar' ? '✅ تم النسخ!' : '✅ Copied!');
    };

    return (
        <div className="dua-page">
            <div className="dua-header">
                <h1>🤲 {language === 'ar' ? 'كنز الأدعية' : 'Dua Treasury'}</h1>
                <p>{language === 'ar' ? 'أدعية مأثورة من السنة النبوية' : 'Authentic duas from Prophetic tradition'}</p>
            </div>

            {/* Search */}
            <div className="dua-search">
                <input
                    type="text"
                    placeholder={language === 'ar' ? 'ابحث في الأدعية...' : 'Search duas...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Categories */}
            <div className="dua-categories">
                {duaCategories.map(cat => (
                    <button
                        key={cat.id}
                        className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat.id)}
                    >
                        <span className="cat-icon">{cat.icon}</span>
                        <span className="cat-name">{language === 'ar' ? cat.ar : cat.en}</span>
                    </button>
                ))}
            </div>

            {/* Duas List */}
            <div className="duas-list">
                {filteredDuas.map((dua, idx) => (
                    <div key={idx} className="dua-card">
                        <div className="dua-arabic">{dua.ar}</div>
                        <div className="dua-english">{dua.en}</div>
                        <div className="dua-meta">
                            <span className="dua-source">📚 {dua.source}</span>
                            {dua.repeat > 1 && (
                                <span className="dua-repeat">🔄 ×{dua.repeat}</span>
                            )}
                        </div>
                        <div className="dua-actions">
                            <button onClick={() => handleCopy(dua.ar)}>
                                📋 {language === 'ar' ? 'نسخ' : 'Copy'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredDuas.length === 0 && (
                <div className="no-results">
                    {language === 'ar' ? 'لا توجد نتائج' : 'No results found'}
                </div>
            )}

            {/* Expert Note */}
            <div className="expert-note">
                <h4>💡 {language === 'ar' ? 'نصيحة' : 'Tip'}</h4>
                <p>
                    {language === 'ar'
                        ? 'أفضل أوقات الدعاء: الثلث الأخير من الليل، بين الأذان والإقامة، آخر ساعة من الجمعة، وفي السجود.'
                        : 'Best times for dua: Last third of night, between Adhan and Iqama, last hour of Friday, and in Sujood.'}
                </p>
            </div>
        </div>
    );
};

export default DuaCollection;
