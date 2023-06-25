# Design Patterns :

- Design patterns were popularized by the book "Design Patterns: Elements of Reusable Object-Oriented Software", published in 1994 by a group of four C++ engineers.
- The book explores the capabilities and pitfalls of object-oriented programming, and describes 23 useful patterns that you can implement to solve common programming problems.
- These patterns are not algorithms or specific implementations. They are more like **ideas, opinions, and abstractions** that can be useful in certain situations to solve a particular kind of problem.
- Specific implementation of the patterns may vary 

##### Types :

1. Creational - Deals with how objects are created.
   1. [Singleton](#singleton-Pattern)
   2. Factory Method
   3. Abstract Factory Method
   4. Builder
   5. Prototype
2. Structural - Deals with the assembly and control flow of logic into a larger structure.
   1. Adapter
   2. Decorator
   3. Facade 
   4. Proxy
3. Behavioral
   1. Chain of responsibiliy
   2. Iterator
   3. Observer

---

### Singleton Pattern {#singleton-Pattern}

1. Ensures that a class has only one immutable instance.
2. The singleton pattern consists of an object that can't be copied or modified. 
3. It's often useful when we want to have some immutable single point of truth for our application.

Existing problem with Example : 

- Lets say an application with multiple components interacting with the database. Without the Singleton pattern, the code might look like this: 
```javascript function
// userManagement.js

const { MongoClient } = require('mongodb');

class UserManagement {
  async registerUser(userData) {
    const client = new MongoClient('<database-connection-string>');
    const connection = await client.connect();
    // Save user data to the database using the connection
  }

  async loginUser(username, password) {
    const client = new MongoClient('<database-connection-string>');
    const connection = await client.connect();
    // Authenticate user using the connection
  }
}

module.exports = new UserManagement();
```
- Here 2 functions of `registerUser` & `loginUser` both are trying to access the DB by creating their instance using `MongoClient`. So 2 different objects will be created for 2 class instances.
- Each of these functions requires access to the database to perform their respective tasks. 

Issues:
- This leads to **'multiple connections to db'** problem.
- This can also lead to '**resource wastage**' due to multiple objects using different connections to connect to db via network so memory+network wastage.
- '**Inefficiency**' in concurrent requests from different objects on single db.
- '**Inconsistency**' when different objects have different connection configurations.

##### Solution : 

- By applying the 'Singleton design' pattern to manage the database connection, we can ensure that all these functions share the same instance of the database connection object. 
- This means that regardless of which component is making a request to the database, they will be using the same connection, preventing the creation of multiple connections.
```javascript function
const mongoose = require("mongoose");

let instance = null; // Create a variable to store the singleton instance

module.exports = () => {
  if (!instance) { // Check if the instance is already created
    // this connect() method takes 2 parameters: url string and options
    // this is a promise so will need to handle it
    mongoose.connect(process.env.MONGO_URI, {})
      .then((client) => {
        const { db } = client.connection;

        // console.log("Database connection established ! Database Name : ", client.connection.db.databaseName);
        console.log("Database connection established ! Database Name : ", db.databaseName);
      })
      .catch((error) => {
        console.log("Database connection failed and the error is : ", error);

        // to race shutdown the server programmatically with success response to systematically shut down the event loop of nodejs
        process.exit(0);
        // argument 0 indicates a successful termination of the process. Non-zero codes indicate abnormal termination
      });

    instance = {}; // Create the singleton instance
  }

  return instance; // Return the singleton instance
};

```

--- 

### Iterator Pattern : 

1. Used to traverse elements from a collection.
2. That collection can be any data structure like an array, object, set, tree, etc
3. Previously for example if an array needed to be iterated upon then for loop was used but as data structure changes the implementation for iteration also changed..
4. So this design pattern provides a generic paway of iterating.
5. **The iterator pattern provides a way to access the elements of an aggregate object without exposing its underlying representation.** 
6. Javscript examples : `for`, `forEach`, `for...of`, `for...in`, `map`, `reduce`, `filter`, and so on. 
7. Same as any traversing algorithm we code to **iterate** through more complex data structures like trees or graphs.
   
### Observer Pattern :

1. Observer design pattern is useful when you are interested in the state of an object and want to get notified whenever there is any change.
2. In observer pattern, the object that watch on the state of another object are called Observer and the object that is being watched is called Subject.
3. The observer pattern lets you define a subscription mechanism to notify multiple observers about any events that happen to the subject they’re observing.
4. Basically, it's like having an event listener on a given object, and when that object performs the action we're listening for, we do something.
5. Even plain old JavaScript event listeners can be thought of as observers.
```javascript function
// Get the button element by its ID
const myButton = document.getElementById('myButton');

// Define the event handler function
function handleClick() {
  console.log('Button clicked!');
}

// Add the event listener
myButton.addEventListener('click', handleClick);
```
In addition to the click event, there are many other types of events you can listen for, such as mouseover, keydown, submit, change, etc.
6. React's `useEffect` hook might be a good example here. What useEffect does is execute a given function at the moment we declare.
```javascript function
useEffect(() => { 
  console.log('The component has rendered') 
}, [variableToTrack])
```

### Factory Method Patter: 

1. Its like factory making things in bulk from one predefined template hehehe.
2. The Factory method pattern provides an interface for creating objects that can be modified after creation. 
3. The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.
4. This pattern is used a lot and can also be implemented in two different ways, via classes or factory functions (functions that return an object).
5. Example : Via Factory functions :
```javascript function
function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"
```

### Abstract Factory Pattern

1. Its an extra layer of abstraction over the previous patter of Factory design pattern.
2. The way it works is by presenting an 'abstract factory' the client interacts with. That abstract factory calls the corresponding 'concrete factory' given the corresponding logic. And that concrete factory is the one that returns the end object.
3. So this pattern allows user to interact with single abstract class but also use the exact class needed based on the user requirements.
4. Example :

```javascript function
// We have a class or "concrete factory" for each vehicle type
class Car {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
}

// And and abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car") // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck") // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle") // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }
```

### Builder Pattern 

1. The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.
2. The cool thing about this pattern is that we separate the 'creation of properties' and 'creation of methods' into different entities.
3. The aim to create more versatile and different object representations.
4. It is designed to provide a 'flexible solution' to various object creation problems in object-oriented programming.
5. So in other patterns the class templates will always have all the methods and properties already in it but here in this builder pattern we can spread out other things like methods to be optional and build it only when required.
```javascript function
### // We declare our object
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

// These functions take an object as parameter and add a method to them
const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`)
}

