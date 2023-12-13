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

      cardNumber: {
        type: Sequelize.STRING, 
      },
      cardHolderName: {
        type: Sequelize.STRING,
      },
      cvv: {
        type: Sequelize.STRING,
        validate: {
          isNumeric: true,
          len: [3, 4],
        },
      },
      expiryDate: {
        type: Sequelize.STRING,
        validate: {
          is: /^(0[1-9]|1[0-2])\/\d{2}$/,
        },
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
    await queryInterface.dropTable('Orders');
  }
};