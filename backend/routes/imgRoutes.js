const express = require('express')
const imgController = require("../controller/imgController")

const imgRoutes = express.Router()

imgRoutes.delete("/delete",imgController.deleteimg)
imgRoutes.post("/add",imgController.addImg)
imgRoutes.post("/editlogo",imgController.editLogo)
imgRoutes.get("/logo/:id",imgController.getlogoByUser)
imgRoutes.post("/editlogo",imgController.editLogo)

module.exports = imgRoutes