// i is declared with var giving it a function-level scope---> means it is accessible throughout the function
// but here the code is not within any function so i gets global scope too!
for(var i=0; i<3; i++){
    // console.log("i is ", i);
    setTimeout(()=>{console.log(i)},0)
}
// using var causes all the callbacks to reference the same variable i with its final value of 3.
// and due to global scope, i is accessible even outside of the for loop condition.
console.log("i is --", i);



// i is decalred with let keyword giving it a block-level scope.--> confined to the for loop block
// so in each iteration of the for loop a new block is created with the corresponding i value.
// because each itiration of for loop has a block scope
// sing let creates a new variable i with a different value for each iteration of the loop.
for(let i=0; i<3; i++){
    setTimeout(()=>{console.log(i)},0)
}

(() => {
    let i=0;
    while (i<3) {
      setTimeout(() => console.log(i), 0);
      i++;
    }
})();