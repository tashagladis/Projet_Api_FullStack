const Order = require('../../models/order.model')

module.exports = {
    Query: {
        orders: () =>{
            return Order.find().populate('products').populate('user');
        },
        Order: (parent, args) =>{
            console.log(args.id)
            return Order.findById(args.id);

        },
    },

    Mutation: {

        createOrder: (parent, args) => {

            const newOrder = new Order({
                amountNumber:args.amountNumber,
                totalAmount: args.totalAmount,
                user: args.user,
                products: args.products

            });

            return newOrder.save();

        }

    }
}