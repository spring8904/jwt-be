'use strict'
import { Model } from 'sequelize'
export default (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsToMany(models.User, {
        through: 'ProjectUsers',
      })
    }
  }
  Project.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      startDate: DataTypes.DATE,
      customerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Project',
    },
  )
  return Project
}
