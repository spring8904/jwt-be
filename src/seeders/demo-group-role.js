/* eslint-disable no-undef */
'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'GroupRoles',
    [
      { groupId: 1, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 1, roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 2, roleId: 3, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 3, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
      { groupId: 3, roleId: 3, createdAt: new Date(), updatedAt: new Date() },
    ],
    {},
  )
}
export async function down() {
  return queryInterface.bulkDelete('GroupRoles', null, {})
}
