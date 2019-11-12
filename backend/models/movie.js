const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    movieid: {type: String, required: true},
    movieName: {type: String, required: true},
    cost: {type: Number, required: true},
    status: {type: String, required: true}
    
});

module.exports = mongoose.model('Movies', MovieSchema);