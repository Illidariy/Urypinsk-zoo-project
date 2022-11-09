/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const admin = [
      { login: 'admin', password: '12345' },
    ];
    const data = admin.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Admin', data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Admin');
  },
};
