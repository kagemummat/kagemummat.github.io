function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

function toggleGender(gender) {
  const adaIstri = document.getElementById("adaIstri");
  const jumlahIstriInput = document.getElementById("jumlahIstri");

  if (gender === "istri") {
    if (adaIstri.checked) {
      jumlahIstriInput.classList.remove("hidden-input");
      jumlahIstriInput.value = 1;
    } else {
      jumlahIstriInput.classList.add("hidden-input");
      jumlahIstriInput.value = 0;
    }
  }
}

function parseRupiah(rupiahString) {
  return (
    parseInt(rupiahString.replace(/[^0-9,-]/g, "").replace(/,/g, "."), 10) || 0
  );
}

function setupCurrencyInput(inputId) {
  const inputElement = document.getElementById(inputId);
  inputElement.addEventListener("input", function (e) {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");
    if (value) {
      e.target.value = formatRupiah(parseInt(value, 10))
        .replace("Rp", "")
        .trim();
    } else {
      e.target.value = "0";
    }
  });

  inputElement.addEventListener("blur", function (e) {
    let value = e.target.value;
    value = parseRupiah(value);
    e.target.value = formatRupiah(value).replace("Rp", "").trim();
  });

  inputElement.value = formatRupiah(parseRupiah(inputElement.value))
    .replace("Rp", "")
    .trim();
}

document.addEventListener("DOMContentLoaded", () => {
  setupCurrencyInput("totalHarta");
  setupCurrencyInput("hutangHarta");
  setupCurrencyInput("hutangPribadi");
  setupCurrencyInput("biayaJenazah");
  setupCurrencyInput("wasiat");

  toggleGender("istri");
});

