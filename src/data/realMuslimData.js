/**
 * REAL MUSLIM - المسلم الحقيقي
 * Ta'abbudi Methodology: Submission First, Benefits Second
 * Comprehensive Islamic Knowledge System
 * By K. for Al-Wusla
 */

// ═══════════════════════════════════════════════════════════════════════════
// CORE METHODOLOGY - منهج التسليم
// ═══════════════════════════════════════════════════════════════════════════

export const methodology = {
    principle: {
        ar: 'نحن لا نعبد الله لأن أوامره مفيدة دنيوياً، بل نعبده لأنه الله ولأننا عبيد',
        en: 'We worship Allah not because His commands are beneficial, but because He is Allah and we are servants'
    },
    approach: [
        { order: 1, ar: 'الأساس العقدي (التسليم)', en: 'Creed Foundation (Submission)' },
        { order: 2, ar: 'البعد السايكولوجي', en: 'Psychological Dimension' },
        { order: 3, ar: 'البعد العلمي (تكميلي)', en: 'Scientific Dimension (Supplementary)' }
    ],
    warning: {
        ar: 'العلم يتغير، لكن النص الإلهي ثابت. لو ربطنا الدين بنظرية علمية وتغيرت النظرية، سيهتز إيمان الناس',
        en: 'Science changes, but divine text is constant. If religion is tied to scientific theory and it changes, faith shakes'
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// ISLAMIC RULINGS WITH TA'ABBUDI METHODOLOGY - أحكام بمنهج التعبد
// ═══════════════════════════════════════════════════════════════════════════

export const islamicRulings = [
    {
        id: 1,
        topic: { ar: 'تحريم لحم الخنزير', en: 'Prohibition of Pork' },
        icon: '🐷',
        taabbudi: {
            ar: 'حرام لأن الله قال: {فَإِنَّهُ رِجْسٌ}. نطيعه سواء كان الخنزير ضاراً أو أنظف حيوان. العبودية هي الامتناع عما يشتهيه غيرنا طاعةً للملك.',
            en: 'Forbidden because Allah said: {It is impure}. We obey whether pork is harmful or the cleanest animal. Servitude is abstaining from what others desire in obedience to the King.'
        },
        psychology: {
            ar: 'تربية الإرادة على ترك المباحات عند غيرنا تميزاً للهوية الإسلامية',
            en: 'Training willpower to leave what is permissible for others, distinguishing Islamic identity'
        },
        science: {
            ar: 'مستودع للديدان الشريطية والدهون المشبعة الضارة',
            en: 'Reservoir for tapeworms and harmful saturated fats'
        }
    },
    {
        id: 2,
        topic: { ar: 'غض البصر', en: 'Lowering the Gaze' },
        icon: '👁️',
        taabbudi: {
            ar: 'أمر إلهي {قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ} تزكيةً للقلب. العين منفذ القلب، والله يريد قلباً سليماً لا يتعلق بالصور الفانية.',
            en: 'Divine command {Tell the believers to lower their gaze} to purify the heart. The eye is the gateway to the heart, Allah wants a sound heart not attached to fleeting images.'
        },
        psychology: {
            ar: 'الحماية من المقارنة المهلكة ومن إدمان الدوبامين الذي يدمر نظام المكافأة في المخ',
            en: 'Protection from destructive comparison and dopamine addiction that destroys the brain reward system'
        },
        science: {
            ar: 'الراحة العصبية وتقليل التشتت الذهني',
            en: 'Neurological rest and reduced mental distraction'
        }
    },
    {
        id: 3,
        topic: { ar: 'الحجاب', en: 'Hijab' },
        icon: '🧕',
        taabbudi: {
            ar: 'عبادة، سمعنا وأطعنا لقوله {وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ}. ليس قطعة قماش بل راية استسلام لأمر الله وتوحيده بالتشريع.',
            en: 'Worship, we heard and obeyed {Let them draw their head coverings over their chests}. Not a piece of cloth but a flag of submission to Allah\'s command.'
        },
        psychology: {
            ar: 'تحرير المرأة من كونها جسداً يُقيّم إلى إنسان يُحترم لعقله وروحه',
            en: 'Freeing women from being a body to be evaluated to a human respected for mind and soul'
        },
        science: {
            ar: 'حماية المجتمع من السعار الجنسي وتشييء المرأة',
            en: 'Protecting society from sexual obsession and objectification of women'
        }
    },
    {
        id: 4,
        topic: { ar: 'صلاة الفجر', en: 'Fajr Prayer' },
        icon: '🌅',
        taabbudi: {
            ar: 'الصلاة كانت على المؤمنين كتاباً موقوتاً. الاستيقاظ إعلان أن الله أحب إليّ من النوم والراحة.',
            en: 'Prayer was prescribed at fixed times for believers. Waking up declares that Allah is more beloved than sleep and comfort.'
        },
        psychology: {
            ar: 'الانتصار اليومي الأول على النفس (Self-mastery)',
            en: 'The first daily victory over self (Self-mastery)'
        },
        science: {
            ar: 'غاز الأوزون النقي، والوقاية من جلطات القلب التي تكثر في ساعات الصباح الأولى',
            en: 'Pure ozone gas, prevention of heart clots common in early morning hours'
        }
    },
    {
        id: 5,
        topic: { ar: 'الغسل من الجنابة', en: 'Ritual Bath' },
        icon: '💧',
        taabbudi: {
            ar: 'شرط لصحة الصلاة تعبداً محضاً. الله يحب التوابين ويحب المتطهرين.',
            en: 'Condition for valid prayer, pure worship. Allah loves those who repent and purify themselves.'
        },
        psychology: {
            ar: 'تهيئة النفس للانتقال من حالة الشهوة الدنيوية إلى الوقوف بين يدي الله',
            en: 'Preparing the soul to transition from worldly desire to standing before Allah'
        },
        science: {
            ar: 'تنشيط الدورة الدموية وإزالة العرق والخلايا الميتة',
            en: 'Activating blood circulation, removing sweat and dead cells'
        }
    },
    {
        id: 6,
        topic: { ar: 'الصيام', en: 'Fasting' },
        icon: '🌙',
        taabbudi: {
            ar: '{كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ} الهدف التقوى لا الصحة.',
            en: '{Fasting is prescribed for you as it was for those before you, that you may attain piety} The goal is piety, not health.'
        },
        psychology: {
            ar: 'التحكم في الغرائز الأساسية دليل على قوة الإرادة',
            en: 'Controlling basic instincts proves strength of will'
        },
        science: {
            ar: 'Autophagy، تجديد الخلايا، إزالة السموم',
            en: 'Autophagy, cell renewal, detoxification'
        }
    },
    {
        id: 7,
        topic: { ar: 'تحريم الربا', en: 'Prohibition of Usury' },
        icon: '💰',
        taabbudi: {
            ar: '{وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا} حرام لأن الله حرمه، سواء كان الاقتصاد مبنياً عليه أم لا.',
            en: '{Allah has permitted trade and forbidden usury} Forbidden because Allah forbade it, whether economy is built on it or not.'
        },
        psychology: {
            ar: 'تحرير الفرد من عبودية الديون والقلق المالي',
            en: 'Freeing individuals from slavery of debt and financial anxiety'
        },
        science: {
            ar: 'كل أزمة اقتصادية عالمية سببها الربا (2008)',
            en: 'Every global economic crisis is caused by usury (2008)'
        }
    },
    {
        id: 8,
        topic: { ar: 'تحريم الخمر', en: 'Prohibition of Alcohol' },
        icon: '🍷',
        taabbudi: {
            ar: '{إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ رِجْسٌ مِّنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ} أمر إلهي بالاجتناب الكامل.',
            en: '{Intoxicants and gambling are abominations of Satan\'s work, so avoid it} Divine command for complete avoidance.'
        },
        psychology: {
            ar: 'الحفاظ على العقل الذي هو مناط التكليف',
            en: 'Preserving the mind which is the basis of religious responsibility'
        },
        science: {
            ar: 'تدمير خلايا الكبد والمخ، إدمان، حوادث السير',
            en: 'Destruction of liver and brain cells, addiction, traffic accidents'
        }
    },
    {
        id: 9,
        topic: { ar: 'الصلاة في وقتها', en: 'Prayer on Time' },
        icon: '⏰',
        taabbudi: {
            ar: '{إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا} التأخير عصيان.',
            en: '{Prayer is prescribed for believers at fixed times} Delay is disobedience.'
        },
        psychology: {
            ar: 'تنظيم اليوم حول لقاء الله يعطي هيكلاً للحياة',
            en: 'Organizing the day around meeting Allah gives structure to life'
        },
        science: {
            ar: 'فترات راحة منتظمة تحسن الإنتاجية',
            en: 'Regular rest periods improve productivity'
        }
    },
    {
        id: 10,
        topic: { ar: 'بر الوالدين', en: 'Honoring Parents' },
        icon: '👨‍👩‍👧',
        taabbudi: {
            ar: '{وَبِالْوَالِدَيْنِ إِحْسَانًا} مقرون بعبادة الله مباشرة. حتى لو كانا مسيئين العقوق كبيرة.',
            en: '{And to parents, good treatment} Paired directly with worshiping Allah. Even if they mistreat you, disobedience is a major sin.'
        },
        psychology: {
            ar: 'الشعور بالترابط والانتماء يقلل الاكتئاب',
            en: 'Feeling connected and belonging reduces depression'
        },
        science: {
            ar: 'الدعم الأسري يطيل العمر',
            en: 'Family support extends lifespan'
        }
    },
    {
        id: 11,
        topic: { ar: 'تحريم الغيبة', en: 'Prohibition of Backbiting' },
        icon: '🗣️',
        taabbudi: { ar: '{أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا} تشبيه مقزز لتعظيم الحرمة.', en: '{Would one of you like to eat the flesh of his dead brother?} Disgusting comparison to emphasize prohibition.' },
        psychology: { ar: 'بناء الثقة المجتمعية وحفظ كرامة الإنسان', en: 'Building societal trust and preserving human dignity' },
        science: { ar: 'الكلام السلبي يرفع هرمونات التوتر', en: 'Negative speech raises stress hormones' }
    },
    {
        id: 12,
        topic: { ar: 'صلة الرحم', en: 'Maintaining Family Ties' },
        icon: '👨‍👩‍👧‍👦',
        taabbudi: { ar: 'من أراد أن يُبسط له في رزقه فليصل رحمه. أمر نبوي صريح.', en: 'Whoever wants provision expanded should maintain ties. Direct prophetic command.' },
        psychology: { ar: 'الانتماء الأسري يقلل القلق والاكتئاب', en: 'Family belonging reduces anxiety and depression' },
        science: { ar: 'الدعم الاجتماعي يقوي المناعة', en: 'Social support strengthens immunity' }
    },
    {
        id: 13,
        topic: { ar: 'الصدق', en: 'Truthfulness' },
        icon: '✓',
        taabbudi: { ar: 'عليكم بالصدق فإن الصدق يهدي إلى البر. فريضة أخلاقية.', en: 'Be truthful, for truthfulness leads to righteousness. Moral obligation.' },
        psychology: { ar: 'راحة الضمير وعدم الحاجة لتذكر الأكاذيب', en: 'Clear conscience and no need to remember lies' },
        science: { ar: 'الكذب يرفع ضغط الدم ومعدل ضربات القلب', en: 'Lying raises blood pressure and heart rate' }
    },
    {
        id: 14,
        topic: { ar: 'الحياء', en: 'Modesty' },
        icon: '😊',
        taabbudi: { ar: 'الحياء شعبة من الإيمان. جزء لا يتجزأ من العقيدة.', en: 'Modesty is a branch of faith. Integral part of creed.' },
        psychology: { ar: 'الحياء يحمي من الانحراف السلوكي', en: 'Modesty protects from behavioral deviation' },
        science: { ar: 'المتحفظون أقل عرضة للإدمان', en: 'Reserved people less prone to addiction' }
    },
    {
        id: 15,
        topic: { ar: 'الإحسان للجار', en: 'Being Good to Neighbors' },
        icon: '🏘️',
        taabbudi: { ar: 'ما زال جبريل يوصيني بالجار حتى ظننت أنه سيورثه.', en: 'Jibreel kept advising about neighbor until I thought he would inherit.' },
        psychology: { ar: 'الجوار الحسن يخلق بيئة آمنة', en: 'Good neighborliness creates safe environment' },
        science: { ar: 'المجتمعات المتماسكة أقل جريمة', en: 'Cohesive communities have less crime' }
    },
    {
        id: 16,
        topic: { ar: 'إكرام الضيف', en: 'Honoring Guests' },
        icon: '🍽️',
        taabbudi: { ar: 'من كان يؤمن بالله واليوم الآخر فليكرم ضيفه.', en: 'Whoever believes in Allah and Last Day should honor guest.' },
        psychology: { ar: 'الكرم يولد شعوراً بالرضا', en: 'Generosity generates satisfaction' },
        science: { ar: 'العطاء يفرز هرمونات السعادة', en: 'Giving releases happiness hormones' }
    },
    {
        id: 17,
        topic: { ar: 'الستر على المسلم', en: 'Covering Muslim\'s Faults' },
        icon: '🤐',
        taabbudi: { ar: 'من ستر مسلماً ستره الله في الدنيا والآخرة.', en: 'Whoever covers a Muslim, Allah covers him in this life and next.' },
        psychology: { ar: 'بناء ثقافة التسامح والرحمة', en: 'Building culture of forgiveness and mercy' },
        science: { ar: 'المجتمعات المتسامحة أقل توتراً', en: 'Forgiving societies are less stressed' }
    },
    {
        id: 18,
        topic: { ar: 'الزكاة', en: 'Obligatory Charity' },
        icon: '💎',
        taabbudi: { ar: 'ركن من أركان الإسلام. {وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ}', en: 'Pillar of Islam. {Establish prayer and give Zakat}' },
        psychology: { ar: 'تطهير النفس من الشح والبخل', en: 'Purifying soul from stinginess and miserliness' },
        science: { ar: 'توزيع الثروة يقلل الفقر والجريمة', en: 'Wealth distribution reduces poverty and crime' }
    },
    {
        id: 19,
        topic: { ar: 'الحج', en: 'Pilgrimage' },
        icon: '🕋',
        taabbudi: { ar: 'ركن خامس. {وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ}', en: 'Fifth pillar. {Pilgrimage to the House is a duty to Allah}' },
        psychology: { ar: 'تجربة روحية فريدة تعيد ضبط الأولويات', en: 'Unique spiritual experience resets priorities' },
        science: { ar: 'المشي والتعبد يحسن اللياقة', en: 'Walking and worship improves fitness' }
    },
    {
        id: 20,
        topic: { ar: 'تحريم الكذب', en: 'Prohibition of Lying' },
        icon: '🚫',
        taabbudi: { ar: 'إياكم والكذب فإن الكذب يهدي إلى الفجور.', en: 'Beware of lying for it leads to wickedness.' },
        psychology: { ar: 'الكاذب يعيش في قلق دائم', en: 'Liar lives in constant anxiety' },
        science: { ar: 'الكذب المزمن يسبب اضطرابات نفسية', en: 'Chronic lying causes psychological disorders' }
    },
    {
        id: 21,
        topic: { ar: 'إماطة الأذى', en: 'Removing Harm from Path' },
        icon: '🧹',
        taabbudi: { ar: 'إماطة الأذى عن الطريق صدقة. أبسط العبادات.', en: 'Removing harm from path is charity. Simplest worship.' },
        psychology: { ar: 'الشعور بالإنجاز من أبسط الأعمال', en: 'Sense of achievement from simplest acts' },
        science: { ar: 'البيئة النظيفة تحسن الصحة العامة', en: 'Clean environment improves public health' }
    },
    {
        id: 22,
        topic: { ar: 'الابتسامة', en: 'Smiling' },
        icon: '😊',
        taabbudi: { ar: 'تبسمك في وجه أخيك صدقة. عبادة بلا تكلفة.', en: 'Your smile to your brother is charity. Worship without cost.' },
        psychology: { ar: 'الابتسامة معدية وتنشر الإيجابية', en: 'Smile is contagious and spreads positivity' },
        science: { ar: 'الابتسامة تفرز الإندورفين', en: 'Smiling releases endorphins' }
    },
    {
        id: 23,
        topic: { ar: 'الصبر', en: 'Patience' },
        icon: '⏳',
        taabbudi: { ar: '{إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ}', en: '{The patient will be given reward without measure}' },
        psychology: { ar: 'الصبر يبني المرونة النفسية', en: 'Patience builds psychological resilience' },
        science: { ar: 'التحكم في الانفعالات يطيل العمر', en: 'Emotional control extends lifespan' }
    },
    {
        id: 24,
        topic: { ar: 'الشكر', en: 'Gratitude' },
        icon: '🙏',
        taabbudi: { ar: '{لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ}', en: '{If you are grateful, I will surely increase you}' },
        psychology: { ar: 'الشكر يحسن المزاج والرضا', en: 'Gratitude improves mood and satisfaction' },
        science: { ar: 'الممتنون ينامون أفضل ويمرضون أقل', en: 'Grateful people sleep better and get sick less' }
    },
    {
        id: 25,
        topic: { ar: 'التوكل', en: 'Reliance on Allah' },
        icon: '🤲',
        taabbudi: { ar: '{وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ}', en: '{Whoever relies on Allah, He is sufficient for him}' },
        psychology: { ar: 'التوكل يزيل القلق من المستقبل', en: 'Reliance removes anxiety about future' },
        science: { ar: 'الإيمان يقلل التوتر المزمن', en: 'Faith reduces chronic stress' }
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// MYTHS & SUPERSTITIONS - خرافات ليست من الدين (25+)
// ═══════════════════════════════════════════════════════════════════════════

export const mythsAndSuperstitions = [
    {
        id: 1,
        myth: { ar: 'قلب الحذاء حرام لأن وجهه للسماء', en: 'Flipping shoes is haram as they face the sky' },
        icon: '👟',
        category: 'bidah',
        verdict: { ar: 'خرافة، لا أصل لها في الشرع', en: 'Myth, no basis in religion' },
        correction: { ar: 'الأدب في ترتيب الحذاء مستحب، لكن لا علاقة له بالسماء', en: 'Organizing shoes is recommended, but has nothing to do with the sky' }
    },
    {
        id: 2,
        myth: { ar: 'كنس البيت ليلاً يجلب الفقر', en: 'Sweeping at night brings poverty' },
        icon: '🧹',
        category: 'superstition',
        verdict: { ar: 'خرافة جاهلية', en: 'Pre-Islamic superstition' },
        correction: { ar: 'الرزق بيد الله وحده، والنظافة مطلوبة في أي وقت', en: 'Provision is in Allah\'s hands alone, cleanliness is required anytime' }
    },
    {
        id: 3,
        myth: { ar: 'رفة العين تنبئ بخير أو شر قادم', en: 'Eye twitching predicts good or bad news' },
        icon: '👁️',
        category: 'shirk_minor',
        verdict: { ar: 'تطير وتشاؤم منهي عنه', en: 'Superstitious omen, forbidden' },
        correction: { ar: 'لا يعلم الغيب إلا الله، رفة العين مجرد تقلص عضلي', en: 'Only Allah knows the unseen, twitching is just muscle contraction' }
    },
    {
        id: 4,
        myth: { ar: 'حكة اليد تعني المال قادم أو ذاهب', en: 'Itchy palm means money coming or going' },
        icon: '✋',
        category: 'superstition',
        verdict: { ar: 'خرافة لا أصل لها', en: 'Myth with no basis' },
        correction: { ar: 'الحكة طبية، والرزق يأتي بالعمل والتوكل', en: 'Itching is medical, provision comes from work and trust in Allah' }
    },
    {
        id: 5,
        myth: { ar: 'الخرزة الزرقاء تحمي من الحسد', en: 'Blue bead protects from evil eye' },
        icon: '🧿',
        category: 'shirk_minor',
        verdict: { ar: 'شرك أصغر', en: 'Minor shirk (polytheism)' },
        correction: { ar: 'الحافظ هو الله، والتحصين بالأذكار والمعوذات', en: 'Allah is the Protector, protection is through authentic supplications' }
    },
    {
        id: 6,
        myth: { ar: 'الكف الخمسة (كف فاطمة) للحماية', en: 'Hamsa hand for protection' },
        icon: '🖐️',
        category: 'shirk_minor',
        verdict: { ar: 'شرك أصغر - تميمة محرمة', en: 'Minor shirk - forbidden amulet' },
        correction: { ar: 'من تعلق تميمة فقد أشرك - الحديث', en: 'Whoever hangs an amulet has committed shirk - Hadith' }
    },
    {
        id: 7,
        myth: { ar: 'التصفير يجمع الشياطين', en: 'Whistling attracts devils' },
        icon: '🎵',
        category: 'unproven',
        verdict: { ar: 'لا دليل صحيح عليه', en: 'No authentic evidence' },
        correction: { ar: 'التصفير مكروه في المسجد، أما خارجه فلا دليل على تحريمه', en: 'Whistling is disliked in mosque, outside it has no prohibition evidence' }
    },
    {
        id: 8,
        myth: { ar: 'النقر على الخشب يمنع الحسد', en: 'Knocking on wood prevents evil eye' },
        icon: '🪵',
        category: 'pagan',
        verdict: { ar: 'عادة وثنية غربية Touch Wood', en: 'Western pagan practice' },
        correction: { ar: 'التحصين بقول ما شاء الله، تبارك الله', en: 'Protection is by saying MashaAllah, TabarakAllah' }
    },
    {
        id: 9,
        myth: { ar: 'رش الملح في الزوايا يطرد الجن', en: 'Sprinkling salt repels jinn' },
        icon: '🧂',
        category: 'bidah',
        verdict: { ar: 'دجل وخرافة', en: 'Charlatanism and myth' },
        correction: { ar: 'الجن يُطردون بالقرآن والأذكار فقط', en: 'Jinn are repelled only by Quran and authentic supplications' }
    },
    {
        id: 10,
        myth: { ar: 'حرق البخور يطرد الشياطين', en: 'Burning incense repels devils' },
        icon: '🪔',
        category: 'bidah',
        verdict: { ar: 'البخور للطيب فقط', en: 'Incense is only for fragrance' },
        correction: { ar: 'سورة البقرة تطرد الشياطين، لا البخور', en: 'Surah Al-Baqarah repels devils, not incense' }
    },
    {
        id: 11,
        myth: { ar: 'الذبح على عتبة البيت الجديد للبركة', en: 'Slaughter at new home threshold for blessing' },
        icon: '🏠',
        category: 'shirk_major',
        verdict: { ar: 'شرك إن ذُبح لغير الله إرضاءً للجن', en: 'Shirk if slaughtered for other than Allah to please jinn' },
        correction: { ar: 'الذبح لله وحده، العقيقة والأضحية مشروعة', en: 'Slaughter only for Allah, Aqiqah and Udhiyah are legislated' }
    },
    {
        id: 12,
        myth: { ar: 'زيارة الأولياء للشفاء', en: 'Visiting saints\' shrines for healing' },
        icon: '⚰️',
        category: 'shirk_major',
        verdict: { ar: 'شرك - الشافي الله وحده', en: 'Shirk - Allah alone is the Healer' },
        correction: { ar: 'الدعاء مباشر لله، لا وسيط بين العبد وربه', en: 'Supplication is directly to Allah, no intermediary between servant and Lord' }
    },
    {
        id: 13,
        myth: { ar: 'ترك المصحف مفتوحاً للبركة', en: 'Leaving Quran open for blessing' },
        icon: '📖',
        category: 'bidah',
        verdict: { ar: 'هجر للقرآن', en: 'Abandonment of Quran' },
        correction: { ar: 'البركة في قراءة القرآن وتدبره، لا في تركه مفتوحاً', en: 'Blessing is in reading and reflecting on Quran, not leaving it open' }
    },
    {
        id: 14,
        myth: { ar: 'قراءة الفاتحة عند الخطوبة سنة', en: 'Reading Fatiha at engagement is Sunnah' },
        icon: '💍',
        category: 'bidah',
        verdict: { ar: 'عادة اجتماعية وليست سنة', en: 'Social custom, not Sunnah' },
        correction: { ar: 'السنة خطبة الحاجة، لا قراءة الفاتحة للاتفاق', en: 'Sunnah is Khutbat Al-Hajah, not reading Fatiha for agreement' }
    },
    {
        id: 15,
        myth: { ar: 'اللطم وشق الجيوب عند المصيبة مشروع', en: 'Slapping cheeks at calamity is permitted' },
        icon: '😭',
        category: 'haram',
        verdict: { ar: 'كبيرة من الكبائر', en: 'Major sin' },
        correction: { ar: 'ليس منا من لطم الخدود وشق الجيوب - الحديث', en: 'Not from us who slaps cheeks and tears clothes - Hadith' }
    },
    {
        id: 16,
        myth: { ar: 'سكب الماء الساخن يحرق الجن', en: 'Pouring hot water burns jinn' },
        icon: '🔥',
        category: 'exaggeration',
        verdict: { ar: 'مبالغة، التسمية كافية', en: 'Exaggeration, saying Bismillah is sufficient' },
        correction: { ar: 'قل بسم الله عند سكب الماء الساخن احتياطاً', en: 'Say Bismillah when pouring hot water as precaution' }
    },
    {
        id: 17,
        myth: { ar: 'تعليق آية الكرسي في السيارة للحماية', en: 'Hanging Ayat Al-Kursi in car for protection' },
        icon: '🚗',
        category: 'bidah',
        verdict: { ar: 'القرآن للقراءة لا للتعليق', en: 'Quran is for reading not hanging' },
        correction: { ar: 'اقرأ آية الكرسي يومياً، لا تعلقها كتميمة', en: 'Read Ayat Al-Kursi daily, don\'t hang it as amulet' }
    },
    {
        id: 18,
        myth: { ar: 'الدخول بالرجل اليمين للحمام', en: 'Entering bathroom with right foot' },
        icon: '🚽',
        category: 'wrong_info',
        verdict: { ar: 'خطأ شائع', en: 'Common mistake' },
        correction: { ar: 'السنة الدخول باليسرى والخروج باليمنى', en: 'Sunnah is entering with left, exiting with right' }
    },
    {
        id: 19,
        myth: { ar: 'الرقم 13 نحس', en: 'Number 13 is unlucky' },
        icon: '🔢',
        category: 'superstition',
        verdict: { ar: 'تطير جاهلي', en: 'Pre-Islamic superstition' },
        correction: { ar: 'لا طيرة في الإسلام، كل الأرقام مخلوقة لله', en: 'No bad omens in Islam, all numbers are created by Allah' }
    },
    {
        id: 20,
        myth: { ar: 'القطة السوداء نحس', en: 'Black cat is bad luck' },
        icon: '🐈‍⬛',
        category: 'superstition',
        verdict: { ar: 'خرافة غربية', en: 'Western superstition' },
        correction: { ar: 'النبي ﷺ أحب القطط ولم يميز بلونها', en: 'Prophet ﷺ loved cats and didn\'t distinguish by color' }
    },
    {
        id: 21,
        myth: { ar: 'فتح المظلة داخل البيت يجلب النحس', en: 'Opening umbrella inside brings bad luck' },
        icon: '☂️',
        category: 'superstition',
        verdict: { ar: 'خرافة غربية لا أصل لها', en: 'Western myth with no basis' },
        correction: { ar: 'النحس والحظ مفاهيم شركية، القدر بيد الله', en: 'Luck concepts are polytheistic, destiny is in Allah\'s hands' }
    },
    {
        id: 22,
        myth: { ar: 'كسر المرآة 7 سنوات نحس', en: 'Breaking mirror is 7 years bad luck' },
        icon: '🪞',
        category: 'superstition',
        verdict: { ar: 'خرافة رومانية قديمة', en: 'Ancient Roman superstition' },
        correction: { ar: 'لا علاقة للأشياء المادية بالقدر', en: 'Material objects have no connection to destiny' }
    },
    {
        id: 23,
        myth: { ar: 'الحلم بالسقوط يعني الموت لو لم تستيقظ', en: 'Falling dream means death if you don\'t wake' },
        icon: '💤',
        category: 'myth',
        verdict: { ar: 'خرافة علمياً وشرعاً', en: 'Myth scientifically and religiously' },
        correction: { ar: 'الأحلام أضغاث أو رؤى، لا تحدد الموت', en: 'Dreams are random or visions, don\'t determine death' }
    },
    {
        id: 24,
        myth: { ar: 'الطاقة والشاكرات حقيقة إسلامية', en: 'Energy and chakras are Islamic truth' },
        icon: '🔮',
        category: 'shirk_hidden',
        verdict: { ar: 'فلسفات وثنية هندوسية/بوذية', en: 'Hindu/Buddhist pagan philosophies' },
        correction: { ar: 'لا وجود للشاكرات في الإسلام، التزكية بالعبادة', en: 'Chakras don\'t exist in Islam, purification is through worship' }
    },
    {
        id: 25,
        myth: { ar: 'قانون الجذب يحقق الأحلام', en: 'Law of attraction manifests dreams' },
        icon: '🌟',
        category: 'shirk_hidden',
        verdict: { ar: 'شرك خفي - ادعاء التأثير في الكون', en: 'Hidden shirk - claiming influence over universe' },
        correction: { ar: 'النتائج بمشيئة الله، الدعاء هو الجذب الحقيقي', en: 'Results are by Allah\'s will, dua is real attraction' }
    },
    {
        id: 26,
        myth: { ar: 'الأبراج تحدد الشخصية والمستقبل', en: 'Horoscopes determine personality and future' },
        icon: '♈',
        category: 'shirk_major',
        verdict: { ar: 'شرك - ادعاء علم الغيب', en: 'Shirk - claiming knowledge of unseen' },
        correction: { ar: 'لا يعلم الغيب إلا الله. من أتى عرافاً لم تقبل له صلاة 40 يوماً', en: 'Only Allah knows unseen. Visiting fortune-teller nullifies 40 days prayer' }
    },
    {
        id: 27,
        myth: { ar: 'فنجان القهوة يكشف المستقبل', en: 'Coffee cup reading reveals future' },
        icon: '☕',
        category: 'shirk_major',
        verdict: { ar: 'كهانة محرمة', en: 'Forbidden soothsaying' },
        correction: { ar: 'من صدق كاهناً فقد كفر بما أُنزل على محمد', en: 'Who believes fortune-teller disbelieves in what was revealed' }
    },
    {
        id: 28,
        myth: { ar: 'اليوجا طريقة للاسترخاء فقط', en: 'Yoga is just relaxation' },
        icon: '🧘',
        category: 'shirk_hidden',
        verdict: { ar: 'عبادة هندوسية مقنعة', en: 'Disguised Hindu worship' },
        correction: { ar: 'تأمل إسلامي بديل: التفكر في خلق الله، الذكر', en: 'Islamic meditation alternative: reflecting on creation, dhikr' }
    },
    {
        id: 29,
        myth: { ar: 'الوشم حرام بسبب الصحة فقط', en: 'Tattoo haram only for health reasons' },
        icon: '💉',
        category: 'wrong_info',
        verdict: { ar: 'لعن الله الواشمة والمستوشمة', en: 'Allah cursed who tattoos and gets tattooed' },
        correction: { ar: 'التحريم تعبدي أولاً، والأضرار الصحية ثانوية', en: 'Prohibition is worship-based first, health secondary' }
    },
    {
        id: 30,
        myth: { ar: 'التميمة من القرآن جائزة', en: 'Quran amulets are permissible' },
        icon: '📿',
        category: 'bidah',
        verdict: { ar: 'خلاف فقهي، الأحوط تركها', en: 'Scholarly dispute, safer to avoid' },
        correction: { ar: 'القرآن للتلاوة والتدبر، ليس للتعليق', en: 'Quran for recitation and reflection, not hanging' }
    },
    {
        id: 31,
        myth: { ar: 'النذر يجلب الحظ', en: 'Vows bring luck' },
        icon: '🙏',
        category: 'bidah',
        verdict: { ar: 'النذر لا يأتي بخير', en: 'Vows don\'t bring good' },
        correction: { ar: 'إنما يُستخرج به من البخيل - الحديث', en: 'It only extracts from the miser - Hadith' }
    },
    {
        id: 32,
        myth: { ar: 'قراءة القرآن للأموات بأجر تجوز', en: 'Paid Quran reading for dead is permissible' },
        icon: '💸',
        category: 'bidah',
        verdict: { ar: 'بدعة - القرآن لا يُقرأ بأجر', en: 'Innovation - Quran not read for payment' },
        correction: { ar: 'الأجر على التعليم لا القراءة للميت', en: 'Payment for teaching, not reading for deceased' }
    },
    {
        id: 33,
        myth: { ar: 'الاحتفال بالمولد النبوي فرض', en: 'Prophet\'s birthday celebration is obligatory' },
        icon: '🎂',
        category: 'bidah',
        verdict: { ar: 'بدعة محدثة - لم يفعلها السلف', en: 'Innovation - not done by early Muslims' },
        correction: { ar: 'محبة النبي بالاتباع لا الابتداع', en: 'Love Prophet by following, not innovating' }
    },
    {
        id: 34,
        myth: { ar: 'ليلة النصف من شعبان لها صلاة خاصة', en: 'Mid-Shaban night has special prayer' },
        icon: '🌙',
        category: 'bidah',
        verdict: { ar: 'لا يثبت فيها حديث صحيح', en: 'No authentic hadith confirms it' },
        correction: { ar: 'صيام أيام البيض سنة عامة', en: 'Fasting white days is general sunnah' }
    },
    {
        id: 35,
        myth: { ar: 'الجمعة يوم نحس للسفر', en: 'Friday is unlucky for travel' },
        icon: '✈️',
        category: 'superstition',
        verdict: { ar: 'لا أصل له', en: 'No basis' },
        correction: { ar: 'الجمعة سيد الأيام، السفر فيها جائز', en: 'Friday is master of days, travel is permissible' }
    },
    {
        id: 36,
        myth: { ar: 'المرأة الحائض لا تقرأ القرآن', en: 'Menstruating woman cannot read Quran' },
        icon: '📖',
        category: 'wrong_info',
        verdict: { ar: 'خلاف فقهي، الراجح الجواز', en: 'Scholarly dispute, correct opinion is permissible' },
        correction: { ar: 'يجوز القراءة من الذاكرة أو بحائل', en: 'Reading from memory or with barrier allowed' }
    },
    {
        id: 37,
        myth: { ar: 'السحر يُفك بسحر مثله', en: 'Magic is undone by similar magic' },
        icon: '🔮',
        category: 'shirk_major',
        verdict: { ar: 'كفر - الذهاب للساحر شرك', en: 'Disbelief - visiting magician is shirk' },
        correction: { ar: 'العلاج بالرقية الشرعية فقط', en: 'Treatment only through Islamic ruqyah' }
    },
    {
        id: 38,
        myth: { ar: 'الحجامة في أيام معينة فقط', en: 'Cupping only on specific days' },
        icon: '🩸',
        category: 'exaggeration',
        verdict: { ar: 'الأحاديث في أيام محددة ضعيفة', en: 'Hadiths about specific days are weak' },
        correction: { ar: 'الحجامة جائزة أي وقت عند الحاجة', en: 'Cupping permissible anytime when needed' }
    },
    {
        id: 39,
        myth: { ar: 'الختان واجب على البنات', en: 'Female circumcision is obligatory' },
        icon: '⚠️',
        category: 'wrong_info',
        verdict: { ar: 'ليس واجباً، والمضر منه حرام', en: 'Not obligatory, harmful types are forbidden' },
        correction: { ar: 'إجماع العلماء على تحريم الختان الفرعوني', en: 'Scholars agree harmful circumcision is forbidden' }
    },
    {
        id: 40,
        myth: { ar: 'العين تصيب بمجرد النظر', en: 'Evil eye strikes just by looking' },
        icon: '👁️',
        category: 'exaggeration',
        verdict: { ar: 'العين حق ولكن بقدر الله', en: 'Evil eye is real but by Allah\'s decree' },
        correction: { ar: 'لا تصيب إلا بإذن الله، والتحصين يحمي', en: 'Only strikes by Allah\'s permission, protection helps' }
    },
    {
        id: 41,
        myth: { ar: 'الموسيقى حلال لأنها فن', en: 'Music is halal because it\'s art' },
        icon: '🎵',
        category: 'wrong_info',
        verdict: { ar: 'المعازف محرمة بالحديث الصحيح', en: 'Musical instruments forbidden by authentic hadith' },
        correction: { ar: 'ليكونن من أمتي أقوام يستحلون الحر والحرير والخمر والمعازف', en: 'There will be people who permit adultery, silk, alcohol, and instruments' }
    },
    {
        id: 42,
        myth: { ar: 'التصوير حرام مطلقاً', en: 'All photography is absolutely haram' },
        icon: '📷',
        category: 'exaggeration',
        verdict: { ar: 'التصوير الفوتوغرافي مختلف فيه', en: 'Photography is disputed' },
        correction: { ar: 'المحرم التماثيل والرسم المجسم، والصور للحاجة جائزة عند كثير', en: 'Forbidden are statues and 3D art, photos for need allowed by many' }
    },
    {
        id: 43,
        myth: { ar: 'الديمقراطية حكم إسلامي', en: 'Democracy is Islamic governance' },
        icon: '🗳️',
        category: 'wrong_info',
        verdict: { ar: 'الحكم لله وحده لا للأكثرية', en: 'Ruling is for Allah alone, not majority' },
        correction: { ar: 'الشورى إسلامية، لكنها لا تحل حراماً ولا تحرم حلالاً', en: 'Shura is Islamic but cannot make haram halal or vice versa' }
    },
    {
        id: 44,
        myth: { ar: 'كل ما في الطبيعة حلال أكله', en: 'Everything in nature is halal to eat' },
        icon: '🌿',
        category: 'wrong_info',
        verdict: { ar: 'هناك محرمات محددة بالنص', en: 'There are specific prohibitions by text' },
        correction: { ar: 'الميتة والدم ولحم الخنزير والمخدرات محرمة', en: 'Carrion, blood, pork, and intoxicants are forbidden' }
    },
    {
        id: 45,
        myth: { ar: 'الجهاد يعني الحرب فقط', en: 'Jihad only means war' },
        icon: '⚔️',
        category: 'wrong_info',
        verdict: { ar: 'الجهاد أنواع', en: 'Jihad has types' },
        correction: { ar: 'أعظم الجهاد جهاد النفس، ثم جهاد اللسان، ثم جهاد السنان', en: 'Greatest jihad is against self, then tongue, then sword' }
    },
    {
        id: 46,
        myth: { ar: 'الإسلام انتشر بالسيف', en: 'Islam spread by sword' },
        icon: '🗡️',
        category: 'myth',
        verdict: { ar: 'أكبر كذبة تاريخية', en: 'Biggest historical lie' },
        correction: { ar: 'لا إكراه في الدين. إندونيسيا أكبر بلد مسلم لم يصلها جيش', en: 'No compulsion in religion. Indonesia largest Muslim country, no army reached it' }
    },
    {
        id: 47,
        myth: { ar: 'المرأة ناقصة عقل ودين إهانة لها', en: 'Woman is deficient in mind and religion - insult' },
        icon: '👩',
        category: 'wrong_info',
        verdict: { ar: 'سوء فهم للحديث', en: 'Misunderstanding of hadith' },
        correction: { ar: 'النقص تشريعي (شهادة، صلاة) لا قدرة عقلية. عائشة أفقه الصحابة', en: 'Deficiency is legal (testimony, prayer) not mental capacity. Aisha most learned companion' }
    },
    {
        id: 48,
        myth: { ar: 'الصوفية كلها شرك', en: 'All Sufism is shirk' },
        icon: '🕌',
        category: 'exaggeration',
        verdict: { ar: 'التصوف فيه صحيح وفيه منحرف', en: 'Sufism has correct and deviant aspects' },
        correction: { ar: 'تصوف الجنيد والغزالي سليم، وتصوف الحلول والاتحاد كفر', en: 'Sufism of Junayd and Ghazali is sound, pantheistic Sufism is disbelief' }
    },
    {
        id: 49,
        myth: { ar: 'العلمانية تتوافق مع الإسلام', en: 'Secularism is compatible with Islam' },
        icon: '🏛️',
        category: 'shirk_hidden',
        verdict: { ar: 'فصل الدين عن الحياة مرفوض', en: 'Separating religion from life is rejected' },
        correction: { ar: 'الإسلام دين ودولة، عقيدة وشريعة، عبادة ومعاملة', en: 'Islam is religion and state, creed and law, worship and dealings' }
    },
    {
        id: 50,
        myth: { ar: 'الحب قبل الزواج حلال ما دام عفيفاً', en: 'Love before marriage is halal if chaste' },
        icon: '💕',
        category: 'wrong_info',
        verdict: { ar: 'الخلوة والخضوع بالقول محرم', en: 'Seclusion and soft speech are forbidden' },
        correction: { ar: 'العلاقة الشرعية تبدأ بالخطبة الرسمية ثم العقد', en: 'Legal relationship starts with official proposal then contract' }
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// ISLAMIC REMINDERS - تذكيرات إيمانية (New Section with Islamic Tone)
// ═══════════════════════════════════════════════════════════════════════════

export const islamicReminders = [
    {
        id: 1,
        category: 'tawbah',
        reminder: { ar: 'باب التوبة مفتوح ما لم تطلع الشمس من مغربها', en: 'Door of repentance is open until sun rises from west' },
        source: { ar: 'حديث صحيح', en: 'Authentic hadith' },
        encouragement: { ar: 'مهما بلغت ذنوبك، الله يفرح بتوبتك أشد من فرحتك بإيجاد ضالتك', en: 'No matter your sins, Allah rejoices at your repentance more than you finding your lost camel' }
    },
    {
        id: 2,
        category: 'hope',
        reminder: { ar: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ', en: 'Say: O My servants who transgressed, do not despair of Allah\'s mercy' },
        source: { ar: 'سورة الزمر ٥٣', en: 'Surah Az-Zumar 53' },
        encouragement: { ar: 'الله ناداك بـ"عبادي" وأنت في أشد حالات الإسراف!', en: 'Allah called you "My servants" while in worst state of transgression!' }
    },
    {
        id: 3,
        category: 'strength',
        reminder: { ar: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ', en: 'Do not weaken or grieve, you are superior if you are believers' },
        source: { ar: 'سورة آل عمران ١٣٩', en: 'Surah Al-Imran 139' },
        encouragement: { ar: 'العزة للمؤمن، والحق يعلو ولا يُعلى عليه', en: 'Honor is for the believer, truth rises and is never overcome' }
    },
    {
        id: 4,
        category: 'patience',
        reminder: { ar: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا، إِنَّ مَعَ الْعُسْرِ يُسْرًا', en: 'Indeed, with hardship comes ease, indeed with hardship comes ease' },
        source: { ar: 'سورة الشرح ٥-٦', en: 'Surah Ash-Sharh 5-6' },
        encouragement: { ar: 'ذكر اليسر مرتين! لن يغلب عسر يسرين', en: 'Ease mentioned twice! One hardship won\'t overcome two eases' }
    },
    {
        id: 5,
        category: 'trust',
        reminder: { ar: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ', en: 'Whoever fears Allah, He makes a way out and provides from unexpected sources' },
        source: { ar: 'سورة الطلاق ٢-٣', en: 'Surah At-Talaq 2-3' },
        encouragement: { ar: 'التقوى = مخرج + رزق من حيث لا تحتسب', en: 'Taqwa = way out + provision from unexpected sources' }
    },
    {
        id: 6,
        category: 'purpose',
        reminder: { ar: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ', en: 'I created jinn and humans only to worship Me' },
        source: { ar: 'سورة الذاريات ٥٦', en: 'Surah Adh-Dhariyat 56' },
        encouragement: { ar: 'أنت لست صدفة. خُلقت لهدف أعظم من الدنيا', en: 'You are not an accident. Created for purpose greater than world' }
    },
    {
        id: 7,
        category: 'love',
        reminder: { ar: 'إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ', en: 'Indeed, Allah loves those who repent and purify themselves' },
        source: { ar: 'سورة البقرة ٢٢٢', en: 'Surah Al-Baqarah 222' },
        encouragement: { ar: 'الله يحبك! فقط تُب واتطهر', en: 'Allah loves you! Just repent and purify' }
    },
    {
        id: 8,
        category: 'closeness',
        reminder: { ar: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ', en: 'When My servants ask about Me, indeed I am near' },
        source: { ar: 'سورة البقرة ١٨٦', en: 'Surah Al-Baqarah 186' },
        encouragement: { ar: 'لم يقل "قل إني قريب" بل قال مباشرة "إني قريب" - لشدة القرب!', en: 'He didn\'t say "tell them I am near" but directly "I am near" - extreme closeness!' }
    },
    {
        id: 9,
        category: 'dua',
        reminder: { ar: 'ادْعُونِي أَسْتَجِبْ لَكُمْ', en: 'Call upon Me, I will respond to you' },
        source: { ar: 'سورة غافر ٦٠', en: 'Surah Ghafir 60' },
        encouragement: { ar: 'وعد إلهي بالإجابة. ادعُ ولا تستعجل', en: 'Divine promise of response. Call and don\'t rush' }
    },
    {
        id: 10,
        category: 'death',
        reminder: { ar: 'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ', en: 'Every soul will taste death' },
        source: { ar: 'سورة آل عمران ١٨٥', en: 'Surah Al-Imran 185' },
        encouragement: { ar: 'الموت ليس نهاية بل بداية. ماذا أعددت لما بعده؟', en: 'Death is not end but beginning. What have you prepared?' }
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// DON'T DO LIST - قائمة لا تفعل (20 Essential)
// ═══════════════════════════════════════════════════════════════════════════

export const dontDoList = [
    { id: 1, ar: 'لا تتحدث في الدين بغير علم', en: 'Don\'t speak about religion without knowledge', reason: { ar: 'أجرؤكم على الفتوى أجرؤكم على النار', en: 'Boldest in fatwa, boldest into hellfire' } },
    { id: 2, ar: 'لا تنشر حديثاً قبل التأكد من صحته', en: 'Don\'t share hadith without verifying', reason: { ar: 'كفى بالمرء كذباً أن يحدث بكل ما سمع', en: 'It\'s enough lying to narrate everything you hear' } },
    { id: 3, ar: 'لا تسخر من شعيرة دينية', en: 'Don\'t mock any religious practice', reason: { ar: 'قد تخرجك من الملة', en: 'May take you out of Islam' } },
    { id: 4, ar: 'لا تقطع صلة الرحم ولو قطعوك', en: 'Don\'t cut family ties even if they cut you', reason: { ar: 'الواصل ليس بالمكافئ', en: 'True connector isn\'t one who reciprocates' } },
    { id: 5, ar: 'لا تحلف بغير الله', en: 'Don\'t swear by other than Allah', reason: { ar: 'من حلف بغير الله فقد أشرك', en: 'Whoever swears by other than Allah has committed shirk' } },
    { id: 6, ar: 'لا تتتبع عورات الناس', en: 'Don\'t spy on people\'s faults', reason: { ar: 'من تتبع عورة أخيه تتبع الله عورته', en: 'Whoever exposes brother\'s faults, Allah exposes his' } },
    { id: 7, ar: 'لا تكفر مسلماً بذنب', en: 'Don\'t declare Muslim disbeliever for sin', reason: { ar: 'التكفير حكم قضائي وليس للأفراد', en: 'Takfir is judicial ruling, not for individuals' } },
    { id: 8, ar: 'لا تيأس من روح الله', en: 'Don\'t despair of Allah\'s mercy', reason: { ar: 'إنه لا ييأس من روح الله إلا القوم الكافرون', en: 'Only disbelievers despair of Allah\'s mercy' } },
    { id: 9, ar: 'لا تجعل الدعاء تجربة', en: 'Don\'t make dua an experiment', reason: { ar: 'ادعوا الله وأنتم موقنون بالإجابة', en: 'Call upon Allah with certainty of response' } },
    { id: 10, ar: 'لا تقدم العقل على النقل الصحيح', en: 'Don\'t prioritize logic over authentic texts', reason: { ar: 'العقل يدرك النص ولا يحاكمه', en: 'Mind understands text, doesn\'t judge it' } },
    { id: 11, ar: 'لا تجادل في القرآن بالرأي', en: 'Don\'t debate Quran with opinion', reason: { ar: 'من قال في القرآن برأيه فليتبوأ مقعده من النار', en: 'Whoever speaks of Quran with opinion, let him prepare for hellfire' } },
    { id: 12, ar: 'لا تؤخر الصلاة عن وقتها', en: 'Don\'t delay prayer from its time', reason: { ar: 'إن الصلاة كانت على المؤمنين كتاباً موقوتاً', en: 'Prayer was prescribed at fixed times' } },
    { id: 13, ar: 'لا تغتب أحداً', en: 'Don\'t backbite anyone', reason: { ar: 'أيحب أحدكم أن يأكل لحم أخيه ميتاً', en: 'Would you like to eat your dead brother\'s flesh?' } },
    { id: 14, ar: 'لا تكذب ولو مازحاً', en: 'Don\'t lie even jokingly', reason: { ar: 'ويل للذي يحدث فيكذب ليضحك به القوم', en: 'Woe to who lies to make people laugh' } },
    { id: 15, ar: 'لا تسرف في الأكل والشرب', en: 'Don\'t be excessive in food and drink', reason: { ar: 'كلوا واشربوا ولا تسرفوا', en: 'Eat and drink but don\'t be excessive' } },
    { id: 16, ar: 'لا تظلم أحداً', en: 'Don\'t oppress anyone', reason: { ar: 'دعوة المظلوم ليس بينها وبين الله حجاب', en: 'Prayer of oppressed has no barrier to Allah' } },
    { id: 17, ar: 'لا تحسد', en: 'Don\'t envy', reason: { ar: 'الحسد يأكل الحسنات كما تأكل النار الحطب', en: 'Envy consumes good deeds like fire consumes wood' } },
    { id: 18, ar: 'لا تتبع الهوى', en: 'Don\'t follow desires', reason: { ar: 'ولا تتبع الهوى فيضلك عن سبيل الله', en: 'Don\'t follow desire, it will mislead you from Allah\'s path' } },
    { id: 19, ar: 'لا تأكل مالاً حراماً', en: 'Don\'t consume haram wealth', reason: { ar: 'كل جسد نبت من سحت فالنار أولى به', en: 'Every body nourished from haram, hellfire is more worthy' } },
    { id: 20, ar: 'لا تتعالى على الخلق', en: 'Don\'t be arrogant to creation', reason: { ar: 'من كان في قلبه مثقال ذرة من كبر لا يدخل الجنة', en: 'Whoever has atom\'s weight of arrogance won\'t enter paradise' } },
    { id: 21, ar: 'لا تؤخر التوبة', en: 'Don\'t delay repentance', reason: { ar: 'إن الله يقبل توبة العبد ما لم يغرغر', en: 'Allah accepts repentance until death rattle' } },
    { id: 22, ar: 'لا تحتقر المعروف', en: 'Don\'t belittle any good deed', reason: { ar: 'لا تحقرن من المعروف شيئاً', en: 'Don\'t belittle any kindness' } },
    { id: 23, ar: 'لا تشك في رحمة الله', en: 'Don\'t doubt Allah\'s mercy', reason: { ar: 'لا يقنط من رحمة الله إلا القوم الكافرون', en: 'Only disbelievers despair of Allah\'s mercy' } },
    { id: 24, ar: 'لا تخف من غير الله', en: 'Don\'t fear other than Allah', reason: { ar: 'إنما ذلكم الشيطان يخوف أولياءه فلا تخافوهم', en: 'That is Satan frightening his allies, don\'t fear them' } },
    { id: 25, ar: 'لا تترك الأمر بالمعروف', en: 'Don\'t abandon enjoining good', reason: { ar: 'كنتم خير أمة أخرجت للناس تأمرون بالمعروف', en: 'You are best nation enjoining good' } },
    { id: 26, ar: 'لا تستصغر الذنوب', en: 'Don\'t belittle sins', reason: { ar: 'إياكم ومحقرات الذنوب', en: 'Beware of minor sins that accumulate' } },
    { id: 27, ar: 'لا تتشبه بالكفار', en: 'Don\'t imitate disbelievers', reason: { ar: 'من تشبه بقوم فهو منهم', en: 'Who imitates a people is one of them' } },
    { id: 28, ar: 'لا تهجر المسلم فوق ثلاث', en: 'Don\'t boycott Muslim over 3 days', reason: { ar: 'لا يحل لمسلم أن يهجر أخاه فوق ثلاث ليال', en: 'Not allowed to boycott brother over 3 nights' } },
    { id: 29, ar: 'لا تدعُ على نفسك أو أهلك', en: 'Don\'t curse yourself or family', reason: { ar: 'لا تدعوا على أنفسكم ولا على أموالكم', en: 'Don\'t curse yourselves or your wealth' } },
    { id: 30, ar: 'لا تسرف في المباحات', en: 'Don\'t excess in permissibles', reason: { ar: 'كلوا واشربوا ولا تسرفوا', en: 'Eat and drink but don\'t waste' } }
];

// ═══════════════════════════════════════════════════════════════════════════
// DO LIST - قائمة افعل (20 Essential)
// ═══════════════════════════════════════════════════════════════════════════

export const doList = [
    { id: 1, ar: 'تعلم العقيدة أولاً', en: 'Learn creed first', benefit: { ar: 'اعرف ربك قبل عبادته', en: 'Know your Lord before worshiping Him' } },
    { id: 2, ar: 'عظم شعائر الله', en: 'Glorify Allah\'s rituals', benefit: { ar: 'ذلك ومن يعظم شعائر الله فإنها من تقوى القلوب', en: 'That is from piety of hearts' } },
    { id: 3, ar: 'تثبت قبل النقل', en: 'Verify before sharing', benefit: { ar: 'يا أيها الذين آمنوا إن جاءكم فاسق بنبأ فتبينوا', en: 'O believers, if a sinner brings you news, verify' } },
    { id: 4, ar: 'أحسن الظن بالله', en: 'Have good opinion of Allah', benefit: { ar: 'أنا عند ظن عبدي بي', en: 'I am as My servant thinks of Me' } },
    { id: 5, ar: 'الزم غرز العلماء الربانيين', en: 'Follow righteous scholars', benefit: { ar: 'العلماء ورثة الأنبياء', en: 'Scholars are heirs of prophets' } },
    { id: 6, ar: 'اجعل لك خبيئة عمل صالح', en: 'Have secret good deeds', benefit: { ar: 'لا يعلمها إلا الله', en: 'That only Allah knows' } },
    { id: 7, ar: 'ابدأ بالسلام', en: 'Initiate greetings', benefit: { ar: 'وخيرهما الذي يبدأ بالسلام', en: 'Better is one who initiates salam' } },
    { id: 8, ar: 'تحرى الحلال في مطعمك', en: 'Ensure halal in your food', benefit: { ar: 'تُستجب دعوتك', en: 'Your dua will be answered' } },
    { id: 9, ar: 'انصح سراً', en: 'Advise privately', benefit: { ar: 'النصيحة في الملأ فضيحة', en: 'Public advice is public shaming' } },
    { id: 10, ar: 'جدد نيتك في العادات', en: 'Renew intention in habits', benefit: { ar: 'لتصبح عبادات', en: 'To make them worship' } },
    { id: 11, ar: 'اقرأ القرآن يومياً', en: 'Read Quran daily', benefit: { ar: 'الوقود اليومي للقلب', en: 'Daily fuel for the heart' } },
    { id: 12, ar: 'صل على النبي ﷺ كثيراً', en: 'Send blessings on Prophet ﷺ often', benefit: { ar: 'من صلى علي صلاة صلى الله عليه بها عشراً', en: 'Allah sends 10 blessings for each one' } },
    { id: 13, ar: 'استغفر في كل حال', en: 'Seek forgiveness constantly', benefit: { ar: 'إني لأستغفر الله في اليوم مائة مرة', en: 'I seek forgiveness 100 times daily' } },
    { id: 14, ar: 'أكثر من الصدقة', en: 'Give charity abundantly', benefit: { ar: 'الصدقة تطفئ غضب الرب', en: 'Charity extinguishes Lord\'s anger' } },
    { id: 15, ar: 'صم التطوع', en: 'Fast voluntarily', benefit: { ar: 'الصوم جنة', en: 'Fasting is a shield' } },
    { id: 16, ar: 'قم الليل ولو قليلاً', en: 'Pray night prayer even a little', benefit: { ar: 'شرف المؤمن قيام الليل', en: 'Honor of believer is night prayer' } },
    { id: 17, ar: 'أحسن للجار', en: 'Be good to neighbor', benefit: { ar: 'ما زال جبريل يوصيني بالجار', en: 'Jibreel kept advising about neighbor' } },
    { id: 18, ar: 'أفشِ السلام', en: 'Spread greetings', benefit: { ar: 'لا تدخلوا الجنة حتى تؤمنوا ولا تؤمنوا حتى تحابوا', en: 'Won\'t enter paradise until you believe and love each other' } },
    { id: 19, ar: 'اذكر الله في كل حال', en: 'Remember Allah in all states', benefit: { ar: 'ألا بذكر الله تطمئن القلوب', en: 'Hearts find rest in Allah\'s remembrance' } },
    { id: 20, ar: 'أكثر من ذكر الموت', en: 'Remember death often', benefit: { ar: 'أكثروا من ذكر هادم اللذات', en: 'Remember the destroyer of pleasures' } },
    { id: 21, ar: 'تعلم لغة القرآن', en: 'Learn Quran\'s language', benefit: { ar: 'لتفهم كلام الله بنفسك', en: 'To understand Allah\'s words yourself' } },
    { id: 22, ar: 'ادع لإخوانك بظهر الغيب', en: 'Make dua for brothers secretly', benefit: { ar: 'يقول الملك: ولك بمثل', en: 'Angel says: and for you the same' } },
    { id: 23, ar: 'أصلح ذات البين', en: 'Reconcile between people', benefit: { ar: 'ألا أخبركم بأفضل من درجة الصوم والصلاة والصدقة؟', en: 'Shall I tell you what\'s better than prayer and charity?' } },
    { id: 24, ar: 'عظِّم حرمات الله', en: 'Revere Allah\'s sanctities', benefit: { ar: 'ذلك ومن يعظم حرمات الله فهو خير له عند ربه', en: 'That and whoever reveres Allah\'s sanctities, it is better for him' } },
    { id: 25, ar: 'راقب الله في السر', en: 'Be mindful of Allah in private', benefit: { ar: 'سبعة يظلهم الله... ورجل ذكر الله خاليا', en: 'Seven Allah shades... man who remembers Allah alone' } },
    { id: 26, ar: 'أحسن اختيار زوجتك/زوجك', en: 'Choose spouse wisely', benefit: { ar: 'فاظفر بذات الدين تربت يداك', en: 'Win the religious one, may you prosper' } },
    { id: 27, ar: 'علِّم ولو آية', en: 'Teach even one verse', benefit: { ar: 'بلغوا عني ولو آية', en: 'Convey from me even one verse' } },
    { id: 28, ar: 'احفظ الله يحفظك', en: 'Guard Allah, He guards you', benefit: { ar: 'في الرخاء يعرفك في الشدة', en: 'Know Him in ease, He knows you in hardship' } },
    { id: 29, ar: 'اجعل الآخرة همك', en: 'Make afterlife your concern', benefit: { ar: 'أتته الدنيا راغمة', en: 'Worldly life comes to you willingly' } },
    { id: 30, ar: 'استعن بالله ولا تعجز', en: 'Seek Allah\'s help, don\'t be lazy', benefit: { ar: 'المؤمن القوي خير وأحب', en: 'Strong believer is better and more beloved' } }
];

// ═══════════════════════════════════════════════════════════════════════════
// WHEN TO BE SILENT - متى يكون السكوت حكماً (10 situations)
// ═══════════════════════════════════════════════════════════════════════════

export const whenToSilent = [
    { id: 1, ar: 'عندما لا تعلم الحكم الشرعي بدقة', en: 'When you don\'t know ruling precisely', action: { ar: 'قل: الله أعلم', en: 'Say: Allah knows best' } },
    { id: 2, ar: 'في وقت الفتنة واختلاط الأمور', en: 'During fitnah and confusion', action: { ar: 'الزم بيتك', en: 'Stay in your home' } },
    { id: 3, ar: 'عند الغضب الشديد', en: 'During extreme anger', action: { ar: 'حتى لا تطلق أو تكفر', en: 'Lest you divorce or disbelieve' } },
    { id: 4, ar: 'عند سماع استهزاء بآيات الله', en: 'When hearing mockery of Allah\'s verses', action: { ar: 'فلا تقعدوا معهم حتى يخوضوا في حديث غيره', en: 'Don\'t sit with them until they change topic' } },
    { id: 5, ar: 'في مجالس الغيبة التي لا تستطيع إنكارها', en: 'In backbiting gatherings you can\'t oppose', action: { ar: 'انسحب بهدوء', en: 'Withdraw quietly' } },
    { id: 6, ar: 'عندما يكون الجدال عقيماً', en: 'When debate is fruitless', action: { ar: 'ترك المراء - بيت في ربض الجنة لمن تركه', en: 'Abandon argumentation - house in paradise for who leaves it' } },
    { id: 7, ar: 'عندما يتحدث السفيه', en: 'When a fool speaks', action: { ar: 'الرد عليه يعطيه قيمة', en: 'Responding gives them value' } },
    { id: 8, ar: 'عندما لم تشهد ما يُطلب منك شهادته', en: 'When asked to testify what you didn\'t witness', action: { ar: 'لا تشهد بما لم ترَ', en: 'Don\'t testify to what you didn\'t see' } },
    { id: 9, ar: 'عندما يكون الكلام سبباً في أذية مسلم بريء', en: 'When speech would harm innocent Muslim', action: { ar: 'الصمت أسلم', en: 'Silence is safer' } },
    { id: 10, ar: 'عندما تؤدي النصيحة لمنكر أكبر', en: 'When advice would lead to greater evil', action: { ar: 'فقه الأولويات', en: 'Jurisprudence of priorities' } }
];

// ═══════════════════════════════════════════════════════════════════════════
// TRUTH VERIFICATION ALGORITHM - منهجية التحقق من المعلومة الدينية
// ═══════════════════════════════════════════════════════════════════════════

export const truthAlgorithm = {
    title: { ar: 'خوارزمية التحقق من الحق', en: 'Algorithm for Truth Verification' },
    steps: [
        {
            step: 1,
            title: { ar: 'التثبت من المصدر', en: 'Verify Source' },
            questions: [
                { ar: 'هل المعلومة آية أم حديث أم قول عالم؟', en: 'Is it verse, hadith, or scholar\'s saying?' },
                { ar: 'آية: تأكد من التفسير (السعدي/ابن كثير)', en: 'Verse: verify interpretation (Saadi/Ibn Kathir)' },
                { ar: 'حديث: ابحث في الدرر السنية عن صحته', en: 'Hadith: search Dorar Sunnia for authenticity' },
                { ar: 'صحيح/حسن = خذ به، ضعيف/موضوع = اتركه', en: 'Authentic/Good = accept, Weak/Fabricated = leave' }
            ]
        },
        {
            step: 2,
            title: { ar: 'التمييز بين المصطلحات', en: 'Distinguish Terms' },
            questions: [
                { ar: 'الحكم الشرعي: ثابت لا يتغير (الصلاة، تحريم الخمر)', en: 'Ruling: fixed (prayer, prohibition of alcohol)' },
                { ar: 'الفتوى: متغيرة بالزمان والمكان والشخص', en: 'Fatwa: changes with time, place, person' },
                { ar: 'لا تطبق فتوى قديمة على واقع جديد دون سؤال', en: 'Don\'t apply old fatwa to new reality without asking' }
            ]
        },
        {
            step: 3,
            title: { ar: 'السياق', en: 'Context' },
            questions: [
                { ar: 'سبب النزول: لماذا نزلت الآية؟', en: 'Reason for revelation: why was verse revealed?' },
                { ar: 'الناسخ والمنسوخ: هل الحكم ما زال سارياً؟', en: 'Abrogation: is ruling still active?' },
                { ar: 'لا تطبق آيات الكفار المحاربين على جيرانك المسالمين', en: 'Don\'t apply combatant verses to peaceful neighbors' }
            ]
        },
        {
            step: 4,
            title: { ar: 'سيناريو التأكد', en: 'Verification Scenario' },
            questions: [
                { ar: 'شيخ على تيك توك قال كذا = لا تأخذ دينك من فيديو قصير', en: 'TikTok sheikh said X = don\'t take religion from short video' },
                { ar: 'ابحث عن رأي المجامع الفقهية الكبرى', en: 'Search for major Fiqh councils\' opinion' },
                { ar: 'الفتوى الجماعية آمن من الفردية', en: 'Collective fatwa is safer than individual' }
            ]
        }
    ]
};

// ═══════════════════════════════════════════════════════════════════════════
// HABIT BUILDING METHODS - 20 طريقة علمية للتطبيق والتذكر
// ═══════════════════════════════════════════════════════════════════════════

export const habitBuildingMethods = [
    { id: 1, method: { ar: 'الربط الشرطي (Habit Stacking)', en: 'Habit Stacking' }, example: { ar: 'اربط الذكر بقهوة الصباح', en: 'Link dhikr with morning coffee' } },
    { id: 2, method: { ar: 'التكرار المتباعد (Spaced Repetition)', en: 'Spaced Repetition' }, example: { ar: 'راجع العقيدة كل 3 أيام، ثم أسبوع، ثم شهر', en: 'Review creed every 3 days, then week, then month' } },
    { id: 3, method: { ar: 'التعليم (Teaching)', en: 'Teaching Others' }, example: { ar: 'شرح المعلومة يثبتها 90%', en: 'Explaining info retains 90%' } },
    { id: 4, method: { ar: 'التخيل الموجه (Visualization)', en: 'Visualization' }, example: { ar: 'تخيل الموقف قبل حدوثه', en: 'Visualize situation before it happens' } },
    { id: 5, method: { ar: 'المصاحبة (Peer Pressure)', en: 'Accountability Partner' }, example: { ar: 'الصاحب ساحب - انضم لمجتمع صالح', en: 'Join righteous community' } },
    { id: 6, method: { ar: 'قاعدة الـ 5 ثواني', en: '5-Second Rule' }, example: { ar: 'عد تنازلياً 5-4-3-2-1 وتحرك', en: 'Count down 5-4-3-2-1 and move' } },
    { id: 7, method: { ar: 'تحديد القدوة', en: 'Role Model Selection' }, example: { ar: 'ماذا كان سيفعل النبي ﷺ هنا؟', en: 'What would Prophet ﷺ do here?' } },
    { id: 8, method: { ar: 'التوثيق (Journaling)', en: 'Journaling' }, example: { ar: 'اكتب إنجازاتك الإيمانية يومياً', en: 'Write daily spiritual achievements' } },
    { id: 9, method: { ar: 'عزل المثيرات (Environment Design)', en: 'Environment Design' }, example: { ar: 'ابعد الهاتف عن السرير لصلاة الفجر', en: 'Keep phone away from bed for Fajr' } },
    { id: 10, method: { ar: 'قليل دائم', en: 'Small but Consistent' }, example: { ar: 'أحب الأعمال إلى الله أدومها وإن قل', en: 'Most beloved deeds are consistent ones' } },
    { id: 11, method: { ar: 'محاسبة النفس', en: 'Self-Accountability' }, example: { ar: 'جلسة 5 دقائق قبل النوم', en: '5-minute session before sleep' } },
    { id: 12, method: { ar: 'ورد القرآن اليومي', en: 'Daily Quran Portion' }, example: { ar: 'الوقود اليومي - بدونه تنتكس', en: 'Daily fuel - without it you regress' } },
    { id: 13, method: { ar: 'الدعاء بالسداد', en: 'Dua for Guidance' }, example: { ar: 'اللهم أعني على ذكرك وشكرك', en: 'O Allah help me remember and thank You' } },
    { id: 14, method: { ar: 'صيام الدوبامين', en: 'Dopamine Fasting' }, example: { ar: 'ابتعد عن المشتتات لتستشعر حلاوة الإيمان', en: 'Avoid distractions to taste faith sweetness' } },
    { id: 15, method: { ar: 'تحويل العادة لعبادة', en: 'Converting Habit to Worship' }, example: { ar: 'النوم للتقوي على الطاعة', en: 'Sleep to strengthen for worship' } },
    { id: 16, method: { ar: 'الاستماع الفعال', en: 'Active Listening' }, example: { ar: 'مقطع ديني واحد يومياً أثناء المواصلات', en: 'One religious clip during commute' } },
    { id: 17, method: { ar: 'حفظ المتون', en: 'Memorizing Texts' }, example: { ar: 'من حفظ المتون حاز الفنون', en: 'Who memorizes texts masters sciences' } },
    { id: 18, method: { ar: 'فلترة المدخلات', en: 'Input Filtering' }, example: { ar: 'إلغاء متابعة ما يثير الشبهات أو الشهوات', en: 'Unfollow what triggers doubts or desires' } },
    { id: 19, method: { ar: 'ربط النعمة بالمنعم', en: 'Linking Blessing to Giver' }, example: { ar: 'عند كل نعمة قل الحمد لله فوراً', en: 'Say Alhamdulillah for every blessing' } },
    { id: 20, method: { ar: 'استحضار الموت', en: 'Remembering Death' }, example: { ar: 'ليس للاكتئاب بل لترتيب الأولويات', en: 'Not for depression but for prioritizing' } }
];

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY DEFINITIONS - تعريف الفئات
// ═══════════════════════════════════════════════════════════════════════════

export const categoryDefinitions = {
    shirk_major: { ar: 'شرك أكبر - يخرج من الملة', en: 'Major Shirk - exits from Islam', color: '#ef4444', severity: 5 },
    shirk_minor: { ar: 'شرك أصغر - كبيرة من الكبائر', en: 'Minor Shirk - major sin', color: '#f97316', severity: 4 },
    shirk_hidden: { ar: 'شرك خفي - يحتاج توعية', en: 'Hidden Shirk - needs awareness', color: '#eab308', severity: 3 },
    bidah: { ar: 'بدعة - ليس لها أصل في الدين', en: 'Innovation - no basis in religion', color: '#a855f7', severity: 2 },
    superstition: { ar: 'خرافة - لا تأثير لها في الواقع', en: 'Superstition - no real effect', color: '#6366f1', severity: 2 },
    pagan: { ar: 'عادة وثنية - من ديانات أخرى', en: 'Pagan practice - from other religions', color: '#ec4899', severity: 3 },
    haram: { ar: 'حرام - منهي عنه شرعاً', en: 'Forbidden - prohibited by law', color: '#dc2626', severity: 4 },
    wrong_info: { ar: 'معلومة خاطئة - تحتاج تصحيح', en: 'Wrong info - needs correction', color: '#3b82f6', severity: 1 },
    exaggeration: { ar: 'مبالغة - فيها حق ولكن بالغوا', en: 'Exaggeration - some truth but overdone', color: '#22c55e', severity: 1 },
    myth: { ar: 'أسطورة - لا وجود لها', en: 'Myth - doesn\'t exist', color: '#64748b', severity: 1 }
};

export default {
    methodology,
    islamicRulings,
    mythsAndSuperstitions,
    dontDoList,
    doList,
    whenToSilent,
    truthAlgorithm,
    habitBuildingMethods,
    categoryDefinitions
};
