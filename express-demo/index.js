const express = require("express");
const app = express();

const nodemon = require("nodemon");

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

//app.get("/api/posts/:year/:month", (req, res) => {
//  res.send(req.params);
//});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));