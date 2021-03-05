const Product = require('../../models/product.model')

module.exports = {
    Query: {
        products: () =>{
            return Product.find();
        },
        product: (parent, args) =>{
            console.log(args.id)
            return Product.findById(args.id);

        },
    },

    Mutation: {

        createProduct: (parent, args) => {

            const newProduct = new Product({
                title: args.title,
                price: args.price,
                description: args.description

            });

            return newProduct.save();

        },
        updateProduct: (parent, args) => {
            const newProduct = new Product({
                _id:args.id,
                title: args.title,
                price: args.price,
                description: args.description
            });
            return Product.findByIdAndUpdate(args.id, newProduct);
        }
        ,
        deleteProduct: (parent, args) => {
           
            return Product.findByIdAndDelete(args.id);
        }

    }
}