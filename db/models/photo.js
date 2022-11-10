const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal }) {
      Photo.Animal = Photo.belongsTo(Animal, { foreignKey: 'animalId', onDelete: 'cascade' });
    }
  }
  Photo.init({
    animalId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Animals',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    uri: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};
