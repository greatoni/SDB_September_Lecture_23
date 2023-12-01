# GETTING STARTED
- Create a 'package.json'
    -initializes our project
- An index of the project
    - denotes required dependencies to run the project.
- Install our dependencies
- express: `npm i express`
- Create a `.gitignore` file
    - `/node_modules` within .gitignore
    -Tells the repo to ignore node modules when backing up to github.
    - Node_modules folder
    - Provides us accesss to any 'behind the scenes' code that helps run express and any dependency installed.
    -When we need to instal/reinstall our node_modules, we'll type in the terminal `npm install`
- Package-lock.json
 - locks project into required dependencies, helps with version control.

 ## CRUD
 - Create: POST
 - Read: GET
 - Update: PUT/PATCH
 - Delete: DELETE

 ## Postman
 - Set Methods
  - GET|POST|PUT|DELETE
  depending on route
  - Body
    - raw
    - json
    - make a json object.

## Preparing our server to handle JSONS!

in our `app.js` we need to have this line of code in our middleware.
```js
app.use(express.json()) 
```
- Provides acsess to json files throughout the routes!

## MVC
- Stands for Model View Controller
- Archetecture pattern that helps our Sparation of Concerns
- View:
    - Browser, postman, etc
     - Applcation that interfaces with the server
    - Controller:
     - Part of the server application that handles logic
    - Model:
     - Database Schematic

## Middleware
- A function that accesses the request and response.
- Has call stack
 - Request
 - Response
 - Next