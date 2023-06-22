const addressQueries = require("../mysqlQueries/addressQueries")

const dao = {}

dao.getAllAddress = async (id) => await addressQueries.getAllAddress(id)
dao.addAddress = async (newItem) => await addressQueries.addAddress(newItem)
dao.editAddress = async(id, newData) => await addressQueries.editAddress(id,newData)
dao.deleteAddress = async (id) => await addressQueries.deleteAddress(id)

module.exports = dao