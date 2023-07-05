const userQueries = require("../mysqlQueries/userQueries");
const sectorQueries = require("../mysqlQueries/sectorQueries");
const productQueries = require("../mysqlQueries/productQueries");

const dao = {};

//filtrar usuarios
//obtener usuarios que pertecen a un sector
dao.getUserBySector = async (id) => await userQueries.getUsersBySector(id);
dao.getUsersByCategoria = async (id) =>
  await userQueries.getUsersByCategoria(id);
// Buscar un usuario por el email
dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);
dao.getUserById = async (id) => await userQueries.getUserById(id);
// Añadir un nuevo usuario
dao.addUser = async (newUser) => await userQueries.addUser(newUser);
dao.addAddress = async (newAddress) => await userQueries.addAddress(newAddress);
dao.addOfertante = async (newOfer) => await userQueries.addOfertante(newOfer);
dao.getLocationsBySector = async (id) => await userQueries.getLocationsBySector(id);
//Añadir y buscar imagen
dao.addLogo = async (imageData) => await userQueries.addLogo(imageData);
dao.getUserLogo = async (ID_USER) => await userQueries.getUserLogo(ID_USER);
dao.addImagen = async (imageData) => await userQueries.addImagen(imageData);
dao.getPopup = async (id) => await userQueries.getPopup(id);
dao.getImageById = async (id) => await productQueries.getImageById(id);

//pendientes

// Buscar un usuario por el id

// Eliminar un usuario
dao.deleteUser = async (id,user) => await userQueries.deleteUser(id,user);
//dao.deleteUser = async (id) => await userQueries.deleteUser(id);
// Modificar usuario por su id
dao.updateUser = async (id, userData) =>
  await userQueries.updateUser(id, userData);

dao.addProduct = async (productData) =>
  await productQueries.addProduct(productData);

dao.getProductByReference = async (reference) =>
  await productQueries.getProductByReference(reference);

module.exports = dao;
