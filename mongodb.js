// CRUD create read update delete

const mongodb = require("mongodb");

//Provides the function necessary to connect to the database so that we can perform CRUD operations
const MongoClinet = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// MongoClient to connect to the specific server
MongoClinet.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to te database");
    }
    // Its takes in a database name and gives back a database reference and connects to a specific database
    const db = client.db(databaseName);

    // Inserting one document to the database
    db.collection("users").insertOne({
      name: "Sandip",
      age: 27,
    });
  }
);
