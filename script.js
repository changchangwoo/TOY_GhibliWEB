function moveToSelected(element) {
  var selected;
  if (element === "next") {
    selected = document.querySelector(".selected").nextElementSibling;
  } else if (element === "prev") {
    selected = document.querySelector(".selected").previousElementSibling;
  } else {
    selected = element;
  }

  var next = selected.nextElementSibling;
  var prev = selected.previousElementSibling;
  var prevSecond = prev.previousElementSibling;
  var nextSecond = next.nextElementSibling;

  selected.classList.remove();
  selected.classList.add("selected");

  prev.classList.remove();
  prev.classList.add("prev");
  next.classList.remove();
  next.classList.add("next");
  prevSecond.classList.remove();
  prevSecond.classList.add("prevLeftSecond");
  nextSecond.classList.remove();
  nextSecond.classList.add("nextRightSecond");

  var nextSiblings = [nextSecond.nextElementSibling];
  console.log(nextSiblings);
  nextSiblings.forEach(function (sibling) {
    console.log(sibling);
    sibling.classList.remove();
    sibling.classList.add("hideRight");
  });

  var prevSiblings = [prevSecond.previousElementSibling];
  prevSiblings.forEach(function (sibling) {
    sibling.classList.remove();
    sibling.classList.add("hideLeft");
  });
}

var carouselDivs = document.querySelectorAll("#sliderContainer div");
carouselDivs.forEach((div) => {
  div.addEventListener("click", function () {
    moveToSelected(this);
  });
});

var prevButton = document.querySelector("#prevBtn");
prevButton.addEventListener("click", () => {
  $selected = document.querySelector(".selected");
  console.log($selected);
  moveToSelected("prev");
});

var nextButton = document.querySelector("#nextBtn");
nextButton.addEventListener("click", () => {
  moveToSelected("next");
});
