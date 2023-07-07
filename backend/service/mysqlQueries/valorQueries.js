const db = require("../mysql");
const utils = require("../../utils/utils");
const queries = require("../consultasSQL/consultasSQL");

const valorQueries = {}

valorQueries.getValorByUser = async (comentado) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.getValorByUser,
        comentado,
        "select",
        conn
      );
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

  valorQueries.addValor = async (newValor) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      let valorObj = {
        ID_COMENTADO: newValor.ID_COMENTADO,
        PUNTUACION: newValor.PUNTUACION,
        COMENTARIO: newValor.COMENTARIO,
        ID_COMENTADOR: newValor.ID_COMENTADOR,
      };
      return await db.query(queries.addValor, valorObj, "insert", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

  valorQueries.addRes = async (newRes) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      let resObj = {
        ID_VALORACION: newRes.ID_VALORACION,
        ID_COMENTADOR: newRes.ID_COMENTADOR,
        RESPUESTA: newRes.RESPUESTA
      };
      return await db.query(queries.addRes, resObj, "insert", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

  valorQueries.getResByIdValor = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.getResByIdValor,
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

  valorQueries.getValorSinRespuesta = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.getValorSinRespuestas,
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

module.exports = valorQueries