'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessName: {
        type: Sequelize.STRING
      },
      businessAddress: {
        type: Sequelize.STRING
      },
      businessCity: {
        type: Sequelize.STRING
      },
      businessState: {
        type: Sequelize.STRING
      },
      businessImage: {
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'ownerId',
        onDelete: 'CASCADE',
        references: {
          model: 'owners',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('businesses')
  }
}
