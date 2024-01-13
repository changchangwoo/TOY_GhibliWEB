import CreateLogo from "./CreateLogo.js";
import Slider from "./Slider.js";
import SliderController from "./SliderController.js";
import GaugeController from "./GaugeController.js";
import { delay } from "../utils/delay.js";

export default function MainPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "mainPage";

  const createLogo = new CreateLogo({ $parent: $page });
  const sliderController = new SliderController({ $parent: $page });
  const gaugeController = new GaugeController({ $parent: $page });
  const slider = new Slider({ $parent: $page });

  this.render = async () => {
    $target.appendChild($page);
    await createLogo.startAnimation();
    await delay(300);
    await sliderController.render();
    gaugeController.render();
    slider.render();
  };
}
