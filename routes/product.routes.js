const express = require('express');
const AuthController = require('../controller/authcontrollers');
const ProductController = require('../controller/productcontrollers');

const router = express.Router();

router.get('/', ProductController.getAll);
router.get('/:id(\\d+$)', AuthController.authenticateToken, ProductController.getOneById);
router.get('/name', AuthController.authenticateToken, ProductController.getAllByName);

module.exports = router;