import CreateLogo from "./CreateLogo.js";
import Slider from "./Slider.js";
import SliderController from "./SliderController.js";
import GaugeController from "./GaugeController.js";

export default function MainPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "mainPage";
  $target.appendChild($page);

  const createLogo = new CreateLogo({ $parent: $page });
  const sliderController = new SliderController({ $parent: $page });
  const gaugeController = new GaugeController({ $parent: $page})
  const slider = new Slider({ $parent: $page });

  this.render = () => {
    createLogo.startAnimation();
    setTimeout(() => {
      sliderController.render();
      gaugeController.render();
    }, 500);
    setTimeout(() => {
      slider.render();
    }, 500);
  };
}
