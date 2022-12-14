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
      // define association here
      User.belongsTo(models.User);
      User.hasMany(models.Peso);
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    data: DataTypes.STRING,
    altura: DataTypes.FLOAT,
    peso: DataTypes.FLOAT,
    imc: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};