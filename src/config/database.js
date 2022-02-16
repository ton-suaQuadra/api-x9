require("dotenv").config();

const { DB_DIALECT, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } =
  process.env;

module.exports = {
  development: {
    dialect: DB_DIALECT || "postgres",
    host: DB_HOST || "localhost",
    username: DB_USERNAME || "postgres",
    password: DB_PASSWORD || "99286980",
    database: DB_DATABASE || "dedo_duro",
    define: {
      timestamps: true, //  para incluir o created_at e updated_ad
      underscored: true, // modelo snackcase
    },
  },
  production: {},
};
