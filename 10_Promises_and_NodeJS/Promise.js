let toyPromise = new Promise(function(resolve, reject) {
    // Imagine your friend goes to get the toy
    let toy = "awesome toy";
    let success = true;
    
    if (success) {
      // If your friend brings the toy successfully, the promise is resolved
      resolve(toy);
    } else {
      // If something goes wrong and your friend can't bring the toy, the promise is rejected
      reject("Sorry, no toy for you.");
    }
  });
  
  // Now you can do something else while waiting for the toy to arrive
  console.log("I'm doing something else...");
  
  // When the promise is resolved, you can get the toy and play with it
  toyPromise.then(function(toy) {
    console.log("Yay! I got a", toy);
  }).catch(function(error) {
    // If the promise is rejected, you can handle the error
    console.log("Oh no! ", error);
  });
  
  console.log("The last toy is here");