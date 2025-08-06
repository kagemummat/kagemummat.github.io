document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    // Halaman 1
    [
      {
        translation: "Pasal Awal (الفصل الأول)",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ حَبِيْبِكَ الشَّافِعِ الْمُشَفَّعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad ḫabîbikasy-syâfi‘il-musyaffa’",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Kekasih-Mu pemberi syafaat yang diharapkan syafaatnya.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ أَعْلَى الْوَرَى رُتْبَةً وأَرْفَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad a‘lal-warâ rutbatan wa arfa‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Manusia yang teramat sangat luhur derajatnya.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ أَسْمَى الْبَرَايَا جَاهًا وَأَوْسَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad asmal-barâyâ jâhan wa ausa‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Makhluk yang sangat tinggi dan luas kedudukannya.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاسْلُكْ بِنَا رَبِّ خَيْرَ مَهْيَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wasluk binâ rabbi khaira mahya‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Wahai Tuhan, bimbinglah kami ke jalan yang terbaik.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَعَافِنَا وَاشْفِ كُلَّ مُوْجَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wa ‘âfinâ wasyfi kulla mûja‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Sembuhkanlah kami dari segala derita penyakit.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَأَصْلِحِ الْقَلبَ وَاعْفُ وَانفَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wa ashliḫil-qalba wa‘fu wanfa‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Perbaikilah hati, ampunilah, dan berilah kami (segala yang) manfaat.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاكْفِ الْمُعَادِيْ وَاصْرِفْهُ وَارْدَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wakfil-mu‘âdi washrifhu warda‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Bentengilah dan hindarkanlah kami dari musuh-musuh yang datang pada kami.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ نَحِلُّ فِي حِصْنِكَ الْمُمَنَّعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad naḫillu fî ḫishnikal-mumanna‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Kami singgah di dalam Benteng-Mu yang melindungi (dari berbagai macam gangguan).",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ رَبِّ ارْضَ عَنَّا رِضَاكَ الْأَرْفَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad rabbir-dlâ ‘annâ ridlâkal-arfa‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Ya Allah ridhailah kami dengan keridhaan-Mu yang agung.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاجْعَلْ لَنَا فِي الْجِنَانِ مَجْمَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad waj‘al lanâ fil-jinâni majma‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Jadikanlah kami sebagai orang-orang yang akan berkumpul dengan nabi-Mu di surga.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ رَافِقْ بِنَا خَيْرَ خَلْقِكَ اجْمَعْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad râfiq binâ khaira khalqikaj-ma‘",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Jadikanlah kami selalu bersama-sama dengan sebaik-baik ciptaan-Mu (Nabi Muhammad ﷺ).",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ يَا رَبِّ صَلِّ عَلَيْهِ و سَلِّمْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad yâ rabbi shalli ‘alaihi wa sallim",
        translation:
          "Ya Rabb limpahkanlah rahmat atas Nabi Muhammad ﷺ. Ya Allah limpahkanlah rahmat dan kesalamatan kepada beliau ﷺ.",
      },
    ],

    //Halaman 2
    [
      {
        translation: "Pasal Dua (الفصل الثاني)",
      },
      {
        arabic:
          "أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْم بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        latin:
          "A‘ûdzu billâhi manasy-syaithânir-rajîmi bismillâhirraḫmânirraḫîmi",
        translation:
          "Aku berlindung kepada Allah dari godaan setan yang terkutuk.",
      },
      {
        arabic:
          "اِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِيْنًاۙ لِّيَغْفِرَ لَكَ اللّٰهُ مَا تَقَدَّمَ مِنْ ذَنْۢبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهٗ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُّسْتَقِيْمًاۙ وَّيَنْصُرَكَ اللّٰهُ نَصْرًا عَزِيْزًا لَقَدْ جَاۤءَكُمْ رَسُوْلٌ مِّنْ أَنْفُسِكُمْ عَزِيْزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيْصٌ عَلَيْكُمْ بِالْمُؤْمِنِيْنَ رَءُوْفٌ رَّحِيْمٌ فَإِنْ تَوَلَّوْا فَقُلْ حَسْبِيَ اللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۗ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ إِنَّ اللّٰهَ وَمَلٰۤىِٕكَتَهٗ يُصَلُّوْنَ عَلَى النَّبِيِّۗ يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا",
        latin:
          "Innâ fataḫnâ laka fatḫnâm mubîna. liyaghfira lakallâhu mâ taqaddama min dzanbika wa mâ ta'akhkhara wa yutimma ni‘matahu ‘alaika wa yahdîyaka shirâthan mustaqîman, wa yanshurakallâhu nashran ‘azîzan. wa laqad jâ'akum rasûlun min anfusikum ‘azîzun ‘alaihi mâ ‘anittum ḫarîshun ‘alaikum bil-mu'minîna ra'ûfun raḫîm. fa in tawallau faqul ḫasbiyyallâhu lâ ilâha illâ huwa ‘alaihi tawakkaltu wa huwa rabbul-‘arsyil ‘adhîm, innalllâha wa malâ'ikatahu yushallûna ‘alan-nabî, yâ ayyuhal-ladzîna âmanû shallû ‘alaihi wa sallimû taslîmâ. ",
        translation:
          "Sungguh Kami telah menganugerahkan kepadamu kemenangan yang nyata, agar Allah memberikan ampunan kepadamu (Nabi Muhammad) atas dosamu yang lalu dan yang akan datang, menyempurnakan nikmat-Nya atasmu, menunjukimu ke jalan yang lurus, dan agar Allah menolongmu dengan pertolongan yang besar. Sungguh, benar-benar telah datang kepadamu seorang rasul dari kaummu sendiri. Berat terasa olehnya penderitaan yang kamu alami, sangat menginginkan (keimanan dan keselamatan) bagimu, dan (bersikap) penyantun dan penyayang terhadap orang-orang mukmin. Jika mereka berpaling (dari keimanan), katakanlah (Nabi Muhammad), “Cukuplah Allah bagiku. Tidak ada tuhan selain Dia. Hanya kepada-Nya aku bertawakal dan Dia adalah Tuhan pemilik ‘Arasy (singgasana) yang agung.” Sesungguhnya Allah dan para malaikat-Nya berselawat untuk Nabi. Wahai orang-orang yang beriman, berselawatlah kamu untuk Nabi dan ucapkanlah salam dengan penuh penghormatan kepadanya.",
      },
    ],

    //Halaman 3
    [
      {
        translation: "Pasal Tiga (لفصل الثالث)",
      },
      {
        arabic:
          "اَلْحَمْـــــدُ لِلّٰهِ الَّذِيْ هَـدَانَا بِعَبْدِهِ الْمُخْتَـــارِ مَنْ دَعَانَـــا",
        latin: "Al-ḫamdulillâhil-ladzî hadânâ bi‘abdihil-mukhtâri man da‘ânâ",
        translation:
          "Segala puji hanyalah untuk Allah yang telah memberi kita petunjuk. Melalui Hamba-Nya yang telah terpilih ﷺ yang telah menyeru kami.",
      },
      {
        arabic:
          "إلَيْـــــهِ بِالْإذْنِ وَقَدْ نَــادَانَا لَبَّيْكَ يَـــا مَنْ دَلَّنَا وَحَدَانَـــا",
        latin:
          "Ilaihi bil-idzni wa qad nâdânâ labbaika yâ man dallanâ wa ḫadânâ",
        translation:
          "Kepada-Nya dengan izin-Nya, dan sungguh Beliau ﷺ telah menyeru kami. Kami memenuhi panggilanmu, wahai Nabi ﷺ yang telah menyampaikan petunjuk dan motivasi kepada kami.",
      },
      {
        arabic:
          "صَلَّى عَلَيْــــكَ اللهُ بَــــارِئُكَ الَّذِيْ بِكَ يَا مُشَفَّعُ خَصَّنَا وَحَبَانَا",
        latin:
          "Shallâ ‘alaikallâhu bâri’ukal-ladzî bika yâ musyaffa‘u khashshanâ wa ḫabânâ",
        translation:
          "Semoga Allah melimpahkan rahmat kepadamu yang telah menciptakanmu. Wahai yang diharapkan syafaatnya, sebab engkau kami spesial dan terberkahi.",
      },
      {
        arabic:
          "مَعْ آلِكَ الْأَطْهَـــارِ مَعْـــدِنِ سِرِّكَ الْأَسْمَى فَهُمْ سُفُنُ النَّجَاةِ حِمَانَا",
        latin:
          "Ma‘ âlikal-athhâri ma‘dini sirrika al-asmâ fahum sufunun-najâti ḫimânâ",
        translation:
          "Semoga Allah melimpahkan rahmat juga kepada para keluargamu yang suci sebagai sumber-sumber rahasiamu yang mulia, merekalah kapal-kapal penyelamat yang melindungi kami.",
      },
      {
        arabic:
          "وعَلَى صَحَـابَتِكَ الْكِرَامِ حُمَــاةِ دِيـْـ ـــنِكَ أَصْبَحُوا لِوَلَائِهِ عُنْوَانَــا",
        latin:
          "Wa ‘alâ shaḫâbatikal-kirâmi ḫumâti dî nika ashbaḫû liwâ’ihi ‘unwânâ",
        translation:
          "Semoga Allah melimpahkan rahmat pula kepada para sahabatmu yang mulia, yang menjadi pembela ajaranmu, dan menjadi contoh panutan bagi pecintanya ﷺ.",
      },
      {
        arabic:
          "وَالتَّابِعِينَ لَهُمْ بِصِدْقٍ مَـا حَدَى حَادِي الْمَوَدَّةِ هَيَّجَ الْأشْجَــانَا",
        latin:
          "Wat-tâbi’îna lahum bishidqin mâ ḫadâ ḫâdil-mawaddati hayyajal-asyjânâ",
        translation:
          "Semoga Allah melimpahkan rahmat juga kepada para tabi’in, yang mengikuti mereka dengan benar, sebesar senandung rasa cinta yang mengguncang kesedihan.",
      },
      {
        arabic:
          "وَاللهِ مَا ذُكِرَ الْحَبِيبُ لَدَى الْمُحِبِّ إِلَّا وَأَضْحَى وَالِهًـــا نَشْوَانَا",
        latin:
          "Wallâhi mâ dzukiral-ḫabîbu ladal-muḫibbi illâ wa adlḫâ wa ilâhan nasywânâ",
        translation:
          "Demi Allah tidaklah disebutkan nama sang kekasih ﷺ pada orang yang mencintainya, kecuali dia akan terhenyak dan dimabuk rindu kepadanya (Rasulullah ﷺ).",
      },
      {
        arabic:
          "أَيْنَ الْمُحِـــــبُّونَ الَّذِيْنَ عَلَيْــهِـــــــمُ بَذْلُ النُّفُوسِ مَعَ النَّفَائِسِ هَانَا",
        latin:
          "Ainal-muḫibbûnal-ladzîna ‘alaihimu badzlun-nufûsi ma‘an-nafâ’isi hânâ",
        translation:
          "Di manakah mereka para pecinta, yang rela mengorbankan jiwa raga serta harta bendanya yang hina itu?",
      },
      {
        arabic:
          "لَا يَسْمَعُونَ بِذِكْرِ طَهَ الْمُصْطَفَى إِلَّا بِهِ انْتَعَشُوا وَأَذْهَبَ رَانَا",
        latin:
          "Lâ yasma‘ûna bidzikri thahal-mushthafâ illâ bihin-ta‘asyû wa adzhaba rânâ",
        translation:
          "Tidaklah mereka mendengar sebutan Thâhâ al-Musthafa ﷺ, kecuali bangkitlah kembali semangatnya dan lenyaplah segala kesedihannya.",
      },
      {
        arabic:
          "فَاهْتَاجَتِ الْأَرْوَاحُ تَشْتَاقُ اللِّقَا وَتَحِنُّ تَسْــأَلُ رَبَّهَا الرِّضْوَانَـــا",
        latin:
          "Fahtâjâtil-arwâḫu tasytâqul-liqâ wa taḫinnu tas’alu rabbahar-ridlwânâ",
        translation:
          "Bergoncanglah jiwa karena rasa rindu ingin segera berjumpa dan merintih memohon ridha kepada Tuhan-Nya.",
      },
      {
        arabic:
          "حَـــالُ الْمُحِبِّــينَ كَذَا فَاسْمَعْ إِلَى سِيَرِ الْمُشَفَّعِ وَارْهِفِ الْآذَانَا",
        latin:
          "ḫâlal-muḫibbîna kadzâ fasma‘ ilâ siyaril-musyaffa‘i warhifil-âdzânâ",
        translation:
          "Begitulah keadaan para pecinta (Rasul ﷺ) maka dengarkanlah kisah perjalanan hidup al-Musyaffa‘ ﷺ (nabi yang diharapkan syafaatnya) dan tajamkan telinga dengan saksama.",
      },
      {
        arabic:
          "وَانْصِتْ إِلَى أَوْصَافِ طَهَ الْمُجْتَبَى وَاحْضِرْ لِقَلْبِكَ يَمْتَلِئْ وِجْدَانَا",
        latin:
          "Wanshit ila aushâfi thahal-mujtaba Waḫdlir liqalbiqa yamtali wijdânâ",
        translation:
          "Simaklah dengan teliti sifat-sifat Thâhâ al-Mujtaba ﷺ (sang pilihan), dan hadirkanlah hatimu, niscaya hatimu akan dipenuhi dengan kerinduan.",
      },
      {
        arabic:
          "يَـا رَبَّنَــــا صَلِّ وَسَــــلِّمْ دَائِمًــــا عَلَى حَبِيْبِكَ مَنْ إِلَيْــــكَ دَعَانَــــا",
        latin: "Yâ rabbi wasallim da’iman ‘alâ ḫabîbika man ilaika da‘ânâ",
        translation:
          "Wahai Tuhan kami, limpahkanlah rahmat dan keselamatan selamanya, pada kekasih-Mu yang telah menyeru kami kepada-Mu.",
      },
    ],
    //Halaman 4
    [
      {
        translation: "Pasal Empat (الفصل الرابع)",
      },
      {
        arabic:
          "نَبَّأَنَا اللهُ فَقَــالَ جَــــاءَكُمْ نُورٌ فَسُبْحَانَ الَّذِيْ أَنْبَانَــــا",
        latin: "Nabba'anallâhu faqâla jâ'akum nûrun fasubḫânal-ladzî anbânâ",
        translation:
          "Allah telah memberi kabar kepada kita dengan firman-Nya: “Telah datang kepada kalian An-Nur (cahaya). Mahasuci Allah yang telah memberi kita kabar ini.",
      },
      {
        arabic:
          "وَالنُّوْرُ طَهَ عَبْدُهُ مَنَّ بِــهِ فِيْ ذِكْرِهِ أَعْظِمْ بِهِ مَنَّانَــــا",
        latin:
          "Wan-nûru thaha ‘abduhu manna bihi fî dzikrihi a‘dhim bihi mannânâ",
        translation:
          "Cahaya Thâhâ ﷺ hamba-Nya membuat kita dilimpahi karunia ketika menyebutnya. Agungkanlah karunia kami berkat menyebut Nabi Muhammad ﷺ.",
      },
      {
        arabic:
          "هُوَ رَحْمَـــةُ الْمَوْلَى تَأَمَّـــــلْ قَوْلَهُ فَلْيَفْرَحُوْا وَاغْدُ بِهِ فَرْحَانَا",
        latin:
          "Huwa raḫmatul-maulâ ta'ammal qaulahu falyafraḫû waghdu bihi farḫânâ",
        translation:
          "Beliau ﷺ merupakan suatu rahmat dari sang pencipta, maka perhatikanlah Firman-Nya: “Maka bergembiralah kamu”, maka datanglah kebahagiaan kita berkat beliau ﷺ.",
      },
      {
        arabic:
          "مُسْتَمْسِكًا بِالْعُرْوَةِ الْوُثْقَى ومُعْـــ ـــتَصِمًا بِحَبْلِ اللهِ مَنْ أَنْشَانَا",
        latin:
          "Mustamsikan bil-‘urwatil-wutsqâ wa mu‘tashiman biḫablillâḫi man ansyânâ",
        translation:
          "Dengan senantiasa berpegangan pada tali yang kuat (Al-Qur’an dan Al-Hadits) dan dengan berpegang teguh pada tali Allah yang menciptakan kita.",
      },
      {
        arabic:
          "وَاسْتَشْعِرَنْ أَنْوَارَ مَنْ قِيلَ مَتَى كُنتَ نَبِيًّا قَالَ اٰدَمُ كَانَا",
        latin:
          "Wastasy‘iran anwâra man qîla matâ kunta nabiyyan qâla âdamu kânâ",
        translation:
          "Rasakanlah akan kehadiran cahaya-cahaya Rasulullah ﷺ yang ketika dikatakan: “Sejak kapankah Engkau diangkat sebagai nabi?” Beliau menjawab, “Kenabianku semenjak Adam as.”",
      },
      {
        arabic:
          "بَيْنَ التُّرابِ وبَيْنَ مَــاءٍ فَـاسْتَفِقْ مِنْ غَفْلَةٍ عَنْ ذَا وَكُنْ يَقْظَانَا",
        latin:
          "Bainat-turâbi wa baina mâ'in fastafiq min ghaflatin ‘an dzâ wa kun yaqdhânâ",
        translation:
          "Masih berupa antara air dan tanah, sadarilah olehmu dari kelalaian-kelalaianmu itu dan terjagalah.",
      },
      {
        arabic:
          "وَاعْبُرْ إِلَى أَسْـــــرَارِ رَبِّي لَــــمْ يَزَلْ يَنْقُلُنِي بَيْنَ الْخِيَارِ مُصَانَا",
        latin:
          "Wa‘bur ilâ asrâri rabbi lam yazal yanqulunî bainal-khiyâri mushânâ",
        translation:
          "Maka pahamilah rahasia-rahasia Tuhanku yang selalu memindahkanku ﷺ di antara sulbi orang-orang yang terpilih serta terjaga kesuciannya.",
      },
      {
        arabic:
          "لَــمْ تَفْتَرِقْ مِنْ شُعْبَتَيْنِ إِلَّا أَنَــــا فِي خَيْرِهَا حَتَّى بُرُزِيَ آنَا",
        latin:
          "Lam taftariq min syu‘bataini illâ anâ fî khairihâ ḫattâ buruziya ânâ",
        translation:
          "Tidaklah terpisah dari dua kelompok (suku), terkecuali aku berada pada yang terbaik, begitulah hingga terlahirnya diriku.",
      },
      {
        arabic:
          "فَأَنَا خِيَارٌ مِنْ خِيَارٍ قَدْ خَرَجْتُ مِنْ نِكَاحٍ لِي إلٰهِيَ صَانَا",
        latin:
          "Fa'anâ khiyârun min khiyârin qad kharajtu min nikâḫin lî ilâhiya shânâ",
        translation:
          "Aku adalah yang terpilih dari semua yang terpilih, dan aku terlahir dari pernikahan yang Tuhanku telah menjaganya.",
      },
      {
        arabic:
          "طَهَّـــــرَهُ الله حَمَــــــاهُ اخْتَـــــارَهُ ومَا بَرَى كَمِثْلِهِ إِنْسَــــانَا",
        latin: "Thahharahullâḫu ḫamâhukh-târahu wa mâ barâ kamitslihi insânâ",
        translation:
          "Allah telah menyucikannya ﷺ, serta melindungi dan memilihnya ﷺ. Tidaklah pernah Allah menciptakan manusia menyerupainya ﷺ.",
      },
      {
        arabic:
          "وَبِحُبِّـــهِ وَبِذِكْرِهِ وَالنَّصْرِ والتَّـ ــوْقِيرِْ رَبُّ الْعَرْشِ قَدْ أَوْصَانَا",
        latin:
          "Wa biḫubbihi wa bidzikrihi wan-nashri wat-ta'uqîra rabbul-‘arsyi qad aushânâ",
        translation:
          "Dan dengan mencintai dan mengingat serta membantu syari’atnya, dan dengan penghormatan padanya ﷺ Allah Pencipta Arsy telah mewasiatkan kita.",
      },
      {
        arabic:
          "يَا رَبَّنَــــا صَلِّ وَ سَــلِّمْ دَائِمًـــــا عَلَى حَبِيْبِكَ مَنْ إِلَيْكَ دَعَانَا",
        latin:
          "Yâ rabbanâ shalli wa sallim da`iman ‘alâ ḫabîbika man ilaika da’ânâ",
        translation:
          "Wahai Tuhan kami, limpahkanlah rahmat dan keselamatan selamanya. pada kekasih-Mu yang telah menyeru kami kepada-Mu.",
      },
    ],
    [
      {
        translation: "Pasal Lima (الفصل الخامس)",
      },
      {
        arabic:
          "هٰذَا وَقَدْ نَشَرَ الْإِلٰهُ نُعُوْتَهُ فِي الْكُتْبِ بَيَّنَهَا لَنَا تِبْيَانَا",
        latin:
          "Hâdzâ wa qad nasyaral-ilâhu nu‘ûtahu fil-kutbi bayyanahâ lanâ tibyânâ",
        translation:
          "Begitulah, Tuhan telah menyebarkan tentang sifat-sifatnya ﷺ dalam kitab-kitab (terdahulu) yang menjelaskannya dengan sangat terang.",
      },
      {
        arabic:
          "أَخَـذَ مِيْثَاقَ النَّبِيِّيْنَ لَمَــا اٰتَيْتُكُمْ مِنْ حِكْمَةٍ إِحْسَانَا",
        latin: "Akhadza mîtsâqan-nabiyyîna lamâ âtaitukum min ḫikmatin iḫsânâ",
        translation:
          "Dia (Allah) telah mengambil perjanjian dari para nabi ketika telah kudatangkan pada kalian hikmah dan kemuliaan.",
      },
      {
        arabic:
          "وَجَاءَكُمْ رَسُوْلُنَــا لَتُؤْمِنُنَّ وَتَنْصُرُوْنَ وَتُصْبِحُوْنَ أَعْوَانَا",
        latin:
          "Wa jâ'akum rasûlunâ latu'minunna wa tanshurûna wa tushbiḫûna a‘wânâ",
        translation:
          "Teladah datang utusan kami (Rasulullah ﷺ) pada kalian (wahai para nabi) maka agar kalian (wahai para nabi) beriman padanya, dan kalian (wahai para nabi) mendukungnya ﷺ, dan agar kalian (wahai para nabi) menjadi pengikutnya.",
      },
      {
        arabic:
          "قَدْ بَشَّرُوا أَقْوَامَهُمْ بِالْمُصْطَفَى أَعْظِمْ بِذٰلِكَ رُتْبَةً وَمَكَانَا",
        latin:
          "Qad basysyarû aqwâmahum bil-mushthafâ a‘dhim bidzâlika rutbatan wa makânâ",
        translation:
          "Para nabi terdahulu telah memberi kabar gembira pada kaum mereka akan kedatangan nabi terpilih, maka muliakanlah martabat dan kedudukkannya.",
      },
      {
        arabic:
          "فَهُوَ وَإِنْ جَاءَ الْأَخِيْرُ مُقدَّمٌ يَمْشُونَ تَحْتَ لِوَاءِ مَنْ نَادَانَا",
        latin:
          "Fahuwa wa in jâ'al-akhîru muqaddamun yamsyûna taḫta liwâ'i man nâdânâ",
        translation:
          "Apabila telah datang hari kiamat, para nabi terdahulu berjalan di bawah naungan panji sang nabi ﷺ yang telah menyeru kita.",
      },
      {
        arabic:
          "يَا أُمَّةَ الْإِسْلَامِ أَوَّلُ شَــافِعٍ وَمُشَفَّعٍ أَنَا قَطُّ لَا أَتَوَانَى",
        latin:
          "Yâ ummatal-islâmi awwalu syâfi‘in wa musyaffa‘in anâ qaththu lâ atawânâ",
        translation:
          "Wahai umat Islam, aku adalah yang pertama memberi syafaat dan diharapkan syafaatnya, dan tidaklah sama sekali aku memperlambat (syafaat itu).",
      },
      {
        arabic:
          "حَتَّى أُنَادَى ارْفَعْ وَسَلْ تُعْطَ وَقُلْ يُسْمَعْ لِقَولِكَ نَجْمُ فَخْرِكْ بَانَا",
        latin:
          "ḫattâ unâdâr-fa‘ was al tu‘tha wa qul yusma‘ liqaulika najmu fakhrik bânâ",
        translation:
          "Hingga diserukan kepadaku (ketika bersujud memohon syafaat), “Angkatlah kepalamu (wahai Muhammad ﷺ), katakanlah permintaanmu, niscaya engkau diberi; bicaralah, niscaya engkau didengar.” Bintang kemuliaanmu (wahai Nabi ﷺ) sungguh jelas dan terang.",
      },
      {
        arabic:
          "وَلِواءُ حَمْدِ اللهِ جَــلَّ بِيَدِي وَلَأَوَّلًا اٰتِيْ أَنَا الْجِنَانَا",
        latin:
          "Wa liwâ'u ḫamdillâhi jalla biyadî wa la'awwalan âtî anal-jinânâ",
        translation:
          "Panji pujian kepada Allah yang Mahaperkasa berada di tanganku ﷺ dan aku ﷺ adalah manusia pertama yang mendatangi surga.",
      },
      {
        arabic:
          "وَأَكْرَمُ الْخَلْقِ عَلَى اللهِ أَنَــــا فَلَقَدْ حَبَاكَ اللهُ مِنْهُ حَنَانَا",
        latin:
          "Wa akramul-khalqi ‘alallâhi anâ falaqad ḫabbâkallâhu minhu ḫanânâ",
        translation:
          "Aku ﷺ telah menjadi ciptaan yang paling mulia di sisi Allah. Sungguh engkau (wahai Nabi ﷺ) telah terpelihara oleh Allah dengan kasih sayang-Nya.",
      },
      {
        arabic:
          "وَلَسَوْفَ يُعْطِيْكَ فَتَرْضَى جَلَّ مِنْ مُعْطٍ تَقَاصَرَ عَنْ عَطَاهُ نُهَانَا",
        latin:
          "Wa lasaufa yu‘thîka fatardlâ jalla min mu‘thin taqâshara ‘an ‘athâhu nuhânâ",
        translation:
          "“Dan kelak Dia pasti memberikan karunia-Nya kepadamu, hingga engkau puas.” (Ayat ini) merupakan tanda kebesaran Sang Maha Pemberi, yang sukar dijangkau akal.",
      },
      {
        arabic:
          "بِاللهِ كَرِّرْ ذِكْرَ وَصْفِ مُحَمَّدٍ كَيْمَا تُزِيْحَ عَنِ الْقُلُوبِ الرَّانَا",
        latin:
          "Billâhi karrir dzikra washfi muḫammadin kaimâ tuzîḫa ‘anil-qulûbir-rânâ",
        translation:
          "Demi Allah, ingat-ingatlah sifat Nabi Muhammad ﷺ berulang-ulang, agar menyingkirkan kotoran-kotoran dari hati.",
      },
      {
        arabic:
          "يَا رَبَّنَــــا صَلِّ وَسَلِّمْ دَائِمًــــا عَلَى حَبِيْبِكَ مَنْ إِلَيْكَ دَعَانَا",
        latin:
          "Yâ rabbanâ shalli wa sallim da'iman ‘alâ ḫabîbika man ilaika da‘ânâ",
        translation:
          "Wahai Tuhan kami, limpahkanlah rahmat dan keselamatan selamanya pada kekasih-Mu yang telah menyeru kami kepada-Mu.",
      },
    ],
    //Halaman 6
    [
      {
        translation: "Pasal Enam (الفصل السادس)",
      },
      {
        arabic:
          "لَمَّـا دَنَـــا وَقْـتُ الْبُرُوْزِ لِأَحْمَـــدٍ عَنْ إِذْنِ مَنْ مَـا شَـاءَهُ قَـدْ كَانَـا",
        latin:
          "Lammâ dânâ waqtul-burûzi li aḫmadin ‘an idzni man mâ syâ'ahu qad kânâ",
        translation:
          "Ketika telah dekat waktu kelahiran Ahmad ﷺ dari izin-Nya, yang apabila menghendaki sesuatu pasti terwujud.",
      },
      {
        arabic:
          "حَمَلَتْ بِهِ الْأُمُّ الْأَمِينَةُ بِنْـتُ وَهْــ ــــبٍ مَنْ لَهَا أَعْلَى الْإِلٰـهُ مَكَانَـا",
        latin:
          "ḫamalat bihil-ummul-amînatu bintu wah bin man lahâ a‘lal-ilâhi makânâ",
        translation:
          "Ia ﷺ berada di dalam kandungan sang ibu Aminah binti Wahb, seseorang Allah muliakan kedudukannya.",
      },
      {
        arabic:
          "مِنْ وَالِـدِ الْمُخْتَـارِ عَبْـدِ اللهِ بـْنِ عَبْـدٍ لِمُطَّـلِـبٍ رَأَى الْبُرْهَـانَـا",
        latin:
          "Min wâlidil-mukhtâri ‘abdillâḫib-ni ‘abdil-mutahallibin ra'al-burhânâ",
        translation:
          "Dari ayah sang hamba yang terpilih ﷺ, yaitu (ayahnya itu) Abdullah bin Abdul Muthalib yang melihat tanda-tanda (isyarat kenabian).",
      },
      {
        arabic:
          "قَدْ كَانَ يَغْمُـرُ نُـورُ طَـهَ وَجْهَـهُ وَسَرَى إِلَى الْابْنِ الْمَصُـوْنِ عَيَانَـا",
        latin:
          "Qad kânâ yaghmuru nûru thaha wajhahu wa sarâ ilal-ibnil-mashûni ‘ayânâ",
        translation:
          "Wajah sang ayah semula diliputi terang cahaya Thâhâ ﷺ, yang kemudian cahaya itu berpindah kepada sang anak yang dijaga.",
      },
      {
        arabic:
          "وَهُوَ ابْنُ هَاشِمٍ الْكَرِيمِ الشَّهَـمِ بْـنِ عَبْـدِ مَنَـافِ بْـن قُصَيٍّ كَانَـا",
        latin:
          "Wa huwab-nu hâsyimil-karîmisy-syahamib-ni ‘abdi manâfib-ni qushayyin kânâ",
        translation:
          "Dia adalah keturunan Hasyim yang mulia dan perkasa, putra Abdu Manâf, keturunan qushay yang dahulu.",
      },
      {
        arabic:
          "وَالِـدُهُ يُدْعَى حَكِيـمًــــا شَــــأْنُـهُ قَـدِ اعْتَلَى أَعْـزِزْ بِذٰلِكَ شَانَـا",
        latin:
          "Wâliduhu yud‘â ḫakîman sya'nuhu qadi’-talâ a‘ziz bidzâlika syânâ",
        translation:
          "Ayahnya digelari hakîm (orang yang adil). Kepribadiannya luhur. Muliakanlah (beliau) atas dasar kepribadian itu!",
      },
      {
        arabic:
          "وَاحْفَظْ أُصُولَ الْمُصْطَفَى حَتَّى تَرَى فِيْ سِلْسِـلَاتِ أُصُولِـهِ عَدْنَانَـا",
        latin:
          "Waḫfadh ushûlal-mushthafâ ḫatâ tarâ fî silsilâti ushûlihi ‘adnânâ",
        translation:
          "Hafalkanlah silsilah keturunan sang nabi terpilih ﷺ hingga kautemukan silisilahnya berakar pada (datuknya) Adnan.",
      },
      {
        arabic:
          "فَهُنَاكَ قِفْ وَاعْلَمْ بِرَفْعِهِ إِِلَى إِسْــ ـمَاعِيـلَ كَـانَ لِلْأَبِ مِعْـوَانَـا",
        latin:
          "Fahunâka qif wa‘lam biraf‘ihi ilâ is mâ‘îla kânâ lil-abi mi‘wânâ",
        translation:
          "Bila silsilah telah sampai kepada Adnan, berhentilah! Ketahuilah bahwa nasabnya bersambung hingga Nabi Ismail as yang telah menjadi pendukung ayahnya (Ibrahim as).",
      },
      {
        arabic:
          "وَحِيْنَمَا حَمَـلَـتْ بِــهِ اٰمِنَــــةٌ لَـمْ تَشْـكُ شَيْئًا يأْخُـذُ النِّسْوَانَـا",
        latin:
          "Wa ḫînamâ ḫamalat bihi âminatun lam tasyku syai'an ya'khudzun-niswânâ",
        translation:
          "Kala mengandungnya, Sayyidah Aminah ra tidak mengeluh sebagaimana perempuan hamil pada umumnya.",
      },
      {
        arabic:
          "وَبِهَا أَحَاطَ اللُّطْفُ مِـنْ رَبِّ السَّمَا أَقْصَى الْأَذَى والْهَـمَّ والْأَحْزَانَـا",
        latin:
          "Wa bihâ aḫâthal-luthfu min rabbis-samâ aqshal-adzâ walhamma wal-aḫzânâ",
        translation:
          "Selubung kelembutan dari Allah pemelihara langit yang meliputi Sayyidah Aminah melenyapkan segala rasa sakit, kegelisahan, dan kesedihan.",
      },
      {
        arabic:
          "وَرَأَتْ كَمَا قَدْ جَاءَ مَا عَلِمَـتْ بِـهِ أَنَّ الْمُهَيْمِنَ شَــرَّفَ الْأَكْـوَانَـا",
        latin:
          "Wa ra'at kamâ qad jâ'a mâ‘alimaat bihi annal-muhaimina syarrafal-akwânâ",
        translation:
          "Kemudian Sayyidah Aminah menyaksikan, sebagaimana telah tiba sesuatu yang diketahuinya, bahwa yang Maha Pemelihara telah memuliakan alam semesta.",
      },
      {
        arabic:
          "بِالطُّهْرِ مَنْ فِي بَطْنِهَـا فَاسْتَبْشَـرَتْ وَدَنَا الْمَخَاضُ فَأُتْرِعَتْ رِضْوَانَا",
        latin:
          "Bith-thuhri man fî bathnihâ fastabsyarat wa danal-makhâdlu fa'utri‘at ridlwânâ",
        translation:
          "Dengan kesucian bayi di dalam kandungannya, ia pun bergembira ketika telah dekat saat-saat kelahiran, hingga meluap-luaplah keridhaannya.",
      },
      {
        arabic:
          "(سُبْحَانَ اللهِ وَالْحَـمْدُ لِلّٰهِ وَلآ إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ ×٤، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيْمِ فِي كُلِّ لَحْظَةٍ أَبَدًا عَدَدَ خَلْقِهِ وَرِضَاءَ نَفْسِهِ وَزِيْنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ)",
        latin:
          "Subḫânallâhi wal-ḫamdulillâhi wa lâ ilâha illallâhu wallâhu akbaru 4x, wa lâ ḫaula wa lâ quwwata illâ billâhil-‘aliyyil-‘adhîmi fî kulli laḫdhatin abadan ‘adada khalqihi wa ridlâ'a nafsihi wa zînata ‘arsyihi wa midâda kalimatihi",
        translation:
          "Membaca tasbih, tahmid, tahlil, takbir, 4x, lalu hauqalah. Mahasuci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, Allah Mahabesar. Tiada daya dan upaya kecuali dengan pertolongan Allah yang Mahatinggi, lagi Mahaagung sebanyak bilangan ciptaannya, dan seluas keridhaannya, dan seberat timbangan arsynya dan juga sebanyak tinta yang digunakan untuk menulis kalimatnya.",
      },
      {
        arabic:
          "وتَجَــــلَّتِ الْأَنْـوَارُ مِنْ كُلِّ الْجِهَـــــا تِ فَوَقْـتُ مِيـْلَادِ الْمُشَفَّـعِ حَانَـا",
        latin:
          "Wa tajallatil-anwâru min kullil-jihâ ti fawaqtu mîlâdil-musyaffa‘i ḫânâ",
        translation:
          "Maka muncullah cahaya-cahaya dari segala penjuru dan detik kelahiran sosok yang diharapkan syafaatnya itu pun tiba.",
      },
      {
        arabic:
          "وَقُبَيْلَ فَجْرٍ أَبْرَزَتْ شَمْـسَ الْهُـدَى ظَهَرَ الْحَبِيْبُ مُكَرَّمًا وَمُصَانَـا",
        latin:
          "Wa qubaila fajrin abrazat syamsal-hudâ dhaharal-ḫabîbu mukarraman wa mushânâ",
        translation:
          "Beberapa saat sebelum terbitnya fajar muncullah matahari hidayah, lahirlah sang kekasih yang dimuliakan dan dijaga.",
      },
    ],
    //Mahalul Qiyam
    [
      {
        translation: "Pasal Tujuh : Mahalul Qiyam (الفصل السابع : محل القيام)",
      },
      {
        arabic:
          "صَلَّى اللهُ عَلَى مُحَمَّـدْ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ×٣",
        latin: "Shallallâḫu ‘alâ muḫammad shallallâhu ‘alaihi wa sallam 3x",
        translation:
          "Semoga Allah melimpahkan rahmat kepada (Nabi) Muhammad. Semoga Allah melimpahkan rahmat dan keselamatan kepada (Nabi) Muhammad.",
      },
      {
        arabic: "يَا نَبِيْ سَــلَامْ عَلَيْكَ يَا رَسُوْلْ سَلَامْ عَلَيْكَ",
        latin: "Yâ nabî salâmu ‘alaika yâ rasûl salâm ‘alaika",
        translation:
          "Wahai Nabi ﷺ keselamatan bagimu, wahai rasul keselamatan bagimu.",
      },
      {
        arabic: "يَا حَبِيْبْ سَلَامْ عَلَيْكَ صَلَوَاتُ اللهِ عَلَيْكَ",
        latin: "Yâ ḫabîb salâm ‘alaika ۞ yâ rasûl salâm ‘alaika",
        translation: "Wahai kekasih keselamatan bagimu, shalawat Allah bagimu.",
      },
      {
        arabic:
          "أَبْرَزَ اللهُ الْمُشَــــفَّعْ صَاحِبَ الْقَدْرِ الْمُرَفَّعْ",
        latin: "Abrazallâhul-musyaffa‘shâḫibal-qadril-muraffa’",
        translation:
          "Allah telah mendatangkan (ke dunia) nabi yang diharapkan syafaat, yang memiliki derajat yang dimuliakan.",
      },
      {
        arabic: "فَمَلَا النُّوْرُ النَّوَاحِيْ عَمَّ كُلَّ الْكَوْنِ أَجْمَعْ",
        latin: "Famalan-nûrun-nawâḫî ‘amma kullal-kauni ajma’",
        translation:
          "Semburat cahaya memenuhi segala penjuru, meliputi seluruh alam semesta.",
      },
      {
        arabic: "نُكِّسَتْ أَصْنَامُ شِرْكٍ وَبِنَا الشِّرْكِ تَصَدَّعْ",
        latin: "Nukkisat ashnâmu syirkin wa binasy-syirki tashadda’",
        translation:
          "Patung-patung berhala di Ka’bah pun dijungkirkan, dan bangunan kemusyrikan pun retak.",
      },
      {
        arabic: "وَدَنَا وَقْتُ الْهِـــدَايَةْ وَحِمَى الْكُفْرِ تَزَعْزَعْ",
        latin: "Wa danâ waqtul-hidâyah wa ḫimal-kufri taza‘za‘",
        translation:
          "Saat-saat datangnya petunjuk kian dekat, dan benteng kekafiran pun berguncang.",
      },
      {
        arabic:
          "مَرْحَبًا أَهْلًا وَسَهْلًا بِكَ يَا ذَا الْقَدْرِ الْأَرْفَعْ",
        latin: "Marḫaban ahlan wa sahlan bika yâ dzal-qadril-arfa‘",
        translation: "Selamat datang, wahai sang pemilik derajat yang mulia.",
      },
      {
        arabic: "يَا إِمَامَ أَهْلِ الرِّسَالَةْ مَنْ بِهِ الْآفَاتُ تُدْفَعْ",
        latin: "Yâ imâma ahlir-risâlah man bihil-afâtu tudfa‘",
        translation:
          "Wahai imam dan pemimpin para rasul, yang dengannya ﷺ bencana-bencana tertolakkan",
      },
      {
        arabic: "أَنْتَ فِي الْحَشْرِ مَلَاذٌ لَكَ كُلُّ الْخَلْقِ تَفْزَعْ",
        latin: "Anta fil-ḫusyri malâdzun laka kullul-khalqi tafza‘",
        translation:
          "Engkaulah tempat perlindungan di hari Kiamat, kepadamulah seluruh makhluk takut (tak mendapatkan syafaat).",
      },
      {
        arabic: "وَيُنَادُوْنَ تَرَى مَا قَدْ دَهَى مِنْ هَوْلٍ أَفْظَعْ",
        latin: "Wa yunâdûna tarâ mâ qad dahâ min haulin afdha‘",
        translation:
          "Kemudian mereka datang memanggil-manggil, ketika menyaksikan dahsyatnya kepanikan dan kegentingan.",
      },
      {
        arabic:
          "مَرْحَبًا يَا نُورَ عَيْنِي (مَرْحَبًا) مَرْحَبًا جَدَّ الْحُسَيْنِ (مَرْحَبًا)",
        latin:
          "Marhaban ya nura 'ainii (Marhaban) Marhaban jaddal Husaini (Marhaban)",
        translation:
          "Selamat datang wahai cahaya mataku (Selamat datang) Selamat datang wahai kakek Hasan-Husain (Selamat datang)",
      },
      {
        arabic: "فَلَهَا أَنْتَ فَتَسْجُدْ وَتُنَادَى اشْفَعْ تُشَفَّعْ",
        latin: "Falahâ anta fatasjud wa tunâdâsy-fa‘ tusyaffa‘",
        translation:
          "Untuk mereka engkau bersujud (kepada Allah). Mereka memanggil-manggil minta syafaat (pertolongan), engkau pun menolongnya.",
      },
      {
        arabic: "فَعَلْيْكَ اللهُ صَلَّى مَا بَدَا النُّوْرُ وَشَعْشَعْ",
        latin: "Fa‘alaikallâhu shallâ mâ badan-nûru wa sya‘sya‘",
        translation:
          "Semoga limpahan rahmat dari Allah tercurah kepadamu, selama cahaya bersinar dan pancarannya menyebar ke mana-mana.",
      },
      {
        arabic: "وَبِكَ الرَّحْمٰنَ نَسْأَلْ وَإِلٰهُ الْعَرْشِ يَسْمَعْ",
        latin: "Wa bikar-raḫmâna nas'al wa ilâhul-‘arsyi yasma‘",
        translation:
          "Melalui dirimu (wahai Nabi ﷺ), kami memohon pada Allah ar-Rahman, maka pencipta arsy mendengar doa kami.",
      },
      {
        arabic:
          "رَبَّ فَاغْفِرْ لِي ذُنُوْبِي (يَا اَلله) بِبَرْكَةِ الْهَادِي الْمُشَفَّعْ (يَا اَلله)",
        latin:
          "Rabbi faghfir li dzunubi (Ya Allah) Bi barakatil hadil musyaffa' (Ya Allah)",
        translation:
          "Tuhanku, ampunilah dosaku (Ya Allah), dengan berkah (atau barakah) Al-Hadi Al-Musyaffa' (Ya Allah).",
      },
      {
        arabic:
          "يَا عَظِيْمَ الْمَنِّ يَا رَبْ شَمْلَنَا بِالْمُصْطَفَى اجْمَعْ",
        latin: "Yâ ‘adhîmal-manni yâ rab syamlanâ bil-mushthafaj-ma‘",
        translation:
          "Wahai Maha Pemberi anugerah wahai Rabb, kumpulkanlah golongan kami dengan al-Musthafa ﷺ (sang nabi terpilih).",
      },
      {
        arabic:
          "وَبِـــهِ فَــــانْظُرْ إِلَيْنَــــا وَاعْطِنَا بِهِ كُلَّ مَطْمَعْ",
        latin: "Wa bihi fandhur ilainâ wa‘thinâ bihi kulla muth‘am",
        translation:
          "Berkat beliau ﷺ, pandangilah kami dengan kasih sayang-Mu dan kami berkat beliau ﷺ, berilah segala yang kami inginkan.",
      },
      {
        arabic: "وَاكْفِنَا كُلَّ الْبَـــلَايَا وَادْفَعِ الْآفَاتِ وَارْفَعْ",
        latin: "Wakfinâ kullal-balâyâ wadfa‘il-âfâti warfa‘",
        translation:
          "Hindarkanlah kami dari segala bencana, dan cegahlah segala kesengsaraan, dan angkatlah sejauh-jauhnya.",
      },
      {
        arabic: "صَلَّى اللهُ عَلَى مَحُمَّد صَلَّى اللهُ عَلَيْهِ وَسَلَّم",
        latin: "Shallallahu 'ala Muhammad Shallallahu 'alaihi wasallam",
        translation:
          "Semoga Allah memberikan rahmat-Nya kepada Nabi Muhammad, Semoga Allah senantiasa memberikan rahmat dan keselamatan (kesejahteraan) kepada Nabi Muhammad.",
      },
      {
        arabic: "وَاسْقِنَا يَا رَبْ أَغِثْنَا بِحَيًا هَطَّالْ يَهْمَعْ",
        latin: "Wasqinâ yâ rabb aghitsnâ biḫayyan haththal yahma‘",
        translation:
          "Ya Rabb, siramilah kami (dengan rahmatmu). Tolonglah kami dengan kehidupan yang dicurahi lebatnya hujan kasih sayang-Mu.",
      },
      {
        arabic:
          "وَاخْتِمِ الْعُمْـرَ بِحُسْنَى وَاحْسِنِ الْعُقْبَى وَمَرْجَعْ",
        latin: "Wakhtimil-‘umra biḫusnâ waḫsinil-‘uqbâ wa marja‘",
        translation:
          "Akhirilah usia kami dengan husnul khatimah dan perbaguslah kehidupan akhirat dan saat kami kembali kepada-Mu.",
      },
      {
        arabic: "وَصَـــــلَاةُ اللهِ تَغْشَى مَنْ لَهُ الْحُسْنُ تَجَمَّعْ",
        latin: "Wa shalâtullâḫi taghsyâ man lahul-ḫusnu tajamma‘",
        translation:
          "Semoga rahmat Allah menyelubungi orang yang memiliki segala kumpulan kebaikan dalam dirinya.",
      },
      {
        arabic:
          "أَحْمَــــدَ الطُّهْـــــرَ وَآلِه وَالصَّحَابَةْ مَا السَّنَا شَعْ",
        latin: "Aḫmadath-thuhra wa âlih wash-shaḫâbat mas-sanâ sya‘",
        translation:
          "Dialah Ahmad ﷺ yang suci. Begitu juga, semoga menyelubungi keluarganya serta para sahabatnya dengan rahmat yang selalu bercahaya terang benderang.",
      },
      {
        arabic: "اَللّٰهمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وعَلَى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik ‘alaihi wa ‘ala âlihi",
        translation:
          "Ya Allah limpahkanlah rahmat keagungan, keselamatan, serta keberkahan kepada Nabi dan keluarganya.",
      },
    ],
    //Halaman 8
    [
      {
        translation: "Pasal Delapan (الفصل الثامن)",
      },
      {
        arabic:
          "وُلِدَ الْحَبِيْبُ فَخَرَّ حَالًا سَاجِدًا لِلّٰهِ مَنْ أَنْشَأَنَا وَبَرَانَا",
        latin:
          "Wulidal-ḫabîbu fakharra ḫâlan sâjidan lillâhi man ansya'anâ wa barânâ",
        translation:
          "Ketika sang kekasih ﷺ lahir, beliau ﷺ tertunduk dalam kondisi bersujud kepada Allah yang telah menghidupkan serta menciptakan kita.",
      },
      {
        arabic:
          "وَرِعَايَةُ الْمَوْلَى تُحِيْطُ بِأَحْمَدَ فِيْ كُلِّ حِيْنٍ بَاطِنًا وَعَيَانَا",
        latin:
          "Wa ri‘âyatul-maulâ tuḫithu bi aḫmada fî kulli ḫînin bâthinan wa ‘ayâna",
        translation:
          "Dan bimbingan sang pencipta selalu menaungi Ahmad ﷺ setiap waktu, secara tersembunyi dan terlihat kasat mata.",
      },
      {
        arabic:
          "قَدْ أَرْضَعَتْهُ الْأُمُّ ثُمَّ ثُوَيْبَـــــةٌ وَحَلِيْمَةٌ مَنْ سُعْدُهَا قَدْ بَانَا",
        latin:
          "Qad ardla‘athul-ummu tsumma tsuwaibatun wa ḫalîmatun man su‘duhâ qad bânâ",
        translation:
          "Beliau ﷺ disusui oleh ibunya dan diteruskan oleh Tsuwaibah ra kemudian Halimah ra yang telah jelas kebahagiaannya.",
      },
      {
        arabic:
          "قَدْ بَشَّرَتْ ثُوَيْبَةٌ سَيِّدَهَـــــا أَبَا لَهَبٍ أَعْتَقَهَا فَرْحَانَا",
        latin:
          "Qad basysyarat tsuwaibatun sayyidahâ abâ lahabin a‘taqahâ farḫânâ",
        translation:
          "Ketika Tsuwaibah menyampaikan berita kepada tuannya (tentang kelahiran Muhammad), Abu Lahab memerdekakannya sebagai tanda sukacita.",
      },
      {
        arabic:
          "لَمْ يَنْسَ خَالِقُنَا لَهُ فَرْحَتَـــهُ بِالْمُصْطَفَى وَبِذَا الْحَدِيْثُ أَتَانَا",
        latin:
          "Lam yansa khâliqunâ lahu farḫatahu bil-mushthafâ wa bidzâl-ḫaditsu atânâ",
        translation:
          "Tidaklah Tuhan yang Maha Pencipta lupa atas kesukacitaannya (Abu Lahab) dengan kelahiran al-Musthafa ﷺ, sebagaimana tercantum dalam hadits (riwayat Abbas bin Abdul Muthalib ra, di Shahih Bukhari).",
      },
      {
        arabic:
          "أَنَّ الْعَــذَابَ مُخَفَّفٌ فِيْ كُلِّ إثْـــنَيْنِ لِفَرْحَتِهِ بِمَنْ وَافَانَا",
        latin:
          "Annal-‘adzâba mukhaffafun fî kulli its naini lifarḫatihi biman wâfânâ",
        translation:
          "Bahwa siksaan Abu Lahab diringankan pada setiap hari Senin lantaran kegembiraannya atas (kelahiran) orang yang telah menunaikan kewajibannya kepada kita.",
      },
      {
        arabic:
          "هٰذَا مَعَ الْكُفْرِ فَكَيْفَ بِفَرْحَةٍ مِنْ ذِيْ فُؤَادٍ امْتَلَا إِيْمَانَا",
        latin:
          "Hâdzâ ma‘al-kufrri fakaifa bifarḫatin min dzî fu'âdin imtalâ îmâna",
        translation:
          "Demikianlah rahmat Allah terhadap orang kafir. Tak terbayangkan (anugerah) ketika kegembiraan itu muncul dari seorang mukmin yang hatinya dipenuhi keimanan.",
      },
      {
        arabic:
          "وَرَأَتْ حَلِيْمَةُ مَا قَدْ رَأَتْ مِنْ بَرَكَا تِ مُحَمَّدٍ مَا حَيَّرَ الْأَذْهَانَا",
        latin:
          "Wa ra'at ḫalîmatu mâ qad ra'at min barakâ ti muḫammadin mâ ḫayyaral-adzhânâ",
        translation:
          "Halimah ra menyaksikan sedemikian banyak keberkahan Muhammad ﷺ yang mencengangkan pikiran.",
      },
      {
        arabic:
          "دَرَّ لَهُ الثَّدْيُ وَقَدْ كَانَ ابْنُهَا يَبِيْتُ يَبْكِيْ مُسْغَبًا جَيْعَانَا",
        latin:
          "Darra lahuts-tsadyu wa qad kânab-nuhâ yabîtu yabkî musghaban jai‘ânâ",
        translation:
          "Di antaranya, air susu Halimah ra mengalir padahal sebelumnya anaknya sendiri pun pada malam hari menangis terus karena lapar (lantaran air susu Halimah tak keluar sama sekali sebab ia juga kelaparan).",
      },
      {
        arabic:
          "لَكِنَّهُ لَيْلَةَ أَنْ جَــاءَ الْحَبِيْـــــبُ بَاتَ مَوْفُوْرَ الرِّضَا شَبْعَانَا",
        latin:
          "Lakinnahu lailata an jâ`al-ḫabî bu bâta maufûrar-ridlâ syab’ânâ",
        translation:
          "Akan tetapi malam itu, sejak kedatangan sang kekasih ﷺ, putra kandung Halimah ra tidur pulas dan kenyang (karena air susunya mengalir dengan derasnya).",
      },
      {
        arabic:
          "وَدَرَّتِ النَّاقَةُ أَلْبَانًـــــا وَقَدْ سَمُنَتْ دُوَيْبَتُهَا فَكَانَ شَانَا",
        latin:
          "Wa darratin-nâqatu albânan wa qad sanumat duwaibatuhâ fakâna syânâ",
        translation:
          "Dan mengalir pulalah air susu untanya, lalu binatang menjadi gemuk dan sehat.",
      },
      {
        arabic:
          "أَنْكَرَهُ رِفْقَتُـهَـــــا وَسَــــلَّمَتْ أَشْجَارٌ أَحْجَارٌ عَلَى مَوْلَانَا",
        latin: "Ankarahu rifqatuhâ wa sallamat asyjârun aḫjârun ‘alâ maulânâ",
        translation:
          "Hal ini membingungkan teman-teman yang bersamanya (Halimah ra). Pepohonan dan bebatuan pun memberi salam kepada pemimpin kita ﷺ.",
      },
      {
        arabic:
          "سُبْحَانَ مَنْ أَنْطَـقَ أَشْجَارًا وَأَحْـــ ـجَارًا تُحَيِّي الْمُصْطَفَى سُبْحَانَا",
        latin:
          "Subḫâna man athlaqa asyjâran wa aḫ jâran tuḫayyil-mushthafâ subḫâna",
        translation:
          "Mahasuci Allah yang telah membuat pepohonan dan bebatuan berbicara, sebagai penghormatan kepada sang terpilih ﷺ. Mahasucilah Dia ﷻ.",
      },
      {
        arabic:
          "يَا رَبَّنَا صَــلِّ وَسَلِّمْ دَائِمًــــــا عَلَى حَبِيْبِكَ مَنْ إِلَيْكَ دَعَانَا",
        latin:
          "Ya rabbanaâ shalli wa sallim dâ`iman ‘alâ ḫabîbika man ilaika da’ânâ",
        translation:
          "Wahai Tuhan kami, limpahkanlah rahmat dan keselamatan selamanya pada kekasih-Mu yang telah menyeru kami kepada-Mu.",
      },
    ],
    [
      {
        translation: "Pasal Sembilan (الفصل التاسع)",
      },
      {
        arabic:
          "هٰذَا وَقَدْ نَشَأَ الْحَبِيْبُ بِسِيْرَةٍ مَرْضِيَّةٍ وَمَا أَتَى عِصْيَانَا",
        latin:
          "Hâdzâ wa qad nasya'al-ḫabîbu bisîratin mardliyyatin wa mâ atâ ‘ishyânâ",
        translation:
          "Sang kekasih ﷺ tumbuh dewasa dalam rentang sejarah yang penuh keridhaan. Tidaklah beliau ﷺ berbuat maksiat sama sekali.",
      },
      {
        arabic:
          "تَرْعَــــاهُ عَيْنُ اللهِ مَنْ أَدَّبَــــهُ أَحْسَنَ تَأْدِيْبَ النَّبِيِّ إِحْسَانَا",
        latin: "Tar‘âhu ‘ainullâhi man addabahu aḫsana ta'dîban-nabiyyi iḫsânâ",
        translation:
          "Nabi ﷺ hidup dalam bimbingan Allah yang telah mendidik budi pekerti beliau ﷺ dengan sebaik-baik budi pekerti kenabian.",
      },
      {
        arabic:
          "فَنَشَا صَدُوْقًا مُحْسِنًا ذَا عِفَّةٍ وَفُتُوَّةٍ وَأَمَانَةٍ مِعْوَانَا",
        latin:
          "Fanasyâ shadûqan muḫsinan dzâ ‘iffatin wa futuwwatin wa amânatin mi‘wânâ",
        translation:
          "Nabi ﷺ tumbuh sebagai pribadi yang amat jujur, gemar berbuat baik, mampu mengendalikan diri, dermawan, amanah, suka menolong.",
      },
      {
        arabic:
          "ذَا هِمَّــــةٍ وَشَجَــــاعَـةٍ وَتَوَقُّــــرٍ وَمَكَارِمٍ لَا تَحْتَصِي حُسْبَانَا",
        latin:
          "Dzâ himmatin wa syajâ‘atin wa tawaqqurin wa makârimin lâ taḫtashî ḫusbânâ",
        translation:
          "Pemilik semangat, keberanian, ketenangan, serta segala bentuk sifat mulia yang tak terhitung banyaknya.",
      },
      {
        arabic:
          "دُعِيَ الْأَمِيْنُ وَهُوَ فِيْ أَهْلِ السَّمَا نِعْمَ الْأَمِيْنُ لَهُ الْمُهَيْمِنُ صَانَا",
        latin:
          "Du‘iyal-amînu wa huwa fî ahlis-samâ ni‘mal-amînu lahul-muhaiminu shânâ",
        translation:
          "Beliau ﷺ digelari “al-amin” (yang tidak pernah berbohong) dan bagi penduduk langit ia beliau adalah ni'mal amîn (sebaik-baik orang yang tidak pernah berbohong). Yang Maha Memelihara senantiasa melindunginya.",
      },
      {
        arabic:
          "ذَهَبَتْ بِـــــهِ الْأُمُّ تَزُوْرُ أَبَـــــاهُ فِيْ طَيْبَةَ إِذْ فِيْهَا الْحِمَامُ كَانَا",
        latin:
          "Dzahabat bihil-ummu tazûru abâhu fî thaibata idz fîhâl-ḫimâmu kânâ",
        translation:
          "Ibunda Nabi ﷺ membawanya berziarah ke makam ayah beliau ﷺ (Sayyid Abdullah) di Thaibah (Madinah) karena di sanalah sang ayah wafat.",
      },
      {
        arabic:
          "وَالْمُصْطَفَى فِيْ بَطْنِـهَـــــا وَقَدْ أَتَى عَلَيْهِ سِتٌّ مِنْ سِنِيْهِ الْآنَا",
        latin:
          "Wal-mushthafâ fî bathnihâ wa qad atâ ‘alaihi sittun min sinîhil-ânâ",
        translation:
          "Nabi pilihan (saat sang ayah beliau wafat) masih dalam kandungan ibunya. Beliau mendatangi pusara sang ayah ketika usianya enam tahun.",
      },
      {
        arabic:
          "وَقَدْ أَتَاهَا الْمَوْتُ حِيْنَ رُجُوْعِهَا فَحَبَاهُ عَبْدُ الْمُطَّلِبِ حَنَانَا",
        latin:
          "Wa qad atâhal-mautu ḫîna rujû‘ihâ fahâbâhu ‘abdul-muthallibi ḫanânâ",
        translation:
          "Sang ibunda wafat dalam perjalanan pulang. Beliau ﷺ pun diasuh oleh Abdul Muthalib dengan penuh kasih sayang.",
      },
      {
        arabic:
          "سَنَتَيْنَ وَافَـــــاهُ الْحِمَـــــامُ فَضَمَّـــــهُ عَمٌّ مَلَا الْعَطْفُ عَلَيْهِ جَنَانَا",
        latin:
          "Sanataini wâfâhul-ḫimâmu fadlammahu ‘ammun malal-‘uthfu ‘alaihi janânâ",
        translation:
          "Dua tahun kemudian Abdul Muthalib pun wafat. Beliau ﷺ lalu diasuh pamannya, Abu Thalib, dengan penuh kelembutan.",
      },
      {
        arabic:
          "خَطَبَتْهُ بِنْتُ خُوَيْلِدٍ فِي الْخَمْسِ وَالْــ ــعِشْرِيْنَ حَازَتْ بِالْمُشَفَّعِ شَانَا",
        latin:
          "Khathabat hu bintu khuwailidin fil-khamsi wal ‘isyrîna ḫâzat bil-musyaffa‘i syânâ",
        translation:
          "Beliau ﷺ dilamar oleh Sayyidah Khadijah binti Khuwailid saat beliau ﷺ berusia 25 tahun, karena ia (Khadijah) telah mendengar keajaiban-keajaiban pada diri sang pemberi syafaat ﷺ.",
      },
      {
        arabic:
          "قَدْ حَقَّقَ الْمَوْلَى لَهَـــــا آمَـالَهَـــــــا نَالَتْ سَلَامًا عَالِيًا وَمَكَانَا",
        latin:
          "Qad ḫaqqaqal-maulâ lahâ âmâlahâ nâlat salâman ‘âliyan wa makânâ",
        translation:
          "Allah mengabulkan cita-citanya. Ia (Khadijah ra) pun mendapatkan kesejahteraan dan martabat yang mulia.",
      },
      {
        arabic:
          "وَحَلَّ مُشْكِلَةً لِوَضْعِ الْحَجَـرِ الْــــ أَسْوَدِ في الْكَعْبَةِ حَيْثُ أَبَانَا",
        latin:
          "Wa ḫalla musykilatan liwad‘il-ḫajari al aswadi fil-ka‘bati ḫaitsu abânâ",
        translation:
          "Kemudian beliau ﷺ menyelesaikan masalah (persengketaan kelompok) terkait peletakan Hajar Aswad setelah renovasi Ka'bah.",
      },
      {
        arabic:
          "عَنْ سَعَةَ الْعَقْلِ وَوَقَّادِ الْحِجَـــا سُبْحَانَ مَنْ عَلَّمَهُ وَأَعَانَا",
        latin:
          "‘an sa‘atal-‘aqli wa waqqâdil-ḫijâ subḫâna man ‘allamahu wa a‘ânâ",
        translation:
          "(Beliau mengurai konflik itu) dengan kejeniusan dan akal yang cemerlang. Mahasuci Allah yang telah mengajarinya dan menaunginya ﷺ.",
      },
      {
        arabic:
          "يَا رَبَّنَــــا صَــــلِ وَسَــــلِّمْ دَائِمًـــــــا عَلَى حَبِيْبِكَ مَنْ إِلَيْكَ دَعَانَا",
        latin:
          "Yâ rabbanâ shalli wa sallim da'iman ‘alâ ḫabîbika man ilaika da‘ânâ",
        translation:
          "Wahai Tuhan kami, limpahkanlah rahmat dan keselamatan selamanya, pada kekasih-Mu yang telah menyeru kami kepada-Mu.",
      },
      {
        arabic: "اَللّٰهمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَيْهِ وعَلَى اٰلِهِ",
        latin: "Allâhumma shalli wa sallim wa bârik ‘alaihi wa ‘ala âlihi",
        translation:
          "Ya Allah limpahkanlah rahmat keagungan, keselamatan, serta keberkahan kepada Nabi dan keluarganya.",
      },
      {
        arabic:
          "وَأَتَاهُ جِبْرِيْـــلُ بِوَحْيِ اللهِ فِيْ غَارِ حِرَاءِ يَعْبُدُ الرَّحْمٰنَ",
        latin: "Wa atâhu jibrîlu biwaḫyillâḫi fî ghâri ḫirâ'i ya‘budur-raḫmâna",
        translation:
          "Jibril as datang pada beliau ﷺ membawa wahyu Allah di gua Hira’ ketika beliau ﷺ beribadah kepada (Allah) ar-Rahman.",
      },
      {
        arabic:
          "وَضَمَّــــهُ الثَّـلَاثَ ثُمَّ أَرْسَلــَهُ اِقْرَأْ وَرَبُّكَ عَلَّمَ الْإِنْسَانَا",
        latin:
          "Wa dlammahuts-tsalâtsa tsumma arsalahu iqra wa rabbuka ‘allamal-insânâ",
        translation:
          "Jibril as memeluknya sebanyak tiga kali lalu melepaskannya, (dan berkata) bacalah demi Tuhanmu yang memberi ilmu pada manusia.",
      },
      {
        arabic:
          "فَدَعَا ثَلَاثًا فِيْ خَفَا فَأَتَاهُ أَنْ اِصْدَعْ بِمَا تُؤْمَرْ بِهِ إِعْلَانَا",
        latin:
          "Fada‘â tsalâtsan fî khafâ fa'atâhu an ishda‘ bimâ tu’mar bihi i‘lânâ",
        translation:
          "Lalu beliau ﷺ berdakwah dengan sembunyi-sembunyi selama tiga tahun hingga datangnya instruksi dari Allah “Sampaikanlah terang-terangan segala yang diperintahkan kepadamu”.",
      },
      {
        arabic:
          "كَثُرَ الْأَذَى وَهُوَ الصَّبُوْرُ لِرَبِّهِ وَهُوَ الشَّكُوْرُ وَكَانَ لَا يَتَوَانَى",
        latin:
          "Katsural-adzâ wa huwash-shabûru lirabbihi wa huwasy-syakûru wa kâna lâ yatawânâ",
        translation:
          "Datanglah bertubi-tubi berbagai gangguan. Namun, beliau ﷺ sangat sabar terhadap ketentuan Tuhannya, dan beliau ﷺ pandai bersyukur, dan tidak kendor dalam menjalankan misi dakwahnya.",
      },
      {
        arabic:
          "مَاتَتْ خَدِيْجَةُ وَأَبُوْ طَالِبٍ فِي الْـ ـخَمْسِيْنَ فَاشْتَدَّ الْأَذَاءُ فُنُوْنَا",
        latin:
          "Mâtat khadîjatu wa abû thâlibin fil khamsîna fasytaddal-adzâ'u funûnâ",
        translation:
          "Kemudian wafatlah istrinya, Khadijah ra dan Abu Thalib (pamannya) ketika usia Nabi ﷺ genap 50 tahun. Sehingga semakin dahsyatlah gangguan yang beraneka ragam.",
      },
      {
        arabic:
          "وَأَتَى ثَقِيْفًــــا دَاعِيًـــا فَرَمَوْهُ بِالْــ أَحْجَارِ بَلْ أَغْرَوْا بِهِ الصِّبْيَانَا",
        latin:
          "Wa atâ tsaqîfan dâ‘iyan faramauhu bil aḫjâri bal aghrau bihish-shibyânâ",
        translation:
          "Beliau ﷺ berkunjung ke (Bani) Tsaqifah (Tha'if) untuk berdakwah. Di sana beliau ﷺ dilempari batu, bahkan digoda oleh anak-anak kecil.",
      },
      {
        arabic:
          "مَلَكُ الْجِبَالِ أَتَى فَقَالَ اطْبِقُهَا فَقَالَ لَا، بَلْ أَرْتَجِي الْعُقْبَانَا",
        latin:
          "Malakul-jibâli atâ faqâlath-biquhâ faqâla lâ, bal artajil-‘uqbânâ",
        translation:
          "Datanglah malaikat penguasa gunung dan berkata: “Apakah kutimpakan (gunung Uhud) di atas mereka (Bani Tsaqifah)?” Beliau ﷺ berkata: Tidak! Bahkan aku berharap generasi mereka di kemudian hari (mendapat petunjuk).",
      },
      {
        arabic:
          "أَسْرَى بِهِ الْمَوْلَى وَصَـــلَّى خَلْفَــهُ الرُّ سْلُ وَشَاهَدَ بَرْزَخًا وَجِنَانَا",
        latin:
          "Asrâ bihil-maulâ wa shalla khalfahur-ru slu wa syâhada barzakhan wa jinânâ",
        translation:
          "Lalu Sang Maha Pencipta memperjalankan beliau ﷺ (ke Masjidil Aqsha), lalu para rasul bermakmum di belakangnya, yang beliau ﷺ kemudian menyaksikan (alam) barzakh dan surga.",
      },
      {
        arabic:
          "عَرَجَ الْحَبِيْبُ إِلَى السَّمٰوَاتِ الْعُلَى وَالْعَرْشِ وَالْكُرْسِيْ رَأَى مَوْلَانَا",
        latin:
          "‘arajal-ḫabîbu ilas-samawâtil-‘ulâ wal-‘arsyi wal-kursiyyî ra'â maulânâ",
        translation:
          "Naiklah sang kekasih ﷺ menembus langit-langit tertinggi, al-Arsy, dan al-Kursi, lalu berjumpa dengan Sang Tuan kita.",
      },
      {
        arabic:
          "وَالْإِذْنُ بِالْهِجْرَةِ جَاءَ لِيَثْرِبٍ فَبِهِ ازْدَهَى الْبَلَدُ الْكَرِيْمُ وَزَانَا",
        latin:
          "Wal-idznu bil-hijrati jâ'a liyatsribin fabihiz-dahal-baladul-karîmu wa zânâ",
        translation:
          "Tibalah izin untuk hijrah ke Yatsrib (Madinah). Berkat Nabi ﷺ negeri itu bangkit dan menjadi indah.",
      },
      {
        arabic:
          "فَأَقَامَ عَشْرًا دَاعِيًا وَمُجَـاهِدًا وَصَحَابُهُ كَانُوْا لَهُ أَعْوَانَا",
        latin:
          "Fa aqâma ‘asyran dâ’iyan wa mujâhidan wa shâḫâbuhu kânû lahu a‘wânâ",
        translation:
          "Nabi ﷺ pun bermukim di Madinah selama sepuluh tahun sebagai dai dan pejuang dengan dukungan para sahabatnya.",
      },
      {
        arabic:
          "لَا يَرْفَعُوْنَ إِذَا أَتَى أَصْوَاتَهُـــمْ بَلْ لَا يُحِدُّوْنَ الْبَصَرْ إِمْعَانَا",
        latin:
          "Lâ yarfa‘ûna idzâ atâ ashwâtahum bal lâ yuḫiddûnal-bashar im‘ânâ",
        translation:
          "Mereka (para sahabat) tidaklah meninggikan suara ketika di hadapan beliau ﷺ. Bahkan tak berani memandang beliau ﷺ.",
      },
      {
        arabic:
          "قَدْرًا وَتَعْظِيْمًا لِشَأْنِ مُحَمَّـدٍ إِذْ قَدْ تَلَوْا فِيْ فَضْلِهِ قُرْاٰنَا",
        latin:
          "Qadran wa ta‘dhîman lisya'ni muḫammadin idz qad talau fî fadllihi qur'ânâ",
        translation:
          "(Sikap itu) sebagai penghormatan dan pengagungan terhadap keutamaan Nabi Muhammad ﷺ yang telah mereka baca dan temukan dalam Al-Qur'an.",
      },
      {
        arabic:
          "وَلَقَدْ رَأَوْا مِنْ خُلُقِهِ عَجَبًـا وَكَمْ قَدْ شَاهَدُوْا مَاحَيَّرَ الْأَذْهَانَا",
        latin:
          "Wa laqad ra'aû min khuluqihi ‘ajaban wa kam qad syâhadû mâ ḫayyaral-adzhânâ",
        translation:
          "Sungguh mereka telah melihat sesuatu yang menakjubkan dari budi pekerti beliau dan banyak pula mereka menyaksikan hal yang sukar dijangkau akal pikiran (mukjizat).",
      },
      {
        arabic:
          "كَرَمًا وَعَفْوًا وَالسَّخَا وَتَوَاضُعًـا وَالْجِذْعَ حَنَّ مَحَبَّةً وَحَنَانَا",
        latin:
          "Karaman wa ‘afwan was-sakhâ wa tawâdlu‘an wal-jidz‘a ḫanna maḫabbatan wa ḫanânâ",
        translation:
          "Mereka menyaksikan kemurahhatiannya, sikap pemaafnya, kedermawanannya, dan kerendahhatiannya—batang kurma pun menangis rindu karena cintanya terhadap Nabi ﷺ.",
      },
      {
        arabic:
          "وَالْمَـــاءَ مِنْ بَيْنِ الْأَصَابِعِ نَابِعًا وَالْجَيْشَ أَضْحَى شَارِبًا رَيَّانَا",
        latin:
          "Wal-mâ'a min bainil-ashâbi‘i nâbi‘an wal-jaisya adlhâ syâriban rayyânâ",
        translation:
          "Mereka juga menyaksikan air memancar dari sela-sela jarinya ﷺ, lalu pasukan (sahabat beliau ﷺ) meminumnya hingga hilanglah dahaga mereka semuanya.",
      },
      {
        arabic:
          "وَاللهِ قَدْ عَظُمَتْ مَعَاجِزُ أَحْمَدٍ رَفَعَ الْمُهَيْمِنُ لِلنَّبِيِّ مَكَانَا",
        latin:
          "Wallâhi qad ‘adhumat ma‘âjizu aḫmadin rafa‘al-muhaiminu lin-nabiyyi makânâ",
        translation:
          "Demi Allah, mukjizat-mukjizat Ahmad ﷺ itu mulia. Sang Maha Memelihara telah mengangkat Nabi ﷺ ke derajat yang setinggi-tingginya.",
      },
      {
        arabic:
          "وَلَقَدْ غَزَا سَبْعًا وَعِشْرِيْنَ مَعَ الصَّـ ـحْبِ رِجَالًا قَدْ مَشَوْا رُكْبَانَا",
        latin:
          "Wa laqad ghazâ sab‘an wa isyrîna ma‘ash-sha- ḫbi rijâlan qad masyau rukbânâ",
        translation:
          "Beliau ﷺ telah berjihad selama hidupnya sebanyak 27 kali bersama para sahabatnya dengan berjalan kaki atau berkendara dalam kafilah.",
      },
      {
        arabic:
          "أَكْرِمْ بِـــهِ وَبِصَـحْبِــــهِ وَبِتَـــــابِعٍ يَا رَبِّ أَلْحِقْنَا بِهِمْ إِحْسَانَا",
        latin:
          "Akrim bihi wa bishaḫbihi wa bitâbi‘in yâ rabbi al-ḫiqnâ bihim iḫsânâ",
        translation:
          "Muliankanlah Nabi ﷺ, para sahabatnya, serta para tabi'in. Wahai Tuhan kami jadikan kami mengikuti jejak mereka dalam perbuatan baik.",
      },
      {
        arabic:
          "يَا رَبَّنَــــا صَــــلِّ وَسَــــلِّمْ دَائِمًــــــا عَلَى حَبِيْبِكَ مَنْ إِلَيْكَ دَعَانَا",
        latin:
          "Yâ rabbânâ shalli wa sallim da'iman ‘alâ ḫabîbika man ilaika da‘ânâ",
        translation:
          "Wahai Tuhan kami, limpahkanlah rahmat dan keselamatan selamanya pada kekasih-Mu yang telah menyeru kami kepada-Mu.",
      },
    ],
    [
      {
        translation: "Pasal Sepuluh (الفصل العاشر) : Doa",
      },
      {
        arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
        latin: "Bismillâhirraḫmânirraḫîmi",
        translation:
          "Dengan menyebut nama Allah yang Maha Pengasih lagi Maha Penyayang.",
      },
      {
        arabic:
          "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ، اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْأَوَّلِيْنَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْآخِرِيْنَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي النَّبِيِّيْنَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْمُرْسَلِيْنَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْـمَـلَأِ الْأَعْلَى إِلَى يَوْمِ الدِّيْنِ وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِيْنَ",
        latin:
          "Al-ḫâmdulillâhi rabbil-‘âlamîna, allâḫumma shalli wa sallim ‘alâ sayyidinâ muḫâmmadin fil-awwalîn, wa shalli wa sallim ‘alâ sayyidinâ muḫammadin fil-âkhirîna, wa shalli wa sallim ‘alâ sayyidina muḫammadin fin-nabiyyîna, wa shalli wa sallim ‘alâ sayyidina muḫammadin fil-mursalîna, wa shalli wa sallim ‘alâ sayyidina muḫammadin fil-malâ'il-a‘lâ ilâ yaumid-dîni, wa shalli wa sallim ‘alâ sayyidina muḫammadin wa ‘alâ âlihi wa shaḫbihi ajma‘îna.",
        translation:
          "Segala puji bagi Allah Tuhan seluruh keberadaan. ”Ya Allah, limpahkanlah rahmat dan keselamatan kepada junjungan kami Nabi Muhammad ﷺ bersama orang-orang permulaan, limpahkanlah rahmat dan keselamatan kepada junjungan kami Nabi Muhammad ﷺ bersama orang-orang terakhir, dan limpahkanlah rahmat dan keselamatan kepada junjungan kami Nabi Muhammad ﷺ bersama para nabi, limpahkanlah rahmat dan keselamatan kepada junjungan kami Nabi Muhammad ﷺ bersama para rasul, serta limpahkanlah rahmat dan keselamatan kepada junjungan kami Nabi Muhammad ﷺ bersama para nabi orang-orang yang memiliki kemuliaan sampai hari kiamat. Limpahkanlah rahmat dan keselamatan kepada junjungan kami Nabi Muhammad ﷺ, keluarga, dan sahabatnya secara keseluruhan.",
      },
      {
        arabic:
          "وَلَقَدْ أَشَرْتُ لِنَعْتِ مَنْ أَوْصَافُهُ تُحْيِي الْقُلُوْبَ تُهَيِّجُ الْأَشْجَانَا",
        latin:
          "Wa laqad asyartu lina‘ti man aushâfuhu tuḫyil-qulûba tuhayyijul-asyjânâ",
        translation:
          "Telah kutunjukkan sifat-sifat Nabi ﷺ yang menghidupkan hati, mengguncang aneka kegelisahan.",
      },
      {
        arabic:
          "وَاللهُ قَدْ أَثْنَى عَلَيْهِ فَمَا يُسَــا وِيْ الْقَوْلُ مِنَّا أَوْ يَكُوْنُ ثَنَانَا",
        latin:
          "Wallâhu qad atsnâ ‘alaihi famâ yusâ wil-qaulu minnâ au yakûnu tsanâyâ",
        translation:
          "Allah telah memuji Nabi Muhammad. Lantas apalah artinya pujian kita dan bagaimana (pujian kita ini) dinamakan pujian?",
      },
      {
        arabic:
          "كِنَّ حُبًّا فِي السَّرَائِرِ قَدْ دَعَا لِمَدِيْحِ صَفْوَةِ رَبِّنَا وَحَدَانَا",
        latin:
          "Kinna ḫubban fis-sarâ'iri qad da‘â limadîḫi shafwati rabbinâ wa ḫadânâ",
        translation:
          "Akan tetapi cinta kasih dalam sanubari telah memanggil dan mendorong kita untuk memuji hamba pilihan Sang Pencipta kita.",
      },
      {
        arabic:
          "وَإِذِ امْتَزَجْنَا بِالْمَوَدَّةِ هَهُنَـــا نَرْفَعُ أَيْدِيْ فَقْرِنَا وَرَجَانَا",
        latin:
          "Wa idzim-tazajnâ bil-mawaddati hahunâ narfa‘u aidî faqrinâ wa rajânâ",
        translation:
          "Setelah kita berpadu dengan cinta (terhadap Nabi ﷺ) maka di sinilah kita menengadahkan kedua tangan kefakiran kita untuk berdoa dengan penuh harap",
      },
      {
        arabic:
          "لِلْوَاحِدِ الْأَحَدِ الْعَلِيِّ إِلٰـهِنَـــا مُتَوَسِّلِيْنَ بِمَنْ إِلَيْهِ دَعَانَا",
        latin:
          "Lil-wâḫidil-aḫadil-‘aliyyi ilâhinâ mutawassilîna biman ilaihi da‘ânâ",
        translation:
          "Kepada Tuhan yang Mahatunggal, Maha Esa, lagi Mahamulia melalui perantara sosok yang telah menyeru kita kepada-Nya (Nabi Muhammad ﷺ)",
      },
      {
        arabic:
          "مُخْتَــــارِهِ وَحَبِيْبِــهِ وَصَفِيِّـــهِ زَيْنِ الْوُجُوْدِ بِهِ الْإِلٰهُ حَبَانَا",
        latin:
          "Mukhtârihi wa ḫabîbihi wa shafiyyihi zainil-wujûdi bihil-ilâhu ḫabânâ",
        translation:
          "Hamba-Nya yang terpilih, kekasih-Nya, hamba tersayangnya, dan sebaik-baik ciptaan di alam semesta yang lantaran beliau ﷺ Allah memberkahi kita.",
      },
      {
        arabic:
          "يَا رَبَّنَـــــا يَا رَبَّنَـــــا يَا رَبَّنَـــــا بِالْمُصْطَفَى اقْبَلْنَا أَجِبْ دَعْوَانَا",
        latin:
          "Yâ rabbanâ yâ rabbanâ yâ rabbanâ bil-mushthafâq-balnâ ajib da‘wânâ",
        translation:
          "Wahai Tuhan kami, wahai Tuhan kami, wahai Tuhan kami, demi nabi yang terpilih terimalah kami dan kabulkanlah doa kami.",
      },
      {
        arabic:
          "أَنْتَ لَنَا أَنْتَ لَنَــا يَا ذُخْرَنَا فِيْ هٰذِهِ الدُّنْيَا وَفِيْ أُخْرَانَا",
        latin:
          "Anta lanâ anta lanâ yâ dukhranâ fî hâdzihid-dunyâ wa fî ukhrânâ",
        translation:
          "Hanya engkaulah harapan kami, hanya engkaulah harapan kami, wahai satu-satunya tempat memohon dan harapan di dunia dan di akhirat kami.",
      },
      {
        arabic:
          "أَصْلِحْ لَنَا الْأَحْوَالَ وَاغْفِرْ ذَنْبَنَــــا وَلَا تُؤَاخِذْ رَبِّ إِنْ أَخْطَانَا",
        latin:
          "Ashliḫ lanal-aḫwâla waghfir dzanbanâ wa lâ tu'âkhidz rabbi in akhthânâ",
        translation:
          "Perbaikilah keadaan kami dan ampunilah dosa-dosa kami dan janganlah Engkau murkai kami apabila kami berbuat kesalahan.",
      },
      {
        arabic:
          "وَاسْلُكْ بِنَا فِيْ نَهْجِ طَهَ الْمُصْطَفَى ثَبِّتْ عَلَى قَدَمِ الْحَبِيْبِ خُطَانَا",
        latin:
          "Wasluk binâ fî nahji thahal-mushthafâ tsabbit ‘alâ qadamil-ḫabîbi khuthânâ",
        translation:
          "Tetapkanlah kami dalam jalan ajaran Thâhâ sang terpilih ﷺ dan mantapkanlah langkah-langkah kami pada jalur yang telah dilalui oleh sang kekasih.",
      },
      {
        arabic:
          "أَرِنَا بِفَضْلٍ مِنْكَ طَلْعَةَ أَحْمَدِ فِيْ بَهْجَةٍ عَيْنُ الرِّضَا تَرْعَانَا",
        latin:
          "Arinâ bifadlli minka thal‘ata aḫmadi fî bahjatin ‘ainur-ridlâ tar‘ânâ",
        translation:
          "Dengan anugerah-Mu, perlihatkanlah kami wajah Ahmad ﷺ dalam keindahan yang menggembirakan. Pandangan penuh keridhaan selalu menaungi kami.",
      },
      {
        arabic:
          "وَارْبُطْ بِهِ فِيْ كُلِّ حَالٍ حَبْلَنَا وَحِبَالَ مَنْ وَدَّ وَمَنْ وَالَانَا",
        latin:
          "Warbuth bihi fî kulli ḫâlin ḫablanâ wa ḫibâla man wadda wa man wâlânâ",
        translation:
          "Ikatlah kami selalu dengan beliau ﷺ dalam segala gerak- gerik kami, dan juga orang-orang yang mencintai dan mendukung kami.",
      },
      {
        arabic:
          "وَالْمُحْسِنِيْنَ وَمَنْ أَجَابَ نِدَاءَنَا وَذَوِي الْحُقُوْقِ وَطَالِبًا أَوْصَانَا",
        latin:
          "Wal-muḫsinîna wa man ajâba nidâ'anâ wa dzawil-ḫuqûqi wa thâliban aushânâ",
        translation:
          "Demikian pula orang-orang yang beramal shalih, orang-orang yang mendengar dakwah kami, orang yang kami berutang budi pada mereka, dan orang-orang yang memohon nasihat dari kami.",
      },
      {
        arabic:
          "وَالْحَاضِرِيْنَ وَسَاعِيًـــا فِيْ جَمْعِنَــــا هَانَحْنُ بَيْنَ يَدَيْكَ أَنْتَ تَرَانَا",
        latin:
          "Wal-ḫâdlirîna wa sâ’iyan fî jam’inâ hâ naḫnu baina yadaika anta tarânâ",
        translation:
          "Juga atas para hadirin dan penyelenggara dalam perkumpulan kami. (Ya Allah) inilah kami di hadapan-Mu dan Engkau senantiasa melihat kami.",
      },
      {
        arabic:
          "وَلَقَدْ رَجَوْنَــــاكَ فَحَــــقِّقْ سُؤْلَنَــــا وَاسْمَعْ بِفَضْلِكَ يَا سَمِيْعُ دُعَانَا",
        latin:
          "Wa laqad rajaunâka faḫaqqiq su'lanâ wasma‘ bifadllika yâ samî‘u du‘ânâ",
        translation:
          "Sungguh kami mengharapkan-Mu maka kabulkanlah permohonan kami dan dengan anugerah-Mu dengarlah doa kami, wahai Yang Maha Mendengar",
      },
      {
        arabic:
          "وَانْصُرْ بِنَـــــا سُنَّـــةَ طَهَ فِيْ بِقَــــــا عِ الْأَرْضِ وَاقْمَعْ كُلَّ مَنْ عَادَانَا",
        latin:
          "Wanshur binâ sunnata thaha fî biqâ ‘il-ardli waqma‘ kulla man ‘âdânâ",
        translation:
          "Jadikan kami sebagai penolong sunnah Thâhâﷺ di seluruh pelosok bumi, dan hancurkanlah semua yang memusuhi kami.",
      },
      {
        arabic:
          "وَانْظُرْ إِلَيْنَا وَاسْقِنَا كَأْسَ الْـهَنَا وَاشْفِ وَعَافِ عَاجِلًا مَرْضَانَا",
        latin:
          "Wandhur ilainâ wasqinâ ka'sal-hanâ wasyfi wa ‘âfi ‘âjilan mardlânâ",
        translation:
          "Pandanglah kami dengan kasih sayang-Mu dan berilah kami minuman dari cangkir-cangkir (kecintaan pada Nabi ﷺ) dan segera sembuhkanlah penyakit kami.",
      },
      {
        arabic:
          "وَاقْضِ لَنَا الْحَاجَاتِ وَاحْسِنْ خَتْمَنَا عِنْدَ الْمَمَاتِ وَأَصْلِحْنَ عُقْبَانَا",
        latin:
          "Waqdli lanal-ḫâjâti waḫsin khatmanâ ‘indal-mamâti wa ashliḫna ‘uqbanâ",
        translation:
          "Kabulkanlah hajat-hajat kami dan akhirilah hidup kami dengan kebaikan (husnul khatimah) dan jadikanlah kebaikan pula di hari kemudian.",
      },
      {
        arabic:
          "يَا رَبِّ وَاجْمَعْنَــــا وَأَحْبَــابًا لَنَـــــا فِيْ دَارِكَ الْفِرْدَوْسِ يَا رَجْوَانَا",
        latin:
          "Yâ rabbi waj-ma‘nâ wa aḫbâban lanâ ۞ fî dârikal-firdausi yâ rajwânâ",
        translation:
          "Wahai Tuhan, kumpulkanlah kami bersama kekasih-kekasih kami di surga firdaus-Mu, wahai satu-satunya harapan kami (Allah).",
      },
      {
        arabic:
          "بِالْمُصْـطَفَى صَـــــلِّ عَلَيْــــهِ وَآلِهِ مَاحَرَّكَتْ رِيْحُ الصَّبَا أَغْصَانَا",
        latin:
          "Bil-mushthafâ shalli ‘alaihi wa âlihi mâ ḫarrakat rîḫush-shabâ aghṣânâ",
        translation:
          "Demi hamba terpilih ﷺ, limpahkanlah rahmat kepada Nabi dan keluarganya sebanyak semilir angin pagi yang menggerak-gerakkan dahan pepohonan.",
      },
      {
        arabic:
          "سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ، وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ، وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَـــــالَمِيْنَ",
        latin:
          "Subḫâna rabbika rabbil-‘izzati ‘ammâ yashifûna, wa salâmun ‘alal-mursalîna, wal-ḫamdulillâhi rabbil-‘âlamîna.",
        translation:
          "Mahasuci Tuhanmu yang Maha Memiliki kekuasaan, dari apa yang mereka sifatkan. Semoga keselamatan tercurah kepada para rasul. Segala puji bagi Allah pemilik seluruh keberadaan.",
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
