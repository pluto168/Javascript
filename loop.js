//// loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition${rep}`);
// }
// // script
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["lin", "lee", "chen"],
//   true,
// ];
// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//   //Reading types array
//   console.log(jonasArray[i], typeof jonasArray[i]);
//   //Filling types array
//   //   types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }
// console.log(types);
// const years = [1990, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);
//continue and break
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }
// //😀loop inside a loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
//   }
// }
// 😀while loop : we do not know ,how many time the loop should run.
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition${rep}`);
// }
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE:Lifting weights repetition${rep}`);
//   rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1; //truncate
// console.log(dice);
// while (dice !== 6) {
//   console.log(`You rolled a ${dice} `);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }
// the while loop dose really not have to depend on any counter variable
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum / arr.length;
// };
// console.log(calcAverage([1, 2, 3]));

//temperaturesNew calculate Problem:
// const temperaturesNew = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeNew);

// //Problem 2:
// //function should now receive 2 array of temps
// //Merge 2 arrays

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'cels',
//     value: Number(prompt('Degrees celsius:')),
//   };
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//1) Understanding the problem:

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}C...${data1[1]}C...${data1[2]}C...`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1}day ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);
