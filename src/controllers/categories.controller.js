const Category = require("../models/category.model");
const Product = require("../models/product.model")
const mongoose = require('mongoose') 

exports.createCategory = (req, res) => {
    
        const category  = new Category ({ 
          title: req.body.title,
          products: req.body.products,
        });
       
      
        category.save().then(data => {
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



exports.getOneCategory = (req, res) => {

Category.findById(req.params.id)
  .populate('produts')
  .then((data) => {
      console.log(data)
    if(!data){
        return res.status(404).send({
            message: `category not found with id ${req.params.id}`
        })
    }
    res.send(data);

}).catch((err) => {
        return res.status(404).send({
            message: err.message
        })
})
}

exports.getCategories = (req, res) => {
Category.
  find().
  populate('products').
  then((data) => {
    if(!data){
        return res.status(404).send({
            message: `categories not found`
        })
    }
    res.send(data);

}).catch((err) => {
        return res.status(404).send({
            message: err.message
        })
})
}

/* exports.getProducts = (req, res) => {
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
}) */
// }