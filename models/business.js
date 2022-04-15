'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Business.belongsTo(models.Owner, {
        foreignKey: 'ownerId',
        as: 'business',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Business.hasOne(models.Log, {
        foreignKey: 'businessId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Business.hasMany(models.Employee, {
        foreignKey: 'businessId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Business.hasMany(models.Job, {
        foreignKey: 'businessId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Business.init(
    {
      businessName: DataTypes.STRING,
      businessAddress: DataTypes.STRING,
      businessCity: DataTypes.STRING,
      businessState: DataTypes.STRING,
      businessImage: DataTypes.STRING,
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'ownerId',
        onDelete: 'CASCADE',
        references: {
          model: 'owners',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Business',
      tableName: 'businesses'
    }
  )
  return Business
}
