'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Owner.hasMany(models.Business, {
        foreignKey: 'ownerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Owner.init(
    {
      ownerName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ownerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      ownerPasswordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Owner',
      tableName: 'owners'
    }
  )
  return Owner
}
