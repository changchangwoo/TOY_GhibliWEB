import { delay } from "../utils/delay.js";
import SliderEvent from "./SliderEvent.js";

export default function SliderController({ $parent }) {
  const sliderEvent = new SliderEvent();
  const $sliderControllerContainer = document.createElement("div");
  const $selectedName = document.createElement("div");
  const $prevBtn = document.createElement("div");
  const $nextBtn = document.createElement("div");
  const $prevBtnimg = document.createElement("img");
  const $nextBtnimg = document.createElement("img");
  var selectedName = "";

  $prevBtnimg.src = "../../img/prevBtn.png";
  $nextBtnimg.src = "../../img/nextBtn.png";

  $sliderControllerContainer.className = "sliderControllerContainer";
  $selectedName.className = "selectedName";

  $prevBtn.className = "prevBtn";
  $nextBtn.className = "nextBtn";

  $prevBtn.appendChild($prevBtnimg);
  $nextBtn.appendChild($nextBtnimg);
  $selectedName.innerHTML = "마녀 배달부 키키";

  $sliderControllerContainer.appendChild($prevBtn);
  $sliderControllerContainer.appendChild($selectedName);
  $sliderControllerContainer.appendChild($nextBtn);

  $nextBtn.addEventListener("click", () => {
    selectedName = sliderEvent.moveToSelected("next");
    this.selectedNameChange();
  });

  $prevBtn.addEventListener("click", () => {
    selectedName = sliderEvent.moveToSelected("prev");
    this.selectedNameChange();
  });

  this.render = async () => {
    $parent.appendChild($sliderControllerContainer);
    $sliderControllerContainer.classList.remove("show");
    await delay(300);
    $sliderControllerContainer.classList.add("show");
  };

  this.selectedNameChange = () => {
    $selectedName.innerHTML = selectedName;
  };
}
