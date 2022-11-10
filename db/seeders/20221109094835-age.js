/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const age = [
      { category: 'Взрослые' },
      { category: 'Дети' },
    ];
    const data = age.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Ages', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ages');
  },
};
