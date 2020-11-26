("use strict");
/*
let forcast = [17, 21, 23];

function printForcast(arr) {
  let final = "";
  for (let i = 0; i < arr.length; i++) {
    let count = i + 1;
    final += `...${arr[i]}\u00B0C in ${count} days`;
    if (i == arr.length - 1) {
      final += `...`;
    }
  }
  return final;
}
console.log(printForcast(forcast));

let forcast2 = [12, 5, -5, 0, 4];
console.log(printForcast(forcast2));
*/
//HIS SOLUTION
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForcast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}\u00B0C in ${i - 1} days ...`;
	}
	console.log('...' + str);
};
printForcast(data1);
*/
