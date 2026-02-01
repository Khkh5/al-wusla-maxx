// Audio files data from AUDIO folder
export const audioTracks = [
    {
        id: 1,
        title: 'إبداع فوق الوصف - مقام نهاوند',
        artist: 'مصطفى اسماعيل',
        type: 'quran',
        file: '/audio/ابداااع فوق الوصف - مقام نهاوند - مصطفى اسماعيل.mp3'
    },
    {
        id: 2,
        title: 'سورة النجم - أجمل ما سمعت',
        artist: 'الحصري',
        type: 'quran',
        file: '/audio/الحصري سوره النجم .... اجمل ما سمعت فى حياتى.mp3'
    },
    {
        id: 3,
        title: 'سورة الضحى',
        artist: 'نصر الدين طوبار',
        type: 'quran',
        file: '/audio/الضحي من نور من نصر الدين طوبار.mp3'
    },
    {
        id: 4,
        title: 'قصدتك من كل الجهات مناديا',
        artist: 'النقشبندي',
        type: 'ibtihaal',
        file: '/audio/النقشبندي - ابتهال.. قصدتك من كل الجهات مناديا.mp3'
    },
    {
        id: 5,
        title: 'حين يهدي الصبح - سبحت لله',
        artist: 'نصر الدين طوبار',
        type: 'ibtihaal',
        file: '/audio/حين يهدي الصبح- سبحت لله في العش الطيور- نصر الدين طوبار.mp3'
    },
    {
        id: 6,
        title: 'سال دمعي يا إلهي - وليل طويل',
        artist: 'نصر الدين طوبار',
        type: 'ibtihaal',
        file: '/audio/سال دمعي يا إلهي - وليل طويل - الشيخ نصر الدين طوبار - خشوع واحساس يبكي الحجر.mp3'
    },
    {
        id: 7,
        title: 'فكم لله من لطف خفي',
        artist: 'محمد عمران',
        type: 'ibtihaal',
        file: '/audio/فكم لله من لطف خفي إبتهال للشيخ محمد عمران.mp3'
    },
    {
        id: 8,
        title: 'يا مؤنسي في وحدتي',
        artist: 'نصر الدين طوبار',
        type: 'ibtihaal',
        file: '/audio/يا مؤنسي في وحدتي..يا منقذي في شدتي....ابتهال نص الليل نصر الدين طوبار.mp3'
    }
];

