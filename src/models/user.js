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
      this.hasMany(models.Likes, {
        foreignKey: 'rut',
      });
    }
  }
  User.init({
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    rut: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};