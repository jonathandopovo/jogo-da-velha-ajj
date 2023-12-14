const { DataTypes } = require('sequelize');
const sequelize = require('../../db.config');

const Player = sequelize.define('Player', {
  playerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Player;