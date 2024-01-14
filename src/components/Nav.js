import { routeChange } from "../Utils/router.js";
import { setMainAnimation } from "../Utils/setAnimation.js";

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
    const { pathname } = location
    if(pathname === '/index.html') {
      setMainAnimation()
    }
    routeChange("/index.html");
  });

  this.render = () => {};
}
