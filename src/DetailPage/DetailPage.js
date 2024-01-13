import { routeChange } from "../utils/router.js";

export default function DetailPage({ $target }) {
  const $temp = document.createElement("div");
  $temp.innerHTML = `<h1>임시</h1>`;
  const $btn = document.createElement("button");
  $btn.addEventListener("click", () => {
    routeChange("/index.html");
  });
  this.render = () => {
    $target.appendChild($temp);
  };
}
