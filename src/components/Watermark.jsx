import './Watermark.css';

const Watermark = () => {
    // Islamic quotes with attribution
    const quotes = [
        { ar: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ', en: 'Actions are judged by intentions' },
        { ar: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا', en: 'Whoever fears Allah, He will make a way out' },
        { ar: 'فَاذْكُرُونِي أَذْكُرْكُمْ', en: 'Remember Me, I will remember you' },
        { ar: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', en: 'With hardship comes ease' },
        { ar: 'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ', en: 'Cooperate in righteousness and piety' },
        { ar: 'خَيْرُكُمْ مَن تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ', en: 'Best of you is who learns Quran and teaches it' },
        { ar: 'مَن سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا', en: 'Who travels seeking knowledge...' },
        { ar: 'الدُّعَاءُ هُوَ الْعِبَادَةُ', en: 'Dua is worship' },
        { ar: 'خَيْرُ الزَّادِ التَّقْوَى', en: 'Best provision is Taqwa' },
        { ar: 'وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ', en: 'Be patient, patience is only with Allah' }
    ];

    // Random quote on mount
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className="watermark">
            <span className="watermark-quote">{randomQuote.ar}</span>
            <div className="watermark-footer">
                <span className="watermark-sender">— K.</span>
                <span className="watermark-copyright">© 2026 Al-Wusla Maxx</span>
            </div>
        </div>
    );
};

export default Watermark;
