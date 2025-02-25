'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Packages', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    duration: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    }
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Packages');
}