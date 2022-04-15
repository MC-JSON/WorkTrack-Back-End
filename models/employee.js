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
      Employee.belongsTo(models.Log, {
        foreignKey: 'logId',
        as: 'logEmployee',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Employee.belongsTo(models.Job, {
        foreignKey: 'jobId',
        as: 'jobEmployee',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Employee.init(
    {
      employeeName: DataTypes.STRING,
      // employeeEmail: DataTypes.STRING,
      // employeePassword: DataTypes.STRING,
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
      },
      logId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'logId',
        onDelete: 'CASCADE',
        references: {
          model: 'logs',
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
