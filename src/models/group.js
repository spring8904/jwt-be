'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.hasMany(models.User, {
        foreignKey: 'groupId',
      })

      Group.belongsToMany(models.Role, {
        through: 'GroupRoles',
      })
    }
  }
  Group.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Group',
    },
  )
  return Group
}
