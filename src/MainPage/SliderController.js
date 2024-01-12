import SliderEvent from "./SliderEvent.js";

export default function SliderController({ $parent }) {
  const sliderEvent = new SliderEvent
  const $sliderControllerContainer = document.createElement("div");
  const $selectedName = document.createElement("div");
  const $prevBtn = document.createElement("div");
  const $nextBtn = document.createElement("div");
  const $prevBtnimg = document.createElement("img");
  const $nextBtnimg = document.createElement("img");
  var selectedName = ''

  $prevBtnimg.src = "../../source/prevBtn.png";
  $nextBtnimg.src = "../../source/nextBtn.png";

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

  $sliderControllerContainer.classList.add('show')

  this.render = () => {
    $parent.appendChild($sliderControllerContainer);
    $nextBtn.addEventListener("click", () => {
      selectedName = sliderEvent.moveToSelected("next");
      this.selectedNameChange()
    });

    $prevBtn.addEventListener("click", () => {
      selectedName = sliderEvent.moveToSelected("prev");
      this.selectedNameChange()
    });

  }

  this.selectedNameChange = () => {
    $selectedName.innerHTML = selectedName
    $selectedName.classList.remove('show')
    setTimeout(()=> {
      $selectedName.classList.add('show')
    }, 300)
  }
}
