const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// Allow a User to file upload
const multer = require("multer");

const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },
  // req->Request being made , file -> request about the file being uploaded , cb -> tells us when we are done uploading a file
  fileFilter(req, file, cb) {
    if (!file.originalname.match(".(doc|docx)$")) {
      return cb(new Error("Please upload a Word Docx"));
    }
    cb(undefined, true);
    // if something goes wrong
    // cb(new Error("File must be a PDF"));
    // // If all goes well
    // // undefined as 1st here states that everything went well
    // // true states that file is ready to be uploaded
    // cb(undefined, true);
    // // false states the file is rejected
    // cb(undefined, false);
  },
});

// A Endpoint where client will be able to upload files
// Here single(upload) is the keyname which the multer looks for

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  // We have to provide in this syntax so that express knows this function is designed to handle errors
  (error, req, res, next) => {
    res.status(400).send({
      error: error.message,
    });
  }
);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
