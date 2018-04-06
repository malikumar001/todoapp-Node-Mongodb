const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://127.0.0.1:27017/userDataa", (error, db) => {
  if (error) {
    return console.log("Unable to connect to the database");
  }
  console.log("Connected to the database.");
  
  db.collection("Users").findOneAndDelete({ _id: new ObjectID("5ac6c68f525780dbbee03ac4")}).then((result) => {
        console.log(result)
  }, (err) => {
        console.log('Something went wrong!')
  })


});
