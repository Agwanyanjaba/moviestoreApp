const mongoose =  require('mongoose');

const supplierShema = mongoose.Schema({
    supplierID: {type: String, required: true},
    supplierName: {type: String, required: true}
});

exports = mongoose.model('Supplier', supplierShema);