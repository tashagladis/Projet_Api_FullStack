
require('dotenv').config();
const app = require("./src/services/server.service");
const mongooseService = require("./src/services/mongoose.service")


mongooseService.dbConnect();
app.start();



/*const express = require('express');

const bodyParser =  require('body-parser');
const mongoose = require('mongoose') ;
const app = express();
const User = require('./src/models/user.model');
const { findById } = require('./src/models/user.model');

const url = "mongodb+srv://natacha:1Fr1GNqSgwrwsvTw@cluster0.syuac.mongodb.net/dbApi?retryWrites=true&w=majority"
app.use(bodyParser.json());

const port = 3030;


mongoose.connect(url , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("succefully connected to the database");
}).catch(err => {
    console.log("error connection to the database", err);
    process.exit();
})

app.get("/", function(req, res){
    res.send("hello word");
});
app.post("/users", function(req, res){
    const user = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        passWord : req.body.passWord,
        email : req.body.email,
        isAdmin: req.body.isAdmin,
        age: req.body.age

    });
    user.save()
    .then(data => {
        res.send({
        created : true,
        data: data
        })
    }).catch(err => {
        res.status(500).send({
            massage: err.message || "some error occured"
        })
    });
});

app.get('/users/:id', function(req, res){
    console.log(req.params);

    User.findById(req.params.id).
    then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err);
        
    });
});

app.get("/users", function(req, res){

    User.find().
    then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err);
        
    });
});
//ROUTE
app.get("/products", 
//Controller
function(req, res){
    res.send([
        {"name": "products1", "price": 200},
        {"name": "products2", "price": 200},
        {"name": "products3", "price": 200},
        {"name": "products3", "price": 200},
]);
});

app.post('/products', function(req, res){
    console.log(req.body.name);
    console.log(req.body.price);
    res.send({
        confirmed: true,
        products: req.body
    })
})

app.put("/users/:id", function(req, res){
    const user = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        passWord : req.body.passWord,
        email : req.body.email,
        isAdmin: req.body.isAdmin,
        age: req.body.age

    });

    User.findByIdAndUpdate(req.params.id, user)
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occured"
        })
    });
});

app.get('/users/:id', function(req, res){
    console.log(req.params);

    User.findById(req.params.id).
    then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err);
        
    });
});

app.delete('/users/:id', function(req, res){
    console.log(req.params);

    User.remove(req.params.id).
    then(data => {
        res.send({
            confirmed: true
            
        })
    }).catch(err => {
        console.log(err);
        
    });
});

app.get("/users", function(req, res){

    User.find().
    then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err);
        
    });
});
//ROUTE
app.get("/products", 
//Controller
function(req, res){
    res.send([
        {"name": "products1", "price": 200},
        {"name": "products2", "price": 200},
        {"name": "products3", "price": 200},
        {"name": "products3", "price": 200},
]);
});

app.post('/products', function(req, res){
    console.log(req.body.name);
    console.log(req.body.price);
    res.send({
        confirmed: true,
        products: req.body
    })
})
// Service qui permet de lancer notre server
app.listen(port , (err) =>{
    if(err){
        console.log(`Error: ${err}`);
        process.exit(-1);

    }
    console.log(`app is running at http://127.0.0.1:${port}/`);
})*/