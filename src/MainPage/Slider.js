import SliderEvent from "./SliderEvent.js";

export default function Slider({ $parent }) {
  const $sliderContainer = document.createElement("div");
  const sliderEvent = new SliderEvent();

  $sliderContainer.id = "sliderContainer";
  $sliderContainer.innerHTML = `
    <div class="hideLeft">
    센과 치히로의 행방불명
        <img src="source/chihiro.jpg">
    </div>
    <div class="prevLeftSecond">
    하울의 움직이는 성
        <img src="source/howl.jpg">
    </div>
    <div class="prev">
    원령 공주
        <img src="source/mononoke.jpg">
    </div>
    <div class="selected">
    마녀 배달부 키키
        <img src="source/majo.jpg">
    </div>
    <div class="next">
    이웃집 토토로
        <img src="source/totoro.jpg">
    </div>
    <div class="nextRightSecond">
    벼랑위에 포뇨
        <img src="source/ponyo.jpg">
    </div>
    <div class="hideRight">
    바람 계곡의 나우시카
        <img src="source/nausicaa.jpg">
    </div>
    <div class="hideRight">
    붉은 돼지
    <img src="source/porco.jpg">
</div>
<div class="hideRight">
바람 계곡의 나우시카
<img src="source/nausicaa.jpg">
</div>
    `;

  this.render = () => {
    $parent.appendChild($sliderContainer);
    $sliderContainer.classList.remove("show");
    setTimeout(() => {
      $sliderContainer.classList.add("show");
    }, 1000);
  };
}