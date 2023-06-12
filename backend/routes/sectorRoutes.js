const express = require("express");
const sectorController = require("../controller/sectorController");

const sectorRouter = express.Router();
sectorRouter.get("/", sectorController.getAllSectors);

module.exports = sectorRouter;