// Hadith collection - 40 selected ahadith
export const hadithCollection = [
    {
        id: 1,
        arabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
        english: 'Actions are judged by intentions, and everyone will get what they intended.',
        source: 'البخاري ومسلم',
        category: 'نية'
    },
    {
        id: 2,
        arabic: 'الصِّيَامُ جُنَّةٌ، فَإِذَا كَانَ يَوْمُ صَوْمِ أَحَدِكُمْ فَلَا يَرْفُثْ وَلَا يَصْخَبْ',
        english: 'Fasting is a shield. When any of you is fasting, he should not use foul language or raise his voice.',
        source: 'البخاري',
        category: 'صيام'
    },
    {
        id: 3,
        arabic: 'مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        english: 'Whoever prays during the nights of Ramadan with faith and seeking reward, his previous sins will be forgiven.',
        source: 'البخاري ومسلم',
        category: 'قيام'
    },
    {
        id: 4,
        arabic: 'إِذَا جَاءَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ النَّارِ وَصُفِّدَتِ الشَّيَاطِينُ',
        english: 'When Ramadan comes, the gates of Paradise are opened and the gates of Hell are closed, and the devils are chained.',
        source: 'البخاري ومسلم',
        category: 'رمضان'
    },
    {
        id: 5,
        arabic: 'سَبْعَةٌ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لَا ظِلَّ إِلَّا ظِلُّهُ',
        english: 'Seven people will be shaded by Allah under His shade on the day when there will be no shade but His.',
        source: 'البخاري ومسلم',
        category: 'يوم القيامة'
    },
    {
        id: 6,
        arabic: 'مَنْ صَامَ رَمَضَانَ ثُمَّ أَتْبَعَهُ سِتًّا مِنْ شَوَّالٍ كَانَ كَصِيَامِ الدَّهْرِ',
        english: 'Whoever fasts Ramadan then follows it with six days of Shawwal, it is as if he fasted for a lifetime.',
        source: 'مسلم',
        category: 'صيام'
    },
    {
        id: 7,
        arabic: 'تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً',
        english: 'Take Suhoor, for indeed there is blessing in Suhoor.',
        source: 'البخاري ومسلم',
        category: 'صيام'
    },
    {
        id: 8,
        arabic: 'لِلصَّائِمِ فَرْحَتَانِ يَفْرَحُهُمَا: إِذَا أَفْطَرَ فَرِحَ بِفِطْرِهِ، وَإِذَا لَقِيَ رَبَّهُ فَرِحَ بِصَوْمِهِ',
        english: 'The fasting person has two occasions of joy: when he breaks his fast, and when he meets his Lord.',
        source: 'البخاري ومسلم',
        category: 'صيام'
    },
    {
        id: 9,
        arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
        english: 'The best of you are those who learn the Quran and teach it.',
        source: 'البخاري',
        category: 'قرآن'
    },
    {
        id: 10,
        arabic: 'اقْرَؤُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ',
        english: 'Read the Quran, for it will come as an intercessor for its companions on the Day of Resurrection.',
        source: 'مسلم',
        category: 'قرآن'
    },
    {
        id: 11,
        arabic: 'مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ، وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا',
        english: 'Whoever reads a letter from the Book of Allah will have a good deed for it, and each good deed is multiplied by ten.',
        source: 'الترمذي',
        category: 'قرآن'
    },
    {
        id: 12,
        arabic: 'الدُّعَاءُ هُوَ الْعِبَادَةُ',
        english: 'Dua (supplication) is the essence of worship.',
        source: 'الترمذي',
        category: 'دعاء'
    },
    {
        id: 13,
        arabic: 'ثَلَاثُ دَعَوَاتٍ مُسْتَجَابَاتٌ لَا شَكَّ فِيهِنَّ: دَعْوَةُ الْمَظْلُومِ، وَدَعْوَةُ الْمُسَافِرِ، وَدَعْوَةُ الْوَالِدِ لِوَلَدِهِ',
        english: 'Three supplications are answered without doubt: the supplication of the oppressed, the traveler, and the parent for their child.',
        source: 'الترمذي',
        category: 'دعاء'
    },
    {
        id: 14,
        arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
        english: 'None of you truly believes until he loves for his brother what he loves for himself.',
        source: 'البخاري ومسلم',
        category: 'أخلاق'
    },
    {
        id: 15,
        arabic: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
        english: 'A Muslim is one from whose tongue and hand other Muslims are safe.',
        source: 'البخاري ومسلم',
        category: 'أخلاق'
    },
    {
        id: 16,
        arabic: 'الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ',
        english: 'A good word is charity.',
        source: 'البخاري ومسلم',
        category: 'صدقة'
    },
    {
        id: 17,
        arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ',
        english: 'Smiling at your brother is charity.',
        source: 'الترمذي',
        category: 'صدقة'
    },
    {
        id: 18,
        arabic: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ',
        english: 'Fear Allah wherever you are, follow a bad deed with a good one to erase it, and treat people with good character.',
        source: 'الترمذي',
        category: 'أخلاق'
    },
    {
        id: 19,
        arabic: 'إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الْأَمْرِ كُلِّهِ',
        english: 'Allah is gentle and loves gentleness in all matters.',
        source: 'البخاري ومسلم',
        category: 'أخلاق'
    },
    {
        id: 20,
        arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
        english: 'Whoever believes in Allah and the Last Day should speak good or remain silent.',
        source: 'البخاري ومسلم',
        category: 'أخلاق'
    }
];

