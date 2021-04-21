const canvas = document.querySelector(".canvas");

const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 90;
let direction = true;

ctx.strokeStyle = "#FFF";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
ctx.lineWidth = 0;
ctx.globalCompositeOperation = "xor";

function draw(e) {
  if (!isDrawing) return; // Don't do anything when the mouse is up
  console.log(e);
  ctx.strokeStyle = `hsla(${hue}, 100%, 50%, .15)`;
  ctx.beginPath();
  // start here!
  ctx.moveTo(lastX, lastY);
  // end here!
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++;

  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
