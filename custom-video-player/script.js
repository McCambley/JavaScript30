console.info("Hello, World!");
// get items
const player = document.querySelector(".player");
const video = player.querySelector(".player__video");
const controls = player.querySelector(".player__controls");
const progress = player.querySelector(".player__progress");
const progressBar = player.querySelector(".player__progress-watched");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// build functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function togglePlayWithSpace(e) {
  if ((e.key = " ")) {
    togglePlay();
  }
}

function updateButton() {
  const icon = this.paused ? "▶️" : "⏸";
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(mouseDown);
  video.currentTime = scrubTime;
}

// configure event listeners
window.addEventListener("keydown", togglePlayWithSpace);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => {
  mouseDown && scrub(e);
});

let mouseDown = false;
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
