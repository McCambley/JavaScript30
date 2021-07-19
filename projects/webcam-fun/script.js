console.info('Hello, World!');

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const button = document.querySelector('.button');
const select = document.querySelector('.select');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => console.error(err));
}

function selectFilter(inputValue, pixels) {
  if (inputValue === 'rgb') {
    ctx.globalAlpha = 1;
    return rbgSplit(pixels);
  } else if (inputValue === 'green') {
    ctx.globalAlpha = 1;
    return greenScreen(pixels);
  } else if (inputValue === 'red') {
    ctx.globalAlpha = 1;
    return redEffect(pixels);
  } else if (inputValue === 'ghost') {
    ctx.globalAlpha = 0.05;
    return pixels;
  } else {
    ctx.globalAlpha = 1;
    return pixels;
  }
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  console.log(width, height);

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    // take pixels out
    let pixels = ctx.getImageData(0, 0, width, height);

    // mess with them
    pixels = selectFilter(select.value, pixels);

    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 10);
}

function takePhoto() {
  // play snap sound
  snap.currentTime = 0;
  snap.play();
  console.log('Say Cheese!');

  // take the data from the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  strip.innerHTML = '';
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.textContent = 'Download Image';
  link.classList.add('link');
  strip.insertBefore(link, strip.firstChild);
  // console.log(data);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // Red
    pixels.data[i + 1] = pixels.data[i + 1] - 20; // Green
    pixels.data[i + 2] = pixels.data[i + 2] - 20; // Blue
  }
  return pixels;
}

function rbgSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // Red
    pixels.data[i - 500] = pixels.data[i + 1]; // Green
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('input').forEach(input => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];
    // console.log(red, green, blue, alpha);

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

button.addEventListener('click', takePhoto);
video.addEventListener('canplay', paintToCanvas);
