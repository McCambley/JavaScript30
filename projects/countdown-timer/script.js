let countdown;
const timerDisplay = document.querySelector('.content__countdown');
const endTime = document.querySelector('.content__termination');
const buttons = document.querySelectorAll('.content__button');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  let overflowSeconds = seconds % 60;
  const adjustedSeconds = overflowSeconds < 10 ? `0${overflowSeconds}` : overflowSeconds;
  const display = `${minutes}:${adjustedSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const adjustedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  endTime.textContent = `Timer done at ${adjustedHour}:${adjustedMinutes}`;
}

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    timer(this.dataset.time);
  });
});

document.countdown.addEventListener('submit', function (evt) {
  evt.preventDefault();
  timer(this.minutes.value * 60);
  this.reset();
});
