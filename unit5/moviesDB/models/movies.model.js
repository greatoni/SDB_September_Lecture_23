const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    // Column for our document
    title: {
        type: String, //datatype
        required: true
    },
    genre: {
        type: String,
    },
    rating: {
        type: String,
        required: true, // default is false
    },
    length: {
        type: Number,
        required: true
    },
    releaseYear: {
        type: Number
    },
    owner_id: String
})

module.exports = mongoose.model('Movies', MovieSchema)