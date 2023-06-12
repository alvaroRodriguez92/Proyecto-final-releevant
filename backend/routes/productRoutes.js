const express = require("express");
const productController = require("../controller/productController");

const productRouter = express.Router();

productRouter.post("/upload", productController.uploadImage);
productRouter.get("/image/:id", productController.getImage);

productRouter.post("/addproduct", productController.addProduct);

module.exports = productRouter;
