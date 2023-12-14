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
    res.status(500);
  }
};

exports.atualizarPlayer = async (req, res) => {
  try {
    const { player } = req.body;
    const search = await Player.findOne({ where: { playerName: player } });
    search++;
    await Player.update({ score: search }, { where: { playerName: player } });
    res.status(200);
  } catch (err) {
    res.status(500);
  }
};
