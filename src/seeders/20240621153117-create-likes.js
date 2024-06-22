'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      {
        rut: 12345678,
        shop_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 12345678,
        shop_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 87654321,
        shop_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 87654321,
        shop_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 11223344,
        shop_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 44556677,
        shop_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 44556677,
        shop_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 44556677,
        shop_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 99887766,
        shop_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 99887766,
        shop_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 55443322,
        shop_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 55443322,
        shop_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 22334455,
        shop_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 22334455,
        shop_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rut: 22334455,
        shop_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
