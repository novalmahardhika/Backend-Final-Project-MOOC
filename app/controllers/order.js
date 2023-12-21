const orderService = require('../services/order')

const create = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(403).json({
                status: "FAIL",
                message: "FORBIDDEN",
            });
        }

        const courseId = req.params.id;

        const result = await orderService.createOrder(user.id, courseId);

        if (result.error) {
            return res.status(result.status).json({
                status: 'FAIL',
                message: result.message,
            });
        }

        res.status(201).json({ status: 'OK', message: 'Success', data: result.data });
    } catch (error) {
        res.status(error.statuscode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
};

const detailOrder = async (req, res) => {
    try {
      const { paymentMethod, cardNumber, cardHolderName, cvv, expiryDate } = req.body;
      const orderId = req.params.id;
  
      const resultData = await orderService.processPayment(orderId, paymentMethod, cardNumber, cardHolderName, cvv, expiryDate);
  
      return res.status(200).json({
        status: resultData ? 'OK' : 'FAIL',
        message: resultData ? 'Success' : 'Failed to process payment',
        data: resultData,
      });
    } catch (error) {
      if (error.statusCode) {
        return res.status(error.statusCode).json({
          status: 'FAIL',
          message: error.message,
        });
      } else {
        return res.status(500).json({
          status: 'FAIL',
          message: `Failed to process order payment: ${error.message}`,
        });
      }
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
        const payload = {};
        
        const completedOrders = await orderService.getCourse(userId,payload);

        res.status(200).json({ status: 'OK', message: 'Success', data: completedOrders });
    } catch (error) {
        console.error(error);
        res.status(error.statuscode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
};

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        await orderService.deleteOrder(orderId);
        res.status(200).json({ status: 'OK', message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(error.statuscode || 500).json({
            status: 'FAIL',
            message: error.message,
        })
    }
};


const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
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
