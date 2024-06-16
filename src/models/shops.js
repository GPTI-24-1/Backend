'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Likes, {
        foreignKey: 'id',
      });
    }
  }
  Shops.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    link_address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Shops',
  });
  return Shops;
};