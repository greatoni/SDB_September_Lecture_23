const express = require('express')
const index = express();
const PORT = 4000;


const{ logTime, getTimestamp } = require(`./utils`) 
const indexController = require("./controllers/index.controller")

index.use(express.static(`${__dirname}/public`))

// * Middleware
index.use(express.json())
index.use(getTimestamp);
index.use(express.urlencoded());
index.use(express.static(`${__dirname}/public`))

index.use('/getData', indexController);



index.listen(PORT, () =>{
    console.log(`server is running on port: ${PORT}`);
    //  Provides us with feedback that this is running!
})