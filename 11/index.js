const http = require("http")

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

    // getting list of all users at http://localhost:3000/users
    if(request.method === "GET" && paths[1] === "users" && paths.length === 2){
        response.write(JSON.stringify(users))
    }
    // getting a specific indexed user at http://localhost:3000/users/idx
    else if(request.method === "GET" && paths[1] === "users" && paths[2]){
        const idx = paths[2]
        const user = users[idx]

        if(user){
            response.write(JSON.stringify(user))
        }
        else{
            response.write("User not found")
        }
    }
    else if(request.method === "POST" && paths[1] === "users"){

        let data = ""
        // .on is event listener which will listen when 'data' packets are arrived
        // chunk is part of datapackets sent over the network
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
    // for random text in url
    else{
        response.write("Not found")
    }


    // need to end the server otherwise it'll keep loading due to nothing/many thing is getting sent in the response
    response.end()

    // use slice to delete
})

server.listen(3000, function(){
    console.log("Server listening on port 3000");
})