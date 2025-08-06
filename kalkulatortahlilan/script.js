function calculateTahlilan() {
  const day = parseInt(document.getElementById("dayOfDeath").value);
  const month = parseInt(document.getElementById("monthOfDeath").value);
  const year = parseInt(document.getElementById("yearOfDeath").value);

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > 2100
  ) {
    alert("Mohon masukkan tanggal, bulan, dan tahun meninggal yang valid.");
    return;
  }

  const dateOfDeath = new Date(year, month - 1, day);

  if (
    dateOfDeath.getDate() !== day ||
    dateOfDeath.getMonth() !== month - 1 ||
    dateOfDeath.getFullYear() !== year
  ) {
    alert(
      "Tanggal meninggal yang Anda masukkan tidak valid. Contoh: Februari tidak memiliki 30 atau 31 hari."
    );
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timeDiff = today.getTime() - dateOfDeath.getTime();
  const daysSinceDeath = Math.floor(timeDiff / (1000 * 3600 * 24));

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  document.getElementById("displayDateOfDeath").innerText =
    formatDate(dateOfDeath);
  document.getElementById(
    "daysSinceDeath"
  ).innerText = `${daysSinceDeath} hari`;

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const addYears = (date, years) => {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
  };

  document.getElementById("tahlil1").innerText = formatDate(
    addDays(dateOfDeath, 0)
  );
  document.getElementById("tahlil3").innerText = formatDate(
    addDays(dateOfDeath, 2)
  );
  document.getElementById("tahlil7").innerText = formatDate(
    addDays(dateOfDeath, 6)
  );
  document.getElementById("tahlil40").innerText = formatDate(
    addDays(dateOfDeath, 39)
  );
  document.getElementById("tahlil100").innerText = formatDate(
    addDays(dateOfDeath, 99)
  );
  document.getElementById("tahlil1000").innerText = formatDate(
    addDays(dateOfDeath, 999)
  );

  document.getElementById("pendhak1").innerText = formatDate(
    addYears(dateOfDeath, 1)
  );
  document.getElementById("pendhak2").innerText = formatDate(
    addYears(dateOfDeath, 2)
  );

  openModal();
}

function openModal() {
  document.getElementById("resultModal").classList.add("show");
}

function closeModal() {
  document.getElementById("resultModal").classList.remove("show");
}
