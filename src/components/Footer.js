export default function Footer({ $target }) {
  const $FooterContainer = document.createElement("div");
  $FooterContainer.className = "footerContainer";
  $FooterContainer.innerHTML = `
  github.com/changchangwoo/TOY_GhibliWEB
  `;
  $target.appendChild($FooterContainer);


  this.render = () => {
  };
}
