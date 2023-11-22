'use strict';
const {v4: uuidv4} = require('uuid');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    type: DataTypes.ENUM("free ","premium"),
    level: DataTypes.ENUM("beginner","intermediate ","advance"),
    price: DataTypes.NUMBER,
    image: DataTypes.STRING,
    creator: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  Course.beforeCreate(course => course.id = uuidv4())
  return Course;
};