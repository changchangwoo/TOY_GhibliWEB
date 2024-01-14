export function setMainAnimation() {
    const $mainLogo = document.querySelector("#mainLogo");
    const $subLogo = document.querySelector("#subLogo");
    const $sliderControllerContainer = document.querySelector(
      ".sliderControllerContainer"
    );
    const $sliderContainer = document.querySelector("#sliderContainer");
    const $gauge = document.querySelector(".selectedGauge");

    $mainLogo.classList.remove("show");
    $subLogo.classList.remove("show");
    $sliderControllerContainer.classList.remove("show");
    $sliderContainer.classList.remove("show");
    $gauge.style.width = "0%";
  }