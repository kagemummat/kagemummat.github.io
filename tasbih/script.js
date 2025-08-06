document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const counterDisplay = document.querySelector(".counter-display");
  const arabicTextDisplay = document.querySelector(".arabic-text");
  const latinTextDisplay = document.querySelector(".latin-text");
  const translationTextDisplay = document.querySelector(".translation-text");
  const plusButton = document.querySelector(".plus-button");

  const reduceButton = document.getElementById("reduceButton");
  const resetButton = document.getElementById("resetButton");
  const volumeButton = document.getElementById("volumeButton");
  const missionButton = document.getElementById("missionButton");

  const clickSound = document.getElementById("clickSound");
  const completionSound = document.getElementById("completionSound");

  const missionOverlay = document.querySelector(".mission-overlay");
  const closeMissionModal = document.querySelector(".close-mission-modal");
  const customTargetInput = document.getElementById("customTarget");
  const missionOptions = document.querySelector(".mission-options");
  const completionAnimation = document.querySelector(".completion-animation");

  const missionStartNotification = document.getElementById(
    "mission-start-notification"
  );
  const notificationTitle = missionStartNotification.querySelector(
    ".notification-title"
  );
  const notificationMessage = missionStartNotification.querySelector(
    ".notification-message"
  );
  const notificationCloseButton = missionStartNotification.querySelector(
    ".notification-close-button"
  );

  let count = 0;

  let isSoundOn = JSON.parse(localStorage.getItem("isSoundOn")) !== false;
  let currentMission = null;
  let notificationTimeout;

  const updateDisplay = () => {
    counterDisplay.textContent = count;
    if (currentMission && count >= currentMission.target) {
      triggerCompletion();
    }
  };

  const showDzikirText = (arabic, latin, translation) => {
    arabicTextDisplay.textContent = arabic;
    latinTextDisplay.textContent = latin;
    translationTextDisplay.textContent = translation;

    arabicTextDisplay.classList.add("show");
    latinTextDisplay.classList.add("show");
    translationTextDisplay.classList.add("show");
  };

  const hideDzikirText = () => {
    arabicTextDisplay.textContent = "";
    latinTextDisplay.textContent = "";
    translationTextDisplay.textContent = "";

    arabicTextDisplay.classList.remove("show");
    latinTextDisplay.classList.remove("show");
    translationTextDisplay.classList.remove("show");
  };

  const showMissionStartNotification = (title, message) => {
    notificationTitle.textContent = title;
    notificationMessage.textContent = message;
    missionStartNotification.classList.add("show");

    clearTimeout(notificationTimeout);

    notificationTimeout = setTimeout(() => {
      missionStartNotification.classList.remove("show");
    }, 5000);
  };

  const hideMissionStartNotification = () => {
    missionStartNotification.classList.remove("show");
    clearTimeout(notificationTimeout);
  };

  const startMission = (
    dzikirType,
    arabicText,
    latinText,
    translationText,
    target
  ) => {
    currentMission = {
      dzikir: dzikirType,
      arabic: arabicText,
      latin: latinText,
      translation: translationText,
      target: target,
    };
    count = 0;
    updateDisplay();
    showDzikirText(arabicText, latinText, translationText);
    missionOverlay.classList.remove("show");

    showMissionStartNotification(
      `Misi "${dzikirType}" Dimulai!`,
      `Target: ${target} kali.\nBacaan: ${latinText}`
    );
  };

  const triggerCompletion = () => {
    if (isSoundOn && completionSound) {
      completionSound.play();
    }
    completionAnimation.classList.add("show");
    currentMission = null;
    hideDzikirText();

    setTimeout(() => {
      completionAnimation.classList.remove("show");
    }, 5000);
  };

  const updateVolumeButton = () => {
    if (isSoundOn) {
      volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
      volumeButton.classList.remove("volume-off");
      volumeButton.classList.add("volume-on");
      if (clickSound) clickSound.muted = false;
      if (completionSound) completionSound.muted = false;
    } else {
      volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
      volumeButton.classList.remove("volume-on");
      volumeButton.classList.add("volume-off");
      if (clickSound) clickSound.muted = true;
      if (completionSound) completionSound.muted = true;
    }

    localStorage.setItem("isSoundOn", isSoundOn);
  };

  counterDisplay.textContent = count;

  updateVolumeButton();

  plusButton.addEventListener("click", () => {
    count++;
    updateDisplay();
    if (isSoundOn) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  });

  if (reduceButton) {
    reduceButton.addEventListener("click", () => {
      if (count > 0) {
        count--;
        updateDisplay();
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      count = 0;
      updateDisplay();
      hideDzikirText();
      currentMission = null;
      hideMissionStartNotification();
    });
  }

  if (volumeButton) {
    volumeButton.addEventListener("click", () => {
      isSoundOn = !isSoundOn;
      updateVolumeButton();
    });
  }

  if (missionButton) {
    missionButton.addEventListener("click", () => {
      missionOverlay.classList.add("show");
    });
  }

  closeMissionModal.addEventListener("click", () => {
    missionOverlay.classList.remove("show");
  });

  notificationCloseButton.addEventListener(
    "click",
    hideMissionStartNotification
  );

  missionOptions.addEventListener("click", (e) => {
    const targetButton = e.target.closest("button");
    if (targetButton && targetButton.dataset.dzikir) {
      const dzikirType = targetButton.dataset.dzikir;
      const arabicText = targetButton.dataset.arabic;
      const latinText = targetButton.dataset.latin;
      const translationText = targetButton.dataset.translation;
      const targetCount = parseInt(customTargetInput.value, 10);

      if (isNaN(targetCount) || targetCount <= 0) {
        alert("Target dzikir harus angka positif!");
        return;
      }
      startMission(
        dzikirType,
        arabicText,
        latinText,
        translationText,
        targetCount
      );
    }
  });

  plusButton.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
});
