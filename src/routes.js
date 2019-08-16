const express = require("express");
const routes = express.Router();

const DevedorController = require("./controllers/DevedorController");

routes.get("/devedores", DevedorController.index);
routes.get("/devedores/:id", DevedorController.show);
routes.post("/devedores", DevedorController.store);
routes.put("/devedores/:id", DevedorController.update);
routes.delete("/devedores/:id", DevedorController.destroy);

module.exports = routes;
