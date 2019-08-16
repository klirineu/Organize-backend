const mongoose = require("mongoose");

const DevedorSchema = new mongoose.Schema({
  nome: String,
  Vdiv: Number,
  parc: Number
});

mongoose.model("Devedor", DevedorSchema);
//legal kkk
//pasta demodel n tem models
