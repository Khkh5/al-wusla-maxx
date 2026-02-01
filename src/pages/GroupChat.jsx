import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../store/useAppStore';
import './GroupChat.css';

const GroupChat = () => {
    const { settings, user } = useAppStore();
    const language = settings?.language || 'ar';
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [activeGroup, setActiveGroup] = useState('general');
    const [duaBombActive, setDuaBombActive] = useState(false);
    const [duaCount, setDuaCount] = useState(0);
    const messagesEndRef = useRef(null);

    // Cool Language Dictionary (20 Terms)
    const coolLanguage = {
        'dunya-lag': { ar: 'لاق دنيوي', meaning: 'مشتت بالدنيا' },
        'glitching': { ar: 'يُجلّج', meaning: 'يرتكب ذنوباً' },
        'patching': { ar: 'تحميل التوبة', meaning: 'يستغفر' },
        'night-ops': { ar: 'عمليات ليلية', meaning: 'قيام الليل' },
        'shield-wall': { ar: 'جدار الدرع', meaning: 'دعاء جماعي' },
        'off-world': { ar: 'خارج الكوكب', meaning: 'في خلوة' },
        'zero-point': { ar: 'نقطة الصفر', meaning: 'وقت الإفطار' },
        'hasanat-farming': { ar: 'زراعة الحسنات', meaning: 'ذكر مكثف' },
        'bio-break': { ar: 'استراحة بيولوجية', meaning: 'الوضوء' },
        'shadow-work': { ar: 'عمل الظل', meaning: 'صدقة السر' },
        'ping': { ar: 'بينغ', meaning: 'صلِّ على النبي' },
        'echo': { ar: 'صدى', meaning: 'آمين' },
        'sync': { ar: 'مزامنة', meaning: 'صلاة الجماعة' },
        'source-code': { ar: 'الكود المصدري', meaning: 'القرآن' },
        'noor-out': { ar: 'خروج نوراني', meaning: 'إغلاق الهاتف للعبادة' },
        'the-hacker': { ar: 'الهكر', meaning: 'الشيطان' },
        'amir': { ar: 'الأمير', meaning: 'أدمن المجموعة' },
        'traveler': { ar: 'عابر سبيل', meaning: 'أخ/أخت في الله' },
        'rayyan-run': { ar: 'سباق الريان', meaning: 'الاجتهاد في رمضان' },
        'base': { ar: 'القاعدة', meaning: 'الجنة' }
    };

    // Groups (Katibas)
    const groups = [
        { id: 'general', name: { ar: 'الكتيبة العامة', en: 'General Katiba' }, icon: '🏕️' },
        { id: 'fajr', name: { ar: 'فرسان الفجر', en: 'Fajr Warriors' }, icon: '🌅' },
        { id: 'quran', name: { ar: 'حفظة القرآن', en: 'Quran Memorizers' }, icon: '📖' },
        { id: 'sisters', name: { ar: 'كتيبة الأخوات', en: 'Sisters Katiba' }, icon: '🌸' }
    ];

    // Sample messages
    useEffect(() => {
        setMessages([
            { id: 1, user: 'أحمد', text: 'السلام عليكم يا Travelers!', time: '10:30', type: 'text' },
            { id: 2, user: 'سارة', text: 'وعليكم السلام! جاهزين للـ Night-Ops الليلة؟', time: '10:32', type: 'text' },
            { id: 3, user: 'محمد', text: 'عندي Dunya-Lag عالي اليوم، أحتاج Shield-Wall 🤲', time: '10:35', type: 'sos' },
            { id: 4, user: 'النظام', text: '🚨 دعاء جماعي مفعّل! 15 دعوة تم رفعها', time: '10:36', type: 'system' }
        ]);
    }, [activeGroup]);

    // Raqeeb AI Filter (Anti-gossip)
    const filterMessage = (text) => {
        const gossipPatterns = [
            /هل رأيت(م)? فلان/,
            /سمعت(م)? أن/,
            /قالوا عن/,
            /did you see what/i,
            /i heard that/i
        ];

        for (const pattern of gossipPatterns) {
            if (pattern.test(text)) {
                return {
                    blocked: true,
                    replacement: language === 'ar'
                        ? '⚠️ تشويش في الإشارة. تم استبدال الغيبة بالاستغفار. أستغفر الله العظيم.'
                        : '⚠️ Signal interference. Gossip replaced with Istighfar. Astaghfirullah.'
                };
            }
        }
        return { blocked: false, text };
    };

    // Send message
    const sendMessage = () => {
        if (!newMessage.trim()) return;

        const filtered = filterMessage(newMessage);
        const msg = {
            id: Date.now(),
            user: user?.name || 'أنت',
            text: filtered.blocked ? filtered.replacement : newMessage,
            time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
            type: filtered.blocked ? 'warning' : 'text'
        };

        setMessages(prev => [...prev, msg]);
        setNewMessage('');
    };

    // Dua Bomb SOS
    const triggerDuaBomb = () => {
        setDuaBombActive(true);
        setDuaCount(0);
        // Simulate collective duas
        const interval = setInterval(() => {
            setDuaCount(prev => {
                if (prev >= 50) {
                    clearInterval(interval);
                    setTimeout(() => setDuaBombActive(false), 3000);
                    return prev;
                }
                return prev + 1;
            });
        }, 100);
    };

    const handleAmeen = (msgId) => {
        setMessages(prev => prev.map(m =>
            m.id === msgId ? { ...m, ameens: (m.ameens || 0) + 1 } : m
        ));
    };

    return (
        <div className="chat-page">
            {/* Groups Sidebar */}
            <div className="groups-bar">
                {groups.map(group => (
                    <div
                        key={group.id}
                        className={`group-item ${activeGroup === group.id ? 'active' : ''}`}
                        onClick={() => setActiveGroup(group.id)}
                    >
                        <span className="group-icon">{group.icon}</span>
                        <span className="group-name">{language === 'ar' ? group.name.ar : group.name.en}</span>
                    </div>
                ))}
            </div>

            {/* Chat Area */}
            <div className="chat-main">
                <div className="chat-header">
                    <h2>{groups.find(g => g.id === activeGroup)?.icon} {language === 'ar' ? groups.find(g => g.id === activeGroup)?.name.ar : groups.find(g => g.id === activeGroup)?.name.en}</h2>
                    <button className="sos-btn" onClick={triggerDuaBomb}>
                        🚨 SOS
                    </button>
                </div>

                {/* Messages */}
                <div className="messages-container">
                    {messages.map(msg => (
                        <div key={msg.id} className={`message ${msg.type}`}>
                            <div className="msg-header">
                                <span className="msg-user">{msg.user}</span>
                                <span className="msg-time">{msg.time}</span>
                            </div>
                            <p className="msg-text">{msg.text}</p>
                            {msg.type !== 'system' && (
                                <div className="msg-actions">
                                    <button onClick={() => handleAmeen(msg.id)}>
                                        📿 {language === 'ar' ? 'آمين' : 'Ameen'} {msg.ameens > 0 && `(${msg.ameens})`}
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="chat-input">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder={language === 'ar' ? 'اكتب رسالتك...' : 'Type message...'}
                    />
                    <button onClick={sendMessage}>
                        {language === 'ar' ? 'إرسال' : 'Send'}
                    </button>
                </div>
            </div>

            {/* Cool Language Reference */}
            <div className="slang-panel">
                <h3>🗣️ {language === 'ar' ? 'لغة النور' : 'Lexicon of Light'}</h3>
                <div className="slang-list">
                    {Object.entries(coolLanguage).slice(0, 8).map(([key, val]) => (
                        <div key={key} className="slang-item">
                            <span className="slang-term">{key}</span>
                            <span className="slang-meaning">{val.meaning}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dua Bomb Overlay */}
            {duaBombActive && (
                <div className="dua-bomb-overlay">
                    <div className="dua-bomb-content">
                        <span className="bomb-icon">🤲</span>
                        <h2>{language === 'ar' ? 'درع الدعاء مفعّل!' : 'Dua Shield Activated!'}</h2>
                        <div className="dua-counter">
                            <span className="dua-number">{duaCount}</span>
                            <span>{language === 'ar' ? 'دعوة تم رفعها للسماء' : 'duas sent to the heavens'}</span>
                        </div>
                        <p>{language === 'ar' ? 'إخوتك يدعون لك الآن...' : 'Your brothers are praying for you now...'}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GroupChat;
