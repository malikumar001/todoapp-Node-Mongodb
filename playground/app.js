const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://127.0.0.1:27017/userDataa", (error, db) => {
  if (error) {
    return console.log("Unable to connect to the database");
  }
  console.log("Connected to the database.");
  // db.collection('user').insertOne({
  //     name: 'Muhammad Umar Farooq',
  //     age: 18,
  //     location: 'Faisalabad'
  // }, (err, result) => {
  //     if (err) {
  //        return  console.log('Something went wrong!', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2))

  // });

  db.collection("Users").insertOne({
    name: 'Umar Farooq',
    age: 18,
    location: 'Faisalabad'
  }, (err, result) => {
        if (err) {
         return   console.log('Oops', err);
        }
console.log(result.ops)
  });
});
