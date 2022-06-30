'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockShoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StockShoes.init({
    masterID: {
      type: DataTypes.INTEGER,
      references: 'mastershoes',
      referencesKey: 'id'
    },
    detailID: {
      type: DataTypes.INTEGER,
      references: 'detailshoes',
      referencesKey: 'id'
    },
      stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StockShoes',
  });
  StockShoes.associate = function(models){
    StockShoes.belongsTo(models.DetailShoes,{foreignKey:'DetailID'})
    StockShoes.belongsTo(models.MasterShoes,{foreignKey:'MasterID'})
  }
  return StockShoes;
};