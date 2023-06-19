const dao = require("../service/dao/valorDao");

const valorController = {}

valorController.getValorByUser = async (req, res) => {
    const { ID_COMENTADO } = req.body;
    let valorRes =[]
    try {
      const valoraciones = await dao.getValorByUser(ID_COMENTADO);
      if (valoraciones.length <= 0)
        return res.status(409).send("No hay comentarios de clientes");
      console.log(valoraciones)
    //   valoraciones.map(async (v)=>{
    //     const respuesta = await dao.getResByIdValor(v.ID)
        
    //     const r = {
    //         COMENTADO: v.ID_COMENTADO,
    //         COMENTADOR: v.ID_COMENTADOR,
    //         PUNTUACION: v.PUNTUACION,
    //         COMENTARIO: v.COMENTARIO,
    //         RESPUESTA: {
    //             ID: respuesta[0].ID_VALORACION,
    //             RESPUESTA: respuesta[0].RESPUESTA
    //         }
    //     }
    //     //console.log(r)
    //     valorRes.push(r)
    //     console.log(valorRes)
    //   })
      
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
      const valor = await dao.addValor(newValor);
      if(!valor) return res.status(400).send("No se ha podido registrar la valoracion")
      return res.status(200).send("Valoracion registrada")

      
}
valorController.addRes = async (req,res) => {
    const {
        ID_VALORACION,
        ID_COMENTADOR,
        RESPUESTA,
      } = req.body;
      const newRes = {
        ID_VALORACION: ID_VALORACION,
        ID_COMENTADOR: ID_COMENTADOR,
        RESPUESTA: RESPUESTA,
      };
      const respuesta = await dao.addRes(newRes);
      if(!respuesta) return res.status(400).send("No se ha podido registrar la respuesta")
      return res.status(200).send("Respuesta registrada")

      
}
module.exports = valorController