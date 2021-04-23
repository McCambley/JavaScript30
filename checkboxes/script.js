console.info("Hello, World!");

const checkboxes = document.querySelectorAll(
  '.list .list__item input[type="checkbox"]'
);

let lastChecked;

checkboxes.forEach((check) => {
  check.addEventListener("click", handleCheck);
});

function handleCheck(e) {
  let inBetween = false; // set a flag variable
  // check if they are holding shift AND checking a box
  if (e.shiftKey && this.checked) {
    // loop over each checkbox in the list
    checkboxes.forEach((checkbox) => {
      // Check if the checkbox is this one OR the last one checked
      if (checkbox === this || checkbox === lastChecked) {
        // set the flag variable to true when the loop hits the checkbox checked
        // set if back to false when we hit the last one checked
        inBetween = !inBetween;
      }
      // while looping over the array of checkboxes, when we hit a new
      // checkbox while the flag variable is true (between the current and
      // last checked box) set the status of the box to checked
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  // next time we loop, this will be recognized as the last checked box
  lastChecked = this;
}
