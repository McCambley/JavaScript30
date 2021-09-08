const message = new SpeechSynthesisUtterance()

let voice = []
const voicesDropdown = document.querySelector('.voice__select')
const options = document.querySelectorAll('.voice__range ,.voice__text')
const stopButton = document.querySelector('#stop')
const speakButton = document.querySelector('#speak')

message.text = document.querySelector('.voice__text').value

function populateVoices() {
  voices = this.getVoices()
  voicesDropdown.innerHTML =
    voicesDropdown.innerHTML +
    voices
      .filter((voice) => voice.lang.includes('en'))
      .map((voice) => {
        return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
      })
      .join('')
}

function setVoice() {
  //
  console.log(voices)
  message.voice = voices.find((voice) => voice.name === this.value)
  toggle()
}

function toggle(startOver = true) {
  speechSynthesis.cancel()
  if (startOver) {
    speechSynthesis.speak(message)
  }
}

function setOption() {
  console.log(this.name, this.value)
  message[this.name] = this.value
  toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)

stopButton.addEventListener('click', () => toggle(false))

speakButton.addEventListener('click', toggle)

options.forEach((option) => option.addEventListener('change', setOption))

// window.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Enter') {
//     // toggle()
//     message.text = document.querySelector('.voice__text').value

//     speakButton.click()
//   }
// })
