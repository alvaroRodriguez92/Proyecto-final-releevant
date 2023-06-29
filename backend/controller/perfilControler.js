const addressDao = require("../service/dao/addressDao")
const imgDao = require("../service/dao/imgDao")
const userDao = require("../service/dao/userDao")

const perfilController = {}

perfilController.getPerfil = async (req,res) => {
    const id = req.params.id
    let data = {}
    try{
        const user = await userDao.getUserById(id)
        const address = await addressDao.getAllAddress(id)
        const images = await imgDao.getImdByUser(id)
        
        data.user = user
        data.address = address
        data.images = images
        return res.status(200).json(data)
    } catch (e) {
        throw new Error(e.message);
    }

}

module.exports = perfilController