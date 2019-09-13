const mongoose = require("mongoose");

const Devedor = mongoose.model("Devedor");

module.exports = {
  async index(req, res) {
    const nomes = await Devedor.distinct("nome");
    const devedores = await Devedor.find();
    return res.json(nomes);
  },

  async show(req, res) {
    //const devedor = await Devedor.distinct("nome");
    const teste = await Devedor.find({ nome: { $eq: req.params.nome } });
    //return res.json(devedor);
    return res.json(teste);
  },
  // express-validation
  async store(req, res) {
    const { devedor } = req.body;
    const devedor2 = await Devedor.create(devedor);
    return res.json(devedor2.tese);
  },

  async destroy(req, res) {
    await Devedor.findByIdAndDelete(req.params.id);

    return res.send();
  }
};
