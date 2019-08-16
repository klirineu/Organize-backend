const mongoose = require("mongoose");

const Devedor = mongoose.model("Devedor");

module.exports = {
  async index(req, res) {
    const devedores = await Devedor.find().sort({ nome: 1 });
    return res.json(devedores);
  },

  async show(req, res) {
    const devedor = await Devedor.findById(req.params.id);

    return res.json(devedor);
  },
  //id Rodrigo Alves#6821
  //executa insomina ai
  // express-validation
  async store(req, res) {
    // console.log({ aki: req.body.devedor });
    const { devedor } = req.body;
    const devedor2 = await Devedor.create(devedor);
    // const { nome,Vdiv,parc } = req.params;
    // const { data } = req.params;
    // const data2 = moment(data);
    // const devedor2 = await Devedor.create({nome,Vdiv,parc});
    return res.json(devedor2.tese);
  },

  async update(req, res) {
    const devedor = await Devedor.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(devedor);
  },

  async destroy(req, res) {
    await Devedor.findByIdAndDelete(req.params.id);

    return res.send();
  }
};
