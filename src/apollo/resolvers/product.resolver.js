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
       feed: (parent, args) => {
            const regex = new RegExp(args.filter, 'i') 
           
            const where = args.filter
              ? {
                OR: [
                  { title: {$regex: regex} },
                  { description: {$regex: regex} },
                 ],
               }
              : {}

            //   const s = 'cool'
            //  const regex = new RegExp(s, 'i') // i for case insensitive
            // Posts.find({title: {$regex: regex}})
                        
            const products = Product.find({$or: [ {title: {$regex: regex}},{description: {$regex: regex}} ]})
            return products
          }
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