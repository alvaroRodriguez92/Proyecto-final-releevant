const dao = require("../service/dao/chatboxDao");

chatboxController = {}

chatboxController.getPreguntas = async (req,res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const preguntas = await dao.getPreguntas(id);
      if (preguntas.length <= 0)
        return res.status(409).send("Usuario no ha definido preguntas para el chat"); 
      return res.status(200).send(preguntas);
    } catch (e) {
      throw new Error(e.message);
    }
}
chatboxController.getRespuesta = async (req,res) => {
    const { id } = req.params;
    try {
      const respuesta = await dao.getRespuesta(id);
      if (respuesta.length <= 0)
        return res.status(409).send("Pregunta sin respuesta"); 
      return res.status(200).send(respuesta);
    } catch (e) {
      throw new Error(e.message);
    }
}

chatboxController.addPreguntaRespuesta = async (req,res) => {
    const {
        ID_USER,
        PREGUNTA,
        RESPUESTA,
      } = req.body;
      const newItem = {
        ID_USER: ID_USER,
        PREGUNTA: PREGUNTA,
        RESPUESTA: RESPUESTA,
      };
      const valor = await dao.addPreguntaRespuesta(newItem);
      if(!valor) return res.status(400).send("No se ha podido registrar la Item de ChatBox")
      return res.status(200).send("Item registrado")

}
chatboxController.deletePreguntaRespuesta = async (req,res) => {
    const { ID } = req.body;
    try {
      const item = await dao.deletePreguntaRespuesta(ID);
      if (!item)
        return res.status(409).send("Registro no se ha borrado correctamente"); 
      return res.status(200).send("Registro borrado");
    } catch (e) {
      throw new Error(e.message);
    }
}
chatboxController.udatePreguntaRespuesta = async (req,res) => {
    try {
        if (Object.entries(req.body).length === 0)
          return res.status(400).send("Error al recibir el body");
        const { ID, ID_USER, PREGUNTA, RESPUESTA} = req.body
        const chatData = {
            ID_USER: ID_USER,
            PREGUNTA: PREGUNTA,
            RESPUESTA: RESPUESTA,
        }
        const updateChat = await dao.updatePreguntaRespuesta(ID, chatData);
        console.log(updateChat)
        if (updateChat) return res.send(`Chat actualizado`);
        
      } catch (e) {
        console.log(e.message);
      }
}

module.exports = chatboxController;