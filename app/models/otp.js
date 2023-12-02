'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Otp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Otp.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }

  Otp.init({
    userId: {
      type: DataTypes.UUID,
      references: {
        model: "Users",
        key: "id"
      },
      onDelete: 'CASCADE'
    },

    otpExpired: DataTypes.Date,
    otpType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Otp',
  });
  return Otp;
};