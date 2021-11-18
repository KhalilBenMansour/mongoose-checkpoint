const Person = require("../models/Person");

async function findPeopleByCertainFood(food) {
  const personFF = await Person.findOne({ favoriteFoods: food });
  console.log(personFF);
}
module.exports = findPeopleByCertainFood;
