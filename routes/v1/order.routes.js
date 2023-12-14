const { Router } = require('express');
const router = Router();

const Order = require('../../app/controllers/order');
const AuthMiddleware = require('../../middlewares/auth');


router.post("/order/:id", AuthMiddleware.authorize, Order.create);
router.put("/order/:id", AuthMiddleware.authorize, Order.detailOrder);
router.get("/order", AuthMiddleware.authorize, Order.getPurchasedCourses);
router.get("/order/list", AuthMiddleware.authorize, Order.getOrders);
router.delete("/order/:id", AuthMiddleware.authorize, Order.deleteOrder);

module.exports = router