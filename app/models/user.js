'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    encryptedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: DataTypes.NUMBER,
    address: DataTypes.STRING,
    role: DataTypes.ENUM('ROOT', 'ADMIN', 'MEMBER')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};