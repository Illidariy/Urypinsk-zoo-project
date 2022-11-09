const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Photo }) {
      Animal.Photo = Animal.hasMany(Photo, { foreignKey: 'animalId' });
    }
  }
  Animal.init({
    name: DataTypes.TEXT,
    uri: DataTypes.TEXT,
    describe: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
