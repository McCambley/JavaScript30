console.log("Hello!")

let panel = document.querySelectorAll(".panel");


function openUp() {
  this.classList.toggle('open');
}

function emojiDrop(e) {
  if (e.propertyName.includes('flex')) {
    let top = this.querySelector('.top');
    let bot = this.querySelector('.bot');

    top.classList.toggle('opened');
    bot.classList.toggle('opened');

    console.log('umm');
  }
}

panel.forEach(pan => pan.addEventListener('click', openUp));
panel.forEach(pan => pan.addEventListener('transitionend', emojiDrop));
