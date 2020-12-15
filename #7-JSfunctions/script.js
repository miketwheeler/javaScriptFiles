'use strict';

////////////////////////////////////////////////////////////////////////////////////////
////// A CLOSER LOOK AT FUNCTIONS == More CLOSURE Examples
////////////////////////////////////////////////////////////////////////////////////////
//we dont need to return a function from another function just for a closeure
//Ex: 1
// let f;
// const g = function () {
//   const a = 23; //consider this as 'f's birth place!
//   f = function () {
//     //f reassignment
//     console.log(b * 2);
//   };
// };
// g(); //call g : assigns to our empty var 'f' the 'f' function
// f(); //calls 'f' funct for the 1st time
// closure.dir(f);
// h(); // when 'h' is called 'f' is reassigned to the new function
// f(); //when 'f' is called for the second time - 'f' is now reassigned
// console.dir(f); //shows the scopes, can view the closure information

// //Ex: 2
// const boardPassengers = function (n, w) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers.`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, 1000);

//   console.log(`Will start boarding in ${w} seconds.`);
// };

// const perGroup = 1000; // to prove that the closure takes preference to internal scope over global
// boardPassengers(180, 3);

////////////////////////////////////////////////////////////////////////////////////////
////// A CLOSER LOOK AT FUNCTIONS == CLOSURES
////////////////////////////////////////////////////////////////////////////////////////

// --- closures arnt created per-se, they are automatically created in certian situations
// const secureBooking = function () {
//   let passengerCount = 0;
//   // As soon as it returns, the function is trashed
//   return function () {
//     passengerCount++; //closure reserves the tabulation of this variable(s)
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// // Can check the closure using...
// console.dir(booker);

//********************************************************************************** */
// A function always has access to the variable environment(VE) of the execution context
// in which it was created. The CLOSURE: VE attached to the function, exactly as it was
// at the time and place the fucntion was created!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/************************************************************************************ */

////////////////////////////////////////////////////////////////////////////////////////
////// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
////////////////////////////////////////////////////////////////////////////////////////
// could vreate a function and run it once
// const runOnce = function () {
//   console.log('This will only run once!');
// };
// runOnce();

// // Another way to do this -- wrap it in parens so that it becomes an expression
// /// then call it right after
// // THIS IS ALSO ENCAPSULATION IN JS!!!!! Hide them in this pattern of scope
// (function () {
//   console.log('This will only run once!');
// })(); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<immediate call to itself

// // also works for an arrow funciton
// (() => console.log('This will ALSO only run once'))(); // <<<<<<<<<immediate call

// //Let or Const are also ways of assigning scope
// // Creating a separate block like this is easier and more common today
// // there is really no need to do the above for instances except for
// // special conditions --- this is the better way to go!!!!!
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(notPrivate);

////////////////////////////////////////////////////////////////////////////////////////
///////   CALL   APPLY    AND    BIND     //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//////The CALL and APPLY methods - lets us set the 'this' keyword for any call
////////////////////////////////////////////////////////////////////////////////////////
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //new syntax for methods/functions of an object
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(239, 'Mike Wheeler');
// lufthansa.book(635, 'John Smith');

// const euroWings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// // is not a proprietary method anymore it is just a function call
// const book = lufthansa.book;
// //THis book is no longer the book method above and wont work, the 'this' (function above)
// //keyword points to 'undefined' after reassignment.  No ACCESSIBILITY.
// // book(23, 'Sam Williams');

// //you can override this though explicitly using ==  call, apply, and bind
// ///>>>the CALL Method
// book.call(euroWings, 23, 'Sarah Williams');
// console.log(euroWings);
// book.call(lufthansa, 239, 'Mary Mo');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 342, 'Little Poops');
// console.log(swiss);

// //The APPLY Method
// const flightData = [343, 'George Curious'];
// book.apply(swiss, flightData);
// console.log(swiss);

// //better way - use the dot operator
// book.call(swiss, ...flightData);

// ////////////////////////////////////////////////////////////////////////////////////////
// //////The BIND METHOD lets us set the 'this' keyword  ALSO   !!!IMPORTANT
// ////////////////////////////////////////////////////////////////////////////////////////
// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Severence Snape');
// //can define either of the passed values and add other later == partial application!!
// const bookEW23 = book.bind(euroWings, 23);
// bookEW23('Mike Wheeler');
// bookEW23('Marta Gonzales');

// //another use for bind is with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// ///Partial application - preset parameters
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.23);

// console.log(addVat(100));
// console.log(addVAT(23));

// //useing nested functions
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(100));
// console.log(addVat2(23));

////////////////////////////////////////////////////////////////////////////////////////
//////Funcitons Returning Funcitons
////////////////////////////////////////////////////////////////////////////////////////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// //This works due to closures = a difficult feature and to understand in JS
// const greeter = greet('Hey');
// greeter('Mike');
// greeter('Steven');
// //works - fundamental to functional programming
// //this passes to the main an another to the instance of the inner function
// greet('Hello')('Mike');

// //same function using arrow functions
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Mike');

////////////////////////////////////////////////////////////////////////////////////////
//////Funcitons accepting callback functions
////////////////////////////////////////////////////////////////////////////////////////
//takes a string and returns it with no spaces in it and lowered case
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
//capitalizes the first word of the string
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// higher order function - takes a function as an argument
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); //show which name fn is working on it
};

// callbacks also allow us to implement levels of obstraction - hiding functionality,
// think of it from higher perspective
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//jS uses callbacks all the time
const high5 = function () {
  console.log('XXXX');
};
document.body.addEventListener('click', high5);

['Mike', 'Jonas', 'Adam'].forEach(high5);
*/
////////////////////////////////////////////////////////////////////////////////////////
//////Passing into functions
////////////////////////////////////////////////////////////////////////////////////////
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const bookings = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 4);
createBooking('LH123', undefined, 4);

const flight = 'JMH343';
const mike = {
  name: 'Mike Wheeler',
  passport: 243234234234,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LGG333';
  passenger.name = 'Mr. Michael Wheeler';

  if (passenger.passport === 243234234234) alert('Check In');
  else alert('Wrong Passport');
};
// checkIn(flight, mike);
// console.log(flight);
// console.log(mike);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};
newPassport(mike);
checkIn(flight, mike);

//javascript only has passing by value
*/
