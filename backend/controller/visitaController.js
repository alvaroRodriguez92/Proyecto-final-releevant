const dao = require("../service/dao/visitaDao")


const visitaController = {}

visitaController.visitaTotal = async (req,res) => {
    const { id } = req.params;
    try {
      const visitas = await dao.visitaTotal(id);
      if (visitas <= 0 || !visitas)
        return res.status(409).send("No hay visitantes aún"); 
      return res.status(200).send(visitas);
    } catch (e) {
      throw new Error(e.message);
    }
}

visitaController.visitaSemana = async (req,res) => {
    const { id } = req.params;
    try {
      const visitas = await dao.visitaSemana(id);
      if (visitas <= 0 || !visitas)
        return res.status(409).send("No hay visitantes aún"); 
      return res.status(200).send(visitas);
    } catch (e) {
      throw new Error(e.message);
    }
}

visitaController.visitaMes = async (req,res) => {
    const { id } = req.params;
    try {
      const visitas = await dao.visitaMes(id);
      if (visitas <= 0 || !visitas)
        return res.status(409).send("No hay visitantes aún"); 
      return res.status(200).send(visitas);
    } catch (e) {
      throw new Error(e.message);
    }
}

visitaController.visitaAnual = async (req,res) => {
    const { id } = req.params;
    try {
      const visitas = await dao.visitaAnual(id);
      if (visitas <= 0 || !visitas)
        return res.status(409).send("No hay visitantes aún"); 
      return res.status(200).send(visitas);
    } catch (e) {
      throw new Error(e.message);
    }
}

module.exports = visitaController
