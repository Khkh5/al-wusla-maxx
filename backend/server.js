const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
// Cloud DB Connected
const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/al-wusla';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Import Routes
const authRoutes = require('./routes/auth');
const quranRoutes = require('./routes/quran');
const competitionRoutes = require('./routes/competition');
const prayerRoutes = require('./routes/prayer');
const healthRoutes = require('./routes/health');
const groupsRoutes = require('./routes/groups');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/quran', quranRoutes);
app.use('/api/competition', competitionRoutes);
app.use('/api/prayer', prayerRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/groups', groupsRoutes);

// Test Route
app.get('/api/test', (req, res) => {
    res.json({ message: '🌙 AL-WUSLA API is running!' });
});

// Socket.IO Real-Time Events
io.on('connection', (socket) => {
    console.log('👤 User connected:', socket.id);

    // Join group/room
    socket.on('join_group', (groupId) => {
        socket.join(groupId);
        console.log(`User ${socket.id} joined group ${groupId}`);
    });

    // Send message to group
    socket.on('send_message', async (data) => {
        const { groupId, message, userId, userName } = data;

        try {
            const Group = require('./models/Group');

            // Save message to database
            await Group.findByIdAndUpdate(groupId, {
                $push: {
                    messages: {
                        userId,
                        userName,
                        message,
                        timestamp: new Date()
                    }
                }
            });

            // Broadcast to all users in group
            io.to(groupId).emit('new_message', {
                userId,
                userName,
                message,
                timestamp: new Date()
            });

        } catch (error) {
            console.error('Error sending message:', error);
        }
    });

    // Hasanat earned - update leaderboard
    socket.on('hasanat_earned', async (data) => {
        try {
            const User = require('./models/User');
            const topUsers = await User.find({ ghostMode: false })
                .sort({ hasanat: -1 })
                .limit(100)
                .select('username hasanat level');

            // Broadcast updated leaderboard to all connected users
            io.emit('leaderboard_update', topUsers);
        } catch (error) {
            console.error('Error updating leaderboard:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('👋 User disconnected:', socket.id);
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌙 AL-WUSLA Backend API ready`);
});

module.exports = { io };
