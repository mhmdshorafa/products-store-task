var express = require('express');
var router = express.Router();

const products = require('../controllers/products');

router.get('/products', products.get)
.post('/products', products.create)
.delete('/products/:id', products.del)
.put('/products/:id', products.update);

module.exports = router;
