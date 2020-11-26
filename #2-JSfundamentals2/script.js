//USE ---> 'use strict' at the start of each file for newer functions of ES6+
"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

//if (passTest) hasDriversLicense = true;
//if (hasDriversLicense) console.log("I can drieve.");

//const interface = 'Audio';
//const private = 32343;
//const it = 23;
*/
/*
function logger() {
  console.log("My name is Mike.");
}
//Calling, Running, or Invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//Passing quantity of fruits into the foodprocessor function
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(200, 1100);
console.log(appleOrangeJuice);
*/
/*
//FUNCTION are just values
==========================
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(calcAge1(1990));


//GUNCTION EXPRESSION produces values
===========================
const calcAge2 = function(birthYear) {
	return 2037 - birthYear;
}
console.log(calcAge2(1990));
*/

/*
//THE ARROW FUNCTION
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1990));

const yearsToRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}.`;
};

console.log(yearsToRetirement(1990, "Mike"));
*/
//////////////////////////////////////////////////////////////////////
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples 
  	and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
///////////////////////////////////////////////////////////////////////
//FUNCTION OVERVIEWS
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsToRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return console.log(`${firstName} retires in ${retirement}.`);
  } else {
    return console.log(`${firstName} has already retired.`);
  }
};

console.log(yearsToRetirement(1991, "Mike"));
console.log(yearsToRetirement(1950, "Jonas"));
*/
//////////////////////////////////////////////////////////////////////
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Mike", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2088, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstname = "Jonas";
const jonas = [firstname, "tomorrow", 2037 - 1991, "teacher", friends];
console.log(jonas);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1991, 1992, 2002, 2010, 2019];

const age1 = calcAge2(year[0]);
const age2 = calcAge2(year[1]);
const age3 = calcAge2(year[year.length - 1]);

console.log(age1, age2, age3);
const ages = [
  calcAge2(year[0]),
  calcAge2(year[1]),
  calcAge2(year[year.length - 1]),
];
console.log(ages);
*/
/*
const friends = ["Mike", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);

friends.unshift("John");
console.log(friends);

friends.pop();
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven.");
}
*/
/*
//Object Literal Context (( Arrays are structured/accessed, these are not))
const mike = {
  firstName: "Michael",
  lastName: "Wheeler",
  age: 2037 - 1990,
  job: "none",
  friends: ["ZiZhen", "Chodee", "Matt"],
};

console.log(mike.lastName);
//Objectcetera - cool name
console.log(mike["lastName"]);
const nameKey = "Name";
console.log(mike["first" + nameKey]);
console.log(mike["last" + nameKey]);

const interestedIn = prompt(`What do you want to know about 
Mike? Choose between firstName,
 lastName, age, job, and friends.`);

if (mike[interestedIn]) {
  console.log(mike[interestedIn]);
} else {
  console.log("The value was not an option.");
}

mike.location = "Washington State";
mike["linkedIn"] = "https://linkedin.com/in/michaeltwheeler";
console.log(mike);
console.log(`${mike.firstName} has ${mike.friends.length} friends, 
and his best friend is called ${mike.friends[0]}.`);
*/
/*
const mike = {
  firstName: "Michael",
  lastName: "Wheeler",
  birthYear: 1990,
  age: 2037 - 1990,
  job: "Bookie",
  friends: ["ZiZhen", "Chodee", "Matt"],
  hasDriversLicense: true,
  calcAge: function () {
    return 2037 - this.birthYear;
  },
  getSummary: function (hasDriversLicense) {
    let hasHasNot = "does have" ? hasDriversLicense : "does not have";
    return `${this.firstName} is a ${this.calcAge()} year-old ${this.job}, 
	and he ${
    this.hasDriversLicense ? "does have" : "doesnt have"
  } a driver's License.`;
  },
};
console.log(mike.calcAge());
// console.log(mike["calcAge"](1990));

// CHALLANGE
//"Mike is a 40 year old teacher, and he has a driver's license."
console.log(mike.getSummary());
*/

//LLLLLLLLOOOOOOOOOOOOPPPPPPPPPPSSSSSSSS!!!!!!!!!!!!!!
/*
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repitition ${i}.`);
}

const mike = [
  "Michael",
  "Wheeler",
  1990,
  "Bookie",
  ["ZiZhen", "Chodee", "Matt"],
];
const types = [];
for (let i = 0; i < mike.length; i++) {
  console.log(mike[i]);
  //filling a new array
  //types[i] = typeof mike[i];
  types.push(typeof mike[i]);
}
console.log(types);

const years = [1990, 1992, 1994, 2020, 2024];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//CONTINUE(cancell current iteration & continue) AND BREAK (totally stop loop)
for (let i = 0; i < mike.length; i++) {
  if (typeof mike[i] !== "string") continue;

  console.log(mike[i], typeof mike[i]);
}

for (let i = 0; i < mike.length; i++) {
  if (typeof mike[i] === "number") break;
  console.log(mike[i], typeof mike[i]);
}

for (let i = mike.length - 1; i >= 0; i--) {
  console.log(mike[i], typeof mike[i]);
}
*/
/*
for (let e = 1; e < 4; e++) {
  console.log(`--------------Starting exercise ${e}------------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights repetition ${rep}.`);
  }
}
*/
/*
let rep = 1;
while (rep <= 10) {
  //console.log(`Lifting weights repition ${rep}.`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`The roll was a: ${dice}.`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("You got a 6!");
}
*/
