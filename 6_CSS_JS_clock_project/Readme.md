#### CSS Positions :

- Reference point of `relative` is the HTML doc
- Reference point of `absolute` is the parent div.
- `sticky` sticks to the position mentioned
- offset means a ref point from where we may want to start 
  - `tranform-origin` changes offset otherwise bydefault offset is changed via y axiss

####  Align-items :

- Only works with flex


####  transform :

- Changing the presentation of the element

---

## Javascipt :

1. Untyped language
   1. means can change the datatype of a declared variable anytime unlike  C/C++
2. `var` defined variables are globally accessible
3. `let` defined variables has only limited scope within it's parent method 
```
function main1(){
    let abc = 123
    if (true){
        let abc = 456
        console.log(abc)
    }
    console.log(abc)
}

function main1(){
    var abc = 123
    if (true){
        var abc = 456
        console.log(abc)
    }
    console.log(abc)
}
function main1(){
    let abc = 123
    if (true){
        abc = 456
        console.log(abc)
    }
    console.log(abc)
}
```
4. `const` is as good as let but cant oveerride it
5. Using `.reduce()` function to play with array of objs to return a smaller single value instead of complex arr
6. Arrays are mutable and they are always call by reference while making their copies

- `===` checks object type too for comparison

```
arr.forEach(function(element){
    console.log(element)
})

arr.map(function(element, index){
    console.log(`element: ${element}, index: ${index}`)
})

let sum=0
arr.map(function(curr){
    sum = sum + curr
})

const sumValue = arr.reduce(function(accumulator, current){
    console.log(accumulator, current)
    return accumulator + current
}, 0)
console.log(sumValue)
```