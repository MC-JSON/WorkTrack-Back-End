'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logDate: {
        type: Sequelize.STRING
      },
      // employeeId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   field: 'employeeId',
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'employees',
      //     key: 'id'
      //   }
      // },
      employeeHours: {
        type: Sequelize.INTEGER
      },
      businessId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'businessId',
        onDelete: 'CASCADE',
        references: {
          model: 'businesses',
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
    await queryInterface.dropTable('logs')
  }
}
