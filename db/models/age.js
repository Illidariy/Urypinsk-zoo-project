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
    static associate({ Tariff, Day }) {
      Age.Tariff = Age.hasMany(Tariff, { foreignKey: 'ageId' });
      Age.Day = Age.belongsToMany(Day, { through: Tariff, foreignKey: 'ageId', otherKey: 'dayId' });
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
