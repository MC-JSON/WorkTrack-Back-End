'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', [
      {
        employeeName: 'Mike Michaels',
        jobId: 1,
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'John Johns',
        jobId: 1,
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Trish Fallon',
        jobId: 1,
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Branko Sokolovsky',
        jobId: 2,
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Nathalie MacTamhais',
        jobId: 3,
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Nikolina Herbertson',
        jobId: 3,
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Iqbal Saitou',
        jobId: 4,
        businessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Anantha Ruane',
        jobId: 5,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Boos Fitzsimmons',
        jobId: 5,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Merten Gauthier',
        jobId: 5,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Efe Kulkarni',
        jobId: 5,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Saga Arissen',
        jobId: 6,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Kortney Korosec',
        jobId: 6,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Gamal Jenson',
        jobId: 7,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Ana Blakely',
        jobId: 7,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Christel Romilly',
        jobId: 8,
        businessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Osiris Aust',
        jobId: 9,
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Artemon Moon',
        jobId: 10,
        businessId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'June Benenati',
        jobId: 11,
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Jirair Aquila',
        jobId: 11,
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Sime Oster',
        jobId: 11,
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Octavianus Benson',
        jobId: 12,
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Umukoro Buckholtz',
        jobId: 13,
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Matheus Vang',
        jobId: 14,
        businessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Cvijeta Antonisen',
        jobId: 15,
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Giulio Cardoso',
        jobId: 15,
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeName: 'Etain Fabbro',
        jobId: 15,
        businessId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('employees', null, {})
  }
}
