const Person = require("../models/Person");

async function createPerson() {
  var newPerson = new Person({
    name: "crazy",
    age: 27,
    favoriteFoods: ["Taco", "Hamburger", "Hot dog"],
  });
  try {
    const result = await newPerson.save();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = createPerson;
