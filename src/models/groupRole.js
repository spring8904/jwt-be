'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class GroupRole extends Model {
    static associate() {}
  }
  GroupRole.init(
    {
      groupId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GroupRole',
    },
  )
  return GroupRole
}
