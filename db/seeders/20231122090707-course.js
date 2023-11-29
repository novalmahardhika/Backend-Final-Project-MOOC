'use strict'
const { Op } = require("sequelize");


const datas = [
  {
    id: "0c06de8f-ea83-49d6-9447-a4247e5cd4ec",
    title: "Learn Basic Javascript"
  },
  {
    id: "746112de-b9c0-464b-bc8e-74e524ec1408",
    title: "Learn React Expert"
  },
  {
    id: "7b20fea8-cccf-4673-b818-2826ca149f5f",
    title: "From Zero to Hero Kotlin"
  },
  {
    id: "b5d70188-6b85-4d98-a975-509a80710671",
    title: "Fullstack Next JS"
  },
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

    const courses = datas.map((data) => ({
      id: data.id,
      title: data.title,
      type: type[getRandomInt(type.length)],
      level: level[getRandomInt(level.length)],
      price: Math.random()*200000+50000,
      image: 'https://res.cloudinary.com/djsjnrfv0/image/upload/v1701248815/BINAR/nwnt4ty0nxgrx1hyh8ce.jpg',
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
    // await queryInterface.bulkDelete('Courses', { title: { [Op.in]: title } });
  },
}
