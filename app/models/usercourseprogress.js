'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourseProgress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCourseProgress.belongsTo(models.User, { foreignKey: 'userId' } )
      UserCourseProgress.belongsTo(models.courseChapterModule, { foreignKey: 'moduleId' } )
    }
  }
  UserCourseProgress.init({
    userId: {
      type: DataTypes.UUID,
      references: {
        model:'Users',
        key: 'id',
      }
    },
    moduleId: {
      type: DataTypes.UUID,
      references: {
        model: 'courseChapterModule',
        key: 'id'
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'UserCourseProgress',
  });
  UserCourseProgress.removeAttribute('id') 
  return UserCourseProgress;
};