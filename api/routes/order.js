const router = require('express').Router();
const orderController = require('../controllers/order');
const { isAdmin, isAuthenticated, isAuthorised } = require('../middleware/isAuthenticated')



router.get('/', isAdmin, orderController.getAllOrders);
router.get('/income', isAdmin, orderController.getIncome);

router.get('/:orderId', isAuthorised, orderController.getOrder);

router.put('/:orderId', isAdmin, orderController.updateOrder);
router.delete('/:orderId', isAdmin, orderController.deleteOrder);

router.post('/', isAuthenticated, orderController.createOrder);

module.exports = router;