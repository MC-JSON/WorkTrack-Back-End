'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('jobs', [
      {
        jobTitle: 'Mechanic',
        jobDescription: 'Fixes stuff',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Lead Mechanic',
        jobDescription: 'Manages garage',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Receptionist',
        jobDescription:
          'Answers phones, books appointments, deals with customers',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Office Manager',
        jobDescription: 'Manages office',
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Jar Maker',
        jobDescription: 'Makes Jars',
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Jar Decorator',
        jobDescription: 'Decorates Jars',
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Jar Packager',
        jobDescription: 'Packages Jars',
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Receptionist',
        jobDescription: 'Sells Jars',
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Office manager',
        jobDescription:
          'Handles scheduling, answers phone, works the front dest',
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Technician',
        jobDescription: 'Takes care of the instruments',
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Mechanic',
        jobDescription: 'Fixes stuff',
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Lead Mechanic',
        jobDescription: 'Manages garage',
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Receptionist',
        jobDescription:
          'Answers phones, books appointments, deals with customers',
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Office Manager',
        jobDescription: 'Manages office',
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jobTitle: 'Hot dog cart attendant',
        jobDescription: 'Makes the dogs, serves the dogs, sells the dogs.',
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('jobs', null, {})
  }
}
