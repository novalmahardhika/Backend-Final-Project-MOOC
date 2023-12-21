'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserCourseProgresses', {
      userId: {
        type: Sequelize.UUID,
        references: {
          model:'Users',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      moduleId: {
        type: Sequelize.UUID,
        references: {
          model: 'courseChapterModules',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('UserCourseProgresses');
  }
};