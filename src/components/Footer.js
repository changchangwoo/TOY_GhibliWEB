export default function Footer({ $target }) {
  const $FooterContainer = document.createElement("div");
  $FooterContainer.className = "footerContainer";
  $target.appendChild($FooterContainer);

  $FooterContainer.innerHTML = `
  github.com/changchangwoo/TOY_GhibliWEB
  `;

  this.render = () => {};
}
