const mongoose = require("mongoose");

const Devedor = mongoose.model("Devedor");

module.exports = {
  async index(req, res) {
    const nomes = await Devedor.distinct("nome");
    //const devedores = await Devedor.find();
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

  async update(req, res) {
    const { devedor } = req.body;
    const devedor2 = await Devedor.findByIdAndUpdate(req.params.id, {
      $set: {
        nome: devedor.nome,
        Vdiv: devedor.Vdiv,
        parc: devedor.parc
      }
    });
    return res.json(devedor2);
  },

  async destroy(req, res) {
    await Devedor.findByIdAndDelete(req.params.id);

    return res.send();
  },
  async counters(req, res) {
    const devedor = await Devedor.findById(req.params.id);
    const { counter, Vdiv } = devedor;
    devedor.counter += 1;

    await devedor.save();

    //req.io.emit("counter", devedor);

    return res.json({ devedor });
  }
};
