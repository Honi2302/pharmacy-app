const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  quantitySold: String,
  saleDate: Date,
  medicineName:String,
    saltName:String,
    MG:String,
    category:String,
    ExpireDate:String,
    MRP:String, 
    Rate:String
});

module.exports = mongoose.model('Sale', saleSchema);