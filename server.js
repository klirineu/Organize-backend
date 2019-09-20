const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rateLimit = require("./src/middlewares/ratelimit");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true
  }
);

app.use(cors());

app.use(...rateLimit);

require("./src/models/Devedores");
require("./src/models/user");

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3333);
