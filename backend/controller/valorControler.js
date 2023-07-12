const dao = require("../service/dao/valorDao");
const addressDao = require("../service/dao/addressDao")
const imgDao = require("../service/dao/imgDao")
const userDao = require("../service/dao/userDao")

const valorController = {}

valorController.getValorByUser = async (req, res) => {
    const { id } = req.params;

    try {
      const valoraciones = await dao.getValorByUser(id);
      if (valoraciones.length <= 0)
        return res.status(409).send("No hay comentarios de clientes"); 
      return res.status(200).send(valoraciones);
    } catch (e) {
      throw new Error(e.message);
    }
  };

valorController.getValorSinRespuesta = async (req,res) => {
  const { id } = req.params;
  console.log(id)
    try {
      const valoraciones = await dao.getValorSinRespuesta(id);
      
      if (valoraciones.length <= 0)
        return res.status(409).send("No hay comentarios de clientes"); 
      return res.status(200).send(valoraciones);
    } catch (e) {
      throw new Error(e.message);
    }
  };


valorController.addValor = async (req,res) => {
 
  const {
        ID_COMENTADO,
        PUNTUACION,
        COMENTARIO,
        ID_COMENTADOR,
      } = req.body;
      const newValor = {
        ID_COMENTADO: ID_COMENTADO,
        PUNTUACION: PUNTUACION,
        COMENTARIO: COMENTARIO,
        ID_COMENTADOR: ID_COMENTADOR,
      };
      try{
        const valor = await dao.addValor(newValor);
        if(!valor) return res.status(400).send("No se ha podido registrar la valoracion")
        const valoraciones = await dao.getValorByUser(ID_COMENTADO)
        return res.status(200).send(valoraciones)
   
      } catch (e) {
        throw new Error(e.message);
      }

      
}
valorController.addRes = async (req,res) => {
    const {
      id,
        ID_VALORACION,
        ID_COMENTADOR,
        RESPUESTA,
      } = req.body;
      const newRes = {
        ID_VALORACION: ID_VALORACION,
        ID_COMENTADOR: ID_COMENTADOR,
        RESPUESTA: RESPUESTA,
      };
      try{
        const respuesta = await dao.addRes(newRes);
        if(!respuesta) return res.status(400).send("No se ha podido registrar la respuesta")

        const valoraciones = await dao.getValorSinRespuesta(id);


        return res.status(200).send(valoraciones)
      } catch (e) {
        throw new Error(e.message);
      }

      
}
module.exports = valorController