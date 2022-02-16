"use strict";

const NameTable = "Contact";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(NameTable, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fk_advertiser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(NameTable);
  },
};
