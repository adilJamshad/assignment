const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.port || 8000;
const mongodbLink = process.env.MONGDODBLINK;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const volumeRouter = require("./routes/volumes");

app.use("/volume", volumeRouter);

mongoose.connect(mongodbLink, { useNewUrlParser: true }, () =>
  console.log("Db has connected!!")
);

app.listen(PORT, () => console.log("server is listening at: " + PORT));
