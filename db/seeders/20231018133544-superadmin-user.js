'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */

const name = "root";
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
    await queryInterface.bulkInsert('Users', [{
      name,
      email: name + "@gmail.com",
      encryptedPassword: bcrypt.hashSync("root", 10),
      phoneNumber: "082112345678",
      address: "Earth",
      role: "ROOT",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  /** @param {import ("sequelize").QueryInterface} queryInterface */
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', { name })
  }
};
