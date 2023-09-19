const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    Quantity:String,
    medicineName:String,
    saltName:String,
    MG:String,
    category:String,
    ExpireDate:String,
    MRP:String, 
    Rate:String
})

module.exports = mongoose.model("stocks", productSchema)