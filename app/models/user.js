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

      static associate(models) {
      User.hasOne(models.Otp, {
        foreignKey: 'userId',
        as: 'OTP'
      })
      User.hasMany(models.Order, { 
        foreignKey: 'userId' 
      })
      User.belongsToMany(models.Course, { 
        through:models.UserCourse ,
        foreignKey: 'userId' 
      })

      User.hasMany(models.Notification, { 
        foreignKey: 'userId', 
        as: 'notifications'
      })
      
      User.hasMany(models.UserCourseProgress, {
        foreignKey: 'userId',
      })
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
    phoneNumber: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    role: DataTypes.ENUM('ROOT', 'ADMIN', 'MEMBER'),
    verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};