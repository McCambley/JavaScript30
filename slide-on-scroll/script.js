const images = document.querySelectorAll(".image");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup-container");
const popupImage = document.querySelector(".popup-image");
const popupCloseButton = document.querySelector(".popup-close");

checkSlide();

function openPopup(e) {
  popupImage.src = e.target.src;
  popup.classList.add("popup-opened");
  popupContainer.classList.add("popup-container-opened");
  document.addEventListener("keydown", closeWithEscape);
  document.addEventListener("click", closeOnOverlay);
}

function closePopup() {
  popup.classList.remove("popup-opened");
  popupContainer.classList.remove("popup-container-opened");
  document.removeEventListener("keydown", closeWithEscape);
  document.removeEventListener("click", closeOnOverlay);
}

function closeWithEscape(e) {
  if (e.key === "Escape") {
    closePopup();
  }
}

function closeOnOverlay(e) {
  if (e.target.classList.contains("popup-opened")) {
    closePopup();
  }
}

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
images.forEach((image) => {
  image.addEventListener("click", openPopup);
});
popupCloseButton.addEventListener("click", closePopup);
