const express = require("express");
const addressController = require("../controller/addressControler")

const addressRoutes = express.Router()

addressRoutes.post("/",addressController.addAddress)


module.exports = addressRoutes