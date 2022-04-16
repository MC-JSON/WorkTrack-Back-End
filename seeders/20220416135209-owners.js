'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'owners',
      [
        {
          ownerName: 'Bryan',
          ownerEmail: 'Bryan@Bryan.Bryan',
          ownerPasswordDigest: 'qwert',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerName: 'Jason',
          ownerEmail: 'Jason@Jason.Jason',
          ownerPasswordDigest: 'asdfg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerName: 'Frank',
          ownerEmail: 'Frank@Frank.Frank',
          ownerPasswordDigest: 'zxcvb',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('owners', null, {})
  }
}
