const fs = require("fs/promises")

fs.readFile("dummy.txt")
.then(function(data){
    console.log("****1st Promise");
    // console.log("data : ", data2);
    console.log("data : ", data.toString());

    return data.toString()
})
.then(function(data1){
    console.log("****Prev promise got resolved");
    console.log("****2nd Promise");

    dataOne = data1 
    console.log("dataOne -------: ", dataOne);
    return fs.readFile("random.txt")
})
.then(function(data2){
    console.log("****Prev promise got resolved");
    console.log("****3rd Promise");
    
    dataTwo = data2.toString()
    console.log("dataTwo -----: ", dataTwo);

    console.log("\nMerging dataOne + datTwo = ", dataOne + dataTwo);
})
.catch(function(error){
    console.log("error : ", error);
})