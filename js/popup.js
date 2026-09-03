(function () {
  const popupOverlay = document.getElementById("popupOverlay");
  const popupClose = document.getElementById("popupClose");
  const popupForm = document.getElementById("popupForm");

  function openPopup(interestValue) {
    if (interestValue) {
      const interestSelect = document.getElementById("popupInterest");
      if (interestSelect) {
        interestSelect.value = interestValue;
      }
    }
    if (popupOverlay) {
      popupOverlay.classList.add("active");
    }
    return false;
  }

  function hidePopup() {
    if (popupOverlay) {
      popupOverlay.classList.remove("active");
    }
  }

  window.openPopup = openPopup;
  window.hidePopup = hidePopup;

  if (popupClose) {
    popupClose.addEventListener("click", hidePopup);
  }

  if (popupOverlay) {
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) hidePopup();
    });
  }

  if (popupForm) {
    popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      hidePopup();
      popupForm.reset();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popupOverlay && popupOverlay.classList.contains("active")) {
      hidePopup();
    }
  });
})();
