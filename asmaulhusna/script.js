document.addEventListener("DOMContentLoaded", () => {
  const asmaulHusnaListElement = document.getElementById("asmaul-husna-list");
  const nadhomContentElement = document.getElementById("nadhom-content");

  const asmaulHusnaData = [
    {
      id: 1,
      arabic: "الرَّحْمَنُ",
      latin: "Ar-Rahman",
      translation: "Maha Pengasih",
    },
    {
      id: 2,
      arabic: "الرَّحِيمُ",
      latin: "Ar-Rahim",
      translation: "Maha Penyayang",
    },
    {
      id: 3,
      arabic: "الْمَلِكُ",
      latin: "Al-Malik",
      translation: "Maha Merajai (Maha Menguasai)",
    },
    {
      id: 4,
      arabic: "الْقُدُّوسُ",
      latin: "Al-Quddus",
      translation: "Maha Suci",
    },
    {
      id: 5,
      arabic: "السَّلاَمُ",
      latin: "As-Salam",
      translation: "Maha Memberi Kesejahteraan",
    },
    {
      id: 6,
      arabic: "الْمُؤْمِنُ",
      latin: "Al-Mu'min",
      translation: "Maha Memberi Keamanan",
    },
    {
      id: 7,
      arabic: "الْمُهَيْمِنُ",
      latin: "Al-Muhaimin",
      translation: "Maha Memelihara",
    },
    {
      id: 8,
      arabic: "الْعَزِيزُ",
      latin: "Al-Aziz",
      translation: "Maha Perkasa",
    },
    {
      id: 9,
      arabic: "الْجَبَّارُ",
      latin: "Al-Jabbar",
      translation: "Maha Gagah",
    },
    {
      id: 10,
      arabic: "الْمُتَكَبِّرُ",
      latin: "Al-Mutakabbir",
      translation: "Maha Megah",
    },
    {
      id: 11,
      arabic: "الْخَالِقُ",
      latin: "Al-Khaliq",
      translation: "Maha Pencipta",
    },
    {
      id: 12,
      arabic: "الْبَارِئُ",
      latin: "Al-Bari'",
      translation: "Maha Pembuat",
    },
    {
      id: 13,
      arabic: "الْمُصَوِّرُ",
      latin: "Al-Musawwir",
      translation: "Maha Pembentuk Rupa",
    },
    {
      id: 14,
      arabic: "الْغَفَّارُ",
      latin: "Al-Ghaffar",
      translation: "Maha Pengampun",
    },
    {
      id: 15,
      arabic: "الْقَهَّارُ",
      latin: "Al-Qahhar",
      translation: "Maha Memaksa",
    },
    {
      id: 16,
      arabic: "الْوَهَّابُ",
      latin: "Al-Wahhab",
      translation: "Maha Pemberi",
    },
    {
      id: 17,
      arabic: "الرَّزَّاقُ",
      latin: "Ar-Razzaq",
      translation: "Maha Pemberi Rezeki",
    },
    {
      id: 18,
      arabic: "الْفَتَّاحُ",
      latin: "Al-Fattah",
      translation: "Maha Pembuka Rahmat",
    },
    {
      id: 19,
      arabic: "الْعَلِيمُ",
      latin: "Al-Alim",
      translation: "Maha Mengetahui",
    },
    {
      id: 20,
      arabic: "الْقَابِضُ",
      latin: "Al-Qabidh",
      translation: "Maha Menyempitkan Rezeki",
    },
    {
      id: 21,
      arabic: "الْبَاسِطُ",
      latin: "Al-Basit",
      translation: "Maha Melapangkan Rezeki",
    },
    {
      id: 22,
      arabic: "الْخَافِضُ",
      latin: "Al-Khafidz",
      translation: "Maha Merendahkan",
    },
    {
      id: 23,
      arabic: "الرَّافِعُ",
      latin: "Ar-Rafi'",
      translation: "Maha Meninggikan",
    },
    {
      id: 24,
      arabic: "الْمُعِزُّ",
      latin: "Al-Mu'izz",
      translation: "Maha Memuliakan",
    },
    {
      id: 25,
      arabic: "الْمُذِلُّ",
      latin: "Al-Mudzill",
      translation: "Maha Menghinakan",
    },
    {
      id: 26,
      arabic: "السَّمِيعُ",
      latin: "As-Sami'",
      translation: "Maha Mendengar",
    },
    {
      id: 27,
      arabic: "الْبَصِيرُ",
      latin: "Al-Bashir",
      translation: "Maha Melihat",
    },
    {
      id: 28,
      arabic: "الْحَكَمُ",
      latin: "Al-Hakam",
      translation: "Maha Menetapkan Hukum",
    },
    { id: 29, arabic: "الْعَدْلُ", latin: "Al-Adl", translation: "Maha Adil" },
    {
      id: 30,
      arabic: "اللَّطِيفُ",
      latin: "Al-Lathif",
      translation: "Maha Lembut",
    },
    {
      id: 31,
      arabic: "الْخَبِيرُ",
      latin: "Al-Khabir",
      translation: "Maha Mengetahui Hal-hal Gaib",
    },
    {
      id: 32,
      arabic: "الْحَلِيمُ",
      latin: "Al-Halim",
      translation: "Maha Penyantun",
    },
    {
      id: 33,
      arabic: "الْعَظِيمُ",
      latin: "Al-Azim",
      translation: "Maha Agung",
    },
    {
      id: 34,
      arabic: "الْغَفُورُ",
      latin: "Al-Ghafur",
      translation: "Maha Pengampun",
    },
    {
      id: 35,
      arabic: "الشَّكُورُ",
      latin: "Asy-Syakur",
      translation: "Maha Mensyukuri",
    },
    {
      id: 36,
      arabic: "الْعَلِيُّ",
      latin: "Al-Aliy",
      translation: "Maha Tinggi",
    },
    {
      id: 37,
      arabic: "الْكَبِيْرُ",
      latin: "Al-Kabir",
      translation: "Maha Besar",
    },
    {
      id: 38,
      arabic: "الْحَفِيظُ",
      latin: "Al-Hafizh",
      translation: "Maha Pemelihara",
    },
    {
      id: 39,
      arabic: "الْمُقِيتُ",
      latin: "Al-Muqit",
      translation: "Maha Pemberi Kekuatan",
    },
    {
      id: 40,
      arabic: "الْحَسِيبُ",
      latin: "Al-Hasib",
      translation: "Maha Penghitung",
    },
    {
      id: 41,
      arabic: "الْجَلِيْلُ",
      latin: "Al-Jalil",
      translation: "Maha Agung",
    },
    {
      id: 42,
      arabic: "الْكَرِيمُ",
      latin: "Al-Karim",
      translation: "Maha Pemurah",
    },
    {
      id: 43,
      arabic: "الرَّقِيبُ",
      latin: "Ar-Raqib",
      translation: "Maha Mengawasi",
    },
    {
      id: 44,
      arabic: "الْمُجِيبُ",
      latin: "Al-Mujib",
      translation: "Maha Mengabulkan",
    },
    {
      id: 45,
      arabic: "الْوَاسِعُ",
      latin: "Al-Wasi'",
      translation: "Maha Luas",
    },
    {
      id: 46,
      arabic: "الْحَكِيمُ",
      latin: "Al-Hakim",
      translation: "Maha Bijaksana",
    },
    {
      id: 47,
      arabic: "الْوَدُودُ",
      latin: "Al-Wadud",
      translation: "Maha Membuat Rasa Kasih Sayang",
    },
    {
      id: 48,
      arabic: "الْمَجِيدُ",
      latin: "Al-Majid",
      translation: "Maha Luhur",
    },
    {
      id: 49,
      arabic: "الْبَاعِثُ",
      latin: "Al-Ba'ith",
      translation: "Maha Membangkitkan",
    },
    {
      id: 50,
      arabic: "الشَّهِيدُ",
      latin: "Asy-Syahid",
      translation: "Maha Menyaksikan",
    },
    { id: 51, arabic: "الْحَقُّ", latin: "Al-Haqq", translation: "Maha Benar" },
    {
      id: 52,
      arabic: "الْوَكِيلُ",
      latin: "Al-Wakil",
      translation: "Maha Mengurusi",
    },
    {
      id: 53,
      arabic: "الْقَوِيُّ",
      latin: "Al-Qawiy",
      translation: "Maha Kuat",
    },
    {
      id: 54,
      arabic: "الْمَتِينُ",
      latin: "Al-Matin",
      translation: "Maha Kokoh",
    },
    {
      id: 55,
      arabic: "الْوَلِيُّ",
      latin: "Al-Waliy",
      translation: "Maha Melindungi",
    },
    {
      id: 56,
      arabic: "الْحَمِيدُ",
      latin: "Al-Hamid",
      translation: "Maha Terpuji",
    },
    {
      id: 57,
      arabic: "الْمُحْصِى",
      latin: "Al-Muhshi",
      translation: "Maha Menghitung",
    },
    {
      id: 58,
      arabic: "الْمُبْدِئُ",
      latin: "Al-Mubdi'",
      translation: "Maha Memulai",
    },
    {
      id: 59,
      arabic: "الْمُعِيْدُ",
      latin: "Al-Mu'id",
      translation: "Maha Mengembalikan",
    },
    {
      id: 60,
      arabic: "الْمُحْيِى",
      latin: "Al-Muhyi",
      translation: "Maha Menghidupkan",
    },
    {
      id: 61,
      arabic: "الْمُمِيتُ",
      latin: "Al-Mumit",
      translation: "Maha Mematikan",
    },
    { id: 62, arabic: "الْحَيُّ", latin: "Al-Hayy", translation: "Maha Hidup" },
    {
      id: 63,
      arabic: "الْقَيُّومُ",
      latin: "Al-Qayyum",
      translation: "Maha Berdiri Sendiri",
    },
    {
      id: 64,
      arabic: "الْوَاجِدُ",
      latin: "Al-Wajid",
      translation: "Maha Menemukan",
    },
    {
      id: 65,
      arabic: "الْمَاجِدُ",
      latin: "Al-Majid",
      translation: "Maha Memiliki Kemuliaan",
    },
    {
      id: 66,
      arabic: "الْوَاحِدُ",
      latin: "Al-Wahid",
      translation: "Maha Esa",
    },
    { id: 67, arabic: "الْأَحَدُ", latin: "Al-Ahad", translation: "Maha Satu" },
    {
      id: 68,
      arabic: "الصَّمَدُ",
      latin: "As-Samad",
      translation: "Maha Dibutuhkan",
    },
    {
      id: 69,
      arabic: "الْقَادِرُ",
      latin: "Al-Qadir",
      translation: "Maha Kuasa",
    },
    {
      id: 70,
      arabic: "الْمُقْتَدِرُ",
      latin: "Al-Muqtadir",
      translation: "Maha Berkuasa",
    },
    {
      id: 71,
      arabic: "الْمُقَدِّمُ",
      latin: "Al-Muqaddim",
      translation: "Maha Mendahulukan",
    },
    {
      id: 72,
      arabic: "الْمُؤَخِّرُ",
      latin: "Al-Mu'akhkhir",
      translation: "Maha Mengakhirkan",
    },
    {
      id: 73,
      arabic: "الْأَوَّلُ",
      latin: "Al-Awwal",
      translation: "Maha Awal",
    },
    {
      id: 74,
      arabic: "الْآخِرُ",
      latin: "Al-Akhir",
      translation: "Maha Akhir",
    },
    {
      id: 75,
      arabic: "الظَّاهِرُ",
      latin: "Az-Zahir",
      translation: "Maha Nyata",
    },
    {
      id: 76,
      arabic: "الْبَاطِنُ",
      latin: "Al-Bathin",
      translation: "Maha Gaib",
    },
    {
      id: 77,
      arabic: "الْوَالِي",
      latin: "Al-Wali",
      translation: "Maha Menguasai",
    },
    {
      id: 78,
      arabic: "الْمُتَعَالِي",
      latin: "Al-Muta'ali",
      translation: "Maha Tinggi",
    },
    {
      id: 79,
      arabic: "الْبَرُّ",
      latin: "Al-Barr",
      translation: "Maha Dermawan",
    },
    {
      id: 80,
      arabic: "التَّوَّابُ",
      latin: "At-Tawwab",
      translation: "Maha Penerima Taubat",
    },
    {
      id: 81,
      arabic: "الْمُنْتَقِمُ",
      latin: "Al-Muntaqim",
      translation: "Maha Pembalas",
    },
    {
      id: 82,
      arabic: "الْعَفُوُّ",
      latin: "Al-Afuw",
      translation: "Maha Pemaaf",
    },
    {
      id: 83,
      arabic: "الرَّؤُوفُ",
      latin: "Ar-Rauuf",
      translation: "Maha Pengasih",
    },
    {
      id: 84,
      arabic: "مَالِكُ الْمُلْكِ",
      latin: "Malikul Mulk",
      translation: "Maha Penguasa Kerajaan",
    },
    {
      id: 85,
      arabic: "ذُو الْجَلاَلِ وَالْإِكْرَامِ",
      latin: "Dzul Jalali wal Ikram",
      translation: "Maha Pemilik Keagungan dan Kemuliaan",
    },
    {
      id: 86,
      arabic: "الْمُقْسِطُ",
      latin: "Al-Muqsith",
      translation: "Maha Adil",
    },
    {
      id: 87,
      arabic: "الْجَامِعُ",
      latin: "Al-Jami'",
      translation: "Maha Mengumpulkan",
    },
    {
      id: 88,
      arabic: "الْغَنِيُّ",
      latin: "Al-Ghaniy",
      translation: "Maha Kaya",
    },
    {
      id: 89,
      arabic: "الْمُغْنِي",
      latin: "Al-Mughni",
      translation: "Maha Pemberi Kekayaan",
    },
    {
      id: 90,
      arabic: "الْمَانِعُ",
      latin: "Al-Mani'",
      translation: "Maha Mencegah",
    },
    {
      id: 91,
      arabic: "الضَّارُّ",
      latin: "Ad-Darr",
      translation: "Maha Pemberi Bahaya",
    },
    {
      id: 92,
      arabic: "النَّافِعُ",
      latin: "An-Nafi'",
      translation: "Maha Pemberi Manfaat",
    },
    {
      id: 93,
      arabic: "النُّورُ",
      latin: "An-Nur",
      translation: "Maha Bercahaya",
    },
    {
      id: 94,
      arabic: "الْهَادِي",
      latin: "Al-Hadi",
      translation: "Maha Pemberi Petunjuk",
    },
    {
      id: 95,
      arabic: "الْبَدِيعُ",
      latin: "Al-Badi'",
      translation: "Maha Pencipta Baru",
    },
    {
      id: 96,
      arabic: "الْبَاقِي",
      latin: "Al-Baqi",
      translation: "Maha Kekal",
    },
    {
      id: 97,
      arabic: "الْوَارِثُ",
      latin: "Al-Warits",
      translation: "Maha Pewaris",
    },
    {
      id: 98,
      arabic: "الرَّشِيدُ",
      latin: "Ar-Rasyid",
      translation: "Maha Pemberi Petunjuk",
    },
    {
      id: 99,
      arabic: "الصَّبُورُ",
      latin: "As-Sabur",
      translation: "Maha Sabar",
    },
  ];

  const nadhomAsmaulHusnaData = [
    {
      arabic: "بِاَسْمَاءِكَ الْحُسْنَىْ - اِغْـفِرْلَنَا ذُنُوْ بَـنَا",
      latin: "Bi ‘asmaa ‘ikal khusnaa - Ighfir lanaa dhunuubanaa",
      translation: "Dengan Asma Ul Khusna - Ampunilah Dosa Kami",
    },
    {
      arabic: "وَلِــوَالِــدِنَـا - وَذُ رِّ يَّا تِـــنَا",
      latin: "Waliwalidiinaa - Wa dhurriyaa tinaa",
      translation: "Dan Dosa Kedua Orang Tua Kami - Dan Keturunan Kami",
    },
    {
      arabic: "كَفِّـِرعَنْ سَيِّئَاتِنَا - وَاسْـتُرعَلَى عُيُوْبِنَا",
      latin: "Kaffir ‘an sayyi’a tinaa - Waastur ‘alaa ‘uyuu binaa",
      translation: "Hapuskanlah Kejelekan Kami - Dan Tutuplah Cacat Kami",
    },
    {
      arabic: "وَاجْبُرْعَلَى نُقْصَانِنَا - وَارْفَـعْ دَرَجَاتِـنَا",
      latin: "Waajbur ‘alaa nuq shoo ninaa - Waarfa’ darojaa tinaa",
      translation: "Tambahlah Kekurangan Kami - Naikkanlah Derajat Kami",
    },
    {
      arabic: "وَزِدْ نَا عِلْمًا نَافِـعًا - وَرِزْ قاً وَّاسِــعًا",
      latin: "Wa zidnaa ‘ilmaannaa fi’aan - Warizqon Waasi’aan",
      translation:
        "Dan Tambahilah Kami Ilmu Yang Bermanfaat - Dan Rezki Yang Luas",
    },
    {
      arabic: "حَـلاَلاً طَـيِّــبًا - وَعَـمَـلاً صَالِحًا",
      latin: "Khalaalan thoyyiban - Wa’amalan sholikhaan",
      translation: "Yang Halal dan Bagus - Dan Amalan Yang Sholeh",
    },
    {
      arabic: "وَنَـوِّرْ قُلُـوْ بَـنَا - وَيَـسِّـرْ اُمُـوْرَنَا",
      latin: "Wanawwir quluu banaa - Wayassir umuu ronaa",
      translation: "Dan Terangkanlah Hati Kami - Dan Mudahkanlah Urusan Kami",
    },
    {
      arabic: "وَصَحِّـحْ اَجْسَادَناَ - دَائِـمَ حَـيَاتِــنَا",
      latin: "Wa shokhi’ ajsaa danaa - Daaa’ima khayaatinaa",
      translation: "Dan Sehatkanlah Badan Kami - Selama Hidup Kami",
    },
    {
      arabic: "اِلَى الْخَـيْرِقَرِبْـنَا - عَنِ الشَّـرِّ بَاعِـدْنَا",
      latin: "Ilal khoiri qorribnaa - ‘Anisy syarri baa’idnaa",
      translation:
        "Ke Kebaikan Dekatkanlah Kami - Dari Kejelekan Jauhkanlah Kami",
    },
    {
      arabic: "وَقُـرْبَى رَجَـائُنَا - اَخِـرًا نِلْنَا الْمُـنَى",
      latin: "Waalqurbaa rojaaa ‘una - Akhiiroon nilnalmunaa",
      translation:
        "Dan Dekat Pada Allah Harapan Kami - Akhirnya Kami Memperoleh Kenikmatan",
    },
    {
      arabic: "بَلِـغْ مَـقَاصِـدَنَا - وَاقْـضِ حَوَائِجَـنَا",
      latin: "Balligh maqooshidanaa - Waqdhi khawaa ‘ijanaa",
      translation:
        "Sampaikanlah Maksud-maksud Kami - Dan Penuhilah Hajat-Hajat Kebutuhan Kami",
    },
    {
      arabic: "وَالْحَمْـدُ ِلا ِلَهِـنَا - اَلَّـذِى هَــدَا نَا",
      latin: "Walkhamdu li’ilaahinaa - Alladhii hadaanaa",
      translation:
        "Segala Puji Untuk Tuhan Kami - Yang Telah Menunjukkan Kepada Kami",
    },
    {
      arabic: "صَلِّ وَسَلِّمْ عَـلَى - طَهَ خَلِيْلِ الرَّحْمَنْ",
      latin: "Sholli wasalim ‘alaa - Thoohaa kholiilir rokhmaan",
      translation:
        "Semoga Allah Memberikan Rahmat dan Keselamatan - Atas Thoha/Nabi Muhammad menjadi Kekasih",
    },
    {
      arabic: "وَاَلِـهِ وَصَـحْبِـهِ - اِلَى اَخِرِ الزَّمَـانْ",
      latin: "Wa ‘aa lihii washokhbihii - ’Ilaa aakhirizzamaan",
      translation: "Dan Keluarganya dan Sahabatnya - Sampai Akhir Masa",
    },
  ];

  function displayAsmaulHusna() {
    asmaulHusnaListElement.innerHTML = "";
    asmaulHusnaData.forEach((asma) => {
      const asmaCard = document.createElement("div");
      asmaCard.classList.add("asma-card");
      asmaCard.setAttribute("data-id", asma.id);
      asmaCard.innerHTML = `
                <div class="arabic">${asma.arabic}</div>
                <div class="latin">${asma.latin}</div>
                <div class="translation">${asma.translation}</div>
            `;
      asmaulHusnaListElement.appendChild(asmaCard);
    });
  }

  function displayNadhomAsmaulHusna() {
    nadhomContentElement.innerHTML = "";
    nadhomAsmaulHusnaData.forEach((bait) => {
      const nadhomItem = document.createElement("div");
      nadhomItem.classList.add("nadhom-item");
      nadhomItem.innerHTML = `
                <div class="arabic">${bait.arabic}</div>
                <div class="latin">${bait.latin}</div>
                <div class="translation">${bait.translation}</div>
            `;
      nadhomContentElement.appendChild(nadhomItem);
    });
  }

  displayAsmaulHusna();
  displayNadhomAsmaulHusna();
});
