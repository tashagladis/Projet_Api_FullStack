const Order = require("../models/order.model");
const ProductTest = require("../models/order.model");
const Product = require("../models/product.model")
const mongoose = require('mongoose')

exports.createOrder = (req, res) => {
    
        const order = new Order({
          amountNumber: req.body.amountNumber,
          totalAmount: req.body.totalAmount,
          products: req.body.products,
          user: req.body.user
        });
       
      
        order.save().then(data => {
          res.send({
          created : true,
          data: data
          })
      }).catch(err => {
          res.status(500).send({
              massage: err.message || "assign failed"
          })
      });
    
}



exports.getOneOrder = (req, res) => {
  Order.
  findById(req.params.id).
  populate('products').
  populate('user')
  .then((data) => {
    if(!data){
        return res.status(404).send({
            message: `order not found with id ${req.params.id}`
        })
    }
    res.send(data);

}).catch((err) => {
        return res.status(404).send({
            message: err.message
        })
})
}

exports.getOrderForUser = (req, res) => {
    Order.
    find().
    populate('products').
    populate('user').
    then((data) => {
      if(!data){
          return res.status(404).send({
              message: `orders not found`
          })
      }
     
    return  res.send(data);

}).catch((err) => {
        return res.status(404).send({
            message: err.message
        })
})
  }

  //Delete
exports.deleteOrder = (req, res) => {

    Order.findByIdAndDelete(req.params.id)
    .then(data => {

        res.send({
            confirmed: true,
            message:"Suppression reussie"
            
        })
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occured"
        })
    });
}

exports.getOrders = (req, res) => {
  Order.
  find().
  populate('products').
  populate('user').
  then((data) => {
    if(!data){
        return res.status(404).send({
            message: `orders not found`
        })
    }
    res.send(data);

}).catch((err) => {
        return res.status(404).send({
            message: err.message
        })
})
}

exports.getProducts = (req, res) => {
  Product.
  find().
  then((data) => {
    if(!data){
        return res.status(404).send({
            message: `orders not found`
        })
    }
    res.send(data);

}).catch((err) => {
        return res.status(404).send({
            message: err.message
        })
})
}