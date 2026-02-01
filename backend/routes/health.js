const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

// Log hydration
router.post('/hydration', authMiddleware, async (req, res) => {
    try {
        const { amount } = req.body;

        const user = await User.findById(req.userId);
        user.hasanat += 1;
        user.totalGoodDeeds += 1;
        await user.save();

        res.json({
            success: true,
            hasanatEarned: 1,
            message: 'Hydration logged'
        });

    } catch (error) {
        console.error('Hydration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Log Qailulah (nap)
router.post('/qailulah', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        user.hasanat += 3;
        user.totalGoodDeeds += 1;
        await user.save();

        res.json({
            success: true,
            hasanatEarned: 3,
            message: 'Qailulah logged'
        });

    } catch (error) {
        console.error('Qailulah error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get health stats
router.get('/stats', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        res.json({
            stats: {
                totalGoodDeeds: user.totalGoodDeeds,
                hasanat: user.hasanat,
                level: user.level
            }
        });

    } catch (error) {
        console.error('Stats error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
