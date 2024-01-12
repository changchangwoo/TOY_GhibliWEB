import { init } from "./utils/router.js";
import MainPage from "./MainPage/MainPage.js";

export default function App($target) {
  const mainPage = new MainPage($target);
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/index.html") {
      mainPage.render();
    }
  };
  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
