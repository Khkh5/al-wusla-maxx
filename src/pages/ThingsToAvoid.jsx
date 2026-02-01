import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './ThingsToAvoid.css';

const ThingsToAvoid = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';
    const [activeCategory, setActiveCategory] = useState('spiritual');

    // 40 Things to Avoid (Stress Test from conversation)
    const thingsToAvoid = {
        spiritual: [
            { ar: 'الرياء الخفي', en: 'Hidden showing off', fix: { ar: 'استخدم وضع الشبح', en: 'Use Ghost Mode' } },
            { ar: 'العُجب بالعبادة', en: 'Self-admiration in worship', fix: { ar: 'تذكر أن التوفيق من الله', en: 'Remember success is from Allah' } },
            { ar: 'القنوط واليأس', en: 'Despair and hopelessness', fix: { ar: 'الرحمة تسع كل شيء', en: 'Mercy encompasses everything' } },
            { ar: 'التسويف', en: 'Procrastination', fix: { ar: 'قاعدة الـ 5 ثواني', en: '5 seconds rule' } },
            { ar: 'البدعة', en: 'Innovation in worship', fix: { ar: 'التزم السنة الصحيحة', en: 'Stick to authentic Sunnah' } },
            { ar: 'هجر القرآن', en: 'Abandoning Quran', fix: { ar: 'صفحة واحدة يومياً', en: 'One page daily' } },
            { ar: 'سرعة القراءة دون تدبر', en: 'Speed reading without reflection', fix: { ar: 'آية بفهم خير من جزء بعجلة', en: 'One verse with understanding is better' } },
            { ar: 'الدعاء الآلي', en: 'Mindless supplication', fix: { ar: 'تصور ما تطلب', en: 'Visualize what you ask' } },
            { ar: 'المنّ بالصدقة', en: 'Reminding of charity', fix: { ar: 'صدقة السر', en: 'Secret charity' } },
            { ar: 'الأمن من المكر', en: 'Feeling safe from Allah\'s plan', fix: { ar: 'الخوف والرجاء معاً', en: 'Fear and hope together' } }
        ],
        social: [
            { ar: 'الغيبة الرقمية', en: 'Digital backbiting', fix: { ar: 'فلتر الرقيب يحميك', en: 'Raqeeb filter protects you' } },
            { ar: 'الجدال العقيم', en: 'Useless arguments', fix: { ar: 'اترك ما لا يعنيك', en: 'Leave what doesn\'t concern you' } },
            { ar: 'إضاعة الوقت في الكلام', en: 'Wasting time in talk', fix: { ar: 'وضع الصمت للمجموعة', en: 'Group silence mode' } },
            { ar: 'المقارنة المدمرة', en: 'Destructive comparison', fix: { ar: 'سابق نفسك لا غيرك', en: 'Race yourself not others' } },
            { ar: 'الاختلاط غير الشرعي', en: 'Impermissible mixing', fix: { ar: 'مجموعات منفصلة', en: 'Separate groups' } },
            { ar: 'نشر الإشاعات', en: 'Spreading rumors', fix: { ar: 'تثبت قبل النشر', en: 'Verify before sharing' } },
            { ar: 'جرح المشاعر', en: 'Hurting feelings', fix: { ar: 'الكلمة الطيبة صدقة', en: 'Good word is charity' } },
            { ar: 'العزلة التامة عن الأهل', en: 'Complete isolation from family', fix: { ar: 'العبادة + صلة الرحم', en: 'Worship + Family ties' } },
            { ar: 'التطفل', en: 'Intruding on privacy', fix: { ar: 'احترم خصوصية العبادة', en: 'Respect worship privacy' } },
            { ar: 'كسر خاطر الصائم', en: 'Breaking fasting person\'s heart', fix: { ar: 'إني صائم', en: 'I am fasting' } }
        ],
        health: [
            { ar: 'تخمة الإفطار', en: 'Overeating at Iftar', fix: { ar: 'درع الأنسولين', en: 'Use Insulin Shield' } },
            { ar: 'الجفاف', en: 'Dehydration', fix: { ar: 'الري المتقطر', en: 'Drip irrigation method' } },
            { ar: 'سهر الغفلة', en: 'Heedless staying up late', fix: { ar: 'الليل للقيام لا للسهر', en: 'Night is for prayer not idle' } },
            { ar: 'نوم النهار كله', en: 'Sleeping all day', fix: { ar: 'استثمر وقت الكيتوزية', en: 'Invest ketosis focus time' } },
            { ar: 'إدمان الكافيين', en: 'Caffeine addiction', fix: { ar: 'خفض تدريجي قبل رمضان', en: 'Gradual reduction before Ramadan' } },
            { ar: 'الخمول الحركي', en: 'Physical inactivity', fix: { ar: 'المشي للمسجد', en: 'Walk to mosque' } },
            { ar: 'الغضب الهرموني', en: 'Hormonal anger', fix: { ar: 'زر الطوارئ', en: 'SOS button' } },
            { ar: 'تجاهل السحور', en: 'Skipping Suhoor', fix: { ar: 'تسحروا فإن فيه بركة', en: 'Have Suhoor for blessing' } },
            { ar: 'إهمال الدواء', en: 'Neglecting medication', fix: { ar: 'منبه الدواء الذكي', en: 'Smart medication reminder' } },
            { ar: 'تلوث العين', en: 'Eye pollution', fix: { ar: 'وضع التركيز', en: 'Focus mode' } }
        ],
        tech: [
            { ar: 'إزعاج الصلاة برنين الهاتف', en: 'Phone ringing disrupting prayer', fix: { ar: 'الصامت الجغرافي', en: 'Geo-silent mode' } },
            { ar: 'استنزاف البطارية', en: 'Battery drain', fix: { ar: 'وضع OLED', en: 'OLED Pixel mode' } },
            { ar: 'الاعتماد على توقيت خاطئ', en: 'Wrong prayer times', fix: { ar: 'ضبط المسجد', en: 'Mosque sync' } },
            { ar: 'الإعلانات المشتتة', en: 'Distracting ads', fix: { ar: 'تطبيق خالٍ من الإعلانات', en: 'Ad-free app' } },
            { ar: 'صعوبة الاستخدام', en: 'Complex UI', fix: { ar: 'وضع الجد/الجدة', en: 'Elder mode' } },
            { ar: 'فقدان البيانات', en: 'Data loss', fix: { ar: 'الصندوق الأسود', en: 'Black box save' } },
            { ar: 'كثرة الإشعارات', en: 'Notification spam', fix: { ar: 'التوازن الذكي', en: 'Smart balance' } },
            { ar: 'التشتت البصري', en: 'Visual distraction', fix: { ar: 'التبسيط', en: 'Minimalism' } },
            { ar: 'حجم التطبيق الكبير', en: 'Large app size', fix: { ar: 'تحسين مستمر', en: 'Continuous optimization' } },
            { ar: 'الجمود', en: 'Static content', fix: { ar: 'تحديث يومي', en: 'Daily updates' } }
        ]
    };

    const categories = [
        { id: 'spiritual', icon: '🕌', name: { ar: 'روحية', en: 'Spiritual' } },
        { id: 'social', icon: '👥', name: { ar: 'اجتماعية', en: 'Social' } },
        { id: 'health', icon: '🏥', name: { ar: 'صحية', en: 'Health' } },
        { id: 'tech', icon: '📱', name: { ar: 'تقنية', en: 'Technical' } }
    ];

    return (
        <div className="avoid-page">
            <div className="avoid-header">
                <h1>🚫 {language === 'ar' ? '40 شيئاً تجنبها في رمضان' : '40 Things to Avoid in Ramadan'}</h1>
                <p>{language === 'ar' ? 'اختبار الإجهاد الروحي' : 'Spiritual Stress Test'}</p>
            </div>

            {/* Categories */}
            <div className="categories-tabs">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        <span className="cat-icon">{cat.icon}</span>
                        <span>{language === 'ar' ? cat.name.ar : cat.name.en}</span>
                    </button>
                ))}
            </div>

            {/* Items Grid */}
            <div className="avoid-grid">
                {thingsToAvoid[activeCategory]?.map((item, idx) => (
                    <div key={idx} className="avoid-card">
                        <div className="avoid-number">{idx + 1}</div>
                        <div className="avoid-content">
                            <h4>{language === 'ar' ? item.ar : item.en}</h4>
                            <div className="avoid-fix">
                                <span>✅ {language === 'ar' ? 'الحل' : 'Fix'}:</span>
                                <p>{language === 'ar' ? item.fix.ar : item.fix.en}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Counter */}
            <div className="avoid-counter">
                <span>{language === 'ar' ? 'المجموع' : 'Total'}:</span>
                <strong>40</strong>
                <span>{language === 'ar' ? 'محذوراً' : 'Things to Avoid'}</span>
            </div>
        </div>
    );
};

export default ThingsToAvoid;
