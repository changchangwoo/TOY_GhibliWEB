export function setMainAnimation() {
    const $mainLogo = document.querySelector("#mainLogo");
    const $subLogo = document.querySelector("#subLogo");
    const $sliderControllerContainer = document.querySelector(
      ".sliderControllerContainer"
    );
    const $sliderContainer = document.querySelector("#sliderContainer");
    const $gauge = document.querySelector(".selectedGauge");

    $mainLogo.classList.remove("show");
    $subLogo.classList.remove("show");
    $sliderControllerContainer.classList.remove("show");
    $sliderContainer.classList.remove("show");
    $gauge.style.width = "0%";
  }

  export function setDetailAnimation() {
    const $mainLogo = document.querySelector("#mainLogo");
    const $subLogo = document.querySelector("#subLogo");
    const $detailDescriptionContainer = document.querySelector("#detailDescriptionContainer")
    const $detailPage = document.querySelector(".detailPage")
    $detailPage.style.backgroundImage = 'none'; // 배경 이미지를 없음으로 설정
    $detailPage.classList.remove('show')
    $mainLogo.classList.remove("show");
    $subLogo.classList.remove("show");
    $detailDescriptionContainer.classList.remove("show")
  }