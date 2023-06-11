## Authentication :

Normal behaviour :
Login -> credentials -> yes/no approve

secured behaviour:
Login -> credentials -> hash(pw)+SALT -> store in DB

1. Created new `views/register.ejs`
2. Created new `auth.routes.js`
3. Adding the render routing for register in the `routes/views.js`
4. Renamed to `views.routes.js` and changed respectively the imports in the server.js
5. Similarly added login auth n routes 
6. -------------Protected route for add todo functionality :
7. Installed using `npm i jsonwebtoken`
8. Added `isAuthenticated()` in the `middlewares/index.js`
9.  Signing a JWT token in the login post route in the `auth.routes` and then sending that jwt token as access token through the frontend login.ejs
10. Getting that token from backend to frontend and setting it as local storage in the `login.ejs` when login is successful.
11. Implementing the workflow of isAuthenticated in the frontend of adding todo page where todo wont be added if user is not logged in.
12. `todo_add.ejs` uses that localstorage access_token and sends it via header . Then middleware checks its presence and based on response redirect is made