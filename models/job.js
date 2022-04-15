'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.Business, {
        foreignKey: 'businessId',
        as: 'job',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Job.init(
    {
      jobTitle: DataTypes.STRING,
      jobDescription: DataTypes.STRING,
      businessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'businessId',
        onDelete: 'CASCADE',
        references: {
          model: 'businesses',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Job',
      tableName: 'jobs'
    }
  )
  return Job
}
