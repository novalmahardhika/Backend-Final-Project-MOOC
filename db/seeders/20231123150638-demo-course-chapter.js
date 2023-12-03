'use strict'


const chapters = [
  {
    id: "b1d45d20-5307-4f4e-bb5d-44fe9bb5a65d",
    title: 'OOP in Javascript',
    courseId: '0c06de8f-ea83-49d6-9447-a4247e5cd4ec',
    chapterNumber: 1,
    duration: 60
  },
   {
    id: "b726c700-174f-4c63-9afa-c7a8f7946f8a",
    title: 'Looping in Javascript',
    courseId: '0c06de8f-ea83-49d6-9447-a4247e5cd4ec',
    chapterNumber: 2,
    duration: 60
  },

   {
    id: "c9ec4e52-0f14-41bb-96c5-5d0ef6b4d544",
    title: 'React Hook',
    courseId: '746112de-b9c0-464b-bc8e-74e524ec1408',
    chapterNumber: 1,
    duration: 60
  },{
    id: "2d193631-313a-4f33-a111-eefa4197c4bd",
    title: 'Global State Management',
    courseId: '746112de-b9c0-464b-bc8e-74e524ec1408',
    chapterNumber: 2,
    duration: 60
  }, 

  {
    id: "88d77f39-36bf-46c8-bf6c-92411c5abf87",
    title: 'Get Started Kotlin',
    courseId: '7b20fea8-cccf-4673-b818-2826ca149f5f',
    chapterNumber: 1,
    duration: 60
  },
  {
    id: "fde78c87-2ff9-4fa5-a823-2c49243ed103",   
    title: 'Basic Syntax Kotlin',
    courseId: '7b20fea8-cccf-4673-b818-2826ca149f5f',
    chapterNumber: 2,
    duration: 60
  },
  
  {
    id: "587386f0-a011-42df-83e0-4892e9e0c7a4",
    title: 'Get Started Next JS',
    courseId: 'b5d70188-6b85-4d98-a975-509a80710671',
    chapterNumber: 1,
    duration: 60
  },
{
    id: "9c0f9722-6733-48d3-8284-c865fc4fe061",
    title: 'SSR in Next JS',
    courseId: 'b5d70188-6b85-4d98-a975-509a80710671',
    chapterNumber: 2,
    duration: 60
  },
]

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
     *
     *
     */

    const courseChapters = chapters.map((chapter)=> ({
      id: chapter.id,
      title: chapter.title,
      courseId: chapter.courseId,
      chapterNumber: chapter.chapterNumber,
      duration: chapter.duration,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

      await queryInterface.bulkInsert('CourseChapters',courseChapters)

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
