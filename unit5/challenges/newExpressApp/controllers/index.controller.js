const router = require('express').Router();
const data = require('../data.json');



router.get('/', (req,res)=> {
    try {
        
        res.status(200).json({
            results: data,
            getTimeStamp: getTimeStamp
        })
    } catch (error) {
        res.status(500).json({
            error: err.message
        })
    }

})

router.get('/findOne/:id', (req,res)=> {
    try{
        let {id} = req.params
        let results = data.filter(i => i.id == id);
        if(results.length !== 0){
        res.status(200).json({
            results:results[0],
            getTimeStamp: getTimeStamp
        })
    } else {
        throw new Error("No Book Found")
    }
    } catch(error) {
        res.status(500).json({
            error: err.message
        })
    }

})

router.get('/query/', (req,res)=>{

    try{
    const {title} = req.query;
    
    let results = data.filter(i => i.title == title);
    if(results.length != 0)
    {
    res.status(200).json({
        results:results[0]
    })
    } else {
        throw new Error("Title not found!");
    }
    } catch {
        res.status(500).json({
            error: err.message
        })
    }
}) 

router.post('/newBook/', (req,res)=>{
    
    try{
    const {title,author} = req.query;
    
    if(title && author)
    {
        res.status(200).json({
        newBook:{
            title : title,
            author : author
        }
        })
    }
    else{
        throw new Error("MUST HAVE BOTH TITLE AND AUTHOR!!!!!")
    }

    } catch {
    res.status(500).json({
        error: err.message
    })
    } 

})

module.exports = router;