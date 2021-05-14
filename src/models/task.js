const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
  // Setting User/Task relation via id
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // It allows to create relation from this filed to another model
    ref: "User",
  },
});

const tasks = mongoose.model("Tasks", taskSchema);

module.exports = tasks;
