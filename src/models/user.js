const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  senha: {
    type: String,
    require: true,
    select: false
  }
});

UserSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

mongoose.model("User", UserSchema);
