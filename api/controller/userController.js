const dao = require("../service/dao");
const { SignJWT, jwtVerify } = require("jose");
const md5 = require("md5");
const path = require("path");
const mv = require("mv");

const userController = {};

//controlador de registro de usuario
userController.addUser = async (req, res) => {
  const {
    NOMBRE,
    EMAIL,
    TLF,
    URL,
    DESCRIPCION,
    PASSWORD,
    LONGITUD,
    LATITUD,
    TIPO_VIA,
    NOMBRE_VIA,
    NUMERO,
    PISO,
    PUERTA,
    URBANIZACION,
    BLOQUE,
    CP,
    LOCALIDAD,
    PROVINCIA,
    PAIS,
  } = req.body;
  // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
  if (
    !NOMBRE ||
    !EMAIL ||
    !PASSWORD ||
    !LONGITUD ||
    !LATITUD ||
    !TIPO_VIA ||
    !NOMBRE_VIA ||
    !NUMERO ||
    !PISO ||
    !PUERTA
  )
    return res.status(400).send("Error al recibir el body");

  // Buscamos el usuario en la base de datos
  try {
    const user = await dao.getUserByEmail(EMAIL);
    // Si existe el usuario respondemos con un 409 (conflict)
    if (user.length > 0) return res.status(409).send("usuario ya registrado");
    // Si no existe lo registramos
    const newUser = {
      NOMBRE: NOMBRE,
      EMAIL: EMAIL,
      TLF: TLF,
      URL: URL,
      DESCRIPCION: DESCRIPCION,
      PASSWORD: PASSWORD,
    };

    const addUser = await dao.addUser(newUser);
    if (addUser) {
      const newAddress = {
        ID_USER: addUser,
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
        PAIS: PAIS,
      };
      const addAddress = await dao.addAddress(newAddress);
      if (!addAddress)
        return res.send(
          `Usuario ${NOMBRE} con id: ${addUser} registrado, pero ha habido problemas con la direccion`
        );
    }

    return res.send(`Usuario ${NOMBRE} con id: ${addUser} registrado`);
  } catch (e) {
    throw new Error(e.message);
  }
};
//controlador para obtener las localizaciones de todos los usuarios
userController.getLocations = async (req, res) => {
  try {
    const locations = await dao.getLocations();
    if (locations.length <= 0)
      return res.status(409).send("No hay localizaciones que mostrar");
    return res.status(200).send(locations);
  } catch (e) {
    throw new Error(e.message);
  }
};
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
//controlador para subir logo FALTA PASAR EL ID DE USUARIO POR BODY
userController.addLogo = async (req, res) => {
  try {
    if (!req.files || req.files === null) {
      return res.status(400).send("No se ha cargado ningun archivo");
    }

    const logos = !req.files.logo.length ? [req.files.logo] : req.files.logo;

    logos.forEach(async (logo) => {
      console.log(logo.name);
      let uploadPath = path.join(__dirname, "../public/logo/" + logo.name);
      logo.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      await dao.addLogo({
        ID_USER: 14,
        PATH: uploadPath,
        NOMBRE: logo.name,
        ESTADO: 1,
      });
    });
    res.send("Logo subido");
  } catch (e) {
    console.log(e.error);
    return res.status(400).send(e.message);
  }
};
//controlador para subir imagenes para perfil FALTA PASAR EL ID DE USUARIO POR BODY
userController.addImagen = async (req, res) => {
  try {
    if (!req.files || req.files === null) {
      return res.status(400).send("No se ha cargado ningun archivo");
    }

    const imagenes = !req.files.imagen.length
      ? [req.files.imagen]
      : req.files.imagen;
    imagenes.forEach(async (imagen) => {
      console.log(imagen.name);
      let uploadPath = path.join(
        __dirname,
        "../public/imagenes/" + imagen.name
      );

      imagen.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      await dao.addImagen({
        ID_USER: 14,
        PATH: uploadPath,
        NOMBRE: imagen.name,
        ESTADO: 1,
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
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!authorization) return res.sendStatus(401);
  const token = authorization.split(" ")[1];

  try {
    // codificamos la clave secreta
    const encoder = new TextEncoder();
    // verificamos el token con la función jwtVerify. Le pasamos el token y la clave secreta codificada
    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );
    // Verificamos que seamos usuario administrador
    if (!payload.role)
      return res.status(409).send("no tiene permiso de administrador");
    // Buscamos si el id del usuario existe en la base de datos
    const user = await dao.getUserbyId(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (user.length === 0) return res.status(404).send("el usuario no existe");
    // Si existe, eliminamos el usuario por el id
    await dao.deleteUser(req.params.id);
    // Devolvemos la respuesta
    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

// Controlador para modificar un usuario por su id
userController.updateUser = async (req, res) => {
  //const { authorization } = req.headers;
  // Si no existe el token enviamos un 401 (unauthorized)
  //if (!authorization) return res.sendStatus(401);

  try {
    // Si no nos llega ningún campo por el body devolvemos un 400 (bad request)
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");
    // Actualizamos el usuario
    const updateUser = await dao.updateUser(req.params.id, req.body);
    if (updateUser) return res.send(`usuario ${req.params.id} actualizado`);
    // Devolvemos la respuesta
    //return res.send(`Usuario con id ${req.params.id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = userController;
