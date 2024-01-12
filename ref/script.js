function moveToSelected(element) {
  var selected;
  if (element === "next") {
      selected = document.querySelector(".selected").nextElementSibling
  } else if (element === "prev") {
      selected = document.querySelector(".selected").previousElementSibling
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

  var nextSiblings = setSiblings(nextSecond.nextElementSibling)
  var prevSiblings = setSiblings(prevSecond.previousElementSibling)

  nextSiblings.forEach(sibling => {
      sibling.classList.remove();
      sibling.classList.add("hideRight")
      
  });

  prevSiblings.forEach(sibling => {
      sibling.classList.remove();
      sibling.classList.add("hideLeft")
  })
}

var setSiblings = (sibling) => {
  let siblings = []
  while(sibling) {
      if(sibling.nodeType === 1) {
          siblings.push(sibling)
      }
      sibling = sibling.nextSibling
  }
  return siblings
}
var prevButton = document.getElementById("prev");
prevButton.addEventListener("click", function() {
  moveToSelected("prev");
});

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", function() {
  moveToSelected("next");
});
