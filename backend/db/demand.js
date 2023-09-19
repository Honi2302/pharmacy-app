const mongoose = require('mongoose');

const demandSchema = new mongoose.Schema({
  
    medicineName:String,
    category:String,
    discription:String

});

module.exports = mongoose.model('Demand', demandSchema);