document.addEventListener("DOMContentLoaded", () => {
  window.showTab = (tabName) => {
    document.querySelectorAll(".tab-content").forEach((tab) => {
      tab.classList.remove("active");
    });
    document.getElementById(`${tabName}-tab`).classList.add("active");
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  };

  const fidyahForm = document.getElementById("fidyah-form");
  const hariPuasaInput = document.getElementById("hari-puasa");

  const resultModal = document.getElementById("result-modal");
  const modalResultContent = document.getElementById("modal-result-content");
  const closeBtn = document.querySelector(".close-btn");

  fidyahForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const hariPuasa = parseInt(hariPuasaInput.value);
    if (isNaN(hariPuasa) || hariPuasa <= 0) {
      modalResultContent.innerHTML = `<p style="color: #c0392b;">Jumlah hari tidak valid.</p>`;
      resultModal.style.display = "flex";
      return;
    }

    const berasPerHariKg = 0.675;
    const hargaBerasPerKg = 15000;
    const fidyahBerasTotal = hariPuasa * berasPerHariKg;
    const fidyahUangTotal = hariPuasa * hargaBerasPerKg;

    modalResultContent.innerHTML = `
            <h3>Hasil Perhitungan Fidyah</h3>
            <p><strong>Jumlah Hari:</strong> ${hariPuasa} hari</p>
            <p><strong>Besaran Fidyah (beras):</strong> ${fidyahBerasTotal.toFixed(
              2
            )} kg</p>
            <p><strong>Estimasi Fidyah (uang):</strong> Rp ${fidyahUangTotal.toLocaleString(
              "id-ID"
            )}</p>
            <p class="small-text">
                <strong>Ketentuan Syariat:</strong> Fidyah dibayarkan kepada fakir miskin.
                Besaran fidyah adalah satu mudd (sekitar 675 gram bahan makanan pokok)
                untuk setiap hari puasa yang ditinggalkan.
            </p>
        `;
    resultModal.style.display = "flex";
  });

  const kifaratForm = document.getElementById("kifarat-form");
  const pelanggaranSelect = document.getElementById("pelanggaran");

  kifaratForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const pelanggaran = pelanggaranSelect.value;
    let kifaratText = "";

    switch (pelanggaran) {
      case "sumpah":
        kifaratText = `
                    <h3>Kafarat Melanggar Sumpah</h3>
                    <p>Pilih salah satu dari tiga opsi berikut:</p>
                    <ol>
                        <li>Memberi makan 10 orang fakir miskin.</li>
                        <li>Memberi pakaian 10 orang fakir miskin.</li>
                        <li>Memerdekakan seorang budak (jika tidak mampu, puasa 3 hari).</li>
                    </ol>
                    <p class="small-text">
                        <strong>Dalil:</strong> Surah Al-Ma'idah ayat 89. Jika tidak mampu,
                        maka kifaratnya adalah berpuasa selama tiga hari.
                    </p>
                `;
        break;
      case "ramadan":
        kifaratText = `
                    <h3>Kafarat Berhubungan Suami-Istri saat Ramadan</h3>
                    <p>Laksanakan kifarat secara berurutan:</p>
                    <ol>
                        <li>Memerdekakan seorang budak (saat ini tidak relevan).</li>
                        <li>Jika tidak mampu, puasa selama dua bulan berturut-turut.</li>
                        <li>Jika tidak mampu, memberi makan 60 orang fakir miskin.</li>
                    </ol>
                    <p class="small-text">
                        <strong>Dalil:</strong> Hadis Abu Hurairah. Pelanggaran ini juga
                        wajib diganti (qadha) puasa yang batal.
                    </p>
                `;
        break;
      case "zhihar":
        kifaratText = `
                    <h3>Kafarat Zhihar ( menyamakan istri dengan ibu )</h3>
                    <p>Laksanakan kifarat secara berurutan:</p>
                    <ol>
                        <li>Memerdekakan seorang budak (saat ini tidak relevan).</li>
                        <li>Jika tidak mampu, puasa selama dua bulan berturut-turut.</li>
                        <li>Jika tidak mampu, memberi makan 60 orang fakir miskin.</li>
                    </ol>
                    <p class="small-text">
                        <strong>Dalil:</strong> Surah Al-Mujadilah ayat 3-4.
                    </p>
                `;
        break;
      case "membunuhburuansaatihram":
        kifaratText = `
                    <h3>Kafarat Membunuh Hewan Buruan Saat Ihram</h3>
                    <p>Laksanakan kifarat secara berurutan:</p>
                    <ol>
                        <li>Mengganti binatang buruan yang sudah dibunuh dengan binatang ternak yang setara</li>
                        <li>Jika tidak mampu, Memberi makan orang miskin dengan Jumlah makanan yang diberikan sebanding dengan nilai harga hewan ternak yang sepadan</li>
                        <li>Jika tidak mampu, Melakukan Puasa. Lama hari puasa sesuai dengan jumlah makanan yang seharusnya dikeluarkan untuk memberi makan orang miskin. Biasanya, perhitungannya adalah setiap satu mud (sekitar 0,7 liter atau ¾ kg beras) makanan yang seharusnya diberikan, diganti dengan satu hari puasa.</li>
                    </ol>
                    <p class="small-text">
                        <strong>Dalil:</strong> Surah Al-Ma'idah Ayat 94-95.
                    </p>
                `;
        break;
      case "ila":
        kifaratText = `
                    <h3>Kafarat Ila' ( Suami yang bersumpah untuk tidak akan menggauli
                  istrinya )</h3>
                    <p>Pilih salah satu dari tiga opsi berikut:</p>
                    <ol>
                        <li>Memberi makan 10 orang fakir miskin.</li>
                        <li>Memberi pakaian 10 orang fakir miskin.</li>
                        <li>Memerdekakan seorang budak (jika tidak mampu, puasa 3 hari).</li>
                    </ol>
                    <p class="small-text">
                        <strong>Dalil:</strong> Al-Baqarah ayat 226-227.
                    </p>
                `;
        break;
      default:
        kifaratText = `<p style="color: #c0392b;">Mohon pilih jenis pelanggaran.</p>`;
    }

    modalResultContent.innerHTML = kifaratText;
    resultModal.style.display = "flex";
  });

  closeBtn.onclick = () => {
    resultModal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == resultModal) {
      resultModal.style.display = "none";
    }
  };
});
