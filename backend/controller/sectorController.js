const dao = require("../service/dao/sectorDao");

const sectorController = {};

sectorController.getAllSectors = async (req, res) => {
  try {
    const sectors = await dao.getAllSectors();
    if (sectors.length <= 0)
      return res.status(409).send("No hay localizaciones que mostrar");
    return res.status(200).send(sectors);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = sectorController;
