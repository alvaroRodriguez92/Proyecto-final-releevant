const imgQueries = require('../mysqlQueries/imgQueries')

const dao = {};

dao.deleteImg = async (id) => await imgQueries.deleteImg(id)
dao.addImg = async (data) => await imgQueries.addImagen(data)
dao.getImdByUser = async (id) => await imgQueries.getImageById(id)
dao.getlogoByUser = async (id) => await imgQueries.getLogoByUser(id)


module.exports = dao