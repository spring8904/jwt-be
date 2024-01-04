'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.Group, {
        through: 'GroupRoles',
      })
    }
  }
  Role.init(
    {
      url: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role',
    },
  )
  return Role
}
