const data = require('../data/zoo_data');

const counter = {
  adult: 0,
  child: 0,
  senior: 0,
};

function countEntrants(entrants) {
  counter.adult = 0;
  counter.child = 0;
  counter.senior = 0;
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

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  countEntrants(entrants);
  const { adult, child, senior } = counter;
  const passValue = (adult * 49.99) + (child * 20.99) + (senior * 24.99);
  return passValue;
}

module.exports = { calculateEntry, countEntrants };
