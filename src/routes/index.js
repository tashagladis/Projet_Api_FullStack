const express = require('express');
const router = express.Router();
const userRouter = require('./users.route');
//const productsRouter = require('./products.route');
const orderRouter = require('./orders.route')
const categoryRouter = require('./categories.route')

router.use(userRouter);
router.use(orderRouter);
router.use(categoryRouter);

module.exports = router;