## REST (Representational State Transfer)

#### Imp aspects of REST API:

1. **Resources**
   1. Obj/data accessed through a URL
   2. Each resource has a URI(Unique Resource Identifier)
2. **HTTP Methods**
   1. To perform action on resources
   2. GET, POST, PUT, DELETE
3. **Representation of resources**
   1. Resources in 
      1. XML
      2. JSON
      3. Plain text, etc
4. **Uniform interface** 
   1. Same interface to access all resources
   2. Like to keep uniform representation
5. **Stateless**
   1. Statefull means maintaining a session b/w client & server
   2. Stateless means server doesnt maintain any info about client
   3. Each request is a complete new request sent to the server

#### Few conditions for RESTFullness : 

1. Client-server architecture
2. Stateless communication
3. Uniform interface
4. Cacheability
   1. Responses from the server should be marked as cacheable or non-cacheable to improve performance and reduce server load.
5. Layered system
   1. The API can be built using multiple layers of servers, proxies, and gateways, with each layer responsible for a specific function. 
   2. This allows for greater scalability and flexibility.

## ExpressJS

- Popular framework of NodeJS
- Highly based on REST concepts

### Imp features :

1. Routing 
   1. Simple API to define routes based on HTTP Methods
2. Middleware
   1. Can handle authentication, logging, compression, etc
   2. Allows us to add functionalities to various stages of the request-response cycle of application
3. Template engine 
   1. Pug, EJS, Handlebars
   2. Allows us to create dynamic views which can be rendered on server and sent to the client
4. Error handling 
   1. Has a robust system for this
   2. Error handling middleware functions to handle various long types of errors
5. Modularity
   1. It is a modular framework
   2. Can breakdown the functions into small chunks to use here and there

---

### Making express app

1. npm init 
2. npm install express
3. Remove `^` to avoid auto updates of packages 
4. Created `/users` endpoint
5. Created `data.json` file


---

#### Extras 

1. A `Promise`
   1. Fulfill
      1. `.then` block which itself is a promise
   2. Reject