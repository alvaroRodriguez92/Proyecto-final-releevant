const express = require("express");
const addressController = require("../controller/addressControler")

const addressRoutes = express.Router()

addressRoutes.get("/",addressController.getAllAddress)
addressRoutes.post("/",addressController.addAddress)
addressRoutes.patch("/",addressController.editAddress)
addressRoutes.delete("/",addressController.deleteAddress)


module.exports = addressRoutes