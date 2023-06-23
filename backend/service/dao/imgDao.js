const imgQueries = require('../mysqlQueries/imgQueries')

const dao = {};

dao.deleteImg = async (id) => await imgQueries.deleteImg(id)
dao.addImg = async (data) => await imgQueries.addImg(data)
dao.getImdByUser = async (id) => await imgQueries.getImageById(id)


module.exports = dao