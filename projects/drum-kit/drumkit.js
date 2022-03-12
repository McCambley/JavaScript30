// @ts-check

/**
 * List of drum keys
 * @type {NodeList}
 */
const keys = document.querySelectorAll('.key');

/**
 * Listen to transitioned event
 *
 * @type {HTMLElement} - Drum key
 * @listens document#transitionend - Listen for end of element transition
 */
// @ts-ignore
keys.forEach((key) => key.addEventListener('transitionend', stopPlaying));

/**
 *
 * @param {TransitionEvent} e - Transition event occurring on a key
 * @returns {void}
 */
function stopPlaying(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

/**
 *
 * @param {KeyboardEvent} e - Keyboard event occurring on keydown
 * @returns {void}
 */
function playSound(e) {
  /**
   * Audio
   * @type {HTMLAudioElement}
   */
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  /**
   * Key
   * @type {HTMLElement}
   */
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
  console.log('playing');
}

/**
 *
 * @param {TouchEvent} e
 * @returns {void}
 */
function touchPlay(e) {
  /**
   * Event target
   * @type {HTMLDivElement}
   */
  // @ts-ignore
  const target = e.target;
  let touchID = target.attributes['data-key'].value;
  /**
   * Audio
   * @type {HTMLAudioElement}
   */
  const audio = document.querySelector(`audio[data-key="${touchID}"`);
  /**
   * Key
   * @type {HTMLElement}
   */
  const key = document.querySelector(`.key[data-key="${touchID}"`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);
window.addEventListener('touchstart', touchPlay);
