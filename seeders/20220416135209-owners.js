'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'owners',
      [
        {
          ownerName: 'Bryan',
          ownerEmail: 'Bryan@Bryan.Bryan',
          ownerPasswordDigest:
            '$2b$12$ZLreHCHiPxX2cd121lUIsOIiKVofrMdlZAgL.0oxoFN6RKSXUcNPi',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerName: 'Jason',
          ownerEmail: 'Jason@Jason.Jason',
          ownerPasswordDigest:
            '$2b$12$aCVxBRR6/msBCMNK0C1v3.WC/7lPz9j9bvXNCucNBhJiE2y4LYtd2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ownerName: 'Frank',
          ownerEmail: 'Frank@Frank.Frank',
          ownerPasswordDigest:
            '$2b$12$reVE2A2k9ADtHY6flPqh0ekZ6r9ribNIn3M6RFRGHPk4sSOtqWwsG',
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
