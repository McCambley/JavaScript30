let countdown;
const content = document.querySelector('.content');
const timerDisplay = document.querySelector('.content__countdown');
const options = document.querySelector('.content__options');
const stop = document.querySelector('.content__reset');
const endTime = document.querySelector('.content__termination');
const buttons = document.querySelectorAll('.content__button');
const resetButton = document.querySelector('.content__reset-button');
const sound = document.getElementById('sound');

function timer(seconds) {
  clearInterval(countdown);
  stop.classList.remove('hide');
  options.classList.add('hide');
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    displayTimeLeft(secondsLeft);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      content.classList.add('content_complete');
      timerDisplay.style.marginBottom = '12px';
      timerDisplay.textContent = '🎉';
      endTime.textContent = 'Done!';
      document.title = 'Done!';
      sound.play();
    }
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

function resetTimer() {
  clearInterval(countdown);
  stop.classList.add('hide');
  options.classList.remove('hide');
  content.classList.remove('content_complete');
  timerDisplay.textContent = '00:00';
  endTime.textContent = 'Select time...';
}

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    timer(this.dataset.time);
  });
});

resetButton.addEventListener('click', resetTimer);

document.countdown.addEventListener('submit', function (evt) {
  evt.preventDefault();
  timer(this.minutes.value * 60);
  this.reset();
});
