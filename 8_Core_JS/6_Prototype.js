let a = {
    name: "Meet",
}

console.log(a);

let b = {
    run: () => {
        console.log("Running");
    }
}

a.__proto__ = b;

b.__proto__ = {
    name : "Bruce"
}

// so here comes the prototype chain: 
// a + its protoype ---> b + its protoype ---> {} ----> ...... -----> null

a.run()
console.log(b.name);