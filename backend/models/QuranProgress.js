const mongoose = require('mongoose');

const quranProgressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    completedPages: [{
        type: Number,
        min: 1,
        max: 604
    }],
    khatmahCount: {
        type: Number,
        default: 0
    },
    currentPage: {
        type: Number,
        default: 1,
        min: 1,
        max: 604
    },
    lastRead: {
        type: Date,
        default: Date.now
    },
    dailyGoal: {
        type: Number,
        default: 4 // pages per day for 30-day Khatmah
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('QuranProgress', quranProgressSchema);
