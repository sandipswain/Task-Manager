const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

// It automatically converts incoming JSON to Objects
app.use(express.json());

// RESTAPI route

// Users
app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

// Sending Get Request to fetch all the users
app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {});
});

// Sending request to fetch a user dynamically using IDS
app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  // Param contents the id value of the URL
  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send();
    });
});

// Tasks

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// Sending a request to fetch all the tasks
app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((error) => {
      res.status(500).send();
    });
});

// Sending request to dynamically fetch a single task
app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then((task) => {
      if (!task) return res.status(404).send();
      res.send(task);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
