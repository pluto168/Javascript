//// loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition${rep}`);
// }

//script
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["lin", "lee", "chen"],
  true,
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  //Reading types array
  console.log(jonasArray[i], typeof jonasArray[i]);

  //Filling types array
  //   types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);
