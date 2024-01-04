/* eslint-disable no-undef */
'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'Groups',
    [
      {
        name: 'Group1',
        description: 'Description for Group1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Group2',
        description: 'Description for Group2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Group3',
        description: 'Description for Group3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  )
}
export async function down() {
  return queryInterface.bulkDelete('Groups', null, {})
}
