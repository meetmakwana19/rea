const fsPromises = require("./1_Callback_to_promise")

fsPromises.reading("./dummy.txt", )
.then(function(data){
    // console.log("Promised resolved : ", data.toString());

    // no need to use toString() if appending string "" with the data, no need of options
    console.log("Promised resolved : " + data);
    
    console.log("Promised resolved : ", data);

    // this will print buffer if "utf8" options is defined
    // console.log(data);
})
.catch(function(err){
    console.log("Error occured : ", err);
})

// async behaviour happened here 
fsPromises.writing()
