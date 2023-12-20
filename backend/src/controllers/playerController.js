const Player = require("../models/Player");

exports.listarPlayers = async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1 });
    res.send(players);
  } catch (err) {
    res.status(500);
  }
};

exports.inserirPlayer = async (req, res) => {
  try {
    const { player1, player2 } = req.body;

    const search1 = await Player.findOne({ name: player1 });
    const search2 = await Player.findOne({ name: player2 });
    if (!search1) {
      const newPlayer1 = new Player({ name: player1, score: 0 });
      await newPlayer1.save();
    }

    if (!search2) {
      const newPlayer2 = new Player({ name: player2, score: 0 });
      await newPlayer2.save();
    }
    res.send(200);
  } catch {
    res.status(500);
  }
};

exports.atualizarPlayer = async (req, res) => {
  try {
    const { player } = req.body;
    await Player.updateOne({ name: player }, { $inc: { score: 1 } });
    res.status(200);
  } catch (err) {
    res.status(500);
  }
};
