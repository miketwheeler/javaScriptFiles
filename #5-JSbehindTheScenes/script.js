'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outer scope variable
      const firstName = 'Steven';
      //Re-defining variable from outer scope
      output = 'New OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // add(2, 3);
  }
  printAge();
  return age;
}
const firstName = 'Mike';
calcAge(1990);
// console.log(age);
*/
/*
//'this' is undefined in regular function
console.log(this);
const calcAge = function (birthYear) {
  console.log(2038 - birthYear);
 // console.log(this);
};
calcAge(1990);
//Arrow function does not get it's own 'this' keyword, inherits parent scope, which is window
//Arrow function does not get its own 'this' keyword.
console.log(this);
const calcAgeArrow = birthYear => {
  //console.log(2038 - birthYear);
  //console.log(this);
};
calcAgeArrow(1990);

const mike = {
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
mike.calcAge();
//Method borrowing, borrows method from another function
const matilda = {
	year: 2018;
}
matilda.calcAge = mike.calcAge;
matilda.calcAge();

const f = mike.calcAge;
f();
*/
/*
const mike = {
  firstName: 'Mike',
  year: 1990,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or 'that'
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();
    // },

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
mike.greet();
mike.calcAge();

const addExpr = function (a, b) {
  return a + b;
};
addExpr(2, 5);
// Can add more arguments
addExpr(2, 5, 8, 12);
// But can't use in arrow functions, they dont communicate with 'arguments' = there is a modern workaround
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8, 12);
*/
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30

const me = {
	name: 'mike',
	age: 30,
};

const friend = me; // Make a new object, 'copying' the me object
friend.age = 27; // Attempt to change the age of the new object
friend.name = 'frank'; // Attempt to change the name of the new object

// Even though changed age and name, they referenced the same memory of the initial object
// Objects are stored in the 'Heap', primitives are stored in the 'call stack'
// --The new object still references the old object and is not mutatable, cannot change
console.log('Friend:', friend);
console.log('Me: ', me);
*/
/*
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//referenced objects
const jessica = {
  firstName: 'Jessica',
  lastName: 'Wiliams',
  age: 27,
  family: ['Alice', 'Bob'],
};
//copying objects
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('B4 Marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('B4 Marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
*/
