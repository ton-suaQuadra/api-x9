const { Model, DataTypes } = require('sequelize')
const 

class Address extends Model {
    static init(sequelize) {
        super.init(
            {
                full_address: DataTypes.STRING,
                address_number: DataTypes.INTEGER,
                district: DataTypes.STRING,
                city: DataTypes.STRING,
                state: DataTypes.CHAR,
            }, 
            {
                sequelize,
                tableName: 'Address',
            },
        )
    }

    static associate(models) {
        this.belongsToMany(models.Property, {
          foreignKey: "fk_address",
          through: "Property_address"
        });
      }
}

module.exports = Address;
