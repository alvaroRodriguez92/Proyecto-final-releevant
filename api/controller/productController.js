const dao = require("../service/dao.js");
const path = require("path");

const productController = {};

productController.uploadImage = async (req, res) => {
  try {
    //if(req.files === null) return;
    if (
      !req.files ||
      req.files === null ||
      Object.keys(req.files).length === 0
    ) {
      return res.status(400).send("No se ha cargado ningun archivo");
    }

    const images = !req.files.imagen.length
      ? [req.files.imagen]
      : req.files.imagen;
    console.log(images);
    images.forEach(async (image) => {
      let uploadPath = path.join(__dirname, "../public/product/" + image.name);
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      await dao.addImage({ name: image.name, path: uploadPath });
      res.send("imagen subida");
    });
  } catch (e) {
    console.log(e.error);
    return res.status(400).send(e.message);
  }
};

productController.getImage = async (req, res) => {
  try {
    const image = await dao.getImageById(req.params.id);
    if (image.length === 0)
      return res.status(400).send("No se encuentra la imagen");
    //console.log(image[0].path);
    res.status(200).send(image[0].path);
    console.log(`Imagen encontrada en ${image[0].path}`);
  } catch (e) {
    throw new Error(e);
  }
};

productController.addProduct = async (req, res) => {
  const { name, description, reference } = req.body;
  // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
  if (!name || !description || !reference)
    return res.status(400).send("Error al recibir el body");
  // Buscamos el usuario en la base de datos
  const existProduct = dao.getProductByReference(reference);
  console.log(existProduct);
  if (!existProduct.length == 0)
    return res.status(400).send("Producto existente");
  try {
    const addproductId = await dao.addProduct(req.body);
    if (addproductId) {
      if (
        !req.files ||
        req.files === null ||
        Object.keys(req.files).length === 0
      ) {
        return res.status(400).send("No se ha cargado ningun archivo");
      }

      const images = !req.files.imagen.length
        ? [req.files.imagen]
        : req.files.imagen;
      console.log(images);
      images.forEach(async (image) => {
        let uploadPath = path.join(
          __dirname,
          "../public/product/" + image.name
        );
        image.mv(uploadPath, (err) => {
          if (err) return res.status(500).send(err);
        });
        await dao.addImage({
          name: image.name,
          path: uploadPath,
          id_product: addproductId,
        });
      });
    }
    if (addproductId)
      return res.send(`Producto ${name} registrado con ${addproductId}`);
  } catch (e) {
    throw new Error(e);
  }
};
module.exports = productController;
