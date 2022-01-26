const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const searchAnimal = species.find((specie) => specie.name === animal);
  const animalsFound = searchAnimal.residents;
  // const animalsAge = animalsFound;
  const conferAge = animalsFound.every((number) => number.age > age);
  return conferAge;
}
getAnimalsOlderThan('penguins', 10);

module.exports = getAnimalsOlderThan;
