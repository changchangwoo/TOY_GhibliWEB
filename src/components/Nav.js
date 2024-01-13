import { routeChange } from "../utils/router.js";

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
  console.log($navHome);

  $navHome.addEventListener("click", () => {
    routeChange("/detail");
  });

  this.render = () => {
    
  }
}
