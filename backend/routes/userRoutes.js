const express = require("express");
const userController = require("../controller/userController");

const userRuoter = express.Router();
userRuoter.get("/", userController.getLocations); //Ruta para opteer las geolocalizaciones de todos los usuarios
userRuoter.get("/popup/:id", userController.getPopup);
userRuoter.post("/", userController.addUser); //Ruta para registro de usuarios
userRuoter.post("/addlogo", userController.addLogo);
userRuoter.post("/addImagen", userController.addImagen); //Ruta para agregar logo
userRuoter.post("/login", userController.loginUser);
//aun sin tratar

userRuoter.delete("/:id", userController.deleteUser);
userRuoter.patch("/:id", userController.updateUser);

module.exports = userRuoter;
