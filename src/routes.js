const express = require("express");
const routes = express.Router();

const DevedorController = require("./controllers/DevedorController");

routes.get("/devedores", DevedorController.index);
routes.get("/devedores/order/:nome", DevedorController.show);
routes.post("/devedores", DevedorController.store);
routes.delete("/devedores/:id", DevedorController.destroy);

module.exports = routes;
