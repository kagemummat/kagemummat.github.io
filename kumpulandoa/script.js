const doaData = [
  {
    title: "Doa Sebelum Tidur",
    arabic: "اللَّهُمَّ بِسْمِكَ أَحْيَا وَبِاسْمِكَ أَمُوتُ",
    latin: "Allahumma Bismika ahyaa wa Bismika amuutu",
    translation:
      "Ya Allah, dengan nama-Mu aku hidup dan dengan nama-Mu aku mati ( Shahih Bukhari, At-Tauhid : 6845 )",
  },
  {
    title: "Doa Bangun Tidur",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    latin:
      "Alhamdulillahilladzi ahyaanaa ba'da maa amaatanaa wa ilaihin nusyuur",
    translation:
      "Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya lah kami kembali ( Shahih Bukhari, Ad' Da'awat : 5839 )",
  },
  {
    title: "Doa Sebelum Makan",
    arabic:
      "اللَّهُمَّ بَارِكْ لَناَ فِيْمَا رَزَقْتَنا وَقِنَا عَذَابَ النَّارِ، بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ",
    latin:
      "Allāhumma bārik lanā fī mā razaqtanā wa qinā ażāban nār, bismillāhir rahmānir rahīm",
    translation:
      "Ya Allah, berkahilah kami pada rezeki yang telah Kaukaruniakan untuk kami dan lindungilah kami dari siksa neraka. Dengan nama Allah yang maha pengasih dan maha penyayang ( HR. Abu Dawud, Ibnu Majah, Dan Malik )",
  },
  {
    title: "Doa Sesudah Makan",
    arabic:
      "ااَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",
    latin:
      "Alhamdulillahi ladzi ath-amanaa wa saqaana waja'alanaa minal muslimiin",
    translation:
      "Segala puji bagi Allah yang telah memberi kami makan dan telah memberi kami minum, dan menjadikan kami termasuk orang yang patuh ( HR. Abu Dawud )",
  },
  {
    title: "Doa Masuk Kamar Mandi",
    arabic:
      "بِسْمِ اللهِ اللَّهُمَّ إنِّي أَعُوذُ بِك من الْخُبْثِ وَالْخَبَائِثِ",
    latin: "Bismillahi Allahumma inni a’udzu bika minal khubutsi wal khabaitsi",
    translation:
      "Ya Allah, aku berlindung pada-Mu dari godaan iblis jantan dan betina ( Shahih Bukhari, Al-Wudhu : 139 )",
  },
  {
    title: "Doa Keluar Kamar Mandi",
    arabic:
      "غُفْرَانَكَ الْحَمْدُ ِللهِ الَّذِىْ اَذْهَبَ عَنِّى اْلاَذَى وَعَافَانِىْ",
    latin:
      "Ghufraanaka alhamdulillaahil ladzii adzhaba ‘annil adzaa wa’aafaanii",
    translation:
      "Aku memohon ampunan kepadamu, Segala puji bagi Allah yang telah menghilangkan penyakit dari tubuhku dan membuat aku sehat ( HR. Abu Dawud, Ibnu Majah, Dan At-Tirmidzi )",
  },
  {
    title: "Doa Melepas Pakaian",
    arabic: "بِسْمِ اللهِ الَّذِيْ لَا إِلهَ إِلاَّ هُوَ",
    latin: "Bismillahil ladzi lailaha illa huwa",
    translation:
      "Dengan nama Allah yang tiada Tuhan selain Dia ( HR. Ibnu Sunni )",
  },
  {
    title: "Doa Memakai Pakaian",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا هُوَ لَهُ ، وَأَعُوْذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا هُوَ لَهُ",
    latin:
      "Allahumma inni as’aluka min khairi wa khaira ma huwa lahu, wa a’udzubika min syarrihi wa syarri ma huwa lahu",
    translation:
      "Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikan pakaian ini dan kebaikan sesuatu yang di dalamnya, dan aku berlindung kepada-Mu dari keburukan pakaian ini dan keburukan sesuatu yang ada di dalamnya ( Sunan Abu Dawud, Al-Libas : 3504 ) ",
  },
  {
    title: "Doa Memakai Pakaian Baru",
    arabic:
      "اَللّٰهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيْهِ أَسْأَلُكَ خَيْرَهُ وَخَيْرَ مَا صُنِعَ لَهُ وأَعُوْذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ",
    latin:
      "Allâhumma lakal ḫamdu anta kasautanîhi, as-aluka khairahu wa khaira mâ shuni‘a lahû wa a‘ûdzu bika min syarrihi wa syarri mâ shuni‘a lahû",
    translation:
      "Ya Allah bagi-Mu segala puji. Engkau telah memakaikannya untukku, aku memohon kepada-Mu kebaikannya dan kebaikan apa yang ia dijadikan untuknya, dan aku berlindung dari keburukannya dan keburukan apa yang ia dijadikan untuknya  ( HR. Abu Sa’id al-Khudri )",
  },
  {
    title: "Doa Bercermin",
    arabic: "اَللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِيْ فَحَسِّنْ خُلُقِيْ",
    latin: "Allahumma kama hassanta khalqi fahassin khuluqi",
    translation:
      "Wahai Allah, sebagaimana telah kau baguskan kejadianku, maka baguskanlah perangaiku ( HR Ibnu Hibban dan Ibnu Mardawi )",
  },
  {
    title: "Doa Masuk Rumah",
    arabic:
      "اَللّٰهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ بِاسْمِ اللهِ وَلَجْنَا، وبِاسْمِ اللهِ خَرَجْنَا، وَعَلَى اللهِ رَبِّنَا تَوَكَّلْنَا",
    latin:
      "Allâhumma innî as’aluka khairal maulaji wa khairal makhraji, bismillâhi walajnâ wa bismillâhi kharajnâ wa ‘ala-Llâhi rabbinâ tawakkalnâ",
    translation:
      "Ya Allah, aku memohon kepada-Mu sebaik-baik tempat masuk dan sebaik-baik tempat keluar. Atas nama-Mu kami masuk dan atas nama-Mu kami keluar. Dan kepada Allah Tuhan kami, kami bertawakal",
  },
  {
    title: "Doa Keluar Rumah",
    arabic:
      "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",
    latin:
      "Bismillaahi tawakkaltu’alallaah, laa haula wa laa quwwata illaa billaah",
    translation:
      "Dengan nama Allah, aku bertawakal kepada Allah, tiada daya dan kekuatan kecuali dengan pertolongan Allah",
  },
  {
    title: "Doa Naik Kendaraan",
    arabic:
      "بِسْمِ اللهِ مَجْرَهَا وَمُرْسَهَآاِنَّ رَبِّىْ لَغَفُوْرٌرَّحِيْمٌ",
    latin: "Bismillaahi majrahaa wa mursaahaa inna robbii laghofuurur rohiim",
    translation:
      "Dengan nama Allah yang menjalankan kendaraan ini berlayar, berlabuh, sesungguhnya Tuhanku benar-benar Maha Pengampun lagi Maha Penyayang",
  },
  {
    title: "Doa Masuk Masjid",
    arabic:
      "أَعُوْذُ بِاللهِ العَظِيْمِ وَبِوَجْهِهِ الْكَرِيْمِ وَسُلْطَانِهِ الْقَدِيْمِ مِنَ الشَّيْطَانِ الرَّجِيْمِ. بِسْمِ اللهِ وَالْحَمْدُ لِلهِ. أَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ. اَللَّهُمَّ اغْفِرْ لِي ذُنُوْبِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    latin:
      "A’udzu billahil’azhim wa biwajhihil karim wa sulthanihil qadim minas syaithanir rajim. Bismillahi wal hamdulillah. Allahumma shalli wa salim’ala sayyidina muhammadin wa’ala ali sayyidina muhammadin. Allahummaghfirli dzunubi waftahli abwaba rahmatik",
    translation:
      "Aku berlindung kepada Allah Yang Maha Besar, kepada Dzat-Nya yang Maha Mulia, dan kepada kerajaan-Nya yang sedia dari setan yang terlontar. Dengan nama Allah dan segala puji bagi Allah. Wahai Tuhanku, berilah salawat dan sejahtera atas sayyidina Muhammad dan atas keluarga sayyidina Muhammad. Wahai Tuhanku, ampuni untukku segala dosaku. Buka lah bagiku segala pintu rahmat-Mu",
  },
  {
    title: "Doa Keluar Masjid",
    arabic:
      "أعُوْذُ بِاللهِ العَظِيْمِ وَبِوَجْهِهِ الْكَرِيْمِ وَسُلْطَانِهِ الْقَدِيْمِ مِنَ الشَّيْطَانِ الرَّجِيْمِ. بِسْمِ اللهِ وَالْحَمْدُ لِلهِ. أَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ. اَللَّهُمَّ اغْفرْ لِي ذُنُوْبِي وَافْتَحْ لِي أَبْوَابَ فَضْلِكَ",
    latin:
      "A’udzu billahil azhim wa biwajhihil karim wa sulthanihil qadim minas syaithanir rajim. Bismillahi walhamdulillah. Allahumma shalli wa sallim’ala sayyidina muhammadin wa’ala ali sayyidina Muhammadin. Allahummaghfirli dzunubi waftahli abwaba fadhlik",
    translation:
      "Aku berlindung kepada Allah Yang Maha Besar, kepada Dzat-Nya yang Maha Mulia, dan kepada kerajaan-Nya yang sedia dari setan yang terlontar. Dengan nama Allah dan segala puji bagi Allah. Wahai Tuhanku, berilah salawat dan sejahtera atas sayyidina Muhammad dan atas keluarga sayyidina Muhammad. Wahai Tuhanku, ampuni untukku segala dosaku. Buka lah bagiku segala pintu kemurahan-Mu",
  },
  {
    title: "Doa Sebelum Belajar",
    arabic:
      "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلَّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ وَأَعُوْذُ بِاللَّهِ مِنْ حَالِ أَهْلِ النَّارِ",
    latin:
      "Allaahumman fa'nii bimaa 'allamtanii wa 'allimnii maa yanfa'unii wa zidnii 'ilmaa, alhamdulillahi 'ala kulli haal, wa a'uudzu billahi min haali ahlin naar",
    translation:
      "Ya Allah, berilah kemanfaatan, pada ilmu yang telah Engkau ajarkan kepadaku dan ajarkanlah kepadaku akan ilmu yang dapat memberikan manfaat kepadaku, dan berikanlah tambahan ilmu pada diriku. Segala puji bagi Allah atas segala sesuatu, dan aku berlindung kepada Allah dari keadaan penghuni neraka",
  },
  {
    title: "Doa Selesai Belajar",
    arabic:
      "اَللّٰهُمَّ إِنِّيْ قَدِ اسْتَوْدَعْتُكَ مَا عَلَّمْتَنِيْهِ فَارْدُدْهُ إِلَيَّ عِنْدَ حَاجَتِيْ إِلَيْهِ وَ لَا تَنْسَنِيْهِ يَا رَبَّ الْعَالَـمِيْنَ",
    latin:
      "Allâhumma innî qad istauda‘tuka mâ ‘allamtanîhi fardud-hu ilayya ‘inda hâjatî ilaihi walâ tansanîhi yâ rabbal ‘âlamîna",
    translation:
      "Ya Allah, sesungguhnya aku titipkan kepada-Mu apa yang telah Kauajarkan kepadaku, maka kembalikanlah ia kepadaku ketika aku membutuhkannya. Dan janganlah Kaubuat aku lupa padanya wahai Tuhan yang memelihara alam",
  },
  {
    title: "Doa Memohon Ilmu Yang Bermanfaat",
    arabic:
      "اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",
    latin:
      "Allahumma innii as-aluka ‘ilmaan naafi’aan wa rizqoon thoyyibaan wa ‘amalaan mutaqobbalaan",
    translation:
      "Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik diterima",
  },

  {
    title: "Doa Mempermudah Menjawab Ujian",
    arabic: "رَبِّ يَسِّرْ وَأَعِنْ وَلَا تُعَسِّرْ",
    latin: "Rabbi yassir wa a‘in wa lâ tu‘assir",
    translation:
      "Wahai Tuhanku, mudahkanlah dan Bantulah aku. Jangan Kau persulit",
  },

  {
    title: "Doa Untuk Guru",
    arabic:
      "اَللّٰهُمَّ اغْفِرْ لِمَشَايِخِنَا وَلِمَنْ عَلَّمَنَا، وَارْحَمْهُمْ وَأَكْرِمْهُمْ بِرِضْوَانِكَ الْعَظِيْمِ، فِيْ مَقْعَدِ الصِّدْقِ عِنْدَكَ يَا أَرْحَمَ الرَّاحِمِيْنَ",
    latin:
      "Allâhumma-ghfir li masyâyikhinâ wa liman ‘allamanâ wa-rḫamhum wa akrimhum biridlwânikal ‘adhîm fî maq’adish shidqi ‘indaka yâ arḫamar râḫimîna",
    translation:
      "Wahai Allah ampunilah guru-guru kami dan orang yang telah mengajar kami. Sayangilah mereka, muliakanlah mereka dengan keridhaan-Mu yang agung, di tempat yang disenangi di sisi-Mu, wahai Yang Maha Penyayang di antara penyayang",
  },

  {
    title: "Doa Pembuka Majelis",
    arabic:
      "ﺇِﻥَّ ﺍﻟْﺤَﻤْﺪَ ﻟِﻠﻪِ ﻧَﺤْﻤَﺪُﻩُ ﻭَﻧَﺴْﺘَﻌِﻴْﻨُﻪُ ﻭَﻧَﺴْﺘَﻐْﻔِﺮُﻩْ ﻭَﻧَﻌُﻮﺫُ ﺑِﺎﻟﻠﻪِ ﻣِﻦْ ﺷُﺮُﻭْﺭِ ﺃَﻧْﻔُﺴِﻨَﺎ ﻭَﻣِﻦْ ﺳَﻴِّﺌَﺎﺕِ ﺃَﻋْﻤَﺎﻟِﻨَﺎ، ﻣَﻦْ ﻳَﻬْﺪِﻩِ ﺍﻟﻠﻪُ ﻓَﻼَ ﻣُﻀِﻞَّ ﻟَﻪُ ﻭَﻣَﻦْ ﻳُﻀْﻠِﻞْ ﻓَﻼَ ﻫَﺎﺩِﻱَ ﻟَﻪُ. ﺃَﺷْﻬَﺪُ ﺃَﻥَّ ﻻَ ﺇِﻟَﻪَ ﺇِﻻَّ ﺍﻟﻠﻪ ﻭَﺃَﺷْﻬَﺪُ ﺃَﻥَّ ﻣُﺤَﻤَّﺪًﺍ ﻋَﺒْﺪُﻩُ ﻭَﺭَﺳُﻮْﻟُﻪُ",
    latin:
      "Innalhamdalillahi nahmaduhu wanasta'inuwanastaghfiruhu wana'udzubillahi min syuruuri anfusinaa wamin sayyiaati a'maalina. Man yahdillah falaa mudhillalahu wamin yudhillhu falaa haadiyalahu. Asyhadu anna muhammdan abduhuu warosuluh.",
    translation:
      "Kami panjatkan segala puji kepada-Nya dan kami mohon pertolongan-Nya. Seraya memohon ampun dan perlindungan-Nya dari segala keburukan jiwaku dan kejelekan amaliahku. Barang siapa telah Allah berikan petunjuk jalan baginya, maka tidak ada yang bisa menyesatkannya. Dan barang siapa yang telah Allah sesatkan jalannya, maka tiada yang bisa memberinya petunjuk. Aku bersaksi bahwa tiada tuhan selain Allah dan aku bersaksi bahwa nabi Muhammad hamba Allah dan utusan Allah",
  },
  {
    title: "Doa Penutup Majelis",
    arabic:
      "سُبْحانَكَ اللَّهُمَّ وبِحَمْدِكَ أشْهَدُ أنْ لا إِلهَ إِلاَّ أنْتَ أسْتَغْفِرُكَ وأتُوبُ إِلَيْكَ",
    latin:
      "Subhânakallâhumma wa bihamdika asyhadu an-lâilâha illâ anta astaghfiruka wa atûbu ilaik",
    translation:
      "Maha Suci Engkau, ya Allah. Segala sanjungan untuk-Mu. Aku bersaksi bahwa tiada Tuhan melainkan Engkau. Aku memohon ampun dan bertaubat kepada-Mu",
  },

  {
    title: "Doa Sesudah Adzan",
    arabic:
      "اَللّٰهُمَّ رَبَّ هٰذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ اٰتِ سَيِّدَنَـا مُحَمَّـدًا ࣙالْوَسِيْلَةَ وَالْفَضِيْلَةَ ‎وَالدَّرَجَةَ الرَّفِيْعَةَ وَابْعَثْهُ مَقَامًا مَحْمُوْدًا ࣙالَّذِيْ وَعَدْتَهُ إِنَّكَ لَا تُخْلِفُ الْمِيْعَادَ",
    latin:
      "Allâhumma Rabba hâdzihid-da‘watit-tâmmati, wash-shalâtil-qâimati, âti sayyidanâ Muḫammada nil-wasîlata wal fadlîlata wad darajatar rafî‘ah, wab‘ats-hu maqâman maḫmûdani-lladzî wa‘adtah, innaka lâ tukhliful-mî‘âda",
    translation:
      "Ya Allah Tuhan yang memiliki seruan yang sempurna dan shalat yang tetap didirikan, karuniailah Nabi Muhammad wasilah (tempat yang luhur), keutamaan, dan derajat yang tinggi. Tempatkanlah beliau pada kependudukan yang terpuji yang telah Kaujanjikan. Sungguh Engkau tiada menyalahi janji, wahai dzat yang paling Penyayang",
  },

  {
    title: "Doa Bercermin",
    arabic: "اَللّٰهُمَّ كَمَا حَسَّنْتَ خَلْقِيْ فَحَسِّنْ خُلُقِيْ",
    latin: "Allâhumma kamâ ḫassanta khalqî faḫassin khuluqî",
    translation:
      "Hai Tuhanku, sebagaimana telah Kaubaguskan kejadianku, maka baguskanlah perangaiku",
  },

  {
    title: "Doa Ketika Turun Hujan",
    arabic: "اَللّٰهُمَّ صَيِّبًا نَافِعًا",
    latin: "Allâhummâ shayyiban nâfi'an",
    translation: "Ya Allah, turunkanlah pada kami hujan yang bermanfaat",
  },

  {
    title: "Doa Ketika Hujan Reda",
    arabic: "مُطِرْنَا بِفَضْلِ اللهِ وَرَحْمَتِهِ",
    latin: "Muthirnâ bi fadhlillâhi wa raḫmatih",
    translation: "Semoga kita dihujani dengan anugerah dan rahmat Allah",
  },

  {
    title: "Doa Untuk Kedua Orang Tua",
    arabic:
      "رَبِّ اغْفِرْ لِيْ وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِيْ صَغِيْرًا",
    latin: "Rabbighfir lî  wa li wâlidayya warḫamhumâ kamâ rabbayânî shaghîrâ",
    translation:
      "Tuhanku, ampunilah diriku dan kedua orang tuaku, sayangilah mereka sebagaimana mereka menyayangiku di waktu aku kecil",
  },

  {
    title: "Doa Masuk Pasar / Mal",
    arabic:
      "بِاسْمِ اللّٰهِ، اَللّٰهُمَّ إنِّيْ أَسْأَلُكَ خَيْرَ هٰذِهِ السُّوْقِ وَخَيْرَ مَا فِيْهَا وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيْهَا، اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ أنْ أُصِيْبَ فِيْهَا يَمِيْنًا فَاجِرَةً أَوْ صَفْقَةً خَاسِرَةً",
    latin:
      "Bismillâh allâhumma innî as-aluka khaira hâdzihi-s-sûqi wa khaira mâ fîhâ wa a‘ûdzubika min syarrihâ wa syarri mâ fîhâ. Allâhumma innî a‘ûdzubika an ushîba fîhâ yamînan fâjiratan au shafqatan khâsiratan",
    translation:
      "Dengan nama Allah, ya Allah, aku memohon kebaikan dari pasar ini dan kebaikan dari apa yang ada di dalamnya. Aku berlindung dari keburukan pasar ini dan keburukan apa yang ada di dalamnya. Ya Allah, aku berlindung dari sumpah palsu dan transaksi yang merugikan",
  },

  {
    title: "Doa Keselamatan Anak Keturunan",
    arabic:
      "اَللّٰهُمَّ بِحُرْمَةِ النَّبِيِّ وَالْحَسَنِ وَأَخِيْهِ وَأُمِّهِ وَأَبِيْهِ وَنَجِّنِيْ مِنَ الْغَمِّ الَّذِيْ فِيْهِ يَا حَيُّ يَا قَيُّوْمُ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ، وَأَسْأَلُكَ أَنْ تُحْيِيَ قَلْبِيْ بِنُوْرِ مَعْرِفَتِكَ أَبَدًا أَبَدًا يَا رَسُوْلَ اللهِ يَا اَللهُ، يَا اَللهُ، يَا اَللهُ، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ، وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ",
    latin:
      "Allâhumma bi ḫurmatin nabiyyi wal Ḫasani wa akhîhi wa ummihi wa abîhi wa najjinî minal ghammil ladzî fîhi, yâ Ḫayyu yâ Qayyûmu yâ dzal jalâli wal ikrâm. Wa as’aluka an tuḫyiya qalbî bi nûri ma‘rifatika abadan abadâ. Yâ Rasûlallâh, yâ Allâh (3 kali), bi raḫmatika yâ arḫamar râḫimîn, wal ḫamdulillâhi rabbil ‘âlamîn",
    translation:
      "Ya Allah, demi kehormatan Nabi Muhammad SAW, Hasan, saudaranya, ibunya, dan bapaknya, selamatkanlah aku dari kebingungan yang ada di dalamnya. Wahai Zat yang hidup, wahai Zat yang maha tegak, wahai Zat yang maha besar dan mulia, aku memohon kepada-Mu agar menghidupkan hatiku dengan cahaya makrifat-Mu selamanya.Wahai Rasulullah, ya Allah (3 kali), dengan rahmat-Mu, wahai Zat yang maha pengasih. Segala puji bagi Allah, Tuhan sekalian alam",
  },

  {
    title: "Doa Perlindungan dari Berbagai Bencana",
    arabic:
      "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْهَدْمِ وَأَعُوْذُ بِكَ مِنَ التَّرَدِّيْ وَأَعُوْذُ بِكَ مِنَ الْغَرَقِ وَالْحَرِيْقِ وَأَعُوْذُ بِكَ أَنْ يَتَخَبَّطَنِي الشَّيْطَانُ عِنْدَ الْمَوْتِ وَأَعُوْذُ بِكَ أَنْ أَمُوْتَ فِيْ سَبِيْلِكَ مُدْبِرًا وَأَعُوْذُ بِكَ أَنْ أَمُوْتَ لَدِيْغًا",
    latin:
      "Allâhumma innî a‘ûdzu bika minal hadmi, wa a‘ûdzu bika minat taraddî, wa a‘ûdzu bika minal gharqi wal ḫarîqi, wa a‘ûdzu bika an yatakhabbathanîsy syaithânu ‘indal mauti, wa a‘ûdzu bika an amûta fî sabîlika mudbiran, wa a‘ûdzu bika an amûta ladîghan",
    translation:
      "Ya Allah, aku berlindung kepada-Mu dari tertimpa reruntuhan. Aku berlindung kepada-Mu dari jatuh dari tempat yang tinggi. Aku berlindung kepada-Mu dari tenggelam dan kebakaran. Aku berlindung kepada-Mu dari bujuk rayu setan ketika (menjelang) kematian (sakaratul maut). Aku berlindung kepada-Mu dari mati di jalan-Mu dalam keadaan melarikan diri. Dan aku berlindung kepada-Mu dari mati karena sengatan binatang",
  },

  {
    title: "Doa Ketika Galau dan Susah",
    arabic:
      "اَللّٰهُمَّ رَحْمَتَكَ أَرْجُوْ، فَلَا تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ، أَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ",
    latin:
      "Allâhumma raḫmataka arjû, falâ takilnî ilâ nafsî tharfata ‘ainin, ashliḫ lî sya’nî kullahu",
    translation:
      "Ya Allah, kasih sayang-Mu kuharapkan. Maka dari itu, janganlah kau serahkan aku kepada diriku sendiri walau sekejap. Perbaikilah bagiku seluruh urusanku",
  },

  {
    title: "Doa Keselamatan Dunia Akhirat",
    arabic:
      "اَللّٰهُمَّ إِنَّا نَسْئَلُكَ سَلَامَةً فِي الدِّيْنِ وَعَافِيَةً فِي الْجَسَدِ وَزِيَادَةً فِي الْعِلْمِ وَبَرَكَةً فِي الرِّزْقِ وَتَوْبَةً قَبْلَ الْمَوْتِ وَرَحْمَةً عِنْدَ الْمَوْتِ وَمَغْفِرَةً بَعْدَ الْمَوْتِ. اَللّٰهُمَّ هَوِّنْ عَلَيْنَا فِيْ سَكَرَاتِ الْمَوْتِ وَالنَّجَاةَ مِنَ النَّارِ وَالْعَفْوَ عِنْدَ الْحِسَابِ",
    latin:
      "Allâhumma innâ nas aluka salâmatan fid dîn(i), wa ‘âfiyatan fil jasadi, wa ziyadatan fil ‘ilm(i), wabarakatan fir rizqi, wa taubatan qablal maut(i), waraḫmatan ‘indal mauti, wa maghfiratan ba’dal maut(i). Allâhumma hawwin ‘alainâ fî sakarâtil maut(i), wan najâta minan nâr(i), wal ‘afwa indal hisâbi",
    translation:
      "Ya Allah, sungguh kami memohon kepada-Mu keselamatan dalam beragama, kesehatan raga, tambahan ilmu, keberkahan rezeki, taubat sebelum mati, rahmat ketika mati, dan ampunan setelah mati. Ya Allah, mudahkanlah kami dalam menghadapi sakaratul maut. Berikanlah kami keselamatan dari api neraka, dan ampunan pada saat perhitungan amal",
  },

  {
    title: "Doa Selamat dan Tolak Bala",
    arabic:
      "اَللَّهُمَّ افْتَحْ لَنَا أَبْوَابَ الْخَيْرِ وَأَبْوَابَ الْبَرَكَةِ وَأَبْوَابَ النِّعْمَةِ وَأَبْوَابَ الرِّزْقِ وَأَبْوَابَ الْقُوَّةِ وَأَبْوَابَ الصِّحَّةِ وَأَبْوَابَ السَّلَامَةِ وَأَبْوَابَ الْعَافِيَةِ وَأَبْوَابَ الْجَنَّةِ، اَللَّهُمَّ عَافِنَا مِنْ كُلِّ بَلَاءِ الدُّنْيَا وَعَذَابِ الْاٰخِرَةِ وَاصْرِفْ عَنَّا بِحَقِّ الْقُرْاٰنِ الْعَظِيْمِ وَنَبِيِّكَ الْكَرِيْمِ شَرَّ الدُّنْيَا وَعَذَابَ الْاٰخِرَةِ،غَفَرَ اللهُ لَنَا وَلَهُمْ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ، سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ وَ الْحَمْدُ لِلّٰهِ رَبِّ الْعَـــالَمِيْنَ",
    latin:
      "Allâhumma-ftaḫ lanâ abwâbal khair, wa abwâbal barakah, wa abwâban ni‘mah, wa abwâbar rizqi, wa abwâbal quwwah, wa abwâbas shiḫḫah, wa abwâbas salâmah, wa abwâbal ‘âfiyah, wa abwâbal jannah. Allâhumma ‘âfinâ min kulli balâ’id dunyâ wa ‘adzâbil âkhirah, washrif ‘annâ bi ḫaqqil Qur’ânil ‘azhîm wa nabiyyikal karîm syarrad dunyâ wa ‘adzâbal âkhirah. Ghafarallâhu lanâ wa lahum bi raḫmatika yâ arḫamar râḫimîn. Subḫâna rabbika rabbil ‘izzati ‘an mâ yashifūn, wa salâmun ‘alal mursalîn, wal ḫamdulillâhi rabbil ‘âlamîn",
    translation:
      "Ya Allah, bukalah bagi kami pintu kebaikan, pintu keberkahan, pintu kenikmatan, pintu rezeki, pintu kekuatan, pintu kesehatan, pintu keselamatan, pintu afiyah, dan pintu surga. Ya Allah, jauhkan kami dari semua ujian dunia dan siksa akhirat. Palingkan kami dari keburukan dunia dan siksa akhirat dengan hak Al-Qur’an yang agung dan derajat nabi-Mu yang pemurah. Semoga Allah mengampuni kami dan mereka. Wahai Zat yang maha pengasih. Maha suci Tuhanmu, Tuhan keagungan, dari segala yang mereka sifatkan. Semoga salam tercurah kepada para rasul. Segala puji bagi Allah, Tuhan sekalian alam",
  },

  {
    title: "Doa Ketika Tertimpa Musibah",
    arabic:
      "إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اَللّٰهُمَّ أَجِرْنِيْ فِيْ مُصِيْبَتِيْ وَأَخْلِفْ لِيْ خَيْرًا مِنْهَا",
    latin:
      "Innâ lillâhi wa innâ ilaihi râji‘un(a). Allâhumma ajirnî fî mushîbatî wa akhlif lî khairan minhâ",
    translation:
      "Sungguh kami adalah milik Allah, dan sungguh hanya kepada-Nya kami akan kembali. Ya Allah, karuniakanlah padaku pahala dalam musibah yang menimpaku dan berilah aku ganti yang lebih baik daripadanya",
  },
  {
    title: "Doa Agar Terhindar dari Kezaliman",
    arabic:
      "عَلَى اللّٰهِ تَوَكَّلْنَاۚ رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظّٰلِمِيْنَ، وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكٰفِرِيْنَ",
    latin:
      "‘alallâhi tawakkalnâ, rabbanâ lâ taj‘alnâ fitnatal lil-qaumidh-dhâlimîn, wa najjinâ biraḫmatika minal-qaumil-kâfirîna",
    translation:
      "Kepada Allah-lah kami bertawakal. Ya Tuhan kami, janganlah Engkau jadikan kami (sasaran) fitnah bagi kaum yang zalim, dan selamatkanlah kami dengan rahmat-Mu dari orang-orang kafir. (QS Yunus: 85-86)",
  },
  {
    title: "Doa Ketika Gempa Bumi",
    arabic:
      "اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيْهَا وَخَيْرَ مَا أَرْسَلْتَ بِهِ، وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيْهَا وَشَرِّ مَا أَرْسَلْتَ بِهِ",
    latin:
      "Allâhumma innî as-aluka khairaha wa khaira mâ fîhâ, wa khaira mâ arsalta bihi, wa a‘ûdzubika min syarrihâ, wa syarri mâ fîhâ wa syarri mâ arsalta bihi",
    translation:
      "Ya Allah, sesungguhnya aku memohon kehadirat-Mu kebaikan atas apa yang terjadi, dan kebaikan apa yang di dalamnya, dan kebaikan atas apa yang Engkau kirimkan dengan kejadian ini. Dan aku memohon perlindungan kepada-Mu dari keburukan atas apa yang terjadi, dan keburukan atas apa yang terjadi didalamnya, dan aku juga memohon perlindungan kepada-Mu atas apa-apa yang Engkau kirimkan",
  },

  {
    title: "Doa Ketika Kehilangan Barang",
    arabic:
      "اَللّٰهُمَّ يَا جَامِعَ النَّاسِ لِيَوْمٍ لَا رَيْبَ فِيْهِ، اِجْمَعْ بَيْنِيْ وَبَيْنَ ضَالَّتِيْ فِيْ خَيْرٍ وَعَافِيَةٍ",
    latin:
      "Allâhumma yâ jâmi‘an nâsi liyaumin lâ raiba fîh, ijma‘ bainî wa baina dlâllatî fî khairin wa ‘âfiyah",
    translation:
      "Wahai Tuhanku, wahai Tuhan yang mengumpulkan semua manusia di hari yang tiada ragu lagi padanya. Pertemukan aku dan barangku yang hilang dengan kebaikan dan keselamatan",
  },

  {
    title: "Doa Berangkat Kerja",
    arabic:
      "بِسْمِ اللهِ عَلَى نَفْسِيْ وَمَالِي وَدِيْنِيْ، اَللّٰهُمَّ رَضِّنِيْ بِقَضَائِكَ وَبَارِكْ لِي فِيْمَا قُدِّرَ لِيْ حَتَّى لَا أُحِبَّ تَعْجِيْلَ مَا أَخَّرْتَ وَلَا تَأْخِيْرَ مَا عَجَّلْتَ",
    latin:
      "Bismillâhi ‘alâ nafsî wa mâlî wa dînî. Allâhumma radl-dlinî bi qadâ-ika, wabârik lî fî mâ quddira lî hattâ lâ uḫibba ta‘jîla mâ akh-kharta wa lâ ta’khîra mâ ‘ajjalta",
    translation:
      "Dengan menyebut nama Allah, atas diriku, hartaku, dan agamaku. Ya Allah, jadikanlah aku orang yang ridha (menerima) atas ketetapan-Mu serta berkahilah aku atas rezeki yang Engkau tentukan sehingga aku tak tergesa-gesa meminta sesuatu yang Engkau tunda, atau menunda-nunda sesuatu yang Engkau hendak segerakan. (HR Ibnu as-Sunni)",
  },
  {
    title: "Doa Mempermudah Rezeki",
    arabic:
      "اَللّٰهُمَّ إِنِّي أَسْأَلُكَ أَنْ تَرْزُقَنِيْ رِزْقًا حَلَالًا وَاسِعًا طَيِّبًا مِنْ غَيْرِ تَعَبٍ وَلَا مَشَقَّةٍ وَلَا ضَيْرٍ وَلَانَصَبٍ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ اَللّٰهُ لَطِيْفٌۢ بِعِبَادِهٖ يَرْزُقُ مَنْ يَّشَاۤءُۚ وَهُوَ الْقَوِيُّ الْعَزِيْزُ",
    latin:
      "Allâhu lathîfun bi ‘ibâdihi yarzuqu man yasyâ’u, wa huwal qawiyyul ‘azîzu. Allâhumma innî as-aluka an tarzuqanî rizqan ḫalâlan wâsi‘an thayyiban min ghairi ta’abin wa lâ masyaqqatin wa lâ dlairin wa lâ nashabin innaka ‘alâ kulli syai-in qadîr(un)",
    translation:
      "Allah Mahalembut terhadap hamba-hamba-Nya; Dia memberi rezeki kepada siapa yang Dia kehendaki dan Dia Mahakuat, Mahaperkasa. Ya Allah aku mohon kepadamu limpahan rezeki yang halal, luas, dan baik, yang didapat tanpa letih, memberatkan, membahayakan, dan banting tulang. Sungguh Engkau Mahakuasa atas segala sesuatu",
  },
  {
    title: "Doa Mempermudah Urusan",
    arabic:
      "اَللّٰهُمَّ إِنَّكَ تَعْلَمُ مَا نَحْنُ فِيْهِ وَمَا نَطْلُبُـهُ وَنَرْتَجِيْـهِ مِنْ رَحْمَتِكَ فِيْ أَمْرِنَا كُلِّهِ فَيَسِّرْ لَنَا مَا نَحْنُ فِيْهِ مِنْ سَفَرِنَا وَمَا نَطْلُبُهُ مِنْ حَوَائِجِـنَا وَقَرِّبْ عَلَيْنَا الْمَسَافَاتِ وَسَلِّمْنَا مِنَ الْعِلَلِ وَاْلاٰفَاتِ وَلَا تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّـنَا وَلَا مَبْلَغَ عِلْمِنَا وَلَا تُسَلِّطْ عَلَيْنَا مَنْ لَا يَرْحَمُنَا بِرَحْمَتِكَ يَاأَرْحَمَ الرَّاحِمِيْنَ وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَاٰلِهِ وَصَحْبِهِ وَسَلَّمَ",
    latin:
      "Allâhumma innaka ta‘lamu mâ naḫnu fîhi wa mâ nathlubuhu wa nartajîhi min raḫmatika fî amrinâ kullihi fayassir lanâ mâ naḫnu fîhi min safarinâ wa mâ nathlubuhu min ḫawâijinâ wa qarrib ‘alainâ al-masâfâti wa sallimnâ minal ‘ilali wal âfâti wa lâ taj‘alid dunyâ akbara hamminâ wa lâ mablagha ‘ilminâ wa lâ tusallith ‘alainâ man lâ yarḫamunâ bi raḫmatika yâ arḫamar râḫimîn(a), washallallâhu ‘alâ sayyidinâ muḫammadin wa âlihi wa shaḫbihi wa sallam(a)",
    translation:
      "Ya Allah, sungguh Engkau mengetahui keadaan yang sedang kami hadapi, dan mengetahui apa yang kami cari dan harapkan dari rahmat-Mu dalam semua urusan kami. Karena itu, permudahkanlah perjalanan kami dan pemenuhan keperluan-keperluan kami. Dekatkanlah jarak perjalanan kami, selamatkanlah kami dari segala penyakit dan kerusakan. Janganlah Engkau jadikan dunia ini sebagai perhatian terbesar kami dan puncak pengetahuan kami. Janganlah Engkau kuasakan atas kami orang yang tidak menyayangi kami dengan rahmat-Mu, wahai Tuhan Yang Maha Pengasih sebaik-baik yang mengasihani! Semoga Allah swt mencurahkan rahmat dan keselamatan atas junjungan kami, Nabi Muhammad saw, keluarganya, dan sahabat-sahabatnya",
  },
  {
    title: "Doa Mempermudah Melunasi Hutang",
    arabic:
      "اَللّٰهُمَّ يَا فَارِجَ الْهَمِّ، كَاشِفَ الْغَمِّ، مُجِيْبَ دَعْوَةِ الْمُضْطَرِّينَ، يَا رَحْمَانَ الدُّنْيَا وَالْاٰخِرَةِ وَرَحِيْمَهُمَا، أَنْتَ تَرْحَمُنِيْ فَارْحَمْنِيْ رَحْمَةً تُغْنِيْنِيْ بِهَا عَنْمَنْ سِوَاكَ",
    latin:
      "Yâ fârijal hammi yâ kâsyifal ghammi yâ mujîba da‘watil mudldltharrîn yâ raḫmânad dun-yâ wal âkhirati wa raḫîmahumâ, anta tarḫamunî farḫamnî raḫmatan tughnînî bihâ ‘an man siwâka",
    translation:
      "Ya Allah yang berkuasa menghilangkan kegalauan, menyingkap kesedihan, dan mengabulkan doa orang-orang yang dalam kesempitan, yang Maha Pengasih lagi Maha Penyayang di dunia dan akhirat. Engkaulah yang senantiasa merahmatiku, maka rahmatilah aku dengan rahmat yang mencukupi diriku dari mencari rahmat kepada selain Diri-Mu",
  },
  {
    title: "Doa Terhindar dari Hutang",
    arabic:
      "اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوْذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوْذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوْذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    latin:
      "Allâhumma innî a‘ûdzu bika minal hammi wal ḫazani. Wa a‘ûdzu bika minal ‘ajzi wal kasali. Wa a‘ûdzu bika minal jubni wal bukhli. Wa a‘ûdzu bika min ghalabatid daini wa qahrir rijâli",
    translation:
      "Ya Allah, aku berlindung kepada-Mu dari kebingungan dan kesedihan, aku berlindung kepada-Mu dari kelemahan dan kemalasan, aku berlindung kepada-Mu dari ketakutan dan kekikiran, aku berlindung kepada-Mu dari lilitan utang dan tekanan orang-orang",
  },
  {
    title: "Doa Menghindari Harta Haram",
    arabic:
      "اَللّٰهُمَّ اكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    latin:
      "Allâhumma-kfinî biḫalâlika ‘an ḫarâmika wa aghninî bi fadl-lika ‘am man siwâka",
    translation:
      "Ya Allah, cukupkanlah aku dengan yang halal sehingga terhindar dari yang haram. Cukupkanlah aku dengan anugerahmu sehingga terhindar dari (bergantung pada) selain-Mu",
  },
  {
    title: "Doa Ketika Mengalami Kerugian",
    arabic:
      "عَسٰى رَبُّنَآ اَنْ يُّبْدِلَنَا خَيْرًا مِّنْهَآ اِنَّآ اِلٰى رَبِّنَا رَاغِبُوْنَ",
    latin: "‘asâ rabbunâ ay yubdilanâ khairam min-hâ innâ ilâ rabbinâ râghibûn",
    translation:
      "Semoga Tuhan memberikan ganti untuk kami dengan yang lebih baik dari yang ini. Sungguh kita mengharapkan (ampunan) kepada Tuhan kita (QS al-Qalam: 32)",
  },

  {
    title: "Doa Minta Jodoh ( Untuk Laki Laki )",
    arabic:
      "رَبِّ هَبْ لِي مِنْ لَدُنْكَ زَوْجَةً طَيِّبَةً أَخْطُبُهَا وَأَتَزَوَّجُ بِهَا وَتَكُوْنُ صَاحِبَةً لِى فِى الدِّيْنِ وَالدُنْيَا وَالْأَخِرَةِ",
    latin:
      "Robbi hablii milladunka zaujatan thoyyibah akhtubuhaa wa atazawwaju biha watakunu shoohibatan lii fiddiini waddunyaa wal aakhiroh",
    translation:
      "Ya Tuhanku, berikanlah kepadaku istri yang terbaik dari sisi-Mu, istri yang aku lamar dan nikahi dan istri yang menjadi sahabatku dalam urusan agama, urusan dunia dan akhirat",
  },
  {
    title: "Doa Minta Jodoh ( Untuk Perempuan )",
    arabic:
      "رَبِّ هَبْ لِي مِنْ لَدُنْكَ زَوْجًا طَيِّبًا وَيَكُوْنُ صَاحِبًا لِى فِى الدِّيْنِ وَالدُنْيَا وَالْأَخِرَة",
    latin:
      "Robbi hablii milladunka zaujan thoyyiban, wayakuuna shoohiban, lii fiddiini waddunyaa wal aakhiroh.",
    translation:
      "Ya Tuhanku, berikanlah kepadaku suami yang terbaik dari sisi-Mu, suami yang juga menjadi sahabatku dalam urusan agama, urusan dunia dan akhirat",
  },

  {
    title: "Doa Pengakuan Diri dan Pertaubatan",
    arabic:
      "رَبَّنَا ظَلَمْنَآ اَنْفُسَنَا وَاِنْ لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُوْنَنَّ مِنَ الْخٰسِرِيْنَ",
    latin:
      "rabbanâ dhalamnâ anfusana wa il lam taghfir lanâ wa tar-ḫamnâ lanakûnanna minal-khâsirîn",
    translation:
      "Ya Tuhan kami, kami telah menzalimi diri kami sendiri. Jika Engkau tidak mengampuni kami dan memberi rahmat kepada kami, niscaya kami termasuk orang-orang yang rugi. (QS Al-A'raf: 23)",
  },

  {
    title: "Doa Menghilangkan Rasa Takut",
    arabic:
      "حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ ",
    latin: "Hasbunallah wani'mal wakil ni'mal maula wani'man nasir",
    translation:
      "Cukuplah Allah menjadi penolong bagi kami, dan Allah sebaik-baiknya pelindung dan sebaik-baiknya penolong",
  },
  {
    title: "Doa Awal Tahun",
    arabic:
      "اَللّٰهُمَّ أَنْتَ الْأَبَدِيُّ الْقَدِيْمُ الْأَوَّلُ وَعَلَى فَضْلِكَ الْعَظِيْمِ وَكَرِيْمِ جُوْدِكَ الْمُعَوَّلُ، وَهٰذَا عَامٌ جَدِيْدٌ قَدْ أَقْبَلَ، أَسْأَلُكَ الْعِصْمَةَ فِيْهِ مِنَ الشَّيْطَانِ وَأَوْلِيَائِهِ، وَالْعَوْنَ عَلَى هٰذِهِ النَّفْسِ الْأَمَّارَةِ بِالسُّوْءِ، وَالْاِشْتِغَالَ بِمَا يُقَرِّبُنِيْ إِلَيْكَ زُلْفَى يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    latin:
      "Allâhumma antal abadiyyul qadîmul awwal. Wa ‘alâ fadl-likal ‘adhîmi wa karîmi jûdikal mu‘awwal. Hâdzâ ‘âmun jadîdun qad aqbala. As’alukal ‘ishmata fîhi minasy-syaithâni wa auliyâ’ih, wal ‘auna ‘alâ hâdzihin nafsil ammârati bis sû’i, wal isytighâla bimâ yuqarribunî ilaika zulfâ, yâ dzal jalâli wal ikrâm",
    translation:
      "Ya Allah, Engkau yang Abadi, Qadim, dan Awal. Atas karunia-Mu yang besar dan kemurahan-Mu yang mulia, Engkau menjadi pintu harapan. Tahun baru ini sudah tiba. Aku berlindung kepada-Mu dari bujukan Iblis dan para pembesarnya di tahun ini. Aku pun mengharap pertolongan-Mu dalam mengatasi nafsu yang kerap mendorongku berlaku buruk. Kepada-Mu, aku memohon bimbingan agar aktivitas keseharian mendekatkanku pada rahmat-Mu, wahai Tuhan Pemilik Kebesaran dan Kemuliaan",
  },
  {
    title: "Doa Akhir Tahun",
    arabic:
      "اَللّٰهُمَّ مَا عَمِلْتُ مِنْ عَمَلٍ فِيْ هٰذِهِ السَّنَةِ مَا نَهَيْتَنِيْ عَنْهُ وَلَمْ أَتُبْ مِنْهُ وَحَلُمْتَ فِيْهَا عَلَيَّ بِفَضْلِكَ بَعْدَ قُدْرَتِكَ عَلَى عُقُوْبَتِيْ وَدَعَوْتَنِيْ إِلَى التَّوْبَةِ مِنْ بَعْدِ جَرَاءَتِيْ عَلَى مَعْصِيَتِكَ فَإِنِّي اسْتَغْفَرْتُكَ فَاغْفِرْ لِيْ وَمَا عَمِلْتُ فِيْهَا مِمَّا تَرْضَى وَوَعَدْتَّنِيْ عَلَيْهِ الثَّوَابَ فَأَسْئَلُكَ أَنْ تَتَقَبَّلَ مِنِّيْ وَلَا تَقْطَعْ رَجَائِيْ مِنْكَ يَا كَرِيْمُ",
    latin:
      "Allâhumma mâ ‘amiltu min ‘amalin fî hâdzihis sanati mâ nahaitanî ‘anhu, wa lam atub minhu, wa ḫalumta fîhâ ‘alayya bi fadhlika ba‘da qudratika ‘alâ ‘uqûbatî, wa da‘autanî ilat taubati min ba‘di jarâ-atî ‘alâ ma‘shiyatika. Fa innî-staghfartuka, faghfir lî wa mâ ‘amiltu fîhâ mimmâ tardlâ, wa wa‘adtanî ‘alaihits tsawâba, fa-as’aluka an tataqabbala minnî wa lâ taqtha‘ rajâ’î minka yâ karîm",
    translation:
      "Ya Allah, aku telah menerjang larangan-Mu tahun ini sementara aku belum sempat bertaubat. Dengan karunia-Mu Engkau bersabar atas perbuatan ku itu padahal Engkau mampu menyiksaku. Engkau telah menyeru kepadaku untuk bertaubat setelah aku lancang mendurhakai-Mu. Sungguh, aku memohon ampun maka ampunilah aku. Semoga Engkau menerima perbuatanku yang Engkau ridhai dan perbuatanku yang terjanjikan pahala-Mu. Janganlah Kauputus harapanku, wahai Tuhan Yang Maha Pemurah",
  },

  {
    title: " Doa Asyura ( 10 Muharram )",
    arabic:
      "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ اَللَّهُمَّ يَا مُفَرِّجَ كُلِّ كَرْبٍ، وَيَا مُخْرِجَ ذِي النُّونِ يَوْمَ عَاشُورَاءَ، وَيَا جَامِعَ شَمْلِ يَعْقُوبَ يَوْمَ عَاشُورَاءَ، وَيَا غَافِرَ ذَنبِ دَاوُدَ يَوْمَ عَاشُورَاءَ، وَيَا كَاشِفَ ضُرِّ أَيُّوبَ يَوْمَ عَاشُورَاءَ، وَيَا سَامِعَ دَعْوَةِ مُوسَى وَهَارُونَ يَوْمَ عَاشُورَاءَ، وَيَا خَالِقَ رُوحِ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ حَبِيبِكَ وَمُصْطَفَاكَ يَوْمَ عَاشُورَاءَ، وَيَا رَحْمَنَ الدُّنْيَا وَاْلآخِرَةِ، لاَ إِلَهَ إِلاَّ أَنتَ إِقْضِ حَاجَاتِنَا فِي الدُّنْيَا وَاْلآخِرَةِ، وَأَطِلْ أَعْمَارَنَا فِي طَاعَتِكَ وَمَحَبَّتِكَ وَرِضَاكَ، يَا أَرْحَمَ الرَّاحِمِينَ، وَأَحْيِنَا حَيَاةً طَيِّبَةً، وَتَوَفَّنَا عَلَى اْلإِسْلاَمِ وَاْلإِيمَانِ، يَا أَرْحَمَ الرَّاحِمِينَ وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ، وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِين ",
    latin:
      "Bismillahirrahmanirrahim. Allahumma Ya mufarrija kulla karbin, wa yaa mukhrija dzinnuun yauma 'Asyuura a, wa yaa jaami'a syamli ya'quuba yauma 'aasyuuraa, wa yaa ghaafira dzanbi daawuuda yauma 'aasyuura, wa yaa kaasyifa dhurro ayyuba yauma 'asyuura, wa yaa saami'a da'wati muusa wa haaruuna yauma 'asyurra, wa yaa khaaliqa ruukhi sayyidina muhammadin shallallaahu 'alaihi wasallama habibiika wamusthofaka yauma 'asyura, wa yaa rakhmanaddunyaa wal aakhirah, laailaaha illa anta iqdhi haajaatina fiddunya wal aakhiraj, wa athil a'maraana fii thaa'atika wamahabbatika waridhaaka, yaa arhamarrahimiin. wa akhyina khayaatan thayyibatan, watawaffana 'alalislaami wal iiimaani yaa arhamarraakhiimin. wa sallallahu 'ala sayyidina muhammadin wa 'ala alihi washahbibi wasallam, walhamdulillahi rabbil 'aalamiin",
    translation:
      "Ya Allah, Yang maha melepaskan setiap kesulitan, wahai Yang maha mengeluarkan Dzun Nuun (Nabi Yunus) pada hari Asyura, Wahai Yang maha mengumpulkan keluarga Nabi Ya’qub pada hari Asyura, wahai Yang mengampuni Nabi Daud pada hari Asyura, wahai Yang maha melepaskan kesulitan Nabi Ayyub pada hari Asyura. Wahai Yang mendengar doa Nabi Musa dan Nabi Harun pada hari Asyura, wahai Yang maha menjadikan roh penghulu kita, Nabi Muhammad shallallahu ‘alaihi wasallam, kekasih dan pilihan-Mu pada hari Asyura, Wahai Tuhan dunia dan akhirat, Tiada Tuhan selain Engkau, Tunaikanlah hajat-hajat kami di dunia dan akhirat, Dan panjangkanlah umur kami dalam ketaatan kepada-Mu, mahabbah (kepada)-Mu dan keridhaan-Mu, wahai Yang Pengasih di antara yang mengasihi. Dan hidupkanlah kami dengan kehidupan yang baik, dan matikanlah kami dalam agama Islam dan iman, wahai Yang Pengasih di antara yang mengasihi.Semoga Allah mencurahkan shalawat dan salam atas penghulu kita, Nabi Muhammad dan ke atas keluarga dan sahabat beliau, dan segala pujian bagi Allah, Tuhan semesta alam",
  },
  {
    title: "Doa Bulan Safar",
    arabic:
      "   بِسْمِ اللهِ الرَّحْمنِ الرَّحِيْمِ، وَصَلَّى اللهُ تَعَالَى عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ أَجْمَعِيْنَ، أَعُوْذُ بِاللهِ مِنْ شَرِّ هٰذَا الزَّمَانِ وَأَهْلِهِ،  وَأَسْأَلُكَ بِجَلَالِكَ وَجَلَالِ وَجْهِكَ وَكَمَالِ جَلَالِ قُدْسِكَ أَنْ تُجِيْرَنِيْ وَوَالِدَيَّ وَأَوْلَادِيْ وَأَهْلِيْ وَأَحْبَابِيْ وَمَا تُحِيْطُهُ شَفَقَةُ قَلْبِيْ مِنْ شَرِّ هٰذِهِ السَّنَةِ، وَقِنِيْ شَرَّ مَا قَضَيْتَ فِيْهَا، وَاصْرِفْ عَنِّيْ شَرَّ شَهْرِ صَفَرَ، يَا كَرِيْمَ النَّظَرِ، وَاخْتِمْ لِيْ فِيْ هٰذَا الشَّهْرِ وَالدَّهْرِ بِالسَّلَامَةِ وَالْعَافِيَةِ لِي وَلِوَالِدَيَّ وَأَوْلَادِيْ وَلِأَهْلِيْ وَمَا تَحُوْطُهُ شَفَقَةُ قَلْبِيْ وَجَمِيْعِ الْمُسْلِمِيْنَ. وَصَلَّى اللهُ تَعَالَى عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلَّمَ اَللّٰهُمَّ إِنَّا نَعُوْذُ بِكَ مِنْ شَرِّ هٰذَا الشَّهْرِ، وَمِنْ كُلِّ شِدَّةٍ وَبَلَاءٍ وبَلِيَّةٍ قَدَّرْتَهَا فِيْهِ يَا دَهْرَ، يَا مَالِكَ الدُّنْيَا وَالْاٰخِرَةِ، يَا عَالِمًا بِمَا كَانَ وَمَا يَكُوْنُ، وَمَنْ إِذَا أَرَادَ شَيْئًا قَالَ لَهُ: (كُنْ فَيَكُوْنُ) يَا أَزَلِيُّ يَا أَبَدِيُّ يَا مُبْدِئُ يَا مُعِيْدُ يَاذَا الْجَلَالِ وَالْإِكْرَامِ، يَاذَا الْعَرْشِ الْمَجِيْدِ أَنْتَ تَفْعَلُ مَا تُرِيْدُ اَللّٰهُمَّ احْرِسْ بِعَيْنِكَ أَنْفُسَنَا وَأَهْلَنَا وَأَمْوَالَنَا وَوَالِدِيْنَا وَدِيْنَنَا وَدُنْيَانَا الَّتِيْ ابْتَلَيْتَنَا بِصُحْبَتِهَا، بِبَرَكَةِ الْأَبْرَارِ وَالْأخْيَارِ، وَبِرَحْمَتِكَ يَاعَزِيْزُ يَاغَفَّارُ، يَاكَرِيْمُ يَاسَتَّارُ يَاأَرْحَمَ الرَّاحِمِيْنَ اَللّٰهُمَّ يَا شَدِيْدَ الْقُوَى، وَيَا شَدِيْدَ الْمِحَنِ، يَا عَزِيْزُ ذَلَّتْ لِعِزَّتِكَ جَمِيْعُ خَلْقِكَ، اِكْفِنِيْ مِنْ جَمِيْعِ خَلْقِكَ، يَا مُحْسِنُ يَا مُجْمِلُ يَا مُتَفَضِّلُ يَا مُنْعِمُ يَا مُتَكَرِّمُ، يَا مَنْ لَا إِلٰهَ إِلَّا أَنْتَ اِرْحَمْنَا اللّٰهُمَّ بِرَحْمَتِكَ يَاأَرْحَمَ الرَّاحِمِيْنَ، وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلَّمَ أَجْمَعِيْن",
    latin:
      "Bismilahirrahmanirrahim, wa shallallahu ta’âla ‘ala sayyidina Muhammadin wa ‘ala âlihi wa shahbihi ajma’în. A’ûdzu billahi min syarri hadzaz zaman wa ahlihi, wa as`aluka bi jalâlika wa jalâli wajhika wa kamâli jalâli qudsika an tujîrani wa walidayya wa ahlî wa ahbâbi wa mâ tuhîthuhu syafaqatu qalbi min syarri hadzas sanati, wa qini syarra mâ qhaddaita fîha, washrif ‘anni syarra syahri shafar, yâ Karîman nazhar, wakhtim lî fî hâdzas syahri wad dahri bis salamati wal ‘afiyati lî wa liwâdayya wa aulâdi wa li ahli wa mâ tahûthuhu syafaqatu qalbi wa jamî’il muslimîn, wa shallallahu ta’âla ‘ala sayyidina Muhammadin wa ‘alâ âli wa shahbihi wa sallam. Allahumma innâ na’udzubika min syarri hadzas syahri, wa min kulli syiddatin wa balâin wa baliyyatin qaddartahâ fîhi yâ dahru, ya mâlikad dunya wal akhirat, ya ‘âliman bima kâna wa mâ yakûnu, wa man idzâ arâda syai`an qâla lahu: (kun fayakûn) yâ azaliyyu ya abadiyyu ya mubdi-u ya mu‘id ya dzal jalâli wal ikrâm, ya dzal ‘arsyil majîd anta taf’alu mâ turîd.   Allahummahris bi ‘anika anfusana wa ahlana wa amwalana wa wâlidina wa dînana wa dunyânal latî ibtalaina bi suhbatiha, bi barakatil abrâri wal akhyâri, wa birahmatika ya ‘azîzu yâ ghaffâru, yâ karîmu yâ sattâru yâ arhamar râhimin.   Allahuma yâ syadîdal qawiyyi wa yâ syadidal mihani, yâ ‘azîzu dzallat li’izzatika jamîu khalkika, ikfîni min jami’i khalkika, yâ Muhsinu yâ Mujmilu yâ Mutafaddhil, yâ Mun’im, ya Mutakarrim, yâ man lâ ilaha illa Anta, irhamnâ allahumma bi rahmatika yâ arhamar rahimîn. Wa shallallahu ta’âla ‘ala sayyidina Muhammadin wa ‘ala âlihi wa shahbihi ajma’în",
    translation:
      "Dengan nama Allah yang Maha Pengasih lagi Maha Penyayang. Semoga Allah selalu memberi rahmat kepada Tuan kami, Muhammad saw dan keluarganya serta sahabatnya semuanya. Aku berlindung dari keburukan zaman ini dan orang-orang yang memiliki keburukan itu, dan aku memohon dengan wasilah keagungan-Mu dan keagungan keridhaan-Mu serta keagungan kesucian-Mu, supaya Engkau melindungiku, kedua orang tuaku, keluargaku, orang-orang yang aku cintai dan sesuatu yang diliputi kasih sayangku, dari keburukan tahun ini, dan cegahlah aku dari keburukan yang telah Engkau tetapkan di dalamnya. Palingkanlah dariku keburukan di bulan Safar, wahai Dzat Yang Memiliki Pandangan Yang Mulia. Akhirilah aku di bulan ini, di waktu ini dengan keselamatan dan sejahtera bagi kedua orang tuaku, anak-anakku, keluargaku, dan sesuatu yang diliputi kasih sayangku seluruhnya. Semoga Allah selalu memberi rahmat dan keselamatan kepada tuan kami Muhammad saw dan keluarganya serta sahabatnya.      Ya Allah, sesungguhnya kami berlindung kepada-Mu dari keburukan bulan ini, dan dari segala kesukaran, bencana dan cobaan yang telah Engkau takdirkan di dalamnya, wahai Ad-Dahr (Allah), wahai sang pemilik dunia dan akhirat, wahai Zat Yang Maha mengetahui sesuatu yang telah terjadi dan yang akan terjadi, wahai Zat yang apabila menghendaki sesuatu mengucapkan: Kun fayakun, Wahai yang Zat yang tidak terikat waktu, wahai Zat yang abadi, wahai Zat yang menciptakan segala sesuatu, wahai Zat yang mengembalikan segala sesuatu, wahai Zat pemilik keagungan dan kemuliaan, wahai Zat pemilik ‘Arsyi yang mulia, Kau maha melakukan apa yang Kau kehendaki.    Ya Allah jagalah diri kami dengan pandangan-Mu, dan keluarga kami, harta kami, orang tua kami, agama kami, dunia yang kami dicoba untuk menghadapinya, dengan wasilah keberkahan orang-orang yang baik dan pilihan, dan dengan kasih sayang-Mu wahai yang maha perkasa, maha pengampun, maha mulia, maha menutup aib, duhai yang paling maha penyayang di antara para penyayang.   Wahai Allah, wahai Zat yang sungguh amat kuat, Zat yang cobaannya sangat berat, wahai yang maha perkasa, yang mana seluruh mahlukNya tunduk karena keperkasaan-Mu, jagalah aku dari semua mahluk-Mu, wahai yang maha memperbagus, yang maha memperindah, yang maha memberikan keutamaan, yang maha memberikan kemuliaan, Yang Siapa tiada tuhan kecuali Engkau, kasih sayangilah kami dengan rahmat-Mu wahai Zat paling penyayang di antara para penyayang. Semoga Allah selalu memberi rahmat dan kepada tuan kami Muhammad SAW, dan keluarganya serta sahabatnya semua",
  },
  {
    title: "Doa Bulan Rajab",
    arabic:
      "اللّٰهُمَّ بَارِكْ لَنَا فِيْ رَجَبَ وَشَعْبَانَ وَبَلِّغْنَا رَمَضَانَ",
    latin: "Allâhumma bârik lanâ fî rajaba wa sya‘bâna wa ballighnâ ramadlânâ",
    translation:
      "Ya Allah, berkahilah kami pada bulan Rajab dan bulan Sya’ban dan pertemukanlah kami dengan bulan Ramadhan",
  },
  {
    title: "Doa Malam Nisfu Sya'ban",
    arabic:
      'اَللّٰهُمَّ يَا ذَا الْمَنِّ وَلَا يُمَنُّ عَلَيْكَ يَا ذَا الْجَلَالِ وَالإِكْرَامِ يَا ذَا الطَوْلِ وَالإِنْعَامِ لَا إِلٰهَ إِلَّا أَنْتَ ظَهْرَ اللَّاجِيْنَ وَجَارَ المُسْتَجِيْرِيْنَ وَمَأْمَنَ الخَائِفِيْنَ   اللّٰهُمَّ إِنْ كُنْتَ كَتَبْتَنِيْ عِنْدَكَ فِيْ أُمِّ الكِتَابِ شَقِيًّا أَوْ مَحْرُومًا أَوْ مُقْتَرًّا عَلَيَّ فِي الرِزْقِ، فَامْحُ اللّٰهُمَّ فِي أُمِّ الكِتَابِ شَقَاوَتِي وَحِرْمَانِي وَاقْتِتَارَ رِزْقِيْ، وَاكْتُبْنِيْ عِنْدَكَ سَعِيْدًا مَرْزُوْقًا مُوَفَّقًا لِلْخَيْرَاتِ فَإِنَّكَ قُلْتَ وَقَوْلُكَ الْحَقُّ فِيْ كِتَابِكَ المُنْزَلِ عَلَى لِسَانِ نَبِيِّكَ المُرْسَلِ "يَمْحُو اللهُ مَا يَشَاءُ وَيُثْبِتُ وَعِنْدَهُ أُمُّ الكِتَابِ" وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمـَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلَّمَ وَالْحَمْدُ لِلّٰهِ رَبِّ العَــالَمِيْنَ',
    latin:
      "Allâhumma yâ dzal manni wa lâ yumannu ‘alaik, yâ dzal jalâli wal ikrâm, yâ dzat thawli wal in‘âm, lâ ilâha illâ anta zhahral lâjîn wa jâral mustajîrîn wa ma’manal khâ’ifîn. Allâhumma in kunta katabtanî ‘indaka fî ummil kitâbi syaqiyyan aw mahrûman aw muqtarran ‘alayya fir rizqi, famhullâhumma fî ummil kitâbi syaqâwatî wa hirmânî waqtitâra rizqî, waktubnî ‘indaka sa‘îdan marzûqan muwaffaqan lil khairât. Fa innaka qulta wa qawlukal haqqu fî kitâbikal munzal ‘alâ lisâni nabiyyikal mursal, “yamhullâhu mâ yasyâ’u wa yutsbitu, wa ‘indahû ummul kitâb” wa shallallâhu ‘alâ sayyidinâ muhammad wa alâ âlihî wa shahbihî wa sallama, walhamdu lillâhi rabbil ‘alamîn",
    translation:
      "Wahai Tuhanku yang maha pemberi, engkau tidak diberi. Wahai Tuhan pemilik kebesaran dan kemuliaan. Wahai Tuhan pemberi segala kekayaan dan segala nikmat. Tiada tuhan selain Engkau, kekuatan orang-orang yang meminta pertolongan, lindungan orang-orang yang mencari perlindungan, dan tempat aman orang-orang yang takut. Tuhanku, jika Kau mencatatku di sisi-Mu pada Lauh Mahfuzh sebagai orang celaka, sial, atau orang yang sempit rezeki, maka hapuskanlah di Lauh Mahfuzh kecelakaan, kesialan, dan kesempitan rezekiku. Catatlah aku di sisi-Mu sebagai orang yang mujur, murah rezeki, dan taufiq untuk berbuat kebaikan karena Engkau telah berkata–sementara perkataan-Mu adalah benar–di kitabmu yang diturunkan melalui ucapan Rasul utusan-Mu, ‘Allah menghapus dan menetapkan apa yang Ia kehendaki. Di sisi-Nya Lauh Mahfuzh.’ Semoga Allah memberikan shalawat kepada Sayyidina Muhammad SAW dan keluarga beserta para sahabatnya. Segala puji bagi Allah SWT Tuhan semesta alam",
  },
  {
    title: "Doa Awal Bulan Ramadhan",
    arabic:
      "اللّٰهُمَّ سَلِّمْنِيْ لِرَمَضَانَ وَسَلِّمْ رَمَضَانَ لِيْ وَسَلِّمْهُ مِنِّيْ",
    latin:
      "Allâhumma sallimnî li Ramadlâna, wa sallim Ramadlâna lî, wa sallimhu minnî",
    translation:
      "Ya Allah, selamatkanlah aku dari penyakit dan uzur lain demi ibadah Bulan Ramadhan, selamatkanlah penampakan hilal Ramadhan untukku, dan selamatkanlah aku dari maksiat di Bulan Ramadhan",
  },
  {
    title: "Doa untuk Orang Mati (Laki-laki)",
    arabic:
      "اَللّٰهُمَّ إِنَّ (فُلَانَ بْنَ فُلَانٍ) فِيْ ذِمَّتِكَ وَحَبْلِ جِوَارِكَ، فَقِهِ مِنْ فِتْنَةِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ، فَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهُ وَارْحَمْهُ، إِنَّكَ أَنْتَ الْغَفُوْرُ الرَّحِيْمُ",
    latin:
      "Allâhumma inna fulân bin fulân (sesuaikan identitas jenazah) fî dzimmatika wa ḫabli jiwârika fa qihi min fitnatil qabri, wa min ‘adzâbin nâri, fa anta ahlul wafâ’i wal ḫaqqi, faghfir lahu war ḫamhu, innaka antal ghafûrur raḫîm",
    translation:
      "Ya Allah, sungguh fulan bin fulan (sesuaikan identitas jenazah) dalam jaminan-Mu dan tali perlindungan-Mu. Peliharalah dia dan fitnah (cobaan) kubur dan siksa neraka. Engkau Maha Menepati Janji dan Mahabenar. Ampunilah dan belaskasihanilah dia. Sungguh Engkau Dzat Yang Maha Pengampun lagi Maha Penyayang",
  },
  {
    title: "Doa untuk Orang Mati (Perempuan)",
    arabic:
      "اَللّٰهُمَّ إِنَّ (فُلَانَةَ بِنْتَ فُلَانٍ) فِيْ ذِمَّتِكَ وَحَبْلِ جِوَارِكَ، فَقِهَا مِنْ فِتْنَةِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ، فَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهَا وَارْحَمْهَا، إِنَّكَ أَنْتَ الْغَفُوْرُ الرَّحِيْمُ",
    latin:
      "Allâhumma inna fulânah binti fulân (sesuaikan identitas jenazah) fî dzimmatika wa ḫabli jiwârika fa qihâ min fitnatil qabri, wa min ‘adzâbin nâri, fa anta ahlul wafâ’i wal ḫaqqi, faghfir lahâ war ḫamhâ, innaka antal ghafûrur raḫîm",
    translation:
      "Ya Allah, sungguh fulanah binti fulan (sesuaikan identitas jenazah) dalam jaminan-Mu dan tali perlindungan-Mu. Jagalah dia dari fitnah (cobaan) kubur dan siksa neraka. Engkau Maha Menepati Janji dan Mahabenar. Ampunilah dan belaskasihanilah dia. Sungguh Engkau Dzat Yang Maha Pengampun lagi Maha Penyayang",
  },
];

