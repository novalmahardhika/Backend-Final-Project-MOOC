'use strict'
const { Op } = require("sequelize");


const datas = [
  {
    id: "0c06de8f-ea83-49d6-9447-a4247e5cd4ec",
    title: "Learn Basic Javascript",
    category: "Web Development",
    type: "free",
  },
  {
    id: "746112de-b9c0-464b-bc8e-74e524ec1408",
    title: "Learn React Expert",
    category: "Web Development",
    type: "free",
  },
  {
    id: "7b20fea8-cccf-4673-b818-2826ca149f5f",
    title: "From Zero to Hero Kotlin",
    category: "Android Development",
    type: "premium",
  },
  {
    id: "b5d70188-6b85-4d98-a975-509a80710671",
    title: "Fullstack Next JS",
    category: "Web Development",
    type: "premium",
  },
  {
    id: "e5103ac5-7f43-4fb0-920b-44be6f7c9ef1",
    title: "Data Science Fundamentals",
    category: "Data Science",
    type: "premium",
  },
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    title: "UI/UX Design Principles",
    category: "UI/UX Design",
    type: "free",
  },
  {
    id: "baec4b8d-0ae7-4fd9-a52e-70015463b12d",
    title: "Product Management Basics",
    category: "Product Management",
    type: "free",
  },
  {
    id: "4961290d-9f7e-438d-8f41-dcdd2f799bb3",
    title: "Advanced Android Development",
    category: "Android Development",
    type: "free",
  },
  {
    id: "87cb85b4-f316-44e8-bd7a-85da3ba64c13",
    title: "IOS Development Masterclass",
    category: "IOS Development",
    type: "premium",
  },
  {
    id: "69052af0-a3f9-4f33-a0d0-b6e40e78c919",
    title: "Advanced Data Science Techniques",
    category: "Data Science",
    type: "premium",
  },
  {
    id: "1f2a0062-c061-43e9-817b-1b427d8eca41",
    title: "Advanced Web Design",
    category: "UI/UX Design",
    type: "premium",
  },
  {
    id: "02b948cb-f34d-4e93-b21b-3aed09a61ed0",
    title: "Product Management Strategies",
    category: "Product Management",
    type: "premium",
  },
  {
    id: "98fbfb03-5c4a-40fb-9a86-c31f6f62028f",
    title: "Golang Fundamental",
    category: "Web Development",
    type: "premium",
  },
  {
    id: "05e3a2b8-9764-4d20-aad0-d565237b4da6",
    title: "Advanced IOS Development",
    category: "IOS Development",
    type: "free",
  },
  {
    id: "ad738f74-ca56-460a-8900-3ad5328d4d05",
    title: "Product Management Workshop",
    category: "Product Management",
    type: "free",
  },
  {
    id: "a20d6bfd-2b68-4ae9-8cdd-8e99cf7d2fba",
    title: "Mobile App UI/UX Design",
    category: "UI/UX Design",
    type: "free",
  },
  {
    id: "61f88815-909d-4098-8c70-e6f848501d0b",
    title: "Data Science for Business",
    category: "Data Science",
    type: "free",
  },
  {
    id: "fbc0f659-cd49-4320-b164-118e285fe1ea",
    title: "Fullstack Web Development",
    category: "Web Development",
    type: "premium",
  },
  {
    id: "dd86c454-e9e5-40e7-94ac-de8638abaa0c",
    title: "Integrating Firebase for Android Development",
    category: "Android Development",
    type: "premium",
  },
  {
    id: "04288b41-479c-4479-9afe-61bd4a4db5fd",
    title: "Fundamentals of Kotlin for Android",
    category: "Android Development",
    type: "premium",
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
      type: data.type,
      level: data.type === "free" ? "beginner" : getRandomLevel(),
      price: data.type === "free" ? 0 : Math.random() * 200000 + 50000,
      image: 'https://res.cloudinary.com/djsjnrfv0/image/upload/v1701248815/BINAR/nwnt4ty0nxgrx1hyh8ce.jpg',
      description: getDescription(data.category),
      telegram: 'https://web.telegram.org/',
      creator: creator[getRandomInt(creator.length)],
      rating: (4 + Math.random()).toFixed(1),
      createdAt: new Date(),
      updatedAt: new Date(),
    }))

    function getRandomLevel() {
      const index = getRandomInt(level.length);
      return level[index];
    }

    function getDescription(category) {
      switch (category) {
        case "UI/UX Design":
          return 'Master the principles of UI/UX design and create visually stunning and user-friendly interfaces. Dive into the world of user experience to enhance the usability and appeal of your designs.';
        case "Product Management":
          return 'Unleash your product management potential! From understanding the basics to implementing advanced strategies, this course is your comprehensive guide to excelling in the field of product management.';
        case "Web Development":
          return 'Embark on a journey to become a web development master. Learn the latest technologies and frameworks to build responsive and dynamic web applications that meet industry standards.';
        case "Android Development":
          return 'Begin your Android development adventure! Explore the fundamentals of Android app development and advance to building complex, feature-rich applications. Unlock the potential of the Android platform.';
        case "IOS Development":
          return 'Become an IOS development expert! From mastering the Swift programming language to creating cutting-edge IOS applications, this course will equip you with the skills needed for success in the IOS development landscape.';
        case "Data Science":
          return 'Dive deep into the world of data science! Learn fundamental and advanced techniques for data analysis, machine learning, and predictive modeling. Harness the power of data to make informed decisions and solve complex problems.';
        default:
          return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
      }
    }
    

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
