const Person = require("../models/Person");

async function findPersonBurritos() {
  const personBurritos = await Person.find({ favoriteFoods: "burritos" })
    .sort({
      name: 1,
    })
    .limit(2)
    .select({ name: 1, favoriteFoods: 1 });
  console.log(personBurritos);
}

module.exports = findPersonBurritos;
