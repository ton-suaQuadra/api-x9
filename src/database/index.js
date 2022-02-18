const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Address = require("./models/Address");
const Advertiser = require("./models/Advertiser");
const Contact = require("./models/Contact");
const Property = require("./models/Property");
const Property_address = require("./models/Property_address");

const env = process.env.NODE_ENV || "development";

const connection = new Sequelize(dbConfig[env]);

connection.authenticate().then(function () {
  Address.init(connection);
  Advertiser.init(connection);
  Contact.init(connection);
  Property.init(connection);
  Property_address.init(connection);

  Advertiser.associate(connection.models);
  Property.associate(connection.models);
  Address.associate(connection.models);
});

module.exports = connection;
