const express = require('express');
const bodyParser =  require('body-parser');
const config = require("../configs");
const app = express();
const port = config.server.port;
const apiRouter = require('../routes');
const schema = require('../apollo/schemas');
const resolvers = require("../apollo/resolvers")
import cors from "cors";
const {ApolloServer, gql} = require('apollo-server-express');

//const { schema } = require('../models/user.model');





/*const resolvers = {
    Query:{
        products: () => {
            return [
                {
                    id: 1,
                    price: 230,
                    title: "lorem ipsum",
                    description: "product 1",
                    imgUrl: "www.test.fr/img1"
                },
                {
                    id: 2,
                    price: 350,
                    title: "lorem ipsum 2",
                    description: "product 2",
                    imgUrl: "www.test.fr/img2"
                },
                {
                    id: 3,
                    price: 550,
                    title: "lorem ipsum 3",
                    description: "product 3",
                    imgUrl: "www.test.fr/img3"
                }
            ]             
            
        },
        
        product(parent, args){
            console.log(args.id)
            return {
                id: 3,
                price: 550,
                title: "lorem ipsum 3",
                description: "product 3",
                imgUrl: "www.test.fr/img3"
            }
        }
    }
}*/
app.use(cors());

const graphQlServer = new ApolloServer(({
    typeDefs: schema,
    resolvers
}))

graphQlServer.applyMiddleware({app, path: "/graphql"})

app.use(bodyParser.json());


app.use('/api/V1', apiRouter);


exports.start = () => {
    app.listen(port , (err) =>{
    if(err){
        console.log(`Error: ${err}`);
        process.exit(-1);

    }
    console.log(`app is running at http://127.0.0.1:${port}`);
});
};


