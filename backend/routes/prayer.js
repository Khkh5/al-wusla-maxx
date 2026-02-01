const express = require('express');
const router = express.Router();
const adhan = require('adhan');
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

// Get prayer times for location
router.get('/times', authMiddleware, async (req, res) => {
    try {
        const { lat, lng, date } = req.query;

        if (!lat || !lng) {
            return res.status(400).json({ error: 'Latitude and longitude required' });
        }

        const coordinates = new adhan.Coordinates(parseFloat(lat), parseFloat(lng));
        const params = adhan.CalculationMethod.MuslimWorldLeague();
        const prayerDate = date ? new Date(date) : new Date();
        const prayerTimes = new adhan.PrayerTimes(coordinates, prayerDate, params);

        res.json({
            fajr: prayerTimes.fajr,
            sunrise: prayerTimes.sunrise,
            dhuhr: prayerTimes.dhuhr,
            asr: prayerTimes.asr,
            maghrib: prayerTimes.maghrib,
            isha: prayerTimes.isha,
            // Calculate Taraweeh (20 min after Isha)
            taraweeh: new Date(prayerTimes.isha.getTime() + 20 * 60000),
            // Calculate Tahajjud (last third of night)
            tahajjud: new Date(prayerTimes.fajr.getTime() - 90 * 60000)
        });

    } catch (error) {
        console.error('Prayer times error:', error);
        res.status(500).json({ error: 'Error calculating prayer times' });
    }
});

// Check in at mosque for prayer
router.post('/check-in', authMiddleware, async (req, res) => {
    try {
        const { prayerName, location } = req.body;

        if (!prayerName) {
            return res.status(400).json({ error: 'Prayer name required' });
        }

        const user = await User.findById(req.userId);

        // Update streak based on prayer type
        if (prayerName === 'فجر' || prayerName === 'Fajr') {
            user.streaks.fajr += 1;
        } else if (prayerName === 'تراويح' || prayerName === 'Taraweeh') {
            user.streaks.taraweeh += 1;
        } else if (prayerName === 'تهجد' || prayerName === 'Tahajjud') {
            user.streaks.tahajjud += 1;
        }

        // Award hasanat
        user.hasanat += 5;
        user.totalGoodDeeds += 1;
        user.updateLevel();

        await user.save();

        res.json({
            success: true,
            hasanatEarned: 5,
            newStreaks: user.streaks,
            user: {
                hasanat: user.hasanat,
                level: user.level,
                streaks: user.streaks
            }
        });

    } catch (error) {
        console.error('Check-in error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
