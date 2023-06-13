const express = require("express");
const sectorController = require("../controller/sectorController");

const sectorRouter = express.Router();
sectorRouter.get("/", sectorController.getAllSectors);
sectorRouter.get("/categorias/:id", sectorController.getCategoriasSector);

module.exports = sectorRouter;
