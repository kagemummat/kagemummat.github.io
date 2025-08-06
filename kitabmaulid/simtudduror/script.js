document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    // Halaman 1
    [
      {
        translation: "Pasal 1 : YA RABBI SHALLI ALA MUHAMMAD",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ مَا لَاحَ فِي الْأُفْقِ نُوْرُ كَوْكَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad mâ lâ ḫa fil-ufqi nûru Kaukab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Selama cahaya bintang masih bersinar di ufuk",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ اَلْفَاتِحِ الْخَــــاتِمِ الْمُقَرَّبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad al-fâtiḫil-khâtimil-muqarrab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat bagi Nabi Muhammad ﷺ. Pemuka, penutup, dan hamba yang didekatkan",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ اَلْمُصْطَفَى الْمُجْتَبَى الْمُحَبَّب",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad al-mushthafal-mujtabal-muḫabbab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Insan pilihan dan hamba yang terkasih",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ مَا لَاحَ بَدْرٌ وَغَابَ غَيْهَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad mâ lâ ḫa badrun wa ghâba ghaihab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Selama bulan purnama bersinar dan kegelapan hilang",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ مَا رِيْحُ نَصْرٍبِالنَّصْرِ قَدْ هَبّ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad mâ rîḫu nashrin bin-nashri qad habba",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Selama angin pertolongan mengembuskan pertolongan",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ مَا سَارَتِ الْعِيْسُ بَطْنَ سَبْسَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad mâ sâratil-‘îsu bathna sabsab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Selama unta masih berjalan di padang sahara",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ ۞ وَكُلِّ مَنْ لِلْحَبِيْبِ يُنْسَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wa kulli man lil-ḫabîbi yunsab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Dan setiap orang yang bernasab kepadanya",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَكُلِّ مَنْ لِلنَّبِيِّ يَصْحَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wa kulli man lin-nabiyyi yashḫab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Dan setiap orang yang menjadi sahabatnya",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاغْفِرْ وَسَامِحْ مَنْ كَانَ أَذْنَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad waghfir wa sâmiḫ man kâna adznab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Dan ampunilah serta maafkanlah orang yang telah berbuat dosa",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَبَلِّغِ الْكُلَّ كُلَّ مَطْلَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wa ballighil-kulla mathlab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Dan sampaikanlah semuanya kepada segala yang diinginkan",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاسْلُكْ بِنَا رَبِّ خَيْرَ مَذْهَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wasluk binâ rabbi khaira madzhab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Dan tempuhkanlah untuk kami jalan yang terbaik, ya Tuhan",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ ۞ وَاصْلِحْ وَسَهِّلْ مَا قَدْ تَصَعَّبْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad washliḫ wa sahhil mâ qad tasha’ab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Perbaikilah dan mudahkanlah segala yang sulit",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ أَعْلَى الْبَرَايَا جَاهًا وَأَرْحَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad a‘lal-barâyâ jâhan wa arḫab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Makhluk yang tertinggi dan terluas kedudukannya",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ أَصْدَقِ عَبْدٍ بِالْحَقِّ أَعْرَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad ashdaqi ‘abdin bil-ḫaqqi a‘rab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Hamba yang paling jujur yang menyampaikan kebenaran",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ خَيْرِ الْوَرَى مَنْهَجًا وَأَصْوَبْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad khairil-warâ manhajan wa ashwab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Manusia yang paling baik dan paling benar manhajnya",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ مَا طَيْرُ يُمْنٍ غَنَّى فَأَطْرَبْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad mâ thairu yumnin ghanna fa athrab",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Selama burung keberkahan berdendang dan bernyanyi",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ أَشْرَفِ بَدْرٍ فِي الْكَوْنِ أَشْرَقْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad asyrafi badrin fil-kauni asyraq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ, Bulan purnama termulia yang bersinar di alam",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ أَكْرَمِ دَاعٍ يَدْعُوْ إِلَى الْحَقّ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad akrami dâ‘in yad‘û ilal-ḫaqq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Penyeru paling mulia yang mengajak kepada kebenaran",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ اَلْمُصْطَفَى الصَّادِقِ الْمُصَدَّقْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad al-mushthafash-shâdiqil-mushaddaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ, Insan pilihan, yang benar dan dibenarkan",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ أَحْلَى الْوَارَى مَنْطِقًا وَأَصْدَقْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad aḫlal-warâ manthiqan wa ashdaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ, Manusia yang paling manis dan paling jujur tutur katanya",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ أَفْضَلِ مَنْ بِالتُّقَى تَحَقَّقْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad afdlali man bit-tuqâ taḫaqqaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ, Orang yang paling utama yang menyatakan ketaqwaan",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ مَنْ بِالسَّخَا وَالْوَفَا تَخَلَّقْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad man bis-sakhâ wal-wafâ takhallaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. seorang yang berbudi pekerti dermawan dan memenuhi janji",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاجْمَعْ مِنَ الشَّمْلِ مَا تَفَرَّقْ",
        latin: "Yâ rabbi shalli ‘alâ Muḫammad wajma‘ minasy-syamli mâ tafarraq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. dan himpunkanlah setiap yang terpisah-pisah dari kumpulannya.",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاصْلِحْ وَسَهِّلْ مَا قَدْ تَعَوَّقْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad washliḫ wa sahhil mâ qad ta‘awwaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ, perbaikilah dan mudahkanlah segala yang terhambat",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَافْتَحْ مِنَ الْخَيْرِ كُلَّ مُغْلَقْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad waftaḫ minal-khairi kulla mughlaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ, Bukalah segala kebaikan yang terkunci",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاٰلِهِ وَمَنْ بِالنَّبِيّ تَعَلَّقْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad wa âlihi wa man bin-nabiyyi ta‘allaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. dan keluarganya serta orang yang berpegang kepada Nabi",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَاٰلِهِ وَمَنْ لِلْحَبِيْبِ يَعْشَقْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad wa âlihi wa man lil-ḫabîbi ya‘syaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. dan keluarganya serta orang yang rindu terhadap kekasih ﷺ",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ وَمَنْ بِحَبْلِ النَّبِيِّ تَوَثَّقْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad wa man biḫablin-nabiyyi tawatstsaq",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ, dan orang yang berpegang dengan tali Nabi",
      },
      {
        arabic:
          "يَا رَبِّ صَلِّ عَلَى مُحَمَّدْ يَا رَبّ صَلّ عَلَيْهِ وَسَلّمْ",
        latin:
          "Yâ rabbi shalli ‘alâ Muḫammad yâ rabbi shalli ‘alaihi wa sallim",
        translation:
          "Ya Tuhan, limpahkanlah rahmat kepada Nabi Muhammad ﷺ. Ya Tuhan, limpahkanlah rahmat dan kesejahteraan padanya ﷺ.",
      },
    ],

    //Halaman 2
    [
      {
        translation: "Pasal 2 : ALHAMDULILLAHIL QOWIYYI SULTONUH",
      },
      {
        arabic:
          "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ اَلْحَمْدُ لِلّٰهِ الْقَوِيِّ سُلْطَانُه. اَلْوَاضِحِ بُرْهَانُه. اَلْمَبْسُوْطِ فِي الْوُجُوْدِ كَرَمُهُ وَإِحْسَانُه. تَعَالَى مَجْدُهُ وَعَظُمَ شَانُه. خَلَقَ الْخَلْقَ لِحِكْمَةْ. وَطَوَى عَلَيْهَا عِلْمَه. وَبَسَطَ لَهُمْ مِنْ فَآئِضِ الْمِنَّةِ مَا جَرَتْ بِهِ فِي أَقْدَارِهِ الْقِسْمَة. فَأَرْسَلَ إِلَيْهِمْ أَشْرَفَ خَلْقِهِ وَأَجَلَّ عَبِيْدِهِ رَحْمَة. تَعَلَّقَتْ إِرَادَتُهُ الْأَزَلِيَّةُ بِخَلْقِ هٰذَا الْعَبْدِ الْمَحْبُوْبِ. فَانْتَشَرَتْ أَثَارُ شَرَفِهِ فِي عَوَالِمِ الشَّهَادَةِ وَالْغُيُوْب. فَمَا أَجَلَّ هٰذَا الْمَنَّ الَّذِيْ تَكَرَّمَ بِهِ الْمَنَّان. وَمَا أَعْظَمَ هٰذَا الْفَضْلَ الَّذِيْ بَرَزَ مِنْ حَضْرَةِ الْإِحْسَان. صُوْرَةً كَامِلَةً ظَهَرَتْ فِي هَيْكَلٍ مَحْمُوْد. فَتَعَطَّرَتْ بِوُجُوْدِهَا أَكْنَافُ الْوُجُوْدِ. وَطَرَّزَتِ بُرْدَ الْعَوَالِمِ بِطِرَازِ التَّكْرِيْم",
        latin:
          "Bismillâhirraḫaminrraḫîm Al-ḫamdulillâhil-qawiyyi sulthânuh, al-wâdliḫi burhânuh, al-mabsûthi fil-wujûdi karamuhu wa iḫsânuh, ta‘âlâ majduhu wa ‘adhuma syânuh, khalaqal-khalqa liḫikmah, wa thawâ ‘alaihâ ‘ilmah, wa basatha lahum min fâ’idlil-minnati mâ jarat bihi fî aqdârihil-qismah, fa arsala ilaihim asyrafa khalqihi wa ajalla ‘abîdihi raḫmah, ta‘allaqat irâdatuhul-azaliyyatu bikhalqi hâdzal-‘abdil-maḫbûbi, fantasyarat atsâru syarafihi fî ‘awâlimisy-syahâdati wal-ghuyûb, famâ ajalla hâdzal-mannal-ladzî takarrama bihil-mannân, wa mâ a‘dhama hâdzal-fadlal-ladzî baraza min hadlratil-iḫsân, shûratan kâmilatan dhaharat fî haikalin maḫmûd, fata‘aththarat biwujûdihâ aknâful-wujûd, wa tharrazati burdal-‘awâlimi bithirâzit-takrîm.",
        translation:
          "Dengan nama Allah, Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, yang amat teguh kekuasaan-Nya. Amat jelas bukti-bukti kebenaran-Nya. Terbentang luas kedermawanan dan kemurahan-Nya. Mahatinggi kemuliaan-Nya, Mahaagung kedudukan-Nya. Diciptakan segalanya dengan penuh hikmah. Lalu diliputinya dengan ilmu-NYa. Dihamparkan bagi mereka limpahan karunia-Nya. Dengan kadar pembagian yang ditentukan dalam kehendak-Nya. Maka diutus kepada mereka, demi rahmat-Nya. seorang termulia di antara makhluk-Nya. terkemuka di antara hamba-hamba-Nya. Irâdah-Nya yang azali menghendaki, Mencipta hamba yang amat dikasihi ini. Maka tersebarlah pancaran kemuliaannya. Di alam nyata ataupun tersembunyi. Aduhai, betapa agung anugerah ini. Dilimpahkan oleh Dia Yang Maha Pemurah, Maha Pemberi. Betapa tinggi nilai keutamaan ini. Datang dari Tuhan Sumber segala ihsan. Karunia teramat sempurna. Dalam bentuk insan terpuji. Kehadirannya mengharumi segenap penjuru. Menghiasnya dengan sulaman indah penuh keagungan.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi.",
      },
    ],

    //Halaman 3
    [
      {
        translation: " Pasal 3 : TAJALLAL HAQQU",
      },
      {
        arabic:
          "تَجَلَّى الْحَقُّ فِي عَالَـمِ قُدْسِهِ الْوَاسِعْ. تَجَلِّيًا قَضَى بِانْتِشَارِ فَضْلِهِ فِي الْقَرِيْبِ وَالشَّاسِع. فَلَهُ الْحَمْدُ الَّذِيْ لَا تَنْحَصِرُ أَفْرَادُهُ بِتَعْدَاد. وَلَا يُمَلُّ تَكْرَارُهُ بِكَثْرَةِ تَرْدَادْ. حَيْثُ أَبْرَزَ مِنْ عَالَمِ الْإِمْكَانْ. صُوْرَةَ هٰذَا الْإِنْسَانْ. لِيَتَشَرَّفَ بِوُجُوْدِهِ الثَّقَلَانْ. وَتَنْتَشِرَ أَسْرَارُهُ فِي الْأَكْوَانْ. فَمَا مِنْ سِرٍّ اتَّصَلَ بِهِ قَلْبُ مُنِيْب. إِلَّا مِنْ سَوَابِغِ فَضْلِ اللهِ عَلَى هٰذَا الْحَبِيْب",
        latin:
          "Tajallal-ḫaqqu fî ‘alami qudsihil-wâsi‘i, tajalliyan qadlâ bintisyâri fadllihi fil-qarîbi wasy-syâsi‘, falahul-ḫamdul-ladzî lâ tanḫashiru afrâduhu bita‘dâd, wa lâ yumallu takrâruhu bikatsrati tardâd, haitsu abraza min ‘âlamil-imkân, shûrata hâdzal-insân, liyatasyarrafa biwujûdihits-tsaqalân, wa tantasyira asrâruhu fil-akwân, famâ min sirrit-tashala bihi qalbu munîb, illa min sawâbighi fadllillâhi ‘alâ hâdzal-ḫabîb.",
        translation:
          "Allah Mahabenar bertajalli. Dalam alam kudus-Nya yang amat luas. Menetapkan penyebaran anugerah-Nya. Pada yang dekat dan jauh tak terkecuali. Maka hanya bagi-Nya segala puji. Tiada terhingga bilangannya. Tiada menjemukan pengulangan sebutannya. Betapapun sering diulang-ulang. Atas perkenan-Nya menampilkan di alam kenyataan. Perwujudan semulia-mulia insan. Agar seluruh makhluk beroleh kemuliaan. Tiada terhingga. Dengan rahasia keutamaan yang mengiringi kehadirannya. Tersebar merata di seluruh alam semesta. Maka tiada satu pun rahasia itu. Menyentuh menyatu dengan qalbu yang sadar. Kecuali pasti karena curahan karunia Allah. Melalui insan tersayang ini.",
      },
      {
        arabic:
          "يَا لَقَلْبٍ سُرُوْرُهُ قَدْ تَوَالَى بِحَبِيْبٍ عَمَّ الْأَنَامَ نَوَالَا",
        latin: "Yâ laqalbin surûruhu qad tawâlâ biḫabîbin ‘ammal-anâma nawâlâ",
        translation:
          "Bahagia dan suka ria, berdatangan merasuki qalbu, menyambut datangnya kekasih Allah, pembawa anugerah bagi seluruh manusia",
      },
      {
        arabic:
          "جَلَّ مَنْ شَرَّفَ الْوُجُوْدَ بِنُوْرٍ غَمَرَ الْكَوْنَ بَهْجَةً وَجَمَــــالَا",
        latin:
          "Jalla man syarrafal-wujûda binûrin ghamaral-kauna bahjatan wa jamâlâ",
        translation:
          "Mahaagung Dia yang telah memuliakan, wujud ini dengan nur berkilauan, meliputi semuanya, dengan keriangan dan kecantikan.",
      },
      {
        arabic:
          "قَدْ تَرَقَّى فِي الْحُسْنِ أَعْلَى مَقَامٍ وَتَنَاهَى فِي مَجْدِهِ وَتَعَــــالَى",
        latin:
          "Qad taraqqâ fil-ḫusni a‘lâ maqâmin wa tanâhâ fî majdihi wa ta‘âlâ",
        translation:
          "Mencapai tingkat keindahan tertinggi, menjulang mengangkasa, dengan kemuliaannya.",
      },
      {
        arabic:
          "لَاحَظَتْهُ الْعُيُوْنُ فِيمَا اجْتَلَتْهُ بَشَرًا كَامِلًا يُزِيْحُ الضَّــلَالَا",
        latin:
          "Lâ ḫadhat hul-‘uyûnu fîmâj-talalat hu basyaran kâmilan yuzîḫudl-dlalâla",
        translation:
          "Mata memandang penuh damba, bentuk insan sempurna, pengikis segala yang sesat.",
      },
      {
        arabic:
          "وَهْوَ مِنْ فَوْقِ عِلْمِ مَا قَدْ رَأَتْهُ رِفْعَةً فِي شُؤُوْنِهِ وَكَمَـــالَا",
        latin:
          "Wahwa min fauqi ‘ilmi mâ qad ra'at hu rif‘atan fî syu'ûnihi wa kamâlâ",
        translation:
          "Meski sesungguhnya keluhuran dan kesempurnaannya melampaui segala yang bisa dicapai pengetahuan yang mana pun jua.",
      },
      {
        arabic:
          "فَسُبْحَانَ الَّذِيْ أَبْرَزَ مِنْ حَضْرَةِ الْاِمْتِنَانْ. مَا يَعْجِزُ عَنْ وَصْفِهِ اللِّسَانْ. وَيَحَارُ فِي تَعَقُّلِ مَعَانِيْهِ الْجَنَانْ. اِنْتَشَرَ مِنْهُ فِي عَالِمِ الْبُطُوْنِ وَالظُّهُوْرْ. مَا مَلَاءَ الْوُجُوْدَ الْخَلْقِيَّ نُوْرْ. فَتَبَارَكَ اللهُ مِنْ اِلٰهٍ كَرِيْمٍ. بَشَّرَتْنَا اٰيَاتُهُ فِي الذِّكْرِ الْحَكِيْم. بِبِشَارَةِ: ﴿لَقَدْ جَآءَكُمْ رَسُوْلٌ مِنْ أَنْفُسِكُم. عَزِيْزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيْصٌ عَلَيْكُمْ بِالْمُؤْمِنِيْنَ رَؤُوْفٌ رَحِيْم﴾. فَمَنْ فَاجَأَتْهُ هٰذِهِ الْبِشَارَةُ وَتَلَقَّاهَا بِقَلْبٍ سَلِيْم. فَقَدْ هُدِيَ إِلَى صِرَاطٍ مُسْتَقِيْمٍ",
        latin:
          "Fasubḫânal-ladzî abraza min ḫadlratil-imtinân, mâ ya‘jizu ‘an washfihil-lisân, wa yaḫâru fî ta‘qquli ma‘ânîhil-janân, intasyara minhu fî ‘âlimil-buthûni wadh-dhuhûr, mâ malâ’al-wujûdal-khalqiyyi nûr, fatabârakallâhu min ilâhin karîmin, basyaratnâ âyâtuhu fidz-dzikril-ḫakîm, bibisyârati: ﴾Laqad jâ’akum rasûlun min anfusikum ‘azîzun ‘alaihi mâ ‘anittum ḫarîshun ‘alaikum bil-mu’minîna ra’ûfur-raḫîm﴿. Faman fâja’at hu hâdzihil-bisyâratu wa talaqqâhâ biqalbin salîm, faqad hudiya ilâ shirâthin mustaqîm.",
        translation:
          "Mahasuci Allah, Tuhan Maha Pemurah. Yang dalam kitab suci Al-Qur’an Al-Hakim. Mengungkap berita gembira dengan firman-Nya, ‘Telah datang kepadamu. Seorang rasul dari kalangan sendiri. Ia selalu prihatin atas apa yang menimpamu. Sangat ia inginkan kamu beriman. Ia sangat penyantun, sangat penyayang. Maka siapa saja yang sampai kepadanya, berita gembira ini. Serta menerimanya dengan hati dan pikiran sehat. Niscaya ia beroleh petunjuk ke arah jalan yang lurus.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi.",
      },
    ],

    //Halaman 4
    [
      {
        translation:
          "Pasal 4 : WA ASYHADU AN LAILAHA ILLALLAH WAHDAHU LA SYARIKA LAH",
      },
      {
        arabic:
          "وَأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ شَهَادَةً تُعْرِبُ بِهَا اللِّسَان. عَمَّا تَضَمَّنَهُ الْجَنَان. مِنَ التَّصْدِيْقِ بِهَا وَالْإِذْعَان. تَثْبُتُ بِهَا فِي الصُّدُوْرِ مِنَ الْإِيْمَانِ قَوَاعِدُه. وَتَلُوْحُ عَلَى أَهْلِ الْيَقِيْنِ مِنْ سِرِّ ذٰلِكَ الْإِذْعَانِ وَالتَّصْدِيْقِ شَوَاهِدُهْ. وَأَشْهَدُ أَنَّ سَيِّدَنَا مُحَمَّدًا ࣙالْعَبْدَ الصَّادِقَ فِي قَوْلِهِ وَفِعْلِه. وَالْمُبَلِّغَ عَنِ اللهِ مَا أَمَرَهُ بِتَبْلِيْغِهِ لِخَلْقِهِ مِنْ فَرْضِهِ وَنَفْلِه. عَبْدٌ أَرْسَلَهُ اللهُ لِلْعَالَمِيْنَ بَشِيْرًا وَنَذِيْرًا. فَبَلَّغَ الرِّسَالَة. وَأَدَّى الْأَمَانَة. وَهَدَى اللهُ بِهِ مِنَ الْأُمَّةِ بَشَرًا كَثِيْرًا. فَكَانَ فِي ظُلْمَةِ الْجَهْلِ لِلْمُسْتَبْصِرِيْنَ سِرَاجًا وَقَمَرًا مُنِيْرًا. فَمَا أَعْظَمَهَا مِنْ مِنَّةٍ تَكَرَّمَ اللهُ بِهَا عَلَى الْبَشَر. وَمَا أَوْسَعَهَا مِنْ نِعْمَةٍ اِنْتَشَرَ سِرُّهَا فِي الْبَحْرِ وَالْبَرّ. اَللّٰهُمَّ صَلِّ وَسَلِّمْ بِأَجَلِّ الصَّلَوَاتِ وَأَجْمَعِهَا وَأَزْكَى التَّحِيَّاتِ وَأَوْسَعِهَا. عَلَى هٰذَا الْعَبْدِ الَّذِيْ وَفَّى بِحَقِّ الْعُبُوْدِيَّة. وَبَرَزَ فِيْهَا فِي خِلْعَةِ الْكَمَال. وَقَامَ بِحَقِّ الرُّبُوْبِيَّةِ فِي مَوَاطِنِ الْخِدْمَةِ لِلّٰهِ وَأَقْبَلَ عَلَيْهِ غَايَةَ الْإِقْبَال. صَلَاةً يَتَّصِلُ بِهَا رُوْحُ الْمُصَلِّي عَلَيْهِ بِهِ. فَيَنْبَسِطُ فِي قَلْبِهِ نُوْرُ سِرِّ تَعَلُّقِهِ بِهِ وَحُبِّهِ. وَيُكْتَبُ بِهَا بِعِنَايَةِ اللهِ فِي حِزْبِه. وَعَلَى اٰلِهِ وَصَحْبِهِ اَلَّذِيْنَ ارْتَقَوْا صَهْوَةَ الْمَجْدِ بِقُرْبِهِ. وَتَفَيَّأُوْا ظِلَالَ الشَّرَفَ الْأَصْلِيِّ بِوُدِّهِ وَحُبِّهِ. مَا عَطَّرَ الْأَكْوَانَ بِنَشْرِ ذِكْرَاهُمْ نَسِيْمْ",
        latin:
          "Wa asyhadu an lâ ilâha illâllâhu waḫdahu lâ syarîka lahu syahâdatan tu‘ribu bihâl-lisân, ‘ammâ tadlammanahul-janân, minat-tashdîqi bihâ wal-idz‘ân, tastbutu bihâ fish-shudûri minal-îmâni qawâ‘iduhu, wa talûḫu ‘alâ ahlil-yaqîni min sirri dzâlikal-idz‘âni wat-tashdîqi syawâhiduh, wa asyhadu anna sayyidanâ Muḫammadinil-‘abdash-shâdiqa fî qaulihi wa fi’lihi, wal-muballigha ‘anillâhi mâ amarahu bitablîghihi likhalqihi min fardlihi wa naflih, ‘abdun arsalahullâhu lil-‘âlamîna basyîran wa nadzîran, faballaghar-risâlah, wa addal-amânata, wa hadallâhu bihi minal-ummati basyaran katsîran, fakâna fî dhulmatil-jahli lil mustabshirîna sirâjan wa qamaran munîran, famâ a’dhamahâ min minnatin takarramallâḫu bihâ ‘alal-basyar, wa mâ ausa’ahâ min ni‘matin intasyara sirruhâ fil-baḫri wal-barri. Allâhumma shalli wa sallim bi ajallish- shalawâti wa ajma‘ihâ wa azkat-taḫiyyâti wa ausa’ihâ, ‘alâ hâdzal-‘abdil-ladzî waffâ biḫaqqil-‘ubûdiyyati, wa baraza fîhâ fî khil‘atil kamâl, wa qama biḫaqqir-rubûbiyyati fî mawâthinil-khidmati lillâhi wa aqbala ‘alaihi ghâyatal-iqbâl, shalâtan yattashilu bihâ rûḫul-mushallî ‘alaihi bihi, fayanbasithu fî qalbihi nûru sirri ta‘alluqihi bihi wa ḫubbihi, wa yaktabu bihâ bi‘inâyatillâhi fî ḫizbih, wa ‘alâ âihi wa shaḫbihil-ladzînar-taqaû shahwatal-majdi biqurbihi, wa tafayya’û dhilâlasy-syarafal-ashliyyi biwuddihi wa ḫubbihi, mâ ‘aththaral-akwâna binasyri dzikrâhum nasîm.",
        translation:
          "Aku bersaksi, tiada Tuhan selain Allah. Maha Esa, tiada sekutu bagi-Nya. Kesaksian terucapkan dengan lisan. Mengungkap ketulusan dan kepatuhan. Yang terkandung dalam hati sanubari. Memperteguh tonggak-tonggak iman. Yang tertanam jauh di dalam dada. Rahasia hakikatnya tampak hanya bagi mereka. Yang tulus patuh tiada sedikit pun ragu padanya. Dan aku bersaksi bahwasannya. Sayyidina Muhammad adalah hamba Allah. Yang benar dalam ucapan dan perbuatannya. Dan menyampaikan atas nama Allah. Apa yang harus disampaikan. Kepada hamba-hamba-Nya. Tentang yang diwajibkan atau yang dianjurkan-Nya. Dialah hamba Allah yang diutus. Kepada penghuni alam seluruhnya. Pembawa berita gembira di samping ancaman derita. Maka ia pun menyampaikan risalah. Dan menunaikan amanah. Sehingga umat dalam jumlah besar. Beroleh hidayah Allah dengan perantaraannya. Jadilah ia pelita penerang dan bulan purnama. Bagi pencari cahaya penembus kejahilan gelap gulita. Aduhai, betapa agung karunia Allah. Dilimpahkan atas manusia. Betapa luas nikmat Allah bertebaran hikmahnya. Di lautan dan daratan luas merata. Ya Allah, ya Tuhan kami. Limpahkan shalawat dan salam. Yang terbesar dan mencakup segalanya. Teramat suci, luas jangkauannya. Atas diri insan ini. Yang dengan seksama memenuhi kewajiban perhambaan pada Tuhannya. Dengan menyandang segala sifat sempurna. Dan bersungguh-sungguh dalam berbakti kepada Ilahi. Serta menghadapkan diri kepada-Nya. Dengan sebaik dan sesempurna cara. Shalawat rahmat yang mengukuhkan. Jalinan ikatan dengan pribadinya. Bagi si pembaca shalawat atas dirinya. Menjadikan hatinya terang benderang. Tersentuh nur kecintaan dan kerinduan padanya. Dan memasukkannya dengan inayah Allah. Ke dalam kelompoknya. Demikian pula atas segenap keluarganya. Serta para sahabatnya. Yang menduduki puncak derajat yang tinggi. Karena dekat kepadanya. Dan bernaung di bawah bayang-bayang kemuliaan sejati. Dengan mencintainya sepenuh hati. Shalawat dan salam terus-menerus tiada hentinya. Selama embusan angin mengharumi mayapada. Menyebar sebutan indah mereka semuanya.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi.",
      },
    ],

    //Halaman 5
    [
      { translation: "Pasal 5 : AMMA BA'DU FALAMMA TALLAQAT IRADATULLAH" },
      {
        arabic:
          "أَمَّا بَعْدُ، فَلَمَّا تَعَلَّقَتْ إِرَادَةُ اللهِ فِي الْعِلْمِ الْقَدِيْم. بِظُهُوْرِ أَسْرَارِ التَّخْصِيْصِ لِلْبَشَرِ الْكَرِيْم. بِالتَّقْدِيْمِ وَالتَّكْرِيْمِ. نَفَذَتِ الْقُدْرَةُ الْبَاهِرَة. بِالنِّعْمَةِ الْوَاسِعَةِ وَالْـمِنَّةِ الْغَامِرَة. فَانْفَلَقَتْ بَيْضَةُ التَّصْوِيْر. فِي الْعَالَمِ الْمُطْلَقِ الْكَبِيْر. عَنْ جَمَالٍ مَشْهُوْدٍ بِالْعَيْن. حَاوٍ لِوَصْفِ الْكَمَالِ الْمُطْلَقِ وَالْحُسْنِ التَّامِّ وَالزَّيْن. فَتَنَقَّلَ ذٰلِكَ الْجَمَالُ الْمَيْمُوْن. فِي الْأَصْلَابِ الْكَرِيْمَةِ وَالْبُطُوْن. فَمَا مِنْ صُلْبٍ ضَمَّة. إِلَّا وَتَمَّتْ عَلَيْهِ مِنَ اللهِ النِّعْمَة. فَهُوَ الْقَمَرُ التَّامُّ الَّذِيْ يَتَنَقَّلُ فِي بُرُوْجِهِ. لِيَتَشَرَّفَ بِهِ مَوْطِنُ اسْتِقْرَارِهِ وَمَوْضِعُ خُرُوْجِهِ. وَقَدْ قَضَتِ الْأَقْدَارُ الْأَزَلِيَّةُ بِمَا قَضَتْ وَأَظْهَرَتْ مِنْ سِرِّ هٰذَا النُّوْرِ مَا أَظْهَرَت. وَخَصَّصَتْ بِهِ مَنْ خَصَّصَت. فَكَانَ مُسْتَقَرُّهُ فِي الْأَصْلَابِ الْفَاخِرَة. وَالْأَرْحَامِ الشَّرِيْفَةِ الطَّاهِرَة. حَتَّى بَرَزَ فِي عَالَمِ الشَّهَادَةِ بَشَرًا لَا كَالْبَشَر. وَنُوْرًا حَيَّرَ الْأَفْكَارَ ظُهُوْرُهُ وَبَهَر. فَتَعَلَّقَتْ هِمَّةُ الرَّاقِمِ لِهٰذِهِ الْحُرُوْف. بِأَنْ يَرْقُمَ فِي هٰذَا الْقِرْطَاسِ مَا هُوَ لَدَيْهِ مِنْ عَجَائِبِ ذٰلِكَ النُّوْرِ مَعْرُوْف. وَإِنْ كَانَتِ الْأَلْسُنُ لَا تَفِيْ بِعُشْرِ مِعْشَارِ أَوْصَافِ ذٰلِكَ الْمَوْصُوْف. تَشْوِيْقًا لِلسَّامِعِيْن. مِنْ خَوَاصِّ الْمُؤْمِنِيْن. وَتَرْوِيْحًا لِلْمُتَعَلِّقِيْنَ بِهٰذَا النُّوْرِ الْمُبِيْن. وَإِلَّا فَأَنَّى تُعْرِبُ الْأَقْلَام. عَنْ شُؤُوْنِ خَيْرِ الْأَنَام. وَلٰكِنْ هَزَّنيِ إِلَى تَدْوِيْنِ مَا حَفِظْتُهُ مِنْ سِيَرِ أَشْرَفِ الْمَخْلُوْقِيْن. وَمَا أَكْرَمَهُ اللهُ بِهِ فِي مَوْلِدِهِ مِنَ الْفَضْلِ الَّذِي عَمَّ الْعَالَمِيْن. وَبَقِيَتْ رَايَتُهُ فِي الْكَوْنِ مَنْشُوْرَةً عَلَى مَرِّ الْأَيَّامِ وَالشُّهُوْرِ وَالسِّنِيْن. دَاعِي التَّعَلُّقِ بِهٰذِهِ الْحَضْرَةِ الْكَرِيْمَة. وَلَاعِجُ التَّشَوُّقِ إِلَى سَمَاعِ أَوْصَافِهَا الْعَظِيْمَة. وَلَعَلَّ اللهَ يَنْفَعُ بِهِ الْمُتَكَلِّمَ وَالسَّامِع. فَيَدْخُلَانِ فِي شَفَاعَةِ هٰذَا النَّبِيِّ الشَّافِع. وَيَتَرَوَّحَانِ بِرُوْحِ ذٰلِكَ النَّعِيْم",
        latin:
          "Ammâ ba‘du, falammâ ta‘allaqat irâdatullâhi fil-‘ilmil-qadîmi, bidzuhûri asrârit-takhshîshi lil-basyaril-karîm, bit-taqdîmi wat-takrîmi, nafadatil-qudratul-bâhiratu, bin-ni‘matil-wâsi‘ati wal-minnatil-ghâmirati, fanfalaqat baidhatut-tashwîri, fil-‘âlamil-muthlaqil-kabîri, ‘an jamâlin masyhûdin bil-‘aini, ḫâwin liwashfil-kamâlil-muthlaqi wal-ḫusnit-tâmmi waz-zaini, fatanaqqala dzâlikal-jamâlul-maimûn, fil-ashlâbil-karîmati wal-buthûn, famâ min shulbin dhammatin, illâ wa tammat ‘alaihi minallâhin-ni‘mat, fahuwal-qamarut-tâmmul-ladzî yatanaqqalu fî burûjihi, liyatasyarrafa bihi mauthinus-tiqrârihi wa maudli‘u khurûjihi, wa qad qadlatil-aqdârul-azaliyyatu bimâ qadlat wa adhharat min sirri hâdzan-nûri mâ adhharat, wa khashshashat bihi man khashshashat, fakâna mustaqarruhu fil-ashlâbil-fâkhirah, wal-arḫâmisy-syarîfatith-thâhirati, ḫattâ baraza fî ‘âlamisy-syahâdati basyaran lâ kal-basyari, wa nûran ḫayyaral-afkâra dhuhûruhu wa bahar. fata’allaqat himmatur-râqimi lihâdzihil-ḫurûf, bi an yarquma fî hâdzal-qirthâsi mâ huwa ladaihi min ‘ajâ’ibi dzâlikan-nûri ma‘rûfi, wa in kânatil-alsunu lâ tafî bi‘usyri mi‘syâri aushâfi dzâlikal-maushûfi, tasywîqan lis-sâmi‘în, min khawashshil-mu’minîn. watarwîḫan lil-muta‘alliqîna bihâdzan-nûril-mubîn, wa illâ fa annâ tu‘ribul-aqlâm, ‘an syu’ûni khairil-anâm, wa lâkin hazzanî ilâ tadwîni mâ ḫafidhtuhu min siyari asyrafil-makhlûqîn. wa mâ akramahullâhu bihi fî maulidihi minal-fadllil-ladzî ‘ammal-‘âlamîn, wa baqiyat râyatuhu fil-kauni mansyûratan ‘alâ marril-ayyâmi wash-syuhûri was-sinîn. dâ‘iyat-ta‘alluqi bihâdzihil-ḫadlratil-karîmati, wa lâ ‘ijut-tasyawwuqi ilâ samâ’i aushâfihâl-‘adhîmati, wa la‘allallâhu yanfa‘u bihil-mutakallima was-sâmi‘, fayadkhulâni fî syafâ‘ati hâdzan-nabiyyisy-syâfi‘ wayatarawwaḫâni birûḫi dzâlikan-na‘îm.",
        translation:
          "Amma ba’du. Manakala iradat Allah dalam ilmu-Nya yang qadim. Berkenan menampakkan inti kekhususan, bagi manusia yang mulia. Dengan keutamaan dan penghormatan. Terwujudlah dengan kodrat gemilang. Nikmat Ilahi yang luas merata. Serta anugerah-Nya yang melimpah ruah. Maka terkuaklah karsa cipta-Nya. Di alam mutlak tiada berbatas. Menyingkap “keindahan” disaksikan pandangan mata. Mencakup segala sifat keindahan dan keelokan sempurna. Dan berpindah-pindahlah ia dengan segala keberkahan. Dalam sulbi-sulbi dan rahim-rahim yang mulia. Tiada satu pun sulbi yang merangkumnya. Kecuali beroleh nikmat Allah nan sempurna. Laksana bulan purnama. Berpindah-pindah dalam orbitnya. Agar setiap tempat yang didiaminya. Ataupun jalan yang dilaluinya. Meraih kemuliaan tiada terhingga. Demikianlah ditetapkan dalam suratan takdir azali. Menampakkan rahasia nur ini. Hanya dalam diri mereka. Yang beroleh kekhususan dan keistimewaan. Sehingga tiap kediamannya. Selalu dalam sulbi-sulbi megah dan anggun. Serta rahim-rahim yang suci bersih. Sampai tiba saat ia datang ke alam nyata. Sebagai manusia, tiada sama dengan manusia biasa. Bagaikan nur cahaya benderang. Penampilannya mencengangkan akal dan pikiran. Maka tergeraklah jiwa dan semangat penulis ini. Mencatat apa yang sampai kepadanya. Tentang keajaiban nur mulia ini. Meski lidah tak’kan mampu mengungkap sifat-sifatnya walaupun sekelumit atau lebih sedikit. Tapi sekadar penawar hati para pendengar. Yang termasuk kalangan khusus di antara kaum mukminim. Dan penghibur mereka yang terpaut hatinya. Pada pesona nur Yang terang ini. Sebab bagaimana mungkin. Pena para penulis mampu melukis. Tentang segala sesuatu yang bersangkutan. Dengan manusia Paling utama. Di antara manusia seluruhnya. Namun hatiku tergerak. Menuliskan yang kuhafal selama ini. Tentang riwayat hidup manusia termulia. Di antara makhluk semuanya. Juga tentang karunia agung yang dilimpahkan Allah. Pada peristiwa kelahirannya. Yang meliputi seluruh penghuni alam semesta. Dan panji-panjinya yang berkibar megah. Di segenap penjuru jagat raya. Terus-menerus sepanjang pergantian hari, bulan, dan tahun. Semuanya itu didorong semata-mata. Oleh kegandrunganku pada pribadi luhur ini. Serta kerinduanku ‘tuk mendengarkan selalu. Sebutan sifat-sifatnya yang serba agung. Dan kiranya Allah berkenan melipatgandakan manfaatnya. Bagi si pembicara ataupun pendengarnya. Sehingga keduanya’kan memasuki pintu syafa’at. Dan menghirup sejuknya kenikmatan itu.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi.",
      },
    ],

    //Halaman 6
    [
      { translation: "Pasal 6 : WAQOD ANA LIL QOLAMI" },
      {
        arabic:
          "وَقَدْ آنَ لِلْقَلَمِ أَنْ يَخُطَّ مَا حَرَّكَتْهُ فِيْهِ الْأَنَامِل. مِمَّا اسْتَفَادَهُ الْفَهْمُ مِنْ صِفَاتِ هٰذَا الْعَبْدِ الْمَحْبُوْبِ الْكَامِل. وَشَمَائِلِهِ الَّتِي هِيَ أَحْسَنُ الشَّمَائِل. وَهُنَا حَسُنَ أَنْ نُثْبِتَ مَا بَلَغَ إِلَيْنَا فِي شَأْنِ هٰذَا الْحَبِيْبِ مِنْ أَخْبَارٍ وَأَثَار. لِيَتَشَرَّفَ بِكِتَابَتِهِ الْقَلَمُ وَالْقِرْطَاسُ وَتَتَنَزَّهَ فِي حَدَائِقِهِ الْأَسْمَاعُ وَالْأَبْصَار. وَقَدْ بَلَغَنَا فِي الْأَحَادِيْثِ الْمَشْهُوْرَة. أَنَّ أَوَّلَ شَيْءٍ خَلَقَهُ اللهُ هُوَ النُّوْرُ الْمُوْدَعُ فِي هٰذِهِ الصُّوْرَة. فَنُوْرُ هٰذَا الْحَبِيْبِ أَوَّلُ مَخْلُوْقٍ بَرَزَ فِي الْعَالَم. وَمِنْهُ تَفَرَّعَ الْوُجُوْدُ خَلْقًا بَعْدَ خَلْقٍ فِيْمَا حَدَثَ وَمَا تَقَادَم. وَقَدْ أَخْرَجَ عَبْدُ الرَّزَّاقِ بِسَنَدِهِ عَنْ جَابِرِ بْنِ عَبْدِ اللهِ الْأَنْصَارِيِّ رَضِيَ اللهُ عَنْهُمَا قَالَ: قُلْتُ يَا رَسُوْلَ اللهِ، بِأَبِيْ وَاُمِّيْ، أَخْبِرْنِي عَنْ أَوَّلِ شَيْءٍ خَلَقَهُ اللهُ قَبْلَ الْأَشْيَآء. قَالَ: يَا جَابِرُ إِنَّ اللهَ خَلَقَ قَبْلَ الْأَشْيَآءِ نُوْرَ نَبِيِّكَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مِنْ نُوْرِه. وَقَدْ وَرَدَ مِنْ حَدِيْثِ أَبِيْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ أَنَّهُ قَالَ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: كُنْتُ أَوَّلَ النَّبِيِّيْنَ فِي الْخَلْقِ وَآخِرَهُمْ فِي الْبَعْثِ. وَقَدْ تَعَدَّدَتِ الرِّوَايَاتُ بِأَنُّهُ أَوَّلُ الْخَلْقِ وُجُوْدًا وَأَشْرَفُهُمْ مَوْلُوْدًا. وَلَمَّا كَانَتِ السَّعَادَةُ الْأَبْدِيَّة. لَهَا مُلَاحَظَةٌ خَفِيَّةٌ. اِخْتَصَّتْ مَنْ شَاءَتْ مِنَ الْبَرِيَّة. بِكَمَالِ الْخُصُوْصِيَّة. فَاسْتَوْدَعَتْ هٰذَا النُّوْرَ الْمُبِيْن. أَصْلَابَ وَبُطُوْنَ مَنْ شَرَّفَتْهُ مِنَ الْعَالَمِيْن. فَتَنَقَّلَ هٰذَا النُّوْرُ مِنْ صُلْبِ اٰدَمَ وَنُوْحٍ وَإبْرَاهِيْم. حَتَّى أَوْصَلَتْهُ يَدُ الْعِلْمِ الْقَدِيْم. إِلَى مَنْ خَصَّصَتْهُ بِالتَّكْرِيْمِ أَبِيْهِ الْكَرِيْم. عَبْدِاللهِ ابْنِ عَبْدِ الْمُطَّلِبِ ذِيْ الْقَدْرِ الْعَظِيْم. وَأُمُّهُ الَّتِيْ هِيَ فِي الْمَخَاوِفِ آمِنَة. اَلسَّيِّدَةِ الْكَرِيْمَةِ اٰمِنَة. فَتَلَقَّاهُ صُلْبُ عَبْدُ الله فَأَلْقَاهُ إِلَى بَطْنِهَا. فَضَمَّتْهُ أَحْشَاؤُهَا بِمَعُوْنَةِ اللهِ مُحَافَظَةً عَلَى حَقِّ هٰذِهِ الدُّرَّةِ وَصَوْنِهَا. فَحَمَلَتْهُ بِرِعَايَةِ اللهِ كَمَا وَرَدَ عَنْهَا حَمْلًا خَفِيْفًا لَا تَجِدُ لَهُ ثِقَلًا. وَلَا تَشْكُوْا مِنْهُ أَلَمًا وَلَا عِلَلًا. حَتَّى مَرَّ الشَّهْرُ بَعْدَ الشَّهْرِ مِنْ حَمْلِه. وَقَرُبَ وَقْتُ بُرُوْزِهِ إِلَى عَالَمِ الشَّهَادَةِ لِتَنْبَسِطَ عَلَى أَهْلِ هٰذَا الْعَالَمِ فُيُوْضَاتُ فَضْلِه. وَتَنْتَشِرَ فِيْهِ أَثَارُ مَجْدِهِ الصَّمِيْم",
        latin:
          "Wa qad âna lilqalami an yakhudhdha mâ ḫarrakat hu fîhil-anâmil, mimmâs-tafâdahul-fahmu min shifâtil hâdzal-‘abdil-maḫjûbil-kâmil. wa syamâ’ilihil-latî hiya aḫsanusy-syamâ’il. wa hunâ ḫasuna an nutsbita mâ balagha ilainâ fî sya’ni hâdzal-ḫabîbi min akhbârin wa âtsâr. liyatasysyarafa bikitâbihil-qalamu wal-qirthâsu wa tatanazzaha fî ḫadâ’iqil-asmâ‘u wal-abshâr. wa qad balaghanâ fil-aḫâditsil-masyhûrati, anna awwala sya’in khalaqahullâhu huwan-nûrul-maudlû‘u fî hâdzihish-shûrat. fanûru hâdzal-ḫabîbi awwalu makhlûqin baraza fil-‘âlam. wa minhu tafarra‘al-wujûdu khalqan ba‘da khalqin fîmâ ḫadatsâ wa mâ taqâdam. wa qad akhraja ‘abdur-razzâqi bisanadihi ‘an jâbiri-bni ‘abdillâhil-anshâriyyi radliyallâhu ‘anhumâ qâla: qultu yâ rasûlallâhi, biabî wa ummî, akhbirnî ‘an awwali syai’in khalaqahullâhu qabla-asyyâ’i. qâla: yâ jabiru innallâha khalaqa qabla-asyyâ’i nûra nabiyyika Muḫammadin shallâhu ‘alaihi wa sallama min nûrihi. wa qad warada min ḫadîtsi abî hurairata radliyallâhu ‘anhu annahu qâla: qâla rasulullâhi shallâhu ‘alaihi wa sallam: kuntu awwalan-nabiyyîna fil-khalqi wa âkhirahum fil-ba‘tsi. wa qad ta‘addadatir-riwâyâtu bi annahu awwalul-khalqi wujûdan wa asyrafuhum maulûdan. wa lammâ kânantis-sa‘âdatul-abdiyyatu. lahâ mulâḫadhatun khafiyyatun. ikhtashshat man syâ’at minal-bariyyati. bikamâlil-khushûshiyyah. fastauda‘at hâdzan-nûral-mubîn. ashlâba wa buthûna man syarrafat hu minal-‘âlamîn. fatanaqqala hâdzan-nûru min shulbi âdama wa nûḫi wa ibrâhîm. ḫattâ aushalat hu yadul-‘ilmil-qadîm. ilâ man khashshahu bitakrîmi abîhil-karîm. ‘Abdillâhi-bni ‘Abdil-Muthallibi dzil-qadril-‘adhîm. wa ummuhul-latî hiya fil-makhâwifi âminah. as-sayidatil-karîmati âminah. fatallaqâhu shulbu ‘abdullâh fa alqâhu ilâ bathnihâ. fadlammathu aḫsyâ’uhâ bima‘ûnatillâhi muḫâfadhatan ‘alâ ḫaqqi hâdzihid-durrati wa shaunihâ. faḫamalat hu biri‘âyatillâhi kamâ warada ‘anhâ ḫamlan khafîfan lâ tajidu lahu tsiqâlan. wa lâ tasykû minhu alaman wa lâ ‘ilala. ḫattâ marrasy-syahru ba‘dasy-syahri min ḫamlihi. wa qaruba waqtu burûzihi ilâ ‘âlamisy-syahâdari litanbasitha ‘alâ ahli hâdzâl-‘âlami fuyûdlâtu fadllih. wa tantasyira fîhi atsâru majdihish-shamîm.",
        translation:
          "Kini tiba saat penaku ini. Menggoreskan yang digerakkan jari tanganku. Yang bisa terjangkau oleh pikiran. Tentang sifat hamba yang sempurna dan dikasihi ini, serta perilakunya yang terluhur di antara semua perilaku. Dan di sinilah sepatutnya kutuliskan. Apa yang telah sampai ke pengetahuanku. Tentang berita dan kisah insan tercinta ini. Agar kalam dan kertas beroleh kemuliaan. Pendengaran dan penglihatan pun berkesempatan, Bertamasya dalam taman-tamannya yang indah mempesona. Telah sampai kepada kami. Dalam hadits-hadits yang masyhur. Bahwa sesuatu yang mula pertama dicipta Allah. Ialah nur yang tersimpan dalam pribadi ini. Maka nur insan tercinta inilah. Makhluk pertama muncul di alam semesta. Darinya bercabang seluruh wujud ini. Ciptaan demi ciptaan. Yang baru datang ataupun yang sebelumnya. Sebagaimana diriwayatkan Abdurrazzaq. Dengan sanadnya yang sampai pada Jabir bin Abdullah Al-Anshari, semoga Allah meridhai keduanya. Bahwasanya ia pernah bertanya, “Demi ayah dan ibuku, ya Rasulullah, Beri tahukanlah kepadaku tentang sesuatu. Yang diciptakan Allah sebelum segalanya yang lain. Jawab beliau, “Wahai Jabir, sesungguhnya Allah, Telah menciptakan nur nabimu, Muhammad, dari nur-Nya. Sebelum sesuatu yang lain”. Dan telah diriwayatkan oleh Abu Hurairah, Bahwasanya Nabi ﷺ telah bersabda, ‘Aku adalah yang pertama di antara para nabi dalam penciptaan. Namun yang terakhir dalam kerasulan…”. Banyak pula riwayat lain menyatakan. Bahwa beliaulah yang pertama adanya. Dan termulia di antara mereka semua. Dan manakala “kebahagiaan abadi” menampakkan. Pengamatannya yang tersembunyi. Mengkhususkan manusia yang dipilihnya. Dengan kekhususan yang sempurna. Dititipkannya nur benderang ini. Pada berbagai sulbi dan rahim yang dimuliakan, di antara penghuni jagat raya. Dan berpindah-pindahlah ia, dari sulbi Adam, Nuh, dan Ibrahim. Sehingga pada akhirnya. Sampailah ia ke ayahandanya. Yang terpilih menerima kehormatan tiada terhingga: Abdullah bin Abdul Muththalib yang bijak dan berwibawa. Serta ibundanya, Aminah, yang mulia. Yang selalu merasa aman dan tenteram. Meski di tengah apa saja yang menggelisahkan. Maka disambutlah ia oleh sulbi Abdullah. Dan diteruskan kepada Aminah, istrinya. Yang merangkumnya dengan penuh kasih sayang. Demi menjaga dan memelihara mutiara amat berharga. Dengan pertolongan Allah, yang selalu mendampinginya. Ia pun mengandungnya di bawah pengawasan Allah. Dengan segala kemudahan dan keringanan. Tiada sedikit pun berat terasa. Ataupun sakit diderita. Bulan demi bulan berlalu. Sampai hampir tiba saatnya. Kandungan itu lahir ke alam nyata. Agar luapan keutamaannya. Menggenangi penghuni alam semesta. Tebaran keluhurannya. Melingkungi mereka semua.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi.",
      },
    ],

    //Halaman 7
    [
      { translation: "Pasal 7 : WA MUNDZU ALIQAT BIHI HADZIHID DURRAH" },
      {
        arabic:
          "وَمُنْذُ عَلِقَتْ بِهِ هٰذِهِ الدُّرَّةُ الْمَكْنُوْنَة. وَالْجَوْهَرَةُ الْمَصُوْنَة. وَالْكَوْنُ كُلُّهُ يُصْبِحُ وَيُمْسِيْ فِي سُرُوْرٍ وَابْتِهَاج. بِقُرْبِ ظُهُوْرِ إِشْرَاقِ هٰذَا السِّرَاج. وَالْعُيُوْنُ مُتَشَوِّفَةٌ إِلَى بُرُوْزِه. مُتَشَوِّقَةٌ إِلَى الْتِقَاطِ جَوَاهِرِ كُنُوْزِه. وَكُلُّ دَآبَّةٍ لِقُرَيْشٍ نَطَقَتْ بِفَصِيْحِ الْعِبَارَة. مُعْلِنَةً بِكَمَالِ الْبِشَارَة. وَمَا مِنْ حَامِلٍ حَمَلَتْ فِي ذٰلِكَ الْعَام. إِلَّا أَتَتْ فِي حَمْلِهَا بِغُلَام. مِنْ بَرَكَاتِ وَسَعَادَةِ هٰذَا الْإِمَام. وَلَمْ تَزَلِ الْأَرْضُ وَالسَّمَوَات. مُتَضَمِّخَةً بِعِطْرِ الْفَرَحِ بِمُلَاقَاةِ أَشْرَفِ الْبَرِيَّات. وَبُرُوْزِهِ مِنْ عَالَمِ الْخَفَاءِ إِلَى عَالَمِ الظُّهُوْر. بَعْدَ تَنَقُّلِهِ فِي الْبُطُوْنِ وَالظُّهُوْر. فَأَظْهَرَ اللهُ فِي الْوُجُوْدِ بَهْجَةَ التَّكْرِيْم. وَبَسَطَ فِي الْعَالَمِ الْكَبِيْرِ مَائِدَةَ التَّشْرِيْفِ وَالتَّعْظِيْم. بِبُرُوْزِ هٰذَا الْبَشَرِ الْكَرِيْم",
        latin:
          "Wa mundzu ‘aliqat bihi hâdzihid-durratul-maknûnatu. wal-jauharatul-mashûnatu. wal-kaunu kulluhu yushbiḫu wa yumsî fî surûrin wabtihâjin. biqurbi dhuhûri isyrâqi hâdzas-sirâj. wal-‘uyûnu mutasyawwifatun ilâ burûzihi. mutasyawwiqatun ilal-tiqâthi jawâhiri kunûzihi. wa kullu dâbbatin li quraisyin nathaqat bi fashîḫil-‘ibârati. mu‘linatan bikamâlil-bisyârati, wa mâ min ḫâmilin ḫamalat fî dzâlikal-‘âmi. illâ atat fî ḫamlihâ bighulâm. min barâkâti wa sa‘âdati hâdzal-imâm. wa lam tazalil-ardlu was-samâwât. mutadlammikhatan bi‘ithril-faraḫi bimulâqâti asyrafil-bariyyâti, wa burûzihi min ‘âlamil-khafâ’i ilâ ‘âlamidh-dhuhûr. ba‘da tanaqqulihi fil-buthûni wadh-dhuhûr. fa adhharallâhu fil-wujûdi bahjatat-takrîm. wa basatha fil-‘âlamil-kabîri mâ’idatat-tasyrîfi wat-ta‘dhîm. bi burûzi hâdzal-basyaril-karîm",
        translation:
          "Sejak berpaut padanya mutiara indah terpelihara ini, alam seluruhnya bergemilang riang gembira, di pagi hari maupun di kala senja, dengan kian mendekatnya, saat terbit cahaya pelita penerang ini. Demikian pula semua pandangan mata. Menatap bersama menanti kelahirannya. Penuh kerinduan memungut permata baiduri tiada ternilai. Binatang peliharaan Quraisy pun, semuanya bagaikan menyeru dengan fasih kata-kata, mengumumkan berita nan sempurna. Setiap wanita yang mengandung di tahun itu, niscaya ia melahirkan bayi lelaki. Hal itu semua disebabkan, berkah kemuliaan imam pembawa bahagia ini. Demikianlah bumi dan langit. Bergelimang wangi-wangian riang gembira. Menanti lahirnya insan termulia. Di antara segenap penghuninya ke alam nyata. Setelah tersimpan sekian lama. Dalam beberapa sulbi dan rahim berganti-ganti. Maka berkenanlah Allah SWT. Menampakkan karunia gemilang-Nya. Pada wujud semesta ini. Menghidangkan rahmah penghormatan dan kemuliaan.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi.",
      },
    ],

    //Halaman 8
    [
      { translation: "Pasal 8 : FAHINA QARUBA AWANU WADH'I HADZAL HABIB" },
      {
        arabic:
          "فَحِيْنَ قَرُبَ أَوَانُ وَضْعِ هٰذَا الْحَبِيْب. أَعْلَنَتِ السَّمَوَاتُ وَالْأَرْضُوْنَ وَمَنْ فِيْهِنَّ بِالتَّرْحِيْب. وَأَمْطَارُ الْجُوْدِ الْإِلٰهِيِّ عَلَى أَهْلِ الْوُجُوْدِ تَثِجّ. وَأَلْسِنَةُ الْمَلَائِكَةِ بِالتَّبْشِيْرِ لِلْعَالَمِيْنَ تَعِجّ . وَالْقُدْرَةُ كَشَفَتْ قِنَاعَ هٰذَا الْمَسْتُوْر. لِيَبْرُزَ نُوْرُهُ كَامِلًا فِي عَالَمِ الظُّهُوْر. نُوْرًا فَاقَ كُلَّ نُوْر. وَأَنْفَذَ الْحَقُّ حُكْمَه. عَلَى مَنْ أَتَمَّ اللهُ عَلَيْهِ النِّعْمَة. مِنْ خَوَاصِّ الْأُمَّة. أَنْ يَحْضُرَ عِنْدَ وَضْعِهِ اُمَّة. تَأْنِيْسًا لِجَنَابِهَا الْمَسْعُوْد. وَمُشَارَكَةً لَهَا فِيْ هٰذَا السِّمَاطِ الْمَمْدُوْد. فَحَضَرَتْ بِتَوْفِيْقِ اللهِ السَّيِّدَةُ مَرْيَمُ وَالسَّيِّدَةُ اٰسِيَة. وَمَعَهُمَا مِنَ الْحُوْرِ الْعِيْنِ مَنْ قَسَمَ اللهُ لَهُ مِنَ الشَّرَفِ بِالْقِسْمَةِ الْوَافِيَة. فَأَتَى الْوَقْتُ الَّذِيْ رَتَّبَ اللهُ عَلَى حُضُوْرِهِ وُجُوْدَ هٰذَا الْمَوْلُوْد. فَاَنْفَلَقَ صُبْحُ الْكَمَالِ مِنَ النُّوْرِ عَنْ عَمُوْد. وَبَرَزَ الْحَامْدُ الْمَحْمُوْد. مُذْعِنًا لِلّٰهِ بِالتَّعْظِيْمِ وَالسُّجُوْد",
        latin:
          "Faḫîna qaruba awânu wadh‘i hâdzal-ḫabîb, a‘lanatis-samawâtu wal-ardlûna wa man fîhinna bit-tarhîb, wa amthârul-jûdil-ilâhî ‘alâ ahlil-wujûdi tatsij, wa alsinatul-malâ’ikati bit-tabsyîri lil-‘âlamîna ta‘ij, wal-qudratu kasyafat qinâ‘a hâdzal-mastûr, liyabruza nûruhu kâmilan fî ‘âlamidh-dhuhûr, nûran fâqa kulla nûr, wa anfadzal-ḫaqqu ḫukmahu, ‘alâ man atammallâhu ‘alaihin-ni‘mat, min khawâshshil-ummat, an yaḫdlura ‘inda wadl‘ihi ummat, ta’nîsan lijanâbihal-mas‘ûd, wa musyârakatan lahâ fî hadzas-simâthil-mamdûd, faḫadlarat bitaufîqillâhis-sayyidatu maryamu wa sayyidatu âsiyah, wa ma‘humâ minal-ḫuril-‘ini man qasamaallâhu lahu minasy-syarafi bil-qismatil-wâfiyat, fa atal-waqtul-ladzî rattaballâhu ‘alâ ḫudlûrihi wujûda hâdzal-maulûd, fa’anfalaqa shubḫal-kamâli minan-nûri ‘an ‘amûd, wa barazal-ḫamdul-maḫmûd, mudz‘inan lillâhi bit-ta‘dhîmi was-sujûd.",
        translation:
          "Dan ketika hampir tiba saatnya. Kelahiran insan tercinta ini. Gema ucapan selamat datang yang hangat. Berkumandang di langit dan di bumi. Hujan kemurahan llahi tercurah. Atas penghuni alam dengan lebatnya. Lidah malaikat bergemuruh. Mengumumkan kabar gembira. Kuasa Allah menyingkap tabir rahasia tersembunyi. Membuat nurnya terbit sempurna di alam nyata. Cahaya mengungguli segenap cahaya. Ketepatan-Nya pun terlaksana. Atas orang-orang pilihan. Yang nikmat-Nya disempurnakan bagi mereka. Yang menunggu detik-detik kelahirannya. Sebagai penghibur pribadinya yang beruntung. Dan ikut bergembira mereguk nikmat berlimpih ini. Maka hadirlah dengan taufik Allah. Sayyidah Maryam dan Sayyidah Asiyah. Bersama keduanya datang mengiring. Sejumlah bidadari surga, yang beroleh kemuliaan agung, Yang dibagi-bagikan oteh Ailah, atas mereka yang dikehendaki Dan tibalah saat yang telah diatur Allah. Bagi kelahiran ini. Maka menyingsinglah fajar keutamaanan cerah. Terang benderang menjulang tinggi…. Dan lahirlah insan pemuji dan terpuji. Tunduk khusyu’ di hadapan Allah. Dengan segala penghormatan tulus dan sembah sujud.",
      },
    ],

    //Halaman 9
    [
      { translation: "Pasal 9 : MAHALUL QIYAM" },
      {
        arabic: "يَا نَبِيْ سَلَام عَلَيْكَ يَا رَسُوْل سَلَام عَلَيْكَ",
        latin: "Yâ nabî salâm ‘alaik yâ rasul salâm ‘alaik",
        translation:
          "Wahai Nabi, limpahan salam semoga tetap atasmu. Wahai Rasul, limpahan salam semoga tetap atasmu.",
      },
      {
        arabic: "يَا حَبِيْب سَلَام عَلَيْكَ صَلَوَاتُ الله عَلَيْكَ",
        latin: "Yâ ḫabîb salâm ‘alaik shalawâtullâh ‘alaik",
        translation:
          "Wahai Kekasih! limpahan salam semoga tetap atasmu. Pun limpahan rahmat dari Allah semoga juga tetap atasmu!",
      },
      {
        arabic:
          "أَشْرَقَ الْكَوْنُ ابْـتِـهَاجًـا بِوُجُوْدِ الْمُصْطَفَى أَحْمَـدْ",
        latin: "Asyraqal-kaunub-tihâjan biwujûdil-mushthafâ aḫmad",
        translation:
          "Alam bersinar-seminar bersuka ria, menyambut kelahiran Al-Musthafa Ahmad,",
      },
      {
        arabic:
          "وَلِأَهْـــــــلِ الْكَـوْنِ اُنْـسٌ وَسُرُوْرٌ قَـدْ تَـجَـدَّدْ",
        latin: "Wa li ahlil-kauni unsun wa surûrun qad tajaddad",
        translation:
          "Riang gembira meliput penghuninya, sambung-menyambung tiada hentinya",
      },
      {
        arabic:
          "فَاطْـرَبُـوْا يَا أَهْلَ الْمَثَانِي فَهَـزَارُ الْيُـمْنِ غَـرَّدْ",
        latin: "Fathrabû yâ ahlal-matsâni fahazârul-yumni gharrad",
        translation:
          "Bergembiralah, wahai pengikut Al-Qur’an burung-burung kemujuran kini berkicauan,",
      },
      {
        arabic: "وَاسْتَضِيْئُوْا بِـجَـمَـالٍ فَاقَ فِي الْحُسْنِ تَـفَـرَّدْ",
        latin: "Wastadlî'û bijamâlin fâqa fil-ḫusni tafarrad",
        translation:
          "Bersuluhlah dengan sinar keindahan, mengungguli semua yang indah tiada bandingan",
      },
      {
        arabic:
          "وَلَنَا الْـبُـشْرَى بِـسَـعْدٍ مُسْـتَـمِـرٍّ لَيْسَ يَنْـفَــدْ",
        latin: "Wa lanal-busyrâ bisa‘din mustamirrin laisa yanfad",
        translation:
          "Kini wajiblah bersuka cita, dengan keberuntungan terus-menerus tiada habisnya.",
      },
      {
        arabic:
          "حَيْثُ اُوْتِـيـْنَــــا عَـطَاءً جَمَعَ الْـفَـخْرَ الْـمُــؤَبَّـدْ",
        latin: "Haitsu ûtînâ ‘athâ'an jama‘al-fakhral-mu'abbad",
        translation:
          "Manakala kita beroleh anugerah, padanya terpadu kebanggaan abadi",
      },
      {
        arabic:
          "فَـــــلِرَبِّيْ كُلُّ حَمْـــــــدٍ جَــــلَّ أَنْ يَـحْـصُرَهُ الْعَدّ",
        latin: "Falirabbî kullu ḫamdin jalla an yaḫshurahul-‘ad",
        translation: "Bagi Tuhan segala puji, tiada bilangan mampu mencakupnya",
      },
      {
        arabic: "إِذْ حَبَانَا بِوُجُوْدِ الْـــ مُصْطَفَى الْهَادِي مُحَمَّدْ",
        latin: "Idz ḫabânâ biwujûdil mushthafal-hâdî Muḫammad",
        translation:
          "Atas penghormatan dilimpahkan-Nya bagi kita, dengan lahirnya Al-Musthafa Al-Hadi Muhammad",
      },
      {
        arabic:
          "يَا رَسُوْلَ اللهِ أَهْـــلًا بِكَ إِنَّـــــا بِكَ نَسْـعَـدْ",
        latin: "Yâ rasûlallâhi ahlan bika innâ bika nas‘ad",
        translation:
          "Ya Rasulullah, selamat datang, ahlan wa sahlan. Sungguh kami beruntung dengan kehadiranmu",
      },
      {
        arabic: "وَبِـجَــــاهِـهْ يَـا إِلٰهِي جُدْ وَبَلِّغْ كُلَّ مَقْـصَدْ",
        latin: "Wa bijâhih yâ ilâḫî jud wa balligh kulla maqshad",
        translation:
          "Ya Ilahi, ya Tuhan kami, semoga Kau berkenan memberi nikmat karunia-Mu, menyampaikan kami ke tujuan idaman, demi ketinggian derajat Rasul di sisi-Mu",
      },
      {
        arabic:
          "وَاهْدِنَا نَهْجَ سَبِــيْلِهْ كَيْ بِـــهِ نَسْـعَدْ وَنُرْشَدْ",
        latin: "Wahdinâ nahja sabîlih kai bihi nas‘ad wa nursyad",
        translation:
          "Tunjukilah kami jalan yang ia tempuh, agar dengannya kami bahagia beroleh kebaikan, melimpah,",
      },
      {
        arabic: "رَبِّ بَلِّـغْنَا بِـجَــاهِهْ فِيْ جِوَارِهِ خَيْرَ مَقْعَدْ",
        latin: "Rabbi ballighnâ bijâhih fî jawârihi khaira maq‘ad",
        translation:
          "Rabbi, demi mulia kedudukannya di sisi-Mu, tempatkanlah kami di sebaik tempat di sisinya",
      },
      {
        arabic: "وَصَلَاةُ اللهِ تَغْـشَى أَشْرَفَ الرُّسْلِ مُحَـمَّـدْ",
        latin: "Wa shalâtullâhi taghsyâ asyrafar-rusli Muḫammad",
        translation:
          "Semoga shalawat Allah meliputi selalu rasul termulia, Muhammad",
      },
      {
        arabic: "وَسَــــلَامٌ مُسْتَــمِرٌّ كُلَّ حِيْنٍ يَـــتَــجَــدَّدْ",
        latin: "Wa salâmun mustamirrun kulla ḫînin yatajaddad",
        translation: "serta salam terus-menerus, silih berganti setiap saat",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi ",
      },
    ],

    //Halaman 10
    [
      { translation: "Pasal 10 : WA HINA BARAZA SALLALLAHU ALAIHI WA SALLAM " },
      {
        arabic:
          "وَحِيْنَ بَرَزَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مِنْ بَطْنِ أُمِّهِ بَرَزَ رَافِعًا طَرْفَهُ إِلَى السَّمَآء. مُؤْمِيًا بِذٰلِكَ الرَّفْعِ إِلَى أَنَّ لَهُ شَرَفًا عَلَا مَجْدُهُ وَسَمَا. وَكَانَ وَقْتُ مَوْلِدِ سَيِّدِ الْكَوْنَيْن. مِنَ الشُّهُوْرِ شَهْرُ رَبِيْعِ الْأَوَّلِ وَمِنَ الْأَيَّامِ يَوْمَ الْإِثْنَيْن. وَمَوْضِعُ وِلَادَتِهِ وَقَبْرِهِ بِالْحَرَمَيْن. وَقَدْ وَرَدَ أَنَّهُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وُلِدَ مَخْتُوْنًا مَكْحُوْلًا مَقْطُوْعَ السُّرَّة. تَوَلَّتْ ذٰلِكَ لِشَرَفِهِ عِنْدَ اللهِ أَيْدِي الْقُدْرَة. وَمَعَ بُرُوْزِهِ إِلَى هٰذَا الْعَالَمِ ظَهَرَ مِنَ الْعَجَائِب. مَا يَدُلُّ عَلَى أَنَّهُ أَشْرَفُ الْمَخْلُوْقِيْنَ وَأَفْضَلُ الْحَبَائِب. فَقَدْ وَرَدَ عَنْ عَبْدِ الرَّحْمٰنِ بْنِ عَوْفٍ عَنْ اُمِّهِ الشَّفَّاءِ رَضِيَ اللهُ عَنْهُمَا. قَالَتْ لَمَّا وَلَدَتْ اٰمِنَةُ رَضِيَ اللهُ عَنْهَا رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَقَعَ عَلَى يَدَيَّ فَا سْتَهَلَّ فَسَمِعْتُ قَائِلًا يَقُوْلُ رَحِمَكَ اللهُ أَوْ رَحِمَكَ رَبُّكَ. قَالَتِ الشَّفَآءُ فَأَضَآءَ لَهُ مَا بَيْنَ الْمَشْرِقِ وَالْمَغْرِب. حَتَّى نَظَرْتُ إِلَى بَعْضِ قُصُوْرِ الرُّوْمِ. قَالَتْ ثُمَّ أَلْبَسْتُهُ وَأَضْجَعْتُهُ فَلَمْ أَنْشَبْ عَنْ غَشِيَتْنِيْ ظُلمَةٌ وَرُعْبٌ وَقُشَعْرِيْرَةٌ عَنْ يَمِيْنِيْ. فَسَمِعْتُ قَائِلًا يَقُوْلُ أَيْنَ ذَهَبْتَ بِهِ قَالَ إِلَى الْمَغْرِبِ. وَأَسْفَرَ ذَلِكَ عَنِّي. ثُمَّ عَاوَدَنِي الرُّعْبُ وَالظُّلْمَةُ وَالْقُشَعْرِيْرَةُ عَنْ يَسَارِيْ. فَسَمِعْتُ قَائِلًا يَقُوْلُ أَيْنَ ذَهَبْتَ بِهِ قَالَ إِلَى الْمَشْرِقِ. قَالَتْ فَلَمْ يَزَالِ الْحَدِيْثُ مِنِّي عَلَى بَالٍ حَتَّى ابْتَعَثَهُ اللهُ. فَكُنْتُ مِنْ أَوَّلِ النَّاسِ إِسْلَامًا. وَكَمْ تَرْجَمْتِ السُّنَّةُ مِنْ عَظِيْمِ الْمُعْجِزَات. وَبَاهِرِ الْاٰيَاتِ الْبَيِّنَات. بِمَا يَقْضِي بِعَظِيْمِ شَرَفِهِ عِنْدَ مَوْلَاه. وَأَنَّ عَيْنَ عِنَايَتِهِ فِي كُلِّ حِيْنٍ تَرْعَاه. وَأَنَّهُ الْهَادِي إِلَى الصِّرَاطِ الْمُسْتَقِيْم.",
        latin:
          "Wa hîna baraza shallallâḫu ‘alaihi wa sallama min bathni ummihi baraza râfi‘an tharfahu ilas-samâ’i, mu’miyan bidzâlikar-raf‘i ilâ anna lahu syarafan ‘alâ majduhu wa samâ, wa kâna waqtu maulidi sayyidil-kaunaini, minasy-syuhûri syahru rabî‘il-awwali wa minal-ayyâmi yaumal-itsnaini, wa maudli‘u wilâdatihi wa qabrihi bil-ḫaramain, wa qad warada annahu shallallâḫu ‘alaihi wa sallama wulida makhtûnan makḫûlan maqthû‘as-surrati, tawallat dzâlika lisyarafihi ‘indallâḫi aidil-qudrati, wa ma‘a burûzihi ilâ hâdzal-‘âlami dhahara minal-‘ajâ’ibi mâ yadullu ‘alâ annahu asyraful-makhlûqîna wa afdlalul-ḫabâ’ib, faqad warada ‘an ‘abdir-raḫmâni-bni ‘aufin ‘an ummihisy-syafâ’i radliyallâhu ‘anhumâ, qâlat lammâ waladat âminatu radliyallâhu ‘anhâ rasûlallâhi shallallâhu ‘alaihi wa sallama waqa‘a ‘alâ yadayya fastahalla fasami‘tu qâ’ilan yaqûlu raḫimakallâhu au raḫimaka rabbuka, qâlatisy-syafâ’u fa’adlâ’a lahu mâ bainal-masyriqi wal-maghribi, ḫattâ nadhartu ilâ ba‘dli qushûrir-rûmi, qâlat tsumma albastuhu wa adlja‘tuhu falam ansyab ‘an ghasyiyatnî dhulmatun wa ra‘bun wa qusya‘rîratun ‘an yamînî, fasami‘tu qâ’ilan yaqûlu aina dzahabta bihi qâla ilal-maghribi, wa asfara dzâlika ‘annî, tsumma ‘âwadanîr-ru‘bu wadh-dhulmatu wal-qusya‘rîratu ‘an yasârî, fasami‘tu qâ’ilan yaqûlu aina dzahabta bihi qâla ilal-masyriqi, qâlat falam yazâlil-ḫaditsu minnî ‘alâ bâlin ḫattâb-ta‘atsahullâḫu, fakuntu min awwalin-nâsi islâman, wa kam tarjamtis-sunnatu min ‘adhîmil-mu‘jizâti, wa bâhiril-âyâtil-bayyinâti, bimâ yaqdlî bi‘adhîmi syarafihi ‘inda maulâhu, wa anna ‘aina ‘inâyatihi fî kulli ḫînin tar‘âhu. wa annahul-hâdî ilash-shirâtil-mustaqîm.",
        translation:
          "Dan pada saat Nabi ﷺ dilahirkan ibunya. la lahir seraya menunjukkan pandangan ke arah langit. Bagai isyarat ia beroleh kemuliaan. Serta kehormatan yang tinggi menjulang. Adapun Maulid-nya hari Senin bulan Rabi’ul Awwal. Tempat kelahiran serta makamnya di Al-Haramain. Dan telah diriwayatkan bahwa beliau dilahirkan. Dalam keadaan telah terkhitan. Bermata bagaikan bercelak. Tali pusatnya telah terpotong bersih. Semua itu terlaksana dengan kuasa qudrah llahi. Berkat keluhuran kedudukannya, di sisi Tuhannya. Dan bersamaan dengan waktu kelahirannya. Tampak beberapa keajaiban. Mambuktikan bahwa ia insan termulia. Di antara semua makhluk. Paling utama di antara yang dikasihi Allah. Sebagaimana diriwayatkan Abdurrahman bin Auf dari ibunya bernama Syaffaa’ (semoga Allah meridhai keduanya), Pada saat Rasulullah ﷺ dilahirkan oleh Aminah. Ia kusambut dengan kedua telapak tanganku. Dan terdengar tangisnya pertama kali. Lalu kudengar suara berkata, ‘Semoga rahmat Allah atas dirimu.’ Dan aku pun menyaksikan cahaya benderang di hadapannya. Menerangi timur dan barat. Hlngga aku dapat melihat. Sebagian gedung-gedung bangsa Rum. Lalu kubalut ia dalam pakaiannya dan kutidurkan. Namun tiba-tiba kegelapan dan ketakutan. Datang meliputi diriku dari kananku. Sehinggaku menggigil karenanya. Dan kudengar suara bertanya, ‘Ke mana ia kau bawa pergi?’. ‘Ke barat!’ jawab suara lainnya. Lalu perasaan itu menghilang dari diriku. Namun sejenak kemudian kembali lagi. Kegelapan dan ketakutan meliputi diriku. Datang dari sebelah kiri. Hingga tubuhku menggigil karengnya. Dan kudengar lagi suara bertanya, ‘Ke mana ia kau bawa pergi?’. ‘Ke timur!’ jawab suara lainnya. Peristiwa itu melekat dalam pikiranku. Sampai tiba saat beliau menjadi utusan Allah. Maka aku pun termasuk di antara orang-orang pertama. Yang mengikutinya dalam lslam… Dan betapa banyak riwayat hidupnya. Mencatat mu’jizat-mu’jizat besar. Serta bukti-bukti gemilang tentang kenabiannya. Yang semuanya menunjukkan tinggi kedudukannya di sisi Tuhannya. Dan bahwa inayah Allah. Di setiap saat menjaganya. Dan bahwasanya dialah sebaik penunjuk. Yang menunjukkan jalan yang lurus.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi ",
      },
    ],

    //Halaman 11
    [
      {
        translation:
          "Pasal 11 : TSUMMA INNAHU SALLALLAHU ALAIHI WASSALAM BA'DA AN HAKAMAT AL-QUDROH",
      },
      {
        arabic:
          "ثُمَّ إِنَّهُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ بَعْدَ أَنْ حَكَمَتِ الْقُدْرَةُ بِظُهُوْرِه. وَانْتَشَرَتْ فِي الْأَكْوَانِ لَوَامِعُ نُوْرِه. تَسَابَقَتْ إِلَى رَضَاعِهِ الْمُرْضِعَات. وَتَوَفَّرَتْ رَغَبَاتُ أَهْلِ الْوُجُوْدِ فِي حَضَانَةِ هٰذِهِ الذَّات. فَنَفَذَ الْحُكْمُ مِنَ الْحَضْرَةِ الْعَظِيْمَة. بِوَاسِطَةِ السَّوَابِقِ الْقَدِيْمَة. بِأَنَّ الْأَوْلَى بِتَرْبِيَةِ هٰذَا الْحَبِيْبِ وَحَضَانَتِهِ السَّيِّدَةُ حَلِيْمَة. وَحِيْنَ لَاحَظَتْهُ عُيُوْنُهَا. وَبَرَزَ فِي شَأْنِهَا مِنْ أَسْرَارِ الْقُدْرَةِ الرَّبَّانِيَّةِ مَكْنُوْنُهَا. نَازَلَ قَلْبَهَا مِنَ الْفَرَحِ وَالسُّرُوْر. مَا دَلَّ عَلَى أَنَّ حَظَهَا مِنَ الْكَرَامَةِ عِنْدَ اللهِ حَظٌّ مَوْفُوْر. فَحَنَتْ عَلَيْهِ حُنُوَّ الْأُمَّهَاتِ عَلَى الْبَنِيْن. وَرَغِبَتْ فِي رَضَاعِهِ طَمَعًا فِي نَيْلِ بَرَكَاتِهِ الَّتِيْ شَمِلَتِ الْعَالَمِيْن. فَطَلَبَتْ مِنْ اُمِّهِ الْكَرِيْمَة. أَنْ تَتَوَلَّى رَضَاعَهُ وَحَضَانَتَهُ وَتَرْبِيَتَهُ بِالْعَيْنِ الرَّحِيْمَة. فَأَجَابَتْهَا بِالتَّلْبِيَةِ لِدَاعِيْهَا. لِمَا رَأَتْ مِنْ صِدْقِهَا فِيْ حُسْنِ التَّرْبِيَّةِ وَوُفُوْرِ دَوَاعِيْهَا. فَتَرَحَّلَتْ بِهِ إِلَى مَنَازِلِهَا مَسْرُوْرَة. وَهِيَ بِرِعَايَةِ اللهِ مَحْفُوْفَةٌ وَبِعَيْنِ عِنَايَتِهِ مَنْظُوْرَة. فَشَاهَدَتْ فِي طَرِيْقِهَا مِنْ غَرِيْبِ الْمُعْجِزَات. مَا دَلَّهَا عَلَى أَنَّهُ أَشْرَفُ الْمَخْلُوْقَات. فَقَدْ أَتَتْ وَشَارِفُهَا وَأَتَانُهَا ضَعِيْفَتَان. وَرَجَعَتْ وَهُمَا لِدَوَابِّ الْقَافِلَةِ يَسْبِقَان. وَقَدْ دَرَتِ الشَّارِفُ وَالشِّيَاهُ مِنَ الْأَلْبَان. بِمَا حَيَّرَ الْعُقُوْلَ وَالْأَذْهَان. وَبَقِيَ عِنْدَهَا فِيْ حَضَانَتِهَا وَزَوْجِهَا سَنَتَيْن. تَتَلَقَّى مِنْ بَرَكَاتِهِ وَعَجَائِبِ مُعْجِزَاتِهِ مَا تَقَرُّ بِهِ الْعَيْن. وَتَنْتَشِرُ أَسْرَارُهُ فِي الْكَوْنَيْن. حَتَّى وَاجَهَـتْهُ مَلَائِكَةُ التَّخْصِيْصِ وَالْإِكْرَام. بِالشَّرَفِ الَّذِيْ عَمَّتْ بَرَكَتُهُ الْأَنَام. وَهُوَ يَرْعَى الْأَغْنَام. فَاضْجَعُوْهُ عَلَى الْأَرْضِ إِضْجَاعَ تَشْرِيْفِ. وَشَقُّوْا بَطْنَهُ شَقًّا لَطِيْف. ثُمَّ أَخْرَجُوْا مِنْ قَلْبِهِ مَا أَخْرَجُوْهُ وَأَوْدَعُوْا فِيْهِ مِنْ أَسْرَارِ الْعِلْمِ وَالْحِكْمَةِ مَا أَوْدَعُوْه . وَمَا أَخْرَجَ الْأَمْلَاكُ مِنْ قَلْبِهِ أَذًى. وَلٰكِنَّهُمْ زَادُهُ طُهْرًا عَلَى طُهْرِ وَهُوَ مَعَ ذٰلِكَ فِي قُوَّةٍ وَثَبَات. يَتَصَفَّحُ مِنْ سُطُوْرِ الْقُدْرَةِ الْإِلٰهِيَّةِ بَاهِرَ الْأَيَات. فَبَلَغَ إِلَى مُرْضِعَتِهِ الصَّالِحَةِ الْعَفِيْفَة. مَا حَصَلَ عَلَى ذَاتِهِ الشَّرِيْفَة. فَتَخَوَّفَتْ عَلَيْهِ مِنْ حَادِثٍ تَخْشَاه. وَلَمْ تَدْرِ أَنَّهُ مُلَاحَظٌ بِالْمُلَاحَظَةِ التَّامَّةِ مِنْ مَوْلَاهُ. فَرَدَّتْهُ إِلَى اُمِّهِ وَهِيَ غَيْرُ سَخِيَّةٍ بِفِرَاقِه. وَلٰكِنْ لِمَا قَامَ مَعَهَا مِنْ حُزْنِ الْقَلْبِ عَلَيْهِ وَإِشْفَاقِه. وَهُوَ بِحَمْدِ اللهِ فِي حِصْنٍ مَانِعٍ وَمَقَامٍ كَرِيْم",
        latin:
          "Tsumma innahu shallallâhu ‘alaihi wa sallam ba‘da an ḫakamatil-qudratu bidhuhûrihi, wa antasyarat fil-akwâni lawâmi‘u nûrihi, tasâbaqat ilâ radlâ‘ihil-murdli‘âti, wa tawaffarat raghabâtu ahlil-wujûdi fî ḫadlânati hâdzihidz-dzât, fanafadzal-ḫukmu minal-ḫadlratil-‘adhîmat, biwâsithatis-sawâbiqil-qadîmati, biannal-aula bitarbiyati hâdzal-ḫabîbi wa ḫadlânatihis-sayyidatu ḫalîmah, wa ḫîna lâ ḫadhat hu ‘uyûnuhâ, wa baraza fî sya’nihâ min asrâril-qudratir-rabbâniyyati maknûnuhâ, nâzala qalbahâ minal-faraḫî was-surûri, mâ dalla ‘alâ anna ḫadhahâ minal-karâmati ‘indallâhi ḫadhdhun maufûr, faḫanat ‘alaihi hunuwwal-ummahâti ‘alal-banîn, wa raghibat fî radlâ‘ihi thama‘an fî naili barakâtihil-latî syamilatil-‘âlamîn, fathalabat min ummihil-karîmati, an tatawallâ radlâ‘ahu wa ḫadlânatahu wa tarbiyatahu, bil-‘ainir-raḫîmah, fa ajâbat hâ bit-talbiyati lida‘îhâ, limâ ra’at min shidqihâ fî ḫusnit-tarbiyyati wa wufûri dawâ‘îhâ, fataraḫḫalat bihi ilâ manâzilihâ masrûrat, wa hiya biri‘âyatillâhi maḫfûfatun wa bi‘aini ‘inâyatihi mandhûrat, fasyâhadat fî tharîqihâ min gharîbil-mu‘jizâti, mâ dallahâ ‘alâ annahu asyraful-makhlûqâti, faqad atat wa syârifuhâ wa atânuhâ dla‘îfatân, wa raja‘at wa humâ lidawâbbil-qâfilati yasbiqân, wa qad daratisy-syârifu wasy-syiyâhu minal-albân. bimâ ḫayyaral-‘uqûla wal-adzhân, wa baqiya ‘indahâ fî ḫadlânatihâ wa zaujihâ sanatain, tatalaqqâ min barakâtihi wa ‘ajâ’ibi mu‘jizâtihi mâ taqarru bihil-‘aini, wa tantasyiru asrâruhu fil-kaunain, ḫattâ wâjahat hu malâ’ikatut-takhshîshi wal-ikrâm, bisy-syarafil-ladzî ‘ammat barakatuhul-anâm, wa huwa yar‘âl-aghnâm, fadlja‘ûhu ‘alal-ardli idljâ‘a tasyrîfi, wa syaqqû bathnahu syaqqan lathîf, tsumma akhrajû min qalbihi mâ akhrajûhu wa auda‘û fîhi min asrâril-‘ilmi wal-ḫikmati mâ auda‘ûhu, wa mâ akhrajal-amlâku min qalbihi adza, wa lâkinnahum zâduhu thuhran ‘alâ thuhri wa huwa ma‘a dzâlika fî quwwatin wa tsabât, yatashaffaḫu min suthûril-qudratil-ilâhiyyati bâhiral-ayâti, fabalagha ilâ murdli‘atihish-shâliḫatil-‘afîfati, mâ ḫashala ‘alâ dzâtihisy-syarîfati, fatakhawwafat ‘alaihi min ḫâditsin takhsyâhu, wa lam tadri annahu mulâḫadhun bil-mulâḫadhatit-tâmmati min maulâhu, faraddat hu ilâ ummihi wa hiya ghairu sakhiyyatin bifirâqihi, wa lâkin limâ qâma ma‘ahâ min ḫuznil-qalbi ‘alaihi wa isyfâqihi, wa huwa biḫamdillâhi fî ḫishnin mâni‘in wa maqâmin karîm.",
        translation:
          "Kemudian setelah sempurna kelahirannya, esuai yang dikehendaki qudrat llahi, dan nur cahayanya yang terang bertebaran di seluruh mayapada, berlombalah para inang pengasuh ingin menyusuinya. Makin besar pula keinginan penghuni bumi memeliharanya. Dan terlaksanalah kehendak Allah Mahaagung lagi Mahabijaksana, yang ditetapkan-Nya semenjak dahulu kala, bahwasanya Sayyidah Halimah paling utama, mendidik mengasuh insan tercinta ini. Maka tatkala kedua matanya memandangnya, terungkap rahasia qudrah Rabbaniyyah pada dirinya. Tercurahlah keriangan dan suka cita dalam hatinya Menunjukkan ia beroleh kehormatan di sisi Allah dalam kadar besar tiada terhingga Kasih.sayangnya segera tertuju pada bayi mulia itu, seperti nanya para ibu terhadap putra kandungnya. Dan besarlah keinginan untuk menyusuinya, dengan harapan memperoleh berkahnya, yang tersebar luas meliputi alam semesta. la pun mohon dari ibundanya yang mulia agar menyerahkan padanya. Tugas menyusui dan mengasuh, serta mendidiknya dengan cinta kasih sayang sepenuhnya. Maka diluluskan permohonan itu, setelah menyaksikan ketulusan ucapanya. Dengan segala tanda yang meyakinkannya, mengenai cara pemeliharaan yang sempurna. Segera Halimah membawanya pulang ke kampong dengan hati riang dan ceria diiring penjagaan Allah dan inayah-Nya yang terus-menerus menyertainya. Dalam perjalanan pulang itu, la menyaksikan berbagai mu’jizat yang mengherankan, dan membuatnya bertambah yakin betapa besar kemuliaan bayi yang bersamanya. Unta tua dan keledai miliknya yang lemah, tiada berdaya kini berlomba mengalahkan yang lain dalam kafilahnya. Air susu unta dan kambingnya, memancar deras dengan lebatnya, membuat takjub tiap orang melihatnya Dua tahun Nabi ﷺ tinggal bersama Halimah dan suaminya. Selama itu keduanya menikmati berkah dan mu’jizat-mu’jizatnya, yang mengagumkan setiap mata yang menyaksikan dan rahasia hikmahnya tersebar merata di mana-mana. Sampai pada suatu hari, ketika sedang menggembala domba datang kepadanya beberapa malaikat membawa penghormatan khusus baginya yang keberkahannya meliputi umat manusia. Mereka membaringkannya dengan hati-hati, lalu membelah dadanya dengan lemah lembut dan mengeluarkan apa yang mereka keluarkan, kemudian menyimpankan rahasia ilmu dan hikmah ke dalamnya Tiada suatu kotoran mengganggu yang dikeluarkan malaikat dari hatinya, tapi mereka hanya menambahkan kesucian di atas kesucian…. Dalam pada itu, beliau tetap dalam kekuatan dan ketabahan hati, menyaksikan tanda-tanda kebesaran kuasa llahi, yang dialami dalam dirinya sendiri Namun berita kejadian itu akhirnya sarnpai juga ke pendengaran Halimah yang baik hati, la pun gelisah dan khawatir akan bencana yang mungkin menimpa putranya itu. Tidak diketahuinya bahwa ia dijaga oleh Tuhannya dengan penjagaan amat sempurna Maka dibawanya pulang segera kepada bundanya, meski perpisahan itu berat terasa dalam hatinya, namun semata-mata disebabkan kegundahan dan kecemasan atas keselamatannya. Padahal ia sebenarnya, dengan karunia Allah, dalam benteng penjagaan yang kokoh kuat, serta kedudukan amat tinggi dan mulia.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi ",
      },
    ],

    //Halaman 12
    [
      {
        translation:
          "Pasal 12 : FA NASYA'A SALLALLAHU ALAIHI WASALLAMA ALA AKMALIL AWSAF",
      },
      {
        arabic:
          "فَنَشَأَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ عَلَى أَكْمَلِ الْأَوْصَاف. يَحُفُّهُ مِنَ اللهِ جَمِيْلُ الرِّعَايَةِ وَغَامِرُ الْأَلْطَاف. فَكَانَ يَشِبُّ فِي الْيَوْمِ شَبَابَ الصَّبِيِّ فيِ الشَّهْرِ. وَيَظْهَرُ عَلَيْهِ فِي صِبَاهُ مِنْ شَرَفِ الْكَمَالِ مَا يَشْهَدُ لَهُ بِأَنَّهُ سَيِّدُ وَلَدِ آدَمَ وَلَا فَخْر. وَلَمْ يَزَلْ وَأَنْجُمُ سُعُوْدِهِ طَالِعَة. وَالْكَائِنَاتُ لِعَهْدِهِ حَافِظَةٌ وَلِأَمْرِهِ طَائِعَة. فَمَا نَفَثَ عَلَى مَرِيْضٍ إِلَّا شَفَاهُ الله. وَلَاتَوَجَّهَ فِي غَيْثٍ إِلَّا وَأَنْزَلَهُ مَوْلَاه. حَتَّى بَلَغَ مِنَ الْعُمْرِ أَشُدَّه. وَمَضَتْ لَهُ مِنْ سِنِّ الشَّبَابِ وَالْكُهُوْلَةِ مُدَّة. فَاجَأَتْهُ الْحَضْرَةُ الْاِلٰـهِيَّةُ بِمَا شَرَّفَتْهُ بِهِ وَحْدَه. فَنَزَلَ عَلَيْهِ الرُّوْحُ الْأَمِيْن. بِالْبُشْرَى مِنْ رَبِّ الْعَالَمِيْن. فَتَلَا عَلَيْهِ لِسَانُ الذِّكْرِ الْحَكِيْمِ شَاهِدَ ﴿وَاِنَّكَ لَتُلَقَّى الْقُرْآنَ مِنْ لَدُنْ حَكِيْمٍ عَلِيْمٍ﴾ فَكَانَ أَوَّلَ مَا نَزَلَ عَلَيْهِ مِنْ تِلْكَ الْحَضْرَةِ مِنْ جَوَامِعِ الْحِكَم. قَوْلُهُ تَعَالَى : ﴿اِقْرَأ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَ. خَلَقَ الْإِنْسَانَ مِنْ عَلَقَ. اِقْرَأْ وَرَبُّكَ الْأَكْرَمُ. اَلَّذِيْ عَلَّمَ بِالْقَلَمِ. عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَم﴾ فَمَا أَعْظَمَهَا مِنْ بِشَارَةٍ أَوْصَلَتْهَا يَدُ الْإِحْسَان. مِنْ حَضْرَةِ الْاِمْتِنَان. إِلَى هٰذَا الْإِنْسَان. وَأَيَّدَتْهَا بِشَارَةُ ﴿اَلرَّحْمَنُ عَلَّمَ الْقُرْآنَ. خَلَقَ الْاِنْسَانَ عَلَّمَهُ الْبَيَانَ﴾ وَلَاشَكَّ أَنَّهُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ هُوَ الْإِنْسَانُ الْمَقْصُوْدُ بِهٰذَا التَّعْلِيْم. مِنْ حَضْرَةِالرَّحْمٰنِ الرَّحِيْم",
        latin:
          "Fanasyâ’a shallallâhu ‘alaihi wa sallama ‘alâ akmalil-aushâfi, yaḫuffuhu minallâhi jamîlur-ri‘âyati wa ghâmirul-althâfi, fakâna yasyibbu fil-yaumi syabâbash-shabiyyi fisy-syahri, wa yadhharu ‘alaihi fî shibâhu min syarafil-kamâli mâ yasyhadu lahu bi annahu sayyidu waladi âdama wa lâ fakhr. Wa lam yazal wa anjumu su‘ûdihi thâli‘ah, wal-kâ’inâtu li‘ahdihi ḫafidhatun wa liamrihi thâ‘iah, famâ nafatsa ‘alâ marîdlin illâ syafâhullâhu, wa lâ tawajjaha fî ghaitsin illâ wa anzalahu maulâhu, ḫattâ balagha minal-‘umri asyuddahu, wa madlat lahu min sinnisy-syabâbi wal-kuhûlati muddati, faja’at hul-ḫadlratul-ilâhiyyatu bimâ syarrafat hu bihi waḫdahu, fanazala ‘alaihir-rûhul-amîn, bil-busyrâ min rabbil-‘âlamîna, fatalâ ‘alaihi lisânudz-dzikril-ḫakîmi syâhid ﴾wa innaka latulaqqâl-qur’âna min ladun ḫakîmin ‘alîm ﴿ fakâna awwala mâ nazala ‘alaihi min tilkal-ḫadlrati min jawâmi‘il-ḫikam. qauluhu ta‘âlâ: ﴾iqra bismi rabbiklal-ladzî khalaqa, khalaqal-insâna min ‘alaq, iqra wa rabbukal-akram, alladzî ‘allama bil-qalam, ‘allamal-insâna mâ lam ya‘lam﴿, famâ a‘dhamahâ min bisyâratin aushalat hâ yadul-iḫsân, min ḫadlratil-imtinân, ilâ hâdzal-insân, wa ayyadat hâ bisyâratu ﴾ar-raḫmanu ‘allamal-qur’âna, khalaqal-insâna ‘allamahul-bayâna﴿ wa lâ syakka annahu shallallâhu ‘alaihi wa sallama huwal-insânul-maqshûdu bihâdzat-ta‘lim, min ḫadlratir-raḫmânir-raḫîm. ",
        translation:
          "Rasulullah ﷺ tumbuh dengan sifat-sifat paling sempurna, dikelilingi selalu pemeliharaan Allah Maha Kuasa serta diliputi rahmat-Nya berlimpah-limpah. la tumbuh dalam sehari , seperti bayi lain dalam sebulan. Keluhuran pribadinya tampak sempurna sejak usianya yang amat muda menjadi saksi bahwa dialah penghulu keturunan Adam semuanya. Bintang-bintang kemujuran selalu bersamanya. Demikian pula segenap benda di alam ini menampakkan kesetiaan dan kepatuhan padanya. Tiap kali ia “meniupi” penderita sakit, niscaya Allah melimpahkan kesembuhan baginya. Tiap kali berdoa memohon hujan, niscaya Allah selalu menurunkannya. Demikian keadaannya sehari-hari, sampai ia telah melewati masa mudanya dan mencapai usia dewasa, saat itulah Allah mengkhususkannya, dengan kemuliaan hanya baginya seorang. Dan turunlah Jibril Ar-Ruhul Amin membawa kabar gembira dari Tuhan Seru Sekalian Alam, membacakan baginya ayat-ayat suci Al Quran Al-Hakim, “,…Dan sesungguhnya kepadamu telah diberikan Al-Qur’an dari hadirat Allah, yang Maha Bijaksana lagi Maha Mengetahui.” Adapun mula pertama diturunkan kepadanya, di antara ayat-ayat suci padat berisi, yang berasal dari hadirat Allah SWT ialah, “Bacalah dengan nama Tuhanmu, Yang mencipta manusia dari segumpal darah. Bacalah! Tuhanmulah yang paling mulia, Yang mengajar dengan kalam, mengajar manusia apa yang tidak ia tahu.” Oh… betapa agungnya kabar gembira ini! Karunia sempurna datang dari Allah Maha Pengasih lagi Maha pemurah ditujukan kepada insan mulia ini. Lalu dikuatkan lagi dengan firman-Nya, “Ar-Rahman, Tuhan Maha Pemurah, mengajarkan Al-Qur’an, mencipta insan, lalu diajarinya fasih perkataan…” Dan tiada syak lagi tentunya beliaulah insan yang dimaksud dengan pemberian ajaran itu darl hadirat Allah, yang Maha Rahman dan Rahim",
      },

      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi ",
      },
    ],

    //Halaman 13
    [
      {
        translation: "Pasal 13 : TSUMMA INNAHU BA'DA MA NAZALA ALAIHIL WAHYU",
      },
      {
        arabic:
          "ثُمَّ إِنَّهُ بَعْدَ مَا نَزَلَ عَلَيْهِ الْوَحْيُ الْبَلِيْغ. تَحَمَّلْ أَعْبَاءَ الدَّعْوَةِ وَالتَّبْلِيْغ. فَدَعَا الْخَلْقَ إِلَى اللهِ عَلَى بَصِيْرَةِ. فَأَجَابَهُ بِالْإِذْعَانِ مَنْ كَانَتْ لَهُ بَصِيْرَةٌ مُنِيْرَة. وَهِيَ إِجَابَةٌ سَبَقَتْ بِهَا الْأَقْضِيَةُ وَالْأَقْدَار. تَشَرَّفَ بِالسَّبْقِ إِلَيْهَا الْمُهَاجِرُوْنَ وَالْأَنْصَار. وَقَدْ أَكْمَلَ اللهُ بِهِمَّةِ هٰذَا الْحَبِيْبِ وَأَصْحَابِهِ هٰذَا الدِّيْن. وَأَكْبَتَ بِشِدَّةِ بَأْسِهِمْ قُلُوْبَ الْكَافِرِيْنَ وَالْمُلْحِدِيْن. فَظَهَرَ عَلَى يَدَيْهِ مِنْ عَظِيْمِ الْمُعْجِزَات. مَا يَدُلُّ عَلَى أَنَّهُ أَشْرَفُ أَهْلِ الْأَرْضِ وَالسَّمَوَات. فَمِنْهَا تَكْثِيْرُ الْقَلِيْل. وَبُرْءُ الْعَلِيْل. وَتَسْلِيْمُ الْحَجَر. وَطَاعَةُ الشَّجَر. وَانْشِقَاقُ الْقَمَر. وَالْإِخْبَارُ بِالْمُغَيَّبَات. وَحَنِيْنُ الْجِذْعِ الَّذِيْ هُوَ مِنْ خَوَارِقِ الْعَادَات. وَشَهَادَةُ الضَّبِّ لَهُ وَالْغَزَالَة. بِالنُّبُوَّةِ وَالرِّسَالَة. إِلَى غَيْرِ ذٰلِكَ مِنْ بَاهِرِ الْآيَات. وَغَرَائِبِ الْمُعْجِزَات. اَلَّتِيْ أَيَّدَهُ اللهُ بِهَا فِيْ رِسَالَتِه. وَخَصَّصَهُ بِهَا مِنْ بَيْنِ بَرِيَّتِه. وَقَدْ تَقَدَّمَتْ لَهُ قَبْلَ النُّبُوَّةِ إِرْهَاصَات. هِيَ عَلَى نُبُوَّتِهِ وَرِسَالَتِهِ مِنْ أَقْوَى الْعَلَامَات. وَمَعَ ظُهُوْرِهَا وَانْتِشَارِهَا سَعِدَ بِهَا الصَّادِقُوْنَ مِنَ الْمُؤْمِنِيْن. وَشَقِيَ بِهَا الْمُكَذِّبُوْنَ مِنَ الْكَافِرِيْنَ وَالْمُنَافِقِيْن. وَتَلَقَّاهَا بِالتَّصْدِيْقِ وَالتَّسْلِيْم. كُلُّ ذِيْ قَلْبٍ سَلِيْم",
        latin:
          " Tsumma innahu ba‘da mâ nazzala ‘alaihil-waḫyul-balîgh, taḫammal a‘bâ’ad-da‘wati wat-tabligh, fada‘al-khalqa ilallâhi ‘alâ bashîrah, fa ajâbahu bil-idz‘âni man kânat lahu bashîratun munîrah, wa hiya ijâbatun sabaqat bihal-aqdliyatu wal-aqdâr, tasyarrafa bis-sabqi ilaihal-muhâjirûna wal-anshâr, wa qad akmalallâhu bihimmati hâdzal-ḫabîbi wa ashḫâbihi hâdzad-dîn, wa akbata bisyiddati ba’sihim qulûbal-kâfirîna wal-mulḫidîn, fadhahara ‘alâ yadaihi min ‘adhîmil-mu‘jizâti, mâ yadullu ‘alâ annahu asyrafu ahlil-ardli was-samawâti, faminhâ taktsîrul-qalîl, wa bur’ul-‘alîl, wa taslîmul-ḫajar, wa thâ‘atusy-syajar, wamsyiqâqul-qamar, wal-ikhbâru bil-mughayyabât, wa ḫanînul-jadz‘il-ladzî huwa min khawâriqil-‘âdât, wa syahâdatudl-dlabbi lahu wal-ghazâlah, bin-nubuwwati war-risâlah, ilâ ghairi dzâlika min bâhiril-âyâti, wa gharâ’ibil-mu’jizâti, allatî ayyadahullâhu bihâ fî risâlatih, wa khashshahu bihâ min baini bariyyatih, wa qad taqaddamat lahu qablan-nubuwwati irhâshâti, hiya ‘alâ nubuwwatihi wa risâlatihi min aqwal-‘alâmâti, wa ma‘a dhuhûrihâ wantisyârihâ sa‘ida bihash-shâdiqûna minal-mu’minîna, wa syaqiya bihal-mukadzdzibûna minal-kâfirîna wal-munâfiqîna, wa talaqqâhâ bit-tashdiîqi wat-taslîmi, kullu dzî qalbin salîm.",
        translation:
          "Adapun Nabi ﷺ, setelah kepadanya wahyu suci diturunkan, segera bertindak memikul beban dakwah dan tabligh, menyeru manusia ke jalan Allah dengan penuh kesadaran. Yang diikuti dengan tulus dan patuh oleh mereka yang berpikiran terang di antara kaum Muhajirin dan Anshar, yang beroleh kehormatan tertinggi, mendahului yang lain memenuhi seruan ini, sesuai yang tercantum dalam takdir llahi. Dan dengan tekad kuat Nabi tercinta ini, demikian pula para sahabatnya, Allah berkenan menyempurnakan agama ini. Dan dengan kepahlawanan mereka pula, Allah menumpas habis kaum kafir dan ingkar. Banyak sekali mu’jizat hebat berkaitan dengan dirinya membuktikan bahwa dialah yang termulia di antara penghuni bumi dan langit seluruhnya. Di antaranya memperbanyak yang sedikit kesembuhan si Penderita sakit, ucapan salam terdengar dari seonggok batu, ketaatan pohon kepadanya, terbelahnya buah purnama, pemberitahuan tentang hal-hal ghaib, rintihan pokok kurma yang rindu padanya, yang kesemuanya itu jauh menembus kebiasaan yang berlaku. Demikian pula biawak dan menjangan, memberi kesaksian tentang kenabian dan kerasulannya. Dan masih banyak lagi bukti gemilang rerta mu’jizat menakjubkan yang dijadikan Allah sebagai pendukung risalahnya. Dan hanya baginya dikhususkan di antara semua makhluk-Nya Banyak pula tanda ghaib mendahului nubuwahnya . dan merupakan alamat terkuat bagi kenabian dan kerasulannya. Tersiarnya itu semua secara meluas, mendatangkan bahagia bagi kaum beriman yang tulus, namun menambah malang si kafir ataupun munafik. Dan tiada satu pun orang berpikiran sehat kecuali pasti menerimanya dengan keyakinan serta penyerahan sepenuhnya..",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi ",
      },
    ],

    //Halaman 14
    [
      {
        translation:
          "Pasal 14 : WA MINASY SYARAF ALLADZI IKHTASSA BIHI ASYRAFA RASUL",
      },

      {
        arabic:
          "وِمِنَ الشَّرَفِ الَّذِيْ اخْتَصَّ اللهُ بِهِ أَشْرَفَ رَسُوْل. مِعْرَاجُهُ إِلَى حَضْرَةِ اللهِ الْبَّرِ الْوَصُوْل. وَظُهُوْرُ اٰيَاتِ اللهِ الْبَاهِرَةِ فِي ذٰلِكَ الْمِعْرَاج. وَتَشَرُّفُ السَّمَوَاتِ وَمَنْ فَوْقَهُنَّ بِإِشْرَاقِ نُوْرِ ذٰلِكَ السِّرَاج. فَقَدْ عَرَجَ الْحَبِيْبُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَمَعَهُ الْأَمِيْنُ جِبْرِيْل. إِلَى حَضْرَةِ الْمَلِكِ الْجَلِيْل. مَعَ التَّشْرِيْفِ وَالتَّبْجِيْل. فَمَا مِنْ سَمَآءٍ وَلَجَهَا إِلَّا وَبَادَرَهُ أَهْلُهَا بِالتَّرْحِيْبِ وَالتَّكْرِيْمِ وَالتَّأْهِيْل. وَكُلُّ رَسُوْلٍ مَرَّ عَلَيْهِ. بَشَّرَهُ بِمَا عَرَفَهُ مِنْ حَقِّهِ عِنْدَ اللهِ وَشَرِيْفِ مَنْزِلَتِهِ لَدَيْه. حَتَّى جَاوَزَ السَّبْعَ الطِّبَاق. وَوَصَلَ إِلَى حَضْرَةِ الْإِطْلَاق. نَازَلَتْهُ مِنَ الْحَضْرَةِ الْإِلٰـهِيَّة. غَوَامِرُ النَّفَحَاتِ الْقُرْبِيَّة. وَوَاجَـهَـتْهُ بِالتَّحِيَّات. وَأَكْرَمَتْهُ بِجَزِيْلِ الْعَطِيَّات. وَأَوْلَتْهُ جَمِيْلَ الْهِبَات. وَنَادَتْهُ بِشَرِيْفِ التَّسْلِيْمَات. بَعْدَ أَنْ أَثْنَى عَلَى تِلْكَ الْحَضْرَةِ بِالتَّحِيَّاتِ الْمُبَارَكَاتِ الصَّلَوَاتِ الطَّيِّبَات. فَيَا لَهَا مِنْ نَفَحَاتٍ غَامِرَات. وَتَجَلِّيَاتٍ عَالِيَاتٍ فِي حَضْرَاتٍ بَاهِرَات. تَشْهَدُ فِيْهَا الذَّاتُ لِلذَّات. وَتَتَلَّقَى عَوَاطِفَ الرَّحْمَات. وَسَوَابِغَ الْفُيُوْضَاتِ بِأَيْدِيْ الْخُضُوْعِ وَالْإِخْبَات",
        latin:
          " Wa minasy-syarafil-ladzîkhtashshallâhu bihi asyrafa rasûl, mi‘râjuhu ilâ ḫadlratillâhil-barril-washûl, wa dhuhûru âyâtillâhil-bâhirati fî dzâlikal-mi‘râji, wa tasyarrufus-samawâti wa man fauqahunna bi isyrâqi nûri dzâlikas-sirâj, faqad ‘arajal-ḫabîbu shallallâhu ‘alaihi wa sallama wa ma‘ahul-amînu jibrîl, ilâ ḫadlratil-malikil-jalîl, ma‘at-tasyrîfi wat-tabjîl. famâ min samâ’in walajahâ illâ wa bâradahu ahluhâ bit-tarḫîbi wat-takrîmi wat-ta’hîli, wa kullu rasûlin marra ‘alaihi, basysyarahu bimâ ‘arafahu min ḫaqqihi ‘indallâhi wa syarîfi manzilatihi ladaih, ḫattâ jâwazas-sab‘ath-thibâq, wa washala ilâ ḫadlratil-ithlâq, nâzalat hu minal-ḫadlratil-ilâhiyyah, ghawâmirun-nafaḫâtil-qurbiyyah, wa wâjahat hu bit-taḫiyyâti, wa akramat hu bijazîlil-‘athiyyât, wa aulat hu jamîlal-hibât, wa nâdat hu bisyarîfit-taslîmâti, ba‘da an atsnâ ‘alâ tilkal-ḫadlrati bittaḫiyyâtil-mubârakâtish-shalawâtith-thayyibâti, fayâ lahâ min nafaḫâtin ghâmirât, wa tajalliyâtin ‘âliyâtin fî ḫadlratin bâhirât, tasyhadu fîhâdz-dzâtu lidz-dzât, wa tatallaqqâ ‘awâthifar-râhmât, wa sawâbighal-fuyûdlâti bi aidil-khudlû‘i wal-ikhbât.",
        translation:
          "Dan di antara kehormatan yang dikhususkan bagi Rasul termulia ini. Mi’rajnya ke hadirat Allah Maha Penyayang, Yang Kebaikan-Nya selalu melimpah, Yang Karunia-Nya selalu tercurah, serta adanya bukti-bukti kuasa-Nya yang gemilang, yang dialami pada peristiwa itu. Dan kemuliaan bagi langit-langit serta penghuninya, dengan terbitnya nur pelita” itu bagi mereka, maka Rasulullah ﷺ mengarungi angkasa bersama Jibril Al-Amin menuju hadirat Allah Al-Malikul Jalil, diiringi segala kemuliaan dan penghormatan. Tiada penghuni yang dimasukinya, kecuali segera menyongsong kedatangannya, dengan penghormatan dan berbagai ucapan selamat dating. Setiap rasul yang dilewati menyampaikan kabar gembira yang diketahuinya, tentang tinggi kedudukannya di sisi Tuhannya. Sampai ia melampaui ke tujuh lapis langit, mencapai hadirat mutlak tiada berbatas. Di sana ia diliputi belaian karunia lembut, penuh keakraban yang datang dari hadirat llahi, meyambutnya dengan ragam ucapan selamat, memuliakannya dengan berbagai anugerah besar, melimpahkan padanya seindah-indah pemberian, dan memanggilnya dengan semulia-mulia salam, setelah ia sendiri menunjukkan puji-pujian ke hadirat llahi, “At-tahiyyatul mubarakatus shalawatut thayyibat...” Aduhai, betapa lembut belaian karunia yang diterimanya itu! Betapa indah pertemuan yang agung itu! Dalam hadirat serba gemilang, saat dzat (Rasul) memberi kesaksiannya bagi keagungan Dzat (Allah) Tuhannya. Seraya merangkum rahmah llahiyyah penuh kasih saying serta anugerah-Nya yang melimpah ruah dalam suasana khusyu’ dan penyerahan diri kepada-Nya.",
      },
      {
        arabic:
          "رُتَبٌ تَسْقُطُ الْأَمَانِيُّ حَسْرَى دُوْنَهَا مَا وَرَآءَ هُنَّ وَرَآءُ",
        latin:
          " Rutabun tasquthul-amâniyyu ḫasrâ dûnahâ mâ warâ'a hunna warâ'u",
        translation:
          "Itulah tingkatan yang memaksa setiap idaman jatuh berderai memendam sesal dan putus asa demi melihatnya amat tinggi. Tinggi sekali dari segala jangkauan.",
      },
      {
        arabic:
          "عَقَلَ الْحَبِيْبُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فِي تِلْكَ الْحَضْرَةِ مِنْ سِرِّهَا مَا عَقَل. وَاتَّصَلَ مِنْ عِلْمِهَا بِمَا اتَّصَل. ﴿ فَاَوْحٰىٓ اِلٰى عَبْدِهٖ مَآ اَوْحٰىۗ مَا كَذَبَ الْفُؤَادُ مَا رَاٰى﴾. فَمَا هِيَ إِلَّا مِنْحَةٌ خَصَّصَتْ بِهَا حَضْرَةُ الْاِمْتِنَان. هٰذَا الْإِنْسَان. وَأَوْلَتْهُ مِنْ عَوَاطِفِهَا الرَّحِيْمَةِ مَا يَعْجِزُ عَنْ حَمْلِهِ الثَّقَلَان. وَتِلْكَ مَوَاهِبُ لَا يَجْسُرُ الْقَلَمُ عَلَى شَرْحِ حَقَائِقِهَا. وَلَا تَسْتَطِيْعُ الْأَلْسُنُ أَنْ تُعْرِبَ عَنْ خَفِيِّ دَقَائِقِهَا. خَصَّصَتْ بِهَا الْحَضْرَةُ الْوَاسِعَة. هٰذِهِ الْعَيْنَ النَّاظِرَةَ وَالْأُذُنَ السَّامِعَة. فَلَا يَطْمَعُ طَامِعٌ فِي الْإِطِّلَاعٍ عَلَى مَسْتُوْرِهَا. وَالْإِحَاطَةِ بِشُهُوْدِ نُوْرِهَا. فَإِنَّهَا حَضْرَةٌ جَلَّتْ عَنْ نَظَرِ النَّاظِرِيْن. وَرُتْبَةٌ عَزَّتْ عَلَى غَيْرِ سَيِّدِ الْمُرْسَلِيْن. فَهَنِيْئًا لِلْحَضْرَةِ الْمُحَمَّدِيَّة. مَا وَاجَهَهَا مِنْ عَطَايَا الْحَضْرَةِ الْأَحَدِيَّة. وَبُلُوْغُهَا إِلَى هٰذَا الْمَقَامِ الْعَظِيْم‘",
        latin:
          "Aqalal-ḫabîbu shalallâhu ‘alaihi wasallama fî tilkal-ḫadlrati min sirrihâ mâ ‘aqala, wattashala min ‘ilmihâ bimât-tashala. ﴾Fa auḫâ ilâ ‘abdihi mâ ûḫâ, mâ kadzabal-fu’âdu mâ râ`a﴿ famâ hiya illâ minḫâtun khashshashat bihâ ḫadlratul-imtinân, hâdzal-insân, wa aulat hu min ‘awâthifihâr-raḫîmati mâ ya‘jizu ‘an ḫamlihits-tsaqalân, wa tilka mawâhibu lâ yajsurul-qalamu ‘alâ syarḫî ḫaqâ’iqihâ, wa lâ tastathî‘ul-alsunu an tu‘riba ‘an khafiyyi daqâ’iqihâ, khashshashat bihal-ḫadlratul-wâsi‘ah, hâdzihil-‘ainan-nâdhirata wal-udzunas-sâmi‘ah, falâ yathma‘u thâmi‘un fil-iththilâ‘i ‘alâ mastûrihâ, wal-iḫâthati bisyuhûdi nûrihâ, fainnahâ ḫadlratun jallat ‘an nâdharîn-nâdhirîn, wa rutbatun ‘azzat ‘alâ ghairi sayyidil-mursalîn, fahanî’an lil-ḫadlratil-muḫammadiyyah, mâ wâjahahâ min ‘athâyal-ḫadlratil-aḫadiyyah, wa bulûghuhâ ilâ hâdzal-maqâmil-‘adhîm. ",
        translation:
          "Banyak sekali pengalaman halus melekat pada jiwa Rasul, yang diperolehnya dalam perjumpaan ketika itu, serta ilmu dan pengetahuan yang dicapainya. Tatkala… Allah mewahyukan kepada hamba-Nya, apa yang diwahyukan-Nya, dan tiada hati Rasul mendustakannya…. Itu semata-mata karunia hadirat Maha Pengasih yang dikhususkan bagi insan ini seorang. Simpati penuh kasih sayang ditujukan kepadanya. Tiada mungkin jin dan manusia mana pun merangkumnya. Itulah pemberian teramat istimewa. Pena siapa pun tak’kan berani mencoba menguraikan tentang hakikatnya. Lidah pun tak’kan mampu mengungkapkan. Makna halus yang tersembunyi padanya. Hadirat Allah yang maha-luas mengkhususkannya. Hanya bagi pandangan Nabi yang menatap dengan saksama. Dan telinganya yang mendengar dengan cermat. Maka tiada keinginan seseorang patut mengidamkan. Tersingkap baginya rahasianya yang tersembunyi. Atau meliput cahaya nurnya dengan sempurna. Karena itu adalah hadirat terlalu agung, untuk bisa dilihat para pengamat. Dan tingkatan itu tiada mungkin tercapai kecuali bagi penghulu para rasul Maka sungguh berbahagia hadirat Muhammad, menerima anugerah agung berlimpah, berdatangan dari hadirat Allah Yang Maha Esa. Aduhai, betapa beruntungnya ia mencapai kedudukan setinggi ini!",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi ",
      },
    ],

    //Halaman 15
    [
      {
        translation:
          "Pasal 15 : WA HAITSU TASYARRAFATIL ASMA'U BI AKHBAR HADZAL HABIB ",
      },
      {
        arabic:
          "وَحَيْثُ تَشَرَّفَتِ الْأَسْمَاعُ بِأَخْبَارِ هٰذَا الْحَبِيْبِ الْمَحْبُوْب. وَمَا حَصَلَ لَهُ مِنَ الْكَرَامَةِ فِي عَوَالِمِ الشَّهَادَةِ وَالْغُيُوْب. تَحَرَّكَتْ هِمَّةُ الْمُتَكَلِّمِ إِلَى نَشْرِ مَحَاسِنِ خَلْقِ هٰذَا السَّيِّدِ وَأَخْلَاقِه. لِيَعْرِفَ السَّامِعُ مَا أَكْرَمَهُ اللهُ بِهِ مِنَ الْوَصْفِ الْحَسَنِ وَالْخَلْقِ الْجَمِيْلِ الَّذِيْ خَصَّصَتْهُ بِهِ عِنَايَةُ خَلَّاقِه. فَلْيُقَابِلِ السَّامِعُ مَا اُمْلِيْهِ عَلَيْهِ مِنْ شَرِيْفِ الْأَخْلَاقِ بِأُذُنٍ وَاعِيَة. فَإِنَّهُ سَوْفَ يَجْمَعُهُ مِنْ أَوْصَافِ الْحَبِيْبِ عَلَى الرُّتْبَةِ الْعَالِيَة. فَلَيْسَ يُشَابِهُ هٰذَا السَّيِّدَ فِي خَلْقِهِ وَأَخْلَاقِهِ بَشَر. وَلَا يَقِفُ أَحَدٌ مِنْ أَسْرَارِ حِكْمَةِ اللهِ فِي خَلْقِهِ وَخُلُقِهِ عَلَى عَيْنٍ وَلَا أَثَر. فَإِنَّ الْعِنَايَةَ الْأَزَلِيَّة. طَبَعَتْهُ عَلَى أَخْلَاقٍ سَنِيَّة. وَأَقَامَتْهُ فِي صُوْرَةٍ حَسَنَةٍ بَدْرِيَّة. فَلَقَدْ كَانَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مَرْبُوْعَ الْقَامَة. أَبْيَضَ اللَّوْنِ مُشَرَّبًا بِحُمْرَه. وَاسِعَ الْجَبِيْنِ حَسَنَهُ شَعْرُهُ بَيْنَ الجُمَّةِ وَالْوَفْرَة. وَلَهُ الْاِعْتِدَالُ الْكَامِلُ فِي مَفَاصِلِهِ وَأَطْرَافِه. وَالْاِسْتِقَامَةُ الْكَامِلَةُ فِي مَحَاسِنِهِ وَأَوْصَافِه. لَمْ يَأْتِ بَشَرٌ عَلَى مِثْلِ خَلْقِه. فِي مَحَاسِنٍ نَظَرِهِ وَسَمْعِهِ وَنُطْقِه. قَدْ خَلَقَهُ اللهُ عَلَى أَجْمَلِ صُوْرَة. فِيْهَا جَمِيْعُ الْمَحَاسِنِ مَحْصُوْرَه. وَعَلَيْهَا مَقْصُوْرَة. إِذَا تَكَلَّمَ نَثَرَ مِنَ الْمَعَارِفِ وَالْعُلُوْمِ نَفَائِسَ الدُّرَر. وَلَقَدْ أُوْتِيَ مِنْ جَوَامِعِ الْكَلِمِ مَا عَجَزَ عَنِ الْإِتْيَانِ بِمِثْلِهِ مَصَاقِعُ الْبُلَغَاءِ مِنَ الْبَشَر. تَتَنَزَّهُ الْعُيُوْنُ فِي حَدَائِقِ مَحَاسِنِ جَمَالِه. فَلَا تَجِدُ مَخْلُوْقًا فِي الْوُجُوْدِ عَلَى مِثَالِه.",
        latin:
          "Wa haitsu tasyarrafatil-asmâ‘u bi’akhbâri hâdzal-ḫabîbil-maḫbûb, wa mâ ḫâshala lahu minal-karâmati fî ‘awâlimisy-syahâdati wal-ghuyûb, taḫarrakat himmatul-mutakallimi ila nasyri maḫasini khalqi hâdzas-sayyidi wa akhlâqihi, liya‘rifas-sâmi‘u mâ akramahullâhu bihi minal-washfil-ḫasani wal-khalqil-jamîlil-ladzî khashshashat hu bihi ‘inâyatu khallâqih, fal-yuqâbilis-sâmi‘u mâ umlîhi ‘alaihi min syarîfil-akhlâqi bi udzunin wâ‘iyah, fainnahu saufa yajma‘uhu min aushâfil-ḫabîbi ‘alar-rutbatil-‘âliyah, falaisa yusyâbihu hâdzas-sayyida fî khalqihi wa akhlâqihi basyar, wa lâ yaqifu aḫadun min asrâri ḫikmatillâhi fî khalqihi wa khuluqihi ‘alâ ‘ainin wa lâ atsar, fainnal-‘inâyatal-azaliyyah, thaba‘at hu ‘alâ akhlâqin saniyyah, wa aqâmathu fî shûratin ḫasanatin badriyyah, falaqad kâna shallallâhu ‘alaihi wa sallama marbû‘al-qâmah, abyadlal-launi musyarraban biḫumrah, wâsi’al-jabîni ḫasanahu sya‘ruhu bainal-jummati wal-wafrah, wa lahul-i‘tidâlul-kâmilu fî mafâshilihi wa athrâfihi, wal-istiqâmatul-kâmilatu fî maḫâsinihi wa aushâfih, lam ya’ti basyarun ‘ala mitsli khalqih, fî maḫasinin-nadharihi wasam‘ihi wa nuthqihi, qad khalaqahullâhu ‘alâ ajmali shûrah, fîhâ jamî‘ul-maḫâsini maḫshûrah, wa ‘alaihâ maqshûrah, idzâ takallama natsara minal-ma‘ârifi wal-‘ulûmi nafâ’isad-durâr, wa laqad ûtiya min jawâmi‘il-kalimi mâ ‘ajaza ‘anil-ityâni bimitslihi mashâqi‘ul-bulâghâ’i minal-basyar, tatanazzahul-‘uyûnu fî ḫadâ’iqi maḫâsini jamâlih, falâ tajidu makhlûqan fil-wujûdi ‘alâ mitsâlih.",
        translation:
          "Dan manakala telinga telah beroleh kehormatan, mendengarkan berita-berita, sekitar insan tercinta tersayang ini, sedang kemuliaan yang menyertainya. Dalam alam nyata ataupun yang ghaib, tergeraklah keinginan penulis, menyebut sebagian kesempurnaan pemimpin ini, dalam bentuk tubuh serta akhlaqnya, agar para pendengar dapat mengetahui kemuliaan yang dikaruniakan Allah atas dirinya, pada sifat-sifat indah dan perilaku menarik yang dikhususkan baginya oleh inayah Khaliqnya. Dan kini kuharap pendengar uraianku ini, mengikuti dengan penuh perhatian. Sifat-sifat luhur yang ‘kan kucatat baginya yang menempatkan insan mulia ini dalam kedudukan yang amat tinggi. Sebab tiada manusia mana pun bisa menyamai junjungan ini, dalam bentuk fisik dan perilakunya. Dan tiada seorang pun mampu menyelami rahasia hikmah Allah, yang tersembunyi dalam keindahan tubuh dan kesempurnaan akhlaqnya. Pemeliharaan Allah sejak semula telah mencetaknya dalam tabiat dan akhlaq luhur, serta membentuknya dengan rupa elok bagaikan bulan purnama. Beliau seorang berperawakan sedang. Warna kulitnya putih kemerah-merahan. Dahinya lebar serasi. Panjang rambutnya sampai batas telinga. Kedua lengan dan kaki serta persendian. Semuanya dalam bentuk dan ukuran sempurna. Mantap dalam keseluruhan keindahan, serta keserasian sifat-sifatnya. Tiada seorang pun menyamainya dalam kesempurnaan penglihatan, pendengaran, ataupun ucapannya. Sungguh Allah telah menciptakannya dalam bentuk terbaik. Padanya, segala keindahan terangkum dan terkhususkan. Bila ia berbicara, mutiara-mutiara ilmu dan hikmah ditaburkannya. Tiada seorang ahli khutbah yang ulung mampu membawakan ucapan rapi padat berisi seperti yang selalu diucapkannya. Bila mata bertamasya, dalam taman keelokannya yang mempesona. Tiada ‘kan menjumpainya di antara seluruh wujud. Makhluk mana pun memiliki sifat setara dengannya.",
      },

      {
        arabic:
          "سَيِّــــدٌ ضِـحْكُهُ تَبَسُّــمُ وَالْمَشْـــ ـيُ الْهُوَيْنَا وَالنَوْمُهُ الْإِغْفَاءُ",
        latin:
          "Sayyidun dliḫkuhu tabassumu wal masy yul-huwainâ wan-naumuhul-ighfâ'u",
        translation:
          "Dialah pemimpin yang setiap kali tertawa, cukup tersenyum dengan anggunnya. Dengan langkah tenang mantap ia berjalan. Bila tertldur hanya sekejap saja.",
      },
      {
        arabic:
          "مَا سِوَى الْخُلْقِهِ النَّسِيْمُ وَلَا غَيْـ ـرُ مُهَيَّاهُ الرَّوْضَةُ الْغَنَّاءُ",
        latin:
          "Mâ siwal-khulqihin-nasîmu wa lâ ghai ru muhayyâhur-raudlatul-ghannâ'u",
        translation:
          "Perilakunya lembut selembut angin sepoi nan sejuk. Wajahnya cerah secerah taman yang menyegarkan. Pribadinya perwujudan segala sifat luhur. Kasih sayang namun tegas dalam sikap. Kuat dalam tekadnya.",
      },
      {
        arabic:
          "رَحْمَــــةٌ كُلُّهُ وَحَـــــزْمٌ وَعَــــــزْمٌ وَوَقَارٌ وَعِصْمَةٌ وَحَيَاءُ",
        latin:
          "Raḫmatun kulluhu wa ḫazmun wa ‘azmun wa waqârun wa ‘ishmatun wa ḫayâ'un",
        translation:
          "Keanggunan, kesucian, serta rasa malu, mengiringi selalu, menghias gerak-geriknya.",
      },
      {
        arabic:
          "مُعْجِزُ القَوْلِ وَالْفِعَالِ كَرِيْمُ الْـ ــخَلْقِ وَالْخُلْقِ مُقْسِطٌ مِعْطَاءُ",
        latin:
          "Mu‘jizul-qauli wal-fi’âli karîmul khalqi wal-khulqi muqsithun mi‘thâ'u",
        translation:
          "Ucapan dan tindakannya teratur rapi. Sungguh sulit menyamainya. Bentuk tubuhnya sempurna. Demikian pula akhlaq yang disandangnya, adil dan dermawan, bila dan di mana pun ia berada.",
      },
      {
        arabic:
          "وَإِذَا مَشَى فَكَأَنَّمَا يَنْحَطُّ مِنْ صَبَب. فَيَفُوْتُ سَرِيْعَ الْمَشْيِ مِنْ غَيْرِهِ خَبَب. فَهُوَ الْكَنْزُ الْمُطَلْسَمُ الَّذِيْ لَا يَأْتِي عَلَى فَتْحٍ بَابِ أَوْصَافِهِ مِفْتَاح. وَالْبَدْرُ التِّـمُّ الَّذِيْ يَأْخُذُ الْأَلْبَابَ إِذَا تَخَيَّلَتْهُ أَوْ سَنَاهُ لَهَا لَاح .",
        latin:
          "Wa idzâ masyâ faka'annamâ yanḫaththu min shabab, fayafûtu sarî‘al-masyyi min ghairihi khabab, fahuwal-kanzul-muthalsamul-ladzî lâ ya'tî ‘alâ fatḫin bâbi aushâfihi miftâḫ, wal-badrut-timmul-ladzî ya'khudzul-albâba idzâ takhayyalat hu au sanâhu lahâ lâḫ",
        translation:
          "Bila berjalan, seakan-akan turun dari ketinggian, mendahului orang yang cepat dalam berjalan. Meski tampak selalu tenang tidak tergesa. Demikianlah ia bagai pusaka tersimpan rapi, dalam wadah kokoh tertutup rapat. Tiada anak kunci mampu membuka pintu sifat-sifatnya. Atau bak bulan purnama. Membuat takjub akal dan pikiran. Setiap kali membayangkan keindahannya. Atau berkas cahayanya tampak bagi penglihatan.",
      },
      {
        arabic:
          "حَبِيْبٌ يَغَارُ الْبَدْرُ مِنْ حُسْنِ وَجْهِهِ تَحَيَّرَةِ الْأَلْبَابُ فِي وَصْفِ مَعْنَاهُ",
        latin:
          "ḫabîbun yughârul-badru min ḫusni wajhihi taḫayyaratil-albâbu fî washfi ma‘nâhu",
        translation:
          "Insan tersayang membuat iri bulan purnama. Setiap kali memandangi indah wajahnya, akal dan pikiran dalam kebingungan, bila ingin menggambarkan makna hakikatnya…",
      },
      {
        arabic:
          "فَمَاذَا يُعْرِبُ الْقَوْلُ عَنْ وَصْفٍ يُعْجِزُ الْوَاصِفِيْنَ. أَوْ يُدْرِكُ الْفَهْمُ مَعْنَى ذَاتٍ جَلَّتْ أَنْ يَكُوْنَ لَهَا فِي وَصْفِهَا مُشَارِكٌ أَوْ قَرِيْن.",
        latin:
          "Famâdzâ yu‘ribul-qaulu ‘an washfin yu‘jizul-wâshifîn, au yudrikul-fahmu ma‘nâ dzâtin jallat an yakûna lahâ fî washfihâ musyârikun au qarîn,",
        translation:
          "Gerangan bagaimana kata-kata mampu mengungkapkan, tentang sifat-sifat yang mendatangkan putus asa, bagi siapa yang ingin menjelaskan. Atau betapa akal dapat mencapai, arti dzat yang tiada sesuatu pun mungkin menyamai atau menyerupainya.",
      },
      {
        arabic:
          "كَمُلَتْ مَحَاسِنُهُ فَلَوْ أَهْدَى السَّنَا لِلْبَدْرِ عِنْدَ تَمَامِهِ لَمْ يُخْسَفِ",
        latin:
          "Kamulat maḫâsinuhu falau ahdas-sanâ lil-badri ‘inda tamâmihi lam yukhsafi",
        translation:
          "Sungguh sempurna sifat-sifat keluhurannya. Andaikan ia menghadiahkan sinar bagi bulan purnama pasti tak ‘kan ia tertutup oleh gerhana.",
      },
      {
        arabic:
          "وَعَلَى تَفَــــنُّنِ وَاصِفِيْــــــهِ بِوَصْفِـــــهِ يَفْنَى الزَّمَانُ وَفِيْهِ مَالَمْ يُوْصَفِ",
        latin:
          "Wa ‘alâ tafannuni wâshifîhi biwashfihi yafnaz-zamânu wa fîhi mâ lam yûshafi",
        translation:
          "Betapapun banyak cara dilakukan orang rnencoba menguraikan sifat keluhurannya, namun sampai zaman berakhir, takkan mungkin mereka meliputi semuanya…",
      },
      {
        arabic:
          "فَمَا أَجَلَّ قَدْرَهُ الْعَظِيْم. وَأَوْسَعَ فَضْلَهُ الْعَمِيْم",
        latin: "Famâ ajalla qadrahul-‘adhîm, wa ausa‘a fadllahul-‘amîm",
        translation:
          "Oh… betapa tinggi derajatnya yang agung!!! Betapa luas keutamaanya merata di mana-mana!",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi ",
      },
    ],

    //Halaman 16
    [
      {
        translation:
          "Pasal 16 : WA LAQOD ITTASOFA SALLALLAHU ALAIHI WA SALLAM MIN MAHASINIL AKHLAQ ",
      },
      {
        arabic:
          "وَلَقَدِ اتَّصَفَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مِنْ مَحَاسِنِ الْأَخْلَاق. بِمَا تَضِيْقُ عَنْ كِتَابَتِهِ بُطُوْنُ الْأَوْرَاق. كَانَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ أَحْسَنَ النَّاسِ خُلُقًا وَخَلْقًا. وَأَوَّلَهُمْ إِلَى مَكَارِمِ الْأَخْلَاقِ سَبْقًا. وَأَوْسَعَهُمْ بِالْمُؤْمِنِيْنَ حِلْمًا وَرِفْقًا. بَرًّا رَؤُوْفًا. لَا يَقُوْلُ وَلَا يَفْعَلُ إِلَّا مَعْرُوْفًا. لَهُ الْخُلُقُ السَّهْلُ. وَاللَّفْظُ الْمُحْتَوِيْ عَلَى الْمَعْنَى الْجَزَل. إِذَا دَعَاهُ الْمِسْكِيْنُ أَجَابَهُ إِجَابَةً مُعَجَّلَة. وَهُوَ الْأَبُ الشَّفِيْقُ الرَّحِيْمُ بِالْيَتِيْمِ وَالْأَرْمَلَة. وَلَهُ مَعَ سُهُوْلَةِ أَخْلَاقِهِ الْهَيْبَةُ الْقَوِيَّة. اَلَّتِيْ تَرْتَعِدُ مِنْهَا فَرَائِصُ الْأَقْوِيَاءِ مِنَ الْبَرِيَّة. وَمِنْ نَشْرِ طِيْبِهِ تَعَطَّرَتِ الطُّرُقُ وَالْمَنَازِل. وَبِعَرْفِ ذِكْرِهِ تَطَيَّبَتِ الْمَجَالِسُ وَالْمَحَافِل. فَهُوَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ جَامِعُ الصِّفَاتِ الْكَمَالِيَّة. وَالْمُنْفَرِدُ فِي خَلْقِهِ وَخُلُقِهِ بِأَشْرَفِ خُصُوْصِيَّة. فَمَا مِنْ خُلُقٍ فِي الْبَرِيَّةِ مَحْمُوْد. إِلَّا وَهُوَ مُتَلَقًّى عَنْ زَيْنِ الْوُجُوْد",
        latin:
          "Wa laqadit-tashafa shallallâhu ‘alaihi wa sallama min maḫâsinil-akhlâq, bimâ tadlîqu ‘an kitâbatihi buthûnul-aurâq, kâna shallallâhu ‘alaihi wa sallama aḫsanan-nâsi khuluqan wa khalqan, wa awwalahum ilâ makârimil-akhlâqi sabqan, wa ausa‘ahum bil-mu’minîna ḫilman wa rifqan, barran ra’ûfan, lâ yaqûlu wa lâ yaf‘alu illâ ma‘rûfan, lahul-khuluqus-sahlu, wal-lafdhul-muḫtawî ‘alal-ma‘nal-jazal, idzâ da‘âhul-miskînu ajâbahu ijâbatan mu‘ajjalah, wa huwal-abusy-syafîqur-raḫîmu bil-yatîmi wal-armamalah, wa lahu ma‘a suhûlati akhlâqihil-haibatul-qawiyyah, allatî tarta‘idu minhâ farâ’ishul-aqwiyâ’i minal-bariyyah, wa min nasyri thîbihi ta‘aththaratit-thuruqu wal-manâzil, wa bi‘arfi dzikrihi tathayyabatil-majâlisu wal-maḫâfil, fahuwa shallallâhu ‘alaihi wa sallama jâmi‘ush-shifâtil-kamâliyyah, wal-munfaridu fî khalqihi wa khuluqihi bi asyrafi khushûshiyyah, famâ min khuluqin fil-bariyyati maḫmûd, illâ wa huwa mutalaqqan ‘an zainil-wujûd.",
        translation:
          "Demikian luhur akhlaq Rasulullah ﷺ sehingga terasa sempit kitab-kitab besar untuk merangkumnya. Sebab beliau sebaik-baik manusia, dalam keindahan akhlaq ataupun bentuk tubuhnya. Selalu terdepan dalam berbuat kebajikan. Lembut hatinya, luas kasih sayangnya. Terutama bagi kaum beriman semuanya. Teramat baik, teramat penyantun. Tiada berucap sesuatu melainkan berisi kebaikan. Sederhana perangainya. Singkat dan padat kalimat yang diucapkannya. Bila si miskin memanggilnya, ia selalu tanggap memenuhinya segera. Dirinya bagai ayah penuh kasih saying untuk si yatim-piatu atau janda yang lemah. Rendah hatinya namun amat kuat wibawanya, membuat orang paling kuat pun. Gemetar berhadapan dengannya. Tiap jalan dilaluinya, atau pun rumah yang dikunjunginya, menjadi semerbak harum baunya. Sebutan tentang pribadinya, mewangikan tiap majelis dan pertemuan. Beliau adalah pusat perpaduan bagi segala sifat kesempurnaan. Tiada banding dalam fisik dan perilakunya. Karena mendapat kekhususan termulia, maka tiada satu pun perangai manusia terpuji melainkan pasti bersumber dari dirinya. Insan terbaik di antara mereka semua.",
      },

      {
        arabic:
          "أَجَمَلْتُ فِي وَصْفِ الْحَبِيْبِ وَشَأْنِهِ وَلَهُ الْعُلَا فِي مَجْدِهِ وَمَكَانِهِ",
        latin:
          "Ajmaltu fî washfil-ḫabîb wa sya'nihi wa lahul-‘ulâ fî majdihi wa makânihi",
        translation:
          "Telah kusimpulkan sifat-sifat insan tercinta ini. Dalam dirinya terkumpul kemuliaan dengan segala bentuknya.",
      },
      {
        arabic:
          "أَوْصَــــافُ عِزٍّ قَدْ تَعَـــــالَى مَجْدُهَـــــا أَخَذَتْ عَلَى نَجْمِ السُّهَا بِعِنَانِهِ",
        latin:
          "Aushâfu ‘izzin qad ta‘âlâ majduhâ akhadat ‘alâ najmis-suhâ bi‘inânihi",
        translation:
          "Pekerti indah amat tinggi menjulang, bagai bersemayam di atas bintang nan tinggi..",
      },
      {
        arabic:
          "وَقَدِ انْبَسَطَ الْقَلَمُ فِي تَدْوِيْنِ مَا أَفَادَهُ الْعِلْمُ مِنْ وَقَائِعِ مَوْلِدِ النَّبِيِّ الْكَرِيْم. وَحِكَايَةِ مَا أَكْرَمَ اللهُ بِهِ هٰذَا الْعَبْدَ الْمُقَرَّبَ مِنَ التَّكْرِيْمِ وَالتَّعْظِيْمِ وَالْخُلُقِ الْعَظِيْم. فَحَسُنَ مِنِّي أَنْ اُمْسِكَ أَعِنَّةَ الْأَقْلَام. فِي هٰذَا الْمَقَام. وَأَقْرَأَ السَّلَام. عَلَى سَيِّدِ الْأَنَام",
        latin:
          "Wa qad inbasathal-qalamu fî tadwîni mâ afâdahul-‘ilmu min waqâ'i‘i maulidin-nabiyyil-karîm, wa ḫikâyati mâ akramallâhu bihi hâdzal-‘abdal-muqarraba minat-takrîmi wat-ta‘dhîmi wal-khuluqil-‘adhîm, faḫasuna minnî an umsika a‘innatal-aqlâm, fî hâdzal-maqâm, wa aqra'as-salâm, ‘alâ sayyidil-anâm.",
        translation:
          "Kiranya pena telah cukup berkelana, dengan perasaan riang ceria, mencatat yang diketahui tentang Maulid Nabi mulia ini. Dan mengisahkan sebagian kehormatan dan penghormatan, serta budi pekertinya yang amat luhur, yang dikaruniakan Allah baginya. Kini tiba saat menarik kembali kendalinya. Dan sepatutnya kubacakan salam atas nabi ini, pemimpin penghuni alam.",
      },
      {
        arabic:
          "اَلسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحَمَةُ اللهِ وَبَرَكَاتُه ﴿ثَلَاثًا﴾",
        latin:
          "Assalâmu ‘alaika ayyuhan-nabiyyu wa raḫmatullâhi wa barakâtuh ﴾tsalâtsan﴿",
        translation:
          "AssaIamu ‘alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh (Semoga keselamatan, kasih sayang, dan keberkahan dari Allah tercurah kepada Nabi Muhammad). (3x)",
      },
      {
        arabic:
          "وَبِذٰلِكَ يَحْسُنُ الْخَتْمُ كَمَا يَحْسُنُ التَّقْدِيْم. فَعَلَيْهِ أَفْضَلُ الصَّلَاةِ وَالتَّسْلِيْم",
        latin:
          "Wa bidzâlika yaḫsunul-khatmu kamâ yaḫsunut-taqdîm, fa‘alaihi afdlalush-shalâti wat-taslîm.",
        translation:
          "Dan dengan itu sempurnalah penutup kata ini, sebagaimana telah sempurna di awal pembukanya. Bagi Rasulullah, shalawat dan salam setinggi-tingginya.",
      },
      {
        arabic:
          "اللهم صل وسلم أشرف الصلاة والتسليم على سيدنا ونبينا محمد الرؤوف الرحيم",
        latin:
          "Allâhumma shalli wa sallim asyrafash-shalâti wat-taslîmi ‘alâ sayyidinâ wa nabiyyinâ Muḫammadir-ra'ûfir-raḫîm.",
        translation:
          "Ya Allah berilah selawat dan salam dengan sebaik selawat dan salam untuk junjungan kita dan nabi kita Muhammad yang menyayangi dan mengasihi ",
      },
    ],

    //Halaman 17
    [
      { translation: "Pasal 17 : Doa Maulid Simtudduror" },
      {
        arabic:
          "وَلَمَّا نَظَمَ الْفِكْرُ مِنْ دَرَارِيِّ الْأَوْصَافِ الْمُحَمَّدِيَّةِ عُقُوْدًا. تَوَجَّهْتُ إِلَى اللهِ مُتَوَسِّلًا بِسَيِّدِيْ وَحَبِيْبِيْ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ أَنْ يَجْعَلَ سَعْيِيْ فِيْهِ مَشْكُوْرًا وَفِعْلِيْ فِيْهِ مَحْمُوْدًا. وَأَنْ يَكْتُبَ عَمَلِي فِي الْأَعْمَالِ الْمَقْبُوْلَة. وَتَوَجُّهِي فِي التَّوَجُّهَاتِ الْخَالِصَةِ وَالصِّلَاتِ الْمَوْصُوْلَةِ. اَللّٰهُمَّ يَامَنْ إِلَيْهِ تَتَوَجَّهُ الْاٰمَالُ فَتَعُوْدُ ظَافِرَة. وَعَلَى بَابِ عِزَّتِهِ تُحَطُّ الرِّحَالُ فَتَغْشَاهَا مِنْهُ الْفُيُوْضَاتُ الْغَامِرَة. نَتَوَجَّهُ إِلَيْكَ. بِأَشْرَفِ الْوَسَائِلِ لَدَيْكَ. سَيِّدِ الْمُرْسَلِيْن. عَبْدِكَ الصَّادِقِ الْأَمِيْن. سَيِّدِنَا مُحَمَّدٍ الَّذِيْ عَمَّتْ رِسَالَتُهُ الْعَالَمِيْن. أَنْ تُصَلِّيَ وَتُسَلِّمَ عَلَى تِلْكَ الذَّاتِ الْكَامِلَة. مُسْتَوْدَعِ أَمَانَتِكَ. وَحَفِيْظِ سِرِّك. وَحَامِلِ رَايَةِ دَعْوَتِكَ الشَّامِلَة. اَلْأَبِ الْأَكْبَر. اَلْمَحْبُوْبِ لَكَ وَالْمُخَصَّصِ بِالشَّرَفِ الْأَفْخَر. فِي كُلِّ مُوْطِنٍ مِنْ مَوَاطِنِ الْقُرْبِ وَمَظْهَر. قَاسِمِ إِمْدَادِكَ فِي عِبَادِك. وَسَاقِي كُؤُوْسِ إِرْشَادِكَ لِأَهْلِ وِدَادِك. سَيِّدُ الْكَوْنَيْن. وَأَشْرَفِ الْثَّقَلَيْن. اَلْعَبْدِ الْمَحْبُوْبِ الْخَالِص. اَلْمَخْصُوْصِ مِنْكَ بِأَجَلِّ الْخَصَائِص. اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَيْهِ وَعَلَى اٰلِهِ وَأَصْحَابِهِ. وَأَهْلِ حَضْرَةِ اقْتِرَابِهِ مِنْ أَحْبَابِه. اَللّٰهُمَّ إِنَّ نُقَدِّمُ إِلَيْكَ جَاهَ هٰذَا النَّبِيِّ الْكَرِيْم. وَنَتَوَسَّلُ إِلَيْكَ بِشَرَفِ مَقَامِهِ الْعَظِيْم. أَنْ تُلَاحِظَنَا فِي حَرَكَاتِنَا وَسَكَنَاتِنَا بِعَيْنِ عِنَايَتِك. وَأَنْ تَحْفَظَنَا فِي جَمِيْعِ أَطْوَارِنَا وَتَقَلُّبَاتِنَا بِجَمِيْلِ رِعَايَتِك. وَحَصِيْنِ وِقَايَتِك. وَأَنْ تُبَلِّغَنَا مِنْ شَرَفِ الْقُرْبِ إِلَيْكَ وَإِلَى هٰذَا الْحَبِيْبِ غَايَةَ اٰمَالِنَا. وَتَتَقَبَّلَ مِنَّا مَا تَحَرَّكْنَا فِيْهِ مِنْ نِيَّاتِنَا وَأَعْمَالِنَا. وَتَجْعَلَنَا فِي حَضْرَةِ هٰذَا الْحَبِيْبِ مِنَ الْحَاضِرِيْن. وَفِي طَرَائِقِ اتِّبَاعِهِ مِنَ السَّالِكِيْن. وَلِحَقِّكَ وَحَقِّهِ مِنَ الْمُؤَدِّيِيْن. وَلِعَهْدِكَ مِنَ الْحَافِظِيْن. اَللّٰهُمَّ إِنَّ لَنَا أَطْمَاعًا فِي رَحْمَتِكَ الْخَاصَّةِ فَلَا تَحْرِمْنَا. وَظُنُوْنًا جَمِيْلَةً هِيَ وَسِيْلَتُنَا إِلَيْكَ فَلَا تُخَيِّبْنَا. اٰمَنَّا بِكَ وَبِرَسُوْلِكَ وَمَا جَاءَ بِهِ مِنَ الدِّيْن. وَتَوَجَّهْنَا بِهِ إِلَيْكَ مُسْتَشْفِعِيْن. أَنْ تُقَابِلَ الْمُذْنِبَ مِنَّا بِالْغُفْرَان. وَالْمُسِيْءَ بِالْإِحْسَانِ. وَالسَّائِلَ بِمَا سَأَلَ. وَالْمُؤَمِّلَ بِمَا أَمَّل. وَأَنْ تَجْعَلَنَا مِمَّنْ نَصَرَ هٰذَا الْحَبِيْبَ وَوَازَرَه. وَوَالَاهُ وُظَاهَرَه. وَعُمَّ بِبَرَكَتِهِ وَشَرِيْفِ وِجْهَتِهِ أَوْلَادَنَا وَوَالِدِيْنَا. وَأَهْلَ قُطْرِنَا وَوَادِيْنَا. وَجَمِيْعَ الْمُسْلِمِيْنَ وَالْمُسْلِمَات. وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَات. فِي جَمِيْعِ الْجِهَات. وَأَدِمْ رَايَةَ الدِّيْنِ الْقَوِيْمِ فِي جَمِيْعِ الْأَقْطَارِ مَنْشُوْرَة. وَمَعَالِمَ الْإِسْلَامِ وَالْإِيْمَانِ بِأَهْلِهَا مَعْمُوْرَة. مَعْنىً وَصُوْرَة. وَاكْشِفِ اللّٰهُمَّ كُرْبَةَ الْمَكْرُوْبِيْن. وَاقْضِ دَيْنَ الْمَدِيْنِيْن. وَاغْفِرْ لِلْمُذْنِبِيْن. وَتَقَبَّلْ تَوْبَةَ التَّائِبِيْن. وَانْشُرْ رَحْمَتَكَ عَلَى عِبَادِكَ الْمُؤْمِنِيْنَ أَجْمَعِيْن. وَاكْفِ شَرَّ الْمُعْتَدِيْنَ وَالظَّالِمِيْن. وَابْسُطِ الْعَدْلَ بِوُلَاةِ الْحَقِّ فِي جَمِيْعِ النَّوَاحِي وَالْأَقْطَار. وَأَيِّدْهُمْ بِتَأْيِيْدِ مِنْ عِنْدِكَ وَنَصْرٍ عَلَى الْمُعَانِدِيْنَ مِنَ الْمُنَافِقِيْنَ وَالْكُفَّار. وَاجْعَلْنَا يَا رَبِّ فِي الْحِصْنِ الْحَصِيْنِ مِنْ جَمِيْعِ الْبَلَايَا. وَفِي الْحِرْزِ الْمَكِيْنِ مِنَ الذُّنُوْبِ وَالْخَطَايَا. وَأَدِمْنَا فِي الْعَمَلِ بِطَاعَتِكَ وَالصِّدْقِ فِي خِدْمَتِكَ قَائِمِيْن. وَإِذَا تَوَفَّيْتَنَا فَتَوَفَّنَا مُسْلِمِيْنَ مُؤْمِنِيْن. وَاخْتِمْ لَنَا مِنْكَ بِخَيْرٍ أَجْمَعِيْن. وَصَلِّ وَسَلِّمْ عَلَى هٰذَا الْحَبِيْبِ الْمَحْبُوْب. لِلْأَجْسَامِ وَالْأَرْوَاحِ وَالْقُلُوْب. وَعَلَى اٰلِهِ وَصَحْبِهِ وَمَنْ إِلَيْهِ مَنْسُوْب. وَآخِرُ دَعْوَانَا أَنِ الْحَمْدُ لِلّٰهِ رَبِّ الْعَــــــالَمِيْنَ",
        latin:
          " Wa lammâ nadhamal-fikru min darâriyyil-aushâfil-muḫammadiyyati ‘uqûdan, tawajjahtu ilallâhi mutawassilan bisayyidî wa ḫabîbî muḫammadin shallallâḫu ‘alaihi wa sallama an yaj‘ala sa‘yî fîhi masykûran wa fi‘lî fîhi maḫmûdan. wa an yaktuba ‘amalî fil-a‘mâlil-maqbûlah, wa tawajjuhî fit-tawajjuhâtil-khâlishâti wash-shilâtil-maushûlah, allâhumma yâ man ilaihi tatawajjahul-mâlu fata‘ûdu dhâfirah, wa ‘alâ bâbi ‘izzatihi tuḫaththur-riḫâlu fataghsyâhâ minhul-fuyûdlâtul-ghâmirah, natawajjahu ilaika, bi asyrafil-wasâ’ili ladaika, sayyidil-mursalîn, ‘abdikash-shâdiqil-amîn, sayyidinâ muḫammadinil-ladzî ‘ammat risâlatuhul-‘âlamîn, an tushalliya wa tusallima ‘alâ tilkadz-dzâtil-kâmilah, mustauda‘i amânatika, wa ḫafîdhi sirrika, wa ḫâmili râyati da‘watikasy-syâmilah, al-abil-akbar, al-maḫbûbi laka wal-mukhashshashi bisy-syarafil-afkhar, fi kulli mûthini min mawâthinil-qurbi wa madhhar, qâsimi imdâdika fî ‘ibâdik, wa sâqi ku’ûsi irsyâdika li ahli widâdik, sayyidul-kaunain, wa asyrafits-tsaqalain, al-‘abdil-maḫbûbil-khâlish. Al-makhshûshi minka biajallil-khashâ’ishi, allâḫumma shalli wa sallim ‘alaihi wa ‘alâ âlihi wa ashḫabihi, wa ahli ḫadlrati iqtirâbihi min aḫbâbih, allâḫumma inna nuqaddimu ilaika jâha hâdzan-nabiyyil-karim, wa natawassalu ilaika bisyarafi maqâmihil-‘adhîm, an tulâḫidhanâ fî ḫarakâtinâ wa sakanâtinâ bi‘aini ‘inâyatika, wa an taḫfadhanâ fî jamî‘i athwârinâ wa taqallâbâtinâ bijamîli ri‘âyatika, wa ḫashîni wiqâyatika, wa an tuballighanâ min syarafil-qurbi ilaika wa ilâ hâdzal-ḫabîbi ghâyata âmâlinâ, wa tataqabbala minnâ mâ taḫarraknâ fîhi min niyâtinâ wa a‘mâlinâ, wa taj‘alanâ fî ḫadlrati hâdzal-ḫabîbi minal-ḫâdlirîn, wa fî tharâ’iqit-tibâ‘ihi minas-sâlikîn, wa liḫaqqika wa ḫaqqihi minal-mu’addiyîn, wa li‘ahdika minal-hâfidhîn. Allâhumma inna lanâ athmâ‘an fî raḫmatikal-khâshshati falâ taḫrimnâ, wa dhunûnan jamîlatan hiya wa sîlatunâ ilaika falâ tukhayyibnâ, âmannâ bika wa birasûlika wa mâ jâ’a bihi minad-dîn, wa tawajjahnâ bihi ilaika mustasyfi‘în, an tuqâbilal-mudzniba minnâ bil-ghufrân, wal-musî’a bil-iḫsân, was-sâ’ila bimâ sa’al, wal-muammila bimâ ammal, wa an taj’alanâ mimman nashara hâdzal-ḫabîba wa wâzarah, wa wâlâhu wu dhâharah, wa ‘umma bibarakatihi wa syarîfi wijhatihi aulâdanâ wa wâlidînâ, wa ahla quthrinâ wa wâdînâ, wa jamî‘al-muslimîna wal-muslimât, wal-mu’minîna wal-mu’minât, fî jamî‘il-jihât, wa âdim râyatad-dînil-qawîmi fî jamî‘il-aqthâri mansyûrah, wa ma‘âlimal-islâmi wal-îmâni bi ahlihâ ma‘mûrah, ma‘nan wa shûrah, waksyif allâḫumma kurbatal-makrûbîn, waqdli dainal-madînîn, waghfir lil-mudznibîn, waqbal taubatat-tâ’ibîn, wansyur raḫmataka ‘ala ‘ibâdikal-mu’minîna ajma’în. wakfi syarral-mu‘tadîna wadh-dhâlimîn, wabsuthil-‘adla biwulâtil-ḫaqqi fî jamî‘in-nawâḫî wal-aqthâr, wa ayyidhum bita’yîdi min ‘indika wa nashrin ‘alal-mu’ânidîna minal-munâfiqîna wal-kuffâr, waj‘alnâ yâ rabbi fil-ḫishnil-ḫasḫini min jamî‘il-balâyâ, wa fil-ḫirzil-makîni minadz-dzunûbi wal-khathâyâ, wa adimnâ fil-‘amali bithâ‘athika wash-shidqi fî khidmatika qâ’imîn, wa idza tawaffaitanâ fatawaffanâ muslimîna mu’minîn, wakhtim lanâ minka bikhairin ajma‘în, wa shalli wa sallim ‘alâ hâdzal-ḫabîbil-maḫbûb, lil-ajsâmi wal-arwâḫi wal-qulûb, wa ‘alâ âlihi wa shaḫbihi wa man ilaihi mansûb, wa âkhiru da‘wânâ anil-ḫamdulillâhi rabbil-‘âlamîn.",
        translation:
          "Kini, setelah selesai menyunting untaian mutiara sifat Nabi ﷺ, kuhadapkan diriku ke hadirat llahi seraya bertawasul dengan pemimpin dan kekasihku: Muhammad ﷺ. Semoga Allah SWT berkenan menjadlkan usahaku menyusun ini sebagai suatu yang terpuji dan mendatangkan ganjaran bagiku! Dan semoga Dia mencatat amalku di antara amal-amal yang diterima-Nya. Dan permohonanku, di antara permohonan yang ikhlas ditujukan kepada-Nya, serta memperoleh pahala-Nya yang saling berkesinambungan: Ya Allah, Ya Tuhan kami! Yang kepada-Nya tertuju semua cita dan idaman agar kembali setelah itu dengan segala keberhasilan. Dan di pintu keperkasaan-Nya dihentikan semua kafilah harapan, agar setelah itu digenangi luapan anugerah-Nya. Sesungguhnya kami menghadap kepada-Mu, dengan semulia-mulia wasilah di sisi-Mu: Penghulu Segenap Rasul. Hamba-Mu yang selalu benar dalam ucapannya. Yang selalu tulus terpercaya. Junjungan kami: Muhammad, yang risalahnya meliputi seluruh jagat raya. Semoga Engkau berkenan melimpahkan shalawat dan salam atas dzat sempurna itu! Tempat penyimpanan amanah-Mu. Pemegang rahasia-Mu. Pengibar panji dakwah-Mu, yang mencakup segalanya. Leluhur kami yang besar, yang Engkau kasihi dan Engkau khususkan dengan kemuliaan megah dan anggun pada setiap tempat dan kedudukan yang dekat kepada-Mu. Pembagi karunia-Mu di antara hamba-hamba-Mu. Pengedar hidangan petunjuk-Mu, bagi mereka yang Kau kasihi. Pemuka seluruh penghuni langit dan bumi. Termulialah di antara makhluk manusia dan jin. Hamba-Mu yang Engkau kasihi sepenuhnya. Yang Engkau khususkan dengan sebesar kekhususan dari-Mu. Yaa Allah, ya Tuhan kami! limpahkan shalawat dan salam atas dirinya! Demikian pula keluarga dan sahabatnya, serta mereka yang dekat kepadanya dari para pencintanya Ya Allah, ya Tuhan kami! Sesungguhnya kami menghadapkan kepada-Mu, kedudukan terhormat Nabi mulia ini di sisi-Mu. Dan bertawasul dengan derajatnya yang tinggi di sisi-Mu, agar Engkau berkenan menjaga dan memelihara kami, dalam segala gerak dan diam kami, dengan pandangan inayah-Mu, dan memberikan perlindungan-Mu kepada kami, dalam segala keadaan dan tindakan kami. Dengan Bimbingan-Mu yang Sempurna. Dan penjagaan-Mu yang teguh dan kokoh. Dan semoga Engkau mengabulkan puncak idaman kami, yaitu memperoleh kemulian dekat kepada-Mu, dan kepada insan tercinta ini! Dan semoga Engkau berkenan menerima niat dan amalan kami, pada segala gerak-gerik kami. Dan memasukkan kami dalam golongan mereka yang selalu hadir dalam hadhiratnya. Yang mengikuti jalan yang ditempuhnya. Melaksanakan kewajiban terhadap-Mu dan terhadapnya. Dan selalu menjaga perjanjian dengan-Mu dengan sebaik-baiknya. Allahuma, Ya Allah, Ya Tuhan kami! Sesungguhnya kami selalu mendambakan dengan sangat, memperoleh “rahmat khusus” dari sisi-Mu… Maka janganlah Engkau menanamkan rasa kecewa di hati kami! Dan kami memiliki persangkaan baik akan kasih sayang-Mu , yang kami jadikan wasilah kami kepada-Mu, maka janganlah Engkau menanamkan rasa kecewa di hati kami. Benar-benar kami beriman kepada-Mu, dan kepada Rasul-Mu. Kini kami..menujukan permohonan kami kepada-Mu dengan mengharapkan Rasul-Mt itu sebagai pemberi syafa’at! Semoga Engkau memberikan pengampunan-Mu kepada orang yang berdosa di antara kami, dan ihsan dan kebaikan dari-Mu kepada yang telah membuat kelalaian, yang meminta memperoleh apa yang dimintanya, yang mengharapkan sesuatu mendapatkan apa yang diharapkannya! Dan, mohon Engkau jadikan kami termasuk yang menolong kekasih ini, dan membelanya! Dan semoga Engkau menebarkan keberkahannya! Dan keluhuran arah tujuannya, meliputi anak-anak dan orangtua kami. Juga penghuni negeri dan daerah kami. Serta segenap kaum muslimin dan muslimat, mukminin dan mukminat, di seluruh penjuru dunia. Dan kekalkanlah panji agama yang lurus di seluruh negeri, agar tetap tersebar! Dan panji-panji iman dan lslam tetap tegak dengan pemeluknya dalam makna maupun gambarannya! Dan hilangkanlah ya Allah, ya Tuhan kami! Penderitaan para penderita! Lunasilah utang mereka yang dibebani utang-utang! Ampunilah orang-orang yang berdosa! Terimalah taubat mereka yang bertaubat! Dan tebarkanlah rahmat-Mu atas hamba-hamba-Mu, kaum mukminin semuanya! Dan tolaklah kejahatan orang-orang yang melanggar! Serta mereka yang bertindak zhalim! Mantapkanlah keadilan dengan penguasa-penguasa yang adil dan benar, di setiap kota dan negeri! Teguhkanlah mereka dengan kekuatan dari sisi-Mu, dan kemenangan atas kaum pembangkang, kaum munafiqin dan kutfar! Peliharalah kami, ya Allah, dalam benteng-benteng yang kokoh terhadap segala balak dan malapetaka! Dan dalam tempat-tempat persimpanan yang aman terhadap segala dosa dan kesalahan! Dan tetapkanlah diri kami dalam kepatuhan kepada-Mu, dan ketulusan hati dalam beramal demi keridhaan-Mu! Dan bila tiba saat Engkau mencukupkan masa hidup kami, wafatkanlah kami sebagai muslim dan mukmin sejati! Dan penuhilah akhir hidup kami semua dengan kebaikan dari sisi-Mu! Dan limpahkanlah shalawat dan salam atas Nabi ini, yang dicintai dan dikasihi oleh jasad, ruh, dan jiwa kami! Juga atas keluarga dan sahabatnYa! Serta mereka yang berhubungan nasab dengannya! Demikianlah kami akhiri doa kami. Dengan ucapan, “Walhamdu lillahi rabbil ‘alamin.”",
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
