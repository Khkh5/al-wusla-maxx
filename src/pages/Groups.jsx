import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './Groups.css';

const Groups = () => {
    const {
        groups,
        fetchGroups,
        joinGroup,
        sendGroupMessage,
        subscribeToGroupMessages,
        user,
        settings
    } = useAppStore();

    const [messageText, setMessageText] = useState('');
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch groups on mount
    useEffect(() => {
        const loadGroups = async () => {
            setLoading(true);
            await fetchGroups();
            setLoading(false);
        };
        loadGroups();
    }, []);

    // Subscribe to real-time messages for selected group
    useEffect(() => {
        if (selectedGroup) {
            const unsubscribe = subscribeToGroupMessages(selectedGroup._id, (newMessage) => {
                console.log('New message:', newMessage);
                // Messages are automatically added to store
            });
            return () => unsubscribe();
        }
    }, [selectedGroup]);

    // Cyber-Islamic Slang Dictionary
    const slang = {
        'Dunya-Lag': settings?.language === 'ar' ? 'لاق دنيوي (مشتت بالدنيا)' : 'Distracted by worldly matters',
        'Night-Ops': settings?.language === 'ar' ? 'عمليات ليلية (قيام الليل)' : 'Tahajjud/Night Prayer',
        'Shield-Wall': settings?.language === 'ar' ? 'جدار الدرع (دعاء جماعي)' : 'Collective Dua',
        'Ping': settings?.language === 'ar' ? 'إشارة (صلِّ على النبي)' : 'Send Salawat',
        'Echo': settings?.language === 'ar' ? 'صدى (آمين)' : 'Ameen',
        'Noor-Out': settings?.language === 'ar' ? 'خروج نوراني (إغلاق للعبادة)' : 'Closing phone to worship',
    };

    const handleSendMessage = async () => {
        if (messageText.trim() && selectedGroup) {
            // Raqeeb AI Filter (Anti-Gossip)
            if (messageText.toLowerCase().includes('غيبة') || messageText.toLowerCase().includes('نميمة')) {
                alert(settings.language === 'ar'
                    ? '⚠️ تم حذف الرسالة. لا تأكل لحم أخيك ميتاً.'
                    : '⚠️ Message blocked. Don\'t backbite.');
                setMessageText('');
                return;
            }

            try {
                await sendGroupMessage(selectedGroup._id, messageText);
                setMessageText('');
            } catch (error) {
                console.error('Error sending message:', error);
                alert('Failed to send message');
            }
        }
    };

    const handleJoinGroup = async (group) => {
        try {
            await joinGroup(group._id);
            setSelectedGroup(group);
        } catch (error) {
            console.error('Error joining group:', error);
            alert('Failed to join group');
        }
    };

    return (
        <div className="groups-page">
            <div className="groups-header">
                <h1>👥 {settings.language === 'ar' ? 'الكتائب' : 'Al-Katiba (Squads)'}</h1>
                <p>{settings.language === 'ar'
                    ? 'الناس يتركون الجهاد وحدهم، لكنهم يثبتون في القبائل'
                    : 'People quit alone but persist in tribes'}</p>
            </div>

            <div className="groups-container">
                {/* Available Groups */}
                <div className="available-groups">
                    <h3>{settings.language === 'ar' ? 'الكتائب المتاحة' : 'Available Squads'}</h3>
                    {loading ? (
                        <p>Loading groups...</p>
                    ) : groups.allGroups && groups.allGroups.length > 0 ? (
                        groups.allGroups.map((group) => (
                            <div key={group._id} className="group-card">
                                <h4>{group.name}</h4>
                                <p>{group.members?.length || 0} {settings.language === 'ar' ? 'عضو' : 'members'}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleJoinGroup(group)}
                                >
                                    {settings.language === 'ar' ? 'انضم' : 'Join'}
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>{settings.language === 'ar' ? 'لا توجد مجموعات متاحة' : 'No groups available'}</p>
                    )}
                </div>

                {/* Group Chat */}
                {selectedGroup && (
                    <div className="group-chat">
                        <h3>{selectedGroup.name}</h3>
                        <div className="messages-container">
                            {groups.messages && groups.messages
                                .filter(m => m.groupId === selectedGroup._id)
                                .map((msg, idx) => (
                                    <div key={idx} className={`message ${msg.userId === user?._id ? 'own' : ''} `}>
                                        <strong>{msg.userName || 'User'}: </strong>
                                        <span>{msg.message}</span>
                                        <span className="msg-time">{new Date(msg.timestamp).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                ))}
                        </div>
                        <div className="message-input">
                            <input
                                type="text"
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                                placeholder={settings.language === 'ar' ? 'اكتب رسالة...' : 'Type a message...'}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button className="btn btn-primary" onClick={handleSendMessage}>
                                {settings.language === 'ar' ? 'إرسال' : 'Send'}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Slang Dictionary */}
            <div className="slang-dictionary">
                <h3>📖 {settings.language === 'ar' ? 'قاموس لغة النور' : 'Lexicon of Light'}</h3>
                <div className="slang-grid">
                    {Object.entries(slang).map(([term, meaning]) => (
                        <div key={term} className="slang-item">
                            <strong>{term}:</strong> {meaning}
                        </div>
                    ))}
                </div>
            </div>

            {/* Du'a Bomb Protocol */}
            <div className="dua-bomb-section">
                <h3>💣 {settings.language === 'ar' ? 'قنبلة الدعاء' : 'Dua Bomb Protocol'}</h3>
                <p>{settings.language === 'ar'
                    ? 'عندما يضغط أحد الأعضاء SOS، ادعوا له جميعاً!'
                    : 'When a member hits SOS, everyone prays for them!'}</p>
                <button className="btn btn-warning">
                    🆘 {settings.language === 'ar' ? 'طلب دعاء جماعي' : 'Request Group Dua'}
                </button>
            </div>
        </div>
    );
};

export default Groups;
