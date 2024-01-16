import { delay } from "../Utils/delay.js";
import ImageController from "./ImageController.js";

export default function DetailDescription({ $parent }) {
  const $detailDescriptionContainer = document.createElement("div");
  const $descriptionBox = document.createElement("div");
  const $prevBtn = document.createElement("div");
  const $nextBtn = document.createElement("div");

  const $prevBtnimg = document.createElement("img");
  const $nextBtnimg = document.createElement("img");

  $prevBtn.className = "prevBtn";
  $nextBtn.className = "nextBtn";
  $descriptionBox.id = "descriptionBox";
  $detailDescriptionContainer.id = "detailDescriptionContainer";
  $prevBtnimg.src = "../../img/prevBtn.png";
  $nextBtnimg.src = "../../img/nextBtn.png";

  $prevBtn.appendChild($prevBtnimg);
  $nextBtn.appendChild($nextBtnimg);

  $detailDescriptionContainer.appendChild($prevBtn);
  $detailDescriptionContainer.appendChild($descriptionBox);
  $detailDescriptionContainer.appendChild($nextBtn);

  let isPrevBtnListenerAdded = false;
  let isNextBtnListenerAdded = false;
  let isClickable = true;

  this.render = async ({ imgs, description }) => {
    let $mainLogo = document.querySelector("#mainLogo");
    let $subLogo = document.querySelector("#subLogo");
    $descriptionBox.innerHTML = description;
    $mainLogo.style.width = "70%";
    $mainLogo.style.textAlign = "right";
    $subLogo.style.width = "70%";
    $subLogo.style.textAlign = "right";

    $detailDescriptionContainer.classList.remove("show");
    $parent.appendChild($detailDescriptionContainer);
    await delay(500);
    $detailDescriptionContainer.classList.add("show");

    if (!isNextBtnListenerAdded) {
      $nextBtn.addEventListener("click", async () => {
        if (!isClickable) return;
        isClickable = false;
        await delay(200);
        ImageController("next", imgs, $parent);
        await delay(500);
        isClickable = true;
      });
      isNextBtnListenerAdded = true;
    }

    if (!isPrevBtnListenerAdded) {
      $prevBtn.addEventListener("click", async () => {
        if (!isClickable) return;
        isClickable = false;
        await delay(200);
        ImageController("prev", imgs, $parent);
        await delay(500);
        isClickable = true;
      });
      isPrevBtnListenerAdded = true;
    }
  };
}
