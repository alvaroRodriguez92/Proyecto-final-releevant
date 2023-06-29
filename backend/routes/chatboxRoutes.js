const express = require('express')
const chatboxController = require('../controller/chatboxController')

const chatboxRoute = express.Router()

chatboxRoute.get("/preguntas/:id", chatboxController.getPreguntas)
chatboxRoute.get("/preguntas/ph/:id", chatboxController.getPRHijas)
chatboxRoute.get("/preguntas/inicio/:id", chatboxController.getPreguntasInicio)
chatboxRoute.get("/respuestas/:id", chatboxController.getRespuesta)
chatboxRoute.post("/addpreguntarespuesta", chatboxController.addPreguntaRespuesta)
chatboxRoute.patch("/updatepreguntarespuesta", chatboxController.udatePreguntaRespuesta)
chatboxRoute.delete("/deletepreguntarespuesta", chatboxController.deletePreguntaRespuesta)

module.exports = chatboxRoute