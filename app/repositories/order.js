const { Order, Course, UserCourse } = require('../models/index');
const { Op } = require('sequelize');

const findCompletedOrder = async (userId, courseId) => {
    return Order.findOne({
        where: {
            userId: userId,
            courseId: courseId,
            status: 'COMPLETED',
        },
    });
};

const createOrder = async (payload) => {
    return Order.create(payload);
};

const getCourse = (userId, payload) => {
    return Order.findAll({
        where: {
            userId: userId,
            ...payload,
        },
        include: [
            {
                model: Course,
                attributes: ['title', 'type', 'category', 'level', 'price', 'image','rating','creator'],
            },
        ],
    });
};

const getOrderById = async (orderId) => {
    return Order.findByPk(orderId);
};

const deleteOrderById = async (orderId) => {
    return Order.destroy({
        where: { id: orderId },
    });
};

const deleteUserCourse = async (userId, courseId) => {
    return UserCourse.destroy({
        where: { userId, courseId },
    });
};

const getAllOrders = async () => {
    return Order.findAll({
        include: [
            {
                model: Course,
                attributes: ['title', 'type', 'category', 'level', 'price', 'image','rating','creator'],
            },
        ],
    });
};

const cekallorders = async (userId, courseId) => {
    try {
        const activeOrders = await Order.findAll({
            where: {
                userId: userId,
                courseId: courseId,
                expiredDateAt: { [Op.gt]: new Date() }
            }
        });

        return activeOrders.length > 0;
    } catch (error) {
        console.error(`Failed to fetch orders: ${error.message}`);
        throw error; 
    }
};

const getById = async (orderId) => {
    return Order.findOne({
        where: { id: orderId },
        include: [
            {
                model: Course,
                attributes: ['title', 'type', 'category', 'level', 'price', 'image','rating','creator'],
            },
        ],
    });
};

  
  const updateOrder = async (orderId, payload) => {
    return Order.update(payload, {
      where: {
        id: orderId
      },
      returning: true
    });
  };
  
  const createNewUserCourse = async (userId, courseId) => {
    return UserCourse.create({ userId, courseId });
  };

module.exports = {
    findCompletedOrder,
    createOrder,
    getCourse,
    getOrderById,
    deleteOrderById,
    deleteUserCourse,
    getAllOrders,
    updateOrder,
    createNewUserCourse,
    getById,
    cekallorders
};