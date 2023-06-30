const dao = require("../service/dao/addressDao")


addressController = {}

//controlador para obtener todas las direcciones de un usuario
addressController.getAllAddress = async (req,res) => {
  const { ID_USER } = req.body;
    try {
      const address = await dao.getAllAddress(ID_USER)
      if (address.length <= 0)
        return res.status(409).send("Usuario sin direcciones"); 
      return res.status(200).send(address);
    } catch (e) {
      throw new Error(e.message);
    }
}

//controlador para añadir una dirección de un usuario
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
  const newAddress = await dao.getAllAddress(ID_USER)
  return res.status(200).send(newAddress)
}

//controlador para editar una direccion de un usuario
addressController.editAddress = async (req,res) => {
  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");
    const {
      ID,
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
    const newData = {
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
    const updateAddress = await dao.editAddress(ID, newData);

    if (updateAddress){
      const newAddress = await dao.getAllAddress(ID_USER)
      return res.send(newAddress);
    }
    
    return res.status(200).send(updateAddress);

    
  } catch (e) {
    console.log(e.message);
  }
}

// if (updateUser){
//   const newUser = await dao.getUserById(req.params.id)
//   return res.send(newUser);
// }

//controlador para eliminar una direccion de un usuario
addressController.deleteAddress = async (req,res) => {
  const { ID, ID_USER } = req.body;
    try {
      const item = await dao.deleteAddress(ID);
      if (!item)
        return res.status(409).send("No se ha podido borrar la direccion"); 
      const newAddress = await dao.getAllAddress(ID_USER)
      return res.status(200).send(newAddress);
    } catch (e) {
      throw new Error(e.message);
    }
}

module.exports = addressController