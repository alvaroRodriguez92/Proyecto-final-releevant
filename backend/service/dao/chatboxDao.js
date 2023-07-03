const chatboxQueries = require("../mysqlQueries/chatboxQueries")

const dao = {};

dao.getPreguntas = async (id) => await chatboxQueries.getPreguntas(id) //muestra todas las preguntas y respuestas para edtiar
dao.getPreguntasInicio = async (id) => await chatboxQueries.getPreguntasInicio(id) //muestra las preguntas del inicio del chat
dao.getPRHijas = async (id) => await chatboxQueries.getPRHijas(id) //muestra las preguntas hiijas de la anterior
dao.getRespuesta = async (id) => await chatboxQueries.getRespuesta(id)//muestra la respuesta a una pregunta
dao.addPreguntaRespuesta = async (newItem) => await chatboxQueries.addPreguntaRespuessta(newItem) //añadir nueva pregunta y respuesta
dao.deletePreguntaRespuesta = async (id) => await chatboxQueries.deletePreguntaRespuesta(id)//elimina pregunta y respuesta
dao.updatePreguntaRespuesta = async (id, chatData) => await chatboxQueries.updatePreguntaRespuessta(id, chatData); //actualiza pregunta y respuesta

module.exports = dao