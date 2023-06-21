# Javascript 

- JS runs on V8 engine. Each browser has their diff engines. Chromium engines has V8 engine
- JS is a scripting language executing line b line and not really compiling
- JS cannot access/read files on the system as it runs on the browser. Browser has to deal with all these for JS
- Each and everything in JS is by default treated as 'Object'
- JS has speciality is providing output to the input but not heavy computations like ML algos

## Javascript engine components 

```
1. JS source code ---> 
2. Parser ~~~~~~> (AST generated) ----->
3. Interpreter -----> Byte code --> CPU
4. JIT Optimizing Compiler ~~~> Optimized Byte code  --> CPU
```

1. **Parser** (with Tokeniser/lexical analyzer) : Parsing identifies which parts of the code are keywords, which parts are variable names, which parts are function names, which parts are operands, and so on
   1. **AST** (Abstract syntax tree) : Hierarchical tree 
2. **Interpreter** + (optional + **Profiler**) : generate bytecode (`Add a, [6]`), which is a somewhat human-readable set of instructions that is closer to machine code(`int31add1 rbx, 0x1` or `1010111001001`)
3. **JIT Optimizing Compiler** : CPU specific compiler is used the browser's enginer as we download different browsers based on our system.... The optimized code runs faster 
   1. in JS, if some code/function starts getting warm then JS compiles it and stores it with a version and the next time the saem code is encountered, the translation(parsing+interpreting) is skipped. If some code starts getting very hot and hotter then JIT compiler optimises it more as its getting used multiple times.
4. **Garbage collector**
5.  **Profiler** : Checks for repeating code and optimizes by pushing them to the compiler

------------Code runs !------------------

---

## NodeJS engine :

1. NodeJS Core Lib (Javascript)
2. NodeJS Bindings(C++)
3. Google V8 engine (C++)
4. libuv(C) - library of utilities.....Gives additional features in JS like using Web APIs, audio, video, etc. ALong with file /OS process manipulation. This isnt there in JS but is there in NodeJS
   1. NOdeJS has libuv But JS has Web APIs

---

## About Javascript :

1. JS is a 
   1. single threaded
   2. non blocking
   3. asynchronous
   4. concurrent language
2. Event loop Components 
   1. **Call stack** - 
      1. Things to execute next
      2. FILO basis
   2. **Event loop** - 
      1. Executes code
      2. Collects, processes events
      3. Single Processing thread pushing tasks from callback queue to the call stack to execute them
   3. **Callback queue/Task queue** - 
      1. FIFO basis
      2. Callback functions are placed here 
      3. Think of it as a waiting list upon which completion will go to the call stack  
   4. **Web APIs**
      1. Usefull to carry out async tasks like fetching data from API so that other work flow of the website doesnt break.
3. V8 engine(in chromium browsers) is the JS runtime which has 
   1. Call stack (holds the execution context) 
   2. A heap (used for memory allocatioon)
4. The `setTimeout()`, `fetch` requests, and `DOM` events are parts of the **Web APIs** of the web browser.
5. DOM, setTimeout, XMLhttpRequest dont exist in V8 engine's source code.

## How does JS works ?
or
## What is **Event loop** of JS?

#### Event loop : WebAPIS, Call stack, Callback queue

1. JS is a single threaded lang.
   1. "Main thread" is responsible
   2. only one line of code can be executed at any given time
2. `Workers/helpers` inside the libuv/webAPIs
   1. For eg in JS, Event loop sends a process request to WebAPIs 
   2. WebAPIs assign suitable task for a sutiable helper and assigns to it and then returns it back to the event loop
      1. For eg, in file reading, JS event loop will assign this task to the WebAPI and the WebAPI will assgn this work to some suitabl worker and after completion the work will be returned bak to the event loop
3. We can tell event loop to treat any specific line of code as async/synchronous
4. Async work is sent to the WebAPIs 
5. All JS code is dumped in `Call Stack`
```
1. Requests --> 2. Call stack --> 3.(If async operation then) Web APIS/libuv 
--> 4. (if NodeJS then) worker threads --> 5. Callback/task/event queue 
--> 6.Callback response from event loop back to the call stack. 
```
6. Event loop handles everything of JS but for async behavious it hands out some tasks to the WebAPIs.
7. Not all callbacks are associated with event loop like callbacks of setTImeout() sends response to the event loop but higher order funtions are more like handlers which doesnt deal with event loop 
```
setTimeout(function(){
    console.log("***Async here****");
}, 1)
```
`function()` is a callback function for the event loop  and behaves asynchronously.
- **Asynchronous callbacks** means 'ok your execution will be done afterwards, let others move ahead'. eg `setTimeout`
- higher order functions are synchronous which take functions as arguements 
8. Tick can be used in JS to break the event loop but need to be very cautious while doing this

---

- For `callback functions`, first parameter is usually error and 2nd parameter is data.
- If data is provided like `function(data)` withot error as 1st param then data will be treated as error param

---

- Javascript runtime : Browser's runtime evn or NodeJS runtime env.
- Javascipt's Web APIs include setTimeout, fetch, etc. 
- Browser provides us DOM to work with HTML 

---

## Async vs synchronous 

1. Sync is sequential and blocks other processes untill it is completed
2. Async hands it's work to other workers to achieve non-blocking behaviour. Example : Asynchronous callbacks like setTimeout().

# Promises

1. It is either **Resolved** or **Rejected**
2. `.then` is used to go into resolved state
   1. `function()` is used within `.then` as a handler and not callback
   2. `.then` is a resolved state as well as a new promise
3. Promises is a way to handle async behaviour in JS which has 2 states of Resolved and rejected.
   1. If accepted then it is solved
   2. If rejected then the error is handled according to the logic
4. To overcome the exhaustive nesting hell of callbacks, we use promises