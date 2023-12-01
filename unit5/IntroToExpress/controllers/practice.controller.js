const router = require('express').Router(); // Creating a variable --> Import router engine from express

/* all possible routes for the user */
router.get('/hello-world', (req,res) => {
    /*
        - the pathway noted as a string
        - a CB function to handle the request and response
            - req, res
    */

    res.send('hello world'); //Browsers always try to GET a request by default.
})

router.post('/greeting', (res) => {
    res.send('good afternoon!)')
})

router.post('/json', (req,res) =>{
    console.log(req.body);

    const {name} = req.body;

    res.status(200).send(`Hello, ${name}`);
})

router.get('*', (req,res) => {
    /* 
        - "*": Accounts for a wildcard or anything that hasn't been defined.
        - Provide a clean response back to the user.
    */

    res.status(404).send(`<img src="https://http.cat/404" alt="status code 404"/>`)
})

module.exports = router