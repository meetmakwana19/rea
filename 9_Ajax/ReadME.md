# AJAX 

- Asynchronnous JS and XML/JSON
  - X stands for XML or JSON.
  - JSON is prefered as its lighter ans faster to write
- **Asynchronous** means non-blocking continous flow of running
  - But in synhronous code can be blocked for the processing of current work 
  - Like for example, a chef preparing food and customer waiting is shyncronous coz the events occur in sequence.
  - But in case of asynchrounous, mutiple chefs will be there to prevent the blocking and continously serve the requests and keep running the process.
- **XML** is similar to JSON like key-value pair coz of customizable tags activing as a key
- **JSON** is a format to exchange data between entities(client-client or server-client or client-server)

## URL :

- Uniform resource locator 
- Sections of URL :
  - `http` - protocol/scheme
  - `www.google.com` - domain name (which is linked to IP address of our server)
  - `8000` - port
  - `/path/index.html` - path to the file/resource
  - `?key=value1&key2=value2` - parameters or queries 
  - `#something` - anchor pointing to other sections of our own page
- Relative paths start with `./` and absolute paths start with slash `/`

## HTTP Request methods:

1. `CRUD` methods 
2. `CREATE` - Specifc resource ko target karke create kar rahe hain

## HTTP Response status codes

1. Informational responses (100 – 199)
2. Successful responses (200 – 299)
3. Redirection messages (300 – 399)
4. Client error responses (400 – 499) 
   1. Example : 404 when finding which doesnt exit(not found)
5. Server error responses (500 – 599)

### Converting JSON to string and then that string back to JSON object

```
const obj = { 
    name : "tony",
    alter_ego : "iron man",
}
undefined

console.log(obj)
{name: 'tony', alter_ego: 'iron man'}
undefined

console.log(typeof obj)
undefined

obj.toString()
'[object Object]'

obj
{name: 'tony', alter_ego: 'iron man'}

const strObj = JSON.stringify(obj)
undefined

strObj
'{"name":"tony","alter_ego":"iron man"}'

const objObj = JSON.parse(strObj)
undefined

objObj
{name: 'tony', alter_ego: 'iron man'}

console.log(objObj);
{name: 'tony', alter_ego: 'iron man'}
alter_ego
: 
"iron man"
name
: 
"tony"
[[Prototype]]
: 
Object
```