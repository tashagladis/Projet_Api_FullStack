const { Router } = require("express");
const express = require("express");
const router = express.Router();
const orders =  require('../controllers/orders.controller');


router.post('/order',orders.createOrder);

router.get('/order/:id',orders.getOneOrder);

router.get('/orders',orders.getOrders);


module.exports = router;