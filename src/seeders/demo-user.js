/* eslint-disable no-undef */
'use strict'

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'Users',
    [
      {
        userName: 'user1',
        email: 'user1@example.com',
        password: 'password1',
        address: '123 Main St',
        gender: 'Male',
        phone: '123-456-7890',
        groupId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'user2',
        email: 'user2@example.com',
        password: 'password2',
        address: '456 Oak Ave',
        gender: 'Female',
        phone: '987-654-3210',
        groupId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'user3',
        email: 'user3@example.com',
        password: 'password3',
        address: '789 Pine Blvd',
        gender: 'Male',
        phone: '111-222-3333',
        groupId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  )
}
export async function down() {
  return queryInterface.bulkDelete('Users', null, {})
}
