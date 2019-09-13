const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
});

require("./src/models/Devedores");
require("./src/models/user");

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3333);
