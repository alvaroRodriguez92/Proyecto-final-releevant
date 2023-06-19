const express = require('express')
const valorController = require('../controller/valorControler')

const valorRoutes = express.Router()

valorRoutes.get("/coment", valorController.getValorByUser)
valorRoutes.post("/coment",valorController.addValor)
// valorRoutes.get("/respuesta/:id",valorController)
valorRoutes.post("/respuesta",valorController.addRes)

module.exports = valorRoutes