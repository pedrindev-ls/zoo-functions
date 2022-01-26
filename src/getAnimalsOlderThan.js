const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const { residents } = species;
  console.log(residents);
  // residents.forEach((element) => {
  //   console.log(element);
  // });
}
getAnimalsOlderThan('penguins', 10);

module.exports = getAnimalsOlderThan;