// Expert Suggestions for Ramadan
export const expertSuggestions = {
    fasting: [
        {
            id: 1,
            titleAr: 'تأخير السحور',
            titleEn: 'Delay Suhoor',
            descriptionAr: 'من السنة تأخير السحور إلى قبيل الفجر للحصول على أكبر قدر من الطاقة',
            descriptionEn: 'It is Sunnah to delay Suhoor until just before Fajr to get maximum energy',
            source: 'سنة نبوية'
        },
        {
            id: 2,
            titleAr: 'تعجيل الإفطار',
            titleEn: 'Hasten Iftar',
            descriptionAr: 'من السنة تعجيل الإفطار فور أذان المغرب',
            descriptionEn: 'It is Sunnah to break your fast immediately at Maghrib',
            source: 'سنة نبوية'
        },
        {
            id: 3,
            titleAr: 'الإفطار على تمر',
            titleEn: 'Break Fast with Dates',
            descriptionAr: 'ابدأ إفطارك بتمرات ثم ماء - هذا يحضر معدتك للطعام',
            descriptionEn: 'Start Iftar with dates then water - this prepares your stomach for food',
            source: 'سنة نبوية + علم حديث'
        }
    ],
    prayer: [
        {
            id: 1,
            titleAr: 'صلاة الفجر في جماعة',
            titleEn: 'Fajr in Congregation',
            descriptionAr: 'صلاة الفجر في جماعة تعدل قيام نصف الليل',
            descriptionEn: 'Fajr prayer in congregation equals praying half the night',
            source: 'مسلم'
        },
        {
            id: 2,
            titleAr: 'ركعتا الفجر',
            titleEn: 'Two Rakahs of Fajr',
            descriptionAr: 'ركعتا الفجر خير من الدنيا وما فيها',
            descriptionEn: 'The two rakahs of Fajr are better than the world and all that is in it',
            source: 'مسلم'
        }
    ],
    quran: [
        {
            id: 1,
            titleAr: 'ورد يومي',
            titleEn: 'Daily Portion',
            descriptionAr: 'لختم القرآن في رمضان: اقرأ 4 صفحات بعد كل صلاة',
            descriptionEn: 'To complete Quran in Ramadan: read 4 pages after each prayer',
            source: 'نصيحة علمية'
        },
        {
            id: 2,
            titleAr: 'وقت القرآن',
            titleEn: 'Best Time for Quran',
            descriptionAr: 'أفضل أوقات القراءة: بعد الفجر وقبل النوم',
            descriptionEn: 'Best reading times: after Fajr and before sleep',
            source: 'نصيحة علمية'
        }
    ],
    health: [
        {
            id: 1,
            titleAr: 'شرب الماء',
            titleEn: 'Water Intake',
            descriptionAr: 'اشرب 8 أكواب ماء بين الإفطار والسحور موزعة',
            descriptionEn: 'Drink 8 glasses of water spread between Iftar and Suhoor',
            source: 'نصيحة طبية'
        },
        {
            id: 2,
            titleAr: 'القيلولة',
            titleEn: 'Qailulah Nap',
            descriptionAr: 'قيلولة 20-30 دقيقة بعد الظهر تعوض نقص النوم',
            descriptionEn: '20-30 min nap after Dhuhr compensates for sleep deficit',
            source: 'سنة نبوية + علم'
        },
        {
            id: 3,
            titleAr: 'تجنب الكافيين',
            titleEn: 'Avoid Caffeine',
            descriptionAr: 'تجنب القهوة والشاي في السحور لأنها مدرة للبول',
            descriptionEn: 'Avoid coffee and tea at Suhoor as they are diuretics',
            source: 'نصيحة طبية'
        }
    ]
};

// PDF files paths
export const pdfResources = {
    quran: '/The_Holy_Quran.pdf',
    tafsir: '/التفسير الميسر_73731_Foulabook.com_.pdf',
    hadith: '/الأحاديث_الصحيحة_مرتبة_على.pdf'
};

