import axios from 'axios';

// API Base URL - update this when deploying
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add auth token to requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Handle response errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// ======================
// AUTHENTICATION APIs
// ======================

export const authAPI = {
    register: async (username, email, password) => {
        const response = await api.post('/auth/register', { username, email, password });
        return response.data;
    },

    login: async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    },

    getCurrentUser: async () => {
        const response = await api.get('/auth/me');
        return response.data;
    }
};

// ======================
// QURAN APIs
// ======================

export const quranAPI = {
    getProgress: async () => {
        const response = await api.get('/quran/progress');
        return response.data;
    },

    completePage: async (pageNumber) => {
        const response = await api.post('/quran/complete-page', { pageNumber });
        return response.data;
    },

    getLeaderboard: async () => {
        const response = await api.get('/quran/leaderboard');
        return response.data;
    }
};

// ======================
// COMPETITION APIs
// ======================

export const competitionAPI = {
    getLeaderboard: async (type = 'global') => {
        const response = await api.get(`/competition/leaderboard?type=${type}`);
        return response.data;
    },

    sendBoost: async (friendId) => {
        const response = await api.post('/competition/boost', { friendId });
        return response.data;
    },

    getChallenges: async () => {
        const response = await api.get('/competition/challenges');
        return response.data;
    },

    joinChallenge: async (challengeId) => {
        const response = await api.post('/competition/join-challenge', { challengeId });
        return response.data;
    }
};

// ======================
// PRAYER TIMES APIs
// ======================

export const prayerAPI = {
    getTimes: async (lat, lng, date) => {
        const response = await api.get(`/prayer/times?lat=${lat}&lng=${lng}${date ? `&date=${date}` : ''}`);
        return response.data;
    },

    checkIn: async (prayerName, location) => {
        const response = await api.post('/prayer/check-in', { prayerName, location });
        return response.data;
    }
};

// ======================
// HEALTH APIs
// ======================

export const healthAPI = {
    logHydration: async (amount) => {
        const response = await api.post('/health/hydration', { amount });
        return response.data;
    },

    logQailulah: async () => {
        const response = await api.post('/health/qailulah');
        return response.data;
    },

    getStats: async () => {
        const response = await api.get('/health/stats');
        return response.data;
    }
};

// ======================
// GROUPS APIs
// ======================

export const groupsAPI = {
    getMyGroups: async () => {
        const response = await api.get('/groups');
        return response.data;
    },

    joinGroup: async (groupId) => {
        const response = await api.post('/groups/join', { groupId });
        return response.data;
    },

    getMessages: async (groupId) => {
        const response = await api.get(`/groups/${groupId}/messages`);
        return response.data;
    },

    seedGroups: async () => {
        const response = await api.post('/groups/seed');
        return response.data;
    }
};

export default api;
