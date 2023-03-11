console.log("------Synchronous behaviour : ");
console.log("Hello world");
console.log("Hello world 1");
console.log("Hello world 2");

console.log("------Asynchronous behaviour : ");
setTimeout(function(){
    console.log("***Async here****");
}, 1)
console.log("Hello world 2");