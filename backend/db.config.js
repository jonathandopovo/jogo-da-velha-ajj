const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = {
  config: new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      port: process.env.DB_PORT,
    }
  ),
  dataTypes: DataTypes,
};

module.exports = sequelize;
