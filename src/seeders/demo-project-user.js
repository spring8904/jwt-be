/* eslint-disable no-undef */
'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'ProjectUsers',
    [
      { projectId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { projectId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date() },
      { projectId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { projectId: 2, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { projectId: 3, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { projectId: 3, userId: 3, createdAt: new Date(), updatedAt: new Date() },
    ],
    {},
  )
}
export async function down() {
  return queryInterface.bulkDelete('ProjectUsers', null, {})
}
