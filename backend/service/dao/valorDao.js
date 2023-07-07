const valorQueries = require('../mysqlQueries/valorQueries')

const dao = {};

dao.getValorByUser = async (comentado) => valorQueries.getValorByUser(comentado)
dao.getValorSinRespuesta = async (id) => valorQueries.getValorSinRespuesta(id)
dao.addValor = async (newValor) => valorQueries.addValor(newValor)
dao.addRes = async (newRes) => valorQueries.addRes(newRes)

module.exports = dao