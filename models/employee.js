'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsTo(models.Business, {
        foreignKey: 'businessId',
        as: 'businessEmployee',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Employee.belongsTo(models.Job, {
        foreignKey: 'jobId',
        as: 'jobEmployee',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Employee.hasMany(models.Entry, {
        foreignKey: 'employeeId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Employee.init(
    {
      employeeName: DataTypes.STRING,
      // FOR FUTURE UPDATE:
      // employeeEmail: DataTypes.STRING,
      // employeePasswordDigest: DataTypes.STRING,
      jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'jobId',
        onDelete: 'CASCADE',
        references: {
          model: 'jobs',
          key: 'id'
        }
      },
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
      modelName: 'Employee',
      tableName: 'employees'
    }
  )
  return Employee
}
