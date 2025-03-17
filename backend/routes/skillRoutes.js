const express = require("express");
const Skill = require("../models/Skill");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add Skill
router.post("/", authMiddleware, async (req, res) => {
  try {
    const skill = new Skill({ ...req.body, user: req.user.id });
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Get All Skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find().populate("user", "name");
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
