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
const fullscreen = player.querySelector(".fullscreen");

// build functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function togglePlayWithKeys(e) {
  if (e.key === " ") {
    togglePlay();
  } else if (e.key === "ArrowRight") {
    video.currentTime += 5;
  } else if (e.key === "ArrowLeft") {
    video.currentTime += -3;
  } else if (e.key === "ArrowUp") {
    console.log("Volume Up");
  } else if (e.key === "ArrowDown") {
    console.log("Volume Down");
  }
}

function updateButton() {
  const icon = this.paused ? "▶️" : "⏸";
  toggle.textContent = icon;
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
  video.currentTime = scrubTime;
}

function enterFullScreen() {
  let fullscreenStatus = false;
  if (fullscreen.classList.contains("fullscreen_fullscreen")) {
    fullscreenStatus = true;
  }
  if (!fullscreenStatus) {
    player.classList.add("player_fullscreen");
    video.classList.add("player__video_fullscreen");
    fullscreen.classList.add("fullscreen_fullscreen");
  } else {
    player.classList.remove("player_fullscreen");
    video.classList.remove("player__video_fullscreen");
    fullscreen.classList.remove("fullscreen_fullscreen");
  }
}

// configure event listeners
window.addEventListener("keydown", togglePlayWithKeys);
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

fullscreen.addEventListener("click", enterFullScreen);
