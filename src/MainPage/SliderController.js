export default function SliderController({ $parent }) {
  const $sliderControllerContainer = document.createElement("div");
  const $selectedName = document.createElement("div");
  const $prevBtn = document.createElement("div");
  const $nextBtn = document.createElement("div");
  const $prevBtnimg = document.createElement("img");
  const $nextBtnimg = document.createElement("img");

  $prevBtnimg.src = "../../source/prevBtn.png";
  $nextBtnimg.src = "../../source/nextBtn.png";

  $sliderControllerContainer.className = "sliderControllerContainer";
  $selectedName.className = "selectedName";
  $prevBtn.className = "prevBtn";
  $nextBtn.className = "nextBtn";

  $prevBtn.appendChild($prevBtnimg);
  $nextBtn.appendChild($nextBtnimg);
  $selectedName.innerHTML = "센과 치히로의 행방 불명";

  $sliderControllerContainer.appendChild($prevBtn);
  $sliderControllerContainer.appendChild($selectedName);
  $sliderControllerContainer.appendChild($nextBtn);

  $parent.appendChild($sliderControllerContainer);

  $nextBtn.addEventListener("click", () => {
    console.log("우");
  });

  $prevBtn.addEventListener("click", () => {
    console.log("좌");
  });
}
