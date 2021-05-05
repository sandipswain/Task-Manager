const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// It automatically converts incoming JSON to Objects
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// RESTAPI route

//*************************/ Users \****************************\\

// **************************Tasks**************************\\

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
