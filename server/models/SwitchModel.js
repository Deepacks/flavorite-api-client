const mongoose = require("mongoose");

const SwitchSchema = new mongoose.Schema({
  python: Boolean,
});

const Switch = mongoose.model("Switch", SwitchSchema);

module.exports = Switch;
