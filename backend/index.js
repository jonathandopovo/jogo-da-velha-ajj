const express = require("express");
const app = express();
const cors = require("cors");
const playerRoutes = require("./src/routes/playerRoutes");
const PORT = process.env.PORT || 8000;
require("./db.config");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/player", playerRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
