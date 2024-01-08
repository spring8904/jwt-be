'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'Projects',
    [
      {
        name: 'Project1',
        description: 'Description for Project1',
        startDate: new Date(),
        customerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project2',
        description: 'Description for Project2',
        startDate: new Date(),
        customerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project3',
        description: 'Description for Project3',
        startDate: new Date(),
        customerId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  )
}
export async function down(queryInterface) {
  return queryInterface.bulkDelete('Projects', null, {})
}
