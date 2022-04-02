// This input is for the Mongo Shell where we use JavaScript - command: mongo in terminal
// 1. Make a Data Base
// command - use [name of the data base] will create or switch between the databases
// example: use animalShelter
// show dbs will show the show
// -check the db to find one or another value with the $or and check if $lte (less than or equal) 
// 2. Add an object to the Data Base
// -- one or many documents in the form of array
// db.[nameOfDataBase].insert ([{name: "Wayat", breed: "Golden", age: 14, catFriendly: false}, {name: "Tonya", breed: "Chihuahua", age: 17, catFriendly: true}]) 
// -- one document in the form of array
// db.dogs.insertOne({name: "Charlie", age: 3, breed: "corgi", catFriendly: true})

// 3. Show all the info in the db
// db.[nameOfDataBase].find();

// db.[nameOfDataBase].findOne() - will find only one document but a copy of the document and find() return a cursor(a reference to the result)


// 4. Update the Data Base
//  first we find base upon criteria example name and than we set with $set, we can do it with multiple objects
// db.[nameOfDataBase].updateOne({name: 'Charlie'}, {$set: {age: 4})

// update to more the one objects
//  db.[nameOfDataBase].updateMany({name: 'Charlie'}, {$set: {isAvailable: false})

// we are able to update multiple operators like $set and §currentDate

// 5. Delete the Data Base
// db.[nameOfDataBase].deleteOne({name: 'nameToDelete'})
// delete based on similar criteria
// db.[nameOfDataBase].deleteMany({available: 'true/false'})

// 6. Additional Mongo Operators
// we can select nested values 
// db.[nameOfDataBase].find({'value.nestedValue': contains})
// 6.1. Comparison Operators: 
// $eq (equal to)
// $gt (greater than)
// $gte (greater than or equal)
//  $in (in the array)
// $lt (less than)
// $lte  (less than or not equal)
// $ne (not equal to)
// $nin (none of it in)
// we can pass an object in the find() to check if they have a specific KV pair
// db.dogs.find({ $or: [{ 'personality.catFriendly': true, { age: { $lte: 2 } }] })