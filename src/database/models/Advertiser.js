const { Model, DataTypes } = require('sequelize')

class Advertiser extends Model {
    static init(sequelize) {
        super.init(
            {
                name: DataTypes.STRING,
            }, 
            {
                sequelize,
                tableName: 'Advertiser',
            },
        )
    }

    static associate(models) {
        this.hasMany(models.Property, {
            foreignKey: "fk_advertiser"
        })
    }

    static associate(models) {
        this.hasMany(models.Property, {
            foreignKey: "fk_advertiser"
        })
    }
    
}

module.exports = Advertiser;
