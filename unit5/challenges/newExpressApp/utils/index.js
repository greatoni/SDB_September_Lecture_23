function getTimestamp(req,res,next)
{
    const date = new Date();
    const hour = date.getHours();
    const minute = date.gitMinutes();

    const time = `${hour}:${minute}`;

    req.timeStamp = time;

    console.log(req.timeStamp);
    next();
}

module.exports = {
    getTimestamp: getTimestamp,
}