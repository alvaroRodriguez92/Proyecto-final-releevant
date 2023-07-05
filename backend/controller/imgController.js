const dao = require("../service/dao/imgDao")
const mv = require("mv");
const path = require("path")

const imgController = {}

imgController.addImg = async (req, res) => {

  const {ID_USER, TIPO} = req.body

    try {
      if (!req.files || req.files === null) {
        return res.status(400).send("No se ha cargado ningun archivo");
      }
      const imagenes = !req.files.imagen.length
        ? [req.files.imagen]
        : req.files.imagen;
      for(const imagen of imagenes)  {
        console.log(imagen.name);
        let uploadPath = path.join(
          __dirname,
          "../public/imagenes/" + imagen.name
        );
  
       
        console.log(imagen,"imagen");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await dao.addImg({
          ID_USER: ID_USER,
          PATH: uploadPath,
          NOMBRE: imagen.name,
          TIPO: TIPO,
        });
        imagen.mv(uploadPath, (err) => {
          if (err) return res.status(500).send(err);
        });
      };
      const i = await dao.getImdByUser(ID_USER)
      
      return res.status(200).send(i)  
    } catch (e) {
      console.log(e.error);
      return res.status(400).send(e.message);
    }
  };
 
imgController.deleteimg = async (req,res) => {
    const { ID, ID_USER } = req.body;
    try {
      const item = await dao.deleteImg(ID);
      if (!item)
        return res.status(409).send("No se ha borrado la imagen"); 
      const i = await dao.getImdByUser(ID_USER)
      return res.status(200).send(i);
    } catch (e) {
      throw new Error(e.message);
    }
}

imgController.getlogoByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const logo = await dao.getlogoByUser(id);
    if (logo.length <= 0)
      return res.status(409).send("No hay comentarios de clientes"); 
    return res.status(200).send(logo);
  } catch (e) {
    throw new Error(e.message);
  }
};

imgController.editLogo = async (req,res) => {
  const { ID, ID_USER, TIPO } = req.body;

    try {
      if (!req.files || req.files === null) {
        return res.status(400).send("No se ha cargado ningun archivo");
      }
      
      const imagenes = !req.files.imagen.length
        ? [req.files.imagen]
        : req.files.imagen;
      imagenes.forEach(async (imagen) => {
        let uploadPath = path.join(
          __dirname,
          "../public/imagenes/" + imagen.name
        );
  
        imagen.mv(uploadPath, (err) => {
          if (err) return res.status(500).send(err);
        });
        
        await dao.addImg({
          ID_USER: ID_USER,
          PATH: uploadPath,
          NOMBRE: imagen.name,
          TIPO: TIPO,
        });
      });
      const item = await dao.deleteImg(ID);
      const i = await dao.getlogoByUser(ID_USER)
      console.log(i,"IIIIIIIIIIIIIIIII")
      

      return res.status(200).send(i);
    } catch (e) {
      throw new Error(e.message);
    }
}

module.exports = imgController