# EJS 

1. Simple and flexible syntax to create dynamic HTML content
2. Can write JS within the HTML itsel using `<% %>`, `<%= %>` to print.

### Project steps :
##### Basic syntax 

- Basic syntax - `<% some code %>`
- Variable and value - `<%= varName %>`
- String - `<%= "abcdefg" %>`
- Importing - `<%- include("path/file") %>`
- Components will be called **partials** in EJS.

 
1. npm install ejs
2. Mounting view engine to get extra capability of using EJS. Setting the view engine of express app to ejs (by default it is HTML) in server.js
3. Created views folder and express by default understands views folder for frontend content
   1. Pages with `.ejs` extension
4. Created `views.js` in the routes/ folder

--- 

reduce(acccumulator, current)

using filter to filter out the delete objs