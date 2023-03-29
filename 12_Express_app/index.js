const express = require("express")
const fs = require("fs/promises")
// const fs = require("fs") //this has callbacks and not promises

// server application which is the main thing
const app = express()

// extra functions
function readAllData(){
    return fs.readFile("data.json", "utf-8")
    .then(function(data){
        // return JSON.parse(data.toString())
        return JSON.parse(data)
    })
}

// ******************MIDDLEWARE************** 
app.use(express.json()) //this parses every request to JSON

// ******************ROUTES************** 

// --------GET 
app.get("/users", function(req, res){
    return readAllData()
    .then(function(data){
        return res.send(data)
    } )
    // res.send("Hello from Express server !")
})

// --------POST 
app.post("/users", function(req, res){
    const newUser = req.body

    console.log("new user -> ", newUser);

    readAllData()
    .then(function(data){
        // data will be from the data.json
        // so push the newUser into that
        data.push(newUser)
        
        // and now write that whole thing to the file
        return fs.writeFile("data.json", JSON.stringify(newUser)) //returning this essential for as .then is itself is a promise so for the next block need to return .... It is usefull to chain this promise of writeFile to the outer chain of .then blocks
    })
    .then(function(){
        res.send("User created successfully")
    })
    .catch(function(err){
        res.send("Error ! User not created.")
    })
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})