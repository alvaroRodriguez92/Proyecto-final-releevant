const dao = require("../service/dao/userDao");
const { SignJWT, jwtVerify } = require("jose");
const md5 = require("md5");
const path = require("path");
const mv = require("mv");
const utils = require("../utils/utils")

const userController = {};

//controlador de registro de usuario
userController.addUser = async (req, res) => {
  const { LOGO, IMAGEN } = req.files 
  const {
    NOMBRE,
    EMAIL,
    TLF,
    URL,
    DESCRIPCION,
    PASSWORD,
    CATEGORIA,
    LONGITUD,
    LATITUD,
    TIPO_VIA,
    NOMBRE_VIA,
    NUMERO,
    PISO,
    PUERTA,
    BLOQUE,
    CP,
    LOCALIDAD,
    PROVINCIA,
    PAIS,
  } = req.body;
  const newUser = {
    NOMBRE: NOMBRE,
    EMAIL: EMAIL,
    TLF: TLF,
    URL: URL,
    DESCRIPCION: DESCRIPCION,
    PASSWORD: PASSWORD,
  };
  
  // Buscamos el usuario en la base de datos
  try {
    
    const user = await dao.getUserByEmail(EMAIL);
    // Si existe el usuario respondemos con un 409 (conflict)
    if (user.length > 0) return res.status(409).send("usuario ya registrado");
    // Si no existe lo registramos
    const addUser = await dao.addUser(newUser);
  
    if (addUser){
      if(!CATEGORIA){ 
        return res.status(201).send(`Usuario ${NOMBRE} con id: ${addUser} registrado`);
      } 
      let cat = Number(CATEGORIA)
      if(!LATITUD || !LONGITUD || !TIPO_VIA || !NOMBRE_VIA || !NUMERO){
        res.status(408).send("Error en la direccion")
      }
      let num = Number(NUMERO)
      let p = Number(PISO)
      
      if(typeof(LONGITUD) === 'string'){
        const newAddress = {
          ID_USER: addUser,
          LONGITUD: LONGITUD,
          LATITUD: LATITUD,
          TIPO_VIA: TIPO_VIA,
          NOMBRE_VIA: NOMBRE_VIA,
          NUMERO: num,
          BLOQUE: BLOQUE,
          PISO: p,
          PUERTA: PUERTA,
          CP: CP,
          LOCALIDAD: LOCALIDAD,
          PROVINCIA: PROVINCIA,
          PAIS: PAIS,
        };
      
        const addAddress = await dao.addAddress(newAddress);
          if (!addAddress)
            return res.send(
              `Usuario ${NOMBRE} con id: ${addUser} registrado, pero ha habido problemas con la DIRECCION`
            );
      }else{     
        for(i = 0;i < LONGITUD.length; i++){
            const newAddress = {
              ID_USER: addUser,
              LONGITUD: LONGITUD[i],
              LATITUD: LATITUD[i],
              TIPO_VIA: TIPO_VIA[i],
              NOMBRE_VIA: NOMBRE_VIA[i],
              NUMERO: Number(NUMERO[i]),
              BLOQUE: BLOQUE[i],
              PISO: Number(PISO[i]),
              PUERTA: PUERTA[i],
              CP: CP[i],
              LOCALIDAD: LOCALIDAD[i],
              PROVINCIA: PROVINCIA[i],
              PAIS: PAIS[i],
            };
            const addAddress = await dao.addAddress(newAddress);
            if (!addAddress)
              return res.send(
                `Usuario ${NOMBRE} con id: ${addUser} registrado, pero ha habido problemas con la DIRECCION`
              );
          }
      }
      if(LOGO){
        console.log(LOGO)
        console.log(LOGO)
        //await utils.addimagen(LOGO, addUser, 1)
        let uploadPath = path.join(
          __dirname,
          "../public/imagenes/" + LOGO.name
        );
        LOGO.mv(uploadPath, (err) => {
          if (err) return res.status(500).send(err);
        });
        await dao.addImagen({
          ID_USER: addUser,
          PATH: uploadPath,
          NOMBRE: LOGO.name,
          TIPO: 1,
        });
      }

      if(IMAGEN){
        console.log(IMAGEN)
        if(IMAGEN.length){
          IMAGEN.map(async(i)=>{
            console.log(i)
            let uploadPath = path.join(
              __dirname,
              "../public/imagenes/" + i.name
            );
            i.mv(uploadPath, (err) => {
              if (err) return res.status(500).send(err);
            });
            await dao.addImagen({
              ID_USER: addUser,
              PATH: uploadPath,
              NOMBRE: i.name,
              TIPO: 0,
            });
          })
        }else{
          //await utils.addimagen(IMAGEN,addUser,0)
          let uploadPath = path.join(
            __dirname,
            "../public/imagenes/" + IMAGEN.name
          );
          LOGO.mv(uploadPath, (err) => {
            if (err) return res.status(500).send(err);
          });
          await dao.addImagen({
            ID_USER: addUser,
            PATH: uploadPath,
            NOMBRE: IMAGEN.name,
            TIPO: 0,
          });
        }
      }
        
      const newOfertante = {
        ID_USER: addUser,
        ID_CATEGORIA: cat,
      }
      
      const addOfertante = await dao.addOfertante(newOfertante)
      if (!addOfertante)
        return res.send(
          `Usuario ${NOMBRE} con id: ${addUser} registrado, pero ha habido problemas con la CATEGORIA`
        );
      return res.status(200).send("Usuario registrado con exito")
    }
   
  } catch (e) {
    throw new Error(e.message);
  }

};
//controlador para obtener user por email
userController.getUserByEmail = async (req,res) => {
  const { email } = req.body
  
  try {
    const user = await dao.getUserByEmail(email)
    if(!user) return res.status(410).send("Usuario no registrado");
    return res.status(200).send(user)
  } catch (e) {
    throw new Error(e.message);
  }
}

