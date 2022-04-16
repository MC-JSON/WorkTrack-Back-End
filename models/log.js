'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Log.belongsTo(models.Business, {
        foreignKey: 'businessId',
        as: 'log',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      // Log.hasMany(models.Employee, {
      //   foreignKey: 'logId',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE'
      // })
      Log.hasMany(models.Entry, {
        foreignKey: 'logId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Log.init(
    {
      // logDate: DataTypes.STRING,
      // employeeId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   field: 'employeeId',
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'employees',
      //     key: 'id'
      //   }
      // },
      // employeeHours: DataTypes.INTEGER,
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
      modelName: 'Log',
      tableName: 'logs'
    }
  )
  return Log
}
