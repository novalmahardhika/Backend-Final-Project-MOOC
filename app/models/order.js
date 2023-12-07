'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsToMany(models.User, {
        through: 'UserOrder', 
        foreignKey: 'userId',
        ortherKey: 'orderId',
      });
      Order.belongsToMany(models.Course, {
        through: 'CourseOrder', 
        foreignKey: 'courseId',
        ortherKey: 'orderId',
      });
    }
  }
  Order.init({
    userId: { 
      type: DataTypes.UUID,
      references: {
       model: 'Users',
       key: 'id'
      },
      onDelete: 'CASCADE'
    },
    courseId: {
      type: DataTypes.UUID,
      references: {
       model: 'Courses',
       key: 'id'
      },
      onDelete: 'CASCADE'
     },
    status: {
      type: DataTypes.ENUM("pending", "paid success"),
      defaultValue: "pending",
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};