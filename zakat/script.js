document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      const targetTab = button.dataset.tab;
      document.getElementById(targetTab).classList.add("active");
    });
  });

  const currencyInputs = document.querySelectorAll(".currency-input");
  currencyInputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.value = formatInputCurrency(this.value);
    });
  });
});

function formatInputCurrency(value) {
  let cleanValue = value.replace(/[^\d]/g, "");

  let numberValue = parseInt(cleanValue, 10);
  if (isNaN(numberValue)) {
    return "";
  }

  return new Intl.NumberFormat("id-ID").format(numberValue);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function parseCurrencyInput(value) {
  const cleanValue = value.replace(/\./g, "");
  return parseFloat(cleanValue);
}

function calculateZakatFitrah() {
  const jumlahJiwa = parseCurrencyInput(
    document.getElementById("jumlah-jiwa").value
  );
  const hargaBeras = parseCurrencyInput(
    document.getElementById("harga-beras").value
  );

  if (
    isNaN(jumlahJiwa) ||
    isNaN(hargaBeras) ||
    jumlahJiwa <= 0 ||
    hargaBeras <= 0
  ) {
    alert("Mohon masukkan angka yang valid untuk jumlah jiwa dan harga beras.");
    return;
  }

  const zakatPerJiwa = 2.5;
  const totalZakatFitrah = jumlahJiwa * zakatPerJiwa * hargaBeras;

  document.getElementById("result-fitrah").textContent =
    formatCurrency(totalZakatFitrah);
}

function calculateZakatHarta() {
  const saldoTabungan = parseCurrencyInput(
    document.getElementById("saldo-tabungan").value
  );
  const nilaiEmas = parseCurrencyInput(
    document.getElementById("nilai-emas").value
  );
  const nilaiProperti = parseCurrencyInput(
    document.getElementById("nilai-properti").value
  );
  const hutangJatuhTempo = parseCurrencyInput(
    document.getElementById("hutang-jatuh-tempo").value
  );
  const hargaEmasPerGram = parseCurrencyInput(
    document.getElementById("harga-emas-per-gram").value
  );

  if (
    isNaN(saldoTabungan) ||
    isNaN(nilaiEmas) ||
    isNaN(nilaiProperti) ||
    isNaN(hutangJatuhTempo) ||
    isNaN(hargaEmasPerGram)
  ) {
    alert("Mohon masukkan angka yang valid untuk semua kolom Zakat Harta.");
    return;
  }

  const nisabEmasGram = 85;
  const nisabZakatHarta = nisabEmasGram * hargaEmasPerGram;

  const totalHarta =
    saldoTabungan + nilaiEmas + nilaiProperti - hutangJatuhTempo;
  document.getElementById("total-harta").textContent =
    formatCurrency(totalHarta);

  document.getElementById("nisab-harta").textContent =
    formatCurrency(nisabZakatHarta);

  let zakatHarta = 0;
  if (totalHarta >= nisabZakatHarta) {
    zakatHarta = 0.025 * totalHarta;
  }

  document.getElementById("result-harta").textContent =
    formatCurrency(zakatHarta);
}

function calculateZakatProfesi() {
  const penghasilanBulanan = parseCurrencyInput(
    document.getElementById("penghasilan-bulanan").value
  );
  const pengeluaranPokokBulanan = parseCurrencyInput(
    document.getElementById("pengeluaran-pokok-bulanan").value
  );
  const hargaBerasProfesi = parseCurrencyInput(
    document.getElementById("harga-beras-profesi").value
  );

  if (
    isNaN(penghasilanBulanan) ||
    isNaN(pengeluaranPokokBulanan) ||
    isNaN(hargaBerasProfesi)
  ) {
    alert("Mohon masukkan angka yang valid untuk semua kolom Zakat Profesi.");
    return;
  }

  const nisabBerasKg = 520;
  const nisabProfesi = (nisabBerasKg * hargaBerasProfesi) / 12;

  document.getElementById("nisab-profesi").textContent =
    formatCurrency(nisabProfesi);

  const penghasilanBersih = penghasilanBulanan - pengeluaranPokokBulanan;
  document.getElementById("penghasilan-bersih-profesi").textContent =
    formatCurrency(penghasilanBersih);

  let zakatProfesi = 0;
  if (penghasilanBersih >= nisabProfesi) {
    zakatProfesi = 0.025 * penghasilanBulanan;
  }

  document.getElementById("result-profesi").textContent =
    formatCurrency(zakatProfesi);
}

function calculateZakatUsaha() {
  const modalUsaha = parseCurrencyInput(
    document.getElementById("modal-usaha").value
  );
  const keuntunganUsaha = parseCurrencyInput(
    document.getElementById("keuntungan-usaha").value
  );
  const hutangUsaha = parseCurrencyInput(
    document.getElementById("hutang-usaha").value
  );
  const hargaEmasUsaha = parseCurrencyInput(
    document.getElementById("harga-emas-usaha").value
  );

  if (
    isNaN(modalUsaha) ||
    isNaN(keuntunganUsaha) ||
    isNaN(hutangUsaha) ||
    isNaN(hargaEmasUsaha)
  ) {
    alert("Mohon masukkan angka yang valid untuk semua kolom Zakat Usaha.");
    return;
  }

  const nisabEmasGram = 85;
  const nisabZakatUsaha = nisabEmasGram * hargaEmasUsaha;

  const totalAsetBersihUsaha = modalUsaha + keuntunganUsaha - hutangUsaha;
  document.getElementById("total-aset-usaha").textContent =
    formatCurrency(totalAsetBersihUsaha);
  document.getElementById("nisab-usaha").textContent =
    formatCurrency(nisabZakatUsaha);

  let zakatUsaha = 0;
  if (totalAsetBersihUsaha >= nisabZakatUsaha) {
    zakatUsaha = 0.025 * totalAsetBersihUsaha;
  }

  document.getElementById("result-usaha").textContent =
    formatCurrency(zakatUsaha);
}
