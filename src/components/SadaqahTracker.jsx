import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './SadaqahTracker.css';

const SadaqahTracker = () => {
    const { settings, user } = useAppStore();
    const language = settings?.language || 'ar';

    const [amount, setAmount] = useState('');
    const [sadaqahType, setSadaqahType] = useState('money');
    const [donations, setDonations] = useState([
        { id: 1, amount: 50, type: 'money', date: '2026-02-01', description: 'للفقراء' },
        { id: 2, amount: 1, type: 'food', date: '2026-01-31', description: 'إطعام صائم' },
    ]);
    const [streak, setStreak] = useState(7);
    const [monthlyTotal, setMonthlyTotal] = useState(150);

    const sadaqahTypes = [
        { id: 'money', ar: 'مال', en: 'Money', icon: '💵' },
        { id: 'food', ar: 'طعام', en: 'Food', icon: '🍞' },
        { id: 'clothes', ar: 'ملابس', en: 'Clothes', icon: '👕' },
        { id: 'time', ar: 'وقت', en: 'Time', icon: '⏰' },
        { id: 'smile', ar: 'ابتسامة', en: 'Smile', icon: '😊' },
        { id: 'dua', ar: 'دعاء', en: 'Dua', icon: '🤲' },
        { id: 'knowledge', ar: 'علم', en: 'Knowledge', icon: '📚' },
    ];

    const handleAddDonation = () => {
        if (!amount) return;

        const newDonation = {
            id: Date.now(),
            amount: parseFloat(amount),
            type: sadaqahType,
            date: new Date().toISOString().split('T')[0],
            description: ''
        };

        setDonations([newDonation, ...donations]);
        setAmount('');
        setMonthlyTotal(prev => prev + parseFloat(amount));

        // Award hasanat (simulated)
        alert(`${language === 'ar' ? '✨ بارك الله فيك! +70 حسنة' : '✨ May Allah bless you! +70 Hasanat'}`);
    };

    // Hadith about Sadaqah
    const hadith = {
        ar: 'الصدقة تُطفئ الخطيئة كما يُطفئ الماء النار',
        en: 'Charity extinguishes sin as water extinguishes fire',
        source: 'الترمذي'
    };

    return (
        <div className="sadaqah-page">
            <div className="sadaqah-header">
                <h1>❤️ {language === 'ar' ? 'متتبع الصدقة' : 'Sadaqah Tracker'}</h1>
                <p>{language === 'ar' ? 'كل ما أنفقته في سبيل الله' : 'All you spend for Allah\'s sake'}</p>
            </div>

            {/* Stats Cards */}
            <div className="stats-row">
                <div className="stat-card streak">
                    <span className="stat-icon">🔥</span>
                    <span className="stat-value">{streak}</span>
                    <span className="stat-label">{language === 'ar' ? 'أيام متتالية' : 'Day Streak'}</span>
                </div>
                <div className="stat-card total">
                    <span className="stat-icon">💰</span>
                    <span className="stat-value">{monthlyTotal}</span>
                    <span className="stat-label">{language === 'ar' ? 'هذا الشهر' : 'This Month'}</span>
                </div>
            </div>

            {/* Add Sadaqah */}
            <div className="add-sadaqah">
                <h3>{language === 'ar' ? '➕ سجّل صدقتك' : '➕ Log Sadaqah'}</h3>

                {/* Type Selection */}
                <div className="type-grid">
                    {sadaqahTypes.map(type => (
                        <button
                            key={type.id}
                            className={`type-btn ${sadaqahType === type.id ? 'active' : ''}`}
                            onClick={() => setSadaqahType(type.id)}
                        >
                            <span className="type-icon">{type.icon}</span>
                            <span className="type-name">{language === 'ar' ? type.ar : type.en}</span>
                        </button>
                    ))}
                </div>

                {/* Amount Input */}
                <div className="amount-input">
                    <input
                        type="number"
                        placeholder={language === 'ar' ? 'المبلغ / الكمية' : 'Amount / Quantity'}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button className="add-btn" onClick={handleAddDonation}>
                        {language === 'ar' ? 'سجّل' : 'Log'}
                    </button>
                </div>
            </div>

            {/* Recent Donations */}
            <div className="recent-donations">
                <h3>{language === 'ar' ? '📋 السجل الأخير' : '📋 Recent Log'}</h3>
                <div className="donations-list">
                    {donations.slice(0, 5).map(donation => {
                        const type = sadaqahTypes.find(t => t.id === donation.type);
                        return (
                            <div key={donation.id} className="donation-item">
                                <span className="donation-icon">{type?.icon || '💵'}</span>
                                <div className="donation-details">
                                    <span className="donation-type">
                                        {language === 'ar' ? type?.ar : type?.en}
                                    </span>
                                    <span className="donation-date">{donation.date}</span>
                                </div>
                                <span className="donation-amount">{donation.amount}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Hadith */}
            <div className="sadaqah-hadith">
                <p className="hadith-text">"{language === 'ar' ? hadith.ar : hadith.en}"</p>
                <span className="hadith-source">📚 {hadith.source}</span>
            </div>

            {/* Types of Sadaqah */}
            <div className="sadaqah-types-info">
                <h3>{language === 'ar' ? '💡 أنواع الصدقة' : '💡 Types of Sadaqah'}</h3>
                <ul>
                    <li>{language === 'ar' ? 'الابتسامة في وجه أخيك صدقة' : 'Smiling at your brother is charity'}</li>
                    <li>{language === 'ar' ? 'إماطة الأذى عن الطريق صدقة' : 'Removing harm from the road is charity'}</li>
                    <li>{language === 'ar' ? 'الكلمة الطيبة صدقة' : 'A good word is charity'}</li>
                    <li>{language === 'ar' ? 'سقي الماء صدقة جارية' : 'Providing water is ongoing charity'}</li>
                </ul>
            </div>
        </div>
    );
};

export default SadaqahTracker;
