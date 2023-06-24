const queries = {};

/////////////////////////
//CONSULTAS DE USUARIOS//
/////////////////////////

//esta query extrae todos los usuarios que tengan direccion (empresas)
queries.infoPopup = `SELECT NOMBRE, EMAIL, TLF, URL, DIR.TIPO_VIA, DIR.NOMBRE_VIA, DIR.NUMERO, L.FOTO  FROM USERS
JOIN (SELECT ID_USER,TIPO_VIA, NOMBRE_VIA, NUMERO FROM DIRECCIONES) AS DIR ON USERS.ID = DIR.ID_USER 
JOIN (SELECT ID_USER, IMG_NOMBRE AS FOTO FROM IMAGENES WHERE TIPO = 1) AS L ON USERS.ID = L.ID_USER WHERE USERS.ID  = ?`;
//query para extraer todas las empresas por categoria
queries.usersByCategoria = `select NOMBRE_CATEGORIA, USR.ID, USR.NOMBRE, USR.EMAIL, USR.TLF, USR.DESCRIPCION , IMG.IMG_NOMBRE, DIR.LATITUD, DIR.LONGITUD, 
IMG.p, IMG.IMG_NOMBRE, IMG.TIPO from categoria left join ofertante on ofertante.ID_CATEGORIA = categoria.ID
left join (select ID, NOMBRE, EMAIL, TLF, URL, DESCRIPCION from users where ESTADO = 1) as USR on ofertante.ID_user = USR.ID 
left join (select ID_USER, PATH as p,IMG_NOMBRE, TIPO from IMAGENES) as IMG on USR.ID = IMG.ID_USER
left join (select ID_USER, TIPO_VIA, NOMBRE_VIA, NUMERO, LATITUD, LONGITUD from direcciones) as DIR on DIR.ID_USER = USR.ID
where categoria.ID = ?`
//query para extraer todas las empresas por sector
queries.usersBySector = `select sectores.ID, USR.ID, USR.NOMBRE, USR.EMAIL, USR.TLF, USR.URL, USR.DESCRIPCION, categoria.NOMBRE_CATEGORIA, IMG.IMG_NOMBRE, DIR.LATITUD, DIR.LONGITUD,
IMG.p, IMG.IMG_NOMBRE, IMG.TIPO from SECTORES left join categoria on categoria.ID_SECTOR  = sectores.id
left join OFERTANTE on ofertante.ID_CATEGORIA = categoria.id 
left join (select ID, NOMBRE, EMAIL, TLF, URL, DESCRIPCION from users where ESTADO = 1) as USR on ofertante.ID_USER = USR.ID
left join (select ID_USER, PATH as p,IMG_NOMBRE, TIPO from IMAGENES where TIPO = 1) as IMG on USR.ID = IMG.ID_USER
left join (select ID_USER, TIPO_VIA, NOMBRE_VIA, NUMERO, LATITUD, LONGITUD from direcciones) as DIR on DIR.ID_USER = USR.ID
where sectores.ID = ?`
//query para extraer usuarios por sector para obtener informacion del main
queries.getUseresLocationsBySector = `SELECT ID_USER, LATITUD, LONGITUD, US.NOMBRE, US.EMAIL, US.TLF, US.URL, US.DESCRIPCION, IMG.IMG_NOMBRE
FROM DIRECCIONES JOIN (SELECT * FROM USERS WHERE USERS.ESTADO = 1) AS US ON DIRECCIONES.ID_USER = US.ID
JOIN (SELECT IMG_NOMBRE, ID_USER AS IMG_USER FROM IMAGENES WHERE TIPO = 1)
AS IMG ON US.ID = IMG.IMG_USER JOIN (SELECT ID_USER AS USUARIO, ID_CATEGORIA FROM OFERTANTE) 
AS OFER ON US.ID = OFER.USUARIO JOIN (SELECT ID, ID_SECTOR FROM CATEGORIA WHERE ID_SECTOR = ?) 
AS CAT ON OFER.ID_CATEGORIA = CAT.ID;`

/////////////////////////////
//CONSULTAS DE VALORACIONES//
/////////////////////////////

//Consulta para obtener todas las valoraciones de un usuario y las respuestas
queries.getValorByUser = `SELECT * FROM VALORACIONES LEFT JOIN (SELECT ID_VALORACION, RESPUESTA FROM RESPUESTAS) 
AS R ON VALORACIONES.ID = R.ID_VALORACION 
WHERE ID_COMENTADO = ?`
//Query para registrar valoraciones
queries.addValor = `INSERT INTO VALORACIONES SET ?`
//Query para registrar respuesta a valoraciones
queries.addRes = `INSERT INTO RESPUESTAS SET ?`

