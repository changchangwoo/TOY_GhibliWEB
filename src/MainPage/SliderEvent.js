export default function SliderEvent() {
  this.moveToSelected = (element) => {
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
      // 예외 처리: 선택된 DOM의 Sibling이 없는 경우
      console.log("선택된 DOM의 Sibling이 없습니다.");
      // 또는 원하는 예외 처리를 수행하세요.
    }

    selected.classList = [];
    selected.classList.add("selected");

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
