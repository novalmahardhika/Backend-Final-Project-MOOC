'use strict'
const { Op } = require("sequelize");


const datas = [
  {
    id: "0c06de8f-ea83-49d6-9447-a4247e5cd4ec",
    title: "Learn Basic Javascript",
    category: "Web Development",
    level: "beginner"
  },
  {
    id: "746112de-b9c0-464b-bc8e-74e524ec1408",
    title: "Learn React Expert",
    category: "Web Development",
    level: "intermediate"
  },
  {
    id: "7b20fea8-cccf-4673-b818-2826ca149f5f",
    title: "From Zero to Hero Kotlin",
    category: "Android Development",
    level: "beginner"
  },
  {
    id: "b5d70188-6b85-4d98-a975-509a80710671",
    title: "Fullstack Next JS",
    category: "Web Development",
    level: "advance"
  },
  {
    id: "e5103ac5-7f43-4fb0-920b-44be6f7c9ef1",
    title: "Data Science Fundamentals",
    category: "Data Science",
    level: "intermediate"
  },
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    title: "UI/UX Design Principles",
    category: "UI/UX Design",
    level: "beginner"
  },
  {
    id: "baec4b8d-0ae7-4fd9-a52e-70015463b12d",
    title: "Product Management Basics",
    category: "Product Management",
    level: "beginner"
  },
  {
    id: "4961290d-9f7e-438d-8f41-dcdd2f799bb3",
    title: "Advanced Android Development",
    category: "Android Development",
    level: "advance"
  },
  {
    id: "87cb85b4-f316-44e8-bd7a-85da3ba64c13",
    title: "iOS Development Masterclass",
    category: "iOS Development",
    level: "intermediate"
  },
  {
    id: "69052af0-a3f9-4f33-a0d0-b6e40e78c919",
    title: "Advanced Data Science Techniques",
    category: "Data Science",
    level: "advance"
  },
  {
    id: "1f2a0062-c061-43e9-817b-1b427d8eca41",
    title: "Advanced Web Design",
    category: "UI/UX Design",
    level: "advance"
  },
  {
    id: "02b948cb-f34d-4e93-b21b-3aed09a61ed0",
    title: "Product Management Strategies",
    category: "Product Management",
    level: "intermediate"
  },
  {
    id: "98fbfb03-5c4a-40fb-9a86-c31f6f62028f",
    title: "Golang Fundamental",
    category: "Web Development",
    level: "beginner"
  },
  {
    id: "05e3a2b8-9764-4d20-aad0-d565237b4da6",
    title: "Advanced iOS Development",
    category: "iOS Development",
    level: "advance"
  },
  {
    id: "ad738f74-ca56-460a-8900-3ad5328d4d05",
    title: "Product Management Workshop",
    category: "Product Management",
    level: "advance"
  },
  {
    id: "a20d6bfd-2b68-4ae9-8cdd-8e99cf7d2fba",
    title: "Mobile App UI/UX Design",
    category: "UI/UX Design",
    level: "intermediate"
  },
  {
    id: "61f88815-909d-4098-8c70-e6f848501d0b",
    title: "Data Science for Business",
    category: "Data Science",
    level: "advance"
  },
  {
    id: "fbc0f659-cd49-4320-b164-118e285fe1ea",
    title: "Web Development Masterclass",
    category: "Web Development",
    level: "advance"
  },
  {
    id: "dd86c454-e9e5-40e7-94ac-de8638abaa0c",
    title: "Integrating Firebase for Android Development",
    category: "Android Development",
    level: "intermediate"
  },
  {
    id: "04288b41-479c-4479-9afe-61bd4a4db5fd",
    title: "Fundamentals of Kotlin for Android",
    category: "Android Development",
    level: "beginner"
  },
];

const type = [
  "premium",
  "free"
]
const level = [
  "beginner",
  "intermediate",
  "advance"
]

const categories = [
  "UI/UX Design",
  "Product Management",
  "Web Development",
  "Android Development",
  "IOS Development",
  "Data Science",
]

const creator = [
  "John Doe", 
  "Jane Doe", 
  "Alex Smith", 
  "Emily Johnson"
]

function getRandomInt(length){
  const index = Math.floor(Math.random() * length)
  return index
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
      category: data.category,
      type: type[getRandomInt(type.length)],
      level: data.level,
      price: Math.random()*200000+50000,
      image: 'https://res.cloudinary.com/djsjnrfv0/image/upload/v1701248815/BINAR/nwnt4ty0nxgrx1hyh8ce.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      telegram: 'https://web.telegram.org/',
      creator: creator[getRandomInt(creator.length)],
      rating: (4 + Math.random()).toFixed(1),
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
