const fs = require("fs")

function reading(pathName, options){
    const promise = new Promise(function(resolve, reject){
        fs.readFile(pathName, options, function(err, data){
            // if 1st arg of func will be === null means no err so rejection wont happen here in if condition
            if(err){
                // reject with err
                reject(err)
            }
            // resolve with data
            resolve(data)
        })
    })
    return promise
}

function writing(){
    console.log("Writing function......async behaviour happening here hehe");
}
// module.exports = reading
module.exports = {
    reading,
    // writing
}