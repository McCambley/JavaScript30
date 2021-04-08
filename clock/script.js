console.log("Hello, world!")

let secondHand = document.querySelector(".seconds");

let minuteHand = document.querySelector(".minutes");

let hourHand = document.querySelector(".hours");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDeg = (seconds / 60) * 360 + 90;
  const minutesDeg = (minutes / 60) * 360 + 90;
  const hoursDeg = (hours / 12) * 360 + 90;
  secondHand.style.transform = `translateY(-4px) rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `translateY(-4px) rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `translateY(-4px) rotate(${hoursDeg}deg)`;
  console.log(`${hours}:${minutes} ${seconds}`)
}

setInterval(setDate, 1000)
