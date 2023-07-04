const express = require('express')
const visitaController = require('../controller/visitaController')

const visitaRouter = express.Router()

visitaRouter.get("/:id",visitaController.visitaTotal)
visitaRouter.get("/mes/:id",visitaController.visitaMes)
visitaRouter.get("/semana/:id",visitaController.visitaSemana)
visitaRouter.get("/anual/:id",visitaController.visitaAnual)

module.exports = visitaRouter