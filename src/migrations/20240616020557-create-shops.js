'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      comercio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comuna: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ciudad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_establecimiento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shops')
  },
}
