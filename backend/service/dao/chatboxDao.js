const chatboxQueries = require("../mysqlQueries/chatboxQueries")

const dao = {};

dao.getPreguntas = async (id) => await chatboxQueries.getPreguntas(id)
dao.getRespuesta = async (id) => await chatboxQueries.getRespuesta(id)
dao.addPreguntaRespuesta = async (newItem) => await chatboxQueries.addPreguntaRespuessta(newItem)
dao.deletePreguntaRespuesta = async (id) => await chatboxQueries.deletePreguntaRespuesta(id)
dao.updatePreguntaRespuesta = async (id, chatData) => await chatboxQueries.updatePreguntaRespuessta(id, chatData);

module.exports = dao