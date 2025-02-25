// filepath: /c:/Users/anils/OneDrive/Desktop/4feb/backend/migrations/XXXXXXXXXXXXXX-add-timestamps-to-packages.js
'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('Packages', 'createdAt', {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('now')
  });
  await queryInterface.addColumn('Packages', 'updatedAt', {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('now')
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('Packages', 'createdAt');
  await queryInterface.removeColumn('Packages', 'updatedAt');
}