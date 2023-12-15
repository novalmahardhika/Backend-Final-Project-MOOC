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
  {
    id: "f1bfd929-38e6-4225-b113-3ead2e57cf30",
    title: 'Introduction to Data Science',
    courseId: 'e5103ac5-7f43-4fb0-920b-44be6f7c9ef1',
    chapterNumber: 1,
    duration: 60
  },
  {
    id: "ab50f2c1-e820-4ae8-8e8f-4416467021b5",
    title: 'Exploring Data Analysis Techniques',
    courseId: 'e5103ac5-7f43-4fb0-920b-44be6f7c9ef1',
    chapterNumber: 2,
    duration: 60
  },
  {
    id: "44a42547-3b5a-4b77-a82f-7c22edde8e0e",
    title: 'Advanced Data Visualization',
    courseId: 'e5103ac5-7f43-4fb0-920b-44be6f7c9ef1',
    chapterNumber: 3,
    duration: 60
  },
  {
    id: "643854cb-c41b-4769-a460-878647a89fdc",
    title: 'Machine Learning Fundamentals',
    courseId: 'e5103ac5-7f43-4fb0-920b-44be6f7c9ef1',
    chapterNumber: 4,
    duration: 60
  },



  {
    id: "03969ad2-9080-4919-a92d-7d1cc8ab6e35",
    title: 'Introduction to UI/UX Design',
    courseId: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    chapterNumber: 1,
    duration: 60
  },
  {
    id: "b69148d7-42e4-4061-bb56-3b6af0ac9f14",
    title: 'Fundamentals of User Interface Design',
    courseId: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    chapterNumber: 2,
    duration: 60
  },
  {
    id: "d3e6ceb0-99aa-4116-ac48-49800f38fa4f",
    title: 'Essentials of User Experience Design',
    courseId: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    chapterNumber: 3,
    duration: 60
  },
  {
    id: "827a77f3-18c3-49b7-bcb1-2e747c39c5cc",
    title: 'Usability Testing and User Feedback',
    courseId: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    chapterNumber: 4,
    duration: 60
  },



  {
    id: "53a8ced1-d6ae-42a5-b9c3-601a5f3c475a",
    title: 'Introduction to Product Management',
    courseId: 'baec4b8d-0ae7-4fd9-a52e-70015463b12d',
    chapterNumber: 1,
    duration: 60
  },
  {
    id: "de97860d-4f0b-463c-b6ca-b2c4090cd436",
    title: 'Product Management Fundamentals',
    courseId: 'baec4b8d-0ae7-4fd9-a52e-70015463b12d',
    chapterNumber: 2,
    duration: 60
  },
  {
    id: "668c5467-8bcb-46e9-934a-15482c14025c",
    title: 'Business Strategies in Product Management',
    courseId: 'baec4b8d-0ae7-4fd9-a52e-70015463b12d',
    chapterNumber: 3,
    duration: 60
  },
  {
    id: "6a183bc0-7c71-4e3e-80fb-b1d728e0a4ea",
    title: 'Core Files in Product Management',
    courseId: 'baec4b8d-0ae7-4fd9-a52e-70015463b12d',
    chapterNumber: 4,
    duration: 60
  },



  {
    id: "24b42aeb-8688-4321-9904-68025ea6a6a8",
    title: 'Welcome and Prerequisites',
    courseId: '4961290d-9f7e-438d-8f41-dcdd2f799bb3',
    chapterNumber: 1,
    duration: 60
  },
  {
    id: "37b87ce4-5c8f-4f34-b267-eeed502e23fe",
    title: 'Data Management in Android',
    courseId: '4961290d-9f7e-438d-8f41-dcdd2f799bb3',
    chapterNumber: 2,
    duration: 60
  },
  {
    id: "2b457ac7-5031-47a6-b67d-74fdbb402d81",
    title: 'Expert-Level Android Development Courses',
    courseId: '4961290d-9f7e-438d-8f41-dcdd2f799bb3',
    chapterNumber: 3,
    duration: 60
  },
  {
    id: "41fd7073-e311-43bc-9167-8f7d2731e81b",
    title: 'Production-Ready Android Apps',
    courseId: '4961290d-9f7e-438d-8f41-dcdd2f799bb3',
    chapterNumber: 4,
    duration: 60
  },



  {
    id: "2b21b492-f091-4b16-8edc-3c0cf9200148",
    title: 'Introduction to iOS Development',
    courseId: '87cb85b4-f316-44e8-bd7a-85da3ba64c13',
    chapterNumber: 1,
    duration: 60
  },
  {
    id: "62fee671-126b-456f-9153-f3dbff650892",
    title: 'SwiftUI and SwiftData Masterclass',
    courseId: '87cb85b4-f316-44e8-bd7a-85da3ba64c13',
    chapterNumber: 2,
    duration: 60
  },
  {
    id: "c99b2a5c-8be3-4c96-89bf-a7e3f6b07203",
    title: 'Expert-Level iOS Development Courses',
    courseId: '87cb85b4-f316-44e8-bd7a-85da3ba64c13',
    chapterNumber: 3,
    duration: 60
  },
  {
    id: "d12395a1-3dae-4596-bbff-1e042cf4f0ba",
    title: 'Building Your First iOS App',
    courseId: '87cb85b4-f316-44e8-bd7a-85da3ba64c13',
    chapterNumber: 4,
    duration: 60
  },



  {
    id: "165058cc-d4c0-42ba-8c21-d713a00df88c",
    title: 'Foundations of Advanced Data Science',
    courseId: '69052af0-a3f9-4f33-a0d0-b6e40e78c919',
    chapterNumber: 1,
    duration: 60
  },
  {
    id: "75b7ef74-a6cf-4fc3-8344-3609b6606f8e",
    title: 'Advanced Machine Learning',
    courseId: '69052af0-a3f9-4f33-a0d0-b6e40e78c919',
    chapterNumber: 2,
    duration: 60
  },
  {
    id: "2d811e8f-6035-4ee8-a9b3-17d02864b533",
    title: 'Big Data Analytics',
    courseId: '69052af0-a3f9-4f33-a0d0-b6e40e78c919',
    chapterNumber: 3,
    duration: 60
  },
  {
    id: "bf0b569e-4def-4583-85a5-52faf168a58a",
    title: 'Advanced Data Science Applications',
    courseId: '69052af0-a3f9-4f33-a0d0-b6e40e78c919',
    chapterNumber: 4,
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
