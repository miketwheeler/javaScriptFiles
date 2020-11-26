// Remember, we're gonna use strict mode in all scripts now!
("use strict");
///////////////////////////////////////////////////////////////////////////////
//His coding problem
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function findAmp(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  if (min <= 0) return max + min;
  else return max - min;
}
console.log(`The amplitude for the day is : ${findAmp(temperatures)}`);

// What if there were 2 arrays of temps?????
const temperatures2 = [101, "error", 99, -33, 44, 50, 80, 32];
const newTemperatures = temperatures.concat(temperatures2); //ADDS THE 2ND ARRAY TO THE END OF 1ST
console.log(`The amplitude for the day is : ${findAmp(temperatures2)}`);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temperature",
    unit: "celcius",
    value: Number(prompt("Degrees celcius: ")),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A - Identify the bug
console.log(measureKelvin());
*/
