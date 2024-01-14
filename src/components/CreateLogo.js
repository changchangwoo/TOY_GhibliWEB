import { delay } from "../Utils/delay.js";

export default function CreateLogo({ $parent}) {
  const $mainLogo = document.createElement("div");
  const $subLogo = document.createElement("div");

  $mainLogo.id = "mainLogo";
  $subLogo.id = "subLogo";

  $parent.appendChild($mainLogo);
  $parent.appendChild($subLogo);

  this.startAnimation = async ({mainText, subText}) => {
    $mainLogo.innerHTML = mainText
    $subLogo.innerHTML = subText

    const addAndRemoveClass = async (element, className) => {
      element.classList.remove(className);
      await delay(300);
      element.classList.add(className);
    };
    await addAndRemoveClass($mainLogo, "show");
    await addAndRemoveClass($subLogo, "show");
  };


}
