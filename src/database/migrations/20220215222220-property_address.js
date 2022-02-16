"use strict";

const NameTable = "Property_address";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(NameTable, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fk_address: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fk_advertiser: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(NameTable);
  },
};
