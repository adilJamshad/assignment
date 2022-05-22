const mongoose = require("mongoose");

const calculationSchema = mongoose.Schema({
  mean: Number,
  stdDev: Number,
  accuracy: Number,
  precision: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Calculation", calculationSchema);
