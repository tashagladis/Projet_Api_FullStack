const { gql } = require('apollo-server-express')


module.exports = gql`
type User {
    id: ID!,
    firstName: String,
    lastName: String,
    email:String,
    age: Float
}
extend type Query {
    users: [User],
    user(id: ID!): User

}

#extend type Mutation {
    #create(title: String, price: Float, description: String): Product
    #updateProduct(id: ID!, title: String, price: Float, description: String): Product
    #deleteProduct(id: ID!): Product
#}
`