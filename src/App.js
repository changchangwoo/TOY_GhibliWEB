import { init } from "./utils/router.js";
import MainPage from "./MainPage/MainPage.js";
import DetailPage from './DetailPage/DetailPage.js'

export default function App($target) {
  const mainPage = new MainPage($target);
  const detailPage = new DetailPage($target);
  this.route = () => {
    console.log($target)
    const { pathname } = location;
    if (pathname === "/index.html") {
      mainPage.render();
    } else if (pathname === "/detail") {
      console.log('동작은함')
      detailPage.render();
    }

  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
