function logTime(req,res,next) {
    //console.log(req);

    let date = new Date();
    req.datePosted = date.toLocaleString();

    console.log('datePosted: ', req.datePosted)
    next();
}

module.exports = {
    logTime: logTime,
}