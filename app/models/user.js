// 'use strict';
// const {
//   Model
// } = require('sequelize');
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Cars, {
        foreignKey: "createdBy",
        as: "created"
      });
      this.hasMany(models.Cars, {
        foreignKey: "updatedBy",
        as: "updated"
      });
      this.hasMany(models.Cars, {
        foreignKey: "deletedBy",
        as: "deleted"
      });
    }
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