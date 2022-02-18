const { Model, DataTypes } = require("sequelize");

class Property extends Model {
  static init(sequelize) {
    super.init(
      {
        retail_price: DataTypes.DECIMAL,
        IPTU: DataTypes.DECIMAL,
        condominum_fee: DataTypes.DECIMAL,
        square_meters_util: DataTypes.INTEGER,
        square_meters_total: DataTypes.INTEGER,
        bathroom: DataTypes.INTEGER,
        fk_address: DataTypes.INTEGER,
        fk_advertiser: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "Property",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Advertiser);
  }

  static associate(models) {
    this.belongsToMany(models.Property_address, {
      foreignKey: "fk_property",
      through: "Property_address"
    });
  }


}

module.exports = Property;
