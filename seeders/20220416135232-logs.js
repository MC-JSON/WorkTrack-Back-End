'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('logs', [
      {
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('logs', null, {})
  }
}
