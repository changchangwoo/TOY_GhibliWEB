export default function CreateLogo({ $parent }) {
  const $mainLogo = document.createElement("div");
  const $subLogo = document.createElement("div");

  $mainLogo.id = "mainLogo";
  $subLogo.id = "subLogo";

  $mainLogo.innerHTML = "STUDIO GHIBLI";
  $subLogo.innerHTML = "Quiet beauty that evokes memories";

  this.startAnimation = () => {
    $mainLogo.classList.remove("show");
    $subLogo.classList.remove("show");
    setTimeout(() => {
      $mainLogo.classList.add("show");
      setTimeout(() => {
        $subLogo.classList.add("show");
      }, 300);
    }, 300);
  };

  $parent.appendChild($mainLogo);
  $parent.appendChild($subLogo);
}
