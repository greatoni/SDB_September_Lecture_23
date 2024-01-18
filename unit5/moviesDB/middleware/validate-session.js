const jwt = require('jsonwebtoken')
const User = require('../models/user.model');

const validateSession = async (req,res,next) => {
    // Middleware still has access to the request, response and requires the next() function to move past it.
    // * Remember the timeLog() helper within the ToDo_List
    try {
    // 1. Take token provided by the request object,
    const token = req.headers.authorization;
    // 2. Check if token is valid,
    const decoded = await jwt.verify(token,process.env.JWT);
    console.log(decoded);
    // 3. Return response, if valid, generate a variable that hold the user's info.

    const user = await User.findById(decoded.id)
    if(!user){
        throw new Error(`User not found!!!!`)
    }
    req.user = user;

    return next();
    } catch (err) {
        res.json({message: err.message})
    }
}

module.exports = validateSession;