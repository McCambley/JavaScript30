const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const textInput = this.querySelector(".item-input");
  const text = textInput.value;
  const item = {
    text: text,
    done: false,
  };
  items.push(item);
  // quick and dirty clear functionality - type "clear" to clear
  if (text === "clear") {
    items = [];
  }
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
  console.log(JSON.parse(localStorage.getItem("items")));
}

function toggleDone(e) {
  if (!e.target.matches(".checkbox")) return;
  const item = e.target;
  const index = item.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(storedItems = [], platesList) {
  platesList.innerHTML = storedItems
    .map((plate, i) => {
      return `
    <li class="plate">
      <input class="checkbox" type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
      <label class="label" for="item${i}">${plate.text}</label>
    </li>
    `;
    })
    .join("");
  // if (storedItems === []) {
  //   console.log("here");
  //   itemsList.innerHTML = `
  //     <li class="loading">Loading Tapas...</li>
  //     `;
  // }
}

populateList(items, itemsList);

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
