/* eslint-disable no-undef */
'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          userName: 'ei',
          email: 'ei@mail.com',
          password: '123456',
        },
        {
          userName: 'navia',
          email: 'navia@mail.com',
          password: '123456',
        },
        {
          userName: 'yelan',
          email: 'yelan@mail.com',
          password: '123456',
        },
      ],
      {},
    )
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
