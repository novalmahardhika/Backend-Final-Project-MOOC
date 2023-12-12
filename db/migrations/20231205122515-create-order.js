'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
      },
      userId: {
        type: Sequelize.UUID,
        references: {
         model: 'Users',
         key: 'id'
        },
        onDelete: 'CASCADE'
      },
      courseId: {
        type: Sequelize.UUID,
        references: {
          model: 'Courses',
          key: 'id'
        },
        onDelete: 'CASCADE'
      } ,
      status: {
        type: Sequelize.ENUM("PENDING", "COMPLETED", "CANCELED"),
        defaultValue: "PENDING",
      },
      paymentMethod: Sequelize.STRING,
      expiredDateAt: Sequelize.DATE,
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
    await queryInterface.dropTable('Orders');
  }
};