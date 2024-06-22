'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        mail: 'user1@example.com',
        password: 'password123',
        rut: 12345678,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mail: 'user2@example.com',
        password: 'password456',
        rut: 87654321,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mail: 'user3@example.com',
        password: 'password789',
        rut: 11223344,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
