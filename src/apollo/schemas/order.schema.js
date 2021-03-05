const { gql } = require('apollo-server-express')


module.exports = gql`
type Order {
    amountNumber:Float,
    totalAmount: Float,
    products: [Product],
    user: User
}
extend type Query {
    Orders: [Order],
    Order(id: ID!): Order

}

extend type Mutation {
    createOrder(orderNumber: Float, totalAmount: Float,produts: [ID],user: ID): Product
    #updateProduct(id: ID!, title: String, price: Float, description: String): Product
    #deleteProduct(id: ID!): Product
}
`