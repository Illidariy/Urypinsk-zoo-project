/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const tariff = [
      { ageId: '1', dayId: '1', price: '1000' },
      { ageId: '2', dayId: '1', price: '500' },
      { ageId: '1', dayId: '2', price: '700' },
      { ageId: '2', dayId: '2', price: '400' },
    ];
    const data = tariff.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Tariffs', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tariffs');
  },
};
