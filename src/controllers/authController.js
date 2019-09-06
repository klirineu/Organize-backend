const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authconfig = require("../config/auth");

const User = mongoose.model("User");

module.exports = {
  async register(req, res) {
    const { nome } = req.body;

    if (await User.findOne({ nome }))
      return res.status(400).send({ error: "Usuário já existe" });

    const user = await User.create(req.body);

    user.senha = undefined;

    const token = jwt.sign({ id: user.id }, authconfig.secret, {
      expiresIn: 86400
    });

    return res.json({ user, token });
  },

  async authenticate(req, res) {
    const { nome, senha } = req.body;

    const user = await User.findOne({ nome }).select("+senha");

    if (!user) return res.status(400).send({ error: "usuário não existe" });

    if (!(await bcrypt.compare(senha, user.senha)))
      return res.status(400).send({ error: "senha inválida" });

    user.senha = undefined;

    const token = jwt.sign({ id: user.id }, authconfig.secret, {
      expiresIn: 86400
    });

    return res.json({ user, token });
  }
};
