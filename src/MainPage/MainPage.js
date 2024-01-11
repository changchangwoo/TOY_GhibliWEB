import createLogo from "./CreateLogo.js";
import SliderController from "./SliderController.js";

export default function MainPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "mainPage";

  const logo = createLogo({ $parent: $page });
  const sliderController = SliderController({ $parent: $page });

  this.render = () => {
    $target.appendChild($page);
    document.addEventListener("DOMContentLoaded", logo.startAnimation);
  };
}
