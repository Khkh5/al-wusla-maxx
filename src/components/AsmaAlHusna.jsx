import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './AsmaAlHusna.css';

const AsmaAlHusna = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';
    const [search, setSearch] = useState('');
    const [selectedName, setSelectedName] = useState(null);

    // Complete 99 Names of Allah
    const names = [
        { n: 1, ar: 'الرَّحْمَنُ', en: 'Ar-Rahman', m: 'The Most Merciful' },
        { n: 2, ar: 'الرَّحِيمُ', en: 'Ar-Raheem', m: 'The Most Compassionate' },
        { n: 3, ar: 'الْمَلِكُ', en: 'Al-Malik', m: 'The King' },
        { n: 4, ar: 'الْقُدُّوسُ', en: 'Al-Quddus', m: 'The Holy' },
        { n: 5, ar: 'السَّلَامُ', en: 'As-Salam', m: 'The Source of Peace' },
        { n: 6, ar: 'الْمُؤْمِنُ', en: 'Al-Mumin', m: 'The Guardian of Faith' },
        { n: 7, ar: 'الْمُهَيْمِنُ', en: 'Al-Muhaymin', m: 'The Protector' },
        { n: 8, ar: 'الْعَزِيزُ', en: 'Al-Aziz', m: 'The Mighty' },
        { n: 9, ar: 'الْجَبَّارُ', en: 'Al-Jabbar', m: 'The Compeller' },
        { n: 10, ar: 'الْمُتَكَبِّرُ', en: 'Al-Mutakabbir', m: 'The Supreme' },
        { n: 11, ar: 'الْخَالِقُ', en: 'Al-Khaliq', m: 'The Creator' },
        { n: 12, ar: 'الْبَارِئُ', en: 'Al-Bari', m: 'The Evolver' },
        { n: 13, ar: 'الْمُصَوِّرُ', en: 'Al-Musawwir', m: 'The Fashioner' },
        { n: 14, ar: 'الْغَفَّارُ', en: 'Al-Ghaffar', m: 'The Forgiver' },
        { n: 15, ar: 'الْقَهَّارُ', en: 'Al-Qahhar', m: 'The Subduer' },
        { n: 16, ar: 'الْوَهَّابُ', en: 'Al-Wahhab', m: 'The Bestower' },
        { n: 17, ar: 'الرَّزَّاقُ', en: 'Ar-Razzaq', m: 'The Provider' },
        { n: 18, ar: 'الْفَتَّاحُ', en: 'Al-Fattah', m: 'The Opener' },
        { n: 19, ar: 'الْعَلِيمُ', en: 'Al-Alim', m: 'The All-Knowing' },
        { n: 20, ar: 'الْقَابِضُ', en: 'Al-Qabid', m: 'The Constrictor' },
        { n: 21, ar: 'الْبَاسِطُ', en: 'Al-Basit', m: 'The Expander' },
        { n: 22, ar: 'الْخَافِضُ', en: 'Al-Khafid', m: 'The Abaser' },
        { n: 23, ar: 'الرَّافِعُ', en: 'Ar-Rafi', m: 'The Exalter' },
        { n: 24, ar: 'الْمُعِزُّ', en: 'Al-Muizz', m: 'The Honorer' },
        { n: 25, ar: 'الْمُذِلُّ', en: 'Al-Mudhill', m: 'The Humiliator' },
        { n: 26, ar: 'السَّمِيعُ', en: 'As-Sami', m: 'The All-Hearing' },
        { n: 27, ar: 'الْبَصِيرُ', en: 'Al-Basir', m: 'The All-Seeing' },
        { n: 28, ar: 'الْحَكَمُ', en: 'Al-Hakam', m: 'The Judge' },
        { n: 29, ar: 'الْعَدْلُ', en: 'Al-Adl', m: 'The Just' },
        { n: 30, ar: 'اللَّطِيفُ', en: 'Al-Latif', m: 'The Subtle' },
        { n: 31, ar: 'الْخَبِيرُ', en: 'Al-Khabir', m: 'The Aware' },
        { n: 32, ar: 'الْحَلِيمُ', en: 'Al-Halim', m: 'The Forbearing' },
        { n: 33, ar: 'الْعَظِيمُ', en: 'Al-Azim', m: 'The Magnificent' },
        { n: 34, ar: 'الْغَفُورُ', en: 'Al-Ghafur', m: 'The All-Forgiving' },
        { n: 35, ar: 'الشَّكُورُ', en: 'Ash-Shakur', m: 'The Appreciative' },
        { n: 36, ar: 'الْعَلِيُّ', en: 'Al-Ali', m: 'The Most High' },
        { n: 37, ar: 'الْكَبِيرُ', en: 'Al-Kabir', m: 'The Great' },
        { n: 38, ar: 'الْحَفِيظُ', en: 'Al-Hafiz', m: 'The Preserver' },
        { n: 39, ar: 'الْمُقِيتُ', en: 'Al-Muqit', m: 'The Nourisher' },
        { n: 40, ar: 'الْحَسِيبُ', en: 'Al-Hasib', m: 'The Reckoner' },
        { n: 41, ar: 'الْجَلِيلُ', en: 'Al-Jalil', m: 'The Majestic' },
        { n: 42, ar: 'الْكَرِيمُ', en: 'Al-Karim', m: 'The Generous' },
        { n: 43, ar: 'الرَّقِيبُ', en: 'Ar-Raqib', m: 'The Watchful' },
        { n: 44, ar: 'الْمُجِيبُ', en: 'Al-Mujib', m: 'The Responsive' },
        { n: 45, ar: 'الْوَاسِعُ', en: 'Al-Wasi', m: 'The All-Encompassing' },
        { n: 46, ar: 'الْحَكِيمُ', en: 'Al-Hakim', m: 'The Wise' },
        { n: 47, ar: 'الْوَدُودُ', en: 'Al-Wadud', m: 'The Loving' },
        { n: 48, ar: 'الْمَجِيدُ', en: 'Al-Majid', m: 'The Glorious' },
        { n: 49, ar: 'الْبَاعِثُ', en: 'Al-Baith', m: 'The Resurrector' },
        { n: 50, ar: 'الشَّهِيدُ', en: 'Ash-Shahid', m: 'The Witness' },
        { n: 51, ar: 'الْحَقُّ', en: 'Al-Haqq', m: 'The Truth' },
        { n: 52, ar: 'الْوَكِيلُ', en: 'Al-Wakil', m: 'The Trustee' },
        { n: 53, ar: 'الْقَوِيُّ', en: 'Al-Qawiyy', m: 'The Strong' },
        { n: 54, ar: 'الْمَتِينُ', en: 'Al-Matin', m: 'The Firm' },
        { n: 55, ar: 'الْوَلِيُّ', en: 'Al-Waliyy', m: 'The Protecting Friend' },
        { n: 56, ar: 'الْحَمِيدُ', en: 'Al-Hamid', m: 'The Praiseworthy' },
        { n: 57, ar: 'الْمُحْصِي', en: 'Al-Muhsi', m: 'The Counter' },
        { n: 58, ar: 'الْمُبْدِئُ', en: 'Al-Mubdi', m: 'The Originator' },
        { n: 59, ar: 'الْمُعِيدُ', en: 'Al-Muid', m: 'The Restorer' },
        { n: 60, ar: 'الْمُحْيِي', en: 'Al-Muhyi', m: 'The Giver of Life' },
        { n: 61, ar: 'الْمُمِيتُ', en: 'Al-Mumit', m: 'The Taker of Life' },
        { n: 62, ar: 'الْحَيُّ', en: 'Al-Hayy', m: 'The Ever-Living' },
        { n: 63, ar: 'الْقَيُّومُ', en: 'Al-Qayyum', m: 'The Self-Subsisting' },
        { n: 64, ar: 'الْوَاجِدُ', en: 'Al-Wajid', m: 'The Finder' },
        { n: 65, ar: 'الْمَاجِدُ', en: 'Al-Majid', m: 'The Noble' },
        { n: 66, ar: 'الْوَاحِدُ', en: 'Al-Wahid', m: 'The One' },
        { n: 67, ar: 'الْأَحَدُ', en: 'Al-Ahad', m: 'The Unique' },
        { n: 68, ar: 'الصَّمَدُ', en: 'As-Samad', m: 'The Eternal' },
        { n: 69, ar: 'الْقَادِرُ', en: 'Al-Qadir', m: 'The Able' },
        { n: 70, ar: 'الْمُقْتَدِرُ', en: 'Al-Muqtadir', m: 'The Powerful' },
        { n: 71, ar: 'الْمُقَدِّمُ', en: 'Al-Muqaddim', m: 'The Expediter' },
        { n: 72, ar: 'الْمُؤَخِّرُ', en: 'Al-Muakhkhir', m: 'The Delayer' },
        { n: 73, ar: 'الْأَوَّلُ', en: 'Al-Awwal', m: 'The First' },
        { n: 74, ar: 'الْآخِرُ', en: 'Al-Akhir', m: 'The Last' },
        { n: 75, ar: 'الظَّاهِرُ', en: 'Az-Zahir', m: 'The Manifest' },
        { n: 76, ar: 'الْبَاطِنُ', en: 'Al-Batin', m: 'The Hidden' },
        { n: 77, ar: 'الْوَالِي', en: 'Al-Wali', m: 'The Governor' },
        { n: 78, ar: 'الْمُتَعَالِي', en: 'Al-Mutaali', m: 'The Most Exalted' },
        { n: 79, ar: 'الْبَرُّ', en: 'Al-Barr', m: 'The Source of Goodness' },
        { n: 80, ar: 'التَّوَّابُ', en: 'At-Tawwab', m: 'The Acceptor of Repentance' },
        { n: 81, ar: 'الْمُنْتَقِمُ', en: 'Al-Muntaqim', m: 'The Avenger' },
        { n: 82, ar: 'الْعَفُوُّ', en: 'Al-Afuww', m: 'The Pardoner' },
        { n: 83, ar: 'الرَّءُوفُ', en: 'Ar-Rauf', m: 'The Compassionate' },
        { n: 84, ar: 'مَالِكُ الْمُلْكِ', en: 'Malik-ul-Mulk', m: 'Owner of Sovereignty' },
        { n: 85, ar: 'ذُو الْجَلَالِ وَالْإِكْرَامِ', en: 'Dhul-Jalali wal-Ikram', m: 'Lord of Majesty' },
        { n: 86, ar: 'الْمُقْسِطُ', en: 'Al-Muqsit', m: 'The Equitable' },
        { n: 87, ar: 'الْجَامِعُ', en: 'Al-Jami', m: 'The Gatherer' },
        { n: 88, ar: 'الْغَنِيُّ', en: 'Al-Ghaniyy', m: 'The Self-Sufficient' },
        { n: 89, ar: 'الْمُغْنِي', en: 'Al-Mughni', m: 'The Enricher' },
        { n: 90, ar: 'الْمَانِعُ', en: 'Al-Mani', m: 'The Withholder' },
        { n: 91, ar: 'الضَّارُّ', en: 'Ad-Darr', m: 'The Distresser' },
        { n: 92, ar: 'النَّافِعُ', en: 'An-Nafi', m: 'The Benefiter' },
        { n: 93, ar: 'النُّورُ', en: 'An-Nur', m: 'The Light' },
        { n: 94, ar: 'الْهَادِي', en: 'Al-Hadi', m: 'The Guide' },
        { n: 95, ar: 'الْبَدِيعُ', en: 'Al-Badi', m: 'The Originator' },
        { n: 96, ar: 'الْبَاقِي', en: 'Al-Baqi', m: 'The Everlasting' },
        { n: 97, ar: 'الْوَارِثُ', en: 'Al-Warith', m: 'The Inheritor' },
        { n: 98, ar: 'الرَّشِيدُ', en: 'Ar-Rashid', m: 'The Guide to the Right Path' },
        { n: 99, ar: 'الصَّبُورُ', en: 'As-Sabur', m: 'The Patient' },
    ];

    const filteredNames = names.filter(name =>
        name.ar.includes(search) ||
        name.en.toLowerCase().includes(search.toLowerCase()) ||
        name.m.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="asma-page">
            <div className="asma-header">
                <h1>☪️ {language === 'ar' ? 'أسماء الله الحسنى' : '99 Names of Allah'}</h1>
                <p>{language === 'ar' ? 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا' : 'And to Allah belong the most beautiful names'}</p>
            </div>

            {/* Search */}
            <div className="asma-search">
                <input
                    type="text"
                    placeholder={language === 'ar' ? 'ابحث عن اسم...' : 'Search names...'}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Names Grid */}
            <div className="names-grid">
                {filteredNames.map(name => (
                    <div
                        key={name.n}
                        className={`name-card ${selectedName === name.n ? 'selected' : ''}`}
                        onClick={() => setSelectedName(selectedName === name.n ? null : name.n)}
                    >
                        <div className="name-number">{name.n}</div>
                        <div className="name-arabic">{name.ar}</div>
                        <div className="name-transliteration">{name.en}</div>
                        {selectedName === name.n && (
                            <div className="name-meaning">{name.m}</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Hadith about Names */}
            <div className="names-hadith">
                <p>
                    {language === 'ar'
                        ? 'قال ﷺ: "إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةً إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ"'
                        : 'The Prophet ﷺ said: "Allah has 99 names. Whoever memorizes them will enter Paradise."'}
                </p>
                <span>📚 {language === 'ar' ? 'البخاري ومسلم' : 'Bukhari & Muslim'}</span>
            </div>
        </div>
    );
};

export default AsmaAlHusna;
