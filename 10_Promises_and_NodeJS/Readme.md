## Convertion of Callbacks to Promises

- `callbacks` are a common pattern used for handling asynchronous operations
- `Promises` handle asynchronous operations in a more readable and concise way.
  
1. `new Promise(function(res, rej)){ }` is the syntax to convert
2. res leads to **fulfilled state**
3. rej lead to **unfulfilled state/error**
4. Converting a callback function to a Promise involves wrapping the callback function in a new Promise object.
```
//path  is string and options is object or string
function readFile(path, options){
    const promise = new Promise(function(resolve, reject){
        fs.readFile(path, options, func(err, data){
            // if 1st arg of func will be === null means no err so rejection wont happen here in if condition
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
    return promise
}
```

4 false values
1. false
2. 0
3. undefined
4. null

---

1. module.exports is used to export methods of the js file