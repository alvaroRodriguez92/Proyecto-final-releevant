const db = require("../mysql");
const utils = require("../../utils/utils")
const queries = require("../consultasSQL/consultasSQL")

const addressQueries = {}

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

module.exports = addressQueries