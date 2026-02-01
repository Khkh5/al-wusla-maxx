const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Group = require('../models/Group');

// Get user's groups
router.get('/', authMiddleware, async (req, res) => {
    try {
        const groups = await Group.find({ members: req.userId })
            .select('name members theme createdAt');

        res.json({ groups });

    } catch (error) {
        console.error('Get groups error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Join a group
router.post('/join', authMiddleware, async (req, res) => {
    try {
        const { groupId } = req.body;

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }

        // Add user to members if not already
        if (!group.members.includes(req.userId)) {
            group.members.push(req.userId);
            await group.save();
        }

        res.json({
            success: true,
            group: {
                id: group._id,
                name: group.name,
                members: group.members.length
            }
        });

    } catch (error) {
        console.error('Join group error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get group messages
router.get('/:groupId/messages', authMiddleware, async (req, res) => {
    try {
        const { groupId } = req.params;

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }

        // Check if user is member
        if (!group.members.includes(req.userId)) {
            return res.status(403).json({ error: 'Not a member of this group' });
        }

        res.json({ messages: group.messages });

    } catch (error) {
        console.error('Get messages error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create default groups (seed data)
router.post('/seed', async (req, res) => {
    try {
        const defaultGroups = [
            { name: 'كتيبة النور', theme: 'taqwa-teal', members: [], messages: [] },
            { name: 'فرسان الفجر', theme: 'fajr-twilight', members: [], messages: [] },
            { name: 'حماة القرآن', theme: 'kaaba-gold', members: [], messages: [] }
        ];

        await Group.insertMany(defaultGroups);

        res.json({ success: true, message: 'Default groups created' });

    } catch (error) {
        console.error('Seed groups error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
