const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');
const QuranProgress = require('../models/QuranProgress');

// Get user's Quran progress
router.get('/progress', authMiddleware, async (req, res) => {
    try {
        const progress = await QuranProgress.findOne({ userId: req.userId });

        if (!progress) {
            return res.status(404).json({ error: 'Progress not found' });
        }

        res.json({ progress });

    } catch (error) {
        console.error('Get progress error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Complete a Quran page
router.post('/complete-page', authMiddleware, async (req, res) => {
    try {
        const { pageNumber } = req.body;

        if (!pageNumber || pageNumber < 1 || pageNumber > 604) {
            return res.status(400).json({ error: 'Invalid page number' });
        }

        // Get user and progress
        const user = await User.findById(req.userId);
        const progress = await QuranProgress.findOne({ userId: req.userId });

        // Check if page already completed
        if (progress.completedPages.includes(pageNumber)) {
            return res.status(400).json({ error: 'Page already completed' });
        }

        // Add to completed pages
        progress.completedPages.push(pageNumber);
        progress.currentPage = pageNumber;
        progress.lastRead = new Date();

        // Check if Khatmah complete
        if (progress.completedPages.length === 604) {
            progress.khatmahCount += 1;
        }

        await progress.save();

        // Calculate Hasanat (10x or 700x multiplier)
        const multiplier = Math.random() > 0.9 ? 700 : 10; // 10% chance of 700x
        const baseAmount = 10;
        const totalHasanat = baseAmount * multiplier;

        // Update user's hasanat
        user.hasanat += totalHasanat;
        user.totalGoodDeeds += 1;

        // Update level
        user.updateLevel();

        await user.save();

        res.json({
            success: true,
            hasanat: totalHasanat,
            multiplier,
            newProgress: {
                completedPages: progress.completedPages.length,
                khatmahCount: progress.khatmahCount,
                currentPage: progress.currentPage
            },
            user: {
                hasanat: user.hasanat,
                level: user.level,
                totalGoodDeeds: user.totalGoodDeeds
            }
        });

    } catch (error) {
        console.error('Complete page error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get Quran leaderboard
router.get('/leaderboard', authMiddleware, async (req, res) => {
    try {
        const topUsers = await QuranProgress.find()
            .populate('userId', 'username level ghostMode')
            .sort({ 'completedPages': -1 })
            .limit(100);

        const leaderboard = topUsers.map((progress, index) => ({
            rank: index + 1,
            username: progress.userId.ghostMode ? 'عبد الله' : progress.userId.username,
            pagesCompleted: progress.completedPages.length,
            khatmahCount: progress.khatmahCount,
            level: progress.userId.level
        }));

        res.json({ leaderboard });

    } catch (error) {
        console.error('Leaderboard error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
