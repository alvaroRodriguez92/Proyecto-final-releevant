const express = require('express')
const chatboxController = require('../controller/chatboxController')

const chatboxRoute = express.Router()

chatboxRoute.get("/preguntas/:id", chatboxController.getPreguntas)
chatboxRoute.get("/respuestas/:id", chatboxController.getRespuesta)
chatboxRoute.post("/addpreguntarespuesta", chatboxController.addPreguntaRespuesta)
chatboxRoute.patch("/updatepreguntarespuesta", chatboxController.udatePreguntaRespuesta)
chatboxRoute.delete("/deletepreguntarespuesta", chatboxController.deletePreguntaRespuesta)

module.exports = chatboxRoute