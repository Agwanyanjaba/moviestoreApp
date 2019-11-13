const mongoose = require('mongoose');

const moviesupplier = ({
    supplierID: {type: String, required: true},
    movieID: {type: String, required: true},
    suplierPrice: {type: Number, required: true}
});

module.exports = mongoose.model('Supplies',moviesupplier);