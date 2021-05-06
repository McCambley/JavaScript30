console.info("Hello, World!");
// get items
const player = document.querySelector(".player");
const video = player.querySelector(".player__video");
const controls = player.querySelector(".player__controls");
const progress = player.querySelector(".player__progress");
const progressBar = player.querySelector(".player__progress-watched");
const ghostProgressBar = player.querySelector(".player__progress-scroll");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const volumeRange = player.querySelector("#volume-range");
const playbackRange = player.querySelector("#playback-range");
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
    if (video.volume >= 0.95) {
      video.volume = 1;
    } else {
      video.volume += 0.1;
    }
    volumeRange.value = video.volume;
  } else if (e.key === "ArrowDown") {
    if (video.volume <= 0.05) {
      video.volume = 0;
    } else {
      video.volume += -0.1;
    }
    volumeRange.value = video.volume;
  } else if (e.key === "f") {
    if (video.playbackRate >= 1.95) {
      video.playbackRate = 2;
    } else {
      video.playbackRate += 0.1;
    }
    playbackRange.value = video.playbackRate;
  } else if (e.key === "s") {
    if (video.playbackRate <= 0.55) {
      video.playbackRate = 0.5;
    } else {
      video.playbackRate += -0.1;
    }
    playbackRange.value = video.playbackRate;
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
  const scrubTime = (e.layerX / progress.offsetWidth) * video.duration;
  ghostProgressBar.style.flexBasis = 0;
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

function showGhost(e) {
  ghostProgressBar.style.width = `${e.layerX}px`;
}

function hideGhost(e) {
  ghostProgressBar.style.width = 0;
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

// scrub planing function
// progress.addEventListener("mousemove", planScrub);
progress.addEventListener("mousemove", showGhost);
progress.addEventListener("mouseleave", hideGhost);
