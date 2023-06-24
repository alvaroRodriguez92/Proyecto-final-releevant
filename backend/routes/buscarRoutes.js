const express = require("express");
const buscarController = require("../controller/buscarController")

const buscarRouter = express.Router()

buscarRouter.get("/:texto", buscarController.buscarUser)

module.exports = buscarRouter