//  setting up Mongoose:

require("dotenv").config();
const connectDB = require("./routes/connectdb");

const createPerson = require("./routes/createOne");
const createMany = require("./routes/createMany");
const findPeopleByName = require("./routes/findByName");
const findPeopleByCertainFood = require("./routes/findByFood");
const findPersonById = require("./routes/findById");
const updatePerson = require("./routes/updatePErson");
const updateAge = require("./routes/updateAGe");
const deletePerson = require("./routes/removeOne");
const removeManyPeople = require("./routes/removeMany");
const findPersonBurritos = require("./routes/querySearch");

connectDB();

// create and save person to our database mongodb

createPerson();

// Create Many Records with model.create()

createMany();

// Find all the people having a given name

findPeopleByName("khalil");

// Find just one person which has a certain food

findPeopleByCertainFood("Sushi");

// Find the (only!!) person having a given _id

findPersonById("619563afba3d4509099a3e20");

// Perform Classic Updates by Running Find, Edit, then Save

updatePerson("61965ae5e4924b47e62e85b1");

// Perform New Updates on a Document Using model.findOneAndUpdate()

updateAge("Meeva");

// Delete One Document Using model.findByIdAndRemove

deletePerson("619563afba3d4509099a3e20");

// Delete Many Documents

removeManyPeople();

// Chain Search Query Helpers to Narrow Search Results

findPersonBurritos();
