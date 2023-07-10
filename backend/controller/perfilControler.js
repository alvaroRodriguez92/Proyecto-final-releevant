const addressDao = require("../service/dao/addressDao")
const imgDao = require("../service/dao/imgDao")
const userDao = require("../service/dao/userDao")
const visitaDao = require("../service/dao/visitaDao")

const perfilController = {}

perfilController.getPerfil = async (req,res) => {
    const id = req.params.id
    console.log(req.params,"req params del backend")
    let data = {}
    try{
        if(!id) return res.status(400).send("No hay id de usuario")
        const user = await userDao.getUserById(id)
        const address = await addressDao.getAllAddress(id)
        const images = await imgDao.getImdByUser(id)
        await visitaDao.addVisita(id)
        
        data.user = user
        data.address = address 
        data.images = images
        return res.status(200).json(data)
    } catch (e) {
        throw new Error(e.message);
    }

}

module.exports = perfilController