export default function createLogo({ $parent }) {
  const $mainLogo = document.createElement("div");
  const $subLogo = document.createElement("div");

  $mainLogo.id = "mainLogo";
  $subLogo.id = "subLogo";

  $mainLogo.innerHTML = "STUDIO GHIBLI";
  $subLogo.innerHTML = "Quiet beauty that evokes memories";

  $mainLogo.classList.remove("show");

  const startAnimation = () => {
    setTimeout(() => {
      $mainLogo.classList.add("show");
      setTimeout(() => {
        $subLogo.classList.add("show");
      }, 300);
    }, 300);
  };

  $parent.appendChild($mainLogo);
  $parent.appendChild($subLogo);

  return {
    startAnimation,
  };
}
