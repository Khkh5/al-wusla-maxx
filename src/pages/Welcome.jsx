import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import './Welcome.css';

const Welcome = () => {
    const navigate = useNavigate();
    const { settings, user } = useAppStore();
    const language = settings?.language || 'ar';
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            icon: '🌙',
            title: { ar: 'مرحباً بك في الوُصلة', en: 'Welcome to Al-Wusla' },
            desc: { ar: 'رفيقك الرقمي في رمضان ٢٠٢٦', en: 'Your Digital Companion for Ramadan 2026' },
            visual: '🕌✨🌙'
        },
        {
            icon: '📖',
            title: { ar: 'اقرأ القرآن الكريم', en: 'Read the Holy Quran' },
            desc: { ar: 'تتبع ختماتك مع انفجارات الحسنات', en: 'Track your Khatmah with Hasanat explosions' },
            visual: '📖 → ✨×10 → 🏆'
        },
        {
            icon: '🏆',
            title: { ar: 'تنافس مع أصدقائك', en: 'Compete with Friends' },
            desc: { ar: 'لوحة شرف حية - من سيكون الأول؟', en: 'Live leaderboard - who will be #1?' },
            visual: '🥇🥈🥉'
        },
        {
            icon: '💪',
            title: { ar: 'راقب صحتك', en: 'Monitor Your Health' },
            desc: { ar: 'Autophagy • Sleep • Hydration', en: 'Autophagy • Sleep • Hydration' },
            visual: '🧬💧😴'
        },
        {
            icon: '📝',
            title: { ar: 'أضف عاداتك', en: 'Add Your Habits' },
            desc: { ar: 'صمم روتينك الرمضاني المثالي', en: 'Design your perfect Ramadan routine' },
            visual: '✅✅✅'
        }
    ];

    const features = [
        { icon: '📖', ar: 'القرآن', en: 'Quran' },
        { icon: '🕌', ar: 'الصلاة', en: 'Prayer' },
        { icon: '🌙', ar: 'الصيام', en: 'Fasting' },
        { icon: '📿', ar: 'التسبيح', en: 'Tasbih' },
        { icon: '🤲', ar: 'الأدعية', en: 'Duas' },
        { icon: '🏆', ar: 'التنافس', en: 'Competition' },
        { icon: '📊', ar: 'التقدم', en: 'Progress' },
        { icon: '💪', ar: 'الصحة', en: 'Health' }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            // Mark welcome as seen and go to main app
            localStorage.setItem('welcomeSeen', 'true');
            navigate('/');
        }
    };

    const skipWelcome = () => {
        localStorage.setItem('welcomeSeen', 'true');
        navigate('/');
    };

    return (
        <div className="welcome-page">
            {/* Skip Button */}
            <button className="skip-btn" onClick={skipWelcome}>
                {language === 'ar' ? 'تخطي' : 'Skip'} →
            </button>

            {/* Slide Content */}
            <div className="slide-container">
                <div className="slide" key={currentSlide}>
                    <div className="slide-visual">{slides[currentSlide].visual}</div>
                    <div className="slide-icon">{slides[currentSlide].icon}</div>
                    <h1>{language === 'ar' ? slides[currentSlide].title.ar : slides[currentSlide].title.en}</h1>
                    <p>{language === 'ar' ? slides[currentSlide].desc.ar : slides[currentSlide].desc.en}</p>
                </div>
            </div>

            {/* Features Grid (only on first slide) */}
            {currentSlide === 0 && (
                <div className="features-preview">
                    {features.map((f, idx) => (
                        <div key={idx} className="feature-item">
                            <span>{f.icon}</span>
                            <span>{language === 'ar' ? f.ar : f.en}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Dots */}
            <div className="slide-dots">
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                    />
                ))}
            </div>

            {/* Next Button */}
            <button className="next-btn" onClick={nextSlide}>
                {currentSlide === slides.length - 1
                    ? (language === 'ar' ? '🚀 ابدأ الآن' : '🚀 Start Now')
                    : (language === 'ar' ? 'التالي ←' : 'Next →')}
            </button>

            {/* User Greeting */}
            {user?.username && (
                <div className="user-greeting">
                    {language === 'ar' ? `أهلاً ${user.username}!` : `Hello ${user.username}!`}
                </div>
            )}
        </div>
    );
};

export default Welcome;
