const { Router } = require('express');
const router = Router();

const Order = require('../../app/controllers/order');
const AuthMiddleware = require('../../middlewares/auth');


router.post("/orders/:id", AuthMiddleware.authorize, Order.create);
router.put("/orders/:id", AuthMiddleware.authorize, Order.detailOrder);
router.get("/orders", AuthMiddleware.authorize, Order.getPurchasedCourses);
router.get("/orders/list", AuthMiddleware.authorize, Order.getOrders);
router.delete("/orders/:id", AuthMiddleware.authorize, Order.deleteOrder);

module.exports = router