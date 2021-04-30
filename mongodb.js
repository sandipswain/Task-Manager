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

    // Updating Documents
    // Update One
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("608af3e473a1332bbc79b0c5"),
    //     },
    //     {
    //       // $set: {
    //       //   name: "Mike",
    //       // },

    //       $inc: {
    //         age: 3,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Update Many
    db.collection("check")
      .updateMany(
        {
          complted: false,
        },
        {
          $set: {
            complted: true,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
