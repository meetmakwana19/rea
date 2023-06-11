## Database ?

- A structured collection of data 
- in organized way

Why ? 

1. Data management
2. Data integrity
3. Data ssecurity
4. Scalibity
5. Data analysis

## SQL ?

- Standard language for managing relational dbs.
- 2 main things involved :
  - Data modelling : creation of schemas
  - Data modifying : CRUD
- Egs:
  - MySQL
  - PostgreSQL : Updated form of MySQL
  - SQLite : Std form given in DJango, mobile n android applications. Simple n portable. Very lighweight
  - Oracle : Commercial

## NoSQL 

- Not Only SQL
- No tabular relations

### SQL vs NoSQL

1. Every NoSQL has diff query languages
2. SQL Scalability is vertically by increasing hardware like space and NoSQL can be horizantally scalable by first modifying DB.
3. SQL are ACID Compliant.

- SQL Table <-> MongoDB's `Collection`
- SQL Row <-> MongoDB's `Document` (basic unit of data storage which is a JSON like structure. Document can have multiple fields with values of various data types like array, documents, binary data, etc)
- SQL column <-> MongoDB's `key`

# V. Imp INterview Question 

## Q) SIze of one MongoDB Document ?

- 16 mb for one document (a row/JSON Object)... if it exceeds then divide it into two

- Extra : Research on mongoDB `_id`

### Mongo shell commands :

1. show collections
2. db.collection_name.insertOne({ name: "pikachu", trainer:"ash})
3. db.pokemon.find()


### Making Project 

1. npm init 
2. npm i mongodb express
3. touch server.js
4. touch config.js
5. Whatever starts with `$` in mongodb is called an operator