const inputSearch = document.querySelector(".search-input");
const hasilSearch = document.querySelector(".hasil-search");

inputSearch.addEventListener("keyup", async function () {
  const searchValue = inputSearch.value;

  if (searchValue !== "") {
    hasilSearch.classList.remove("d-none");
    await getkota(searchValue);
    getBtnKota();
  } else {
    hasilSearch.classList.add("d-none");
  }
});

const refresh = document.querySelector(".refresh");
refresh.addEventListener("click", async () => {
  await getJadwalSholat();
  location.reload();
});
tampilKotaDanTanggal();

function getkota(search) {
  return fetch("https://api.myquran.com/v2/sholat/kota/cari/" + search)
    .then((Response) => Response.json())
    .then((Data) => {
      const datas = Data.data;
      let isiKota = "";
      datas.map((k) => {
        isiKota += gantiUIKota(k);
      });
      hasilSearch.innerHTML = isiKota;
    })
    .catch(
      (e) =>
        (hasilSearch.innerHTML = `<p class="list-group-item list-group-item-action">Maaf Kota Tidak Ketemu</p>`)
    );
}

function getTanggalBulan() {
  const getYear = new Date().getFullYear();
  const getMonth = new Date().getMonth() + 1;
  const getDate = new Date().getDate();
  return `/${getYear}/${getMonth}/${getDate}`;
}

function getJadwalSholat() {
  return fetch(
    "https://api.myquran.com/v2/sholat/jadwal/" +
      localStorage.getItem("id") +
      getTanggalBulan()
  )
    .then((Response) => Response.json())
    .then((Data) => {
      const Jadwal = Data.data.jadwal;
      localStorage.setItem("subuh", Jadwal.subuh);
      localStorage.setItem("tanggal", Jadwal.tanggal);
      localStorage.setItem("dzuhur", Jadwal.dzuhur);
      localStorage.setItem("ashar", Jadwal.ashar);
      localStorage.setItem("Maghrib", Jadwal.maghrib);
      localStorage.setItem("isya", Jadwal.isya);
    })
    .catch((e) => alert("ada yang salah"));
}

function getBtnKota() {
  const listKota = document.querySelectorAll(".nama-kota");
  listKota.forEach((k) => {
    k.addEventListener("click", async function () {
      const ambilId = this.getAttribute("id");
      const ambilKota = this.textContent;
      localStorage.setItem("id", ambilId);
      localStorage.setItem("kota", ambilKota);
      await getJadwalSholat();
      location.reload();
    });
  });
}

function gantiUIKota(kota) {
  return `<a id="${kota.id}" class="list-group-item list-group-item-action nama-kota">${kota.lokasi}</a>`;
}

function tampilKotaDanTanggal() {
  const judulKota = document.querySelector(".title-kota");
  const tanggal = document.querySelector(".tanggal-hari");
  judulKota.textContent = localStorage.getItem("kota");
  tanggal.innerText = localStorage.getItem("tanggal");
  document.querySelector(".subuh").textContent = localStorage.getItem("subuh");
  document.querySelector(".dzuhur").textContent =
    localStorage.getItem("dzuhur");
  document.querySelector(".ashar").textContent = localStorage.getItem("ashar");
  document.querySelector(".maghrib").textContent =
    localStorage.getItem("Maghrib");
  document.querySelector(".isya").textContent = localStorage.getItem("isya");
}
