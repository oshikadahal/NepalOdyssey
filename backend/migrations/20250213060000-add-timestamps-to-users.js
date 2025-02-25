'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    });
    await queryInterface.addColumn('Users', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'createdAt');
    await queryInterface.removeColumn('Users', 'updatedAt');
  }
};