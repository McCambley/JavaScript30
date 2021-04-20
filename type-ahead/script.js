console.log("Get Searching!");

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

// Get cities object from json
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

// Find matches in cities object
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // return only items that match word searched
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      return `
    <li class="suggestions__item">
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