// ========== CYBER-ISLAMIC SLANG (20 Terms) ==========
export const cyberIslamicSlang = {
    'Dunya-Lag': { ar: 'لاق دنيوي (مشتت بالدنيا)', en: 'Distracted by worldly matters' },
    'Night-Ops': { ar: 'عمليات ليلية (قيام الليل)', en: 'Tahajjud/Night Prayer' },
    'Shield-Wall': { ar: 'جدار الدرع (دعاء جماعي)', en: 'Collective Dua' },
    'Ping': { ar: 'إشارة (صلِّ على النبي)', en: 'Send Salawat' },
    'Echo': { ar: 'صدى (آمين)', en: 'Ameen' },
    'Noor-Out': { ar: 'خروج نوراني (إغلاق للعبادة)', en: 'Closing phone to worship' },
    'Glitching': { ar: 'يُجلّج (ارتكاب ذنوب)', en: 'Committing sins/weakness' },
    'Patching': { ar: 'تحميل التحديث (استغفار)', en: 'Istighfar/Repentance' },
    'Off-World': { ar: 'خارج الكوكب (خلوة)', en: 'In retreat/seclusion' },
    'Zero-Point': { ar: 'نقطة الصفر (وقت الإفطار)', en: 'Iftar time' },
    'Hasanat-Farming': { ar: 'زراعة الحسنات (ذكر مكثف)', en: 'Intensive Dhikr' },
    'Bio-Break': { ar: 'استراحة بيولوجية (وضوء)', en: 'Wudu break' },
    'Shadow-Work': { ar: 'عمل الظل (صدقة السر)', en: 'Secret charity' },
    'Sync': { ar: 'مزامنة (صلاة الجماعة)', en: 'Praying in congregation' },
    'Source-Code': { ar: 'الكود المصدري (القرآن)', en: 'The Quran' },
    'The-Hacker': { ar: 'الهكر (الشيطان)', en: 'Shaytan/Devil' },
    'Amir': { ar: 'الأمير (قائد المجموعة)', en: 'Group Admin/Leader' },
    'Traveler': { ar: 'عابر سبيل (أخ في الله)', en: 'Brother/Sister in faith' },
    'Rayyan-Run': { ar: 'سباق الريان (اجتهاد رمضان)', en: 'Ramadan final push' },
    'Base': { ar: 'القاعدة (الجنة)', en: 'Paradise/Jannah' }
};

// ========== 40 THINGS TO AVOID (STRESS TEST) ==========
export const thingsToAvoid = {
    spiritual: [
        { ar: 'الرياء الخفي - مشاركة العبادة للتفاخر', en: 'Hidden showing off - sharing worship for fame' },
        { ar: 'العجب - الشعور بالتفوق', en: 'Self-admiration - feeling superior' },
        { ar: 'القنوط - الشعور بضياع رمضان', en: 'Despair - feeling Ramadan is wasted' },
        { ar: 'التسويف - سأقرأ بعد قليل', en: 'Procrastination - "I\'ll read later"' },
        { ar: 'البدعة - نشر أدعية غير مأثورة', en: 'Innovation - spreading fabricated duas' },
        { ar: 'هجر القرآن - الاستماع فقط', en: 'Abandoning Quran - only listening' },
        { ar: 'السرعة - القراءة بلا تدبر', en: 'Rushing - reading without reflection' },
        { ar: 'الدعاء الآلي - بلا حضور قلب', en: 'Mechanical dua - no heart presence' },
        { ar: 'المنّ - تذكير الناس بصدقتك', en: 'Reminding people of your charity' },
        { ar: 'الأمن من المكر - ظن ضمان الجنة', en: 'False security - assuming guaranteed paradise' }
    ],
    social: [
        { ar: 'الغيبة الرقمية في الشات', en: 'Digital backbiting in chats' },
        { ar: 'الجدال الفقهي العقيم', en: 'Pointless religious debates' },
        { ar: 'إضاعة الوقت في الكلام المباح', en: 'Wasting time on idle talk' },
        { ar: 'المقارنة والحسد من Leaderboard', en: 'Envy from seeing leaderboards' },
        { ar: 'الاختلاط غير الشرعي', en: 'Inappropriate mixing' },
        { ar: 'نشر الإشاعات', en: 'Spreading rumors' },
        { ar: 'جرح المشاعر بالمزاح', en: 'Hurting feelings with jokes' },
        { ar: 'العزلة التامة عن الأهل', en: 'Total isolation from family' },
        { ar: 'التطفل على عبادة الآخرين', en: 'Prying into others\' worship' },
        { ar: 'نشر صور طعام باذخ', en: 'Posting extravagant food photos' }
    ],
    health: [
        { ar: 'تخمة الإفطار', en: 'Overeating at Iftar' },
        { ar: 'الجفاف - نسيان الماء', en: 'Dehydration - forgetting water' },
        { ar: 'سهر الغفلة', en: 'Staying up for nothing' },
        { ar: 'نوم النهار كاملاً', en: 'Sleeping all day' },
        { ar: 'إدمان الكافيين', en: 'Caffeine addiction' },
        { ar: 'الخمول الحركي', en: 'Physical inactivity' },
        { ar: 'الغضب من الجوع', en: 'Anger from hunger' },
        { ar: 'تجاهل السحور', en: 'Skipping Suhoor' },
        { ar: 'إهمال الدواء', en: 'Neglecting medication' },
        { ar: 'تلوث العين', en: 'Eye pollution (haram content)' }
    ],
    technical: [
        { ar: 'رنين الهاتف في المسجد', en: 'Phone ringing in mosque' },
        { ar: 'استنزاف البطارية', en: 'Battery drain during reading' },
        { ar: 'الاعتماد على توقيت عام', en: 'Using generic prayer times' },
        { ar: 'الإشعارات الليلية المزعجة', en: 'Disturbing night notifications' },
        { ar: 'التشتت البصري', en: 'Visual distraction' },
        { ar: 'فقدان البيانات', en: 'Data loss' },
        { ar: 'تعقيد الواجهة', en: 'Complex interface' },
        { ar: 'حجم التطبيق الكبير', en: 'Large app size' },
        { ar: 'الإعلانات المزعجة', en: 'Annoying ads' },
        { ar: 'الجمود وعدم التحديث', en: 'Stagnation - no updates' }
    ]
};

