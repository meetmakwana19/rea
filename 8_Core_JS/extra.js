let a = true;
let counter = 0

setTimeout(() => {
    a = false;
}, 2000);

// Q) How many times/ how long hello will get printed? 
/*
while(a){
    console.log("Hello ", counter++);
}
*/
// Answer) Infinite as in event loop this while loop is getting executed continuosly
// but the setTimeout's callback cant return back to the call stack 
// as the call stack is not yet empty and event loop's main thread is busy with the while loop
// main thread is stuck with while as there's no exit condition

// another scenario instead of while loop 
setInterval(() => {
    if(a){
        console.log(counter++);
    }
    // prints till 8 
    // but the cursor isn't stopped
    // the program hasn't exited
    // because the callback function has no exit condition
    // and the setInterval keeps it running for every 200ms!
}, 200);