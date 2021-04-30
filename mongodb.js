// Shorthand Syntax
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// MongoClient to connect to the specific server
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to te database");
    }
    // Its takes in a database name and gives back a database reference and connects to a specific database
    const db = client.db(databaseName);

    // db.collection("users")
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("check")
      .deleteOne({
        description: "Hey there",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
