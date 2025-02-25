// filepath: /c:/Users/anils/OneDrive/Desktop/4feb/backend/migrations/XXXXXXXXXXXXXX-add-headdescription-to-packages.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Packages', 'headdescription', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Packages', 'headdescription');
  }
};