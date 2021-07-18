console.log("Hello!")

let panel = document.querySelectorAll(".panel");
let open = document.querySelector(".open");
let close = document.querySelector(".close");

console.log(close)


function openUp() {
  if (!this.classList.contains('open')) {
    open.currentTime = 0;
    open.play();
  } else {
    close.currentTime = 0;
    close.play();
  }
  this.classList.toggle('open');
}

function emojiDrop(e) {
  if (e.propertyName.includes('flex')) {
    let top = this.querySelector('.top');
    let bot = this.querySelector('.bot');

    top.classList.toggle('opened');
    bot.classList.toggle('opened');
  }
}

panel.forEach(pan => pan.addEventListener('click', openUp));
panel.forEach(pan => pan.addEventListener('transitionend', emojiDrop));
