const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Organize:klirineu123@cluster0-jk5up.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

require("./src/models/Devedores");

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3333);
