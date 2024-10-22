const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// GET /players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;