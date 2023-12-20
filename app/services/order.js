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

    // Include the associated Course model
    const includedCourse = await data.getCourse({
      attributes: [ 'title', 'category','type', 'level', 'price','image'],
    });
    const order = { ...data.toJSON(), course: includedCourse.toJSON() };
    
    return {
      error: false,
      data: order,
    };
  } catch (error) {
    throw new ApplicationError(`Failed to create order ${error.message}`, 500);
  }
};

const processPayment = async (
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

    const commonPayload = {
      paymentMethod,
      status: "COMPLETED",
      cardNumber: paymentMethod === "Bank Transfer" ? null : cardNumber,
      cardHolderName: paymentMethod === "Bank Transfer" ? null : cardHolderName,
      cvv: paymentMethod === "Bank Transfer" ? null : cvv,
      expiryDate: paymentMethod === "Bank Transfer" ? null : expiryDate,
    };

    
    const course = await order.getCourse();

    if (course) {
      if (course.type === "free") {
        
        commonPayload.status = "COMPLETED";
        commonPayload.paymentMethod = null;
        commonPayload.cardNumber = null;
        commonPayload.cardHolderName = null;
        commonPayload.cvv = null;
        commonPayload.expiryDate = null;
      } else if (course.type === "premium" && !paymentMethod) {
        
        throw new ApplicationError("Premium course requires a payment method", 400);
      }
    }

    const [_, orderData] = await orderRepository.updateOrder(orderId, commonPayload);

    if (Array.isArray(orderData) && orderData.length > 0) {
      const data = orderData[0];
      const userId = data.userId;
      const courseId = data.courseId;

      if (data.status === "COMPLETED") {
        if (paymentMethod === "Credit Card" && (!cardNumber || !cardHolderName || !cvv || !expiryDate)) {
          throw new ApplicationError("Please fill in all required fields", 400);
        }

        await NotificationService.create(userId, { title: "Payment Success", message: `Payment Course ${courseId} is Success` });

        if (paymentMethod === "Credit Card") {
          await orderRepository.createNewUserCourse(userId, courseId);
        }
      }

      if (data.expiredDateAt && new Date() > new Date(data.expiredDateAt)) {
        const canceledPayload = {
          status: "CANCELED",
        };

        await orderRepository.updateOrder(orderId, canceledPayload);
        throw new ApplicationError("Order expired and canceled", 400);
      }

      const includedCourse = await data.getCourse({
        attributes: ['title', 'category', 'type', 'level', 'price', 'image'],
      });
      const response = { ...data.toJSON(), course: includedCourse.toJSON() };

      return response;
    }

    return null;
  } catch (error) {
    throw new ApplicationError(`Failed to process payment: ${error.message}`, 500);
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
  processPayment
};
