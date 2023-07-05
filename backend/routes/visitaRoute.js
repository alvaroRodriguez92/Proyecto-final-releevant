const express = require('express')
const visitaController = require('../controller/visitaController')

const visitaRouter = express.Router()

visitaRouter.post("/",visitaController.visitasRandom)
visitaRouter.get("/total/:id",visitaController.visitaTotal)
visitaRouter.get("/mes/:id",visitaController.visitaMes)
visitaRouter.get("/semana/:id",visitaController.visitaSemana)
visitaRouter.post("/anual",visitaController.visitaAnual)

module.exports = visitaRouter