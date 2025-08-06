document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    // Halaman 1
    [
      {
        translation: "1. Assalâmu ‘alaika zainal-anbiyâ’i",
      },
      {
        arabic:
          "السَّـــلَامُ عَلَيْـــكَ زَيْنَ الْأَنْبِيَـــــاءِ السَّلَامُ عَلَيْكَ أَتْقَى الْأَتْقِيَــــاءِ",
        latin:
          "Assalâmu ‘alaika zainal-anbiyâ’i Assalâmu ‘alaika atqal-atqiyâ’i",
        translation:
          "Keselamatan semoga tercurah untukmu, wahai sebaik-baiknya nabi. Keselamatan semoga tetap tercurah kepadamu, wahai setakwa-takwanya orang bertakwa.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ أَصْفَى الْأَصْفِيَـاءِ السَّلَامُ عَلَيْكَ أَزْكَى الْأَزْكِيَاءِ",
        latin:
          "Assalâmu ‘alaika ashfal-‘ashfiyâ’i Assalâmu ‘alaika azkal-azkiyâ’i",
        translation:
          "Keselamatan semoga tercurah untukmu, wahai sebersih-bersihnya orang yang bersih. Keselamatan semoga tercurah untukmu, wahai sesuci-sucinya orang yang suci.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ مِنْ رَّبِ السَّمَاءِ السَّلامُ عَلَيْكَ دَامَ بِلَا انْقِضَاءِ",
        latin:
          "Assalâmu ‘alaika min rabbis-samâ’i Assalâmu ‘alaika dâma bilân-qidlâ’i",
        translation:
          "Keselamatan semoga tercurah untukmu dari Tuhan penguasa langit. Keselamatan semoga tercurah untukmu selama-lamanya tanpa henti.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ أَحْمَــدُ يَــا حَبِيْبِيْ السَّلَامُ عَلَيْكَ طٰــــهٰ يَـــا طَبِيْبِيْ",
        latin:
          "Assalâmu ‘alaika aḫmadu yâ ḫabîbi Assalâmu ‘alaika thâhâ yâ thabîbî",
        translation:
          "Keselamatan semoga tetap tercurah kepadamu, wahai Ahmad, wahai kekasihku. Keselamatan semoga tetap tercurah kepadamu, wahai Thaha, wahai dokterku.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا مِسْكِيْ وَطِيْبِيْ السَّلَامُ عَلَيْكَ يَا مَاحِيَ الذُّنُوْبِ",
        latin:
          "Assalâmu ‘alaika yâ miskî wathibî Assalâmu ‘alaika yâ mâ ḫiyadz-dzunûbi",
        translation:
          "Keselamatan semoga tercurah untukmu, wahai misikku, wahai pewangiku. Keselamatan semoga tercurah untukmu, wahai penghapus dosa-dosa.",
      },
      {
        arabic:
          "السَّلامُ عَلَيْكَ يَــا عَوْنَ الْغَرِيْبِ السَّلَامُ عَلَيْكَ أَحْمَــدُ يَـــا مُحَــمَّدْ",
        latin:
          "Assalâmu ‘alaika yâ ‘aunal-gharîbi Assalâmu ‘alaika aḫmadu yâ muḫammad",
        translation:
          "Keselamatan semoga tercurah untukmu, wahai penolong orang yang asing. Keselamatan semoga tercurah untukmu, wahai Ahmad, wahai Muhammad.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ طٰــــهٰ يَـــا مُمَجَّـــدْ السَّلَامُ عَلَيْكَ يَا كَهْفًــــا وَمَقْصَدْ",
        latin:
          "Assalâmu ‘alaika yâ thâhâ yâ mumajjad Assalâmu ‘alaika yâ kahfan wa maqshad",
        translation:
          "Keselamatan semoga tercurah untukmu, wahai nabi yang diagungkan. Keselamatan semoga tercurah untukmu, wahai tempat perlindungan, wahai sosok yang dituju.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا حُسْنًا تَفَرَّدْ السَّلَامُ عَلَيْكَ يَا جَـــالِي الْكُرُوْبِ",
        latin:
          "Assalâmu ‘alaika yâ ḫusnan tafarrad Assalâmu ‘alaika yâ jâlil-karûbi",
        translation:
          "Keselamatan semoga tercurah untukmu, wahai nabi yang menyendiri dengan kebaikan. Keselamatan semoga tercurah untukmu, wahai pembuka segala kemelut.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا خَــيْرَ الْأَنَامِ السَّلَامُ عَلَيْكَ يَا بَدْرَ التَّمَـــامِ",
        latin:
          "Assalâmu ‘alaika yâ khairal-anâmi Assalâmu ‘alaika yâ badrat-tamâmi",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai makhluk terbaik. Keselamatan semoga tetap tercurah untukmu, wahai purnama kesempurnaan.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَـا نُوْرَ الظَّلَامِ السَّلَامُ عَلَيْكَ يَا كُلَّ الْمَـــرَامِ",
        latin:
          "Assalâmu ‘alaika yâ nûradh-dhalâmi Assalâmu ‘alaika yâ kullal-murâmi",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai cahaya penerang kegelapan. Keselamatan semoga tetap tercurah untukmu, wahai seluruh harapan.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا ذَا الْمُعْجِزَاتِ السَّلَامُ عَلَيْكَ يَـــا ذَا الْبَيِّنَاتِ",
        latin:
          "Assalâmu ‘alaika yâ dzal-mu‘jizâti Assalâmu ‘alaika yâ dzal-bayyinâti",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai pemilik mukjizat. Keselamatan semoga tetap tercurah untukmu, wahai pemilik bukti-bukti.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا هَــادِي الْهُـدَاةِ السَّلَامُ عَلَيْكَ يَا ذُخْرَ الْعُصَــاةِ",
        latin:
          "Assalâmu ‘alaika yâ hâdil-hudâti Assalâmu ‘alaika yâ dukhral-‘ushâti",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai pemberi petunjuk para pemberi petunjuk. Keselamatan semoga tetap tercurah untukmu, wahai simpanan (yang dibutuhkan) orang-orang maksiat.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا حَسَنَ الصِّفَاتِ السَّلَامُ عَلَيْكَ يَا ذَا الْمَوْهِبَاتِ",
        latin:
          "Assalâmu ‘alaika yâ ḫasânash-shifâti Assalâmu ‘alaika yâ dzal-mauhibâti",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai pemilik sifat-sifat yang baik. Keselamatan semoga tetap tercurah untukmu, pemilik berbagai anugerah.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا رُكْنَ الصَّـلَاحِ السَّلَامُ عَلَيْكَ يَا رَبَّ السَّمَـــاحِ",
        latin:
          "Assalâmu ‘alaika yâ ruknash-shalâḫi Assalâmu ‘alaika rabbas-samâḫi",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai pilar kesalehan. Keselamatan semoga tetap tercurah untukmu, wahai pemilik sifat toleran.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَـا زَيْنَ الْمِــــلَاحِ السَّلَامُ عَلَيْكَ دَاعِي الْفَـــلَاحِ",
        latin:
          "Assalâmu ‘alaika yâ zainal-milâḫi Assalâmu ‘alaika dâ‘iyal-falâhi",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai sebaik-baiknya orang baik. Keselamatan semoga tetap tercurah untukmu, wahai pengajak kebahagiaan.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا نُوْرَ الصَّبَاحِ السَّلَامُ عَلَيْكَ يَا نَجْمَ الْفَلَاحِ",
        latin:
          "Assalâmu ‘alaika yâ nûrash-shabâḫi Assalâmu ‘alaika yâ najmal-falâḫi",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai cahaya subuh. Keselamatan semoga tetap tercurah untukmu, wahai bintang kemenangan.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا ضَوْءَ الْبَصَائِرِ السَّلَامُ عَلَيْكَ يَا عَالِيَ الْمَفَــاخِرِ",
        latin:
          "Assalâmu ‘alaika yâ dlau’al-bashâ’iri Assalâmu ‘alaika yâ ‘aliyal-mafâkhiri",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai cahaya mata hati. Keselamatan semoga tetap tercurah untukmu, wahai yang tinggi keunggulannya.",
      },
      {
        arabic:
          "السَّلَامُ عَلَيْكَ يَا بَحْرَ الذَّخَــــائِرِ السَّلَامُ عَلَي الْمُقَدَّمِ لِلْإِمَــامَةِ",
        latin:
          "Assalâmu ‘alaika yâ baḫradz-dzakhâ’iri Assalâmu ‘alaika ‘alal-muqaddami lil-imâmati",
        translation:
          "Keselamatan semoga tetap tercurah untukmu, wahai samudera simpanan. Keselamatan semoga tercurah kepada yang dimajukan untuk memimpin.",
      },
      {
        arabic:
          "السَّلَامُ عَلَي الْمُشَفَّعِ فِي الْقِيَامَةِ السَّلَامُ عَلَى الْمُظَلَّلِ بِالْغَمَامَةِ",
        latin:
          "Assalâmu ‘alal-musyaffa‘i fil-qiyâmati Assalâmu ‘alal-mudhallali bil-ghamâmati",
        translation:
          "Keselamatan semoga tercurah kepada nabi sang pemilik syafa‘at pada hari Kiamat. Keselamatan semoga tercurah kepada nabi yang dinaungi awan.",
      },
      {
        arabic:
          "السَّلَامُ عَلَى الْمُتَوَّجِ بِالْكَرَامَـــةِ السَّلَامُ عَلَى الْخُلَاصَةِ مِنْ تِهَــامَةِ",
        latin:
          "Assalâmu ‘alal-mutawwaji bil-karâmati Assalâmu ‘alal-khulâshati min tihâmi",
        translation:
          "Keselamatan semoga tercurah kepada nabi yang dimahkotai dengan kemuliaan. Keselamatan semoga tetap terlimpah kepada nabi yang merupakan inti dari negeri Tihamah (Makkah).",
      },
      {
        arabic:
          "السَّلَامُ عَلَى الْمُبَشِّرِ بِالسَّلَامَـةِ السَّــــلَامُ عَلَى مُحَـــمَّدٍ اࣙلرَّسُـوْلِ",
        latin:
          "Assalâmu ‘alal-mubasysyari bis-salâmati Assalâmu ‘ala muḫammadinir-rasûli",
        translation:
          "Keselamatan semoga tercurah kepada nabi yang diberi kabar keselamatan. Keselamatan semoga terlimpah kepada Nabi Muhammad sang rasul.",
      },
      {
        arabic:
          "السَّـلَامُ عَلَى النَّـــبِيِّ أَبِيْ الْبَــتُوْلِ السَّلَامُ عَلَيْكَ يَا وَجْهَ الْجَمِيْلِ",
        latin:
          "Assalâmu ‘alan-nabiyyi abil-batûli Assalâmu ‘alaika yâ wajhal-jamîli",
        translation:
          "Keselamatan semoga tercurah kepada nabi ayah (Fatimah) sang gadis. Keselamatan semoga tercurah kepada nabi pemilik wajah tampan.",
      },
      {
        arabic:
          "السَّـلَامُ عَلَى الخَلِيْفَةِ مِنْكَ فِيْنَا أَبِيْ بَكْرٍ مُبِيْدِ الْجَـــــاحِدِيْنَـــــا",
        latin:
          "Assalâmu ‘alal-khalîfati minka fînâ Abî bakrin mubîdil-jâḫidînâ",
        translation:
          "Keselamatan semoga tetap tercurah kepada khalifahmu di antara kami, yakni Abu Bakar sang penghancur para pendusta.",
      },
      {
        arabic:
          "وَكَــذَا عُمَــــــرَ وَلِيِّ الصَّــــالِحِيْنَـــــا وَذِي النُّوْرَيْنِ رَأْسِ النَّاسِكِيْنَا",
        latin:
          "Wa kadzâ ‘umara waliyyish-shâliḫînâ Wa dzin-nûraini ra’sin-nâsikînâ",
        translation:
          "Pun demikian kepada Umar pemimpin orang-orang saleh, serta kepada Utsman pemilik dua cahaya, pemimpin para ahli ibadah.",
      },
      {
        arabic:
          "وَكَــذَاكَ عَلِيٍّ ࣙالسَّــــــامِيْ يَقِيْنَــــــا وَكَذَاكَ الْحَسَنَيْنِ خَيْرِ الْعَـــالَمِينَ",
        latin:
          "Wa kadzaka ‘aliyyinis-sâmî yaqînâ Wa kadzâkal-ḫasanaini khairil-‘âlamîna",
        translation:
          "Tak terkecuali kepada Ali yang luhur keyakinannya. Begitu pun kepada Hasan dan Husain, dua makhluk terbaik.",
      },
      {
        arabic:
          "السَّلَامُ عَلَى أَصْحَــابِكَ أَجْمَعِيْنَـا وَاٰلِكَ كُلِّهِمْ وَالتَّابِعِيْنَا وَتَابِعِهِمْ وَتَابِعِ التَّابِعِيْنَا",
        latin:
          "Assalâmu ‘ala ashḫâbika ajma‘înâ Wa âlika kullihim wat-tâbi‘înâ wa tâbi‘ihim wa tâbi‘it-tâbi‘înâ",
        translation:
          "Keselamatan semoga tetap tercurah kepada seluruh sahabatmu. Serta kepada seluruh keluarga, seluruh tabi‘in dan pengikutnya, serta pengikut dari pengikutnya.",
      },
    ],

    //Halaman 2
    [
      {
        translation: "2. Ashalâtu ‘alan-nabiyyi was-salâmu ‘alar-rasûlisy",
      },
      {
        arabic:
          "الصَّـلَاةُ عَلَى النَّبِي وَالسَّلَامُ عَلَى الرَّسُوْلِ الشَّفِــيْعِ الْأَبْطَحِيْ وَمُحَـمَّدْ عَرَبِيْ",
        latin:
          "Ashalâtu ‘alan-nabiyyi was-salâmu ‘alar-rasûlisy Asy-syafî‘il-abthaḫî wa muḫammad ‘arabî",
        translation:
          "Rahmat semoga tercurah kepada Nabi dan salam semoga tercurah kepada Rasul, sang pemberi syafaat yang luas arenanya, yakni Muhammad yang berbangsa Arab.",
      },
      {
        arabic:
          "خَيْرُ مَنْ وَطِئَ الثَّرَى الْمُشَفَّعُ فِي الْوَرَى مَنْ بِهِ حُلَّتْ عُرَى كُلِّ عَبْدٍ مُذْنِبِ",
        latin:
          "Khairu man wathi’ats-tsaral-musyaffa‘u fil-wara man bihi ḫullat ‘ura kulli ‘abdin mudznibi",
        translation:
          "Dialah sebaik-baik orang yang memijak bumi, dan sebaik-baik pemberi syafaat kepada manusia. Karenanya seluruh aib para pendosa menjadi terhiasi.",
      },
      {
        arabic:
          "مَا لَهُ مِنْ مُّشْبِهِ فَازَ أُمَّتُهُ بِهِ مَنْ يَمُتْ فِيْ حُبِّهِ نَـــالَ كُلَّ الْمَطْلَبِ",
        latin:
          "Mâ lahu min musybihi fâza ummatuhu bihi man yamut fî ḫubbihi nâla kullil-mathlabi",
        translation:
          "Tiada seorang yang menyerupainya. Umat berjaya cemerlang karenanya. Siapa pun yang mati dalam kecintaan kepadanya, maka tercapailah segala yang dikehendakinya.",
      },
      {
        arabic:
          "أَنَــا مَفْتُوْنٌ بِهِ طَامِعٌ فِيْ قُرْبِهِ رَبِّ عَجِّلْ لِيْ بِهِ عَـــلَّ يَصْفُوْ مَشْرَبِيْ",
        latin:
          "Anâ maftûnun bihi thâmi‘un fî qurbihi rabbi ‘ajjil lî bihi ‘alla yashfû masyrabî",
        translation:
          "Aku terpesona olehnya, sangat mendambakan kedekatan bersamanya. Ya Tuhanku, segerakanlah bagiku bertemu dengannya, agar hatiku tenang karenanya.",
      },
      {
        arabic:
          "كَمْ شَفَى مِنْ مُّسْقَـمٍ كَـمْ جَـــلَا مِنْ ظُلَمِ كُمْ لَهُ مِنْ أَنْعُــــــمٍ لِلْفَطِــيْنِ وَالْغَبِيْ",
        latin:
          "Kam syafa min musqamin kam jalâ min dhulami kam lahu min an‘umin lil-fathîni wal-ghabî",
        translation:
          "Betapa banyak yang sembuh dari penyakit. Betapa banyak yang lepas dari kegelapan. Betapa besarnya ia menjadi kenikmatan bagi yang cerdas dan bodoh.",
      },
      {
        arabic:
          "كَمْ لَهُ مِنْ مُكْرَمَاتْ كَمْ عَطَايَا وَافِرَاتْ كمْ رَوَتْ عَنْهُ الثِقَاتُ كُلَّ عِلْمٍ وَاجِبِ",
        latin:
          "Kam lahu min mukramât kam ‘athâyâ wâfirât kam rawat ‘anhuts-tsiqâtu kulla ‘ilmin",
        translation:
          "Betapa banyak kemuliaan untuknya. Betapa melimpah anugerah untuknya. Betapa banyak orang terpercaya yang meriwayatkan ilmu wajib darinya.",
      },
      {
        arabic:
          "نِعْمَ ذَاكَ الْمُصْطَفَى ذُوا الْمُرُوْءَةِ وَالْوَفَــا فَضْلُ أَحْمَدَ مَا اخْتَفَى شَرْقَهَا وَالْمَغْرِبِ",
        latin:
          "Ni‘ma dzâkal-mushthafâ dzul-murûati wal-wafâ fadllu aḫmada mâkh-tafâ syarrafahâ wal-maghribi",
        translation:
          "Sungguh ia sebaik-baiknya orang pilihan, pemilik kehormatan dan kebaikan. Keutamaan Ahmad tidak pernah samar, baik di timur maupun di barat.",
      },
      {
        arabic:
          "كَمْ بِــهِ مِنْ مُّوْلَعٍ غَـارِقٍ فِي الْأَدْمُعِي عَقْــلُهُ لَمَّــا دُعِيْ فِي مَحبَّتِــهِ سُبِيْ",
        latin:
          "Kam bihi min mûla‘in ghâriqin fil-admu‘î ‘aqluhu lammâ du‘iya fî maḫabbatihi subi",
        translation:
          "Betapa banyak orang yang mencinta tenggelam dalam derai air mata, akalnya saat dipanggil tersandera dalam cintanya.",
      },
      {
        arabic:
          "يَا رَسُولَ اللهِ يَا خَــيْرَ كُلِّ الْأَنْبِيَــاءِ نَجِّنَا مِنْ هَاوِيَةْ يَا زَكِيَّ الْمَنْصِبِ",
        latin:
          "Yâ Rasûlallahi yâ khaira kullil-anbiyâ’i najjinâ min hâwiyat yâ zakiyal-manshibi",
        translation:
          "Wahai Rasulullah, wahai sebaik-baiknya seluruh nabi, selamatkanlah kami dari neraka Hawiyah, wahai yang indah martabatnya.",
      },
      {
        arabic:
          "وَعَلَى شَمْسِ الْهُدَى أَحْمَدَ مُفْنِي الْعِـــدَا جُــدْ بِتَسْــلِيْمٍ بَدَا لِلنَّبِيِّ الْيَـــثْرِبِيْ",
        latin:
          "Wa ‘ala syamsil-huda aḫmada mufnil-‘idâ jud bitaslîmin badâ lin-nabiyyil-yatsribi",
        translation:
          "Rahmat semoga tercurah kepada mentari petunjuk, yakni Ahmad sang penghapus permusuhan. Karuniakanlah, ya Allah, kesejahteraan kepada Nabi yang dari Yatsrib (Madinah).",
      },
      {
        arabic:
          "وَعَلَيْهِ فَسَلِّمَا مَاسَ غُصْنٌ فِي الْحِمَى أَوْ بَدَا بَدْرُ السَّمَا فِي بَهِيْمِ الْغَيْهَبِيْ",
        latin:
          "Wa ‘alaihi fasallimâ mâsa gushnun fil-ḫima au badâ badrus-samâ fî bahîmil-ghaihabî",
        translation:
          "Keselamatan semoga tercurah kepadanya selagi ada dahan yang melambai. Dan selama bulan purnama di langit malam yang gemerlapan.",
      },
    ],

    //Halaman 3
    [
      {
        translation: "3. Innâ fataḫnâ laka fat-ḫam mubînâ",
      },
      {
        arabic:
          "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُبِيْنًا لِيَغْفِرَ لَكَ اللهُ مَا تَقَدَّمَ مِنْ ذَنْبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهٗ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُسْتَقِيْمًا وَيَنْصُـرَكَ اللهُ نَـصْرًا عَزِيْزًا (الفتح: ١-٣)",
        latin:
          "innâ fataḫnâ laka fat-ḫam mubînâ liyaghfira lakallâhu mâ taqaddama min dzambika wa mâ ta'akhkhara wa yutimma ni‘matahû ‘alaika wa yahdiyaka shirâtham mustaqîmâ wa yanshurakallâhu nashran ‘azîzâ (al-Fath:1-3)",
        translation:
          "Sesungguhnya Kami telah menganugerahkan kepadamu kemenangan yang nyata. agar Allah memberikan ampunan kepadamu (Nabi Muhammad) atas dosamu yang lalu dan yang akan datang, menyempurnakan nikmat-Nya atasmu, menunjukimu ke jalan yang lurus, dan agar Allah menolongmu dengan pertolongan yang besar. (Al-Fath:1-3)",
      },
      {
        arabic:
          "لَقَدْ جَآءَكُمْ رَسُوْلٌ مِنْ أَنْفُسِكُمْ عَزِيْزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيْصٌ عَلَيْكُمْ بِالْمُؤْمِنِيْنَ رَؤٗفٌ رَّحِيْمٌ فَإِنْ تَوَلَّوْا فَقُلْ حَسْبِيَ اللهُ لَآإِلٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ (التوبة: ١٢٨-١٢٩)",
        latin:
          "Laqad jâ'akum rasûlum min anfusikum ‘azîzun ‘alaihi mâ ‘anittum ḫarîshun ‘alaikum bil-mu'minîna ra'ûfur raḫîm fa in tawallau fa qul ḫasbiyallâhu lâ ilâha illâ huw, ‘alaihi tawakkaltu wa huwa rabbul-‘arsyil-‘adhîm (At-Taubah: 128-129)",
        translation:
          "Sungguh, benar-benar telah datang kepadamu seorang rasul dari kaummu sendiri. Berat terasa olehnya penderitaan yang kamu alami, sangat menginginkan (keimanan dan keselamatan) bagimu, dan (bersikap) penyantun dan penyayang terhadap orang-orang mukmin. Jika mereka berpaling (dari keimanan), katakanlah (Nabi Muhammad), “Cukuplah Allah bagiku. Tidak ada tuhan selain Dia. Hanya kepada-Nya aku bertawakal dan Dia adalah Tuhan pemilik ‘Arasy (singgasana) yang agung.” (At-Taubah: 128-129)",
      },
      {
        arabic:
          "صَدَقَ اللهُ الْعَظِيْمُ وَبَلَّغَ رَسُوْلُهُ النَّبِيُّ الْحَبِيْبُ الْكَرِيْمُ، وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَـــالَمِيْنَ",
        latin:
          "Shadaqallâhul-‘adhîmu wa balagha rasûluhun-nabiyyul-ḫabîbul-karîmu, wal-ḫamdulillâḫi rabbil’âlamîn(a).",
        translation:
          "Mahabenar Allah yang Mahaagung. Dan telah menyampaikan Rasul-Nya sang nabi tercinta yang sangat mulia. Segala puji bagi Allah tuhan seluruh alam.",
      },
      {
        arabic:
          "إِنَّ اللهَ وَمَلَآئِكَتَهٗ يُصَلُّوْنَ عَلَى النَّبِيِّ يَآأَيُّهَــــا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًـــا (الأحزاب: ٥٦)",
        latin:
          "innallâha wa malâ'ikatahû yushallûna ‘alan-nabiyy, yâ ayyuhalladzîna âmanû shallû ‘alaihi wa sallimû taslîmâ (Al-Aḫzâb:56)",
        translation:
          "Sesungguhnya Allah dan para malaikat-Nya berselawat untuk Nabi. Wahai orang-orang yang beriman, berselawatlah kamu untuk Nabi dan ucapkanlah salam dengan penuh penghormatan kepadanya. (Al-Aḫzab: 56)",
      },
      {
        arabic: "وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَـــالَمِيْنَ",
        latin: "Wal-ḫamdulilâhi rabbil-‘alamîn(a)",
        translation: "Segala puji bagi Allah, Tuhan semesta alam.",
      },
    ],

    //Halaman 4
    [
      {
        translation: "4. Alḫamdulillâhil ladzi syarrafal",
      },
      {
        arabic:
          "الْحَمْدُ لِلّٰهِ الَّذِيْ شَرَّفَ الْأَنَامَ بِصَاحِبِ الْمَقَامِ الْأَعْلَى وَكَمَّلَ السُّعُوْدَ بِأَ كْرَمِ مَوْلُوْدٍ حَوَى شَرَفًا وَفَضْلًا وَشَرَّفَ بِهِ الْأَبَاءَ وَالْجُدُوْدَ وَمَلَأَ الْوُجُوْدَ بِجُوْدِهِ عَدْلًا حَمَلَتْهُ أُمُّهُ اٰمِنَةُ فَلَمْ تَجِدْ لِحَمْلِهِ أَلَمًا وَلَا ثِقَلًا وَوَضَعَتْهُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مَخْتُوْنًا مُكَحَّلًا فِي خِلَعِ الْوَقَارِ وَالْمَهَابَةِ يُجْلَى وَوُلِدَ نَبِيُّنَا مُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ  بِوَجْهٍ مَّا يُرَى أَحْسَنُ مِنْهُ وَلَا أَحْلَى بِنُوْرٍ كَالشَّمْسِ بَلْ هُوَ أَضْوَءُ وَأَجْلَى وَثَغْرٍ فَاقَ دُرًّا وَلُؤْلُؤًا بَلْ هُوَ أَعْلَى وَأَغْلَى وَطَافَ بِهِ لَيْلَةَ الْإِسْرَاءِ وَتَمَلَّى وَجَعَلَ دِيْنَهُ عَلَى الدَّوَامِ مُسْتَعْلِيًّا لَا مُسْتَعْلًا وَذِكْرَهُ عَلَى مَمَرِّ الْأَيَّامِ يُكَرَّرُ وَيُتْلَى أَشْرَقَتْ لِمَوْلِدِهِ الْحَنَادِسُ شَرْقًا وَغَرْبًا وَوَعْرًا وَسَهْلًا وَخَرَّتْ لِمَوْلِدِهِ الْأَصْنَامُ مِنْ أَعْلَى الْمَجَالِسِ خُضُوْعًا وَذُلًّاوَارْتَجَّ إِيْوَانُ كِسْرَى وَهُوَ جَالِسٌ فَعَدِمَ الْقَوْمُ نُطْقًا وَعَقْلًا وَخَمِدَتْ نَارُ فَارِسَ وَتَبَدَّدَ مِنْهُمْ جَمْعًا وَشَمْلًا وَزُخْرِفَتِ الْجِنَانُ لَيْلَةَ مَوْلِدِهِ وَاطَّلَعَ الْحَقُّ وَتَجَلَّى وَنَادَتِ الْكَائِنَاتُ مِنْ جَمِيعِ الْجِهَاتِ أَهْلًا وَسَهْلًا ثُمَّ أَهْلًا وَسَهْلًا أَلْفَ صَلُّوْا عَلَى النَّبِيِّ خَاتَمِ الرُّسُلِ الْكِرَامِ",
        latin:
          "Al-ḫamdulillâhil-ladzi syarrafal-anâma bishâbil-maqâmil-a‘lâ. Wa kamalas-su‘uda biakrami maulûdi ḫawa syarafan wa fadllan. Wa syarrafa bihil-abâ’a wal-judûda wa mala’al-wujûda bi wujûdihi ‘adlan. Ḫamalathu ummuhu Âminata falam tajud liḫamlihi alaman wa lâ tsiqâlan. Wa wadla‘athu shallallâhu ‘alaihi wa sallama makhtûnan mukaḫḫala fi khila‘il-waqâri wal0mahâbati yujlâ. Wa wulida nabiyyunâ Muḫammadun shallallâhu ‘alaihi wa sallama. Bi wajhin mâ yurâ aḫsanu minhu wa lâ aḫla. Binûrin kasy-syamsi bal huwa adlwa’u wa ajlâ. Wa tsagri fâqa durrân wa lu’lu’an bal huwa a’lâ wa aghlâ. Wa thâfa bihi lailatal-isrâ’i wa tamallâ. Wa ja‘ala dînahu ‘alad-dawâmi musta’liyyan lâ musta‘lan. Wa dzikrahu ‘ala mamarril-ayyâmi yukarraru wa yutlâ. Asyraqat limaulidihil-ḫanâdisu syarqan wa gharban wa wa‘ran wa sahlan. Wakharrat limaulidihil-ashnâmu min a‘lal-majâlisi khdlu‘an wa dzullan. Wartajja îwânu kisrâ wa huwa jâlisun fa‘adimal-qaumu nuthqan wa ‘aqlan. Wa khadimat nâru fârisa wa tabaddada minhum jam‘an wa syamlan. Wa zukhrifatil-jinânu lailata maulidihi wath-thala‘al-ḫaqqu wa tajallâ. Wa nâdatil-kâ’inâtu min jamî‘il-jihâti ahlan wa sahlan tsumma ahlan wa sahlan. Alfa shallû ‘alan-nabiyyi khâtamir-rusulil-kirâmi.",
        translation:
          "Segala puji bagi Allah, Dzat yang telah memuliakan seluruh makhluk melalui nabi pemilik kedudukan tertinggi ini. Dzat yang menyempurnakan kebahagiaan dengan semulia-mulianya bayi yang dilahirkan yang menghimpun kemuliaan dan keutamaan. Dzat yang dengannya memuliakan para ayah dan kakeknya, dan memenuhi semesta dengan keadilan karena kemurahannya. Ibunda Aminah mengandung janin sang nabi tanpa lelah dan payah sedikit pun. Lantas ia melahirkannya dalam keadaan sudah terkhitan dan tercelak mata serta keadaan tubuh yang luar biasa, hingga keistimewaan pun tampak. Nabi kita Muhammad ﷺ dilahirkan dengan wajah terindah yang belum pernah terlihat sebelumnya dan cahayanya tidak bisa diredupkan oleh cahaya matahari. Ia bagai mentari, bahkan lebih bercahaya dan lebih terang, dengan gigi berkilau laksana permata dan mutiara, bahkan lebih tinggi dan lebih bernilai. Pada malam isra, Allah mengelilingkannya dan memperlihatkannya pada keindahan. Allah juga menjadikan agamanya luhur selamanya tak pernah terkalahkan. Namanya selalu diulang-ulang dan dibaca sepanjang masa. Berkat kelahirannya, teranglah semua yang gelap, baik di timur maupun di barat, pekat ataupun samar. Karena kelahirannya, berhala-berhala tersungkur dari atas tempat duduknya dalam keadaan rendah dan hina. Singgasana Kisra yang sedang diduduki pun tiba-tiba berguncang. Orang-orang terdiam heran. Api sesembahan orang Majusi di Persia juga padam. Orang-orang berhamburan dan berpencar. Di malam itu pula, surga-surga bersolek. Kebenaran telah terbit dan terang benderang. Semesta menyeru dari segala penjuru, “Ahlan wasahlan, ahlan wasahlan (selamat datang).” Seribu kali, bershalawatlah kalian kepada Nabi, penutup para rasul yang mulia.",
      },
    ],

    //Halaman 5
    [
      {
        translation: "5. Lâ ilâha illallâh",
      },
      {
        arabic:
          "لَا إِلٰهَ إِلَّا اللهُ، لَا إِلٰهَ إِلَّا اللهُ، لَا إِلٰهَ إِلَّا اللهُ، زَجَّ الْغَفَرَ",
        latin:
          "Lâ ilâha illallâh, Lâ ilâha illallâh, Lâ ilâha illallâh, Zajjal-ghaafar",
        translation:
          "Tiada Tuhan selain Allah, Tiada Tuhan selain Allah, Tiada Tuhan selain Allah. Zat yang menyingkirkan kesalahan.",
      },
      {
        arabic:
          "بِشَهْـــرِ رَبِيـعِ قَـــدْ بَدَا نُورُهُ الْأَعْــلَى فَيَا حَبَّذَا بَدْرًا بِذَاكَ الْحِمَى يُجْلَى",
        latin:
          "Bisyahri rabiisyahri rabi‘ wad badâ nûruhul-a‘la fayâ habbadzâ badran bidzâkal-ḫima yujla",
        translation:
          "Di bulan musim semi, muncullah cahayanya yang luhur. Purnama menyambutnya dengan sinar yang terang.",
      },
      {
        arabic:
          "أَنَارَتْ بِهِ الْأَكْوَانُ شَرْقًا وَمَغْرِبًا وَأَهْلُ السَّمَا قَالُوْ لَهُ مَرْحَبًا أَهْلًا",
        latin:
          "Anârat bihil-akwânu syarqan wa maghriban wa ahlus-samâ qâlu lahu marḫaban ahlan",
        translation:
          "Dengannya semesta menyinari timur dan barat. Penduduk langit tak henti berkata kepadanya, “Selamat datang.”",
      },
      {
        arabic:
          "وَأُلْبِسَ ثَوْبَ النُّوْرِ عِـزَّا وَرِفْعَـــــةً فَمَا مِثْلُهُ فِيْ خِلْعَةِ الْحُسْنِ يُسْتَحْلَى",
        latin:
          "Wa albisa tsauban-nûri ‘izzan wa rif‘atan famâ mitsluhu fî khil‘atil-ḫusni yustaḫla",
        translation:
          "Ia dipakaikan pakaian dari cahaya kemuliaan. Pakaian terbaik dan mulia tiada tara.",
      },
      {
        arabic:
          "وَلَمَّـــــا رَاٰهُ الْبَدْرُ حَـــــارَ لِحُسْنِـــهِ وَشَاهَدَ مِنْهُ بَهْجَةً تَسْلُبُ العَقْلَا",
        latin:
          "Wa lammâ ra’âhul-badru ḫara liḫusnihi wa syâhada minhu bahjatan taslubul-‘aqla",
        translation:
          "Saking indahnya bulan purnama pun seketika berputar manakala melihatnya. Menyaksikan kegembiraan yang nyaris merampas akal.",
      },
      {
        arabic:
          "وأُطْفِئَ نُوْرُ الشَّمْسِ مِنْ نُوْرِ وَجْهِهِ فَلِلّٰهِ مَـــا أَبْهَى وَلِلّٰهِ مَـــا أَجْـــلَى",
        latin:
          "Wa uthfi’a nûrusy-syamsi min nûri wajhihi fa lillâhi mâ abha wa lillâhi mâ ajla",
        translation:
          "Cahaya matahari pun seolah padam karena cahaya wajahnya. Allah-lah sang pemilik semua keelokan, Allah-lah sang pemilik segala yang terang benderang",
      },
      {
        arabic:
          "أَيَا مَوْلِدَ الْمُخْتَارِ جَدَّدْتَ شَوْقَنَا إِلَى خَيْرِ مَبْعُوْثٍ جَلِيْلٍ حَوَى الْفَضْلَا",
        latin:
          "Ayâ maulidal-mukhtâri jaddadtu syauqanâ ila khairi mab‘utsin jalîli ḫawal-fadllâ",
        translation:
          "Sungguh kelahiran pilihan kian menguatkan kerinduan kita terhadap utusan terbaik, mulia, nan istimewa.",
      },
      {
        arabic:
          "وَسَعْـــدًا مُقِيْمًـــــا بِـــافْتِخَـــــارٍ لِمَوْلِدٍ لَهُ خَـــــبَرٌ عَنْ حُسْنِهِ أَبَدًا يُتْـــــلَى",
        latin:
          "Wa sa‘dan muqîman biftikhârin limaulidin lahu khabarun ‘an ḫusnihi abadan yutla",
        translation:
          "Sungguh kebahagiaan nyata dan membanggakan dengan kelahirannya. Kabar tentang kebaikannya selalu dibacakan.",
      },
      {
        arabic:
          "عَلَيْهِ صَـــلَاةُ اللَّهُ مَـا هَبَّتِ الصَّبَا وَمَا سَارَ حَــادٍ بِالنِّيَاقِ إِلَى الْمَعْلَى",
        latin:
          "‘Alaihi shalâtullahi mâ habtish-shabâ wa mâ sâra ḫadin bin-niyâqi ilal-ma‘la",
        translation:
          "Rahmat Allah semoga tetap tercurah padanya selama api cinta masih menyala. Selama gembala unta-unta masih berjalan ke Ma’la.",
      },
    ],

    //Halaman 6
    [
      {
        translation: "6. Qauluhu ta‘ala",
      },
      {
        arabic:
          "قَوْلُهُ تَعَالَى: ) يٰٓاَيُّهَا النَّبِيُّ اِنَّآ اَرْسَلْنٰكَ شَاهِدًا وَّمُبَشِّرًا وَّنَذِيْرًا﴾ أَيْ شَاهِدًا لِلرُّسُلِ بِالتَّبْلِيغِ وَمُبَشِّرًا لِمَنْ اٰمَنَ بِالْجَنَّةِ وَنَذِيرًا لِمَنْ كَذَّبَ بِالنَّارِ ﴿وَدَاعِيًا إِلَى اللهِ﴾ أَيْ إِلَى تَوْحِيدِهِ وَطَاعَتِهِ ﴿ بِاِذْنِهٖ﴾ أَيْ بِأَمْرِهِ ﴿ وَسِرَاجًا مُّنِيْرًا﴾ سَمَّاهُ اللهَ سِرَاجًا لأَنَّهُ يُهْتَدَى بِهِ كَالسِّرَاجِ يُسْتَضَاءُ بِهِ فِي الظُّلْمَةِ ﴿ وَبَشِّرِ الْمُؤْمِنِيْنَ بِاَنَّ لَهُمْ مِّنَ اللّٰهِ فَضْلًا كَبِيْرًا﴾أَمَرَهُ اللهُ تَعَالَى أَنْ يُبَشِّرَ الْمُؤْمِنِيْنَ بِالْفَضْلِ الْكَبِيْرِ مِنَ sاللهِ عَزَّ وَجَلَّ وَقَدْ بَيَّنَ اللهُ تَعَالَى الْفَضْلَ الْكَبِيْرَ فِي قَوْلِهِ تَعَالَى: ﴿ وَالَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ فِيْ رَوْضَاتِ الْجَنَّاتِۚ لَهُمْ مَّا يَشَاۤءُوْنَ عِنْدَ رَبِّهِمْۗ ذٰلِكَ هُوَ الْفَضْلُ الْكَبِيْرُ﴾. قَوْلُهُ تَعَالَى ﴿وَلَا تُطِعِ الْكَافِرِيْنَ﴾ أَيْ مِنْ أَهْلِ مَكَّةَ ﴿وَالْمُنَافِقِينَ﴾ أَي مِنْ أَهْلِ الْمَدِينَةِ ﴿وَدَعْ أَذَاهُمْ﴾ قَالَ ابْنُ عَبَّاسِ وَقَتَادَةُ: مَعْنَاهُ اصْبِرْ عَلَى أَذَاهُمْ يَا مُحَمَّدُ، وَقَالَ الزَّجَّاجُ: أَيْ لَا تُجَازِهِمْ عَلَيْهِ، وَهٰذَا مَنْسُوخٌ بِاٰيَةِ الْقِتَالِ ﴿وَتَوَكَّلْ عَلَى اللهِ﴾ أَمَرَهُ بِالتَّوَكُّلِ عَلَيْهِ وَاٰنَسَهُ بِقَوْلِهِ ﴿وَكَفَى بِاللهِ وَكِيْلًا﴾ وَمَعْنَى وَكِيْلًا أَيْ حَافِظًا",
        latin:
          "Qauluhu ta‘ala: (yâ ayyuhan-nabiyyu innâ arsalnâka syâhidaw wa mubasysyiraw wa nadzîrâ) ai syâhidan lir-rusuli bit-tablîghi wa mubasysyiran liman âmana bil-jannati wa nadzîran liman kadzdzaba bin-nâri (wa dâ‘iyan ilallâhi) ai ila tauḫîdihi wa thâ‘atihi (bi bi'idznihî) ai bi amrihi (wa sirâjam munîrâ) sammâhullâha sirâjan li annahu yuhtada bihi kas-sirâji yustadlâ’u bihi fidh-dhulmati (wa basysyiril-mu'minîna bi'anna lahum minallâhi fadllang kabîrâ) * amarahullâhu ta‘ala an yubasysyiral-mu’minîna bil-fadllil-kabîri minallâhi ‘azza wa jalla wa qad bayyanallâhu ta‘alal-fadllal-kabîra fi qaulihi ta‘ala: (walladzîna âmanû wa ‘amilush-shâliḫâti fî raudlâtil-jannât, lahum mâ yasyâ'ûna ‘inda rabbihim, dzâlika huwal-fadllul-kabîr). Qauluhu ta‘ala (wa lâ tuthi‘il-kâfirîna) ai min ahli makkata (wal munâfiqîna) ai min ahlil-madînati (wa da‘ adzâhum) qâla Inbu ‘Abbas wa Qatâdatu: ma‘nâhush-bir ‘ala adzâhum yâ muḫammadu, wa qâla Az-Zajâju: ai lâ tujâzihim ‘alaihi, wa hâdzâ mansûkhun bi âyatil-qitâli (wa tawakkal ‘alallâhi) amarahu bit-tawakkuli ‘alaihi wa ânasahu biqaulihi (wa kafâ billâhi wakîla) wa ma‘na wakîlan ai ḫâfidhan.",
        translation:
          "Allah berfirman: (Wahai Nabi (Muhammad), sesungguhnya Kami mengutus engkau untuk menjadi saksi, pemberi kabar gembira, dan pemberi peringatan). Yakni saksi bagi para rasul dalam menyampaikan, pembawa kabar gembira bagi orang yang beriman, serta pemberi peringatan siksa neraka bagi orang yang mendustakan. (dan untuk menjadi penyeru kepada [agama] Allah). Yakni menyeru untuk menauhidkan dan menaati-Nya. (Atas izin-Nya). Yakni dengan perintah-Nya. (juga sebagai pelita yang menerangi). Allah menamai Nabi sebagai pelita karena ia senantiasa menerangi laksana lampu yang dipergunakan dalam kegelapan. (Sampaikanlah kabar gembira kepada orang-orang mukmin bahwa sesungguhnya bagi mereka karunia yang besar dari Allah). Artinya, Allah memerintahkan Nabi ﷺ untuk memberi kabar gembira kepada orang-orang mukmin berupa karunia besar dari Allah. Kaitan karunia besar dimaksud, Allah juga telah menjelaskan dalam firman-Nya: (Orang-orang yang beriman dan beramal saleh [akan bersenang-senang] di dalam taman-taman surga. Mereka mendapatkan apa yang mereka kehendaki di sisi Tuhan mereka. Yang demikian itu adalah karunia yang besar). Allah juga berfirman: (Janganlah engkau [Nabi Muhammad] menuruti orang-orang kafir). Yakni, orang-orang kafir dari penduduk Makkah. (dan orang-orang munafik itu). yakni orang-orang munafik dari penduduk Madinah. (biarkan [saja] gangguan mereka). Menurut Ibnu Abbas dan Qatadah, makna ayat ini adalah: Bersabarlah atas penderitaan dari mereka, wahai Muhammad. Kemudian, menurut az-Juzaj: maksudnya, jangan balas kelakuan mereka. Namun, ayat ini dimansukh dengan ayat perang. Allah berfirman: (Bertawakallah kepada Allah). Di sini Allah, memerintah Nabi ﷺ bertawakal serta menghiburnya dengan ayat: (Cukuplah Allah sebagai pemelihara). Wakil juga bermakna pelindung.",
      },
      {
        arabic:
          "رُوِيَ عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ أَنَّهُ قَالَ: كُنتُ نُوْرًا بَيْنَ يَدَيِ اللهِ تَعَالَى قَبْلَ أَنْ يَخْلُقَ اٰدَمَ بِأَلْفَيْ عَامٍ، يُسَبِّحُ اللهَ تَعَالَى ذٰلِكَ النُّورُ وَتُسَبِّحُ الْمَلَائِكَةُ بِتَسْبِيْحِهِ فَلَمَّا خَلَقَ اللهُ تَعَالَى اٰدَمَ أَلْقَى ذٰلِكَ النُّورَ فِيْ طِيْنَتِهِ. فَأَهْبَطَنِيَ اللَّهُ تَعَالَى فِيْ صُلْبِ اٰدَمَ إِلَى الْأَرْضِ، وَحَمَلَنِيْ فِي السَّفِينَةِ فِي صُلْبِ نُوحٍ، وَجَعَلَنِيْ فِي صُلْبِ إِبْرَاهِيمَ الْخَلِيلِ حِيْنَ قُذِفَ بِهِ إِلَى النَّارِ. وَلَمْ يَزَلْ يُنَقِّلُنِيْ مِنَ الْأَصْلَابِ الطَّاهِرَةِ إِلَى الْأَرْحَامِ الزَّكِيَةِ الْفَاخِرَةِ حَتَّى أَخْرَجَنِيَ اللهُ مِنْ بَيْنِ أَبَوَيَّ، وَلَمْ يَلْتَقِيَا عَلَى سِفَاحٍ قَطُّ",
        latin:
          "Ruwiya ‘anin-nabiyyi shallâhu ‘alaihi wa sallama annahu qâla: kuntu nûran baina yadayillâhi ta‘ala dzâlikan-nûru wa tusabbiḫul-malâ’ikatu bi tasbîḫihi falammâ khalaqallâhu ta‘ala Âdama alqa dzâlikan-nûru fî thinatihi. Fa ahbathaniyallâhu ta‘ala fî shulbi âdama ilal-ardli. Wa ḫamalanî fis-safînati fi shulbi nûḫi, wa ja‘alanî fî shulbi ibrâhîmal-khalîli ḫîna qudzifa bihi ilan-nâri. Wa lam yazal yunaqqalunî minal-ashlâbith-thâhirati ilal-arḫâmiz-zakiyyatil-fâkhirati ḫatta akhrajaniyallâhu min baini abawayya. Wa lam yaltaqiyâ ‘ala sifâḫin qaththu.",
        translation:
          "Diriwayatkan bahwa Nabi ﷺ bersabda: “Dua ribu tahun sebelum menciptakan Adam, aku adalah cahaya di sisi Allah. Cahaya itu bertasbih kepada-Nya. Demikian pula para malaikat bertasbih dengan tasbihnya. Tatkala menciptakan Adam, Allah memasukkan cahaya itu pada tanahnya. Kemudian, Allah menjatuhkanku ke bumi dalam tulang punggung Adam. Lantas Dia membawaku kepada bahtera dalam tulang punggung Nuh. Kemudian Allah menempatkanku pada tulang punggung Nabi Ibrahim ketika ia dilemparkan ke dalam kobaran api. Demikianlah aku beralih dari tulang punggung yang suci ke rahim yang suci nan mulya, hingga Allah mengeluarkanku di antara ayah-ibuku yang tidak tidak pernah tersentuh perbuatan zina sedikit pun.",
      },
    ],

    //Halaman 7
    [
      {
        translation: "7. Tanaqqalta fî ashlâbi arbâbi sûdadin",
      },
      {
        arabic:
          "اللهُ اللهُ اللهُ اللهُ رَبُّنَا اللهُ اللهُ اللهُ اللهُ حَسْبُنَا",
        latin:
          "Allâḫu Allâhu Allâhu Allâhu rabbunâ Allâhu Allâhu Allâhu ḫasbunâ",
        translation:
          "Allah, Allah, Allah, Allah, tuhan kami. Allah, Allah, Allah, Allah, pelindung kami.",
      },
      {
        arabic:
          "تَنَقَّلْتَ فِي أَصْلَابِ أَرْبَابِ سُوْدَدٍ كَذَا الشَّمْسُ فِي أَبْرَاجِهَا تَتَنَقَّلُ",
        latin:
          "Tanaqqalta fî ashlâbi arbâbi sûdadin kadzâsy-syamsu fî abrâjihâ tatanaqqalu",
        translation:
          "Engkau berpindah-pindah dari punggung para pemilik kepemimpinan. Tak ubahnya matahari berpindah-pindah dalam kumpulan bintang-bintang.",
      },
      {
        arabic:
          "وَسِرْتَ سَرِيَّــــا فِيْ بُطُوْنِ تَشَـرَّفَتْ بِحَمْـلٍ عَلَيْهِ فِي الْأُمُورِ الْمُعَوَّلِ",
        latin:
          "Wa sirta sariyyan fî buthûni tasyarrafat bi ḫamli ‘alaihi fil-umûril-mu‘awwali",
        translation:
          "Dan engkau berjalan dalam Rahim yang mendapat kemuliaan yang dipegangi dalam beberapa urusan.",
      },
      {
        arabic:
          "هَنِيئًــا لِقَوْمٍ أَنْتَ فِيْهِـمْ وَمِنْهُمُ بَدَا مِنْكَ بَدْرٌ بِالْجَمَـــالِ مُسَرْبَلُ",
        latin:
          "Hanî’an liqaumi anta fîhim wa minhumu badâ minka badrun bil-jamâli musarbalu",
        translation:
          "Datang membahagiakan suatu kaum dimana engkau berada di tengah mereka dan menjadi bagian dari mereka. Dirimu tampak bagaikan bulan purnama yang dihiasi dengan keindahan.",
      },
      {
        arabic:
          "وَلِلّٰهِ وَقْتٌ جِئْتَ فِيْهِ وَطَالِعٌ سَعِيدٌ عَلَى أَهْلِ الْوُجُودِ وَمُقْبِــــلُ",
        latin:
          "Wa lillâhi waqtun ji’ta fîhi wa thâli’un sa‘idun ‘ala ahlil-wujûdi wa muqbilu",
        translation:
          "Allah memiliki waktu dimana engkau saatnya datang menghadap membawa kebahagiaan kepada seluruh ahli wujud.",
      },
      {
        arabic:
          "عَلَيْهِ صَــــلَاةُ اللهِ ثُمَّ سَـلَامُهُ بِتَعْدَادِ مَا قَطْرٌ مِنَ السُّحْبِ يَنْزِلُ",
        latin:
          "‘alaihi shalatullâhi tsumma salâmuhu bita‘dâdi mâ qathrun minas-suḫbi yanzilu",
        translation:
          "Shalawat dan salam semoga terlimpah padanya sebanyak turunnya tetesan hujan dari langit.",
      },
      {
        arabic:
          "خِتَـــامُ جَمِيْعِ الْأَنْبِيَـاءِ مُحَـمَّدٌ وَيَوْمَ قِيَـــــامِ النَّــــاسِ يُبْعَثُ أَوَّلُ",
        latin:
          "Khitâmu jamî‘il-anbiyâ’i Muḫammadun wa yauma qiyâmin-nâsi yub‘atsu awwalu",
        translation:
          "Penutup seluruh nabi, yakni Muhammad yang dibangkitkan pertama pada hari dibangkitkannya seluruh manusia.",
      },
      {
        arabic:
          "فَجُدْ يَا رَسُولَ اللهِ مِنْكَ بِرَحْمَـــةٍ لِعَبْدٍ أَسِــــيْرٍ بِالذُنُوْبِ مُثَقَّــــــلُ",
        latin:
          "Fajud yâ rasûlallâhi minka biraḫmatin li‘abdin asîru bidz-dznûbi mutsaqqalu",
        translation:
          "Wahai Rasulullah, sayangilah hamba yang tertawan dengan dosa-dosa ini, dengan sebagian rahmat yang ada pada dirimu.",
      },
      {
        arabic:
          "وَصَــــلِّ دَوَامًا كُلَّ يَوْمٍ وَلَيْلَةٍ عَلَى أَحْمَدَ الْمُخْتَارِ مَنْ هُوَ أَفْضَلُ",
        latin:
          "Wa shalli dawâman kulla yaumin wa lailatin ‘ala Aḫmadal-mukhtâri man huwa afdlalu",
        translation:
          "Limpahkanlah rahmat selamanya setiap siang dan malam kepada Ahmad, manusia pilihan yang juga nabi paling utama.",
      },
    ],

    //Halaman 8
    [
      {
        translation:
          "8. Wa ‘an yazid bin ‘abdillahib-ni wahbin ‘an ‘amatihi qâlat",
      },
      {
        arabic:
          "وَعَنْ يَزِيدَ بْنِ عَبْدِ اللهِ بْنِ وَهْبٍ عَنْ عَمَتِهِ قَالَتْ: كُنَّا نَسْمَعُ أَنَّ اٰمِنَةَ لَمَّا حَمَلَتْ بِرَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ كَانَتْ تَقُولُ مَا شَعَرْتُ أَنِّيْ حَمَلْتُ وَلَا وَجَدْتُّ لَهُ ثِقَلاً وَلَا أَلَمًا كَمَا تَجِدُ النِّسَاءُ إِلَّا أَنِّيْ أَنْكَرْتُ رَفْعَ حَيْضَتِيْ وَأَتَانِيْ آتٍ وَأَنَا بَيْنَ النَّوْمِ وَالْيَقْظَةِ. فَقَالَ لِيْ: هَلْ شَعَرْتِ أَنَّكِ حَمَلْتِ فَكَأَنِّيْ أَقُوْلُ لَا أَدْرِيْ. فَقَالَ: إِنَّكِ قَدْ حَمَلْتِ بِسَيْدِ هٰذِهِ الْأُمَّةِ وَنَبِيِّهَا نَبِيِّ الرَّحْمَةِ وَذٰلِكَ يَوْمَ الْاِثْنَيْنِ قَالَتْ فَكَانَ ذٰلِكَ مِمَّا تَيَقَّنَ عِنْدِيَ الْحَمْلُ. فَلَمَّا دَنَتْ وِلَادَتِيْ أَتَانِيْ ذٰلِكَ الْاٰتِيْ، فَقَالَ لِيْ: قُوْلِيْ أُعِيْذُهُ بِالْوَاحِدِ الصَّمَدِ مِنْ شَرِّكُلِّ ذِيْ حَسَدٍ. قَالَتْ: فَكُنْتُ أَقُوْلُ ذٰلِكَ وَأُكَرِّرُهُ مِرَارًا",
        latin:
          "Wa ‘an yazid bin ‘abdillahib-ni wahbin ‘an ‘amatihi qâlat: kunnâ nasma‘u anna âminata lammâ ḫamalat birasûlillâhi shallallâhu ‘alaihi wa sallama kânat taqûlu mâ sya‘artu annî ḫamaltu wa lâ wajadtû lahu tsiqâlan wa lâ alaman kamâ tajidun-nisâ’u illâ anni ankartu raf‘a ḫaidlatî wa atânî âtin wa anâ bainan-naumi wal-yaqdhati. Faqâla lî: hal sya‘arti annaki ḫamalti faka’annî aqûlu lâ adrî. Faqâla: innaki qad ḫamalti bisayyidi hâdzihil-ummati wa nabiyyihâ nabiyyir-raḫmati wa dzâlika yaumal-itsnaini qâlat fakâna dzâlika mimmâ tayaqqana ‘indiyal-ḫamlu. Falammâ danat wilâdati atânî dzâlikal-âtî, faqâla lî: qûlî u‘idzu bil-wâḫidish-shamadi min syarri kulli dzî ḫasadin qâlat: fakuntu aqûlu dzâlika wa ukarrizuhu mirâran.",
        translation:
          "Yazid bin Abdillah bin Wahb meriwayatkan bahwa bibinya berkata, “Kami mendengar bahwa saat mengandung Rasulullah, Sayyidah Aminah menyampaikan, ‘Aku tidak merasa diriku hamil. Tidak merasakan susah payah. Tidak mendapati kesakitan seperti yang dirasakan para wanita. Hanya saja aku mengingkari hilangnya haidku. Suatu ketika, ada yang datang kepadaku dalam keadaan aku tidur dan terjaga. Ia berkata kepadaku, ‘Apakah engkau merasakan hamil,’ Aku pun seperti menjawab, ‘Tidak tahu.’ Ia kembali berkata, ‘Engkau sedang mengandung pemimpin dan nabi umat ini. Ia nabi pembawa rahmat.’ Itu terjadi pada hari Senin. Itu pula yang menjadi keyakinanku di saat hamil. Kemudian, di saat masa kelahiran kian dekat, sosok yang dulu datang kembali menemuiku. Ia berkata kepadaku, ‘Ucapkanlah: Aku berlindung kepada Dzat yang Maha Tunggal, serta Dzat yang Maha Melindungi, dari segala keburukan pemilik sifat hasud.’ Sayyidah Aminah menuturkan, ‘Aku pun membacakan kalimat itu dan melakukannya berkali-kali’.”",
      },
      {
        arabic:
          "قِيلَ لَمَّا أَرَادَ اللهُ عَزَّ وَجَلَّ ظُهُوْرَ خَيْرِ خَلْقِهِ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ أَمَرَ جِبْرِيلَ أَنْ يَقْبِضَ طِيْنَتَهُ مِنْ مَكَانِ قَبْرِهِ الْكَرِيْمِ، فَقَبَضَهَا ثُمَّ طَافَ بِهَا جَنَّاتِ النَّعِيْمِ وَغَمَسَهَا فِي أَنْهَارِ التَّسْنِيمِ. وَأَقْبَلَ بِهَا بَيْنَ يَدَيِ اللهِ الْعَلِيِّ الْعَظِيْمِ، وَلَهَا عَرَقٌ يَسِيْلُ فَخَلَقَ اللهُ مِنْ ذٰلِكَ الْعَرَقِ نُوْرَ كُلِّ نَّبِي جَلِيْلٍ، فَجَمِيْعُ الْأَنْبِيَاءِ خُلِقُوْا مِنْ نُوْرِ مُحَـمَّدٍ ثُمَّ أُوْدِعَتْ تِلْكَ الطِّينَةُ فِي ظَهْرِاٰدَمَ، وَأُلْقِيَ فِيهَا النُّورُ الَّذِيْ سَبَقَ فَخْرُهُ وَتَقَادَمَ. فَوَقَعَتْ هُنَالِكَ طَوَائِفُ الْمَلَائِكَةِ الْمُقَرَّبِينَ سُجَّدًا لِاٰدَمَ. ثُمَّ أَخَذَ اللهُ تَعَالَى عَلَى اٰدَمَ الْمَوَاثِيْقَ وَالْعُهُودَ حِينَ أَمَرَ الْمَلَائِكَةَ لَهُ بِالسُّجُودِ أَنْ لَا يُوْدِعَ ذٰلِكَ النُّوْرَ إِلَّا فِيْ أَهْلِ الْكَرَمِ وَالْجُودِ الْمُطَهَّرِينَ مِنَ الدَّنَسِ وَالجُحُودِ. فَمَا زَالَ ذٰلِكَ النُّورُ يَنْتَقِلُ مِنْ ظُهُوْرِ الْأَخْيَارِ إِلَى بُطُوْنِ الْأَحْرَارِ حَتَّى أَوْصَلَتْهُ يَدُ الشَّرْفِ وَالْمَكَارِمِ إِلَى عَبْدِ اللهِ بْنِ عَبْدِ المُطَّلِبِ بْنِ هَاشِمٍ. فَلَمَّا اٰنَ أَوَانُ وَفَاءِ عَهْدِهِ طَلَعَ فِي الْأَكْوَانِ طَالِعُ سَعْدِهِ نُشِرَ عُلَمُ الْفَتُوَّةِ لِظُهُوْرِ خَاتَمِ النُّبُوَّةِ شَخَصَتْ لِعَبْدِ اللهِ الْأَبْصَارُ، وَأَشْرَقَتْ عَلَيْهِ الْأَنْوَارُ وَأُلْبِسَ ثَوْبَ الْمَلَاحَةِ نَطَقَ بِالْبَيَانِ وَالْفَصَاحَةِ نَادَاهُ لِسَانُ الْمَشِيئَةِ يَا عَبْدَ اللهِ مَا يَصْلَحُ كَنْزًا لِمَا حَمَلْتَ مِنَ الْوَدِيْعَةِ إِلَّا أَحْشَاءُ اٰمِنَةَ الْمَنِيْعَةِ الْمُطَهَّرَةِ مِنَ الدَّنَسِ وَالْاكْدَارِ سَيِّدَةِ نِسَاءِ بَنِي النَّجَّارِ اجْتَمَعَ شَمْلُهُ بِشَمْلِهَا إِتَّصَلَ حَبْلُهُ بِحَبْلِهَا، ظَهَرَ صَفَاءُ يَقِيْنِهَا انْطَوَتْ الْأَحْشَاءُ عَلَى جَنِيْنِهَا سَطَعَ نُوْرُ النَّبِيِ مُحَمَّدٍ فِي جَبِينِهَا",
        latin:
          "Qîla lammâ aradallâhu ‘azza wa jalla dhuhura khairi khalqihi muḫammadin shallallâhu ‘alaihi wa sallama amara jibrîla an yaqbidla thînatahu min makâni qabrihil-karîmi, faqabadlahâ tsumma thâfa bihâ jannâti na‘îmi wa ghamasahâ fî anhârit-tasnîmi. Wa aqbal bihâ baina yadayillâhil-‘aliyyil-‘adhîmi. Wa lahâ ‘araqun yasîlu fakhalaqallâhu min dzâlikal-‘araqi nûra kulli nabiyyin jalîl. Fajamî‘ul-anbiyâ’i khuliqû min nûri muḫammadin tsumma ûdi‘at tilkath-thînatu fî dhahri âdama, wa ulqiya fîhân-nûrul-ladzî sabaqa fakhruhu wa taqaddama. Fawaqa‘at hunâlika thawâ’iful-malâikatil-muqarrabîna sujjadan li âdama. Tsumma akhadzallâhu ta‘alâ ‘ala âdamal-mawâtsiqa wal‘uhûda ḫîna amaral-malâ’ikata lahu bis-sujûdi an lâ yûdi‘a dzâlikan-nûra yantaqilu min dhuhûril-akhyâri ilâ buthûnil-aḫrâri ḫattâ aushalathu yadusy-syarfi wal-makârimi ilâ ‘abdillâhib-ni ‘abdil muththalibib-ni hâsyimi. Falammâ âna awânu wafâ’i ‘ahdihi thala‘a fil-akwâni thâli‘u sa‘dihi nusyira ‘ulamul-fatuwwati lidhuhuri khâtamin nubuwwati syakhashat li‘abdillahil-abshâru, wa asyraqat ‘alaihil-anwâru wa albisa tsaubal-malâḫati nathaqa bil-bayâni wal-fashâḫati nâdâhu lisânul-masyî’ati ya ‘abdallâhi mâ yashlaḫu kanzan limâ ḫamalta minal-wadî‘ati illâ ahsyâ’u âminatal-mani‘atil-muthahhirati minad-danasi wal-akdâri sayyidati nisâ’i banin-najjârij-tama‘a syamluhu bisyamlihâ ittashala ḫabluhu biḫablihâ, dhahara shafâ’u yaqînihân-thawat al-aḫsyâ’u ‘ala janînihâ satha‘a nûrun-nabiyyi muḫammadin fî jabînihâ.",
        translation:
          "Dikatakan ketika Allah berkehendak menampakkan makhluk terbaik-Nya, yakni Muhammad ﷺ, maka Dia memerintah malaikat Jibril untuk menggenggam tanahnya dari tempat kuburannya yang mulia. Ia lantas menggenggamnya dan membawanya keliling surga Na’im serta menyelupkannya ke sungai Tasnim. Ia lantas membawanya menghadap Allah yang Maha Luhur dan Agung. Tampak tanah itu mengalirkan keringat. Dari keringat itu Allah menciptakan cahaya setiap nabi yang mulia. Memang seluruh nabi diciptakan dari cahaya Muhammnad, lantas menitipkan tanah itu di punggung Adam. Dimasukkanlah cahaya yang sudah dimuliakan itu ke dalam tanah. Di sanalah golongan para malaikat muqarrabin turun seraya tersungkur sujud kepada Adam. Kemudian Allah mengambil berbagai sumpah dan perjanjian atas Adam. Di saat memerintah para malaikat bersujud, Allah juga memerintah mereka untuk tidak menitipkan cahaya itu selain kepada orang-orang mulia dan agung yang disucikan dari noda kotoran dan kekufuran. Demikianlah seterusnya cahaya itu beralih dari punggung orang-orang pilihan kepada rahim wanita merdeka hingga disampaikan oleh kekuatan tangan mulia dan istimewa kepada Abdullah bin Abdul Muthalib bin Hasyim. Tatkala datang saatnya memenuhi janji, terbitlah pembawa kebahagiaan di seantero alam yang menebarkan panji-panji kedermawanan yang menandakan akan datangnya penutup kenabian dari sosok Abdullah yang bijaksana. Tampaklah cahaya pada dirinya dan dipakaikanlah pakaian kebesaran yang berbicara dengan jelas dan fasih. Lantas ia dipanggil oleh yang Maha Berkehendak, “Wahai Abdullah, tidaklah pantas tempat untuk sebuah perkara titipan yang engkau bawa kecuali rahim Aminah yang sudah dibersihkan dari noda dan kotoran.” Ia pemimpin wanita Bani Najar dimana persatuan keduanya (Abdullah dan Aminah) terhimpun, dan tali ikatan keduanya tersambung. Tampaklah jernihnya keyakinan Aminah. Terisinya kandungan Aminah dengan janin. Serta tampaklah cahaya Muhammad di keningnya.",
      },
      {
        arabic:
          "أَوَّلَ شَهْرٍ مِنْ شُهُورِ حَمْلِهَا أَتَاهَا فِي الْمَنَامِ اٰدَمُ وَأَعْلَمَهَا أَنَّهَا حَمَلَتْ بِأَجَلِّ الْعَالَـمِ. الشَّهْرَ الثَّانِيَ أَتَاهَا فِي الْمَنَامِ إِدْرِيسُ وَأَخْبَرَهَا بِفَخْرِ مُحَمَّدٍ وَقَدْرِهِ النَّفِيسِ. الشَّهْرَ الثَّالِثَ أَتَاهَا فِي الْمَنَامِ نُوحٌ وَقَالَ لَهَا إِنَّكِ قَدْ حَمَلْتِ بِصَاحِبِ النَّصْرِ وَالْفتُوحِ. الشَّهْرَ الرَّابِعَ أَتَاهَا فِي الْمَنَامِ إِبْرَاهِيمُ الْخَلِيلُ وَذَكَرَ لَهَا فَضْلَ مُحَمَّدٍ وَمَحَلَّهُ الْجَلِيلَ. الشَّهْرَ الْخَامِسَ أَتَاهَا فِي الْمَنَامِ إِسْمَاعِيلُ وَبَشَّرَهَا أَنَّ ابْنَهَا صَاحِبُ الْمَهَابَةِ وَالتَّبْجِيْلِ. الشَّهْرَ السَّادِسَ أَتَاهَا فِي الْمَنَامِ مُوسَى الْكَلِيمُ وَأَعْلَمَهَا بِرُتْبَةِ مُحَمَّدٍ وَجَاهِهِ الْعَظِيمِ. الشَّهْرَ السَّابِعَ أَتَاهَا فِي الْمَنَامِ دَاوُدُ وَأَعْلَمَهَا أَنَّهَا حَمَلَتْ بِصَاحِبِ الْمَقَامِ الْمَحْمُودِ وَالحَوْضِ الْمَوْرُوْدِ وَاللِّوَاءِ الْمَعْقُوْدِ وَالْكَرَمِ وَالْجُودِ. الشَّهْرَ الثَّامِنَ أَتَاهَا فِي الْمَنَامِ سُلَيْمَانُ وَأَخْبَرَهَا أَنَّهَا حَمَلَتْ بِنَبِيِّ آخِرِ الزَّمَانِ. اَلشَّهْرَ التَّاسِعَ أَتَاهَا فِي الْمَنَامِ عِيسَى الْمَسِيحُ وَقَالَ لَهَا إِنَّكِ قَدْ خُصِصْتِ بِمَظْهَرِ الدِّيْنِ الصَّحِيْحِ وَاللِّسَانِ الْفَصِيْحِ، وَكُلُّ وَاحِدٍ مِنْهُمْ يَقُولُ لَهَا فِيْ نَوْمِهَا يَا اٰمِنَةُ إِذَا وَضَعْتِ شَمْسَ الْفَلَاحِ وَالْهُدَى فَسَمِّيْهِ مُحَمَّدًا. فَلَمَّا اشْتَدَّ بِهَا طَلْقُ النِّفَاسِ وَلَمْ يَعْلَمْ بِهَا أَحَدٌ مِنَ النَّاسِ بَسَطَتْ أَكُفَّ شَكْوَاهَا إلَى مَنْ يَعْلَمُ سِرَّهَا وَنَجْوَاهَا فَإِذَا هِيَ بِاٰسِيَةَ امْرَأَةِ فِرْعَوْنَ وَمَرْيَمَ بِنْتِ عِمْرَانَ وَجَمَاعَةٍ مِنَ الْحُورِ الْحِسَانِ، قَدْ أَضَاءَ مِنْ جَمَالِهِنَّ الْمَكَانُ فَذَهَبَ عَنْهَا مَا تَجِدُ مِنَ الْأَحْزَانِ",
        latin:
          "Awwali syahri min syuhûri ḫamlihâ atâhâ fil-manâmi adâmu wa a‘lamahâ annahâ ḫamalat biajallil-‘âlami. Asysyahrats-tsânî atâhâ fil-manâmi idrîsu wa akhbarahâ bi fakhri muḫammadin wa qadrihin-nafîsi. Asysyahrats-tsâlitsâ atâhâ fil-manâmi nûhun wa qâla innaki qad ḫamalti bishâḫibin-nashri wal-futûḫi. Asysyahrar-râbi‘a atâhâ ibrâhîmul-khalîlu wa dzakara lahâ fadlla muḫammadin wa maḫâlulahul-jalîla. Asysyahral-khâmisa atâhâ fil-manâmi ismâ‘ilu wa basysyarahâ annab-nahâ shâḫibul-mahâbati wat-tabjîli. Asysyahras-sâdisa atâha fil-manâmi mûsa al-kalîmu wa a‘lamahâ birutbati muḫammadin wa jâhihil-adhîmi. Asysyahras-sâbi‘a atâhâ fil-manâmi dâwûdu wa ‘allamahâ annahâ ḫamalat bishâḫibil-maqâmil-maḫmûdi wal-ḫaudil-maurûdi wal-liwâ’il-ma‘qûdi wal-karami wal-jûdi. Asysyahrats-tsâmina atâhâ fil-manâmi sulaimânu wa akhbarahâ annahâ ḫamalat binabiyyi âkhiriz-zamâni. Asysyahrat-tâsi‘a atâhâ fil-manâmi ‘îsal-masiḫu wa qâla lahâ innaki qad khushishti bimadhharid-dînish-shaḫîḫi wal-lisânil-fâshiḫi, wa kullu wâḫidin minhum yaqûlu lahâ fi naumihâ yâ âminatu idza wadla‘ti syamsal-falâḫi wal-huda fasammîhi muḫammadan. Falammasy-tadda bihâ thalqun-nifâsi wa lam ya‘lam bihâ aḫadun minan-nâsi basthat akuffa syakwâhâ ila man ya‘lamu sirrahâ wa najwâhâ faidza hiya biâsiyatam-ra’ati fir‘auna wa maryama binti ‘imrâna wa jamâ‘atin minal-ḫûril-ḫisâni. Qad adlâ’a min jamâlihinnal-makânu fadzahaba ‘anhâ mâ tajidu minal-aḫzâni.",
        translation:
          "Bulan pertama kehamilannya, Aminah bermimpi didatangi Nabi Adam yang mengabarkan bahwa dirinya sedang mengandung manusia paling mulia. Bulan kedua kehamilan, Aminah bermimpi didatangi Nabi Idris yang mengabarkan kepada dirinya akan keunggulan dan kedudukan Muhammad yang sangat luhur. Pada bulan ketiga, Aminah bermimpi didatangi Nabi Nuh yang mengatakan kepadanya, “Sesungguhnya engkau telah hamil oleh pembawa pertolongan dan kemenangan.” Pada bulan keempat, Aminah bermimpi didatangi Nabi Ibrahim al-Khalil yang menuturkan kepadanya akan keutamaan Muhammad dan kedudukannya yang agung. Pada bulan kelima, Aminah bermimpi didatangi Nabi Ismail yang mengabarkan kepadanya bahwa putranya itu adalah pemilik keluhuran dan keagungan. Pada bulan keenam, Aminah bermimpi didatangi Nabi Musa al-Kalim yang mengabarkan perihal kedudukan dan keagungan Muhammad. Pada bulan ketujuh, Aminah bermimpi didatangi Nabi Dawud yang mengabarkan bahwa ia hamil seorang pemilik kedudukan terpuji, telaga yang mengalir, bendera yang terikat, serta pemegang kemuliaan dan kemurahan. Pada bulan kedelapan, Aminah bermimpi didatangi oleh Nabi Sulaiman yang mengabarkan bahwa ia sedang mengandung nabi akhir zaman. Pada bulan kesembilan, Aminah bermimpi didatangi oleh Nabi Isa al-Masih yang mengatakan, “Engkau telah diistimewakan oleh pembawa agama yang benar dan lisan yang fasih.” Masing-masing dari para nabi mengatakan kepada Aminah dalam mimpinya, “Wahai Aminah, jika engkau melahirkan mentari kemenangan dan mentari petunjuk, maka namailah bayi itu dengan Muhammad. Tatkala rasa sakit datangnya kelahiran semakin kuat, dan tidak ada seorang pun yang mengetahuinya, Aminah membuka telapak tangan keluh-kesahnya kepada Dzat yang maha mengetahui rahasia dan keselamatan dirinya. Tiba-tiba datang Asiah istri Firaun dan juga Maryam bin Imran serta sejumlah bidadari cantik. Saking cantiknya mereka, tempat di sekitarnya seakan bercahaya. Seketika hilanglah kesedihan yang dialami Aminah.",
      },
    ],

    //Halaman 9
    [
      {
        translation: "9. Wulidal ḫabîbu wa khadduhul mutawarradu",
      },
      {
        arabic:
          "اللهُ لِيْ اللهُ لِيْ نِعْـــــــمَ الْوَلِيْ صَلُّوْا عَلَى هٰذَا النَّبِيِّ مُحَـمَّدٍ",
        latin:
          "Allâhu lî Allâhu lî ni‘mal-wâlî shallû ‘ala hâdzan-nabiyyi muḫammadin",
        translation:
          "Bagiku Allah, bagiku Allah adalah sebaik-baiknya penolong. Bershalawatlah kalian kepada Nabi Muhammad.",
      },
      {
        arabic:
          "وُلِدَ الحَبِيْبُ وَخَدُّهُ مُتَوَرِّدُ وَالنُّوْرُ مِنْ وَجَنَاتِهِ يَتَوَقَّدُه",
        latin:
          "Wulidal-ḫabîbu wa khadduhul-mutawarradu wan-nûru min wajanâtihi yatawaqqaduh",
        translation:
          "Sang kekasih dilahirkan dengan pipi yang kemerah-merahan dan cahaya yang menyala-nyala dari kedua pipinya.",
      },
      {
        arabic:
          "وُلِدَ الْحَبِيْبُ وَمِثْلُهُ لَا يُوْلَدُ وُلِدَ الْحَبِيْبُ وَنُوْرُهُ يَتَجَدَّدُ",
        latin:
          "Wulidal-ḫabîbu wa mitsluhu lâ yûladu Wulidal-ḫabîbu wa nûruhu yatajaddadu",
        translation:
          "Sang kekasih sudah lahir. Tak ada satu pun bayi yang semisalnya dengannya. Sang kekasih telah lahir dengan cahaya yang terus menyala-nyala.",
      },
      {
        arabic:
          "وُلِدَ الَّذِيْ لَوْلَاهُ مَا عُشِقَ النَّقَا كَلَّا وَلَا ذُكِرَ الْحِمَى وَالْمَعْهَــــدُ",
        latin:
          "Wulidal-ladî lau lâ hu mâ ‘usyiqan-naqâ kallâ wa lâ dzukiral-ḫima wal-ma‘hadu",
        translation:
          "Telah lahir sosok yang seandainya tidak ada dia maka tidak ada kemurnian yang disebutkan. Sama sekali tidak. Tidak pula ada kehangatan dan tiada yang yang dijanjikan.",
      },
      {
        arabic:
          "وُلِدَ الَّذِي لَوْلَاهُ مَا ذُكِرَتْ قُبَا أَصْلًا وَّلَا كَانَ الْمُحَصَّبُ يُقْصَدُ",
        latin:
          "Wulidal-ladzî lau lâ hu mâ dzukirat qubâ ashlan wa lâ kânal-muḫashshabu yuqshadu",
        translation:
          "Telah lahir bayi yang seandainya tidak ada bayi itu, maka kota Quba sama sekali tidak akan disebutkan. Tidak ada tanah berkerikil yang dituju.",
      },
      {
        arabic:
          "هٰــذَا الْوَفِيُّ بِعَهْدِهِ هٰــــذَا الَّذِي مَنْ قَدُّهُ يَا صَاحِ غُصْنٌ أَمْلَدُ",
        latin:
          "Hâdzal-wafiyyu bi‘ahdihi hâdzal-ladzî man qadduhu yâ shâḫi ghushnun amladu",
        translation:
          "Inilah nabi yang memenuhi janjinya. Inilah nabi, wahai Kawan, yang postur tubuhnya laksana dahan yang lentur menjuntai.",
      },
      {
        arabic:
          "هٰذَا الَّذِي خُلِعَتْ عَلَيْهِ مَلَا بِسُ وَنَفَائِسٌ فَنَظِيرُهُ لَا يُوجَدُ",
        latin:
          "Hâdzal-ladzî khuli‘at ‘alaihi malâbisu wa nafâ’isun fanadhîruhu lâ yûjadu",
        translation:
          "Inilah nabi, yang tanpa balutan pakaian dan perhiasan pun keindahannya tetap terpancar tiada tanding.",
      },
      {
        arabic:
          "هٰــذَا الَّذِي قَالَتْ مَلَائِكَةُ السَّمَا هٰذَا مَلِيْحُ الْكَوْنِ هٰذَا أَحْمَدُ",
        latin:
          "Hâdzal-ladzî qâlat malâ’ikatus-samâ Hâdzâ malîḫul-kauni hâszâ aḫmadu",
        translation:
          "Ini yang dikatakan para malaikat langit. Inilah keindahan semesta. Inilah Ahmad.",
      },
      {
        arabic:
          "إنْ كَانَ مُعْجِـــزُ يُوْسُفَ بِقَمِيْصِهِ تَا اللهِ ذَا الْمَوْلُوْدُ مِنْهُ أَزْيَدُ",
        latin:
          "In kâna mu‘jizun yûsufa biqamîshihi tallâhi dzal-maulûdi minhu azyadu",
        translation:
          "Jika mukjizat Nabi Yusuf adalah dengan baju gamisnya, maka demi Allah untuk bayi yang terlahir ini adalah lebih dari itu.",
      },
      {
        arabic:
          "لَوْ كَانَ إِبْرَاهِـــــيْمُ أُعْطِيَ رُشْـدَهُ تَاللهِ ذَا الْمَوْلُوْدُ مِنْهُ أَرْشَــــدُ",
        latin:
          "Lau kâna ibrâhîmu u‘thiya rusydahu tallâhi dzal-maulûdu minhu arsyadu",
        translation:
          "Jika Nabi Ibrahim telah diberi kecerdasan, maka demi Allah, bayi yang terlahir ini lebih cerdas.",
      },
      {
        arabic:
          "يَا مَوْلِدَ الْمُخْتَارِكُمْ لَكَ مِنْ ثَنَا وَمَدَائِـحِ تَعْلُوْ وَذِكْرٍ يُحْمَـــدُ",
        latin:
          "Yâ mauladal-mukhtâri kum laka min tsâna wamadâ’iḫi ta‘lû wa dzikrin yuḫmadu",
        translation:
          "Wahai kelahiran makhluk terpilih, engkau berhak mendapat pujian dan sanjungan. Namamu berhak disebut dan dipuji.",
      },
      {
        arabic:
          "يَــا عَاشِقِـــــيْنَ تَوَلَّهُوْا فِي حُبِّــــهِ هٰذَا هُوَ الْحَسَنُ الْجَمِيْلُ الْمُفْرَدُ",
        latin:
          "Yâ ‘âsyiqîna tawallahû fî ḫubbihi hâdza huwal-ḫasanul-jamîlul-mufradu",
        translation:
          "Wahai orang-orang yang rindu, mereka selalu merindukannya. Dan ini keindahan sesungguhnya yang menyendiri.",
      },
      {
        arabic:
          "ثُــــمَّ الصَّـــــلَاةُ عَلَى النَّبِيِّ وَاٰلِـــهِ فِيْ كُلِّ يَوْمٍ قَدْ مَضَى وَيُجَــــــدَّدُ",
        latin:
          "Tsummash-shalâtu ‘alan-nabiyyi wa âlihi fî kulli yaumin qad madlâ wa yujaddadu",
        translation:
          "Semoga shalawat tetap tercurah kepada Nabi dan keluarganya, baik setiap hari yang telah lalu maupun hari yang mendatang.",
      },
    ],

    //Halaman 10
    [
      {
        translation: "10. Wa Wadla‘atil Habîb",
      },
      {
        arabic:
          "وَوَضَعَتِ الْحَبِيْبَ مُحَـمَّدًا صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَهُوَ مُكَحَّلُ الْعُيُونِ، مَقْطُوعُ السُّرَّةِ وَمَخْتُوْنٌ. أخَذْتُهُ الْمَلائِكَةُ الْأَبْرَارُ فَطَافُوْا بِهِ فِيْ جَمِيعِ الْأَقْطَارِ. وَعَرَّفُوْ بِهِ أَهْلَ السَّمَوَاتِ وَالْأَرْضِ وَالْبِحَارِ وَرَجَعُوْا بِالْمُفَضَّلِ عَلَى الْكَوْنَيْنِ إِلَى أَمِّهِ اٰمِنَةَ فِيْ أَسْرَعَ مِنْ طَرْفَةِ عَيْنٍ. خَفَقَتْ فِي الْأَكْوَانِ أَعْلَامُ عُلُوْمِهِ. دُقَّتِ الْبَشَائِرُ لِقُدُوْمِهِ جَاءَ الْهَنَا، زَالَ الْعَنَا، حَصَلَ الْغِنَا نِلْنَا الْمُنَى، طَابَتِ الْقُلُوْبُ غُفِرَتِ الذُنُوبُ، سُتِرَتِ الْعُيُوْبُ، كُشِّفَتِ الْكُرُوْبُ بِبَرَكَةِ سَيِّدِنَا مُـحَمَّدٍ ࣙالْحَبِيْبِ الْمَحْبُوبِ. اَلْفَ صَلُّوا عَلَى النَّبِيِّ خَاتِمِ الرُّسُلِ الْكِرَامِ",
        latin:
          "Wawadla‘atil-ḫabîba muḫammadan shallallâhu ‘alaihi wa sallama wa huwa mukaḫḫalul-‘uyûni, maqthû‘us-surrâti wa makhtûnun, akhadtuhul-malâ’ikatul-abrâru, fathâfû bihi fî jamî‘il-aqthâri, wa ‘arrafû bihi ahlas-samawâti wal-ardli wal-biḫari wa raja‘û bil-mufadldlali ‘alal-kauni ila ummihi âminata fî asra‘a min tharfata ‘aini, khafaqat fil-akwâni a‘lamu ‘ulûmihi, duqqatil-basyâ’iru liqudûmihi jâ’al-hanâ, zâlal-‘anâ ḫashalal-ghinâ nilnal-muna, thâbatil-qulûbi ghufiratidz-dzunûbu, sutiratil-‘uyūbi, kusysyifatil-karûbu bibarakati sayyidinâ muḫammadinil-ḫabîbil-maḫbûb, alfa shallû ‘ala khâtimir-rusulil-kirâmi.",
        translation:
          "Sayyidah Aminah melahirkan Muhammad tercinta dalam keadaan mata sudah dicelak, pusar sudah dipotong, dan kemaluan sudah dikhitan. Ia lantas dibawa para malaikat berkeliling ke seluruh penjuru semesta. Mereka memperkenalkannya kepada seluruh penduduk langit, bumi, dan laut. Setelah itu, mereka kembali membawa bayi yang telah diberi gelang keistimewaan di kedua tangannya itu kepada ibunya Sayyidah Aminah dalam waktu yang secepat mungkin. Panji-panji pengetahuannya berkibar di seantero alam. Kabar gembira akan kedatangannya terus tersiar. Ucapan selamat terus berdatangan. Kesulitan seketika menghilang. Kekayaan tercapai. Impian terlaksana. Hati bergembira. Dosa-dosa diampuni. Segala aib tertutupi. Kesusahan diangkat. Semuanya berkat pemimpin kita Muhammad nabi tercinta dan dicintai. Bershalawatlah kalian seribu kali kepada Nabi penutup para rasul yang mulia.",
      },
    ],

    //Halaman 11
    [
      {
        translation: "11. Aḫmadu hâdiyul-ladzî ‘amma jûduhu ‘alal-anâmi",
      },
      {
        arabic:
          "أَحْمَدُ هَادِيُ الَّذِيْ عَمَّ جُوْدُهُ عَلَى الْأَنَامِ حَصَلَ الْقَصْدُ وَالْمُرَادُ وَصَفَى الْوَقْتُ وَالْوِدَادُ",
        latin:
          "Aḫmadu hâdiyul-ladzî ‘amma jûduhu ‘alal-anâmi ḫashalal-qashdu wal-murâdu wa shafal-waqtu wal-widâdu",
        translation:
          "Ahmad pembawa petunjuk itu telah menyeluruh kemurahannya kepada seluruh makhluk. Maka tercapailah maksud dan tujuan, tepatlah waktu, dan jernihlah kasih sayang.",
      },
      {
        arabic:
          "وَبِرُؤْيـَا مُحَـمَّدٍ فُــــرِحَتْ أَنْفُسُ الْعِبَــــادِ عَنْ غَرَامِيْ وَلَوْعَتِيْ لَا تُحَرِّكْ فِي الْمَلَامِ",
        latin:
          "Wa biru’yâ muḫammadin furiḫat anfusul-‘ibâdi ‘an gharâmî wa lau‘atî lâ tuḫarrik fil-malâmi",
        translation:
          "Dengan bermimpi melihat Nabi Muhammad, maka bergembiralah jiwa-jiwa hamba. Hingga kerugian dan kepedihan tak lagi mengundang cercaan.",
      },
      {
        arabic:
          "ذَاكَ دِيْنِيْ وَمِلَّتِيْ ذَاكَ لِيْ غَايَـــةُ الْمَرَامِ مِحْنَتِيْ فِيْــهِ لَذَّتِيْ سَلْوَتِيْ لِلْهَوَى حَـــــرَام",
        latin:
          "Dzâka dînî wa millâtî dzâka lî ghayatul-marâmi miḫnatî fîhi ladzdzatî salwatî lilhawâ ḫarâmi",
        translation:
          "Inilah agama dan ajaranku. Inilah puncak harapan bagiku. Hingga ujianku di dalamnya adalah kenikmatan. Dan hiburan bagi jiwaku adalah terlarang.",
      },
      {
        arabic: "مَا فُتِنَ أَحَدٌ كَفِتْنَتِيْ فَيَسْدُوْنِيْ بِلَا كَلَامِ",
        latin: "Mâ futina aḫadun kafitnatî wa fayasdûnî bilâ kalâmi",
        translation:
          "Ujian yang dialami seseorang tak beda dengan ujianku. Maka luruskanlah aku tanpa kalam.",
      },
    ],

    //Halaman 12
    [
      {
        translation: "12. Hadzâ kafanî min qadîmi dahrî",
      },
      {
        arabic:
          "هَذَا كَفَنِيْ مِنْ قَدِيمِ دَهْرِي عَلَيْهِ عَامِيْ قَدْ مَضَى وَشَهْرِيْ",
        latin: "Hadzâ kafanî min qadîmi dahrî ‘alaihi ‘âmî qad madla wa syahrî",
        translation:
          "Cukuplah ini bagiku sejak dahulu, seperti tahun dan bulan yang telah lalu.",
      },
      {
        arabic: "سَــكَّنَ اللهُ عِشْقَتِيْ فِيْ فُؤَادِيْ مَعَ الْعِظَامِ",
        latin: "Sakkanallâhu ‘isyqatî fî fuâdî ma‘al-‘idhâmi",
        translation: "Allah menenangkan kerinduanku dalam hati sanubari.",
      },
      {
        arabic:
          "وَشَفَى سُقْـــــمَ فُرْقَتِيْ بِالرَّشَاسَمْهَرِيِّ الْقَوَامِ",
        latin: "Wa syafa suqma furqatî bir-rasysyi samhariyyil-qawâmi",
        translation:
          "Sakitnya perpisahanku sembuh dengan lesapan tombak yang lurus.",
      },
      {
        arabic:
          "مَا مُنَا قَلْبِيَ الْجَـــرِيْحِ غَيْرَ نَظْرَةِ مِنَ الْحَبِيْبِ",
        latin: "Mâ munâ qalbyal-jarîḫi ghaira nadhratin minal-ḫabîbi",
        translation:
          "Tidak ada impian bagi hatiku yang terluka selain memandangi sang kekasih.",
      },
      {
        arabic:
          "وَاتِصَــالٍ بِهِ صَحِيْحٍ جُدْ عَلَيَّ فَاْتِنِيْ مِنْ قَرِيْبٍ",
        latin: "Watishâlin bihi shaḫiḫin jud ‘alayya fa’tinî min qarîbin",
        translation:
          "Terhubung dengan benar bersamanya. Maka berilah aku kesempatan jumpa dengannya dalam waktu dekat.",
      },
      {
        arabic:
          "إِنَّ حَـجِّيْ وَعُمْرَتِيْ رُؤْيَتِيْ رَوْضَةَ الْمَقَامِ هُمْ جَلَا نُوْرِ مُقْلَتِيْ وَبِهِمْ يَحْصُلُ التَّمَامُ",
        latin:
          "Inna ḫajjî wa ‘umratî ru‘yatî raudlatal-maqâmi hum jalâ nûri muqlatî wa bihim yaḫshulut-tamâmu",
        translation:
          "Sesungguhnya hajiku, umrahku, dan penglihatanku pada raudhah maqamnya, semuanya adalah keindahan bola mataku. Dengan itu tercapailah kesempurnaan.",
      },
      {
        arabic:
          "قَــــــرَّ فُؤَادِيْ فِي الْغَــــــزَالِــــــــ الْحَـــــــرَامِ إِنْ كُنْتَ مِثْلِيْ يَــــــا نَدِيْــــمَ مُوَلَّعًــــا",
        latin:
          "Qarra fu’âdi fil-ghazâlil-ḫarâmi in kunta mitslî yâ nadîma muwalla‘a",
        translation:
          "Hatiku tenang di Ghazal al-Haram jika engkau sepertiku, wahai orang yang menyesal karena cinta.",
      },
      {
        arabic:
          "اَلْمَلِيْحُ يَفْعَلُ الْمَلِيْحَ عَاشِقَــةٌ لَا يُحِبْ يَانَدِيْمُ بِرَحْمَةٍ قِفْ بِنَا هٰذِهِ الْخِيَامَ",
        latin:
          "Al-malîḫu yaf‘alul-malîḫa ‘âsyiqatun lâ yuḫab yâ nadîmu biraḫmatin qif binâ hâdzihil-khiyâma",
        translation:
          "Orang baik akan melakukan sesuatu yang baik karena rindu tak mencinta. Wahai orang yang menyesal karena kasih, duduklah bersama kami.",
      },
      {
        arabic:
          "زَارَنِي ثُمَّ مُسْمرِيْ وَانْقَضَتْ مُدَّةُ الْأَيَّامِ بَاتَ عِنْدِيْ مَسَامِرِيْ هٰكَذَا هٰكَذَا الْوِفَاق",
        latin:
          "Zâranî tsumma musmirî wanqadlat muddatul-ayyâmi bâta ‘indî masâmirî hâkadzal-wifâqi",
        translation:
          "Ia datang pada kami dan terus datang hingga habiskan waktu berhari-hari. Ia bermalam di tempatku. Begitu seterusnya.",
      },
      {
        arabic:
          "لَا بِحَوْلِي وَقُوَّتِيْ مَذْهَبِيْ الْعَجْزُ وَالسَّلَامُ وَنِلْتُ مَا أَرْجُوْهُ مِنْ سُعَــــــادِيْ",
        latin:
          "Lâ biḫaulî wa quwwatî madzhabil-‘ajzu was-salâmu wa niltu mâ arjûhu min su‘âdî",
        translation:
          "Perjalananku yang lemah dan damai bukan karena daya dan upayaku, aku memperoleh kebahagiaan yang ku harapkan",
      },
      {
        arabic:
          "بِــالْفَضْـلِ وَالْإِحْسَــــانِ لَا اجْتِهَــــادِيْ يَا إِلٰهِيْ وَسَيِّدِيْ لَا تُخَيِّبْ لَنَا الْمُرَادُ",
        latin:
          "Bilfadlli wal-iḫsâni lajtihâdî yâ ilâhî wa sayyidî lâ tukhayyib lanal-murâdu",
        translation:
          "Berkat karunia dan kebaikan, bukan kesungguhanku. Wahai Tuhanku, wahai tuanku, jangan kecewakan harapan kami.",
      },
      {
        arabic:
          "يَا إِلٰهِيْ وَسَيِّدِيْ دَمِّــرِ الْبَغْيَ وَالْفَسَادَ يَا إِلٰهِيْ وَسَيِّدِيْ أَصْلِحِ الْأَمْرَ يَا جَوَادُ",
        latin:
          "Yâ ilâhî wa sayyidî dammiril-baghya wal-fasâda yâ ilâhî wa sayyidî ashliḫil-amra yâ jawâdu",
        translation:
          "Wahai Tuhanku, wahai tuanku, hancurkanlah kebohongan dan kerusakan. Wahai Tuhanku, wahai tuanku, perbaikilah urusanku, wahai yang maha pemurah.",
      },
      {
        arabic:
          "يَا إِلٰهِيْ بِأَحْمَدَ هَبْ بِنَصْرِهِ لَنَا الْمُرَاد يَا إِلٰهِيْ بِأَحْمَدَ اسْقِنَا الْغَيْثَ فِي الْبِلَادِ",
        latin:
          "Yâ ilâhî biaḫmada hab binashrihi lanal-murâd yâ ilâhî biaḫmadas-qinâl-gha-tsa fil-bilâd",
        translation:
          "Wahai Tuhanku, berkat Nabi Ahmad, berilah apa yang kami semua harapkan. Wahai Tuhanku, berkat Nabi Ahmad, siramilah negeri kami dengan siraman hujan.",
      },
      {
        arabic: "يَا إِلٰهِيْ بِأَحْمَدَ رَحْمَتَكَ تُكْرِمُ الْعِبَـــــادُ",
        latin: "Yâ ilâhi biaḫmada raḫmataka tukrimul-‘ibâdu",
        translation:
          "Wahai Tuhanku, berkat Nabi Ahmad, Engkau muliakan hamba-hamba dengan rahmat-Mu.",
      },
    ],

    //Halaman 13
    [
      {
        translation: "13. Ramaqat âminatu muḫammadan bil-bashari",
      },
      {
        arabic:
          "رَمَقَتْ اٰمِنَةُ مُحَـمَّدًا بِالْبَصَرِ، فَإِذَا فَرْقُهُ كَالصُّبْحِ إِذَا أَسْفَرَ، وَشَعْرُهُ كَاللَّيْلِ إِذَا سَجَى وَاعْتَكَرَ، وَوَجْهُهُ أَضْوَءُ مِنَ الشَّمْسِ وَأَنْوَرُ. أَمَا سَمِعْتَ كَيْفَ انْشَقَّ لَهُ الْقَمَرُ، أَزَجُّ الْحَاجِبَيْنَ أَكْحَلُ الْعَيْنَيْنِ أَقْنَى الْأَنْفِ دَقِيْقُ الشَّفَتَيْنِ، كَأَنَّمَا يَتَبَسَّمُ عَنْ نَضِيْدِ الدُّرَرِ، عُنْقُهُ كَأَنَّهُ إبْرِيْقُ فِضَّةٍ وَقَدْ فَاقَ عَلَى جِيْدِ الْغَزَالِ وَقَدُّهُ أَرْشَقُ مِنَ الْغُصْنِ الرَّطِيْبِ، إِذَا خَطَرَ بَيْنَ كَتِفَيْهِ خَاتَمُ النُّبُوَّةِ فَيَا فَوْزَ مَنْ عَايَنَهُ وَنَظَرَ فَهٰذِهِ قِطْعَةٌ مِنْ بَعْضِ أَوْصَافِ جَمَالِهِ. وَأَمَّا كُلُّ كَمَالِهِ فَلَا يُحَدُّ لِوَاصِفٍ وَلَا يُحْصَرُ",
        latin:
          "Ramaqat âminatu muḫammadan bil-bashari, faidza farquhu kash-shubḫi idza asfara, wa sya‘ruhu kal-laili idzâ saja wa‘takara, wa wajhuhu adlwa’u minasy-syamsi wa anwâru, ammâ sami‘ta kaifan-syaqqa lahul-qamaru. Azajjul-ḫâjibîna akḫalul-‘ainaini aqnal-anfi daqîqusy-syafataini, ka annamâ yatabassamu ‘an nadlîdid-durari, ‘unquhu ka annahu ibrîqu fidldlatin wa qad fâqa ‘ala jîdil-ghazâli wa qadduhu arsyaqu minal-ghushnir-rathîbi, idzâ khathara baina katifaihi khâtamun-nubuwwati fayâ fauza man ‘âyanahu wa nadhara fahâdzihi qith‘atun min ba‘dli aushâfi jamaâlihi, wa ammâ kullu kamâlihi falâ yuḫaddu liwâshifin wa lâ yuhsharu",
        translation:
          "Sayyidah Aminah sekilas memandangi Muhammad. Ternyata tubuhnya laksana subuh di kala bercahaya. Rambutnya laksana malam di kala tenang dan pekat. Wajahnya lebih terang dan bersinar dari matahari. Tidakkah engkau mendengar bagaimana bulan membelah diri untuknya. Dua alisnya begitu tebal. Dua mata seperti sudah dicelak. Hidung yang mancung. Dan dua bibir yang tipis. Di kala senyum tak ubahnya ia bagaikan kilauan mutiara. Lehernya laksana kilatan perak. Tinggi melebihi fostur kijang. Perawakannya lebih bagus dari dahan basah. Dalam pada itu terbesit pula di antara dua bahunya stempel kenabian. Maka alangkah beruntungnya orang yang bisa memerhatikan dan melihatnya. Inilah sedikit cuplikan gambaran keindahannya. Adapun seluruh kesempurnaan tak cukup dan tak terbatas untuk digambarkan.",
      },
    ],

    //Halaman 14
    [
      {
        translation: "14. Fi mitsli ḫusnika tu‘darul-‘usysyâqu",
      },
      {
        arabic:
          "فِيْ مِثْلِ حُسْنِكَ تُعْدَرُ الْعُشَّاقُ وَتُمَدُّ خَاضِعَةً لَكَ الْأَعْنَاقُ",
        latin:
          "Fi mitsli ḫusnika tu‘darul-‘usysyâqu wa tumaddu khâdli‘atan lakal-a‘nâqu",
        translation:
          "Karena keindahan sepertimu, orang-orang yang rindu semakin rindu. Semua leher memanjang tunduk padamu.",
      },
      {
        arabic:
          "قَدْ فَـاقَ حُسْنُكَ لِلْوُجُوْدِ بِأَسْرِه حَتَّى أَضَاءَ بِنُوْرِكَ الْاٰفَاقُ",
        latin:
          "Qad fâqa ḫusnuka lil-wujûdi bi asrihi ḫatta adlâ’a binûrikal-âfâqi",
        translation:
          "Keindahanmu melebihi seluruh wujud hingga semua cakrawala pun terang karena cahayamu.",
      },
      {
        arabic:
          "وَرَوَى مُحَمَّدُ بْنُ سَعِيْدٍ عَنْ جَمَاعَةٍ مِنْ أَهْلِ الْعِلْمِ أَنَّ اٰمِنَةَ لَمَّا حَمَلَتْ بِرَسُولِ اللهِ صَلَّى اللهُ عَلَيْهِ وسَلَّمَ قَالَتْ: لَقَدْ عَلِقْتُ بِهِ فَمَا وَجَدْتُ لَهُ مَشَقَّةً وَلَا تَعَبًا، وَأَنَّهُ لَمَّا فُصَلَ عَنْهَا خَرَجَ مَعَهُ نُورٌ أَضَاءَتْ لَهُ قُصُوْرُ الشَّامِ وَمَا بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ وَوَقَعَ عَلَى الْأَرْضِ مُعْتَمِدًا عَلَى يَدَيْهِ، صَلَّى اللهُ عَلَيْهِ وسَلَّمَ وَزَادَهُ فَضْلاً وَشَرَفًا لَدَيْهِ",
        latin:
          "Wa rawâ muḫâmmadub-nu sa‘idin ‘an jamâ‘atin mun ahlil-‘ilmi anna âminata lammâ ḫamalat birasûlillâhi shallallâhu ‘alaihi wa sallama qâlat: laqad ‘aliqtu bihi famâ wajadtu lahu masyaqatan wa lâ ta‘aban, wa annahu lammâ fushala ‘anhâ kharaja ma‘ahu nûrun adlâ’at lahu qashûrusy-syâmi wa maâ bainal-masyriqi wal-maghribi wa waqa‘a ‘alal-ardli mu‘tamidan ‘ala yadaihi, shallallâhu ‘alaihi wa sallama wa zâdahu fadllan wa syarafan ladaihi.",
        translation:
          "Muhammad bin Sa‘id meriwayatkan dari sekelompok ahli ilmu bahwa ketika Sayyidah Aminah mengandung Rasulullah, ia bercerita: “Di saat hamil, aku sama sekali tidak merasa keberatan dan kelelahan.” Kemudian, ketika sang bayi dilahirkan, terpancarlah cahaya bersamanya sampai menyinari istana-istana Syam dan ruang antara masyrik dan maghrib. Lalu cahaya itu jatuh di bumi tepat di hadapannya. Semoga Allah melimpahkan rahmat dan salam kepadanya. Serta menambah keutamaan dan kemuliaan baginya.",
      },
      {
        arabic:
          "وَرَوَى يَزِيدُ بْنُ عَبدِ اللهِ بْنِ وَهْبٍ عَنْ عَمَّتِهِ أَنَّ اٰمِنَةَ لَمَّا وَضَعَتْ رَسُولَ اللهِ أَرْسَلَتْ إِلَى جَدِّهِ عَبْدِ الْمُطَّلِبِ، فَجَاءَهُ الْبَشِيرُ وَهُوَ جَالِسٌ فِي الْحِجْرِ فَأَخْبَرَهُ أَنَّ اٰمِنَةَ وَلَدَتْ غُلَامًا فَسَرَّ بِذٰلِكَ سُرُوْرًا كَثِيرًا. وَقَامَ هُوَ وَمَنْ مَعَهُ فَدَخَلَ عَلَيْهَا فَأَخْبَرَتْهُ بِكُلِّ مَا رَأَتْهُ وَمَا قِيْلَ لَهَا وَمَا أُمِرَتْ بِهِ فَأَخَذَهُ جَدُّهُ عَبدُ الْمُطَّلِبِ وَأَدْخَلَهُ الْكَعْبَةَ وَقَامَ عِنْدَهَا يَدْعُو اللهَ وَيَشْكُرُهُ عَزَّ وَجَلَّ عَلَى مَا أَعْطَاهُ. وَرُوِيَ أَنَّهُ قَالَ يَوْمَئِذٍ شِعْرًا",
        latin:
          "Wa rawâ yazîdub-nu ‘abdillâhib-ni wahbin ‘an ‘ammatihi anna âminata lammâ wadla‘at rasûlallâhi arsalat ila jaddihi ‘abdil-muththalibi, fajâ’ahul-basyîru wa huwa jâlisun fil-ḫijri fa akhbarahu anna âminata waladat ghulâman fasarra bidzâlika surûran katsîran, wa qâma huwa wa man ma‘ahu fadakhala ‘alaihâ ‘abdul-muththalibi wa adkhalahul-ka‘bata wa qâma ‘indahâ yad‘ûllâha wa yasykuruhu ‘azza wa jalla ‘ala mâ a‘thâhu, wa ruwiya annahu qâla yauma’idzin syi‘ran",
        translation:
          "Yazid bin Abdullah bin Wahb meriwayatkan dari bibinya bahwa ketika melahirkan Rasulullah ﷺ, Sayyidah Aminah mengirim utusan kepada kakeknya Abdul Muthalib. Kabar gembira datang kepadanya tepat saat ia sedang duduk di Hijir Ismail. Utusan itu menyampaikan bahwa Aminah telah melihrkan anak laki-laki. Mendengar demikian, ia pun senang luar biasa. Ia bangkit bersama sang utusan lantas menemui Aminah. Aminah pun menceritakan segala yang telah disaksikannya, apa yang disampaikan kepada dirinya, dan apa yang diperintahkan kepada dirinya. Sang kakek segera memangku bayi Muhammad dan membawanya masuk ke dalam Ka’bah. Ia berdiri di dalamnya seraya berdoa kepada Allah dan bersyukur kepada-Nya atas karunia yang diberikan kepada dirinya. Diriwayatkan pada saat itu ia bersenandung syair.",
      },
    ],

    //Halaman 15
    [
      {
        translation: "15. Shallâ ‘alaikallâu yâ ‘adnânî",
      },
      {
        arabic:
          "صَلَّى عَلَيْكَ اللهُ يَا عَدْنَانِيْ يَا مُصْطَفَى يَا صَفْوَةَ الرَّحْمَــــانِ",
        latin:
          "Shallâ ‘alaikallâu yâ ‘adnânî yâ mushthafa yâ shafwatar-raḫmâni",
        translation:
          "Semoga Allah melimpahkan rahmat kepadamu, wahai turunan Adnan, wahai nabi terpilih, wahai pilihan Dzat yang maha pengasih.",
      },
      {
        arabic:
          "الْحَمْــدُ لِلّٰهِ الَّذِيْ أَعْطَانِيْ هٰــذَا الْغُـــلَامَ الطَّيِّبَ الْأَرْدَانِ",
        latin:
          "Al-ḫamdulillâhil-ladzî a‘thânî hâdzal-ghulâmath-thayyibal-ardâni",
        translation:
          "Segala puji bagi Allah, Dzat yang telah memberiku anak laki-laki yang mulia dan bagaikan sutra merah.",
      },
      {
        arabic:
          "قَدْ سَادَ فِي الْمَهْدِ عَلَى الْغِلْمَانِ أُعِيْذُهُ بِالْبَيْتِ ذِي الْأَرْكَانِ",
        latin:
          "Qad sâda fil-mahdi ‘alal-ghilmâni u‘îdzuhu bil-baiti dzil-arkâni",
        translation:
          "Ia telah menjadi pemimpin sejak dalam buaian atas anak-anak yang lain. Aku pun mempuisikannya dengan bait yang memiliki pilar-pilar.",
      },
      {
        arabic:
          "حَتَّى أَرَاهُ بَـــــالِـــغَ الْبُنْيَــــانِ أَنْتَ الَّذِيْ سُمِّيْتَ فِي الْقُــرْاٰنِ",
        latin: "ḫatta arâhu bâlighal-bunyâni antal-ladzî summiyata fil-qur’âni",
        translation:
          "Hingga aku melihat kisahnya sangat jelas. Sungguh engkau adalah sosok yang dinamai dalam Al-Quran.",
      },
      {
        arabic:
          "أَحْمَدَ مَكْتُوْبٌ عَلَى الْجِنَـــانِ صَلَّى عَلَيْكَ اللهُ فِي الْأَحْيَــانِ",
        latin: "Aḫmada maktûbun ‘alal-jinâni shalla ‘alaikallâhu fil-aḫyâni",
        translation:
          "Tertulis Nama Ahmad di surga-surga. Semoga Allah melimpahkan rahmatnya kepada-Mu di antara makhluk-makhluk hidup.",
      },
      {
        arabic:
          "أَحْمَـــدُهُ فِي السِّــرِّ وَالْإِعْلَانِ حَقًّــــا عَلَى الْإِسْلَامِ وَالْإِيمَـانِ",
        latin: "Aḫmaduhu fis-sirri wal-i‘lâni ḫaqqan ‘alal-islâmi wal-îmâni",
        translation:
          "Aku memujinya baik sembunyi-sembunyi maupun tarang-terangan, yang hak atas keislaman dan keimanan.",
      },
      {
        arabic:
          "يَا رَبَّنَا بِالْمُصْطَفَى الْعَدْنَانِ اغْفِرْ ذُنُوْبِيْ ثُمَّ أَصْلِحْ شَـأْنِيْ",
        latin:
          "Yâ rabbanâ bil-mushthafal-‘adnâni ghfir dzunûbî tsumma ashliḫ sya’nî",
        translation:
          "Wahai Tuhan kami, dengan nabi terpilih dari turunan Adnan, ampunilah dosa-dosaku, serta perbaikilah urusanku.",
      },
    ],

    //Halaman 16
    [
      {
        translation: "16. Fasubḫâna man abraza",
      },
      {
        arabic:
          "فَسُبْحَانَ مَنْ أَبْرَزَ فِي شَهْرٍ رَبِيعِ الْأَوَّلِ طَلْعَةَ قمَرِ الْوُجُودِ. فَمَا أَجْمَلَهَا مِنْ طَلْعَةٍ وَأَبْهَاهَا. وَمَا أَحْسَنَهَا مِنْ مَحَاسِنَ وَأَحْلَاهَا. حَمَلَتْ بِهِ اٰمِنَةُ فَجَاءَهَا اٰدَمُ وَهَنَّاهَا. وَوَقَفَ نُوْحٌ عَلَى بَابِهَا وَنَادَهَا. وَأَتٰهَا الْخَلِيْلُ يُبَشِّرُهَا بِمَا أَتَاهَا. وَقَصَدَ حِلَّتَهَا مُوسَى الْكَلِيْمُ وَسَلَّمَ عَلَيْهَا وَحَيَّاهَا. كُلُّ ذٰلِكَ لِأَجْلِ هٰذَا الْمَوْلُوْدِ الَّذِيْ تَشَرَّفَتْ بِهِ الْأَرْضُ وَثَرَاهَا. وَجَاءَتِ الطُّيُورُ مِنْ أَوْ كَارِهَا وَفِنَاهَا. وَخَرَجَتِ الحُوْرُ الْعِيْنُ وَعَلَيْهِنَّ جَلَعُ السُّرُوْرِ وَحُلَاهَا. وَهُنَّ يُنَادِيْنَ مَا هٰذَا النُّورُ الَّذِيْ مَلَأَ الْبِقَاعَ وَكَسَاهَا. فَقَالَ جِبْرِيْلُ قَدْ وُلِدَ مَنْ فَاقَ الْبَرِيَّةَ وَمَا عَدَاهَا. وَخَرَّتْ لِمَوْلِدِهِ الْأَصْنَامُ وَهُدِّمَتْ صَوَامِعُ الْكُهَّانِ وَزَالَ بِنَاهَا. وَحَمَلَهُ جِبْرِيلُ عَلَى يَدَيْهِ وَهُوَ يُقَبِّلُ بَيْنَ عَيْنَيْهِ، وَيَقُولُ لَهُ أَنْتَ حٰــمٓ، أَنْتَ يٰسٓ، أَنْتَ طٰهٰ، أَنْتَ وَلِيُّ النُّفُوْسِ الْمُؤْمِنَاتِ أَنْتَ مَوْلٰهَا",
        latin:
          "Fasubḫâna man abraza fî syahri rabî‘il-awwali thal‘ata qamaril-wujûdi, famâ ajmalahâ min thal‘atin wa abhâhâ, wa mâ aḫsanahâ min maḫâsina wa aḫlâhâ, ḫamalat bihi âminatu fajâ’âhâ âdamu wa hannâhâ, wa waqafa nûhun ‘alâ bâbihâ wa nâdahâ, wa atâhâl-khalîlu yubasysyiruhâ bimâ atâhâ, wa qashada ḫillatahâ mûsal-kalîmu wa sallama ‘alaihâ wa ḫayyâhâ, kullu dzâlika li’ajli hâdzal-maulûdil-ladzî tasyarrafat bihil-ardlu wa tsarâhâ, wa jâ’atith-thuyûru min aukârihâ wa finâhâ, wa kharajatil-ḫûrul-‘ainu wa ‘alaihinna jala‘us-surûri wa ḫulâhâ, wa hunna yunâdîna mâ hâdzan-nûrul-ladzî mala’al-biqâ‘i wa kasâhâ. Faqâla jibrîlu qad wulida man fâqal-bariyyata wa mâ ‘adâhâ, wa ḫamalahu jibrîlu ‘ala yadaihi wa huwa yuqabbilu baina ‘ainaihi, wa yaqûlu lahu anta ḫâmim, anta yâsin, anta thâhâ, anta waliyyun-nufûsil-mu’minâti anta maulahâ.",
        translation:
          "Maha suci Dzat yang menampakkan kilauan rembulan wujud pada bulan Rabiul Awal. Alangkah indah dan megahnya kilauan itu. Alangkah cantik dan manisnya kilauan keindahan itu. Saat mengandung Muhammad, Sayyidah Aminah didatangi dan diberi selamat oleh Nabi Adam. Nabi Nuh pun berdiri di depan pintunya lalu menyapa. Tak ketinggalan juga Nabi Ibrahim al-Khalil memberi kabar kepadanya atas karunia yang datang kepadanya. Begitu pula Nabi Musa Al-Kalim. Ia datang menghampirinya seraya mengucap salam dan memberi penghormatan. Semua itu demi bayi yang terlahir dan membuat bumi serta kekayaannya menjadi terhormat. Burung-burung datang dari sarang dan tempat permainannya. Bidadari keluar dengan pakaian dan jubah kebahagiaan. Mereka menanyakan, sinar apa yang memenuhi dan menyelimuti hamparan tanah. Malaikat Jibril menjawab, “Seorang bayi yang mengungguli dan melampaui seluruh makhluk telah lahir.” Karena kelahiran itu, seluruh berhala tersungkur. Tempat-tempat tapa para dukun pun hancur. Dan bangunan-bangunannya menghilang. Lantas malaikat Jibril membawa sang bayi ke hadapan dirinya dan menciumi bagian antara kedua matanya, seraya berkata, “Engkau Ha mim, engkau Yasin, engkau Thaha, engkau pemimpin seluruh jiwa yang beriman, dan engkau adalah tuan mereka.",
      },
    ],

    //Halaman 17
    [
      {
        translation: "17. Allâhu Allâhu Allâhu",
      },
      {
        arabic:
          "اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ يَا خَالِقَ الْبَشَرِ",
        latin:
          "Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu yâ khâliqal-basyar",
        translation:
          "Allah, Allah, Allah, Allah, Allah, Allah, Allah, Allah, Allah, wahai Pencipta manusia.",
      },
      {
        arabic:
          "بَدَتْ لَنَا فِيْ رَبيْعٍ طَلْعَــــةُ الْقَمَرِ مِنْ وَجْهِ مَنْ فَاقَ كُلَّ الْبَدْرِ وَالْحَضَرِ",
        latin:
          "Badat lanâ fî rabî‘i thal‘atul-qamari min wajhi man fâqa kullal-badri wal-ḫadlari",
        translation:
          "Terbitlah pada kami di bulan Rabiul Awal cahaya rembulan, dari wajah seseorang yang mengungguli cahaya bulan purnama permata hijau.",
      },
      {
        arabic:
          "جَلَوْهُ فِي الْكَوْنِ وَالْأَمْلَاكُ تَحْجُبُهُ فِيْ طَلْعَةِ الْحُسْنِ بَيْنَ التِّيْهِ وَالْحَفَرِ",
        latin:
          "Jalauhu fil-kauni wal-amlâku taḫjubuhu fî thal‘atil-ḫusni bainat-tîhi wal-ḫafari",
        translation:
          "Semua mengagungkannya di tengah semesta. Namun para malaikat pun terhalang melihat keindahannya di antara bukit Tih dan Hafar.",
      },
      {
        arabic:
          "وَكَانَ فِي مِثْلِ هَــذَا الشَّهْرِ مَوْلِدُهُ أَكْرِمْ بِمَوْلِدِ خَــــيْرِ الْخَلْقِ وَالْبَشَرِ",
        latin:
          "Wa kâna fî mitsli hâdzasy-syahri mauliduhu akrim bimaulidi khairil-khalqi",
        translation:
          "Pada bulan Rabiul Awal seperti ini maulidnya diadakan. Maka muliakanlah waktu kelahiran makhluk dan manusia terbaik ini.",
      },
      {
        arabic:
          "تَجَمَّعَ الْحُسْنُ فِيْهِ فَهُوَ وَاحِــــــدُهُ جَلَوْهُ فِيْ صُوْرَةٍ فَاقَتْ عَلَى الصُّوَرِ",
        latin:
          "Tajama’al-ḫusnu fîhi fahuwa wâḫiduhu jalauhu fî shûratin fâqat ‘alash-shûwari",
        translation:
          "Di bulan ini keindahannya terhimpun. Maka dialah satu-satunya yang mereka agungkan dalam rupa yang mengungguli rupa-rupa yang lain.",
      },
      {
        arabic:
          "مَتَى أَرَى رَبْعَهُ يَــــا سَعْدُ أَسْعَ لَهُ سَعْيًا عَلَى الرَّأْسِ بَلْ سَعْيًا عَلَى الْبَصَرِ",
        latin:
          "Matâ arâ rab‘ahu yâ sa‘du as‘a lahu sa‘yan ‘alar-ra’si bal sa‘yan ‘alal-bashari",
        translation:
          "Kapan pun aku bisa melihat kediamannya, maka betapa bahagianya aku. Walau aku harus menghampirinya dengan kepala, bahkan dengan mata.",
      },
      {
        arabic:
          "إِنْ لَّمْ أَزُرْ قَبْرَهُ يَا سَعْدُ فِيْ عُمُرِيْ مِنْ بَعْدِ هٰذَا الْجَفَا يَا ضَيْعَةَ الْعُمُرِ",
        latin:
          "In lam azur qabrahu yâ sa‘du fî ‘umurî min ba‘di hâdzâl-jafâ yâ dla‘atal-‘umuri",
        translation:
          "Meski aku belum bisa menziarahi kuburnya, maka betapa bahagianya aku dalam umurku setelah sebelumnya kekeringan, wahai diri yang kehilangan umur.",
      },
      {
        arabic:
          "تَقَسَّـــمَ الْحُبُّ فِيْهِ كُلَّ جَارِحَــــةٍ فَالْوَجْدُ لِلْقَلْبِ وَالْأَجْفَــــانُ لِلسَّهَرِ",
        latin:
          "Taqassamal-ḫubbu fîhi kulla jâriḫâtin fal-wajdu lil-qalbi wal-ajfâni lis-sahari",
        translation:
          "Bulan ini cinta harus terbagi untuk setiap anggota badan. Perasaan untuk hati dan bulu mata untuk gadang terjaga.",
      },
      {
        arabic:
          "صَلَّى عَلَيْهِ إِلٰهُ الْعَرْشِ مَا صَدَ حَتْ حَمَائِمُ الْوُرْقِ فِي الْاٰصَالِ وَالْبُكَرِ",
        latin:
          "Shalla ‘alaihi ilâhul-‘arsyi mâ shadaḫat ḫamâ’imul-wurqi fil-âshâli wal-bukari",
        translation:
          "Semoga Allah Tuhan Arasy melimpahkan rahmat kepadanya selama burung-burung pohon masih berkicau setiap sore dan pagi.",
      },
    ],

    //Halaman 18
    [
      {
        translation: "18. Falammâ âna awânu maulidihil-karîmi",
      },
      {
        arabic:
          "فَلَمَّا اٰنَ أَوَانُ مَوْلِدِهِ الْكَرِيمِ، وَحَانَ مَقْدَمُهُ الشَّرِيْفُ الْعَظِيْمُ، صَاحَ شَاوُوْشُ الْإِشَارَةِ بِالْبَشَارَةِ لِأَهْلِ الْأَرْضِ أَجْمَعِينَ ﴿وَمَا أَرْسَلْنَاكَ إلَّا رَحْمَةً لِلْعَالَمِيْنَ﴾. فَعِنْدَ ذٰلِكَ حَفَّتْ بِأُمِّهِ اٰمِنَةَ الْمَلَائِكَةُ الْأَبْرَارُ، تَحْجُبُهَا بِأَجْنِحَتِهَا عَنْ أَعْيُنِ الْأَغْيَارِ. فَوَقَفَ عَنْ يَمِيْنِهَا مِيْكَائِيْلُ وَبَيْنَ يَدَيْهَا جِبْرِيلُ وَلَهُمْ زَجَلٌ بِالتَّسْبِيْحِ وَالتَّقْدِيسِ وَالتَّهْلِيْلِ لِلْمَلِكِ الْجَلِيلِ. وَأَقْبَلَتِ الْحُوْرُ الْعِيْنُ إِلَى أُمِّهِ اٰمِنَةَ الْكَرِيْمَةِ تُبَشِّرُهَا بِأَنَّهَا مِنْ جَمِيْعِ الْمَخَاوِفِ اٰمِنَةٌ. وَتَنُوْبُ عَنِ الْقَوَابِلِ الْبَشَرِيَّةِ بِالسَّعَادَةِ الْأَبَدِيَّةِ وَالْغُرَّةِ الْقَمَرِيَّةِ، وَالطَّلْعَةِ الْمُحَمَّدِيَّةِ، أخَذَهَا الْمَخَاضُ وَلَمْ تُصِبْهَا اٰلَامُهُ فَوَلَدَتِ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ كَأَنَّهُ الْبَدْرُ فِيْ تَمَامِهِ",
        latin:
          "Falammâ âna awânu maulidihil-karîmi, wa ḫâna maqdamuhusy-syarîful-adhîmu, shâḫa syâwûsyul-isyârâti bil-bisyârati liahlil-ardli ajma‘îna. (wa mâ arsalnâka illâ raḫmatal lil-‘âlamîn) Fa ‘inda dzâlika ḫaffat bi ummihi âminatal-malâ’ikatul-abrâru, taḫjabuhâ bi ajniḫatihâ ‘an a‘yunil-aghyâri, fawaqafa ‘an yamînihâ mîkâîla wa baina yadaihâ jibrîlu wa lahum zajâlun bit-tasbîḫi wat-taqdîsi wat-tahlîli lil-malikil-jalîli, wa aqbalatil-ḫûrul-‘înu ila ummihi âminatal-karîmati tubasysyiruhâ bi annahâ min jamî‘il-makhâwifi âminatun, wa tanûbu ‘anil-qawâbilil-basyariyyati bis-sa‘âdatil-abadiyyati wal-ghurratil-qamariyyati, wath-thal‘ati-muḫammadiyati, akhadzahal-makhâdlu wa lam tushibhal-âlâmuhu fawaladatin-nabiyyu shallallâhu ‘alaihi wa sallama, ka annahul-badru fî tamâmihi.",
        translation:
          "Ketika datang waktunya kelahiran bayi yang mulia, dan ketika datang saatnya kedatangan bayi yang agung, maka tersiarlah isyarat kabar gembira bagi seluruh penduduk bumi, sebagaimana dalam Al-Quran, (Tidaklah Kami mengutus engkau kecuali sebagai rahmat bagi seluruh alam). Dalam pada itu, berkelilinglah di sekitar Ibunda Aminah para malaikat yang suci. Mereka melindunginya dengan sayap-sayap mereka. Mereka tak henti-hentinya mensucikan Allah, bertasbih dan bertahlil kepada Dzat Yang Maha merajai dan Maha Agung. Tak lama berselang, satu bidadari datang menghadap Ibunda Aminah seraya memberi kabar gembira kepadanya bahwa ia aman dari segala bentuk yang menakutkan. Bidadari itu menggantikan dukun-dukun bayi dari golongan manusia dengan kebahagiaan abadi, pancaran cahaya rembulan, dan pancaran Muhammad. Rasa sakit dan penderitaan benar-benar diangkat dari Aminah. Ia pun melahirkan Nabi ﷺ seakan-akan bulan purnama yang sedang terang sempura.",
      },
    ],

    //Halaman 19
    [
      {
        translation: "19. Mahalul Qiyam : Yâ nabî salâm ‘alaika",
      },
      {
        arabic:
          "يَــــانَبِيْ سَـــــلَامٌ عَلَيْكَ يَارَسُوْل سَــلَامٌ عَلَيْكَ",
        latin: "Yâ nabî salâm ‘alaika yâ rasûl salâm ‘alaika",
        translation:
          "Wahai Nabi ﷺ, semoga keselamatan tetap untukmu. Wahai Rasul, semoga keselamatan tetap untukmu",
      },
      {
        arabic: "يَاحَبِيْب سَلَامٌ عَلَيْكَ صَـــلَوَاتُ اللهِ عَلَيْــــكَ",
        latin: "Yâ ḫabîb salâm ‘alaika shalawâtullâhi ‘alaika",
        translation:
          "Wahai kekasih, semoga keselamatan tetap untukmu. Juga rahmat Allah semoga tercurah untukmu",
      },
      {
        arabic:
          "أَشْرَقَ الْبَــــدْرُ عَـلَيْنَـــا فَاخْتَــــفَــــتْ مِنْــــهُ الْبُدُوْرُ",
        latin: "Asyraqal badru ‘alainâ fakhtafat minhul-budûru",
        translation:
          "Bulan purnama telah terbit menyinari kami. Pudarlah purnama-purnama lainnya.",
      },
      {
        arabic:
          "مِثْلَ حُسْنِكْ مَا رَاَيْنَا قَــــطُّ يَا وَجْــــهَ السُّــــرُوْرِ",
        latin: "Mitsla ḫusnik mâ rainâ qaththu yâ wajhas-surûri",
        translation:
          "Belum pernah aku lihat keelokan sepertimu, wahai orang yang berwajah riang.",
      },
      {
        arabic: "أَنْتَ شَمْـسٌ أَنْتَ بَدْرٌ أَنْتَ نُورٌ فَوقَ نُورٍ",
        latin: "Anta syamsun anta badrun anta nûrun fauqa nûrin",
        translation:
          "Engkau bagai matahari, engkau bagai bulan purnama, engkau cahaya di atas cahaya",
      },
      {
        arabic:
          "أَنْتَ إِكْسِــــيْرٌ وَغَــالِي أَنْتَ مِصْبَاحُ الصُّـدُوْرِ",
        latin: "Anta iksîrun wa ghâlî anta mishbâḫus-sudûri",
        translation:
          "Engkau bagaikan emas murni yang mahal harganya, engkaulah pelita hati kami.",
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
          "يَـــــا مُؤَيَّــدْ يَــــا مُمَجَّـــدُ يَــــا إِمَــــامَ الْقِبْلَتَــــيْنِ",
        latin: "Yâ mu’ayyad yâ mumajjad yâ imâmal-qiblataini",
        translation:
          "Wahai Nabi yang dikuatkan (dengan wahyu), wahai Nabi yang diagungkan, wahai imam dua arah kiblat (semula Baitul Maqdis lalu Masjidil Haram).",
      },
      {
        arabic: "مَنْ رَاٰى وَجْهَـــكَ يَسْعَدُ يَاكَــــرِيْمَ الْوالِدَيْنِ",
        latin: "Man râ’a wajhaka yas‘adu yâ karîmal-wâlidaini",
        translation:
          "Siapa pun yang melihat wajahmu pasti berbahagia, wahai orang yang mulia kedua orang tuanya.",
      },
      {
        arabic: "حَوْضُكَ الصَّافِي الْمُبَرَّدُ وِرْدُنَا يَوْمَ النُّشُورِ",
        latin: "ḫaudlukash-shâfil-mubarradu wirdunâ yauman-nusyûri",
        translation:
          "Telagamu jernih dan sejuk, yang akan kami datangi kelak di hari kiamat.",
      },
      {
        arabic:
          "مَا رَأَيْـنَـــا الْعِيْسَ حَنَّتْ بِالسُّـــرٰى إِلَّا اِلَيْـــكَ",
        latin: "Mâ rainal-‘îsa ḫanat bis-surâ ilâ ilaika",
        translation:
          "Belum pernah unta putih bercorak kekuning-kekuningan (jenis unta terbaik) berjalan malam hari kecuali unta yang datang kepadamu.",
      },
      {
        arabic:
          "وَالْغَمَــامَــــةْ قَـــدْ أَظَلَّتْ وَالْمَــلَا صَـلَّى عَلَيْكَ",
        latin: "Wal-ghamâmat qad adhallat wal-malâ shalla ‘alaika",
        translation:
          "Awan tebal memayungimu, seluruh golongan manusia mengucapkan shalawat kepadamu.",
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
          "وَاسْتَجَـــارَتْ يَاحَبِيْــبِي عِنْدَكَ الظَّــــبْيُ النُّـــفُوْرُ",
        latin: "Was-tajarat yâ ḫabîbî ‘indakadh-dhabyun-nufûru",
        translation:
          "Kijang gesit datang memohon keselamatan kepadamu, wahai kekasih.",
      },
      {
        arabic:
          "عِنْدَ مَا شَدُّوْا الْمَحَامِلْ وَتَنَــــادَوْا لِلرَّحِيْــــلِ",
        latin: "‘inda mâ syaddûl-maḫâmil wa tanâdau lir-raḫîli",
        translation:
          "Ketika serombongan berkemas dan menyerukan untuk berangkat",
      },
      {
        arabic:
          "جِئْتُهُمْ وَالدَّمْـــعُ سَائِـــلْ قُلْتُ قِفْ لِى يَا دَلِيْــــلُ",
        latin: "Ji’tuhum wad-dam‘u sâ’il qultu qif yâ dalîlu",
        translation:
          "Kudatangi mereka dengan berlinang air mata seraya kuucapkan tunggulah, wahai pemimpin rombongan",
      },
      {
        arabic:
          "وَتَحَمَّلْ لِيْ رَسَـــائِــــلْ اَيُّهَا الشَّوقُ الْجَـــزِيْلُ",
        latin: "Wa taḫammal lî rasâ’il ayyuhasy-syauqul-jazîlu",
        translation: "Bawakan aku surat yang berisikan kerinduan yang mendalam",
      },
      {
        arabic: "نَحْوَ هَاتِيْـــكَ الْمَنَازِلْ بِالْعَشِي وَالْبُكُوْرِ",
        latin: "Naḫwa hâ tîkal-manâzil bil‘asyiyyi wal-bukûri",
        translation:
          "Membawakan ke tempat yang jauh ketika petang dan paginya.",
      },
      {
        arabic:
          "كُلُّ مَنْ فِي الْكَوْنِ هَامُوْا فِيْــــكَ يَابَاهِى الْجَبِـــيْنِ",
        latin: "Kullu man fil-kauni hâmû fîka yâ bâhil-jabîni",
        translation:
          "Setiap orang di jagad raya ini bingung (karena sangat rindu) kepadamu, wahai orang yang bersinar kedua keningnya.",
      },
      {
        arabic:
          "وَلَهُـــــــمْ فِيْـــكَ غَـــــرَامُ وَاشْتِيَـــــاقٌ وَحَنِـــيْنُ",
        latin: "Walahum fîka gharâmu wastiyâqun wa ḫanînu",
        translation:
          "Mereka terpikat, tergila-gila, dan meronta-ronta denganmu tentang sifatmu.",
      },
      {
        arabic:
          "فِي مَعَـــانِيْــــكَ الْأَنَـــامُ قَدْتَبَدَّتْ حَــآئِــــرِيْنَ",
        latin: "Fî ma’ânîkal-anâmu qad tabat ḫâ’irîna",
        translation:
          "Para makhluk berbeda pendapat dan bingung (tidak mampu menyifati dengan sempurna)",
      },
      {
        arabic: "أَنْتَ لِلرُّسْـــلِ خِتَـــــامُ أَنْتَ لِلْمَوْلىٰ شَكُوْرُ",
        latin: "Anta lir-rusli khitâmu anta lil-maulâ syakûru",
        translation:
          "Engkau adalah penutup para utusan, engkau adalah orang yang paling banyak bersyukur kepada Allah.",
      },
      {
        arabic:
          "عَبْدُكَ الْمِسْكِيْنُ يَرْجُوْ فَضْلَكَ الْجَـــمَّ الْغَفِــــيْرَ",
        latin: "‘abdukal-miskînu yarjû fadllakal-jammal-ghafîru",
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
          "فَــــــأَغِثْنِيْ وَأَجِـــــــرْنِي يَامُجِيْرُ مِنَ السَّعِــــيْرِ",
        latin: "Fa aghitsnî wa ajirnî yâ mujîru minas-sa‘îri",
        translation:
          "Maka tolonglah aku dan selamatkan aku, wahai sang penyelamat, dari neraka Sa‘ir.",
      },
      {
        arabic: "يَـــاغِيَـــاثِي يَامَـــلَاذِيْ فِيْ مُهِمَّاتِ الْأُمُورِ",
        latin: "Yâ ghiyâtsi yâ malâdzî fi muhimmâtil-umûri",
        translation:
          "Wahai penolongku, wahai tempat berlindungku dalam perkara-perkara yang menyulitkan.",
      },
      {
        arabic:
          "سَعْدَ عَبْــــدٌ قَدْ تَمَـــلَّى وَانْجَــــلىٰ عَنْـــهُ الْحَزِيْنُ",
        latin: "sa‘da ‘abdun qad tamalla wanjalâ ‘anhul-ḫazînu",
        translation:
          "Berbahagialah dan hilanglah kesusahan hamba yang senang kepadamu.",
      },
      {
        arabic:
          "فِيْـــكَ يَـــــابَدْرٌتَجَـــــلَّى فَلَكَ الْوَصْـــفُ الْحَسِينُ",
        latin: "Fîka badrun tajalla falakal-washful-ḫasînu",
        translation:
          "Wahai bulan purnama yang tampak terang, engkaulah pemilik sifat yang indah",
      },
      {
        arabic:
          "لَيْسَ أَزْكىٰ مِنْكَ أَصْلاً قَــطُّ يَاجَدَّ الْحُـسَــــيْنِ",
        latin: "Laisa azkâ minka ashlan qaththu yâ jaddal-ḫusaini",
        translation:
          "Tiada orang yang leluhur nasabnya lebih suci darimu sama sekali, wahai kakek Hasan dan Husain.",
      },
      {
        arabic:
          "فَعَلَيْـــكَ اللهُ صَـــــلَّى دَآئِمًــــــا طُولَ الدُّهُورِ",
        latin: "fa‘alaikallâhu shalla dâ’iman thûlad-duhûri",
        translation: "Bagimu shalawat Allah selamanya sepanjang masa.",
      },
      {
        arabic:
          "يَــــاوَلِيَّ الْحَسَنَــــاتِ يَارَفِيْـــعَ الدَّرَجَــــاتِ",
        latin: "Yâ waliyyal-ḫasanâti yâ rafî‘ad-darajâti",
        translation:
          "Wahai Dzat Penguasa kebaikan, wahai Dzat Yang berpangkat Tinggi",
      },
      {
        arabic: "كَفِّــــرْ عَنِّي الذُّنُوبَ وَاغْفِرْعَنِّي سَيئَــــاتِ",
        latin: "Kaffir ‘anniyadz-dzunûba waghfir ‘anni sayyi’âti",
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
        latin: "Anta sattârul-masâwî wa muqîlul-lul-atsarâti",
        translation:
          "Engkau adalah Yang Menutupi kejelekan dan menyelamatkan dari kesalahan.",
      },
      {
        arabic: "عَالِـــمُ السِّــــرِّ وَأَخْفىٰ مُسْتَجِيْبُ الدَّعَوَاتِ",
        latin: "‘âllimus-sirri wa akhfâ mustajîbud-da‘awâti",
        translation:
          "Engkau Maha Mengetahui rahasia dan kesamaran, Engkau adalah Pengabul doa.",
      },
      {
        arabic: "رَبِّ فَارْحَمْـنَا جَمِيْـعًا وَامْحُ عَنَّا السَّيِّئَاتِ",
        latin: "Rabbi farḫamnâ jamî‘an wamḫu ‘annâs-sayyi’âti",
        translation:
          "Rabbi, belas kasihanilah kami semua dengan mampu menjalankan segala amal baik",
      },
      {
        arabic:
          "وَصَــــلَاةُ الله تَغْشَــــا عَدَّ تَحْـــــرِيْرِ السُطُورِ",
        latin: "Wa shalâtullâḫi taghsyâ ‘adda taḫrîris-suthûri",
        translation:
          "Rahmat Allah semoga senantiasa tercurah, selama masih terbuka catatan amal hamba",
      },
      {
        arabic: "أَحْمَــدَ الْهَادِيْ مُحَمَّـدْ صَاحِبَ الْوَجْهِ الْمُنِيرِ",
        latin: "Aḫmadal-hâdî muḫammad shâḫibal-wajhil-munîri",
        translation:
          "Ahmad sang petunjuk yaitu Nabi Muhammad pemilik wajah yang bersinar.",
      },
      {
        arabic: "رَبِّ فَارْحَمْنَاجَمِيْـعًــــا بِجَمِيْعِ الصَّالِحَــــاتِ",
        latin: "Rabbî farḫamnâ jamî’an bijamî‘ish-shâliḫâti",
        translation:
          "Ya Allah, rahmatilah kami semuanya dengan segala untaian kebaikan!",
      },
    ],

    //Halaman 20
    [
      {
        translation: "20. Falammâ asyraqa nûruhu",
      },
      {
        arabic:
          "فَلَمَّا أَشْرَقَ نُورُهُ فِي الْوُجُوْدِ أَذْعَنَ لِلّٰهِ بِالسُّجُوْدِ وَلَمْ يُخْلَقْ مِثْلَهُ مَوْلُوْدٌ ثُمَّ أَوْمَأَ بِأَصْبُعِهِ إِلَى السَّمَاءِ فَوُلِدَ مَختُوْنًا مُكَحَّلًا مَدْهُوْنًا مُعَطَّرًا مُكَرَّمًا وَخَرَجَ مِنْ ثَغْرِهِ نُوْرًا أَضَاءَ لَهُ قُصُوْرُ بَصْرَى مِنْ أَرْضِ الشَّامِ. وَخَرَّتْ لِهَيْبَتِهِ جَمِيعُ الصُّلْبَانِ وَالْأَصْنَامِ. وَأَصْبَحَ كُلُّ جَبَّارٍ بَعْدَ عِزَّتِهِ ذَلِيلاً. وَمُنِعَتِ الشَّيَاطِيْنُ أَنْ تَسْرِقَ السَّمْعَ فَلَمْ تَجِدْ بَعْدَ ذٰلِكَ إِلَى السَّمَاءِ وُصُوْلاً. فَلَمَّا بَدَتْ أَنْوَارُ غُرَّتِهِ الْبَهِيَّةِ، وَأَشْرَقَتْ شَمْسُ طَلْعَتِهِ الْعُلْوِيَّةِ، أَضَاءَتْ بِمَوْلِدِهِ ظُلَمُ الْحَنَادِسِ، وَانْشَقَّ إِيْوَانُ كِسْرَى وَخَمِدَتْ نَارُ فَارِسَ وَكُسِرَتِ الصُّلْبَانُ تَعْظِيمًا لِقُدُوْمِهِ وَتَوْقِيْرًا. وَنَادَى الْمُنَادِيْ فِي الْأَكْوَانِ تَنْبِيْهًا لِأُمَّتِهِ عَلَى كَرَامَتِهِ وَتَذْكِيْرًا",
        latin:
          "Falammâ asyraqa nûruhu fil wujûdi adz‘ana lillâhi bis-sujûdi wa lam yukhlaq mitslahu maulûdun tsumma auma‘a bi asbu‘ihi ilas-samâ’i fa wulida maḫtûnan mulaḫḫalan madhûnan mu‘aththaran mukarraman wa kharaja min tsaghrihi nûran adlâ’a lahu qushûrun bashrâ min ardlisy-syâm, wa kharrat lihaibatihi jamî‘ush-shulbâni wal-ashnâmi, wa ashbaḫa kullu jabbârin ba‘da ‘izzatihi dzalîlan, wa muni‘atisy-syayâthînu, an tasriqas-sam‘a falam tajid ba‘da dzâlika ilas-samâ’i wushûlan, falammâ badat anwâru ghurratihil-bahiyyati, wa ayraqat syamsu thal‘atihil-‘ulwiyyah, adla’ât bimaulidihi dhulamul-ḫanâdisi, wansyaqqa îwânu kisrâ wa khamidat nâru fârisa wa kusiratish-shulbânu ta‘dhîman liqudûmihi wa tauqîran, wa nâdal-munâdi fil-akwâni tanbîhan li ummatihi ‘ala karamâtihi wa tadzkîran.",
        translation:
          "Ketika cahaya Muhammad memancar ke seantero wujud, ia pun memasrahkan diri bersujud pada Allah. Tak tercipta satu bayi pun yang serupa dengannya. Ia menengadahkan jari-jarinya ke langit. Ia terlahir dalam keadaan sudah dikhitan, mata dicelak, rambut sudah diminyak, diberi minyak wangi, dan dimuliakan. Dari mulutnya keluar cahaya yang menyinari istana-istana Kisra di tanah Syam. Saking takutnya, seluruh simbol salib dan berhala tersungkur. Seluruh manusia yang sebelumnya sombong dan merasa mulia kini menjadi terhina. Seluruh setan terhalang mengintip berita langit. Setelah itu mereka tak lagi bisa sampai ke langit. Setelah tampak cahaya kemuliaannya, dan terbit cahaya mentarinya yang luhur, maka bersinarlah dengan kelahirannya segala sisi kegelapan. Terbelahlah blankon istana Kisra. Matilah api Majusi di Persia. Pecahlah simbol-simbol salib karena mengagungkan dan menghormati kedatangan Muhammad. Terdengarlah satu suara memanggil ke seluruh alam sebagai bentuk peringatan kepada umat Muhammad atas kemuliaan dan keluhurannya.",
      },
      {
        arabic:
          "يٰٓاَيُّهَا النَّبِيُّ اِنَّآ اَرْسَلْنٰكَ شَاهِدًا وَّمُبَشِّرًا وَّنَذِيْرًاۙ وَّدَاعِيًا اِلَى اللّٰهِ بِاِذْنِهٖ وَسِرَاجًا مُّنِيْرًا وَبَشِّرِ الْمُؤْمِنِيْنَ بِاَنَّ لَهُمْ مِّنَ اللّٰهِ فَضْلًا كَبِيْرًا﴾ (الأحزاب: ٤٥-٤٧)",
        latin:
          "yâ ayyuhan-nabiyyu innâ arsalnâka syâhidaw wa mubasysyiraw wa nadzîrâ, wa dâ‘iyan ilallâhi bi'idznihî wa sirâjam munîrâ. wa basysyiril-mu'minîna bi'anna lahum minallâhi fadllang kabîrâ) (Al-Aḫzâb: 45-47)",
        translation:
          "Wahai Nabi (Muhammad), sesungguhnya Kami mengutus engkau untuk menjadi saksi, pemberi kabar gembira, dan pemberi peringatan. Dan untuk menjadi penyeru kepada (agama) Allah dengan izin-Nya serta sebagai pelita yang menerangi. Sampaikanlah kabar gembira kepada orang-orang mukmin bahwa sesungguhnya bagi mereka karunia yang besar dari Allah). (QS al-Ahzab: 45-47).",
      },
      {
        arabic:
          "فَلَكَمْ لَهُ مِنْ اٰيَـــةٍ مَشْهُورَةٍ نَصُّ الْكِتَابِ بِهَا غَدًا مَشْهُوْرًا",
        latin:
          "Falakum lahu min âyatin masyhûratin nashshul-kitâbi bihâ ghadan masyhûran",
        translation:
          "Betapa banyak ayat yang masyhur tentangnya. Tepatnya nash Al-Quran yang masyhur tentangnya.",
      },
      {
        arabic:
          "خَمِدَتْ لَهُ نَارُ الْمَجُوْسِ وَنُكِّسَتْ أَصْنَامُهُمْ وَدَعَوْا هُنَاكَ ثبُوْرًا",
        latin:
          "Khamidat lahu nârul-majûsi wa nukasat ashnâmuhun wa da‘au hunâka tsubûran",
        translation:
          "Api kaum Majusi padam karena Muhammad. Berhala-berhala mereka tertunduk. Mereka meninggalkan tempat itu dalam kondisi terusir.",
      },
      {
        arabic:
          "وَأتَى يُبَشِّرُ بِالْهِدَايَةِ وَالتَّقَى فَلِذَاكَ يُدْعَى هَـــادِيًا وَ بَشِــــيْرًا",
        latin:
          "Wa atâ yubasysyiru bil-hidâyati wat-taqa falidzâka yud‘a hâdiyan wa basyîran",
        translation:
          "Muhammad datang membawa kabar hidayah dan jalan ketakwaan. Karenanya, ia disebut sebagai pembawa petunjuk dan kabar gembira.",
      },
    ],

    //Halaman 21
    [
      {
        translation: "21. Wa lammâ wulida",
      },
      {
        arabic:
          "وَلَمَّا وُلِدَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ سَأَلَ الْوَحْشُ وَالطَّيْرُ رِضَاعَهُ. وَسَأَلَتِ الْمَلَائِكَةُ تَرْبِيَتَهُ. فَقَالَ عَزَّ وَجَلَّ: أَنَا قَادِرٌ عَلَى أَنْ أُرَبِّيَهُ مِنْ غَيْرِ رِضَاعٍ وَلَا سَبَبٍ. وَلٰكِنْ سَبَقَتْ كَلِمَتِيْ وَتَمَّتْ حِكْمَتِيْ وَكَتَبْتُ عَلَى نَفْسِيْ فِي الْأَزَلِ أَنْ لَا يُرْضِعَ هٰذِهِ الْجَوْهَرَةَ الْيَتِيْمَةَ غَيْرُ أَمَتِي حَلِيْمَةَ",
        latin:
          "Wa lammâ wulida shallallàhu ‘alaihi wa sallama sa’alal-waḫsyu wath-thairu ridlâ‘ahu, wa sa’alatil-malâ’ikatu tarbiyatahu, fa qâla ‘azza wa jalla: anâ qâdirun ‘ala an urabbiyahu min ghairi ridlâ‘in wa lâ sababin, wa lâkin sabaqat kalimatî wa tammat ḫikmati wa katabtu ‘ala nafsî fil-azali an lâ yurdli‘a hâdzihil-jauharatal-yatîmata ghairu ‘amati ḫalîmatu.",
        translation:
          "Ketika Nabi ﷺ dilahirkan, hewan liar dan burung bertanya perihal menyusuinya. Para malaikat juga bertanya perihal mendidiknya . Allah lantas berfirman, “Sesungguhnya, Aku kuasa mendidiknya tanpa disusui dan tanpa sebab. Namun, kalimat-Ku sudah datang lebih dahulu. Hikmah-Ku sudah sempurna. Aku telah mewajibkan diri-Ku sejak azali untuk tidak menyusui mutiara yatim ini selain hambaku Halimah.”",
      },
    ],

    //Hlaman 22
    [
      {
        translation: "22. Shalâtullâhi ‘alal-hâdî muḫammadun",
      },
      {
        arabic:
          "حَبِيْبِيْ يَــــا حَبِيْبِيْ يَا طَبِيْبِيْ حَبِيْبِيْ أَنْتَ قَصْدِيْ وَمُرَادِيْ",
        latin: "ḫabîbî yâ ḫabîbî yâ thabîbî ḫabîbî anta qashdî wa murâdî",
        translation:
          "Kekasihku, wahai kekasihku, wahai kerinduanku. Kekasihku, engkau adalah tujuanku dan keinginanku.",
      },
      {
        arabic:
          "صَـــلَاةُ اللهِ عَلَى الْهَادِيْ مُحَمَّدٌ شَفِيعِ الْخَلْقِ فِيْ يَوْمِ الْقِيَــــامَةِ",
        latin:
          "Shalâtullâhi ‘alal-hâdî muḫammadun syafî’il-khalqi fî yaumil-qiyâmati",
        translation:
          "Rahmat Allah semoga terlimpah pada nabi pembawa petunjuk, Muhammad pembawa syafaat para makhluk pada hari Kiamat.",
      },
      {
        arabic:
          "فَطُرْقُ الْوَصْلِ أَضْحَتْ مُسْتَقِيْمَةً وَأَسْرَارُ الْهَوَى عِنْدِيْ مُقِيْمَةٌ",
        latin:
          "Fathurqul-washli adlḫat mustaqîmatan wa asrârul-hawâ ‘indî muqîmatun",
        translation:
          "Jalan-jalan penghubung menjadi lurus dan rahasia cinta dalam diriku kian menetap.",
      },
      {
        arabic:
          "فَـــلَا تَخْشَى صُـــدُوْدًا مِنْ حَبِيْبٍ لَهُ نِعَمٌ بِمَا أَوْلَى عَمِيْمَةٌ",
        latin:
          "Falâ takhsya shudûdan min ḫabîbin lahu ni‘amun bimâ aulâ ‘amîmatun",
        translation:
          "Maka tiada kekhawatiran mendaki bukit sang kekasih. Baginya kenikmatan luar biasa.",
      },
      {
        arabic:
          "إِذَا زَلَّاتُ عَبْــــدٍ بَــــاعَدَتْــــــهُ تُقَرِّبُهُ عَوَاطِفُهُ الرَّحِيْمَــــةُ",
        latin: "Idzâ zlât ‘abdin bâ‘adathu tuqarribuhu ‘awâthifuhur-raḫîmatu",
        translation:
          "Jika ada hamba yang terjerumus pada kesalahan-kesalahan, maka ia segera didekati dengan perasaan kasih sayang.",
      },
      {
        arabic:
          "وَإِنْ عَثُرَ الْعَجُوْلُ بِسُوْءٍ فِعْلٍ يُلَاطِفُهُ بِأَوْصَافٍ كَرِيْمَةٍ",
        latin:
          "Wa in ‘atsural-‘ajûlu bisû’in fi‘lin yulâthifuhu bi aushâfin karîmatin",
        translation:
          "Jika ada orang yang tergesa-gesa tergelincir pada keburukan, maka ia dikasihani dengan sifat-sifat mulia dan kelembutan.",
      },
      {
        arabic:
          "وَإِنْ يَشْكُ الْغَــرَامَ حَلِيْفُ شَوْقٍ يُقَرِّبُهُ وَيَجْعَلُهُ نَدِيمَةٌ",
        latin:
          "Wa in yasykul-gharâma ḫalîfu syauqin yuqarribuhu wa yaj‘aluhu nadîmatun",
        translation:
          "Jika ada yang seseorang yang mengadukan kerinduan, maka ia akan didekati dan dibuatnya menyesal.",
      },
    ],

    //Halaman 23
    [
      {
        translation: "23. Qâla ahlus-siyari radliyallâhu",
      },
      {
        arabic:
          "قَالَ أَهْلُ السِيَرِ رَضِيَ اللهُ عَنْهُمْ وَكَانَ أَهْلُ مَكَّةَ مِنْ عَادَاتِهِمْ أَنْ يَخْرُجُوْا بِالْأَطفَالِ إِلَى الْمَرَاضِعِ . قَالَتْ حَلِيْمَةُ فَأَصَابَتْنَا فِيْ بَنِيْ سَعْدٍ سَنَةٌ مُّغْلِيَةٌ لعَدَمِ الْغَيْثِ فَجِئْنَا إِلَى مَكَّةَ نَحْوَ أَرْبَعِيْنَ امْرَةً مَعَ كُلِّ امْرَأَةٍ مِنَّا بَعْلُهَا نَلْتَمِسُ الرُّضَعَاءَ. وَخَرَج أَهْلُ مَكَّةَ بِأَطْفَالِهِمْ إِلَى الْمَرَاضِعِ، فَوَضَعُوْهُمْ حَوْلَ الْكَعْبَةِ فَسَبَقَتْنِي النِّسَاءُ إِلَى كُلِّ رَضِيْعٍ بمَكَّةَ وَتَأَخَّرْتُ أَنَا لِضَعْفِيْ وَضِعْفِ أَتَانِيْ وَقِلَّةِ سَيْرِهَا. وَجِئْتُ أَنَا فَلَمْ أَجِدُ أَحَدًا مِنَ الرُّضْعَاءِ . وَسَمِعَتْ اٰمِنَةُ بِقُدُوْمِنَا فَقَالَتْ لِعَبْدِ الْمُطَّلِبِ اُنْظُرْ لِمَوْلُوْدِكَ هٰذَا مُرْضِعَةً مِنْ بَنِيْ سَعْدٍ فَقَدْ قَدِمَتِ الْمَرَاضِعُ السَّعْدِيَّاتِ. اُنْظُرْ لِمَوْلَوْدِكَ مُرْضِعَةً مِنْ أَشْرَفِ الْبَرِيَّاتِ",
        latin:
          "Qâla ahlus-siyari radliyallâhu ‘anhum wa kâna ahlu makkata min ‘âdâtihim an yakhrujû bil-athfâli ilal-marâdli‘i, qâlat ḫalîmatu fa ashâbatnâ fî banî sa‘din sanatun mughliyatun li‘adamil-ghaitsi faji’nâ ila makkata naḫwa arba‘înam-ratan ma‘a kullim-ra’atin minnâ ba‘luhâ naltamisur-rudla‘â’a, wa kharaja ahlu makkata bi athfâlihim ilal-marâdli‘i, fawadla‘ûhum ḫaulal-ka‘bati fasabaqatnîn-nisâ’u ilâ kulli radlî‘in bimakkata wa ta’akhkhartu anâ lidla‘fî wa dli’fi atânî wa qillati sairihâ, wa ji’tu anâ falam ajidu aḫadan minar-rudl‘â’i, wa sami‘at âminatu biqudûminâ faqâlat li‘abdil-muththalibi undhur limauludika hâdzâ murdli‘atan min banî sa‘din faqad qadimatil-marâdli‘us-sa‘diyâti, undhur limaulûdika murdli‘atan min asyrafil-bariyâti.",
        translation:
          "Para ulama ahli sirah radhiyallah ‘anhum menyebutkan, di antara kebiasaan para penduduk Makkah adalah mengeluarkan bayi-bayi mereka menemui perempuan yang menyusuinya. Siti Halimah kala itu pernah bercerita, “Kami di tengah Bani Sa‘d ditimpa musibah tahun paceklik karena kekeringan tiada hujan. Akhirnya kami datang ke Makkah bersama sekitar empat puluh wanita. Setiap wanita ditemani suaminya. Dan kami semua mencari bayi yang bisa disusui. Di saat yang sama. Para penduduk Makkah membawa bayi-bayi mereka keluar menemui perempuan yang menyusui. Mereka meletakkan bayi-bayi itu di sekitar Ka‘bah. Sayangnya, aku keduluan oleh perempuan-perempuan lain menemui setiap bayi di Makkah yang akan disusui. Karena kelemahanku dan kelemahan untaku, aku akhirnya terlambat. Sehingga ketika aku datang ke sana tidak mendapati satu pun bayi yang bisa disusui. Namun, rupanya Aminah mendengar berita kedatangan kami. Ia berkata kepada Abdul Muthalib. ‘Perhatikanlah jika perempuan yang menyusui bayimu ini berasal dari kalangan Bani Sa‘d. Padahal sebelumnya sudah datang sejumlah perempuan dari Bani Sa‘diyah lainnya. Perhatikan sekali lagi perempuan yang akan menyusui bayimu ini berasal dari kalangan perempuan terhormat?",
      },
      {
        arabic:
          "فَخَرَجَ عَبْدُ الْمُطَّلِبِ فَبَيْنَمَا هُوَ يَمْشِيْ اِذْسَمِعَ هَاتِفًا يَقُولُ لَهُ اُنْظُرْ إِلَى حَلِيْمَةَ السَّعْدِيَّةِ تُرْضِعُ ابْنَ اٰمِنَةَ الْأَمِيْنَ مُحَمَّدًا خَيْرَ الْأنَامِ وَصَفْوَةَ الْجَبَّارِ. فَمَالَهُ إِلَّا حَلِيْمَةُ مُرْضِعَةٌ نِعْمَ النَّبِيُّ الْمُصْطَفَى الْمُخْتَارُ. لَا تُسَلَّمُوْهُ إِلَى سِوَاهَا إِنَّهُ أَمْرٌ وَحُكْمٌ جَاءَ مِنْ قَهَّارٍ",
        latin:
          "Fakharaja ‘abdul-muththalibi fabainamâ huwa yamsyî idz sami‘a hâtifan yaqûlu lahu undhur ila ḫalimatas-sa‘diyyati turdli‘ub-na âminatal-amîna muḫammadan khairal-anâmi wa shafwatal-jabbâri, famâ lahu illâ ḫalîmatu murdli‘atun ni‘man-nabiyyul-musthafal-mukhtâru, lâ tusallamûhu ila siwâhâ innahu amrun wa ḫukmun jâ’a min qahhârin.",
        translation:
          "Kemudian Abdul Muthalib pun keluar. Di tengah perjalanan, tiba-tiba ia mendengar suara, “Perhatikanlah Halimah Sa‘diyah. Ia menyusui putra Aminah yang terpercaya bernama Muhammad yang juga makhluk terbaik dan pilihan Dzat yang maha perkasa. Sungguh tidak ada bayi yang berhak disusui Halimah selain nabi terbaik dan juga nabi pilihan. Janganlah kalian menyerahkannya kepada selain Halimah. Sebab, ini adalah urusan dan ketetapan hukum yang datang dari Dzat yang maha Perkasa.”",
      },
      {
        arabic:
          "قَالَتْ حَلِيْمَةُ السَّعْدِيَّةِ ثَمَّ إِنِّيْ مَرَرْتُ بِعَبْدِ الْمُطَّلِبِ فَسَأَلْتُهُ عَنْ رَّضِيْعِ فَقَالَ: لِي مَا اسْمُكِ وَمَا عَرْبُكِ فَقُلْتُ اسْمِيْ حَلِيْمَةُ السَّعْدِيَّةُ. فَتَبَسَّمَ ضَاحِكًا وَتَهَلَّلَ وَجْهُهُ فَرَحًا فَقَالَ بَخٍ بَخٍ لَّكِ يَا حَلِيْمَةُ السَّعْدِيَّةُ. هَلْ لَكِ فِيْ إِرْضَاعِ غُلَامٍ يَتِيْمٍ تَسْعَدِيْنَ بِهِ إِنْ شَاءَ اللهُ تَعَالَى",
        latin:
          "Qâlat ḫalîmatus-sa‘diyyati tsumma innî marartu bi‘abdil-muththalibi fasa’altuhu ‘an radli‘in faqâla: lî mas-muki wa mâ ‘arbuki faqultus-mî ḫalîmatus-sa‘diyyatu, fatabassama dlâḫikan wa tahallala wajhuhu farḫan faqâla bakhin bakhin laki yâ ḫalîmatus-sa‘diyyatu, hal laki fî irdlâ‘i ghulâmin yatîmin tas‘adîna bihi in syâ’allâhu ta‘ala.",
        translation:
          "Siti Halimah berkata, “Aku bertemu dengan Abdul Muthalib. Aku lantas bertanya padanya tentang bayi yang akan disusui. Ia balik bertanya, ‘Siapa namamu dan apa sukumu?’ Aku menjawab, ‘Namaku Halimah as-Sa‘diyah.’ Abdul Muthalib pun tertawa hingga roman wajahnya terlihat riang saking gembira. Ia lalu berkata, ‘Bakh bakh, rupanya engkau wahai Halimah as-Sa‘diyah. Apakah engkau bersedia menyusui anak bayi yang yatim, dimana engkau akan berbahagia dengannya insya Allah.’”",
      },
    ],

    //Halaman 24
    [
      {
        translation: "24. Fâzat ḫalîmatu min radlâ‘i muḫammadin",
      },
      {
        arabic:
          "فَازَتْ حَلِيْمَةُ مِنْ رَّضَـــــاعِ مُحَمَّدٍ خَيْرِ الْوَرَى طُرًّا بِأَعْظَمِ مَقْصَدِ",
        latin:
          "Fâzat ḫalîmatu min radlâ‘i muḫammadin khairil-warâ thurran bia‘dhami",
        translation:
          "Beruntunglah Siti Halimah karena menyusui Muhammad, makhluk terbaik dengan seagung-agungnya tujuan",
      },
      {
        arabic:
          "وَرَأَتْ مِنَ الْبَرَكَاتِ حِيْنَ مَضَتْ بِهِ فَالسَّعْدُ قَارَنَهَا بِطَلْعَةِ أَحْمَدِ",
        latin:
          "Wa ra’at minal-barakâti ḫîna madlat bihi fas-sa‘du qâranahâ bithal‘ati aḫmadi",
        translation:
          "Ia melihat sejumlah keberkahan saat berlalu membawa Muhammad. Sehingga kebahagiaan selalu menyertai Siti Halimah dengan datangnya Ahmad.",
      },
      {
        arabic:
          "قَدْ دَرَّ مِنْهَا الْثَدْيُ عِنْدَ رَضَاعِهِ أَمِنَتْ بِهِ مِنْ كُلِّ جُهْـــدٍ مُجْهِـــدِ",
        latin:
          "Qad darra minhâts-tsadyu radlâ‘ihi aminat bihi min kulli juhdin mujhidi",
        translation:
          "Saat menyusui Muhammad, air susunya mendadak deras. Dengannya ia juga menjadi selamat dari segala kelelahan yang merepotkan.",
      },
      {
        arabic:
          "وأَتَانُهَا لِلرَّكْبِ قَدْ سَبَقَتْ بِهَـــــا فَرَحًــــا وَتِيْهًا بِالرَّسُوْلِ الْأَمْجَدِ",
        latin:
          "Wa atânuhâ lir-rakbi qad sabaqat bihâ faraḫan watîhan bir-rasûlil-amjadi",
        translation:
          "Unta yang ditungganginya mendadak kuat mendahului unta lainnya. Itu terjadi karena kegembiraan yang luar biasa terhadap Rasul yang agung.",
      },
      {
        arabic:
          "أَغْنَامُهَـــا كَانَتْ شِبَــــــاعًا كُلَّمَــــا سَرَحَتْ تَجُوْدَ لَهَــــا بِدَرٍّ مُزْبِدِ",
        latin:
          "Aghnâmuhâ kânat syibâ‘an kullamâ saraḫat tajûda lahâ bidarrin muzbidi",
        translation:
          "Kambing-kambingnya yang semula kurus mendadak gemuk dan mengeluarkan air susu yang melimpah.",
      },
      {
        arabic:
          "وَرَأَتْ مِنَ الْخَيْرَاتِ وَهِيَ تَحْفُهَا وَالنَّاسُ فِي مَحْلٍ وَعَيْشٍ أَنْكَدِ",
        latin:
          "Wa ra’at minal-khairâti wa hiya taḫfuhâ wan-nâsu fî maḫli wa ‘îsyi ankad",
        translation:
          "Sungguh ia melihat banyak kebaikan walau berjalan tanpa alas, dan di saat orang-orang berada di tempat tandus dan kesulitan hidup.",
      },
      {
        arabic:
          "نَالَتْ بِـــــهِ كُلَّ الْمَسَرَّةِ وَالْهَنَـــــا فَهُوَ الَّذِيْ قَدْ سَادَ كُلَّ مُسَوَّدِ",
        latin:
          "Nâat bihi kullal-masarrati walhanâ fahuwal-ladzî qad sâda kulla musawwadi",
        translation:
          "Berkat Muhammad, ia benar-benar memperoleh kemudahan dan kebahagiaan.",
      },
    ],

    //Halaman 25
    [
      {
        translation: "25. Qâat ḫalîmatu faji’at",
      },
      {
        arabic:
          "قَالَتْ حَلِيْمَةُ فَجِئْتُ إِلَى بَيْتِ أُمِّهِ اٰمِنَةَ وَهِيَ امْرَأَةٌ هِلَالِيَّةٌ، تَزْهَرُ كَالْكَوْكَبِ الدُّرِّيِّ فَسَأَلْتُهَا عَنْهُ. فَقَالَتْ أَنْتُمْ يَا أَهْلَ الْبَادِيَةِ تَطْلُبُوْنَ مَنْ تَجِدُوْنَ رِفْدَهُ، وَهٰذَا طِفْلٌ يَتِيْمٌ مَّاتَ أَبُوْهُ وَكُنْتُ بِهِ حَامِلاً، فَكَفَلَهُ جَدُّهُ عَبْدُ الْمُطَّلَبِ. قَالَتْ حَلِيْمَةُ فَرَجَعْتُ إِلَى بَعْلِيْ لِأُشَاوِرَهُ فِيْهِ. فَقَالَ أَرِيْنِيْ هٰذَا الْغُلَامَ. قَالَ فَتَقَدَّمْتُ أَنَا وَبَعْلِيْ إِلَى بَيْتِ اٰمِنَةَ ، فَقُلْنَا هَلُمِّيْ بِهِ إِلَيْنَا فَأَتَتْ بِهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مَدْهُوْنًا مَدْرَجًا فِي ثَوْبِ صُوْفٍ أَبْيَضَ وَتَحْتَهُ حَرِيْرَةٌ خَضْرَاءُ. فَإِذَا وَجْهُهُ يُضِيْئُ كَالْقَمَرِ لَيْلَةَ الْبَدْرِ فَنَظَرَ بَعْلِيْ فِيْ وَجْهِهِ فَفَتَحَ عَيْنَيْهِ فَخَرَجَ مِنْهُمَا نُورٌ سَاطِعٌ وَضِيَاءٌ لَّامِعٌ . فَحَارَ عَقْلِيْ وَعَقْلُ بَعْلِيْ. فَقَالَ وَيْحَكِ يَا حَلِيْمَةُ هٰذَا الْمَوْلُودُ هُوَ كُلُّ الْمُنَى وَالْمَقْصُودِ. فَقُلْتُ لَهُ هُوَ يَتِيْمٌ فَمَاذَا تَصْنَعُ بِهِ فَقَالَ خُذِيْهِ فَلَعَلَّ اللهُ بِبَرَكَتِهِ يَرْزُقْنَا إِنْ شَاءَ اللهُ تَعَالَى فَكَانَ كَذَالِكَ قَالَتْ حَلِيْمَةُ فَأَخَذْتُهُ وَلَيْسَ فِي ثَدْيِيْ لَبَنٌ وَوَلَدِيْ طُوْلَ اللَّيْلِ يُقْلِعُنِيْ مِنْ شِدَّةِ الجُوْعِ. فَلَمَّا حَمَلْتُ مُحَمَّدًا صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَأَنَا ضَعِيفَةٌ فَقَوِيْتُ وَزَالَ عَنِّيْ مَا أَجِدُ مِنَ الْألَـمِ. ثُمَّ وَضَعْتُ ثَدْيِيْ فِي فِيْهِ فَثَارَ اللَّبَنُ حَتَّى فَاضَ وَتَبَدَّدَ وَسَمِعْتُ قَائِلًا يَقُوْلُ طُوْبَى لَكِ أَيَّتُهَا السَّعْدِيَّةُ، بِالطَّلْعَةِ الْهَاشِمِيَّةِ، وَالْغُرَّةِ الْقَمَرِيَّةِ، وَالْهِمَّةِ الْقُرَشِيَّةِ. سَعْدُكِ يَا حَلِيْمَةُ بِالدُّرَّةِ الْيَتِيْمَةِ",
        latin:
          "Qâat ḫalîmatu faji’at ila baiti ummihi âminata wa hiyam-ratun hilâliyyatun, tazharu kal-kaikabid-durriyyi fasa’altuhâ ‘anhu, faqâlat antum yâ ahlal-bâdiyati tathlubûna man tajidûna rifdahu, wa hâdzâ thiflun yatîmun mâta abûhu wa kuntu bihi ḫâmilan, fakafalahu jadduhu ‘abdul muththalibi, qâat ḫalîmatu faraja‘tu ila ba‘lî li asyâwirahu fîhi, faqâla arînî hâdzal-ghulâma, qâla fataqaddamtu anâ wa ba‘lî ila baitin âminata, faqulnâ halummî bihi ilainâ fa atat bihi shallallâhu ‘alaihi wa sallama madhûnan madrajan fî tsaubi shûfin abyadla wa taḫtahu ḫarîrarun khadrâ’u, fa idzâ wajhuhu yudlî’u kal-qamari lailatal-badri fanadhara ba‘lî fî wajhihi fafataḫa ‘ainaihi fakharaja minhumâ nûrun sâthi’un wa dliyâ’un lâmi’un, fâḫâra ‘aqlî wa ‘aqlu ba‘lî, faqâla waiḫaka yâ ḫalîmatu hâdzal-maulûdu huwa kullul-munâ wal-maqshûdi, faqultu lahu huwa yatîmun famâdzâ tashna‘u bihi faqâla khudzîhi fala‘allallâhu bibarakatihi yarzuqnâ in syâ’allâḫu taala fakâna kadzâlika qâlat ḫalîmatu fa’akhadzathu wa laisa fî tsadyî labanun wa waladî thûlal-laili yuqli‘unî min syiddatil-jû‘i, falammâ ḫamalat muḫammadan shallallâhu ‘alaihi wa sallama wa anâ dla‘ifatun faqawaitu wa zâla ‘annî mâ ajidu minal-alami, tsumma wadla‘tu tsadyî fî fîhi fatsâral-labanu ḫatta fâdla wa tabaddada wa sami‘tu qâ’ilan yaqûlu thûba laki ayyatuhas-sa‘diyyatu, biththal‘atil-hâsyimiyyati, wal-ghurratil-qamariyyati, wal-himmatil-qurasyiyyati, sa‘duki yâ ḫalîmatu bid-durratil-yatîmati.",
        translation:
          "Siti Halimah bercerita, “Aku kemudian datang ke rumah Ibunda Aminah. Ternyata ia seorang perempuan cantik rupawan bagaikan bintang yang berkilau. Aku lantas menanyakan sang bayi. Dijawabnya, ‘Wahai penduduk desa, kalian rupanya sedang mencari orang yang kalian harapkan upahnya. Ini adalah anak yatim yang ditinggal wafat ayahnya sejak aku sedang hamil. Lantas bayi ini diasuh oleh kakeknya Abdul Muthalib.’” Siti Halimah melanjutkan, “Kala itu aku kembali menemui suamiku untuk bermusyawarah. Suamiku menjawab, ‘Coba perlihatkanlah bayi itu kepadaku.’ Akhirnya, aku dan suamiku kembali ke rumah Ibunda Aminah. Kami sampaikan, ‘Coba bawa bayi itu kepada kami. Tak lama Ibunda Aminah membawakannya. Tampak sang bayi seperti sudah diberi minyak dibalut pakaian wol putih ditilam kain sutra hijau. Wajahnya bersinar bagaikan rembulan di malam purnama. Suamiku lalu memandangi wajahnya. Tiba-tiba sang bayi membuka kedua matanya dan seketika keluar cahaya mengkilat dan sinar yang terang darinya. Sontak pikiranku dan pikiran suamiku bingung. Tak lama, suamiku berucap, ‘Beruntung wahai Halimah, inilah bayi yang diimpi-impikan dan dimaksud. Aku sampaikan kepadanya, ‘Namun ia seorang anak yatim. Lantas apa yang akan engkau perbuat padanya.’ Suamiku menjawab, ‘Ambillah bayi ini. Mudah-mudahan Allah berkat keberkahan bayi ini memberi rezeki kepada kita insya Allah.’ Aku pun lantas membawa bayi Muhammad, di saat payudaraku tak ada air susunya, bahkan anakku saja sepanjang malam menjauh dariku saking laparnya. Setelah memangku Muhammad, aku yang sebelumnya lemah menjadi kuat. Rasa letih yang dialamiku hilang seketika. Aku lantas meletakkan puting payudaraku pada mulut sang bayi. Tiba-tiba saya air susuku mengalir deras, bahkan sampai melimpah dan meluber kemana-mana. Terdengar olehku ada seseorang yang berkata, ‘Berbahagialah engkau, wahai perempuan dari bani Sa‘diyah berkat anugerah bayi dari Bani Hasyimiyah, kemuliaan yang bercayaha, kebanggaan kaum Quraisy. Berbahagialah, wahai Halimah dengan permata yatim itu!’”",
      },
    ],

    //Halaman 26
    [
      {
        translation: "26. Ta‘allama lînahul-ghushnul-qawîmu",
      },
      {
        arabic:
          "اللهُ اللهُ اللهُ خَـــــالِقُنَــــــا  اللهُ اللهُ اللهُ رَازِقُنَا",
        latin: "Allâhu Allâhu Allâhu khâliqunâ Allâhu Allâhu Allâhu râziqunâ",
        translation:
          "Allah, Allah, Allah, Pencipta kami. Allah, Allah, Allah, Pemberi Rezeki kami.",
      },
      {
        arabic:
          "إِلٰهِيْ يَـــا إِلٰهِيْ يَـــــا إِلٰهِيْ إِلٰهِيْ تَوْبَةً قَبْـــلَ الْمَمَـاتِ",
        latin: "Ilâhî ya ilâhî yâ ilâhî ilâhî taubatan qablal-mamâti",
        translation:
          "Wahai Tuhanku, wahai Tuhanku, wahai Tuhanku, wahai Tuhanku, berilah kami kesempatan taubat sebelum kematian.",
      },
      {
        arabic:
          "تَعَلَّمَ لِيْنَهُ الْغُصْنُ الْقَوِيْمُ وَمِنْ أَلْطَافِ مَعْنَاهُ النَّسِيْمُ",
        latin:
          "ta‘allama lînahul-ghushnul-qawîmu wa min althâfi ma‘nâhun-nasîmu",
        translation:
          "Cabang pohon yang keras telah mempelajari keluwesannya. Sifat kelembutannya bagaikan angin sejuk.",
      },
      {
        arabic:
          "مَلِيْحٌ لَّمْ يَجُزْ بَشَرٌ حُـلَاهُ فَدَلَّ بِـــــأَنَّهُ بَشَـــــرٌ كَرِيــــــْمٌ",
        latin:
          "Malîḫun lamyajuz basyarun ḫulâhu fadalla bi annahu basyarun karîmun",
        translation:
          "Tutur kata beliau yang indah, tidak dapat dilakukan orang lain. Sebagai isyarat bahwa beliau merupakan manusia yang mulia.",
      },
      {
        arabic:
          "وَسِيْمٌ فِيْ مَلَاحَتِهِ حَشِيْمٌ وَمَا فِي الْحُسْنِ قَطُّ لَهُ قَسِيْمٌ",
        latin:
          "Wa sîmun fî malâḫatihi ḫasyîmun wa mâ fil-ḫusni qaththu lahu qasîmun",
        translation:
          "Tampan paras mukanya dan pemalu. Tidak ada satupun yang dapat menyerupai keindahannya.",
      },
      {
        arabic:
          "فَمَاكُلُّ الشَّقَاءِ سِوَى جَفَاهُ وَلَيْسَ سِوَى تَوَاصُلِهِ نَعِيْمُ",
        latin:
          "Famâ kullusy-syaqâ’i siwa jafâhu wa laisa siwa tawâshulihi na‘imu",
        translation:
          "Tidak ada kesulitan selain dengan menjauhinya. Dan tidak ada kenikmatan selain memiliki hubungan dengannya.",
      },
      {
        arabic:
          "لَهُ فِيْ طَيْبَــــةٍ أَسْــنَى مَقَـــــامٍ لَدَيْهِ الْخَــــيْرُ أجْمَعُــــهُ مُقِيمٌ",
        latin:
          "Lahu fî thaibatin asnâ maqâmin ladaihil-khairu ajma‘uhu muqîmun",
        translation:
          "Dia memiliki kedudukan yang mulia di Thoybah (Madinah al Munawwaroh). Segala kebaikan ada dalam diri beliau.",
      },
      {
        arabic:
          "إِذَا غَنَّى بِهِ حَادِي الْمَطَايَا رَأَيْتَ النُّوْقَ مِنْ طَرَبٍ تَهِيْمُ",
        latin:
          "Idzâ ghanna bihi ḫâdîl-mathâyâ raiatan-nûqa min tharabin tahîmu",
        translation:
          "Jika penunggang unta bersenandung memuji beliau. Engkau melihat unta melamun dengan suara yang merdu.",
      },
    ],

    //Halaman 27
    [
      {
        translation: "27. Qâlat ḫalîmatu fa akhadztuhu",
      },
      {
        arabic:
          "قَالَتْ حَلِيْمَةُ فَأَخَذْتُهُ وَدَخَلْتُ بِهِ عَلَى الْأَصْنَامِ فَنَكَّسَ هُبَلُ رَأْسَهُ وَخَرَّتِ الْأَصْنَامُ مِنْ أَمَاكِنِهَا فَجِئْتُ إِلَى الْحَجَرُ الْأَسْوَدِ لِأُقَبِّلَهُ فَخَرَجَ الْحَجَرُ مِنْ مَّكَانِهِ حَتَّى الْتَصَقَ بِوَجْهِهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَأَخْبَرْتُ بَعْلِيْ بِذٰلِكَ فَقَالَ أَلَمْ أَقُلْ لَكِ إِنَّهُ مُبَارَكٌ خُذِيْهِ وَانْصَرِفِيْ بِنَا قَالَتْ حَلِيْمَةُ فَمَا انْصَرَفَ أَحَدٌ كَمَا انْصَرَفْنَا، وَلَا ظَفِرَ أَحَدُ كَمَا ظَفِرْنَا. قَالَتْ فَرَكِبْتُ الدَّابَّةَ الَّتِيْ جِئْتُ عَلَيْهَا وَكَانَتْ ضَعِيْفَةً لَّا تَسْتَطِيْعُ الْمَشْيَ. فَجَعَلَتِ الدَّابَّةُ تَسْبِقُ دَوَابَّ الْقَافِلَةِ كُلَّهَا حَتَّى كَانَتِ النِّسَاءُ يَقُلْنَ لِيْ أَمْسِكِيْ أَتَانَكِ عَنَّا يَا حَلِيْمَةُ. قَالَتْ وَكُنْتُ لَا أَمُرُّ عَلَى شَجَرٍ وَلَا مَدَرٍ إِلَّا وَيَقُوْلُ السَّلَامُ عَلَيْكَ يَا خَيْرَ الْمُرْسَلِيْنَ. وَكُنَّا لَا تَنْزِلُ تَحْتَ شَجَرَةٍ يَّابِسَةٍ إِلَّا احْضَرَّتْ وَأَثْمَرَتْ لِوَقْتِهَا بِبَرَكَتِهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَسِرْنَا حَتَّى أَتَيْنَا مَنَازِلَنَا وَعِنْدَنَا شُوَيْهَاتُ عِجَافٌ ضِعَافُ فَأَخَذْتُ يَدَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَوَضَعْتُهَا عَلَيْهِنَّا فَدَرَرْنَ لِوَقْتِهِنَّ وَمُنْذُ أَخَذْنَاهُ لَمْ يَكُنْ لَّنَا مِصْبَاحٌ فِي اللَّيَالِي الْمُظْلِمَةِ إِلَّا نُوْرُوَجْهِهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَتْ حَلِيْمَةُ وَكُنْتُ إِذَا أَعْطَيْتُهُ ثَدْيَ الْأَيْمَنِ شَرِبَ وَإِذَا حَوَّلْتُهُ لِثَدِْيِ الْأَيْسَرِ أَبَى لِأَنَّ اللهَ تَبَارَكَ وَتَعَالَى أَلْهَمَهُ الْعَدْلَ حَتَّى فِي الرَّضَاعَةِ. عَلِمَ أَنَّ لَهُ شَرِْيكً فَنَاصَفَهُ عَدْلًا مِنْهُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. قَالَتْ حَلِيْمَتُ وَانْقَطَعَ الْغَيْثُ عَنَّا سَنَةً كَامِلَةً مِنَ السَنِيْنَ فَأَخَذْنَاهُ وَخَرَجْنَا بِهِ إِلَى الصَّحْرَاءِ وَقُلْنَا: اَللَّهُمَّ بِحُرْمَةِ هٰذَا الْمَوْلُودِ عَلَيْكَ إِلَّا مَا سَقَيْتَنَا الْغَيْثَ يَا رَبَّنَا يَا مَعْبُوْدُ. قَالَتْ فَإِذَا السَّمَاءُ قَدْ غَيَّمَتْ وَسَكَبَتْ مَاءً كَأَفْوَاهِ الْقِرَبِ",
        latin:
          "Qâlat ḫalîmatu fa akhadztuhu wa dakhaltu bihi ‘alal-ashnâmi fanakkasa hubalu ra’sihi wa kharratil-ashnâmu min amâkinihâ faji’tu ilal-ḫajarul-aswadi liaqabbalahu fakharajal-ḫajaru min makânihi ḫattal-tashaqa biwajhihi shallallâhu ‘alaihi wa sallama fa akhbartu ba‘lî bidzâlika, faqâla alam aqul laki innahu mubârakun khudzîhi wansharifî binâ qâlat ḫalîmatu famân-sharafa aḫadun kamân-sharafnâ ‘alaihâ wa kânat dla‘îfatan lâ tastathî’ul-masyyi, faja‘alatid-dâbbatu tasbiqu dawâbal-qâfilati kullahâ ḫatta kânatin-nisâ’u yaqulna lî amsikî atânaki ‘annâ yâ ḫalîmatu, qâlat wa kuntu lâ amurru ‘ala syajarin walâ madarin illâ yaqûlus-salâmu ‘alaika yâ khairal-mursalîna, wa kunnâ lâ tanzilu taḫta syajaratin yâbisatin illâḫdlarrat liwaqtihâ bibarakatihi shallallâhu ‘alaihi wa sallama fasirnâ ḫatta atainâ manâzilanâ wa ‘indanâ syuwaihâtu ‘ijâfun dli‘âfu fa akhadztu yada muḫmmadin shallallâhu ‘alaihi wa sallama wa wadla‘tuhâ ‘alaihinnâ fadararnâ liwaqtihinna wa mundzu akhadznâhu lam yakun lanâ mishbâḫun fil-layâlil-mudhlimati illâ nûru wajhihi shallallâhu ‘alaihi wa sallama qâlat ḫalîmatu wa kuntu idzâ a‘thaituhu tsadyal-aimanu syariba wa idzâ ḫawwalathu litsadyil-aisari abâ li annallâha tabâraka wa ta‘ala alhamahul-‘adla ḫatta fir-radlâ‘ati, alima anna lahu syarîkan fanâshafahu ‘adlan minhu shallallâhu ‘alaihi wa sallama, qâlat ḫalîmatu wanqatha‘al-ghaitsu ‘annâ sanatan kâmilatan minas-sinîna fa akhadznâhu wa kharajnâ bihi ila shrâ’i wa qulnâ: allâhumma biḫurmati hâdzal-maulûdi ‘alaika illâ ma saqatanâl-ghaitsa yâ rabbanâ yâ ma‘bûdu, qâlat faidzâs-samâ’u qa ghayyamat wa sakabat mâ’an ka’afwâhil-qirabi.",
        translation:
          "Siti Halimah kembali bercerita, “Aku kemudian mengambil sang bayi dan membawanya masuk ke ruangan berhala-berhala. Tiba-tiba berhala Hubal menundukkan kepalanya. Sementara berhala-berhala lainnya tersungkur dari tempat asalnya. Aku lantas mendatangi Hajar Aswad untuk menciumkan sang bayi kepadanya. Tiba-tiba Hajar Aswad pun keluar dari tempatnya hingga menempel ke wajah bayi Muhammad saw. Aku menceritakan semua itu kepada suamiku. Dan ia bertkata, ‘Bukankah sudah aku sampaikan padamu bahwa bayi ini berkah. Maka bawalah dan tolonglah di tengah keluarga kita.’” Siti Halimah melanjutkan ceritanya, “Tidaklah seorang dari kalian berdua yang pulang seperti kepulangan kami. Tidaklah seorang dari kalian berdua yang beruntung seperti kami. Setelah itu, kami menaiki unta yang sewaktu aku pakai saat berangkat unta kami tersebut lemah dan tak mampu berjalan. Namun, anehnya unta tadi mampu mendahului semua unta rombongan, sampai para wanita berkata kepadaku, ‘Tahanlah untamu dan tunggu kami, wahai Halimah.’ Anehnya lagi, tidaklah aku melewati sebuah pohon atau suatu perkampungan kecuali mengucap, ‘Keselamatan semoga terlimpah padamu, wahai utusan terbaik!’ Dan tidaklah kami singgah di bawah pohon yang kering kecuali tiba-tiba menghijau dan berbuah pada saat itu juga berkat bayi Muhammad saw. Kami pun meneruskan perjalanan dan melewati beberapa persinggahan. Ketika ada kambing-kambing betina yang kurus dan lemah, laku kami letakkan tangan bayi Muhammad padanya, maka pada saat itu pula air susunya keluar. Dan sejak membawa sang bayi, kami juga tidak memiliki lentera di tengah malam yang gelap kecuali wajahnya. Uniknya lagi, ketika aku memberikan air susu yang sebelah kanan, sang bayi mau menghisapnya. Namun, saat aku mengalihkannya ke susu sebelah kiri, ia menolaknya. Sebab, Allah sudah mengilhami bayi tersebut sebuah keadilan, termasuk dalam urusan menyusu. Sang bayi seakan tahu bahwa dirinya memiliki kawan, sehingga harus berbagi dengan adil bersamanya.” Siti Halimah juga menceritakan, “Sudah satu tahun penuh kami tidak dituruni hujan. Kami pun lantas memangku bayi Muhammad dan membawanya menuju padang gurun, seraya berdoa, ‘Ya Allah, berkat kehormatan bayi yang terlahir ini, tidak ada kewajiban atas-Mu selain memberi guyuran hujan kepada kami, wahai tuhan kami wahai Dzat yang kami sembah.’ Tiba-tiba saja langit mendung dan menurunkan hujan seperti yang keluar dari mulut geriba air.”",
      },
    ],

    //Halaman 28
    [
      {
        translation: "28. Man mitslu aḫmada fil-kauni nahwâhu",
      },
      {
        arabic: "اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ عِزًّ وَإِجْلَالً",
        latin: "Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu ‘izzan wa ijlâlan",
        translation:
          "Allah, Allah, Allah, Allah, Allah, Allah, kemuliaan dan keagungan.",
      },
      {
        arabic:
          "مَنْ مِثْلُ أَحْمَدَ فِي الْكَوْنَيْنِ نَهْوَاهُ بَدْرٌ جَمِيْعُ الْوَرَى فِي حُسْنِهِ تَاهُوْا",
        latin:
          "Man mitslu aḫmada fil-kauni nahwâhubadrun jamî‘ul-wara fi ḫusnihi tâhû",
        translation:
          "Siapa gerangan yang menyamai Ahmad (Nabi Muhammad) di tengah kalangan jin dan manusia. Ia bagaikan bulan purnama dalam keindahannya. Seluruh makhluk kebingungan.",
      },
      {
        arabic:
          "مَنْ مِثْــــلُهُ وَإِلٰهُ الْعَـــرْشِ شَرَّفُــــهُ بِالْخَلْقِ وَالْخُلْقِ إِنَّ اللهَ أَعْطَاهُ",
        latin:
          "Man mitsluhu wa ilâhul-‘arsyi syarrafuhu bil-khalqi wal-khulqi innallâha a‘thâhu",
        translation:
          "Siapa yang seperti dia (Muhammad)? Tuhan Arasy telah memuliakannya dengan penciptaan dan akhlaknya. Dan Allah telah memberikannya.",
      },
      {
        arabic:
          "وَالشَّمْسُ تَخْجَلُ مِنْ أَنْوَارِ طَلْعَتِهِ حَارَتْ عُقُوْلُ الْوَرَى فِيْ وَصْفِ مَعْنَاهُ",
        latin:
          "Wasy-syamsu takhjalu min anwâri thal‘atihi ḫârat ‘uqûlul-wara fî washfi ma‘nâhu",
        translation:
          "Mentari pun redup karena pancaran cahayanya. Akal makhluk pun bingung menggambarkan maknanya.",
      },
      {
        arabic:
          "تَبَــــــارَكَ اللهُ مَــــا أَحْــــلَى شَمَــــــائِلُهُ حَازَ الْجَمَالَ فَمَا أَبْهَى مُحَيَّاهُ",
        latin:
          "Tabârakallâhu mâ aḫla syamâ’iluhu ḫâzal-jamâla famâ abhâ muḫayyâhu",
        translation:
          "Maha suci Allah atas tabiat-tabiat terbaiknya, hingga menghimpun segala keindahan. Betapa indah makhluk yang dihidupkan-Nya!",
      },
      {
        arabic:
          "يَا عُرْبَ وَادِي النَّقَا يَا أَهْلَ كَاظِمَةٍ فِيْ حَيِّكُمْ قُمْرٌ فِي الْقَلْبِ مَأْوَاهُ",
        latin:
          "Yâ ‘urba wâdin-naqâyâ kâdhimatin fî ḫayyikum qumrun fil-qalbi ma’wâhu",
        translation:
          "Wahai orang Arab Lembah Naqa, wahai orang-orang tak bicara, di tengah kalian ada rembulan, yang tempatnya dalam hati.",
      },
      {
        arabic:
          "هٰـــــذَا مَلِيْحٌ وَكُلُّ النَّـــــاسِ يَهْـوَاهُ وَسَائِرُ الْخَلْقِ فِيْ أَوْصَافِهِ تَاهُوْا",
        latin:
          "Hâdzâ malîḫun wa kullun-nâsi yahwâhu wa sâ’irul-khalqi fî aushâfihi tâhû",
        translation:
          "Dia adalah sosok istimewa. Semua manusia mencintainya. Seluruh makhluk bingung menggambarkan sifat-sifatnya.",
      },
      {
        arabic:
          "صَلَّى عَلَيْهِ إِلٰهُ الْعَرْشِ مَا طَلَعَتْ شَمْسٌ وَمَا حَثْحَثَ الْحَادِيْ مَطَايَاهُ",
        latin:
          "Shalla ‘alaihi ilâhul-‘arsyi mâ thala‘at syamsun wa mâ ḫatshatsal-ḫâdî mathâ yâhu",
        translation:
          "Semoga Allah melimpahkan rahmat kepadanya selama mentari masih terbit dan hewan-hewan tunggangan masih berjalan.",
      },
    ],

    //Halaman 29
    [
      {
        translation: "29. Qâlat ḫalîmatu famâ zâla",
      },
      {
        arabic:
          "قَالَتْ حَلِيْمَةُ فَمَا زَالَ عِنْدِي حَتَّى يَسَّرَ اللهُ عَلَيَّ الْخَيْرَاتِ وَالْبَرَكَاتِ وَالسَّعَادَةِ بِبَرَكَتِهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. ثَمَّ إِنَّهُ خَرَجَ يَوْمًا مَعَ أَخِيْهِ ضَمْرَةَ يَرْعَيَانِ غَنَمًا لَنَا حَوْلَ بُيُوْتِنَا فَبَيْنَمَا أَنَا كَذٰلِكَ إِذْبِاِبْنِيْ ضَمْرَةَ يَعْدُوْ وَقَدْ عَلَتْهُ صُفْرَةٌ وَهُوَ يُنَادِي يَا أُمَّاهُ أَلْحِقِيْ أَخِيْ مُـحَمَّدًا. فَمَا أَظُنُّكِ تَجِدِيْنَهُ إِلَّا مَقْتُوْلًا أَعَاذَهُ اللهُ مِنْ ذٰلِكَ قَالَتْ حَلِيْمَةُ فَأَسْرَعْنَا فَإِذَا هُوَ شَاخِصٌ بِبَصَرِهِ إِلَى السَّمَاءِ. فَلَمَّا رَاٰنِيْ تَبَسَّمَ ضَاحِكًا فَضَمَمْتُهُ إِلَى صَدْرِيْ وَقَبَّلْتُ بَيْنَ عَيْنَيْهِ فَقُلْتُ لَهُ حَبِيْبِيْ فَدَتْكَ نَفْسِيْ مَا الَّذِيْ أَصَابَكَ يَا بُنَيَّ فَقَالَ لَهَا جَاءَنِيْ ثَلَاثَةُ نَفَرٍ فَأَخْبَرَهَا أَنَّهُمْ شَقُّوْا صَدْرِيْ وَأَخْرَجُوْا قَلْبِيْ وَغَسَلُوْهُ وَرَدُّوْهُ إِلَى مَكَانِهِ وَالْتَأَمَ صَدْرِيْ بِقُدْرَةِ اللهِ سُبْحَانَهُ وَتَعَالَى مِنْ غَيْرِ أَلَـمٍ",
        latin:
          "Qâlat ḫalîmatu famâ zâla ‘indî ḫatta yassarallâhu ‘alal-khairâti wal-barakâti was-sa‘âdati bibarkatihi shallallâhu ‘alaihi wa sallama, tsumma innahu kharaja yauman ma‘a akhîhi dlahrata yarayâni ghanaman lanâ ḫaula buyûtinâ fabainamâ anâ kadzâlika idz bib-nî dlamrata ya‘dû wa qad ‘alathu shufratun wa huwa yunâdi yâ ammâhu alḫiqî akhî muḫammadan, famâ adhunnuki tajidînahu illâ maqtûlan a‘âdzahullâhu min dzâlika qâlat ḫalîmatu fa asri‘nâ faidzâ huwa syâkhishun bibasharihi ilas-samâ’i, falammâ wa‘ânî tabassama dlâḫikan fadlamamtuhu ilâ shadrî wa qabbaltu baina ‘ainaihi faqultu lahu ḫabîbî fadatka nafsî mâl-ladzî ashâbaka yâ bunayya faqâla lahâ jâ’anî tsalatsatu nafarin fa akhbarahâ annahum syaqqû shadrî wa akhrajû qalbî wa ghasalûhu wa raddûhu ilâ makânihi wal-ta’ama shadrî biqudratillâhi subḫânahu wa ta‘âla min ghairi alamin.",
        translation:
          "Siti Halimah mengisahkan, “Begitulah seterusnya yang dialamiku, sampai Allah senantiasa melimpahkan kemudahan kebaikan, kebaikan, dan kebaikan kepadaku berkat Muhammad ﷺ kecil. Disebutkan, pada suatu hari, Muhammad keluar bersama saudaranya Dhamrah dengan tujuan mengembala kambing kami di sekitar rumah. Pada saat itu, tiba-tiba putra kami Dhamrah lari dalam keadaan pucat. Ia berteriak, ‘Ummi, coba lihat saudaraku Muhammad.’ Aku mengira, tidaklah ada yang terjadi kecuali Muhammad terbunuh, naudzu billah. Aku pun segera bergegas menghampirinya. Ternyata Muhammad sedang mengarahkan pandangannya ke langit. Saat melihatku, ia tersenyum bahkan sedikit tertawa. Aku langsung memeluknya dan mencium di antara kedua matanya. Aku sampaikan padanya, ‘Sayangku, anakku, aku rela tebuskan diriku atas apa yang menimpa dirimu.’ Muhammad kecil bercerita, ‘Tadi ada tiga orang yang datang menghampiriku. Mereka telah membelah dadaku dan mengeluarkan hatiku lalu membasuhnya dan mengembalikannya lagi ke tempat asalnya. Setelah itu, dadaku kembali rapat berkat kekuasaan Allah tanpa ada rasa sakit apa pun.",
      },
    ],

    //Halaman 30
    [
      {
        translation: "30. Yâ maulidan qad ḫawa ‘izzan wa iqbâlan ",
      },
      {
        arabic:
          "اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ اللهُ عِزًّ وَإِقْبَالً",
        latin:
          "Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu Allâhu ‘izzan wa iqbâlan",
        translation:
          "Allah, Allah, Allah, Allah, Allah, Allah, Allah, Allah, Allah, kemuliaan dan kejayaan.",
      },
      {
        arabic:
          "يَا مَوْلِدًا قَدْ حَوَى عِــزًّا وَإِقْبَـــالًا بِوَصْلِهِ يَبْلُغُ الْمُشْتَاقُ اٰمَالًا",
        latin:
          "Yâ maulidan qad ḫawa ‘izzan wa iqbâlan biwashlihi yablughul-musytâqu âmâlan",
        translation:
          "Wahai maulid yang menyimpan kemuliaan dan penerimaan. Dengannya, orang yang rindu sampai pada cita-citanya.",
      },
      {
        arabic:
          "يَا مُدَّعِي الْحُبِّ فِيْهِ وَهُوَ ذُوْ وَلَهِ وَفِيْ هَوَاهُ جَفَا أَهْلًا وَأَطْلَالًا",
        latin:
          "Ya mudda‘il-ḫubbi fîhi wa huwa dzû walahi wa fî hawâhu jafâ ahlan wa athlâlan",
        translation:
          "Wahai orang yang mengaku cinta nabi dan ia sedang kebingungan, dalam jiwanya ia menjauh dan mengunjungi yang dicintainya.",
      },
      {
        arabic:
          "إِنْ كُنْتَ تَعْشَقَهُ مُتْ فِيْ مَحَبَّتِهِ مُوَلَّهَ الْقَلْبِ مُشْتَــــاقًا وَإِلَّالًا",
        latin:
          "In kunta ta‘syaqahu mut fî maḫabbatihi muwallahal-qalbi musytâqan wa ilâlan",
        translation:
          "Jika engkau merindukannya, maka matilah dalam mencintainya, wahai yang berhati bingung dan merintih karena rindu.",
      },
      {
        arabic:
          "النُّوْقُ تَعْشَقَــهُ وَجْـــدًا وَتَقْصِدُهُ شَوْقًا وَتَطْلُبُ مِنْ رُؤْيَاهُ إِجْلَالًا",
        latin:
          "An-nûru ta‘syaqahu wajdan wa taqshiduhu syaqan wa tathlubu min ru’yâhu ijlâlan",
        translation:
          "Keindahan yang engkau rindukan dan engkau cari dalam kerinduan hati di antaranya bermimpi melihatnya.",
      },
      {
        arabic:
          "أَمَا تَرَاهَا إِذَا لَاحَتْ قِبَابُ قُبَـــا تَحُطُّ عَنْهَا حُدَاةُ الْعِيْسِ أَثْقَــالًا",
        latin:
          "Amâ tarâ hâ idzâ lâḫat qibâbu qubâ tahuththu ‘anhâ ḫudâtul-‘îsi atsqâlan",
        translation:
          "Apakah engkau tidak melihat singa-singa Quba bercahaya dan menunduk keberatan.",
      },
      {
        arabic:
          "مُشْتَــــاقَةٌ عَشِقَتْ مَنْ لَّا شَبِيْـــهَ لَهُ يُقَطِّعُ الشَوْقُ مِنْهَا فِيْهِ أَوْصَـالًا",
        latin:
          "Musytâqatun ‘asyiqat man lâ syabîha lahu yuqaththi‘usy-syaqu minhâ fîhi aushâlan",
        translation:
          "Kerinduan yang mendambakan orang yang tiada banding. Memutuskan kerinduan lain dan menyambungkan kerinduan kepadanya.",
      },
      {
        arabic:
          "إِيَّاكَ وَالْعَذْلَ مَنْ فِي الْكَوْنِ يُشْبِهُهُ قَدْ فَاقَ الْحُسْنِ أَشْكَالًا وَأَمْثَالًا",
        latin:
          "Iyyâka wal-‘adzla man fil-kauni yusybihuhu qad fâqal-ḫusni asykâlan wa amtsâlan",
        translation:
          "Hati-hati menghina orang yang serupa dengannya di alam semesta. Sebab, keindahannya melebihi segalanya bentuk maupun rupanya.",
      },
      {
        arabic:
          "إِنْ جِئْتَ بَانَ النَّقَا أَوْجِئْتَ مَرْبَعَهُ فَحُطُّ يَا حَادِيَ الْأَضْعَانِ أَحْمَالًا",
        latin:
          "In ji’ta bânan-naqâ au ji’ta marba‘ahu faḫuththu yâ ḫâdiyal-adldiyal-adl‘âni aḫmâlan",
        translation:
          "Jika engkau telah datang, maka kejernihan telah jelas. Atau engkau datang ke tempatnya, maka wahai hewan tunggangan, turunkan beban-beban.",
      },
      {
        arabic:
          "ضَاعَ الزَّمَانُ وَلَمْ أَنْظُرْ مَنَازِلَهُ وَمَا رَأَيْتُ بِذَاكَ الشِّعْبِ أَطْلَالًا",
        latin:
          "dlâ‘az-zamânu wa lam andhur manâzilahu wa mâ raitu bidzâkasy-syu‘bi athlâlan",
        translation:
          "Waktu pun telah hilang dan aku tak melihat kedudukannya. Namun, aku tak melihat bangsa itu sia-sia.",
      },
      {
        arabic:
          "ذَنْبِيْ يُقَيِّدُنِيْ وَالصَّـــدُّ يَقْعِدُنِيْ وَقَــدْ حَمَــلْتُ مِنَ الْأَوْزَارِ أَثْقَــــالًا",
        latin:
          "Dzanbî yuqasyyidunî wash-shaddu yaq‘idunî wa qad ḫamaltu minal-auzâri atsqâlan",
        translation:
          "Dosaku selalu membelengguku. Penghalang menahanku. Aku berat memikul dosa-dosa.",
      },
      {
        arabic:
          "لٰكِنَّنِيْ فِي غَدٍ أَرْجُوْهُ يَشْفَعُ لِيْ وَحُسْنُ ظَنِّيْ بِخَيْرِ الْخَلْقِ مَــا زَالًا",
        latin:
          "Lâkinnanî fî ghadin arjûhu yasyfa‘u lî wa ḫusnu dhannî bikhairil-khalqi mâ zâlan",
        translation:
          "Namun aku kelak, aku berharap padanya memberi syafaat padaku. Aku berbaik sangka pada makhluk terbaik selamanya.",
      },
      {
        arabic:
          "وَقَدْ لَجَأْنَا إِلَى بَـــابِ الْكَرِيمِ وَمَنْ يَلْجَأُ إِلَيْـــهِ يَرَى رُحْبًا وَإِقْبَــالًا",
        latin:
          "Wa qad laja’nâ ila bâbil-karîmi wa man yalja’u ilaihi yara ruḫban wa iqbâlan",
        translation:
          "Kami berlindung pada pintu Yang Maha Mulia. Siapa saja yang berlindung pada-Nya, maka akan melihat sambutan dan penerimaan.",
      },
      {
        arabic:
          "بِحَقِّـــهِ يَــــا إِلٰهِيْ جُدْ لَنَـــــا كَرَمًــــا بِالْعَفْوِ وَالصَّفْحِ إِكْرَامًا وَإِجْلَالًا",
        latin:
          "Biḫaqqihi yâ ilâhî jud lanâ karaman bil‘afwi wash-shafḫi ikwâman wa ijlâlan",
        translation:
          "Karena hak Sang Nabi, wahai Tuhanku, berilah kami kemuliaan berupa ampunan dan maaf karena memuliakan dan mengagungkan.",
      },
      {
        arabic:
          "هُوَ النَّبِيُّ الَّذِيْ طَابَ الْوُجُوْدُ بِهِ وَفِيْهِ خَالَفْتُ لُوَّامًا وَّعُذَّالًا",
        latin:
          "Huwan-nabiyyul-ladzî thâbal-wujûdu bihi wa fîhi khâlaftu luwwâman wa ‘udzdzâlan",
        translation:
          "Dialah Nabi di mana alam wujud menjadi harum karenanya. Dan pada diri Sang Nabi, aku menentang para pencela dan penghina.",
      },
      {
        arabic:
          "صَلَّى عَلَيْــــهِ إِلٰهُ الْعَرْشِ ثُـــــــمَّ عَلَى اٰلِهِ وَالصَّحْبِ اٰبَادًا واٰزَالًا",
        latin:
          "Shalla ‘alaihi ilâhul-‘arsyi tsumma ‘ala âlihi wash-shaḫbi âbâdan wa âzâlan",
        translation:
          "Semoga Tuhan pemilik Arasy melimpahkan rahmat kepadanya, kemudian kepada keluarga dan para sahabat selamanya dan seterusnya.",
      },
    ],

    //Halaman 31
    [
      {
        translation: "31. Wa sammâhu rabbul-‘âlamîna muḫammadan",
      },
      {
        arabic:
          "وَسَمَّاهُ رَبُّ الْعَالَمِينَ مُحَمَّدًا، عَلَى وَصْفِهِ الْمَحْمُودِ وَهُوَ بِهِ يَدْرِي وَمَا غَسَّلَ الْأَمْلَاكُ مِنْ قَلْبِهِ أَذًا وَلٰكِنَّهُمْ زَادُوْهُ طُهْرًا عَلَى طُهْرٍ. فَهُوَ أَعْظَمُ الْأَنْبِيَاءِ قَدْرًا وَأَكْبَرُهُمْ هِمَّةً وَفَخْرًا. لَوْلَاهُ مَا خَلَقَ اللهُ مَلَكًا وَلَا أَدَارَ فَلَكًا وَلَا أَطْلَعَ بَدْرًا أَسْرَى بِهِ إِلَيْهِ فِي الظَّلَامِ لِيَخُصَّةُ بِنَيْلِ الْمَرَامِ. فَسُبْحَانَ الَّذِيْ أَسْرَى بِهِ لَيْلَةَ الْإِسْرَاءِ وَخَاطَبَهُ بِلِسَانِ أُنْسِهِ عَلَى بِسَاطِ قُدْسِهِ. فَأَوْحَى إِلَيْهِ مِنْهُ سِرًّا وَجَهْرًا صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَعَلَى اٰلِهِ وَأَصْحَابِهِ سَادَاتِ الدُّنْيَا وَمُلُوْكِ الْأُخْرَى",
        latin:
          "Wa sammâhu rabbul-‘âlamîna muḫammadan, ‘ala washfihil-maḫmûdi wa huwa bihi yadrî wa mâ ghassalal-amlâku min qalbihi adzan wa lâkinnahum zâdûhu thuhran ‘ala thuhrin, fahuwa a‘dhamul-anbiyâ’i qadran wa akbaruhum himmatan wa fakhran, wa lâhu mâ khalaqallâhu malakan wa lâ adâra falakan wa lâ athla‘a badran wasra bihi ilaihi fidh-dhalâmi liyukhashshahu binailil-marâmi. Fasubḫânal-ladzî asrâ bihi lailatal-isrâ’i wa khâthabahu bilisânin ansihi ‘ala bisâthi qudsihi, fa auḫâ ilaihi minhu sirran wa jahran shallallâhu ‘alaihi wa sallama wa ‘ala âlihi wa ashḫâbihi sâdâtid-dunyâ wa mulûkil-ukhra",
        translation:
          "Allah Rabbul Alamin telah menamai bayi itu dengan nama Muhammad sesuai dengan sifatnya yang terpuji. Padahal Allah maha mengatahui keadaan Muhammad dan juga mengetahui kotoran dari hati yang dicuci oleh para malaikat. Namun, mereka hendak menambah kesucian di atas kesucian. Sebab, Muhammad adalah nabi paling agung kedudukannya dan paling tinggi derajat dan martabatnya. Seandainya, tidak menciptakan Muhammad, Allah tidak akan menciptakan malaikat, tidak pula mengatur cakrawala, tidak pula menerbitkan bulan purnama, juga memjalankannya ke langit di kegelapan malam. Tujuannya untuk mengistimewakan Muhammad dalam mencapai apa yang diinginkan. Maha suci Dzat yang telah menjalankan Muhammad di malam isra dan mengajaknya berbincang dengan bahasa kelembutan-Nya di atas hamparan kesucian-Nya. Lantas Allah menurunkan wahyu kepadanya, baik secara sembunyi-sembunyi maupun terang-terangan. Semoga Allah melimpahkan rahmat kepadanya, juga kepada keluarganya, serta kepada para sahabatnya para pemimpin dunia dan juga raja-raja di akhirat.",
      },
    ],

    //Halaman 32
    [
      {
        translation: "32. Maulâya shalli wa sallim",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلَّمْ دَائِمًـا دَهْـــرًا  عَلَى الْحَبِيْبِ عَلَى فَوْقِ الْعُلَى وَسَرَا",
        latin:
          "Maulâya shalli wa sallim dâ’iman dahrân  ‘alal-ḫabîbi ‘alâ fauqil-‘ulâ wa sarâ",
        translation:
          "Wahai Tuhanku, limpahkanlah rahmat dan keselamatan selalu sepanjang masa  kepada Kekasih (Nabi Muhammad) yang di atas ketinggian dan yang berjalan di malam hari.",
      },
      {
        arabic:
          "صَلَّى الْإِلٰهُ عَلَى النُّوْرِ الَّذِيْ ظَهَرَا لَنَا بِشَهْرِ رَبِيْعِ الْأَوَّلِ اشْتَهَرَا",
        latin:
          "Shallal-ilâhu ‘alan-nûril-ladzî dhaharâ lanâ bisyahri rabî‘il-awwalisy-taharâ",
        translation:
          "Semoga Tuhan melimpahkan shalawat kepada cahaya yang tampak, dan masyhur pada kami pada bulan Rabiul Awal.",
      },
      {
        arabic:
          "أَضَاءَتِ الْأَرْضُ نُوْرًا يَوْمَ مَوْلِدِهِ وَأَصْبَحَ الْكَوْنُ مِنْ أَنْفَاسِهِ عَطِرَا",
        latin:
          "Adlâ’atil-ardlu nûran yauma maulûdihi wa ashbaḫal-kaunu min anfâsihi ‘athirâ",
        translation:
          "Bumi pun terang dengan cahaya pada hari kelahirannya. Dengan nafas-nafasnya semesta pun menjadi semerbak wangi.",
      },
      {
        arabic:
          "هُوَ الَّذِيْ نَارَتِ الدُّنْيَا بِطَلْعَتِهِ وَسِرُّهُ فِيْ قُلُوْبِ الْعَارِفِينَ سَرَى",
        latin:
          "Huwal-ladzî nâratid-dunyâ bithal‘atihi wa sirruhu fî qulûbil-‘ârifîna sara",
        translation:
          "Dialah yang menerangi dunia dengan kelahirannya. Rahasianya mengalir dalam hati orang-orang makrifat.",
      },
      {
        arabic:
          "مَنْ بَطْنِ اٰمِنَةَ لِلْعَالَـمِيْنَ بَدَا مَوْلُوْدُ حُسْنٍ سَنَاهُ يُخْجِلُ الْقَمَرَا",
        latin:
          "Min bathni âminata lil-‘âlamîna badâ maulûdu ḫusnin sanâhu yukhjilul-qamara",
        translation:
          "Dari Rahim Aminah ia lahir ke seluruh alam. Bayi indah yang keindahannya melebihi rembulan.",
      },
      {
        arabic:
          "جَاءَتْ مَلَائِكَةُ الرَّحْمٰنِ تَشْهَدُهُ كَيْمَا تُمَتِّعَ مِنْ أَنْوَارِهِ النَّظَرَا",
        latin:
          "Jâ’at malâ’ikatur-raḫmâni tasyhaduhu kaimâ tumatti‘a min anwârihin-nadharâ",
        translation:
          "Para malaikat Allah yang Maha Pengasih pun datang menyaksikan. Mereka memandangi dan menikmati cahaya-cahayanya.",
      },
      {
        arabic:
          "طَافُوْا بِهِ الْأَرْضَ وَالْأَ كْوَانَ أَجْمَعَهَا لِيَشْهَدَ النَّاسُ سِرًّا كَانَ مُسْتَتِرَا",
        latin:
          "Thâfû bihil-ardla wal-akwâna ajma‘ahâ liyashhadan-nâsu sirran kâna mustatirâ",
        translation:
          "Membawanya keliling bumi dan seluruh alam semesta. Agar seluruh manusia menyaksikan rahasianya yang senantiasa bercahaya.",
      },
      {
        arabic:
          "وَأَخْبَرُوْا أُمَّهُ أَنَّ الَّذِيْ حَمَلَتْ بِفَخْرِهِ عَزَّ قَدْرُ الْبَيْتِ وَافْتَخَرَا",
        latin:
          "Wa akhbarû ummahu annal-ladzî ḫamalat bifakhrihi ‘azza qadrul baiti waftakharâ",
        translation:
          "Mereka mengabari ibunya bahwa bayi yang dikandungnya mulia semulia dan membanggakan Baitullah.",
      },
      {
        arabic:
          "هُوَ الَّذِيْ كُلُّ مَنْ فِي الْكَوْنِ يَعْشَقُهُ وَيُطْرِبُ الصَّبَّ مَعْنَاهُ إِذَا ذُكِرَا",
        latin:
          "Huwal-ladzî kullu man fil-kauni ya‘syaquhu wa yuthribush-shabba ma‘nâhu idzâ dzukira",
        translation:
          "Dialah sosok yang semua orang di alam semesta bisa merindukannya dan jatuh cinta ketika makna-maknanya disebutkan.",
      },
      {
        arabic:
          "هٰذَا يَتِيْمٌ فَقِيْرٌ زَانَهُ شَرَفٌ مِنْ أَجْلِهِ تُكْرَمُ الْأَيْتَامُ وَالْفُقَرَا",
        latin:
          "Hâdzâ yatîmun faqîrun zânahu syarafun min ajlihi tukramul-aitâmu wal-fuqarâ",
        translation:
          "Hanya saja dia anak yatim nan fakir. Namun, dengannya anak-anak yatim dan orang-orang fakir dimuliakan",
      },
      {
        arabic:
          "هٰذَا النَّبِيُّ الَّذِيْ لَوْلَا جَلَالَتُهُ لَمْ يُخْلَقِ الْخَلْقُ لَا جِنَّا وَلَا بَشَرَا",
        latin:
          "Hâdzan-nabiyyul-ladzî lau lâ jalâlatuhu lam yukhlaqu lâ jinnan wa lâ basyaran",
        translation:
          "Dialah Nabi yang jika bukan karena keagungannya makhluk, jin, dan manusia tidak akan diciptakan.",
      },
      {
        arabic:
          "هٰذَا النَّبِيُّ الَّذِيْ مَنْ زَارَ حُجْرَتَهُ نَالَ الْهَنَا وَالْمُنَا وَالسُّؤْلَ وَالْوَطَرَا",
        latin:
          "Hâdzan-nabiyyul-ladzî man zâra ḫujratahu nâlal-hanâ wal-munâ was-su’la wal-watharâ",
        translation:
          "Dialah Nabi yang siapa pun mengunjungi kamarnya, maka ia akan memperoleh kebahagiaan, cita-cita, permohonan, dan keinginannya.",
      },
      {
        arabic:
          "صَلَّى عَلَيْهِ إِلٰهُ الْعَرْشِ مَا سَجَعَتْ حَمَامَةٌ فَوْقَ غُضْنٍ مَّائِسِ سَحَرَا",
        latin:
          "Shallallâhu ‘alaihi ilâhul-‘arsyi mâ saja‘at ḫâmatun fauqa ghudlnin mâ’isi saḫarâ",
        translation:
          "Semoga Tuhan Arasy melimpahkan rahmat kepadanya selama kawanan burung masih bersiul memukau di atas dahan kokoh.",
      },
    ],

    //Halaman 33
    [
      {
        translation: "33. Qâla ‘abdul wâḫîdib-nu ‘ismâ‘îla",
      },
      {
        arabic:
          "قَالَ عَبْدُ الْوَاحِدِ بْنُ إِسْمَعِيْلَ، كَانَ بِمِصْرَ رَجُلٌ يَصْنَعُ مَوْلِدًا لِلنَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ كُلَّ عَامٍ، وَكَانَ إِلَى جَانِبِهِ رَجُلٌ يَهُوْدِيٌّ فَقَالَتْ زَوْجَةُ الْيَهُودِيِّ مَا بَالُ جَارِنَا الْمُسْلِمِ، يُنْفِقُ مَالًا جَزِيْلًا فِيْ مِثْلِ هٰذَا الشَّهْرِ. فَقَالَ لَهَا زَوْجُهَا إِنَّهُ يَزْعُمُ أَنَّ نَبِيَّهُ وُلِدَ فِيْهِ وَهُوَ يَفْعَلُ ذٰلِكَ فَرْحَةً بِهِ وَكَرَامَةً لَّهُ وَلِمَوْلِدِهِ. قَالَ فَسَكَتَا ثُمَّ نَامَا لَيْلَتَهُمَا فَرَأَتِ امْرَأَةُ الْيَهُودِيُّ فِي الْمَنَامِ رَجُلًا جَمِيْلًا جَلِيْلًا عَلَيْهِ مَهَابَةٌ وَتَبْجِيْلٌ وَوَقَارٌ. فَدَخَلَ بَيْتَ جَارِهِ الْمُسْلِمِ. وَحَوْلَهُ جَمَاعَةٌ مِنْ أَصْحَابِهِ وَهُمْ يُبَجِّلُونَهُ وَيُعَظِّمُوْنَهُ فَقَالَتْ لِرَجُلٍ مِنْهُمْ مَّنْ هٰذَا الرَّجُلُ الْجَمِيْلُ الْوَجْهِ. فَقَالَ لَهَا هٰذَا رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ. دَخَلَ هٰذَا الْمَنْزِلَ لِيُسَلَّمَ عَلَى أَهْلِهِ وَيَزُوْرَهُمْ لِفَرَحِهِمْ بِهِ. فَقَالَتْ لَهُ هَلْ يُكَلِّمُنِيْ إِذَا كَلَّمْتُهُ قَالَ نَعَمْ. فَأَتَتْ إِلَيْهِ، وَقَالَتْ يَا مُحَمَّدُ فَقَالَ لَهَا لَبَّيْكِ فَقَالَتْ لَهُ أَتُجِيْبُ لِمِثْلِيْ بِالتَّلْبِيَةِ وَأَنَا عَلَى غَيْرِ دِيْنِكَ وَمِنْ أَعْدَائِكَ. فَقَالَ لَهَا وَالَّذِي بَعَثَنِيْ بَالْحَقِّ نَبِيًّا مَّا أَجَبْتُ نِدَاءَكِ حَتَّى عَلِمْتُ أَنَّ اللهَ تَعَالَى قَدْ هَدَاكِ",
        latin:
          "Qâla ‘abdul wâḫîdib-nu ‘ismâ‘îla, kâna bimishra rajulun yashna‘u maulidan lin-nabiyyi shallallâhu ‘alaihi wa sallama kulla ‘âmin, wa kâna ila jânibihi rajulun yahûdiyyun faqâlat zaujatul-yahûdiyyi mâ bâla jârinal-muslimi, yunfiqu mâlan jazîlan fî mitsli hâdzasy-syahri, faqâla lahâ zaujuhâ innahu yaz‘umu anna nabiyyahu wulida fîhi wa huwa yaf‘alu dzâlika farḫatan bihi wa karâmatan lahu wa limaulidihi. Qâla fasakatâ tsumma nâma lailatahumâ fara’atim-ratul-yahudiyyu fil-manâmi rajulan jamîlan jalîlan ‘alaihi mahâbatun wa tabjîlun wa waqârun, fadakhala baita jârihil-muslimi, wa ḫaulahu jamâ‘atun min ashḫâbihi wa hum yabajjilûnahu wa yu‘adhdhimûnahu fa qâlat lirajulin minhum man hâdzar-rajulul-jamîlul-wajhi, faqâla lahâ hâdzâ rasulullâhi shallallâhu ‘alaihi wa sallama, dakhala hâdzal-manzila liyusallima ‘ala ahlihi wa yazûrahum lifaraḫihim bihi, faqâlat lahu hal yukallimunî idzâ kallamtuhu qâla na‘am, fa’atat ilaihi, wa qâlat yâ muḫammadu faqâla lahâ labbaiki faqâlat lahu atujîbu limitslî bit-talbiyyati, wa anâ ‘ala ghairi dînika wa min a‘da’ika, faqâla lahâ walladzî ba‘atsanî bil-ḫaqqi nabiyyan mâ ajabtu nidâ’aka ḫatta ‘alimtu annallâha ta‘ala qad hadâki.",
        translation:
          "Abdul Wahid bin Ismail mengisahkan, di Mesir ada seorang laki-laki yang mengadakan Maulid Nabi ﷺ setiap tahun. Di samping laki-laki itu ada seorang Yahudi. Suatu saat, istri orang Yahudi itu berkomentar, “Bagaimana menurutmu tentang tetangga kita yang orang muslim itu? Ia mengeluarkan harta yang banyak seperti yang dikeluarkan pada bulan ini.” Laki-laki Yahudi menjawab pertanyaan istrinya, “Ia mengira bahwa nabinya dilahirkan pada bulan ini. Dan ia melakukan semua itu karena gembira atas kelahirannya, memuliakan kepadanya, sekaligus memuliakan kelahirannya. Akhirnya, orang Yahudi dan istrinya itu diam. Pada malam harinya, mereka tidur. Kemudian, si istri Yahudi bermimpi melihat seorang pria tampan dan terhormat. Ia begitu mulia, kharismatik, dan bersahaja. Pria tampan itu kemudian masuk ke rumah tetangganya yang Muslim tadi. Sementara di sekitarnya ada sekelompok jamaah dari kalangan sahabatnya. Mereka begitu hormat dan mengagungkan sang pria tampan itu. Si perempuan Yahudi lantas bertanya kepada salah seorang mereka, “Siapa pria berwajah tampan itu?” Si laki-laki menjawab, “Itu adalah Rasulullah ﷺ. Beliau masuk ke rumah laki-laki Muslim itu untuk menyampaikan selamat kepada keluarganya dan mengunjungi mereka karena kegembiraan mereka kepada beliau.” Si perempuan Yahudi bertanya lagi, “Apakah beliau berkenan bicara denganku jika aku mengajaknya?” Si laki-laki menjawab, “Tentu saja.” Kemudian, si perempuan menghampirinya, lantas menyapa, “Wahai Muhammad.” Nabi Muhammad menjawab, “Baik…” Ia berkata lagi, “Engkau berkenan menjawab panggilan kepada orang sepertiku. Padahal aku orang yang tidak seagama denganmu, bahkan termasuk musuhmu.” Beliau berkata, “Demi Dzat yang menguttusku sebagai nabi dengan hak, tidaklah aku menjawab panggilanmu, sampai aku tahu bahwa Allah telah memberi hidayah kepadamu.”",
      },
    ],

    //Halaman 34
    [
      {
        translation: "34. Lâ ilâha illallâh Muḫammadun rasûlullâh",
      },
      {
        arabic: "لَا إلٰهَ إِلَّا اللهُ  مُحَـمَّدٌ رَّسُوْلُ اللهِ",
        latin: "Lâ ilâha illallâh Muḫammadun rasûlullâh",
        translation: "Tiada Tuhan selain Allah Muhammad utusan Allah.",
      },
      {
        arabic:
          "تَعَــالَوْ بِنَـــا نَصْطَلِحْ فَبَـــابُ الرِّضَــــا قَدْ فُتِحْ",
        latin: "ta‘alau binâ nashthaliḫ fabâbur-ridlâ qad futiḫa",
        translation:
          "Marilah kita mengukir istilah, karena pintu keridaan telah terbuka.",
      },
      {
        arabic: "وَدَاوُوا الْفُـؤَادِ الَّذِيْ بِسَيْفِ الْهَوَى قَدْ جُرِحْ",
        latin: "Wa dâwul-fu’âdil-ladzî bisaifil-hawa qad juriḫ",
        translation: "Obatilah hati kalian yang luka karena pedang hawa nafsu.",
      },
      {
        arabic:
          "أَيَـــــــا مُدَّعِيْ حُبِّنَـــــا دَعِ الرُّوحَ ثُـــــمَّ اطَّرِحْ",
        latin: "Ayâ mudda‘î ḫubbinâ da‘ir-rûḫa tsummath-thariḫ",
        translation:
          "Siapa pun di antara kita yang mengaku cinta, maka tinggalkan ruh lalu lemparkan",
      },
      {
        arabic:
          "تَعَلَّقْ بِأَهْـــلِ الْهُوَى وَقُــلْ لِلْعَذُوْلِ اسْتَرِحْ",
        latin: "ta‘allaq bi ahlil-hawâ wa qul lil-‘adzzulis-tariḫ",
        translation:
          "Bergantunglah kepada orang-orang yang cinta. Celalah diri sendiri, niscaya kamu tenang.",
      },
      {
        arabic:
          "وَلِيْ قَلْبُ مِنْ حُبِّكُمْ عَلَى بَـــابِكُمْ مَّـــا بَرِحْ",
        latin: "Wa lî qalbu min ḫubbikum ‘ala bâbikum mâ bariḫ",
        translation: "Hatiku mencintaimu, hingga aku tetap di depan pintumu.",
      },
      {
        arabic:
          "أَلَا يَــــــا نَبِيَّ الْهُـــدَى أَغِثْ مَنْ بِذِكْرِكَ يَصِحْ",
        latin: "Alâ yâ nabiyyal-hudâ aghits man bidzikrika yashiḫ",
        translation:
          "Wahai nabi petunjuk, tolonglah orang yang teriak menyebut-nyebut namamu.",
      },
      {
        arabic: "أَلَا يَــا رَسُوْلَ الْكَرِيْمِ عَلَيْكَ صَـــلَاةٌ صَحِيْحٌ",
        latin: "Alâ yâ rasûlal-karîmi ‘alaika shalâtun shaḫîhun",
        translation:
          "Wahai utusan Dzat Yang Mahamulia, shalawat yang melimpah semoga tetap untukmu.",
      },
      {
        arabic:
          "وَشَوْقِيْ لَكُمْ مَا انْقَضَا وَحُبِّيْ لَكُمْ مَــــا بَرِحْ",
        latin: "Wa syauqî lakum mân-qadlâ wa ḫubbî lakum mâ bariḫ",
        translation:
          "Kerinduanku padamu tiada henti. Kecintaanku padamu selalu menyala.",
      },
      {
        arabic: "وَكَـمْ لَا مَنِيْ لَائِــمٌ وَمَـــا بِسُلُوِّيْ فَـــرِحْ",
        latin: "Wa kam lâ manî lâ’imun wa mâ bisulûwwî fariḫ",
        translation:
          "Betapa banyak orang mencelaku, namun aku selalu bahagia terhibur.",
      },
      {
        arabic: "أَمَا تَرْحَمُوْا بَاكِيَّا إِذَا ضَحِكَ الْمُنْشَرِحْ",
        latin: "Amâ tarḫamû bâkiyyâ idzâ dlaḫikal-munsyariḫ",
        translation:
          "Apakah kalian tidak menyayangi orang yang menangis, ketika orang yang riang selalu tertawa?",
      },
      {
        arabic: "فَيَا سَعْدُ مَنْ حَبَّكُمْ فَفِي الْعَاقِبَة قَدْ رَبِحْ",
        latin: "Fayâ sa‘du man ḫabbakum fafil-‘aqibati qad rabiḫ",
        translation:
          "Alangkah bahagianya orang yang mencintaimu. Ia beruntung karena berada dalam keselamatan.",
      },
      {
        arabic:
          "تَرَنَّـــــمْ بِذِكْــرِ النَّبِيِّ وَغَـــرِّدْ بِهِ ثُـــــمَّ صِحْ",
        latin: "Tarnnam bidzikrin-nabiyyi wa gharrid bihi tsumma shiḫ",
        translation:
          "Bersenandunglah dengan menyebut-nyebut nama nabi. Bersiullah dengan namanya, niscaya engkau sehat.",
      },
      {
        arabic:
          "أَلَا يَــــانَبِيَّ الْهُــــدَى أَغِثْ مَنْ بِذِكْرِكَ يَلِحْ",
        latin: "Alâ yâ nabiyyal-hudâ aghits man bidzikrika yaliḫ",
        translation:
          "Ingatlah, wahai nabi pembawa petunjuk, tolonglah orang yang terus-menerus menyebut namamu.",
      },
      {
        arabic: "وَصَلِّ عَلَى الْمُصْطَفَى خِتَامِيْ وَمَنْ بِهِ فُتِحْ",
        latin: "Wa shalli ‘alal-mushthafâ khitâmî wa man bihi futiḫ",
        translation:
          "Limpahkanlah shalawat kepada nabi pilihan, nabi penutupku, beserta orang-orang yang telah dimenangkan.",
      },
    ],

    //Halaman 35
    [
      {
        translation: "35. Faqâlat innaka lanabiyyun karîmun",
      },
      {
        arabic:
          "فَقَالَتْ إِنَّكَ لَنَبِيٌّ كَرِيمٌ. وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ. تَعِسَ مَنْ خَالَفَ أَمْرَكَ وَخَابَ مَنْ جَهِلَ قَدْرَكَ امْدُدْ يَدَكَ فَأَنَا أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ. وَأَنَّكَ مُحَمَّدٌ رَّسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ثُمَّ إِنَّهَا عَاهَدَتِ اللهَ فِيْ سِرِّهَا أَنَّهَا إِذَا أَصْبَحَتْ تَتَصَدَّقُ بِجَمِيْعِ مَا تَمْلِكُهُ. وَتَصْنَعُ مَوْلِدًا لِلنَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَرْحَةً بِإِسْلَامِهَا وَشُكْرًا لِلرُّؤْيَا الَّتِيْ رَأَتْهَا فِيْ مَنَامِهَا. فَلَمَّا أَصْبَحَتْ رَأَتْ زَوْجَهَا قَدْ هَيَّأَ الْوَلِيْمَةَ، وَهُوَ فِيْ هِمَّةٍ عَظِيْمَةٍ. فَتَعَجَّبَتْ مِنْ أَمْرِهِ وَقَالَتْ لَهُ مَالِيْ أَرَاكَ فِيْ هِمَّةٍ صَالِحَةِ فَقَالَ لَهَا مِنْ أَجْلِ الَّذِيْ أَسْلَمْتِ عَلَى يَدَيْهِ الْبَارِحَةَ. فَقَالَتْ لَهُ مَنْ كَشَفَ لَكَ عَنْ هٰذَا السِّرِّ الْمَصُوْنِ. وَمَنْ أَطْلَعَكَ عَلَيْهِ فَقَالَ لَهَا الَّذِيْ أَسْلَمْتُ بَعْدَكِ عَلَى يَدَيْهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ كَمَا عَرَّفَ بِاللهِ وَدَعَا إِلَيْهِ فَهُوَ الْمُشَفَّعُ غَدًا فِيْمَنْ يُصَلِّيْ وَيُسَلِّمُ عَلَيْهِ",
        latin:
          "Faqâlat innaka lanabiyyun karîmun, wa innaka la‘ala khuluqin ‘adhîmin, ta‘isa man khâlafa amraka wa khâba man jahila qadrakam-dud yadaka fa’anâ asyhadu an lâ ilâha illallâhu, wa annakan muḫammadun rasûlullâhi shallallâhu ‘alaihi wa sallama tsumma innahâ ‘âhadatillâha fî sirrihâ annahâ idzâ ashbaḫat tatashaddaqu bijamî‘i mâ tamlikuhu, wa tashna‘u maulidan lin-nabiyyi shallallâhu alaihi wa sallama farḫatan bi islâmihâ wa syukran lir-ru’yâl-latî ra’at fî manâmihâ, falammâ ashbaḫat ra’at zajahâ qad hayya’al-walîmata, wa huwa fî himmatin ‘adhîmatin, fata’ajjabat min amrihi wa qâlat lahu mâ lî arâka fî himmatin shâliḫatin faqâla lahâ min ajlil-ladzî aslamti ‘ala yadaihil-bâriḫata, faqâlat lahu man kasyafa laka ‘an hâdzas-sirril-mashûni, wa man athla‘aka alaihi faqâla lahâl-ladzî aslamtu ba‘daki ‘ala yadaihi shallallâhu ‘alaihi wa sallama kamâ ‘arrafa billâhi wa da‘â ilaihi fahuwal-musyaffa‘u ghadan fîman tushallî wa yusallimu ‘alaihi.",
        translation:
          "Dalam mimpinya, perempuan Yahudi itu berkata, “Sesungguhnya engkau adalah nabi yang mulia. Engkau juga benar-benar berperangai luhur. Binasalah orang yang menentang perintahmu dan rugilah orang yang tidak mengetahui kedudukanmu. Sekarang sodorkanlah tanganmu, karena aku akan mengucap dua kalimat syahadat, ‘Aku bersaksi bahwa tiada tuhan selain Allah dan engkau adalah utusan-Nya.’ Si perempuan itu pun rupanya secara sembunyi-sembunyi berjanji kepada Allah. Ketika pagi hari, ia kemudian menyedekahkan seluruh harta yang dimilikinya dan mengadakan maulid Nabi ﷺ karena gembira dengan keislamannya dan bersyukur telah melihat Nabi ﷺ walau dalam mimpi. Kesokan paginya, perempuan itu melihat suaminya mempersiapkan upacara. Ia begitu bersemangat. Perempuan itu pun terkejut melihat tingkah suaminya. Ia segera bertanya, “Ada apa gerangan, kulihat engkau sesemangat itu?” Suaminya menjawab, “Justru karena seseorang di mana engkau tadi malam masuk Islam di hadapannya.” Si perempuan heran lantas bertanya, “Memangnya siapa yang menyampaikan rahasia yang terjaga ini kepada engkau? Siapa yang melaporkannya kepadamu?” Suaminya menjawab, “Dia adalah seseorang di mana saya masuk Islam setelahmu di hadapannya, sebagaimana ia memperkenalkan Allah dan mengajak ke jalan Allah. Dialah yang diterima permintaan syafaatnya kelak bagi orang yang bershalawat dan membaca salam kepadanya.”",
      },
    ],

    //Halaman 36
    [
      {
        translation: "36. Shalâtun wa taslîmun wa azkâ taḫiyyatin",
      },
      {
        arabic:
          "صَــــلَاةٌ وَتَسْلِيْمٌ وَأَزْكَى تَحِيَّـــــةٍ عَلَى الْمُصْطَفَى الْمُخْتَارِ خَيْرِ الْبَرِيَّاتِ",
        latin:
          "Shalâtun wa taslîmun wa azkâ taḫiyyatin ‘alal-mushthafal-mukhtâri khairil-bariyyâti",
        translation:
          "Shalawat, salam, dan penghormatan yang tertinggi semoga tetap terlimpah kepada nabi pilihan, dan nabi, terpilih, serta makhluk terbaik.",
      },
      {
        arabic:
          "حَبِيْبٌ يَغَارُ الْبَدْرُ مِنْ حُسْنِ وَجْهِهِ تخَيَّرَتِ الْأَفْكَارُ فِيْ وَصْفِ مَعْنَاهُ",
        latin:
          "ḫabîbun yughârul-badru min ḫusni wajhihi takhayyaratil-afkâru fî washfi ma‘nâhu",
        translation:
          "Seorang kekasih yang membuat cemburu bulan purnama saking indah wajahnya. Akal pikiran pasti memilih gambaran maknanya.",
      },
      {
        arabic:
          "حَبِيْبٌ تَجَلَّى لِلْقُلُوْبِ مُخَاطِبًـــا فَطَافُوْا بِهِ شُكْرًا وَ فِيْ حُسْنِهِ تَاهُوْا",
        latin:
          "ḫabîbun tajalla lil-qulûbi mukhâtiban fathâfû bihi syukran wa fî ḫusnihi tâhû",
        translation:
          "Seorang kekasih yang jelas bicara sampai hati. Mereka membawanya keliling sebagai bentuk syukur dan kebaikannya.",
      },
      {
        arabic:
          "مَلِيْحٌ حَوَى كُلَّ الْقُلُوْبِ لِحُسْنِهِ فَرُحْتُ وَرَاحَ الْقَلْبُ مِنْ بَعْضِ أَسْرَاهُ",
        latin:
          "Malîḫun ḫawa kullal-qulûbi liḫusnihi faruḫtu wa râḫal-qalbu min ba‘dli asrâhu",
        translation:
          "Sosok yang elok memenuhi hati dengan keindahannya. Hingga aku gembira dan hati seakan terlepas dari separuh penjaranya.",
      },
      {
        arabic:
          "رَضِيْتُ بِهِ مَوْلَى عَلَى كُلِّ حَــالَةٍ فَقُلْ لِبَعِيْدِ الدَّارِ دَعْنِيْ وَإِيَّــــاهُ",
        latin:
          "Radlîtu bihi maula ‘ala kulli ḫâlatin faqul liba‘îdid-dâri da‘nî wa iyyâhu",
        translation:
          "Wahai Tuhan, aku rela kepadanya dalam segala keadaan. Sampaikan pada hamba negeri ini dan biarlah aku bersamanya.",
      },
      {
        arabic:
          "يُوَاصِلُنِيْ طَوْرًا يَصُـــــدُّنِيْ وَهَـــا أَنَـــــا رَاضٍ بِـــــالَّذِيْ هُوَ يَـهْوَاهُ",
        latin:
          "Yuwâshilunî thauran yashuddunî wa hâ anâ râdlin bil-ladzî huwa yahwâhu",
        translation:
          "Sebab, ia menghubungi dan menghalangiku. Inilah aku yang ridha pada sosok yang dirindukan.",
      },
      {
        arabic:
          "فَلَوْلَاهُ مَا طَابَ الْهَوَى لِمُتَــــيَّمٍ وَلَا اسْتَعْذَبَ الطَّرْفُ الْمَدَامِعُ لَوْلَاهُ",
        latin:
          "Falau lâ hu mâ thâ bal-hawâ limutayyami wa lâs-ta‘dzabath-tharful-madâmi‘u lau lâ hu",
        translation:
          "Andai tiada dia, maka jiwa ini tidak akan tenang pada sosok sempurna. Andai tiada dia, maka pandangan yang berlinang air mata ini tidak akan pernah tenang.",
      },
      {
        arabic:
          "وَلَوْلَاهُ مَا حَنَّ الْحُدَاةُ لِحَاجِــرٍ وَلَا اسْتَنْشَقَ الْعُشَّاقُ يَوْمًا خُزَامَاهُ",
        latin:
          "Wa lau lâ hu mâ ḫannal-ḫudâtu liḫâjiri wa lâstajsyaqqal-‘usyyâqu yauman khuzâmâhu",
        translation:
          "Andai tidak ada dia, maka burung yang disangkar tidak pernah senang pada menyangkar. Dan orang yang rindu pada suatu hari tidak akan pernah menghirup rasa cintanya.",
      },
      {
        arabic:
          "صَلَاةٌ وَتَسْلِيْمٌ عَلَى خَيْرِ مُرْسَلٍ مُحَـمَّدٍ ࣙالدَّاعِيْ إِلَى سُــــبُلٍ أَهْــــدَاهُ",
        latin:
          "Shalâtun wa taslîmun ‘ala khairi mursali muḫammadinid-dâ‘î ila subuli ahdâhu",
        translation:
          "Shalawat dan salam semoga tetap tercurah kepada rasul terbaik, Muhammad yang menyeru kepada jalan-jalan yang ditunjukkannya.",
      },
    ],

    //Halaman 37
    [
      {
        translation: "37. Fî ḫubbi sayyidinâ muḫammad",
      },
      {
        arabic:
          "َللّٰهُمَّ صَــــلِّ عَلَى مُحَـمَّدْ يَا رَبِّ صَلِّ عَلَيْهِ وَسَلِّمْ",
        latin:
          "Allâhumma shalli ‘alâ muḫammad. Yâ Rabbi shalli ‘alaihi wa sallim",
        translation:
          "Ya Allah, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Duhai Tuhanku, limpahkanlah rahmat dan keselamatan kepada beliau ﷺ.",
      },
      {
        arabic:
          "فِيْ حـُبِّ سَيِّدِنَــــا مُحَمَّدْ نُوْرٌ لِبَدْرِ الْهـُــدَى مُتَمَّمْ",
        latin: "Fî ḫubbi sayyidinâ muḫammad. Nûrun libadril hudâ mutammam",
        translation:
          "Dalam cinta kepada Baginda Muhammad ﷺ ada cahaya petunjuk laksana bulan purnama yang sempurna.",
      },
      {
        arabic:
          "قَلْـبِيْ يَحِــــنُّ إِلَى مُحَـمَّدْ مَــــا زَالَ فِيْ وُجْدِهِ مُتَيَّمْ",
        latin: "Qalbî yaḫinnu ilâ muḫammad. Mâ zâla fî wujdihi mutayyam",
        translation:
          "Hatiku merindukan Nabi Muhammad ﷺ. Sedih (menahan rindu) dan tergila-gila (dalam cinta) tiada henti.",
      },
      {
        arabic:
          "مَا لِيْ حَبِيْبٌ سِوَى مُحَمَّدْ خَـيْرِ الرُّسُلِ النَّبِيِّ الْمُكَرَّمْ",
        latin: "Mâ lî ḫabîbun siwâ muḫammad. Khairir-rusuli nabiyy mukarram",
        translation:
          "Tiada kekasih bagiku selain Baginda Muhammad ﷺ, rasul terbaik yang dimuliakan.",
      },
      {
        arabic:
          "شَوْقُ الْمُــحِبِّ إِلَى مُحَمَّدْ أَفْنَـــاهُ ثُمَّ بِهِ تَهَيَّمْ",
        latin: "Syauqul muḫibbi ilâ muḫammad. Afnâhu tsumma bihî tahayyam",
        translation:
          "Kerinduan sang pecinta kepada Nabi ﷺ sudah demikian parah hingga memicu kegilaan.",
      },
      {
        arabic:
          "فِي الْحَشْرِ شَافِعُنَـــا مُحَمَّدْ مُنْجِي الْخَلَائِقِ مِنْ جَهَنَّمْ",
        latin: "Fîl ḫasyri syâfi‘unâ muḫammad. Munjîl khalâ-iqi min jahannam",
        translation:
          "Di padang mahsyar, Nabi Muhammad-lah sang pemberi syafaat, penyelamat makhluk dari api Jahanam.",
      },
      {
        arabic:
          "مِيْـــلَادُ سَيِّدِنَــــا مُحَـمَّدْ أُمُّ الْقُــــرَى بَلَدٌ مُعَظَّمْ",
        latin: "Mîlâdu sayyidinâ muḫammad. Ummul qurâ baladun mu‘addham",
        translation:
          "Nabi Muhammad ﷺ lahir di Ummul Qura (Makkah), negeri yang dihormati.",
      },
      {
        arabic:
          "أَحـْيَا الدُّجَى زَمَنًــا مُحَمَّدْ مَوْلَاهُ سَلَّمَـــهُ وَكَلَّمْ",
        latin: "Aḫyad-dujâ zamanân muḫammad. Maulâhu sallamahû wa kallam",
        translation:
          "Nabi Muhammad ﷺ menghidupkan waktu malamnya (dengan beribadah). Allah pun menganugerahinya rahmat dan menyapanya.",
      },
      {
        arabic:
          "أَدْعُوْكَ أَحْمَدُ يَا مُحَـمَّدْ يَا سَيِّدَ الرُّسُلِ الْمُقَدَّمْ",
        latin: "Ad‘ûkaka aḫmad yâ muḫammad. Yâ sayyidar rusulil muqaddam",
        translation:
          "Aku memanggilmu dengan sebutan Ahmad, wahai Muhammad ﷺ, wahai pemimpin para rasul terdahulu.",
      },
      {
        arabic:
          "اِشْفَــعْ إِلَى اللهِ يَـــا مُحَمَّدْ يَوْمَ الْقِيَـــامَةِ كَيْ أُنَعِّمْ",
        latin: "Isyfa‘ ilâllâhi yâ muḫammad. Yaumal qiyâmati kai una‘‘im",
        translation:
          "Duhai Nabi Muhammad ﷺ, berilah kami syafaat karena Allah di hari Kiamat agar kami memperoleh nikmat.",
      },
      {
        arabic:
          "أَرْجـُوْ الشَّفَاعَةَ مِنْ مُحَمَّدْ لَوْكُنْتُ أَرْتَكِبُ الْمُحَرَّمْ",
        latin: "Arjûsy syafâ‘ata min muḫammad. Lau kuntu artakibul muḫarram",
        translation:
          "Aku berharap syafaat dari Nabi Muhammad ﷺ sekiranya kami pernah melakukan perbuatan terlarang (haram).",
      },
      {
        arabic:
          "مَنْجَا وَمَلْجَــــأُنَـــا مُحَـمَّدْ يَوْمَ الْقِيَامَةِ إِذْ يُقَدَّمَ",
        latin: "Manjâ wa malja-unâ muḫammad. Yaumal qiyâmati idz yuqaddam",
        translation:
          "Nabi Muhammad ﷺ adalah tempat berlindung kami saat datangnya hari kiamat.",
      },
      {
        arabic:
          "وَالنُّوْرُ جَـآءَ بِــهِ مُحَـمَّدْ وَالْحَقُّ بَانَ فَلَيْسَ يُكْتَمْ",
        latin: "Wannûru jâ-a bihî muḫammad. Wal haqqu bâna fa laisa yuktam",
        translation:
          "Nabi Muhammad ﷺ datang membawa cahaya. Kebenaran pun terang benderang, tidak ditutup-tutupi.",
      },
      {
        arabic:
          "أَعْلَى السَّمَـــاءِ سَمَا مُحَمَّدْ جـِبْرِيْلُ قَالَ لَهُ تَقَدَّمْ",
        latin: "A‘lâs-samâ-i samâ muḫammad. Jibrîlu qâla lahû taqaddam",
        translation:
          "Nabi Muhammad ﷺ telah sampai di langit tertinggi (Sidratul Muntaha). (Bahkan) Jibril pun mempersilakan beliau: Majulah (sendiri menghadap Allah)!",
      },
      {
        arabic:
          "وَالْجُنْدُ حـِيْنَ غَزَا مُحَمَّدْ مِنْهُمْ مَلَا ئِكَةٌ تُسَوَّمْ",
        latin: "Wal jundu ḫîna ghazâ muḫammad. Minhum malâ-ikatun tusawwam",
        translation:
          "Ketika berperang, Nabi Muhammad dibantu sebagian pasukan dari bangsa malaikat.",
      },
      {
        arabic:
          "وَالدِّيْنَ أَظْهَـــرَهُ مُحَـمَّدْ وَالْكُفْرَ أَبْطَلَهُ فَهَدَّمْ",
        latin: "Wad-dîna adh-harahû muḫammad. Wal kufra abthalahû fahaddam",
        translation:
          "Agama Islam telah dimenangkan oleh Nabi Muhammad. Dan kekufuran telah dihancurkan olehnya.",
      },
      {
        arabic:
          "صَـلَّى الْإِلٰهُ عَلَى مُحَـمَّدْ وَالْاٰلِ كُلِّهِمِ وَسَلَّمْ",
        latin: "Shallâl ilâhu ‘alâ muḫammad. Wal âli kullihimi wa sallam",
        translation:
          "Semoga Allah melimpahkan rahmat dan keselamatan kepada Nabi Muhammad ﷺ, serta kepada seluruh keluarganya.",
      },
      {
        arabic: "صَلَّى اللهُ عَلَى مُحَـمَّدْ وَالصَّحْبِ كُلِّهِمِ وَسَلَّمْ",
        latin: "Shallâllâhu ‘alâ muḫammad. Wash shaḫbi kullihimi wa sallam",
        translation:
          "Semoga Allah melimpahkan rahmat dan keselamatan kepada Nabi Muhammad ﷺ, serta kepada seluruh sahabatnya.",
      },
    ],

    //Halaman 38
    [
      {
        translation: "38. Shadaqallâhul-‘aliyyul-‘adhîmu",
      },
      {
        arabic:
          "صَدَقَ اللهُ الْعَلِيُّ الْعَظِيْمُ. وَبَلَغَ رَسُوْلُهُ الْحَبِيْبُ الْكَرِيمُ. وَنَحْنُ عَلَى ذٰلِكَ مِنَ الشَّاهِدِيْنَ. وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ. اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْأَوَّلِيْنَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْاٰخِرِيْنَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي النَّبِيِّينَ. وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْمُرْسَلِينَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِيْ كُلِّ وَقْتٍ وَحِيْنِ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْمَلَإِ الْأَعْلَى إِلَى يَوْمِ الدِّيْنِ. اَلسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ. اَلسَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِيْنَ. اللّٰهُمَّ بَلِّغْ رُوْحَ سَيِّدِنَا مُحَمَّدٍ مِنَّا تَحِيَّةً وَسَلَامًا. وَاجْزِهِ عَنَّا أَفْضَلَ مَا جَزَيْتَ نَبِيًّا عَنْ أُمَّتِهِ. واٰتِهِ الْوَسِيْلَةَ وَالْفَضِيْلَةَ وَالشَّرَفَ وَالدَّرَجَةَ الْعَالِيَةَ الرَّفِيْعَةَ. وَابْعَثْهُ الْمَقَامَ الْمَحْمُوْدَ الَّذِيْ وَعَدْتَهُ يَا أَرْحَمَ الرَّاحِمِينَ. اَللّٰهُمَّ اجْعَلْنَا وَإِيَّاهُمْ مِمَّنْ يَسْتَوْجِبُ شَفَاعَتَهُ وَيَرْتَجِيْ بِهِ مِنَ اللهِ رَحْمَتَهُ. وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَالَـمِيْنَ",
        latin:
          "Shadaqallâhul-‘aliyyul-‘adhîmu, wa balagha rasûluhul-ḫabîbul-karîmu, wa naḫnu ‘ala dzâlika minasy-syâhidîna, wal-ḫamdulillâhi rabbil-‘alamîna, allâhumma shalli wa sallim ‘ala sayyidinâ muḫammadin fil-awwalîna, wa shalli wa sallim ‘ala sayyidinâ muḫammadin fil-âkhirîna, wa shalli wa sallim ‘ala sayyidinâ muḫammadin fin-nabiyyîna, wa shalli wa sallim ‘ala sayyidinâ muḫammadin fî kulli waqtin wa ḫînin, wa shalli wa sallim ‘ala sayyidinâ muḫammadin fil-mursalîna, wa shalli wa sallim ‘ala sayyidinâ muḫammadin fil-malâ’il-a‘lâ ila yaumid-dîni, assalâmu ‘alaika ayyuhân-nabiyyu wa raḫmatullâhi wa barakâtuhu, assalâmu ‘alaina wa ‘ala ‘ibâdillâhish-shâliḫîna, allâhumma balligh rûḫa sayyidinâ muḫammadin minnâ taḫiyyatan wa salâman, wajzihi ‘annâ afdlala mâ jazaita nabiyyan ‘an ummatihi, wa âtihi l-wasîlata wal-fadlîlata wasy-syarafa wad-darajatal-‘âliyatar-rafî’ata, wab‘atshul-maqâmal-maḫmûdal-ladzî wa‘adtahu yâ arḫamar-râḫimîna, allâhummaj‘alnâ wa iyyâhum mimman yastaujibu syafâ‘atahu wa yartajî bihi minallâhi raḫmatahu, wal-ḫamdulillâhi rabbil-‘âlamîna.",
        translation:
          "Maha benar Allah yang tinggi dan agung. Dan telah menyampaikan rasul-Nya yang terkasih dan mulia. Kami semua termasuk orang-orang yang menyaksikan semua itu. Segala puji bagi Allah Tuhan seluruh alam. Ya Allah, limpahkanlah shalawat dan salam kepada pemimpin kami Muhammad di kalangan generasi pertama. Limpahkan pula shalawat dan salam kepada pemimpin kami Muhammad di tengah generasi terakhir. Limpahkan pula shalawat dan salam kepada pemimpin kami Muhammad di tengah golongan para nabi. Limpahkan pula shalawat dan salam kepada pemimpin kami Muhammad di tengah golongan para rasul. Limpahkan pula shalawat dan salam kepada pimpinan kami di setiap waktu dan kesempatan. Limpahkan pula shalawat dan salam kepada pemimpin kami Muhammad di alam arwah hingga hari pembalasan. Keselamatan, rahmat Allah, dan keberkahan-Nya semoga terlimpah padamu, wahai Nabi. Keselamatan semoga terlimpah kepada kami dan juga kepada hgamba-hamba Allah yang saleh. Ya Allah, sampaikan kepada ruh pemimpin kami Muhammad penghormatan dan salam dari kami. Berilah ia (Muhammad) dari kami pembalasan yang lebih baik dari apa yang telah Engkau berikan kepada seorang nabi dari umatnya. Berilah ia wasilah, keutamaan, kemuliaan, dan derajat yang tinggi dan terhormat. Berilah ia kedudukan yang terpuji sebagaimana yang telah Engkau janjikan, wahai Dzat yang maha penyayang di antara para penyayang. Ya Allah, jadikanlah kami dan juga mereka sebagai orang-orang yang memperoleh syafaatnya dan selalu mengharap rahmat Allah berkat kedudukannya. Segala puji bagi Allah Tuhan seluruh alam.",
      },

      {
        arabic:
          "اَللّٰهُمَّ بِحُرْمَةِ هٰذَا النَّبِيِّ الْكَرِيمِ، وَاٰلِهِ وَأَصْحَابِهِ السَّالِكِيْنَ لِنَهْجِهِ الْقَوِيْمِ. اِجْعَلْنَا مِنْ خِيَارِ أُمَّتِهِ، وَاسْتُرْنَا بِذَيْلِ حُرْمَتِهِ، وَاحْشُرْنَا غَدًا فِيْ زُمْرَتِهِ، وَاسْتَعْمِلْ أَلْسِنَتَنَا فِيْ مَدْحِهِ وَنُصْرَتِهِ، وَأَحْيِنَا مُسْتَمْسِكِيْنَ بِطَاعَتِهِ وَمَحَبَّتِهِ، وَأَمِتْنَا عَلَى سُنَّتِهِ وَجَمَاعَتِهِ. اَللّٰهُمَّ أَدْخِلْنَا مَعَهُ الْجَنَّةَ فَإِنَّهُ أَوَّلُ مَنْ يَدْخُلُهَا. وَأَنْزِلْنَا مَعَهُ فِيْ قُصُوْرِهَا فَإِنَّهُ أَوَّلُ مَنْ يَنْزِلُهَا وَارْحَمْنَابِهِ يَوْمَ يَسْتَشْفِعُ بِهِ الْخَلَائِقُ فَتَرْحَمُهَا",
        latin:
          "Allâhumma biḫurmati hâdzan-nabiyyil-karîmi, wa âlihi wa ashḫabihis-sâlikîna linahjihil-qawîmi, ij‘alnâ min khiyâri ummatihi, wasturnâ badzaill ḫurmatihi, waḫsyurnâ ghadan fî zumratihi, wasta‘mil alsitanâ fî madḫihi wa nushratihi, wa aḫyinâ mustamsikîna bithâ‘atihi wa maḫabbatihi, wa amitnâ ‘ala sunnatihi wa jamâ‘atihi, allâhumma adkhilnâ ma‘ahul-jannata fa innahu awwalu man yadkhuluhâ, wa anzilnâ ma‘ahu fî qushûrihâ fa innahu awwalu man yanaziluhâ warḫamnâ bihi yauma yastasyfi‘u bihil-khalâ’iqi fatarḫamuhâ.",
        translation:
          "Ya Allah, berkat kehormatan nabi yang mulia ini, serta berkat keluarga dan para sahabatnya yang menempuh jalan yang lurus, jadikanlah kami sebagai umat pilihan. Tutupilah kami karena kehormatannya. Kumpulkanlah kami kelak di tengah golongannya. Gerakkanlah lisan-lisan kami untuk memuji dan menolongnya. Hidupkanlah kami sebagai orang-orang yang taat kepadanya dan mencintainya. Matikanlah kami di atas sunah dan jamaahnya. Ya Allah, masukkanlah kami bersamanya ke dalam surga. Sesungguhnya, dia adalah orang yang pertama memasukinya. Tempatkanlah kami bersamanya di istana-istana surga. Sesungguhnya dia adalah hamba yang pertama menduduknya. Rahmatilah kami bersamanya pada hari seluruh makhluk memohon syafaat lalu Engkau merahmati mereka.",
      },
      {
        arabic:
          "اَللّٰهُمَّ إِنَّا قَدْ حَضَرْنَا قِرَاءَةَ مَوْلِدِ نَبِيِّكَ الْكَرِيْمِ. فَأَفِضْ عَلَيْنَا بَبَرَكَتِهِ لِبَاسَ الْعِزَّ وَالتَّكْرِيمِ. وَأَسْكِنَّا بٍجَوَارِهِ فِيْ دَارِ النَّعِيْمِ. وَنَعِّمْنَا فِي الْجَنَّةِ بِالنَّعِيْمِ الْمُقِيمِْ. اَللّٰهُمَّ إِنَّا نَسْأَلُكَ بِجَاهِ هٰذَا النَّبِيِّ الْمُصْطَفَى، وَاٰلِه أَهْلِ الصِّدْقِ وَالْوَفَا، كُنْ لَّنَا مُعِيْنًا وَمُسْعِفًا، وَبَوِّءْنَا مِنَ الْجَنَّةِ غُرَفًا. وَارْزُقْنَا بِجَاهِهِ عِنْدَكَ قَبُوْلًا وَعِزًّا وَشَرَفًا. اللّٰهُمَّ إِنَّا نَتَوَسَّلُ إِلَيْكَ بِنَبِيِّكَ الْمُخْتَارِ، وَاٰلِهِ الْأَطْهَارِ، وَأَصْحَابِهِ الْأَخْيَارِ، كَفِّرْ عَنَّا الذُّنُوْبَ وَالْأَوْزَارَ",
        latin:
          "Allâhumma innâ qad ḫadlarnâ qirâ’ata maulidi nabiyyikal-karîmi, fa afidl ‘alaina bibarakatihi libâsal-‘izza wat-takrîmi, wa askinnâ bijawârihi fî dârin-na‘îmi, wa na‘imnâ fil-jannatin-na‘imil-muqîmi, allâhumma innâ nas’aluka bijâhi hâdzan-nabiyyil-musthafa, wa âlihi ahlish-shidqi wal-wafâ, kun lanâ mu‘înân wa mus‘ifan, wa bawwi’nâ minal-jannati ghurafan, warzuqnâ bijâhihi ‘indaka qabûlan wa ‘izzan wa syarafan. Allâḫumma innâ natawassalu ilaika binabiyyikanl-mukhtâri, wa âlihil-athhâri, wa ashḫâbihil-akhyâri, kaffir ‘annâdz-dzunûba wal-auzâra.",
        translation:
          "Ya Allah, sesungguhnya kami sudah menghadirkan pembacan maulid nabi-Mu yang mulia. Limpahkanlah kepada kami dengan keberkahannya pakaian kemuliaan dan penghormatan. Tempatkanlah kami di sampingnya saat berada di negeri kenikmatan kelak. Berilah kami saat berada di surga kelak kenikmatan yang tetap. Ya Allah, sesungguhnya dengan kegungan nabi yang terpilih serta keluarganya yang juga golongan orang-orang yang benar, kami memohon keselamatan. Jadilah Engkau sebagai penolong dan pemberi pertolongan bagi kami. Sediakanlah bagi kami kamar-kamar di surga. Berkat keagungannya di sisi Engkau, limpahkanlah kepada kami perkenan, kemuliaan, dan kehormatan. Ya Allah, sesungguhnya dengan nabi pilihan-Mu dengan keluarganya yang bersih serta para sahabatnya yang terpilih, kami bertawasul kepada-Mu. Tutupilah dosa-dosa dan keburukan-keburukan kami.",
      },
      {
        arabic:
          "يَا اَللهُ يَا اَللهُ يَا اَللهُ وَاحْرُسْنَا مِنْ جَمِيعِ الْمَخَاوِفِ وَالْأَخْطَارِ وَاجْمَعْ بَيْنَنَا وَبَيْنَهُ فِي دَارِ الْقَرَارِ. وَتَقَبَّلْ مِنَّا مَا قَدَّمْنَا مِنْ يَسِيْرِ أَعْمَالِنَا فِي الْإِعْلَانِ وَالْإِسْرَارِ. وَارْحَمْنَا بِرَحْمَتِكَ وَاغْفِرْ لَنَا إِنَّكَ أَنْتَ الْعَفْوُ الْغَفَّارُ يَا غَفَّارُ",
        latin:
          "Yâ allâhu yâ allâhu yâ allâhu waḫrusnâ min jamî’il-makhâwifi wal-akhthâri wajma’ bainanâ wa bainahu fî dâril-qarâri, wa taqabbal minnâ mâ qaddamnâ min yasîri a‘mâlinâ fil-i’lâni wal—srâri, warḫamnâ biraḫmatika waghfir lanâ innaka antal-‘afwul-ghaffâru yâ ghaffâru.",
        translation:
          "Ya Allah, ya Allah, ya Allah, jagalah kami dari segala bentuk ketakutan dan marabahaya. Kumpulkanlah kami bersamanya di negeri ketetapan (surga). Terimalah dari kami sedikit amal yang telah kami persembahkan, baik yang terang-terangan maupun yang sembunyi-sembunyi. Rahmatilah kami dengan rahmat-Mu. Ampunilah kami sesungguhnya Engkau adalah Dzat yang maha pemaah dan maha pengampun, waha Dzat yang maha pengampun.",
      },
    ],
    //Halaman 39
    [
      {
        translation: "39. lâhî tammimin-na‘mâ ‘alainâ",
      },
      {
        arabic:
          "إِلٰهِيْ تَمِّــــمِ النَّعْمَـــا عَلَيْنَـــا وَوَفِّقْنَا لِشُكْرِكَ مَا بَقِيْنَا",
        latin: "Ilâhî tammimin-na‘mâ ‘alainâ wa waffiqnâ lisyukrika mâ baqînâ",
        translation:
          "Wahai Tuhanku, sempurnakanlah nikmat kepada kami. Berilah kami taufiq untuk bersyukur kepada-Mu atas segala karunia yang tersisa.",
      },
      {
        arabic:
          "أَذِقْنَا بَرْدَ عَفْوِكَ وَالْعَوَافِيْ وَهَوِّنْ كُلَّ مَطْلُوْبٍ عَلَيْنَا",
        latin:
          "Adziqnâ barda ‘afwika wal-‘awâfî wa hawwin kulla mathlûbin ‘alainâ",
        translation:
          "Rasakanlah kepada kami sejuknya ampunan dan kebahagiaan. Mudahkanlah bagi kami mencapai semua yang diinginkan.",
      },
      {
        arabic:
          "فَـــإِنَّـــــــا لَا نُعَوِّلُ فِيْ مُهِـــــمٍّ أَلَـمَّ بِنَــــا وَلَا مَا قَدْ لَقِيْنَــــا",
        latin:
          "Fa innâ lâ nu‘awwilu fî muhimmin alammâ binâ wa lâ mâ qad laqînâ",
        translation:
          "Sesungguhnya kami tidak meminta dalam perkara-perkara penting dan perkara yang lebih memberatkan bagi kami, tidak pula atas perkara yang kami temui,",
      },
      {
        arabic:
          "عَلَى أَحَدٍ وَّلَا سَبَبٍ وَلٰكِنْ إِذَا ضَــاقَتْ وَكُنْتَ لَهَا قَمِيْنَـــا",
        latin:
          "‘ala aḫadin wa lâ sababin wa lâkin idzâ dlâqat wa kunta lahâ qamînâ",
        translation:
          "pada seseorang dan tanpa sebab, namun tatkala terdesak dan aku bagi perkara-perkara itu laksana dapur api.",
      },
      {
        arabic:
          "وَصَلِّ عَلَى رَسُوْلِكَ كُلَّ حِيْنٍ مُحَـمَّدٍ ࣙالنَّبِيِّ الزَّاكِيْ الْأَمِيْنَا",
        latin:
          "Wa shalla ‘ala rasûlika kulla ḫînin muḫammadinin-nabiyyiz-zâkil-amînâ",
        translation:
          "Limpahkanlah rahmat setiap saat kepada rasul-Mu, yakni Muhammad nabi yang bersih dan terpercaya.",
      },
      {
        arabic:
          "كَذَا اٰلٍ وَأَصْحَــــابٍ كِــــرَامٍ وَمَنْ وَالَاهُمْ وَالتَّـــابِعِيْنَــا",
        latin: "Kadzâ âlin wa ashḫâbin kirâmin wa man wâlâhum wat-tâbi‘înâ",
        translation:
          "Demikian pula kepada keluarga dan para sahabatnya yang mulia. Serta kepada orang-orang yang mengikuti mereka dan para tabiin.",
      },
      {
        arabic: "يَا إلٰهِيْ بِحَقِّهِ دَمِّرِ الْبَغْيَ وَالْفَسَـــادَ",
        latin: "Yâ ilâhî biḫaqqihi dammiril-baghya wal-fasâda",
        translation:
          "Wahai Tuhanku, berkat kebenarannya (Muhammad), hancurkan kebohongan dan kerusakan.",
      },
      {
        arabic: "يَا إلٰهِيْ بِحَقِّهِ جُدْ بِلُطْفِكَ يَا جَوَادُ",
        latin: "Yâ ilâhî biḫaqqihi jud biluthfika yâ jawâdu",
        translation:
          "Wahai Tuhanku, berkat kebenarannya (Muhammad), berilah kami kelembutan-Mu, wahai Dzat yang Maha Memberi.",
      },
      {
        arabic: "يَا إلٰهِيْ بِحَقِّهِ اٰتِنَا السُّؤْلَ وَالْمُـرَادَ",
        latin: "Yâ ilâhî biḫaqqih âtinâs-su’âla wal-murâda",
        translation:
          "Wahai Tuhanku, berkat kebenarannya (Muhammad), kabulkanlah segala permohonan dan keinginan kami.",
      },
      {
        arabic: "حَصَلَ الْقَصْدُ وَالْمُرَادُ وَصَفَا الْوَقْتُ وَالْوِدَادُ",
        latin: "ḫashalal-qashu wal-murâdu wa shafal-waqtu wal-widâdu",
        translation:
          "Semoga maksud dan tujuan tercapai dalam waktu yang tepat dan kasih sayang yang murni.",
      },
      {
        arabic: "وَبِرُؤْيَا مُحَـمَّدٍ ۞ فَرِحَتْ أَنْفُسُ الْعِبَادِ",
        latin: "Wa biru’yâ muḫammadin fariḫat anfusul-‘ibâdi",
        translation:
          "Dengan bermimpi melihat Nabi Muhammad, maka bergembiralah jiwa-jiwa hamba.",
      },
      {
        arabic: "عَنْ غَرَامِيْ وَلَوْعَتِيْ لَا يُحَرِّكْنِيْ الْمَلَام",
        latin: "‘an gharâmî wa lau‘atî lâ yuḫarriknil-malâm",
        translation:
          "Hingga kerugian dan kepedihan tak lagi mendorong cercaan bagiku.",
      },
      {
        arabic: "ذَاكَ دِيْنِيْ وَمِلَّتِيْ ذَاكَ لِيْ غَايَةُ الْمَرَامِ",
        latin: "Dzâka dîni wa millatî dzâka lî ghâyatul-marâmi",
        translation:
          "Inilah agama dan ajaranku. Inilah puncak harapan bagiku. Hingga ujianku di dalamnya adalah kenikmatan.",
      },
      {
        arabic:
          "مِحْنَتِيْ فِيْـــــهِ لَذَّتِيْ سَلْوَتِيْ فِي الْهَوَى حَرَامُ",
        latin: "Miḫnatî fîhi ladzdzatî salwatî fil-hawa ḫarâmu",
        translation:
          "Ujianku di dalamnya adalah kenikmatanku. Hiburanku dalam jiwaku adalah terlarang.",
      },
      {
        arabic: "مَــا فُتِنْتُمْ كَفِتْنَتِيْ اُتْرُكُوْنِيْ بِلَا كَلَامِ",
        latin: "Mâ futintum kafitnatî utrukûnî bilâ kalâmi",
        translation:
          "Ujian yang kalian alami tak beda dengan ujianku. Maka biarkanlah aku tanpa kata-kata.",
      },
      {
        arabic:
          "وَصَلَّى اللهُ عَلَى خَيْرِ خَلْقِهِ مُحَمَّدٍ وَاٰلِهِ وَأَصْحَابِهِ أَجْمَعِيْنَ، وَسَلَّمَ تَسْلِيْمًا كَثِيرًا، وَاخْتِمْ لَنَا مِنْكَ بِخَيْرٍ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
        latin:
          "Wa shallallâhu ‘ala khairi khalqihi muḫammadin wa âlihi wa ashḫâbihi ajma‘îna, wa sallama taslîman katsîran, wakhtim lanâ minka bikhairi biraḫmatika yâ arḫamar-râḫimîna.",
        translation:
          "Semoga Allah melimpahkan rahmat kepada makhluk terbaik, yakni Muhammad, juga kepada seluruh keluarga dan sahabatnya. Limpahkan pula salam yang melimpah kepadanya. Akhirilah kami dengan kebaikan dari-Mu, wahai Dzat yang Maha Penyayang di antara para penyayang.",
      },
      {
        arabic:
          "صَلَّى اللهُ رَبُّنَا عَلَى النُّوْرِ الْمُبِيْنِ، أَحْمَدَ الْمُصْطَفَى سَيِّدِ الْمُرْسَلِيْنَ، وَعَلَى اٰلِهِ وَصَحْبِهِ أَجْمَعِيْنَ ×٣",
        latin:
          "Shallallâhu rabbunâ ‘alan-nûril-mubîni, aḫmadal-mushthafa sayyidil-mursalîna, wa ‘ala âlihi wa shaḫbihi ajma‘îna. 3x",
        translation:
          "Semoga Allah Tuhan kami melimpahkan rahmat kepada cahaya yang terang, yakni Ahmad yang terpilih, pemimpin para rasul, juga kepada keluarga dan para sahabatnya.",
      },
      {
        arabic:
          "﴿سُبْحٰنَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَۚ. وَسَلٰمٌ عَلَى الْمُرْسَلِيْنَۚ. وَالْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ﴾ (الصافّات: ١٨٠-١٨٢)",
        latin:
          "(sub-ḫâna rabbika rabbil-‘izzati ‘ammâ yashifûn. wa salâmun ‘alal-mursalîn. wal-ḫamdu lillâhi rabbil-‘âlamîn). (Ash-Shâffât: 180-182)",
        translation:
          "Mahasuci Tuhanmu, Tuhan pemilik kemuliaan dari apa yang mereka sifatkan. Selamat sejahtera bagi para rasul. Segala puji bagi Allah Tuhan semesta alam. (Ash-Shâffât: 180-182)",
      },
      {
        arabic: "اٰمِــــــيْنَ",
        latin: "Âmîn",
        translation: "Semoga Allah mengabulkan.",
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
