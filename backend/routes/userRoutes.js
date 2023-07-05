const express = require("express");
const userController = require("../controller/userController");

const userRuoter = express.Router();
userRuoter.get("/:id", userController.getLocationsBySector); //Ruta para opteer las geolocalizaciones de todos los usuarios
userRuoter.get("/email/email",userController.getUserByEmail) //ruta para sacar usuario por email
userRuoter.post("/id",userController.getUserById)
userRuoter.post("/", userController.addUser); //Ruta para registro de usuarios
userRuoter.post("/usernormal", userController.addUserNormal)
userRuoter.post("/addlogo", userController.addImagen);//Ruta para insertar logo
userRuoter.post("/addImagen", userController.addImagen); //Ruta para agregar fotos
userRuoter.post("/login", userController.loginUser); //ruta del login
userRuoter.get("/categoria/:id", userController.getUsersByCategoria); //rutas para sacar todos los usuarios de una categoria
userRuoter.get("/sector/:id", userController.getUsersBySector); //ruta para sacar tosdos los usuarios de un sector
userRuoter.patch("/update/:id", userController.updateUser);//ruta para editar usuario
userRuoter.patch("/:id", userController.deleteUser);

//aun sin tratar


userRuoter.get("/popup/:id", userController.getPopup);



module.exports = userRuoter;
