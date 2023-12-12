const { Order, UserCourse, Course } = require('../models/index');

const create = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            res.status(403).json({
                status: "FAIL",
                message: "FORBIDDEN",
            });
        }

        const courseId = req.params.id;

        const existingOrder = await Order.findOne({
            where: {
                userId: user.id,
                courseId: courseId,
                status: "COMPLETED", 
            },
        });

        if (existingOrder) {
            return res.status(400).json({
                status: 'FAIL',
                message: 'You have already purchased this course',
            });
        }

        const payload = {
            userId: user.id,
            courseId: courseId,
        };

        const expirationMinutes = 60; 
        const expiredDateAt = new Date();
        expiredDateAt.setMinutes(expiredDateAt.getMinutes() + expirationMinutes);

        payload.expiredDateAt = expiredDateAt;

        const data = await Order.create(payload);

        res.status(201).json({ status: 'OK', message: 'Success', data });
    } catch (error) {
        res.status(500).json({
            status: 'FAIL',
            message: error.message,
        });
    }
};

const detailOrder = async (req, res) => {
    try {
        const { paymentMethod, id } = req.body;

        const payload = {
            paymentMethod,
            status: "COMPLETED"
        };
        const [_, value] = await Order.update(payload, {
            where: {
                id
            },
            returning: true
        });

        const data = value[0];

        const userId = data.userId;
        const courseId = data.courseId;

        console.log(data.status);

        if (data.expiredDateAt && new Date() > new Date(data.expiredDateAt)) {
            const canceledPayload = {
                status: "CANCELED",
            };
            await Order.update(canceledPayload, {
                where: {
                    id
                }
            });

            return res.status(400).json({
                status: 'FAIL',
                message: 'Order expired and canceled',
            });
        }

        if (data.status === "COMPLETED") {
            const value = await UserCourse.create({ userId, courseId });
            console.log(value);
        }

        res.status(200).json({ status: 'OK', message: 'Success', data });
    } catch (error) {
        res.status(500).json({
            status: 'FAIL',
            message: error.message,
        });
    }
};

const getPurchasedCourses = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            res.status(403).json({
                status: "FAIL",
                message: "FORBIDDEN",
            });
            return;
        }

        const userId = user.id;

        
        const completedOrders = await Order.findAll({
            where: {
                userId: userId,
                status: "COMPLETED",
            },
            include: [
                {
                    model: Course,
                    attributes: ['id', 'title', 'category', 'level', 'price'], 
                },
            ],
        });

        res.status(200).json({ status: 'OK', message: 'Success', data: completedOrders });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'FAIL',
            message: error.message,
        });
    }
};

const deleteOrder = async (req, res) => {
    try {
      const orderId = req.params.id;
      const deletedCount = await Order.destroy({
        where: { id: orderId },
      });
      if (!deletedCount) {
        return res.status(404).json({ status: 'FAIL', message: 'Order not found' });
      }
      res.status(200).json({ status: 'OK', message: 'Order deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'FAIL', message: error.message });
    }
  };

  const getOrders = async (req, res) => {
    try {
      const orders = await Order.findAll();
      res.status(200).json({ status: 'OK', message: 'Orders retrieved successfully', data: orders });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'FAIL', message: error.message });
    }
  };

module.exports = {
    create,
    detailOrder,
    getPurchasedCourses,
    deleteOrder,
    getOrders
};
