'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entry.belongsTo(models.Employee, {
        foreignKey: 'employeeId',
        as: 'employeeEntry',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Entry.belongsTo(models.Log, {
        foreignKey: 'logId',
        as: 'logEntry',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Entry.init(
    {
      entryDate: DataTypes.STRING,
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'employeeId',
        onDelete: 'CASCADE',
        references: {
          model: 'employees',
          key: 'id'
        }
      },
      employeeHours: DataTypes.INTEGER,
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
      modelName: 'Entry',
      tableName: 'entries'
    }
  )
  return Entry
}
