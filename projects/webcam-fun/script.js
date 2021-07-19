console.info('Hello, World!');

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const button = document.querySelector('.button');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => console.error(err));
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  console.log(width, height);

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 50);
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

getVideo();

button.addEventListener('click', takePhoto);
video.addEventListener('canplay', paintToCanvas);
