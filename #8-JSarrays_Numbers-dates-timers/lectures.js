'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// ///////////////////////////////////////////////////////////////////////////////
// /// Converting and Checking Numbers
// ///////////////////////////////////////////////////////////////////////////////
// console.log(23 === 23.0);

// // BASE 10 is 0-9
// // BINARY is base 2 which is 0 & 1
// console.log(0.1 + 0.2); // is not .3 its .30000000000000004
// console.log(0.1 + 0.2 === 0.3); // is then false

// // convert strings to numbers
// console.log(Number("23"));
// console.log(+ '23'); // also turns 23 string to number

// // Parsing
// // .parseInt gets rid of unnessesary symbols, must start with a number though
// console.log(Number.parseInt('30px', 10)); // the 10 is base10, could right 2 for binary

// console.log(Number.parseInt('  2.5rem')); // only pulls whole number
// console.log(Number.parseFloat(' 2.5rem  ')); // grabs decimals properly

// // check if value is not a number (NaN)
// console.log(Number.isNaN(20)); // is it not a number ? == false, it is
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X')); // true is not a number
// console.log(Number.isNaN(23 / 0)); // normally infinite, infinity is NaN

// //best way to check if a value is a NUMBER!!!!!! <<<<< this is the go-to
// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite(20)); // false
// console.log(Number.isFinite(+ '20X')); // false
// console.log(Number.isFinite(23/0)); // false as well

// console.log(Number.isInteger(20)); //true
// console.log(Number.isInteger(23.0)); //true
// console.log(Number.isInteger(23/0)); //false

// console.log(Math.sqrt(25)); //5
// console.log(25 ** (1/2)); //5
// console.log(8 ** (1/3)); //2

// ///////////////////////////////////////////////////////////////////////////////
// //// Math and Rounding
// ///////////////////////////////////////////////////////////////////////////////
// console.log(Math.max(5,18,23,11,2)); // 23
// console.log(Math.max(5,18,'23',11,2)); // 23
// console.log(Math.max(5,18,'23px',11,2)); //NaN

// console.log(Math.min(5,18,23,11,2)); // 2

// console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.159.....

// // Math.random
// console.log(Math.trunc(Math.random() * 6) + 1); // what we did earlier to get 1-6

// // random gives a number between 0..1  then  0...(max - min) we get a num btwn MAX-MIN
// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20)); // now gives rand(10, 20) using function

// // rounding integers
// console.log(Math.trunc(23.3)); // removes past the decimal to nearest

// console.log(Math.round(23.3)); // rounds to the nearest integer
// console.log(Math.round(23.9)); // 24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.round(23.9)); // 24

// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor(23.9)); // 23

// console.log(Math.trunc(-23.3)); // -23 (rounds nearest despite value)
// //[a little better than trunc works in all situations]
// console.log(Math.floor(-23.3)); // -24 (goes lesser)

// // Rounding decimals
// console.log((2.7).toFixed(0)); // will always return a string, not a number
// console.log((2.7).toFixed(3)); // string but adds zeros out to 3 past decimal
// console.log((2.35).toFixed(2)); // useful for dollars and cents to strings

// ///////////////////////////////////////////////////////////////////////////////
// //// the REMAINDER operator
// //////////////////////////////////////////////////////////////////////////////
// console.log(5 % 2); // 1
// console.log(5 / 2); // 2.5  ::  5 = 2*2+ 1  (1 @ the end is remainder[above])

// console.log(8 % 3); // 2 even
// console.log(8 / 3); // 2.66666665 :: 8 = 2*3+ 2  (2 @ the end is remainder[above])

// // good for checking if an even or odd :: if % 2 is zero = even
// console.log(6 % 2); // 0 is even
// console.log(6 / 2); // 3

// console.log(7 % 2); // 1 is odd
// console.log(7 / 2); // 3.5

// // check even function
// const isEven = n => n % 2 === 0; // if n is % 2 is even
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// // good for every n-th needed action!!!!!!
// labelBalance.addEventListener('click', function(){
// 	[...document.querySelectorAll('.movements__row')]
// 	.forEach(function(row, i){
// 		// 2,4,6...
// 		if(i % 2 === 0) row.style.backgroundColor = 'orangered';
// 		//0,3,6,9.....
// 		if(i % 3 === 0) row.style.backgroundColor = 'blue';
// 	});
// });

// ///////////////////////////////////////////////////////////////////////////////
// //// Working with BigInt
// ///////////////////////////////////////////////////////////////////////////////

// // 2 bc of base2, 64bit but only 53bits avail
// console.log(2 ** 53 - 1); // a big number, the biggest javascript can represent
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1); //cant add any more to this ceiling, it wont increase

// // sometimes you need bigger numbers like from APIs or for DB ids
// // BIGINT was added recently to curb this
// console.log(23234234234234234234234234234234234234234234n); // 'n' makes it a safe bigint
// console.log(BigInt(23234234234234234)); // wo 'n', still works the same

// // Operations
// console.log(100000n + 10000n);
// console.log(3452356123245n * 2345456342342324356n);
// // cant mix bigInts with regular numbers

// // does work with comparisons
// console.log(20n > 15);
// console.log(20n === 20); // strict doesnt work
// console.log(20n == 20); // loose does work though

// const huge = 2324354576543221343243654n;
// console.log(huge + ' is REALLY big!!!');

// // Math.sqrt doesn't work

// // division with bigint
// console.log(11n/3n); // works but cuts off the decimal
// console.log(10/3);

///////////////////////////////////////////////////////////////////////////////
//// Dates and Times
///////////////////////////////////////////////////////////////////////////////

// // create a date
// const now = new Date();
// console.log(now); // current date at the current time

// // based off a string
// console.log(new Date('Aug 02 2020 13:05:41'));
// console.log(new Date('December 24, 2020'));
// console.log(new Date(account1.movementsDates[0]));

// // javascript autocorrects all dates and times
// // breaks it all down into a date. COOL!
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// //
// console.log(new Date(0)); // Jan 01 1970 01:00:00 GMT
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //milliseconds

// datetime has its own methods like arrays, strings, numbers
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth()); // zero based months
// console.log(future.getDate()); // date
// console.log(future.getDay()); // day of the week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); // use for date of obj to a string
// console.log(future.getTime()); // milliseconds since 1970 date above
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<>~~~~~~~~~~~~~~~~
// console.log(new Date(2142256980000)); // converts back to date above

// // time stamps are so important there is a method for that
// console.log(Date.now());

// // SET versions for all above methods
// future.setFullYear(2040);
// console.log(future);

///////////////////////////////////////////////////////////////////////////////
//// OPERATIONS with Dates and Times
///////////////////////////////////////////////////////////////////////////////

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcdaysPassed = (date1, date2) =>
  Math.abs(date2 - (date1 / 1000) * 60 * 60 * 24);

const days1 = calcdaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

///////////////////////////////////////////////////////////////////////////////
//// INTERNATIONALIZATION Numbers (Intl)
///////////////////////////////////////////////////////////////////////////////

const num = 3884764.23;

const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};

console.log(new Intl.NumberFormat('en-US').format(num));

///////////////////////////////////////////////////////////////////////////////
//// Setting Timers / Timouts
///////////////////////////////////////////////////////////////////////////////
const ingred = ['olives', 'spinach'];

// sets 3sec timout - pauses code execution, then runs
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}!`),
  3000,
  ...ingred
); // asynchronous js
console.log('waiting...'); //will print first b/c its auto quicker - proves that settimeout works

if (ingred.includes('spinach')) clearTimeout(pizzaTimer);
