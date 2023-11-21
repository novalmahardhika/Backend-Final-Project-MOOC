// 'use strict';
// const {
//   Model
// } = require('sequelize');
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "createdBy",
        as: "created"
      });
      this.belongsTo(models.User, {
        foreignKey: "updatedBy",
        as: "updated"
      });
      this.belongsTo(models.User, {
        foreignKey: "deletedBy",
        as: "deleted"
      });
    }
  }
  Cars.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    rentPerDay: DataTypes.INTEGER,
    description: DataTypes.STRING,
    availableAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cars',
    paranoid: true
  });
  return Cars;
};