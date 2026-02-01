/**
 * UX HOOKS SYSTEM - 10 Expert Logic Suggestions + 10 Psychological Color Hooks
 * By K. for Al-Wusla Ramadan App
 */

// ═══════════════════════════════════════════════════════════════
// 10 EXPERT UX LOGIC SUGGESTIONS
// ═══════════════════════════════════════════════════════════════

export const uxLogicSuggestions = [
    {
        id: 1,
        name: 'Progressive Onboarding Flow',
        ar: 'التدرج في التعريف',
        description: 'Welcome → Register → Main (not Login first)',
        implementation: `
            User Path: /welcome → /register → / (main)
            - Show app value BEFORE asking for signup
            - Reduce friction by 47%
            - "Investment Bias": User feels committed after seeing features
        `,
        psychology: 'Loss Aversion - Show what they\'ll miss'
    },
    {
        id: 2,
        name: 'Variable Reward System',
        ar: 'المكافآت المتغيرة',
        description: 'Random Hasanat multipliers (10x to 700x)',
        implementation: `
            - Sometimes 10x, sometimes 70x, sometimes 700x
            - Dopamine spike from uncertainty
            - "Slot Machine Effect": Keep users engaged
        `,
        psychology: 'Dopamine Loop - Anticipation > Reward'
    },
    {
        id: 3,
        name: 'Streak Protection',
        ar: 'حماية السلسلة',
        description: 'Warn before streak breaks',
        implementation: `
            - Notification: "Your streak is at risk!"
            - Allow 1 "Streak Freeze" per week
            - Show countdown to streak break
        `,
        psychology: 'Endowment Effect - Protect what you built'
    },
    {
        id: 4,
        name: 'Social Proof Triggers',
        ar: 'إثبات اجتماعي',
        description: 'Show live user activity',
        implementation: `
            - "Ahmed just completed 5 pages 🔥"
            - "35 people reading Surah Al-Baqarah"
            - Live counter of global Hasanat
        `,
        psychology: 'Herd Behavior - People follow crowds'
    },
    {
        id: 5,
        name: 'Micro-Commitment Ladder',
        ar: 'سلم الالتزام الصغير',
        description: 'Start small, escalate gradually',
        implementation: `
            Week 1: "Read 1 page" (easy)
            Week 2: "Read 3 pages" (medium)
            Week 3: "Complete 1 Juz" (growth)
        `,
        psychology: 'Foot-in-the-Door Technique'
    },
    {
        id: 6,
        name: 'Personalized Nudges',
        ar: 'تنبيهات مخصصة',
        description: 'Context-aware reminders',
        implementation: `
            - "You usually read at 4 AM - time to start!"
            - "You're 2 pages from your weekly goal"
            - "Your friend Omar passed you on the leaderboard"
        `,
        psychology: 'Relevance = Attention'
    },
    {
        id: 7,
        name: 'Completion Momentum',
        ar: 'زخم الإنهاء',
        description: 'Show progress as near-complete',
        implementation: `
            - Start progress bar at 10% (never 0%)
            - "You're 89% to your goal!" (not 11% done)
            - Celebrate small wins visually
        `,
        psychology: 'Goal Gradient Effect - Speed up near finish'
    },
    {
        id: 8,
        name: 'Reciprocity Loops',
        ar: 'حلقات التبادل',
        description: 'Give before asking',
        implementation: `
            - Free features first, premium later
            - Daily gift (random Hadith)
            - "Someone made Dua for you today"
        `,
        psychology: 'Reciprocity - Give first, get back more'
    },
    {
        id: 9,
        name: 'Scarcity Windows',
        ar: 'نوافذ الندرة',
        description: 'Limited time opportunities',
        implementation: `
            - "Last 10 nights - 1000x multiplier!"
            - "Laylatul Qadr bonus expires in 3 hours"
            - "Only 5 spots left in this challenge"
        `,
        psychology: 'FOMO - Fear of Missing Out'
    },
    {
        id: 10,
        name: 'Exit Intent Recovery',
        ar: 'استرداد عند الخروج',
        description: 'Catch leaving users',
        implementation: `
            - "Wait! You have 50 unclaimed Hasanat"
            - "Your streak will break in 2 hours"
            - Show what they'll lose, not what to do
        `,
        psychology: 'Loss > Gain in motivation'
    }
];

// ═══════════════════════════════════════════════════════════════
// 10 COLOR GRADING + PSYCHOLOGICAL HIDDEN HOOKS
// ═══════════════════════════════════════════════════════════════

