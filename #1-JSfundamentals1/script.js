/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
*/
/*
let javascriptIsFun = true;
// console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;

console.log(typeof null);
*/
/*
let age = 30;
age = 31;

const birthYear = 1990;
var job = "programmer";
job = "Teacher";
*/
/*
//Math Operators
const now = 2037;
const ageMike = now - 1990;
const ageSarah = now - 2018;
console.log(ageMike, ageSarah);

console.log(ageMike * 2, ageMike / 10, 2 ** 3);
// 2**3 means 2 to the power of 2 *2*2
const firstName = "Mike";
const lastName = "Wheeler";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; //25
x *= 4; //100
x++; //x = x+1
x--; //x = x-1
console.log(x);

//Comparison Operators
console.log(ageMike > ageSarah); // < <= >=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageMike = now - 1990;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const average = (ageMike + ageSarah) / 2;
console.log(ageMike, ageSarah, average);
*/
/*
const firstName = "Mike";
const job = "None";
const birthYear = 1990;
const year = 2020;

const mike =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " years old, and am " +
  job +
  " for a career.";
console.log(mike);

const mikeNew = `I'm ${firstName}, a ${
  year - birthYear
} year old, and am ${job} for a career.`;
console.log(mikeNew);

console.log(`Just a reg string....`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 👌");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years.`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
//Type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("jones"));
console.log(String(30));

//type coercion
console.log("I am" + 23 + " years old.");
console.log("23" - "10" - "3");
console.log();
*/
/*
// 5 Falsys: 0, '', undefined, null, NAN(not a number)
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jones")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 10;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

let height = 234;

if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is Undefined!");
}
*/
/*
const age = 18;
if (age === 18) console.log("you just became an adult");

const fav = Nunber(prompt("What is your favorite number?"));
console.log(fav);

if (fav === 23) {
  console.log("Cool 23 is an amazing number");
} else if (fav == 7) {
  console.log("Seven is also a cool number");
} else {
  console.log("Number is neither cool numbers!");
}

if (fav !== 23) {
  console.log("Why not 23?");
}
*/
/*
//LOGICAL OPERATORS
const hasDrivers = true;
const hasGoodVision = true;

console.log(hasDrivers && hasGoodVision);
console.log(hasDrivers || hasGoodVision);
console.log(!hasDrivers);

const shouldDrive = hasDrivers && hasGoodVision;

// if (shouldDrive) {
// 	console.log("Sarah is able to drive")
// } else {
// 	console.log("Someone else should drive.");
// }

const isTired = false;
console.log(hasDrivers && hasGoodVision && isTired);

if (hasDrivers && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive.");
}
*/
/*
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure.");
    console.log("Go to coding meetup.");
    break;
  case "tuesday":
    console.log("Prepare theory videos.");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write some code examples.");
    break;
  case "friday":
    console.log("Record videos.");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend.");
    break;
  default:
    console.log("Not a valid day.");
}

if (day === "monday") {
  console.log("Plan course structure.");
  console.log("Go to coding meetup.");
} else if (day === "tuesday") {
  console.log("Prepare theory videos.");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write some code examples.");
} else if (day === "friday") {
  console.log("Record videos.");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend.");
} else {
  console.log("Not a valid day.");
}
*/
/*
3 * 4;
1991;
true && false && !false;
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "mike";
console.log(`I;m ${2037 - 1990} years old. ${me}`);
*/
//CONDITIONAL OPERATOR (Ternary)
//This is an if-else list comprehension, must have these operators present
//the ? is an if the : is the else.
/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine.")
	: console.log("I like to drink water.");
  
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
	drink2 = 'wine';
} else {
	drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
