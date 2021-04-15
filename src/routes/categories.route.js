const { Router } = require("express");
const express = require("express");
const router = express.Router();
const categories =  require('../controllers/categories.controller');


router.post('/category',categories.createCategory);

router.get('/category/:id',categories.getOneCategory);

router.get('/categories',categories.getCategories);
router.delete('/deletecategory/:id', categories.deleteCategory);


module.exports = router;