const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL_DB, {
  useNewUrlParser: true
});

require("./src/models/Devedores");

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3333);
