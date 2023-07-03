const visitaQueries = require("../mysqlQueries/visitaQueries")

const dao = {}

dao.addVisita = async(id) => visitaQueries.addVisita(id)
dao.visitaTotal = async(id) => visitaQueries.visitaTotal(id)
dao.visitaSemana = async(id) => visitaQueries.visitaSemena(id)
dao.visitaMes = async(id) => visitaQueries.visitaMes(id)
dao.visitaAnual = async(id) => visitaQueries.visitaAnual(id)

module.exports = dao