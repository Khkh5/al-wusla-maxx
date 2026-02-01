import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';
import { useAppStore } from '../store/useAppStore';
import './Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const { setUser, settings } = useAppStore();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (password !== confirmPassword) {
            setError(settings.language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError(settings.language === 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters');
            return;
        }

        setLoading(true);

        try {
            const data = await authAPI.register(username, email, password);

            // Save token
            localStorage.setItem('token', data.token);

            // Update store with user data
            setUser(data.user);

            // Navigate to main app
            navigate('/');

        } catch (err) {
            console.error('Registration error:', err);
            setError(err.response?.data?.error || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className="divine-name">الله</h1>
                    <h2>{settings.language === 'ar' ? 'إنشاء حساب جديد' : 'Create Account'}</h2>
                    <p className="tagline">
                        {settings.language === 'ar'
                            ? 'انضم إلى رحلة رمضان الرقمية'
                            : 'Join the Digital Ramadan Journey'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {error && <div className="error-message">{error}</div>}

                    <div className="form-group">
                        <label htmlFor="username">
                            {settings.language === 'ar' ? 'اسم المستخدم' : 'Username'}
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder={settings.language === 'ar' ? 'اختر اسم مستخدم' : 'Choose a username'}
                            required
                            disabled={loading}
                            minLength={3}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            {settings.language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={settings.language === 'ar' ? 'example@email.com' : 'example@email.com'}
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
                            placeholder={settings.language === 'ar' ? '6 أحرف على الأقل' : 'At least 6 characters'}
                            required
                            disabled={loading}
                            minLength={6}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            {settings.language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder={settings.language === 'ar' ? 'أعد إدخال كلمة المرور' : 'Re-enter password'}
                            required
                            disabled={loading}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading
                            ? (settings.language === 'ar' ? 'جاري التسجيل...' : 'Registering...')
                            : (settings.language === 'ar' ? 'تسجيل' : 'Register')}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        {settings.language === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?'}{' '}
                        <Link to="/login">
                            {settings.language === 'ar' ? 'سجّل الدخول' : 'Login'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
