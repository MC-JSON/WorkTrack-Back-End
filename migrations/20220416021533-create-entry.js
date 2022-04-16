'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entryDate: {
        type: Sequelize.STRING
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'employeeId',
        onDelete: 'CASCADE',
        references: {
          model: 'employees',
          key: 'id'
        }
      },
      employeeHours: {
        type: Sequelize.INTEGER
      },
      logId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'logId',
        onDelete: 'CASCADE',
        references: {
          model: 'logs',
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
    await queryInterface.dropTable('entries')
  }
}
