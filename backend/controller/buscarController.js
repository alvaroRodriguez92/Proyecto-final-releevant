const dao = require("../service/dao/buscarDao")
const utils = require("../utils/utils")

const buscarController = {}

buscarController.buscarUser = async (req,res) => {
    let resultado = []
    const texto = req.params.texto
    const usrSector = await dao.buscarBySector(texto)
    const usrCategoria = await dao.buscarByCategoria(texto)
    const usrNombre = await dao.buscarByNombre(texto)

    if(usrSector){
        usrSector.map((user) => {
            const u = utils.busqueda(user,resultado)
            if(u) resultado.push(user)
        })
    }
    if(usrCategoria){
        usrCategoria.map((user) => {
            const u = utils.busqueda(user,resultado)
            if(u) resultado.push(user)
        })
    }
    if(usrNombre){
        usrNombre.map((user) => {
            const u = utils.busqueda(user,resultado)
            if(u) resultado.push(user)
        })
    }
    if(!resultado){
        return res.status(405).send("No hay resultado en la busqueda")
    }
    console.log(resultado)
    return res.status(200).send(resultado)
}

module.exports = buscarController