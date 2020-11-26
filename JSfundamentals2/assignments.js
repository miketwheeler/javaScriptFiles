/**
 * LECTURE: Functions
 */
/*
function describeCountry(country, populaiton, capitalCity) {
  console.log(`${country} has ${populaiton} million people 
	and its capital city is ${capitalCity}.`);
}

console.log(describeCountry("USA", 995, "Washington D.C."));
console.log(describeCountry("Mexico", 500, "Mexico City"));
console.log(describeCountry("China", 1140, "Beijing"));
*/
/**
 * LECTURE: Fuction Declarations & Expressions
 */
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
console.log(percentageOfWorld1(995));
console.log(percentageOfWorld1(1140));
console.log(percentageOfWorld1(500));

const perctOfWorldOutPut = function percentageOfWorld1(population) {
  return (population / 7900) * 100;
};
console.log(perctOfWorldOutPut(995));
console.log(perctOfWorldOutPut(1140));
console.log(perctOfWorldOutPut(500));
*/
/**
 * LECTURE: Arrow Functions
 */
/*
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};
console.log(percentageOfWorld3(995));
console.log(percentageOfWorld3(1140));
console.log(percentageOfWorld3(500));
*.
/**
 * LECTURE: Functions Calling Other Functions
 */
/*
function percentageOfWorld(newPop) {
  return (newPop / 7900) * 100;
}
const describePopulation = (country, population) => {
  return `${country} has ${population} million people, 
	which is about ${percentageOfWorld(population)} of 
	the world.`;
};
console.log(describePopulation("USA", 995));
console.log(describePopulation("China", 1140));
console.log(describePopulation("Mexico", 500));
*/
/**
 * LECTURE: Introduction to Arrays
 */
/*
const popUS = 995;
const popChina = 1040;
const popMex = 550;
const populations = [popUS, popChina, popMex];

function tell(pops) {
  return pops.length == 4;
}
console.log(tell(populations));

const percentages = [
  percentageOfWorld(popUS),
  percentageOfWorld(popChina),
  percentageOfWorld(popMex),
];

function percentageOfWorld(newPop) {
  return (newPop / 7900) * 100;
}
console.log(percentages);
*/
/**
 * LECTURE: Basic Array Operations(Methods)
 */
/*
const neighbors = ["Canada", "Mexico", "Puerto Rico"];
neighbors.push("Utopia");
neighbors.pop();
if (!neighbors.includes("Germany")) {
  console.log("Probably not a central European County.");
}
console.log(neighbors);
const ind = neighbors.indexOf("Mexico");
neighbors[ind] = "US";
console.log(neighbors);
*/
/**
 * LECTURE: Introduction to Objects
 */
/*
const myCountry = {
  country: "USA",
  capital: "Washington D.C",
  language: "English",
  population: 995,
  neighbors: ["Canada", "Mexico", "Puerto Rico"],
};
*/
/**
 * LECTURE: Dot Vs. Bracket Notation
 */
/*
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking
people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry[population] += 2;
console.log(myCountry.population);
*/
/**
 * LECTURE: Object Methods
 */
/*
const myCountry = {
  country: "USA",
  capital: "Washington D.C",
  language: "English",
  population: 995,
  neighbors: ["Canada", "Mexico", "Puerto Rico"],
  describe: function () {
    console.log(`${this.country} has ${this.population} million)`);
  },
  checkIsIsland: function () {
    return this.neighbors.length == 0;
  },
};
console.log(myCountry);
console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());
*/
/**
 * LECTURE: Iteration: The For Loop
 */
/*
for (let i = 0; i <= 50; i++){
	console.log(`Voter nunber ${i} is currently Voting.`);
}
*/
/**
 * LECTURE: Looping Arrays, Breaking and Contiuuing
 */
/*
const populations = [995, 1040, 550, 330];
let percentages = [];
for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld(populations[i]));
}
function percentageOfWorld(newPop) {
  return (newPop / 7900) * 100;
}
console.log(percentages);
*/
/**
 * LECTURE: Looping Backwards and Loops in Loops
 */
/*
const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweeden", "Russia"],
];
for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
  }
}
*/
/**
 * LECTURE: The While Loop
 */
/*
const populations = [995, 1040, 550, 330];
const percentages2 = [];
let i = 0;
function percentageOfWorld(newPop) {
  return (newPop / 7900) * 100;
}
while (i < populations.length) {
  const percents = percentageOfWorld(populations[i]);
  percentages2.push(percents);
  i++;
}
console.log(percentages2);
*/
