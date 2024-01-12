import CreateLogo from "./CreateLogo.js";
import Slider from "./Slider.js";
import SliderController from "./SliderController.js";

export default function MainPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "mainPage";

  const createLogo = new CreateLogo({ $parent: $page });
  const sliderController = new SliderController({ $parent: $page });
  const slider = new Slider({ $parent : $page});

  this.render = () => {
    $target.appendChild($page);
    document.addEventListener("DOMContentLoaded", createLogo.startAnimation);
    setTimeout(()=>{
      sliderController.render()
      setTimeout(()=> {
        slider.render()
      }, 700)
    },500)
  };
}
