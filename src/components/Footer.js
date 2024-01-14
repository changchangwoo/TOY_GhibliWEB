export default function Footer({ $target }) {
  const $FooterContainer = document.createElement("div");
  $FooterContainer.className = "footerContainer";
  $FooterContainer.innerHTML = `
  <a href='https://github.com/changchangwoo/TOY_GhibliWEB'>github.com/changchangwoo/TOY_GhibliWEB</a>
  `;
  $target.appendChild($FooterContainer);


  this.render = () => {
  };
}
