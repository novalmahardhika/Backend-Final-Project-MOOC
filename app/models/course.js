'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.CourseChapter, {
        foreignKey: 'courseId',
        as: 'chapters'
      })
    }
  }
  Course.init(
    {
      title: DataTypes.STRING,
      type: DataTypes.ENUM('free','premium'),
      level: DataTypes.ENUM('beginner','intermediate','advance'),
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      creator: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Course',

      // exclude property model
      defaultScope: {
        attributes: {
          exclude: ['createdAt','updatedAt']
        }
      }
    }
  )

  return Course
}