const addSpeechAbility = obj => {
    obj.saySmthg = () => console.log(`${obj.name} walks the walk and talks the talk!`)
}

// Finally we call the builder function passing the object as parameter
addFlyingAbility(bug1)
addSpeechAbility(bud1)

bug1.fly() // output: "Now Buggy McFly can fly!"
```

### Prototype Pattern :

1. The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods.
2. The concept is to copy an existing object rather than creating a new instance from scratch, something that may include costly operations. 
3. The existing object acts as a prototype and contains the state of the object. 
4. The newly copied object may change same properties only if required. 
5. Example : Javscript prototypical inheritance.
```javascript function
// We declare our prototype object with two methods
const enemy = {
    attack: () => console.log("Pim Pam Pum!"),
    flyAway: () => console.log("Flyyyy like an eagle!")
}

// We declare another object that will inherit from our prototype
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

// With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(bug1, enemy)

// With getPrototypeOf we read the prototype and confirm the previous has worked
console.log(Object.getPrototypeOf(bug1)) // { attack: [Function: attack], flyAway: [Function: flyAway] }

console.log(bug1.phrase) // Your debugger doesn't work with me!
console.log(bug1.attack()) // Pim Pam Pum!
console.log(bug1.flyAway()) // Flyyyy like an eagle!
```

### Adapter pattern :

1. The 'Adapter' allows two objects with incompatible interfaces to interact with each other.
2. Example :  Our application consults an API that returns XML and sends that information to another API to process that information. But the processing API expects JSON. We can't send the information as it's received since both interfaces are incompatible. We need to adapt it first. 😉
3. Can say it is like a middlware dealing with adaption logic.
   
### Decorator Pattern :

1. Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
2. Example : React `<ContextProvider>` wraps all the components in it to use the global context.

### Facade Pattern :

1. Facade means a face mask(a deceptive one hiding the true build behind it)
2. The Facade pattern provides a simplified interface to a library, a framework, or any other complex set of classes.
3. Example : `ReactJS` Library giving lots of things built-in.
4. Example : Javascript's `map`, `sort`, `reduce`, `filter` functions which work somewhat like the good old for loop.

### Proxy Pattern : 

1. The Proxy pattern provides a substitute or placeholder for another object.
2. Example : Middlwares of expressJS APIS......Middlewares are nothing more than pieces of code we can make execute before, in the middle, or after any request reaches our endpoints.
3. The idea is to control access to the original object, performing some kind of action before or after the request gets to the actual original object.

### Chain of Responsibility Pattern

1. Deals with connecting different components of the application pass on the request to its next one.
2. The Chain of Responsibility passes requests along a chain of handlers. 
3. Each handler decides either to process the request or to pass it to the next handler in the chain.
4. Example : Middlewares
5. Example : A typical front-end app that consumes an API :
   1. We have a function responsible for rendering a UI component.
   2. Once rendered, a another function makes a request to an API endpoint.
   3. If the endpoint response is as expected, the information is passed to another function that sorts the data in a given way and stores it in a variable.
   4. Once that variable stores the needed information, another function is responsible of rendering it in the UI.
6. Helps with code modularity and separation of concerns.