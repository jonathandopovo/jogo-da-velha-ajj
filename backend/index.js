const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./db/db.config");
const Player = require("./models/Player");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/getdata", async (req, res) => {
  try {
    const players = await Player.findAll({ order: [["score", "DESC"]] });
    res.send(players);
  } catch (err) {
    console.log(`Erro: ${err}`);
    res.status(500);
  }
});

app.post("/app/createplayers", async (req, res) => {
  try {
    const { player1, player2 } = req.body;
    const search1 = await Player.findOne({ where: { playerName: player1 } });
    const search2 = await Player.findOne({ where: { playerName: player2 } });
    if (search1) {
      await Player.create({
        playerName: player1,
        score: 0,
      });
    }
    if (search2) {
      await Player.create({
        playerName: player2,
        score: 0,
      });
    }
    res.status(200);
  } catch {
    console.log(`Erro: ${err}`);
    res.status(500);
  }
});

app.put("/api/updatescore", async (req, res) => {
  try {
    const { player } = req.body;
    const search = await Player.findOne({ where: { playerName: player } });
    search++;
    await Player.update({ score: search }, { where: { playerName: player } });
    res.status(200);
  } catch (err) {
    console.log(`Erro: ${err}`);
    res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
