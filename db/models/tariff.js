const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Day, Age }) {
      Tariff.Day = Tariff.belongsTo(Day, { foreignKey: 'dayId' });
      Tariff.Age = Tariff.belongsTo(Age, { foreignKey: 'ageId' });
    }
  }
  Tariff.init({
    ageId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Ages',
        key: 'id',

      },
    },
    dayId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Days',
        key: 'id',
      },
    },
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tariff',
  });
  return Tariff;
};
