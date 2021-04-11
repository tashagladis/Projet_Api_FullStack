const User = require("../models/user.model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../configs')
const joi = require('joi')



/*const userSchemaValidation = joi.object({
  firstName:joi.string().required(),
  lastName:joi.string().required(), 
  passWord:joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email:joi.string().required(),
  isAdmin:joi.string().required(),
  age:joi.string().required(),
})*/




exports.register = (req, res) => {

    let hashedpassword = bcrypt.hashSync(req.body.passWord,10);
    const user = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        passWord : hashedpassword ,
        email : req.body.email,
        isAdmin: req.body.isAdmin,
        age: req.body.age

    });

    //const validation = userSchemaValidation.validate(req.body)
   
    /*if(validation.error){
        res.status(500).send({
            massage: err.message || "erreur sur un de vos champ"
        })
    }*/


    user.save()
    .then(data => {

       
        let userToken = jwt.sign(
            {
                id: data._id,
                admin: data.isAdmin
            },
            config.jwt.secret,
            {
                expiresIn: 86400
            }
            )
        res.send({
        auth : true,
        token : userToken
        })
    }).catch(err => {
        
       

        res.status(500).send({
            massage: err.message || "some error occured"
        })
    });
}

//MIS A JOUR



//Methode pour se logger et recuperer le token
exports.login = (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .then((user) => {

        if(!user){
        res.status(404).send({
                auth: false,
                token: null,
                message: `no user find with email ${req.body.email}`,
                
            })
        }
        let passwordIsValid = bcrypt.compareSync(
            req.body.passWord,
             user.passWord
             );

        if(!passwordIsValid){
          res.status(401).send({
                auth: false,
                token: null,
                message: "password invalid"
    
            });
        }
        let userToken = jwt.sign(
                {
                    id: user._id,
                    admin: user.isAdmin
                },
                config.jwt.secret,
                {
                    expiresIn: 86400
                }
                );
        
        
        res.status(200).send({
            auth: true,
            token: userToken

        })
    }).catch((err) => {
        res.send(err);
    })
    

}


exports.logout = (req, res) => {
    res.status(200).send({
        auth: false,
       token: null 
    })
}

// Route Sécurisé get un user en fonction du token
exports.getMe = (req, res) => {
    User.findById(req.params.id)
    .then((user) => {
        if(!user){
            return res.status(404).send({
                message: `user not found with id ${req.params.id}`
            })
        }
        res.send(user);

    }).catch((err) => {
            return res.status(404).send({
                message: err.message
            })
    })
}

//MISE A JOUR
exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(data => {
        User.findById(req.params.id).
        then(dataU => {
            res.send(dataU)
        }).catch(err => {
            console.log(err);
            
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occured"
        })
    });
}

//Delete
exports.deleteUser = (req, res) => {

    User.findByIdAndDelete(req.params.id)
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

//Liste des utilisateurs
exports.getUsers = (req, res) => {
     User.find().
    then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err);
        
    });
}