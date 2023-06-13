const dao = require("../service/dao/sectorDao");

const sectorController = {};

sectorController.getAllSectors = async (req, res) => {
  try {
    const sectors = await dao.getAllSectors();
    if (sectors.length <= 0)
      return res.status(409).send("No hay Sectores que mostrar");
    return res.status(200).send(sectors);
  } catch (e) {
    throw new Error(e.message);
  }
};

sectorController.getCategoriasSector = async (req, res) => {
  try {
    const categorias = await dao.getCatogriasSector(req.params.id);
    if (categorias.length <= 0)
      return res.status(409).send("No hay Categorias que mostrar");
    return res.status(200).send(categorias);
  } catch (e) {
    throw new Error(e.message);
  }
  // try {
  //   const popup = await dao.getPopup(req.params.id);
  //   if (popup.length <= 0)
  //     return res.status(409).send("No hay localizaciones que mostrar");
  //   return res.status(200).send(popup);
  // } catch (e) {
  //   throw new Error(e.message);
  // }
};

module.exports = sectorController;
