const express = require('express')
const imgController = require("../controller/imgController")

const imgRoutes = express.Router()

imgRoutes.delete("/delete",imgController.deleteimg)
imgRoutes.post("/add",imgController.addImg)

module.exports = imgRoutes