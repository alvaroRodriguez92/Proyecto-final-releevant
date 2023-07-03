const db = require("../mysql");
const utils = require("../../utils/utils")
const queries = require("../consultasSQL/consultasSQL")

const chatboxQueries = {}

chatboxQueries.getPreguntas = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.getPreguntas,
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

  chatboxQueries.getPreguntasInicio = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.getPreguntasInicio,
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

  chatboxQueries.getPRHijas = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.getPRHijas,
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

chatboxQueries.getRespuesta = async (id) => {
    try {
        conn = await db.createConnection();
        return await db.query(
          queries.getRespuesta,
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
chatboxQueries.addPreguntaRespuessta = async(newItem) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      let itemObj = {
        ID_USER: newItem.ID_USER,
        PREGUNTA: newItem.PREGUNTA,
        RESPUESTA: newItem.RESPUESTA,
      };
      return await db.query(queries.addPreguntaRespuesta, itemObj, "insert", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
}
chatboxQueries.deletePreguntaRespuesta = async(id) => {
    try {
        conn = await db.createConnection();
        return await db.query(
          queries.deletePreguntaRespuesta,
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
chatboxQueries.updatePreguntaRespuessta = async(id, chatData) => {
   
  let conn = null;
  try {
    conn = await db.createConnection();
   
    let chatObj = {
      ID_USER: chatData.ID_USER,
      PREGUNTA: chatData.PREGUNTA,
      RESPUESTA: chatData.RESPUESTA,
      PADRE: chatData.PADRE,
    };
    // Eliminamos los campos que no se van a modificar (no llegan por el body)
    userObj = await utils.removeUndefinedKeys(chatObj);

    return await db.query(
      queries.updatePreguntaRespuesta,
      [chatObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
}


module.exports = chatboxQueries