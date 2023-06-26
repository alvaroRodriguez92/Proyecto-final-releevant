const db = require("../mysql");
const utils = require("../../utils/utils")
const queries = require("../consultasSQL/consultasSQL")

const buscarQueries = {}

buscarQueries.getUsersBySector = async(texto) => {
  
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.buscarBySector,
        `%${texto}%`,
        "select",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }  
  }

  buscarQueries.getUsersByCategoria = async(texto) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.buscarByCategoria,
        `%${texto}%`,
        "select",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }  
  }

  buscarQueries.getUsersByNombre = async(texto) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.buscarByNombre,
        `%${texto}%`,
        "select",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }  
  }

module.exports = buscarQueries