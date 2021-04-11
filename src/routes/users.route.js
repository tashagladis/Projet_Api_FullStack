const { Router } = require("express");
const express = require("express");
const router = express.Router();
const users =  require('../controllers/users.controller');
//const verifyToken = require('../middlewares/verifyToken')

router.post('/register', users.register);
router.post('/login', users.login);
router.get('/logout', users.logout);
router.get('/user/:id', verifyToken ,users.getMe);
router.put('/update/:id', users.updateUser);
router.get('/users', users.getUsers);
router.delete('/delete/:id', users.deleteUser);
import verifyToken from "../middlewares/verifyToken"
//router.post('/user/:id'); updateUser


module.exports = router;