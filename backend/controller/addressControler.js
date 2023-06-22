const dao = require("../service/dao/addressDao")

addressController = {}

addressController.addAddress = async (req,res) => {
    const {
        ID_USER,
        LONGITUD,
        LATITUD,
        TIPO_VIA,
        NOMBRE_VIA,
        NUMERO,
        URBANIZACION,
        BLOQUE,
        PISO,
        PUERTA,
        CP,
        LOCALIDAD,
        PROVINCIA,
        PAIS
      } = req.body;
      const newItem = {
        ID_USER: ID_USER,
        LONGITUD: LONGITUD,
        LATITUD: LATITUD,
        TIPO_VIA: TIPO_VIA,
        NOMBRE_VIA: NOMBRE_VIA,
        NUMERO: NUMERO,
        URBANIZACION: URBANIZACION,
        BLOQUE: BLOQUE,
        PISO: PISO,
        PUERTA: PUERTA,
        CP: CP,
        LOCALIDAD: LOCALIDAD,
        PROVINCIA: PROVINCIA,
        PAIS: PAIS
      };
      const valor = await dao.addAddress(newItem);
      if(!valor) return res.status(400).send("No se ha podido registrar la Item de ChatBox")
      return res.status(200).send("Item registrado")
}


module.exports = addressController