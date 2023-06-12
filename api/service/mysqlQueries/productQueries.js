const db = require("../mysql");
const moment = require("moment");
//const { format } = require('mysql2')

const productQueries = {};

productQueries.addImage = async (imageData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let imageObj = {
      id: null,
      name: imageData.name,
      path: imageData.path,
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      id_product: imageData.id_product,
    };
    return await db.query("INSERT INTO images SET ?", imageObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

productQueries.getImageById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM images WHERE id = ?",
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

productQueries.addProduct = async (productData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let productObj = {
      name: productData.name,
      description: productData.description,
      reference: productData.reference,
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    return await db.query(
      "INSERT INTO products SET ?",
      productObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

productQueries.getProductByReference = async (reference) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    console.log(reference);
    return await db.query(
      "SELECT * FROM products WHERE reference = ?",
      reference,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

module.exports = productQueries;