////////////////////////
//CONSULTAS DE CHATBOX//
////////////////////////

//Consulta para obtener todas las preguntas y respuestasde chatbox de un usuario
queries.getPreguntas = `select ID, PREGUNTA, RESPUESTA from CHATBOX where ID_USER = ?`
//Consulta para obtener la respuesta correspondiente a una pregunta
queries.getRespuesta = `SELECT RESPUESTA FROM CHATBOX WHERE ID = ?`
//Query de insercion en chatbox
queries.addPreguntaRespuesta = `INSERT INTO chatbox SET ?`
//Query de borrado de pregunta y respuesta en chatbox
queries.deletePreguntaRespuesta = `DELETE FROM CHATBOX WHERE ID = ?`
//Query de actualizado de preguntas y respuesta
queries.updatePreguntaRespuesta = `UPDATE chatbox SET ? WHERE id = ?`

////////////////////////////
//CONSULTAS DE DIRECCIONES//
////////////////////////////

//Query de insercion en direcciones
queries.addAddress = `INSERT INTO DIRECCIONES SET ?`
//Query para extraer direcciones por usuario
queries.addressByUser = `SELECT * FROM DIRECCIONES WHERE ID_USER = ?`
//Query para actualizar una direccion
queries.editAddress = `UPDATE DIRECCIONES SET ? WHERE id = ?`
//Query par eliminar direccion
queries.deleteAddress = `DELETE FROM DIRECCIONES WHERE ID = ?`

/////////////////////////
//CONSULTAS DE IMAGENES//
/////////////////////////

//Query para eliminar fotos de la DB
queries.deleteImg = `DELETE FROM IMAGENES WHERE ID = ?`
//Query para insertar imagenes
queries.addImg = `INSERT INTO IMAGENES SET ?`

///////////////////////
//CONSULTAS DE BUSCAR//
///////////////////////

queries.buscarByNombre = `select ID, NOMBRE, EMAIL, TLF, DESCRIPCION , IMG.IMG_NOMBRE, DIR.LATITUD, DIR.LONGITUD, IMG.p, IMG.IMG_NOMBRE, IMG.TIPO from users
left join (select ID_USER, PATH as p,IMG_NOMBRE, TIPO from IMAGENES) as IMG on ID = IMG.ID_USER
left join (select ID_USER, TIPO_VIA, NOMBRE_VIA, NUMERO, LATITUD, LONGITUD from direcciones) as DIR on DIR.ID_USER = ID
where NOMBRE LIKE ?`

queries.buscarByCategoria = `select NOMBRE_CATEGORIA, USR.ID, USR.NOMBRE, USR.EMAIL, USR.TLF, USR.DESCRIPCION, IMG.IMG_NOMBRE, DIR.LATITUD, DIR.LONGITUD, 
IMG.p, IMG.IMG_NOMBRE, IMG.TIPO from categoria left join ofertante on ofertante.ID_CATEGORIA = categoria.ID
left join (select ID, NOMBRE, EMAIL, TLF, URL, DESCRIPCION from users where ESTADO = 1) as USR on ofertante.ID_user = USR.ID 
left join (select ID_USER, PATH as p,IMG_NOMBRE, TIPO from IMAGENES) as IMG on USR.ID = IMG.ID_USER
left join (select ID_USER, TIPO_VIA, NOMBRE_VIA, NUMERO, LATITUD, LONGITUD from direcciones) as DIR on DIR.ID_USER = USR.ID
where categoria.NOMBRE_CATEGORIA LIKE ?`

queries.buscarBySector = `select sectores.ID, USR.ID, USR.NOMBRE, USR.EMAIL, USR.TLF, USR.URL, USR.DESCRIPCION, categoria.NOMBRE_CATEGORIA, IMG.IMG_NOMBRE, DIR.LATITUD, DIR.LONGITUD,
IMG.p, IMG.IMG_NOMBRE, IMG.TIPO from SECTORES left join categoria on categoria.ID_SECTOR  = sectores.id
left join OFERTANTE on ofertante.ID_CATEGORIA = categoria.id 
left join (select ID, NOMBRE, EMAIL, TLF, URL, DESCRIPCION from users where ESTADO = 1) as USR on ofertante.ID_USER = USR.ID
left join (select ID_USER, PATH as p,IMG_NOMBRE, TIPO from IMAGENES where TIPO = 1) as IMG on USR.ID = IMG.ID_USER
left join (select ID_USER, TIPO_VIA, NOMBRE_VIA, NUMERO, LATITUD, LONGITUD from direcciones) as DIR on DIR.ID_USER = USR.ID
where sectores.NOMBRE_SECTOR LIKE ?`

module.exports = queries;
