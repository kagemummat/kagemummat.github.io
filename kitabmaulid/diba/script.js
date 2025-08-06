document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    // Halaman 1
    [
      {
        translation: "Niat Dan Fatihah",
      },
      {
        arabic:
          "نَوَيْنَا قِرَاءَةَ الْمَوْلِدِ الدِّيْبَعِيْ مِثْلَ مَا نَوَى صَاحِبُ الْمَوْلِدِ الشَّيْخُ عَبْدُ الرَّحْمٰنِ الدِّيْبَعِيُّ وَمِثْلَ مَا نَوَى مَشَايِخُنَا",
        latin:
          "Nawainâ qirâ’atal-maulidid-diba‘î mitsla mâ nawâ shâḫibil-maulid as-Syaikh 'Abdirraḫmân ad-Dibîba'î wa mitsla mâ nawâ masyâyikhinâ",
        translation:
          "Saya berniat membaca maulid ad-Diba’i sebagaimana niat pengarang bacaan maulid ini, yaitu Syaikh Abdur Rohman Ad-Diba’i dan sebagaimana niatnya guru-guru saya.",
      },
      {
        arabic:
          "اللهُ يُدْخِلُ نِيَّاتِنَا فِيْ نِيَّاتِهِمْ وَأَعْمَالَنَا فِيْ أَعْمَالِهِمْ وَ أَخْلَاقَنَا فِيْ أَخْلَاقِهِمْ بِنِيَّةِ أَنَّ اللهَ يَشْفِ مَرْضَانَا وَيُعَافِيْ مُبْتَلَانَا وَيُكَثِّرْ مِنَ الْحَلَالِ أَرْزَاقَنَا وَيَخْتِمْ أَعْمَارَنَا بِحُسْنِ الْخَاتِمَةِ",
        latin:
          "Allâhu yudkhilu niyyâtinâ fî niyyâtihim wa a'mâlana fî a'mâlihim wa akhlâqanâ fî akhlâqihim biniyyati annallâha yasyfi mardlânâ wayu'â fî mubtalânâ wa yukatstsir minal-ḫalâli arzâqanâ wa yakhtim a'mâranâ biḫusnil-khâtimati",
        translation:
          "Semoga Allah memasukkan niat saya ke dalam niat mereka semua, amal-amal saya kedalam amal-amal mereka semua, dan akhlak-akhlak saya kedalam akhlak-akhlak mereka semua. Dengan niat sesungguhnya Allahlah yang mengobati penyakit saya, dan Allah yang menyembuhkan dari beberapa bala’ saya, dan Allah yang memperbanyak beberapa rezeki saya yang halal, dan Allah yang mengakhiri beberapa perbuatan saya dengan husnul khatimah.",
      },
      {
        arabic:
          "وَإِلَى حَضَرَةِ النَّبِيِّ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ الْفَاتِحَة",
        latin:
          "Wa ilâ ḫadlratin-nabiyyi Muḫammadin shallallâhu 'alaihi wa sallama al-Fâtiḫah",
        translation:
          "Kepada hadirat Nabi Muhammad ﷺ, pahala bacaan al-Fatihah kami hadiahkan",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 2
    [
      {
        translation: "Ya Rabbi Shalli 'Ala Muhammad",
      },
      {
        arabic:
          "يَارَبِّ صَـــلِّ عَلَى مُحَمَّــــدْ يَارَبِّ صَلِّ عَلَيْـــهِ وَسَــــلِّمْ",
        latin:
          "Yâ rabbi shalli ‘alâ muḫammad yâ rabbi shalli ‘alaihi wa sallim",
        translation:
          "Ya Allah, berikan limpahan shalawat kepada Nabi Muhammad. Ya Allah, berikah limpahan shalawat dan salam kepadanya.",
      },
      {
        arabic:
          "يَا رَبِّ بَلِّغْـــــــهُ الْوَسِيْـــلَةْ يَا رَبِّ خُصَّـــهٗ بِالْفَضِيْـــلَةْ",
        latin: "Yâ rabbi ballighhul-wasîlah ya rabbi khushshahu bil-fadlîlah",
        translation:
          "Ya Allah, sampaikanlah kepadanya sebagai perantara. Ya Allah, khususkanlah kepadanya dengan keutamaan.",
      },
      {
        arabic:
          "يَا رَبِّ وَارْضَ عَنِ الصَّحَـابَةْ يَا رَبِّ وَارْضَ عَنِ السُّــــلَالَةْ",
        latin: "Yâ rabbi wardla ‘anish-shaḫâbah ya rabbi wardla ‘anis-sulâlah",
        translation:
          "Ya Allah, anugerahkanlah keridhaan kepada sahabatnya. Ya Allah, anugerahkanlah keridhaan kepada keturunannya.",
      },
      {
        arabic:
          "يَا رَبِّ وَارْضَ عَنِ الْمَشَــايِخْ يَا رَبِّ فَارْحَــــمْ وَالِدِيْنَـــــا",
        latin: "Yâ rabbi wardla ‘anil-masyâyikh ya rabbi farḫam wâlidînâ",
        translation:
          "Ya Allah, anugerahkanlah keridhaan kepada para guru. Ya Allah, rahmatilah orang-orang tua kami.",
      },
      {
        arabic:
          "يَا رَبِّ وَارْحَمْنَـــــا جَمِيْـعًــــــا يَا رَبِّ وَارْحَــــمْ كُلَّ مُسْــــلِمْ",
        latin: "Yâ rabbi warḫamnâ jamî’a ya rabbi warḫam kulla muslim",
        translation:
          "Ya Allah, rahmatilah kami semua. Ya Allah, rahmatilah semua orang Islam.",
      },
      {
        arabic:
          "يَا رَبِّ وَاغْفِــرْ لِكُلِّ مُذْنِبْ يَا رَبِّ لَا تَقْطَـــعْ رَجَــــانَا",
        latin: "Yâ rabbi waghfir likulli mudznib yâ rabbi lâ taqtha’ rajânâ",
        translation:
          "Ya Allah, ampunilah semua orang yang berbuat dosa. Ya Allah, janganlah Engkau putuskan harapan kami.",
      },
      {
        arabic:
          "يَا رَبِّ يَا سَـــــامِــعْ دُعَانَـــــا يَا رَبِّ بَلِّغْنَـــــا نَزُوْرُهْ",
        latin: "Yâ rabbi yâ sâmi’ du’ânâ ya rabbâ ballighnâ nazûruh",
        translation:
          "Ya Allah, wahai Zat Yang Maha Mendengar doa kami. Ya Allah, berilah kami kesempatan ziarah ke makamnya.",
      },
      {
        arabic:
          "يَا رَبِّ تَغْشَــانَــــــا بِنُوْرِهْ يَا رَبِّ حِفْــــظَانَكْ وَأَمَانَكْ",
        latin: "Yâ rabbi taghsyânâ binûrih yâ rabbi ḫifdhânak wa amânak",
        translation:
          "Ya Allah, sinarilah kami dengan nurnya. Ya Allah, aku selalu mengharap pemeliharaan dan keamanan-Mu.",
      },
      {
        arabic:
          "يَا رَبِّ وَاسْـــكِنَّا جِـنانَكْ يَا رَبِّ أَجِــرْنَا مِنْ عَذَابِكْ",
        latin: "Yâ rabbi waskinnâ jinânak yâ rabbi ajirnâ min ‘adzâbik",
        translation:
          "Ya Allah, tempatkanlah kami dalam surga-Mu. Ya Allah, selamatkanlah kami dari siksa-Mu.",
      },
      {
        arabic:
          "يَا رَبِّ وَارْزُقْنَـــا الشَّـهَـــادَةْ يَا رَبِّ حِطْـنَا بِالسَّعَـــادَةْ",
        latin: "Yâ rabbi warzuqnâsy-syahâdah ya rabbi ḫithnâ bis-sa’âdah",
        translation:
          "Ya Allah, anugerahilah kematian kami dengan syahid. Ya Allah, liputilah kehidupan kami dengan penuh kebahagiaan",
      },
      {
        arabic:
          "يَا رَبِّ وَاصْلِحْ كُلَّ مُصْلِحْ يَا رَبِّ وَاكْـفِ كُلَّ مُؤْذِيْ",
        latin: "Yâ rabbi washliḫ kulla mushliḫ ya rabbi wakfi kulla mu’dzî",
        translation:
          "Ya Allah, balaslah kebaikan orang yang berbuat baik. Ya Allah, hindarkanlah dari semua orang yang menyakiti.",
      },
      {
        arabic:
          "يَا رَبِّ نَخْــــــتِمْ بِالْمُشَــــفَّعْ يَا رَبِّ صَلِّ عَلَيْـــهِ وَسَــــلِّمْ",
        latin:
          "Yâ rabbi nakhtim bil-musyaffa’ yâ rabbi shalli ‘alaihi wa sallim",
        translation:
          "Ya Allah, akhirilah kami dengan mendapat syafaat Nabi Muhammad Ya Allah, anugerahkan limpahan shalawat dan salam kepada Nabi Muhammad",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi",
        translation:
          "Ya Allah, limpahkanlah rahmat, keselamatan, dan keberkahan kepadanya (Nabi Muhammad SAW)",
      },
    ],

    //Halaman 3
    [
      {
        translation: "Ya Rasûlallah",
      },
      {
        arabic:
          "يَا رَسُوْلَ اللهِ سَلَامٌ عَلَيْكَ يَـــا رَفِيعَ الشَّــــانِ وَالدَّرَجِ",
        latin: "Yâ rasulallâh salâmun ‘alaik yâ râfî’asy-syâni wad-daraji",
        translation:
          "Wahai utusan Allah, semoga keselamatan tetap padamu, Wahai yang berbudi luhur dan bermartabat tinggi",
      },
      {
        arabic:
          "عَـطْفَـــــةً يَاجِـــيرَةَ الْعَــــــلَمِ يَــــــا أُهَيْـــلَ الْجُوْدِ وَالْكَرَمِ",
        latin: "‘Athfan yâjîratal-‘alami yâ uhailal-jûdi wal-karami",
        translation:
          "Rasa kasihmu wahai pemimpin tetangga, Wahai ahli dermawan dan pemurah hati",
      },
      {
        arabic:
          "نَحْنُ جِـــيْرَانٌ بِذَا الْحَــــرَمِ حَرَمِ الْإِحْسَـــانِ وَالْحَسَنِ",
        latin: "Naḫnu jîrâninun bidzal-ḫarami ḫaramil-iḫsâni wal-ḫasani",
        translation:
          "Kami tetangga di tanah haram ini. Tanah haram tempat berbuat baik dan memberi kebaikan.",
      },
      {
        arabic:
          "نَحْنُ مِنْ قَوْمٍ بِهٖ سَـــكَنُوْا وَبِهٖ مِنْ خَوفِـهِــــمْ أَمِنُوْا",
        latin: "Naḫnu min waumin biḫî sakanû wa bihî min khaufihim aminû",
        translation:
          "Kami dari kaum yang tinggal di tempat itu. Tempat yang mereka merasa aman dari ketakutan.",
      },
      {
        arabic:
          "وَبِاٰيَــــاتِ الْقُــــرْاٰنِ عُـنوْا فَاتَّـــئِذْ فِــيْنَا أَخَــــا الْوَهَنِ",
        latin: "Wa bi âyâtil-qur’âni ‘anû fatta’idz fînâ akhâl-wahani",
        translation:
          "Dengan ayat-ayat Al-Qu’an mereka mendapat inayah. Renungkanlah di hati kita, wahai yang berjiwa lemah.",
      },
      {
        arabic:
          "نَـعْرِفُ الْبَطْـحَـا وَتَعْرِفُنَا وَالصَّفَا وَالْبَيتُ يَأْلَفُنَـــا",
        latin: "Na’riful-bathḫâ wa ta’rifunâ wash-shafâ wal-baitu ya’lafunâ",
        translation:
          "Kami mengenal padang pasir dan ia mengenal kami, Bukit Shafa dan Baitil-Haram menawan hati kami.",
      },
      {
        arabic:
          "وَلَنَا الْمَعْلىٰ وَخَيْفُ مِنٰى فَاعْلَمَنْ هٰـــذَا وَكُنْ وَكُـنِ",
        latin: "Wa lanal-ma’lâ wa khaifu mina fa’laman hâdzâ wa kun wakuni",
        translation:
          "Kami punya Ma’la dan masjid Kha’if di kota Mina. Ketahuilah ini, beradalah dan beribadahlah di sana.",
      },
      {
        arabic:
          "وَلَنَـــا خَـــيرُ الْأَنَـــامِ أَبُ وَعَلِيُّ الْـمُرْتَضٰى حَـسَبُ",
        latin: "Wa lanâ Khairul-anâmi abu wa ‘aliyyul-murtadlâ ḫasabu",
        translation:
          "Kami mempunyai ayah sebaik-baik makhluk. Dan Ia adalah keturunan Ali yang diridhai.",
      },
      {
        arabic:
          "وَإِلَى السِّبْطَيْنِ نَـنْتَسِبُ نَـسَـبًا مَّا فِيْهِ مِنْ دَخَنِ",
        latin: "Wa ilas-sibthaini nantasibu nasaban mâ fîhi min dakhani",
        translation:
          "Kepada kedua cucunya kami berketurunan, Keturunan suci bersih dari kotoran.",
      },
      {
        arabic:
          "كَمْ إِمَــامٍ بَـعْدَهٗ خَــــلَفُوْا مِنْهُ سَـــادَاتٌ بِذَا عُـرِفُوْا",
        latin: "Kam imâmin ba’dahu khalafû minhu sâdatun bidzâ ‘urifû",
        translation:
          "Banyak Imam yang menggantikan sesudahnya, dengan gelar Sayyid mereka dikenal",
      },
      {
        arabic:
          "وَبِهٰذَا الْوَصْفِ قَدْ وُصِفُوا مِنْ قَدِيْمِ الدَّهْـرِ وَالزَّمَـن",
        latin: "Wa bihâdzal-washfi qad wushifû min qadîmid-dahri waz-zaman",
        translation:
          "Dengan gelar itu benar-benar mereka disebut. Dari sepanjang tahun dan zaman.",
      },
      {
        arabic:
          "مِثْـــلُ زَيْنِ الْعَــابِدِيْنَ عَلِيْ وَابْـنِهِ الْبَاقِــــرِ خَــيرِ وَلِيْ",
        latin: "Mitslu zainil-‘âbidîna ‘alî wabnihil-bâqiri khairi walî",
        translation:
          "Seperti Zainal Abidin yakni Ali, dan putranya Baqir itu sebaik-baiknya wali.",
      },
      {
        arabic:
          "وَالْإِمَامِ الصَّادِقِ الْحَـفِلِ وَعَلِيِّ ذِي الْعُـــلَا الْيَـقِينِ",
        latin: "Wal-imamish-shâdiqil-ḫafili wa ‘aliyyi dzil-‘ulal-yaqîni",
        translation:
          "Dan Imam Ja’far Ash-Shadiq yang penuh keberkahan. Dan Ali yang mempunyai ketinggian dan keyakinan",
      },
      {
        arabic:
          "فَـهُمُ الْقَوْمُ الَّذِيْنَ هُــــدُوْا وَبِـفَضْلِ اللهِ قَدْ سَعِــــدُوْا",
        latin: "Fahumul-qaumul-ladzîna hudû wa bifadllillâhi qad sa’idû",
        translation:
          "Merekalah kaum yang memperoleh hidayah. Dan dengan karunia Allah mereka benar-benar bahagia.",
      },
      {
        arabic:
          "وَلِـغَيْرِ اللهِ مَـا قَـصَـــدُوْا وَمَـعَ الْـقُــرْاٰنِ فِيْ قَــــرَنِ",
        latin: "Wa lighairillâhi mâ qashadû wa ma’al-qur’âni fi qarani",
        translation:
          "Kepada selain Allah mereka tak bertujuan. Dan beserta Al-Quran mereka berpegangan.",
      },
      {
        arabic:
          "أَهْلُ بَيْتِ الْمُصْطَفٰى الطُّهُرِ هُمْ أَمَـــانُ الْأَرْضِ فَاذَّكِرِ",
        latin: "Ahli baitil-mushthafath-thuhuri hum amânul-ardli fadzdzakiri",
        translation:
          "Ahli bait nabi pilihan yang disucikan. Mereka itu pengaman bumi, maka ingatlah",
      },
      {
        arabic:
          "شُبِّهُوْا بِالْأَنْـجُــمِ الزُّهُـــرِ مِـثْلَمَا قَدْجَآءَ فِي السُّــــنَنِ",
        latin: "Syubbihû bil-anjumiz-zuhuri mitsla mâ qad jâ’a fis-sunani",
        translation:
          "Mereka itu bagaikan bintang gemerlapan. Perumpamaan itu telah benar-benar datang di dalam hadits Nabi.",
      },
      {
        arabic:
          "وَسَـفِـيْنٌ لِلـنَّـجَــــاةِ إِذَا خِفْتَ مِنْ طُوْفَــــانِ كُلِّ أَذٰى",
        latin: "Wa safînun linnajâti idzâ khifta min thûfâni kulli adzâ",
        translation:
          "Dan bagaikan bahtera penyelamat ketika engkau takut dari topan badai segala duka.",
      },
      {
        arabic:
          "فَانْجُ فِـيْهَا لَا تَكُوْنُ كَذَا وَاعْــــتَصِمْ بِاللهِ وَاسْـــتَعِنِ",
        latin: "Fanju fîhâ lâ takûnu kadzâ wa’tashim billâhi wasta’ini",
        translation:
          "Maka selamatlah engkau di dalamnya tiada khawatir lagi. Dan berpegang teguhlah kepada Allah serta mohonlah pertolongan.",
      },
      {
        arabic:
          "رَبِّ فَانْفَعْنَا بِـبَرْكَتِهِــــمْ وَاهْـــدِنَا الْحُسْنٰى بِحُرْمَتِهِــمْ",
        latin: "Rabbi fanfa’nâ bibarkitihim wahdinal-ḫusnâ biḫurmatihim",
        translation:
          "Ya Allah, dengan barokah mereka, berilah kami kemanfaatan. Dan dengan kehormatan mereka, tunjukkan kami kepada kebaikan",
      },
      {
        arabic:
          "وَأَمِـتْنَـــا فِي طَـرِيْقَتِهِـــمْ وَمُعَــــافَاةٍ مِـنَ الْـفِــــتَنِ",
        latin: "Wa amitnâ fî tharîqatihim wa mu’âfâtin minal-fitani",
        translation:
          "Dan wafatkanlah kami di jalan mereka, dan selamat dari segala fitnah",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi",
        translation:
          "Ya Allah, limpahkanlah rahmat, keselamatan, dan keberkahan kepadanya (Nabi Muhammad SAW)",
      },
    ],

    //Halaman 4
    [
      {
        translation: "Inna Fatahna",
      },
      {
        arabic:
          "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُبِيْنًا. لِيَغْفِرَ لَكَ اللهُ مَا تَقَدَّمَ مِنْ ذَنْبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهٗ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُسْتَقِيْمًا. وَيَنْصُـرَكَ اللهُ نَـصْرًا عَزِيْزًا. لَقَدْ جَآءَكُمْ رَسُوْلٌ مِنْ أَنْفُسِكُمْ عَزِيْزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيْصٌ عَلَيْكُمْ بِالْمُؤْمِنِيْنَ رَؤٗفٌ رَّحِيْمٌ. فَإِنْ تَوَلَّوْا فَقُلْ حَسْبِيَ اللهُ لَآ إِلٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ. إِنَّ اللهَ وَمَلَآئِكَتَهٗ يُصَلُّوْنَ عَلَى النَّبِيِّ. يَآأَيُّهَــــا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًـــا",
        latin:
          "Innâ fataḫna laka fatḫan mubîna. liyaghfira lakallâhu mâ taqaddama min dzanbika wa mâ ta’akhkhara wa yutimma ni‘matahu ‘alaika wa yahdîyaka shirâthan mustaqîmâ, wa yanshurukallâhu nashran ‘azîzan. Laqad jâ’akum rasûlun min anfusikum ‘azîzun ‘alaihi mâ ‘atittum ḫarîshun ‘alaikum bil-mu’minîna ra’ûfun raḫîm. fa 'in tawallau faqul ḫasbiyyallâhu lâ ilâha illâ huwa ‘alaihi tawakkaltu wa huwa rabbul-‘arsyil ‘adhîm, innalllâha wa malâ’ikatahu yushallûna ‘alan-nabî, yâ ayyuhal-ladzîna âmanû shallû ‘alaihi wa sallimû taslîmâ.",
        translation:
          "Sungguh, Kami telah memberikan kepadamu kemenangan yang nyata. Agar Allah memberikan ampunan kepadamu (Muhammad) atas dosamu yang lalu dan yang akan datang serta menyempurnakan nikmat-Nya atasmu dan menunjukimu ke jalan yang lurus, dan agar Allah menolongmu dengan pertolongan yang kuat (banyak). Sungguh, telah datang kepadamu seorang rasul dari kaummu sendiri, berat terasa olehnya penderitaan yang kamu alami, (dia) sangat menginginkan (keimanan dan keselamatan) bagimu, penyantun dan penyayang terhadap orang-orang yang beriman. Maka jika mereka berpaling (dari keimanan), maka katakanlah (Muhammad), “Cukuplah Allah bagiku; tidak ada Tuhan selain Dia. Hanya kepada-Nya aku bertawakal, dan Dia adalah Tuhan yang memiliki ‘Arsy (singgasana) yang agung.” Sesungguhnya Allah dan para malaikat-Nya bersalawat untuk Nabi. Wahai orang-orang yang beriman! Bersalawatlah kamu untuk Nabi dan ucapkanlah salam dengan penuh penghormatan kepadanya.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi",
        translation:
          "Ya Allah, limpahkanlah rahmat, keselamatan, dan keberkahan kepadanya (Nabi Muhammad SAW)",
      },
    ],

    //Halaman 5
    [
      {
        translation: "Alhamdulillahil Qowiyyil Ghalib",
      },
      {
        arabic:
          "اَلْحَمْدُ لِلّٰهِ الْقَوِيِّ الْغَالِبِ. اَلْوَلِيِّ الطَّالِبِ. اَلْبَاعِثِ الْوَارِثِ الْمَانِحِ السَّالِبِ. عَالِمِ الْكَآئِنِ وَالْبَآئِنِ وَالزَّآئِلِ وَالذَّاهِبِ. يُسَبِّحُهُ الْأَٓفِلُ وَالْمَآئِلُ وَالطَّالِعُ وَالْغَارِبُ. وَيُوَحِّدُهُ النَّاطِقُ وَالصَّامِتُ وَالْجَامِدُ وَالذَّآئِبُ. يَضْـرِبُ بِعَدْلِهِ السَّاكِنُ وَيَسْكُنُ بِفَضْلِهِ الضَّارِبُ. (لَآ إِلٰهَ إِلَّا اللهُ). حَكِيْمٌ أَظْهَرَ بَدِيْعَ حِكَمِهٖ وَالْعَجَآئِبِ. فِيْ تَرْتِيْبِ تَرْكِيْبِ هٰذِهِ الْقَوَالِبِ. خَلَقَ مُخًّا وَعَظْمًا وَعَضُدًا وَعُرُوْقًا وَلَحْمًا وَجِلْدًا وَشَعْرًا بِنَظْمٍ مُؤْتَلِفٍ مُتَرَاكِبٍ. مِنْ مَآءٍ دَافِقٍ يَخْرُجُ مِنْ بَيْنِ الصُّلْبِ وَالتَّرَآئِبِ. (لَآ إِلٰهَ إِلَّا اللهُ). كَرِيْمٌ بَسَطَ لِخَلْقِهٖ بِسَاطَ كَرَمِهٖ وَالْمَوَاهِبِ. يَنْزِلُ فِيْ كُلِّ لَيْلَةٍ إِلَى سَمَآءِ الدُّنْيَا وَيُنَادِيْ هَلْ مِنْ مُسْتَغْفِرٍ هَلْ مِنْ تَآئِبٍ. هَلْ مِنْ طَالِبِ حَاجَةٍ فَأُنِيْلَهُ الْمَطَالِبَ. فَلَوْ رَأَيْتَ الْخُدَّامَ قِيَامًا عَلَى الْأَقْدَامِ وَقَدْ جَادُوْا بِالدُّمُوْعِ السَّوَاكِبِ. وَالْقَوْمَ بَيْنَ نَادِمٍ وَتَآئِبٍ. وَخَآئِفٍ لِنَفْسِهٖ يُعَاتِبُ. وَآبِقٍ مِنَ الذُّنُوْبِ إِلَيْهِ هَارِبٍ. فَلَا يَزَالُوْنَ فِي الْإِسْتِغْفَارِ حَتَّى يَكُفَّ كَفُّ النَّهَارِ ذُيُوْلَ الْغَيَاهِبِ. فَيَعُوْدُوْنَ وَقَدْ فَازُوْا بِالْمَطْلُوْبِ وَأَدْرَكُوْا رِضَا الْمَحْبُوْبِ وَلَمْ يَعُدْ أَحَدٌ مِنَ الْقَوْمِ وَهُوَ خَآئِبٌ. (لَآإِلٰهَ إِلَّا أللهُ). فَسُبْحَانَهٗ وَتَعَالىٰ مِنْ مَلِكٍ أَوْجَدَ نُوْرَ نَبِيِّهٖ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مِنْ نُوْرِهٖ قَبْلَ أَنْ يَخْلُقَ اٰدَمَ مِنَ الطِّيْنِ اللَّازِبِ. وَعَرَضَ فَخْرَهٗ عَلَى الْأَشْيَآءِ وَقَالَ هٰذَا سَيِّدُ الْأَنْبِيَآءِ وَأَجَلُّ الْأَصْفِيَآءِ وَأَكْرَمُ الْحَبَآئِبِ",
        latin:
          "Al-ḫamdulillâhil-qawiyyil-ghâlib, al-waliyyith-thâlib, al-bâ’itsil-wâritsl-mâniḫis-sâlib, ‘âlimil-kâ’ini wal-bâ’ini waz-zâ’ili wadz-dzâhibi, yusabbiḫul-âfilu wal-mâ’ilu wath-thâli‘u wal-ghâribu, wa yuwaḫḫiduhun-nâthiqu wash-shâmitu wal-jâmidu wadz-dzâ’ibu, yadlribu bi’adlihis-sâkinu wa yaskunu bifadllihidl-dlârib. (lâ ilâha illallâhu). ḫakîmun adhhara badî’a ḫikamihî wal-‘ajâ’ibi, fî tartîbi tarkîbi hâdzihil-qawâlibi, khalaqa mukhkhan wa ‘adhman wa ‘adludan wa ‘urûqan wa laḫman wa jildan wa sya’ran binadhmi mu’talifin mutarâkibi, min mâ’in dâ’iqin yakhruju minbainishl-shulbi wat-tarâ’ib. (lâ ilâha illallâh). Karîmun basatha likhalqihi bisâtha karamihî wal-mawâhibi, yanzilu fî kulli lailatin ilâ samâ’id-dunyâ wa yunâdî hal min mustaghfirin hal min tâ’ibin, hal min thâlibi ḫâjatin fa’anîlahul-mathâliba, falau ra’aital-khuddâma qiyâman ‘alal-aqdâmi wa qad jâdû bid-dumû’is-sawâkibi, wal-qauma baina nâdimin watâ’ibin, wa khâ’ifin linafsihî yu’âtibu, wa âbiqi minadz-dzunûbi ilaihi hâribin, falâ yazâlûna fil istighfâri ḫattâ yakuffa kaffun nahâri dzuyûlal ghayâhibi. wa qad fâzû bil-mathlûbi wa adrakû ridlal-maḫbûbi wa lam ya’ud aḫadun minal-qaumi wa huwa khâ’ibun, (lâ ilâha illallâhu), fasubḫânahu wa ta’âlâ min malakin au jada nûra nabiyyihî Muḫammadin shallallâhu ‘alaihi wa sallama min nûrihi qabla an yakhluqa âdama minath-thînil-lâzib, wa ‘aradla fakhrahu ‘alal-asyyâ’i wa qâla hâdzâ sayyidul-anbiyâ’i wa ajallul-ashfiyâ’i wa akramul-ḫabâ’ibi.",
        translation:
          "Segala puji bagi Allah, Yang Mahakuat lagi Maha Perkasa. Maha Pelindung lagi Penuntut segala dosa. Maha Membangkitkan di hari kiamat, Mahakekal, Maha Penganugerah, lagi Maha Pelenyap sengsara. Maha Mengetahui segala keadaan: yang nyata, yang musnah, dan yang binasa. Bertasbih kepada-Nya (semua) yang tenggelam, yang condong. Yang terbit dan yang terbenam. Semua makhluk yang berbicara dan yang diam, Mengesakan Allah, demikian juga yang padat dan yang cair. Dengan keadilan-Nya, yang diam bisa bergerak, dan dengan keutamaan-Nya, yang bergerak menjadi diam. Tiada Tuhan selain Allah. Yang Maha Bijaksana, yang menciptakan keindahan hikmah-Nya dan berbagai keajaiban. Dalam pengaturan susunan perwujudan manusia ini. Menciptakan otak, tulang, bahu, urat pembuluh darah, daging, kulit, rambut dan darah dengan susunan teratur rapi. Dari sperma yang terpancar dari tulang rusuk laki-laki dan tulang dada perempuan. Tiada Tuhan selain Allah. Maha mulialah Dzat yang menghamparkan kemuliaan dan anugerah untuk makhluk-Nya. Setiap malam rahmat Allah turun ke langit dunia, dan memanggil: Adakah malam ini orang yang mohon ampun serta adakah orang yang bertaubat? Orang yang memohon akan hajatnya maka aku akan kabulkan hajatnya. Seandainya telah engkau lihat hamba-hamba mengabdi kepada Allah, berdiri tegak di atas telapak-telapak kakinya dengan cucuran air mata, di antara segolongan kaum ada yang menyesali dosa-dosanya dan bertaubat. Ada orang-orang yang khawatir berbuat dosa lagi dan mencerca kepada dirinya sendiri, ada orang yang lari menghindar dari perbuatan-perbuatan dosa menuju perlindungan Allah. Tidak ada henti-hentinya mereka mohon ampunan, Sehingga berhari-hari lamanya meratapi rentetan kealpaannya. Kemudian mereka kembali menekuni ibadah, dan mereka benar-benar beruntung dengan apa yang dicari, dan menemui keridhaan Allah yang dicintai dan tiada seorangpun dari suatu kaum yang kembali dengan membawa kerugian. Tiada Tuhan selain Allah. Mahasuci Allah dan Mahaluhur yang telah menciptakan nur Muhammad ﷺ, dari nur-Nya sebelum menciptakan Adam dari tanah liat. Allah memperlihatkan keagungan nur Muhammad kepada penghuni surga seraya berfirman: “Inilah pemimpin para Nabi dan paling agung di antara orang-orang pilihan serta orang paling mulia di antara para kekasih Allah.”",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi",
        translation:
          "Ya Allah, limpahkanlah rahmat, keselamatan, dan keberkahan kepadanya (Nabi Muhammad SAW)",
      },
    ],

    //Halaman 6
    [
      {
        translation: "Qila Huwa Adam",
      },
      {
        arabic:
          "قِيْلَ هُوَ آدَمُ، قَالَ آدَمُ بِهِ أُنِيْلُهُ أَعْلَى الْمَرَاتِبِ. قِيْلَ هُوَ نُوْحٌ، قَالَ نُوْحٌ بِهِ يَنْجُوْ مِنَ الْغَرَقِ وَيَهْلِكُ مَنْ خَالَفَهُ مِنَ الْأَهْلِ وَالْأَقَارِبِ. قِيْلَ هُوَ إِبْرَاهِيْمُ، قَالَ إِبْرَاهِيْمُ بِهِ تَقُوْمُ حُجَّتُهُ عَلَى عُبَّادِ اْلأَصْنَامِ وَالْكَوَاكِبِ. قِيْلَ هُوَ مُوْسَى، قَالَ مُوْسَى أَخُوْهُ وَلَكِنْ هَذَا حَبِيْبٌ وَمُوْسَى كَلِيْمٌ وَمُخَاطِبٌ. قِيْلَ هُوَ عِيْسَى، قَالَ عِيْسَى يُبَشِّرُ بِهِ وَهُوَ بَيْنَ يَدَيْ نُبُوَّتِهِ كَالْحَاجِبِ. قِيْلَ فَمَنْ هَذَا الْحَبِيْبُ الْكَرِيْمُ الَّذِيْ أَلْبَسْتَهُ حُلَّةَ الْوَقَارِ، وَتَوَّجْتَهُ بِتِيْجَانِ الْمَهَابَةِ وَالْإِفْتِخَارِ، وَنَشَرْتَ عَلَى رَأْسِهِ الْعَصَائِبِ. قَالَ هُوَ نَبِيٌّ ࣙاسْتَخَرْتُهُ مِنْ لُؤَيِّ ابْنِ غَالِبِ. يَمُوْتُ أَبُوْهُ وَأُمُّهُ وَيَكْفُلُهُ جَدُّهُ ثُمَّ عَمُّهُ الشَّقِيْقُ أَبُوْ طَالِبٍ",
        latin:
          "Qîla huwa âdamu, qâla âdamu bihi unîluhu a‘lal-marâtibi, qîla huwa nûḫun, qâla nûhûn bihi yanjû minal-gharaqi wa yahliku man khâlafahu minal-ahli wal-aqâribi, qîla huwa ibrâhîmu, qâla ibrâhîmu bihi taqûmu ḫujjatuhu ‘alâ ‘ubbâdil-ashnâmi wal-kawâkibi, qîla huwa mûsâ, qâla mûsâ akhûhu wa lâkin hâdzâ ḫabîbun wa mûsâ kalîmun wa mukhâthibun, qîla huwa ‘Îsâ, qâla Îsâ yubasysyiru bihi wa huwa baina yadai nubuwwatihi kal-ḫâjibi, qîla faman hâdzâl-ḫabîbul-karîmul-ladzî albastahu ḫullatal-waqâri, wa tawwajtahu bitîjânil-mahâbati wal-iftikhâri, wa nasyarta ‘alâ ra’sihil-‘ashâ’ibi, qâla huwa nabiyyun istakhartuhu min lu’ayyib-ni ghâlib, yamûtu abûhu wa ummuhu wa yakfuluhu jadduhu tsumma 'ammuhusy-syaqîqu abû thâlibin.",
        translation:
          "Ditanyakan malaikat bertanya: “Adakah nur itu pada Nabi Adam?” Allah berfirman: “Dengan nur ini, Aku anugerahkan kepada Adam martabat yang tinggi.” malaikat kembali bertanya: “Adakah nur itu pada Nuh?” Allah berfirman: Dengan nur ini Nuh dapat selamat dari tenggelam dan binasalah orang-orang yang menentangnya dari ahli keluarga dan kerabatnya.” malaikat bertanya: “Adakah nur ini pada Nabi Ibrohim?” Allah berfirman: “Dengan nur ini Nabi Ibrohim sanggup menyampaikan hujjahnya dengan mengalahkan para penyembah berhala dan bintang-bintang.” malaikat bertanya: “Adakah nur ini pada Nabi Musa?” Allah berfirman: “Nabi Musa itu adalah saudaranya, tetapi nur ini adalah kekasih-Ku dan Musa adalah penerima firman-Ku dan yang berbicara dengan-Ku.” malaikat bertanya: “Adakah nur ini pada Nabi Isa?” Allah berfirman: “Dengan nur ini Nabi Isa membawa kabar akan kelahiran nur ini di antara dengan kenabiannya dalam jarak waktu sangat dekat, bagaikan mata dengan alis.” malaikat bertanya: “Lantas siapakah kekasih mulia yang telah Engkau hiasi dengan hiasan ketenteraman, Engkau beri mahkota dari mahkota kewibawaan dan kemegahan dan Engkau kibarkan bendera kepemimpinan di atasnya?” Allah berfirman: “Dialah seorang nabi yang telah aku pilih dari keturunan Luay bin Ghalib, ayah dan ibunya telah meninggal dunia, kemudian diasuh oleh kakeknya, kemudian oleh pamannya yaitu saudara kandung ayahnya yang bernama Abu Tholib.”",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 7
    [
      {
        translation: "Yub'atsu Min Tihamah",
      },
      {
        arabic:
          "يُبْعَثُ مِنْ تِهَامَةَ بَيْنَ يَدَيِ الْقِيَامَةِ. فِيْ ظَهْرِهٖ عَلَامَةٌ تُظِلُّهُ الْغَمَامَةُ. تُطِيْعُهُ السَّحَآئِبُ. فَجْرِيُّ الْجَبِيْنِ لَيْلِيُّ الذَّوَآئِبِ. أَلْفِيُّ الْأَنْفِ مِيْمِيُّ الْفَمِ نُوْنِيُّ الْحَاجِبِ. سَمْعُهٗ يَسْمَعُ صَرِيْرَ الْقَلَمِ بَصَرُهٗ إِلَى السَّبْعِ الطِّبَاقِ ثَاقِبٌ. قَدَمَاهٗ قَبَّلَهُمَا الْبَعِيْرُ فَأَزَالَا مَا اشْتَكَاهُ مِنَ الْمِحَنِ وَالنَّوَآئِبِ. اٰمَنَ بِهِ الضَّبُّ وَسَلَّمَتْ عَلَيْهِ الْأَشْجَارُ وَخَاطَبَتْهُ الْأَحْجَارُ وَحَنَّ إِلَيْهِ الْجِذْعُ حَنِيْنَ حَزِيْنٍ نَادِبٍ. يَدَاهُ تَظْهَرُ بَرَكَتُهُمَا فِي الْمَطَاعِمِ وَالْمَشَارِبِ. قَلْبُهٗ لَا يَغْفُلُ وَلَا يَنَامُ وَلٰكِنْ لِلْخِدْمَةِ عَلَى الدَّوَامِ مُرَاقِبٌ. إِنْ أُوْذِيَ يَعْفُ وَلَا يُعَاقِبُ. وَإِنْ خُوْصِمَ يَصْمُتْ وَلَا يُجَاوِبُ. أَرْفَعُهٗ إِلَى أَشْرَفِ الْمَرَاتِبِ. فِي رَكْبَةٍ لَا تَنْبَغِي قَبْلَهٗ وَلَا بَعْدَهٗ لِرَاكِبٍ. فِيْ مَوْكِبٍ مِنَ الْمَلَآئِكَةِ يَفُوْقُ عَلَى سَآئِرِ الْمَوَاكِبِ. فَإِذَا ارْتَقىٰ عَلَى الْكَوْنَيْنِ وَانْفَصَلَ عَنِ الْعَـــالَـمِـيْنَ، وَوَصَلَ إِلَى قَابِ قَوْسَيْنِ كُنْتُ لَهٗ اَنَا النَّدِيْمَ وَالْمُخَاطِبَ",
        latin:
          "Yub‘atsu min tihâmata baina yadayil-qiyâmati, fî dhahrihi ‘alâmatun tudhilluhul-ghamâmatu, tuthî‘uhus-saḫâ’ibu,fajriyyul-jabîni lailiyyudz-dzawâ’ibi, alfiyyul-anfi mîmiyyul-fammi nûniyyul-ḫâjibi, sam‘uhu yasma‘u sharîral-qalami basharuhu ilas-sab‘ith-thibâqi tsâqibun, qadamâhu qablahumal-ba‘îru fa’azâlâ masy-takâhu minal-miḫani wan-nawâ’ibi, âmana bihidl-dlabbu wa sallamat ‘alaihil-asyjâru wa khâtabathul-aḫjâru wa ḫanna ilaihil-jidz‘u ḫanîna ḫazîn nâdibi, yadâhu tadhharu barakatuhumâ fil-mathâ‘imi wal-masyâribi, qalbuhu lâ yaghfulu wa lâ yanâmu wa lâkin lil-khidmati ‘alad-dawâmi murâqibun, in ûdziya ya‘fu wa lâ yu‘âqibu, wa in khûshima yashmut wa lâ yujâwibu, arfa‘uhu ilâ asyrafil-marâtibi, fî rakbatin lâ tanbaghî qablahu wa lâ ba’dahu lirâkibin, fî maukibi minal-malâ’ikati yafûqu ‘alâ sâ`iril-mawâkibi, faidzar-taqâ ‘alal-kaunaini wanfashala ‘anil-’âlamîna wa washala ilâ qâbi qaisaini kuntu lahu anan-nâdîma wal-mukhâthiba.",
        translation:
          "Nabi ﷺ diutus oleh Allah di negeri Tihamah (Makkah) di antara saat menjelang datangnya hari kiamat. Pada punggungnya ada tanda kenabian. Apabila berjalan, senantiasa terlindungi awan yang mematuhi perintahnya. Dahinya bercahaya cemerlang, rambutnya bagaikan malam gelap gulita atau hitam pekat. mancung hidungnya bagaikan huruf alif, bulat mulutnya bagaikan huruf mim, lengkung alisnya bagaikan huruf nun. Pendengarannya dapat mendengar geritan pena (di Lauhil Mahfuzh), penglihatannya menembus langit ketujuh. Kedua telapak kakinya dicium unta, maka lenyaplah rasa sakit serta bala’ musibah yang diderita oleh unta itu. Binatang biawak beriman kepadanya, dan pepohonan bersalam kepadanya,, berbicara dengannya batu-batuan, batang kurma meratap kepadanya bagaikan rintihan kesedihan seorang pecinta. Kedua tangannya menampakkan keberkahan pada makanan dan minuman. Hatinya tidak lalai dan tidak pula tidur, tetapi senantiasa mengabdi dan ingat kepada Allah. Bila disakiti, beliau memaafkan dan tidak membalas dendam, Bila dihina, beliau hanya diam dan tidak menjawab, Allah mengangkatnya ke martabat yang paling mulia, Dengan kendaraan yang tak pernah dipakai oleh siapapun, sebelum dan sesudahnya. Bahkan pada derajat golongan malaikat, ketinggian derajatnya melebihi yang lain. Maka ketika Nabi naik melalui dua alam dan berpisah dari dua alam, sampailah ke tempat yang tinggi yang jaraknya sekitar dua busur panah, maka Aku-lah yang menghibur dan berbicara kepadanya.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 8
    [
      {
        translation: "Tsumma Arudduhu Minal Arsy",
      },
      {
        arabic:
          "ثُمَّ أَرُدُّهٗ مِنَ الْعَرْشِ. قَبْلَ أَنْ يَّبْرُدَ الْفَرْشُ. وَقَدْ نَالَ جَمِيْعَ الْمَاٰرِبِ. فَإِذَا شُرِّفَتْ تُرْبَةُ طَيْبَةَ مِنْهُ بِأَشْرَفِ قَالِبٍ. سَعَتْ إِلَيْهِ أَرْوَاحُ الْمُحِبِّيْنَ عَلَى الْأَقْدَامِ وَالنَّجَآئِبِ",
        latin:
          "Tsumma arudduhu minal-‘arsyi, qabla an yabrudal-farsyu, wa qad nâla jamî‘al-ma’ârib, fa idzâ syurrifat turbata thaibata minhu bi asyrafi qâlibin, sa‘at ilaihi arwâḫul-muḫibbîna ‘alal-aqdâmi wan-najâ’ibi.",
        translation:
          "Kemudian Aku kembalikan dia dari ‘Arsy, dingin alas tidurnya benar-benar telah memperoleh menjadi tujuannya. Ketika tanah suci Makkah telah dimuliakan sebab kemuliaan Beliau, Sang pembaharu. Maka, jiwa-jiwa yang mencintainya berbondong-bondong dengan berjalan kaki maupun berkendara menuju kepada Beliau.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 9
    [
      {
        translation: "Shalatullahi Ma Lahat Kawakib",
      },
      {
        arabic:
          "صَــــلَاةُ اللهِ مَـــا لَاحَتْ كَوَاكِبْ عَلَى احْمَدْ خَيْرِ مَنْ رَّكِبَ النَّجَآئِبْ",
        latin:
          "Shalâtullâhi mâ lâḫat kawâkib ‘ala aḫmad khairi man rakiban-najâ’ib",
        translation:
          "Selagi cahaya bintang masih gemerlapan, semoga rahmat Allah tercurah. Kepada Nabi Muhammad, Sang pengendara unta terbaik",
      },
      {
        arabic:
          "حَدٰى حَادِى السُّرٰى بِاسْمِ الْحَبَائِبْ فَهَـــــزَّ الشُّكْرُ أَعْطَافَ الرَّكَائِبْ",
        latin:
          "ḫadâ hâdis-surâ bismil-ḫabâ’ib fahazzasy-syukru a‘thâfur-rakâ’ib",
        translation:
          "Pengiring unta berdendang menyanyikan lagu menyebut nama kekasih. Sementara untanya mengangguk-angguk menari gembira mengikuti irama lagu penunggangnya",
      },
      {
        arabic:
          "أَلَمْ تَرَهَا وَقَدْ مَدَّتْ حُـــطَاهَـــا وَسَالَتْ مِنْ مَّدَامِعِـــهَا سَحَـــآئِبْ",
        latin:
          "Alam tarahâ wa qad madat ḫuthâhâ wa sâlat min madâmi‘ihâ saḫâ’ib",
        translation:
          "Tidakkah engkau lihat, semakin cepat langkah unta? Bercucuran deras dari matanya air mata bagaikan awan tiba.",
      },
      {
        arabic:
          "وَمَالَتْ لِلْـــحِمٰى طَرَبًا وَحَنَّتْ إِلَى تِلْكَ الْمَعَالِمِ وَالْمَــــلَاعِبْ",
        latin:
          "Wa mâ lilḫimâ tharaban wa ḫannat ilâ tilkal-ma‘âlimi wal-malâ‘ib",
        translation:
          "Semakin condong langkahnya karena kegembiraan dan rindu Menuju kandang dan ladang penggembalaannya.",
      },
      {
        arabic:
          "فَدَعْ جَذْبَ الزِّمَامِ وَلَا تَسُـقْهَا فَقَائِدُ شَوقِهَا لِلْــــحَيِّ جَـــاذِبْ",
        latin:
          "Fada‘ jadzbaz-zimâmi wa lâ tasuqhâ faqâ’idu syauqihâ lil-ḫayyi jâdzib",
        translation:
          "Biarkan, jangan kau Tarik tali kekang dan jangan menggiringnya. Karena kerinduan pada sang nabilah yang akan menariknya.",
      },
      {
        arabic:
          "فَهِمْ طَــــرَبًا كَمَا هَــــامَتْ وَإِلَّا فَإِنَّكَ فِي طَـــرِيقِ الْحُـبِّ كَاذِبْ",
        latin:
          "Fahim tharaban kamâ hamat wa illâ fa innaka fî tharîqil-ḫubbi kâdzib",
        translation:
          "Tunjukkanlah rasa cintamu sebagaimana cintanya unta dan jikalau tidak, Maka jalan cintamu pada nabi adalah dusta.",
      },
      {
        arabic:
          "أَمَّا هٰذَا الْعَقِيْــــقُ بَدَا وَهٰذِيْ قِبَابُ الْحَيِّ لَاحَتْ وَالْمَــضَارِبْ",
        latin:
          "Ammâ hâdzal-‘aqîqu badâ wa hâdzî qibâbul-ḫayyi lâḫat wal-madlârib",
        translation:
          "Perhatikan, kota Aqiq telah nampak dan inilah Kubah-kubah penduduk, gemerlapan cahayanya menyilaukan",
      },
      {
        arabic:
          "وَتِلْكَ الْقُبَّــــةُ الْخَــضْرَا وَفِيْهَــــا نَبِيٌّ نُوْرُهٗ يَجْـــلُوْ الْغَـــيَاهِبْ",
        latin:
          "Wa tilkal-qubbatul-khadlrâ wa fîhâ nabiyyun nûruhu yajlul-ghayâhib",
        translation:
          "Dan itulah kubah hijau dan di dalamnya, Terdapar seorang Nabi yang nur-nya menerangi kegelapan.",
      },
      {
        arabic:
          "وَقَـدْ صَحَّ الرِّضَى وَدَنَا التَّلَاقِي وَقَدْ جَاءَ الْهَنَا مِنْ كُلِّ جَــــانِبْ",
        latin:
          "Wa qad shaḫḫar-ridlâ wa danat-talâqî wa qad jâ’al-hanâ min kulli jânib",
        translation:
          "Dan sungguh jelas keridhaan Allah seiring pertemuan yang semakin dekat Dan sungguh telah datang kegembiraan dari segala penjuru.",
      },
      {
        arabic:
          "فَقُلْ لِّلنَّفْسِ دُوْنَكِ وَالتَّمَــلِّى فَمَا دُوْنَ الْحَبِيْبِ الْيَوْمَ حَــــاجِبْ",
        latin:
          "Faqul linnafsi dûnaki wat-tamallî famâ dûnal-ḫabîbil-yauma ḫâjib",
        translation:
          "Maka bisikkan ke dalam hati, “temui sang kekasih dan bergembiralah”. Maka hari ini tiada satupun yang menjadi penghalang kepada kekasih",
      },
      {
        arabic:
          "تَمَلَّى بِـــالْحَبِيْبِ بِكُلِّ قَصْـــــدٍ فَقَدْ حَصَلَ الْهَنَا وَالضِـــدُّ غَائِبْ",
        latin:
          "Tamallâ bil-ḫabîbi bikulli qashdin faqad hashalal-hanâ wadl-dliddu ghâ’ib",
        translation:
          "Condongkanlah rasa cinta kepada kekasih di segala tujuan, Maka pastilah akan datang suka dan lenyaplah duka.",
      },
      {
        arabic:
          "نَبِيُّ اللهِ خَــــيْرُ الْخَلْقِ جَمْـعًـــــا لَهٗ أَعْلَى الْمَنَاصِبِ وَالْمَـــرَاتِبْ",
        latin:
          "Nabiyyullâhi Khairul-khalqi jam‘a lahu a‘lal-manâshibi wal-marâtib",
        translation:
          "Nabi Allah adalah sebaik-baiknya seluruh makhluk. Baginya keluhuran pangkat dan martabat tertinggi.",
      },
      {
        arabic:
          "لَهُ الْجَاهُ الرَّفِيْــــعُ لَهُ الْمَعَـــالِي لَهُ الشَّرَفُ الْمُؤَبَّدُ وَالْمَنَـــاقِبْ",
        latin:
          "Lahul-jâhur-râfi‘u lahul-ma‘âlî lahusy-syaraful-mu’abbadu wal-manâqib",
        translation:
          "Baginya kedudukan yang tinggi serta segala keluhuran. Kemuliaannya diabadikan dan menjadi kenangan.",
      },
      {
        arabic:
          "فَـــلَوْ أَنَّـــــا سَعَيْنَــا كُلَّ يَومٍ عَلَى الْأَحْدَاقِ لَا فَوْقَ النَّجَــــائِبْ",
        latin: "Falau annâ sa‘ainâ kulla yaumin ‘alal-aḫdâqi lâ fauqan-najâ’ib",
        translation:
          "Maka seandainya kami menuju tempat, berjalan setiap saat Di atas pandangan, bukan di punggung-punggung unta.",
      },
      {
        arabic:
          "وَلَوْ أَنَّــا عَمِلْنَــــا كُلَّ حِــــيْنٍ لِأَحْمَـــدَ مَوْلِدًا قَــدْ كَانَ وَاجِبْ",
        latin:
          "Wa lau annâ ‘amilnâ kulla ḫînin li aḫmada maulidin qad kâna wâjib",
        translation:
          "Dan seandainya kami beramal setiap hari Pada peringatan kelahiran Ahmad, maka sungguh hukumnya wajib.",
      },
      {
        arabic:
          "عَلَيْهِ مِنَ الْمُهَيْمِنِ كُلَّ وَقْتٍ صَلَاةٌ مَّا بَدَا نُورُ الْكَواكِبْ",
        latin:
          "‘alaihi minal-muhaimini kulla waqtin shalâtun mâ badâ nûrul-kawâkib",
        translation:
          "Setiap waktu kumohonkan untuknya dari Allah. Rahmat selama bintang-bintang masih bercahaya.",
      },
      {
        arabic:
          "تَعُـــمُّ الْاٰلَ وَالْأَصْحَـابَ طُرًّا جَمِيعَهُــــــمْ وَعِتْرَتَـــــهُ الْأَطَايِبْ",
        latin:
          "Ta‘ummul-âla wal-ashḫâba thurran jamî‘ahum wa ‘itratahul-athâyib",
        translation:
          "Yang merata kepada keluarga dan para sahabat semuanya. Serta semua keturunannya yang baik-baik lagi mulia.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 10
    [
      {
        translation: "Fasubhana man Khashshahu",
      },
      {
        arabic:
          "فَسُبْحَانَ مَنْ خَصَّهٗ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ بِأَشْرَفِ الْمَنَاصِبِ وَالْمَرَاتِبِ. أَحْمَدُهٗ عَلَى مَا مَنَحَ مِنَ الْمَوَاهِبِ. وَأَشْهَدُ أَنْ لَآ إِلٰهَ إِلَّا اللهُ وَحْدَهٗ لَا شَرِيْكَ لَهٗ رَبُّ الْمَشَارِقِ وَالْمَغَارِبِ. وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُهٗ وَرَسُوْلُهُ الْمَبْعُوْثُ إِلَى سَآئِرِ الْأَعَاجِمِ وَالْأَعَارِبِ. صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَعَلَى اٰلِهٖ وَأَصْحَابِهٖ أُولِي الْمَاٰثِرِ وَالْمَنَاقِبِ. صَلَاةً وَسَلَامًا دَآئِمَيْنِ مُتَلَازِمَيْنِ يَاتِيْ قَآئِلُهُمَا يَوْمَ الْقِيَامَةِ غَيْرَ خَآئِبِ",
        latin:
          "Fasubḫâna man khashshahu shallallâhu ‘alaihi wa sallama bi asyrafil-manâshibi wal-marâtibi, aḫmaduhu ‘alâ mâ manaḫa minal-mawâhibi, wa asyhadu an lâ ilâha illallâhu waḫdahu lâ syarîka lahu rabbul-masyâriqi wal-maghâribi, wa asyhadu anna sayyidanâ Muḫammadan ‘abduhu wa rasûluhul-mab’ûtsu ilâ sâ’iril-a‘âjimi wal-a‘âribi, shallallâhu ‘alaihi wa sallama wa ‘alâ âlihî wa ashḫâbihi ûlil-ma’âtsiri wal-manâqibi, shalâtan wa salâman dâ’imaini ya’tî qâ’iluhumâ yaumal-qiyâmati ghaira khâ’ibi.",
        translation:
          "Maka Mahasuci Allah yang mengkhususkan Nabi Muhammad ﷺ dengan kemuliaan pangkat dan martabat. Aku menyanjungkan pujian kepada-Nya, atas segala nikmat anugerah dan pemberian-Nya. Dan aku bersaksi bahwa tidak ada Tuhan selain Allah yang Maha Esa lagi tiada sekutu bagi-Nya, pemilik arah timur dan barat. Dan aku bersaksi bahwa sesungguhnya Junjungan kami Nabi Muhammad itu adalah seorang hamba Allah dan utusan-Nya yang diutus kepada semua bangsa ‘Ajam dan Arab. Semoga rahmat Allah dan salam-Nya tetap dilimpahkan kepada Nabi dan keluarga serta sahabatnya yang mempunyai sejarah hidup dan perilaku yang baik. Dengan sholawat dan salam yang kekal, orang yang membaca keduanya akan datang kelak di hari kiamat tanpa merugi.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 11
    [
      {
        translation: "Awwalu Maa Nastaftihu",
      },
      {
        arabic:
          "أَوَّلُ مَا نَسْتَفْتِحُ بِـإِيْرَادِ حَدِيْثَيْنِ وَرَدَا عَنْ نَبِيٍّ كَانَ قَدْرُهٗ عَظِيْمًا. وَنَسَبُهٗ كَرِيْمًا. وَصِرَاطُهٗ مُسْتَقِيْمًا. قَالَ فِيْ حَقِّهٖ مَنْ لَّمْ يَزَلْ سَمِيْعًا عَلِيْمًا. إِنَّ اللهَ وَمَلَآئِكَتَهٗ يُصَلُّوْنَ عَلَى النَّبِيِّ. يَآأَيُّهَا الَّذِيْنَ اٰمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا",
        latin:
          "Awwalu mâ nastaftiḫu bi îrâdi ḫadîtsaini wa radâ ‘an nabiyyin kâna qadruhu ‘adhîman, wa nasabuhu karîman, wa shirâtûhu mustaqîman, qâla fî ḫaqqihî man lam yazal samî’an ‘alîman, innallâha wa malâ’ikatahu yushallûna ‘alan-nabiyyi, yâ ayyuhal-ladzîna âmanû shallû ‘alaihi wa sallimû taslîman.",
        translation:
          "Pertama kali kami awali hal ini dengan mengemukakan dua buah hadits yang datang dari Nabi yang berkedudukan agung. Dan bernasab mulia serta lurus perjalanan hidupnya. Allah berfirman: Demi hak Muhammad. Dzat yang tiada terIepas dari sifat Maha Mendengar dan Maha Melihat, Bahwasanya Allah dan para malaikat-Nya selalu bershalawat untuk Nabi, wahai orang-orang yang beriman, bersholawatlah untuk beliau dan ucapkanlah salam kepadanya dengan bersungguh-sungguh.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 12
    [
      {
        translation: "Al-Haditsul Awwal",
      },
      {
        arabic:
          "اَلْحَدِيْثُ الْأَوَّلُ عَنْ بَحْرِ الْعِلْمِ الدَّافِقِ. وَلِسَانِ الْقُرْآَنِ النَّاطِقِ. أَوْحَدِ عُلَمَآءِ النَّاسِ. سَيِّدِنَا عَبْدِ اللهِ بْنِ سَيِّدِنَا الْعَبَّاسِ رَضِيَ اللهُ عَنْهُمَا، أَنَّ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ أَنَّهٗ قَالَ: إِنَّ قُرَيْشًا كَانَتْ نُوْرًا بَيْنَ يَدَيِ اللهِ عَزَّ وَجَلَّ قَبْلَ أَنْ يَّخْلُقَ اٰدَمَ بِأَلْفَيْ عَامٍ يُسَبِّحُ اللهَ ذٰلِكَ النُّوْرُ وَتُسَبِّحُ الْمَلَآئِكَةُ بِتَسْبِيْحِهٖ. فَلَمَّا خَلَقَ اللهُ اٰدَمَ أَوْدَعَ ذٰلِكَ النُّوْرَ فِيْ طِيْنَتِهٖ. قَالَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: فَأَهْبَطَنِيَ اللهُ عَزَّ وَجَلَّ إِلَى الْأَرْضِ فِيْ ظَهْرِ اٰدَمَ. وَحَمَلَنِيْ فِي السَّفِيْنَةِ فِيْ صُلْبِ نُوْحٍ وَّجَعَلَنِيْ فِيْ صُلْبِ الْخَلِيْلِ إِبْرَاهِيْمَ حِيْنَ قُذِفَ بِهٖ فِي النَّارِ. وَلَمْ يَزَلِ اللهُ عَزَّ وَجَلَّ يُنَقِّلُنِيْ مِنَ الْأَصْلَابِ الطَّاهِرَةِ. إِلَى الْأَرْحَامِ الزَّكِيَّةِ الْفَاخِرَةِ. حَتّٰى أَخْرَجَنِيَ اللهُ مِنْ بَيْنِ أَبَوَيَّ وَهُمَا لَمْ يَلْتَقِيَا عَلَى سِفَاحٍ قَطُّ",
        latin:
          "Al-hadîtsul-awwalu ‘an baḫril-‘ilmid-dâfiqi, wa lisânin-nâthiqi, au ḫadi ‘ulamâ`in-nâsi,sayyidininâ ‘abdillâhib-ni sayyidinâl-‘abbâsi radliyyallâhu ‘anhumâ, anna rasûlallâhi shallallâhu ‘alaihi wa sallama annahu qâla: inna quraisyan kânat nûran baina yadayillâhi ‘azza wa jalla qabla an yakhluqa âdama bi alfai ‘âmin yusabbiḫuallâa dzâlikan-nûru wa tasabbiḫul-malâ`ikatu batasbîḫihi, falammâ khalaqallâhu âdama auda’a dzâlikan-nûru fî thînatihi, qâla shallallâhu ‘alaihi wa sallama: fa`ahbathaniyallâhu ‘azza wa jalla ilal-ardli fî dhahri âdama, wa ḫamalanî fis-safînati fî shulbi nûḫi wa ja’alanî fî shulbil-khalîli ibrâhîma ḫîna qudzifa bihî fin-nâri, wa lam yazalillâhu ‘azza wa jalla yunaqqilunî minal-ashlâbith-thâhirati, ilal-arḫâmiz-zakiyyatil-fâkhirati, ḫattâ akhrajaniyallâhu min baini abawayya wa humâ lam yaltaqiyâ ‘alâ sifâḫin qaththu.",
        translation:
          "Hadits pertama dari pancaran seseorang yang ilmunya seluas samudra, tutur katanya dengan bahasa Al-Qur’an dan salah seorang ulama terkenal pada masanya, yaitu Sayyidina Abdulloh bin Sayyidina Abbas rodhiyallahu ‘anhumaa dari Rasulullah ﷺ bahwasanya beliau telah bersabda: Sesungguhnya ada seorang Quraisy (Nabi Muhammad ﷺ) yang ketika itu masih berwujud nur (cahaya) di hadapan Allah Yang Maha Perkasa dan Maha Agung, sebelum Allah menciptakan Nabi Adam kira-kira dua ribu tahun, Nur itu selalu bertasbih kepada Allah dan bertasbih pula para malaikat mengikuti bacaan tasbihnya. Ketika Allah menciptakan Nabi Adam, maka nur itu diletakkan pada tanah liat asal kejadian Nabi Adam. Nabi ﷺ bersabda: Lalu Allah Yang Maha Perkasa dan Maha Agung menurunkan nur itu ke bumi melalui punggung Nabi Adam dan membawaku ke dalam kapal, dan menjadikan aku dalam tulang rusuk sang kekasih, yakni Nabi lbrohim ketika dilempar ke dalam api. Tiada henti-hentinya Allah Yang Maha Perkasa dan Maha Agung memindahkan aku dari beberapa tulang rusuk yang suci, sampai pada rahim yang suci dan megah, hingga Allah melahirkan aku melalui kedua orang tuaku, dan keduanya tidak pernah berbuat zina sama sekali.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 13
    [
      {
        translation: "Al-Hadistu Tsaniy",
      },
      {
        arabic:
          "اَلْحَدِيْثُ الثَّانِيُّ عَنْ عَطَاءِ بْنِ يَسَارٍ. عَنْ كَعْبِ الْأَحْبَارِ. قَالَ: عَلَّمَنِيْ أَبِيْ التَّوْرَاةَ إِلَّا سِفْرًا وَاحِدًا كَانَ يَخْتِمُهٗ وَيُدْخِلُهُ الصُّنْدُوْقَ. فَلَمَّا مَاتَ أَبِيْ فَتَحْتُهٗ فَإِذًا فِيْهِ نَبِيٌّ يَخْرُجُ اٰخِرَ الزَّمَانِ. مَوْلِدُهٗ بِمَكَّةَ. وَهِجْرَتُهٗ بِالْمَدِيْنَةِ. وَسُلْطَانُهٗ بِالشَّامِ. يَقُصُّ شَعْرَهٗ وَيَتَّزِرُ عَلَى وَسَطِهِ. يَكُوْنُ خَيْرَ اْلأَنْبِيَآءِ وَأُمَّتُهٗ خَيْرَ الْأُمَمِ. يُكَّبِرُوْنَ اللهَ تَعَالٰى عَلَى كُلِّ شَرَفٍ. يَصُفُّوْنَ فِي الصَّلاَةِ كَصُفُوْفِهِمْ فِي الْقِتَالِ. قُلُوْبُهُمْ مَصَاحِفُهُمْ يَحْمَدُوْنَ اللهَ تَعَالىٰ عَلَى كُلِّ شِدَّةٍ وَّرَخَآءٍ. ثُلُثٌ يَّدْخُلُوْنَ الْجَنَّةَ بِغَيْرِ حِسَابٍ. وَثُلُثٌ يَّأْتُوْنَ بِذُنُوْبِهِمْ وَخَطَايَاهُمْ فَيُغْفَرُ لَهُمْ. وَثُلُثٌ يَّأْتُوْنَ بِذُنُوْبٍ وَخَطَايَا عِظَامٍ. فَيَقُوْلُ اللهُ تَعَالىٰ لِلْمَلَآئِكَةِ ٱذْهَبُوْا وَزِنُوْهُمْ فَيَقُوْلُوْنَ يَا رَبَّنَا وَجَدْنَاهُمْ أَسْرَفُوْا عَلَى أَنْفُسِهِمْ وَوَجَدْنَا أَعْمَالَهُمْ مِّنَ الذُّنُوْبِ كَأَمْثَالِ الْجِبَالِ. غَيْرَ أَنَّهُمْ يَشْهَدُوْنَ أَنْ لَآ إِلٰهَ إِلَّا اللهُ. وَأَنَّ مُحَمَّدًا رَّسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ",
        latin:
          "Al-ḫaditsuts-tsânîyyu ‘an ‘athâ`ib-ni yasârin, ‘an ka’binl-aḫbâr, qâla: ‘allamanî abit-taurâta illâ sifran wâḫidan kâna yakhtimuhu wa yudkhiluhush-shundûqa, falammâ mâta abî fataḫtuhu fa idzan fîhi nabiyyun yakhruju âkhiraz-zamâni, mauliduhu bimakkata, wa hijratuhu bil-madînati, wa sulthânuhu bisy-syâmi, yaqushshu sya’rahu wa yattaziru ‘alâ wasathihi, yakûnu khairal-anbiyâ`i wa ummatuhu khairal-umami, yukabbirûnallâha ta’âlâ ‘alâ kulli syarafin, yashuffûna fish-shalâti kashufûfihim fil-qitâli, qulûbuhum mashâḫifuhum yaḫmadûnallâha ta’âlâ ‘alâ kulli syiddatin wa rakhâ`in, tsulutsun yadkhulûnal-jannata bighairi ḫisâbin, wa tsulutsun ya`tuna bidzunûbihim wa khathâyâhum fayughfaru lahum, wa tsulutsun ya`tuna bidzunûbihim wa khthâyâhum fayughfaru lahum, wa tsulutsun ya`tuna bidzunûbin wa khathâyâ ‘idhâmin, fayaqûlullâhu ta’alâ lil-malâ`ikatidz-habû wazinûhum fayaqûlûna yâ rabbanâ wajadnâhum asrafû ‘alâ anfusihim wawajadnâ a’mâlahum mindz-dzunûbi ka`amtsâlil-jibâli, ghaira annahum yashhadûna an lâ ilâha illallâhu, wa anna muḫammadn rasûlullâhi shallallâhu ‘alaihi wa sallama.",
        translation:
          "Hadits kedua riwayat dari ‘Atho bin Yasar dari Ka’ab Al-Ahbar telah berkata: Ayahku telah mengajarkan kepadaku kitab Taurat hingga tamat, kecuali selembar saja yang tidak diajarkan dan memasukkannya ke dalam peti. Maka setelah ayahku meninggal, aku membuka peti itu, ternyata selembar kitab Taurat tadi menerangkan tentang akan Iahirnya nabi akhir zaman, yang tempat kelahirannya di kota Makkah dan dan hijrah ke Madinah serta kekuasaannya meluas ke negeri Syam. Beliau mencukur rambutnya dan berkain pada pinggangnya. Beliau adalah sebaik-baiknya para nabi, dan umatnya juga sebaik-baik umat. Mereka bertakbir mengagungkan kebesaran Allah Yang Mahatinggi atas segala kemuliaan. Mereka berbaris pada waktu shalat sebagaimana barisan mereka di dalam peperangan. Hati mereka adalah kitab sucinya. Mereka selalu memuji Allah dalam keadaan suka dan duka. Sepertiga dari mereka masuk surga tanpa dihisab, sepertiga lagi datang dengan dosa-dosanya, lalu diampuni. Dan yang sepertiga lainnya datang dengan dosa-dosa dan kesalahan-kesalahan besar. Maka Allah Ta’ala berfirman kepada malaikat: Pergilah dan timbanglah amal perbuatan mereka. Lalu para malaikat berkata: Wahai Tuhan kami, telah kami dapatkan mereka melampaui batas dalam menyia-nyiakan dirinya sendiri, dan kami dapatkan amal-amal mereka penuh dari dosa-dosa bagaikan besarnya gunung-gunung. Pada sisi lainnya mereka sungguh bersaksi bahwa tiada Tuhan melainkan Allah dan sesungguhnya Nabi Muhammad ﷺ itu adalah utusan Allah.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 14
    [
      {
        translation: "Fayaquulu Haq",
      },
      {
        arabic:
          "فَيَقُوْلُ الْحَقُّ وَعِزَّتِيْ وَجَلَالِيْ. لَا جَعَلْتُ مَنْ أَخْلَصَ لِيْ بِالشَّهَادَةِ كَمَنْ كَذَّبَ بِيْ. أَدْخِلُوْهُمُ الْجَنَّةَ بِرَحْمَتِيْ. يَا أَعَزَّ جَوَاهِرِ الْعُقُوْدِ. وَخُلَاصَةَ إِكْسِيْرِ سِرِّ الْوُجُوْدِ. مَادِحُكَ قَاصِرٌ وَّلَوْ جَآءَ بِبَذْلِ الْمَجْهُوْدِ. وَوَاصِفُكَ عَاجِزٌ عَنْ حَصْرِ مَا حَوَيْتَ مِنْ خِصَالِ الْكَرَمِ وَالْجُوْدِ. اَلْكَوْنُ إِشَارَةٌ وَأَنْتَ الْمَقْصُوْدُ. يَا أَشْرَفَ مَنْ نَالَ الْمَقَامَ الْمَحْمُوْدَ. وَجَآءَتْ رُسُلٌ مِنْ قَبْلِكَ لٰكِنَّهُمْ بِالرِّفْعَةِ وَالْعُلَا لَكَ شُهُوْدٌ",
        latin:
          "Fayaqûlul-ḫaqqu wa ‘izzitî wa jalâlî, lâ ja’altu man akhlasha lî bisy-syahâdati kaman kadzdzaba bî, adkhilûhumul-jannata biraḫmatî, yâ a‘azza jawâhiril-‘uqûdi, wa khulâshata iksîri sirril-wujûdi, mâ diḫuka qâshirun wa lâ jâ'a bibadzlil-majhûdi, wa wâshifuka ‘âjizun ‘an ḫashri mâ ḫawaita min khishâlil-karami wal-jûdi, al-kaunu isyâratun wa antal-maqshûdu, yâ asyrafa man nâlal-maqâmal-maḫmûda, wa jâ'at rusulun min qablika lâkinnahum bir-rif‘ati wal-‘ulâ laka syuhûdun.",
        translation:
          "Maka Allah berfirman: Demi keagungan dan keagungan-Ku, tidaklah Aku jadikan orang yang tulus ikhlas bersaksi kepada-Ku itu seperti orang yang mendustakan Aku. Mereka Aku masukkan surga dengan rahmat-Ku. Wahai orang yang termulia laksana untaian mutiara dan intisari permata rahasia keberadaan . Orang yang memujimu merasa kekurangan walaupun dengan mengerahkan seluruh kekuatannya. Dan orang yang mensifatimu merasa tak berdaya melukiskan apa yang meliputi engkau dari tingkah laku yang mulia dan pemurah. Alam semesta memberi isyarat dan engkaulah yang dimaksud. Wahai orang termulia yang telah memperoleh kedudukan yang terpuji. Dan telah datang para rasul sebelum engkau, tetapi mereka bersaksi atas kemuliaan dan keluhuran serta ketinggian derajatmu.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 15
    [
      {
        translation: "Ahdhiruu Quluubakum",
      },
      {
        arabic:
          "أَحْضِرُوْا قُلُوْبَكُمْ يَا مَعْشَرَ ذَوِي الْأَلْبَابِ. حَتَّى أَجْلُوَ لَكُمْ عَرَآئِسَ مَعَانِي أَجَلِّ الْأَحْبَابِ. اَلْمَخْصُوْصِ بِأَشْرَفِ الْأَلْقَابِ. اَلرَّاقِيْ إِلَى حَضْــرَةِ الْمَلَكِ الْوَهَّابِ. حَتَّى نَظَرَ إِلَى جَمَالِهٖ بِلَا سِتْرٍ وَّلَا حِجَابٍ. فَلَمَّا اٰنَ أَوَانُ ظُهُوْرِ شَمْسِ الرِّسَالَةِ. فِيْ سَمَآءِ الْجَلَالَةِ. خَرَجَ بِهِ مَرْسُوْمُ الْجَلِيْلِ. لِنَقِيْبِ الْمَمْلَكَةِ جِبْرِيْلَ. يَا جِبْرِيْلُ نَادِ فِيْ سَآئِرِ الْمَخْلُوْقَاتِ. مِنْ أَهْلِ الْأَرْضِ وَالسَّمٰوَاتِ. بِالتَّهَانِيْ وَالْبِشَارَاتِ. فَإِنَّ النُّوْرَ الْمَصُوْنَ. وَالسِّـرَّ الْمَكْنُوْنَ. اَلَّذِيْ أَوْجَدْتُهٗ قَبْلَ وُجُوْدِ الْأَشْيَآءِ. وَإِبْدَاعِ الْأَرْضِ وَالسَّمَآءِ. أَنْقُلُهٗ فِي هٰذِهِ اللَّيْلَةِ إِلَى بَطْنِ أُمِّهٖ مَسْــرُوْرًا. أَمْلَاءُ بِهِ الْكَوْنَ نُوْرًا. وَأَكْفُلُهٗ يَتِيْمًا وَأُطَهِّرُهٗ وَأَهْلَ بَيْتِهٖ تَطْهِيْرًا",
        latin:
          "Aḫdlirû qulûbakum yâ ma‘syara dzawil-albâbi, ḫattâ ajluwa lakum ‘arâ’isa ma‘ânî ajallil-aḫbâbi, al-makhshûsi bi asyrafil-alqâbi, ar-râqî ilâ ḫadlratil-malakil-wahhâbi, ḫattâ nadhara ilâ jamâlihî bilâ sitrin wa lâ ḫijâbin, falammâ âna awânu dhuhûri syamsir-risâlati, fî samâ’il-jalâlati, kharaja bihi marsûmul-jalîl, linaqîbil-mamlakati jibrîla, yâ jibrîlu nâdi fî sâ’iril-makhlûqâti, min ahlil-ardli was-samâwâti, bit-tahânî wal-bisyârâti, fainnan-nûral-mashûna, was-sirral-maknûna, alladzî aujadtuhu qabla wujûdil-asyyâ’i, wa ibdâ’il-ardli was-samâ’i, anqaluhu fî hâdzihil-lailati ilâ bathni ummihî masrûran, amlâ’u bihil-kauna nûran, wa akfuluhu yatîman wa uthahhiruhu wa ahla baitihi tathhîran.",
        translation:
          "Hadirkanlah hati kalian, wahai golongan orang yang berakal. sehingga dapat kujelaskan kepadamu makna keagungan seorang kekasih yang paling di cintai Allah yang telah dikhususkan dengan julukan termulia. Yang pernah naik menghadap Raja Yang Maha Pemberi. Sehingga dapat melihat keindahan-Nya tanpa tutup dan tanpa tirai. Tatkala tiba saat lahirnya sinar kerasulan di langit yang agung, Keluarlah perintah Allah yang Maha Agung Kepada sang juru warta yakni malaikat Jibril. Wahai jibril, serukan kepada seluruh makhluk penghuni bumi dan langit, agar menyambutnya dengan riang dan gembira. Karena sesungguhnya nur yang terpelihara dan rahasia yang tersimpan yang Aku ciptakan sebelum wujudnya sesuatu. Dan sebelum terciptanya bumi dan langit-langit. Pada malam ini Aku pindahkan nur itu ke dalam perut ibunya dengan penuh kegembiraan. Aku penuhi seluruh alam dengan cahayanya. Aku pelihara dalam keadaan yatim-piatu dan Aku sucikan dia beserta para keluarganya dengan sesuci-sucinya.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 16
    [
      {
        translation: "Fahtazzal Arsyu",
      },
      {
        arabic:
          "فَاهْتَزَّ الْعَرْشُ طَرَبًا وَاسْتِبْشَارًا. وَازْدَادَ الْكُرْسِيُّ هَيْبَةً وَوَقَارًا. وَامْتَلَأَتِ السَّمٰوَاتُ أَنْوَارًا. وَضَجَّتِ الْمَلَآئِكَةُ تَهْلِيْلًا وَتَمْجِيْدًا وَاسْتِغْفَارًا. ﴿سُبْحَانَ الله وَالْحَمْدُ ِللّٰهِ وَلَآإِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ ×٣﴾. وَلَمْ تَزَلْ أمُّهٗ تَرٰى أَنْوَاعًا مِنْ فَخْرِهِ وَفَضْلِهِ. إِلَى نِهَايَةِ تَمَامِ حَمْلِهِ. فَلَمَّا اشْتَدَّ بِهَا الطَّلْقُ. بِـإِذْنِ رَبِّ الْخَلْقِ. وَضَعَتِ الْحَبِيْبَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. سَاجِدًا شَاكِـرًا حَامِدًا كَأَنَّهُ الْبَدْرُ فِيْ تَمَامِهِ",
        latin:
          "Fahtazzal-‘arsyu tharaban wastibsyâran, wazdâdal-kursiyyu haibatan wa waqâran, wamtala'atis-samâwâtu anwâran, wadlajjatil-malâ'ikatu tahlîlan wa tamjîdan was-tighfâran. ﴾subḫânallâh wal-ḫamdu lillâhi wa lâ ilâha illallâhu wallâhu akbar 3x﴿ wa lam tazal ummuhu tarâ anwâ‘an min fakhrihi wa fadllihi, ilâ nihâyati tamâmi ḫamlihi, falammasy-tada bihath-thalqu, bi idzni rabbil-khalqi, wa dla‘atil-ḫabîba shallallâhu ‘alaihi wa sallama, sâjidan syâkiran ḫâmidan ka annahul-badru fî tamâmihi.",
        translation:
          "Maka berguncanglah ‘Arsy penuh suka cita dan riang gembira. Dan Kursi Allah bertambah wibawa dan tenang karena memuliakannya. Dan langit penuh dengan cahaya, serta bergemuruh suara malaikat membaca tahlil, tamjid dan istighfar. (Mahasuci Allah, limpahan puji bagi Allah, tiada Tuhan selain Allah, dialah Allah yang Mahabesar (3x). Dan ibunya tiada henti-hentinya melihat bermacam-macam keajaiban dari keistimewaan dan keutamaan janin hingga sempurna masa kandungannya, Maka ketika ibunya telah merasakan sakit karena kandungannya akan lahir, dengan izin Tuhannya, Tuhan Pencipta makhluk, Lahirlah kekasih Allah Muhammad ﷺ dalam keadaan sujud, bersyukur dan memuji, sedangkan wajahnya bagaikan sempurnanya bulan purnama.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 17
    [
      {
        translation: "Mahalul Qiyam (Ya Nabi Salam 'Alaika)",
      },
      {
        arabic:
          "يَــــا نَبِيْ سَـــــلَامٌ عَلَيْكَ يَا رَسُوْل سَــلَامٌ عَلَيْكَ",
        latin: "Yâ nabî salâmun ‘alaika yâ rasûl salâmun ‘alaik",
        translation:
          "Wahai Nabi ﷺ, semoga salam tercurahkan untukmu. Wahai Rasul, semoga salam tercurahkan untukmu",
      },
      {
        arabic: "يَا حَبِيْب سَلَامٌ عَلَيْكَ صَـــلَوَاتُ اللهِ عَلَيْــــكَ",
        latin: "Yâ ḫabîb salâmun ‘alaik shalawâtullâhi ‘alaik",
        translation:
          "Wahai kekasih, semoga keselamatan tetap untukmu. Juga rahmat Allah semoga tercurah untukmu",
      },
      {
        arabic:
          "أَشْرَقَ الْبَــــدْرُ عَـلَيْنَـــا فَاخْتَــــفَــــتْ مِنْــــهُ الْبُدُوْرُ",
        latin: "Asyraqal-badru ‘alainâ fakhtafat minhul-budûru",
        translation:
          "Bulan purnama telah terbit menyinari kami. Pudarlah purnama-purnama lainnya.",
      },
      {
        arabic:
          "مِثْلَ حُسْنِكْ مَا رَأَيْنَا قَــــطُّ يَا وَجْــــهَ السُّــــرُوْرِ",
        latin: "Mitsla ḫusnik mâ ra'ainâ qaththu yâ wajhas-surûri",
        translation:
          "Belum pernah aku lihat keelokan sepertimu, wahai orang yang berwajah riang.",
      },
      {
        arabic: "أَنْتَ شَمْـسٌ أَنْتَ بَدْرٌ أَنْتَ نُورٌ فَوقَ نُورٍ",
        latin: "Anta syamsun anta badrun anta nûrun fauqa nûrin",
        translation:
          "Engkau bagaikan matahari, engkau bagaikan bulan purnama, engkau cahaya di atas cahaya",
      },
      {
        arabic:
          "أَنْتَ إِكْسِــــيْرٌ وَغَــالِي أَنْتَ مِصْبَاحُ الصُّـدُوْرِ",
        latin: "Anta iksîrun wa ghâlî anta mishbâḫush-shudûri",
        translation:
          "Engkau bagaikan emas murni yang mahal harganya, engkaulah lentera hati.",
      },
      {
        arabic:
          "يَــــا حَبِيْبِيْ يَـــــا مُحَمَّــدُ يَا عَرُوْسَ الْخَـــافِقَـــيْنِ",
        latin: "Yâ ḫabîbî yâ muḫammadu yâ ‘arûsal-khâfiqaini",
        translation:
          "Wahai kekasihku, wahai Muhammad, wahai pengantin tanah timur dan barat (sedunia)",
      },
      {
        arabic:
          "يَـــــا مُؤَيَّــدْ يَــــا مُمَجَّـــدُ يَا إِمَامَ الْقِبْلَتَــــيْنِ",
        latin: "Yâ mu'ayyad yâ mumajjad yâ imâmal-qiblataini",
        translation:
          "Wahai Nabi yang dikuatkan (dengan wahyu), wahai Nabi yang diagungkan, wahai imam dua arah kiblat (Baitul Maqdis dan Masjidil Haram).",
      },
      {
        arabic:
          "مَنْ رَاٰى وَجْهَـــكَ يَسْعَدُ يَا كَــــرِيْمَ الْوالِدَيْنِ",
        latin: "Man râ'a wajhaka yas‘adu yâ karîmal-wâlidaini",
        translation:
          "Siapa pun yang melihat wajahmu pasti beruntung, wahai orang yang mulia kedua orang tuanya.",
      },
      {
        arabic: "حَوْضُكَ الصَّافِي الْمُبَرَّدُ وِرْدُنَا يَوْمَ النُّشُورِ",
        latin: "ḫaudlukash-shâfil-mubarradu wirdunâ yauman-nusyûri",
        translation:
          "Telagamu jernih dan segar, yang akan kami datangi kelak di hari kebangkitan.",
      },
      {
        arabic:
          "مَا رَأَيْـنَـــا الْعِيْسَ حَنَّتْ بِالسُّـــرٰى إِلَّا اِلَيْـــكَ",
        latin: "Mâ ra ainal-‘îsa ḫannat bis-surâ illâ ilaika",
        translation:
          "Belum pernah unta putih bercorak kekuning-kekuningan (jenis unta terbaik) berjalan malam hari kecuali unta yang datang kepadamu.",
      },
      {
        arabic:
          "وَالْغَمَــامَــــةْ قَـــدْ أَظَلَّتْ وَالْمَــلَا صَـلَّى عَلَيْكَ",
        latin: "Wal-ghamâmat qad adhallat wal-malâ shallâ ‘alaika",
        translation:
          "Awan tebal memayungimu, seluruh golongan makhluk mengucapkan shalawat kepadamu.",
      },
      {
        arabic:
          "وَأَتَــــــاكَ الْعُـودُ يَبْـــــكِى وَتَـــذَلَّلْ بَيْنَ يَدَيْكَ",
        latin: "Wa atâkal-‘ûdu yabkî wa tadzallal baina yadaika",
        translation:
          "Pohon-pohon datang kepadamu menangis bersimpuh merasa hina di hadapanmu.",
      },
      {
        arabic:
          "وَاسْتَجَـــارَتْ يَا حَبِيْــبِي عِنْدَكَ الظَّــــبْيُ النُّـــفُوْرُ",
        latin: "Wastajârat yâ ḫabîbî ‘indakadh-dhabyun-nufûru",
        translation:
          "Kijang gesit datang memohon keselamatan kepadamu, wahai sang kekasih.",
      },
      {
        arabic:
          "عِنْدَ مَا شَدُّوْا الْمَحَامِلْ وَتَنَــــادَوْا لِلرَّحِيْــــلِ",
        latin: "‘inda mâ syaddul-maḫâmil watanâdau lir-raḫîli",
        translation:
          "Ketika serombongan berkemas dan menyerukan untuk berangkat",
      },
      {
        arabic:
          "جِئْتُهُمْ وَالدَّمْـــعُ سَائِـــلْ قُلْتُ قِفْ لِي يَا دَلِيْــــلُ",
        latin: "Ji'tuhum wad-dam‘u sâ'il qultu qif lî yâ dalîlu",
        translation:
          "Kudatangi mereka dengan berlinang air mata seraya kuucapkan tunggulah, wahai pemimpin rombongan",
      },
      {
        arabic:
          "وَتَحَمَّلْ لِيْ رَسَـــائِــــلْ أَيُّهَا الشَّوقُ الْجَـــزِيْلُ",
        latin: "Wa taḫammal lî rasâ'il ayyuhasy-syauqul-jazîlu",
        translation: "Bawakan aku surat yang berisikan kerinduan yang mendalam",
      },
      {
        arabic: "نَحْوَ هَاتِيْـــكَ الْمَنَازِلْ بِالْعَشِيِّ وَالْبُكُورِ",
        latin: "Naḫwa hâtîkal-manâzil bil-‘asyiyyi wal-bukûri",
        translation:
          "Membawakan ke tempat yang jauh ketika petang dan paginya.",
      },
      {
        arabic:
          "كُلُّ مَنْ فِي الْكَوْنِ هَامُوْا فِيْكَ يَا بَاهِي الْجَبِـــيْنِ",
        latin: "Kullu man fil-kauni hâmû fîka yâ bâhil-jabîni",
        translation:
          "Setiap orang di jagad raya ini bingung (karena sangat rindu) kepadamu, wahai orang yang bersinar kedua keningnya.",
      },
      {
        arabic:
          "وَلَهُـــــــمْ فِيْـــكَ غَـــــرَامُ وَاشْتِيَـــــاقٌ وَحَنِـــيْنُ",
        latin: "Wa lahum fîka gharâmu wasy-tiyâqun wa ḫanînu",
        translation:
          "Mereka terpikat, tergila-gila, dan meronta-ronta denganmu tentang sifatmu.",
      },
      {
        arabic:
          "فِي مَعَـــانِيْــــكَ الْأَنَـــامُ قَدْ تَبَدَّتْ حَــآئِــــرِيْنَ",
        latin: "Fî ma‘ânîkal-anâmu qad tabaddat ḫâ'irîna",
        translation:
          "Para makhluk berbeda pendapat dan bingung (tidak mampu menyifati dengan sempurna)",
      },
      {
        arabic: "أَنْتَ لِلرُّسْـــلِ خِتَـــــامُ أَنْتَ لِلْمَولىٰ شَكُورُ",
        latin: "Anta lir-rusli khitâmu anta lilmaulâ syakûru",
        translation:
          "Engkau adalah penutup para utusan, engkau adalah orang yang paling banyak bersyukur kepada Allah.",
      },
      {
        arabic:
          "عَبْدُكَ الْمِسْكِيْنُ يَرْجُوْ فَضْلَكَ الْجَـــمَّ الْغَفِــــيْرَ",
        latin: "‘abdukal-miskînu yarju fadllakal-jammal-ghafîru",
        translation:
          "Hambamu (umatmu) yang miskin mengharap anugerahmu yang melimpah ruah.",
      },
      {
        arabic:
          "فِيْكَ قَدْ أَحْسَنْتُ ظَنِّي يَـــــا بَشِـــيْرُ يَــــا نَـــذِيْرُ",
        latin: "Fîka qad aḫsantu dhannî yâ basyîru yâ nadzîru",
        translation:
          "Aku berbaik sangka kepadamu, wahai pemberi kabar gembira dan pemberi peringatan.",
      },
      {
        arabic:
          "فَــــــأَغِثْنِيْ وَأَجِـــــــرْنِي يَا مُجِيْرُ مِنَ السَّعِــــيْرِ",
        latin: "Fa aghitsnî wa ajirnî yâ mujîru minas-sa’îri",
        translation:
          "Maka tolonglah aku dan selamatkan aku, wahai sang penyelamat, dari neraka Sa‘ir.",
      },
      {
        arabic: "يَـــاغِيَـــاثِي يَا مَـــلَاذِيْ فِيْ مُهِمَّاتِ الْأُمُورِ",
        latin: "Yâ ghiyâtsi yâ malâdzî fî muhimmâtil-umûri",
        translation:
          "Wahai penolongku, wahai tempat berlindungku dalam perkara-perkara yang menyulitkan.",
      },
      {
        arabic:
          "سَعْدَ عَبْــــدٌ قَدْ تَمَـــلَّى وَانْجَــــلىٰ عَنْـــهُ الْحَزِيْنُ",
        latin: "Sa‘da ‘abdun qad tamalla wanjalâ ‘anhul-ḫazînu",
        translation:
          "Berbahagialah dan hilanglah kesusahan hamba yang senang kepadamu.",
      },
      {
        arabic:
          "فِيْـــكَ يَـــــا بَدْرٌ تَجَـــــلَّى فَلَكَ الْوَصْـــفُ الْحَسِينُ",
        latin: "Fîka yâ badrun tajallâ falakal-washful-ḫasînu",
        translation:
          "Wahai bulan purnama yang tampak terang, engkaulah pemilik sifat yang indah",
      },
      {
        arabic:
          "لَيْسَ أَزْكىٰ مِنْكَ أَصْلاً قَــطُّ يَا جَدَّ الْحُـسَــــيْنِ",
        latin: "Laisa azkâ minka ashlâ qaththu yâ jaddal-ḫusaini",
        translation:
          "Tiada orang yang leluhur nasabnya lebih suci darimu sama sekali, wahai kakek Hasan dan Husain.",
      },
      {
        arabic:
          "فَعَلَيْـــكَ اللهُ صَـــــلَّى دَآئِمًــــــا طُولَ الدُّهُورِ",
        latin: "Fa’alaikallâhu shallâ dâ'iman thûlad-duhûri",
        translation: "Bagimu shalawat Allah selamanya sepanjang masa.",
      },
      {
        arabic:
          "يَــــا وَلِيَّ الْحَسَنَــــاتِ يَا رَفِيْـــعَ الدَّرَجَــــاتِ",
        latin: "Yâ waliyyal-ḫasanâti yâ rafî‘ad-darajâti",
        translation:
          "Wahai Dzat Penguasa kebaikan, wahai Dzat Yang berpangkat Tinggi",
      },
      {
        arabic:
          "كَفِّــــرْ عَنِّيَ الذُّنُوبَ وَاغْفِرْ عَنِّي السَّيئَــــاتِ",
        latin: "Kaffir ‘annîyadz-dzunûba waghfir ‘anni sayyi`âti",
        translation:
          "Hapuslah dosa-dosa dariku dan ampunilah kesalahan kesalahanku.",
      },
      {
        arabic: "أَنْتَ غَـــفَّارُ الْخَطَايَا وَالذُّنُوْبِ الْمُوبِقَـــاتِ",
        latin: "Anta ghaffârul-khathâyâ wadz-dzunûbil-mûbiqâti",
        translation:
          "Engkau adalah Maha Pengampun kesalahan kesalahan dan dosa yang merusakkan.",
      },
      {
        arabic: "أَنْتَ سَـتَّارُ الْمَسَاوِيْ وَمُقِيْــــلُ الْعَـــثَرَاتِ",
        latin: "Anta sattârul-masâwî wa muqîlul-‘atsarâti",
        translation:
          "Engkau adalah Yang Menutupi kejelekan dan menyelamatkan dari kesalahan.",
      },
      {
        arabic: "عَالِـــمُ السِّــــرِّ وَأَخْفىٰ مُسْتَجِيْبُ الدَّعَوَاتِ",
        latin: "‘âlimus-sirri wa akhfâ mustajîbud-da’âwâti",
        translation:
          "Engkau Maha Mengetahui rahasia dan kesamaran, Engkau adalah Pengabul doa.",
      },
      {
        arabic: "رَبِّ فَارْحَمْـنَا جَمِيْـعًا وَامْحُ عَنَّا السَّيِّئَاتِ",
        latin: "Rabbi farḫamnâ jamî‘an wamḫu ‘annâs-sayyi'âti",
        translation:
          "Ya Rabb, belas kasihanilah kami semua dan hapuslah keburukan-keburukan dari diri kami.",
      },
      {
        arabic:
          "وَصَــــلَاةُ اللهِ تَغْشَــــا عَدَّ تَحْـــــرِيْرِ السُّطُورِ",
        latin: "Wa shalâtullâhi taghsyâ ‘adda taḫrîris-suthûri",
        translation:
          "Rahmat Allah semoga senantiasa tercurah, selama masih terbuka catatan amal hamba",
      },
      {
        arabic: "أَحْمَــدَ الْهَادِيْ مُحَمَّـدْ صَاحِبَ الْوَجْهِ الْمُنِيرِ",
        latin: "Aḫmadal-hâdî muḫammad shâḫibal-wajhal-munîri",
        translation:
          "Ahmad sang petunjuk yaitu Nabi Muhammad pemilik wajah yang bersinar",
      },
      {
        arabic: "رَبِّ فَارْحَمْنَاجَمِيْـعًــــا بِجَمِيْعِ الصَّالِحَــــاتِ",
        latin: "Rabbi farḫamnâ jamî‘an bijamî‘ish-shâliḫâti",
        translation:
          "Ya Allah, rahmatilah kami semuanya dengan segala untaian kebaikan!",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi",
        translation:
          "Ya Allah, limpahkanlah rahmat, keselamatan, dan keberkahan kepadanya (Nabi Muhammad SAW)",
      },
    ],

    //Halaman 18
    [
      {
        translation: "Wawulida Shallallâhu",
      },
      {
        arabic:
          "وَوُلِدَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مَخْتُوْنًا بِيَدِ الْعِنَايَةِ. مَكْحُوْلاً بِكُحْلِ الْهِدَايَةِ. فَأَشْرَقَ بِبَهَآئِهِ الْفَضَا. وَتَلَأْلَأَ الْكَوْنُ مِنْ نُوْرِهٖ وَأَضَا. وَدَخَلَ فِيْ عَقْدِ بَيْعَتِهٖ مَنْ بَقِيَ مِنَ الْخَلَآئِقِ كَمَا دَخَلَ فِيْهَا مَنْ مَّضٰى أَوَّلُ فَضِيْلَةِ الْمُعْجِزَاتِ. بِخُمُوْدِ نَارِ فَارِسَ وَسُقُوْطِ الشُّــرُفَاتِ. وَرُمِيَتِ الشَّيَاطِيْنُ مِنَ السَّمَآءِ بِالشُّهُبِ الْمُحْرِقَاتِ. وَرَجَعَ كُلُّ جَبَّارٍ مِنَ الْجِنِّ وَهُوَ بِصَوْلَةِ سُلْطَنَتِهٖ ذَلِيْلٌ خَاضِعٌ. لَمَّا تَأَلَّقَ مِنْ سَنَاهُ النُّوْرُ السَّاطِعُ. وَأَشْرَقَ مِنْ بَهَآئِهِ الضِّيَاءُ اللَّامِعُ. حَتَّى عُرِضَ عَلَى الْمَرَاضِعِ",
        latin:
          "Wa wulida shallallâhu ‘alaihi wa sallam makhtûnan biyadil-‘inâyati, makḫûlan bikuḫlil-hidâyati, fa asyraqa bibahâ’ihil-fadlâ, wa tala’la’al-kaunu min nûrihî wa adlâ, wa dakhala fî ‘aqdi bai‘atihî man baqiya minal-khalâ’iqi kamâ dakhala fîhâ man madlâ. Awwalu fadlîlatil-mu‘jizatâti. Bikhumûdi nâri fârisa wa suqûthisy-syurufâti, wa rumiyatisy-syayâthînu minas-samâ’i bisy-syuhubil-muḫriqâti, wa raja‘a kullu jabbâri minal-jinni wa huwa bishaulati sulthanatihi dzalîlun khâdi‘un, lamma ta’allaqa min sanâhun-nûrus-sâthi‘u. wa asyraqa min bahâ’ihidl-dliyâ’ul-lâmi. ḫatta ‘urida ‘alal-marâdli’i",
        translation:
          "Nabi Muhammad ﷺ dilahirkan dalam keadaan telah berkhitan dengan pertolongan Allah. Dengan mata bercelak petunjuk Allah. Dengan keindahannya, padang gurun yang luas pun tersinarkan. Dari sebab cahayanya keadaan alam semesta menjadi terang-benderang. Dan makhluk-makhluk setelahnya pun segera masuk dalam ikatan baiatnya, sebagaimana makhluk-makhluk terdahulu pernah memasukinya. Mukjizat agung pertamanya adalah padamnya api sesembahan di negeri Persia, bersamaan dengan runtuhnya gedung-gedung kehormatan di sana, dan dilemparkannya setan-setan dari langit dengan bintang-bintang yang membakar. Seketika, semua raja jin yang dengan angkuh menguasai kerajaannya menjadi hina dan tunduk. Semua itu terjadi ketika cahaya (Nabi Muhammad ﷺ) yang cemerlang memancar. Dan menjadi teranglah semesta raya dengan keindahan cahaya yang gemerlap. Sampai tiba waktunya Nabi diserahkan kepada wanita yang menyusui.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 19
    [
      {
        translation: "Qîla Man Yakfulu",
      },
      {
        arabic:
          "قِيْلَ مَنْ يَّكْفُلُ هٰذِهِ الدُّرَّةَ الْيَتِيْمَةَ. اَلَّتِيْ لَا تُوْجَدُ لَهَا قِيْمَةٌ. قَالَتِ الطُّيُوْرُ نَحْنُ نَكْفُلُهٗ وَنَغْتَنِمُ هِمَّتَهُ الْعَظِيْمَةَ. قَالَتِ الْوُحُوْشُ نَحْنُ أَوْلٰى بِذٰلِكَ لِكَيْ نَنَالَ شَرَفَهٗ وَتَعْظِيْمَهُ. قِيْلَ يَا مَعْشَرَ الْأُمَمِ اسْكُنُوْا فَإِنَّ اللهَ قَدْ حَكَمَ فِيْ سَابِقِ حِكْمَتِهِ الْقَدِيْمَةِ. بِأَنَّ نَبِيَّهٗ مُحَمَّدًا صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَكُوْنُ رَضِيْعًا لِحَلِيْمَةَ الْحَلِيْمَةِ",
        latin:
          "Qîla man yakfulu hâdzihid-durratal-yatîmata, allatî lâ tûjadu lahâ qîmatun, qâlatith-thûyûru naḫnu nakfuluhu wa naghtatimu himmatahul-‘adhîmata, qâlatil-wuḫûsyu naḫnu aula bidzâlika likai nanâla syarafahu wa ta’dhîmahu, qîla yâ ma‘syaral-umamis-kunû fa innallâha qad ḫakama fî sâbiqi ḫikmatihil-qadîmati, bianna nabiyyahu muḫammadan shallallâhu ‘alaihi wa sallama yakûnu radlî’an liḫalîmatal-ḫalîmah.",
        translation:
          "Diserukan oleh malaikat: siapakah yang suka mengasuh anak yatim yang bagaikan permata yang tiada bandingnya kemahalan harganya..? Berkatalah sekelompok burung: kamilah yang sanggup mengasuh dan mengambil keuntungan cita-citanya yang agung. Betkatalah binatang-binatang liar: kamilah yamg lebih berhak mengasuhnya agar memperoleh kemuliaan dan keagunganya. Diserukan oleh Malaikat: hai golongan umat... Tenanglah kalian, karena sesungguhnya Allah benar-benar telah mutuskan sejak zaman dahulu kala, bahwasanya Nabi Muhammad ﷺ adalah hendak menyusu kepada seorang wanita bersama Siti Halimah yang penuh rasa kasih sayang",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 20
    [
      {
        translation: "Tsumma A‘radla ‘anhu",
      },
      {
        arabic:
          "ثُمَّ أَعْرَضَ عَنْهُ مَرَاضِعُ الْإِنْسِ لِمَا سَبَقَ فِيْ طَيِّ الْغَيْبِ. مِنَ السَّعَادَةِ لِحَلِيْمَةَ بِنْتِ أَبِيْ ذُؤَيْبٍ. فَلَمَّا وَقَعَ نَظَرُهَا عَلَيْهِ. بَادَرَتْ مُسْــرِعَةً إِلَيْهِ. وَوَضَعَتْهُ فِيْ حِجْرِهَا. وَضَمَّتْهُ إِلَى صَدْرِهَا. فَهَشَّ لَهَا مُتَبَسِّمًا. فَخَرَجَ مِنْ ثَغْرِهٖ نُوْرٌ لَّحِقَ بِالسَّمَآ. فَحَمَلَتْهُ إِلَى رَحْلِهَا. وَارْتَحَلَتْ بِهٖ إِلَى أَهْلِهَا. فَلَمَّا وَصَلَتْ بِهِ إِلَى مُقَامِهَا. عَايَنَتْ بَرَكَتُهٗ عَلَى أَغْنَامِهَا. وَكَانَتْ كُلَّ يَوْمٍ تَرٰى مِنْهُ بُرْهَانًا. وَتَرْفَعُ لَهٗ قَدْرًا وَّشَانًا. حَتَّى انْدَرَجَ فِيْ حُلَّةِ اللُّطْفِ وَالْأَمَانِ. وَدَخَلَ بَيْنَ إِخْوَتِهٖ مَعَ الصِّبْيَانِ",
        latin:
          "Tsumma a‘radla ‘anhu marâdli‘ul-insi limâ sabaqa fî thayyil-ghaibi, minas-sa‘âdati liḫalîmata binti abî dzu’aibin, falammâ waqa’a nadharuhâ ‘alaihi, bâdarat musri’atan ilaihi, wa wadla’athu fî ḫijrihâ, wa dlammathu ilâ shadrihâ, fahasysya lahâ mutabassiman, fakharaja min tsaghrihi nûrun laḫiq bis-samâ, faḫamalathu ilâ raḫlihâ, wartahâlat biḫî ilâ ahlihâ, falammâ washalat bihi ilâ muqâmihâ, ‘âyanat barakatuhu ‘alâ aghnamihâ, wa kânat kulla yaumin tarâ minhu burhânan, wa tartafa’u lahu qadran wa syânan, ḫattân-daraja fî ḫullatil-luthfi wal-amâni, wa dakhala baina ikhwâtihî ma’ash-shibyâni.",
        translation:
          "Kemudian berpalinglah para wanita yang biasa menyusui bayi-bayi karena suratan takdir memang telah menentukan. Kebahagiaan bagi Halimah binti Abi Dzuaib. Tatkala pandangan Halimah tertuju kepada Nabi, segera saja ia meraih bayi itu, meletakkan ke pangkuannya, dan mendekapkan ke dadanya. Sang jabang bayi menampakkan kegembiraan dan senyuman kepadanya. Lalu dari gigi depannya cahaya memancar hingga menembus langit. Kemudian Nabi pun dibawa Halimah menuju tunggangannya, lalu mereka berangkat menuju kampung halamannya. Ketika Halimah dan Nabi tiba di tempat, tampaklah keberkahan sang Nabi atas kambing-kambing ternaknya. Dan setiap hari Halimah melihat tanda-tanda yang luar biasa dari diri Nabi, meningkatnya taraf kehidupan dan kedudukan Halimah, sehingga Nabi pun semakin mendapat kasih sayang dan perlindungannya. serta dapat bergaul bebas dengan anak-anak asuhnya.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 21
    [
      {
        translation: "Fabainamal Habîbu",
      },
      {
        arabic:
          "فَبَيْنَمَا الْحَبِيْبُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ذَاتَ يَوْمٍ نَاءٍ عَنِ الْأَوْطَانِ. إِذْ أَقْبَلَ عَلَيْهِ ثَلَاثَةُ نَفَرٍ. كَأَنَّ وُجُوْهَهُمُ الشَّمْسُ وَالْقَمَرُ. فَانْطَلَقَ الصِّبْيَانُ هَرَبًا. وَوَقَفَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مُتَعَجِّبًا. فَأَضْجَعُوْهُ عَلَى الْأَرْضِ إِضْجَاعًا خَفِيْفًا. وَشَقُّوْا بَطْنَهُ شَقًّا لَطِيْفًا. ثُمَّ أَخْرَجُوا قَلْبَ سَيِّدِ وَلَدِ عَدْنَانَ. وَشَرَّحُوْهُ بِسِكِّيْنِ الْإِحْسَانِ. وَنَزَّعُوْا مِنْهُ حَظَّ الشَّيْطَانِ، وَمَلَؤُهُ بِالْحِلْمِ وَالْعِلْمِ وَالْيَقِيْنِ وَالرِّضْوَانِ. وَأَعَادُوْهُ إِلَى مَكَانِهِ فَقَامَ الْحَبِيْبُ صَلَّى اللهُ عَلَيْهَ وَسَلَّمَ سَوِيًّا كَمَا كَانَ",
        latin:
          "Fabainamal-ḫabîbu shallallâhu ‘alaihi wa sallama dzâta yaumin nâ’in ‘anil-authâni, idz aqbala ‘alaihi tsalâtsatu nafarin, ka anna wujûhahumusy-syamsu wal-qamaru, fanthalaqash-shibyânu haraban, wa waqafan-nabiyyu shallallâhu ‘alaihi wa sallama muta‘ajjiban, fa adlja‘ûhu ‘alal-ardli idljâ‘an khafîfan, wa syaqqû bathnahu syaqqan lathîfan, tsumma akhrajû qalba sayyidi waladi ‘adnâna, wa syarraḫûhu bisikkînil-iḫsâni, wa nazza‘û minhu ḫadhdhasy-syaithâni, wa mala’uhu bil-ḫilmi wal-‘ilmi wal-yaqîni war-ridlwâni, wa a‘âdûhu ilâ makânihi faqâmal-ḫabîbu shallallâhu ‘alaihi wa sallama sawiyyan kamâ kâna",
        translation:
          "Ketika beliau di suatu hari menjauh dari desa, ternyada ada tiga orang mengadap kepada beliau, seakan-akan wajah mereka itu matahari dan rembulan. Maka anak-anak pergi lari dan Nabi ﷺ diam seraya terheran. Lalu mereka membaringkan Nabi di bumi dengan pelan, dan mereka merobek perut beliau dengan lembut, lalu mereka mengeluarkan hati tuan anak Adnan, dan mereka membedah beliau dengan pisau kebagusan, dan mereka menghilangkan dari perut beliau bagian setan, lalu memenuhinya dengan sifat lembut, ilmu, yaqin dan ridlwan, kemudian mereka mengembalikanya ke tempatnya, lalu sang kekasih ﷺ berdiri tegak seperti semula.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 22
    [
      {
        translation: "Faqâlatil Malâ’ikatu",
      },
      {
        arabic:
          "فَقَالَتِ الْمَلَآئِكَةُ يَا حَبِيْبَ الرَّحْمٰنِ. لَوْ عَلِمْتَ مَا يُرَادُ بِكَ مِنَ الْخَيْرِ. لَعَرَفْتَ قَدْرَ مَنْزِلَتِكَ عَلٰى الْغَيْرِ. وَازْدَدْتَ فَرَحًا وَسُرُوْرًا. وَبَهْجَةً وَّنُوْرًا. يَا مُحَمَّدُ، أَبْشِـرْ فَقَدْ نُشِــرَتْ فِي الْكَآئِنَاتِ أَعْلَامُ عُلُوْمِكَ. وَتَبَاشَرَتِ الْمَخْلُوْقَاتُ بِقُدُوْمِكَ. وَلَمْ يَبْقَ شَيْءٌ مِمَّا خَلَقَ اللهُ تَعَالٰى إِلَّا جَآءَ لِأَمْرِكَ طَائِعًا. وَلِمَقَالَتِكَ سَامِعًا. فَسَيَأْتِيْكَ الْبَعِيْرُ. بِذِمَامِكَ يَسْتَجِيْرُ. وَالضَّبُّ وَالْغَزَالَةُ. يَشْهَدَانِ لَكَ بِالرِّسَالَةِ. وَالشَّجَرُ وَالْقَمَرُ وَالذِّيْبُ. يَنْطِقُوْنَ بِنُبُوَّتِكَ عَنْ قَرِيْبٍ. وَمَرْكَبُكَ الْبُرَاقُ. إِلَى جَمَالِكَ مُشْتَاقٌ. وَجِبْرِيْلُ شَاوُوْشُ مَمْلَكَتِكَ قَدْ أَعْلَنَ بِذِكْرِكَ فِي الْأٰفَاقِ. وَالْقَمَرُ مَأْمُوْرٌ لَكَ بِالانْشِقَاقِ. وَكُلُّ مَنْ فِي الْكَوْنِ مُتَشَوِّقٌ لِظُهُوْرِكَ. مُنْتَظِرٌ لِإِشْرَاقِ نُوْرِكَ",
        latin:
          "Faqâlatil-malâ’ikatu yâ ḫabîbar-raḫmâni, lau ‘alimta mâ yurâdu bika minal-khairi, la‘arafta qadra manzilatika ‘alal-ghairi, wazdadta farahân wa surûran, wa bahjatan wa nûran, yâ Muḫammadu, absyir faqad nusyirat fil-kâ’inâti a‘lâmu ‘ulûmika, wa tabâsyaratil-makhlûqâtu biqudûmika, wa lam yabqa syai’un mimmâ khalaqallâhu ta‘alâ illâ jâ’a li’amrika thâ’i‘an, wa limaqâlatika sâmi‘an, fasaya’tîkal-ba‘îru, bidzimâmika yastajîru, wadl-dlabbu wal-ghazâlatu, yasyhadâni laka bir-risâlati, wasy-syajaru wal-qamaru wadz-dzaîbu, yanthiqûna binubuwwatika ‘an qarîbin, wa markabukal-burâqu, ilâ jamâlika musytâqun, wa jibrîlu syâwûsyu mamlakatihi qad a‘lana bidzikrika fil-afâqi, wal-qamaru ma’mûrun laka bil-insyiqâqi, wa kullu man fil-kauni mutasyawwiqun lidhuhûrika, muntadhirun li’isyrâqi nûrika.",
        translation:
          "Kemudian malaikat mengatakan: “Wahai kekasih Sang Maha Pengasih”, seandainya kamu tahu kebaikan apa yang dikehendaki darimu, maka kamu pasti akan tahu kadar derajatmu atas selainmu. Sehingga bertambah-tambah rasa bahagia dan senangmu, keelokan dan cahayamu. Wahai Muhammad! Berilah kabar gembira! Sesungguhnya ketinggian ilmumu telah tersebar beritanya ke seluruh alam. Para makhluk merasa bahagia sebab kedatanganmu. Tiada satupun makhluk yang diciptakan Allah melainkan datang kepadamu, siap taat menjalankan perintahmu. Terhadap ucapanmu, siap mendengarkan. Kelak akan datang kepadamu seekor onta, meminta pertolongan dengan janjimu. Biawak dan rusa, keduanya bersaksi atas risalahmu. Pepohonan, rembulan, dan serigala, mereka mengucap kenabianmu dari dekat. Kendaraanmu adalah Buraq. Pada keindahanmu, ia senantiasa merindukan. Dan jibril adalah pengkabar kerajaanmu, benar benar telah mengumumkan sebutanmu ke seluruh penjuru ufuq. Rembulan diperintah untuk terbelahm adalah untuk kamu. Setiap makhluk di semesta, tidak sabar menunggu kemunculanmu, menunggu bersinarnya cahayamu.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 23
    [
      {
        translation: "Fabainamal Habîbu Shallallâhu ‘Alaihi Wa Sallama",
      },
      {
        arabic:
          "فَبَيْنَمَا الْحَبِيْبُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مُنْصِتٌ لِسَمَاعِ تِلْكَ الْأَشْبَاحِ. وَوَجْهُهٗ مُتَهَلِّلٌ كَنُوْرِ الصَّبَاحِ. إِذْ أَقْبَلَتْ حَلِيْمَةُ مُعْلِنَةً بِالصِّيَاحِ. تَقُوْلُ وَاغَرِيْبَاهُ. فَقَالَتِ الْمَلَآئِكَةُ يَا مُحَمَّدُ مَا أَنْتَ بِغَرِيْبٍ. بَلْ أَنْتَ مِنَ اللهِ قَرِيْبٌ. وَأَنْتَ لَهُ صَفِيٌّ وَحَبِيْبٌ. قَالَتْ حَلِيْمَةُ وَوَاحِدَاهُ. فَقَالَتِ الْمَلَآئِكَةُ يَا مُحَمَّدُ، مَا أَنْتَ بِوَحِيْدٍ. بَلْ أَنْتَ صَاحِبُ التَّأْيِيْدِ. وَأَنِيْسُكَ الْحَمِيْدُ الْمَجِيْدُ. وَإِخْوَانُكَ إِخْوَانُكَ مِنَ الْمَلَآئِكَةِ وَأَهْلِ التَّوْحِيْدِ. قَالَتْ حَلِيْمَةُ وَايَتِيْمَاهُ. فَقَالَتِ الْمَلَآئِكَةُ لِلّٰهِ دَرُّكَ مِنْ يَتِيْمٍ. فَإِنَّ قَدْرَكَ عِنْدَ اللهِ عَظِيْمٌ",
        latin:
          "Fabainamal-ḫabîbu shallallâhu ‘alaihi wa sallama munshitun lisamâ‘i tilkal-asybâḫ, wa wajhuhu mutahallilun kanûrish-shibâḫi, idz aqbalat ḫalîmatu mu‘linatan bish-shiyâḫ, taqûlu wâgharîbâhu, faqâlatil-malâ’ikatu yâ Muḫammadu mâ anta bigharîbin, bal anta minallâhi qarîbun, wa anta lahu shafiyyun wa ḫabîbun, qâlat Ḫalîmatu wa wâḫidâhu, faqâlatil-malâ’ikatu yâ Muḫammadu, mâ anta biwaḫîdin, bal anta shâḫibut-ta’yîd, wa anîsukal-ḫamîdul-majîdu, wa ikhwânuka minal-malâ’ikati wa ahlit-tauḫîdi, qâlat Ḫalîmatu wâyatîmâhu, faqâlatil-malâ’ikatu lillâhi darruka min yatîmin, fainna qadraka ‘indallâhi ‘adhîmun.",
        translation:
          "Saat Sang Kekasih shallahu ‘alaihi wasallam terdiam mendengarkan suara tanpa rupa itu, wajah beliau bersinar bagai rembulan, bagaikan cahaya sinar pagi hari. Saat itu, Halimah yang menghadapnya, menjerit, sambil berkata: “Alangkah anehnya!” Maka Malaikat berkata: “Wahai Muhammad, kamu bukan orang yang aneh, melainkan kamu adalah makhluk yang senantiasa paling dekat dengan Allah. Kamu engkau bagi-Nya adalah seorang yang terpilih dan sang kekasih.” Saat Halimah mengucapkan: “Aduh baru kali ini aku menemui sesuatu yang asing!” Maka Malaikat berkata: “Wahai Muhammad, tiada dirimu seorang yang asing. Tapi, engkau adalah pemilik pertolongan. Yang senantiasa menemanimu adalah Dzat Yang Maha Terpuji lagi Mahaagung. Saudara-saudarimu adalah para malaikat dan para ahli tauhid.” Dan saat Halimah berkata: “Aduh kasihan, anak yatim ini!” Para malaikat lalu berkata: “Karena kehendak Allah, engkau dilahirkan yatim, karena derajatmu di sisi-Nya adalah yang agung.”",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi",
        translation:
          "Ya Allah, limpahkanlah rahmat, keselamatan, dan keberkahan kepadanya (Nabi Muhammad SAW)",
      },
    ],

    //Halaman 24
    [
      {
        translation: "Falamma Ra’athu Halîmatu",
      },
      {
        arabic:
          "فَلَمَّا رَأَتْهُ حَلِيْمَةُ سَالِمًا مِنَ الْأَهْوَالِ. رَجَعَتْ بِهٖ مَسْــرُوْرَةً إِلَى الْأَطْلَالِ. ثُمَّ قَصَّتْ خَبَرَهُ عَلَى بَعْضِ الْكُهَّانِ. وَأَعَادَتْ عَلَيْهِ مَا تَمَّ مِنْ أَمْرِهٖ وَمَا كَانَ. فَقَالَ لَهُ الْكَاهِنُ: يَا ابْنَ زَمْزَمَ وَالْمَقَامِ. وَالرُّكْنِ وَالْبَيْتِ الْحَرَامِ. أَفِي الْيَقَظَةِ رَأَيْتَ هٰذَا أَمْ فِي الْمَنَامِ. فَقَالَ وَحُرْمَةِ الْمَلِكِ الْعَلَّامِ. شَاهَدْتُهُمْ كِفَاحًا لَا أَشُكُّ فِيْ ذٰلِكَ وَلَا أُضَامُ. فَقَالَ لَهُ الْكَاهِنُ أَبْشِـرْ أَيُّهَا الْغُلَامُ. فَأَنْتَ صَاحِبُ الْأَعْلَامِ. وَنُبُوَّتُكَ لِلْأَنْبِيَآءِ قُفْلٌ وَخِتَامٌ. عَلَيْكَ يَنْزِلُ جِبْرِيْلُ. وَعَلَى بِسَاطِ الْقُدْسِ يُخَاطِبُكَ الْجَلِيْلُ. وَمَنْ ذَا الَّذِيْ يَحْصُرُ مَا حَوَيْتَ مِنَ التَّفْضِيْلِ. وَعَنْ بَعْضِ وَصْفِ مَعْنَاكَ يَقْصُـرُ لِـسَانُ الْمَادِحِ الْمُطِيْلِ",
        latin:
          "Falammâ ra’athu Ḫalîmatu sâliman minal-ahwâli, raja‘at bihî masrûratan ilal-athlâli, tsumma qashshat khabarahu ‘alâ ba‘dlil-kuhhâni, wa a‘âdat ‘alaihi mâ tamma min amrihî wa mâ kâna, faqâla lahul-kâhin: yab-na zamzama wal-maqâmi, war-rukni wal-baitil-ḫarâmi, afil-yaqadhati raita hâdzâ am fil-manâmi, faqâla wa ḫurmatil-malikil-‘allâmi, syâhadtuhum kifâḫan lâ asyukku fî dzâlika wa lâ udlâmu, faqâla lahul-kâhinu absyir ayyuhal-ghulâmu, fa anta shâḫibul-a‘lâmi, wa nubuwwatuka lil-anbiyâ’i quflun wa khitâmun, ‘alaika yanzilu jibrîlu, wa ‘alâ bisâthil-qudsi yukhâtibukal-jalîlu, wa man dzal-ladzî yaḫshuru mâ ḫawaita minat-tafdlîli, wa ‘an ba‘dli washfi ma‘nâka yaqshuru lisânul-mâdiḫil-muthîli.",
        translation:
          "Ketika Halimah melihat beliau selamat dari mara bahaya, ia kembali bersama beliau dengan bahagia menuju “al-Athlal”, lalu menceritakan apa yang menimpa anak asuhnya ke beberapa peramal, sembari mengulang kisah yang terjadi itu sebagaimana adanya. Salah seorang peramal ada yang menanyakan: “Wahai Putra Zamzam dan Maqam, serta rukun dan Baitul Haram, apakah kamu melihat apa yang diceritakan ini saat bangun atau saat tidur?” Lalu beliau menjawab: “Demi Sifat Mulia-Nya Dzat yang Maha Menguasai Seluruh Alam, aku menyaksikannya dalam keadaan terjaga. Tiada aku ragu akan hal itu dan tiada aku dipaksa.” Kemudian peramal itu mengatakan: “Berbahagialah Wahai Anakku! Engkau adalah pemilik seluruh ilmu. Kenabianmu untuk para nabi adalah kunci dan penutupnya. Yang dating kepadamu adalah Jibril. Atas perintah Dzat Yang Mahasuci, telah mengajakmu seorang yang agung. Siapa lagi yang kan memiliki tanda keutamaan sebagaimana yang engkau sandang. Karena sebagian dari sifat maknawimu, lisan pemuja yang memanjangkan lisannya kan terpendekkan.”",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi",
        translation:
          "Ya Allah, limpahkanlah rahmat, keselamatan, dan keberkahan kepadanya (Nabi Muhammad SAW)",
      },
    ],

    //Halaman 25
    [
      {
        translation: "Wa Kana Shallallâhu ‘Alaihi Wa Sallama",
      },
      {
        arabic:
          "وَكَانَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ أَحْسَنَ النَّاسِ خَلْقًا وَخُلُقًا. وَأَهْدَاهُمْ إِلَى الْحَقِّ طُرُقًا. كَانَ خُلُقُهُ الْقُرْاٰنُ. وَشِيْمَتُهُ الْغُفْرَانُ. يَنْصَحُ لِلْإِنْسَانِ. وَيَفْسَحُ فِي الْإِحْسَانِ. وَيَعْفُوْ عَنِ الذَّنْبِ إِذَا كَانَ فِيْ حَقِّهٖ وَسَبَبِهِ. وَإِذَا ضُيِّعَ حَقُّ اللهِ لَمْ يَقُمْ أَحَدٌ لِغَضَبِهِ. مَنْ رَاٰهُ بَدِيْهَةً هَابَهُ. وَإِذَا دَعَاهُ الْمِسْكِيْنُ أَجَابَهُ. يَقُوْلُ الْحَقَّ وَلَوْكَانَ مُرًّا. وَلَا يُضْمِرُ لِمُسْلِمٍ غِشًّا وَلَا ضُرًّا. مَنْ نَظَرَ فِيْ وَجْهِهِ عَلِمَ أَنَّهٗ لَيْسَ بِوَجْهِ كَذَّابٍ. وَكَانَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ لَيْسَ بِغَمَّازٍ وَلَا عَيَّابٍ. إِذَا سُرَّا فَـكَأَنَّ وَجْهَهُ قِطْعَةُ قَمَرٍ. وَإِذَا كَلَّمَ النَّاسَ فَكَأَنَّمَا يَجْنُوْنَ مِنْ كَلَامِهٖ أَحْلٰ ثَمَرٍ. وَإِذَا تَبَسَّمَ تَبَسَّمَ عَنْ مِثْلِ حَبِّ الْغَمَامِ. وَإِذَا تَكَلَّمَ فَكَأَنَّمَا الدُّرُّ يَسْقُطُ مِنْ ذٰلِكَ الْكَلَامِ. وَإِذَا تَحَدَّثَ فَكَأَنَّ الْمِسْكَ يَخْرُجُ مِنْ فِيْهِ. وَإِذَا مَرَّ بِطَرِيْقٍ عُرِفَ مِنْ طِيْبِهٖ أَنَّهٗ قَدْ مَرَّ فِيْهِ. وَإِذَا جَلَسَ فِيْ مَجْلِسٍ بَقِيَ طِيْبُهُ فِيْهِ أَيَّامًا وَإِنْ تَغَيَّبَ. وَيُوْجَدُ مِنْهُ أَحْسَنُ طِيْبٍ وَإِنْ لَمْ يَكُنْ قَدْ تَطَيَّبَ. وَإِذَا مَشـٰى بَيْنَ أَصْحَابِهٖ فَكَأَنَّهُ الْقَمَرُ بَيْنَ النُّجُوْمِ الزُّهْرِ. وَإِذَا أَقْبَلَ لَيْلاً فَكَأَنَّ النَّاسَ مِنْ نُوْرِهٖ فِيْ أَوَانِ الظُّهْرِ. وَكَانَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ أَجْوَدَ بِالْخَيْرِ مِنَ الرِّيْحِ الْمُرْسَلَةِ. وَكَانَ يَرْفُقُ بِالْيَتِيْمِ وَالْأَرْمَلَةِ. قَالَ بَعْضُ وَاصِفِيْهِ مَا رَأَيْتُ مِنْ ذِيْ لِمَّةٍ سَوْدَآءَ. فِيْ حُلَّةٍ حَمْرَآءَ. أَحْسَنَ مِنْ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ",
        latin:
          "Wa kâna shallallâhu ‘alaihi wa sallama aḫsanan-nâsi khulqan wa khuluqan, wa ahdâhum ilal-ḫaqqi thuruqan, kâna khuluquhu khuluqul-qur’ânu, wa syîmatuhul-ghufrânu, yanshaḫu lil-insâni, wa yafsaḫu fil-iḫsâni, wa ya‘fû ‘anidz-dzanbi idzâ kâna fîḫaqqihi wa sababihi, wa idzâ dluyyi‘a ḫaqqullâhi lam yaqum aḫadun lighadlabihi, man râ’ahu badîhatan hâbahu, wa idzâ da‘âhul-miskînu ajâbahu, yaqûlul-ḫaqqa wa lau kâna murran, wa lâ yudlmiru limuslimin ghisysyan wa la dlurran, man nadhara fî wajhihi ‘alima annahu laisa biwajhihi kadzdzâbin, wa kâna shallallâhu ‘alaihi wa sallama laisa bighammâzin wa lâ ‘ayyâbin, idzâ surran faka’anna wajhahu qith‘atu qamarin, wa idzâ kallaman-nâsa fa ka’annamâ yajnûna min kalâmihî aḫlâ tsamarin, wa idzâ tabassama tabassama ‘an mitsli ḫabbil-ghamâmi, wa idza takallama faka’annamad-durru yasquthu min dzâlikal-kalâmi, wa idza taḫaddatsa faka’annal-miska yakhruju min fîhi, wa idzâ marra bitharîqin ‘urifa min thîbihî annahu qad marra fîhi, wa idzâ jalasa fî majlisin baqiya thîbuhu fîhi ayyamân wa in taghayyaba, wa yûjadi minhu aḫsanu thîbin wa in lam yakun qad tathayyaba, wa idzâ masyâ baina ashḫâbihi faka’annahul-qamaru bainan-nujûmiz-zuhri, wa idzâ aqbala lailan faka’annan-nâsa min nûrihi fî awânidh-dhuhri, wa kâna shallallâhu ‘alaihi wa sallama ajwada bil-khairi minar-rîḫil-mursalati, wa kâna yarfuqu bil-yatîmi wal-armalati, qâla ba‘dlu wâshifîhi mâ raitu min dzî limmatin saudâ’a, fî ḫullatin ḫamrâ’a, aḫsana min rasûlillâhi shallallâhu ‘alaihi wa sallama.",
        translation:
          "Nabi ﷺ adalah sebaik-baiknya manusia dari segi penciptaanya dan pekertinya. Dan memberi petunjuk kejalan yang benar. Akhlaknya adalah Al-Qur’an. Memiliki sifat khusus yaitu pemaaf. Gemar memberi nasehat manusia. Membuat lapang dengan kebaikan. Mudah memaafkan suatu dosa bila dosa itu berkaitan dengan hak dirinya atau sebab dirinya. Namun jika hak Allah yang disia-siakan, maka tiada satu orang pun yang berani berdiri karena kemarahannya. Barang siapa melihat beliau, seketika orang itu takut karena wibawanya. Jika diundang orang miskin, maka ia pasti mendatanginya. Senantiasa berkata benar, meski itu pahit. Tidak pernah menyimpan rahasia, menipu serta membahayakan orang-orang islam. Orang yang memandang wajahnya, senantiasa akan tahu bahwasanya ia bukan pembohong. Dan Nabi ﷺ, tidak pernah memiliki rasa iri atau suka membuka aib orang lain. Ketika sedang bahagia, seolah wajahnya bagaikan belahan rembulan. Saat berbicara dengan manusia, seolah-olah mereka tengah memetik buah yang manis. Saat ketika tersenyum, senyumnya sesejuk butiran air embun. Saat ia berbicara, seolah untaian mutiara tercecer berjatuhan dari perkataannya. Saat ia memulai menjadi lawan bicara, bak (harum) misik keluar dari mulutnya. Saat ia berjalan di suatu jalan, seolah senantiasa masih tersisa keharuman beliau di jalan yang pernah dilewatinya. Saat ia duduk di suatu majlis, keharumannya seolah tiada pernah hilang dari majelis itu sampai beberapa hari kemudian kendati beliau sudah meninggalkan. Beliau selalu berbau harum meskipun tidak pernah memakai wewangian. Saat beliau berjalan di antara para sahabatnya, bagaikan rembulan di antara bintang-bintang yang gemerlap. Saat menjelang malam, seolah manusia masih bisa melihat dengan jelas karena pancaran sinarnya. Dan Rasulullah ﷺ, adalah orang paling pemurah meski dibandingkan dengan tiupan angin yang berhembus. Beliau lemah lembut terhadap anak yatim dan para janda. Sebagian dari orang yang melihat karakter beliau pernah berkata: “Belum pernah aku melihat dari orang yang berambut hitam dengan busana merah, yang lebih tampan dibandingkan dengan Rasulullah ﷺ.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 26
    [
      {
        translation: "Wa Qîla Liba‘dlihim",
      },
      {
        arabic:
          "وَقِيْلَ لِبَعْضِهِمْ كَأَنَّ وَجْهَهُ الْقَمَرُ. فَقَالَ بَلْ أَضْوَأُ مِنَ الْقَمَرِ إِذَا لَمْ يَحُلْ دُوْنَهُ الْغَمَامُ. قَدْ غَشِيَهُ الْجَلَالُ. وَانْتَهٰى إِلَيْهِ الْكَمَالُ. قَالَ بَعْضُ وَاصِفِيْهِ مَا رَأَيْتُ قَبْلَهُ وَلَا بَعْدَهٗ مِثْلَهُ. فَيَعْجِزُ لِسَانُ الْبَلِيْغِ إِذَا اَرَادَ أَنْ يُحْصِيَ فَضْلَهُ. فَسُبْحَانَ مَنْ خَصَّهُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ بِالْمَحَلِّ الْأَسْنٰى. وَأَسْرٰى بِهٖ إِلَى قَابِ قَوْسَيْنِ أَوْ أَدْنٰى. وَأَيَّدَهٗ بِالْمُعْجِزَاتِ الَّتِيْ لَا تُحْصٰى. وَأَوفَاهُ مِنْ خِصَالِ الْكَمَالِ بِمَا يَجِلُّ أَنْ يُسْتَقْصٰى. وَأَعْطَاهُ خَمْسًا لَمْ يُعْطِهِنَّ أَحَدًا قَبْلَهُ. وَاٰتَاهُ جَوَامِعَ الْكَلِمِ فَلَمْ يُدْرِكْ أَحَدٌ فَضْلَهُ. وَكَانَ لَهٗ فِيْ كُلِّ مَقَامٍ عِنْدَهٗ مَقَالٌ. وَلِكُلِّ كَمَالٍ مِنْهُ كَمَالٌ. لَا يَحُوْلُ فِيْ سُؤَالٍ وَلَا جَوَابٍ. وَلَا يَجُوْلُ لِسَانُهٗ إِلَّا فِيْ صَوَابٍ",
        latin:
          "Wa qîla liba‘dlihim ka’anna wajhahul-qamaru, faqâla bal adlwa’u minal-qamari idza lam yaḫul dûnahul-ghamâmu, qad ghasyiyahul-jalâlu, wantahâ ilaihil-kamâlu, qâla ba’dlu wâshifîhi mâ raitu qablahu wa lâ ba’dahu mitslahu, fa ya‘jizu lisânul-balîghi idzâ arâda an yuḫshiya fadllahu, fasubḫâna man khashshahu shallallâhu ‘alaihi wa sallama bil-maḫallil-asnâ, wa asrâ bihi ilâ qâbi qausaini au adnâ, wa ayyadahu bil-mu‘jizâtil-latî lâ tuḫshâ, wa aufâhu min khishâlil-kamâli bimâ yajillu an yustaqshâ, wa a‘thâhu khamsan lam yu’thihinna aḫadan qablahu, wa âtâhu jawâmi‘al-kalimi falam yudrik aḫadun fadllahu, wa kâna lahu fî kulli maqâmin ‘indahu maqâlun, wa likulli kamâlin minhu kamâlun, lâ yâḫulu fî su’âlin wa lâ jawâbin, wa lâ yajûlu lisânahu illâ fî shawâbin.",
        translation:
          "Dikatakan kepada sabagian ulama: benarkah wajah beliau bagaikan rembulan. Maka ia menjawab: bahkan lebih terang dari pada rembulan, jika awan tidak meneduhkannya. Sungguh sifat keagungan senantiasa menyelimutinya. Dan kesempurnaan senantiasa ada pada dirinya. Sebagian orang yang mensifati beliau mengatakan: aku tidak pernah melihat orang seperti beliau baik sebelum beliau maupun sesudah beliau Maka lisan yang bersastra tidak mampu jika ingin menghitung keutamaan beliau. Mahasuci dzat yang senantiasa mengkhususkan beliau ﷺ dengan tempat yang luhur, dan telah meng-isra’-kan beliau ke Qaba Qausain atau lebih dekat, dan menguatkan beliau dengan mu’jizat yang tidak terhitung, memberi beliau dengan sifat sempurna yang sulit untuk di hitung, memberi beliau lima perkara yang tidak diberikan kepada siapapun sebelumnya. Dianugrahkan kepadanya kepandaian menyusun kata-kata yang tidak ada seorangpun dapat melebihinya, dan bagi beliau, di setiap keaadan terdapat ucapan yang sesuai, dan di setiap kesempurnaan Nabi SAW ada kesempurnaan yang lain, beliau tidak pernah bingung dari pertanyaan dan jawaban. Lisan beliau tiada pernah mengucapkan kecuali tentang kebenaran.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 27
    [
      {
        translation: "Wa Ma ‘asâ An Yuqâla",
      },
      {
        arabic:
          "وَمَا عَسٰى أَنْ يُقَالَ فِيْمَنْ وَصَفَهُ الْقُرْاٰنُ. وَأَعْرَبَ عَنْ فَضَائِلِهِ التَّوْرَاةُ وَالْإِنْجِيْلُ وَالزَّبُوْرُ وَالْفُرْقَانُ. وَجَمَعَ اللهُ لَهٗ بَيْنَ رُؤْيَتِهٖ وَكَلَامِهِ. وَقَرَنَ اسْمُهٗ مَعَ اسْمِهٖ تَنْبِيْهًا عَلَى عُلُوِّ مَقَامَهِ. وَجَعَلَهٗ رَحْمَةً لِلْعَالَمِيْنَ وَنُوْرًا. وَمَلَأَ بِمَوْلِدِهِ الْقُلُوْبَ سُرُوْرً",
        latin:
          "Wa mâ ‘asâ an yuqâla fî man washafahul-qur’ânu, wa a‘raba ‘an fadlâ’ilihit-taurâtu wal-injîlu waz-zabûru wal-furqânu, wa jama‘allâhu lahu baina ru’yatihî wa kalâmihi, wa qaranas-muhu ma‘as-mihi tanbîḫan ‘alâ ‘uluwwi maqâmihi, wa ja‘alahu raḫmatan lil-‘âlamîna wa nûran, wa mala’a bimaulidihil-qulûba surûran.",
        translation:
          "Tidak ada keraguan kata memuji yang di tujukan kepada Nabi dimana sifat-sifatnya sudah disebut dalam Al-Qur’an. Telah di uraikan pula keutamaanya dalam kitab taurat, injil, zabur dan quran. Dan Allah telah mengumpulkan kepada Nabi antara melihat Dzatnya dan menerima firman-NyaDan Ia menggabungkan nama-Nya dan nama Nabi untuk mengingatkan akan tingginya derajat Nabi. Dan Ia menjadikan rahmat dan cahaya untuk alam semesta. Sebab kelahiran Nabi, Allah penuhi hati manusia dengan rasa gembira.",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 28
    [
      {
        translation: "Ya Badratimmin",
      },
      {
        arabic:
          "يَا بَــــدْرَتِمٍّ حَــــازَ کُلَّ كَمَالِ مَــــاذَا يُعَبِّرُعَنْ عُلَاكَ مَقَــــالِي",
        latin:
          "Ya badratimin hâza kulla kamâli mâ dzâ yu‘abbiru ‘an ‘ulâka maqâlî",
        translation:
          "Wahai purnama kesempurnaan yang telah mencapai puncak kesempurnaan. Ungkapan apa yang dapat aku katakan untuk menguraikan keluhuranmu.",
      },
      {
        arabic:
          "أَنْتَ الَّذِی أَشْرَقْتَ فِي أُفُقِ الْعُلَا فَمَــحَوْتَ بِالْأَنْوارِكُلَّ ضَــــلَالِ",
        latin:
          "Antal-ladzî asyraqta fî ufuqil-‘ulâ famaḫauta bil-anwâri kulla dlalâli",
        translation:
          "Engkaulah yang terbit di ufuk ketinggian, dengan cahayamu engkau lenyapkan kesesatan",
      },
      {
        arabic:
          "وَبِكَ اسْتَنَارَ الْكَوْنُ يَا عَلَمَ الْهُدٰى بِالنُّورِ وَالْإِنْعَــــامِ وَالْإِفْضَالِ",
        latin:
          "Wa bikas-tanâral-kaunu yâ ‘alamal-hudâ bin-nûri wal-in‘âmi wal-ifdlâli",
        translation:
          "Dengan kehadiranmu semesta raya menjadi terang benderang wahai Sumber petunjuk, dengan cahaya, kenikmatan, serta keutamaanmu.",
      },
      {
        arabic:
          "صَــــــلَّى عَلَيْــــكَ اللهُ رَبِّي دَاِئمًــــــا أَبَدًا مَــــعَ الْإِبْكاَرِ وَالْاٰصَــــالِ",
        latin:
          "Shalla ‘alaikallâhu rabbi dâ'imân abadan ma‘al-ibkâri wal-âshâli",
        translation:
          "Semoga rahmat Allah, Tuhanku, senantiasa dilimpahkan kepadamu, kekal sepanjang masa, setiap pagi dan sore hari.",
      },
      {
        arabic:
          "وَعَلَى جَمِيْعِ الْآلِ وَالْأَصْحَابِ مَنْ قَدْ خَصَّهُمْ رَبُّ العُلَى بِكَمَالِ",
        latin:
          "Wa ‘alâ jamî‘il-âli wal-ashḫâbi man qad khashshahum rabbul-‘ulâ bikamâli",
        translation:
          "Juga kepada segenap keluarga dan para sahabat, yaitu orang-orang yang benar-benar telah diistimewakan Tuhan, Yang Mahatinggi, dengan kesempurnaan",
      },
      {
        arabic: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وَعَلٰى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik 'alaihi wa 'alâ âlihi",
        translation:
          "Ya Allah, limpahkan rahmat, kesalamatan, serta keberkahan kepada Nabi Muhammad beserta keluarga beliau",
      },
    ],

    //Halaman 29
    [
      {
        translation: "Doa Maulid ad-Diba’i",
      },
      {
        arabic:
          "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَـــالَمِيْنَ. اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهٖ وَصَحْبِهٖ أَجْمَعِيْن. جَعَلَنَا اللهُ وَإِيَاكُمْ مِمَّنْ يَسْتَوْجِبُ شَفَاعَتَهُ. وَيَرْجُوْ بِذٰلِكَ رَحْمَتَهُ وَرَأْفَتَهُ. اَللّٰهُمَّ بِحُرْمَةِ هٰذَا النَّبِيِّ الْكَرِيْمِ. وَاٰلِهِ وَأَصْحَابِهِ السَّالِكِيْنَ عَلَى مَنْهَجِهِ الْقَوِيْمِ. اِجْعَلْنَا مِنْ خِيَارِ أُمَّتِهٖ. وَاسْتُرْنَا بِذَيْلِ حُرْمَتِهِ. وَاحْشُـرْنَا غَدًا فِيْ زُمْرَتِهِ. وَاسْتَعْمِلْ أَلْسِنَتَنَا فِيْ مَدْحِهٖ وَنُصْـرَتِهِ. وَأَحْيِنَا مُتَمَسِّكِيْنَ بِسُنَّتِهِ وَطَاعَتِهِ. وَأَمِتْنَا عَلَى حُبِّهٖ وَجَمَاعَتِهِ. اَللّٰهُمَّ أَدْخِلْنَا مَعَهُ الْجَنَّةَ فَإِنَّهُ أَوَّلُ مَنْ يَدْخُلُهَا. وَأَنْزِلْنَا مَعَهٗ فِيْ قُصُوْرِهَا. فَإِنَّهُ أَوَّلُ مَنْ يَنْزِلُهَا. وَارْحَمْنَا يَوْمَ يَشْفَعُ لِلْخَلَآئِقِ فَتَرْحَمُهَا. اَللّٰهُمَّ ارْزُقْنَا زِيَارَتَهٗ فِيْ كُلِّ سَنَةٍ. وَلَا تَجْعَلْنَا مِنَ الْغَافِلِيْنَ عَنْكَ وَلَا عَنْهُ قَدْرَ سِنَةٍ. اَللّٰهُمَّ لَا تَجْعَلْ فِيْ مَجْلِسِنَا هٰذَا أَحَدًا إِلَّا غَسَلْتَ بِمَاءِ التَّوْبَةِ ذُنُوْبَهُ. وَسَتَرْتَ بِرِدَآءِ الْمَغْفِرَةِ عُيُوْبَهُ. اَللّٰهُمَّ إِنَّهٗ كَانَ مَعَنَا فِي السَّنَةِ الْمَاضِيَةِ إِخْوَانٌ مَنَعَهُمُ الْقَضَآءُ عَنِ الْوُصُوْلِ إِلَى مِثْلِهَا. فَلَا تَحْرِمْهُمْ مِنْ ثَوَابِ هٰذِهِ اللَّيْلَةِ وَفَضْلِهَا. اَللّٰهُمَّ ارْحَمْنَا إِذَا صِرْنَا مِنْ أَصْحَابِ الْقُبُوْرِ. وَوَفِّقْنَا لِعَمَلٍ صَالِحٍ يَبْقٰى سَنَاهُ عَلَى مَمَرِّ الدُّهُوْرِ. اَللّٰهُمَّ اجْعَلْنَا لِاٰلَآئِكَ ذَاكِرِيْنَ. وَلِنَعْمَآئِكَ شَاكِرِيْنَ. وَلِيَوْمِ لِقَآئِكَ مِنَ الذَّاكِرِيْنَ. وَأَحْيِنَا بِطَاعَتِكَ مَشْغُوْلِيْنَ. وَإِذَا تَوَفَّيْتَنَا فَتَوَفَّنَا غَيْرَ مَفْتُوْنِيْنَ وَلَا مَخْذُوْلِيْنَ. وَٱخْتِمْ لَنَا مِنْكَ بِخَيْرٍ أَجْمَعِيْنَ. اَللّٰهُمَّ اكْفِنَا شَرَّ الظَّالِمِيْنَ. وَاجْعَلْنَا مِنْ فِتْنَةِ هٰذِهِ الدُّنْيَا سَالِمِيْنَ. اَللّٰهُمَّ اجْعَلْ هٰذَا الرَّسُوْلَ الْكَرِيْمَ لَنَا شَفِيْعًا. وَارْزُقْنَا بِهِ يَوْمَ الْقِيَامَةِ مَقَامًا رَفِيْعًا. اَللّٰهُمَّ اسْقِنَا مِنْ حَوْضِ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ شَرْبَةً هَنِيْئَةً لَا نَظْمَأُ بَعْدَهَا أَبَدًا. وَاحْشُــرْنَا تَحْتَ لِوَآئِهِ غَدًا. اَللّٰهُمَّ اغْفِرْ لَنَا بِهٖ وَلِاٰبـَآئِنَا وَلِأُمَّهَاتِنَا وَلِمَشَايِخِنَا وَلِمُعَلِّمِيْنَا. وَذَوِي الْحُقُوْقِ عَلَيْنَا. وَلِجَمِيْعِ الْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ. وَالْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ. اَلْأَحْيَآءِ مِنْهُمْ وَالْأَمْوَاتِ. إِنَّكَ كَرِيْمٌ مُجِيْبُ الدَّعَوَاتِ. وَقَاضِي الْحَاجَاتِ. وَغَافِرُ الذُّنُوْبِ وَالْخَطِيْئَاتِ. يَا أَرْحَمَ الرَّاحِمِيْنَ. وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهٖ وَسَلَّمَ. سُبْحَانَ رَبِّــكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ. وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ. وَالْحَمْدُ ِللّٰهِ رَبِّ الْعَالَمِيْنَ. اَلْفَاتِحَة",
        latin:
          "Al-ḫamdulillâhi rabbil-‘âlamîn, allâhumma shalli ‘alâ sayyidinâ muḫammadin wa ‘alâ âlihî wa shaḫbihi ajma‘îna, ja‘alanâllâhu wa iyâkum mimman yastaujibu syafâ’atahu, wa yarjû bidzâlika raḫmatahu wa ra’fatahu, allâḫumma biḫurmati hâdzan-nabiyyil-karîmi, wa âlihi wa ashḫâbihis-sâlikîna ‘alâ manhajihil-qawîmi, ij‘alnâ min khiyâri ummatihi, wasturnâ bidzaili ḫurmatihi, waḫsyurnâ ghadan fî zumratihi, wasta‘mil alsinatanâ fî madḫihi wa nushratihi, wa aḫyinâ mutamassikîna bisunnatihi wathâ‘atihi, wa amitnâ ‘alâ ḫubbihi wa jamâ‘atihi, allâḫumma adkhilnâ ma‘ahul-jannata fainnahu awwalu man yadkhuluhâ, wa anzilnâ ma‘ahu fî qushûrihâ, fainnahu awwalu man yanziluhâ, warḫamnâ yauma yasyfa‘u lil-khalâ’iqi fatarḫamuhâ, allâḫummar-zuqnâ ziyâratahu fî kulli sanatin, walâ taj‘alnâ minal-ghâfilîna anka wa lâ ‘anhu qadra sinatin, allâḫumma lâ taj‘aln fî majlisinâ hâdzâ aḫadan illâ ghasalta bimâ’it-taubati dzunûbahu, wa satarta biridâ’il-maghfirati ‘uyûbahu, allâḫumma innahu kâna ma‘anâ fis-sanatil-mâdliyati, ikhwânun mana‘ahumul-qadlâ’u ‘anil-wushûli ilâ mitslihâ, falâ taḫrimhum min tsawâbi hâdzihil-lailati wafadllihâ, allâḫummarḫamnâ idzâ shirnâ min ashḫâbil-qubûri, wawaffiqnâ li‘amailshâliḫi yabqâ sanâhu ‘alâ mamarrid-duhûri, allâḫumj‘alnâ li’âlâ’ika dzâkirîn, wa lina‘mâ’ika syâkirîna, wa liyaumi liqâ’ika minadz-dzâkirîna, waḫyinâ bithâ‘atika masyghûlina, wa idzâ tawaffaitanâ fatawaffanâ ghaira maftûnîna, wa lâ makhdzûlîna, wakhtim lanâ minka bikhairi ajma‘îna, allâḫummakfinâ syarradh-dhâlimîn, waj‘alnâ min fitnati hâdzihid-dunyâ sâlimîn, allâḫuj‘al hâdzar-rasûlal-karîma lanâ syafî‘an, warzuqnâ bihi yaumal-qiyâmati maqâman rafî‘an, allâhummas-qinâ min ḫaudli nabiyyika muḫammadin shallallâhu ‘alaihi wa sallama syarbatan hanî’atan lâ nadhma’a ba‘dahâ abadan, waḫsyurnâ taḫta liwâ’ihi ghadzan, allâḫummaghfir lanâ bihî wa li’abâ’inâ wa li’ummahâtinâ wa limasyâyikhinâ wa limu‘alliminâ, wa dzawil-ḫuqûqi ‘alaina, wa lijamî‘il-mu’minîna wal-mu’minât, wal-muslimîna wal-muslimâti, al-aḫyâ’i minhum wal-amwâti, innaka karîmun mujîbud-da‘awâti, wa qâdliyal-ḫâjâti, wa ghâfirudz-dzunûbi wal-khathî’âti, yâ arḫamar-raḫimîna, wa shallallâḫu ‘alâ sayyidinâ muḫammadin wa ‘alâ âlihi wa shaḫbihi wa sallam, subḫânaka rabbika rabbil-‘izzati ‘ammâ yashifûna, wa salâmun ‘alal-mursalîna, wal-ḫamdulillâhi rabbil-‘âlamîna, al-fâtiḫah.",
        translation:
          "Segala puji bagi Allah Tuhan seru sekelian alam. Ya Allah limpahkanlah rahmat dan salam atas Junjungan kami Nabi Muhammad dan atas keluarga serta sahabatnya sekalian. semoga Allah menjadikan kami dan kamu sekalian dari golongan orang yang mendapat syafaatnya; Serta mengharapkan rahmat dan kasih sayangnya dari Allah. Ya Allah dengan kehormatan Nabi yang mulia ini dan keluarga serta sahabatnya yang berjalan atas petunjuk Nabi yang kokoh. Jadikanlah kami termasuk umatnya yang terpilih. Tutuplah segala kekurangan kami. Himpunkanlah kami kelak (Hari Mahsyar) didalam golongannya. Pergunakanlah lidah-lidah kami dalam memuji dan membelanya. Hidupkanlah kami dalam keadaan berpegang dengan sunnahnya dan ketaatannya, dari segala fitnah dunia. Ya Allah jadikanlah Rasul yang mulia ini orang yang memberi syafaat kepada kami. Matikanlah kami dalam kecintaan kepadanya dan dalam jemaahnya. Ya Allah masukkanlah kami kedalam syurga bersama-samanya kerana baginda orang yang mula-mula masuk ke dalamnya. Turunkanlah kami dalam mahligainya bersama-samanya kerana bagindalah orang yang mula turun kedalamnya. Kasihanilah kami dihari dia memberi syafaat kepada makhlok lalu engkau kasihani mereka. Ya Allah berilah kami peluang menziarahinya setiap tahun. Janganlah Engkau jadikan kami dari golongan orang yang lalai dari mengingatiMu dan juga lalai dari mengingatinya walau sekejap kadar terlelap. Ya Allah janganlah hendaknya ada di majlis kami ini orang yang berdosa melainkan Engkau cuci segala dosanya dengan air taubat; dan Engkau tutupi keaibannya dengan pakaian pengampunan. Ya Allah pada tahun yang lalu ada ikhwan kami yang tidak dapat menghadirkan diri pada tahun ini kerana dihalang oleh QadhaMu, maka janganlah Engkau haramkan pahala serta ganjaran yang Engkau turunkan pada saat ini. Ya Allah kasihanilah kami jika kami sudah menjadi ahlilkubur. Berilah kami Taufiq untuk membuat amal salih yang kekal cahayanya sepanjang zaman. Ya Allah jadikanlah kami orang yang ingat kepada pemberianMu, bersyukur atas nikmatMu, dan ingat kepada Hari Pertemuan denganMu. Hidupkanlah kami masyghul dengan ketaatan kepadaMu. Kiranya Engkau matikan kami. Matikanlah kami tanpa sebarang fitnah atau kekeciwaan. Sudahilah segala perkara kami dengan kebaikan daripadaMu. Ya Allah selamatkanlah kami dari kejahatan orang yang aniaya (3 kali) . Jadikanlah kami orang yang terselamat dari fitnah Dunia, dan kurniakanlah kami dengan sebabnya kedudukan yang tinggi diHari Qiamat kelak. Ya Allah berilah kami minum dari telaga Nabi Mu Muhammad ﷺ dengan minuman yang melegakan menyebabkan kami tidak rasa haus lagi selepasnya. Himpunkanlah kami di bawah panji-panjinya esok (Hari Mahsyar). Ya Allah dengan darjatnya disisiMu, ampunilah kami, kedua ibu bapa kami, guru-guru kami, orang-orang yang punya haq atas kami, serta sekalian mukminin mukminat, muslimin muslimat samada yang masih hidup mahu pun yang sudah wafat. Sesungguhnya Engkau memperkenankan segala doa, menunaikan segala hajat dan mengampuni segala dosa dan kesalahan. Ya Tuhan yang amat Pengasih dari semua yang kasih. Selawat dan salam Allah atas penghulu kami Muhammad dan atas keluarga serta sahabatnya. Mahasuci Tuhanmu yang mempunyai kemuliaan dari segala apa yang mereka sifatkan.Ucapan salam atas sekalian Rasul dan segala puji bagi Allah Tuhan seru sekalian alam. Al-Fatihah",
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
