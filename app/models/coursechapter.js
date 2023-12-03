'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseChapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CourseChapter.belongsTo(models.Course,{
        foreignKey: 'courseId'
      })

       CourseChapter.hasMany(models.courseChapterModule,{
        foreignKey: 'chapterId',
        as: 'modules'
      })
    }
  }
  CourseChapter.init({
    title: DataTypes.STRING,
    chapterNumber: DataTypes.INTEGER,

    courseId: {
     type: DataTypes.UUID,
     references: {
      model: 'Courses',
      key: 'id'
     },
     onDelete: 'CASCADE'
    } ,
    
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CourseChapter',

    defaultScope: {
        attributes: {
          exclude: ['createdAt','updatedAt']
        }
      }
  });
  return CourseChapter;
};