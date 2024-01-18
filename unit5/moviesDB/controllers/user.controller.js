const router = require('express').Router();
const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT;


const testingBcrypt = string => {
    let encrypt = bcrypt.hashSync(string, 10)
    console.log('encrypt: ', encrypt)
}

router.post('/signup', async(req,res) => {
    try{

        const user = new User({
            firstName: req.body.first ? req.body.first: "please update firstname",
            lastName: req.body.last ? req.body.last: "please update lastname",
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 13),
        })

        const newUser = await user.save();

        const token = jwt.sign({id: newUser._id}, SECRET, {expiresIn: 60 * 60 * 24}) 

        res.status(200).json({
            user: newUser,
            message:"Success! USER CREATED!!!!!!!!",
            token
        })
    }
    catch(err) {
        res.status(500).json({
            error: err.message
        })
    }

})

router.post('/login', async(req,res) => {
    try{

        // 1. Capture data provided by the user!
        const {email, password} = req.body;

        // 2. Check database to see if the email supplied exists.
        const user = await User.findOne({email: email});
        // * A mongoDB method

        //console.log(user);
        if(!user) throw new Error('Email or password does not match!')

        // 3. If the email exists, consider if the password matches.
        const passwordMatch = await bcrypt.compare(password, user.password);
        // true/false value
        // * compare(string, hashed value)
        if(!passwordMatch) throw new Error('Email or password does not match!!')

        // 4. After verification, provide a jwt
        const token = jwt.sign({id: user._id}, SECRET, {expiresIn: 60* 60 * 24})
        // 5. Respond!
        res.status(200).json({
            message: "Successful",
            user, token
        })
    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }
})

module.exports = router;
