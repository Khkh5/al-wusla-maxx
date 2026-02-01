import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useAppStore } from './store/useAppStore';
import { authAPI } from './services/api';

// Auth pages
import Login from './pages/Login';
import Register from './pages/Register';

// Main app components
import Navigation from './components/Navigation';
import QuranReader from './pages/QuranReader';
import HasanatSimulator from './pages/HasanatSimulator';
import PrayerTimes from './pages/PrayerTimes';
import HealthDashboard from './pages/HealthDashboard';
import Competition from './pages/Competition';
import Groups from './pages/Groups';
import History from './pages/History';
import HadithPage from './pages/HadithPage';
import AngelDevil from './components/AngelDevil';
import ZakatCalculator from './components/ZakatCalculator';
import TasbihCounter from './components/TasbihCounter';
import DuaCollection from './components/DuaCollection';
import AsmaAlHusna from './components/AsmaAlHusna';
import QiblaCompass from './components/QiblaCompass';
import FastingTracker from './components/FastingTracker';
import IslamicCalendar from './components/IslamicCalendar';
import SadaqahTracker from './components/SadaqahTracker';
import DailyHadith from './components/DailyHadith';
import RamadanPlanner from './components/RamadanPlanner';
import Badges from './components/Badges';
import ProgressDashboard from './components/ProgressDashboard';
import Settings from './pages/Settings';

// NEW MAXX Components (Phase 2)
import AngelDevilBattle from './components/AngelDevilBattle';
import FourthWallBreaks from './components/FourthWallBreaks';
import IslamicHistory from './pages/IslamicHistory';
import GroupChat from './pages/GroupChat';
import ThingsToAvoid from './pages/ThingsToAvoid';
import ShawwalBridge from './pages/ShawwalBridge';
import ViralChallenges from './pages/ViralChallenges';
import CouncilOf40 from './pages/CouncilOf40';
import HabitTracker from './pages/HabitTracker';
import RealMuslim from './pages/RealMuslim';
import YourHeart from './pages/YourHeart';
import Welcome from './pages/Welcome';

// Phase 4: Transcendence
import FocusedWorship from './pages/FocusedWorship';
import BarakahOrchard from './pages/BarakahOrchard';
import MizanScale from './pages/MizanScale';

// UX Enhancement Components
import NarratorBubble from './components/NarratorBubble';
import Watermark from './components/Watermark';
import MakerDuaPopup from './components/MakerDuaPopup';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const [theme, setTheme] = useState('taqwa-teal');
  const [language, setLanguage] = useState('ar'); // Arabic first, always
  const { setUser, user } = useAppStore();
  const [loading, setLoading] = useState(true);
  const [navVisible, setNavVisible] = useState(true);

  // ESC key to toggle navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setNavVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Load user data on app mount if token exists
  useEffect(() => {
    const loadUserData = async () => {
      const token = localStorage.getItem('token');
      // Only fetch if we have a token and user is still temp/default
      if (token && (!user || user._id === 'temp')) {
        try {
          const userData = await authAPI.getCurrentUser();
          if (userData && userData.user) {
            setUser(userData.user);
          }
        } catch (error) {
          console.error('Failed to load user data:', error);
          localStorage.removeItem('token'); // Clear invalid token
        }
      }
      setLoading(false);
    };

    loadUserData();
  }, []);

  useEffect(() => {
    // Set RTL for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);
  }, [language, theme]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f766e 0%, #06b6d4 100%)',
        color: 'white',
        fontSize: '24px'
      }}>
        🌙 Loading AL-WUSLA...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className={`app-container ${!navVisible ? 'nav-hidden' : ''}`}>
                {/* Nav Toggle Button */}
                <button
                  className="nav-toggle-btn"
                  onClick={() => setNavVisible(!navVisible)}
                  title="ESC لإخفاء/إظهار القائمة"
                >
                  {navVisible ? '✕' : '☰'}
                </button>

                {navVisible && <Navigation language={language} setLanguage={setLanguage} />}

                {/* UX Enhancement Components */}
                <NarratorBubble />
                <Watermark />
                <MakerDuaPopup />

                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<QuranReader />} />
                    <Route path="/hasanat" element={<HasanatSimulator />} />
                    <Route path="/prayer" element={<PrayerTimes />} />
                    <Route path="/health" element={<HealthDashboard />} />
                    <Route path="/competition" element={<Competition />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/library" element={<HadithPage />} />
                    <Route path="/conscience" element={<AngelDevil />} />
                    <Route path="/zakat" element={<ZakatCalculator />} />
                    <Route path="/tasbih" element={<TasbihCounter />} />
                    <Route path="/duas" element={<DuaCollection />} />
                    <Route path="/names" element={<AsmaAlHusna />} />
                    <Route path="/qibla" element={<QiblaCompass />} />
                    <Route path="/fasting" element={<FastingTracker />} />
                    <Route path="/calendar" element={<IslamicCalendar />} />
                    <Route path="/sadaqah" element={<SadaqahTracker />} />
                    <Route path="/hadith" element={<DailyHadith />} />
                    <Route path="/planner" element={<RamadanPlanner />} />
                    <Route path="/badges" element={<Badges />} />
                    <Route path="/dashboard" element={<ProgressDashboard />} />
                    <Route path="/settings" element={<Settings />} />

                    {/* NEW MAXX Routes */}
                    <Route path="/battle" element={<AngelDevilBattle />} />
                    <Route path="/fourthwall" element={<FourthWallBreaks />} />
                    <Route path="/islamic-history" element={<IslamicHistory />} />
                    <Route path="/chat" element={<GroupChat />} />
                    <Route path="/avoid" element={<ThingsToAvoid />} />
                    <Route path="/shawwal" element={<ShawwalBridge />} />
                    <Route path="/challenges" element={<ViralChallenges />} />
                    <Route path="/council" element={<CouncilOf40 />} />
                    <Route path="/habits" element={<HabitTracker />} />
                    <Route path="/real-muslim" element={<RealMuslim />} />
                    <Route path="/heart" element={<YourHeart />} />

                    {/* PHASE 4: Transcendence Routes */}
                    <Route path="/cave" element={<FocusedWorship />} />
                    <Route path="/orchard" element={<BarakahOrchard />} />
                    <Route path="/mizan" element={<MizanScale />} />
                  </Routes>
                </main>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
