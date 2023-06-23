const express = require('express')
const perfilController = require("../controller/perfilControler.js")

const perfilRoutes = express.Router()

perfilRoutes.get("/:id", perfilController.getPerfil)

module.exports = perfilRoutes