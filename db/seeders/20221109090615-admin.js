
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admins', [{
      login: 'admin',
      password: await bcrypt.hash('123123123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Admins', null, {});

  },
};
