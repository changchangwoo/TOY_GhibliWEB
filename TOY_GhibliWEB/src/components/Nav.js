import { routeChange } from "../utils/router.js";
import { setMainAnimation, setDetailAnimation } from "../utils/setAnimation.js";

export default function Nav({ $target }) {
  const $navContainer = document.createElement("div");
  $navContainer.className = "navConatiner";
  $navContainer.innerHTML = `
  <ul>
  <li> HOME</li>
  </ul>
  
  `;
  $target.appendChild($navContainer);

  const $navHome = document.querySelector("ul li");
  $navHome.addEventListener("click", () => {
    const { pathname } = location;
    if (pathname === "/TOY_GhibliWEB/index.html") {
      setMainAnimation();
    } else if (pathname.indexOf("/TOY_GhibliWEB/detail") === 0) {
      setDetailAnimation();
    }
    routeChange("/TOY_GhibliWEB/index.html");
  });

  this.render = () => {};
}
