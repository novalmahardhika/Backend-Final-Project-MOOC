'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courseChapterModule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      courseChapterModule.belongsTo(models.CourseChapter, {
        foreignKey: 'chapterId',
      })
    }
  }
  courseChapterModule.init({
    
    chapterId: {
       type: DataTypes.UUID,
        references: {
          model: 'CourseChapters',
          key: 'id'
        },
        onDelete: "CASCADE"
    },
    title: DataTypes.STRING,
    video: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'courseChapterModule',
    
    defaultScope: {
        attributes: {
          exclude: ['createdAt','updatedAt']
        }
      }
  });
  return courseChapterModule;
};