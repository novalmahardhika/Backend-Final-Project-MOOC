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
    }
  }
  courseChapterModule.init({
    chapter: DataTypes.INTEGER,
    moduleOrder: DataTypes.INTEGER,
    video: DataTypes.STRING,
    description: DataTypes.STRING,
    forWho: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'courseChapterModule',
  });
  return courseChapterModule;
};