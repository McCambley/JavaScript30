const images = document.querySelectorAll(".image");

checkSlide();

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  images.forEach((image) => {
    // halfway through the image
    const showAt = window.scrollY + window.innerHeight - image.height / 2;
    // bottom of the image
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = showAt > image.offsetTop;
    const isNotPassed = window.scrollY < imageBottom;
    if (isHalfShown && isNotPassed) {
      image.classList.add("image-visible");
    } else {
      image.classList.remove("image-visible");
    }
  });
}
// window.addEventListener("scroll", debounce(checkSlide));
window.addEventListener("scroll", checkSlide);
