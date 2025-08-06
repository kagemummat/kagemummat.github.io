document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    // Halaman 1
    [
      {
        translation: "Bacaan Tahlil",
      },
      {
        arabic:
          "إِلَى حَضْرَةِ النَّبِيِّ الْمُصْطَفَى سَيِّدِنَا مُحمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَاٰلِهِ وَأَزْوَاجِهِ وَأَوْلَادِهِ وَذُرِّيَّاتِهِ الْفَــاتِحَةُ",
        latin:
          "Ila ḫadlratin-nabiyyil-musthafâ sayyidinâ Muḫammadin shallallahu ‘alaihi wa sallama wa âlihi wa azwâjihi wa awlâdihi wa dzurriyyâtihi al-fâtiḫah",
        translation:
          "Kepada yang terhormat Nabi Muhammad ﷺ, segenap keluarga, istri-istrinya, anak-anaknya, dan keturunannya. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah…",
      },
      {
        arabic:
          "ثُمَّ إِلَى حَضْرَةِ إِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمَلَائِكَةِ الْمُقَرَّبِيْنَ، خُصُوْصًا إِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجِيْلَانِي وَخُصُوْصًا إِلَى مُؤَسِّسِيْ جَمْعِيَّةِ نَهْضَةِ الْعُلَمَاءِ الْفَــاتِحَةُ",
        latin:
          "Tsumma ilâ ḫadlrati ikhwânihi minal-anbiya’i wal-mursalîn wal-auliya’i wasy-syuhadâ’i wash-shâlihîn wash-shaḫâbati wat tâbi‘în wal-‘ulamâ’il-‘âmilîn wal-mushannifînal-mukhlishîn wa jamî‘il-malâikatil-muqarrabîn, khusûshan ilâ sayyidinâsy-syaikh ‘abdil qâdir al-jîlânî wa khushûshan ilâ muassisî jam‘iyyah Nahdlatil Ulama, al-fâtiḫah",
        translation:
          "Lalu kepada segenap saudara beliau dari kalangan pada nabi, rasul, wali, syuhada, orang-orang saleh, sahabat, tabi‘in, ulama al-amilin (yang mengamalkan ilmunya), ulama penulis yang ikhlas, semua malaikat Muqarrabin, terkhusus kepada Syekh Abdul Qadir al-Jilani dan para pendiri organisasi Nahdlatul Ulama. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah.",
      },
      {
        arabic:
          "ثُمَّ إِلَى جَمِيْعِ أَهْلِ الْقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْأَرْضِ إِلَى مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا إِلَى اٰبَائِنَا وَأُمَّهَاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا وَمَشَايِخِنَا وَمَشَايِخِ مَشَايِخِنَا وَأَسَاتِذَةِ أَسَاتِذَتِنَا وَلِمَنْ أَحْسَنَ إِلَيْنَا وَلِمَنِ اجْتَمَعْنَا هٰهُنَا بِسَبَبِهِ الْفَاتِحَةُ",
        latin:
          "Tsumma ilâ jamî‘i ahlil-qubûri minal-muslimîna wal-muslimâti wal-mu’minîna wal-mu’minâti min masyâriqil-ardli ilâ maghâribihâ barrihâ wa baḫrihâ khushushan ilâ abâ’inâ wa ummahâtinâ wa ajdâdinâ wa jaddâtina wa masyâkhinâ wa masyâyikhi masyâyikhinâ wa asâtidzati asâtidzatinâ wa liman aḫsana ilainâ wa liman ijtama‘nâ hâhunâ bisababihi, al-fâtiḫah",
        translation:
          "Kemudian kepada semua ahli kubur Muslimin, Muslimat, Mukminin, Mukminat dari Timur ke Barat, baik di laut dan di darat, khususnya bapak kami, ibu kami, kakek kami, nenek kami, guru kami, pengajar dari guru kami, mereka yang telah berbuat baik kepada kami, dan bagi ahli kubur/arwah yang menjadi sebab kami berkumpul di sini. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah.",
      },
      {
        arabic:
          "ثُمَّ إِلَى جَمِيْعِ أهْلِ الْقُبُوْرِ مِمَّنْ ذُكِرَتْ أَسْمَاؤُهُ فِيْ هٰذِهِ الرِّسَالَةِ حَضْرَةِ رُوْحِ … وَحَضْرَةِ رُوْحِ … وَحَضْرَةِ رُوْحِ … رَحِمَهُمُ اللهُ وَغَفَرَهُمْ، الْفَاتِحَةُ",
        latin:
          "Tsumma ilâ jamî‘i ahlil-qubûri mimman dzukirot asmâ’uhu fi hâdzihir risâlati, ḫadlrati rûhi…, wa ḫadlrati rûhi…, wa ḫadlrati rûhi…, roḫimahumullâhu wa ghafarahum, al-fâtiḫah",
        translation:
          "Kemudian kepada semua ahli kubur, yang namanya disebutkan dalam risalah ini. Kepada…, dan kepada…, dan kepada…. Semoga Allah merahmati dan mengampuni mereka. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah.",
      },
      {
        arabic:
          "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ قُلْ هُوَ اللّٰهُ اَحَدٌۚ، اَللّٰهُ الصَّمَدُۚ، لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ، وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَـــــدٌ ×٣",
        latin:
          "Bismillâhir-raḫmânir-raḫîm(i), Qul huwallâhu aḫad, Allâhush-shamad, lam yalid wa lam yûlad, wa lam yakul lahû kufuwan aḫad 3x",
        translation:
          "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah (Muhammad), “Dialah Allah, Yang Maha Esa. Allah tempat meminta segala sesuatu. (Allah) tidak beranak dan tidak pula diperanakkan. Dan tidak ada sesuatu yang setara dengan Dia.” (3 kali).",
      },
      {
        arabic: "لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ",
        latin: "Lâ ilâha illallâhu wallâhu akbar",
        translation:
          "Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar.",
      },
      {
        arabic:
          "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ، مِنْ شَرِّ مَـــا خَلَقَۙ، وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ، وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ، وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ",
        latin:
          "Bismillâhir-raḫmânir-raḫîm(i), Qul a‘udzu bi rabbil-falaq, min syarri mâ khalaq, wa min syarri ghâsiqin idzâ waqab, wa min syarrin-naffâtsâti fîl-‘uqad, wa min syarri ḫâsidin idzâ ḫasad",
        translation:
          "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, “Aku berlindung kepada Tuhan yang menguasai subuh (fajar), dari kejahatan (makhluk yang) Dia ciptakan, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya), dan dari kejahatan orang yang dengki apabila dia dengki.”",
      },
      {
        arabic: "لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ",
        latin: "Lâ ilâha illallâhu wallâhu akbar",
        translation:
          "Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar.",
      },
      {
        arabic:
          "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ، مَلِكِ النَّـــاسِۙ، اِلٰهِ النَّاسِۙ، مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ، الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ، مِنَ الْجِنَّةِ وَالنَّــاسِ",
        latin:
          "Bismillâhir-raḫmânir-raḫîm(i), Qul a‘udzû bi rabbin-nâs, malikin-nâs, ilahin-nâs, min syarril-waswâsil khannâs, alladzi yuwaswisu fî shudûrin-nâs, minal-jinnati wan-nâs.",
        translation:
          "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, “Aku berlindung kepada Tuhannya manusia, raja manusia, sembahan manusia, dari kejahatan (bisikan) setan yang bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari (golongan) jin dan manusia.”",
      },
      {
        arabic: "لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ",
        latin: "Lâ ilâha illallâhu wa Allâhu Akbar",
        translation:
          "Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar.",
      },
      {
        arabic:
          "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ، اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ، الرَّحْمٰنِ الرَّحِيْمِۙ، مٰلِكِ يَوْمِ الدِّيْنِۗ، اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ، اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ، صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
        latin:
          "Bismillâhir-raḫmânir-raḫîm(i), al-ḫamdu lillâhi rabbil-‘âlamîn, Ar-raḫmânir-raḫîm, mâliki yaumid-dîn, iyyâka na‘budu wa iyyâka nasta‘în, ihdinâsh-shirâthal-mustaqîm, shirâtal ladzîna an‘amta ‘alaihim ghairil-maghdhlûbi ‘alaihim wa lâdl-dlâllîn. Âmîn",
        translation:
          "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang maha pengasih lagi maha penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah. Hanya kepada-Mu pula kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus, yaitu jalan orang-orang yang telah Kauanugerahi nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Semoga Kaukabulkan permohonan kami.",
      },
      {
        arabic:
          "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ، الۤــــــمّۤۚ، ذٰلِكَ الْكِتٰبُ لَا رَيْبَۛ فِيْهِۛ هُدًى لِّلْمُتَّقِيْنَۙ، الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَۙ، وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَۗ، اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْۙ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ",
        latin:
          "Bismillâhir-rahmânir-rahîm(i), Alif Lâm Mîm, dzâlikal-kitâbu lâ raiba fîhi, hudal-lilmuttaqîn, al-ladzîna yu’minûna bil-ghaibi wa yuqîmûnash-shalâta wa mimmâ razaqnâhum yunfiqûn, wal-ladzîna yu’minûna bimâ unzila ilaika wa mâ unzila min qablika, wa bil-âkhirati hum yûqinûn, ulâ’ika ‘alâ hudam mir rabbihim wa ulâ’ika humul-mufliḫûn.",
        translation:
          "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Alif lam mim. Demikian itu kitab ini tidak ada keraguan padanya. Sebagai petunjuk bagi mereka yang bertakwa. Yaitu mereka yang beriman kepada yang ghaib, yang mendirikan shalat, dan menafkahkan sebagian rezeki yang kami anugerahkan kepada mereka. Dan mereka yang beriman kepada kitab Al-Qur’an yang telah diturunkan kepadamu (Muhammad ﷺ) dan kitab-kitab yang telah diturunkan sebelumnya, serta mereka yakin akan adanya kehidupan akhirat. Mereka itulah yang tetap mendapat petunjuk dari tuhannya. Merekalah orang orang yang beruntung.",
      },
      {
        arabic:
          "وَإِلٰهُكُمْ إِلٰهٌ وَّاحِدٌ لَا إِلٰهَ إِلَّا هُوَ الرَّحْمٰنُ الرَّحِيمُ",
        latin: "Wa ilâhukum ilâhuw wâḫidul lâ ilâha illa Huwar-raḫmânur-raḫîm.",
        translation:
          "Dan Tuhan kalian adalah Tuhan yang maha esa. Tiada tuhan yang layak disembah kecuali Dia yang maha pengasih lagi maha penyayang.",
      },
      {
        arabic:
          "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ",
        latin:
          "Allahu lâ ilâha illa huwal-ḫayyul-qayyûm(u). Lâ ta’khudzuhû sinatuw wa lâ naûm(u). Lahû mâ fis-samâwâti wa mâ fil-ardl. Man dzal ladzî yasyfa’u ‘indahû illâ bi idznih(i). Ya’lamu mâ baina aidîhim wa mâ khalfahum. Wa lâ yuḫithûna bi syai’in min ‘ilmihî illâ bimâ syâ’a wasi’a kursiyyuhus-samawâti wal-ardl. Wa lâ ya’ûduhu ḫifdhuhumâ wahuwal-‘aliyyul-adhîm.",
        translation:
          "Allah, tiada yang layak disembah kecuali Dia yang hidup kekal lagi berdiri sendiri. Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tiada yang dapat memberikan syafaat di sisi-Nya kecuali dengan izin-Nya. Dia mengetahui apa yang ada di hadapan dan di belakang mereka. Mereka tidak mengetahui sesuatu dari ilmu-Nya kecuali apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat menjaga keduanya. Dia maha tinggi lagi maha agung.",
      },
      {
        arabic:
          "لِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ وَاِنْ تُبْدُوْا مَا فِيْٓ اَنْفُسِكُمْ اَوْ تُخْفُوْهُ يُحَاسِبْكُمْ بِهِ اللّٰهُۗ فَيَغْفِرُ لِمَنْ يَّشَاۤءُ وَيُعَذِّبُ مَنْ يَّشَاۤءُۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ، اٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَۗ كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖۗ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖۗ وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ، لَا يُكَلِّفُ اللّٰهُ نَفْسًا اِلَّا وُسْعَهَاۗ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْۗ رَبَّنَا لَا تُؤَاخِذْنَآ اِنْ نَّسِيْنَآ اَوْ اَخْطَأْنَاۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ اِصْرًا كَمَا حَمَلْتَهٗ عَلَى الَّذِيْنَ مِنْ قَبْلِنَاۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهٖۚ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ×٧ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
        latin:
          "Lillâhi mâ fis-samawâti wa mâ fil-ardli, wa in tubdû mâ fî anfusikum au tukhfûhu yuḫâsibkum bihillah. Fayaghfiru limay yasyâ’u wa yu‘adzdzibu may yasyâ’u. Wallahu ‘alâ kulli syai’in qadîr. Âmanar-rasûlu bimâ unzila ilaihi mir rabbihi wal-mu’minûn(a), kullun âmana billâhi wa malâ’ikatihi wa kutubihi wa rusulih(i). Lâ nufarriqu baina aḫadim mir-rusulihi wa qâlû sami‘nâ wa atha‘nâ gufrânaka rabbanâ wa ilaikal-mashîr. La yukallifullâhu nafsan illâ wus‘ahâ lahâ mâ kasabat wa ‘alaihâ mâk tasabat. Rabbanâ la tu’akhidhnâ in nasînâ au akhtha’na rabbanâ walâ taḫmil alainâ ishran kamâ ḫamaltahu ‘alal-ladzinâ min qablinâ rabbanâ wa lâ tuḫammilnâ mâ lâ thâqata lanâ bihi wa‘fu ‘annâ waghfir lanâ warḫamnâ 7x Anta maulânâ fanshurnâ ‘alal qaumil kâfirîn.",
        translation:
          "Hanya milik Allah segala yang ada di langit dan yang ada di bumi. Jika kamu menyatakan atau merahasiakan apa saja yang di hatimu, maka kamu dengan itu semua tetap akan diperhitungkan oleh Allah. Dia akan mengampuni dan menyiksa orang yang dikehendaki. Allah maha kuasa atas segala sesuatu. Rasulullah dan orang-orang yang beriman mempercayai apa saja yang diturunkan kepadanya dari Tuhannya. Semuanya beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, dan kepada para utusan-Nya. ‘Kami tidak membeda-bedakan seorang rasul dari lainnya.’ Mereka berkata, ‘Kami mendengar dan kami menaati. Ampunan-Mu, wahai Tuhan kami, yang kami harapkan. Hanya kepada-Mu tempat kembali.’ Allah tidak membebani seseorang kecuali dengan kemampuannya. Ia mendapat balasan atas apa yang dia perbuat dan siksaan dari apa yang dia lakukan. ‘Tuhan kami, janganlah Kau siksa kami jika kami terlupa atau salah. Tuhan kami, jangan Kau tanggungkan pada kami dengan beban berat sebagaimana Kaubebankan kaum sebelum kami. Jangan pula Kaubebankan pada kami sesuatu yang kami tidak mampu. Ampunilah kami. Kasihanilah kami. Kau pemimpin kami. Tolonglah kami menghadapi golongan kafir.",
      },
      {
        arabic: "ارْحَمْنَا، يَا أَرْحَمَ الرَّاحِمِيْنَ ×٧",
        latin: "Irḫamnâ yâ arḫamar-râḫimîn 7x",
        translation: "Kasihani kami, wahai Tuhan yang maha kasih (7 kali).",
      },
      {
        arabic:
          "رَحْمَةُ اللهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ إِنَّهُ حَمِيْدٌ مَّجِيْدٌ",
        latin:
          "Raḫmatul-lâhi wa barakâtuhu ‘alaikum ahlal-baiti innahu ḫamîdun majîd",
        translation:
          "Dan rahmat Allah serta berkah-Nya (kami harapkan) melimpah di atas kamu sekalian wahai ahlul bait. Sungguh Dia maha terpuji lagi maha pemurah.",
      },
      {
        arabic:
          "إِنَّمَا يُريِدُ اللهُ لِيُذْهِبَ عَنْكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيْرًا",
        latin:
          "Innamâ yurîdullâhu liyudzhiba ‘ankumur-rijsa ahlal-baiti wa yuthahhira kum tathhîra",
        translation:
          "Sungguh Allah berkehendak menghilangkan segala kotoran padamu, wahai ahlul bait, dan menyucikanmu sebersih-bersihnya.",
      },
      {
        arabic:
          "إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ، يَا أَيُّهَا الَّذِيْنَ أٰمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا",
        latin:
          "Innallâha wa malâ’ikatahu yushallûna ‘alan-nabiyyi yâ ayyuhal-ladzina âmanû shallû ‘alaihi wa sallimû taslîmâ",
        translation:
          "Sungguh Allah dan para malaikat-Nya bershalawat untuk nabi. Wahai orang-orang yang beriman, bacalah shalawat untuknya dan ucapkanlah salam penghormatan kepadanya.",
      },
      {
        arabic:
          "اَللّٰهُمَّ صَلِّ أَفْضَلَ الصَّلَاةِ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ نُوْرِ الْهُدَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ",
        latin:
          "Allâhumma shalli afdlalash-shalâti ‘alâ as‘adi makhlûqôtika nûril-hudâ sayyidinâ Muḫammadin wa ‘alâ âlihi wa shaḫbihi wa sallim, ‘adada ma‘lûmâtika wa midâda kalimâtika kullamâ dzakaradz dzâkirûna wa ghafala ‘an dzikrikal ghâfilûn",
        translation:
          "Ya Allah, tambahkanlah rahmat dan kesejahteraan untuk makhluk paling bahagia, cahaya petunjuk, pemimpin dan tuan kami, Nabi Muhammad ﷺ, serta keluarganya, sebanyak pengetahuan-Mu dan sebanyak tinta kalimat-kalimat-Mu pada saat dzikir orang-orang yang ingat dan pada saat lengah orang-orang yang lalai berzikir kepada-Mu.",
      },
      {
        arabic:
          "اَللّٰهُمَّ صَلِّ أَفْضَلَ الصَّلَاةِ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ شَمْسِ الضُّحَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ",
        latin:
          "Allâhumma shalli afdlalash shalati ‘alâ as‘adi makhlûqôtika syamsidl dluḫâ sayyidinâ Muḫammadin wa ‘alâ âlihi wa shaḫbihi wa sallim, ‘adada ma‘lûmâtika wa midâda kalimâtika kullamâ dzakaradz dzâkirûna wa ghafala ‘an dzikrikal ghâfilûn",
        translation:
          "Ya Allah, tambahkanlah rahmat dan kesejahteraan untuk makhluk paling bahagia, matahari dhuha, pemimpin dan tuan kami, Nabi Muhammad ﷺ, serta keluarganya, sebanyak pengetahuan-Mu dan sebanyak tinta kalimat-kalimat-Mu pada saat dzikir orang-orang yang ingat dan pada saat lengah orang-orang yang lalai berzikir kepada-Mu.",
      },
      {
        arabic:
          "اَللّٰهُمَّ صَلِّ أَفْضَلَ الصَّلَاةِ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ بَدْرِ الدُّجَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ",
        latin:
          "Allâhumma shalli afdlalash-shalati ‘alâ as‘adi makhlûqôtika badrid-dujâ sayyidinâ Muḫammadin wa ‘alâ âlihi wa shaḫbihi wa sallim, ‘adada ma‘lûmâtika wa midâda kalimâtika kullamâ dzakaradz-dzâkirûna wa ghafala ‘an dzikrikal-ghâfilûn",
        translation:
          "Ya Allah, tambahkanlah rahmat dan kesejahteraan untuk makhluk paling bahagia, purnama kegelapan, pemimpin dan tuan kami, Nabi Muhammad ﷺ, serta keluarganya, sebanyak pengetahuan-Mu dan sebanyak tinta kalimat-kalimat-Mu pada saat dzikir orang-orang yang ingat dan pada saat lengah orang-orang yang lalai berzikir kepada-Mu.",
      },
      {
        arabic:
          "وَسَلِّمْ وَرَضِيَ اللهُ تَعَالَى عَنْ سَادَاتِنَا أَصْحَابِ رَسُوْلِ اللهِ أَجْمَعِيْنَ",
        latin:
          "Wa sallim wa radliyallahu ta‘âla ‘an sâdâtinâ ash-ḫabi rasulillah ajma‘în",
        translation:
          "Semoga Allah yang maha suci dan tinggi meridhai seluruh sahabat Rasulullah.",
      },
      {
        arabic:
          "حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ، نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ",
        latin: "Ḫasbunâllâhu wa ni‘mal wakîl, ni‘mal maula w ani‘man nashîr",
        translation:
          "Cukup Allah bagi kami. Dia sebaik-baik wakil (Surat Ali Imran ayat 173). Dia sebaik-baik pemimpin dan penolong (Surat Al-Anfal ayat 40).",
      },
      {
        arabic:
          "وَلَاحَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ الْعَظِيْمِ",
        latin: "Wa lâ ḫaula wa lâ quwwata illâ billâhil ‘aliyyil-‘adhim",
        translation:
          "Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah yang maha tinggi dan agung.",
      },
      {
        arabic: "أَسْتَغْفِرُ اللهَ الْعَـــظِيْمَ ×٣",
        latin: "Astaghfirullâhal-‘adhîm 3 x",
        translation: "Saya mohon ampun kepada Allah yang maha agung (3 kali).",
      },
      {
        arabic:
          "أَفْضَلُ الذِّكْرِ فَاعْلَمْ أَنَّهُ لَا إِلٰهَ إِلَّا اللهُ، حَيٌّ مَوْجُوْدٌ",
        latin:
          "Afdlaludz dzikri fa‘lam annahu lâ ilâha illallâhu ḫayyun maujûd(un)",
        translation:
          "Sebaik-baik dzikir–ketahuilah–adalah lafal ‘Lâ ilâha illallâh’, tiada tuhan selain Allah, Dzat yang Mahahidup dan Wujud.",
      },
      {
        arabic: "لَا إِلٰهَ إِلَّا اللهُ، حَيٌّ مَعْبُوْدٌ",
        latin: "La ilâha illâllâhu ḫayyun ma‘bûd",
        translation:
          "Tiada tuhan selain Allah, Dzat yang mahahidup dan disembah.",
      },
      {
        arabic: "لَاَ إِلٰهَ إِلَّا اللهُ، حَيٌّ بَاقٍ",
        latin: "La ilâha illâllâhu ḫayyun bâq",
        translation: "Tiada tuhan selain Allah, Dzat yang Mahahidup dan kekal.",
      },
      {
        arabic: "لَا إِلٰهَ إِلَّا اللهُ ×١٠٠",
        latin: "La ilâha illallâh 100x",
        translation: "Tiada tuhan selain Allah (100 kali).",
      },
      {
        arabic:
          "اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ اَللّٰهُمَّ صَلِّ عَلَيْهِ وَسَلِّمْ ×٢",
        latin:
          "Allâhumma shalli ‘alâ sayyidinâ Muḫammadin, Allâhumma shalli ‘alaihi wa sallim",
        translation:
          "Ya Allah, limpahkan rahmat takzim dan keselamatan kepada pemimpin kami, Nabi Muhammad (2 kali).",
      },
      {
        arabic: "سُبْحَــانَ اللهِ عَدَدَ مَـــا خَلَقَ اللهُ ×٧",
        latin: "Subḫânallâhi ‘adada mâ khalaqallâhu 7x",
        translation:
          "Mahasuci Allah sebanyak makhluk yang Allah ciptakan (7 kali).",
      },
      {
        arabic: "سُبحَانَ اللهِ وَبِحَمْدِهِ سُبْحَانَ اللهِ الْعَظِيْمِ ×٣٣",
        latin: "Subḫânallâhi wa biḫamdihi subḫânallâhil ‘adhîm 33x",
        translation:
          "Mahasuci Allah dengan segala pujian untuk-Nya. Mahasuci Allah yang Mahaagung (33 kali)",
      },
      {
        arabic:
          "اَللّٰهُمَّ صَلِّ عَلَى حَبِيْبِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ ×٢",
        latin:
          "Allâhumma shalli ‘alâ ḫabîbika sayyidinâ Muḫammadin wa âlihi wa shaḫbihi wa sallim 2x",
        translation:
          "Ya Allah, limpahkan rahmat takzim dan keselamatan kepada kekasih-Mu, pemimpin kami, Nabi Muhammad, berikut keluarga dan sahabatnya (2 kali).",
      },
      {
        arabic:
          "اَللّٰهُمَّ صَلِّ عَلَى حَبِيْبِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَبَارِكْ وَسَلِّمْ أَجْمَعِيْنَ",
        latin:
          "Allâhumma shalli ‘alâ ḫabîbika sayyidinâ Muḫammadin wa ‘alâ âlihi wa shaḫbihi wa bârik wa sallim ajma‘în",
        translation:
          "Ya Allah, limpahkanlah rahmat kepada kekasih-Mu, pemimpin kami, Nabi Muhammad, berikut keluarga dan sahabatnya. Limpahkanlah pula berkah dan keselamatan kepada mereka semua.",
      },
      {
        arabic:
          "﴿الدعاء﴾ أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ، بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ، الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ، حَمْدَ الشَّاكِرِيْنَ حَمْدَ النَّاعِمِيْنَ، حَمْدًا يُّوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ، اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَّعَلَى اٰلِ سَيِّدِنَا مُحِمَّدٍ",
        latin:
          "A‘ûdzubillâhi minasy-syaithâr-rajîm, bismillâhir-raḫmânir-raḫîm, al-ḫamdulillâhi rabbil-‘alamîn, ḫamdasy syâkirin, ḫamdan nâ‘imîn, ḫamdan yuwâfî ni‘amahu wa yukâfî’u mazîdah(u), yâ rabbanâ lakal-ḫamdu kamâ yanbaghî lijalâli wajhika wa ‘adhîmi sulthânika, allâhumma shalli ‘alâ sayyidinâ Muḫammadin wa ‘alâ âli sayyidinâ Muḫammadin.",
        translation:
          "Doa Aku berlindung diri kepada Engkau dari setan yang di rajam. Dengan nama Allah yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan seru sekalian alam, sebagaimana orang-orang yang bersyukur dan orang yang memperoleh nikmat sama memuji, dengan pujian yang sesuai dengan nikmatnya dan memungkinkan di tambah nikmatnya. Tuhan kami, hanya Engkau segala puji, sebagaimana yang patut terhadap kemuliaan Engkau dan keagungan Engkau. Ya Allah tambahkanlah kesejahteraan dan keselamatan kepada penghulu kami Nabi Muhammad dan kepada keluarganya.",
      },
      {
        arabic:
          "اَللّٰهُمَّ تَقَبَّلْ وَأَوْصِلْ ثَوَابَ مَا قَرَاْنَاهُ مِنَ الْقُرْآنِ الْعَظِيْمِ وَمَا هَلَّلْنَا وَمَا سَبَّحْنَا وَمَا اسْتَغْفَرْنَا وَمَا صَلَّيْنَا عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ هَدِيَّةً وَاصِلَةً وَرَحْمَةً نَازِلَةً وَبَرَكَةً شَامِلَةً إِلَى حَضَرَةِ حَبِيْبِنَا وَشَفِيْعِنَا وَقُرَّةِ أَعْيُنِنَا سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَإِلَى جَمِيْعِ إِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمُجَاهِدِيْنَ فِي سَبِيْلِ اللهِ رَبِّ الْعَلَمِيْنَ وَالْمَلَائِكَةِ الْمُقَرَّبِيْن، خُصُوْصًا إِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجِيْلَانِيّ، ثُمَّ إِلَى أَرْوَاحِ جَمِيْعِ أَهْلِ الْقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْأَرْضِ وَمَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا إِلَى آبَائِنَا وَاُمَّهَاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا، وَنَخَصُّ خَصُوْصًا إِلَى مَنِ اجْتَمَعْنَا هٰهُنَا بِسَبَبِهِ وَلِأَجْلِهِ",
        latin:
          "Allâhumma taqabbal wa aushil tsawâba mâ qara’nâhu minal-qur’anil-‘adhîmi wa mâ hallalnâ wamâ sabbaḫnâ wamâstaghfarnâ wamâ shallainâ ‘alâ sayyidinâ Muḫammadin shallallâhu ‘alaihi wa sallamâ hadiyyatan wâshilatan wa raḫmatan nâzilatan wa barakatan syâmilatan ilâ ḫadlrati ḫabîbinâ wa syafî‘nâ wa qurrati a‘yuninâ sayyidinâ wa maulana Muḫammadin shallallâhu ‘alaihi wa sallamâ, wa ilâ jamî‘i ikhwânihi minal-anbiyâ’i wal mursalîna wal-auliyâ’i wasy-syuhadâ’i wash-shaliḫina wash-shaḫâbati wat-tâbi‘înâ wal-‘ulamâ’il-‘âmilîna wal-mushannifînal-mukhlashîna wa jamî‘il-mujâhidînâ fî sabîlillâhi rabbil-‘âlamîna wal-malâ’ikatil-muqarrabîna, khusûshan ilâ sayyidinâsy-Syaikhi Abdil Qâdir al-Jîlâni, tsumma ilâ arwâhi jami‘i ahlil-qubûri minal-muslimînâ wal-muslimâti wal-mu’minînâ wal-mu’minâti min masyâriqil-ardli wa maghâribihâ barrihâ wa baḫrihâ khusushan ilâ âbâ’inâ wa ummahâtinâ wa ajdâdinâ wa jaddâtinâ, wa nakhushshu khusûshan ilâ man ijtama‘nâ hahunâ bisababihi wa liajlihi.",
        translation:
          "Ya Allah, terimalah dan sampaikanlah pahala ayat-ayat Quranul ‘adhim yang telah kami baca, tahlil kami, tasbih dan istighfar kami, dan bacaan shalawat kami kepada penghulu kami Nabi Muhammad dan kepada keluarganya. Sebagai hadiah yang bisa sampai, rahmat yang turun, dan berkah yang cukup kepada kekasih kami, penolong dan buah mata kami, penghulu dan pemimpin kami, yaitu Nabi Muhammad ﷺ, kepada semua temannya dari para Nabi dan para Utusan, kepada para wali, pahlawan yang gugur (Syuhada), orang-orang yang salih, para sahabat, dan tabi’in (para pengikutnya); kepada para ulama yang mengamalkan ilmunya, para pengarang yang ikhlas, kepada semua pejuang di jalan Allah (membela agama-Nya), Allah raja seru sekalian alam; dan kepada para Malaikat muqarrabin, terutama Syekh Abdul Qadir al-Jilani, kemudian kepada ahli kubur, muslim yang laki-laki dan yang perempuan, mukmin yang laki-laki dan yang perempuan, dari dunia timur dan barat di darat dan di laut, terutama lagi kepada bapak-bapak kami, ibu-ibu kami, nenek-nenek kami yang laki-laki dan yang perempuan, lebih terutama lagi kepada orang yang menyebabkan kami sekalian berkumpul di sini dan untuk keperluannya.",
      },
      {
        arabic:
          "اَللّٰهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ، اَللّٰهُمَّ أَنْزِلِ الرَّحْمَةَ وَالْمَغْفِرَةَ عَلَى أَهْلِ الْقُبُوْرِ مِنْ أَهْلِ لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ",
        latin:
          "Allâhummaghfirlahum warḫamhum wa ‘âfihim wa‘fu ‘anhum, allâhumma anzilir-raḫmata wal-maghfirata ‘alâ ahlil-qubûri min ahli lâ ilâha illallâhu muḫammadur-rasûlullahi",
        translation:
          "Ya Allah ampunilah mereka, kasihanilah mereka, dan maafkanlah mereka. Ya Allah turunkanlah rahmat, dan ampunan kepada ahlul kubur yang ahli mengucapkan “Laa ilaaha illaallah, Muhammadur rasulullah” (Tidak ada tuhan selain Allah, Muhammad Utusan Allah).",
      },
      {
        arabic:
          "رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَّارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلًا وَّارْزُقْنَا اجْتِنَابَهُ، رَبَّنَا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ، سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَلَمِيْنَ، اَلْفَاتِحَة",
        latin:
          "Rabbanâ arinâl-ḫaqqa ḫaqqan warzuqnât-tibâ‘ah, wa arinâl-bâthila bâthilan warzuqnâj tinâbah. Rabbanâ âtinâ fid-dunyâ ḫasanatan wa fil-âkhirati ḫasanatan wa qinâ ‘adzaban-nâr. Subḫâna rabbika rabbil-‘izzati ‘ammâ yashifun, wa salamun ‘alal-mursalîn, wal-ḫamdulillâhi rabbil-‘âlamîn. Al-fâtiḫah..",
        translation:
          "Tuhan kami, tunjukkanlah kami kebenaran dengan jelas, jadikanlah kami pengikutnya, tunjukkanlah kami perkara batil dengan jelas, dan jadikanlah kami menjauhinya. Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat, dan jagalah kami dari siksa api neraka, Maha Suci Tuhanku, tuhan yang bersih dari sifat yang di berikan oleh orang-orang kafir, semoga keselamatan tetap melimpahkan kepada para Utusannya dan segala puji bagi Allah Tuhan seru sekalian Alam. Al Fatihah.",
      },
    ],
    [
      {
        translation: "Surat Yasin",
      },

      {
        arabic: "يسٓ",
        latin: "Yasin",
        translation: "Yasin",
      },
      {
        arabic: "وَالْقُرْآنِ الْحَكِيمِ",
        latin: "Walqur’anil hakīm",
        translation: "Demi Alquran yang penuh hikmah,",
      },
      {
        arabic: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
        latin: "Innaka laminal mursalīn",
        translation: "Sungguh, engkau (Muhammad) adalah salah seorang rasul,",
      },
      {
        arabic: "عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
        latin: "‘Ala sirātim mustaqīm",
        translation: "yang berada di atas jalan yang lurus,",
      },
      {
        arabic: "تَنزِيلَ الْعَزِيزِ الرَّحِيمِ",
        latin: "Tanzīlal ‘azīzir rahim",
        translation:
          "(sebagai wahyu) yang diturunkan oleh (Allah) Yang Mahaperkasa, Maha Penyayang,",
      },
      {
        arabic: "لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ",
        latin: "Litunżira qaumam mā unżira ābā'uhum fahum gāfilūn",
        translation:
          "agar engkau (Muhammad) memberi peringatan kepada suatu kaum yang nenek moyang mereka belum pernah diberi peringatan, karena itu mereka lalai.",
      },
      {
        arabic:
          "لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ",
        latin: "Laqad haqqal qaulu ‘ala akṡarihim fahum lā yu'minūn",
        translation:
          "Sungguh, pasti berlaku perkataan (ketentuan Allah) terhadap kebanyakan mereka, karena mereka tidak beriman.",
      },
      {
        arabic:
          "إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ فَهُم مُّقْمَحُونَ",
        latin:
          "Innā ja‘alnā fī a‘nāqihim aglālan fa hiya ilal ażqāni fahum muqmahūn",
        translation:
          "Sungguh, Kami telah memasang belenggu di leher mereka, lalu tangan mereka (diangkat) ke dagu, karena itu mereka tertengadah.",
      },
      {
        arabic:
          "وَجَعَلْنَا مِن بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ",
        latin:
          "Wa ja‘alnā mim baini aidīhim saddaw wa min khalfihim saddan fa agsyaināhum fahum lā yubsirūn",
        translation:
          "Dan Kami jadikan di hadapan mereka sekat (dinding) dan di belakang mereka juga sekat, dan Kami tutup (mata) mereka sehingga mereka tidak dapat melihat.",
      },
      {
        arabic:
          "وَسَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ",
        latin: "Wa sawā'un ‘alaihim a'anżartahum am lam tunżirhum lā yu'minūn",
        translation:
          "Dan sama saja bagi mereka, apakah engkau (Muhammad) memberi peringatan kepada mereka atau engkau tidak memberi peringatan kepada mereka, mereka tidak akan beriman.",
      },
      {
        arabic:
          "إِنَّمَا تُنذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمَٰنَ بِالْغَيْبِ فَبَشِّرْهُ بِمَغْفِرَةٍ وَأَجْرٍ كَرِيمٍ",
        latin:
          "Innamā tunżiru manittaba‘aż żikra wa khasyiyar rahmāna bil gaib, fabasysyirhu bimagfiratiw wa ajrin karīm",
        translation:
          "Sesungguhnya engkau (Muhammad) hanya memberi peringatan kepada orang-orang yang mau mengikuti peringatan dan yang takut kepada Tuhan Yang Maha Pengasih, walaupun tidak melihat-Nya. Maka berilah mereka kabar gembira dengan ampunan dan pahala yang mulia.",
      },
      {
        arabic:
          "إِنَّا نَحْنُ نُحْيِي الْمَوْتَىٰ وَنَكْتُبُ مَا قَدَّمُوا وَآثَارَهُمْ ۚ وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ",
        latin:
          "Innā nahnu nuhyil mautā wa naktubu mā qaddamū wa āṡārahum, wa kulla syai'in ahsaināhu fī imāmim mubīn",
        translation:
          "Sungguh, Kamilah yang menghidupkan orang-orang yang mati, dan Kamilah yang mencatat apa yang telah mereka kerjakan dan bekas-bekas yang mereka tinggalkan. Dan segala sesuatu Kami kumpulkan dalam Kitab Induk yang nyata (Lauh Mahfuz).",
      },
      {
        arabic:
          "وَاضْرِبْ لَهُم مَّثَلًا أَصْحَابَ الْقَرْيَةِ إِذْ جَاءَهَا الْمُرْسَلُونَ",
        latin: "Wadriib lahum maṡalan ashabal qaryah, iż jā'ahal mursalūn",
        translation:
          "Dan buatlah suatu perumpamaan bagi mereka, penduduk suatu negeri, ketika utusan-utusan datang kepada mereka;",
      },
      {
        arabic:
          "إِذْ أَرْسَلْنَا إِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوهُمَا فَعَزَّزْنَا بِثَالِثٍ فَقَالُوا إِنَّا إِلَيْكُم مُّرْسَلُونَ",
        latin:
          "Iż arsalnā ilaihimuṡnaini fakazżabūhumā fa ‘azzaznā biṡāliṡin fa qālū innā ilaikum mursalūn",
        translation:
          "(yaitu) ketika Kami mengutus kepada mereka dua orang utusan, lalu mereka mendustakan keduanya; kemudian Kami kuatkan dengan (utusan) yang ketiga, maka ketiga (utusan itu) berkata, “Sungguh, kami adalah orang-orang yang diutus kepadamu.”",
      },
      {
        arabic:
          "قَالُوا مَا أَنتُمْ إِلَّا بَشَرٌ مِّثْلُنَا وَمَا أَنزَلَ الرَّحْمَٰنُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا تَكْذِبُونَ",
        latin:
          "Qālū mā antum illā basyarum miṡlunā wa mā anzalar rahmānu min syai'in in antum illā takżibūn",
        translation:
          "Mereka (penduduk negeri) menjawab, “Kamu hanyalah manusia biasa seperti kami, dan (Allah) Yang Maha Pengasih tidak menurunkan sesuatu apa pun, kamu hanyalah pendusta belaka.”",
      },
      {
        arabic: "قَالُوا رَبُّنَا يَعْلَمُ إِنَّا إِلَيْكُمْ لَمُرْسَلُونَ",
        latin: "Qālū rabbunā ya‘lamu innā ilaikum lamursalūn",
        translation:
          "Mereka (para rasul) berkata, “Tuhan kami mengetahui sesungguhnya kami adalah utusan-utusan(-Nya) kepadamu.",
      },
      {
        arabic: "وَمَا عَلَيْنَا إِلَّا الْبَلَاغُ الْمُبِينُ",
        latin: "Wa mā ‘alainā illal balāgul mubīn",
        translation:
          "Dan kewajiban kami hanyalah menyampaikan (perintah Allah) dengan jelas.”",
      },
      {
        arabic:
          "قَالُوا إِنَّا تَطَيَّرْنَا بِكُمْ ۖ لَئِن لَّمْ تَنتَهُوا لَنَرْجُمَنَّكُمْ وَلَيَمَسَّنَّكُم مِّنَّا عَذَابٌ أَلِيمٌ",
        latin:
          "Qālū innā taṭayyarnā bikum, la'il lam tantahū lanarjumannakum wa layamassannakum minnā ‘ażābun alīm",
        translation:
          "Mereka menjawab, “Sesungguhnya kami bernasib malang karena kamu, sungguh, jika kamu tidak berhenti (menyeru kami), niscaya kami rajam kamu dan kamu pasti akan merasakan siksaan yang pedih dari kami.”",
      },
      {
        arabic:
          "قَالُوا طَائِرُكُم مَّعَكُمْ ۚ أَئِن ذُكِّرْتُم ۚ بَلْ أَنتُمْ قَوْمٌ مُّسْرِفُونَ",
        latin:
          "Qālū ṭā'irukum ma‘akum, a'in żukkirtum, bal antum qaumum musrifūn",
        translation:
          "Mereka (para rasul) berkata, “Kemalangan kamu itu adalah karena kamu sendiri. Apakah karena kamu diberi peringatan (lalu kamu bernasib malang)? Sebenarnya kamu adalah kaum yang melampaui batas.”",
      },
      {
        arabic:
          "وَجَاءَ مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ يَسْعَىٰ قَالَ يَا قَوْمِ اتَّبِعُوا الْمُرْسَلِينَ",
        latin:
          "Wa jā'a min aqsal madīnati rajuluy yas‘ā qāla yā qaumittabi‘ul mursalīn",
        translation:
          "Dan datanglah dari ujung kota, seorang laki-laki (Habib an-Najjar) dengan tergesa-gesa dia berkata, “Wahai kaumku! Ikutilah rasul-rasul itu.",
      },
      {
        arabic: "اتَّبِعُوا مَن لَّا يَسْأَلُكُمْ أَجْرًا وَهُم مُّهْتَدُونَ",
        latin: "Ittabi‘ū mal lā yas'alukum ajraw wa hum muhtadūn",
        translation:
          "Ikutilah orang yang tidak meminta imbalan kepadamu; dan mereka adalah orang-orang yang mendapat petunjuk.”",
      },
      {
        arabic:
          "وَمَا لِيَ لَا أَعْبُدُ الَّذِي فَطَرَنِي وَإِلَيْهِ تُرْجَعُونَ",
        latin: "Wa mā liya lā a‘budullażī faṭaranī wa ilaihi turja‘ūn",
        translation:
          "Dan mengapa aku tidak menyembah (Allah) yang telah menciptakanku dan hanya kepada-Nyalah kamu akan dikembalikan?",
      },
      {
        arabic:
          "أَأَتَّخِذُ مِن دُونِهِ آلِهَةً إِن يُرِدْنِ الرَّحْمَٰنُ بِضُرٍّ لَّا تُغْنِ عَنِّي شَفَاعَتُهُمْ شَيْئًا وَلَا يُنقِذُونِ",
        latin:
          "A'attakhiżu min dūnihī ālihatan iy yuridnir rahmānu bidurrillā tugnī ‘annī syafā‘atuhum syai'aw wa lā yunqiżūn",
        translation:
          "Mengapa aku akan mengambil tuhan-tuhan selain Dia? Jika (Allah) Yang Maha Pengasih menghendaki bencana terhadapku, pasti pertolongan mereka tidak berguna sama sekali bagiku dan mereka tidak dapat menyelamatkanku.",
      },
      {
        arabic: "إِنِّي إِذًا لَّفِي ضَلَالٍ مُّبِينٍ",
        latin: "Innī iżal lafī ḍalālim mubīn",
        translation:
          "Sesungguhnya jika demikian, pasti aku berada dalam kesesatan yang nyata.",
      },
      {
        arabic: "إِنِّي آمَنتُ بِرَبِّكُمْ فَاسْمَعُونِ",
        latin: "Innī āmantu birabbikum fasma‘ūn",
        translation:
          "Sesungguhnya aku telah beriman kepada Tuhanmu, maka dengarkanlah (pengakuan keimanan)-ku.”",
      },
      {
        arabic:
          "قِيلَ ادْخُلِ الْجَنَّةَ ۖ قَالَ يَا لَيْتَ قَوْمِي يَعْلَمُونَ",
        latin: "Qīladkhulil jannah, qāla yā laita qaumī ya‘lamūn",
        translation:
          "Dikatakan (kepadanya), “Masuklah ke surga.” Dia (Habib an-Najjar) berkata, “Alangkah baiknya sekiranya kaumku mengetahui,",
      },
      {
        arabic: "بِمَا غَفَرَ لِي رَبِّي وَجَعَلَنِي مِنَ الْمُكْرَمِينَ",
        latin: "Bimā ghafara lī rabbī wa ja‘alanī minal mukramīn",
        translation:
          "bagaimana Tuhanku mengampuni aku dan menjadikan aku termasuk orang-orang yang dimuliakan.”",
      },
      {
        arabic:
          "وَمَا أَنزَلْنَا عَلَىٰ قَوْمِهِ مِن بَعْدِهِ مِن جُندٍ مِّنَ السَّمَاءِ وَمَا كُنَّا مُنزِلِينَ",
        latin:
          "Wa mā anzalnā ‘alā qaumihī mim ba‘dihī min jundim minas samā'i wa mā kunnā munzilīn",
        translation:
          "Dan setelah dia (meninggal), Kami tidak menurunkan suatu pasukan pun dari langit kepada kaumnya, dan Kami tidak perlu menurunkannya.",
      },
      {
        arabic: "إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً فَإِذَا هُمْ خَامِدُونَ",
        latin: "In kānat illā ṣaiḥataw wāḥidatan fa'iżā hum khāmidūn",
        translation:
          "Tidak ada siksaan terhadap mereka melainkan satu teriakan saja, maka seketika itu mereka mati.",
      },
      {
        arabic:
          "يَا حَسْرَةً عَلَى الْعِبَادِ ۚ مَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ",
        latin:
          "Yā hasratan ‘alal ‘ibād, mā ya'tīhim mir rasūlin illā kānū bihī yastahzi'ūn",
        translation:
          "Alangkah besar penyesalan terhadap hamba-hamba itu, setiap datang seorang rasul kepada mereka, mereka selalu memperolok-olokkannya.",
      },
      {
        arabic:
          "أَلَمْ يَرَوْا كَمْ أَهْلَكْنَا قَبْلَهُم مِّنَ الْقُرُونِ أَنَّهُمْ إِلَيْهِمْ لَا يَرْجِعُونَ",
        latin:
          "Alam yarau kam ahlaknā qablahum minal qurūni annahum ilaihim lā yarji‘ūn",
        translation:
          "Tidakkah mereka mengetahui berapa banyak umat sebelum mereka yang telah Kami binasakan, bahwa orang-orang (yang telah Kami binasakan) itu tidak ada yang kembali kepada mereka?",
      },
      {
        arabic: "وَإِن كُلٌّ لَّمَّا جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ",
        latin: "Wa in kullul lammā jamī‘ul ladainā muhḍarūn",
        translation:
          "Dan sungguh, setiap mereka semua akan dikumpulkan kepada Kami.",
      },
      {
        arabic:
          "وَآيَةٌ لَّهُمُ الْأَرْضُ الْمَيْتَةُ أَحْيَيْنَاهَا وَأَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُونَ",
        latin:
          "Wa āyatul lahumul ardul maitatu ahyaināhā wa akhrajnā minhā habban fa minhu ya'kulūn",
        translation:
          "Dan suatu tanda (kebesaran Allah) bagi mereka adalah bumi yang mati (tandus). Kami hidupkan bumi itu dan Kami keluarkan darinya biji-bijian, maka dari (biji-bijian) itu mereka makan.",
      },
      {
        arabic:
          "وَجَعَلْنَا فِيهَا جَنَّاتٍ مِّن نَّخِيلٍ وَأَعْنَابٍ وَفَجَّرْنَا فِيهَا مِنَ الْعُيُونِ",
        latin:
          "Wa ja‘alnā fīhā jannātim min nakhīliw wa a‘nābiw wa fajjarnā fīhā minal ‘uyūn",
        translation:
          "Dan Kami jadikan padanya kebun-kebun kurma dan anggur dan Kami pancarkan padanya beberapa mata air,",
      },
      {
        arabic:
          "لِيَأْكُلُوا مِن ثَمَرِهِ وَمَا عَمِلَتْهُ أَيْدِيهِمْ ۖ أَفَلَا يَشْكُرُونَ",
        latin:
          "Liya'kulū min ṣamarihī wa mā ‘amilathu aidīhim, afalā yasykurūn",
        translation:
          "agar mereka dapat makan dari buahnya, dan dari hasil usaha tangan mereka. Maka mengapa mereka tidak bersyukur?",
      },
      {
        arabic:
          "سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ",
        latin:
          "Subhanallażī khalaqal azwāja kullahā mimmā tumbitul ardu wa min anfusihim wa mimmā lā ya‘lamūn",
        translation:
          "Mahasuci (Allah) yang telah menciptakan semuanya berpasang-pasangan, baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka sendiri, maupun dari apa yang tidak mereka ketahui.",
      },
      {
        arabic:
          "وَآيَةٌ لَّهُمُ اللَّيْلُ نَسْلَخُ مِنْهُ النَّهَارَ فَإِذَا هُم مُّظْلِمُونَ",
        latin:
          "Wa āyatul lahumul lailu naslakhu minhun nahāra fa'iżā hum muẓlimūn",
        translation:
          "Dan suatu tanda (kebesaran Allah) bagi mereka adalah malam; Kami tanggalkan siang dari (malam) itu, maka seketika itu mereka gelap gulita.",
      },
      {
        arabic:
          "وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَّهَا ۚ ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ",
        latin:
          "Wasy syamsu tajrī limustaqarril lahā, żālika taqdīrul ‘azīzil ‘alīm",
        translation:
          "Dan matahari berjalan di tempat peredarannya. Demikianlah ketetapan (Allah) Yang Mahaperkasa, Maha Mengetahui.",
      },
      {
        arabic:
          "وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ",
        latin: "Wal qamara qaddarnāhu manāzila hattā ‘āda kal ‘urjūnil qadīm",
        translation:
          "Dan telah Kami tetapkan tempat peredaran bagi bulan, sehingga (setelah sampai pada suatu tempat) kembalilah ia seperti bentuk tandan yang tua.",
      },
      {
        arabic:
          "لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ ۚ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ",
        latin:
          "Lasy syamsu yambagī lahā an tudrikal qamara wa lal lailu sābiqun nahār, wa kullun fī falakiy yasbahūn",
        translation:
          "Tidaklah mungkin bagi matahari mengejar bulan dan malam pun tidak dapat mendahului siang. Masing-masing beredar pada garis edarnya.",
      },
      {
        arabic:
          "وَآيَةٌ لَّهُمْ أَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُونِ",
        latin: "Wa āyatul lahum annā hamalnā żurriyyatahum fil fulkil masyhūn",
        translation:
          "Dan suatu tanda (kebesaran Allah) bagi mereka adalah bahwa Kami angkut keturunan mereka dalam kapal yang penuh muatan,",
      },
      {
        arabic: "وَخَلَقْنَا لَهُم مِّن مِّثْلِهِ مَا يَرْكَبُونَ",
        latin: "Wa khalaqnā lahum mim miṡlihī mā yarkabūn",
        translation:
          "dan Kami ciptakan (juga) untuk mereka dari jenis itu apa yang mereka kendarai.",
      },
      {
        arabic:
          "وَإِن نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيخَ لَهُمْ وَلَا هُمْ يُنقَذُونَ",
        latin: "Wa in nasya' nugriqhum falā sarīkha lahum wa lā hum yunqażūn",
        translation:
          "Dan jika Kami menghendaki, Kami tenggelamkan mereka, maka tidak ada penolong bagi mereka, dan tidak (pula) mereka diselamatkan,",
      },
      {
        arabic: "إِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا إِلَىٰ حِينٍ",
        latin: "Illā rahmatam minnā wa matā‘an ilā hīn",
        translation:
          "kecuali (karena) rahmat yang besar dari Kami dan untuk kesenangan hingga waktu tertentu.",
      },
      {
        arabic:
          "وَإِذَا قِيلَ لَهُمُ اتَّقُوا مَا بَيْنَ أَيْدِيكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُونَ",
        latin:
          "Wa iżā qīla lahumuttaqū mā baina aidīkum wa mā khalfakum la‘allakum turhamūn",
        translation:
          "Dan apabila dikatakan kepada mereka, “Takutlah kamu akan siksa yang di hadapanmu dan azab yang akan datang setelahmu agar kamu mendapat rahmat.”",
      },
      {
        arabic:
          "وَمَا تَأْتِيهِم مِّنْ آيَةٍ مِّنْ آيَاتِ رَبِّهِمْ إِلَّا كَانُوا عَنْهَا مُعْرِضِينَ",
        latin:
          "Wa mā ta'tīhim min āyatim min āyāti rabbihim illā kānū ‘anhā mu‘riḍīn",
        translation:
          "Dan setiap suatu tanda dari tanda-tanda (kebesaran) Tuhan datang kepada mereka, mereka selalu berpaling darinya.",
      },
      {
        arabic:
          "وَإِذَا قِيلَ لَهُمْ أَنفِقُوا مِمَّا رَزَقَكُمُ اللَّهُ قَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا أَنُطْعِمُ مَن لَّوْ يَشَاءُ اللَّهُ أَطْعَمَهُ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ مُّبِينٍ",
        latin:
          "Wa iżā qīla lahum anfiqū mimmā razaqakumullāhu qālallażīna kafarū lillażīna āmanū anuṭ‘imu mal lau yasyā'ullāhu aṭ‘amahū in antum illā fī ḍalālim mubīn",
        translation:
          "Dan apabila dikatakan kepada mereka, “Infakkanlah sebagian dari rezeki yang diberikan Allah kepadamu,” orang-orang yang kafir berkata kepada orang-orang yang beriman, “Apakah pantas kami memberi makan kepada orang-orang yang jika Allah menghendaki niscaya Dia akan memberinya makan? Kamu benar-benar dalam kesesatan yang nyata.”",
      },
      {
        arabic: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ",
        latin: "Wa yaqūlūna matā hāżal wa‘du in kuntum sādiqīn",
        translation:
          "Dan mereka (orang-orang kafir) berkata, “Kapan janji (hari Kebangkitan) itu (datang) jika kamu orang yang benar?”",
      },
      {
        arabic:
          "مَا يَنظُرُونَ إِلَّا صَيْحَةً وَاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ",
        latin:
          "Mā yanẓurūna illā ṣaiḥataw wāḥidatan ta'khużuhum wa hum yakhiṣṣimūn",
        translation:
          "Mereka hanya menunggu satu teriakan saja yang akan membinasakan mereka saat mereka sedang bertengkar.",
      },
      {
        arabic:
          "فَلَا يَسْتَطِيعُونَ تَوْصِيَةً وَلَا إِلَىٰ أَهْلِهِمْ يَرْجِعُونَ",
        latin: "Falā yastaṭī‘ūna tausiyataw wa lā ilā ahlihim yarji‘ūn",
        translation:
          "Sehingga mereka tidak mampu membuat wasiat dan tidak (pula) dapat kembali kepada keluarganya.",
      },
      {
        arabic:
          "وَنُفِخَ فِي الصُّورِ فَإِذَا هُم مِّنَ الْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ",
        latin:
          "Wa nufikha fis ṣūri fa'iżā hum minal ajdāṡi ilā rabbihim yansilūn",
        translation:
          "Lalu ditiuplah sangkakala, maka seketika itu mereka keluar dari kuburnya (dalam keadaan hidup) menuju kepada Tuhan mereka.",
      },
      {
        arabic:
          "قَالُوا يَا وَيْلَنَا مَن بَعَثَنَا مِن مَّرْقَدِنَا ۜ ۗ هَٰذَا مَا وَعَدَ الرَّحْمَٰنُ وَصَدَقَ الْمُرْسَلُونَ",
        latin:
          "Qālū yā wailanā mam ba‘aṡanā mim marqadinā, hāżā mā wa‘adar rahmānu wa sadaqal mursalūn",
        translation:
          "Mereka berkata, “Celakalah kami! Siapakah yang membangkitkan kami dari tempat tidur kami (kubur)?” Inilah yang dijanjikan (Allah) Yang Maha Pengasih dan benarlah rasul-rasul(-Nya).”",
      },
      {
        arabic:
          "إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً فَإِذَا هُمْ جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ",
        latin:
          "In kānat illā ṣaiḥataw wāḥidatan fa'iżā hum jamī‘ul ladainā muhḍarūn",
        translation:
          "Teriakan itu hanya sekali saja, maka seketika itu mereka semua dihadapkan kepada Kami.",
      },
      {
        arabic:
          "فَالْيَوْمَ لَا تُظْلَمُ نَفْسٌ شَيْئًا وَلَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ",
        latin:
          "Falyauwa lā tuẓlamu nafsun syai'aw wa lā tujzauna illā mā kuntum ta‘malūn",
        translation:
          "Maka pada hari itu seseorang tidak akan dizalimi sedikit pun dan kamu tidak akan dibalasi, kecuali sesuai dengan apa yang telah kamu kerjakan.",
      },
      {
        arabic: "إِنَّ أَصْحَابَ الْجَنَّةِ الْيَوْمَ فِي شُغُلٍ فَاكِهُونَ",
        latin: "Inna ashabal jannatil yauma fī syugulin fākihūn",
        translation:
          "Sesungguhnya penghuni surga pada hari itu bersenang-senang dalam kesibukan (mereka).",
      },
      {
        arabic:
          "هُمْ وَأَزْوَاجُهُمْ فِي ظِلَالٍ عَلَى الْأَرَائِكِ مُتَّكِئُونَ",
        latin: "Hum wa azwājuhum fī ẓilālin ‘alal arā'iki muttaki'ūn",
        translation:
          "Mereka dan pasangan-pasangan mereka berada dalam tempat yang teduh, bersandar pada dipan-dipan.",
      },
      {
        arabic: "لَهُمْ فِيهَا فَاكِهَةٌ وَلَهُم مَّا يَدَّعُونَ",
        latin: "Lahum fīhā fākihatuw wa lahum mā yadda‘ūn",
        translation:
          "Di surga itu mereka memperoleh buah-buahan dan apa saja yang mereka inginkan.",
      },
      {
        arabic: "سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ",
        latin: "Salāmun qaulam mir rabbir rahim",
        translation:
          "(Kepada mereka dikatakan), “Salam,” sebagai ucapan selamat dari Tuhan Yang Maha Penyayang.",
      },
      {
        arabic: "وَامْتَازُوا الْيَوْمَ أَيُّهَا الْمُجْرِمُونَ",
        latin: "Wamtāzul yauma ayyuhal mujrimūn",
        translation:
          "Dan (dikatakan kepada orang-orang kafir), “Berpisahlah kamu (dari orang mukmin) pada hari ini, wahai orang-orang yang berdosa!",
      },
      {
        arabic:
          "أَلَمْ أَعْهَدْ إِلَيْكُمْ يَا بَنِي آدَمَ أَن لَّا تَعْبُدُوا الشَّيْطَانَ ۖ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ",
        latin:
          "Alam a‘had ilaikum yā banī ādama al lā ta‘budusy syaiṭān, innahū lakum ‘aduwwum mubīn",
        translation:
          "Bukankah Aku telah memerintahkan kepadamu, wahai anak cucu Adam, agar kamu tidak menyembah setan? Sungguh, setan itu musuh yang nyata bagimu,",
      },
      {
        arabic: "وَأَنِ اعْبُدُونِي ۚ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ",
        latin: "Wa ani‘budūnī, hāżā sirātum mustaqīm",
        translation:
          "dan hendaklah kamu menyembah-Ku. Inilah jalan yang lurus.”",
      },
      {
        arabic:
          "وَلَقَدْ أَضَلَّ مِنكُمْ جِبِلًّا كَثِيرًا ۖ أَفَلَمْ تَكُونُوا تَعْقِلُونَ",
        latin: "Wa laqad adalla minkum jibillan kaṡīran afalam takūnū ta‘qilūn",
        translation:
          "Dan sungguh, ia (setan itu) telah menyesatkan sebagian besar di antara kamu. Maka apakah kamu tidak mengerti?",
      },
      {
        arabic: "هَٰذِهِ جَهَنَّمُ الَّتِي كُنتُمْ تُوعَدُونَ",
        latin: "Hāżihī jahannamullatī kuntum tū‘adūn",
        translation:
          "Inilah (neraka) Jahanam yang dahulu telah diperingatkan kepadamu.",
      },
      {
        arabic: "اصْلَوْهَا الْيَوْمَ بِمَا كُنتُمْ تَكْفُرُونَ",
        latin: "Islauhal yauma bimā kuntum takfurūn",
        translation:
          "Masuklah ke dalamnya pada hari ini karena dahulu kamu mengingkarinya.",
      },
      {
        arabic:
          "الْيَوْمَ نَخْتِمُ عَلَىٰ أَفْوَاهِهِمْ وَتُكَلِّمُنَا أَيْدِيهِمْ وَتَشْهَدُ أَرْجُلُهُم بِمَا كَانُوا يَكْسِبُونَ",
        latin:
          "Al yauma nakhtimu ‘alā afwāhihim wa tukallimunā aidīhum wa tasyhadu arjuluhum bimā kānū yaksibūn",
        translation:
          "Pada hari ini Kami tutup mulut mereka; tangan mereka akan berkata kepada Kami dan kaki mereka akan memberi kesaksian terhadap apa yang dahulu mereka kerjakan.",
      },
      {
        arabic:
          "وَلَوْ نَشَاءُ لَطَمَسْنَا عَلَىٰ أَعْيُنِهِمْ فَاسْتَبَقُوا الصِّرَاطَ فَأَنَّىٰ يُبْصِرُونَ",
        latin:
          "Wa lau nasya'u laṭamasnā ‘alā a‘yunihim fastabaqūs sirāṭa fa'annā yubsirūn",
        translation:
          "Dan sekiranya Kami menghendaki, pastilah Kami hapuskan penglihatan mata mereka; lalu mereka berlomba-lomba (mencari) jalan. Maka bagaimana mungkin mereka dapat melihat(-nya)?",
      },
      {
        arabic:
          "وَلَوْ نَشَاءُ لَمَسَخْنَاهُمْ عَلَىٰ مَكَانَتِهِمْ فَمَا اسْتَطَاعُوا مُضِيًّا وَلَا يَرْجِعُونَ",
        latin:
          "Wa lau nasya'u lamasakhnāhum ‘alā makānatihim famastaṭā‘ū muḍiyyaw wa lā yarji‘ūn",
        translation:
          "Dan sekiranya Kami menghendaki, pastilah Kami ubah bentuk mereka di tempat mereka berada; maka mereka tidak sanggup berjalan lagi dan tidak (pula) sanggup kembali.",
      },
      {
        arabic:
          "وَمَن نُّعَمِّرْهُ نُنَكِّسْهُ فِي الْخَلْقِ ۖ أَفَلَا يَعْقِلُونَ",
        latin: "Wa man nu‘ammirhu nunakkishu fil khalq, afalā ya‘qilūn",
        translation:
          "Dan barangsiapa Kami panjangkan umurnya niscaya Kami kembalikan dia kepada kejadian(nya semula). Maka mengapa mereka tidak mengerti?",
      },
      {
        arabic:
          "وَمَا عَلَّمْنَاهُ الشِّعْرَ وَمَا يَنبَغِي لَهُ ۚ إِنْ هُوَ إِلَّا ذِكْرٌ وَقُرْآنٌ مُّبِينٌ",
        latin:
          "Wa mā ‘allamnāhusy syi‘ra wa mā yambagī lah, in huwa illā żikruw wa qur'ānum mubīn",
        translation:
          "Dan Kami tidak mengajarkan syair kepadanya (Muhammad) dan (bersyair) itu tidaklah pantas baginya. Al-Qur'an itu tidak lain hanyalah pelajaran dan Kitab yang jelas,",
      },
      {
        arabic:
          "لِّيُنذِرَ مَن كَانَ حَيًّا وَيَحِقَّ الْقَوْلُ عَلَى الْكَافِرِينَ",
        latin: "Liyunżira man kāna hayyaw wa yahiqqal qaulu ‘alal kāfirīn",
        translation:
          "agar dia (Muhammad) memberi peringatan kepada orang-orang yang hidup (hatinya) dan agar pasti ketetapan (azab) terhadap orang-orang kafir.",
      },
      {
        arabic:
          "أَوَلَمْ يَرَوْا أَنَّا خَلَقْنَا لَهُم مِّمَّا عَمِلَتْ أَيْدِينَا أَنْعَامًا فَهُمْ لَهَا مَالِكُونَ",
        latin:
          "Awalam yarau annā khalaqnā lahum mimmā ‘amilat aidīnā an‘āman fahum lahā mālikūn",
        translation:
          "Tidakkah mereka melihat bahwa Kami telah menciptakan hewan ternak untuk mereka, yaitu sebagian dari apa yang telah Kami ciptakan dengan kedua tangan Kami, lalu mereka menguasainya?",
      },
      {
        arabic:
          "وَذَلَّلْنَاهَا لَهُمْ فَمِنْهَا رَكُوبُهُمْ وَمِنْهَا يَأْكُلُونَ",
        latin: "Wa żallalnāhā lahum fa minhā rakūbuhum wa minhā ya'kulūn",
        translation:
          "Dan Kami tundukkan hewan-hewan itu untuk mereka; lalu sebagiannya untuk menjadi tunggangan mereka dan sebagian lagi mereka makan.",
      },
      {
        arabic: "وَلَهُمْ فِيهَا مَنَافِعُ وَمَشَارِبُ ۖ أَفَلَا يَشْكُرُونَ",
        latin: "Wa lahum fīhā manāfi‘u wa masyāribu afalā yasykurūn",
        translation:
          "Dan pada hewan-hewan itu terdapat berbagai manfaat dan minuman untuk mereka. Maka mengapa mereka tidak bersyukur?",
      },
      {
        arabic:
          "وَاتَّخَذُوا مِن دُونِ اللَّهِ آلِهَةً لَّعَلَّهُمْ يُنصَرُونَ",
        latin: "Wattakhażū min dūnillāhi ālihatal la‘allahum yunsarūn",
        translation:
          "Dan mereka mengambil sesembahan selain Allah agar mereka mendapat pertolongan.",
      },
      {
        arabic:
          "لَا يَسْتَطِيعُونَ نَصْرَهُمْ وَهُمْ لَهُمْ جُندٌ مُّحْضَرُونَ",
        latin: "Lā yastaṭī‘ūna nasrahum wa hum lahum jundum muhḍarūn",
        translation:
          "Sesembahan itu tidak dapat menolong mereka; padahal mereka (sesembahan itu) adalah tentara yang disiapkan untuk menjaga mereka.",
      },
      {
        arabic:
          "فَلَا يَحْزُنكَ قَوْلُهُمْ ۘ إِنَّا نَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ",
        latin:
          "Falā yahzunkā qauluhum, innā na‘lamu mā yusirrūna wa mā yu‘linūn",
        translation:
          "Maka jangan sampai perkataan mereka mencelakakan engkau (Muhammad). Sungguh, Kami mengetahui apa yang mereka rahasiakan dan apa yang mereka nyatakan.",
      },
      {
        arabic:
          "أَوَلَمْ يَرَ الْإِنسَانُ أَنَّا خَلَقْنَاهُ مِن نُّطْفَةٍ فَإِذَا هُوَ خَصِيمٌ مُّبِينٌ",
        latin:
          "Awalam yaral insānu annā khalaqnāhu min nuṭfatin fa'iżā huwa khasīmum mubīn",
        translation:
          "Dan apakah manusia tidak memperhatikan bahwa Kami menciptakannya dari setetes mani, ternyata dia menjadi pembantah yang nyata!",
      },
      {
        arabic:
          "وَضَرَبَ لَنَا مَثَلًا وَنَسِيَ خَلْقَهُ ۖ قَالَ مَن يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ",
        latin:
          "Wa daraba lanā maṡalaw wa nasiya khalqah, qāla may yuhyil ‘izāma wa hiya ramīm",
        translation:
          "Dan dia membuat perumpamaan bagi Kami dan melupakan asal kejadiannya; dia berkata, “Siapakah yang dapat menghidupkan tulang belulang, padahal telah hancur luluh?”",
      },
      {
        arabic:
          "قُلْ يُحْيِيهَا الَّذِي أَنشَأَهَا أَوَّلَ مَرَّةٍ ۖ وَهُوَ بِكُلِّ خَلْقٍ عَلِيمٌ",
        latin:
          "Qul yuhyīhallazī ansya'ahā awwala marrah, wa huwā bikulli khalqin ‘alīm",
        translation:
          "Katakanlah (Muhammad), “Yang akan menghidupkannya ialah (Allah) yang menciptakannya pertama kali. Dan Dia Maha Mengetahui tentang segala makhluk,",
      },
      {
        arabic:
          "الَّذِي جَعَلَ لَكُم مِّنَ الشَّجَرِ الْأَخْضَرِ نَارًا فَإِذَا أَنتُم مِّنْهُ تُوقِدُونَ",
        latin:
          "Allażī ja‘ala lakum minasy syajaril akhdari nāran fa'iżā antum minhu tūqidūn",
        translation:
          "yaitu (Allah) yang menjadikan api untukmu dari kayu yang hijau, maka seketika itu kamu nyalakan (api) dari kayu itu.”",
      },
      {
        arabic:
          "أَوَلَيْسَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِقَادِرٍ عَلَىٰ أَن يَخْلُقَ مِثْلَهُم ۚ بَلَىٰ وَهُوَ الْخَلَّاقُ الْعَلِيمُ",
        latin:
          "Awalaizal lażī khalaqas samāwāti wal arda biqādirin ‘alā ay yakhluqa miṡlahum, balā wa huwal khallāqul ‘alīm",
        translation:
          "Dan bukankah (Allah) yang menciptakan langit dan bumi, mampu menciptakan yang serupa dengan mereka itu? Benar, dan Dia Maha Pencipta, Maha Mengetahui.",
      },
      {
        arabic:
          "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ",
        latin: "Innamā amruhū iżā arāda syai'an ay yaqūla lahū kun fayakūn",
        translation:
          "Sesungguhnya urusan-Nya apabila Dia menghendaki sesuatu Dia hanya berkata kepadanya, “Jadilah!” Maka jadilah sesuatu itu.",
      },
      {
        arabic:
          "فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ وَإِلَيْهِ تُرجَعُونَ",
        latin:
          "Fa subhanallażī biyadihī malakūtu kulli syai'iw wa ilaihi turja‘ūn",
        translation:
          "Maka Mahasuci (Allah) yang di tangan-Nya kekuasaan atas segala sesuatu dan kepada-Nya kamu dikembalikan.",
      },
    ],
  ];

  let currentPageIndex = 0;
  const verseDisplay = document.getElementById("verse-display");
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");
  const pageInfo = document.getElementById("page-info");
  const header = document.querySelector(".header");
  const pagination = document.querySelector(".pagination");
  const container = document.querySelector(".container");

  let lastScrollTop = 0;
  const scrollThreshold = 50;

  function renderPage(pageIndex) {
    verseDisplay.innerHTML = "";
    const pageData = pages[pageIndex];

    pageData.forEach((item) => {
      const verseDiv = document.createElement("div");
      verseDiv.classList.add("verse");

      if (item.translation && !item.arabic && !item.latin) {
        const chapterTitle = document.createElement("h2");
        chapterTitle.classList.add("chapter-title");
        chapterTitle.textContent = item.translation;
        verseDiv.appendChild(chapterTitle);
      } else {
        const arabicP = document.createElement("p");
        arabicP.classList.add("arabic");
        arabicP.setAttribute("dir", "rtl");
        arabicP.textContent = item.arabic;

        const latinP = document.createElement("p");
        latinP.classList.add("latin");
        latinP.textContent = item.latin;

        const translationP = document.createElement("p");
        translationP.classList.add("translation");
        translationP.textContent = item.translation;

        verseDiv.appendChild(arabicP);
        verseDiv.appendChild(latinP);
        verseDiv.appendChild(translationP);
      }
      verseDisplay.appendChild(verseDiv);
    });

    updatePagination(pageIndex);
    verseDisplay.scrollTo({ top: 0, behavior: "smooth" });

    header.classList.remove("hidden-on-scroll");
    pagination.classList.remove("hidden-on-scroll");
  }

  function updatePagination(pageIndex) {
    prevButton.disabled = pageIndex === 0;
    nextButton.disabled = pageIndex === pages.length - 1;
    pageInfo.textContent = `Halaman ${pageIndex + 1} dari ${pages.length}`;
  }

  verseDisplay.addEventListener("scroll", () => {
    const scrollTop = verseDisplay.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      header.classList.add("hidden-on-scroll");
      pagination.classList.add("hidden-on-scroll");
    } else if (scrollTop < lastScrollTop && scrollTop < scrollThreshold) {
      header.classList.remove("hidden-on-scroll");
      pagination.classList.remove("hidden-on-scroll");
    }
    lastScrollTop = scrollTop;
  });

  prevButton.addEventListener("click", () => {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      renderPage(currentPageIndex);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPageIndex < pages.length - 1) {
      currentPageIndex++;
      renderPage(currentPageIndex);
    }
  });

  container.addEventListener("click", (event) => {
    const isHeaderHidden = header.classList.contains("hidden-on-scroll");
    const isPaginationHidden =
      pagination.classList.contains("hidden-on-scroll");

    if (isHeaderHidden || isPaginationHidden) {
      header.classList.remove("hidden-on-scroll");
      pagination.classList.remove("hidden-on-scroll");
    }
  });

  container.addEventListener("touchstart", (event) => {
    const isHeaderHidden = header.classList.contains("hidden-on-scroll");
    const isPaginationHidden =
      pagination.classList.contains("hidden-on-scroll");

    if (isHeaderHidden || isPaginationHidden) {
      header.classList.remove("hidden-on-scroll");
      pagination.classList.remove("hidden-on-scroll");
    }
  });

  renderPage(currentPageIndex);
});
