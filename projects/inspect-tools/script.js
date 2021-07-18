const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const p = document.querySelector(".text");
p.addEventListener("click", makeGreen);

function makeGreen() {
  p.style.color = "#3a3938";
  p.style.fontSize = "50px";
  p.style.fontWeight = "900";
  p.textContent = "Thanks!";
}

// Regular
console.log(
  "Usually, clicking that text would've opened the debugger, but I escaped that so we could carry on..."
);
console.log("hello");

// Interpolated
console.log("hello I am a %s string!", "🐶");
// Could also just use es6 backtics here

// Styled
console.log(
  "%c I am some great text!",
  "font-size: 28px; color: black; text-shadow: 1px 1px 8px white;"
);

// warning!
console.warn("Oh no!");

// Error :|
console.error("Oh noo!");

// Info
console.info(
  "Crocodiles eat 3-4 people per year! (supposed to be an info line"
);

// Testing
console.assert(1 === 12, "1 != 12");
// Very cool for running tests

// clearing
console.log("console.clear()");

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Jake!");
console.count("Jake!");
console.count("Jake!");
console.count("Jake");
console.count("Jake!");
console.count("Jake");
console.count("Jake");
console.count("Jake!");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/mccambley")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
