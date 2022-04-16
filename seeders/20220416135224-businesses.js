'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('businesses', [
      {
        businessName: 'Bryans Brakes',
        businessAddress: '999 Bryan Blvd.',
        businessCity: 'Bryanopolis',
        businessState: 'CA',
        businessImage: null,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessName: 'Jasons Jars',
        businessAddress: '111 Jason way',
        businessCity: 'Jasonville',
        businessState: 'WI',
        businessImage: null,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessName: 'Jasons Jam Room',
        businessAddress: '800 Jam Rd.',
        businessCity: 'Jamtown',
        businessState: 'WI',
        businessImage: null,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessName: 'Bryans Brakes too',
        businessAddress: '104 Must Stop Ave.',
        businessCity: 'Bryanopolis',
        businessState: 'CA',
        businessImage: null,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessName: 'Franks Franks',
        businessAddress: '22 Frank Rd.',
        businessCity: 'Franktown',
        businessState: 'NJ',
        businessImage: null,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('businesses', null, {})
  }
}
