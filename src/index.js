const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// To register a new middleware function
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// Middleware for a maintenance mode

// app.use((req, res, next) => {
//   if (req.method === "GET")
//     res.status(503).send("Server is Under Maintenance ! Try Again Later");
// });

// It automatically converts incoming JSON to Objects
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Without middleware : new request -> run route handler
// Without middleware : new request -> do something -> run route handler

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
