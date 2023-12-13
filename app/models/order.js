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
      Order.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      Order.belongsTo(models.Course, {
        foreignKey: 'courseId',
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
      type: DataTypes.ENUM("PENDING", "COMPLETED", "CANCELED"),
    },
    paymentMethod: DataTypes.STRING,
    expiredDateAt: DataTypes.DATE,

    cardNumber: {
      type: DataTypes.STRING, 
    },
    cardHolderName: {
      type: DataTypes.STRING,
    },
    cvv: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true,
        len: [3, 4],
      },
    },
    expiryDate: {
      type: DataTypes.STRING,
      validate: {
        is: /^(0[1-9]|1[0-2])\/\d{2}$/,
      },
    },

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};