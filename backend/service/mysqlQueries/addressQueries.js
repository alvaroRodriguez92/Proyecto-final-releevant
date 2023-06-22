const db = require("../mysql");
const utils = require("../../utils/utils")
const queries = require("../consultasSQL/consultasSQL")

const addressQueries = {}

addressQueries.getAllAddress = async(id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      queries.addressByUser,
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }  
}

addressQueries.addAddress = async(newItem) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      let itemObj = {
        ID_USER: newItem.ID_USER,
        LONGITUD: newItem.LONGITUD,
        LATITUD: newItem.LATITUD,
        TIPO_VIA: newItem.TIPO_VIA,
        NOMBRE_VIA: newItem.NOMBRE_VIA,
        NUMERO: newItem.NUMERO,
        URBANIZACION: newItem.URBANIZACION,
        BLOQUE: newItem.BLOQUE,
        PISO: newItem.PISO,
        PUERTA: newItem.PUERTA,
        CP: newItem.CP,
        LOCALIDAD: newItem.LOCALIDAD,
        PROVINCIA: newItem.PROVINCIA,
        PAIS: newItem.PAIS
      };
      return await db.query(queries.addAddress, itemObj, "insert", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
}

addressQueries.editAddress = async(id,newData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
   
    let addressObj = {
      LONGITUD: newData.LONGITUD,
      LATITUD: newData.LATITUD,
      TIPO_VIA: newData.TIPO_VIA,
      NOMBRE_VIA: newData.NOMBRE_VIA,
      NUMERO: newData.NUMERO,
      URBANIZACION: newData.URBANIZACION,
      BLOQUE: newData.BLOQUE,
      PISO: newData.PISO,
      PUERTA: newData.PUERTA,
      CP: newData.CP,
      LOCALIDAD: newData.LOCALIDAD,
      PROVINCIA: newData.PROVINCIA,
      PAIS: newData.PAIS
    };
    // Eliminamos los campos que no se van a modificar (no llegan por el body)
    userObj = await utils.removeUndefinedKeys(addressObj);

    return await db.query(
      queries.editAddress,
      [addressObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
}

addressQueries.deleteAddress = async(id) => {
  try {
    conn = await db.createConnection();
    return await db.query(
      queries.deleteAddress,
      id,
      "delete",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
}

module.exports = addressQueries