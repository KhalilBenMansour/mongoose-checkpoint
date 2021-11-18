const Person = require("../models/Person");

function createMany() {
  let arrayOfPeople = [
    {
      name: "mohamed",
      age: 22,
      favoriteFoods: ["Fettuccine Alfredo", "Sushi", "burritos"],
    },
    {
      name: "karim",
      age: 30,
      favoriteFoods: ["Pasta", "burritos", "French Fries"],
    },
  ];
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.log(err);
    return console.log(data);
  });
}
module.exports = createMany;
