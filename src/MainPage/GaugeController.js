import { routeChange } from "../Utils/router.js";
import { setMainAnimation } from "../Utils/setAnimation.js";

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
        setMainAnimation();
        let currentName = document.querySelector(".selected img");
        const pathAfterSource = currentName.src.replace(/.*\/carousel\//, "");
        const url = pathAfterSource.replace(/\.[^.]+$/, "");
        routeChange(`/detail/${url}`);
      }
      $gauge.removeEventListener("transitionend", handleTransitionEnd);
    });
  };

  this.leaveSelected = () => {
    var $gauge = document.querySelector(".selectedGauge");
    $gauge.style.width = "0%";
  };
}
