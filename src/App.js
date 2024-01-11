import { init } from "./utils/router.js";
import MainPage from "./MainPage/MainPage.js";

export default function App($target) {
  this.route = () => {
    const { pathname } = location;
    console.log(pathname);
    console.log($target);

    $target.innerHTML = "";

    if (pathname === "/index.html") {
      new MainPage($target).render();
    }
  };
  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
