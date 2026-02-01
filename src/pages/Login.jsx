import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';
import { useAppStore } from '../store/useAppStore';
import './Auth.css';

const Login = () => {
    const navigate = useNavigate();
    const { setUser, settings } = useAppStore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await authAPI.login(email, password);

            // Save token
            localStorage.setItem('token', data.token);

            // Update store with user data
            setUser(data.user);

            // Navigate to main app
            navigate('/');

        } catch (err) {
            console.error('Login error:', err);
            setError(err.response?.data?.error || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className="divine-name">الله</h1>
                    <h2>{settings.language === 'ar' ? 'تسجيل الدخول' : 'Welcome Back'}</h2>
                    <p className="tagline">
                        {settings.language === 'ar'
                            ? 'الوُصلة - الرابط الأبدي'
                            : 'AL-WUSLA - The Eternal Link'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {error && <div className="error-message">{error}</div>}

                    <div className="form-group">
                        <label htmlFor="email">
                            {settings.language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={settings.language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            {settings.language === 'ar' ? 'كلمة المرور' : 'Password'}
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={settings.language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
                            required
                            disabled={loading}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading
                            ? (settings.language === 'ar' ? 'جاري الدخول...' : 'Logging in...')
                            : (settings.language === 'ar' ? 'دخول' : 'Login')}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        {settings.language === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
                        <Link to="/register">
                            {settings.language === 'ar' ? 'سجّل الآن' : 'Register now'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
