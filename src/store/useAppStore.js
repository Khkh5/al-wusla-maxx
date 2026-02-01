import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { quranAPI, competitionAPI, prayerAPI, healthAPI, groupsAPI } from '../services/api';
import io from 'socket.io-client';

// Socket.IO connection
const SOCKET_URL = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000';
let socket = null;

// Initialize Socket.IO
const initSocket = () => {
    if (!socket) {
        socket = io(SOCKET_URL, { autoConnect: true });
        socket.on('connect', () => console.log('✅ Socket.IO connected'));
        socket.on('disconnect', () => console.log('Socket.IO disconnected'));
    }
    return socket;
};

// Complete application store with API integration
export const useAppStore = create(
    persist(
        (set, get) => ({
            // ========== USER PROFILE ==========
            user: {
                _id: 'temp',
                username: 'مستخدم جديد',
                email: 'user@alwusla.com',
                hasanat: 0,
                level: 'Bronze',
                streaks: { fajr: 0, taraweeh: 0 },
                totalGoodDeeds: 0,
                ghostMode: false
            },

            // ========== SETTINGS ==========
            settings: {
                language: 'ar',
                theme: 'taqwa-teal',
                notifications: true
            },

            // ========== QURAN PROGRESS ==========  
            quranProgress: {
                currentPage: 1,
                completedPages: [],
                khatmahCount: 0
            },

            // ========== HEALTH ==========
            health: {
                hydrationCurrent: 0,
                hydrationGoal: 4,
                qailulahToday: false,
                dopamineDetoxMode: false,
                iftarSequence: null,
                autophagyActive: false,
                fastingHours: 0
            },

            // ========== PRAYER TIMES ==========
            prayerTimes: {
                times: {
                    fajr: '05:30',
                    sunrise: '06:45',
                    dhuhr: '12:15',
                    asr: '15:30',
                    maghrib: '18:05',
                    isha: '19:30',
                    taraweeh: '20:00',
                    tahajjud: '03:00'
                },
                location: 'Cairo, Egypt',
                checkIns: [],
                commitmentPoints: 0
            },

            // ========== COMPETITION ==========
            competition: {
                leaderboard: [],
                challenges: [],
                friendBoosts: []
            },

            // ========== GROUPS ==========
            groups: {
                allGroups: [],
                myGroups: [],
                messages: []
            },

            // ========== HISTORY ==========
            history: {
                artifacts: [],
                pledges: [],
                viewedEvents: []
            },

            // ========== ACTIONS ==========

            // Set user data
            setUser: (userData) => set({ user: userData }),

            // Logout
            logout: () => {
                localStorage.removeItem('token');
                set({
                    user: {
                        _id: 'temp',
                        username: 'مستخدم جديد',
                        email: '',
                        hasanat: 0,
                        level: 'Bronze',
                        streaks: { fajr: 0, taraweeh: 0 },
                        totalGoodDeeds: 0,
                        ghostMode: false
                    }
                });
                if (socket) { socket.disconnect(); socket = null; }
            },

            // Toggle Ghost Mode
            toggleGhostMode: () => set((state) => ({
                user: { ...state.user, ghostMode: !state.user.ghostMode }
            })),

            // Increment Hasanat (local only)
            incrementHasanat: (amount, source) => {
                set((state) => ({
                    user: { ...state.user, hasanat: (state.user.hasanat || 0) + amount }
                }));
            },

            // ========== QURAN API ACTIONS ==========
            updateQuranProgress: async (pageNumber) => {
                try {
                    const response = await quranAPI.completePage(pageNumber);
                    set((state) => ({
                        user: {
                            ...state.user,
                            hasanat: response.user?.hasanat || state.user.hasanat + 10,
                            level: response.user?.level || state.user.level
                        },
                        quranProgress: {
                            ...state.quranProgress,
                            completedPages: [...state.quranProgress.completedPages, pageNumber],
                            currentPage: pageNumber,
                            khatmahCount: response.newProgress?.khatmahCount || state.quranProgress.khatmahCount
                        }
                    }));

                    const sock = initSocket();
                    sock.emit('hasanat_earned', { userId: get().user._id, hasanat: response.hasanat || 10 });

                    return response;
                } catch (error) {
                    console.error('Error updating Quran progress:', error);
                    // Still update locally
                    set((state) => ({
                        user: { ...state.user, hasanat: state.user.hasanat + 10 },
                        quranProgress: {
                            ...state.quranProgress,
                            completedPages: [...state.quranProgress.completedPages, pageNumber],
                            currentPage: pageNumber
                        }
                    }));
                    return { hasanat: 10, multiplier: '10x' };
                }
            },

            fetchQuranProgress: async () => {
                try {
                    const response = await quranAPI.getProgress();
                    set({
                        quranProgress: {
                            currentPage: response.progress?.currentPage || 1,
                            completedPages: response.progress?.completedPages || [],
                            khatmahCount: response.progress?.khatmahCount || 0
                        }
                    });
                } catch (error) {
                    console.error('Error fetching Quran progress:', error);
                }
            },

            // ========== PRAYER API ACTIONS ==========
            fetchPrayerTimes: async (lat, lng) => {
                try {
                    const response = await prayerAPI.getTimes(lat, lng);
                    set({ prayerTimes: { ...get().prayerTimes, times: response.times, location: response.location || 'Your Location' } });
                    return response;
                } catch (error) {
                    console.error('Error fetching prayer times:', error);
                }
            },

            checkInPrayer: async (prayerName, location) => {
                try {
                    const response = await prayerAPI.checkIn(prayerName, location);
                    set((state) => ({
                        user: { ...state.user, hasanat: response.user?.hasanat || state.user.hasanat + 27 },
                        prayerTimes: {
                            ...state.prayerTimes,
                            checkIns: [...state.prayerTimes.checkIns, { prayerName, time: new Date() }]
                        }
                    }));
                    return response;
                } catch (error) {
                    console.error('Error checking in:', error);
                    // Local fallback
                    set((state) => ({
                        user: { ...state.user, hasanat: state.user.hasanat + 27 }
                    }));
                }
            },

            // ========== HEALTH API ACTIONS ==========
            logHydration: async (amount) => {
                try {
                    await healthAPI.logHydration(amount);
                } catch (error) {
                    console.error('Error logging hydration:', error);
                }
                set((state) => ({
                    health: { ...state.health, hydrationCurrent: Math.min(state.health.hydrationCurrent + amount, 8) }
                }));
            },

            logQailulah: async () => {
                try {
                    await healthAPI.logQailulah();
                } catch (error) {
                    console.error('Error logging qailulah:', error);
                }
                set((state) => ({
                    health: { ...state.health, qailulahToday: true }
                }));
            },

            toggleDopamineDetox: () => set((state) => ({
                health: { ...state.health, dopamineDetoxMode: !state.health.dopamineDetoxMode }
            })),

            // ========== COMPETITION API ACTIONS ==========
            fetchLeaderboard: async (type = 'global') => {
                try {
                    const response = await competitionAPI.getLeaderboard(type);
                    set((state) => ({ competition: { ...state.competition, leaderboard: response.leaderboard || [] } }));
                    return response.leaderboard || [];
                } catch (error) {
                    console.error('Error fetching leaderboard:', error);
                    return [];
                }
            },

            fetchChallenges: async () => {
                try {
                    const response = await competitionAPI.getChallenges();
                    set((state) => ({ competition: { ...state.competition, challenges: response.challenges || [] } }));
                } catch (error) {
                    console.error('Error fetching challenges:', error);
                }
            },

            sendBoost: async (friendId) => {
                try {
                    const response = await competitionAPI.sendBoost(friendId);
                    set((state) => ({
                        user: { ...state.user, hasanat: response.user?.hasanat || state.user.hasanat + 5 }
                    }));
                    return response;
                } catch (error) {
                    console.error('Error sending boost:', error);
                    set((state) => ({ user: { ...state.user, hasanat: state.user.hasanat + 5 } }));
                }
            },

            joinChallenge: async (challengeId) => {
                try {
                    const response = await competitionAPI.joinChallenge(challengeId);
                    set((state) => ({
                        user: { ...state.user, hasanat: state.user.hasanat + (response.hasanatEarned || 10) }
                    }));
                    return response;
                } catch (error) {
                    console.error('Error joining challenge:', error);
                }
            },

            subscribeToLeaderboard: (callback) => {
                const sock = initSocket();
                sock.on('leaderboard_update', callback);
                return () => sock.off('leaderboard_update', callback);
            },

            // ========== GROUPS API ACTIONS ==========
            fetchGroups: async () => {
                try {
                    const response = await groupsAPI.getMyGroups();
                    set((state) => ({ groups: { ...state.groups, allGroups: response.groups || [] } }));
                } catch (error) {
                    console.error('Error fetching groups:', error);
                }
            },

            joinGroup: async (groupId) => {
                try {
                    await groupsAPI.joinGroup(groupId);
                    const sock = initSocket();
                    sock.emit('join_group', groupId);
                } catch (error) {
                    console.error('Error joining group:', error);
                }
            },

            sendGroupMessage: async (groupId, message) => {
                const sock = initSocket();
                sock.emit('send_message', {
                    groupId,
                    message,
                    userId: get().user._id,
                    userName: get().user.username
                });
            },

            subscribeToGroupMessages: (groupId, callback) => {
                const sock = initSocket();
                sock.emit('join_group', groupId);
                sock.on('new_message', (msg) => {
                    set((state) => ({
                        groups: { ...state.groups, messages: [...state.groups.messages, { ...msg, groupId }] }
                    }));
                    callback(msg);
                });
                return () => sock.off('new_message');
            }
        }),
        {
            name: 'al-wusla-storage',
            partialize: (state) => ({
                user: state.user,
                settings: state.settings,
                quranProgress: state.quranProgress,
                health: state.health
            })
        }
    )
);
