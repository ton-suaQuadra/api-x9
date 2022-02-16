"use strict";

const NameTable = "Property";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(NameTable, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      retail_price: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      iptu: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      condominium_fee: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      square_meters_util: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      square_meters_total: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      bathroom: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      real_estate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fk_address: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fk_advertiser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(NameTable);
  },
};