// ========== FOURTH WALL BREAKS ==========
export const fourthWallBreaks = [
    {
        id: 'compassionate-glitch',
        trigger: 'Opens app 5+ times in 1 minute',
        titleAr: 'المقاطعة الرحيمة',
        titleEn: 'The Compassionate Glitch',
        messageAr: 'أنا مجرد تطبيق، لا أملك لك نفعاً ولا ضراً. أنت تبحث عن شيء لا يمكن للهاتف أن يعطيك إياه. أغلقني، وتوضأ. الحل هناك، ليس هنا.',
        messageEn: 'I am just an app, I cannot benefit or harm you. You are searching for something no phone can give. Close me, and make wudu. The answer is there, not here.'
    },
    {
        id: 'witness-check',
        trigger: 'After completing a major milestone',
        titleAr: 'تذكير الشهود',
        titleEn: 'The Witnesses Reality Check',
        messageAr: 'أنا سجلت هذا في قاعدة بيانات (Cloud). ولكن، هناك من سجلها في كتاب لا يغادر صغيرة ولا كبيرة. لا تعتمد على توثيقي، اعتمد على توثيق الملائكة. هل كان قلبك حاضراً؟',
        messageEn: 'I recorded this in the Cloud. But there is One who records in a Book that misses nothing. Don\'t rely on my documentation, rely on the angels\'. Was your heart present?'
    },
    {
        id: 'autopilot-breaker',
        trigger: 'Scrolling too fast through content',
        titleAr: 'كاشف الغفلة',
        titleEn: 'The Autopilot Breaker',
        messageAr: 'لماذا تجري؟ هذه ليست تغريدات، هذا كلام النبوة. كل حرف هنا وزنه أثقل من جبل أُحد. خذ نفساً.. واقرأ بقلبك.',
        messageEn: 'Why are you rushing? These are not tweets, this is Prophetic wisdom. Every letter here outweighs Mount Uhud. Take a breath... and read with your heart.'
    },
    {
        id: 'vip-hour',
        trigger: 'Opens app between 2:00-3:30 AM',
        titleAr: 'تنبيه الساعة الذهبية',
        titleEn: 'The VIP Hour Whisper',
        messageAr: 'المدينة كلها نائمة. الملايين في غفلة. الله اختارك أنت لتستيقظ الآن. هذه ليست صدفة، هذه دعوة خاصة. هل ستقبلها أم تعود للنوم؟',
        messageEn: 'The whole city is asleep. Millions are heedless. Allah chose YOU to wake up now. This is no coincidence, this is a special invitation. Will you accept it or go back to sleep?'
    },
    {
        id: 'memento-mori',
        trigger: 'Last night of Ramadan',
        titleAr: 'الوداع الأخير',
        titleEn: 'The Memento Mori Exit',
        messageAr: 'رمضان انتهى. أنا سأبقى في هاتفك كأيقونة صامتة حتى العام القادم.. إن كنا من الأحياء. ولكن ماذا عنك؟ هل تضمن أن تفتحني في رمضان القادم؟ هذه الصحيفة طويت، فاجعل الختام مسكاً.',
        messageEn: 'Ramadan is over. I will remain in your phone as a silent icon until next year... if we are among the living. But what about you? Do you guarantee you will open me next Ramadan? This chapter is closed. Make its ending a fragrant one.'
    }
];

