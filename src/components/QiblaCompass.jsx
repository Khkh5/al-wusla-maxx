import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './QiblaCompass.css';

const QiblaCompass = () => {
    const { settings } = useAppStore();
    const language = settings?.language || 'ar';

    const [heading, setHeading] = useState(0);
    const [qiblaDirection, setQiblaDirection] = useState(0);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [error, setError] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    // Kaaba coordinates
    const KAABA_LAT = 21.4225;
    const KAABA_LNG = 39.8262;

    // Calculate Qibla direction from user location
    const calculateQibla = (lat, lng) => {
        const userLatRad = lat * Math.PI / 180;
        const userLngRad = lng * Math.PI / 180;
        const kaabaLatRad = KAABA_LAT * Math.PI / 180;
        const kaabaLngRad = KAABA_LNG * Math.PI / 180;

        const y = Math.sin(kaabaLngRad - userLngRad);
        const x = Math.cos(userLatRad) * Math.tan(kaabaLatRad) -
            Math.sin(userLatRad) * Math.cos(kaabaLngRad - userLngRad);

        let qibla = Math.atan2(y, x) * 180 / Math.PI;
        return (qibla + 360) % 360;
    };

    // Get user location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                    const qibla = calculateQibla(latitude, longitude);
                    setQiblaDirection(qibla);
                },
                (err) => {
                    setError(language === 'ar' ? 'يرجى تفعيل الموقع' : 'Please enable location');
                    // Default to Cairo
                    const qibla = calculateQibla(30.0444, 31.2357);
                    setQiblaDirection(qibla);
                }
            );
        }
    }, []);

    // Device orientation for compass
    useEffect(() => {
        const handleOrientation = (event) => {
            if (event.alpha !== null) {
                setHeading(event.alpha);
                setPermissionGranted(true);
            }
        };

        // Request permission for iOS 13+
        if (typeof DeviceOrientationEvent !== 'undefined' &&
            typeof DeviceOrientationEvent.requestPermission === 'function') {
            // iOS 13+ requires permission
            setError(language === 'ar' ? 'اضغط للتفعيل' : 'Tap to enable');
        } else {
            window.addEventListener('deviceorientation', handleOrientation, true);
            setPermissionGranted(true);
        }

        return () => {
            window.removeEventListener('deviceorientation', handleOrientation, true);
        };
    }, []);

    const requestPermission = async () => {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            try {
                const permission = await DeviceOrientationEvent.requestPermission();
                if (permission === 'granted') {
                    window.addEventListener('deviceorientation', (event) => {
                        if (event.alpha !== null) {
                            setHeading(event.alpha);
                        }
                    }, true);
                    setPermissionGranted(true);
                    setError(null);
                }
            } catch (err) {
                setError(language === 'ar' ? 'تم رفض الإذن' : 'Permission denied');
            }
        }
    };

    // Calculate needle rotation (Qibla relative to device heading)
    const needleRotation = qiblaDirection - heading;

    return (
        <div className="qibla-page">
            <div className="qibla-header">
                <h1>🕋 {language === 'ar' ? 'بوصلة القبلة' : 'Qibla Compass'}</h1>
                <p>{language === 'ar' ? 'اتجاه الكعبة المشرفة' : 'Direction to Holy Kaaba'}</p>
            </div>

            {error && !permissionGranted && (
                <button className="permission-btn" onClick={requestPermission}>
                    🧭 {error}
                </button>
            )}

            {/* Compass */}
            <div className="compass-container">
                <div className="compass-outer">
                    <div
                        className="compass-dial"
                        style={{ transform: `rotate(${-heading}deg)` }}
                    >
                        {/* Cardinal directions */}
                        <span className="direction n">N</span>
                        <span className="direction e">E</span>
                        <span className="direction s">S</span>
                        <span className="direction w">W</span>

                        {/* Degree markers */}
                        {[...Array(36)].map((_, i) => (
                            <div
                                key={i}
                                className="tick"
                                style={{ transform: `rotate(${i * 10}deg)` }}
                            />
                        ))}
                    </div>

                    {/* Qibla needle */}
                    <div
                        className="qibla-needle"
                        style={{ transform: `rotate(${needleRotation}deg)` }}
                    >
                        <div className="needle-point">🕋</div>
                        <div className="needle-shaft"></div>
                    </div>

                    {/* Center */}
                    <div className="compass-center">
                        <span>{Math.round(qiblaDirection)}°</span>
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="qibla-info">
                <div className="info-item">
                    <span className="info-label">{language === 'ar' ? 'اتجاه القبلة' : 'Qibla Direction'}</span>
                    <span className="info-value">{Math.round(qiblaDirection)}°</span>
                </div>
                <div className="info-item">
                    <span className="info-label">{language === 'ar' ? 'اتجاه الجهاز' : 'Device Heading'}</span>
                    <span className="info-value">{Math.round(heading)}°</span>
                </div>
                {userLocation && (
                    <div className="info-item location">
                        <span className="info-label">📍 {language === 'ar' ? 'موقعك' : 'Your Location'}</span>
                        <span className="info-value">{userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}</span>
                    </div>
                )}
            </div>

            {/* Instructions */}
            <div className="qibla-instructions">
                <p>
                    {language === 'ar'
                        ? '🕋 وجّه الجهاز نحو رمز الكعبة للقبلة الصحيحة'
                        : '🕋 Point your device toward the Kaaba icon for Qibla'}
                </p>
            </div>
        </div>
    );
};

export default QiblaCompass;
