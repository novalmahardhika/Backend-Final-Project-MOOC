'use strict'
const { Op } = require("sequelize");

const title = [
  "Learn Basic Javascript",
  "Front-End Development",
  "Back-End Development",
  "UI/UX Development"
]
const type = [
  "premium",
  "free"
]
const level = [
  "beginner",
  "intermediate",
  "advance"
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const timestamp = new Date();

    const courses = title.map((title) => ({
      title,
      type: type[getRandomInt(type.length)],
      level: level[getRandomInt(level.length)],
      price: Math.random()*200000+50000,
      image: './image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      creator: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date(),
    }))

    await queryInterface.bulkInsert('Courses', courses)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Courses', { title: { [Op.in]: title } });
  },
}
