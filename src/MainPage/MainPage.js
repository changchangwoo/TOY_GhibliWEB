import CreateLogo from "../Components/CreateLogo.js";
import Slider from "./Slider.js";
import SliderController from "./SliderController.js";
import GaugeController from "./GaugeController.js";
import { delay } from "../Utils/delay.js";

export default function MainPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "mainPage";

  let LogoText = 'STUDIO GHIBLI'
  let subLogoText = "Quiet beauty that evokes memories"; 
  
  const createLogo = new CreateLogo({ $parent: $page});
  const sliderController = new SliderController({ $parent: $page });
  const gaugeController = new GaugeController({ $parent: $page });
  const slider = new Slider({ $parent: $page });

  this.render = async () => {
    $target.appendChild($page);
    await createLogo.startAnimation({ mainText : LogoText, subText : subLogoText});
    await delay(300);
    await sliderController.render();
    gaugeController.render();
    slider.render();
  };
}
