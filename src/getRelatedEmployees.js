const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const conferManager = employees.some((element) => element.managers.some((value) => value === id));
  return conferManager;
}

function getRelatedEmployees(managerId) {
  const subWorkers = [];
  employees.forEach((element) => {
    const values = element.managers;
    if (values.includes(managerId)) {
      subWorkers.push(`${element.firstName} ${element.lastName}`);
    }
    // console.log(subWorkers);
  });

  try {
    if (!isManager(managerId)) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
  } catch (error) {
    throw error.message;
  }
  return subWorkers;
}

// getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8');

module.exports = { isManager, getRelatedEmployees };
