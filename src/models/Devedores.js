const mongoose = require("mongoose");

const DevedorSchema = new mongoose.Schema({
  nome: String,
  Vdiv: Number,
  parc: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  countermes: {
    type: Number,
    default: 1
  }
});

mongoose.model("Devedor", DevedorSchema);
