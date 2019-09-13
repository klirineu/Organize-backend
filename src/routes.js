const express = require("express");

const authMiddleware = require("./middlewares/auth");

const routes = express.Router();

const UserController = require("./controllers/authController");

routes.post("/register", UserController.register);
routes.post("/authenticate", UserController.authenticate);

routes.use(authMiddleware);

const DevedorController = require("./controllers/DevedorController");

routes.get("/devedores", DevedorController.index);
routes.get("/devedores/order/:nome", DevedorController.show);
routes.get("devedores/order/:nome/:id");
routes.post("/devedores", DevedorController.store);
routes.delete("/devedores/:id", DevedorController.destroy);

module.exports = routes;