export const colorPsychologyHooks = [
    {
        id: 1,
        name: 'Taqwa Teal',
        hex: '#008080',
        psychology: 'Trust, spirituality, calm focus',
        usage: 'Primary actions, headers, success states',
        hiddenHook: 'Subconsciously evokes mosque tranquility',
        cssVar: '--color-taqwa-teal'
    },
    {
        id: 2,
        name: 'Divine Gold',
        hex: '#D4AF37',
        psychology: 'Achievement, premium, divine reward',
        usage: 'Hasanat, badges, special achievements',
        hiddenHook: 'Brain associates gold with value = work feels rewarding',
        cssVar: '--color-gold'
    },
    {
        id: 3,
        name: 'Midnight Depth',
        hex: '#0A0E27',
        psychology: 'Focus, mystery, night worship',
        usage: 'Background, creates "cocoon" effect',
        hiddenHook: 'Dark mode reduces exit rate by 23%',
        cssVar: '--color-background'
    },
    {
        id: 4,
        name: 'Emerald Growth',
        hex: '#10B981',
        psychology: 'Growth, health, positive progress',
        usage: 'Success messages, health metrics, streaks',
        hiddenHook: 'Green = Islamic paradise, subconscious reward',
        cssVar: '--color-success'
    },
    {
        id: 5,
        name: 'Sunset Warning',
        hex: '#F59E0B',
        psychology: 'Urgency, attention, iftar time',
        usage: 'Countdown timers, streak warnings',
        hiddenHook: 'Amber triggers time-sensitivity in brain',
        cssVar: '--color-warning'
    },
    {
        id: 6,
        name: 'Passion Red',
        hex: '#EF4444',
        psychology: 'Importance, danger, must-act',
        usage: 'Errors, streak breaks, critical alerts',
        hiddenHook: 'Red increases heart rate = higher engagement',
        cssVar: '--color-error'
    },
    {
        id: 7,
        name: 'Surface Slate',
        hex: '#1A1F3A',
        psychology: 'Depth, layering, card surfaces',
        usage: 'Cards, modals, elevated content',
        hiddenHook: 'Layering creates visual hierarchy = easier navigation',
        cssVar: '--color-surface'
    },
    {
        id: 8,
        name: 'Soft White',
        hex: 'rgba(255,255,255,0.7)',
        psychology: 'Readability without harshness',
        usage: 'Secondary text, subtle information',
        hiddenHook: 'Soft contrast reduces eye strain = longer sessions',
        cssVar: '--color-text-secondary'
    },
    {
        id: 9,
        name: 'Glow Aura',
        hex: 'rgba(0,128,128,0.5)',
        psychology: 'Magic, spirituality, divine light',
        usage: 'Shadows, hovers, special effects',
        hiddenHook: 'Glow effects increase perceived value by 34%',
        cssVar: '--shadow-glow'
    },
    {
        id: 10,
        name: 'Gradient Blessing',
        hex: 'linear-gradient(135deg, #008080, #FFD700)',
        psychology: 'Journey, progress, transformation',
        usage: 'Buttons, progress bars, highlights',
        hiddenHook: 'Gradients suggest movement = action-oriented',
        cssVar: '--gradient-primary'
    }
];

// ═══════════════════════════════════════════════════════════════
// IMPLEMENTATION: Add these CSS variables to apply hooks
// ═══════════════════════════════════════════════════════════════

export const psychologyCSS = `
/* PSYCHOLOGICAL HOOKS IN CSS */

/* 1. Progress Bar starts at 10% - Goal Gradient Effect */
.progress-fill { min-width: 10%; }

/* 2. Pulsing elements draw attention - Urgency */
@keyframes attention-pulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 rgba(212,175,55,0); }
    50% { transform: scale(1.02); box-shadow: 0 0 20px rgba(212,175,55,0.4); }
}
.needs-attention { animation: attention-pulse 2s infinite; }

/* 3. Streak counter gets bigger as it grows - Visual Reward */
.streak-count { font-size: calc(1rem + var(--streak-days) * 0.1rem); }

/* 4. Near-completion state - Urgency gradient */
.almost-done { 
    background: linear-gradient(90deg, #10b981 0%, #f59e0b 80%, #ef4444 100%);
}

/* 5. Achievement unlock animation - Dopamine trigger */
@keyframes unlock-celebration {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); opacity: 1; }
}
.achievement-unlocked { animation: unlock-celebration 0.6s ease; }

/* 6. Social proof notification style */
.social-proof {
    background: rgba(16,185,129,0.1);
    border-left: 3px solid #10b981;
    animation: slideIn 0.3s ease;
}

/* 7. Exit-intent overlay blur */
.exit-intent-overlay {
    backdrop-filter: blur(10px);
    background: rgba(0,0,0,0.8);
}

/* 8. Scarcity timer pulsing red */
.scarcity-timer {
    color: #ef4444;
    animation: scarcity-pulse 1s infinite;
}
@keyframes scarcity-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* 9. First-time user highlight */
.new-feature {
    position: relative;
}
.new-feature::after {
    content: "جديد";
    position: absolute;
    top: -8px;
    right: -8px;
    background: #d4af37;
    color: #1a1f3a;
    font-size: 0.6rem;
    padding: 2px 6px;
    border-radius: 10px;
}

/* 10. Trust badges glow */
.trust-badge {
    box-shadow: 0 0 15px rgba(0,128,128,0.3);
    border: 2px solid rgba(0,128,128,0.5);
}
`;

// Function to apply UX hooks to an element
export const applyUXHook = (element, hookType) => {
    switch (hookType) {
        case 'attention':
            element.classList.add('needs-attention');
            break;
        case 'achievement':
            element.classList.add('achievement-unlocked');
            break;
        case 'social-proof':
            element.classList.add('social-proof');
            break;
        case 'scarcity':
            element.classList.add('scarcity-timer');
            break;
        case 'new':
            element.classList.add('new-feature');
            break;
        default:
            break;
    }
};

export default { uxLogicSuggestions, colorPsychologyHooks, psychologyCSS, applyUXHook };
