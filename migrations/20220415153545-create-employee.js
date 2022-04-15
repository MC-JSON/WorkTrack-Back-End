'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeeName: {
        type: Sequelize.STRING
      },
      // employeeEmail: {
      //   type: Sequelize.STRING
      // },
      // employeePassword: {
      //   type: Sequelize.STRING
      // },
      jobId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'jobId',
        onDelete: 'CASCADE',
        references: {
          model: 'jobs',
          key: 'id'
        }
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
    await queryInterface.dropTable('employees')
  }
}
