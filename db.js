const mongoose = require("mongoose");

function connectToMongo() {
  console.log("Connecting to DB........");
  mongoose.connect(
    // "mongodb+srv://neer:test123@cluster0.g1hdok3.mongodb.net/todoDB?retryWrites=true&w=majority",
    "mongodb://neer:test123@ac-wanagpb-shard-00-00.g1hdok3.mongodb.net:27017,ac-wanagpb-shard-00-01.g1hdok3.mongodb.net:27017,ac-wanagpb-shard-00-02.g1hdok3.mongodb.net:27017/todoDB?ssl=true&replicaSet=atlas-12ej8c-shard-0&authSource=admin&retryWrites=true&w=majority",

    // "mongodb://localhost:27017/todoDB",
    {
      useNewUrlParser: true,
    },
    (err) => {
      if (err) {
        console.log("Problem in connecting to the DB");
        console.log(err);
      } else {
        console.log("Connected to databse");
      }
    }
  );
}

module.exports = connectToMongo;
