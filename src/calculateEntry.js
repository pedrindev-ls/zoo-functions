const data = require('../data/zoo_data');

// const teste = [
//   { name: 'Pedro', age: 5 },
//   { name: 'Lucas', age: 5 },
//   { name: 'Julia', age: 5 },
//   { name: 'Maria', age: 18 },
//   { name: 'João', age: 18 },
//   { name: 'Rodolfo', age: 50 },
// ];

const counter = {
  adult: 0,
  child: 0,
  senior: 0,
};

// const testReal = (entrants) => {
//   if (entrants === undefined) {
//     return undefined;
//   }
//   if (entrants.length === undefined) {
//     return undefined;
//   }
// };

function countEntrants(entrants) {
  // testReal(entrants);
  if (entrants === undefined) {
    return undefined;
  }
  if (entrants.length === undefined) {
    return undefined;
  }
  entrants.forEach((element) => {
    if (element.age < 18) {
      counter.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      counter.adult += 1;
    } else if (element.age >= 50) {
      counter.senior += 1;
    }
  });
  return counter;
}

// console.log(countEntrants(teste));

function calculateEntry(entrants) {
  const family = countEntrants(entrants);
  if (family === undefined) {
    return 0;
  }
  const { adult, child, senior } = counter;
  // console.log(adult, child, senior);
  const passValue = (adult * 49.99) + (child * 20.99) + (senior * 24.99);
  // console.log(passValue);
  return passValue;
}

// calculateEntry(teste);

module.exports = { calculateEntry, countEntrants };
