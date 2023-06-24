const path = require("path");
const mv = require("mv");
const userDao = require('../service/dao/userDao')

const utils = {};

utils.removeUndefinedKeys = async (obj) => {
  try {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "-1" || obj[key] === -1) {
        obj[key] = null;
      } else if (obj[key] === undefined || obj[key] === "") {
        delete obj[key];
      }
    });

    return obj;
  } catch (error) {
    throw new Error(error.message);
  }
};

utils.addimagen = async (img,id,t) => {
  console.log(img, "entrando")
  let uploadPath = path.join(
    __dirname,
    "../public/imagenes/" + img.name
  );
  img.mv(uploadPath, (err) => {
    if (err) return res.status(500).send(err);
  });
  
  await userDao.addImagen({
    ID_USER: id,
    PATH: uploadPath,
    NOMBRE: img.name,
    TIPO: t,
  });
}

module.exports = utils;
