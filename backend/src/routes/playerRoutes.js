const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("/", playerController.listarPlayers);
router.post("/add", playerController.inserirPlayer);
router.post("/update", playerController.atualizarPlayer);

module.exports = router;