//controlador para obtener las localizaciones de todos los usuarios
//PROBADO EN POSTMAN
userController.getLocationsBySector = async (req, res) => {
  console.log("estoy desde bay email")
  const id = req.params.id
  try {
    const locations = await dao.getLocationsBySector(id);
   
    if (locations.length <= 0)
      return res.status(409).send("No hay localizaciones que mostrar");
    return res.status(200).send(locations);
  } catch (e) {
    throw new Error(e.message);
  }
};
//controlador para obtener usuarios por sector
//Probado en POSTMAN
userController.getUsersBySector = async (req, res) => {
  try {
    const users = await dao.getUserBySector(req.params.id);
    if (users.length <= 0)
      return res.status(409).send("No hay Categorias que mostrar");
    return res.status(200).send(users);
  } catch (e) {
    throw new Error(e.message);
  }
};

//controlador para filtrar usuarios por categorias
//Pobado en POSTMAN
userController.getUsersByCategoria = async (req, res) => {
  try {
    const users = await dao.getUsersByCategoria(req.params.id);
    
    if (users.length <= 0)
      return res.status(409).send("No hay usuarios que mostrar");
    return res.status(200).send(users);
  } catch (e) {
    throw new Error(e.message);
  }
};
//controlador para filtrar ususarios por categoria
userController.getPopup = async (req, res) => {
  try {
    const popup = await dao.getPopup(req.params.id);
    if (popup.length <= 0)
      return res.status(409).send("No hay localizaciones que mostrar");
    return res.status(200).send(popup);
  } catch (e) {
    throw new Error(e.message);
  }
};
//Controlador pr subir imagenes
userController.addImagen = async (req, res) => {
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
      
      await dao.addImagen({
        ID_USER: imagen.ID_USER,
        PATH: uploadPath,
        NOMBRE: imagen.name,
        ESTADO: imagen.TIPO,
      });
    });
    res.send("Imagen subido");
  } catch (e) {
    console.log(e.error);
    return res.status(400).send(e.message);
  }
};
//controlador de login de usuario

userController.loginUser = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).send("Error al recibir el body");
  }
  console.log(email, password);
  try {
    let user = await dao.getUserByEmail(email);
    if (user.length <= 0) return res.status(404).send("Usuario no registrado");

    const clienPassword = md5(password);
    [user] = user;
    if (user.PASSWORD != clienPassword)
      return res.status(401).send("Password incorrecta");
    const jwtConstructor = new SignJWT({
      id: user.ID,
      email: email,
      nombre: user.NOMBRE,
    });

    let userLogo = await dao.getUserLogo(user.ID);
    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_SECRET));
    const { ID, NOMBRE, EMAIL, TIPO } = user;
    if (userLogo.length > 0) {
      const logo = userLogo[0];
      const { PATH, LOGO_NOMBRE } = logo;
      return res.json({ ID, NOMBRE, EMAIL, TIPO, PATH, LOGO_NOMBRE, jwt });
    }
    return res.json({ ID, NOMBRE, EMAIL, TIPO, jwt });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send(e.message);
  }
};

//CONTROLADORES PENDIENTES
// Controlador para eliminar un usuario por su id
userController.deleteUser = async (req, res) => {
  // OBTENER CABECERA Y COMPROBAR SU AUTENTICIDAD Y CADUCIDAD
  const { authorization } = req.headers;
  // // Si no existe el token enviamos un 401 (unauthorized)
  if (!authorization) return res.sendStatus(401);
  const token = authorization.split(" ")[1];

  try {
    
    const encoder = new TextEncoder();
  
    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );
    
    const user = await dao.getUserById(req.params.id);
 
    if (user.length === 0) return res.status(404).send("el usuario no existe");
   
    await dao.deleteUser(req.params.id,user);
    
    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

userController.updateUser = async (req, res) => {
  
  try {
    
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");
    
    const updateUser = await dao.updateUser(req.params.id, req.body);
    if (updateUser){
      const newUser = await dao.getUserById(req.params.id)
      return res.send(newUser);
    }
    return res.send(`Usuario con id ${req.params.id} modificado`);

  } catch (e) {
    console.log(e.message);
  }
};
module.exports = userController;
