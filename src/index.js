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

const User = require("./models/user");
const Task = require("./models/task");
const main = async () => {
  // For Task
  // const task = await Task.findById("609df3002eaa2322cc2e1043");
  // //Here we are trying to bring it from just being an I.D to being the entire profile
  // // It is gonna find the user who is associated with the task
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  // For User
  const user = await User.findById("609df1cd65375501f8b5699b");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
