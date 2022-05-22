const express = require("express");
const VolumeModel = require("../models/Volume");

const volumeRouter = express.Router();

volumeRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newVolume = await VolumeModel.create(data);
    res.status(201).send(newVolume);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

volumeRouter.get("/", async (req, res) => {
  try {
    const volumeData = await VolumeModel.find();
    const mean = (
      volumeData.reduce((f, s) => f + s.volume, 0) / volumeData.length
    ).toFixed(2);

    const stdValues = volumeData.map((item) =>
      Math.pow(Math.abs(item.volume - mean), 2)
    );
    const stdDev = Math.sqrt(
      stdValues.reduce((f, s) => f + s, 0) / stdValues.length
    ).toFixed(2);
    const accuracy = (mean / 100).toFixed(4) * 100;
    const precision = (1 - stdDev / mean).toFixed(4) * 100;
    res.status(200).send({
      data: {
        volumes: volumeData,
        mean,
        standardDeviation: stdDev,
        accuracy,
        precision,
      },
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = volumeRouter;
