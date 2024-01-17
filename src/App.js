import { init } from "./utils/router.js";
import MainPage from "./MainPage/MainPage.js";
import DetailPage from "./DetailPage/DetailPage.js";

export default function App({ $target }) {
  const mainPage = new MainPage({ $target });
  const detailPage = new DetailPage({ $target });

  this.route = async () => {
    $target.innerHTML = ``;
    const { pathname } = location;
    if (pathname === "/TOY_GhibliWEB/index.html" || pathname === "/TOY_GhibliWEB/") {
      mainPage.render();
    } else if (pathname.indexOf("/TOY_GhibliWEB/detail/") === 0) {
      const [, , , detailMovie] = pathname.split("/");
      console.log(detailMovie);
      detailPage.render({ detailName: detailMovie });
    }
  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