// ========== ANGEL VS DEVIL INTERFACE ==========
export const angelDevilScenarios = [
    {
        id: 'taraweeh-laziness',
        scenarioAr: 'تشعر بالكسل عن التراويح',
        scenarioEn: 'Feeling lazy about Taraweeh',
        devil: {
            ar: 'يا رجل، قدمك تؤلمك. صليت أمس. الإمام اليوم يطيل القراءة. ارتح قليلاً وشاهد المسلسل، الله غفور رحيم.',
            en: 'Come on, your feet hurt. You prayed yesterday. The Imam recites too long. Rest a bit and watch a show, Allah is Forgiving.'
        },
        angel: {
            ar: 'الألم يذهب والأجر يبقى. هذه الركعة قد تكون هي المنجية. هل تبيع الجنة بحلقة مسلسل؟ قم الآن.',
            en: 'Pain fades but reward remains. This rakah might be THE one that saves you. Will you sell Jannah for a TV episode? Get up NOW.'
        }
    },
    {
        id: 'suhoor-skip',
        scenarioAr: 'تريد تخطي السحور',
        scenarioEn: 'Want to skip Suhoor',
        devil: {
            ar: 'النوم لذيذ.. اشرب ماء فقط ونم. ستتحمل الصيام.',
            en: 'Sleep is sweet.. just drink water and sleep. You\'ll manage the fast.'
        },
        angel: {
            ar: 'تسحروا فإن في السحور بركة. تمرة واحدة تفرق بين صيام المؤمن وغيره.',
            en: 'Take Suhoor for in it there is blessing. One date makes the difference between a believer\'s fast and others.'
        }
    },
    {
        id: 'charity-delay',
        scenarioAr: 'تتردد في الصدقة',
        scenarioEn: 'Hesitating to give charity',
        devil: {
            ar: 'ستحتاج هذا المال للعيد. الأسعار غالية. تصدق الشهر القادم.',
            en: 'You\'ll need this money for Eid. Prices are high. Give charity next month.'
        },
        angel: {
            ar: 'ما نقص مال من صدقة. الدرهم الذي تخرجه هو الوحيد الذي سيبقى لك.',
            en: 'Charity never decreases wealth. The dirham you give is the only one that will remain for you.'
        }
    },
    {
        id: 'anger-fasting',
        scenarioAr: 'أحد أغضبك وأنت صائم',
        scenarioEn: 'Someone angered you while fasting',
        devil: {
            ar: 'أهان كرامتك! رد عليه الكلمة بعشرة! الصيام لا يمنع الدفاع عن النفس.',
            en: 'He insulted your honor! Reply with ten words for every one! Fasting doesn\'t prevent self-defense.'
        },
        angel: {
            ar: 'إني صائم. إني صائم. القوة هي أن تملك نفسك الآن. العفو عند المقدرة.',
            en: 'I am fasting. I am fasting. True strength is controlling yourself now. Pardon when you have power.'
        }
    }
];

