const buscarQueries = require("../mysqlQueries/buscarQueries")

const dao = {}
dao.buscarBySector = async (text) => await buscarQueries.getUsersBySector(text)
dao.buscarByCategoria = async (text) => await buscarQueries.getUsersByCategoria(text)
dao.buscarByNombre = async (text) => await buscarQueries.getUsersByNombre(text)

module.exports = dao