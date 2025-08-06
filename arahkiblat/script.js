const compassCircle = document.querySelector(".compass-circle");
const qiblaLine = document.querySelector(".qibla-line");
const startBtn = document.querySelector(".start-btn");
const rawCompassHeadingDisplay = document.getElementById("rawCompassHeading");
const compassHeadingDisplay = document.getElementById("compassHeading");
const qiblaDegreeDisplay = document.getElementById("qiblaDegree");
const accuracyInfo = document.getElementById("accuracy-info");
const permissionStatus = document.getElementById("permission-status");
const sensorStatusDisplay = document.getElementById("sensorStatus");
const animationStatusDisplay = document.getElementById("animationStatus");

const debugIcon = document.getElementById("debugIcon");
const debugModalOverlay = document.getElementById("debugModalOverlay");
const debugModalClose = document.getElementById("debugModalClose");

const isIOS =
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
  navigator.userAgent.match(/AppleWebKit/);

let rawCompassHeading = 0;
let currentCompassHeading = 0;
let qiblaDegree = null;
let animationFrameId = null;

const KAABA_LAT = 21.422487;
const KAABA_LNG = 39.826206;

const SMOOTHING_FACTOR = 0.07;
let smoothedCompassHeading = 0;
let lastAlphaValue = null;

function init() {
  startBtn.addEventListener("click", startCompass);
  getLocation();
  debugIcon.addEventListener("click", toggleDebugModal);
  debugModalClose.addEventListener("click", toggleDebugModal);
  debugModalOverlay.addEventListener("click", (e) => {
    if (e.target === debugModalOverlay) {
      toggleDebugModal();
    }
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      locationHandler,
      locationErrorHandler,
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
    accuracyInfo.textContent = "Mencari lokasi...";
  } else {
    accuracyInfo.textContent = "Geolocation tidak didukung oleh browser Anda.";
    permissionStatus.textContent =
      "Tidak dapat menghitung arah Kiblat tanpa lokasi.";
  }
}

function locationHandler(position) {
  const { latitude, longitude, accuracy } = position.coords;
  qiblaDegree = calcDegreeToQibla(latitude, longitude);
  qiblaDegreeDisplay.textContent = qiblaDegree.toFixed(2);
  accuracyInfo.textContent = `Akurasi Lokasi: ±${accuracy.toFixed(0)} meter.`;

  if (!isIOS) {
    window.addEventListener(
      "deviceorientationabsolute",
      deviceOrientationHandler,
      true
    );
    permissionStatus.textContent =
      "Geser perangkat Anda untuk melihat kompas bergerak.";
    startBtn.style.display = "none";
    sensorStatusDisplay.textContent = "Yes (Non-iOS)";
    startAnimationLoop();
  } else {
    permissionStatus.textContent =
      "Tekan 'Mulai Kompas' untuk mengizinkan akses sensor.";
    startBtn.style.display = "block";
  }
}

function locationErrorHandler(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      accuracyInfo.textContent = "Izin lokasi ditolak.";
      permissionStatus.textContent =
        "Silakan berikan izin lokasi untuk menghitung arah Kiblat.";
      break;
    case error.POSITION_UNAVAILABLE:
      accuracyInfo.textContent = "Informasi lokasi tidak tersedia.";
      permissionStatus.textContent =
        "Tidak dapat mendapatkan lokasi Anda saat ini.";
      break;
    case error.TIMEOUT:
      accuracyInfo.textContent =
        "Permintaan untuk mendapatkan lokasi habis waktu.";
      permissionStatus.textContent =
        "Coba lagi dengan koneksi internet yang lebih baik.";
      break;
    default:
      accuracyInfo.textContent =
        "Terjadi kesalahan yang tidak diketahui saat mendapatkan lokasi.";
      permissionStatus.textContent = "Kode kesalahan: " + error.code;
      break;
  }
  startBtn.style.display = "none";
}

function startCompass() {
  if (isIOS) {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === "granted") {
          window.addEventListener(
            "deviceorientation",
            deviceOrientationHandler,
            true
          );
          permissionStatus.textContent =
            "Geser perangkat Anda untuk melihat kompas bergerak.";
          startBtn.style.display = "none";
          sensorStatusDisplay.textContent = "Yes (iOS)";
          startAnimationLoop();
        } else {
          permissionStatus.textContent =
            "Izin sensor gerak ditolak. Tidak dapat menggunakan kompas.";
          sensorStatusDisplay.textContent = "No";
        }
      })
      .catch((error) => {
        permissionStatus.textContent =
          "API Device Orientation tidak didukung atau terjadi kesalahan: " +
          error;
        sensorStatusDisplay.textContent = "No";
      });
  }
}

function deviceOrientationHandler(event) {
  let alpha;
  if (typeof event.webkitCompassHeading !== "undefined") {
    alpha = event.webkitCompassHeading;
  } else if (event.alpha !== null) {
    alpha = (360 - event.alpha + 360) % 360;
  } else {
    rawCompassHeadingDisplay.textContent = "Tidak tersedia";
    compassHeadingDisplay.textContent = "Tidak tersedia";
    return;
  }

  rawCompassHeading = alpha;

  if (lastAlphaValue === null) {
    smoothedCompassHeading = alpha;
  } else {
    let delta = alpha - smoothedCompassHeading;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    smoothedCompassHeading += delta * SMOOTHING_FACTOR;
    smoothedCompassHeading = (smoothedCompassHeading + 360) % 360;
  }
  lastAlphaValue = alpha;

  currentCompassHeading = smoothedCompassHeading;
}

function startAnimationLoop() {
  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(animateCompass);
    animationStatusDisplay.textContent = "Active";
  }
}

function animateCompass() {
  rawCompassHeadingDisplay.textContent = rawCompassHeading.toFixed(2);
  compassHeadingDisplay.textContent = currentCompassHeading.toFixed(2);

  compassCircle.style.transform = `translate(-50%, -50%) rotate(${-currentCompassHeading}deg)`;

  if (qiblaDegree !== null) {
    let rotation = qiblaDegree - currentCompassHeading;

    if (rotation > 180) {
      rotation -= 360;
    } else if (rotation < -180) {
      rotation += 360;
    }

    qiblaLine.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    qiblaLine.style.opacity = 1;
  } else {
    qiblaLine.style.opacity = 0;
  }

  animationFrameId = requestAnimationFrame(animateCompass);
}

function calcDegreeToQibla(latitude, longitude) {
  const phiK = (KAABA_LAT * Math.PI) / 180.0;
  const lambdaK = (KAABA_LNG * Math.PI) / 180.0;
  const phi = (latitude * Math.PI) / 180.0;
  const lambda = (longitude * Math.PI) / 180.0;

  const psi =
    (180.0 / Math.PI) *
    Math.atan2(
      Math.sin(lambdaK - lambda),
      Math.cos(phi) * Math.tan(phiK) -
        Math.sin(phi) * Math.cos(lambdaK - lambda)
    );

  return (psi + 360) % 360;
}

function toggleDebugModal() {
  debugModalOverlay.classList.toggle("active");
}

init();
