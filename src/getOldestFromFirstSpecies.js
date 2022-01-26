const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const worker = employees.find((element) => element.id === id);
  const workerFound = worker;
  const animal = workerFound.responsibleFor[0];
  const findAnimal = species.find((element) => element.id === animal);
  const animalFound = findAnimal.residents;
  const ordenatedAnimals = animalFound.sort((a, b) => b.age - a.age);
  const oldestAnimal = ordenatedAnimals[0];
  const values = Object.values(oldestAnimal);
  return values;
}

module.exports = getOldestFromFirstSpecies;
