const router = require('express').Router();
const userController = require('../controllers/user');
const { isAdmin, isAuthenticated, isAuthorised } = require('../middleware/isAuthenticated')


router.get('/', isAdmin, userController.getAllUsers);
router.get('/stats', isAdmin, userController.getStats);
router.get('/find/:userId', isAuthorised, userController.getUser);




router.put('/find/:userId', isAuthorised, userController.updateUser);
router.delete('/find/:userId', isAuthorised, userController.deleteUser);
module.exports = router;