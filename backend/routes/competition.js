const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

// Get global leaderboard
router.get('/leaderboard', authMiddleware, async (req, res) => {
    try {
        const type = req.query.type || 'global';

        let leaderboard;

        if (type === 'global') {
            leaderboard = await User.find({ ghostMode: false })
                .sort({ hasanat: -1 })
                .limit(100)
                .select('username hasanat level totalGoodDeeds');
        } else if (type === 'friends') {
            // For now, show same as global (you can add friends system later)
            leaderboard = await User.find({ ghostMode: false })
                .sort({ hasanat: -1 })
                .limit(100)
                .select('username hasanat level totalGoodDeeds');
        }

        const formattedLeaderboard = leaderboard.map((user, index) => ({
            rank: index + 1,
            id: user._id,
            username: user.username,
            hasanat: user.hasanat,
            level: user.level,
            totalGoodDeeds: user.totalGoodDeeds
        }));

        res.json({ leaderboard: formattedLeaderboard });

    } catch (error) {
        console.error('Leaderboard error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Send boost to friend
router.post('/boost', authMiddleware, async (req, res) => {
    try {
        const { friendId } = req.body;

        if (!friendId) {
            return res.status(400).json({ error: 'Friend ID required' });
        }

        // Award hasanat to booster
        const user = await User.findById(req.userId);
        user.hasanat += 5;
        user.totalGoodDeeds += 1;
        user.updateLevel();
        await user.save();

        res.json({
            success: true,
            hasanatEarned: 5,
            user: {
                hasanat: user.hasanat,
                level: user.level
            }
        });

    } catch (error) {
        console.error('Boost error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get active challenges
router.get('/challenges', authMiddleware, async (req, res) => {
    try {
        // For now, return static challenges (you can create Challenge model later)
        const challenges = [
            { id: 'fajrSquad', name: 'Fajr Squad', active: false, description: 'Wake with 5 friends' },
            { id: 'stepsToMecca', name: 'Steps to Mecca', active: false, description: 'Virtual journey' },
            { id: 'deepFocusWars', name: 'Deep Focus Wars', active: false, description: 'Phone-free Taraweeh' },
            { id: 'dishOfLight', name: 'Dish of Light', active: false, description: 'Daily food sharing' },
            { id: 'mysteryDua', name: 'Mystery Dua', active: false, description: 'Anonymous prayers' },
            { id: 'antiGossip', name: 'Anti-Gossip Zone', active: false, description: 'Daily pledge' }
        ];

        res.json({ challenges });

    } catch (error) {
        console.error('Challenges error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Join a challenge
router.post('/join-challenge', authMiddleware, async (req, res) => {
    try {
        const { challengeId } = req.body;

        if (!challengeId) {
            return res.status(400).json({ error: 'Challenge ID required' });
        }

        // For now, just return success (you can track this in database later)
        const user = await User.findById(req.userId);
        user.hasanat += 10; // Reward for joining
        user.totalGoodDeeds += 1;
        await user.save();

        res.json({
            success: true,
            message: `Joined challenge: ${challengeId}`,
            hasanatEarned: 10
        });

    } catch (error) {
        console.error('Join challenge error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
