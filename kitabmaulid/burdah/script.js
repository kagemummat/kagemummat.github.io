document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    // Halaman 1
    [
      {
        translation: "Pasal 1 : Bercumbu dan Pengaduan Cinta",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًا عَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "أَمِنْ تَذَكُّــرِ جِــــيْرَانٍ بِذِيْ سَــــلَمِ مَزَجْتَ دَمْعًا جَرَى مِنْ مُقْلَةٍ بِـــدَمِ",
        latin:
          "amin tadzakkuri jîrânin bidzî salami mazajta dam‘an jarâ min muqlatin bidami",
        translation:
          "Apakah karena mengingat para kekasih di Dzi Salam sana, Engkau deraikan air mata dengan darah duka.",
      },
      {
        arabic:
          "أَمْ هَبَّتِ الرِّيْحُ مِنْ تِلْقَـاءِ كَاظِمَـةٍ وَأَوْمَضَ الْبَرْقُ فِيْ الْظَلْمَآءِ مِنْ إِضَـمِ",
        latin:
          "Am habbatir-rîḫu min tilqâ'i kâdzimatin wa aumadlal-barqu fidl-dhalmâ'i min idlami",
        translation:
          "Ataukah karena embusan angin terarah lurus berjumpa di Kadhimah. Dan kilatan cahaya gulita malam dari kedalaman jurang idham.",
      },
      {
        arabic:
          "فَمَا لِعَيْنَيْكَ إِنْ قُلْتَ اكْفُفَا هَمَتَا وَمَا لِقَلْبِكَ إِنْ قُلْتَ اسْتَفِقْ يَهِـــمِ",
        latin:
          "Fa mâ li ‘ainaika in qultak-fufâ hamatâ wa mâ liqalbika in qultas-tafiq yahimi",
        translation:
          "Mengapa kedua air matamu tetap meneteskan air mata? Padahal engkau telah berusaha membendungnya. Apa yang terjadi dengan hatimu? Padahal engkau telah berusaha menghiburnya.",
      },
      {
        arabic:
          "أَيَحْسَبُ الصَّبُّ أَنَّ الْحُبَّ مُنْكَتِمٌ مَا بَيْنَ مُنْسَجِمٍ مِنْهُ وَمُضْطَـــرِمِ",
        latin:
          "Ayaḫsabush-shabbu annal-ḫubbu munkatimun mâ baina mun sajimin minhu wa mudltharimi",
        translation:
          "Apakah diri yang dirundung nestapa karena cinta mengira bahwa api cinta dapat disembunyikan darinya. Di antara tetesan air mata dan hati yang terbakar membara.",
      },
      {
        arabic:
          "لَوْلَا الْهَوَى لَمْ تُرِقْ دَمْعًــا عَلَى طَلَلٍ وَلَا أَرِقْتَ لِذِكْرِ الْبَـــانِ وَالْعَلَـــمِ",
        latin:
          "Lau lâl-hawâ lam turiq dam‘an ‘alâ thalalin wa lâ ariqta lidzikril-bâni wal-‘alami",
        translation:
          "Andaikan tak ada cinta yang menggores kalbu, tak mungkin engkau mencucurkan air matamu. Meratapi puing-puing kenangan masa lalu berjaga mengenang pohon al-ban dan gunung yang kau rindu.",
      },
      {
        arabic:
          "فَكَيْفَ تُنْكِرُ حُبًّا بَعْدَ مَا شَهِدَتْ بِهِ عَلَيْكَ عُدُوْلُ الدَّمْعِ وَالسَّـــقَمِ",
        latin:
          "Fakaifa tunkiru ḫubban ba‘da mâ syahidat bihi ‘alaika ‘udûlud-dam‘i was-saqami",
        translation:
          "Bagaimana kaudapat mengingkari cinta sedangkan saksi adil telah menyaksikannya. Berupa deraian air mata dan jatuh sakit amat sengsara",
      },
      {
        arabic:
          "وَأَثْبَتَ الْوَجْــدُ خَطَّيْ عَبْرَةٍ وَّضَـنًى مِثْلَ الْبَهَارِ عَلَى خَدَّيْكَ وَالْعَنَـــمِ",
        latin:
          "Wa atsbatal-wajdu khaththai ‘abratin wa dlanan mitslal-bahâri ‘alâ khaddaika wal-‘anami",
        translation:
          "Duka nestapa telah membentuk dua garisnya isak tangis dan sakit lemah tak berdaya. Bagai mawar kuning dan merah yang melekat pada dua pipi.",
      },
      {
        arabic:
          "نَعَــمْ سَرَى طَيْفُ مَنْ أَهْوَى فَأَرَّقَنِيْ وَالْحُبُّ يَعْتَرِضُ اللَّذَّاتِ بِالْأَلَــمِ",
        latin:
          "Na‘am sarâ thaifu man ahwâ fa arraqanî wal-ḫubbu ya‘taridlul-ladzdzâti bil-alami",
        translation:
          "Memang benar bayangan orang yang kucinta selalu hadir membangunkan tidurku untuk terjaga. Dan memang cinta sebagai penghalang bagi siempunya antara dirinya dan kelezatan cinta yang berakhir derita",
      },
      {
        arabic:
          "يَا لَائِمِيْ فِي الْهَوَى الْعُذْرِيِّ مَعْذِرَةً مِنِّيْ إِلَيْكَ وَلَوْ أَنْصَفْتَ لَـــمْ تَلُـــمِ",
        latin:
          "Yâ lâ'imî fil-hawâl-‘udzriyyi ma‘dziratan minnî ilaika wa lau anshafta lam talumi",
        translation:
          "Wahai pencaci derita cinta kata maaf kusampaikan padamu. Aku yakin andai kaurasakan derita cinta ini, tak mungkin engkau mencaci maki.",
      },
      {
        arabic:
          "عَدَتْـــكَ حَـــــالِيَ لَاسِـــــرِّيْ بِمُسْتَـــتِرٍ عَنِ الْوُشَاةِ وَلَا دَائِيْ بِمُنْحَسِــمِ",
        latin:
          "‘adatka ḫâliya lâ sirrî bimustatirin ‘anil-wusyâti wa lâ dâ'î bimunḫasimi",
        translation:
          "Kini kautahu keadaanku, tiada lagi rahasiaku yang tersimpan darimu. Dari orang yang suka mengadu domba dan derita cintaku tiada kunjung sirna.",
      },
      {
        arabic:
          "مَحَّضْتَنِي النُّصْحَ لَكِنْ لَّسْتُ أَسْمَعُهُ إِنَّ الْمُحِبَّ عَنِ الْعُـــذَّالِ فِيْ صَمَـــمِ",
        latin:
          "Maḫḫadltanî-nushḫa lakin lastu asma‘uhu innal-muḫibba ‘anil-‘udzdzâli fî shamami",
        translation:
          "Begitu tulus nasihatmu, tapi aku tak mampu mendengar semua itu. Karena sesungguhnya orang yang dimabuk cinta tuli dan tak menggubris cacian pencela.",
      },
      {
        arabic:
          "إِنِّيْ اتَّهَـــمْتُ نَصِيْحَ الشَّيْبِ فِي عَذَلٍ وَالشَّيْبُ أَبْعَدُ فِيْ نُصْـــحٍ عَنِ التُّهَمِ",
        latin:
          "Innît tahamtu nashîḫasy-syaibi fî ‘adzalin wasy-syaibu ab‘adu fî nushḫin ‘anit-tuhami",
        translation:
          "Aku curiga ubanku pun turut mencelaku. Padahal ubanku pastilah tulus memperingatkanku.",
      },
    ],
    // Halaman 2
    [
      {
        translation: "Pasal 2 : Peringatan Tentang Bahaya Hawa Nafsu",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "فَإِنَّ أَمَّـــارَتِيْ بِالسُّـوْءِ مَــــا اتَّعَظَتْ مِنْ جَهْلِهَا بِنَذِيْرِ الشَّيْبِ وَالْهَرَمِ",
        latin:
          "Fainna ammâratî bis-sû'i mât ta‘adhat min jahlihâ binadzirisy-syaibi wal-harami",
        translation:
          "Sungguh nafsu amarahku pada nasihat tak terima, karena berangkat dari ketidaktahuannya. Adanya peringatan berupa uban di kepala dan ketidakberdayaan tubuh akibat umur senja.",
      },
      {
        arabic:
          "وَلَا أَعَدَّتْ مِنَ الفِعْلِ الْجَمِيْلِ قِرَى ضَيْفٍ أَلَمَّ بِرَأْسِيْ غَيْرَ مُحْـــتَشِمِ",
        latin:
          "Walâ a‘addat minal-fi‘lil-jamîli qirâ dlaifin alamma bira'sî ghaira muḫtasyimi",
        translation:
          "Nafsu amarahku tak mampu bersiap-siap diri, dengan mengerjakan amal baik yang bernilai. Untuk menyambut kedatangan tamu yang pasti, tamu yang singgah di kepala nan tiada malu lagi.",
      },
      {
        arabic:
          "لَوْ كُنْتُ أَعْلَــــمُ أَنِّي مَــا أُوَقِّــــــرُهُ كَتَمْتُ سِرًّا بَدَا لِيْ مَنْهُ بِالْكَـــتَمِ",
        latin:
          "Lau kuntu a‘lamu annî mâ uwaqqiruhu katamtu sirran badâ lî manhu bil-katami",
        translation:
          "Jikalau aku tahu bahwa diriku tak mampu menghormat tamu. Maka lebih baik kusembunyikan diriku dengan cara menyemir uban di kepalaku.",
      },
      {
        arabic:
          "مَنْ لِي بِرَدِّ جِمَـــاحٍ مِنْ غَوَايَتِهَـــا كَمَا يُرَدُّ جِمَـــاحُ الْخَيْلِ بِاللُّجُمِ",
        latin:
          "Man lî biraddi jimâḫin min ghawâyatihâ kamâ yuraddu jimâḫul-khaili bil-lujumi",
        translation:
          "Siapakah gerangan? Sanggup mengendalikan nafsuku dari kesesatan. Sebagaimana kuda liar yang terkendalikan dengan tali kekangan.",
      },
      {
        arabic:
          "فَلَا تَرُمْ بِالْمَعَاصِيْ كَسْرَ شَهْوَتِهَا إِنَّ الطَّعَـــامَ يُقَوِّيْ شَهْوَةَ النَّهِمِ",
        latin:
          "Falâ tarum bil-ma‘âshî kasra syahwatihâ innath-tha‘âma yuqawwî syahwatan-nahimi",
        translation:
          "Jangan engkau berharap, dapat mematahkan nafsu dengan maksiat. Karena makanan justru bisa perkuat bagi si rakus makanan lezat.",
      },
      {
        arabic:
          "وَالنَّفْسُ كَالطِّفْلِ إِنْ تُهْمِلْهُ شَبَّ عَلَى حُبِّ الرَّضَاعِ وَإِنْ تَفْطِمْهُ يَنْفَطِمِ",
        latin:
          "Wan-nafsu kath-thifli in tuhmilhu syabba ‘alâ ḫubir-radlâ‘i wa in tafthimhu yanfathimi",
        translation:
          "Nafsu bagaikan bayi, bila kaubiarkan akan tetap suka menyusu. Namun bila engkau sapih, maka bayi akan berhenti sendiri.",
      },
      {
        arabic:
          "فَاصْرِفْ هَوَاهَا وَحَاذِرْ أَنْ تُوَلِّيَهُ إِنَّ الْهَوَى مَا تَوَلَّى يُصِمْ أَوْ يَصِمِ",
        latin:
          "Fashrif hawâhâ wa ḫâdzir an tuwallîyahu innal-hawâ mâ tawallâ yushim au yashimi",
        translation:
          "Maka palingkanlah nafsumu, takutlah jangan sampai ia menguasai-nya. Sesungguhnya nafsu, jikalau berkuasa maka akan membunuhmu dan membuatmu tercela.",
      },
      {
        arabic:
          "وَرَاعِهَا وَهْيَ فِيْ الأَعْمَالِ سَـــآئِمَةٌ وَإِنْ هِيَ اسْتَحْلَتِ الْمَرْعَى فَلَا تُسِمِ",
        latin:
          "Wa râ‘ihâ wahya fil-a‘mâli sâ’imatun wa in hiyas-taḫlatil-mar‘â falâ tusimi",
        translation:
          "Dan gembalakanlah nafsu, karena dalam amal nafsu bagaikan hewan ternak. Jika nafsu merasa nyaman dalam kebaikan, maka tetap jaga dan jangan engkau lengah.",
      },
      {
        arabic:
          "كَـمْ حَسَّنَتْ لَذَّةً لِلْمَــــــرْءِ قَـــــاتِلَةً مِنْ حَيْثُ لَمْ يَدْرِ أَنَّ السَُمَّ فِي الدَّسَمِ",
        latin:
          "Kam ḫassanat ladzdzatan lilmar`i qâtilatan min ḫaitsu lam yadri annas-summa fid-dasami",
        translation:
          "Betapa banyak kelezatan, justru bagi seseorang membawa kematian. Karena tanpa diketahui, adanya racun tersimpan dalam makanan.",
      },
      {
        arabic:
          "وَاخْشَ الدَّسَائِسَ مِنْ جُوْعٍ وَّمِنْ شِبَعٍ فَرُبَّ مَخْمَصَةٍ شَرٌّ مِنَ التُّخَمِ",
        latin:
          "Wakhsyad-dasâ'isa min jû‘i wa min syiba‘in farubba makhmashatin syarrun minat-tukhami",
        translation:
          "Takutlah terhadap tipu dayanya lapar dan kenyang. Sebab sering terjadi rasa lapar lebih daripada kenyang.",
      },
      {
        arabic:
          "وَاسْتَفْرِغِ الدَّمْعَ مِنْ عَيْنٍ قَدِ امْتَــــلَأَتْ مِنَ الْمَحَـــارِمِ وَالْزَمْ حِمْيَـــةَ النَّدَمِ",
        latin:
          "Wastafrighid-dam‘a min ‘ainin qad-imtala'at minal-muḫârimi wal-zam ḫimyatan-nadami",
        translation:
          "Deraikanlah air mata, dari pelupuk mata yang penuh noda dosa. Peliharalah rasa sesal dan kecewa karena dosa.",
      },
      {
        arabic:
          "وَخَالِفِ النَّفْسَ وَالشَّيْطَانَ وَاعْصِهِمَـا وَإِنْ هُمَا مَحَّضَاكَ النُّصْحَ فَاتَّهِمِ",
        latin:
          "Wa khâlifin-nafsa wasy-syaithâna wa‘shihimâ wa in humâ maḫḫadlâkan-nushḫa fattahimi",
        translation:
          "Lawanlah hawa nafsu dan setan durhaka, dan jagalah pada keduanya. Jika mereka tulus menasihati maka engkau harus mencurigai.",
      },
      {
        arabic:
          "وَلَا تُطِعْ مِنْهُمَا خَصْمًــــا وَلَاحَكَمًــــا فَأَنْتَ تَعْرِفُ كَيْدَ الخَصْمِ وَالْحَكَمِ",
        latin:
          "Wa lâ tuthi‘ minhumâ khashman wa lâ ḫakaman fa anta ta‘rifu kaidal-khashmi wal-ḫakami",
        translation:
          "Janganlah engkau taat kepada mereka nafsu dan setan, baik selaku musuh atau selaku hakim. Sebab engkau sudah tahu dengan nyata, bagaimana tipu dayanya dalam musuh dan menghukumi.",
      },
      {
        arabic:
          "أَسْتَغْفِـــــرُ اللهَ مِنْ قَوْلٍ بِــلَا عَمَـــــلٍ لَقَدْ نَسَبْتُ بِهِ نَسْلًا لِذِيْ عُقُمِ",
        latin:
          "Astaghfirullâha min qaulin bilâ ‘amalin laqad nasabtu bihi naslan lidzî ‘uqumi",
        translation:
          "Kumohon pengampunan kepada Allah, atas ucapan yang tanpa mengamalkan. Sungguh.. hal itu laksana orang mandul tak berketurunan.",
      },
      {
        arabic:
          "أَمَرْتُكَ الْخَــــيْرَ لٰكِنْ مَا ائْتَمَــرْتُ بِهِ  وَمَا اسْتَقَمْتُ فَمَا قَوْلِيْ لَكَ اسْتَقِمِ",
        latin:
          "Amartukal-khaira lâkin mâ'tamartu bihi wa mas-taqamtu famâ qaulî lakas-taqimi",
        translation:
          "Aku perintahkan engkau lakukan amal kebaikan, namun aku sendiri enggan mengerjakan. Maka tiada berguna ucapanku agar engkau berlaku benar, sedangkan diriku sendiri dalam kelalaian.",
      },
      {
        arabic:
          "وَلَا تَزَوَّدْتُ قَبْــــلَ الْمَوْتِ نَــــــافِـلَةً ولَمْ أُصَلِّ سِوَى فَرْضٍ وَلَمْ أَصُمِ",
        latin:
          "Wa lâ tazawwadtu qablal-mauti nâfilatan wa lam ushalli siwâ fardlin wa lam ashumi",
        translation:
          "Dan diriku tiada menambah amal kebaikan dalam kesunahan, sebelum kematian datang. Dan tiada aku shalat dan puasa, kecuali hanya ibadah yang wajibkan.",
      },
    ],
    // Halaman 3
    [
      {
        translation: "Pasal 3 : Pujian kepada Nabi Muhammad SAW",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "ظَلَمْتُ سُنَّةَ مَنْ أَحْيَا الظَّلَامَ إِلَى أَنِ اشْتَكَتْ قَدَمَاهُ الضُّرَّ مِنْ وَرَمِ",
        latin:
          "Dhalamtu sunnata man aḫyadh-dhalâma ilâ anisytakat qadamâhudl-dlurra min warami",
        translation:
          "Kutinggalkan sunnah Nabi, yang selalu beribadah menghidupkan gulita malam. Hingga telapak kaki sakit, membengkak karena ibadah malam",
      },
      {
        arabic:
          "وَشَدَّ مِنْ سَغَبٍ أَحْشَــاءَهُ وَطَوَى تَحْتَ الْحِجَارَةِ كَشْحًا مُتْرَفَ الْأَدَمِ",
        latin:
          "Wa syadda min saghabin aḫsyâ'ahu wa thawâ taḫtal-ḫijârati kasyḫan mutrafal-adami",
        translation:
          "Nabi yang begitu hebat, menahan nafsu dan lapar. Mengikatkan batu halus pada perut, karena begitu zuhud kedunyaan",
      },
      {
        arabic:
          "وَرَاوَدَتْهُ الْجِبَــــالُ الشُّمُّ مِنْ ذَهَبٍ عَنْ نَفْسِهِ فَأَرَاهَا أَيَّمَا شَمَمِ",
        latin:
          "Wa râwadathul-jibâlusy-syummu min dzahabin ‘an nafsihi fa`arâhâ ayyamâ syamami",
        translation:
          "Nabi yang ditawarkan gunung emas menjulang tinggi. Namun beliau tolak, dengan bangga perasaan hati",
      },
      {
        arabic:
          "وَأَكَّدَتْ زُهْـــدَهُ فِيْهَــــا ضَرُوْرَتُـــهُ إِنَّ الضَّرُوْرَةَ لَا تَعْدُوْ عَلَى الْعِصَمِ",
        latin:
          "Wa akkadat zuhdahu fîhâ dlarûratuhu innadl-dlarûrata lâ ta’dû ‘alal-‘ishami",
        translation:
          "Sungguh menambah kezuhudan Nabi, butuh harta namun tidak menerimanya. Meskipun ketika butuh harta, tidaklah merusak nilai kesuciannya",
      },
      {
        arabic:
          "فَكَيْفَ تَدْعُوْا إِلَى الدُّنْيَا ضَرُوْرَةُ مَنْ لَوْلَاهُ لَمْ تُخْرَجِ الدُّنْيَا مِنَ الْعَدَمِ",
        latin:
          "Fakaifa tad‘û ilad-dunyâ dlarûratu man lâhu lam tukhrijid-dunyâ minal-‘adami",
        translation:
          "Bagaimana mungkin nabi nan mulia tertarik kepada kemilau harta dunia. Andaisaja tanpa Nabi Muhammad ﷺ, dunia takkan pernah ada",
      },
      {
        arabic:
          "مُحَمَّــدٌ سَيِّدُ الْكَوْنَيْنِ وَالثَّـــقَلَيْـــ ــنِ وَالْفَرِيقَيْنِ مِنْ عُرْبٍ وَمِنْ عَجَمِ",
        latin:
          "Muḫâmmadun sayyidul-kaunaini watstsaaqalai ni wal-farîqaini min ‘urbin wa min ‘ajami",
        translation:
          "Dialah Nabi Muhammad ﷺ, sang penghulu seorang pemimpin baik di dunia dan akhirat. Juga pemimpin jin dan manusia, baik bangsa Arab ataupun ajam",
      },
      {
        arabic:
          "نَبِيُّنَا الْآمِرُ النَّــــاهِيْ فَلَا أَحَــــدٌ أَبَرَّ فِيْ قَوْلِ لَا مِنْهُ وَلَا نَعَمِ",
        latin:
          "Nabiyyunâl-âmirun-nâhî falâ aḫadun abarra fî qauli lâ minhu wa lâ na‘ami",
        translation:
          "Yaitu nabi kita Rasulullah Muhammad ﷺ, sang penganjur kebaikan dan pencegah kemungkaran. Tak seorang pun lebih baik daripada Rasulullah ﷺ, dalam berkata jangan engkau lakukan dan ini sangat baik kaukerjakan",
      },
      {
        arabic:
          "هُوَ الْحَبِيْبُ الَّذِيْ تُرْجَى شَفَاعَتُهُ لِكُلّ هَوْلٍ مِنَ الْأَهْوَالِ مُقْتَحِمِ",
        latin:
          "Huwal-ḫabîbul-ladzî turjâ syafâ‘atuhu likulli haulin minal-ahwâli muqtaḫimi",
        translation:
          "Beliau kekasih Allah ta’ala, yang diharapkan oleh semua insan syafa’atnya. Dari tiap perkara yang menakutkan yang datang mencekam",
      },
      {
        arabic:
          "دَعَا إِلَى اللهِ فَالْمُسْتَمْسِكُونَ بِهِ مُسْتَمْسِكُوْنَ بِحَبْلٍ غَيْرِ مُنْفَصِمِ",
        latin:
          "Da‘â ilallâḫi fal-mustamsikûna bihi mustamsikûna biḫablin ghairi munfashimi",
        translation:
          "Beliau mengajak menuju keridhaan Allah ta’ala, orang yang berpegang teguh padanya. Berarti ia berpegang pada tali tali yang pasti takkan putus",
      },
      {
        arabic:
          "فَاقَ النَّبِيِّيْنَ فِي خَلْقٍ وَّفِيْ خُــلُقٍ وَلَمْ يُدَانُـوْهُ فِيْ عِلْمٍ وَلَا كَرَمِ",
        latin:
          "Fâqan-nabiyîna fî khalqin wa fî khuluqin wa lam yudânûhu fî ‘ilmin wa lâ karami",
        translation:
          "Beliau melampaui para nabi terdahulu baik ketampanan ataupun akhlak budi pekerti. Mereka para nabi terdahulu takkan menyamai Rasulullah ﷺ, baik dalam ilmu atau kemulian-Nya",
      },
      {
        arabic:
          "وَكُلُّـهُــمْ مِنْ رَسُوْلِ اللهِ مُلْتَمِسٌ غَرْفًا مِنَ الْبَحْرِ أَوْ رَشْفًا مِنَ الدِّيَمِ",
        latin:
          "Wa kulluhum min rasûlillâhi multamisun gharfan minal-baḫri au rasyfan minad-diyami",
        translation:
          "Semua para nabi terdahulu memohon dari diri Rasulullah ﷺ. Seciduk lautan ilmunya dan setetes hujan kesantunannya",
      },
      {
        arabic:
          "وَوَاقِفُوْنَ لَدَيْـــهِ عِنْدَ حَـــدِّهِمُ مِنْ نُقْطَةِ الْعِلْمِ أَوْ مِنْ شَكْلَةِ الْحِكَمِ",
        latin:
          "Wa wâqifûna ladaihi ‘inda ḫaddihimu min nuqthatil-‘ilmi au min syaklatil-ḫikami",
        translation:
          "Berdirilah mereka para nabi di sisi Rasulullah pada puncak mereka, mengharap setitik ilmu dan sebaris tanda bunyi huruf dalam hikmah",
      },
      {
        arabic:
          "فَهْوَ الَّذِيْ تَمَّ مَعْنَاهُ وَصُـوْرَتُهُ ثُمَّ اصْطَفَاهُ حَبِيْبًا بَــارِئُ النَّسَمِ",
        latin:
          "Fahwal-ladzî tamma ma‘nâhu wa shûratuhu tsummash-thafâhu ḫabîban bâri'un-nasami",
        translation:
          "Dialah nabi yang sempurna baik batin atau lahirnya. Kemudian Rasulullah ﷺ, terpilih sebagai kekasih Allah ta’ala, pencipta manusia",
      },
      {
        arabic:
          "مُنَزَّهٌ عَنْ شَرِيْكٍ فِيْ مَحَـــاسِنِهِ فَجَوْهَرُ الْحُسْنِ فِيِهِ غَيْرُ مُنْقَسِمِ",
        latin:
          "Munazzahun ‘an syarîkin fî maḫâsinihi Fajauharul-ḫusni fîhi ghairu munqasimi",
        translation:
          "Dia sang nabi yang suci dari persamaan dalam segala kebaikan. Inti kebaikan pada diri nabi tak mungkin terbagi",
      },
      {
        arabic:
          "دَعْ مَا ادَّعَتْهُ النَّصَارَى فِي نَبِيّهِمُ وَاحْكُمْ بِمَا شِئْتَ مَدْحًا فِيْهِ وَاحْتَكِمِ",
        latin:
          "Da‘ mad-da‘athun-nashârâ fî nabiyyihimu waḫkum bimâ syi'ta madḫan fîhi waḫtakimi",
        translation:
          "Tinggalkan tuduhan kaum nasrani, tuduhan yang dilontarkan kepada nabi-nabi mereka. Tetapkanlah untaian pujian kepada nabi pujian apa pun yang engkau suka",
      },
      {
        arabic:
          "وَانْسُبْ إِلَى ذَاتِهِ مَا شِئْتَ مِنْ شَرَفٍ وَانْسُبْ إِلَى قَدْرِهِ مَا شِئْتَ مِنْ عِظَمِ",
        latin:
          "Wansub ilâ dzâtihi mâ syi'ta min syarafin wansub ilâ qadrihi mâ syi'ta min ‘adhami",
        translation:
          "Nisbahkan kepada dzat nabi segala kemulian yang engkau kehendaki. Nisbahkan kepada martabat nabi segala keagungan yang engkau kehendaki",
      },
      {
        arabic:
          "فَإِنَّ فَضْلَ رَسُـوْلِ اللهِ لَيْسَ لَهُ حَدٌّ فَيُعْرِبَ عَنْهُ نَـــاطِقٌ بِفَـــمِ",
        latin:
          "Fainna fadlla rasûlillâhi laisa lahu ḫaddun fayu‘riba ‘anhu nâthiqun bifami",
        translation:
          "Karena keutamaan Rasulallah ﷺ, tiada tepi batasnya, sehingga mengurai mudah terasa, bagi lisan yang berkata",
      },
      {
        arabic:
          "لَوْ نَاسَبَتْ قَدْرَهُ اٰيَـــاتُهُ عِظَمًــا أَحْيَا اسْمُهُ حِيْنَ يُدْعَىٰ دَارِسَ الرِّمَمِ",
        latin:
          "Lau nâsabat qadrahu âyâtuhu ‘idhaman aḫyâs muhu ḫîna yud‘â dârisar-rimami",
        translation:
          "Andai saja keagungan mukjizat Rasulullah sama dengan ketinggian derajatnya, maka dengan sebutan namanya dapat hidupkan orang yang telah hancur tulangnya",
      },
      {
        arabic:
          "لَمْ يَمْتَحِنَّا بِمَا تَعْيَا الْعُقُـوْلُ بِـــهِ حِرْصًا عَلَيْنَا فَلَمْ نَرْتَـبْ وَلَمْ نَهِمِ",
        latin:
          "Lam yamtaḫinnâ bimâ ta‘yal-‘uqûlu bihi ḫirshan ‘alainâ falam nartab wa lam nahimi",
        translation:
          "Nabi tidaklah menguji kita dengan apa yang tak terjangkau akal manusia, karena sangat cintanya kita peroleh cahaya hingga tiada ragu bimbang pada apa yang ia bawa",
      },
      {
        arabic:
          "أَعْيَا الوَرَى فَهْمُ مَعْنَاهُ فَلَيْسَ يُرَى فِي الْقُرْبِ وَالْبُعْدِ فِيْـــهِ غَيْرُ مُنْفَحِمِ",
        latin:
          "A‘yal-warâ fahum ma‘nâhu falaisa yurâ fil-qurbi wal-bu‘di fîhi ghairu munfaḫimi",
        translation:
          "Seluruh makhluk rapuh, tiada mampu memahami rahasia hakikat kenabian, takkan melihat dari dekat atau jauh kecuali lemah tak berdaya berdiam diri",
      },
      {
        arabic:
          "كَالشَّمْسِ تَظْهَرُ لِلْعَيْنَيْنِ مِنْ بُعُدٍ صَغِيْرةً وَتُكِلُّ الطَّرْفَ مِنْ أَمَمِ",
        latin:
          "Kasy-syamsi tadh-haru lil-‘ainaini min bu‘udin shaghîratan wa tukilluth-tharfa min amami",
        translation:
          "Kenabian Rasulullah, bagaikan matahari dari jauh tampak kecil pada kedua mata. Padahal mata tiada akan mampu bila berdekatan dengannya",
      },
      {
        arabic:
          "وَكَيْفَ يُدْرِكُ فِي الدُّنْيَا حَقِيقَتَـــهُ قَوْمٌ نِيَامٌ تَسَلَّوْا عَنْهُ بِالْحُلُمِ",
        latin:
          "Wa kaifa yudriku fid-dunyâ ḫaqîqatahu qaumun niyâmun tasallau ‘anhu bil-ḫulumi",
        translation:
          "Bagaimana diketahui hakikat Nabi semasa dalam dunia, sedangkan mereka lega jumpa Nabi walau dalam sekilas mimpi",
      },
      {
        arabic:
          "فَمَبْــــلَغُ الْعِـــــلْمِ فِيْـــهِ أَنَّــــهُ بَشَرٌ وَأَنَّهُ خَيْرُ خَلْقِ اللهِ كُلِّهِمِ",
        latin:
          "Famablaghul-‘ilmi fîhi annahu basyarun wa annahu khairu khlaqillâhi kullihimi",
        translation:
          "Puncak pengetahuan tentang Rasulullah, bahwa sesungguhanya beliau adalah manusia. Dan sesungguhnya beliau sebaik-baik makhluk Allah, semua tanpa terkecuali",
      },
      {
        arabic:
          "وَكُلُّ اٰيٍ أَتَى الرُّسْلُ الْكِرَامُ بِهَا فَإِنَّمَا اتَّصَلَتْ مِنْ نُـوْرِهِ بِهِمِ",
        latin:
          "Wa kullu âyin atar-ruslul-kirâmu bihâ fa innamat-tashalat min nûrihi bihimi",
        translation:
          "Semua ayat, mukjizat yang datang tiba dibawa para rasul mulia. Hanyalah pancaran nur Rasulullah ﷺ, yaitu nur yang melekat pada para rasul",
      },
      {
        arabic:
          "فَإِنَّهُ شَمْسُ فَضْلٍ هُمْ كَوَاكِبُـهَايُظْهِرْنَ أَنْوَارَهَا لِلنَّـاسِ فِيْ الظُّلَمِ",
        latin:
          "Fainnahu syamsu fadl-lin hum kawâkibuhâ yudh-hirnâ anwârahâ lin-nâsi fidh-dhulami",
        translation:
          "Maka sesungguhnya Rasulullah bagaikan mentari dalam keutamaan, sedangkan para nabi bagaikan bintang-bintang-nya. Bintang pantulkan sinar sang surya kepada manusia dalam suasana gelap gulita",
      },
      {
        arabic:
          "أَكْرِمْ بِخَـــــلْقِ نَبِيٍّ زَانَـــهُ خُــلُقٌ بِالْحُسْنِ مُشْتَمِلٍ بِالْبِشْرِ مُتَّسِمِ",
        latin:
          "Akrim bikhalqi nabiyyin zânahu khuluqun bil-ḫusni musytamilin bil-bisyri muttasimi",
        translation:
          "Alangkah mulia budipekerti Rasulullah, yang menghiasi kesempurnaan keanggunan-nya. Keindahan yang dimiliki paras wajahnya tampak berseri",
      },
      {
        arabic:
          "كَالزَّهْرِ فِيْ تَرَفٍ وَالبَدْرِ فِي شَرَفٍ وَالبَحْرِ فِيْ كَرَمٍ وَالدَّهْرِ فِي هِمَمِ",
        latin:
          "Kaz-zahri fî tarafin wal-badri fî syarafin wal-baḫri fî karamin wad-dahri fî himami",
        translation:
          "Keanggunannya laksana bunga, dan kemuliaannya bagaikan purnama. Kedermawanannya laksana samudera, cita-citanya bagai perjalanan masa",
      },
      {
        arabic:
          "كَأَنَّــــهُ وَهْوَ فَـــــــرْدٌ مِنْ جَــــلَالَتِـــهِ فِي عَسْكَرٍ حِيْنَ تَلْقَــاهُ وَفِيْ حَشَمِ",
        latin:
          "Ka'annahu wahwa fardun min jalâlatihi fî ‘askarin ḫîna talqâhu wa fî ḫasyami",
        translation:
          "Seakan-akan Rasulullah nabi yang berbeda dari nabi-nabi lainnya dari keagungannya. Di antara para pasukan dan pelayan kala engkau jumpa karena dampak keagungannya",
      },
      {
        arabic:
          "كَأَنَّمَا اللُّؤْلُؤُ الْمَكْنُـوْنُ فِيْ صَدَفٍ مِنْ مَّعْدِنَيْ مَنْطِقٍ مِنْهُ وَمُبْتَسَمِ",
        latin:
          "Ka'annamâl-lu'lu'ul-maknûnu fî shadafin min ma‘dinai manthiqin minhu wa mubtasami",
        translation:
          "Rasulullah bagaikan mutiara yang tersimpan dalam kerangnya. Dikeluarkan dari dua pemikat yaitu ucapan dan senyumnya",
      },
      {
        arabic:
          "لَا طِيْبَ يَعْدِلُ تُرْبًا ضَمَّ أَعْظُمَــهُ طُوبَ لِمُنْتَشِقٍ مِنْهُ وَمُلْتَثِمِ",
        latin:
          "Lâ thîba ya‘dilu turban dlamma a‘dhumahu thûba limuntasyiqin minhu wa multatsimi",
        translation:
          "Tiada keharuman melebihi tanah buana, tanah yang mengubur jasadnya. Betapa bahagia orang yang mencium dan mengecupnya",
      },
    ],
    // Halaman 4
    [
      {
        translation: "Pasal 4 : Kelahiran Rasulullah SAW",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "أَبَانَ مَوْلِدُهُ عَنْ طِيْبِ عُنْصُرِهِ يَا طِيْبَ مُفْتَتَحٍ مِنْهُ وَمُخْتَــــتَمِ",
        latin:
          "Abânâ mauliduhu ‘an thîbi ‘unshurihi yâ thîba muftataḫin minhu wa mukhtatami",
        translation:
          "Kelahiran sang nabi menampakkan kesucian diri. Alangkah indah permulaannya, juga indah penghabisannya",
      },
      {
        arabic:
          "يَوْمٌ تَفَرَّسَ فِيْـــهِ الفُرْسُ أَنَّهُـــمُو قَدْ أُنْذِرُوا بِحُلُوْلِ الْبُؤْسِ وَالنِّقَمِ",
        latin:
          "Yaumun tafarrasa fîhil-fursu annahumu qad undzirû biḫulûlil-bu'si wan-niqami",
        translation:
          "Hari kelahiran Rasulullah saat ada firasat bangsa Persia, bahwa ada peringatan kepada mereka datangnya bencana dan siksa",
      },
      {
        arabic:
          "وَبَاتَ إِيْوَانُ كِسْرَى وَهْوَ مُنْصَدِعٌ كَشَمْلِ أَصْحَابِ كِسْرَى غَيْرِ مُلْتَئِمِ",
        latin:
          "Wa bâta îwânu kisrâ wahwa munshadi‘i kasyamli ashḫâbi kisrâ ghairi multa`imi",
        translation:
          "Saat menjelang malam tiba istana kisra hancur terbelah. Sebagaimana kumpulan sahabat kisra tiada menyatu terpecah belah",
      },
      {
        arabic:
          "وَالنَّارُ خَامِدَةُ الْأَنْفَاسِ مِنْ أَسَفٍ عَلَيْهِ وَالنَّهْرُ سَاهِيْ العَيْنِ مِنْ سَدَمِ",
        latin:
          "Wan-nâru khâmidatul-anfâsi min asafin ‘alaihi wan-nahru sâhîl-‘aini min sadami",
        translation:
          "Api sesembahan padam karena duka yang mencekam. Sungai Eufrat tak mengalir, muram karena susah yang amat dalam",
      },
      {
        arabic:
          "وَسَآءَ سَاوَةَ أَنْ غَاضَتْ بُحَيْرَتُهَا وَرُدَّ وَارِدُهَا بِالْغَيْظِ حِيْنَ ظَمِيْ",
        latin:
          "Wa sâ'a sâwata an ghâdlat buḫairatuhâ wa rudda wâriduhâ bil-ghaidhi ḫîna dhamî",
        translation:
          "Penduduk negeri sawah resah duka saat danaunya kering keronta. Pengambil air kembali dengan tangan hampa kecewa ketika terjerat rasa dahaga",
      },
      {
        arabic:
          "كَأَنَّ بِالنَّارِ مَا بِالْمَـــآءِ مِنْ بَلَلٍ حُزْنًا وَبِالْمَآءِ مَا بِالنَّارِ مِنْ ضَرَمِ",
        latin:
          "Ka 'anna bin-nâri mâ bil-mâ'i min balalin ḫuznan wa bil-mâ'i mâ bin-nâri min dharami",
        translation:
          "Seakan akan pada api nan membara terdapat cairan air karena duka. Dan pada air nan sejuk segar api yang membakar",
      },
      {
        arabic:
          "وَالْجِنُّ تَهْتِفُ وَالْأَنْوَارُ سَاطِعَةٌ وَالْحَقُّ يَظْهَرُ مِنْ مَّعْنًى وَمِنْ كَلِـــمِ",
        latin:
          "Wal-jinnu tahtifu wal-anwâru sâthi‘atun wal-ḫaqqu yadh-haru min ma‘nan wa min kalimi",
        translation:
          "Para jin menjerit, suara cahaya membumbung ke angkasa. Kebenaran tampak nyata dari makna maupun kata",
      },
      {
        arabic:
          "عَمُوْا وَصَمُّوا فَإِعْلَانُ الْبَشَائِرِ لَمْ تُسْمَعْ وَبَـــارِقَةُ الْإِنْذَارِ لَمْ تُشَمِ‘",
        latin:
          "Amû wa shammû fa i‘lânul-basyâ'iri lam tusma’ wa bâriqatul-indzâri lam tusyami",
        translation:
          "Mereka buta dan tuli tak dengar hingga kabar gembira tiada didengar. Begitu juga kilatan peringatan sama sekali tak terhiraukan",
      },
      {
        arabic:
          "مِنْ بَعْدِ مَا أَخْـــبَرَ الْأَقْوَامَ كَاهِنُهُـــمْ بِأَنَّ دِيْنَهُمُ الْمُعْوَجَّ لَمْ يَقُـــمِ",
        latin:
          "Min ba’di mâ akhbaral-aqwâma kâhinuhum bi anna dînahumul-mu’awwaju lam yaqumi",
        translation:
          "Para rahib mereka telah kabarkan berita. Bahwa agama mereka melenceng, dan tak kan bertahan lama",
      },
      {
        arabic:
          "وَبَعْدَمَا عَايَنُوْا فِيْ الْأُفُقِ مِنْ شُهُبٍ مُنْقَضَّةٍ وَّفْقَ مَا فِيْ الْأَرْضِ مِنْ صَنَمِ",
        latin:
          "Wa ba‘da mâ ‘ayyanû fil-ufuqi min syuhubin munqadldlatin wafqa mâ fil-ardli min shanami",
        translation:
          "Setelah mereka menyaksikan bintang-bintang di ufuk berjatuhan. Bersamaan di bumi ada kejadian berhala-berhala runtuh bergelimpangan",
      },
      {
        arabic:
          "حَتَّى غَدَا عَنْ طَرِيقِ الْوَحْيِ مُنْهَزِمٌ مِنَ الشَّيَاطِيْنِ يَقْفُو إِثْرَ مُنْهَزِمِ",
        latin:
          "Ḫattâ ghadâ ‘an tharîqil-waḫyi munhazimun minasy-syayâthîni yaqfû itsra munhazimi",
        translation:
          "Hingga lenyap syetan berlari terbirit-birit dari pintu langit jalan wahyu ilahi. Mereka lari mengikuti syetan nan berlari tak henti",
      },
      {
        arabic:
          "كَأَنَّهُمْ هَرَبًــــا أَبْطَالُ أَبْرَهَـــةٍ أَوْ عَسْكَرٌ بِالْحَصَى مِنْ رَاحَتَيْهِ رُمِيْ",
        latin:
          "Ka'annahum haraban abthâlu abrahatin au ‘askarun bil-ḫashâ min râḫataihi rumî",
        translation:
          "Mereka berlarian laksana lasykar Raja Abrahah. Atau bak pasukan yang dihujani kerikil oleh tangan Rasul",
      },
      {
        arabic:
          "نَبْذًا بِهِ بَعْدَ تَسْبِيحٍ بِبَطْنِهِمَا نَبْذَ الْمُسَبِّحِ مِنْ أَحْشَآءِ مُلْتَقِمِ",
        latin:
          "Nabdzan bihi ba‘da tasbîhin bibathnihimâ nabdzal-musabbiḫi min akhsyâ'i multaqimi",
        translation:
          "Batu yang nabi lemparkan, setelah bertasbih dalam genggaman. Bak terlemparnya nabi yunus dari perut ikan paus",
      },
    ],
    // Halaman 5
    [
      {
        translation: "Pasal 5 : Mukjizat Nabi Muhammad SAW",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "جَـــآءَتْ لِدَعْوَتِهِ الْأَشْجَارُ سَـاجِدَةً تَمْشِيْ إِلَيْهِ عَلَى سَاقٍ بِلَا قَدَمِ",
        latin:
          "Jâ'at lida‘watihil-asyjâru sâjidatan tamsyî ilaihi ‘alâ sâqin bilâ qadami",
        translation:
          "Pepohonan datang memenuhi panggilannya dengan sikap tunduk sopan. Berjalan menghadap kepadanya dengan batang tanpa telapak",
      },
      {
        arabic:
          "كَأَنَّ مَا سَطَرَتْ سَطْرًا لِمَا كَتَبَتْ فُرُوْعُهَا مِنْ بَدِيْعِ الْخَطِّ فِيْ اللَّقَمِ",
        latin:
          "Ka anna mâ satharat sathran limâ katabat furû‘uhâ min badî‘il-khaththi fîl-laqami",
        translation:
          "Seakan-akan pepohonan itu tuliskan sebuah lukisan. Lukisan indah menawan ditulis dahan di tengah jalan",
      },
      {
        arabic:
          "مِثْلَ الْغَمَــــامَةِ أَنَّى سَارَ سَـــآئِـــرَةٌ تَقِيْهِ حَرَّ وَطِيْسٍ لِّلْهَجِيْرِ حَمِي",
        latin:
          "Mitslal-ghamâmati anna sâra sâ'iratun taqîhi ḫarra wathîsil-lilhajîri ḫamî",
        translation:
          "Sebagaimana gumpalan awan ke mana saja nabi pergi, ia sebagai payung perlindungan dari sengatan panas mentari di siang hari",
      },
      {
        arabic:
          "أَقْسَمْتُ بِالْقَمَــــرِ الْمُنْشَقِّ إِنَّ لَهُ مِنْ قَلْبِهِ نِسْبَةً مَبْرُوْرَةَ الْقَسَمِ",
        latin:
          "Aqsamtu bil-qamaril-munsyaqqi inna lahu min qalbihi nisbatan mabrûratal-qasami",
        translation:
          "Aku bersumpah demi penguasa rembulan nan pecah. Sesungguhnya hati nabi nan terbelah bak bulan yang dibelah",
      },
      {
        arabic:
          "وَمَا حَوَى الْغَـــارُ مِنْ خَيْرٍ وَّمِنْ كَرَمٍ وَكُلُّ طَرْفٍ مِنَ الكُفَّـــارِ عَنْهُ عَمِيْ",
        latin:
          "Wa mâ ḫawal-ghâru min khairin wa min karami wa kullu tharfin minal-kuffâri ‘anhu ‘amî",
        translation:
          "Dalam gua Tsur nabi bersembunyi Abu Bakar sahabat yang menyertai. Semua mata kafir jadi buta tak dapat melihat mereka berdua",
      },
      {
        arabic:
          "فَالصِّدْقُ فِي الْغَارِ وَالصِّدِّيْقُ لَمْ يَرِمَـا وَهُمْ يَقُوْلُوْنَ مَا بِالْغَـــارِ مِنْ أَرِمِ",
        latin:
          "Fash-dhidqu fil-ghâri wash-shiddîqu lam yarimâ wa hum yaqûlûna mâ bil-ghâri min arami",
        translation:
          "Nabi dan Abu Bakar As-Siddiq keduanya berada dalam gua. Mereka orang-orang kafir berkata tak seorang pun dalam gua",
      },
      {
        arabic:
          "ظَنُّوْا الْحَمَامَ وَظَنُّوا الْعَنْكَبُوْتَ عَلَى خَيْرِ الْبَرِيّةِ لَمْ تَنْسُجْ وَلَمْ تَحُمِ",
        latin:
          "Dhannul-ḫamâma wadhannûl-‘ankabûta ‘alâ khairil-bariyyati lam tansuj wa lam taḫumi",
        translation:
          "Mereka berprasangka merpati takkan berputar sekitar gua. Laba laba takkan bersarang di mulut gua jika sebaik-baik makhluk di dalamnya",
      },
      {
        arabic:
          "وِقَــــايَةُ اللهِ أَغْنَتْ عَنْ مُضَـــاعَفَــةٍ مِنْ الدُّرُوْعِ وَعَنْ عَالٍ مِنَ الْأُطُمِ",
        latin:
          "Wiqâyatullâḫi aghnat ‘an mudlâ‘afatin minad-durû‘i wa ‘an ‘âlin minal-uthumi",
        translation:
          "Cukuplah perlindungan Allah, tiada butuh lagi. Pada baju berlapis besi dan benteng benteng nan tinggi",
      },
      {
        arabic:
          "مَا ضَامَنِي الدَّهْرُ يَوْمًا وَّاسْتَجَرْتُ بِهِ إِلَّا وَنِلْتُ جِوَارًا مِنْهُ لَمْ يُضَـــمِ",
        latin:
          "Mâ dlâmanîd-dahru yauman was-tajartu bihi illâ wa niltu jiwâran minhu lam yudlami",
        translation:
          "Tiada satu pun menyakiti diriku, lalu kumohon bantuan Nabi, niscaya kudapat pertolongannya tanpa sedikit pun disakiti",
      },
      {
        arabic:
          "وَلَا الْتَمَسْتُ غِــنَى الدَّارَيْنِ مِنْ يَدِهِ إِلَّا اسْتلَمْتُ النَّدَى مِنْ خَيْرِ مُسْتَلَمِ",
        latin:
          "Wa lal-tamastu ghinad-dâraini min yadihi illâs-talamtun-nadâ min khairi mustalami",
        translation:
          "Aku tidak akan meminta harta kekayaan dunia dan akhirat dari tangan Beliau melainkan aku kan mengambil pemberian dari sebaik-baik orang dalam memenuhi permintaan umatnya",
      },
      {
        arabic:
          "لَا تُنْكِرِ الْوَحْيَ مِنْ رُؤْيَاهُ إنَّ لَهُ قَلْبًا إِذَا نَامَتِ الْعَيْنَانِ لَمْ يَنَمِ",
        latin:
          "Lâ tunkiril-waḫya min ru'yâhu inna lahu qalban idzâ nâmatil-‘ainâni lam yanâmi",
        translation:
          "Janganlah kaupungkiri wahyu yang diraihnya lewat mimpi. Karena hatinya tetap terjaga meski dua matanya tidur terlena",
      },
      {
        arabic:
          "وَذَاكَ حِـــيْنَ بُلُوغٍ مِن نُبُـوَّتِـــــهِ فَلَيْسَ يُنكَرُ فِيْـــهِ حَالُ مُحْتَلِمِ",
        latin:
          "Fadzâka ḫîna bulûghin min nubuwwatihi falaisa yunkaru fîhi ḫâlu muḫtalimi",
        translation:
          "Demikian itu terjadi tatkala beliau diangkat menjadi nabi. Maka tak perlu diingkari keadaan nabi yang bermimpi",
      },
      {
        arabic:
          "تَبَــارَكَ اللهُ مَا وَحْيٌ بِمُكْتَسَبٍ وَلَا نَبِيٌّ عَلَى غَيْبٍ بِمُتَّهَمِ",
        latin:
          "Tabârakallâhhu mâ waḫyun bimuktasabin wa lâ nabiyyun ‘alâ ghaibin bimuttahami",
        translation:
          "Allah Mahasuci wahyu tiada dapat dicari. Tak ada seorang nabi dalam berita ghaibnya dicurigai",
      },
      {
        arabic:
          "كَمْ أَبْرَأَتْ وَصِبًا بِاللَّمْسِ رَاحَتُهُ وَأَطْلَقَتْ أَرِبًا مِنْ رِبْقَةِ اللَّمَمِ",
        latin:
          "Kam abra'at washiban bil-lamsi râhatuhu wa athlaqat ariban min ribqatil-lamami",
        translation:
          "Betapa banyak orang sakit sembuh ketika telapak tangannya menyentuh. Dan menyelamatkan orang yang butuh dari sakit gila yang terus kambuh",
      },
      {
        arabic:
          "وَأَحْيَتِ السَّنَةَ الشَّهْبَـــاءَ دَعْوَتُهُ حَتَّى حَكَتْ غُرَّةً فِيْ الْأَعْصُرِ الدُّهُمِ",
        latin:
          "Wa aḫyatis-sanatasy-syahbâ'a da‘watuhu ḫattâ ḫakat ghurratan fil-a‘shurid-duhumi",
        translation:
          "Doa nabi dapat hidupkan tahun kering nan tiada hujan. Hingga bak titik putih di muka dalam lipatan hitamnya masa",
      },
      {
        arabic:
          "بِعَارِضٍ جَادَ أَوْ خِلْتُ الْبِطَاحَ بِهَا سَيْبًا مِّنَ الْيَمِّ أَوْ سَيْلاً مِنَ العَرِمِ",
        latin:
          "Bi‘âridlin jâda au khiltul-bithâḫa bihâ saiban minal-yammi au sailan minal-‘arami",
        translation:
          "Dengan awan yang hujannya deras hingga aku duga jurang nan luas. Air mengalir dari samudera atau mengalir dari lembah yang menganga",
      },
    ],
    // Halaman 6
    [
      {
        translation: "Pasal 6 : Kemuliaan Al-Quran dan Pujian Terhadapnya",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },

      {
        arabic: "دَعْنِيْ وَوَصْفِيْ اٰيَــــاتٍ لَهُ",
        latin: "Da’nî wa washfî âyâtin lahu dhaharat",
        translation: "Biarkan aku mengurai mukjizat yang tampak pada nabi.",
      },
      {
        arabic: "ظَهَـــرَتْ ظُهُوْرَ نَارِ الْقِرَى لَيْلًا عَلَى عَلَمِ",
        latin: "dhuhûra nâril-qirâ lailan ‘alâ ‘alami",
        translation:
          "Tampak bagai api jamuan malam hari di atas gunung menjulang tinggi",
      },
      {
        arabic: "فَالدُّرُّ يَزْدَادُ حُسْنًا وَّهُوَ",
        latin: "Fad-durru yazdâdu husnan wa huwa",
        translation:
          "Mutiara akan bertambah indah ketika dalam kondisi tersusun rapi",
      },
      {
        arabic: "مُنْتَظِمٌ وَلَيْسَ يَنْقُصُ قَدْرًا غَيْرَ مُنْتَظِمِ",
        latin: "muntadhimun wa laisa yanqushu qadran ghaira muntadhimi",
        translation:
          "walaupun (sebenarnya) kadar nilainya sama sekali tidak berkurang saat dalam keadaan terurai/tak rapi",
      },
      {
        arabic: "فَمَا تَطَاوُلُ اٰمَــالِ الْمَديْـحِ",
        latin: "Famâ tathâwulu âmâlil-madîḫi ilâ mâ fîhi",
        translation: "Mutiara bertambah indah anggun bila ia rapi tersusun.",
      },
      {
        arabic: "إِلَى مَا فِيْهِ مِنْ كَرَمِ الْأَخْلَاقِ وَالشِّيَمِ",
        latin: "min karamil-akhâqi wasy-syiyami",
        translation: "Nilainya tak berkurang sedikit pun walau tak tersusun",
      },
      {
        arabic: "اٰيَـاتُ حَقٍّ مِنَ الرَّحْمٰنُ مُحْدَثَةٌ",
        latin: "Âyâtu ḫaqqin minar-raḫmâni muḫdatsatun",
        translation:
          "Ayat-ayat Al-Qur’an adalah dari tuhan nan rahman. Baru turunnya,",
      },
      {
        arabic: "قَدِيْمَةٌ صِفَةُ الْمَوْصُوْفِ بِالْقِدَمِ",
        latin: "qadîmatun shifatul-maushûfi bil-qidami",
        translation:
          "terdahulu maknanya dan sifat Dzat yang bersifat Mahadahulu",
      },
      {
        arabic: "لَمْ تَقْتَـــرِنْ بِزَمَانٍ وَهِيَ",
        latin: "Lam taqtarin bizamânin wahiya",
        translation: "Ayat-ayat Al-Qur’an tak bersamaan dengan zaman.",
      },
      {
        arabic: "تُخْبِرُنَــا عَنِ الْمَعَادِ وَعَنْ عَادٍ وَعَنْ إِرَمِ",
        latin: "tukhbirunâ ‘anil-ma‘âdi wa ‘an ‘âdin wa ‘an irami",
        translation:
          "Dan ayat-ayat Al-Qur’an telah kabarkan pada kita tentang akhirat, kaum ‘Ãd dan kota Iram",
      },
      {
        arabic:
          "دَامَتْ لَدَيْنَا فَفَاقَتْ كُلَّ مُعْجِزَةٍ مِنَ النَّبِيِّيْنَ إِذْ جَآءَتْ وَلَمْ تَدُمِ",
        latin:
          "Dâmat ladainâ fafâqat kulla mu‘jizatin minan-nabiyyîna idz jâ'at wa lam tadumi",
        translation:
          "Ayat-ayat ilahi di sisi kita kekal abadi. Mengungguli mukjizat para nabi mukjizat yang datang tiada lestari",
      },
      {
        arabic: "مُحْكَمـَــاتٌ فَمَا تُبْقِيْنَ مِنْ",
        latin: "Muḫkamâtun famâ tubqîna min",
        translation: "Sungguh kokoh itu Al-Qur’an tak tinggalkan keserupaan.",
      },
      {
        arabic: "شُبَــــهٍ لِذِيْ شِقَاقٍ وَلَا تَبْغِيْنَ مِنْ حَكَمِ",
        latin: "syubahin lidzî syiqâqin wa lâ tabghîna min ḫakami",
        translation:
          "Bagi yang punya perselisihan dan tak usah cari hakim kebenaran",
      },
      {
        arabic: "مَا حُوْرِبَتْ قَطُّ إِلَّا عَادَ مِنْ",
        latin: "Mâ ḫûribat qaththu illâ ‘âda min",
        translation:
          "Sama sekali Al-Qur’an tak akan ditentang kecuali akan kembali dari medan perang.",
      },
      {
        arabic: "حَرَبٍ أَعْدَى الْأَعَادِيْ إِلَيْهَا مُلْقِيَ السَّلَمِ",
        latin: "ḫarabin a‘dal-a‘âdî ilaihâ mulqiyas-salami",
        translation:
          "Musuh yang sangat hebat dan pasrah dalam keadaan tunduk dan pasrah",
      },
      {
        arabic: "رَدَّتْ بَلَاغَتُهَــــا دَعْوَى",
        latin: "Raddat balâghatuhâ da‘wâ",
        translation: "Keindahan sastranya menaklukkan penentangnya.",
      },
      {
        arabic:
          "مُعَارِضِهَــــا رَدَّ الْغَيُورِ يَدَ الْجَانِ عَنِ الْحُرَمِ",
        latin: "mu‘âridihâ raddal-ghuyûri yadal-jâni ‘anil-ḫurami",
        translation:
          "Bagai pencemburu membela keluarganya dari tangan jahil yang menjamahnya",
      },
      {
        arabic: "لَهَا مَعَانٍ كَمَوْجِ الْبَحْرِ فِيْ",
        latin: "Lahâ ma‘ânin kamaujil-baḫri fî",
        translation:
          "Bagi Al-Qur’an berlimpah banyak makna bertambah-tambah bak ombak samudera.",
      },
      {
        arabic: "مَدَدٍ وَفَوْقَ جَوْهَرِهِ فِيْ الْحُسْنِ وَالْقِيَمِ",
        latin: "madadin wa fauqa jauharihi fil-ḫusni wal-qiyami",
        translation: "Keindahan dan nilainya melebihi mutiara samudera",
      },
      {
        arabic:
          "فَـــلَا تُعَدُّ وَلَا تُحْصٰى عَجَـــائِبُهَــــا وَلَا تُسَامُ عَلَى الْإِكْثَارِ بِالسَّـــأَمِ",
        latin:
          "Falâ tu‘addu wa lâ tuḫshâ ‘ajâ'ibuhâ wa lâ tusâmu ‘alal-iksâri bis-sa'ami",
        translation:
          "Keajaiban ayat-ayat Al-Qur’an tak bisa dibatasi hitungan. Maknanya nan banyak bertebaran sama sekali tak membosankan",
      },
      {
        arabic:
          "قَرَّتْ بِهَـــا عَيْنُ قَارِيْهَا فَقُلْتُ لَهُ لَقَدْ ظَفَرْتَ بِحَبْلِ اللّٰهِ فَاعْتَصِمِ",
        latin:
          "Qarrat bihâ ‘ainu qârîhâ faqultu lahu laqad dhafarta biḫablillâhi fa‘tashimi",
        translation:
          "Sejuklah mata pembacanya lalu kakatakan padanya. Sungguh anda telah beroleh bahagia berpeganglah selalu pada tali Allah ta`ala",
      },
      {
        arabic:
          "إِنْ تَتْلُهَا خِيْفَةً مِنْ حَرِّ نَارِ لَظَى أَطْفَأْتَ نَارَ لَظىٰ مِنْ وِّرْدِهَا الشَّبِمِ",
        latin:
          "In tatluhâ khîfatan min ḫarri nâri ladhâ athfa'ta nâra ladhâ min wirdihâsy-syabimi",
        translation:
          "Jika karena takut engkau membacanya dari panas neraka ladha. Maka engkau padamkan panasnya karena kesejukan airnya",
      },
      {
        arabic:
          "كَأَنَّهَا الْحَوْضُ تَبْيَضُّ الْوُجُوْهُ بِهِ مِنَ العُصَاةِ وَقَدْ جَآءُوْهُ كَالْحُمَمِ",
        latin:
          "Ka annahal-ḫaudlu tabyadldlul-wujûhu bihi minal-‘ushâti wa qad jâ'ûhu kal-ḫumami",
        translation:
          "Al-Qur’an laksana telaga dapat putihkan wajah. Wajah para pendosa wajah nan hitam arang tak cerah",
      },
      {
        arabic:
          "وَكَالصِّـــرَاطِ وَكَالْمِـــــيْزَانِ مَعْــدِلَةً فَالْقِسْطُ مِنْ غَيْرِهَا فِيْ النَّـــاسِ لَمْ يَقُمِ",
        latin:
          "Wa kash-shirâthi wa kal-mizâni ma‘dilatan fal-qisthu min ghairihâ fin-nâsi lam yaqumi",
        translation:
          "Al-Qur’an tegak bak lurusnya jalan laksana keadilan timbangan. Keadilan selain Al-Qur’an di kalangan manusia tiada yang langgeng bertahan lama",
      },
      {
        arabic:
          "لَا تَعْجَبَنْ لِحَسُوْدٍ رَّاحَ يُنْكِرُهَــا تَجَاهُلًا وَّهُوَ عَيْنُ الْحَاذِقِ الْفَهِمِ",
        latin:
          "Lâ ta‘jaban liḫusûdin râḥa yunkiruhâ tajâhulan wahuwa ‘ainul-ḫâdziqil-fahimi",
        translation:
          "Jangan heran pada pendengki yang berusaha mengingkari. Pura pura bodoh diri padahal ia cerdas dan memahami",
      },
      {
        arabic:
          "قَدْ تُنْكِرُ الْعَيْنُ ضَوْءَ الشَّمْسِ مِنْ رَّمَدٍ وَيُنْكِرُ الْفَمُ طَعْمَ الْمَآءِ مِنْ سَقَمِ",
        latin:
          "Qad tunkirul-‘ainu dlau'asy-syamsi min ramadin wa yunkirul-famu tha‘mal-mâ'i min saqami",
        translation:
          "Terkadang mata sakit mengingkari pada sinar matahari. Segar air tekadang mulut pungkiri karena sakit yang menyelimuti",
      },
    ],
    // Halaman 7
    [
      {
        translation: "Pasal 7 : Isra’ Mi’raj Nabi Muhammad SAW",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "يَا خَيْرَ مَنْ يَّـمَّمَ الْعَافُوْنَ سَاحَتَهُ سَعْيًا وَّفَوْقَ مُتُوْنِ الْأَيْنُقِ الرُّسُمِ",
        latin:
          "Yâ khaira man yamammal-‘âfûna sâḫatahu sa‘yan wa fauqa mutûnil-ainuqir-rusumi",
        translation:
          "Wahai sebaik-baiknya manusia, para pencari kebaikan menuju kediamannya. Dengan berjalan kaki atau unta yang cepat berlari",
      },
      {
        arabic:
          "وَمَنْ هُوَ الْاٰيَةُ الكُبْرَى لِمُعْتَبِرٍ وَمَنْ هُوَ النِّعْمَةُ الْعُظْمَى لِمُغْتَنِمِ",
        latin:
          "Wa man huwal-ayatul-kubrâ limu‘tabarin wa man huwan-na‘matul-‘udhmâ limughtanimi",
        translation:
          "Wahai nabi nan jadi pertanda besar bagi pencari i`tibar. Duhai nabi nan sebagai nikmat agung bagi orang yang ingin beruntung",
      },
      {
        arabic:
          "سَرَيْتَ مِنْ حَرَمٍ لَيْلًا إِلَى حَرَمٍ كَمَا سَرَى الْبَدْرُ فِيْ دَاجٍ مِّنَ الظُّلَمِ",
        latin:
          "Saraita min ḫaramin lailan ilâ ḫaramin kamâ sarâl-badru fî dâjin minadh-dhulami",
        translation:
          "Dikala malam engkau berjalan dari masjidil haram ke masjidil aqsha. Bagai purnama yang berjalan menembus malam gulita",
      },
      {
        arabic:
          "وَبِتَّ تَرْقَى إِلَى أَنْ نِلْتَ مَــــنْزِلَةً مِنْ قَابِ قَوْسَيْنِ لَمْ تُدْرَكْ وَلَمْ تُرَمِ",
        latin:
          "Wa bitta tarqâ ilâ an nilta manzilatan min qâbi qausaini lam tudrak wa lam turami",
        translation:
          "Dan engkau terus meninggi hingga suatu tempat engkau gapai. Yaitu tempat sekira-kira busur dua tak bisa dicapai dan diasah",
      },
      {
        arabic:
          "وَقَدَّمَتْكَ جَمِيْعُ الْأنْبِيَـــآءِ بِهَـــا وَالرُّسْلُ تَقْدِيْمَ مَخْدُوْمٍ عَلَى خَدَمِ",
        latin:
          "Wa qaddamatka jamî‘ul-anbiyâ'i bihâ war-ruslu taqdîma makhdûmin ‘alâ khadami",
        translation:
          "Para nabi dan utusan mempersilahkan anda di depan. Laksana penghormatan pelayan kepada sang majikan",
      },
      {
        arabic:
          "وَأَنْتَ تَخْتَرِقُ السَّبْعَ الطِّبَاقَ بِهِمْ فِيْ مَوْكِبٍ كُنْتَ فِيْهِ صَاحِبَ الْعَلَمِ",
        latin:
          "Wa anta takhtariqus-sab‘ath-thibâqa bihim fî maukibin kunta fîhi shâḫibal-‘alami",
        translation:
          "Engkau tembus langit tujuh petala bersama para rasul dan anbiya’. Dalam kumpulan malaikat Allah ta`ala engkaulah menjadi pemimpinnya",
      },
      {
        arabic:
          "حَتَّى إِذَا لَمْ تَدَعْ شَأْوًا لِمُسْتَبِقٍ مِنَ الدُّنُوِّ وَلَا مَرْقًى لِمُسْتَنِمِ",
        latin:
          "Ḫattâ idza lam tada‘ sya'wan limustabiqin minad-dunuwwi wa lâ marqan limustanimi",
        translation:
          "Hingga tak satu puncak engkau sisai bagi orang yang ingin mendahului. Tempat dekat dan tempat tinggi bagi pencari derajat tinggi",
      },
      {
        arabic:
          "خَفَضْتَ كُلَّ مَقَامٍ بِالْإِضَافَةِ إِذْ نُوْدِيْتَ بِالرَّفْعِ مِثْلَ الْمُفْرَدِ الْعَلَمِ",
        latin:
          "Khafadlta kulla maqâmin bil-idlâfati idz nûdîta bir-raf‘i mitslal-mufradil-‘alami",
        translation:
          "Dibandingkan dengan derajatmu derajat jadi rendah semua. Karena dengan khusus dipanggil namamu bak mufrad `alam dalam kekhususannya",
      },
      {
        arabic:
          "كَيْمَا تَفُوْزَ بِوَصْــلٍ أَيِّ مُسْتَــتِرٍ عَنِ الْعُيُوْنِ وَسِرٍّ أَيِّ مُكْتَتَمِ",
        latin:
          "Kaimâ tafûza biwashlin ayyi mustatirin ‘anil-‘uyûni wa sirrin ayyi muktatami",
        translation:
          "Agar engkau peroleh hubungan sempurna tertutup dari pandangan mata. Dan rahasia nan tiada terbuka tersimpan dari makhluk tercipta",
      },
      {
        arabic:
          "فَحُـــــزْتَ كُلَّ فَخَــــارٍ غَيْرَ مُشْتَرَكٍ وَجُزْتَ كُلَّ مَقَامٍ غَيْرَ مُزْدَحَمِ",
        latin:
          "Faḫuzta kulla fakhârin ghaira musytarakin wa juzta kulla maqâmin ghaira mazdaḫami",
        translation:
          "Kau kumpulkan semua kebanggaan keutamaan nan tak terbagi. Engkau lewati setiap derajat ketinggian derajat nan tak terdesaki",
      },
      {
        arabic:
          "وَجَلَّ مِقْدَارُ مَا وُلِّيْتَ مِنْ رُتَبٍ وَعَزَّ إِدْرَاكُ مَا أُوْلِيْتَ مِنْ نِّعَمِ",
        latin:
          "Wa jalla miqdâru mâ wullîta min rutabin wa ‘azza idrâku mâ ûlîta min ni‘ami",
        translation:
          "Sungguh agung nilainya derajat yang kaudapati. Sungguh jarang lagi langka dapatkan nikmat yang engkau diberi",
      },
      {
        arabic:
          "بُشْرَى لَنَا مَعْشَرَ الْإِسْلَامِ إِنَّ لَنَا مِنَ الْعِنَايَةِ رُكْنًا غَيْرَ مُنْهَدِمِ",
        latin:
          "Busyrâ lanâ ma’syaral-islâmin inna lanâ minal-‘inâyati ruknan ghaira munhadimi",
        translation:
          "Kabar gembira wahai golongan umat Islam. Bagi kita tiang kokoh jaya takkan roboh padam",
      },
      {
        arabic:
          "لَمَّـــــا دَعَا اللهُ دَاعِيْنَا لِطَاعَتِـــــهِ بِأَكْرَمِ الرُّسْلِ كُنَّا أَكْرَمَ الُأُمَمِ",
        latin:
          "Lammâ da‘allâhu dâ‘înâ lithâ‘atihi bi akramir-rusli kunnâ akramal-umami",
        translation:
          "Tatkala Allah panggil nabi pengajak kita karena ketaatannya kepada Allah. Dengan panggilan rasul termulia maka jadilah kita umat yang paling mulia",
      },
    ],
    // Halaman 8
    [
      {
        translation: "Pasal 8 : Perjuangan Nabi Muhammad SAW",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "رَاعَتْ قُلُوْبَ الْعِدَا أَنْبَاءُ بَعْثَتِهِ كَنَبْأَةٍ أَجْفَلَتْ غُفْلًا مِّنَ الْغَنَمِ",
        latin:
          "Râ‘at qulûbal-‘idâ anbâ'u ba‘tsatihi kanab‘atin ajfalat ghuflan minal-ghanami",
        translation:
          "Berita kenabian jadikan hati musuh gentar ketakutan. Bak lolongan srigala takutkan kambing nan lupa",
      },
      {
        arabic:
          "مَا زَالَ يَلْقَـــاهُمُ فِيْ كُلِّ مُعْـــــتَرَكٍ حَتّٰى حَكَوْا بِالْقَنَا لَحْمًا عَلَى وَضَمِ",
        latin:
          "Mâ zâla yalqâhumu fî kulli mu’tarikin ḫattâ ḫakau bilqanâ laḫman ‘alâ wadhami",
        translation:
          "Nabi tiada henti musuh dilawan dalam setiap medan pertempuran. Hingga daging mereka bertumpukan laksana daging di tempat pemotongan",
      },
      {
        arabic:
          "وَدُّوا الْفَرَارَ فَكَادُوْا يَغْبِطُوْنَ بِــهِ أَشْلَآءَ شَالَتْ مَعَ الْعِقْبَانِ وَالرَّخَمِ",
        latin:
          "Waddul-farâra fakâdû yaghbithûna bihi asylâ'a syâlat ma‘al-‘iqbâni war-rakhami",
        translation:
          "Mereka ingin lari hampir saja mereka berharap diri. Anggota badan nan hancur menjauhi, terbang bersama burung rakhmah dan rajawali",
      },
      {
        arabic:
          "تَمْضِيْ اللَّيَالِيْ وَلَا يَدْرُوْنَ عِدَّتَهَا مَا لَمْ تَكُنْ مِّنْ لَيَالِي الْأَشْهُرِ الْحُرُمِ",
        latin:
          "Tamdlil-layâlî wa lâ yadrûna ‘iddatahâ mâ lam takun min layâlil-asyhhuril-ḫurumi",
        translation:
          "Siang malam berlalu hitungannya mereka tak tahu. Selagi siang malam tak berada dalam bulan-bulan nan mulia",
      },
      {
        arabic:
          "كَأَنَّمَا الدِّيْنُ ضَيْفٌ حَلَّ سَاحَتَهُمْ بِكُلِّ قَرْمٍ إِلَى لَحْمِ الْعِدَا قَرِمِ",
        latin:
          "Ka annamâd-dînu dlaifun ḫalla sâḫatahum bikulli qarnin ilâ laḫmil-‘idâ qarimi",
        translation:
          "Islam datang bagai tamu undangan, singgah di halaman sahabat Nabi. Bersama orang-orang jantan yang sangat ingin membunuh musuh Islami",
      },
      {
        arabic:
          "يَجُرُّ بَحْـــــرَ خَمِيْسٍ فَوْقَ سَـــــابِحَةٍ يَرْمِيْ بِمَوْجٍ مِنَ الْأَبْطَالِ مُلْتَطِمِ",
        latin:
          "Yajurru baḫra khamîsin fauqa sâbiḫatin yarmî bimaujin minal-abthâli multathimi",
        translation:
          "Ia membawa lautan pasukan diatas kuda yang berenang jaya. Membawa para pemberani lagi jantan bagai debur ombak samudera",
      },
      {
        arabic:
          "مِنْ كُلِّ مُنْتَدِبٍ لِلّٰهِ مُحْتَسِبٍ يَسْطُوْا بِمُسْتَأْصِلٍ لِلكُفْرِ مُصْطَلِمِ",
        latin:
          "Min kulli muntadibin lillâhi muḫtasibin yasthû bimusta'shilin lil-kufri mushthalimi",
        translation:
          "Setiap orang yang penuhi panggilan Allah dan mengharap pahala di sisi allah. Menyerang akar kekufuran dengan pedang pembasmi memusnahkan",
      },
      {
        arabic:
          "حَتّٰى غَدَتْ مِلَّةُ الْإِسْلَامِ وَهِيَ بِهِمْ مِنْ بَعْدِ غُرْبَتِهَا مَوْصُوْلَةَ الرَّحِمِ",
        latin:
          "Ḫattâ ghadat millatul-islâmi wahiya bihim min ba‘di ghurbatihâ maushûlatar-raḫimi",
        translation:
          "Berkat kegigihan para ksatria hingga jadilah Islam agama. Setelah terasing jauh dari pemeluknya terjalin erat hubungan keluarga",
      },
      {
        arabic:
          "مَكْفُوْلَـــةً أَبَدًا مِّنْهُـــــمْ بِخَـــــيْرِ أَبٍ وَخَيْرِ بَعْلٍ فَلَمْ تَيْتَمْ وَلَمْ تَئِمِ",
        latin:
          "Makfûlatan abadan minhum bikhairi abin wa khairi ba‘lin falam taitam wa lam ta'imi",
        translation:
          "Islam terjamin selamanya dari mereka dengan sebaik-baik aba. Dan sebaik-baik suami tercinta mereka takkan jadi yatim dan janda",
      },
      {
        arabic:
          "هُمُ الْجِبَالُ فَسَلْ عَنْهُمْ مُّصَـــادِمَهُمْ مَاذَا رَأَى مِنْهُمْ فِيْ كُلِّ مُصْطَدَمِ",
        latin:
          "Humul-jibâlu fasal ‘anhum mushâdimahum mâ dzâ ra'â minhum fî kulli mushthadami",
        translation:
          "Mereka ksatria bak gunung nan kokoh kuat, maka tanyakan lawan tentang hebatnya gempuran. Apa yang mereka lihat dalam setiap medan peperangan?",
      },
      {
        arabic:
          "وَسَلْ حُنَيْنًا وَسَلْ بَدْرًا وَسَلْ أُحُدًا فُصُوْلُ حَتْفٍ لَّهُمْ أَدْهٰى مِنَ الوَخَمِ",
        latin:
          "Wa sal ḫunainan wa sal badran was al uḫudan fushûlu ḫatfin lahum adhâ minal-wakhami",
        translation:
          "Coba kautanyakan pada Hunain, Badar dan Uhud sebagai ajang peristiwa. Semuanya tempat macam kematian terasa lebih ganas dari wabah kolera",
      },
      {
        arabic:
          "اَلْمُصْدِرِى الْبِيْضَ حُمْرًا بَعْدَ مَا وَرَدَتْ مِنَ الْعِدَا كُلَّ مُسْوَدٍّ مِّنَ اللِّمَمِ",
        latin:
          "Al-mushdiril-bîdla ḫumran ba‘da mâ wa radat minal-‘idâ kulla muswaddin minal-limami",
        translation:
          "Pedang mereka nan putih berkilauan kembali menjadi merah padam. Setelah banyak memenggal leher lawan hitam sehitam rambut nan kelam",
      },
      {
        arabic:
          "وَالكَاتِبِــــيْنَ بِسُمْرِ الْخَـــــطِّ مَا تَرَكَتْ أَقْلَامُهُمْ حَرْفَ جِسْمٍ غَيْرَ مُنَعَجِمِ",
        latin:
          "Wal-kâtibîna bisumril-khaththi mâ tarakat aqlâmuhum ḫarfa jismin ghaira muna‘ajimi",
        translation:
          "Dengan kayu khat sebagai tombak senjata mereka tusukkan pada para musuh. Tombak pena takkan tinggalkan sisa daging terkoyak dari tubuh",
      },
      {
        arabic:
          "شَاكِّي السِّلَاحِ لَهُمْ سِيْـمَا تُمَيِّزُهُمْ وَالْوَرْدُ يَمْتَازُ بِالسِّيْمَا عَنِ السَّلَمِ",
        latin:
          "Syâkkis-silâḫi lahum sîmâ tumayyizuhum wal-wardu yamtâzu bis-sîmâ ‘anis-salami",
        translation:
          "Para tentara nan tajam senjatanya miliki tanda pembeda. Bak mawar nan mempesona dengan pohon salam ada tanda pembeda",
      },
      {
        arabic:
          "تُهْدِيْ إِلَيْكَ رِيَاحُ النَّصْرِ نَشْرَهُمُ فَتَحْسَبُ الزَّهْرَ فِيْ الْأَكْمَامِ كُلَّ كَمِيْ",
        latin:
          "Tuhdî ilaika riyâḫun-nashri nasyrahumu fataḫsabuz-zahrafil-akmâmi kulla kami",
        translation:
          "Angin kemenangan kirimkan padamu semerbak keharuman tentara. Hingga bunga di kelopak tersangka olehmu tentara nan gagah perkasa",
      },
      {
        arabic:
          "كَأَنّهُمْ فِيْ ظُهُورِ الْخَيْلِ نَبْتُ رُبًــــا مِنْ شِدَّةِ الْحَزْمِ لَا مِنْ شِدَّةِ الْحُزُمِ",
        latin:
          "Ka annahum fî dzûhuril-khaili nabtu ruban min syiddatil-ḫazmi lâ min syiddatil-ḫuzumi",
        translation:
          "Seakan-akan mereka dipunggung kuda laksana pepohonan di bukit tinggi. Karena kuatnya kemantapan belaka bukan karena kuatnya tali",
      },
      {
        arabic:
          "طَارَتْ قُلُوبُ الْعِدَى مِنْ بَأْسِهِمْ فَـرَقًا فَمَــا تُفَــــرِّقُ بَيْنَ الْبَهْمِ وَالْبُــهَمِ",
        latin:
          "Thârat qulûbul-‘idâ min ba'sihim faraqan famâ tufarriqu bainal-bahmi wal-buhami",
        translation:
          "Hati para musuh goncang duka karena takut serangan dahsyat para ksatria. Maka tak dapat bedakan antara kumpulan anak domba dan sekelompok pemberani perkasa",
      },
      {
        arabic:
          "وَمَنْ تَكُنْ بِرَسُولِ اللهِ نُصْرَتُهُ إِنْ تَلْقَهُ الْأُسْدُ فِيْ اٰجَامِهَا تَجِمِ",
        latin:
          "Wa man takun birusûlillâhi nushratuhu in talqahul-usdu fî âjâmihâ tajimi",
        translation:
          "Barangsiapa meraih kemenangan sebab rasulullah nabi pilihan. Bila singa di rimba menjumpainya, maka akan diam tunduk padanya",
      },
      {
        arabic:
          "وَلَنْ تَرَى مِنْ وَّلِيٍّ غَيْرِ مُنْتَصِرٍ بِهِ وَلَا مِنْ عَدُوٍّ غَيْرِ مُنْقَصِمِ",
        latin:
          "Wa lan tarâ min waliyyin ghairi muntashirin bihi wa lâ min ‘aduwwin ghairi munqashimi",
        translation:
          "Tak kaulihat kekasih beriman kecuali beroleh kemenangan. Dan tak kaulihat musuh nabi utusan kecuali mendapat kekalahan",
      },
      {
        arabic:
          "أَحَــــلَّ أُمّتَهُ فِيْ حِــــرْزِ مِلَّتِـــهِ كَاللَّيْثِ حَلَّ مَعَ الْأَشْبَالِ فِيْ أَجَمِ",
        latin:
          "Aḫalla ummatahu fî ḫirzi millatihi kal-laitsi ḫalla ma‘al-asybâli fî ajami",
        translation:
          "Nabi tempatkan umatnya dalam benteng agamanya. Bagai singa tempatkan anak-anaknya dalam hutan belantara",
      },
      {
        arabic:
          "كَمْ جَدَّلَتْ كَلِمَاتُ اللهِ مِنْ جَدَلٍ فِيْهِ وَكَمْ خَصَمَ الْبُرْهَانُ مِنْ خَصِمِ",
        latin:
          "Kam jaddalat kalimâtullâhi min jadalin fîhi wa kam khashamal-burhânu min khashimi",
        translation:
          "Seringkali kitab suci Al-Qur’an jatuhkan musuh dalam perdebatan. Dan telah banyak dalil-dalil pasti kalahkan musuh-musuh sejati",
      },
      {
        arabic:
          "كَفَاكَ بِالْعِلْمِ فِي الْأُمِّيِّ مُعْجِزَةً فِي الْجَاهِلِيَّةِ وَالتَأْدِيْبِ فِي الْيُتُمِ",
        latin:
          "Kafâka bil-‘ilmi fil-ummiyyi mu‘jizatan fil-jâhiliyyati wat-ta'dîbi fil-yutumi",
        translation:
          "Cukuplah bagimu sebagai mukjizat: keluasan ilmu yang dipunyai oleh Nabi ﷺ, padahal beliau seorang ummi (tak bisa baca tulis) yang hidup di era kebodohan (jahiliyah). Selain itu, beliau juga seorang yang beradab dan berakhla mulia padahal beliau seorang yatim (piatu)",
      },
    ],
    // Halaman 9
    [
      {
        translation: "Pasal 9 : Tawassul kepada Nabi Muhammad SAW",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "خَدَمْتُــــهُ بِمَدِيْحٍ أَسْتَقِيْـــلُ بِهِ ذُنُوْبَ عُمْرٍ مَّضَى فِي الشِّعْرِ وَالْخِدَمِ",
        latin:
          "Khadamtuhu bimadîḫin astaqîlu bihi dzunûba ‘umrin madlâ fisy-syi‘ri wal-khidami",
        translation:
          "Kupuja nabi dengan pujian kumohon adanya pengampunan. Dosa-dosa hidup yang terlewatkan dalam bersyair dan pujian",
      },
      {
        arabic:
          "إِذْ قَلَّدَانِيَ مَـــا تُخْشَى عَوَاقِبُـــهُ كَأَنَّنِيْ بِهِمَا هَدْيٌ مِنَ النَّعَمِ",
        latin:
          "Idz qalladâniya mâ tukhsyâ ‘awâqibuhu ka annanî bihimâ hadyun minan-na‘ami",
        translation:
          "Keduanya mengalungi diriku sesuatu yang menakutkan akibatnya dengan dua perkara itu. Seakan akan diriku hewan sembelihan berupa unta",
      },
      {
        arabic:
          "أَطَعْتُ غَيَّ الصِّبَا فِيْ الحَالَتَيْنِ وَمَا حَصَلْتُ إِلَّا عَلَى الْاٰثَامِ وَالنَّدَمِ",
        latin:
          "Atha‘tu ghayyash-shibâ fil-ḫâlataini wa mâ ḫashaltu illâ ‘alal-âtsami wan-nadami",
        translation:
          "Kuturuti bujuk rayu masa muda dalam bersyair dan memuja. Tak ada yang kudapatkan kecuali dosa dan penyesalan",
      },
      {
        arabic:
          "فَيَا خَسَارَةَ نَفْسٍ فِيْ تِجَـــارَتِهَا لَمْ تَشْتَرِ الدِّيْنَ بِالدُّنْيَــا وَلَمْ تَسُمِ",
        latin:
          "Fayâ khasârata nafsin fî tijâratihâ lam tasytarid-dîna bid-dunyâ wa lam tasumi",
        translation:
          "Alangkah ruginya jiwa dalam perdagangannya. Tak pernah beli agama dengan dunia dan pernah menawarnya",
      },
      {
        arabic:
          "وَمَنْ يَبِعْ اٰجِـلًا مِنْهُ بِعَـــــاجِلِهِ يَبِنْ لَهُ الْغَبْنُ فِيْ بَيْعٍ وَفِيْ سَلَمِ",
        latin:
          "Wa man yabi‘ âjilan minhu bi’âjilihi Yabin lahul-ghabnu fî bai‘in wa fî salami",
        translation:
          "Barangsiapa menjual akhirat dengan dunia kebahagian sesaat. Maka nyata baginya kerugian dalam jual beli dan akad salam",
      },
      {
        arabic:
          "إِنْ اٰتِ ذَنْبًا فَمَا عَهْدِيْ بِمُنْتَقِضٍ مِنَ النَّبِيِّ وَلَا حَبْلِيْ بِمُنْصَرِمِ",
        latin:
          "In âti dzanban famâ ‘ahdî bimuntaqidli minan-nabiyyi wa lâ ḫablî bimunsharami",
        translation:
          "Jika dosa kulakukan janjiku pada nabi tidaklah terputuskan. Dan juga tali hubungan takkan terputuskan",
      },
      {
        arabic:
          "فَــــإِنَّ لِيْ ذِمَّــــةً مِنْـــــهُ بِتَسْمِيَتِيْ مُحَمَّدًا وَهْوَ أَوْفَى الْخَلْقِ بِالذِّمَمِ",
        latin:
          "Fa inna lî dzimmatan minhu bitasmiyatî Muḫammadan wahwa aufal-khalqi bidz-dzimami",
        translation:
          "Sesungguhnya aku punya jaminan namaku Muhammad sesuai dengan nabi. Nabi lebih sempurnanya makhluk ciptaan dalam menepati janji",
      },
      {
        arabic:
          "إِنْ لَمْ يَكُنْ فِيْ مَعَادِيْ اٰخِذًا بِيَدِيْ فَضْلًا وَإِلَّا فَقُلْ يَا زَلَّةَ الْقَدَمِ",
        latin:
          "In lam yakun fî ma‘âdî âkhidzan biyadî fadllan wa illâ faqul yâ zallatal-qadami",
        translation:
          "Jika di akhirat nabi tak ulurkan tangan menolongku sebagai fadhal keutamaan. Maka sampaikanlah kata “wahai orang yang tergelincir kakinya”",
      },
      {
        arabic:
          "حَاشَاهُ أَنْ يُّحْرِمَ الرَّاجِيْ مَكَارِمَهُ أَوْ يُرْجِعَ الْجَارَ مِنْهُ غَيْرَ مُحْتَرَمِ",
        latin:
          "Ḫâsyâhu an yuḫrimar-râjî makârimahu au yurji‘al-jâra minhu ghaira muḫtarami",
        translation:
          "Mahasuci Allah ta`ala nabi tak tolak pengharap syafaatnya. Atau tetangga kembali darinya tanpa dihormati dan dimuliakan",
      },
      {
        arabic:
          "وَمُنْذُ أَلْزَمْتُ أَفْكَارِيْ مَدَائِحَـــــهُ وَجَدْتُهُ لِخَلَاصِيْ خَيْرَ مُلْتَزِمِ",
        latin:
          "Wa mundzu alzamtu afkârî madâ’iḫahu wa jadtuhu li khalâshî khaira multazimi",
        translation:
          "Sejak kucurahkan segala pikiran untuk memberikan aneka pujian. Maka untuk keselamatanku nabi kudapatkan sebaik baik pemberi jaminan",
      },
      {
        arabic:
          "وَلَنْ يَفُوتَ الْغِنَى مِنْهُ يَدًا تَرِبَتْ إِنَّ الْحَيَا يُنْبِتُ الْأَزْهَارَ فِيْ الْأُكُمِ",
        latin:
          "Wa lan yafûtal-ghinâ minhu yadan taribat innal-ḫayâ yunbitul-azhâra fil-ukumi",
        translation:
          "Pemberian nabi takkan luputkan setiap tangan yang membutuhkan. Sesungguhnya hujan akan menghidupi bunga-bunga di bukit tinggi",
      },
      {
        arabic:
          "وَلَمْ أُرِدْ زَهْرَةَ الدُّنْيَا الَّتِي اقْتَطَفَتْ يَدَا زُهَيْرٍ بِمَا أَثْنَى عَلَى هَرِمِ",
        latin:
          "Wa lam urid zuhratad-dunyal-latîq-tathafat yadâ zuhairin bimâ atsnâ ‘alâ harimi",
        translation:
          "Aku tidaklah mengharapkan dunia yang penuh kenikmatan. Seperti yang Zuhair petik dengan tangannya atas raja Harim yang ia puja",
      },
    ],
    // Halaman 10
    [
      {
        translation: "Pasal 10 : Bermunajat dan Meminta Hajat",
      },
      {
        arabic:
          "مَوْلَايَ صَلِّ وَسَلِّمْ دَآئِــمًا أَبَـدًاعَلَى حَبِيْبِـكَ خَيْــرِ الْخَلْقِ كُلِّهِمِ",
        latin:
          "Maulâya shalli wa sallim dâ'iman abadan ‘alâ ḫabîbika khairil-khalqi kullihimi",
        translation:
          "Ya Tuhanku, limpahkanlah selalu rahmat takzim dan keselamatan atas kekasih-Mu yang terbaik di antara seluruh makhluk",
      },
      {
        arabic:
          "يَا أَكْرَمَ الرُّسْلِ مَالِيْ مَنْ أَلُوْذُ بِهِ سِوَاكَ عِنْدَ حُلُوْلِ الْحَادِثِ العَمِمِ",
        latin:
          "Ya akramar-rusli mâ lî man alûdzu bihi siwâka ‘inda ḫulûlil-ḫâditsil-‘amimi",
        translation:
          "Wahai makhluk paling mulia, tiada orang tempat perlindungan hamba. Selain engkau baginda kala huru hara kiamat melanda semua manusia",
      },
      {
        arabic:
          "وَلَنْ يَضِيْقَ رَسُولَ اللهِ جَاهُكَ بِيْ إِذَا الْكَرِيْمُ تَحَلَّى بِاسْمِ مُنْتَقِمِ",
        latin:
          "Wa lan yadlîqa rasûlallâhi jâhuka bî idzal-karîmu taḫallâ bismi muntaqimi",
        translation:
          "Wahai Rasululloh, keagunganmu tiada sempit karena hamba. Tatkala Dzat yang Mahamulia bersifat dengan nama Dzat Penyiksa",
      },
      {
        arabic:
          "فَإِنَّ مِنْ جُوْدِكَ الدُّنْيَا وَضُرَّتَهَا وَمِنْ عُلُوْمِكَ عِلْمَ اللَّوْحِ وَالْقَلَمِ",
        latin:
          "Fainna min jûdikad-dunyâ wa dlurratahâ wa min ‘ulûmika ‘ilmal-lauḫi wal-qalami",
        translation:
          "Di antara kemurahanmu adalah dunia dan akhirat baqa. Dan diantara ilmumu adalah ilmu lauh mahfudh dan qalam pena",
      },
      {
        arabic:
          "يَا نَفْسُ لَا تَقْنَطِيْ مِنْ زَلَّةٍ عَظُمَتْ إِنَّ الْكَبَآئِرَ فِيْ الغُفْرَانِ كَاللَّمَمِ",
        latin:
          "Yâ nafsu lâ taqnathî min zallatin ‘adhumat innal-kabâ’ira fil-ghufrâni kal-lamami",
        translation:
          "Wahai jiwa janganlah putus asa karena dosa besar yang telah dilakukan. Sesungguhnya dosa-dosa besar dalam luasnya ampunan Allah seperti kecil dan ringan",
      },
      {
        arabic:
          "لَعَــلَّ رَحْمَةَ رَبِّي حِيْنَ يَقْسِمُهَا تَأْتِيْ عَلَى حَسَبِ الْعِصْيَانِ فِي الْقِسَمِ",
        latin:
          "La‘alla rahmata rabbî ḫîna yaqsimuhâ ta’tî ‘alâ ḫasabil-‘ishyâni fil-qisami",
        translation:
          "Semoga rahmat Allah, ketika dibagi-bagikan. Datang, sampai kepadaku dalam pembagian Sesuai dengan nilai kedurhakaanku",
      },
      {
        arabic:
          "يَا رَبِّ وَاجْعَلْ رَجَآئِيْ غَيْـرَ مُنْعَكِسٍ لَدَيْكَ وَاجْعَلْ حِسَابِيْ غَيْرَ مُنْخَرِمِ",
        latin:
          "Yâ rabbi waj‘al raja’î ghaira mun‘akisin ladaika waj‘al ḫisâbî ghaira munkharimi",
        translation:
          "Ya allah jadikanlah harapanku tak berbeda dengan apa yang ada disisi-mu. Dan jadikanlah keyakinanku tiada putus-putus kepada-mu",
      },
      {
        arabic:
          "وَالْطُفْ بِعَبْدِكَ فِي الدَّارَيْنِ إِنَّ لَهُ صَبْرًا مَتَى تَدْعُهُ الْأَهْوَالُ يَنْهَزِمِ",
        latin:
          "Walthuf bi‘abdika fid-dâraini inna lahu shabran matâ tad‘uhul-ahwâlu yanhazimi",
        translation:
          "Ya Allah, kasihanilah hamba-mu ini dalam dunia dan akhirat nanti. Sesungguhnya ia punya kesabaran jika bencana menimpa lari tak tahan",
      },
      {
        arabic:
          "وَأْذِنْ لِسُحْبِ صَلَاةٍ مِنْكَ دَائِمَةٍ عَلَى النَّبِيِّ بِمُنْهَلٍّ وَمُنْسَجِمِ",
        latin:
          "Wa’dzin lisuḫbi shalâtin minka dâ’imatin ‘alan-nabiyyi bimunhallin wa munsajimi",
        translation:
          "Ya Allah, semoga Engkau curahkan awan shalawat-mu abadi tak terbatas. Kepada junjungan nabi Agung Muhammad ﷺ, layaknya hujan mengalir deras",
      },
      {
        arabic:
          "مَا رَنَّحَتْ عَذَبَاتُ الْبَانِ رِيْحُ صَبًا وَأَطْرَبَ الْعِيْسَ حَادِي الْعِيْسِ بِالنَّغَمِ",
        latin:
          "Mâ rannaḫat ‘adzabâtul-bâni rîḫu shaban wa athrabal-‘îsa ḫâdil-‘îsi bin-naghami",
        translation:
          "Selagi angin timur masih mendoyongkan dahan-dahan pohon ban. Dan selagi pengembala unta senangkan unta dengan merdu suara",
      },
      {
        arabic:
          "ثُمَّ الرِّضَا عَنْ أَبِيْ بَكْرٍ وَعَنْ عُمَرَ وَعَنْ عَلِيٍّ وَعَنْ عُثْمَانَ ذِي الْكَرَمِ",
        latin:
          "Tsummar-ridlâ ‘an Abî Bakrin wa ‘an ‘ûmara wa ‘an ‘Âlin wa ‘an Utsmâna dzil-karami",
        translation:
          "Kemudian ridha Allah semoga tetap tercurah ruah untuk Abu Bakar, Umar. Ali dan Utsman, mereka shahabat –shahabat yang memiliki kemuliaan yang tinggi",
      },
      {
        arabic:
          "وَالْاٰلِ وَالصَّحْبِ ثُمَّ التَابِعِيْنَ فَهُمْ أَهْلُ التُّقَى وَالنَّقَا وَالْحِلْمِ وَالْكَرَمِ",
        latin:
          "Wal-âli wash-shaḫbi tsummat-tâbi‘îna fahum ahlut-tuqâ wan-naqâ wal-ḫilmi wal-karami",
        translation:
          "Juga keluarga dan shahabatnya kemudian para tabi`in. Dan pengikutnya mereka ahli taqwa dan kesucian bersifat penyantun dan dermawan",
      },
      {
        arabic:
          "يَا رَبِّ بِالْمُصْطَفَى بَلِّغْ مَقَاصِدَنَا وَاغْفِرْ لَنَا مَا مَضَى يَا وَاسِعَ الكَرَمِ",
        latin:
          "Yâ rabbi bil-mushtafâ balligh maqâshidanâ waghfir lanâ mâ madlâ yâ wâsi‘al-karami",
        translation:
          "Ya Allah, semoga dengan berkah nabi yang pinilih, gandakanlah segala cita-cita kami. Dan ampunlah segala dosa kami yang terlewat masa wahai dzat yang luas kemurahan-nya",
      },
      {
        arabic:
          "وَاغْفِرْ إِلٰهِيْ لِكُلِّ الْمُسْلِمِيْنَ بِمَا يَتْلُوْنَ فِي المَسْجِدِ الْأَقْصٰى وَفِي الْحَرَمِ",
        latin:
          "Waghfir ilâhî likullil-muslimîna bimâ yatlûna fil-masjidil-aqshâ wa fil-ḫarami",
        translation:
          "Ampunilah wahai tuhan beta dosa-dosa muslim semua. Berkat Al-Qur’an yang mereka baca di masjidil haram dan aqsha",
      },
      {
        arabic:
          "بِجَاهِ مَنْ بَيْتُهُ فِي طِيْبَةٍ حَرَمٌ وَاسْمُهُ قَسَمٌ مِنْ أَعْظَمِ الْقَسَمِ",
        latin:
          "Bijâhi man baituhu fî thîbatin ḫaramun wasmuhu qasamun min a‘dhamil-qasami",
        translation:
          "Dengan keagungan Nabi yang tinggal di tanah suci. Namanya menjadi sumpah paling agungnya sumpah",
      },
      {
        arabic:
          "وَهٰذِهِ بُرْدَةُ الْمُخْتَارِ قَدْ خُتِمَتْ وَالْحَمْدُ لِلّٰهِ فِيْ بَدْءٍ وَفِيْ خَتَمِ",
        latin:
          "Wa hâdzihi burdatul-mukhtâri qad khutimat wal-ḫamdulillâhi fî bad’in wa fî khatami",
        translation:
          "Inilah sair-sair burdah yang telah sampai pada penghabisan. Segala puji bagi Allah, dari permulaan sampai penghabisan",
      },
      {
        arabic:
          "أَبْيَاتُهَا قَدْ أَتَتْ سِتِّينَ مَعْ مِائَةٍ فَرِّجْ بِهَا كَرْبَنَا يَا وَاسِعَ الْكَرَمِ",
        latin:
          "Abyâtuhâ qad atat sittîna ma‘ mi’atin farrij bihâ karbanâ yâ wâsi‘al karami",
        translation:
          "Bait-bait Qashidah Burdah sebanyak seratus enam puluh buah. Berkat burdah lapangkan segala duka cita wahai dzat yang Mahaluas kemurahan-Nya",
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
