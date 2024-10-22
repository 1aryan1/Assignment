const express = require('express');
const Team = require('../models/Team');
const Player = require('../models/Player');
const router = express.Router();

// POST /teams
router.post('/', async (req, res) => {
    const { players } = req.body;
    if (players.length > 11) return res.status(400).json({ message: "A team can have a maximum of 11 players." });

    try {
        const team = new Team({ players });
        await team.save();
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /teams/:id
router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id).populate('players');
        if (!team) return res.status(404).json({ message: "Team not found." });
        res.json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
