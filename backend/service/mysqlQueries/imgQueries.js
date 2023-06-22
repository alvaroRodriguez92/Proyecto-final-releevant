const db = require("../mysql");
const utils = require("../../utils/utils")
const queries = require("../consultasSQL/consultasSQL")

const imgQueries = {}

imgQueries.deleteImg = async(id) => {
    try {
      conn = await db.createConnection();
      return await db.query(
        queries.deleteImg,
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

  imgQueries.addImagen = async (data) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      let imageObj = {
        ID: null,
        ID_USER: data.ID_USER,
        PATH: data.PATH,
        NOMBRE: data.NOMBRE,
        TIPO: data.TIPO,
      };
      return await db.query(
        queries.addImg,
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


module.exports = imgQueries