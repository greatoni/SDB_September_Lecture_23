const router = require('express').Router();
const db = require('../db.json');

// TODO GET ALL
/* 

*/

router.get("/", (req,res) => {
    try {
        
        res.status(200).json({
            results: db
        })
    } catch (error) {
        res.status(500).json({
            error: err.message
        })
    }
});

// TODO GET ONE

router.get('/findone/:id', (req,res) => {
    console.log(req.params);


    try{

        let {id} = req.params;
        let results = db.filter(i => i.id == id);

        console.log(results);

        res.status(200).json({
            results:results[0]
        })

    } catch(err)
    {
        error: err.message        
    }
})

router.get('/query/', (req,res) => {
    /* 
        -anything after the endpoint can be extracted
        ex:
            localhost:4000/routes/query/?firstname='john';
    */
    
        try {

            const {firstName, lastName} = req.query;

            if(firstName && lastName)
            {
                res.status(200).json({
                    results:{
                        first: firstName,
                        last: lastName,
                        full: `${firstName}, ${lastName}`
                    }

                })
            } else {
                throw new Error("Need to supply both First and Last names.")
            }
    
        }catch(err) {
            res.status(500).json({
                err: err.message
            })
        }
    })

router.get('*', (req,res) => {
    try {
        res.status(200).json({
            results: "wild card"
        })
    } catch (err) {
        res.status(500).json({
            error: err.message  
        })
    }
})



module.exports = router;