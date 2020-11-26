/** JS FUNDAMENTALS - PART 1
 * Lecture: Values and Variables
 */
/*
const country = "United States";
const continent = "North America";
let population = 328.2;
console.log(country);
console.log(continent);
console.log(population);
*/
/**
 * Lecture: Data Types
 */
/*
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/
/**
 * Lecture: let, const, var
 */
/*
language = "English";
*/
// country = "Jamaica";
// isIsland = true;
/**
 * Lecture: Basic Operators
 */
/*
let halfPop = population / 2;
console.log(population++);
let finlandPopulation = 6;
console.log(population > finlandPopulation);
let avgPop = 33;
console.log(population > avgPop);
const description =
	"Portugal is in Europe, and its 11 million people speak Portuguese";
*/
/**
 * Lecture: Strings and Template Literals
 */
/*
console.log(`Portugal is in Europe,
and its 11 million people
speak Portuguese`)
*/
/**
 * Lecture: Taking Decisions: if/else Statements
 */
/*
if (population > 33) {
	console.log("Portugal's population is above average.");
} else {
	console.log("Portugal's population is 22 million below average.");
}
*/
/**
 * Lecture: Types of Conversion and Coercion
 */
//ON CONSOLE
/**
 * Lecture: Equality Operators ==, ===
 */
/*
const numNeighbors = Number(
  prompt("How many neighbor countries does your country have?")
);
if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors >= 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}
*/
/**
 * Lecture: Logical Operators
 */
/*
const countryHasEnglish = true;
const countryIsIsland = false;
const popOver50Mil = true;

if (countryHasEnglish && !countryIsIsland && popOver50Mil) {
  console.log("You should live in the US.");
} else {
  console.log("The US does not meet your criteria.");
}
*/
/**
 * Lecture: The Switch Statement
 */
/*
const language = "chinese";

switch (language) {
  case "chinese":
  case "madarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too! :D");
}
*/
/**
 * Lecture: The Conditional (Ternary) Operator.
 */
/*
const pop = 130;
console.log(
  `Portugal's population is ${pop >= 33 ? "above" : "below"} average.`
);
*/
