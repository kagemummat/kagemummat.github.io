document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const surahListSection = document.getElementById("surah-list");
  const surahDetailSection = document.getElementById("surah-detail");
  const detailSurahNama = document.getElementById("detail-surah-nama");
  const detailSurahArti = document.getElementById("detail-surah-arti");
  const detailSurahTempatTurun = document.getElementById(
    "detail-surah-tempat-turun"
  );
  const detailSurahJumlahAyat = document.getElementById(
    "detail-surah-jumlah-ayat"
  );
  const ayatList = document.getElementById("ayat-list");
  const ayatSearchInput = document.getElementById("ayat-search-input");
  const searchAyatButton = document.getElementById("search-ayat-button");
  const backButton = document.querySelector(".back-button");
  const header = document.querySelector(".header");

  let allSurahs = [];
  let currentSurahData = null;

  const BASE_API_URL = "https://equran.id/api/v2";

  async function fetchSurahList() {
    surahListSection.innerHTML =
      '<div class="loading-indicator">Memuat daftar surat...</div>';
    try {
      const response = await fetch(`${BASE_API_URL}/surat`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      allSurahs = data.data;
      renderSurahList(allSurahs);
      showSurahList();
    } catch (error) {
      console.error("Error fetching surah list:", error);
      surahListSection.innerHTML =
        '<div class="loading-indicator error">Gagal memuat daftar surat. Silakan coba lagi nanti.</div>';
    }
  }

  function renderSurahList(surahs) {
    surahListSection.innerHTML = "";
    surahs.forEach((surah) => {
      const surahCard = document.createElement("div");
      surahCard.classList.add("surah-card");
      surahCard.setAttribute("data-number", surah.nomor);
      surahCard.innerHTML = `
                <h3>${surah.namaLatin}</h3>
                <p class="arabic-name">${surah.nama}</p>
                <p>${surah.arti} - ${surah.jumlahAyat} Ayat - ${surah.tempatTurun}</p>
            `;
      surahCard.addEventListener("click", () => showSurahDetail(surah.nomor));
      surahListSection.appendChild(surahCard);
    });
  }

  async function showSurahDetail(surahNumber) {
    surahListSection.classList.add("hidden");
    surahDetailSection.classList.remove("hidden");
    container.classList.add("fullscreen");
    backButton.style.display = 'flex';
    header.style.display = 'none';
    ayatList.innerHTML =
      '<div class="loading-indicator">Memuat ayat-ayat...</div>';

    try {
      const response = await fetch(`${BASE_API_URL}/surat/${surahNumber}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      currentSurahData = data.data;

      detailSurahNama.textContent = `${currentSurahData.namaLatin} (${currentSurahData.nama})`;
      detailSurahArti.textContent = `Arti: ${currentSurahData.arti}`;
      detailSurahTempatTurun.textContent = `Tempat Turun: ${currentSurahData.tempatTurun}`;
      detailSurahJumlahAyat.textContent = `Jumlah Ayat: ${currentSurahData.jumlahAyat}`;

      renderAyats(currentSurahData.ayat);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(`Error fetching surah ${surahNumber}:`, error);
      ayatList.innerHTML =
        '<div class="loading-indicator error">Gagal memuat ayat-ayat. Silakan coba lagi.</div>';
    }
  }

  function renderAyats(ayats) {
    ayatList.innerHTML = "";
    ayats.forEach((ayat) => {
      const ayatItem = document.createElement("div");
      ayatItem.classList.add("ayat-item");
      ayatItem.id = `ayat-${ayat.nomorAyat}`;

      ayatItem.innerHTML = `
                <div class="ayat-number">${ayat.nomorAyat}.</div>
                <div class="ayat-arabic">${ayat.teksArab}</div>
                <div class="ayat-latin">${ayat.teksLatin}</div>
                <div class="ayat-translation">${ayat.teksIndonesia}</div>
                ${
                  ayat.audio["05"]
                    ? `<audio controls class="ayat-audio" src="${ayat.audio["05"]}"></audio>`
                    : ""
                }
                <button class="copy-button" data-ayat-number="${
                  ayat.nomorAyat
                }">Salin Ayat</button>
            `;
      ayatList.appendChild(ayatItem);
    });

    document.querySelectorAll(".copy-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const ayatNumber = event.target.dataset.ayatNumber;
        copyAyatToClipboard(ayatNumber);
      });
    });
  }

  async function copyAyatToClipboard(ayatNumber) {
    const ayatData = currentSurahData.ayat.find(
      (ayat) => ayat.nomorAyat == ayatNumber
    );

    if (ayatData) {
      const textToCopy = `
Surah ${currentSurahData.namaLatin} (${currentSurahData.nama}), Ayat ${ayatData.nomorAyat}:

${ayatData.teksArab}
${ayatData.teksLatin}
"${ayatData.teksIndonesia}"
            `.trim();

      try {
        await navigator.clipboard.writeText(textToCopy);
        alert(`Ayat ${ayatData.nomorAyat} berhasil disalin!`);
      } catch (err) {
        console.error("Gagal menyalin teks:", err);
        alert("Gagal menyalin ayat. Silakan coba lagi.");
      }
    } else {
      alert("Data ayat tidak ditemukan.");
    }
  }

  function showSurahList() {
    surahListSection.classList.remove('hidden');
    surahDetailSection.classList.add('hidden');
    backButton.style.display = 'none';
    header.style.display = 'block';
    container.classList.remove("fullscreen");
  }

  window.goBackToSurahList = () => {
    showSurahList();
    currentSurahData = null;
    ayatSearchInput.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  searchAyatButton.addEventListener("click", () => {
    const ayatNumber = parseInt(ayatSearchInput.value);
    if (
      currentSurahData &&
      !isNaN(ayatNumber) &&
      ayatNumber >= 1 &&
      ayatNumber <= currentSurahData.jumlahAyat
    ) {
      const targetAyat = document.getElementById(`ayat-${ayatNumber}`);
      if (targetAyat) {
        targetAyat.scrollIntoView({ behavior: "smooth", block: "center" });
        targetAyat.style.backgroundColor = "#fff3cd";
        setTimeout(() => {
          targetAyat.style.backgroundColor = "";
        }, 1500);
      } else {
        alert(`Ayat ke-${ayatNumber} tidak ditemukan.`);
      }
    } else if (currentSurahData) {
      alert(
        `Masukkan nomor ayat yang valid (1-${currentSurahData.jumlahAyat}).`
      );
    } else {
      alert("Silakan pilih surat terlebih dahulu.");
    }
  });

  fetchSurahList();
});