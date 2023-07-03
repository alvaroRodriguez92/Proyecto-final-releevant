const db = require("../mysql");
const moment = require("moment")
const utils = require("../../utils/utils");
const queries = require("../consultasSQL/consultasSQL");

const visitaQueries = {}

visitaQueries.addVisita = async(id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      let valorObj = {
        ID_USER: id,
        FECHA_VISITA: moment().format("YYYY-MM-DD HH:mm:ss") 
      };
      return await db.query(queries.addVisita, valorObj, "insert", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };


visitaQueries.visitaTotal = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.visitaTotal,
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

visitaQueries.visitaSemena = async (id) => {
  let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.semanaVisitas,
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

visitaQueries.visitaMes = async (id) => {
  let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.mesVisitas,
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

visitaQueries.visitaAnual = async (id) => {
  let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.anualVisitas,
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

module.exports = visitaQueries