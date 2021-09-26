const squares = document.querySelectorAll('.content__square');
const score = document.querySelector('.subtitle__score');
let scoreCount = 0;
let lastSquare;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomSquare(squares) {
  const index = Math.floor(Math.random() * squares.length);
  const square = squares[index];
  if (square === lastSquare) {
    console.log('Picking another');
    return randomSquare(squares);
  }
  lastSquare = square;
  return square;
}

function showTarget() {
  const time = randomTime(500, 3000);
  const square = randomSquare(squares);
  square.classList.add('content__square_active');
  setTimeout(() => {
    square.classList.remove('content__square_active');
    showTarget();
  }, time);
}

squares.forEach((square) => {
  square.addEventListener('click', recordSuccess);
});

function recordSuccess() {
  if (this.classList.contains('content__square_active')) {
    this.classList.remove('content__square_active');
    this.classList.add('content__square_success');
    setTimeout(() => {
      this.classList.remove('content__square_success');
      scoreCount++;
      score.textContent = scoreCount;
    }, 500);
  }
}

function toggleSuccess() {
  if (!this.classList.contains('content__square_active') && !this.classList.contains('content__square_success')) {
    this.classList.add('content__square_active');
    return;
  } else if (!this.classList.contains('content__square_success')) {
    this.classList.remove('content__square_active');
    this.classList.add('content__square_success');
    setTimeout(() => {
      this.classList.remove('content__square_success');
      scoreCount++;
      score.textContent = scoreCount;
    }, 1000);
    return;
  } else {
    this.classList.remove('content__square_success');
    return;
  }
}
