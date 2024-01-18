const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    // Column for our document
    firstName: {
        type: String, //datatype
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true, // default is false
        unique: true //Dupes will throw an error response.
    },
    password: {
        type: String,
    },
})

module.exports = mongoose.model('User', UserSchema)