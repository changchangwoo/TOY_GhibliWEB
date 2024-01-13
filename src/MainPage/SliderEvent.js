import GaugeController from "./GaugeController.js";

export default function SliderEvent() {
  const gaugeController = new GaugeController({ $parent : 'temp'})

    this.moveToSelected = (element) => {
      console.log(gaugeController)
      const divElements = document.querySelectorAll('#sliderContainer.show div');
      var selected;
    if (element === "next") {
      selected = document.querySelector(".selected").nextElementSibling;
    } else if (element === "prev") {
      selected = document.querySelector(".selected").previousElementSibling;
    } else {
      selected = element;
    }
    if (selected) {
      var next = selected.nextElementSibling;
      var prev = selected.previousElementSibling;
      var prevSecond = prev ? prev.previousElementSibling : null;
      var nextSecond = next ? next.nextElementSibling : null;
    } else {
      console.log("선택된 DOM의 Sibling이 없습니다.");
    }

    selected.classList = [];
    selected.classList.add("selected");

    divElements.forEach(element => {
      element.removeEventListener("mouseenter", gaugeController.enterSelected)
      element.removeEventListener("mouseenter", gaugeController.leaveSelected)
    });

    console.log(divElements)

    selected.addEventListener("mouseenter", gaugeController.enterSelected)
    selected.addEventListener("mouseleave", gaugeController.leaveSelected)

    if (prev) {
      prev.classList = [];
      prev.classList.add("prev");
    }
    if (next) {
      next.classList = [];
      next.classList.add("next");
    }

    if (prevSecond) {
      prevSecond.classList = [];
      prevSecond.classList.add("prevLeftSecond");

      if (element === "next") {
        var prevSiblings = this.prevSiblings(prevSecond);
        prevSiblings.forEach((sibling) => {
          sibling.classList = [];
          sibling.classList.add("hideLeft");
        });
      }
    }

    if (nextSecond) {
      nextSecond.classList = [];
      nextSecond.classList.add("nextRightSecond");

      if (element === "prev") {
        var nextSiblings = this.nextSiblings(nextSecond);
        nextSiblings.forEach((sibling) => {
          sibling.classList = [];
          sibling.classList.add("hideRight");
        });
      }
    }

    var selected_title = selected.textContent;
    return selected_title.trim();
  };

  this.nextSiblings = (sibling) => {
    let nextSibling = sibling.nextElementSibling;
    let siblings = [];
    while (nextSibling) {
      siblings.push(nextSibling);
      nextSibling = nextSibling.nextElementSibling;
    }
    return siblings;
  };

  this.prevSiblings = (sibling) => {
    let prevSibling = sibling.previousElementSibling;
    let siblings = [];
    while (prevSibling) {
      siblings.push(prevSibling);
      prevSibling = prevSibling.previousElementSibling;
    }
    return siblings;
  };

}
