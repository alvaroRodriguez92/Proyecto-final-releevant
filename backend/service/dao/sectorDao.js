const sectorQueries = require("../mysqlQueries/sectorQueries");
const dao = {};

dao.getAllSectors = async () => await sectorQueries.getAllSectors();

module.exports = dao;
