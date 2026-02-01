// ═══════════════════════════════════════════════════════════════════════════
// YOUR HEART - المضغة التي صلحت
// 100 Islamic Ways to Purify the Heart - Backed by Hidden Science
// ═══════════════════════════════════════════════════════════════════════════

// Each method has:
// - Islamic teaching (ظاهر - surface)
// - Hidden science (باطن - mechanism that makes it achievable)
// - Category for filtering
// - Difficulty level

export const heartCategories = {
    dhikr: { ar: 'الذكر', en: 'Remembrance', icon: '📿', color: '#10b981' },
    salah: { ar: 'الصلاة', en: 'Prayer', icon: '🕌', color: '#3b82f6' },
    quran: { ar: 'القرآن', en: 'Quran', icon: '📖', color: '#d4af37' },
    tawbah: { ar: 'التوبة', en: 'Repentance', icon: '💧', color: '#8b5cf6' },
    akhlaq: { ar: 'الأخلاق', en: 'Character', icon: '⭐', color: '#f59e0b' },
    muhasabah: { ar: 'المحاسبة', en: 'Self-Reflection', icon: '🔍', color: '#ef4444' },
    zuhd: { ar: 'الزهد', en: 'Detachment', icon: '🌿', color: '#06b6d4' },
    khushu: { ar: 'الخشوع', en: 'Humility', icon: '🤲', color: '#ec4899' }
};