// ========== KHATMAH CHALLENGE (30 Days) ==========
export const khatmahPlan = {
    totalPages: 604,
    dailyPages: 20, // ~20 pages per day for 30 days
    juzPerDay: 1, // 1 Juz per day ideally
    milestones: [
        { day: 5, juz: 5, reward: 'شارة البداية القوية', rewardEn: 'Strong Start Badge' },
        { day: 10, juz: 10, reward: 'شارة الثلث الأول', rewardEn: 'First Third Badge' },
        { day: 15, juz: 15, reward: 'شارة منتصف الطريق', rewardEn: 'Halfway Badge' },
        { day: 20, juz: 20, reward: 'شارة الثلثين', rewardEn: 'Two-Thirds Badge' },
        { day: 27, juz: 27, reward: 'شارة ليلة القدر', rewardEn: 'Laylatul Qadr Badge' },
        { day: 30, juz: 30, reward: 'شارة الخاتم - ختمة كاملة!', rewardEn: 'Khatmah Complete Badge!' }
    ]
};

// ========== STREAKS SYSTEM ==========
export const streakTypes = {
    fajr: {
        nameAr: 'سلسلة الفجر',
        nameEn: 'Dawn Warrior',
        icon: '🌅',
        multiplier: 2 // Double points for maintaining
    },
    taraweeh: {
        nameAr: 'سلسلة التراويح',
        nameEn: 'Night Prayer Chain',
        icon: '🌙',
        multiplier: 1.5
    },
    quran: {
        nameAr: 'سلسلة القرآن',
        nameEn: 'Quran Reading Chain',
        icon: '📖',
        multiplier: 1.5
    },
    dhikr: {
        nameAr: 'سلسلة الأذكار',
        nameEn: 'Dhikr Chain',
        icon: '📿',
        multiplier: 1
    }
};

// ========== VISUAL THEMES (20) ==========
export const appThemes = [
    { id: 'taqwa-teal', name: 'Taqwa Teal', primary: '#008080', secondary: '#d4af37' },
    { id: 'cyber-medina', name: 'Cyber Medina', primary: '#00ff88', secondary: '#1a1a2e' },
    { id: 'kaaba-gold', name: 'Kaaba Gold', primary: '#d4af37', secondary: '#000000' },
    { id: 'andalusian-sun', name: 'Andalusian Sun', primary: '#ff6b35', secondary: '#8b4513' },
    { id: 'cave-hira', name: 'Cave of Hira', primary: '#6b6b6b', secondary: '#3a3a3a' },
    { id: 'red-sea', name: 'Red Sea Split', primary: '#006994', secondary: '#4dc0d4' },
    { id: 'dome-rock', name: 'Dome of the Rock', primary: '#c9a227', secondary: '#1e3a5f' },
    { id: 'ottoman-tulip', name: 'Ottoman Tulip', primary: '#9b5de5', secondary: '#3c096c' },
    { id: 'desert-night', name: 'Desert Night', primary: '#0a1128', secondary: '#fafafa' },
    { id: 'fajr-gradient', name: 'Fajr Gradient', primary: '#667eea', secondary: '#f472b6' },
    { id: 'old-parchment', name: 'Old Parchment', primary: '#c4a35a', secondary: '#3d2b1f' },
    { id: 'olive-branch', name: 'Olive Branch', primary: '#556b2f', secondary: '#2f4f4f' },
    { id: 'damascus-jasmine', name: 'Damascus Jasmine', primary: '#ffffff', secondary: '#e8f5e9' },
    { id: 'uhud-dust', name: 'Uhud Dust', primary: '#c2b280', secondary: '#8b7355' },
    { id: 'electric-tasbih', name: 'Electric Tasbih', primary: '#00ffff', secondary: '#ff00ff' },
    { id: 'mamluk-glass', name: 'Mamluk Glass', primary: '#4a90d9', secondary: '#ff6b6b' },
    { id: 'ink-qalam', name: 'Ink & Qalam', primary: '#000000', secondary: '#ffffff' },
    { id: 'samarkand-blue', name: 'Samarkand Blue', primary: '#00ced1', secondary: '#20b2aa' },
    { id: 'oasis-mirage', name: 'Oasis Mirage', primary: '#48d1cc', secondary: '#f0e68c' },
    { id: 'eid-sparkle', name: 'Eid Sparkle', primary: '#ffd700', secondary: '#ff69b4' }
];
