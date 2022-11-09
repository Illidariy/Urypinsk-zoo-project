const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tariff }) {
      Day.Tariff = Day.hasMany(Tariff, { foreignKey: 'dayId' });
    }
  }
  Day.init({
    type: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};
