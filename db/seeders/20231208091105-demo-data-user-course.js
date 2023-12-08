'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */


      await queryInterface.bulkInsert('Users', [{
      id: 'b4704a37-a60f-4ed0-b040-0afa6d2fd6a5',
      name: "Bob",
      email: `bob@mail.com`,
      encryptedPassword: '123456',
      phoneNumber: "08808088808",
      role: "MEMBER",
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};