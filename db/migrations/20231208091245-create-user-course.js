'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserCourses', {
      userId: {
        type: Sequelize.UUID,
        references: {
          model:'Users',
          key: 'id',
        }
      },

      courseId: {
        type: Sequelize.UUID,
        references: {
        model: 'Courses',
        key: 'id'
      }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserCourses');
  }
};