function hitungWaris() {
  const totalHartaStr = document.getElementById("totalHarta").value;
  const hutangHartaStr = document.getElementById("hutangHarta").value;
  const hutangPribadiStr = document.getElementById("hutangPribadi").value;
  const biayaJenazahStr = document.getElementById("biayaJenazah").value;
  const wasiatStr = document.getElementById("wasiat").value;

  let totalHarta = parseRupiah(totalHartaStr);
  let hutangHarta = parseRupiah(hutangHartaStr);
  let hutangPribadi = parseRupiah(hutangPribadiStr);
  let biayaJenazah = parseRupiah(biayaJenazahStr);
  let wasiat = parseRupiah(wasiatStr);

  const adaSuami = document.getElementById("adaSuami").checked;
  const adaIstri = document.getElementById("adaIstri").checked;
  const jumlahIstri =
    parseInt(document.getElementById("jumlahIstri").value) || 0;
  const anakLk = parseInt(document.getElementById("anakLk").value) || 0;
  const anakPr = parseInt(document.getElementById("anakPr").value) || 0;
  const cucuLkAnakLk =
    parseInt(document.getElementById("cucuLkAnakLk").value) || 0;
  const cucuPrAnakLk =
    parseInt(document.getElementById("cucuPrAnakLk").value) || 0;
  const adaAyah = document.getElementById("adaAyah").checked;
  const adaIbu = document.getElementById("adaIbu").checked;
  const adaKakekAyah = document.getElementById("adaKakekAyah").checked;
  const adaNenekIbu = document.getElementById("adaNenekIbu").checked;
  const adaNenekAyah = document.getElementById("adaNenekAyah").checked;
  const saudaraKandungLk =
    parseInt(document.getElementById("saudaraKandungLk").value) || 0;
  const saudaraKandungPr =
    parseInt(document.getElementById("saudaraKandungPr").value) || 0;
  const saudaraSebapakLk =
    parseInt(document.getElementById("saudaraSebapakLk").value) || 0;
  const saudaraSebapakPr =
    parseInt(document.getElementById("saudaraSebapakPr").value) || 0;
  const saudaraSeibuLk =
    parseInt(document.getElementById("saudaraSeibuLk").value) || 0;
  const saudaraSeibuPr =
    parseInt(document.getElementById("saudaraSeibuPr").value) || 0;

  const totalPengurangan = hutangHarta + hutangPribadi + biayaJenazah;
  let hartaSetelahPengurangan = totalHarta - totalPengurangan;

  const maxWasiat = hartaSetelahPengurangan / 3;
  if (wasiat > maxWasiat) {
    alert(
      `Wasiat tidak boleh melebihi 1/3 dari harta bersih. Wasiat akan dibulatkan menjadi ${formatRupiah(
        maxWasiat
      )}.`
    );
    wasiat = maxWasiat;
  }

  let hartaBersih = hartaSetelahPengurangan - wasiat;

  if (hartaBersih < 0) {
    hartaBersih = 0;
    alert(
      "Harta warisan tidak mencukupi untuk menutupi hutang, biaya jenazah, dan wasiat."
    );
  }

  document.getElementById(
    "hartaAwal"
  ).textContent = `Total Harta Awal: ${formatRupiah(totalHarta)}`;
  document.getElementById(
    "totalPengurangan"
  ).textContent = `Total Pengurangan: ${formatRupiah(
    totalPengurangan + wasiat
  )}`;
  document.getElementById(
    "hartaBersih"
  ).textContent = `Harta Bersih (setelah hutang & wasiat): ${formatRupiah(
    hartaBersih
  )}`;

  let hartaSisaUntukAshabah = hartaBersih;
  const hasilPembagian = [];
  let sisaDariDzawilFurudh = hartaBersih;

  if (adaSuami) {
    let bagianSuami;
    if (anakLk > 0 || anakPr > 0 || cucuLkAnakLk > 0 || cucuPrAnakLk > 0) {
      bagianSuami = hartaBersih / 4;
    } else {
      bagianSuami = hartaBersih / 2;
    }
    hasilPembagian.push({
      waris: "Suami",
      status: "Dzawil Furudh",
      bagian: formatFraction(bagianSuami / hartaBersih),
      jumlah: bagianSuami,
    });
    sisaDariDzawilFurudh -= bagianSuami;
  }

  if (adaIstri && jumlahIstri > 0) {
    let bagianIstri;
    if (anakLk > 0 || anakPr > 0 || cucuLkAnakLk > 0 || cucuPrAnakLk > 0) {
      bagianIstri = hartaBersih / 8 / jumlahIstri;
    } else {
      bagianIstri = hartaBersih / 4 / jumlahIstri;
    }
    hasilPembagian.push({
      waris: `Istri (${jumlahIstri} orang)`,
      status: "Dzawil Furudh",
      bagian: formatFraction((bagianIstri * jumlahIstri) / hartaBersih),
      jumlah: bagianIstri * jumlahIstri,
    });
    sisaDariDzawilFurudh -= bagianIstri * jumlahIstri;
  }

  if (adaIbu) {
    let bagianIbu;
    if (
      anakLk > 0 ||
      anakPr > 0 ||
      saudaraKandungLk > 1 ||
      saudaraKandungPr > 1 ||
      saudaraSebapakLk > 1 ||
      saudaraSebapakPr > 1 ||
      saudaraSeibuLk > 1 ||
      saudaraSeibuPr > 1
    ) {
      bagianIbu = hartaBersih / 6;
    } else if (adaSuami && !adaIstri) {
      bagianIbu = hartaBersih / 3;
    } else if (adaIstri && !adaSuami) {
      bagianIbu = hartaBersih / 3;
    } else {
      bagianIbu = hartaBersih / 3;
    }
    hasilPembagian.push({
      waris: "Ibu",
      status: "Dzawil Furudh",
      bagian: formatFraction(bagianIbu / hartaBersih),
      jumlah: bagianIbu,
    });
    sisaDariDzawilFurudh -= bagianIbu;
  }

  if (adaAyah) {
    if (anakLk > 0 || anakPr > 0) {
      let bagianAyah = hartaBersih / 6;
      hasilPembagian.push({
        waris: "Ayah",
        status: "Dzawil Furudh",
        bagian: "1/6",
        jumlah: bagianAyah,
      });
      sisaDariDzawilFurudh -= bagianAyah;
    }
  }

  if (anakPr > 0) {
    if (anakLk === 0) {
      if (anakPr === 1) {
        let bagianAnakPr = hartaBersih / 2;
        hasilPembagian.push({
          waris: "Anak Perempuan (1 orang)",
          status: "Dzawil Furudh",
          bagian: "1/2",
          jumlah: bagianAnakPr,
        });
        sisaDariDzawilFurudh -= bagianAnakPr;
      } else if (anakPr >= 2) {
        let bagianAnakPr = (hartaBersih * 2) / 3 / anakPr;
        hasilPembagian.push({
          waris: `Anak Perempuan (${anakPr} orang)`,
          status: "Dzawil Furudh",
          bagian: "2/3",
          jumlah: bagianAnakPr * anakPr,
        });
        sisaDariDzawilFurudh -= bagianAnakPr * anakPr;
      }
    }
  }

  const totalSaudaraSeibu = saudaraSeibuLk + saudaraSeibuPr;
  if (
    totalSaudaraSeibu > 0 &&
    !(
      adaAyah ||
      adaKakekAyah ||
      anakLk > 0 ||
      anakPr > 0 ||
      cucuLkAnakLk > 0 ||
      cucuPrAnakLk > 0
    )
  ) {
    if (totalSaudaraSeibu === 1) {
      let bagianSaudaraSeibu = hartaBersih / 6;
      hasilPembagian.push({
        waris: "Saudara Seibu (1 orang)",
        status: "Dzawil Furudh",
        bagian: "1/6",
        jumlah: bagianSaudaraSeibu,
      });
      sisaDariDzawilFurudh -= bagianSaudaraSeibu;
    } else if (totalSaudaraSeibu >= 2) {
      let bagianSaudaraSeibu = hartaBersih / 3 / totalSaudaraSeibu;
      hasilPembagian.push({
        waris: `Saudara Seibu (${totalSaudaraSeibu} orang)`,
        status: "Dzawil Furudh",
        bagian: "1/3",
        jumlah: bagianSaudaraSeibu * totalSaudaraSeibu,
      });
      sisaDariDzawilFurudh -= bagianSaudaraSeibu * totalSaudaraSeibu;
    }
  }

  if (adaNenekIbu && !adaIbu) {
    let bagianNenekIbu = hartaBersih / 6;
    hasilPembagian.push({
      waris: "Nenek (dari Ibu)",
      status: "Dzawil Furudh",
      bagian: "1/6",
      jumlah: bagianNenekIbu,
    });
    sisaDariDzawilFurudh -= bagianNenekIbu;
  }
  if (adaNenekAyah && !adaIbu && !adaAyah) {
    let bagianNenekAyah = hartaBersih / 6;
    if (!hasilPembagian.some((p) => p.waris.includes("Nenek (dari Ibu)"))) {
      hasilPembagian.push({
        waris: "Nenek (dari Ayah)",
        status: "Dzawil Furudh",
        bagian: "1/6",
        jumlah: bagianNenekAyah,
      });
      sisaDariDzawilFurudh -= bagianNenekAyah;
    } else {
      const bagianKeduanya = hartaBersih / 6;
      const nenekIbuIndex = hasilPembagian.findIndex((p) =>
        p.waris.includes("Nenek (dari Ibu)")
      );
      if (nenekIbuIndex !== -1) {
        hasilPembagian[nenekIbuIndex].jumlah = bagianKeduanya / 2;
        hasilPembagian[nenekIbuIndex].bagian = "1/12";
      }
      hasilPembagian.push({
        waris: "Nenek (dari Ayah)",
        status: "Dzawil Furudh",
        bagian: "1/12",
        jumlah: bagianKeduanya / 2,
      });
      sisaDariDzawilFurudh -= bagianKeduanya;
    }
  }

  hartaSisaUntukAshabah = sisaDariDzawilFurudh;

  if (adaAyah && !(anakLk > 0 || anakPr > 0)) {
    hasilPembagian.push({
      waris: "Ayah",
      status: "Ashabah",
      bagian: "Sisa",
      jumlah: hartaSisaUntukAshabah,
    });
    hartaSisaUntukAshabah = 0;
  } else if (adaAyah && anakPr > 0 && anakLk === 0) {
    if (hartaSisaUntukAshabah > 0) {
      const ayahEntry = hasilPembagian.find((item) => item.waris === "Ayah");
      if (ayahEntry) {
        ayahEntry.jumlah += hartaSisaUntukAshabah;
        ayahEntry.status = "Dzawil Furudh + Ashabah";
        ayahEntry.bagian = "1/6 + Sisa";
      } else {
        hasilPembagian.push({
          waris: "Ayah",
          status: "Ashabah",
          bagian: "Sisa",
          jumlah: hartaSisaUntukAshabah,
        });
      }
      hartaSisaUntukAshabah = 0;
    }
  }

  if (anakLk > 0) {
    const totalBagianAshabahAnak = anakLk * 2 + anakPr;
    if (totalBagianAshabahAnak > 0) {
      const bagianPerUnit = hartaSisaUntukAshabah / totalBagianAshabahAnak;
      const bagianAnakLk = bagianPerUnit * 2;
      const bagianAnakPr = bagianPerUnit;

      if (anakLk > 0) {
        hasilPembagian.push({
          waris: `Anak Laki-laki (${anakLk} orang)`,
          status: "Ashabah",
          bagian: "Sisa (2:1 dengan Pr)",
          jumlah: bagianAnakLk * anakLk,
        });
      }
      if (anakPr > 0 && anakLk > 0) {
        hasilPembagian.push({
          waris: `Anak Perempuan (${anakPr} orang)`,
          status: "Ashabah",
          bagian: "Sisa (2:1 dengan Lk)",
          jumlah: bagianAnakPr * anakPr,
        });
      }
      hartaSisaUntukAshabah = 0;
    }
  }

  if (
    adaKakekAyah &&
    !adaAyah &&
    !(anakLk > 0 || anakPr > 0 || cucuLkAnakLk > 0 || cucuPrAnakLk > 0)
  ) {
    if (hartaSisaUntukAshabah > 0) {
      hasilPembagian.push({
        waris: "Kakek (dari Ayah)",
        status: "Ashabah",
        bagian: "Sisa",
        jumlah: hartaSisaUntukAshabah,
      });
      hartaSisaUntukAshabah = 0;
    }
  } else if (
    adaKakekAyah &&
    !adaAyah &&
    (anakLk > 0 || anakPr > 0 || cucuLkAnakLk > 0 || cucuPrAnakLk > 0)
  ) {
    if (hartaSisaUntukAshabah > 0) {
      const bagianKakek = hartaSisaUntukAshabah / 6;
      const sisaKakek = hartaSisaUntukAshabah - bagianKakek;
      hasilPembagian.push({
        waris: "Kakek (dari Ayah)",
        status: "Dzawil Furudh + Ashabah",
        bagian: "1/6 + Sisa",
        jumlah: bagianKakek + sisaKakek,
      });
      hartaSisaUntukAshabah = 0;
    }
  }

  if (cucuLkAnakLk > 0 || cucuPrAnakLk > 0) {
    if (anakLk === 0) {
      const totalBagianAshabahCucu = cucuLkAnakLk * 2 + cucuPrAnakLk;
      if (totalBagianAshabahCucu > 0 && hartaSisaUntukAshabah > 0) {
        const bagianPerUnit = hartaSisaUntukAshabah / totalBagianAshabahCucu;
        const bagianCucuLk = bagianPerUnit * 2;
        const bagianCucuPr = bagianPerUnit;

        if (cucuLkAnakLk > 0) {
          hasilPembagian.push({
            waris: `Cucu Laki-laki dari Anak Laki-laki (${cucuLkAnakLk} orang)`,
            status: "Ashabah",
            bagian: "Sisa (2:1 dengan Pr)",
            jumlah: bagianCucuLk * cucuLkAnakLk,
          });
        }
        if (cucuPrAnakLk > 0 && cucuLkAnakLk > 0) {
          hasilPembagian.push({
            waris: `Cucu Perempuan dari Anak Laki-laki (${cucuPrAnakLk} orang)`,
            status: "Ashabah",
            bagian: "Sisa (2:1 dengan Lk)",
            jumlah: bagianCucuPr * cucuPrAnakLk,
          });
        } else if (cucuPrAnakLk > 0 && cucuLkAnakLk === 0 && anakPr === 0) {
          if (cucuPrAnakLk === 1 && hartaSisaUntukAshabah > 0) {
            const bagian = hartaSisaUntukAshabah / 2;
            hasilPembagian.push({
              waris: `Cucu Perempuan dari Anak Laki-laki (1 orang)`,
              status: "Dzawil Furudh",
              bagian: "1/2",
              jumlah: bagian,
            });
            hartaSisaUntukAshabah -= bagian;
          } else if (cucuPrAnakLk >= 2 && hartaSisaUntukAshabah > 0) {
            const bagian = (hartaSisaUntukAshabah * 2) / 3 / cucuPrAnakLk;
            hasilPembagian.push({
              waris: `Cucu Perempuan dari Anak Laki-laki (${cucuPrAnakLk} orang)`,
              status: "Dzawil Furudh",
              bagian: "2/3",
              jumlah: bagian * cucuPrAnakLk,
            });
            hartaSisaUntukAshabah -= bagian * cucuPrAnakLk;
          }
        }
        hartaSisaUntukAshabah = 0;
      }
    }
  }

  if (saudaraKandungLk > 0 || saudaraKandungPr > 0) {
    if (anakLk === 0 && cucuLkAnakLk === 0 && !adaAyah) {
      const totalBagianAshabahSaudaraKandung =
        saudaraKandungLk * 2 + saudaraKandungPr;
      if (totalBagianAshabahSaudaraKandung > 0 && hartaSisaUntukAshabah > 0) {
        const bagianPerUnit =
          hartaSisaUntukAshabah / totalBagianAshabahSaudaraKandung;
        const bagianSaudaraKandungLk = bagianPerUnit * 2;
        const bagianSaudaraKandungPr = bagianPerUnit;

        if (saudaraKandungLk > 0) {
          hasilPembagian.push({
            waris: `Saudara Kandung Laki-laki (${saudaraKandungLk} orang)`,
            status: "Ashabah",
            bagian: "Sisa (2:1 dengan Pr)",
            jumlah: bagianSaudaraKandungLk * saudaraKandungLk,
          });
        }
        if (saudaraKandungPr > 0 && saudaraKandungLk > 0) {
          hasilPembagian.push({
            waris: `Saudara Kandung Perempuan (${saudaraKandungPr} orang)`,
            status: "Ashabah",
            bagian: "Sisa (2:1 dengan Lk)",
            jumlah: bagianSaudaraKandungPr * saudaraKandungPr,
          });
        } else if (saudaraKandungPr > 0 && saudaraKandungLk === 0) {
          if (saudaraKandungPr === 1) {
            const bagian = hartaSisaUntukAshabah / 2;
            hasilPembagian.push({
              waris: `Saudara Kandung Perempuan (1 orang)`,
              status: "Dzawil Furudh",
              bagian: "1/2",
              jumlah: bagian,
            });
            hartaSisaUntukAshabah -= bagian;
          } else if (saudaraKandungPr >= 2) {
            const bagian = (hartaSisaUntukAshabah * 2) / 3 / saudaraKandungPr;
            hasilPembagian.push({
              waris: `Saudara Kandung Perempuan (${saudaraKandungPr} orang)`,
              status: "Dzawil Furudh",
              bagian: "2/3",
              jumlah: bagian * saudaraKandungPr,
            });
            hartaSisaUntukAshabah -= bagian * saudaraKandungPr;
          }
        }
        hartaSisaUntukAshabah = 0;
      }
    }
  }

  if (saudaraSebapakLk > 0 || saudaraSebapakPr > 0) {
    if (
      anakLk === 0 &&
      cucuLkAnakLk === 0 &&
      !adaAyah &&
      saudaraKandungLk === 0
    ) {
      const totalBagianAshabahSaudaraSebapak =
        saudaraSebapakLk * 2 + saudaraSebapakPr;
      if (totalBagianAshabahSaudaraSebapak > 0 && hartaSisaUntukAshabah > 0) {
        const bagianPerUnit =
          hartaSisaUntukAshabah / totalBagianAshabahSaudaraSebapak;
        const bagianSaudaraSebapakLk = bagianPerUnit * 2;
        const bagianSaudaraSebapakPr = bagianPerUnit;

        if (saudaraSebapakLk > 0) {
          hasilPembagian.push({
            waris: `Saudara Sebapak Laki-laki (${saudaraSebapakLk} orang)`,
            status: "Ashabah",
            bagian: "Sisa (2:1 dengan Pr)",
            jumlah: bagianSaudaraSebapakLk * saudaraSebapakLk,
          });
        }
        if (saudaraSebapakPr > 0 && saudaraSebapakLk > 0) {
          hasilPembagian.push({
            waris: `Saudara Sebapak Perempuan (${saudaraSebapakPr} orang)`,
            status: "Ashabah",
            bagian: "Sisa (2:1 dengan Lk)",
            jumlah: bagianSaudaraSebapakPr * saudaraSebapakPr,
          });
        } else if (
          saudaraSebapakPr > 0 &&
          saudaraSebapakLk === 0 &&
          saudaraKandungPr === 0
        ) {
          if (saudaraSebapakPr === 1) {
            const bagian = hartaSisaUntukAshabah / 2;
            hasilPembagian.push({
              waris: `Saudara Sebapak Perempuan (1 orang)`,
              status: "Dzawil Furudh",
              bagian: "1/2",
              jumlah: bagian,
            });
            hartaSisaUntukAshabah -= bagian;
          } else if (saudaraSebapakPr >= 2) {
            const bagian = (hartaSisaUntukAshabah * 2) / 3 / saudaraSebapakPr;
            hasilPembagian.push({
              waris: `Saudara Sebapak Perempuan (${saudaraSebapakPr} orang)`,
              status: "Dzawil Furudh",
              bagian: "2/3",
              jumlah: bagian * saudaraSebapakPr,
            });
            hartaSisaUntukAshabah -= bagian * saudaraSebapakPr;
          }
        }
        hartaSisaUntukAshabah = 0;
      }
    }
  }

  const resultTableBody = document.getElementById("resultTableBody");
  resultTableBody.innerHTML = "";

  let totalDibagikan = 0;

  hasilPembagian.forEach((data) => {
    const row = resultTableBody.insertRow();
    row.insertCell().textContent = data.waris;
    row.insertCell().textContent = data.status;
    row.insertCell().textContent = data.bagian;
    row.insertCell().textContent = formatRupiah(data.jumlah);
    totalDibagikan += data.jumlah;
  });

  const sisaHartaBelumDibagi = hartaBersih - totalDibagikan;
  document.getElementById(
    "hartaSisa"
  ).textContent = `Total Harta Tersisa (setelah dibagikan): ${formatRupiah(
    sisaHartaBelumDibagi
  )}`;

  if (sisaHartaBelumDibagi > 0) {
    const row = resultTableBody.insertRow();
    row.insertCell().textContent = "Sisa Harta";
    row.insertCell().textContent = "Dzawil Arham / Baitul Mal";
    row.insertCell().textContent = "Sisa";
    row.insertCell().textContent = formatRupiah(sisaHartaBelumDibagi);
  }
}

function formatFraction(value) {
  if (value === 0) return "0";
  if (value === 0.5) return "1/2";
  if (value === 1 / 3) return "1/3";
  if (value === 1 / 4) return "1/4";
  if (value === 1 / 6) return "1/6";
  if (value === 1 / 8) return "1/8";
  if (value === 2 / 3) return "2/3";
  if (value === 3 / 4) return "3/4";
  if (value === 5 / 6) return "5/6";
  if (value === 7 / 8) return "7/8";

  const tolerance = 0.0001;
  const denominators = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 24];
  for (let d of denominators) {
    for (let n = 1; n <= d; n++) {
      if (Math.abs(value - n / d) < tolerance) {
        return `${n}/${d}`;
      }
    }
  }

  return value.toFixed(3);
}
