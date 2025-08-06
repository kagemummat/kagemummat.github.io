document.addEventListener("DOMContentLoaded", function () {
  const jenisHewanSelect = document.getElementById("jenis-hewan");
  const usiaHewanInput = document.getElementById("usia-hewan");
  const kesehatanHewanSelect = document.getElementById("kesehatan-hewan");
  const jumlahPesertaInput = document.getElementById("jumlah-peserta");
  const hargaHewanInput = document.getElementById("harga-hewan");
  const hitungKurbanBtn = document.getElementById("hitung-kurban");

  const resultModal = document.getElementById("result-modal");
  const closeButton = document.querySelector(".close-button");
  const modalPesanKelayakan = document.getElementById("modal-pesan-kelayakan");
  const modalBiayaPerOrang = document.getElementById("modal-biaya-per-orang");
  const modalCatatanTambahan = document.getElementById(
    "modal-catatan-tambahan"
  );

  function formatNumberWithThousandsSeparator(numberString) {
    const cleanNumber = numberString.replace(/\D/g, "");
    if (cleanNumber === "" || cleanNumber === "0") {
      return "0";
    }
    try {
      const bigIntNum = BigInt(cleanNumber);
      return bigIntNum.toLocaleString("id-ID");
    } catch (e) {
      return parseInt(cleanNumber).toLocaleString("id-ID");
    }
  }

  function showModal() {
    resultModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function hideModal() {
    resultModal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  closeButton.addEventListener("click", hideModal);

  window.addEventListener("click", function (event) {
    if (event.target == resultModal) {
      hideModal();
    }
  });

  hargaHewanInput.addEventListener("keyup", function (e) {
    const originalValue = this.value;
    this.value = formatNumberWithThousandsSeparator(originalValue);
  });

  jenisHewanSelect.addEventListener("change", function () {
    const jenis = this.value;
    if (jenis === "domba" || jenis === "kambing") {
      jumlahPesertaInput.value = 1;
      jumlahPesertaInput.setAttribute("disabled", "true");
      if (jenis === "domba") {
        usiaHewanInput.value = 6;
      } else {
        usiaHewanInput.value = 12;
      }
    } else {
      jumlahPesertaInput.removeAttribute("disabled");
      if (
        parseInt(jumlahPesertaInput.value) > 7 ||
        parseInt(jumlahPesertaInput.value) < 1
      ) {
        jumlahPesertaInput.value = 1;
      }
      if (jenis === "sapi" || jenis === "kerbau") {
        usiaHewanInput.value = 24;
      } else if (jenis === "unta") {
        usiaHewanInput.value = 60;
      }
    }
  });

  if (
    jenisHewanSelect.value === "domba" ||
    jenisHewanSelect.value === "kambing"
  ) {
    jumlahPesertaInput.setAttribute("disabled", "true");
  }

  hitungKurbanBtn.addEventListener("click", function () {
    const jenisHewan = jenisHewanSelect.value;
    const usiaHewan = parseInt(usiaHewanInput.value);
    const kesehatanHewan = kesehatanHewanSelect.value;
    const jumlahPeserta = parseInt(jumlahPesertaInput.value);

    const hargaHewanRawString = hargaHewanInput.value.replace(/\D/g, "");

    let hargaHewan;
    try {
      hargaHewan = BigInt(
        hargaHewanRawString === "" ? "0" : hargaHewanRawString
      );
    } catch (e) {
      console.warn(
        "Angka terlalu besar untuk BigInt atau BigInt tidak didukung. Menggunakan Number."
      );
      hargaHewan = parseFloat(
        hargaHewanRawString === "" ? "0" : hargaHewanRawString
      );
    }

    let layakKurban = true;
    let pesan = [];
    let catatan = [];
    let biayaPatungan = 0;

    if (jenisHewan === "domba") {
      if (usiaHewan < 6) {
        layakKurban = false;
        pesan.push("Usia domba minimal 6 bulan (atau sudah berganti gigi).");
      }
    } else if (jenisHewan === "kambing") {
      if (usiaHewan < 12) {
        layakKurban = false;
        pesan.push("Usia kambing minimal 1 tahun (masuk tahun ke-2).");
      }
    } else if (jenisHewan === "sapi" || jenisHewan === "kerbau") {
      if (usiaHewan < 24) {
        layakKurban = false;
        pesan.push(`Usia ${jenisHewan} minimal 2 tahun (masuk tahun ke-3).`);
      }
    } else if (jenisHewan === "unta") {
      if (usiaHewan < 60) {
        layakKurban = false;
        pesan.push("Usia unta minimal 5 tahun (masuk tahun ke-6).");
      }
    }

    if (kesehatanHewan === "cacat") {
      layakKurban = false;
      pesan.push(
        "Hewan tidak layak kurban karena memiliki cacat atau sakit jelas."
      );
      catatan.push(
        "Pastikan hewan kurban sehat, tidak buta, tidak pincang parah, tidak sakit, dan tidak kurus."
      );
    }

    if (
      (jenisHewan === "sapi" ||
        jenisHewan === "kerbau" ||
        jenisHewan === "unta") &&
      (jumlahPeserta < 1 || jumlahPeserta > 7)
    ) {
      layakKurban = false;
      pesan.push(
        `${
          jenisHewan.charAt(0).toUpperCase() + jenisHewan.slice(1)
        } hanya dapat diniatkan untuk 1 hingga 7 orang.`
      );
    } else if (
      (jenisHewan === "domba" || jenisHewan === "kambing") &&
      jumlahPeserta !== 1
    ) {
      layakKurban = false;
      pesan.push("Domba atau kambing hanya dapat diniatkan untuk 1 orang.");
    }

    if (
      (typeof hargaHewan === "bigint" && hargaHewan <= 0n) ||
      (typeof hargaHewan === "number" && (isNaN(hargaHewan) || hargaHewan <= 0))
    ) {
      biayaPatungan = 0;
      if (layakKurban) {
        catatan.push(
          "Masukkan perkiraan harga hewan untuk menghitung biaya patungan."
        );
      }
    } else if (jumlahPeserta > 0) {
      if (typeof hargaHewan === "bigint") {
        biayaPatungan = hargaHewan / BigInt(jumlahPeserta);
      } else {
        biayaPatungan = hargaHewan / jumlahPeserta;
      }
    } else {
      biayaPatungan = 0;
    }

    if (layakKurban) {
      modalPesanKelayakan.textContent = `Berdasarkan data yang dimasukkan, hewan kurban ini Insya Allah "LAYAK" untuk dikurbankan.`;
      modalPesanKelayakan.classList.remove("tidak-layak");
      modalPesanKelayakan.classList.add("layak");
    } else {
      modalPesanKelayakan.textContent = `Maaf, hewan kurban ini "TIDAK LAYAK" dikurbankan karena:`;
      modalPesanKelayakan.classList.remove("layak");
      modalPesanKelayakan.classList.add("tidak-layak");
      modalPesanKelayakan.innerHTML += `<ul>${pesan
        .map((p) => `<li>${p}</li>`)
        .join("")}</ul>`;
    }

    if (
      (typeof biayaPatungan === "bigint" && biayaPatungan > 0n) ||
      (typeof biayaPatungan === "number" && biayaPatungan > 0)
    ) {
      modalBiayaPerOrang.textContent = `Perkiraan biaya patungan per orang: ${biayaPatungan.toLocaleString(
        "id-ID",
        {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }
      )}`;
    } else if (
      (typeof hargaHewan === "bigint" && hargaHewan <= 0n) ||
      (typeof hargaHewan === "number" && (isNaN(hargaHewan) || hargaHewan <= 0))
    ) {
      modalBiayaPerOrang.textContent =
        "Masukkan perkiraan harga hewan untuk melihat biaya patungan.";
    } else {
      modalBiayaPerOrang.textContent =
        "Jumlah peserta harus lebih dari 0 untuk menghitung biaya patungan.";
    }

    if (catatan.length > 0) {
      modalCatatanTambahan.innerHTML = `Catatan Penting: <ul>${catatan
        .map((c) => `<li>${c}</li>`)
        .join("")}</ul>`;
    } else {
      modalCatatanTambahan.textContent = "";
    }

    showModal();
  });
});
