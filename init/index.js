const mongoose = require("mongoose");
const initDB = require("./data");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

async function initializeDatabase() {
  await Listing.deleteMany({});
  initDB.data = initDB.data.map((obj) =>({...obj, owner:"6547db82122a26d23aaa2fd3"}));
  await Listing.insertMany(initDB.data);
  console.log("data was initialized");
}

initializeDatabase(); // Call the function to initialize the database
