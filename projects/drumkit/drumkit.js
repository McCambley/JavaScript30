const keys = document.querySelectorAll(".key");

keys.forEach( key => key.addEventListener('transitionend', stopPlaying));

function stopPlaying(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
  console.log("playing");
}

function touchPlay(e) {
  let touchID = e.target.attributes["data-key"].value;
  const audio = document.querySelector(`audio[data-key="${touchID}"`);
  const key = document.querySelector(`.key[data-key="${touchID}"`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

window.addEventListener('keydown', playSound)
window.addEventListener('touchstart', touchPlay)
