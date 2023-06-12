const moment = require("moment");
const md5 = require("md5");
const db = require("../mysql");
const utils = require("../../utils/utils");
const queries = require("../consultasSQL/consultasSQL");

const userQueries = {};
//Query para buscar usuario por email
userQueries.getUserByEmail = async (email) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM USERS WHERE EMAIL = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Query para registrar usuario nuevo
userQueries.addUser = async (newUser) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let userObj = {
      NOMBRE: newUser.NOMBRE,
      EMAIL: newUser.EMAIL,
      TLF: newUser.TLF,
      URL: newUser.URL,
      DESCRIPCION: newUser.DESCRIPCION,
      PASSWORD: md5(newUser.PASSWORD),
      FECHA_REG: moment().format("YYYY-MM-DD HH:mm:ss"),
      ESTADO: 1,
    };
    return await db.query("INSERT INTO USERS SET ?", userObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Query para agregar direccion de usuario
userQueries.addAddress = async (newAddress) => {
  let conn = null;
  console.log(newAddress);
  let addressObj = {
    ID_USER: newAddress.ID_USER,
    LONGITUD: newAddress.LONGITUD,
    LATITUD: newAddress.LATITUD,
    TIPO_VIA: newAddress.TIPO_VIA,
    NOMBRE_VIA: newAddress.NOMBRE_VIA,
    NUMERO: newAddress.NUMERO,
    URBANIZACION: newAddress.URBANIZACION,
    BLOQUE: newAddress.BLOQUE,
    PISO: newAddress.PISO,
    PUERTA: newAddress.PUERTA,
    CP: newAddress.CP,
    LOCALIDAD: newAddress.LOCALIDAD,
    PROVINCIA: newAddress.PROVINCIA,
    PAIS: newAddress.PAIS,
  };
  try {
    conn = await db.createConnection();

    console.log(addressObj);
    return await db.query(
      "INSERT INTO DIRECCIONES SET ?",
      addressObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Query para agregar logo de usuario
userQueries.addLogo = async (imageData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let imageObj = {
      ID: null,
      ID_USER: imageData.ID_USER,
      PATH: imageData.PATH,
      LOGO_NOMBRE: imageData.LOGO_NOMBRE,
      ESTADO: imageData.ESTADO,
    };
    return await db.query("INSERT INTO LOGO SET ?", imageObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//Query para agregar fotos al perfil
userQueries.addImagen = async (imageData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let imageObj = {
      ID: null,
      ID_USER: imageData.ID_USER,
      PATH: imageData.PATH,
      NOMBRE: imageData.NOMBRE,
    };
    return await db.query(
      "INSERT INTO IMAGENES SET ?",
      imageObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getPopup = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(queries.infoPopup, id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
userQueries.getUserLogo = async (ID_USER) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM LOGO WHERE ESTADO = ? AND ID_USER = ? ",
      [1, ID_USER],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.deleteUser = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("DELETE FROM users WHERE id =?", id, "delete", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//obtener usuario por el id
userQueries.getUserbyId = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM users WHERE id = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.updateUser = async (id, userData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos que nos puede llegar del usuario a modificar en la base de datos.
    // Encriptamos la password con md5 si nos llega por el body, sino la declaramos como undefined
    // y usamos la libreria momentjs para actualizar la fecha.
    let userObj = {
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      password: userData.password ? md5(userData.password) : undefined,
      update_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    // Eliminamos los campos que no se van a modificar (no llegan por el body)
    userObj = await utils.removeUndefinedKeys(userObj);

    return await db.query(
      "UPDATE users SET ? WHERE id = ?",
      [userObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getLocations = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT ID_USER, LATITUD, LONGITUD FROM DIRECCIONES",
      null,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

module.exports = userQueries;
