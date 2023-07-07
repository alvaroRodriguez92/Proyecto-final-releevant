const express = require('express')
const valorController = require('../controller/valorControler')

const valorRoutes = express.Router()

valorRoutes.get("/coment/:id", valorController.getValorByUser)
valorRoutes.post("/coment",valorController.addValor)
valorRoutes.get("/responder/:id",valorController.getValorSinRespuesta)
valorRoutes.post("/respuesta",valorController.addRes)

module.exports = valorRoutes