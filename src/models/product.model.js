const mongoose = require('mongoose')

const productSchema =  mongoose.Schema({
    price: Number,
    title: String,
    description: String,
    imgUrl: String, 
}, 
{timestamps : true}
);

module.exports =  mongoose.model('Product', productSchema)