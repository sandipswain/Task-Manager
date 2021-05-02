const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// Defining a model
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },

  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },
});

// Creating an instance of the model
// const me = new User({
//   name: "   Sandip   ",
//   email: "ABC12@GMAIL.COM   ",
//   password: "Pahone123",
// });

// // Saving the model . It saves the data that we store.
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// 1st para: Name of the model , 2nd para: The argument to pass
const tasks = mongoose.model("Tasks", {
  description: {
    type: String,
    required: true,
    trim: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new tasks({
  description: "   Eat my lunch  ",
  // completed: true,
});

// const task2 = new tasks({
//   description: "Cook Food",
//   completed: false,
// });

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log("There is an error while saving your file", error);
  });

// task2
//   .save()
//   .then(() => {
//     console.log("Saved Successfully!");
//   })
//   .catch((error) => {
//     console.log("There is an error while saving your file", error);
//   });
