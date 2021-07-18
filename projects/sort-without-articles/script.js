const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const bandList = document.querySelector('.bands');

// remove article form beginning of bandname
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// sort bandnames without articles
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// render list to DOM
bandList.innerHTML = sortedBands.map(band => `<li class='band'>${band}</li>`).join('');
