const ApplicationError = require("../../config/errors/ApplicationError.js");
const orderRepository = require("../repositories/order");
const NotificationService = require('../services/notification.js')

const createOrder = async (userId, courseId) => {
  try {
    const existingOrder = await orderRepository.findCompletedOrder(
      userId,
      courseId
    );

    if (existingOrder) {
      return {
        error: true,
        status: 400,
        message: "You have already purchased this course",
      };
    }

    const expirationMinutes = 60;
    const expiredDateAt = new Date();
    expiredDateAt.setMinutes(expiredDateAt.getMinutes() + expirationMinutes);

    const payload = {
      userId: userId,
      courseId: courseId,
      expiredDateAt: expiredDateAt,
    };

    const data = await orderRepository.createOrder(payload);

    return {
      error: false,
      data: data,
    };
  } catch (error) {
    throw new ApplicationError(`Failed to create order ${error.message}`, 500);
  }
};

const processBankTransfer = async (
  orderId,
  paymentMethod,
  cardNumber,
  cardHolderName,
  cvv,
  expiryDate
) => {
  try {
    const order = await orderRepository.getOrderById(orderId);

    if (!order) {
      throw new ApplicationError("Order not found", 404);
    }

    if (order.status === "COMPLETED") {
      throw new ApplicationError("Order has already been paid", 400);
    }

    const payload = {
      paymentMethod,
      status: "COMPLETED",
      cardNumber: paymentMethod === "Bank Transfer" ? null : cardNumber,
      cardHolderName: paymentMethod === "Bank Transfer" ? null : cardHolderName,
      cvv: paymentMethod === "Bank Transfer" ? null : cvv,
      expiryDate: paymentMethod === "Bank Transfer" ? null : expiryDate,
    };

    const [_, orderData] = await orderRepository.updateOrder(orderId, payload);

    if (Array.isArray(orderData) && orderData.length > 0) {
      const data = orderData[0];
      console.log("Processing bank transfer... Done");

      const userId = data.userId;
      const courseId = data.courseId;
      if (data.expiredDateAt && new Date() > new Date(data.expiredDateAt)) {
        const canceledPayload = {
          status: "CANCELED",
        };

        await orderRepository.updateOrder(orderId, canceledPayload);
        throw new ApplicationError("Order expired and canceled", 400);
      }

      await NotificationService.create(userId, { title:"Information", message: `Payment Course id:${courseId} Success` })  
      await orderRepository.createNewUserCourse(userId, courseId);

      return data;
    }
    return null;
  } catch (error) {
    throw new ApplicationError(
      `Failed to process bank transfer: ${error.message}`,
      500
    );
  }
};

const processCreditCard = async (
  orderId,
  paymentMethod,
  cardNumber,
  cardHolderName,
  cvv,
  expiryDate
) => {
  try {
    const order = await orderRepository.getOrderById(orderId);

    if (!order) {
      throw new ApplicationError("Order not found", 404);
    }

    if (order.status === "COMPLETED") {
      throw new ApplicationError("Order has already been paid", 400);
    }

    const payload = {
      paymentMethod,
      status: "COMPLETED",
      cardNumber,
      cardHolderName,
      cvv,
      expiryDate,
    };

    const [_, orderData] = await orderRepository.updateOrder(orderId, payload);

    if (Array.isArray(orderData) && orderData.length > 0) {
      const data = orderData[0];

      const userId = data.userId;
      const courseId = data.courseId;

      if (data.expiredDateAt && new Date() > new Date(data.expiredDateAt)) {
        const canceledPayload = {
          status: "CANCELED",
        };


        await orderRepository.updateOrder(orderId, canceledPayload);
        throw new ApplicationError("Order expired and canceled", 400);
      }

      if (data.status === "COMPLETED") {
        if (!cardNumber || !cardHolderName || !cvv || !expiryDate) {
          throw new ApplicationError("Please fill in all required fields", 400);
        }

        await NotificationService.create(userId, { title:"Information", message: `Payment Course id:${courseId} Success` })
        const userCourseResult = await orderRepository.createNewUserCourse(
          userId,
          courseId
        );
        console.log(userCourseResult);
      }

      return data;
    }

    return null;
  } catch (error) {
    throw new ApplicationError(
      `Failed to process credit card payment: ${error.message}`,
      500
    );
  }
};

const getCourse = async (userId, payload) => {
  try {
    const completedOrders = await orderRepository.getCourse(userId, payload);
    return completedOrders;
  } catch (error) {
    throw new ApplicationError(`Failed to get course: ${error.message}`, 500);
  }
};

const deleteOrder = async (orderId) => {
  try {
    const order = await orderRepository.getOrderById(orderId);

    if (!order) {
      throw new Error("Order not found");
    }

    await orderRepository.deleteOrderById(orderId);
    await orderRepository.deleteUserCourse(order.userId, order.courseId);
  } catch (error) {
    throw new ApplicationError(`Failed to delete order: ${error.message}`, 500);
  }
};

const getAllOrders = async () => {
  return orderRepository.getAllOrders();
};

module.exports = {
  createOrder,
  getCourse,
  deleteOrder,
  getAllOrders,
  processBankTransfer,
  processCreditCard,
};
