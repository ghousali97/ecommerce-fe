const router = require('express').Router();
const productController = require('../controllers/product');
const { isAdmin, isAuthenticated, isAuthorised } = require('../middleware/isAuthenticated')


router.post('/', isAdmin, productController.createProduct);
router.put('/:productId', isAdmin, productController.updateProduct);

router.delete('/:productId', isAdmin, productController.deleteProduct);

router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProduct);


module.exports = router;