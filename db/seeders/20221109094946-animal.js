/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const animal = [
      { name: 'slonik', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/African_Bush_Elephant_Mikumi_cropped.jpg/640px-African_Bush_Elephant_Mikumi_cropped.jpg', describe: 'ochen bolshoe zhivotnoe' },
      { name: 'tupic', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Atlantic_puffin_055.jpg/220px-Atlantic_puffin_055.jpg', describe: 'letaet i tupit' },
    ];
    const data = animal.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Animals', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Animals');
  },
};
