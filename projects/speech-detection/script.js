const speech = document.querySelector('.speech');
let utterance = document.querySelector('.utterance');
let sender = false;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.start();

let newUtterance = document.createElement('p');
newUtterance.classList.add('utterance');
newUtterance.textContent = '...';
speech.appendChild(newUtterance);

let data = document.createElement('p');
data.classList.add('data');
data.textContent = '...';
speech.appendChild(data);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  console.log(capitalize(transcript));
  newUtterance.textContent = capitalize(transcript);

  if (e.results[0].isFinal) {
    sender = !sender;
    const now = new Date();

    newUtterance = document.createElement('p');
    newUtterance.classList.add('utterance');
    newUtterance.textContent = '...';
    speech.appendChild(newUtterance);

    data.textContent = `${sender ? 'Sent' : 'Received'} at ${now.getHours()}:${now.getMinutes()}`;
    data = document.createElement('p');
    data.classList.add('data');
    speech.appendChild(data);

    speech.scrollTop = speech.scrollHeight;
  }
});

function capitalize(string) {
  // console.log(string);
  return string.charAt(0).toUpperCase() + string.slice(1);
}

recognition.addEventListener('end', recognition.start);
