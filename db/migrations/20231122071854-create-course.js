'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
      },
      title: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM('free', 'premium'),
      },
      level: {
        type: Sequelize.ENUM('beginner', 'intermediate', 'advance'),
      },
      price: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: 'https://res.cloudinary.com/djsjnrfv0/image/upload/v1701248815/BINAR/nwnt4ty0nxgrx1hyh8ce.jpg'
      },
      creator: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT
      },
      telegram: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      audience: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: ['Not easily give up', 'everyone looking to build high-performance', 'Strong desire to learn']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses')
  },
}
