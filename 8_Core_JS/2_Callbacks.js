const fs = require("fs")

// console.log(fs);

// async behaviour done as we used callback function() to response back to event loop from the WebAPI's readFile work
fs.readFile("./dummy.txt", function(error, data){
// fs.readFile("./invalid.txt", function(error, data){
    console.log("error : ", error);
    console.log("data : ", data.toString());
})

// in sync manner
const data = fs.readFileSync("dummy.txt")
console.log("******Synchronously running first : ", data.toString() );

// first async data comes to event loop and sends it to webAPI and then the response is sent back to event loop through callback queue
// sync data got printed first as event loop was free as async data was sent ot webAPI for processing for instantly event loop processes sync data instantly .
// event loop prints sync data first as it is busy in processing sync data even though asyn data is completed processing and waits in the callback queue

// sync processing with invalid file name for error printing
const data2 = fs.readFileSync("invalid.txt")
console.log("+++++++Synchronously running first  : ", data2.toString() );
// error will be thrown here 