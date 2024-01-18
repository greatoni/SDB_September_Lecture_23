const router = require('express').Router();
const moviesModel = require('../models/movies.model');
const Movie = require('../models/movies.model');
const {errorResponse} = require('../utils')
const validateSession = require('../middleware/validate-session')

// TODO Post
router.post('/', validateSession, async(req,res) => {
    try{

        // 1. Pull data from the client (body)
        const {
            title, genre, rating, length, releaseYear
        } = req.body;
        // 2. Create new object using the model
        const movie = new Movie({
            title, genre, rating, length, releaseYear,
            owner_id: req.user._id
        })
        // 3. save object to db

        const newMovie = await movie.save();
        // 4. Respond

        res.status(200).json({
            message: `${newMovie.title} has been added!!!!`,
            newMovie
        })

    } catch (err) {
        errorResponse(res, err)
    }
})

//TODO GET All
router.get('/', validateSession, async (req, res) => {
    try {
        /* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Test the route within Postman
        
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
        
        Hint: parameters within method are optional
*/
    const all = await Movie.find()

    console.log(req.user);

    all.length > 0 ?
        res.status(200).json({
            result: all
        }) :
        res.status(404).json({
            result: "NO MOVIES!!"
        })

    } catch (err) {
        errorResponse(res, err)
    }
});

//TODO GET One
router.get('/findOne/:id', validateSession, async (req, res) => {
    try {
        /* 
!   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        - Test the route within Postman
        
        Hint: Consider login within user.controller.js
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
*/

        const {id} = req.params;

        const target = await Movie.findOne({_id: id})

        if (!target) throw new Error('Movie not found')

        res.status(201).json({
            results: target
        })
    } catch (err) {
        errorResponse(res, err)
    }
});

//TODO Get All by Genre
router.get('/findGenre/:genre', async (req, res) => {
    try {
        /* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider query casing within the endpoint.
            - hint: conditional w/ looping
        - Test the route within Postman
*/
    const {genre} = req.params;

    if(genre) {
        for (let i = 0; i < genre.length; i++) {
            if(i --- 0) {
                buildWord = genre[i].toUpperCase();
            } else if(genre[i-1] === "-") {
                buildWord += genre[i].toUpperCase();
            } else {
                buildWord += genre[i].toLowerCase();
            }
        }
    }

    const movies = await Movie.find({genre: genre});

    if (movies.length == 0) {
        res.status(404).json({
            results:`no movies found!`
        })
    }

    console.log(movies);

    res.status(202).json({
        results:movies
    })

    } catch (err) {
        errorResponse(res, err)
    }
});
// TODO PATCH/PUT ONE
router.patch('/:id', validateSession, async(req,res) => {
    try{

    const filter = {
        _id: req.params.id,
        owner_id: req.user._id
    }

    const info = req.body;

    // * .findOneAndUpdate(query,document,options)

    const returnOption = {new: true}; // option - returns the updated document.
    const updated = await Movie.findOneAndUpdate(filter, info, returnOption);

    res.status(200).json({
        result: updated
    });

    } catch (err) {
        errorResponse(res, err)

    }
})

// TODO DELETE ONE
router.delete('/:id', validateSession, async(req,res) => {
    try{
        const {id} = req.params;

        const deleteMovie = await Movie.deleteOne({_id: id, owner_id: req.user._id})
        console.log(deleteMovie)

        deleteMovie.deletedCount ?
        res.status(200).json({
            result: `removied!`
        }):
        res.status(404).json({
            result:"nomovied"
        })
    } catch (err) {
        errorResponse(res, err)
    }
})

module.exports = router;
