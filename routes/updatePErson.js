const findPersonById = require("./findById");

async function updatePerson(id) {
  let personUpdated = await findPersonById(id);
  if (!personUpdated) {
    return console.log("Person not found !");
  }
  personUpdated.favoriteFoods.push("hamburger");
  const result = await personUpdated.save();
  console.log(result);
}

module.exports = updatePerson;
