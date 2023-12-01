const express = require('express'); // being pulled from node_modules.
const app = express(); //simplifying the method call.
const PORT = 4000  //server port within localhost, using 'all caps' to indicate a general variable


const practiceController = require("./controllers/practice.controller")
const authController = require("./controllers/auth.controller")
const routeController = require("./controllers/route.controller")
const{ logTime } = require(`./utils`)


app.use(express.static(`${__dirname}/public`)) 
//IntroToExpress/public
console.log('pathway: ', __dirname);

// * Middleware
app.use(logTime);
app.use(express.urlencoded());
app.use(express.json())  //Provides us access to use JSON within our routes!
app.use(express.static(`${__dirname}/public`))


app.use('/practice', practiceController);
app.use('/todo', authController);
app.use('/routes', routeController)
/* 
    Any traffic coming in that has 'practice' after localhost:4000 will route to practice controller.js
    ex localhost:4000/practice
*/

// * CONTROLLER
app.listen(PORT, () =>{
    console.log(`server is running on port: ${PORT}`);
    //  Provides us with feedback that this is running!
})