const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://127.0.0.1:27017/userDataa", (error, db) => {
  if (error) {
    return console.log("Unable to connect to the database");
  }
  console.log("Connected to the database.");
  
  db.collection("Users").find().toArray().then((result) => {
        console.log(JSON.stringify(result, undefined, 3))
  }, (err) => {
        console.log('Something went wrong!')
  })


});
