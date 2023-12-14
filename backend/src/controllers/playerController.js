const Player = require("../models/Player");

exports.listarPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({ order: [["score", "DESC"]] });
    res.send(players);
  } catch (err) {
    res.status(500);
  }
};

exports.inserirPlayer = async (req, res) => {
  try {
    const { player1, player2 } = req.body;
    const search1 = await Player.findOne({ where: { name: player1 } });
    const search2 = await Player.findOne({ where: { name: player2 } });
    if (search1) {
      await Player.create({
        name: player1,
        score: 0,
      });
    }
    if (search2) {
      await Player.create({
        name: player2,
        score: 0,
      });
    }
    res.status(200);
  } catch {
    res.status(500);
  }
};

exports.atualizarPlayer = async (req, res) => {
  try {
    const { player } = req.body;
    const search = await Player.findOne({ where: { name: player } });
    search++;
    await Player.update({ score: search }, { where: { name: player } });
    res.status(200);
  } catch (err) {
    res.status(500);
  }
};
