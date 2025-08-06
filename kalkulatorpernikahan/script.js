document.addEventListener("DOMContentLoaded", function () {
  function formatRupiah(angka) {
    let reverse = angka.toString().split("").reverse().join("");
    let ribuan = reverse.match(/\d{1,3}/g);
    let result = ribuan.join(".").split("").reverse().join("");
    return "Rp " + result;
  }

  function cleanAndParseFloat(value) {
    return parseFloat(value.replace(/\./g, "")) || 0;
  }

  function calculateAndDisplayBudget() {
    const pw_fotografi = cleanAndParseFloat(
      document.getElementById("pw_fotografi").value
    );
    const pw_videografi = cleanAndParseFloat(
      document.getElementById("pw_videografi").value
    );
    const pw_lokasi = cleanAndParseFloat(
      document.getElementById("pw_lokasi").value
    );
    const pw_mua = cleanAndParseFloat(document.getElementById("pw_mua").value);
    const pw_busana = cleanAndParseFloat(
      document.getElementById("pw_busana").value
    );
    const pw_transportasi = cleanAndParseFloat(
      document.getElementById("pw_transportasi").value
    );
    const pw_lain = cleanAndParseFloat(
      document.getElementById("pw_lain").value
    );

    const totalPrewedding =
      pw_fotografi +
      pw_videografi +
      pw_lokasi +
      pw_mua +
      pw_busana +
      pw_transportasi +
      pw_lain;
    document.getElementById("res_total_pw").textContent =
      formatRupiah(totalPrewedding);
    document.getElementById("res_pw_fotografi").textContent =
      formatRupiah(pw_fotografi);
    document.getElementById("res_pw_videografi").textContent =
      formatRupiah(pw_videografi);
    document.getElementById("res_pw_lokasi").textContent =
      formatRupiah(pw_lokasi);
    document.getElementById("res_pw_mua").textContent = formatRupiah(pw_mua);
    document.getElementById("res_pw_busana").textContent =
      formatRupiah(pw_busana);
    document.getElementById("res_pw_transportasi").textContent =
      formatRupiah(pw_transportasi);
    document.getElementById("res_pw_lain").textContent = formatRupiah(pw_lain);
    document.getElementById("res_total_pw_detail").textContent =
      formatRupiah(totalPrewedding);

    const akad_penghulu = cleanAndParseFloat(
      document.getElementById("akad_penghulu").value
    );
    const akad_mahar = cleanAndParseFloat(
      document.getElementById("akad_mahar").value
    );
    const akad_busana = cleanAndParseFloat(
      document.getElementById("akad_busana").value
    );
    const akad_mua = cleanAndParseFloat(
      document.getElementById("akad_mua").value
    );
    const akad_dekorasi = cleanAndParseFloat(
      document.getElementById("akad_dekorasi").value
    );
    const akad_catering = cleanAndParseFloat(
      document.getElementById("akad_catering").value
    );
    const akad_fotografi = cleanAndParseFloat(
      document.getElementById("akad_fotografi").value
    );
    const akad_videografi = cleanAndParseFloat(
      document.getElementById("akad_videografi").value
    );
    const akad_lain = cleanAndParseFloat(
      document.getElementById("akad_lain").value
    );

    const totalAkad =
      akad_penghulu +
      akad_mahar +
      akad_busana +
      akad_mua +
      akad_dekorasi +
      akad_catering +
      akad_fotografi +
      akad_videografi +
      akad_lain;
    document.getElementById("res_total_akad").textContent =
      formatRupiah(totalAkad);
    document.getElementById("res_akad_penghulu").textContent =
      formatRupiah(akad_penghulu);
    document.getElementById("res_akad_mahar").textContent =
      formatRupiah(akad_mahar);
    document.getElementById("res_akad_busana").textContent =
      formatRupiah(akad_busana);
    document.getElementById("res_akad_mua").textContent =
      formatRupiah(akad_mua);
    document.getElementById("res_akad_dekorasi").textContent =
      formatRupiah(akad_dekorasi);
    document.getElementById("res_akad_catering").textContent =
      formatRupiah(akad_catering);
    document.getElementById("res_akad_fotografi").textContent =
      formatRupiah(akad_fotografi);
    document.getElementById("res_akad_videografi").textContent =
      formatRupiah(akad_videografi);
    document.getElementById("res_akad_lain").textContent =
      formatRupiah(akad_lain);
    document.getElementById("res_total_akad_detail").textContent =
      formatRupiah(totalAkad);

    const resepsi_venue = cleanAndParseFloat(
      document.getElementById("resepsi_venue").value
    );
    const resepsi_catering_perporsi = cleanAndParseFloat(
      document.getElementById("resepsi_catering_perporsi").value
    );
    const resepsi_jumlah_tamu = cleanAndParseFloat(
      document.getElementById("resepsi_jumlah_tamu").value
    );
    const resepsi_dekorasi = cleanAndParseFloat(
      document.getElementById("resepsi_dekorasi").value
    );
    const resepsi_busana = cleanAndParseFloat(
      document.getElementById("resepsi_busana").value
    );
    const resepsi_mua = cleanAndParseFloat(
      document.getElementById("resepsi_mua").value
    );
    const resepsi_fotografi = cleanAndParseFloat(
      document.getElementById("resepsi_fotografi").value
    );
    const resepsi_videografi = cleanAndParseFloat(
      document.getElementById("resepsi_videografi").value
    );
    const resepsi_undangan = cleanAndParseFloat(
      document.getElementById("resepsi_undangan").value
    );
    const resepsi_souvenir = cleanAndParseFloat(
      document.getElementById("resepsi_souvenir").value
    );
    const resepsi_hiburan = cleanAndParseFloat(
      document.getElementById("resepsi_hiburan").value
    );
    const resepsi_lain = cleanAndParseFloat(
      document.getElementById("resepsi_lain").value
    );

    const totalCateringResepsi =
      resepsi_catering_perporsi * resepsi_jumlah_tamu;
    const totalResepsi =
      resepsi_venue +
      totalCateringResepsi +
      resepsi_dekorasi +
      resepsi_busana +
      resepsi_mua +
      resepsi_fotografi +
      resepsi_videografi +
      resepsi_undangan +
      resepsi_souvenir +
      resepsi_hiburan +
      resepsi_lain;
    document.getElementById("res_total_resepsi_summary").textContent =
      formatRupiah(totalResepsi);
    document.getElementById("res_resepsi_venue").textContent =
      formatRupiah(resepsi_venue);
    document.getElementById("res_resepsi_catering_total").textContent =
      formatRupiah(totalCateringResepsi);
    document.getElementById("res_resepsi_dekorasi").textContent =
      formatRupiah(resepsi_dekorasi);
    document.getElementById("res_resepsi_busana").textContent =
      formatRupiah(resepsi_busana);
    document.getElementById("res_resepsi_mua").textContent =
      formatRupiah(resepsi_mua);
    document.getElementById("res_resepsi_fotografi").textContent =
      formatRupiah(resepsi_fotografi);
    document.getElementById("res_resepsi_videografi").textContent =
      formatRupiah(resepsi_videografi);
    document.getElementById("res_resepsi_undangan").textContent =
      formatRupiah(resepsi_undangan);
    document.getElementById("res_resepsi_souvenir").textContent =
      formatRupiah(resepsi_souvenir);
    document.getElementById("res_resepsi_hiburan").textContent =
      formatRupiah(resepsi_hiburan);
    document.getElementById("res_resepsi_lain").textContent =
      formatRupiah(resepsi_lain);
    document.getElementById("res_total_resepsi_detail").textContent =
      formatRupiah(totalResepsi);

    let biayaTakTerduga = cleanAndParseFloat(
      document.getElementById("biaya_tak_terduga").value
    );
    document.getElementById("res_biaya_tak_terduga").textContent =
      formatRupiah(biayaTakTerduga);

    const totalAnggaranKeseluruhan =
      totalPrewedding + totalAkad + totalResepsi + biayaTakTerduga;
    document.getElementById("totalAnggaranKeseluruhan").textContent =
      formatRupiah(totalAnggaranKeseluruhan);
  }

  function showTab(tabId) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach((button) => {
      button.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");

    document
      .querySelector(`.tab-button[data-tab="${tabId}"]`)
      .classList.add("active");

    if (tabId === "rincian") {
      calculateAndDisplayBudget();
    }
  }

  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.dataset.tab;
      showTab(tabId);
    });
  });

  const allInputs = document.querySelectorAll('input[type="text"]');
  allInputs.forEach((input) => {
    input.addEventListener("input", calculateAndDisplayBudget);
  });

  calculateAndDisplayBudget();
});
