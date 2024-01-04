'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class ProjectUser extends Model {
    static associate() {}
  }
  ProjectUser.init(
    {
      projectId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProjectUser',
    },
  )
  return ProjectUser
}
