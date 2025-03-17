const mongoose = require("mongoose");

const ExchangeSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  skillRequested: { type: mongoose.Schema.Types.ObjectId, ref: "Skill", required: true },
  skillOffered: { type: mongoose.Schema.Types.ObjectId, ref: "Skill", required: true },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
});

module.exports = mongoose.model("Exchange", ExchangeSchema);
