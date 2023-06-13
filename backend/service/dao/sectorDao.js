const sectorQueries = require("../mysqlQueries/sectorQueries");
const dao = {};

dao.getAllSectors = async () => await sectorQueries.getAllSectors();
dao.getCatogriasSector = async (id) =>
  await sectorQueries.getCategoriasSector(id);

module.exports = dao;
