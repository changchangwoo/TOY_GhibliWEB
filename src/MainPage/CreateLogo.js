import { delay } from "../utils/delay.js";

export default function CreateLogo({ $parent }) {
  const $mainLogo = document.createElement("div");
  const $subLogo = document.createElement("div");

  $mainLogo.id = "mainLogo";
  $subLogo.id = "subLogo";

  $mainLogo.innerHTML = "STUDIO GHIBLI";
  $subLogo.innerHTML = "Quiet beauty that evokes memories";

  this.startAnimation = async () => {
    const addAndRemoveClass = async (element, className) => {
      element.classList.remove(className);
      await delay(300);
      element.classList.add(className);
    };
    await addAndRemoveClass($mainLogo, "show");
    await addAndRemoveClass($subLogo, "show");
  };

  $parent.appendChild($mainLogo);
  $parent.appendChild($subLogo);
}
