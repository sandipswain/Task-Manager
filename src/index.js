const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Without middleware : new request -> run route handler
// Without middleware : new request -> do something -> run route handler

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// Privating Data Pratice

const pet = {
  name: "Meow",
};

pet.toJSON = function () {
  console.log(this);
  return this;
};

console.log(JSON.stringify(pet));
