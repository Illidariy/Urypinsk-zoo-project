const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Age extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tariff }) {
      Age.Tariff = Age.hasMany(Tariff, { foreignKey: 'ageId' });
    }
  }
  Age.init({
    category: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Age',
  });
  return Age;
};
