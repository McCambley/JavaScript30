// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200; // wil not update the original variable as we are altering a new variable (copy)
console.log(age, age2);

let name = "Jake";
let name2 = name;
console.log(name, name2);
name = "Elysse"; // will not update the original as we are altering a new variable
console.log(name, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team);
team[3] = "Jake"; // will update the original array as well
console.log(players, team);

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice(); // makes a copy instead of referenceing players
team2[3] = "elysse";
console.log(players, team2);
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = "Will";
console.log(players, team3);
// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "Joe";
console.log(players, team4);

const team5 = Array.from(players);
team5[3] = "Luke";
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// // If we do...
// const captain = person;
// captains.number = 99;
// This will also update "person" as it's only a reference to the original

// and think we make a copy:

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { name: "Jake", number: 99 });
console.log(cap2, person);
// We will hopefully soon see the object ...spread
const cap3 = { ...cap2 };
console.log(cap3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
console.clear();
const jake = {
  name: "Jake",
  age: 28,
  social: {
    twitter: "@jakemccambley",
    github: "@mccambley",
  },
  home: "Jackson",
};

console.log(jake);

const tysse = Object.assign({}, jake, { name: "Tysse" });
console.log(tysse);

console.log(tysse.social);
tysse.social.twitter = "@tysse";
console.log(tysse.social, jake.social);
// we copied into a new object but the nested objects are still only references

// Poor mans deep clone
const will = JSON.parse(JSON.stringify(jake));
console.log(will);

// slightly more complicated deep clone
const obj = {
  one: 1,
  two: 2,
  three: { message: "I love JS" },
};

const objСopy = Object.assign({}, obj);
objСopy.three = Object.assign({}, obj.three); // Object.assign into a nested object

console.log(objСopy); // { one: 1, two: 2, three: { message: "I love JS" } }

// is the copy related to the source?
console.log(objСopy === obj); // false

// is the three property of the copy related to the three property of the source?
console.log(objСopy.three === obj.three); // false
