import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import './Navigation.css';

const Navigation = ({ language: propLanguage, setLanguage }) => {
    const { settings, user } = useAppStore();
    const location = useLocation();
    const language = propLanguage || settings?.language || 'ar';
    const [expandedCategory, setExpandedCategory] = useState('worship');

    // Organized navigation by categories
    const navCategories = [
        {
            id: 'worship',
            title: { ar: '🕌 العبادات', en: '🕌 Worship' },
            items: [
                { path: '/', label: { ar: 'القرآن', en: 'Quran' }, icon: '📖' },
                { path: '/prayer', label: { ar: 'الصلاة', en: 'Prayer' }, icon: '🕌' },
                { path: '/qibla', label: { ar: 'القبلة', en: 'Qibla' }, icon: '🧭' },
                { path: '/tasbih', label: { ar: 'التسبيح', en: 'Tasbih' }, icon: '📿' },
                { path: '/duas', label: { ar: 'الأدعية', en: 'Duas' }, icon: '🤲' },
                { path: '/names', label: { ar: '99 اسماً', en: '99 Names' }, icon: '☪️' },
            ]
        },
        {
            id: 'ramadan',
            title: { ar: '🌙 رمضان', en: '🌙 Ramadan' },
            items: [
                { path: '/fasting', label: { ar: 'الصيام', en: 'Fasting' }, icon: '🌙' },
                { path: '/hasanat', label: { ar: 'الحسنات', en: 'Hasanat' }, icon: '✨' },
                { path: '/planner', label: { ar: 'المخطط', en: 'Planner' }, icon: '📋' },
                { path: '/calendar', label: { ar: 'التقويم', en: 'Calendar' }, icon: '📅' },
                { path: '/shawwal', label: { ar: 'جسر الستة', en: 'Shawwal' }, icon: '🌉' },
            ]
        },
        {
            id: 'knowledge',
            title: { ar: '📚 العلم', en: '📚 Knowledge' },
            items: [
                { path: '/hadith', label: { ar: 'الحديث', en: 'Hadith' }, icon: '📜' },
                { path: '/library', label: { ar: 'المكتبة', en: 'Library' }, icon: '📚' },
                { path: '/islamic-history', label: { ar: 'سجل الأمجاد', en: 'Glory' }, icon: '⚔️' },
                { path: '/council', label: { ar: 'مجلس الـ40', en: 'Council' }, icon: '📚' },
                { path: '/avoid', label: { ar: '40 محذوراً', en: '40 Avoid' }, icon: '🚫' },
                { path: '/real-muslim', label: { ar: 'المسلم الحقيقي', en: 'Real Muslim' }, icon: '🕌' },
            ]
        },
        {
            id: 'growth',
            title: { ar: '📈 النمو', en: '📈 Growth' },
            items: [
                { path: '/habits', label: { ar: 'عاداتي', en: 'My Habits' }, icon: '📝' },
                { path: '/dashboard', label: { ar: 'التقدم', en: 'Progress' }, icon: '📊' },
                { path: '/badges', label: { ar: 'الأوسمة', en: 'Badges' }, icon: '🏅' },
                { path: '/health', label: { ar: 'الصحة', en: 'Health' }, icon: '💪' },
                { path: '/battle', label: { ar: 'معركة النفس', en: 'Soul Battle' }, icon: '👼' },
                { path: '/heart', label: { ar: 'قلبك', en: 'Your Heart' }, icon: '💚' },
                { path: '/fourthwall', label: { ar: 'كسر الجدار', en: '4th Wall' }, icon: '🪞' },
                { path: '/cave', label: { ar: 'غار حراء', en: 'Ghar Hira' }, icon: '🏔️' },
                { path: '/mizan', label: { ar: 'الميزان', en: 'The Mizan' }, icon: '⚖️' },
            ]
        },
        {
            id: 'charity',
            title: { ar: '❤️ الصدقة', en: '❤️ Charity' },
            items: [
                { path: '/sadaqah', label: { ar: 'الصدقة', en: 'Sadaqah' }, icon: '❤️' },
                { path: '/orchard', label: { ar: 'البستان', en: 'Orchard' }, icon: '🌴' },
                { path: '/zakat', label: { ar: 'الزكاة', en: 'Zakat' }, icon: '🧮' },
            ]
        },
        {
            id: 'community',
            title: { ar: '👥 المجتمع', en: '👥 Community' },
            items: [
                { path: '/competition', label: { ar: 'المنافسة', en: 'Competition' }, icon: '🏆' },
                { path: '/challenges', label: { ar: 'التحديات', en: 'Challenges' }, icon: '🔥' },
                { path: '/groups', label: { ar: 'المجموعات', en: 'Groups' }, icon: '👥' },
                { path: '/chat', label: { ar: 'الكتيبة', en: 'Katiba' }, icon: '💬' },
            ]
        },
        {
            id: 'other',
            title: { ar: '⚙️ أخرى', en: '⚙️ Other' },
            items: [
                { path: '/history', label: { ar: 'التاريخ', en: 'History' }, icon: '🕰️' },
                { path: '/conscience', label: { ar: 'الضمير', en: 'Conscience' }, icon: '⚔️' },
                { path: '/settings', label: { ar: 'الإعدادات', en: 'Settings' }, icon: '⚙️' },
            ]
        },
    ];

    const toggleCategory = (catId) => {
        setExpandedCategory(expandedCategory === catId ? null : catId);
    };

    return (
        <nav className="main-navigation">
            <div className="nav-header">
                <h2 className="app-logo">🌙 الوُصلة</h2>
                <div className="user-info-nav">
                    <span className="hasanat-display">✨ {user?.hasanat || 0}</span>
                </div>
            </div>

            <div className="nav-scroll">
                {navCategories.map(category => (
                    <div key={category.id} className="nav-category">
                        <button
                            className={`category-header ${expandedCategory === category.id ? 'expanded' : ''}`}
                            onClick={() => toggleCategory(category.id)}
                        >
                            <span>{language === 'ar' ? category.title.ar : category.title.en}</span>
                            <span className="category-arrow">{expandedCategory === category.id ? '▼' : '◀'}</span>
                        </button>

                        {expandedCategory === category.id && (
                            <div className="category-items">
                                {category.items.map(item => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                    >
                                        <span className="nav-icon">{item.icon}</span>
                                        <span className="nav-label">
                                            {language === 'ar' ? item.label.ar : item.label.en}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="nav-footer">
                <button
                    className="lang-toggle"
                    onClick={() => setLanguage && setLanguage(language === 'ar' ? 'en' : 'ar')}
                >
                    {language === 'ar' ? 'EN' : 'عربي'}
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
