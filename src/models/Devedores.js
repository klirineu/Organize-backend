const mongoose = require("mongoose");

const DevedorSchema = new mongoose.Schema({
  nome: String,
  Vdiv: Number,
  parc: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  counter: {
    type: Number,
    default: 0
  }
});

mongoose.model("Devedor", DevedorSchema);
