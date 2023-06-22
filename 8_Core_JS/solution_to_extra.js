// Q) Print till 8 and then exit the program : 

let a = true;
let c = 0;

// defining an identifier for the setInterval so that later we can clear it out
// setInterval;s definition has () so it'll get called no matter if it is declared using let keyword.
let id = setInterval(() => {
    if(a){
        console.log(c++);
    }
}, 200);

setTimeout(() => {
    clearInterval(id)
}, 2000)
