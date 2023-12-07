require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Conexão com banco de dados estabelecida com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco de dados:", err);
  });

module.exports = sequelize;
