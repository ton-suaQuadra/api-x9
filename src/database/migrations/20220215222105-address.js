"use strict";

const NameTable = "Address";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(NameTable, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      full_address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(NameTable);
  },
};
