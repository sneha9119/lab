const express = require("express");
const Exchange = require("../models/Exchange");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Request Skill Exchange
router.post("/", authMiddleware, async (req, res) => {
  try {
    const exchange = new Exchange({ ...req.body, requester: req.user.id });
    await exchange.save();
    res.status(201).json(exchange);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Get Exchange Requests
router.get("/", authMiddleware, async (req, res) => {
  try {
    const exchanges = await Exchange.find({ provider: req.user.id }).populate("requester skillRequested skillOffered");
    res.json(exchanges);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
