const { Router } = require('express');
const router = Router();

const Order = require('../../app/controllers/order');
const AuthMiddleware = require('../../middlewares/auth');


router.post("/order/:id", AuthMiddleware.authorize, Order.create);
router.put("/order", AuthMiddleware.authorize, Order.detailOrder);
router.get("/order", AuthMiddleware.authorize, Order.getPurchasedCourses);

module.exports = router