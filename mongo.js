
// Inserting Data in MongoDB
// insert Single Document
use prasadkart
db.items.insertOne({ Name: 'Galaxy F41', Price: 15499, Rating: 4.5, Qty: 233, Sold: 103 })

// insert Multiple Document
db.items.insertMany([{ Name: 'Galaxy F41', Price: 15499, Rating: 4.5, Qty: 233, Sold: 103 },
{ Name: 'Samsung Galaxy M31s', Price: 19499, Rating: 4.7, Qty: 419, Sold: 200 },
 { Name: 'OPPO A15s', Price: 11490, Rating: 4.2, Qty: 133, Sold: 63 },
 {Name:'Redmi 8A',Price:6999,Rating:4.1,Qty:231,Sold:79},
 {Name:'Apple',Price:169999,Rating:2.1,Qty:98,Sold:10}])

//  Searching for data in MongoDB

// this query will return all the objects with Rating equal to 4.5
use prasadkart
db.items.find({Rating:4.5})

// this query will return all the objects with Rating gteatherthan or equal to 4.1
db.items.find({Rating:{$gte:4.1}})

// this query will return all the objects with Rating gteatherthan  4.1
db.items.find({Rating:{$gt:4.1}})

// And Operator

// this query will return all the objects with Rating gteatherthan  4.1 And rice greatherthan 16000
db.items.find({Rating:{$gt:4.1},Price:{$gt:16000}})

// this query will return all the objects with Rating Lessthan or equal to 3.1, And Price Lessthan 170000
db.items.find({Rating:{$lt:3.1},Price:{$lt:170000}})

// OR operator
db.items.find({$or:[{Rating:{$gt:4.2}},{Price:{$lt:15499}}]})

// Show Only Rating & Qty
db.items.find({Rating:{$gt:4.1}},{Rating:1})
db.items.find({Rating:{$gt:4.1}},{Rating:1,Qty:1})


db.items.find({Price:16999})
db.items.insertMany([{Name:'Apple',Price:16999,Rating:2.1,Qty:98,Sold:10},
{Name:'Apple',Price:16999,Rating:2.1,Qty:98,Sold:10},
{Name:'Apple',Price:16999,Rating:2.1,Qty:98,Sold:10},
{Name:'Apple',Price:16999,Rating:2.1,Qty:98,Sold:10}])

// Deleting items form MongoDB
db.items.deleteOne({Price:16999})
// deleteOne will delete the matching document entry
//  and will delete the first entry in case of multi document match
db.items.find({Price:16999})

// deleteMany will delete the matching document entry
//  and will delete the all document with Same entry in case of multi document match
db.items.deleteMany({Price:16999})

// Updating data from the Mongo Database

db.items.updateOne({Name:'OPPO A15s'},{$set:{Price:5}})
db.items.insertMany([{Name:'Samsung Galaxy M31',Price:16499,Rating:5.0},{Name:'Samsung Galaxy M31',Price:16499,Rating:5.0},
{Name:'Samsung Galaxy M31',Price:16499,Rating:5.0},{Name:'Samsung Galaxy M31',Price:16499,Rating:5.0},
{Name:'Samsung Galaxy M31',Price:16499,Rating:5.0},{Name:'Samsung Galaxy M31',Price:16499,Rating:5.0}])
db.items.updateMany({Name:'Samsung Galaxy M31'},{$set:{Price:19}})
db.items.updateMany({Name:'Samsung Galaxy M31'},{$set:{Rating:2.1}})
db.items.updateMany({Name:'Samsung Galaxy M31'},{$set:{Rating:4.5,Price:16999}})