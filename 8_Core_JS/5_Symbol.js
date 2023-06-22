const symbol1 = Symbol("This is desc")
const symbol2 = Symbol("This is desc")

console.log(symbol1); //Symbol(This is desc)
console.log(typeof symbol1); //Symbol(This is desc)
console.log(symbol1); //Symbol(This is desc)
console.log(typeof symbol1.toString()); //"Symbol(This is desc)""

console.log("symbol1 === symbol2 ? ", symbol1 === symbol2);

const person = {
    name: 'John',
    [symbol1]: "Kuch bhi"
};
const person2 = {
    name: 'John',
    [symbol1]: "Kuch bhi"
};
console.log(person);
console.log(person2);
console.log(person[symbol1] === person2[symbol1]);