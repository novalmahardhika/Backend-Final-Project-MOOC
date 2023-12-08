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
    */

      await queryInterface.bulkInsert('UserCourses', [{
      userId: 'b4704a37-a60f-4ed0-b040-0afa6d2fd6a5',
      courseId: '0c06de8f-ea83-49d6-9447-a4247e5cd4ec',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      userId: 'b4704a37-a60f-4ed0-b040-0afa6d2fd6a5',
      courseId: '746112de-b9c0-464b-bc8e-74e524ec1408',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
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
