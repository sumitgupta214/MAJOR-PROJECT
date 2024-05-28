const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");

const MONGO_URL = "mongodb+srv://sumitgupta-sam:RTGwLQcqneWJdwzk@cluster0.lscqjqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.insertMany(initData.data);
  console.log("DATA SAVED");
};

initDB();
