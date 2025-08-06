document.addEventListener("DOMContentLoaded", () => {
  const bookNameSelect = document.getElementById("bookNameSelect");
  const bookNumberInput = document.getElementById("bookNumberInput");
  const searchButton = document.getElementById("searchButton");
  const resultsDiv = document.getElementById("results");
  const loadingSpinner = document.getElementById("loading");
  const errorDiv = document.getElementById("error");

  searchButton.addEventListener("click", fetchHadith);

  bookNameSelect.addEventListener("change", () => {
    if (bookNameSelect.value) {
      bookNumberInput.focus();
    }
  });

  bookNumberInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      fetchHadith();
    }
  });

  async function fetchHadith() {
    const bookName = bookNameSelect.value.trim();
    const bookNumber = bookNumberInput.value.trim();

    if (!bookName || !bookNumber) {
      displayError("Mohon pilih nama kitab dan masukkan nomor hadits.");
      return;
    }

    resultsDiv.innerHTML = "";
    errorDiv.style.display = "none";
    loadingSpinner.style.display = "block";

    try {
      const apiUrl = `https://api.hadith.gading.dev/books/${bookName}/${bookNumber}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            "Hadits tidak ditemukan. Pastikan nama kitab dan nomor hadits benar."
          );
        }
        throw new Error(`Terjadi kesalahan: ${response.statusText}`);
      }

      const data = await response.json();

      if (data && data.data && data.data.contents) {
        displayHadith(data.data);
      } else {
        displayError(
          "Hadits tidak ditemukan. Periksa kembali input Anda atau coba nomor hadits lain."
        );
      }
    } catch (error) {
      console.error("Fetch error:", error);
      displayError(error.message);
    } finally {
      loadingSpinner.style.display = "none";
    }
  }

  function displayHadith(hadithData) {
    resultsDiv.innerHTML = `
            <div class="hadith-card">
                <h3>${hadithData.name} - Hadits ke-${hadithData.contents.number}</h3>
                <p>${hadithData.contents.arab}</p>
                <p><strong>Terjemahan:</strong> ${hadithData.contents.id}</p>
            </div>
        `;
  }

  function displayError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
  }
});
