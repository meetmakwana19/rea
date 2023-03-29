const http = require("http"); //built-in module
const { type } = require("os");

let users = [
    {
        name: "Bruce",
        age: 25
    },
    {
        name: "Tony",
        age: 30
    },
    {
        name: "Steve",
        age: 70
    }
]

// The createServer function takes a callback as an argument. This callback takes Request and Response objects as arguments for further processing
const server = http.createServer(function(request, response){
    // response.write("Hello from server")

    // if sending only users then error will come from js
    // response.write(users)

    // so stringify
    // response.write(JSON.stringify(users))

    // creating an array of path by splitting it from /
    const paths = request.url.split("/")

    console.log("Paths---", paths);
    console.log("Methods---", request.method);

    // -------------------------------------
    // getting list of all users at http://localhost:3000/users
    if(request.method === "GET" && paths[1] === "users" && paths.length === 2){
        response.write(JSON.stringify(users))
    }
    // ----------------------------------------
    // getting a specific indexed user at http://localhost:3000/users/idx
    else if(request.method === "GET" && paths[1] === "users" && paths[2]){
        const idx = paths[2]
        const user = users[idx]

        if(user){
            response.write(JSON.stringify(user))
        }
        else{
            response.write("Error ! User not found")
        }
    }
    // -------------------------------------
    // Posting a user at http://localhost:3000/users
    else if(request.method === "POST" && paths[1] === "users"){

        let data = ""
        // .on is event listener which will listen when 'data' packets are arrived
        // chunk is part of datapackets sent over the network
        // collecting the data receieved on request
        request.on("data", function(chunk){
            data += chunk 
        })

        request.on("end", function(){
            const obj = JSON.parse(data.toString())
            console.log("JSON parsed data : ",obj);
            console.log(typeof(obj));
            console.log("String data response :", data);
            console.log(typeof(data));

            // creating new user
            users.push(obj)
        })

        // resource created successfully
        response.statusCode = 201 
        response.write("User resource created")
    }
    // -----------------------------------
    // Update a user using PUT
    else if(request.method === "PUT" && paths[1] === "users" && paths[2]){

        let idx = paths[2]

        // check if the param is a number type to check via index
        if(isNaN(idx)){
            // this will return true when string will be there in param as it is not Not a Number
            const id = users.findIndex(function(element){
                return element.name === paths[2]
            })
            // updating global idx with the found one
            idx = id;
        }

        const user = users[idx]
        // console.log("user from name is ", user);

        if(user){
            let data = ""
            let global_obj = ""
            request.on("data", function(chunk){
                data += chunk
            })
            request.on("end", function(){
                const obj = JSON.parse(data.toString())

                // **updating that index user with the received obj
                // users[idx] = obj;

                // -----------if need to add new properties in the obj for the update part
                // using SPREAD OPERATORE
                users[idx] = {
                    ...users[idx], 
                    ...obj
                }

                console.log("After update:",users);

                // global_obj = obj;
                // console.log("global is ", JSON.stringify(global_obj));
            })
            response.write(JSON.stringify(users[idx]) + " is updated");    
            // response.write(JSON.stringify(users[idx]) + "updated to -----> " + JSON.stringify(global_obj)); 
            
            // resource updated successfully
            response.statusCode = 200
            response.write("\nUser updated successfully")
        }
        else{
            response.write("Error ! User not found for update")
        }
    }
    // -----------------------------------
    // PATCH : Update portion of the user 
    else if(request.method === "PATCH" && paths[1] === "users" && paths[2]){
        let idx = paths[2]

        // check if the param is a number type to check via index
        if(isNaN(idx)){
            // this will return true when string will be there in param as it is not Not a Number
            const id = users.findIndex(function(element){
                return element.name === paths[2]
            })
            // updating global idx with the found one
            idx = id;
        }
        const user = users[idx]

        if(user){
            let data = ""
            // let global_obj = ""
            request.on("data", function(chunk){
                data += chunk
            })
            request.on("end", function(){
                const obj = JSON.parse(data.toString())
                console.log("obj is ", obj);

                // updating only the required portion
                if(obj.name){
                    users[idx].name = obj.name
                }
                else if(obj.age){
                    users[idx].age = obj.age
                }
            })
            response.write(JSON.stringify(users[idx]) + " is updated");    
            
            // resource updated successfully
            response.statusCode = 200
            response.write("\nUser updated successfully")
        }
        else{
            response.write("Error ! User not found for update")
        }
    }
        
    // -----------------------------------
    // DELETE user using idx
    else if(request.method === "DELETE" && paths[1] === "users" && paths[2]){
        let idx = paths[2]
        
        // --------delete by name instead of idx
        if(isNaN(idx)){
            const name = paths[2]
            
            idx = users.findIndex(element => element.name.toLowerCase() === name.toLowerCase())
            console.log("idx is -", idx);
        }

        const user = users[idx]
        if(user){
            // deleting the indexed user with splice
            users.splice(idx, 1)

            response.write(JSON.stringify(user) + " User deleted successfully")
        }
        else{
            response.write("Error ! User doesnt exist to delete")
        }
    }
    // for random text in url
    else{
        response.write("Not found")
    }


    // need to end the server otherwise it'll keep loading due to nothing/many thing is getting sent in the response
    response.end()

    // use slice to delete
})

// The "server.listen" takes a port number to run on and a callback function to handle it.
server.listen(3000, function(){
    console.log("Server listening on port 3000");
})