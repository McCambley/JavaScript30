const squares = document.querySelectorAll('.content__square');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const score = document.querySelector('.subtitle__score');
const easyButton = document.querySelector('.start__button_easy');
const mediumButton = document.querySelector('.start__button_medium');
const hardButton = document.querySelector('.start__button_hard');
let scoreCount = 0;
let minTime = 500;
let maxTime = 3000;
let lastSquare;
let currentGame;
let gameTimer;

gameOver = false;

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
  const time = randomTime(minTime, maxTime);
  const square = randomSquare(squares);
  square.classList.add('content__square_active');
  currentGame = setTimeout(() => {
    square.classList.remove('content__square_active');
    if (!gameOver) showTarget();
  }, time);
}

function recordSuccess(evt) {
  if (this.classList.contains('content__square_active')) {
    this.classList.remove('content__square_active');
    this.classList.add('content__square_success');
    setTimeout(() => {
      this.classList.remove('content__square_success');
      // scoreCount++;
      updateScore(evt);
      score.textContent = scoreCount;
    }, 500);
  }
}

function startGame(min, max) {
  hideTitle();
  resetBoard();
  minTime = min;
  maxTime = max;
  scoreCount = 0;
  score.textContent = scoreCount;
  gameOver = false;
  showTarget();
  gameTimer = setTimeout(() => {
    gameOver = true;
    subtitle.classList.add('grow');
    subtitle.classList.add('grow');
  }, 10000);
}

function resetBoard() {
  squares.forEach((square) => {
    square.classList.remove('content__square_active');
    square.classList.remove('content__square_success');
  });
  clearTimeout(currentGame);
  clearTimeout(gameTimer);
}

function updateScore(event) {
  if (!event.isTrusted) return;
  scoreCount++;
}

function hideTitle() {
  title.classList.add('hide');
  subtitle.classList.remove('hide');
  subtitle.classList.remove('grow');
}

squares.forEach((square) => {
  square.addEventListener('click', recordSuccess);
});

easyButton.addEventListener('click', () => {
  startGame(500, 2000);
});

mediumButton.addEventListener('click', () => {
  startGame(300, 1500);
});

hardButton.addEventListener('click', () => {
  startGame(100, 1000);
});

// function toggleSuccess() {
//   if (!this.classList.contains('content__square_active') && !this.classList.contains('content__square_success')) {
//     this.classList.add('content__square_active');
//     return;
//   } else if (!this.classList.contains('content__square_success')) {
//     this.classList.remove('content__square_active');
//     this.classList.add('content__square_success');
//     setTimeout(() => {
//       this.classList.remove('content__square_success');
//       scoreCount++;
//       score.textContent = scoreCount;
//     }, 1000);
//     return;
//   } else {
//     this.classList.remove('content__square_success');
//     return;
//   }
// }
