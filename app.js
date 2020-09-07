const express = require("express");
const todoRoutes = require("./routes/todo.routes");
const app = express();
const mongodb = require("./mongodb/mongodb.connect");

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

mongodb.connect();

app.get("/", (req, res) => {
  res.send("Hola Mundo!!!!");
});

module.exports = app;
