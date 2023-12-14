'use strict'
const { Model } = require('sequelize')


const rates = [4.5,4.6,4.7,4.8,4.9,5.0]

function randomIndex(length){
  const index = Math.floor(Math.random() * length)
  return index
}


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

      Course.hasMany(models.Order, {
        foreignKey: 'courseId',
      })
      Course.belongsToMany(models.User, {
        through: models.UserCourse  ,
        foreignKey: 'courseId',
      })
    }
    
  }
  Course.init(
    {
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      type: DataTypes.ENUM('free','premium'),
      level: DataTypes.ENUM('beginner','intermediate','advance'),
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      telegram: DataTypes.STRING,
      creator: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      audience: DataTypes.ARRAY(DataTypes.STRING)
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

  Course.beforeCreate((x)=> (x.rating = rates[randomIndex(rates.length)]))


  return Course
}
