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

router.get('/:id', (req,res) => {
    console.log(req.params);


    try{

        let {id} = req.params;
        let results = db.filter(i = i.id == id);

        console.log(results);

        res.status(200).json({
            results:results[0]
        })

    } catch(error)
    {
        error: err.message        
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