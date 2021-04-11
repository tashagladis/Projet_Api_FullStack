const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const orderSchema =  mongoose.Schema({
    amountNumber: Number,
    totalAmount: Number,
    user:{ type: Schema.Types.ObjectId, ref: "User" },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    statut: {
        type: String,
        enum : ['En cours','Terminé','Livré' ],
        default: 'En cours'
    }

    
}, 
{timestamps : true}
);

module.exports =  mongoose.model('Order', orderSchema)

