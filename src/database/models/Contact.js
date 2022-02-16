const { Model, DataTypes } = require('sequelize')

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                number: DataTypes.STRING,
                fk_advertiser: DataTypes.INTEGER,
            }, 
            {
                sequelize,
                tableName: 'Contact',
            },
        )
    }

    static associate(models) {
        this.belongsTo(models.Contact)
    }
}

module.exports = Contact;