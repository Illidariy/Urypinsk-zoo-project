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
    static associate({ Tariff, Age }) {
      Day.Tariff = Day.hasMany(Tariff, { foreignKey: 'dayId' });
      Day.Age = Day.belongsToMany(Age, { through: Tariff, foreignKey: 'dayId', otherKey: 'ageId' });
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
