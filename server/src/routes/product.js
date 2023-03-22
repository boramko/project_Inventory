const router = require('express').Router();
const { productController: controller, userController: controller2 } = require('../controller');

router.get('/getProduct', controller2.tokenChek, controller.getProduct);
router.post('/insertProduct',controller2.tokenChek, controller.insertProduct);

module.exports = router;