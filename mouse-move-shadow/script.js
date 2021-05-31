const page = document.querySelector(".page");
const container = document.querySelector(".container");
const text = container.querySelector(".text");
const walk = 100; // 100px

function shadow(evt) {
  // console.log(evt);
  const width = page.offsetWidth;
  const height = page.offsetHeight;
  // const { offsetWidth: width, offsetHeight: height } = container;
  let x = evt.offsetX;
  let y = evt.offsetY;

  if (this !== evt.target) {
    x = x + text.offsetLeft;
    y = y + text.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(0, 255, 255, 0.3),
  ${xWalk * -1}px ${yWalk}px 0 rgba(255, 0, 255, 0.3),
  ${xWalk}px ${yWalk * -1}px 0 rgba(255, 255, 0, 0.3),
  ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 255, 0, 0.3)
  `;
}

page.addEventListener("mousemove", shadow);
