// This is the MongoDB Driver / ODM
const mongodb = require('mongodb')
const { MONGO_URI } = require('./config')

mongodb.MongoClient.connect(MONGO_URI, {})
.then(client => {
    console.log("MongoDB Connected ------", client.db("mongo_app").databaseName);
    // console.log("MongoDB Connected =========", client);

    db = client.db("mongo_app")
    return db.collections()
})
.then(collections => {
    console.log("---Existing collections--", collections);

    return db.collection("metahumans").insertOne({name: "Arthur Curry", alter_ego:"Aquaman"})
})
.then(insertedResponse => {
    console.log("--Inserted -> ", insertedResponse);

    return db.collections()
})
.then(collections => {
    console.log("--Existing collections-- ", collections);

    return db.collection("metahumans").findOne({name: "Arthur Curry"})
})
.then(caughtResponse => {
    console.log("Found : ", caughtResponse);

    return db.collection("metahumans").insertMany([
        {name: "Bruce Wayne", alter_ego:"Batman"},
        {name: "Jack Napier", alter_ego: "Joker", age: 50}
    ])
})
.then(insertedManyResponse => {
    console.log("---Inserted many --> ", insertedManyResponse);
    
    // return db.collection("metahumans").find()
    return db.collection("metahumans").find({}).toArray()
})
.then(findAllResponse => {
    console.log("---Found all response --> ", findAllResponse);

    return db.collection("metahumans").findOneAndUpdate( {name: "Bruce Wayne"}, {$set: {age: 38}})
})
.then(updatedRespone => {
    console.log("--Updated response : ", updatedRespone);

    return db.collection("metahumans").find({age: {$gt: 40}}).toArray()
})
.then(filteredResponse => {
    console.log("---Filtered response : ", filteredResponse);
})
.catch(error => {
    console.log("!! MongoDB COnnection Failed !!");
})