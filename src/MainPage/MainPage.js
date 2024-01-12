import CreateLogo from "./CreateLogo.js";
import Slider from "./Slider.js";
import SliderController from "./SliderController.js";

export default function MainPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "mainPage";
  $target.appendChild($page);

  const createLogo = new CreateLogo({ $parent: $page });
  const sliderController = new SliderController({ $parent: $page });
  const slider = new Slider({ $parent: $page });

  this.render = () => {
    console.log("렌더링중");
    createLogo.startAnimation();
    setTimeout(() => {
      sliderController.render();
    }, 500);
    setTimeout(() => {
      slider.render();
    }, 500);
  };
}