const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");
const doaPopup = document.getElementById("doa-popup");
const closeBtn = document.querySelector(".close-btn");
const popupDoaTitle = document.getElementById("popup-doa-title");
const popupDoaArabic = document.getElementById("popup-doa-arabic");
const popupDoaLatin = document.getElementById("popup-doa-latin");
const popupDoaTranslation = document.getElementById("popup-doa-translation");
const copyDoaBtn = document.getElementById("copyDoaBtn");
const charactersList = document.getElementById("charactersList");

function showDoaPopup(title, arabic, latin, translation) {
  popupDoaTitle.textContent = title;
  popupDoaArabic.textContent = arabic;
  popupDoaLatin.textContent = latin;
  popupDoaTranslation.textContent = translation;
  doaPopup.style.display = "flex";
}

closeBtn.onclick = function () {
  doaPopup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == doaPopup) {
    doaPopup.style.display = "none";
  }
};

if (copyDoaBtn) {
  copyDoaBtn.addEventListener("click", function () {
    const textToCopy =
      popupDoaTitle.textContent +
      "\n\n" +
      popupDoaArabic.textContent +
      "\n\n" +
      popupDoaLatin.textContent +
      "\n\n" +
      popupDoaTranslation.textContent;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Doa berhasil disalin!");
        const originalText = copyDoaBtn.textContent;
        copyDoaBtn.textContent = "Tersalin!";
        setTimeout(() => {
          copyDoaBtn.textContent = originalText;
        }, 2000);
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
        alert("Gagal menyalin doa. Silakan coba lagi.");
      });
  });
}

function populateDoaList(dataArray) {
  myUL.innerHTML = "";
  if (dataArray.length === 0) {
    myUL.innerHTML =
      '<li style="text-align: center; color: #777;">Tidak ada doa yang ditemukan.</li>';
    return;
  }

  dataArray.forEach((doa) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = doa.title;
    a.href = "#";
    a.addEventListener("click", (e) => {
      e.preventDefault();
      showDoaPopup(doa.title, doa.arabic, doa.latin, doa.translation);
    });
    li.appendChild(a);
    myUL.appendChild(li);
  });
}

function myFunction() {
  const searchTerm = myInput.value.toLowerCase();

  const filteredDoa = doaData.filter((doa) => {
    return (
      doa.title.toLowerCase().includes(searchTerm) ||
      doa.arabic.toLowerCase().includes(searchTerm) ||
      doa.latin.toLowerCase().includes(searchTerm) ||
      doa.translation.toLowerCase().includes(searchTerm)
    );
  });

  populateDoaList(filteredDoa);
}

myInput.addEventListener("keyup", myFunction);

document.addEventListener("DOMContentLoaded", () => {
  populateDoaList(doaData);
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
