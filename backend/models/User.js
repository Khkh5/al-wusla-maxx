const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    hasanat: {
        type: Number,
        default: 0
    },
    streaks: {
        fajr: { type: Number, default: 0 },
        taraweeh: { type: Number, default: 0 },
        khatmah: { type: Number, default: 0 },
        tahajjud: { type: Number, default: 0 }
    },
    level: {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold', 'Diamond'],
        default: 'Bronze'
    },
    ghostMode: {
        type: Boolean,
        default: false
    },
    totalGoodDeeds: {
        type: Number,
        default: 0
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    lastActive: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Auto-update level based on hasanat
userSchema.methods.updateLevel = function () {
    if (this.hasanat >= 100000) this.level = 'Diamond';
    else if (this.hasanat >= 50000) this.level = 'Gold';
    else if (this.hasanat >= 10000) this.level = 'Silver';
    else this.level = 'Bronze';
};

module.exports = mongoose.model('User', userSchema);
