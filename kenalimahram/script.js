const mahramData = {
  ayah: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan) dan merupakan pokok (asal) dari garis keturunan.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  ibu: {
    isMahram: true,
    status: "MAHRAM",
    alasan: "Hubungan ini adalah mahram karena nasab (keturunan).",
    sumber: "QS. An-Nisa' ayat 23",
  },
  kakek: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), sebagai 'pokok' atau asal yang paling atas dari garis keturunan.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  nenek: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), sebagai 'pokok' atau asal yang paling atas dari garis keturunan.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  anak_kandung: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), karena anak adalah cabang dari keturunan seseorang.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  cucu: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), karena cucu adalah cabang keturunan dari anak, baik laki-laki maupun perempuan.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  saudara_kandung: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), karena sama-sama lahir dari ayah dan ibu yang sama.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  saudara_tiri: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), karena berbagi salah satu dari orang tua (ayah atau ibu).",
    sumber: "QS. An-Nisa' ayat 23",
  },
  paman: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), karena termasuk saudara dari ayah.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  bibi: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), karena termasuk saudara dari ibu.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  keponakan_saudara: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena nasab (keturunan), karena merupakan cabang keturunan dari saudara.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  mertua: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena pernikahan (mushaharah) dan berlaku selamanya, meskipun pernikahan berakhir.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  anak_tiri: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena pernikahan (mushaharah), berlaku setelah seorang suami berhubungan intim dengan ibunya (istrinya).",
    sumber: "QS. An-Nisa' ayat 23",
  },
  menantu: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena pernikahan (mushaharah). Menantu menjadi mahram bagi mertua dan seluruh keluarga mertua.",
    sumber: "QS. An-Nisa' ayat 23",
  },
  saudara_sesusuan: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Hubungan ini adalah mahram karena persusuan (radha'ah), dengan syarat minum air susu ibu yang sama sebanyak lima kali dalam masa sebelum dua tahun.",
    sumber: "HR. Bukhari, no. 2646, 5099 dan Muslim, no. 1444",
  },
  ayah_sesusuan: {
    isMahram: true,
    status: "MAHRAM",
    alasan: "Mahram karena persusuan (radha'ah). Ayah dari ibu yang menyusui.",
    sumber: "HR. Bukhari, no. 2646, 5099 dan Muslim, no. 1444",
  },
  ibu_sesusuan: {
    isMahram: true,
    status: "MAHRAM",
    alasan:
      "Mahram karena persusuan (radha'ah). Wanita yang menyusui seseorang sehingga statusnya sama dengan ibu kandung.",
    sumber: "HR. Bukhari, no. 2646, 5099 dan Muslim, no. 1444",
  },
  sepupu: {
    isMahram: false,
    status: "BUKAN MAHRAM",
    alasan:
      "Sepupu (termasuk anak dari paman atau bibi) tidak termasuk dalam kategori mahram yang disebutkan dalam Al-Qur'an. Oleh karena itu, diperbolehkan untuk menikah dengannya.",
    sumber: "Tidak termasuk dalam QS. An-Nisa' ayat 23",
  },
  ipar: {
    isMahram: false,
    status: "BUKAN MAHRAM",
    alasan:
      "Ipar tidak termasuk mahram, karena hubungan ini hanya terikat oleh pernikahan. Namun, haram dinikahi selama masih ada ikatan pernikahan dengan saudara/inya.",
    sumber: "QS. An-Nisa' ayat 23",
  },
};

function periksaMahram() {
  const hubungan = document.getElementById("hubungan").value;
  const popupOverlay = document.getElementById("popupOverlay");
  const popupContent = document.getElementById("popupContent");
  const popupIcon = document.getElementById("popupIcon");
  const popupStatus = document.getElementById("popupStatus");
  const popupKeterangan = document.getElementById("popupKeterangan");

  if (hubungan === "") {
    popupIcon.textContent = "⚠️";
    popupStatus.textContent = "Peringatan!";
    popupKeterangan.innerHTML = `<strong>Status:</strong> Belum dipilih<br><strong>Alasan:</strong> Silakan pilih hubungan kekerabatan terlebih dahulu.`;
    popupContent.className = "popup-content popup-bukan-mahram";
    popupOverlay.classList.add("active");
    return;
  }

  const data = mahramData[hubungan];

  popupIcon.textContent = data.isMahram ? "✔" : "!";
  popupStatus.textContent = data.status;

  popupKeterangan.innerHTML = `
        <strong>Alasan:</strong> ${data.alasan}<br>
        <strong>Sumber Syariat:</strong> ${data.sumber}
    `;

  popupContent.className = "popup-content";
  if (data.isMahram) {
    popupContent.classList.add("popup-mahram");
  } else {
    popupContent.classList.add("popup-bukan-mahram");
  }

  popupOverlay.classList.add("active");
}

function tutupPopup() {
  const popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.classList.remove("active");
}
