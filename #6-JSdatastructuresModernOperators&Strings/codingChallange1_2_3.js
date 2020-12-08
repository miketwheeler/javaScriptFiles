'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
////////////////////////////////CHALLENGE THREE//////////////////////////////////////////////
//#1------------------------------------
// let mySet = new Set([]);
// for (const [z, event] of gameEvents) {
//   mySet.add(event);
// }
// const events = new Array([...mySet]);
const events = [...new Set(gameEvents.values())]; //his solution all in one step<<<<
//console.log(`This type: ${typeof events}`);
console.log(events);
//#2-------------------------------------
// for (const [key, event] of gameEvents) {
//   if (key === 64) {
//     gameEvents.delete(key);
//   }
// }
gameEvents.delete(64); // hls solution just using the key value<<<< i did it dynamically
console.log(gameEvents);
//#3-------------------------------------
// let totalMins = 0;
// let numMins = 90;
// for (const [key, event] of gameEvents) {
//   totalMins += key;
// }
// console.log(
//   `An event happened, on average, every ${Math.round(
//     totalMins / numMins
//   )} minutes`
// );
// below! his solution in one swoop again, I was doing procedurally and a bit overkill
const time = [...gameEvents.keys()].pop(); // grabs the last element of the array of keys
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes.`
);
//#4------------------------------------
const halfTime = [...gameEvents.keys()].pop() / 2;
for (const [minute, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'; //<<<his solution for f/s half
  console.log(`[${half} HALF] ${minute}: ${event}`); //all in one step
  //   if (minute < halfTime) console.log(`[FIRST HALF] ${minute}: ${event}`);
  //   else console.log(`[${half} HALF] ${minute}: ${event}`);
}
*/
/*
////////////////////////////////CHALLENGE TWO////////////////////////////////////////////////
let count = 1;
for (const [i, playerName] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${playerName}`);
}

const values = Object.values(game.odds);
let avg = 0;
for (const value of values) {
  avg += value;
}
console.log(`The average odds of the game are: ${avg / values.length}`);

for (const [team, value] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `${game[team]}`;
  console.log(`Odd of victory ${teamStr}: ${value}`);
}

// const scorers = {};
// Object.assign(scorers, game.scored);
// console.log(scorers);

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
////////////////////////////////CHALLANGE ONE////////////////////////////////////////////////

// //initialize both team variables as arrays
// const [players1, players2] = game.players; //<<<<<<use de-structuring to split the players array into two

// const [gk, ...fieldPlayers] = players1; // <<<<use REST instead to de-structure
// //an array containing all players from both teams
// const allPlayers = [...players1, ...players2]; //*******good job@!!!!!! */
// // sub players to add to team 1
// const subPlayersBayern = ['Thiago', 'Coutinho', 'Perisic'];
// const players1Final = [...players1, ...subPlayersBayern];
// //de-structure the game obj's odds property into individual variables
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players);
//   }
//   console.log(`${players.length} goals were scored.`);
// };
// //print all players who scored using function and the total score
// printGoals(...game.scored);
// //using the ods obj of the game, print who is more likely to win
// team1 < team2 && console.log('Team 1 is likely to win!');
// team1 > team2 && console.log('Team 2 is likely to win!');
