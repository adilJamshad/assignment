const mongoose = require("mongoose");

const volumeSchema = mongoose.Schema({
  volume: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
volumeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

volumeSchema.set("toJSON", {
  virtuals: true,
});

const VolumeModel = mongoose.model("Volume", volumeSchema);
module.exports = VolumeModel;
