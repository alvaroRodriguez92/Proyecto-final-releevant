const dao = require("../service/dao/chatboxDao");

chatboxController = {}

chatboxController.getPreguntasInicio = async (req,res) => {
    const { id } = req.params;
    try {
      const preguntas = await dao.getPreguntasInicio(id);
      if (preguntas.length <= 0)
        return res.status(409).send("Usuario no ha definido preguntas para el chat"); 
      return res.status(200).send(preguntas);
    } catch (e) {
      throw new Error(e.message);
    }
}
chatboxController.getPreguntas = async (req,res) => {
  const { id } = req.params;
  try {
    const preguntas = await dao.getPreguntas(id);
    if (preguntas.length <= 0)
      return res.status(409).send("Usuario no ha definido preguntas para el chat"); 
    return res.status(200).send(preguntas);
  } catch (e) {
    throw new Error(e.message);
  }
}

chatboxController.getPRHijas = async (req,res) => {
  const { id } = req.params;
  try {
    const preguntas = await dao.getPRHijas(id);
    if (preguntas.length <= 0)
      return res.status(409).send("Pregunta sin hijos"); 
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
        PADRE,
      } = req.body;
      const newItem = {
        ID_USER: ID_USER,
        PREGUNTA: PREGUNTA,
        RESPUESTA: RESPUESTA,
        PADRE: PADRE,
      };
      const valor = await dao.addPreguntaRespuesta(newItem);
      if(!valor) return res.status(400).send("No se ha podido registrar la Item de ChatBox")
      const respuesta = await dao.getPreguntas(ID_USER);
      return res.status(200).send(respuesta)

}
chatboxController.deletePreguntaRespuesta = async (req,res) => {
    const { ID, ID_USER } = req.body;
    try {
      const item = await dao.deletePreguntaRespuesta(ID);
      if (!item)
        return res.status(409).send("Registro no se ha borrado correctamente"); 
        const respuesta = await dao.getPreguntas(ID_USER);
      return res.status(200).send(respuesta);
    } catch (e) {
      throw new Error(e.message);
    }
}
chatboxController.udatePreguntaRespuesta = async (req,res) => {
    try {
        if (Object.entries(req.body).length === 0)
          return res.status(400).send("Error al recibir el body");
        const { ID, ID_USER, PREGUNTA, RESPUESTA, PADRE} = req.body
        const chatData = {
            ID_USER: ID_USER,
            PREGUNTA: PREGUNTA,
            RESPUESTA: RESPUESTA,
            PADRE: PADRE,
        }
        const updateChat = await dao.updatePreguntaRespuesta(ID, chatData);
        const respuesta = await dao.getPreguntas(ID_USER);
        if (updateChat) return res.send(respuesta);
        
      } catch (e) {
        console.log(e.message);
      }
}

module.exports = chatboxController;