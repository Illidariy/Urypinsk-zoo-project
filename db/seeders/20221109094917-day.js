/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const day = [
      { type: 'Выходной день' },
      { type: 'Будний день' },
    ];
    const data = day.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Days', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Days');
  },
};
