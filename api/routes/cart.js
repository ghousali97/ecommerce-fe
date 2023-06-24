const router = require('express').Router();
const cartController = require('../controllers/cart');
const { isAdmin, isAuthenticated, isAuthorised } = require('../middleware/isAuthenticated')



router.get('/', isAdmin, cartController.getAllCarts);

router.get('/:userId', isAuthorised, cartController.getCartByUserId);
router.put('/:userId', isAuthorised, cartController.updateCartbyUserId);
router.delete('/:userId', isAuthorised, cartController.deleteCartbyUserId);

router.post('/', isAuthenticated, cartController.createCart);


module.exports = router;