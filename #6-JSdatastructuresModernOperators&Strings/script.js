'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    starterIndex, mainIndex;
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderingPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious past with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
////////////////////////////////////////////////////////////////////////////////////////
//STRINGS: datastructures & modern operators///////
//PART 3///////// string split amd join

console.log('a+very+nice+string'.split('+')); //removes + and places all indiv in an array
console.log('Michael Wheeler'.split(' ')); //split on space

const [firstname, lastname] = 'Michael Wheeler'.split(' ');

const x = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(x);

const capName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capName('jessica ann smith davis');

//padding a string
const message = 'Go to gate 23.';
console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCC = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCC(1111232345456464));
console.log(maskCC('3333333333333333'));

//repeat method
const message2 = 'bad weather... all departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'x'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
*/
/*
////////////////////////////////////////////////////////////////////////////////////////
//STRINGS: datastructures & modern operators///////
//PART 2///////// string library functions

const airTime = 'TAP air Portugal';
console.log(airTime.toLowerCase);
console.log(airTime.toUpperCase);
// fix capital in name
const pass = 'jOnAS';
const passL = pass.toLowerCase();
const passCorr = passL[0].toUpperCase() + passL.slice(1);
console.log(passCorr);
//check email
const email = 'miketwheeler@gmail.com';
const loginEmail = '  MikeTWheeler@gmail.com';
// const lowerE = loginEmail.toLowerCase();
// const trimE = lowerE.trim();

const normalizedE = loginEmail.toLowerCase().trim();

if (email === normalizedE) {
  console.log('that is correct');
}

//replaceing
const priceGB = '299,99#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'all passengers come to boarding door 23. bording door 23.';
console.log(announcement.replaceAll('door', 'gate'));
//replace all is also the old version below 'g' stands for global and must use btwn '/xxx/'
console.log(announcement.replace(/door/g, 'gate'));
//booleans
const plane = 'A320neo';
console.log(plane.includes('A3')); //true
console.log(plane.startsWith('Air')); //false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You cant board.');
  else console.log('Welcome aboard.');
}
//practice exercise
const checkBag = function (items) {};
checkBag('I have a laptop, some Food and a pocket Knife.');
checkBag('Socks and Camera.');
checkBag('Got some snacks and a gun for protection..');
*/
/*
////////////////////////////////////////////////////////////////////////////////////////
//STRINGS: datastructures & modern operators///////
//PART 1///////// indexing & slicing

const airTime = 'TAP air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airTime.length);
console.log('B737'.length);

// can use indexing of strings
console.log(airTime.indexOf('r'));
console.log(airTime.lastIndexOf('r'));
console.log(airTime.indexOf('Portugal'));

//slice(startIndex, endIndex) end is not incl in sub-string
console.log(airTime.slice(4));
console.log(airTime.slice(4, 7));

//get the first word
console.log(airTime.slice(0, airTime.indexOf(' ')));
// get the last word
console.log(airTime.slice(airTime.lastIndexOf(' ')) + 1);
//start from the end
console.log(airTime.slice(-2));
//start from the second letter wrapping back to the first letter
console.log(airTime.slice(1, -1));

// string manipulation with functions
const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat.');
  else console.log('You got lucky!');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/
/*
////////////////////////////////////////////////////////////////////////////////////////
//////Maps Iterator
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

//convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
//const answer = Number(prompt('Your answer'));
question.get(question.get('correct') === answer);

///convert map back into an array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
////////////////////////////////////////////////////////////////////////////////////////
/////MAPS
// a map is a datastructure to map values to pairs
///keys can have any type incl objs or other maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegitarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.size);
// rest.clear();
//use objects as map keys
const arr = [1, 2, 3];
rest.set(arr, 'Test');
console.log(rest.get(arr));

//access dom elements
rest.set(document.querySelector('h1'), 'Heading');
*/
/*
////////////////////////////////////////////////////////////////////////////////////////
//////SETS
//sets never have duplicates
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); //removes duplicates
console.log(new Set('Jonas')); // create a new set
console.log(orderSet.size); //similar to length
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
orderSet.add('Garlic Bread'); // add to a set needs to be unique
ordersSet.delete('Risotto');
orderSet.clear();

for (const order of orderSet) console.log(order);
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
//another way and includes unique positions
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef']).size);

console.log(new Set('michaelwheeler').size);
*/
/*
////////////////////////////////////////////////////////////////////////////////////////
//Looping Objects: obj keys, values, and entries
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days.`;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//PROPRTY VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

// desctructuring using for of and obj keys. values
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
////////////////////////////////////////////////////////////////////////////////////////
//OPTIONAL CHAINING///////////////
//OLD complex way of chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// Optional Chaining
console.log(restaurant.openingHours.mon?.open); //checks at the level of obj
console.log(restaurant.openingHours?.mon?.open); //checks at the level of objects

//Real world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}.`);
}

// Opt Chain on Methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'method does not exist');

// Opt Chain on Arrays
const users = [{ name: 'Mike', email: 'mike@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');
*/
////////////////////////////////////////////////////////////////////////////////////////
//ENHANCED OBJECt LIterALS////////
//SEE CHANGES ABOVE
/*
////////////////////////////////////////////////////////////////////////////////////////
//FOR _ OF LOOP///////////
//OTHER WAYS TO USE FOR LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//What for of looks like
for (const item of menu) console.log(item);
///use destructureing within for of loop also!!!!
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
/*
/////////////////////////////////////////////////////////////////////////////////////////
//NULLISH COALESCING OPEAATOR
// gives 10 instead of 0 - second operation
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//nullish values are null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////
// THE AND (&&) OPERATOR CONTINUED
console.log('-----or-----');
// Logical Operators :: they can use any datatype, return any datatype, and be short-circuiting
console.log(3 || 'Mike');
console.log(' ' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
// hello is the first truthy value in the list -=short circuits at the first truth
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.nunGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//works in the opposite way that the 'or' operator works
console.log('----and----');
// zero is considered true first
console.log(0 && 'Mike');
// string is considered true first
console.log(7 && 'Mike');
// null is the result
console.log('Hello' && 23 && null && 'Mike');
// long and shorthand version for an if statement using &&
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
////////////////////////////////////////////////////////////////////////////////////
*/
/*
//DESTRUCTURING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//SPREAD bc on RIGHT side of '=' operator ((SPREAD pulls from an array))
const arr = [1, 2, ...[3, 4]];
//REST, bc on the LEFT side of the '=' operator ((REST packs into an array))
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
//using REST and SPREAD
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//OBJECTS with REST
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//FUNCTIONs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let ...numbers into the function provides flexibility for passing in spreads AND single values
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; (i = numbers.length); i++) sum += numbers[i];
  console.log(sum);
};
//Dont want to do the work below???? Do a function like above
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
//pass a SPREAD array to the function
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[i], arr[2]];
console.log(badNewArr);
//THE SPREAD OPERATOR = transplants all elements of a fellow array and succinctly adds to another.
const newArr = [1, 2, ...arr];
//ALSO = it will display singular values in an array without brackets & passing multiple elements
console.log(...newArr);
//practice with it on another array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//Important scenarios with dot operator
//copy array
const mainMenuCopy = [...restaurant.mainMenu];
//Join 2 arrays or more together
const joinedArrays = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
  ...restaurant.location,
];
// //function that accept mult arguments and the dot operator
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?: "),
//   prompt('Ingredient 2?: '),
//   prompt('Ingredient 3?: '),
// ];
// console.log(ingredients);
//OLD WAY OF CALLING A FUNCTION
console.log(
  restaurant.orderingPasta(ingredients[0], ingredients[1], ingredients[2])
);
//NEW CONVENIENT WAY OF CALLING FUNCTION USING DOT OPERATOR!!!!!!!!****************************
console.log(restaurant.orderingPasta(...ingredients));
//DOT OPERATOR ALSO WORKS ON OBJECTS EVEN THOUGH OBJECTS ARE NOT MUTATABLE
const newRestaurant = { foundedIn: 1990, ...restaurant, founder: 'Mike' };
console.log(newRestaurant);
//COPYS WITH THE DOT OPERATOR
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////
/*
//Passing an obhect to an object's object
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via Del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
//Testing out default values set above!!!!!
restaurant.orderDelivery({
  address: 'Via Del Sole, 21',
  starterIndex: 1,
});
//////////////DESTRUCTURING OBJECTS//////////////////////////
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  friday: { open: o, close: c },
} = openingHours;
console.log(o, c);


//////////////DESTRUCTURING ARRAYS///////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x.y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables!
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(mian, secondary);

main, (secondary = [secondary, main]);
console.log(main.secondary);

//Recieve 2 values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5.6]];
// const [i, , j] = nested;
// console.log(i, j);

//Nested destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8.9];
console.log(p, q, r);
*/
