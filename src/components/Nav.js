export default function Nav({ $target }) {
  const $navContainer = document.createElement("div");
  $navContainer.className = "navConatiner";

  $target.appendChild($navContainer);

  $navContainer.innerHTML = `
  <ul>
  <li> HOME</li>
  <li> CONTENT1</li>
  <li> CONTENT2</li>
  <li> CONTENT3</li>
  </ul>
  
  `;

  console.log($navContainer);
  this.render = () => {};
  this.render();
}