export const heartPurificationMethods = [
    // ═══════════════════════════════════════════════════════════════
    // CHUNK 1: Methods 1-35 - الذكر والصلاة والقرآن
    // ═══════════════════════════════════════════════════════════════

    {
        id: 1,
        category: 'dhikr',
        method: { ar: 'الاستغفار 100 مرة يومياً', en: 'Seek forgiveness 100 times daily' },
        islamicBasis: {
            ar: 'قال ﷺ: "إني لأستغفر الله في اليوم مائة مرة"',
            en: 'Prophet ﷺ said: "I seek Allah\'s forgiveness 100 times daily"'
        },
        hiddenScience: {
            ar: 'التكرار يُعيد برمجة العقل الباطن ويُزيل الشعور بالذنب المزمن الذي يُسبب الاكتئاب',
            en: 'Repetition reprograms the subconscious and removes chronic guilt that causes depression'
        },
        difficulty: 'easy'
    },
    {
        id: 2,
        category: 'dhikr',
        method: { ar: 'سبحان الله وبحمده 100 مرة', en: 'Say SubhanAllah wa bihamdihi 100 times' },
        islamicBasis: {
            ar: 'من قالها في يوم مائة مرة حُطت خطاياه وإن كانت مثل زبد البحر',
            en: 'Sins are forgiven even if like sea foam'
        },
        hiddenScience: {
            ar: 'التسبيح يُنظم التنفس ويُفعّل الجهاز العصبي السمبثاوي مما يُهدئ القلب فعلياً',
            en: 'Tasbih regulates breathing and activates parasympathetic nervous system, literally calming the heart'
        },
        difficulty: 'easy'
    },
    {
        id: 3,
        category: 'salah',
        method: { ar: 'صلاة الفجر في جماعة', en: 'Pray Fajr in congregation' },
        islamicBasis: {
            ar: 'من صلى الفجر في جماعة فهو في ذمة الله',
            en: 'Who prays Fajr in congregation is under Allah\'s protection'
        },
        hiddenScience: {
            ar: 'الاستيقاظ المبكر يُعيد ضبط الساعة البيولوجية ويُفرز الكورتيزول الصحي الصباحي',
            en: 'Early waking resets circadian rhythm and releases healthy morning cortisol'
        },
        difficulty: 'medium'
    },
    {
        id: 4,
        category: 'quran',
        method: { ar: 'قراءة سورة البقرة كل 3 أيام', en: 'Read Surah Al-Baqarah every 3 days' },
        islamicBasis: {
            ar: 'الشيطان ينفر من البيت الذي تُقرأ فيه سورة البقرة',
            en: 'Satan flees from house where Al-Baqarah is recited'
        },
        hiddenScience: {
            ar: 'التركيز المطول يُقوي القشرة الجبهية المسؤولة عن التحكم في الانفعالات',
            en: 'Extended focus strengthens prefrontal cortex responsible for emotional control'
        },
        difficulty: 'medium'
    },
    {
        id: 5,
        category: 'tawbah',
        method: { ar: 'التوبة الفورية عند الذنب', en: 'Immediate repentance after sin' },
        islamicBasis: {
            ar: 'إذا أذنب العبد نكتت في قلبه نكتة سوداء، فإن تاب صُقلت',
            en: 'When servant sins, black dot appears; repentance polishes it'
        },
        hiddenScience: {
            ar: 'الاعتراف الفوري يمنع تكوين نمط عصبي سلبي ويُوقف دورة الإدمان',
            en: 'Immediate acknowledgment prevents negative neural pattern and stops addiction cycle'
        },
        difficulty: 'medium'
    },
    {
        id: 6,
        category: 'dhikr',
        method: { ar: 'لا حول ولا قوة إلا بالله عند الضيق', en: 'Say La hawla wa la quwwata illa billah during distress' },
        islamicBasis: {
            ar: 'كنز من كنوز الجنة',
            en: 'A treasure from Paradise'
        },
        hiddenScience: {
            ar: 'الاعتراف بالعجز يُوقف استجابة الكر والفر ويُهدئ الأمجدالا الدماغية',
            en: 'Acknowledging powerlessness stops fight-or-flight response and calms brain\'s amygdala'
        },
        difficulty: 'easy'
    },
    {
        id: 7,
        category: 'salah',
        method: { ar: 'السجود المطول في الليل', en: 'Extended prostration at night' },
        islamicBasis: {
            ar: 'أقرب ما يكون العبد من ربه وهو ساجد',
            en: 'Closest servant is to Lord during prostration'
        },
        hiddenScience: {
            ar: 'وضع الرأس أسفل القلب يزيد تدفق الدم للدماغ ويُفرز الإندورفين',
            en: 'Head below heart increases brain blood flow and releases endorphins'
        },
        difficulty: 'hard'
    },
    {
        id: 8,
        category: 'akhlaq',
        method: { ar: 'كظم الغيظ والعفو', en: 'Suppress anger and forgive' },
        islamicBasis: {
            ar: 'والكاظمين الغيظ والعافين عن الناس',
            en: 'Those who suppress anger and pardon people'
        },
        hiddenScience: {
            ar: 'الغفران يُخفض ضغط الدم ومستوى الكورتيزول المزمن الذي يُدمر القلب',
            en: 'Forgiveness lowers blood pressure and chronic cortisol that damages the heart'
        },
        difficulty: 'hard'
    },
    {
        id: 9,
        category: 'muhasabah',
        method: { ar: 'محاسبة النفس قبل النوم', en: 'Self-accounting before sleep' },
        islamicBasis: {
            ar: 'حاسبوا أنفسكم قبل أن تُحاسبوا',
            en: 'Account yourselves before you are accounted'
        },
        hiddenScience: {
            ar: 'التأمل الليلي يُنظم الذاكرة ويُعالج المشاعر السلبية أثناء نوم REM',
            en: 'Nighttime reflection organizes memory and processes negative emotions during REM sleep'
        },
        difficulty: 'medium'
    },
    {
        id: 10,
        category: 'zuhd',
        method: { ar: 'تقليل الطعام والنوم', en: 'Reduce food and sleep' },
        islamicBasis: {
            ar: 'ما ملأ ابن آدم وعاءً شراً من بطنه',
            en: 'Son of Adam fills no vessel worse than his belly'
        },
        hiddenScience: {
            ar: 'الصيام المتقطع يُفعّل الـ Autophagy ويُنظف الخلايا التالفة بما فيها خلايا القلب',
            en: 'Intermittent fasting activates autophagy, cleaning damaged cells including heart cells'
        },
        difficulty: 'medium'
    },
    {
        id: 11,
        category: 'khushu',
        method: { ar: 'البكاء من خشية الله', en: 'Cry from fear of Allah' },
        islamicBasis: {
            ar: 'عين بكت من خشية الله لا تمسها النار',
            en: 'Eye that cries from Allah\'s fear won\'t be touched by fire'
        },
        hiddenScience: {
            ar: 'البكاء يُفرز هرمونات التوتر ويُنظف الجسم من السموم العاطفية',
            en: 'Crying releases stress hormones and cleanses body of emotional toxins'
        },
        difficulty: 'hard'
    },
    {
        id: 12,
        category: 'quran',
        method: { ar: 'تدبر آية واحدة يومياً', en: 'Reflect on one verse daily' },
        islamicBasis: {
            ar: 'أفلا يتدبرون القرآن أم على قلوب أقفالها',
            en: 'Do they not reflect on Quran or are hearts locked?'
        },
        hiddenScience: {
            ar: 'التركيز العميق على معنى واحد يُنشئ مسارات عصبية جديدة تُغير التفكير',
            en: 'Deep focus on one meaning creates new neural pathways that change thinking'
        },
        difficulty: 'easy'
    },
    {
        id: 13,
        category: 'dhikr',
        method: { ar: 'أذكار الصباح والمساء كاملة', en: 'Complete morning and evening adhkar' },
        islamicBasis: {
            ar: 'حصن المسلم من الشيطان والهم',
            en: 'Muslim\'s fortress against Satan and worry'
        },
        hiddenScience: {
            ar: 'الروتين الثابت يُقلل القرارات اليومية ويحفظ الطاقة العقلية للمهام الكبرى',
            en: 'Fixed routine reduces daily decisions and conserves mental energy for major tasks'
        },
        difficulty: 'medium'
    },
    {
        id: 14,
        category: 'salah',
        method: { ar: 'إطالة الركوع والسجود', en: 'Prolong bowing and prostration' },
        islamicBasis: {
            ar: 'أما الركوع فعظموا فيه الرب وأما السجود فاجتهدوا في الدعاء',
            en: 'Glorify Lord in bowing, strive in dua in prostration'
        },
        hiddenScience: {
            ar: 'الثبات في وضعيات معينة يُفعّل العصب الحائر ويُبطئ نبضات القلب',
            en: 'Holding positions activates vagus nerve and slows heart rate'
        },
        difficulty: 'medium'
    },
    {
        id: 15,
        category: 'tawbah',
        method: { ar: 'صلاة التوبة عند كل ذنب', en: 'Pray 2 rakaat of repentance for each sin' },
        islamicBasis: {
            ar: 'ما من عبد يذنب ذنباً فيتوضأ ويصلي ركعتين إلا غُفر له',
            en: 'No servant sins then makes wudu and prays 2 rakaat except he\'s forgiven'
        },
        hiddenScience: {
            ar: 'الفعل الجسدي بعد الخطأ يُنشئ ارتباطاً عصبياً بين الذنب والتصحيح',
            en: 'Physical action after mistake creates neural link between sin and correction'
        },
        difficulty: 'medium'
    },
    {
        id: 16,
        category: 'akhlaq',
        method: { ar: 'خدمة الوالدين يومياً', en: 'Serve parents daily' },
        islamicBasis: {
            ar: 'رضا الرب في رضا الوالدين',
            en: 'Lord\'s pleasure is in parents\' pleasure'
        },
        hiddenScience: {
            ar: 'العطاء للآخرين يُفرز الأوكسيتوسين (هرمون الحب) الذي يُصلح القلب حرفياً',
            en: 'Giving to others releases oxytocin (love hormone) that literally heals the heart'
        },
        difficulty: 'medium'
    },
    {
        id: 17,
        category: 'zuhd',
        method: { ar: 'زيارة المقابر أسبوعياً', en: 'Visit graves weekly' },
        islamicBasis: {
            ar: 'كنت نهيتكم عن زيارة القبور فزوروها فإنها تذكركم الآخرة',
            en: 'I forbade grave visits, now visit them; they remind of afterlife'
        },
        hiddenScience: {
            ar: 'التذكير بالموت يُفعّل نظام التقييم الحياتي ويُعيد ترتيب الأولويات',
            en: 'Death reminder activates life evaluation system and reprioritizes values'
        },
        difficulty: 'easy'
    },
    {
        id: 18,
        category: 'dhikr',
        method: { ar: 'الصلاة على النبي ﷺ 100 مرة', en: 'Send blessings on Prophet ﷺ 100 times' },
        islamicBasis: {
            ar: 'من صلى علي صلاة صلى الله عليه بها عشراً',
            en: 'Who sends one blessing, Allah sends 10 back'
        },
        hiddenScience: {
            ar: 'تكرار الامتنان والحب يُنشط مراكز السعادة في الدماغ ويُفرز الدوبامين',
            en: 'Repeating gratitude and love activates happiness centers and releases dopamine'
        },
        difficulty: 'easy'
    },
    {
        id: 19,
        category: 'muhasabah',
        method: { ar: 'كتابة الذنوب والتوبة منها', en: 'Write sins and repent from them' },
        islamicBasis: {
            ar: 'التوبة النصوح التي تُكتب',
            en: 'Sincere repentance that is documented'
        },
        hiddenScience: {
            ar: 'الكتابة تُنقل المشاعر من اللاوعي للوعي وتُسهّل المعالجة العاطفية',
            en: 'Writing transfers feelings from subconscious to conscious, easing emotional processing'
        },
        difficulty: 'medium'
    },
    {
        id: 20,
        category: 'khushu',
        method: { ar: 'التفكر في خلق السماوات والأرض', en: 'Contemplate creation of heavens and earth' },
        islamicBasis: {
            ar: 'إن في خلق السماوات والأرض واختلاف الليل والنهار لآيات لأولي الألباب',
            en: 'In creation of heavens and earth are signs for people of understanding'
        },
        hiddenScience: {
            ar: 'التفكر في العظمة الكونية يُزيد التواضع ويُقلل النرجسية المدمرة للعلاقات',
            en: 'Cosmic contemplation increases humility and reduces narcissism that destroys relationships'
        },
        difficulty: 'easy'
    },
    {
        id: 21,
        category: 'salah',
        method: { ar: 'قيام الليل ولو بركعة', en: 'Night prayer even one rakaat' },
        islamicBasis: {
            ar: 'شرف المؤمن قيام الليل',
            en: 'Believer\'s honor is night prayer'
        },
        hiddenScience: {
            ar: 'الصلاة في الثلث الأخير توافق أدنى مستوى كورتيزول = أعلى استرخاء',
            en: 'Prayer in last third coincides with lowest cortisol = highest relaxation'
        },
        difficulty: 'hard'
    },
    {
        id: 22,
        category: 'quran',
        method: { ar: 'حفظ جزء عم كاملاً', en: 'Memorize Juz Amma completely' },
        islamicBasis: {
            ar: 'يُقال لصاحب القرآن اقرأ وارقَ',
            en: 'Quran companion is told: Read and ascend'
        },
        hiddenScience: {
            ar: 'الحفظ يُقوي الحُصين الدماغي المسؤول عن الذاكرة ويُؤخر الخرف',
            en: 'Memorization strengthens hippocampus responsible for memory and delays dementia'
        },
        difficulty: 'hard'
    },
    {
        id: 23,
        category: 'akhlaq',
        method: { ar: 'الابتسامة في وجه كل مسلم', en: 'Smile at every Muslim' },
        islamicBasis: {
            ar: 'تبسمك في وجه أخيك صدقة',
            en: 'Your smile at your brother is charity'
        },
        hiddenScience: {
            ar: 'الابتسامة تُفعّل الخلايا العصبية المرآتية وتنتشر السعادة للآخرين وترتد إليك',
            en: 'Smiling activates mirror neurons, spreading happiness to others and back to you'
        },
        difficulty: 'easy'
    },
    {
        id: 24,
        category: 'tawbah',
        method: { ar: 'الوضوء عند الغضب', en: 'Make wudu when angry' },
        islamicBasis: {
            ar: 'إن الغضب من الشيطان والشيطان من النار والماء يطفئ النار',
            en: 'Anger is from Satan, Satan is from fire, water extinguishes fire'
        },
        hiddenScience: {
            ar: 'الماء البارد يُفعّل منعكس الغوص ويُبطئ القلب فوراً',
            en: 'Cold water activates dive reflex and slows heart immediately'
        },
        difficulty: 'easy'
    },
    {
        id: 25,
        category: 'zuhd',
        method: { ar: 'التبرع بشيء تحبه', en: 'Donate something you love' },
        islamicBasis: {
            ar: 'لن تنالوا البر حتى تنفقوا مما تحبون',
            en: 'You will not attain righteousness until you spend from what you love'
        },
        hiddenScience: {
            ar: 'التخلي الطوعي يُفك تعلق الدماغ بالمادة ويُعيد برمجة نظام المكافأة',
            en: 'Voluntary letting go detaches brain from material and reprograms reward system'
        },
        difficulty: 'hard'
    },
    {
        id: 26,
        category: 'dhikr',
        method: { ar: 'حسبي الله ونعم الوكيل عند الخوف', en: 'Say HasbiAllah when fearful' },
        islamicBasis: {
            ar: 'الذين قال لهم الناس إن الناس قد جمعوا لكم فاخشوهم فزادهم إيماناً',
            en: 'Those told people gathered against them, it increased their faith'
        },
        hiddenScience: {
            ar: 'تسليم المخاوف لقوة أعلى يُوقف التفكير الكارثي ويُهدئ اللوزة الدماغية',
            en: 'Surrendering fears to higher power stops catastrophic thinking and calms amygdala'
        },
        difficulty: 'easy'
    },
    {
        id: 27,
        category: 'salah',
        method: { ar: 'صلاة الضحى يومياً', en: 'Pray Duha daily' },
        islamicBasis: {
            ar: 'صلاة الأوابين إذا رمضت الفصال',
            en: 'Prayer of repentant when young camels feel sand\'s heat'
        },
        hiddenScience: {
            ar: 'الصلاة في منتصف الصباح تُكسر الروتين وتُعيد شحن الطاقة للنصف الثاني من اليوم',
            en: 'Mid-morning prayer breaks routine and recharges energy for day\'s second half'
        },
        difficulty: 'medium'
    },
    {
        id: 28,
        category: 'muhasabah',
        method: { ar: 'السؤال: لماذا فعلت هذا؟ قبل كل فعل', en: 'Ask "Why am I doing this?" before each action' },
        islamicBasis: {
            ar: 'إنما الأعمال بالنيات',
            en: 'Actions are by intentions'
        },
        hiddenScience: {
            ar: 'التوقف قبل الفعل يُفعّل القشرة الجبهية ويُوقف السلوك التلقائي الضار',
            en: 'Pausing before action activates prefrontal cortex and stops harmful automatic behavior'
        },
        difficulty: 'medium'
    },
    {
        id: 29,
        category: 'khushu',
        method: { ar: 'تخيل الموت أثناء الصلاة', en: 'Imagine death during prayer' },
        islamicBasis: {
            ar: 'صلِّ صلاة مودع',
            en: 'Pray as if bidding farewell'
        },
        hiddenScience: {
            ar: 'تخيل النهاية يُفعّل الإلحاح الوجودي ويُزيد التركيز والمعنى',
            en: 'Imagining the end activates existential urgency and increases focus and meaning'
        },
        difficulty: 'medium'
    },
    {
        id: 30,
        category: 'quran',
        method: { ar: 'الاستماع للقرآن بصوت شيخ مؤثر', en: 'Listen to Quran with moving reciter' },
        islamicBasis: {
            ar: 'وإذا سمعوا ما أنزل إلى الرسول ترى أعينهم تفيض من الدمع',
            en: 'When they hear what was revealed to Messenger, eyes overflow with tears'
        },
        hiddenScience: {
            ar: 'الترددات الصوتية للتلاوة المجودة تُحفز العصب الحائر وتُهدئ الجهاز العصبي',
            en: 'Sound frequencies of proper recitation stimulate vagus nerve and calm nervous system'
        },
        difficulty: 'easy'
    },
    {
        id: 31,
        category: 'akhlaq',
        method: { ar: 'الصمت إلا من خير', en: 'Silence except for good' },
        islamicBasis: {
            ar: 'من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت',
            en: 'Who believes in Allah and Last Day should speak good or be silent'
        },
        hiddenScience: {
            ar: 'الصمت يُقلل التحفيز الزائد ويُعطي الدماغ وقتاً للمعالجة والتكامل',
            en: 'Silence reduces overstimulation and gives brain time for processing and integration'
        },
        difficulty: 'hard'
    },
    {
        id: 32,
        category: 'tawbah',
        method: { ar: 'مسامحة من ظلمك', en: 'Forgive those who wronged you' },
        islamicBasis: {
            ar: 'وليعفوا وليصفحوا ألا تحبون أن يغفر الله لكم',
            en: 'Let them pardon and forgive. Do you not love that Allah forgives you?'
        },
        hiddenScience: {
            ar: 'التمسك بالظُلم يُفرز كورتيزول مزمن يُضعف القلب والمناعة حرفياً',
            en: 'Holding grudges releases chronic cortisol that weakens heart and immunity literally'
        },
        difficulty: 'hard'
    },
    {
        id: 33,
        category: 'zuhd',
        method: { ar: 'يوم بلا إنترنت أسبوعياً', en: 'One internet-free day weekly' },
        islamicBasis: {
            ar: 'الخلوة الشرعية للتفكر والذكر',
            en: 'Islamic solitude for reflection and remembrance'
        },
        hiddenScience: {
            ar: 'الانفصال الرقمي يُعيد توازن الدوبامين ويُصلح مسارات الانتباه التالفة',
            en: 'Digital detox rebalances dopamine and repairs damaged attention pathways'
        },
        difficulty: 'medium'
    },
    {
        id: 34,
        category: 'dhikr',
        method: { ar: 'لا إله إلا الله عند الهم', en: 'Say La ilaha illAllah during worry' },
        islamicBasis: {
            ar: 'دعوة أخي يونس: لا إله إلا أنت سبحانك إني كنت من الظالمين',
            en: 'My brother Yunus\'s dua: No deity except You, I was among wrongdoers'
        },
        hiddenScience: {
            ar: 'إعادة التأكيد على المعتقد الأساسي يُوقف دورة القلق ويُعيد الإحساس بالسيطرة',
            en: 'Reaffirming core belief stops anxiety cycle and restores sense of control'
        },
        difficulty: 'easy'
    },
    {
        id: 35,
        category: 'salah',
        method: { ar: 'صلاة الحاجة عند الأزمات', en: 'Salat al-Hajah during crises' },
        islamicBasis: {
            ar: 'من كانت له حاجة فليتوضأ وليصل ركعتين ثم ليدع',
            en: 'Who has need should make wudu, pray 2 rakaat, then supplicate'
        },
        hiddenScience: {
            ar: 'تحويل الأزمة لفعل إيجابي يُنقل الطاقة من الخوف للفعل ويُقلل الشلل النفسي',
            en: 'Converting crisis to positive action transfers energy from fear to action, reducing paralysis'
        },
        difficulty: 'easy'
    },

    // ═══════════════════════════════════════════════════════════════
    // CHUNK 2: Methods 36-70 - تطهير متقدم
    // ═══════════════════════════════════════════════════════════════

    {
        id: 36,
        category: 'quran',
        method: { ar: 'ختمة شهرية منتظمة', en: 'Regular monthly Khatmah' },
        islamicBasis: {
            ar: 'اقرأ القرآن في شهر، في أسبوعين، في سبع',
            en: 'Read Quran in month, two weeks, or seven days'
        },
        hiddenScience: {
            ar: 'الالتزام طويل المدى يُقوي مسارات الانضباط الذاتي ويُنشئ عادة قوية',
            en: 'Long-term commitment strengthens self-discipline pathways and creates strong habit'
        },
        difficulty: 'hard'
    },
    {
        id: 37,
        category: 'dhikr',
        method: { ar: 'التهليل 70000 مرة للعتق', en: 'Say La ilaha illAllah 70000 times for freedom' },
        islamicBasis: {
            ar: 'من قال لا إله إلا الله سبعين ألف مرة أُعتق من النار',
            en: 'Who says it 70000 times is freed from Fire'
        },
        hiddenScience: {
            ar: 'المشاريع الكبيرة تُنشئ إحساساً بالإنجاز يُغير الهوية الذاتية',
            en: 'Grand projects create sense of achievement that changes self-identity'
        },
        difficulty: 'hard'
    },
    {
        id: 38,
        category: 'muhasabah',
        method: { ar: 'تحديد القلب الأسود: ما الذي يُغضبك أكثر؟', en: 'Identify black heart: What angers you most?' },
        islamicBasis: {
            ar: 'وما آفة الأخبار إلا رواتها',
            en: 'What reveals a man is what he reacts to'
        },
        hiddenScience: {
            ar: 'الإسقاط النفسي يكشف العيوب الخفية في النفس من خلال أحكامنا على الآخرين',
            en: 'Psychological projection reveals hidden flaws through our judgments of others'
        },
        difficulty: 'medium'
    },
    {
        id: 39,
        category: 'akhlaq',
        method: { ar: 'إفشاء السلام على من عرفت ومن لم تعرف', en: 'Spread Salam to known and unknown' },
        islamicBasis: {
            ar: 'أفشوا السلام بينكم تحابوا',
            en: 'Spread peace among you, you will love each other'
        },
        hiddenScience: {
            ar: 'التحية تُكسر حاجز الخوف الاجتماعي وتُفرز الأوكسيتوسين عند الطرفين',
            en: 'Greeting breaks social fear barrier and releases oxytocin in both parties'
        },
        difficulty: 'easy'
    },
    {
        id: 40,
        category: 'khushu',
        method: { ar: 'الجلوس في المسجد بين الصلوات', en: 'Sit in mosque between prayers' },
        islamicBasis: {
            ar: 'الملائكة تصلي عليه ما دام في مصلاه',
            en: 'Angels pray for him while in his prayer place'
        },
        hiddenScience: {
            ar: 'البيئة المقدسة تُبرمج العقل على الهدوء بسبب الارتباط الشرطي',
            en: 'Sacred environment programs mind for calm through conditioning association'
        },
        difficulty: 'medium'
    },
    {
        id: 41,
        category: 'tawbah',
        method: { ar: 'الاعتذار الفوري عند الخطأ', en: 'Apologize immediately when wrong' },
        islamicBasis: {
            ar: 'المسلم أخو المسلم لا يظلمه',
            en: 'Muslim is brother of Muslim, doesn\'t wrong him'
        },
        hiddenScience: {
            ar: 'الاعتذار الفوري يمنع تراكم الذنب ويُصلح العلاقات قبل التلف',
            en: 'Quick apology prevents guilt buildup and repairs relationships before damage'
        },
        difficulty: 'medium'
    },
    {
        id: 42,
        category: 'zuhd',
        method: { ar: 'ارتداء ملابس بسيطة', en: 'Wear simple clothes' },
        islamicBasis: {
            ar: 'كان ﷺ يلبس الثوب المرقع',
            en: 'Prophet ﷺ wore patched garments'
        },
        hiddenScience: {
            ar: 'تقليل الاختيارات الخارجية يحفظ طاقة القرار للأمور الجوهرية',
            en: 'Reducing external choices preserves decision energy for essential matters'
        },
        difficulty: 'easy'
    },
    {
        id: 43,
        category: 'salah',
        method: { ar: 'صلاة الاستخارة عند كل قرار', en: 'Pray Istikhara for every decision' },
        islamicBasis: {
            ar: 'إذا هم أحدكم بالأمر فليصل ركعتين',
            en: 'When one intends something, pray 2 rakaat'
        },
        hiddenScience: {
            ar: 'تأخير القرار يُفعّل التفكير البطيء ويمنع القرارات الانفعالية',
            en: 'Delaying decision activates slow thinking and prevents impulsive choices'
        },
        difficulty: 'easy'
    },
    {
        id: 44,
        category: 'dhikr',
        method: { ar: 'سيد الاستغفار صباحاً ومساءً', en: 'Master of forgiveness morning and evening' },
        islamicBasis: {
            ar: 'من قالها حين يمسي فمات دخل الجنة',
            en: 'Who says it at evening and dies enters Paradise'
        },
        hiddenScience: {
            ar: 'الاعتراف اليومي بالتقصير يمنع تضخم الأنا ويحافظ على التواضع',
            en: 'Daily admission of shortcomings prevents ego inflation and maintains humility'
        },
        difficulty: 'easy'
    },
    {
        id: 45,
        category: 'quran',
        method: { ar: 'قراءة سورة الملك قبل النوم', en: 'Read Surah Al-Mulk before sleep' },
        islamicBasis: {
            ar: 'هي المنجية من عذاب القبر',
            en: 'It saves from grave punishment'
        },
        hiddenScience: {
            ar: 'القراءة قبل النوم تُدخل المعاني للذاكرة طويلة المدى أثناء النوم',
            en: 'Reading before sleep encodes meanings into long-term memory during sleep'
        },
        difficulty: 'easy'
    },
    {
        id: 46,
        category: 'muhasabah',
        method: { ar: 'سؤال: هل أنا راضٍ عن نفسي أمام الله؟', en: 'Ask: Am I satisfied with myself before Allah?' },
        islamicBasis: {
            ar: 'من سرته حسنته وساءته سيئته فذلك المؤمن',
            en: 'Who is pleased by good deed and grieved by bad is believer'
        },
        hiddenScience: {
            ar: 'التقييم الذاتي المنتظم يُفعّل الوعي الذاتي ويمنع الانحراف التدريجي',
            en: 'Regular self-evaluation activates self-awareness and prevents gradual drift'
        },
        difficulty: 'medium'
    },
    {
        id: 47,
        category: 'akhlaq',
        method: { ar: 'إطعام الفقراء بيدك', en: 'Feed poor with your own hands' },
        islamicBasis: {
            ar: 'أحب الأعمال إلى الله إدخال السرور على المسلم',
            en: 'Most beloved deeds to Allah is bringing joy to a Muslim'
        },
        hiddenScience: {
            ar: 'اللمس المباشر يُفرز الأوكسيتوسين ويُنشئ ارتباطاً عاطفياً حقيقياً',
            en: 'Direct touch releases oxytocin and creates genuine emotional connection'
        },
        difficulty: 'medium'
    },
    {
        id: 48,
        category: 'khushu',
        method: { ar: 'الاعتكاف ولو ساعة', en: 'Spiritual retreat even one hour' },
        islamicBasis: {
            ar: 'كان ﷺ يعتكف العشر الأواخر من رمضان',
            en: 'Prophet ﷺ did I\'tikaf last 10 of Ramadan'
        },
        hiddenScience: {
            ar: 'العزلة المقصودة تُعيد شحن الطاقة الاجتماعية وتُصلح التركيز',
            en: 'Intentional solitude recharges social energy and repairs focus'
        },
        difficulty: 'medium'
    },
    {
        id: 49,
        category: 'tawbah',
        method: { ar: 'صوم الإثنين والخميس', en: 'Fast Monday and Thursday' },
        islamicBasis: {
            ar: 'تُعرض الأعمال فيهما وأحب أن يُعرض عملي وأنا صائم',
            en: 'Deeds presented then; I love my deed presented while fasting'
        },
        hiddenScience: {
            ar: 'الصيام المتقطع يُحسن حساسية الإنسولين ويُنظف الدماغ من السموم',
            en: 'Intermittent fasting improves insulin sensitivity and cleanses brain of toxins'
        },
        difficulty: 'medium'
    },
    {
        id: 50,
        category: 'zuhd',
        method: { ar: 'النوم على الأرض أحياناً', en: 'Sleep on floor sometimes' },
        islamicBasis: {
            ar: 'كان ﷺ ينام على حصير يؤثر في جنبه',
            en: 'Prophet ﷺ slept on mat that left marks on his side'
        },
        hiddenScience: {
            ar: 'تعريض الجسم لعدم الراحة المتعمد يُقوي المرونة النفسية',
            en: 'Exposing body to intentional discomfort strengthens psychological resilience'
        },
        difficulty: 'medium'
    },
    {
        id: 51,
        category: 'salah',
        method: { ar: 'التأخير قليلاً بعد الأذان للتهيؤ', en: 'Brief delay after Adhan to prepare' },
        islamicBasis: {
            ar: 'بين كل أذانين صلاة',
            en: 'Between every two Adhans is prayer'
        },
        hiddenScience: {
            ar: 'فترة الانتقال تُساعد الدماغ على التحول من وضع لآخر بسلاسة',
            en: 'Transition period helps brain shift smoothly from one mode to another'
        },
        difficulty: 'easy'
    },
    {
        id: 52,
        category: 'dhikr',
        method: { ar: 'الباقيات الصالحات 100 مرة', en: 'Everlasting good deeds 100 times' },
        islamicBasis: {
            ar: 'سبحان الله والحمد لله ولا إله إلا الله والله أكبر',
            en: 'SubhanAllah, Alhamdulillah, La ilaha illAllah, Allahu Akbar'
        },
        hiddenScience: {
            ar: 'التنويع في الأذكار يُنشط أجزاء مختلفة من الدماغ',
            en: 'Variety in dhikr activates different parts of the brain'
        },
        difficulty: 'easy'
    },
    {
        id: 53,
        category: 'quran',
        method: { ar: 'تعلم تجويد حرف واحد أسبوعياً', en: 'Learn tajweed of one letter weekly' },
        islamicBasis: {
            ar: 'الذي يقرأ القرآن وهو ماهر به مع السفرة الكرام البررة',
            en: 'Skilled Quran reader is with noble angels'
        },
        hiddenScience: {
            ar: 'التعلم التدريجي يُثبت المعلومات أفضل من التعلم المكثف',
            en: 'Gradual learning consolidates information better than intensive learning'
        },
        difficulty: 'medium'
    },
    {
        id: 54,
        category: 'muhasabah',
        method: { ar: 'تتبع الأفكار السلبية المتكررة', en: 'Track recurring negative thoughts' },
        islamicBasis: {
            ar: 'إن النفس لأمارة بالسوء',
            en: 'Indeed soul commands to evil'
        },
        hiddenScience: {
            ar: 'الوعي بالأنماط السلبية أول خطوة لكسرها',
            en: 'Awareness of negative patterns is first step to breaking them'
        },
        difficulty: 'medium'
    },
    {
        id: 55,
        category: 'akhlaq',
        method: { ar: 'إماطة الأذى عن الطريق', en: 'Remove harm from path' },
        islamicBasis: {
            ar: 'الإيمان بضع وسبعون شعبة أدناها إماطة الأذى عن الطريق',
            en: 'Faith has 70+ branches, lowest is removing harm from path'
        },
        hiddenScience: {
            ar: 'الأفعال الصغيرة الإيجابية تُبني عادة الفعل الخيري التلقائي',
            en: 'Small positive acts build habit of automatic charitable action'
        },
        difficulty: 'easy'
    },
    {
        id: 56,
        category: 'khushu',
        method: { ar: 'الصلاة في الظلام أحياناً', en: 'Pray in darkness sometimes' },
        islamicBasis: {
            ar: 'صلاة الليل في الظلمة أخشع للقلب',
            en: 'Night prayer in darkness is more reverent for heart'
        },
        hiddenScience: {
            ar: 'تقليل المحفزات البصرية يزيد التركيز الداخلي',
            en: 'Reducing visual stimuli increases internal focus'
        },
        difficulty: 'easy'
    },
    {
        id: 57,
        category: 'tawbah',
        method: { ar: 'رد المظالم لأصحابها', en: 'Return wrongs to their owners' },
        islamicBasis: {
            ar: 'من كانت عنده مظلمة لأخيه فليتحلله منها',
            en: 'Who has wrong against brother should seek his pardon'
        },
        hiddenScience: {
            ar: 'تصحيح الأخطاء الماضية يُزيل الحمل النفسي المزمن',
            en: 'Correcting past mistakes removes chronic psychological burden'
        },
        difficulty: 'hard'
    },
    {
        id: 58,
        category: 'zuhd',
        method: { ar: 'شراء أقل طعام ممكن', en: 'Buy minimum possible food' },
        islamicBasis: {
            ar: 'حسب ابن آدم لقيمات يقمن صلبه',
            en: 'Enough for son of Adam are few bites to keep spine straight'
        },
        hiddenScience: {
            ar: 'الجوع الخفيف يُزيد اليقظة العقلية ويُفعّل هرمون الجريلين المحفز',
            en: 'Mild hunger increases mental alertness and activates stimulating ghrelin'
        },
        difficulty: 'medium'
    },
    {
        id: 59,
        category: 'salah',
        method: { ar: 'صلاة ركعتين عند دخول المنزل', en: 'Pray 2 rakaat when entering home' },
        islamicBasis: {
            ar: 'إذا خرجت من منزلك فصل ركعتين، وإذا دخلت فصل ركعتين',
            en: 'When leaving home pray 2, when entering pray 2'
        },
        hiddenScience: {
            ar: 'طقوس الانتقال تُساعد الدماغ على الفصل بين البيئات',
            en: 'Transition rituals help brain separate between environments'
        },
        difficulty: 'easy'
    },
    {
        id: 60,
        category: 'dhikr',
        method: { ar: 'الذكر عند كل فعل يومي', en: 'Dhikr with every daily act' },
        islamicBasis: {
            ar: 'دعاء الدخول والخروج والأكل والنوم',
            en: 'Dua for entering, leaving, eating, sleeping'
        },
        hiddenScience: {
            ar: 'ربط الذكر بالأفعال يُحول الحياة كلها لعبادة مستمرة',
            en: 'Linking dhikr to actions turns entire life into continuous worship'
        },
        difficulty: 'medium'
    },
    {
        id: 61,
        category: 'quran',
        method: { ar: 'قراءة سورة الكهف كل جمعة', en: 'Read Surah Al-Kahf every Friday' },
        islamicBasis: {
            ar: 'من قرأها أضاء له نور بين الجمعتين',
            en: 'Who reads it, light illuminates between two Fridays'
        },
        hiddenScience: {
            ar: 'القصص الأربع تُغطي أنواع الفتن الأربعة وتُحصن منها',
            en: 'Four stories cover four types of tribulations and protect from them'
        },
        difficulty: 'medium'
    },
    {
        id: 62,
        category: 'muhasabah',
        method: { ar: 'ما أكبر ذنب أخفيه؟', en: 'What is my biggest hidden sin?' },
        islamicBasis: {
            ar: 'يُحشر الناس على نياتهم',
            en: 'People are resurrected based on intentions'
        },
        hiddenScience: {
            ar: 'مواجهة الظل النفسي تُدمج أجزاء الشخصية المنفصلة',
            en: 'Confronting psychological shadow integrates disconnected personality parts'
        },
        difficulty: 'hard'
    },
    {
        id: 63,
        category: 'akhlaq',
        method: { ar: 'الإنصات الكامل بدون مقاطعة', en: 'Complete listening without interruption' },
        islamicBasis: {
            ar: 'كان ﷺ إذا حدثه أحد أقبل عليه بوجهه كله',
            en: 'Prophet ﷺ would turn fully to speaker'
        },
        hiddenScience: {
            ar: 'الإنصات النشط يُفعّل منطقة التعاطف في الدماغ',
            en: 'Active listening activates empathy region in brain'
        },
        difficulty: 'medium'
    },
    {
        id: 64,
        category: 'khushu',
        method: { ar: 'تأمل نجمة واحدة 5 دقائق', en: 'Contemplate one star for 5 minutes' },
        islamicBasis: {
            ar: 'أفلا ينظرون إلى السماء كيف رُفعت',
            en: 'Do they not look at sky how it was raised?'
        },
        hiddenScience: {
            ar: 'التركيز على نقطة واحدة يُوقف الأفكار المتسارعة',
            en: 'Focus on single point stops racing thoughts'
        },
        difficulty: 'easy'
    },
    {
        id: 65,
        category: 'tawbah',
        method: { ar: 'غسل الوضوء بوعي كامل', en: 'Wash wudu with full awareness' },
        islamicBasis: {
            ar: 'إذا توضأ العبد خرجت خطاياه من جسده',
            en: 'When servant makes wudu, sins leave his body'
        },
        hiddenScience: {
            ar: 'الوعي الكامل أثناء الغسل يُفعّل منطقة الحضور الذهني',
            en: 'Full awareness during washing activates mindfulness region'
        },
        difficulty: 'easy'
    },
    {
        id: 66,
        category: 'zuhd',
        method: { ar: 'المشي بدل السيارة أحياناً', en: 'Walk instead of car sometimes' },
        islamicBasis: {
            ar: 'المشي للمسجد يُكتب به الحسنات برفع الدرجات ومحو السيئات',
            en: 'Walking to mosque earns rewards, raises ranks, erases sins'
        },
        hiddenScience: {
            ar: 'المشي يُحسن الدورة الدموية للدماغ وينظم المزاج',
            en: 'Walking improves brain blood circulation and regulates mood'
        },
        difficulty: 'easy'
    },
    {
        id: 67,
        category: 'salah',
        method: { ar: 'إتقان الطمأنينة في كل ركن', en: 'Perfect tranquility in each pillar' },
        islamicBasis: {
            ar: 'ارجع فصل فإنك لم تصل - أسوأ الناس سرقة الذي يسرق من صلاته',
            en: 'Go back and pray, you haven\'t prayed - Worst thief steals from prayer'
        },
        hiddenScience: {
            ar: 'البطء في الحركة يُفعّل الجهاز العصبي الهادئ',
            en: 'Slow movement activates calming nervous system'
        },
        difficulty: 'medium'
    },
    {
        id: 68,
        category: 'dhikr',
        method: { ar: 'يا حي يا قيوم برحمتك أستغيث', en: 'Ya Hayyu Ya Qayyum by Your mercy I seek help' },
        islamicBasis: {
            ar: 'دعاء الكرب والشدائد',
            en: 'Dua for distress and hardship'
        },
        hiddenScience: {
            ar: 'مناداة الحياة والقيومية تُذكر بالاستمرارية والأمان',
            en: 'Calling upon Life and Sustenance reminds of continuity and safety'
        },
        difficulty: 'easy'
    },
    {
        id: 69,
        category: 'quran',
        method: { ar: 'قراءة آية الكرسي بعد كل صلاة', en: 'Read Ayat al-Kursi after each prayer' },
        islamicBasis: {
            ar: 'لم يمنعه من دخول الجنة إلا الموت',
            en: 'Nothing prevents him from Paradise except death'
        },
        hiddenScience: {
            ar: 'معاني العظمة والحماية تُنشئ شعوراً بالأمان النفسي',
            en: 'Meanings of greatness and protection create psychological safety'
        },
        difficulty: 'easy'
    },
    {
        id: 70,
        category: 'muhasabah',
        method: { ar: 'ما الذي أخاف أن يراه الناس فيّ؟', en: 'What do I fear people seeing in me?' },
        islamicBasis: {
            ar: 'إنما الرياء أن تعمل للناس',
            en: 'Showing off is working for people'
        },
        hiddenScience: {
            ar: 'اكتشاف ما نخفيه يكشف عيوبنا الحقيقية',
            en: 'Discovering what we hide reveals our true flaws'
        },
        difficulty: 'hard'
    },

    // ═══════════════════════════════════════════════════════════════
    // CHUNK 3: Methods 71-100 - التتميم والإتقان
    // ═══════════════════════════════════════════════════════════════

    {
        id: 71,
        category: 'akhlaq',
        method: { ar: 'عدم الشكوى للمخلوقين', en: 'Don\'t complain to creation' },
        islamicBasis: {
            ar: 'إنما أشكو بثي وحزني إلى الله',
            en: 'I only complain of my grief and sorrow to Allah'
        },
        hiddenScience: {
            ar: 'الشكوى تُقوي المشكلة في الذهن وتُضعف القدرة على الحل',
            en: 'Complaining strengthens problem in mind and weakens ability to solve'
        },
        difficulty: 'hard'
    },
    {
        id: 72,
        category: 'khushu',
        method: { ar: 'قراءة سيرة النبي ﷺ أسبوعياً', en: 'Read Prophet\'s biography weekly' },
        islamicBasis: {
            ar: 'لقد كان لكم في رسول الله أسوة حسنة',
            en: 'In Messenger of Allah is excellent example for you'
        },
        hiddenScience: {
            ar: 'القصص تُنشط منطقة التعاطف والتقليد في الدماغ',
            en: 'Stories activate empathy and imitation regions in brain'
        },
        difficulty: 'medium'
    },
    {
        id: 73,
        category: 'tawbah',
        method: { ar: 'الدعاء لمن ظلمته بظهر الغيب', en: 'Pray for those you wronged in their absence' },
        islamicBasis: {
            ar: 'دعوة المسلم لأخيه بظهر الغيب مستجابة',
            en: 'Muslim\'s dua for brother in absence is answered'
        },
        hiddenScience: {
            ar: 'التمني الخير للآخرين يُذيب الضغينة ويُصلح القلب',
            en: 'Wishing good for others dissolves resentment and heals heart'
        },
        difficulty: 'medium'
    },
    {
        id: 74,
        category: 'zuhd',
        method: { ar: 'تنظيف المنزل من الزائد', en: 'Declutter home from excess' },
        islamicBasis: {
            ar: 'اللهم اجعل رزق آل محمد قوتاً',
            en: 'O Allah, make provision of Muhammad\'s family just enough'
        },
        hiddenScience: {
            ar: 'البيئة المرتبة تُقلل التوتر وتُحسن الوضوح الذهني',
            en: 'Tidy environment reduces stress and improves mental clarity'
        },
        difficulty: 'easy'
    },
    {
        id: 75,
        category: 'salah',
        method: { ar: 'الصف الأول في الجماعة', en: 'First row in congregation' },
        islamicBasis: {
            ar: 'لو يعلمون ما في الصف الأول لاستهموا عليه',
            en: 'If they knew what\'s in first row, they would draw lots'
        },
        hiddenScience: {
            ar: 'القرب من الإمام يزيد التركيز ويُقلل التشتت',
            en: 'Closeness to Imam increases focus and reduces distraction'
        },
        difficulty: 'medium'
    },
    {
        id: 76,
        category: 'dhikr',
        method: { ar: 'أعوذ بكلمات الله التامات 3 مرات عند النوم', en: 'Seek refuge in Allah\'s perfect words 3x before sleep' },
        islamicBasis: {
            ar: 'لم يضره شيء في تلك الليلة',
            en: 'Nothing will harm him that night'
        },
        hiddenScience: {
            ar: 'الشعور بالحماية يُقلل القلق ويُحسن جودة النوم',
            en: 'Feeling protected reduces anxiety and improves sleep quality'
        },
        difficulty: 'easy'
    },
    {
        id: 77,
        category: 'quran',
        method: { ar: 'تعلم معنى 10 كلمات قرآنية أسبوعياً', en: 'Learn meaning of 10 Quran words weekly' },
        islamicBasis: {
            ar: 'وأنزلنا إليك الذكر لتبين للناس ما نُزل إليهم',
            en: 'We sent reminder so you explain to people what was revealed'
        },
        hiddenScience: {
            ar: 'فهم المعاني يُحول القراءة من طقس لتجربة معنوية',
            en: 'Understanding meanings transforms reading from ritual to meaningful experience'
        },
        difficulty: 'medium'
    },
    {
        id: 78,
        category: 'muhasabah',
        method: { ar: 'سؤال: ماذا لو مت الآن؟', en: 'Ask: What if I died now?' },
        islamicBasis: {
            ar: 'اذكروا هادم اللذات',
            en: 'Remember the destroyer of pleasures'
        },
        hiddenScience: {
            ar: 'التفكير في الموت يُعيد ترتيب الأولويات ويُقلل التعلق بالدنيا',
            en: 'Thinking of death reprioritizes and reduces attachment to world'
        },
        difficulty: 'easy'
    },
    {
        id: 79,
        category: 'akhlaq',
        method: { ar: 'زيارة المريض أسبوعياً', en: 'Visit sick weekly' },
        islamicBasis: {
            ar: 'من عاد مريضاً لم يزل في خُرفة الجنة',
            en: 'Who visits sick remains in garden of Paradise'
        },
        hiddenScience: {
            ar: 'رؤية المعاناة تُزيد الامتنان وتُقلل الشكوى',
            en: 'Seeing suffering increases gratitude and reduces complaining'
        },
        difficulty: 'medium'
    },
    {
        id: 80,
        category: 'khushu',
        method: { ar: 'تذكر الجنة والنار يومياً', en: 'Remember Paradise and Hell daily' },
        islamicBasis: {
            ar: 'ناركم هذه جزء من سبعين جزءاً من نار جهنم',
            en: 'Your fire is one seventieth of Hellfire'
        },
        hiddenScience: {
            ar: 'تخيل العواقب يُفعّل التفكير طويل المدى ويمنع القرارات الآنية',
            en: 'Imagining consequences activates long-term thinking and prevents impulsive decisions'
        },
        difficulty: 'easy'
    },
    {
        id: 81,
        category: 'tawbah',
        method: { ar: 'استبدال العادة السيئة بحسنة', en: 'Replace bad habit with good one' },
        islamicBasis: {
            ar: 'وأتبع السيئة الحسنة تمحها',
            en: 'And follow bad deed with good deed, it will erase it'
        },
        hiddenScience: {
            ar: 'الدماغ لا يمحو العادات بل يستبدلها - البديل ضروري للتغيير',
            en: 'Brain doesn\'t erase habits but replaces them - replacement is necessary for change'
        },
        difficulty: 'medium'
    },
    {
        id: 82,
        category: 'zuhd',
        method: { ar: 'تقليل متابعة الأخبار', en: 'Reduce news consumption' },
        islamicBasis: {
            ar: 'إياكم والظن فإن الظن أكذب الحديث',
            en: 'Beware of suspicion, for it is most lying speech'
        },
        hiddenScience: {
            ar: 'الأخبار السلبية تُفرز الكورتيزول وتُسبب القلق المزمن',
            en: 'Negative news releases cortisol and causes chronic anxiety'
        },
        difficulty: 'easy'
    },
    {
        id: 83,
        category: 'salah',
        method: { ar: 'صلاة التسابيح مرة أسبوعياً', en: 'Pray Salat al-Tasbih weekly' },
        islamicBasis: {
            ar: 'يغفر الله لك ذنبك أوله وآخره، قديمه وحديثه',
            en: 'Allah forgives all your sins, first and last, old and new'
        },
        hiddenScience: {
            ar: 'الصلاة الطويلة تُعمق حالة الاسترخاء وتُصلح الجهاز العصبي',
            en: 'Long prayer deepens relaxation state and repairs nervous system'
        },
        difficulty: 'hard'
    },
    {
        id: 84,
        category: 'dhikr',
        method: { ar: 'الإكثار من الحوقلة عند العجز', en: 'Say La hawla frequently when helpless' },
        islamicBasis: {
            ar: 'لا حول ولا قوة إلا بالله كنز من كنوز الجنة',
            en: 'La hawla... is treasure from Paradise'
        },
        hiddenScience: {
            ar: 'الاعتراف بالعجز يُوقف محاولات السيطرة المُجهدة',
            en: 'Admitting helplessness stops exhausting control attempts'
        },
        difficulty: 'easy'
    },
    {
        id: 85,
        category: 'quran',
        method: { ar: 'ورد يومي ثابت ولو آية', en: 'Fixed daily portion even one verse' },
        islamicBasis: {
            ar: 'أحب الأعمال إلى الله أدومها وإن قل',
            en: 'Most beloved deeds to Allah are most consistent even if small'
        },
        hiddenScience: {
            ar: 'الثبات يبني المسارات العصبية أقوى من الكثافة',
            en: 'Consistency builds neural pathways stronger than intensity'
        },
        difficulty: 'easy'
    },
    {
        id: 86,
        category: 'muhasabah',
        method: { ar: 'سؤال: ما آخر إحسان قدمته لغير الله؟', en: 'Ask: Last kindness I did not for Allah?' },
        islamicBasis: {
            ar: 'إنما نطعمكم لوجه الله لا نريد منكم جزاءً ولا شكوراً',
            en: 'We feed you only for Allah\'s face, expecting no reward or thanks'
        },
        hiddenScience: {
            ar: 'اكتشاف النيات المخفية يُنقي الأعمال من الشوائب',
            en: 'Discovering hidden intentions purifies actions from impurities'
        },
        difficulty: 'hard'
    },
    {
        id: 87,
        category: 'akhlaq',
        method: { ar: 'إقراض المحتاج بدون مَنّ', en: 'Lend to needy without reminding' },
        islamicBasis: {
            ar: 'لا تبطلوا صدقاتكم بالمن والأذى',
            en: 'Don\'t invalidate charity with reminder and harm'
        },
        hiddenScience: {
            ar: 'العطاء بدون توقع يُفعّل أنقى أشكال السعادة',
            en: 'Giving without expectation activates purest forms of happiness'
        },
        difficulty: 'hard'
    },
    {
        id: 88,
        category: 'khushu',
        method: { ar: 'الجلوس وحيداً بدون أي شيء 15 دقيقة', en: 'Sit alone with nothing for 15 minutes' },
        islamicBasis: {
            ar: 'الخلوة الشرعية لمحاسبة النفس والتفكر',
            en: 'Islamic solitude for self-accounting and reflection'
        },
        hiddenScience: {
            ar: 'الملل الإيجابي يُعيد شحن الدماغ ويُفعّل الإبداع',
            en: 'Positive boredom recharges brain and activates creativity'
        },
        difficulty: 'medium'
    },
    {
        id: 89,
        category: 'tawbah',
        method: { ar: 'الدعاء في السجود لإصلاح القلب', en: 'Dua in prostration to fix heart' },
        islamicBasis: {
            ar: 'يا مقلب القلوب ثبت قلبي على دينك',
            en: 'O Turner of hearts, fix my heart on Your religion'
        },
        hiddenScience: {
            ar: 'طلب المساعدة الخارجية يُخفف الحمل النفسي',
            en: 'Seeking external help lightens psychological burden'
        },
        difficulty: 'easy'
    },
    {
        id: 90,
        category: 'zuhd',
        method: { ar: 'رفض هدايا الراشي', en: 'Refuse gifts with hidden motives' },
        islamicBasis: {
            ar: 'هدايا الأمراء غلول',
            en: 'Gifts to rulers are corruption'
        },
        hiddenScience: {
            ar: 'رفض الرشوة الناعمة يحفظ استقلالية القرار',
            en: 'Refusing soft bribes preserves decision independence'
        },
        difficulty: 'hard'
    },
    {
        id: 91,
        category: 'salah',
        method: { ar: 'إحياء سنة الوتر قبل النوم', en: 'Revive Witr Sunnah before sleep' },
        islamicBasis: {
            ar: 'اجعلوا آخر صلاتكم بالليل وتراً',
            en: 'Make your last night prayer Witr'
        },
        hiddenScience: {
            ar: 'ختم اليوم بالعبادة يُبرمج النوم على السكينة',
            en: 'Ending day with worship programs sleep for tranquility'
        },
        difficulty: 'easy'
    },
    {
        id: 92,
        category: 'dhikr',
        method: { ar: 'دعاء دخول السوق', en: 'Dua when entering market' },
        islamicBasis: {
            ar: 'من قال في السوق لا إله إلا الله... كتب له ألف ألف حسنة',
            en: 'Who says la ilaha illAllah... in market, million hasanat written'
        },
        hiddenScience: {
            ar: 'ذكر الله في أماكن الغفلة يُقوي اليقظة الروحية',
            en: 'Remembering Allah in heedless places strengthens spiritual alertness'
        },
        difficulty: 'easy'
    },
    {
        id: 93,
        category: 'quran',
        method: { ar: 'كتابة آية مؤثرة وتعليقها', en: 'Write impactful verse and hang it' },
        islamicBasis: {
            ar: 'علقوا السوط حيث يراه أهل البيت',
            en: 'Hang reminder where household can see'
        },
        hiddenScience: {
            ar: 'التذكير البصري المستمر يُعيد برمجة اللاوعي',
            en: 'Continuous visual reminder reprograms subconscious'
        },
        difficulty: 'easy'
    },
    {
        id: 94,
        category: 'muhasabah',
        method: { ar: 'سؤال: هل أنا أفضل مما كنت قبل سنة؟', en: 'Ask: Am I better than a year ago?' },
        islamicBasis: {
            ar: 'من استوى يوماه فهو مغبون',
            en: 'Whose two days are equal is deceived'
        },
        hiddenScience: {
            ar: 'قياس التقدم يُحفز الاستمرار ويكشف الركود',
            en: 'Measuring progress motivates continuation and reveals stagnation'
        },
        difficulty: 'medium'
    },
    {
        id: 95,
        category: 'akhlaq',
        method: { ar: 'إبعاد النظر عن المحرمات فوراً', en: 'Lower gaze from haram immediately' },
        islamicBasis: {
            ar: 'قل للمؤمنين يغضوا من أبصارهم',
            en: 'Tell believers to lower their gazes'
        },
        hiddenScience: {
            ar: 'كسر دورة الإثارة في أول ثانية يمنع الانزلاق',
            en: 'Breaking arousal cycle in first second prevents slipping'
        },
        difficulty: 'medium'
    },
    {
        id: 96,
        category: 'khushu',
        method: { ar: 'الصلاة بوعي كأنك تراه', en: 'Pray as if you see Him' },
        islamicBasis: {
            ar: 'أن تعبد الله كأنك تراه',
            en: 'Worship Allah as if you see Him'
        },
        hiddenScience: {
            ar: 'تخيل الحضور يُفعّل مناطق الدماغ كما لو كان حقيقياً',
            en: 'Imagining presence activates brain regions as if real'
        },
        difficulty: 'hard'
    },
    {
        id: 97,
        category: 'tawbah',
        method: { ar: 'تبديل البيئة السامة', en: 'Change toxic environment' },
        islamicBasis: {
            ar: 'فخرج منها خائفاً يترقب',
            en: 'He left it fearful and watchful (Musa leaving Egypt)'
        },
        hiddenScience: {
            ar: 'البيئة تُشكل 80% من السلوك - تغييرها أسهل من تغيير الذات',
            en: 'Environment shapes 80% of behavior - changing it is easier than changing self'
        },
        difficulty: 'hard'
    },
    {
        id: 98,
        category: 'zuhd',
        method: { ar: 'الاكتفاء بما في اليد', en: 'Be content with what you have' },
        islamicBasis: {
            ar: 'انظروا إلى من هو أسفل منكم ولا تنظروا إلى من هو فوقكم',
            en: 'Look at those below you, not above you'
        },
        hiddenScience: {
            ar: 'المقارنة النازلة تُزيد الامتنان والمقارنة الصاعدة تُزيد الحسد',
            en: 'Downward comparison increases gratitude, upward increases envy'
        },
        difficulty: 'medium'
    },
    {
        id: 99,
        category: 'salah',
        method: { ar: 'سجدة شكر عند كل نعمة', en: 'Prostration of gratitude for each blessing' },
        islamicBasis: {
            ar: 'كان ﷺ إذا جاءه أمر يسره خر ساجداً شكراً لله',
            en: 'When good news came, Prophet ﷺ would prostrate in gratitude'
        },
        hiddenScience: {
            ar: 'ربط النعمة بالشكر الجسدي يُعمق الإحساس بالامتنان',
            en: 'Linking blessing to physical gratitude deepens feeling of thankfulness'
        },
        difficulty: 'easy'
    },
    {
        id: 100,
        category: 'dhikr',
        method: { ar: 'ختام اليوم بـ: اللهم أحسن خاتمتي', en: 'End day with: O Allah, perfect my ending' },
        islamicBasis: {
            ar: 'وإنما الأعمال بالخواتيم',
            en: 'Deeds are judged by their endings'
        },
        hiddenScience: {
            ar: 'التركيز على الخاتمة يُعيد توجيه كل الأفعال نحو الهدف',
            en: 'Focus on ending redirects all actions toward the goal'
        },
        difficulty: 'easy'
    }
];
