const router = require('express').Router();

router.post('/register', (req, res) => {
console.log('in auth controller: ', req.datePosted);
console.log('body ' , req.body)


try {
    const { firstname, lastName, email, password } = req.body;
    res.status(200).send({
        fullName: `${firstname} ${lastName}`,
        email: email,
        password: password,
        date: req.datePosted,
    })
}
catch (err) {
    res.status(500).send(
        //<img src="https://http.cat/500" alt="status code 500"/>
)
    
}

})

module.exports = router;