const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: String,
    date: Date,
    details: String,
    resolved: Boolean,
    vehicle_id: {
        type: mongoose.Types.ObjectId,
        ref: "Vehicle"
    }

    // connection to Vehicle
});

module.exports = mongoose.model('Task', Task);

/* 
    - vehicle_id is using an objectID type as its data.
    - In this case, referring to another collection (vehicle)
*/