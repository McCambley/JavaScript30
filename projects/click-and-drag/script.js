const cards = document.querySelector('.cards');
let isDown = false;
let startX;
let scrollLeft;

cards.addEventListener('mousedown', (evt) => {
  isDown = true;
  cards.classList.add('cards_active');
  startX = evt.pageX - cards.offsetLeft;
  scrollLeft = cards.scrollLeft;
});

cards.addEventListener('mouseleave', () => {
  isDown = false;
  cards.classList.remove('cards_active');
});

cards.addEventListener('mouseup', () => {
  isDown = false;
  cards.classList.remove('cards_active');
});

cards.addEventListener('mousemove', (evt) => {
  if (!isDown) return;
  evt.preventDefault();
  x = evt.pageX - cards.offsetLeft;
  const walk = (x - startX) * 2;
  cards.scrollLeft = scrollLeft - walk;
});
