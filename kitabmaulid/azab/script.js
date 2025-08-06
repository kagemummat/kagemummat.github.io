document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    // Halaman 1
    [
      {
        translation: "Bab 1 : Alhamdulillâhil ladzî Qad Aujadâ ",
      },
      {
        arabic:
          "الْحَمْــــدُ لِلّٰهِ الَّذِيْ قَــدْ أَوْجَــــــدَا مِنْ نُوْرِهِ نُوْرًا بِهِ عَمَّ الْهُدَى",
        latin:
          "Al-ḫamdulillâhil-ladzî qad aujadâ min nûrihi nûran bihi ‘ammal-hudâ",
        translation:
          "Segala puji bagi Allah yang telah menciptakan cahaya dari nur-Nya, yang membuat petunjuk menyebar ke berbagai penjuru.",
      },
      {
        arabic:
          "سَبَقَ الْعَوَالِمَ فِي الوَجُوْدِ بِأَسْرِهَا فَالْكُلُّ مِنْهُ فِي الْحَقَيْقةِ مُبْتَدَا",
        latin:
          "Sabaqal-‘awâlima fil-wujûdi ba'asrihâ fal-kullu minhu fil-ḫaqîqati mubtadâ",
        translation:
          "Nur (cahaya) itu mendahului keberadaan seluruh alam semesta. Sehingga, segala sesuatu sejatinya berasal dari nur itu.",
      },
      {
        arabic:
          "أَعْنِيْ بِذٰلِكَ نُوَرَ مَنْ سَادَ الْوَرَى وَزَكَتْ عَنَاصِرُهُ الشَّرِيْفَةُ مُحْتَدَا",
        latin:
          "A‘nî bidzâlika nûra man sâdal-warâ wa zakat ‘anâ shiruhusy-syarîfatu muḫtadâ",
        translation:
          "Yang aku maksud adalah nur orang yang menjadi pemimpin makhluk, dan telah suci unsur-unsurnya lagi mulia asal-usul nasabnya.",
      },
      {
        arabic:
          "الْمُصْطَفَى خَيْرُ الْخَلَائِقِ مَنْ سَمَا وَعَلَا عَلَى فَلَكِ السِّيَادَةِ سُوْدَدَا",
        latin:
          "Al-mushthafâ khairul-khalâ'iqi man samâ wa ‘alâ ‘ala falakis-siyâdati sûdadâ",
        translation:
          "(Yaitu) al-Musthafa (manusia terpilih) ﷺ adalah makhluk terbaik, yang (derajatnya) membubung tinggi ke angkasa kemuliaan.",
      },
      {
        arabic:
          "صَلَّى عَلَيْـــهِ مُسَلِّمًــــا مَوْلَاهُ مَعْ اٰلٍ لَهُ وَالصَّحْبِ مَا نَجْمٌ بَدَا",
        latin:
          "Shallâ ‘alaihi musalliman maulâhu ma‘âlin lahu wash-shâhbi mâ najmun badâ",
        translation:
          "Semoga Allah melimpahkan rahmat dan keselamatan kepada beliau, serta keluarga dan sahabatnya selama bintang menampakkan gemerlapnya.",
      },
      {
        arabic:
          "هُوَ رَحْمَــةٌ لِلْعَــــالَـمِيْنَ وَنِعْمَــةٌ فَاضَتْ عَلَى كُلِّ الْبَرِيَّةِ بِالنَّدَا",
        latin:
          "Huwa raḫmatun lil-‘âlamîn wa ni‘matun fâdlat ‘alâ kullil-bariyyati bin-nadâ'i",
        translation:
          "Nabi Muhammad ﷺ adalah rahmat dan nikmat untuk alam semesta, yang membanjiri semua makhluk dengan ajakannya.",
      },
      {
        arabic:
          "هٰـذَا وَأَرْجُو اللهَ مِنْ إِفْضَـــالِهِ عَوْنًا عَلَى نَظْمِيْ لِمَوْلِدِ أَحْمَدَا",
        latin:
          "Hâdzâ wa arjullâha min ifdlâlihi ‘aunan ‘alâ nadhmî limaulidi aḫmadâ",
        translation:
          "Aku mengharap karunia Allah berupa pertolongan atas pembuatan syair tentang masa kelahiran Nabi yang terpuji.",
      },
      {
        arabic:
          "كَيْ تُنْعَشَى الْأَرْوَاحُ عِنْدَ سَمَاعِهِ وَتُقَلَّدَ الْأَسْمَاعُ دُرًّا نُضِّدَا",
        latin:
          "Kai tun‘asyal-arwâḫu ‘inda samâ‘ihi wa tuqalladal-asmâ’u durran nudldlidâ",
        translation:
          "Agar menjadi sejuk jiwa-jiwa ketika mendengarnya dan pendengaran-pendengaran itu diikuti susunan mutiara.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 2
    [
      {
        translation: "Bab 2 : I‘lam Bi Annallâha Qaddara Sâbiqan",
      },
      {
        arabic:
          "اِعْلَمْ بِـــــأَنَّ اللهَ قَدَّرَ سَــــابِقًـــــا تَكْوِيْنَهُ هٰذَا الْجَنَابَ الْمُفْرَدَا",
        latin:
          "I‘lam bi annallâha qaddara sâbiqan takwînahu hâdzal-janâbal-mufradâ",
        translation:
          "Ketahuilah bahwa Allah telah menakdirkan di masa lalu untuk menciptakan manusia mulia yang tak ada duanya.",
      },
      {
        arabic:
          "إِذْ قَالَ جَلَّ لِقَبْضَةٍ مِنْ نُوْرِهِ كُوْنِيْ بِقُدْرَتِنَا الْحَبِيْبَ مُحَـمَّدَا",
        latin:
          "Idz qâla jalla liqabdlatin min nûrihi kûnî biqudratinal-ḫabîba muḫammada",
        translation:
          "Ketika itu Allah yang Mahaagung berfirman kepada seberkas nur-Nya: 'Jadilah dengan kekuasaan-Ku, al-Habib (kekasih-Ku) Muhammad!",
      },
      {
        arabic:
          "فَهُوَ الْحَبِيْبُ الْمُجْتَبَى قِدْمًا كَمَــا قَدْ صَحَّ هٰذَا بِالدَّلِيلِ وَأُسْنِدَا",
        latin:
          "Fahuwal-ḫabîbul-mujtabâ qidman kamâ qad shaḫḫa hâdzâ bid-dalîli wa usnidâ",
        translation:
          "Dialah kekasih Allah yang terpilih sejak dahulu, sebagaimana telah dibuktikan dengan dalil yang kuat.",
      },
      {
        arabic:
          "وَعَلَيْهِ فِي الْأَزَلِ النُّبُوَّةِ أُفْرِغَتْ وَلَنَا بِهِ الْمَوْلَى الْمُعَظَّمُ أَسْعَدَا",
        latin:
          "Wa ‘alaihi fil-azalin-nubuwwati ufrighat wa lanâ bihil-maulâl-mu‘adhdhamu as‘adâ",
        translation:
          "Kenabiannya telah dipersiapkan sejak zaman azali (dahulu) —maka dengan Nabi Muhammad ﷺ, Allah yang Mahaagung menjadikan kita berbahagia.",
      },
      {
        arabic:
          "وَبِوَجْهِ آدَمَ لَاحَ هٰـــذَا النُّوْرُ إِذْ خَرَّتْ مَلَآئِكَةُ الْمُهَيْمِنِ سُجَّدَا",
        latin:
          "Wa biwajhi âdama lâḫa hâdzin-nûru idz kharrat malâ'ikatul-muhaimini sujjadâ",
        translation:
          "Nur itu (nur Muhammad) telah terpampang di wajah Nabi Adam ketika malaikat Allah yang Maha Memelihara sujud kepadanya.",
      },
      {
        arabic:
          "وَلِسَائِرِ الْأَصْلَابِ مِنْهُ مُنَقَّــــلٌ حَتَّى اسْتَقَرَّ بِوَالِدَيْهِ وَأُبِّدَا",
        latin:
          "Wa lisâ'iril-ashlâbi minhu munaqqalun ḫattas-taqarra biwâlidaihi wa ubbidâ",
        translation:
          "Nur itu berpindah-pindah dari sulbi ke sulbi sehingga akhirnya menetap abadi di kedua orang tua beliau.",
      },
      {
        arabic:
          "وَحَمَى الْإِلٰهُ مِنَ السِّفَاحِ أُصُوْلَهُ وَعَلَوْا بِهِ شَرَفًا أَثِيْلًا أَمْجَدَا",
        latin:
          "Wa ḫamal-ilâhu minas-sifâḫî ushûlahu wa ‘alau bihi syarafan atsîlan amjadâ",
        translation:
          "Allah telah melindungi asal-usul Nabi Muhammad ﷺ dari perbuatan zina. Bahkan berkat Nabi ﷺ, mereka (leluhur beliau) naik ke derajat paling mulia lantaran keagungan Nabi ﷺ juga status beliau sebagai orang berasal dari keturunan baik.",
      },
      {
        arabic:
          "وَلِوَالِدَيْـــهِ الرَّبُّ قَدْ أَحْيَا كَمَــا قَدْ جَاءَ هٰذَا فِي الْحَدِيْثِ وَأُيِّدَا",
        latin:
          "Wa liwâlidaihir-rabbu qad aḫyâ kamâ qad jâ'a hâdzâ fil-ḫâdîtsi wa uyyidâ",
        translation:
          "Allah telah memberikan kehidupan yang baik kepada kedua orang tua beliau ﷺ, sebagaimana diterangkan dalam hadits dengan sanad yang kuat",
      },
      {
        arabic:
          "قَدْ اٰمَنَّـــا حَقًّــــا بِهِ فَاسْتَوْجَبَــــا كُلَّ النَّجَاةِ وَبِالْجِنَانِ تَخَلَّدَا",
        latin:
          "Qad âmannâ ḫaqqan bihi fastaujabâ kulan-najâti wa bil-jinâni takhalladâ",
        translation:
          "Kami telah beriman kepadanya dengan sebenar-benarnya, maka kedua orang tua beliau memang layak mendapat keselamatan dan kekal tinggal di surga.",
      },
      {
        arabic:
          "فَهُمَا يَقِيْنًا نَاجِيَـــانِ وَمَنْ يَقُــلْ بِخِلَافِنَا ضَلَّ السَّبِيْلَ وَأُبْعِدَا",
        latin:
          "Fahumâ yaqînan nâjiyâni wa man yaqul bikhilâfinâ dhallas-sabîla wa ub‘idâ",
        translation:
          "Kami yakin ayah-bunda Nabi ﷺ akan selamat dan siapa pun yang mengatakan sebaliknya maka ia tersesat dan dijauhkan (dari petunjuk).",
      },
      {
        arabic:
          "وَكَذَا جَمِـــــيْعُ أُصُوْلِهِ مَــــأْوَاهُــمْ دَارَ النَّعِيْمِ كَمَا رَوَاهُ مَنِ اهْتَدَى",
        latin:
          "Wa kadzâ jamî‘u ushûlihi ma'wâhum dâran-na‘îmi kamâ rawâhu manih-tadâ",
        translation:
          "Demikian juga tempat tinggal para leluhur-nasab beliau adalah surga Dârun-Na'îm sesuai dengan riwayat orang-orang yang mendapat petunjuk.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 3
    [
      {
        translation: "Bab 3 : Fahuwan nabiyyu Muhammad",
      },

      {
        arabic:
          "فَهُوَ النَّـــبِيُّ مُحَمَّـدٌ ࣙ بْنُ ذَبِيْحِـهِــمْ مَنْ كَانَ عَبْدَ اللهِ كَهْفًا سَيِّدَا",
        latin:
          "Fahuwan-nabiyyu muḫammadunib-nu dzabîḫihim man kâna ‘abdallâhi kahfan sayyidâ",
        translation:
          "Dialah Nabi Muhammad ﷺ anak keturunan Ismail yang ayahnya adalah Abdullah seorang pemimpin dan tempat berlindung.",
      },
      {
        arabic:
          "وَبِعَبْـــــدِ مُطَّلِبٍ أَبُوْهُ لَقَـدْ دُعِيْ وَهُوَ بْنُ هَاشِمٍ ࣙالْجَوَادِ الْمُقْتَدَى",
        latin:
          "Wa bi‘abdi muthallibin abûhu laqad du‘î wahuwab-nu hâsyiminil-jawâdil-muqtadâ",
        translation:
          "Ayah dari Abdullah (biasa) dipanggil Abdul Muthalib (nama asli: Syaibah) dan ia adalah putra Hasyim yang pemurah dan menjadi panutan.",
      },
      {
        arabic:
          "أَعْنِيْ ابْنَ عَبْدِ مَنَافِهِمْ مَنْ يَنْتَمِيْ لِقُصَيِّ بْنِ كِلَابِهِمْ مُجْلِي الصَّدَا",
        latin:
          "A‘nîb-na ‘abdi manâfihim man yantamî liqushayyib-ni kilâbihim mujlish-shadâ",
        translation:
          "Ia (Hasyim) adalah putra Abdu Manaf yang nasab-nasabnya bersambung kepada Qushay putra Kilab yang bersih dari karatan (kotoran).",
      },
      {
        arabic:
          "وَهُوَ ابْنُ مُـرَّةَ نَجْــــلِ كَعْبِهِمْ الَّذِيْ لِلُؤَيِّهِمْ نُسِبَ بْنُ غَالِبٍ ࣙ الْعِدَى",
        latin:
          "Wa huwab-nu murrata najli ka‘bihimil-ladzî lilu'ayyihim nusibab-nu ghâlibinil-‘idâ",
        translation:
          "Ia (Kilab) adalah putra Murrah, cucu Ka'ab yang bernisbat kepada Lu'ayyi, putra Ghalib yang menang dalam peperangan.",
      },
      {
        arabic:
          "ذَاكَ ابْنُ فِهْـــــــرٍ مَنْ أَبُوْهُ مَـــــالِكٌ قَدْ كَانَ حِصْنًا لِلْأَنَامِ وَمَعْضِدَا",
        latin:
          "Dzâkab-nu fihrin man abûhu mâlikun qad kâna ḫishnan lil-anâmin wa ma‘dlidâ",
        translation:
          "Dia (Ghalib) adalah putra Fihir, ayahnya bernama Malik, benteng perlindungan dan penolong bagi manusia yang membutuhkan pertolongan",
      },
      {
        arabic:
          "السَّيِّدُ ابْنُ النَّضْرِ مُفْـــــرَدُ عَصْرِهِ مَنْ بِالنَّضَارَةِ وَالْجَمَالِ تَفَرَّدَا",
        latin:
          "As-sayyidub-nun-nadlri mufradu ‘ashrihi man bin-nadlârati wal-jamâli tafarradâ",
        translation:
          "Dia (Malik) seorang pemimpin, dan putra dari an-Nadlar yang terkenal karena keelokan dan ketampanannya yang istimewa di zamannya.",
      },
      {
        arabic:
          "ٰذَا هُوَ ابْنُ كِنَانَـةَ بْنُ حُزَيْمَــــةٍ مَنْ بِالْفَخَارِ سَمَا وَفَاقَ الْفَرْقَدَا",
        latin:
          "Hâdzâ huwab-nu kinânatab-nu ḫuzaimatin man bil-fakhâri samâ wa fâqâl-farqadâ",
        translation:
          "Dia (an-Nadlar) adalah putra dari Kinanah, putra dari Khuzaimah yang dengan kebanggaannya melambung tinggi melebihi bintang kutub utara.",
      },
      {
        arabic:
          "هُوَ بْنُ مُدْرِكَةَ بْنُ إِلْيَاسَ الَّذِيْ فِي صُلْبِهِ سُمِعَ النَّبِيُّ مُوَحِّـدَا",
        latin:
          "Huwab-nu mudrikatab-nu ilyâsal-ladzî fî shulbihi sumi‘an-nabiyyu muwaḫḫidâ",
        translation:
          "Dan ia (Khuzaimah) adalah putra dari Mudrikah putra dari Ilyas yang di tulang sulbinya terdengar Nabi sedang mengesakan Allah.",
      },
      {
        arabic:
          "يُعْزَى إِلَى مُضَرٍ هُوَ ابْنُ نِرَارِهِــمْ أَعْنِيْ بِهِ ابْنَ مَعَدِّهِمْ مَنْ أُرْشِدَا",
        latin:
          "Yu‘zâ ilâ mudlarin huwab-nu nizârihim a‘nî bihib-na mu‘addihim man ursyidâ",
        translation:
          "Dan ia (Ilyas) digolongkan keturunan Mudlar, putra Nizar—yaitu putra Ma'ad yang diberi petunjuk",
      },
      {
        arabic:
          "هُوَ ابْنُ عَدْنَانِ الْإِمَامِ الْمُنْتَقَـى مَنْ لِلذَّبِيْحٍ لَهُ انْتِسَابٌ أُكِّدَا",
        latin:
          "Huwab-nu ‘adnânil-imâmil-muntaqâ man lidz-dzabîḫin lahun-tisâbun ukkidâ",
        translation:
          "Dan dia (Ma'ad) adalah putra 'Adnan seorang imam yang dipatuhi, dan ia sendiri dipastikan (kuat) sebagai keturunan Nabi Ismail as.",
      },
      {
        arabic:
          "هٰذَا هُوَ النَّسَبُ الَّذِي اتَّفَقُوْا عَلَيـْ ــــهِ وَمَنْ يَخُضْ مِنْ بَعْدُ خَالَفَ وَاعْتَدَا",
        latin:
          "Hâdzâ huwan-nasabul-ladzît-tafaqû ‘alaihi wa man yakhudl min ba‘du khâlafa wa‘tadâ",
        translation:
          "Inilah silsilah nasab yang disepakati (oleh ahli sejarah). Barang siapa yang berpaling sesudahnya, maka ia telah menentang dan memusuhi.",
      },
      {
        arabic:
          "وَإِلَيْـــــهِ قَدْ كَانَ الْمُشَـفَّعُ يَنْتَـهِيْ وَيُكَذِّبُ النَّسَابَ مَهْمَا عَدَدَا",
        latin:
          "Wa ilaihi qad kânal-musyaffa‘u yantahî wa yukadzdzibun-nasâba mahmâ ‘adadâ",
        translation:
          "Sampai di sinilah nasab Nabi Muhammad ﷺ berakhir, dan siapa saja yang membuat nasab di luar ini, maka berdustalah ia.",
      },
      {
        arabic:
          "وهُو الَّذِيْ فَرْضٌ عَلَيْنَــا حِفْظُهُ وَكَذَاكَ كُلُّ مُكَلَّفٍ قَدْ وَحَّدَا",
        latin:
          "Wa huwal-ladzî fardlun ‘alainâ ḫifdhuhu wa kadzâka kullu mukallafin qad waḫḫadâ",
        translation:
          "Inilah nasab yang wajib kita menghafalnya, dan demikian pula wajib dihafalkan oleh setiap orang yang mukallaf (baligh) dan bertauhid.",
      },
      {
        arabic:
          "أَكْرِمْ بِهِ نَسَبًــــا بِعِقْــدِ نِظَامِــــهِ وَحُلَى مَفَاخِرِهِ الْوْجُوْدُ تَقَلَّدَا",
        latin:
          "Akrim bihi nasaban bi‘iqdi nidhâmihi wa ḫulâ mafâkhirihil-wujûdu taqalladâ",
        translation:
          "Muliakan nasab ini dengan keteraturan urutannya yang dengan nasab tersebut, alam raya telah menyandang hiasan kebanggaannya.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 4
    [
      {
        translation: "Bab 4 : Hâdzâ Walammâ An Arâda Ilâhunâ",
      },
      {
        arabic:
          "هٰـــذَا وَلَـمَّــــا أَنْ أَرَادَ إِلٰـهُنَـــــا إِظْهَارَهُ السِّرَّ الْمَصُوْنَ الْأَسْعَدَا",
        latin:
          "Hâdzâ walammâ an arâda ilâhunâ idhhârahus-sirral-mashûnal-as‘adâ",
        translation:
          "Inilah, ketika Tuhan kita hendak memperlihatkan rahasia-Nya yang terpelihara, yaitu Nabi yang paling berbahagia.",
      },
      {
        arabic:
          "اِخْتَصَّ اٰمِنَـــةَ الرِّضَـــا أُمًّا لَهُ وَلَهَا بِهِ أَمَّ الْـهَنَا وَتَأَبَّدَا",
        latin:
          "Ikhtashsha âminatar-ridlâ umman lahu wa lahâ bihi ammal-hanâ wa ta'abbadâ",
        translation:
          "Dengan ridha-Nya, Allah telah mengkhususkan Sayyidah Aminah sebagai ibu, dan berkat putranya itu ia memperoleh kebahagiaan yang abadi.",
      },
      {
        arabic:
          "حَمَلَتْ بِجَوْهَرِهِ الشَّرِيْفِ وَمَا شَكَتْ ثِقَلًا وَلَا وَهَنًا بِهَا طُوْلَ الْمَدَا",
        latin:
          "ḫamalat bijauharihisy-syarîfi wa mâ syakat tsiqalan wa lâ wahanan bihâ thûlal-madâ",
        translation:
          "Ketika ia mengandung mutiara-Nya yang mulia, Sayyidah Aminah tidak pernah mengeluh tentang rasa berat dan lemah sepanjang waktu.",
      },
      {
        arabic:
          "وَهَوَاتِفُ الرَّحْمٰنِ قَدْ هَتَفَتْ بِهَا وَِبسَآئِرِ الْأَكْوَانِ قَدْ سُمِعَ النِّدَا",
        latin:
          "Wa hawâtifur-raḫmâni qad hatafat bihâ wa bisâ'iril-akwâni qad sumi‘an-nidâ",
        translation:
          "Suara-suara tanpa jenis telah terdengar dari sisi Tuhan yang Maha Pengasih, seruan panggilan pun terdengar di seantero jagat raya.",
      },
      {
        arabic:
          "وَتَقُوْلُ يَا بُشْرَاكِ قَدْ نِلْتِ الْمُنَى وَحَمَلْتِ خَيْرَ الْمُرْسَلِيْنَ الأَمْجَدَا",
        latin:
          "wa taqûlu yâ busyrâki qad niltil-munâ wa ḫamalti khairal-mursalînal-amjadâ",
        translation:
          "Suara-suara tanpa jenis itu berkata: 'Berbahagialah engkau wahai Aminah, sungguh engkau telah meraih cita-cita, dan telah mengandung sebaik-baik utusan Allah yang paling mulia.’",
      },
      {
        arabic:
          "وَبِلَيْلَةِ الْحَمْــلِ الْمُعَظَّمِ فُـتِّحَتْ جَنَّاتُ فِرْدَوْسٍ وَطَابَتْ مَوْرِدَا",
        latin:
          "Wa bilailatil-ḫamlil-mu‘adhdhami futiḫat jannâtu firdausin wa thâbat mauridâ",
        translation:
          "Pada malam dikandungnya Nabi yang diagungkan itu, dibukalah pintu-pintu surga Firdaus yang merupakan sumber segala kebaikan.",
      },
      {
        arabic:
          "وَالْمُلْكُ وَالْمَلَكُوْتُ فِيْهَا عُطِّرَا وَالْأُنْسُ وَافَى وَالسُّرُوْرُ تَجَدَّدَا",
        latin:
          "Wal-mulku wal-malakûtu fîhâ ‘uththirâ wal-unsu wâfâ was-surûru tajaddadâ",
        translation:
          "Di alam semesta dan alam gaib wewangian semerbak, keceriaan kian sempurna, dan kesenangan bertambah-tambah.",
      },
      {
        arabic:
          "وَبِعَامِهَا قَدْ عَمَّ حِصْبٌ فِي الْوَرَى مِنْ بَعْدِ جَدْبٍ لِلْبَرِيَّةِ أَجْهَدَا",
        latin:
          "Wa bi‘âmihâ qad ‘amma ḫishbun fil-warâ min ba‘di jadbin lil-bariyyati ajhadâ",
        translation:
          "Pada tahun (Nabi ﷺ di dalam kandungan), seluruh makhluk dianugerahi kesuburan setelah mereka mengalami kegersangan yang menyusahkan.",
      },
      {
        arabic:
          "وتَبَاشَرَتْ بِالشَّرْقِ وَالْغَرْبِ الْوُحُوْ شُ وَبِالصَّفَا طَيْرُ الْمَسَرَّةِ غَرَّدَا",
        latin:
          "Wa tabâ syarat bisy-syarqi wal-gharbil-wuḫû syu wa bish-shafâ thairul-masarrati gharradâ",
        translation:
          "Binatang-binatang liar baik di timur maupun di barat saling berbagi kabar gembira. Burung-burung pun berkicau ria di bukit Shafa.",
      },
      {
        arabic:
          "وَأُهَيْلُ شِرْكٍ أَصْبَحَتْ أَصْنَامُهَــا مَنْكُوْسَةً وَهَوَانُهَا لَنْ يُجْحَدَا",
        latin:
          "Wa uhailu syirkin ashbaḫat ashnâmuhâ mankûsatan wa hawânuhâ lan yujḫadâ",
        translation:
          "Patung-patung sesembahan orang-orang musyrik telah tertunduk, dan kehinaannya tidak dapat dipungkiri lagi.",
      },
      {
        arabic:
          "وَبِعَــــامِ فَتْحٍ لَقَّبُوْا ذَا الْعَــــامَ إِذْ كَمْ مِنْ فُتُحَاتٍ بِهِ لَنْ تُعْهَدَا",
        latin:
          "Wa bi‘âmi fatḫin laqqabû dzal-‘âma idz kam min futuḫatin bihi lan tu‘hadâ",
        translation:
          "Tahun penaklukan kota Makkah telah diabadikan, sedang penaklukan-penaklukan lainnya tidak begitu dikenal.",
      },
      {
        arabic:
          "وَجَمِيْعُ أَحْبَـارٍ رَوَتْ أَخْبَـــارَهُ وَزَهَا بِهَا وَجْهُ الزَّمَانِ تَوَرُّدَا",
        latin:
          "Wa jamî‘u aḫbârin rawat akhbârahu wa zahâ bihâ wajhuz-zamâni tawarrudâ",
        translation:
          "Seluruh berita gembira memberitakan kabar tentang Nabi ﷺ, yang menjadikan wajah zaman berseri-seri penuh kebanggaan",
      },
      {
        arabic:
          "وَتَقُوْلُ حَانَ ظُهُوْرُ بَدْرِ السَّعْدِ مِنْ أُفُقِ الْعُلَا لِنَرَى الْحَبِيْبَ وَنُسْعَدَا",
        latin:
          "Wa taqûlu ḫâna dhuhûru badris-sa‘di min ufugil-‘ulâ linaral-ḫabîba wa nus‘adâ",
        translation:
          "Saat purnama kebahagiaan itu terpancar dari ufuk yang tinggi, suara-suara itu berkata lagi: 'Marilah kita melihat sang kekasih Allah agar kita berbahagia.’",
      },
      {
        arabic:
          "فِيْ عَامِهِ كُلُّ النِّسَـــآءِ كَرَامَــــةً لِلْمُصْطَفَى حَمَلَتْ ذُكُوْرًا رُشَّدَا",
        latin:
          "Fî ‘âmihi kullun-nisâ'i karâmatan lil-mushthafâ ḫâmalat dzukûran rusysyadâ",
        translation:
          "Pada tahun kelahiran Nabi semua perempuan telah mengandung anak laki-laki yang baik, sebagai kemurahan yang dianugerahkan Allah kepada Al-Musthafa.",
      },
      {
        arabic:
          "وَلَكُمْ بِهِ ظَهَرَتْ عَجَائِبُ جَمَّةٌ عَنْهَا لَقَدْ ضَاقَ النِّطَاقُ تَعَدُّدَا",
        latin:
          "Wa lakum bihi dhaharat ‘ajâ'ibu jammatun ‘anhâ laqad dlâqan-nithâqu ta’addudâ",
        translation:
          "Pada kelahiran Nabi itu, fenomena keajaiban berlimpah jumlahnya, sehingga sulit mengatakannya satu per satu karena saking banyaknya.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 5
    [
      {
        translation: "Bab 5 : Min Hamlihi Lammâ Madlâ ",
      },
      {
        arabic:
          "مِنْ حَمْلِهِ لَمَّا مَضَى شَهْرَانِ قَدْ وَافَى الْمَينُوْنُ أَبَا النَّبِيِّ الأَجْوَدَا",
        latin:
          "Min ḫamlihi lammâ madlâ syahrâni qad wâfal-mainûnu aban-nabiyyil-ajwâdâ",
        translation:
          "Ketika ia (Nabi) baru dikandung selama dua bulan, maut pun menjemput ayahandanya yang paling murah hati itu",
      },
      {
        arabic:
          "وَبِطَيْبَــــةٍ قَدْ كَانَ ذٰلِكَ مُـذْ أَتَى أَخْوَالَهُ مِنْ أَرْضِ شَامٍ مُسْعَدَا",
        latin:
          "Wa bithaibatin qad kânâ dzâlika mudz atâ akhwâ lahu min ardli syâmin mus‘adâ",
        translation:
          "Saat itu ayahandanya baru saja tiba dari Tanah Syam yang menyenangkan itu dan kemudian berkunjung ke rumah paman-pamannya di Thaibah (Madinah).",
      },
      {
        arabic:
          "وَأَقَامَ فِيْهَــــا عِنْدَهُمْ مُتَوَجِّعًـــا شَهْرًا سَقِيْمًا صَابِرًا مُتَجَلِّدَا",
        latin:
          "Wa aqâma fîhâ ‘indahum mutawajji‘an syahran saqîman shâbiran mutajallidâ",
        translation:
          "Ia tinggal di Thaibah bersama mereka dalam kondisi sakit yang ia lalui dengan sabar dan tabah selama satu bulan.",
      },
      {
        arabic:
          "وَضَرِيْحُــــهُ قَدْ أَشْرَقَتْ أَنْوَارُهُ مَنْ زَارَهُ نَالَ الْمُنَى وَالْمَقْصِدَا",
        latin:
          "Wa dharîḫuhu qad asyraqat anwâruhu man zârahu nâlal-munâ wal-maqshidâ",
        translation:
          "Kuburnya memancarkan cahaya, dan barang siapa menziarahinya, ia akan memperoleh apa-apa yang diinginkan.",
      },
      {
        arabic:
          "وَلَدَى تَمَامِ الْحَمْلِ تِسْعَةَ أَشْهُرٍ حَانَتْ وِلَادَةُ مَنْ أَتَانَا مُرْشِدَا",
        latin:
          "Waladâ tamâmil-ḫamli tis‘ata asyhurin ḫânat wilâdatu man atânâ mursyidâ",
        translation:
          "Maka semerbaklah segenap penjuru alam ini dengan keharumannya. Gelombang suka cita pun bertambah lagi.",
      },
      {
        arabic:
          "وَتَأَرَّجَتْ أَرْجَاءُ هٰذَا الْكَوْنِ مِنْ نَفَحَاتِهِ وَبَدَا الْحُبُوْرُ مُجَدَّدَا",
        latin:
          "Wa ta'arrajat arjâ'u hâdzal-kauni min nafaḫâtihi wa badal-ḫubûru mujaddadâ",
        translation:
          "Maka semerbaklah segenap penjuru alam ini dengan keharumannya. Gelombang suka cita pun bertambah lagi.",
      },
      {
        arabic:
          "وَتَنَفَّسَتْ أَنْوَارُ صُبْحِ طُلُوْعِـــهِ حَتَّى غَدَا لَيْلُ الضَّلَالِ مُبَدَّدَا",
        latin:
          "Wa tanaffasat anwâru shubḫi thulû‘ihi ḫattâ ghadâ lailudl-dlalâli mubaddadâ",
        translation:
          "Cahaya subuh telah menyingsing, sehingga kegelapan malam kesesatan pun pudar.",
      },
      {
        arabic:
          "وَلِأُمِّهِ فِي الطَّلْقِ جَآءَتْ مَرْيَمٌ وَكَذَاكَ آسِيَةُ الَّتيْ مُنِحَتْ هُدَى",
        latin:
          "Wa li'ummihi fith-thalqi jâ'at maryamun wa kadzâka âsiyatul-latî muniḫat hudâ",
        translation:
          "Saat sang ibu (Sayyidah Aminah) melahirkan, datanglah kepadanya Siti Maryam (ibu dari Nabi Isa as) dan begitu juga Siti Asiah (istri Fir'aun yang beriman) yang telah dianugerahi petunjuk.",
      },
      {
        arabic:
          "وَأَتَى مِنَ الفِـــرْدَوْسِ حُوْرٌ مَعْهُمَـــا لِيَكُوْنَ تَأْنِيْسًا لَهَا وَتَوَدُّدَا",
        latin:
          "Wa atâ minal-firdausi ḫûrun ma‘humâ liyakûna ta'nîsan lahâ wa tawaddudâ",
        translation:
          "Bersama keduanya datang pula bidadari-bidadari dari surga Firdaus untuk menghibur dan menampilkan kasih sayang.",
      },
      {
        arabic:
          "فَهُنَاكَ قَدْ جَآءَ الْمَخَاضُ فَأَبْرَزَتْ شَمْسَ الْهُدَى خَيْرَ الأَنَامِ الْأَوْحَدَا",
        latin:
          "Fahunâka qad jâ'al-makhâdlu fa'abrazat syamsal-hudâ khairal-anâmil-auḫadâ",
        translation:
          "Pada saat itulah terjadi peristiwa kelahiran. Sayyidah Aminah berhasil melahirkan matahari petunjuk, satu-satunya manusia terbaik.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 6
    [
      {
        translation: "Bab 6 : Wa Lidzikri Maulidihi Yusannu",
      },
      {
        arabic:
          "وَلِذِكْرِ مَوْلِدِهِ يُسَنُّ قِيَامُنَـــا أَدَبًا لَدَى أَهْلِ الْعُلُوْمِ تَأَكَّدَا",
        latin:
          "Wa lidzikri maulidihi yusannu qiyâmunâ adaban ladâ ahlil-‘ulûmi ta'akkadâ",
        translation:
          "Untuk memperingati kelahiran Nabi ﷺ, kita disunnahkan untuk berdiri sebagai adab dan penghormatan kepada beliau. Begitulah para ulama menetapkannya.",
      },
      {
        arabic:
          "وَبِأَكْمَلِ الْأَوْصَافِ جَآءَ نَبِيُّنَا وَبَدَا يُهَلِّلُ سَاجِدًا مُتَعَبِّدَا",
        latin:
          "Wa bi'akmâlil-aushâfi jâ'a nabiyyunâ wa badâ yuhallilu sâjidan muta‘abbidâ",
        translation:
          "Nabi kita datang dengan sifat-sifat sempurna dan ketika baru lahir ia sujud dalam pengabdiannya sambil mengucapkan lâ ilâha illa-Llâh.",
      },
      {
        arabic:
          "إِذْ لَاحَ مَخْتُوْنًا نَظِيْفًـا طَيِّبًـا مَقْطُوْعَ سُرِّ بَلْ كَحِيْلًا أَغْيَدَا",
        latin:
          "Idz lâḫa makhtûnan nadhifan thayyiban maqthû‘a surri bal kaḫîlan aghyadâ",
        translation:
          "Ketika itu, terlihatlah beliau sudah dalam keadaan dikhitan, bersih, harum dan sudah terpotong tali pusarnya, bahkan bercelak pula matanya dengan halusnya.",
      },
      {
        arabic:
          "وَإِلَى السَّمٰوَاتِ الْعَلِيَّةِ رَافِعًــا لِشَرِيْفِ رَأْسٍ مِثْلَ مَا رَفَعَ الْيَدَا",
        latin:
          "Wa ilas-samâwâtil-‘aliyyati râfi‘an lisyarîfi ra'sin mitsla mâ rafa‘al-yadâ",
        translation:
          "Karena kemuliaannya, kepala si bayi ﷺ terangkat mengarah ke langit yang tinggi, sebagaimana pula tangan beliau menunjuk ke sana.",
      },
      {
        arabic:
          "وَلَهُ الْمَلَائِكُ شَمَّتَتْ لِعُطَاسِهِ مِنْ بَعْدِ مَا حَمِدَ الْإِلٰهَ وَمَجَّدَا",
        latin:
          "Wa lahul-malâ'iku syammatat li‘uthâsihi min ba‘di mâ ḫamidal-ilâha wa majjadâ",
        translation:
          "Para malaikat menjawab bersin dengan doa, setelah Nabi ﷺ berhamdalah dan mengagungkan-Nya.",
      },
      {
        arabic:
          "كَمْ مِنْ خَوَارِقَ يَوْمَ مَوْلِدِهِ بِهَــا قَدْ أُسِّسَ الدِّيْنُ الْقَوِيْمُ وَشُيِّدَا",
        latin:
          "Kam min khawâriqa yauma maulidihi bihâ qad ussisad-dînul-qawîmu wa syuyyidâ",
        translation:
          "Pada hari kelahiran Nabi ﷺ, banyak terjadi keajaiban-keajaiban, yang itu semua menjadi dasar berdirinya agama yang tegak lurus dan kokoh.",
      },
      {
        arabic:
          "مِنْ ذٰلِكَ النُّوْرُ الَّذِيْ شَمِلَ الْوَرَى وَازْدَادَ وَادِي الشَّامِ مِنْهُ تَوَقُّدَا",
        latin:
          "Min dzâlikan-nûrul-ladzi syamilal-warâ wazdâda wâdisy-syâmi minhu tawaqqudâ",
        translation:
          "Di antaranya, nur yang meliputi makhluk itu menambah lembah Syam kian gemerlap cahaya.",
      },
      {
        arabic:
          "وَخُمُوْدُ نِـــيْرَانٍ لِفَــــارِسِ ࣙالَّتِيْ مِنْ أَلْفِ عَامٍ أُوْقِدَتْ لَنْ تُخْمَدَا",
        latin:
          "Wa khumûdu nîrânin lifârisinil-latî min alfi ‘âmin ûqidat lan tukhmadâ",
        translation:
          "(Keajaiban lainnnya adalah) padamnya api sesembahan di Persia yang telah menyala sejak 1000 tahun lalu dan (seolah) tidak akan padam.",
      },
      {
        arabic:
          "وَكَذَا السَّمٰوَاتُ الْعُلَى حُفِظَتْ‏ بِهِ مِنْ كُلِّ شَيْطَانٍ رَقَى مُتَمِّرِدَا",
        latin:
          "Wa kadzas-samâwâtul-‘ulâ ḫufidhat bihi min kulli syaithânin raqâ mutammiridâ",
        translation:
          "Berkat Nabi, langit yang tinggi pun dijaga dari setan-setan durhaka yang ingin naik (mencuri-curi pendengaran).",
      },
      {
        arabic:
          "وَسَمَاوَةٌ فَـاضَتْ وَغَـــاضَتْ سَــاوَةٌ وَبَدِيْعُ إِيْوَانٍ لِكِسْرَى بُدِّدَا",
        latin:
          "Wa samâwatun fâdlat wa ghâdlat sâwatun wa badî‘u îwânin likisrâ buddidâ",
        translation:
          "Serambi rumah telah seimbang antara keadaan penuh dan surut, sedang istana Kisra yang indah hancur berantakan.",
      },
      {
        arabic:
          "وَِبمَكَّةٍ قَـدْ كَانَ مَوْلِدُهُ الَّذِي أَحْيَا الْقُلُوْبَ فَحَبَّ هٰذَا مَوْلِدَا",
        latin:
          "Wa bimakkatin qad kâna mauliduhul-ladzî aḫyal-qulûba faḫabba hâdzâ maulidâ",
        translation:
          "Kelahiran beliau di Makkah mampu menghidupkan hati manusia sehingga mereka semua jatuh hati pada momen kelahiran ini.",
      },
      {
        arabic:
          "وَبِثَـــانِ عَشْرٍ مِنْ رَبِيْعٍ أَوَّلٍ فِيْ يَوْمِ الْإِثْنَيْنِ الْمُفَخَّمِ ذِي الْجَدَا",
        latin:
          "Wa bitsâni ‘asyrin min rabî‘i awwalin fî yaumil-itsnainil-mufakhkhami dzil-jadâ",
        translation:
          "(Yaitu) pada 12 Rabi'ul Awal, hari Senin yang diagungkan dan penuh keberkahan.",
      },
      {
        arabic:
          "وِبعَامِ فِيْلٍ صَحَّ ذَاكَ كَمَا أَتَى وَرَوَى الثِّقَاتُ بِهِ الْحَدِيْثَ مُعَضَّدَا",
        latin:
          "Wa bi‘âmi fîlin shaḫḫâ dzâka kamâ atâ wa rawats-tsiqâtu bihil-ḫadîtsa mu‘adldladâ",
        translation:
          "Pada tahun Gajah yang telah disahkan kebenarannya dan sesuai pula dengan hadits kuat yang diriwayatkan oleh orang-orang yang dapat dipercaya.",
      },
      {
        arabic:
          "وِبسَـــابِعِ الْمِيْـــلَادِ أَوْلَمَ جَدُّهُ وَأَجَادَ فِيْهِ فَكَانَ عِيْدًا مَشْهَدَا",
        latin:
          "Wa bisâbi‘il-mîlâdi aulama jadduhu wa ajâda fîhi fakâna ‘îdan masyhadâ",
        translation:
          "Pada hari ke-7 dari kelahirannya, kakek beliau Abdul Muthalib menyelenggarakan pesta dengan meriah, sehingga jadilah pertunjukan hari raya.",
      },
      {
        arabic:
          "وَبِأَشْرَفِ الْأَسْمَـآءِ وَهُوَ مُحَمَّدٌ سَمَّاهُ رَاجِيْ رَبِّهِ أَنْ يُحْمَدَا",
        latin:
          "Wa bi'asyrafil-asmâ'i wa huwa muḫammadun sammâhu râjî rabbihi an yuḫmadâ",
        translation:
          "Kakek beliau memberi nama dengan nama paling mulia, yaitu Muhammad, berharap Allah akan menjadikannya manusia terpuji.",
      },
      {
        arabic:
          "وَلَهُ إِلٰهُ الْخَلْقِ حَقَّقَ مَا رَجَا هُ لِخَيْرِ مَحْمُوْدٍ لَهُ نَفْسِي الْفِدَا",
        latin:
          "Wa lahu ilâhul-khalqi ḫaqqaqa mâ raja hu likhairi maḫmûdin lahu nafsil-fidâ",
        translation:
          "Allah mengabulkan harapan itu menjadi nyata manusia terpuji paling baik itu. 'Jiwaku menjadi tebusan untuknya,” katanya.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 7
    [
      {
        translation: "Bab 7 : Lijanâbihil Ummul Karîmatu",
      },
      {
        arabic:
          "لِجَنَابِهِ الْأُمُّ الْكَرِ يْمَةُ أَرْضَعَتْ سَبْعًا كَمَا رَوَتِ الْأَفَاضِلُ مُسْنَدَا",
        latin:
          "Lijanâbihil-ummul-karîmatu ardla‘at sab‘an kamâ rawatil-afâdlilu musnadâ",
        translation:
          "Sang ibu yang mulia menyusuinya selama 7 hari, sesuai riwayat orang-orang yang memiliki sanad yang jelas",
      },
      {
        arabic:
          "فَثُوَيْبَــةٌ مِنْ بَعْدِهَـــــا فَحَلِيْمَـــةٌ مَنْ قَدَّرَ الْمَوْلَى لَهَا أَنْ تُسْعَدَا",
        latin:
          "Fatsuwaibatun min ba‘dihâ faḫalîmatun man qaddaral-maulâ lahâ an tus‘adâ",
        translation:
          "Kemudian disusui oleh Tsuwaibah, lalu oleh Halimah yang telah ditakdirkan Allah untuk menyusuinya agar ia (Halimah) berbahagia.",
      },
      {
        arabic:
          "نَالَتْ مِنَ اللهِ السَّعَـــادَةَ كُلَّهَــــا وَحَوَتْ بِذَا عَيْشًا خَصِيْبًا أَرْغَدَا",
        latin:
          "Nâlat minallâhis-sa‘âdata kullahâ wa ḫawat bidzâ ‘aisyan khashîban arghadâ",
        translation:
          "Halimah telah mendapatkan semua kebahagiaan dari Allah, termasuk kehidupan yang subur lagi menyenangkan.",
      },
      {
        arabic:
          "مِنْهُ القُوَى قَوِيَتْ لَدَيْهَا وَانْتَشَى بِكَمَالِ وَصْفٍ لَمْ يَزَلْ مُتَجَدِّدَا",
        latin:
          "Minhul-quwâ qawiyat ladaihâ wantasyâ bikamâli washfin lam yazal mutajaddidâ",
        translation:
          "Dari kesuburan itu memperoleh kekuatan sehingga Nabi pun bisa tumbuh dengan kesempurnaan sifat yang terus bertambah.",
      },
      {
        arabic:
          "فَبـِمَهْدِهِ قَمَرُ السَّمَـــا نَاغَى فَيَــــا لِلّٰهِ مَهْدٌ لِلْحَبِيْبِ تَمَهَّدَا",
        latin:
          "Fabimahdihi qamarus-samâ nâghâ fayâ lillâhi mahdun lil-ḫabîbi tamahhadâ",
        translation:
          "Bulan di langit telah bersuka cita mencumbui Nabi di ayunannya. Duhai alangkah indahnya ayunan milik Allah yang terbentang bagi kekasih-Nya (Muhammad).",
      },
      {
        arabic:
          "وَشَبَابُهُ فِي الْيَوْمِ مِثْــلُ سِوَاهُ فِيْ شَهْرٍ لَّهُ الْموَلَى بِذٰلِكَ أَيَّدَا",
        latin:
          "Wa syabâbuhu fil-yaumi mitslu siwâhu fî syahrin lahul-maulâ bidzâlika ayyadâ",
        translation:
          "Kepemudaannya (kedewasaannya) tumbuh dalam sehari, setara sebulan tumbuhnya anak-anak lain. Demikianlah Allah telah memperkuatnya.",
      },
      {
        arabic:
          "وَلِرَابِعِ السَّــنَوَاتِ نَحْوَ مَدِيْنَـــــةٍ أَمَّتْ بِهِ أُمٌّ أَبَاهُ الْجَيِّدَا",
        latin:
          "Wa lirâbi‘is-sanawâti naḫwa madînatin ammat bihi ummun abâhul-jayyidâ",
        translation:
          "Ketika Nabi berusia 4 tahun, ibunya telah membawanya menuju Madinah (menziarahi kubur) ayahnya yang baik itu.",
      },
      {
        arabic:
          "زَارَتْهُ مَعْ أَخْوَالِهِ وَبِعَوْدِهَــــا طَابَتْ بِأَبْوَا أَوْ حَجُوْنٍ مَرْقَدَا",
        latin:
          "Zârathu ma‘ akhwâlihi wa bi‘audihâ thâbat bi abwâ au ḫajûnin marqadâ",
        translation:
          "Ibunya telah menziarahi ayahnya bersama paman-pamannya, dan ketika kembali, sang ibu memilih kota Abwa atau Ḫajûn sebagai tempat tidurnya (beliau wafat di sana).",
      },
      {
        arabic:
          "فَأَنَالَهَا الْمَوْلَى الْكَرَامَةَ وَالرِّضَا فِيْ دَارِ عَدْنٍ عَيْشُهَا لَنْ يَنْفَدَا",
        latin:
          "Fa anâ lahal-maulal-karâmata war-ridlâ fî dâri ‘adnin ‘aisyuhâ lan yanfadâ",
        translation:
          "Kemudian Allah ﷻ menganugerahinya kemuliaan dan keridhaan, yaitu kehidupan di surga 'Adn yang tidak akan sirna.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 8
    [
      {
        translation: "Bab 8 : Tsummal Msyaffa‘u Lam Yazal ",
      },
      {
        arabic:
          "ثُـــــمَّ الْمُشَفَّعُ لَمْ يَزَلْ مُتَرَقِّيًــــا رُتَبًا بِحُسْنِ كَمَالِهَا قَدْ أُفْرِدَا",
        latin:
          "Tsummal-musyaffa‘u lam yazal mutaraqqiyan rutaban biḫusni kamâlihâ qad ufridâ",
        translation:
          "Kemudian Al-Musyaffa‘ (Nabi yang diharapkan syafaatnya) itu terus meningkat kedudukannya dengan keindahan kesempurnaannya yang tersendiri.",
      },
      {
        arabic:
          "حَتَّى لَهُ الرَّحْمٰنُ أَرْسَلَ رَحْمَـةً طُوْبَى لِمَنْ بِقَوِيْمِ مِلَّتِهِ اقْتَدَى",
        latin:
          "ḫattâ lahur-raḫmânu arsala raḫmatan thûbâ liman biqawîmi millatihiq-tadâ",
        translation:
          "Sehingga Allah yang Maha Pengasih mengutusnya sebagai rahmat (bagi sekalian alam). Berbahagialah orang yang menganut agamanya yang lurus.",
      },
      {
        arabic:
          "وَبـِجِسْمِهِ وَالرُّوْحِ أَسْرَى يَقْظَةً وَلَكُمْ عَجَائِبَ قَدْ أَرَاهُ وَأَشْهَدَا",
        latin:
          "Wa bijismihi war-rûḫi asrâ yaqdhatan wa lakum ‘ajâ’iba qad arâhu wa asyhadâ",
        translation:
          "Dalam keadaan terjaga Nabi Muhammad ﷺ telah diperjalankan di waktu malam dengan ruh dan jasadnya dan banyaklah keajaiban-keajaiban (tanda-tanda kebesaran Allah) yang telah Allah perlihatkan kepadanya.",
      },
      {
        arabic:
          "رَكِبَ الْبُرَاقَ وَسَـــارَ تَحْتَ رِكَابِهِ جِبْرِيْلُ يَمْشِيْ كَيْ يَنَالَ السُّوْدَدَا",
        latin:
          "Rakibal-burâqa wa sâra taḫta rikâbihi jibrîlu yamsyî kai yanâlas-sûdadâ",
        translation:
          "Nabi ﷺ telah mengendarai Buraq sementara Jibril berjalan di bawah kendaraannya dengan tujuan agar mendapatkan kemuliaan.",
      },
      {
        arabic:
          "إِذْ أَمَّ قُدْسًـــا فِيْــــهِ أَمَّ الْأنْبِيَـــــا وَرَقَى لِمِعْرَاجِ السُّرُوْرِ لِيَصْعَدَا",
        latin:
          "Idz ’amma qudsan fîhi ammal-anbiyâ wa raqâ limi‘râjis-surûri liyash‘adâ",
        translation:
          "Beliau menuju Baitul Maqdis, dan di dalamnya beliau mengimami shalat bersama para nabi. Kemudian beliau melakukan Mi'raj yaitu naik ke langit dengan rasa gembira.",
      },
      {
        arabic:
          "وَيُرِيْهِ مِنْ اٰيَــــاتِهِ الْكُبْرَى وَمِنْ فَرْضِ الصَّلَاةِ الْخَمْسِ يَبْلُغُ مَقْصِدَا",
        latin:
          "Wa yurîhi min âyâtihil-kubrâ wa min fardlish-shalâtil-khamsi yablughu maqshidâ",
        translation:
          "Lalu Allah ﷻ memperlihatkan kepada Nabi tanda-tanda kebesaran-Nya, dan (mewajibkan) shalat lima waktu. Dengan demikian, telah tercapailah tujuan Mi'raj itu.",
      },
      {
        arabic:
          "وَلِقَابِ قَوْسَيْنِ الْحَبِيِبُ لَقَدْ دَنَا حَتَّى رَأَى مَوْلًى عَلَا وَتَمَجَّدَا",
        latin:
          "Wa liqâbi qausainil-ḫabîbu laqad danâ ḫattâ ra’â maulan ‘alâ wa tamajjadâ",
        translation:
          "Dalam jarak sangat dekat, sang kekasih ﷺ mendekat sehingga menyaksikan kemahatinggian dan kemahaagungan Allah.",
      },
      {
        arabic:
          "وَبِعَــــيْنِ رَأْسٍ كَانَ ذَاكَ وَقَلْبِـــــهِ فَاحْفَظْ لِهٰذَا حَيْثُ صَحَّ وَسَدِّدَا",
        latin:
          "Wa bi‘aini ra’sin kâna dzâka wa qalbihi faḫfadh lihâdzâ ḫaitsu shaḫḫa wa saddidâ",
        translation:
          "Semua itu terjadi dengan matakepala dan hatinya dan berhati-hatilah atas hal yang telah sah dan dibenarkan (jangan terjebak pada penyerupaan Allah dengan makhluk, karena sifat Allah tidak menyerupai suatu apa pun [Laisa kamitslihi sya'un]).",
      },
      {
        arabic:
          "وَلَهُ لَقَدْ قَــــالَ الْعَليُّ مُلَاطِفَـــــا سَلْنِيْ لِتُعْطَى مَا سَأَلْتَ وَأَزْيَدَا",
        latin:
          "Wa lahu laqad qâlal-‘aliyyu mulâthifâ salnî litu‘thâ mâ sa’alat wa azyadâ",
        translation:
          "Allah yang Mahatinggi berfirman kepada Nabi dengan lemah lembut: 'Mintalah kepada-Ku, niscaya Aku beri semua yang engkau minta dan Aku akan melebihkannya.’",
      },
      {
        arabic:
          "عَنْهُ الْأَمِيْنُ لَقَدْ تَأَخَّـــرَ هَيْبَةً لَمَّا بِهِ فِي النُّوْرِ زُجَّ لِيَشْهَدَا",
        latin:
          "‘anhul-amînu laqad ta’akhkhara haibatan lammâ bihi fin-nûri zujja liyasyhadâ",
        translation:
          "Al-Amin (gelar Nabi Muhammad ﷺ) mundur dari-Nya karena pengaruh wibawa-Nya, ketika beliau tenggelam dalam Cahaya untuk menyaksikan-Nya",
      },
      {
        arabic:
          "إِذْ قَالَ لَوْ قُدِّمْتُ أَحْرَقَنِي السَّنَا فَمَقَامُهُ بِالرُّوْحِ حَقًّا يُفْتَدَى",
        latin:
          "Idz qâla lau quddimtu aḫraqanîs-sanâ famaqâmuhu bir-rûḫi ḫaqqan yuftadâ",
        translation:
          "Ketika itu beliau bersabda, 'Seandainya aku maju, niscaya aku akan terbakar oleh sinar itu.’ Sehingga posisi beliau pada saat itu betul-betul ditebus dengan ruh.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 9
    [
      {
        translation: "Bab 9 : Wa Lidâri Hijratihi Da‘âhu Rabbuhu",
      },
      {
        arabic:
          "وَلِدَارِ هِجْرَتِهِ دَعَــاهُ رَبُّـــهُ فَأَجَابَ دَعْوَتَهُ وَسَارَ مُؤَيَّدَا",
        latin:
          "Wa lidâri hijratihi da‘âhu rabbuhu fa’ajâba da‘watahu wa sâra mu’ayyadâ",
        translation:
          "Tuhan telah memanggil Nabi Muhammad ﷺ untuk berhijrah ke negerinya (Madinah). Beliau pun memenuhi panggilan itu dan berjalanlah dengan penuh kemantapan.",
      },
      {
        arabic:
          "وَوَقَاهُ مَوْلَاهُ بِعَيْنِ عِنَايَةٍ فَأَسَرَّ أَحْبَابًا وَأَكْمَدَ حُسَّدَا",
        latin:
          "Wa waqâhu maulâhu bi‘aini ‘inâyatin fa asarra aḫbâbân wa akmada ḫussadâ",
        translation:
          "Allah memelihara Nabi Muhammad ﷺ dalam pantauan pertolongan-Nya. Nabi pun menggembirakan para sahabatnya dan telah mengecewakan orang-orang yang dengki kepadanya.",
      },
      {
        arabic:
          "سُرَّتْ بِهِ الْأَنْصَارُ عِنْدَ قُدُوْمِهِ وَأَبَادَ كُلَّ مُعَانِدٍ قَدْ أَلْحَدَا",
        latin:
          "Surrat bihil-anshâru ‘inda qudûmihi wa abâda kulla mu‘ânidin qad alḫadâ",
        translation:
          "Orang-orang Anshar (Muslimin Madinah) bergembira dengan kedatangan Nabi dan hancurlah orang-orang yang menentangnya.",
      },
      {
        arabic:
          "وَأَقَامَ فِيْهَــا الْحَقَّ حَقَّ قِيَــــامِهِ وَبِسَيْفِ فَتْحٍ وَانْتِصَارٍ قُلِّدَا",
        latin:
          "Wa aqâma fîhal-ḫaqqa ḫaqqa qiyâmihi wa bisaifi fatḫin wantishârin qullidâ",
        translation:
          "Di Madina Nabi menegakkan kebenaran secara benar, yang diikuti dengan pedang pembebasan dan pembelaan",
      },
      {
        arabic:
          "وَفَشَا بِهَا الْإِسْلَامُ بَعْدَ خَفَآئِهِ وَعَلَى تُقَى مَوْلَاهُ أَسَّسَ مَسْجِدَا",
        latin:
          "Wa fasyâ bihal-islâmu ba‘da khafâ’ihi wa ‘alâ tuqâ maulâhu assasa masjidâ",
        translation:
          "Islam pun tersebar luas, setelah lama tersembunyi, dan di atas fondasi takwa kepada Allah beliau ﷺ membangun masjid (di Quba dengan nama Masjid Quba).",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 10
    [
      {
        translation: "Bab 10 : Qad Kâna Thahal Mushthafâ ",
      },
      {
        arabic:
          "قَدْ كَانَ طَهَ الْمُصْطَفَى خَيْرَ الْوَرَى خَلْقًا وَخُلُقًا مِثْلُهُ لَنْ يُوْجَدَا",
        latin:
          "Qad kâna thahal-mushthafâ khairal-warâ khalqan wa khuluqan mitsluhu lan yûjadâ",
        translation:
          "Thaha, sang nabi pilihan, sungguh merupakan makhluk terbaik, baik secara perawakan maupun akhlaknya. Tak bakal ditemukan seorang pun yang sama dengannya.",
      },
      {
        arabic:
          "مُبَيَّضَ لَوْنٍ قَدْ تَشَرَّبَ حُمْرَةً ذَا قَامَةٍ مَرْبُوْعَةٍ سُقِيَتْ نَدَا",
        latin:
          "Mubayyadla launin qad tasyarraba ḫumratan dzâ qâmatin marbû‘atin suqiyat nadâ",
        translation:
          "Beliau berkulit putih kemerah-merahan, berperawakan sedang dan sesejuk embun.",
      },
      {
        arabic:
          "سَهْلاً لِخَدٍّ كَثَّ لِحْيَتِهِ الَّتِيْ قَدْ شُرِّفَتْ وَعَظِيْمَ رَأْسٍ مُجِّدَا",
        latin:
          "Sahlan likhaddin katstsa liḫyatihil-latî qad syurrifat wa ‘adhîma ra’sin mujjidâ",
        translation:
          "Pipinya mendatar, janggutnya yang tebal, menampilkan kewibawaan, dan kepalanya agak besar menunjukkan keagungan beliau ﷺ.",
      },
      {
        arabic:
          "أَقْنَى لِعِرْنِيْنٍ أَغَرَّ وَوَاسِعًــــا فَمُهُ حَوَى دُرًّا وَحُسْنًا أَوْحَدَا",
        latin:
          "Aqnâ li’irnînin agharra wa wâsi‘a n famuhu ḫawâ durran wa ḫusnan au ḫadâ",
        translation:
          "Beliau berhidung mancung mempesona, mulutnya bagus agak lebar berisi gigi bak mutiara yang keindahannya tak ada bandingannya.",
      },
      {
        arabic:
          "وَكَحِيْلَ طَرْفٍ كَانَ سَيِّدُنَا كَذَا ذَا جَبْهَةٍ فَاقَتْ هِلَالًا أَرْشَدَا",
        latin:
          "Wa kaḫîla tharfin kâna sayyidunâ kadzâ dzâ jabhatin fâqat hilâlan arsyadâ",
        translation:
          "Mata junjungan kita ini bercelak, dan begitu pula dahinya melebihi (keindahan) bulan sabit yang memberi petunjuk.",
      },
      {
        arabic:
          "وَحَوَى حَوَاجِبَ زُجِّـجَتْ وَتَفَلَّجَتْ أَسْنَانُهُ مُحْمَرَّ خَدٍّ أَوْرَدَا",
        latin:
          "Wa ḫawâ ḫawâjiba zujjijat wa tafallajat asnânuhu muḫmarra khaddin au radâ",
        translation:
          "Beliau memiliki alis yang panjang lagi halus, giginya tersusun rapi, dan pipinya kemerah-merahan indah berseri.",
      },
      {
        arabic:
          "وَإِذَا مَشَىى مُتَكَفِّئًا فَكَأَنَّمَا يَنْحَطُّ مِنْ صَبَبٍ عَلَا مُسْتَرْشِدَا",
        latin:
          "Wa idzâ masyâ mutakaffi’an faka’annamâ yanḫaththu min shababin ‘alâ mustarsyidâ",
        translation:
          "Bila berjalan, beliau menunduk bagaikan sedang menuruni jalan yang menurun dari ketinggian sebagai orang yang telah memperoleh petunjuk.",
      },
      {
        arabic:
          "مِنْ حُسْنِ طَلْعَةِ وَجْهِهِ الشَّمْسُ اكْتَسَتْ وَبِنُوْرِ ضَوْءِ جَبِيْنِهِ الْبَدْرُ ارْتَدَى",
        latin:
          "Min ḫusni thal‘ati wajhihisy-syamsuk-tasat wa binûri dlau’i jabînihil-badrur-tadâ",
        translation:
          "Roman keindahan wajah Nabi menutupi matahari, dan pancaran cahaya dahi beliau menyelubungi bulan purnama.",
      },
      {
        arabic:
          "وَيَفُوْحُ مِنْهُ شَذًى يَفُوْقُ بِطِيْبِهِ مِسْكًا ذَكِيًّا مُسْتَطَابًا أَجْوَدَا",
        latin:
          "Wa yafûkhu minhu syadzan yafûqu bithîbihi miskan dzakiyyan mustathâban ajwadâ",
        translation:
          "Dari diri Nabi ﷺ, tersebar semerbak harumnya minyak wangi yang melebihi minyak misik terbaik.",
      },
      {
        arabic:
          "وَيُعَظِّمُ الشُّرَفَاءَ وَالْفُضَـلَاءَ وَلَمْ يَحْقِرْ فَقِــــيْرًا بَلْ نَدَاهُ تَعَوَّدَا",
        latin:
          "Wa yu‘adhdhimusy-syurafâ’a wal-fudlâla’a wa lam yaḫqir faqîran bal nadâhu ta‘awwadâ",
        translation:
          "Beliau menghormati para pembesar yang mulia, tapi juga tidak menyepelekan orang-orang fakir, bahkan beliau biasa mengundang mereka.",
      },
      {
        arabic:
          "وَلِأَهْــلِهِ ذَا خِدْمَـــةٍ مُتَوَاضِعًـــا لِلّٰهِ فِيْ دَارِ الْفَنَاءِ زَاهِدًا",
        latin:
          "Wa li’ahlihi dzâ khidmatin mutawâdli‘an lillâhi fî dâril-fanâ’i zâhidan",
        translation:
          "Sehari-hari, beliau membantu keluarganya, dan sangat rendah hati di hadapan Allah. Dalam mengarungi dunia yang fana ini, beliau senantiasa hidup bersahaja (zuhud).",
      },
      {
        arabic:
          "وَالثَّوْبَ يَرْقَعُ بَلْ وَيَخْصِفُ نَعْلَهُ وَالْعُذْرَ يَقْبَلُهُ وَ يَصْفَحُ عَنْ عِدَا",
        latin:
          "Wats-tsauba yarqa‘u bal wa yakhshifu na‘lahu wal-‘udzra yaqbaluhu wa yashfaḫu ‘an ‘idâ",
        translation:
          "Beliau biasa menambal bajunya dan menjahit sandalnya sendiri, dan selalu menerima permintaan maaf dari orang-orang yang memusuhinya.",
      },
      {
        arabic:
          "لِلّٰهِ يَرْضَى ثُمَّ يَغْضَبُ إِنْ فَشَتْ حُرُمَاتُهُ إِذْ فِيْ عَوَاقِبِهَا الرَّدَا",
        latin:
          "Lillâhi yardlâ tsumma yaghdlâbu in fasyat ḫurumâtuhu idz fî ‘awâqibihar-radâ",
        translation:
          "Beliau ridha karena Allah dan murka karena Allah bila perkara-perkara haram marak walaupun akibatnya adalah kematian bagi beliau.",
      },
      {
        arabic:
          "وَتَهَــــابُـهُ كُلُّ الْمُلُوكِ جَــــلَالَةً وَلِمَنْ يُلَاقِيْ بِالسَّلَامِ قَدِ ابْتَدَا",
        latin:
          "Wa tahâbuhu kullul-muluki jalâlatan wa liman yulâqî bis-salâmi qadib-tadâ",
        translation:
          "Para raja merasa segan karena wibawa dan kebesaran Nabi. Kepada orang-orang yang dijumpainya, Nabi selalu memulai mengucapkan salam.",
      },
      {
        arabic:
          "وَيُمَازِحُ الْأَصْحَابَ حَقَّ مِزَاحِهِ وَلَهُمْ بِنُصْحٍ لَا يَزَالُ مُسَدِّدَا",
        latin:
          "Wa yumâziḫul-ashḫâba ḫaqqa mizâḫihi wa lahum binushḫin lâ yazâlu musaddidâ",
        translation:
          "Beliau juga biasa bercanda dengan sahabat-sahabatnya sebatas kepantasan, dan selalu memberi nasihat dan petunjuk kepada mereka.",
      },
      {
        arabic:
          "كَمْ مِنْ خَصَائِصَ لَيْسَ يُحْصَرُ جَمْعُهَا وَبِهَا خِتَامُ الرُّسْلِ أَضْحَى مُفْرَدَا",
        latin:
          "Kam min khashâ’isha laisa yuḫsharu jam‘uhâ ۞ wa bihâ khitâmur-rusli adlḫâ mufradâ",
        translation:
          "Masih banyak kekhususan-kekhususan beliau—tidak terbatas pada sejumlah keistimewaan yang disebut di atas. Dengan kekhususan itu, beliau menjadi penutup para rasul yang tiada duanya.",
      },
      {
        arabic:
          "يَا رَبِّ عَطِّرْ بِالصَّلَاةِ ضَرِيْحَهُ وَأَدِمْ عَلَيْهِ سَلَامَ ذَاتِكَ سَرْمَدَا",
        latin:
          "Yaa Rabbi 'attir bish-shalaati dhariiha-hu, wa adim 'alaihi salaama dzaatika sarmadaa",
        translation:
          "Wahai Tuhanku, harumkanlah kuburnya dengan shalawat, dan limpahkanlah padanya keselamatan dari Dzat-Mu selama-lamanya.",
      },
    ],

    //Halaman 11
    [
      {
        translation: "Bab 11 : Doa Maulid Al Azab",
      },
      {
        arabic:
          "وَإِلَى هُنَا قَدْ تَمَّ مَا رُمْنَاهُ مِنْ نَظْمٍ بِمَوْلِدِهِ زَهَا مُتَفَرِّدَا",
        latin:
          "Wa ilâ hunâ qad tamma mâ rumnâ hu min nadhmin bimaulidihi zahâ mutafarridâ",
        translation:
          "Sampai di sini selesailah apa-apa yang kami inginkan dari penyusunan nadham mengenai kelahiran Nabi yang membanggakan dan tak ada duanya.",
      },
      {
        arabic:
          "فَلْنَسْأَلِ الْمَوْلَى الْمُقَدَّسَ وَلْنَقُلْ يَا مَنْ إِلَيْهِ الْمُنْتَهَى وَالْمُبْتَدَا",
        latin:
          "Falnas`alil-maulal-muqaddasa walnaqul yâ man ilaihil-muntahâ wal-mubtadâ",
        translation:
          "Hendaklah kita memanjatkan doa ke hadirat Allah yang Mahasuci dengan ucapan: 'Wahai Dzat yang menjadi tempat bermuara dan bermula segala sesuatu.",
      },
      {
        arabic:
          "نَدْعُوْكَ يَا غَوْثَ الْعِبَادِ بِجَاهِهِ كُنْ فِي الْخُطُوْبِ لَنَا مُعِيْنًا مُنْجِدَا",
        latin:
          "Nad‘ûka yâ ghautsal-‘ibâdi bijâhihi kun fil-khuthûbi lanâ mu‘înan munjidâ",
        translation:
          "Kami berdoa ke hadirat-Mu, wahai penyelamat para hamba. Dengan kedudukan mulia Nabi ﷺ, kami mohon Engkau menjadi penolong serta penyelamat manakala kami mendapatkan masalah",
      },
      {
        arabic:
          "وَعَلَى عَوَائِدِكَ الْحِسَانِ فَأَجِرْنَا فَالْكُلُّ أَضْحَى بِالْجَمِيْلِ مُعَوَّدَا",
        latin:
          "Wa ‘alâ ‘awâ'idikal-ḫisâni fa ajirnâ fal-kullu adlḫâ bil-jamîli mu‘awwadâ",
        translation:
          "Kami memohon pahala atas imbalan (amal baik) kami, karena memang normalnya setiap orang ingin mendapatkan balasan yang baik.",
      },
      {
        arabic:
          "وَبِمَـــا نُؤَمِّلُ يَا كَرِيْمُ فَجُدْ لَنَــــا فَضْلاً وَكُنْ بِالْجُوْدِ مِنْكَ مُزَوِّدَا",
        latin:
          "Wa bimâ nu'ammilu yâ karîmu fajud lanâ fadllan wa kun bil-jûdi minka muzawwidâ",
        translation:
          "Ya Allah yang Maha Pemurah, anugerahilah kami apa-apa yang kami inginkan, sebagai karunia-Mu yang akan menjadi bekal bagi kami",
      },
      {
        arabic:
          "وَامْنُنْ بِصَرْفِ النَّفْسِ عَنْ شَهَوَاتِهَا وَافْكُكْ فُؤَادًا فِيْ هَوَاهُ تَقَيَّدَا",
        latin:
          "Wamnun bisharfin-nafsi ‘an syahawâtihâ wafkuk fu'âdan fî hawâhu taqayyadâ",
        translation:
          "Dan anugerahilah kami petunjuk-Mu, agar jiwa kami terpalingkan dari nafsu syahwatnya, dan lepaskanlah hati kami dari jeratan hawa nafsu.",
      },
      {
        arabic:
          "وَمِنَ الْجَرَائِمِ تُبْ عَلَيْنَا وَاهْدِنَا وَاغْفِرْ لِكُلٍّ مَا جَنَى وتَعَمَّدَا",
        latin:
          "Wa minal-jarâ'imi tub ‘alianâ wahdinâ waghfir likullin mâ janâ wa ta‘ammadâ",
        translation:
          "Ya Allah, ampunilah kami dari segala dosa dan berilah kami petunjuk, serta berilah pula ampunan kepada setiap orang yang berbuat dosa dengan sengaja.",
      },
      {
        arabic:
          "وَامْنُنْ بِعَافِيَةٍ لِمَرْضَــــانَا وَجُدْ بِاللُّطْفِ يَا مَنْ بِمَكَارِمِ عَوَّدَا",
        latin:
          "Wamnun bi‘âfiyatin limardlânâ wa jud bil-luthfi yâ man bimakârimi ‘awwadâ",
        translation:
          "Anugerahilah kesembuhan bagi kami yang sakit dan limpahkanlah kasih sayang-Mu wahai Tuhan yang Maha Pemurah.",
      },
      {
        arabic:
          "وَبِحِلْيَــةِ الْإيْمَـــانِ حَلِّ قُلُوْبَنَــــا وَلَهَا بِأَنْوَارِ الْمَعَارِفِ أَسْعِدَا",
        latin:
          "Wa biḫilyatil-îmâni ḫalli qulûbanâ wa lahâ bi'anwâril-ma‘ârifi as‘idâ",
        translation:
          "Hiasilah hati kami dengan perhiasan iman, dan anugerahilah hati kami kebahagiaan dengan cahaya makrifat.",
      },
      {
        arabic:
          "وَإِلَى سِوَاكَ فَلَا تَكِلْنَا وَاسْقِنَــا غَوْثًا مُغِيْثًا لِلْبَرِيَّةِ جَيِّدَا",
        latin:
          "Wa ilâ siwâka falâ takilnâ wasqinâ ghautsan mughîtsan lil-bariyyati jayyidâ",
        translation:
          "Jangan palingkan kami kepada hal selain Engkau. Guyurlah kami dengan hujan yang akan menyelamatkan makhluk dengan sebaik-baiknya.",
      },
      {
        arabic:
          "وَاحْرُسْ حِمَى طَهَ وَأَجْزِلْ خَيْرَهُ وَاخْذُلْ لِمَنْ قَدْ رَامَ سُوْءًا أَوْ رَدَى",
        latin:
          "Waḫrus ḫimâ thaha wa'ajzil khairahu wakhdzul liman qad râma sû'an au radâ",
        translation:
          "Ya Allah, limpahkanlah perlindungan atas Thaha (Muhammad ﷺ) dan perbanyaklah kebaikannya, dan hinakanlah orang yang berbuat jahat kepadanya.",
      },
      {
        arabic:
          "وَكَذَا بِلَادَ الْمُسْلِمِيْنَ احْفَظْ لَهَا جَمْعًا وَبِالفَرَجِ الْقَرِيْبِ تَعَهَّدَا",
        latin:
          "Wa kadzâ bilâdal-muslimînaḫ-fadh lahâ jam‘an wa bil-farajil-qarîbi ta‘ahhadâ",
        translation:
          "Demikian pula kami mohon perlindungan-Mu atas seluruh negara kaum Muslimin, dan karuniakan kelapangan kepada mereka dalam waktu yang dekat sebagaimana Engkau janjikan kepada mereka.",
      },
      {
        arabic:
          "وَانْظُــــرْ إِلَى سُلْطَانِنَـــا بِعِنَايَــــةٍ وَانْصُرْ بِهِ الشَّرْعَ الْحَنِيْفَ وَمَهِّدَا",
        latin:
          "Wandhur ilâ sulthâninâ bi‘inâyatin wanshur bihisy-syar‘al-ḫanîfa wa mahhidâ",
        translation:
          "Ya Allah, pandanglah pemimpin negara kami dengan inayah-Mu, dan melalui pemimpin tersebut syariat yang lurus terlindungi dengan pembenahan yang baik.",
      },
      {
        arabic:
          "وَلِدِيْنِنَــــا ثَبِّتْ وَقَوِّ يَقِيْنَنَــــا كَيْمَا يَقِيْنًا مَا نُحَاذِرُهُ غَدَا",
        latin:
          "Wa lidîninâ tsabbit wa qawwi yaqînanâ kaimâ yaqînan mâ nuḫâdziruhu ghadâ",
        translation:
          "Kuatkan dan mantapkanlah keyakinan atas agama kami (Islam) dengan suatu keyakinan yang kami sendiri menghindari perubahannya di hari esok.",
      },
      {
        arabic:
          "وَنَفُوْزَ مِنْ خَيْرِ الْوَرَى بِشَفَاعَةٍ وَنَحُوْزَ فِيْ جَنَّاتِ عَدْنٍ مَقْعَدَ",
        latin:
          "Wa nafûza min khairil-warâ bisyafa‘atin wa naḫuza fî jannâti ‘adnin maq‘ada",
        translation:
          "Kami mohon kiranya akan memperoleh keberuntungan dengan syafaat makhluk terbaik (Nabi Muhammad ﷺ), serta memperoleh tempat di surga 'Adn.",
      },
      {
        arabic:
          "وَلِعَبْدِكَ الْعَــــزَبِ الْفَقِــيْرِ مُحَمَّدٍ مُنْشِيْهِ فِيْ دَارِ الْكَرَامَةِ خَلِّدَ",
        latin:
          "Wa li‘abdikal-‘azabil-faqîri muḫammadin munsyîhi fî dâril-karâmati khallidâ",
        translation:
          "Dan juga bagi hamba-Mu yang fakit, Muhammad Al-'Azab (penyusun Maulid al-Azab ini), kiranya mendapatkan tempat di negeri penuh kemuliaan (surga) yang abadi.",
      },
      {
        arabic:
          "وَأَدِمْ لَهُ حُسْنَ الْجِوَارِ بِطَيْبَـــةٍ وَارْزُقْهُ سِرًّا عَنْ سِوَاكَ مُجَرَّدَا",
        latin:
          "Wa adim lahu ḫusnal-jiwâri bithaibatin warzuqhu sirran ‘an siwâka mujarradâ",
        translation:
          "Ya Allah, tetapkanlah ia sebagai tetangga yang baik di Thaibah (Madinah), dan berilah ia rahasia yang terlepas dari selain Engkau.",
      },
      {
        arabic:
          "وَلِوَالِدَيْــــهِ اغْفِـــــرْ كَذَا ذُرِّيَّـــةٍ وَامْنَحْهُمُ السِّتْرَ الْجَمِيْلَ مُؤَبَّدَا",
        latin:
          "Wa liwâlidaihigh-fir kadzâ dzurriyatin mamnaḫhumus-sitral-jamîla mu`abbadâ",
        translation:
          "Ampunilah ayah dan ibu beliau, begitu pula keturunannya. Anugerahilah mereka penutup yang indah (dari segala aib) untuk selama-lamanya.",
      },
      {
        arabic:
          "وَشُيُوْخَــــهُ وَأَحِبَّـةً وَلِقَـــــارِئٍ وَلِسَامِعٍ يُصْغِي إِلَيْهِ مُمَجِّدَا",
        latin:
          "Wa syuyûkhahu wa aḫibbatan wa liqâri`in wa lisâmi’i yushghi ilaihi mumajjidâ",
        translation:
          "Juga untuk guru-guru beliau, para sahabat yang dicintainya, para pembaca nadham ini, dan para pendengar yang mendengarkan dengan mendapatkan kemuliaan.",
      },
      {
        arabic:
          "وَلِمُجْرِ هٰذَا الْخَيْرِ وَاشْكُرْ سَعْيَـــهُ وَاجْعَلْهُ فِيْ مَهْدِ الْقَبُوْلِ مُمَهَّدَ",
        latin:
          "Wa limujri hâdzal-khairi wasykur sa’yahu waj’alhu fî mahdil-qabûli mumahhada",
        translation:
          "Demikian pula untuk orang-orang yang menjalankan kebaikan ini agar kiranya mendapatkan ganjaran atas usaha mereka, dan tempatkanlah mereka di tempat penerimaan yang tersedia.",
      },
      {
        arabic:
          "وَأَجِبْ دُعَانَا إِذْ وَعَدْتَ وَهَبْ لَنَا حُسْنَ الْخِتَامِ فَلَسْتَ تُخْلِفُ مَوْعِدَا",
        latin:
          "Wa ajib du’ânâ idz wa’adta wa hab lanâ ḫusnal-khitâmi falastal tukhlifu mau’idâ",
        translation:
          "Ya Allah, kabulkanlah doa kami ini seperti telah Engkau janjikan. Anugerahilah kami suatu akhir yang baik (husnul khatimah). Sungguh Engkau tidak melanggar janji.",
      },
      {
        arabic:
          "وَصَـــــلَاةُ مَوْلَانَــــا وَتَسْلِيْــــمٌ عَلَى أَزْكَى شَفِيْعٍ لِلْبَرِيَّةِ قَدْ هَدَى",
        latin:
          "Wa shalâtu maulânâ wa taslîmun ‘alâ azkâ syafî‘i lil-bariyyati qad hadâ",
        translation:
          "Semoga rahmat dan keselamatan dari Allah senantiasa terlimpah kepada Nabi pemberi syafaat dan pemberi petunjuk yang paling mulia.",
      },
      {
        arabic:
          "وَرَفِيْقِهِ الصِّدِّيْقِ وَالْفَارُوْقِ مَنْ نَالَا مَقَامًا خَالِدًا وَمُخَلَّدَا",
        latin:
          "Wa rafîqihish-shiddîqi wal-fârûqi man nâlâ maqâman khâlidan wa mukhalladâ",
        translation:
          "Juga kepada teman beliau ash-shiddiq (yang amat jujur; Sayyidina Abu Bakar ash-Shiddiq) dan al-faruq (mampu membedakan benar-salah; Sayyidina Umar bin Khattab al-Faruq), yang dua-duanya memperoleh kedudukan yang kekal dan dikekalkan.",
      },
      {
        arabic:
          "وَالْاٰلِ وَالْأَصْحَابِ مَا هَبَّتْ صَبَا فَأَمَالَتِ الْغُصْنَ الرَّطِيْبَ الْأَمْلَدَا",
        latin:
          "Wal-âli wal-ashḫâbi mâ habbat shabâ fa amâlatil-ghushnar-rathîbal-amladâ",
        translation:
          "Demikian pula kepada keluarga Nabi dan sahabat-sahabat beliau selama angin dari timur bertiup dan menggoyang-goyangkan ranting pohon yang segar lagi muda.",
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
