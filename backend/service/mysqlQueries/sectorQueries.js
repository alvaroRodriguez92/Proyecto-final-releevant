const db = require("../mysql");
// const utils = require("../../utils/utils");
// const queries = require("../consultasSQL/consultasSQL");

const sectorQueries = {};

sectorQueries.getAllSectors = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT * FROM SECTORES", null, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

module.exports = sectorQueries;
