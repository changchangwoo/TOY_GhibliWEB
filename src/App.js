import { init } from "./Utils/router.js";
import MainPage from "./MainPage/MainPage.js";
import DetailPage from "./DetailPage/DetailPage.js";

export default function App({ $target }) {
  const mainPage = new MainPage({ $target });
  const detailPage = new DetailPage({ $target });

  this.route = async () => {
    $target.innerHTML = ``;
    const { pathname } = location;
    console.log(pathname);
    if (pathname === "/index.html") {
      mainPage.render();
    } else if (pathname.indexOf("/detail/") === 0) {
      const [, , detailMovie] = pathname.split("/");
      detailPage.render({ detailName: detailMovie });
    }
  };

  init(this.route);

  this.route();

  window.addEventListener("popstate", this.route);
}
