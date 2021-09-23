console.info('Hello, World!');

const speed = document.querySelector('.content__slider');
const bar = document.querySelector('.content__slider-bar');
const video = document.querySelector('.content__video');

speed.addEventListener('mousemove', function (e) {
  // const bodyRect = document.body.getBoundingClientRect();
  // const speedRect = this.getBoundingClientRect();
  // const speedOffset = speedRect.top - bodyRect.top;
  const top = Math.round(this.getBoundingClientRect().top);
  let y = e.clientY - top;
  const percent = Math.round((Math.abs(y - this.offsetHeight) / this.offsetHeight) * 100);
  const min = 0.25;
  const max = 3.5;
  const height = percent + '%';
  const playbackRate = (percent / 100) * (max - min) + min;
  bar.textContent = playbackRate.toFixed(1);
  video.playbackRate = playbackRate;
  bar.style.height = height;
  bar.style.minHeight = '15%';
});
