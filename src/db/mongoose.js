const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECT, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// 1st para: Name of the model , 2nd para: The argument to pass
