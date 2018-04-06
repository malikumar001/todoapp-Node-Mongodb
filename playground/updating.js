const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://127.0.0.1:27017/userDataa", (error, db) => {
  if (error) {
    return console.log("Unable to connect to the database");
  }
  console.log("Connected to the database.");

  db
    .collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5ac6c68c525780dbbee03ac0") },
      {
        $set: {
          name: "Haider"
        },
        $inc: {
          age: 5
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(
      result => {
        console.log(result);
      },
      err => {
        console.log("Something went wrong!");
      }
    );
});
