const express = require("express");
const connectToMongo = require("./db");

const app = express();

app.get("/", (req, res) => {
  res.send("Helo dude");
});

app.listen(5000, () => {
  console.log(`Listening to port 5000`);
});

connectToMongo();

module.exports = app;
