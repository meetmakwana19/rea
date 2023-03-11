const { error } = require("console");
const fs = require("fs")

fs.readFile("dummy.txt", function(error, data){
    console.log("Callback function returning back !!!!!!!!!");
    console.log("error : ", error);
    console.log("data : ", data.toString());
    
    const firstData = data
    // console.log("first data :", firstData.toString());

    fs.readFile("random.txt", function(error, data){
        console.log("error : ", error);
        console.log("data : ", data.toString());
        
        // console.log("merged data : ", firstData + data);
        const  secondData = data
        
        fs.readFile("other.txt", function(error, data){
            console.log("error : ", error);
            console.log("data : ", data.toString());
            console.log("merged data : ", firstData + secondData + data);
            console.log("THIS IS CALLBACK HELL");
        })
    })
})

// sync reading 

const data1 = fs.readFileSync("dummy.txt")
const data2 = fs.readFileSync("random.txt")
const data3 = fs.readFileSync("other.txt")

console.log("*******Final merged data synchrnously before async process returns back : ", data1 + data2 + data3);

console.log("****************");

// different way to do for async
let dataOne, dataTwo
// this will be undefined variables 

console.log("\nUndefined values : ", dataOne, dataTwo);

// For callback functions, first parameter is usually error and 2nd parameter is data.
// If data is provided like `function(data)` withot error as 1st param then data will be treated as error param
fs.readFile("dummy.txt", function(error, data){
    console.log("DataOne overriding");
    dataOne = data.toString(); 
})
fs.readFile("other.txt", function(error, data){
    console.log("DataTwo overriding");
    dataTwo = data.toString(); 
})

console.log("Differently merged data : ", dataOne + dataTwo);
console.log("Nan because before the async data comes out of the queue, 2 undefined objects are getting into arithmetic operation of + thats y Not a Number output");
