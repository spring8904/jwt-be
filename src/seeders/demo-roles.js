'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'Roles',
    [
      {
        url: '/role1',
        description: 'Description for Role1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: '/role2',
        description: 'Description for Role2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: '/role3',
        description: 'Description for Role3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],

    {},
  )
}
export async function down(queryInterface) {
  return queryInterface.bulkDelete('Roles', null, {})
}
