/* eslint-disable complexity */
const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const Worked = Object.entries(hours);
const daysWorked = Object.keys(hours);
const animals = [];
species.forEach((element) => {
  animals.push(element.name);
});

let schedule = {};

const fullSchedule = (work) => work.reduce((acc, value) => {
  if (value[0] === 'Monday') {
    schedule[value[0]] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    schedule[value[0]] = {
      officeHour: `Open from ${value[1].open}am until ${value[1].close}pm`,
      exhibition: species
        .filter((specie) => specie.availability.includes(value[0]))
        .map((element) => `${element.name}`),
    };
  }
  return acc;
}, 0);

const normalDays = (day) => {
  schedule[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species
      .filter((specie) => specie.availability.includes(day))
      .map((element) => `${element.name}`),
  };
};

const mondaySchedule = (monday) => {
  schedule[monday] = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
};

const findAnimal = (animal) => {
  species.forEach((element) => {
    if (element.name === animal) {
      schedule = element.availability;
    }
  });
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    schedule = {};
    mondaySchedule(scheduleTarget);
  } else if (daysWorked.includes(scheduleTarget)) {
    schedule = {};
    normalDays(scheduleTarget);
  } else if (animals.includes(scheduleTarget)) {
    schedule = [];
    findAnimal(scheduleTarget);
  } else {
    schedule = {};
    fullSchedule(Worked);
  }
  return schedule;
}

getSchedule('Tuesday');

module.exports = getSchedule;
