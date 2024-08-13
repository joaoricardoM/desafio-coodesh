const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getApiDetails);
router.get('/products', productController.listProducts);
router.get('/products/:code', productController.getProduct);
router.put('/products/:code', productController.updateProduct);
router.delete('/products/:code', productController.deleteProduct);

module.exports = router;
