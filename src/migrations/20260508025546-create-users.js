'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('users', {

      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },

      username: {
        type: Sequelize.STRING,
        unique: true
      },

      email: {
        type: Sequelize.STRING,
        unique: true
      },

      password: {
        type: Sequelize.STRING
      },

      role: {
        type: Sequelize.STRING,
        defaultValue: 'mahasiswa'
      },

      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },

      created_at: {
        type: Sequelize.DATE
      },

      updated_at: {
        type: Sequelize.DATE
      }

    })

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users')
    
  }
};
