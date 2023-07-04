const visitaQueries = require("../mysqlQueries/visitaQueries")

const dao = {}

dao.ramdon = async (fecha) => visitaQueries.addRamdon(fecha)
dao.addVisita = async(id) => visitaQueries.addVisita(id)
dao.visitaTotal = async(id) => visitaQueries.visitaTotal(id)
dao.visitaSemana = async(id) => visitaQueries.visitaSemena(id)
dao.visitaMes = async(id) => visitaQueries.visitaMes(id)
dao.visitaAnual = async(id,ano) => visitaQueries.visitaAnual(id,ano)

module.exports = dao