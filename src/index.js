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
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// Create a new authentication token
const jwt = require("jsonwebtoken");
const myFunction = async () => {
  // Created a JWT token with id
  // param(uniqueid,secretmessage,timeofexpire)
  const token = jwt.sign({ _id: "abc123" }, "thisisme", {
    expiresIn: "7 days",
  });
  console.log(token);

  // Verify the JWT token
  const data = jwt.verify(token, "thisisme");
  console.log(data);
};
myFunction();

// Example of hashed password

// const bcrypt = require("bcryptjs");
// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("red12345!", hashedPassword);
//   console.log(isMatch);
// };

// myFunction();
