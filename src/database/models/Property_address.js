const { Model, DataTypes } = require("sequelize");

class Property_address extends Model {
  static init(sequelize) {
    super.init(
      {
        number: DataTypes.INTEGER,
        complement: DataTypes.STRING,
        fk_address: DataTypes.INTEGER,
        fk_advertiser: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "Property_address",
      }
    );
  }
}

module.exports = Property_address;
