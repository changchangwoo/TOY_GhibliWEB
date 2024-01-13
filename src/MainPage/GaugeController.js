import { routeChange } from "../utils/router.js";

export default function GaugeController({ $parent }) {
  const $selectedGauge = document.createElement("div");
  const $selectedGaugeContainer = document.createElement("div");

  $selectedGaugeContainer.className = "selectedGaugeContainer";
  $selectedGauge.className = "selectedGauge";

  this.render = () => {
    $selectedGaugeContainer.appendChild($selectedGauge);
    $parent.appendChild($selectedGaugeContainer);
  };

  this.enterSelected = () => {
    var $gauge = document.querySelector(".selectedGauge");
    $gauge.style.width = "100%";
    $gauge.addEventListener("transitionend", function handleTransitionEnd() {
      if ($gauge.style.width === "100%") {
        let currentName = document.querySelector(".selected img");
        const pathAfterSource = currentName.src.replace(/.*\/source\//, "");
        const url = pathAfterSource.replace(/\.[^.]+$/, "");
        setMainAnimation();
        routeChange(`/detail/${url}`);
      }
      $gauge.removeEventListener("transitionend", handleTransitionEnd);
    });
  };

  this.leaveSelected = () => {
    var $gauge = document.querySelector(".selectedGauge");
    $gauge.style.width = "0%";
  };

  function setMainAnimation() {
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
}
