1. Making logger in the `server.js`
2. Middlewares are always called sequentially in expressJS
3. So made 1st middleware for express app for logger and tried passing request by adding extra field to the request object and consumed it in the home route of view.
4. Added PUT call through views/todo.ejs form
5. Added `npm install --save express-validator`
6. Updated todoRouter.post() and used custom express-validator
7. Added form in a new todo_add.ejs view 