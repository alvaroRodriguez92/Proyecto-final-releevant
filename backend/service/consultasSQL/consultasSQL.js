const queries = {};

/////////////////////////
//CONSULTAS DE USUARIOS//
/////////////////////////

//esta query extrae todos los usuarios que tengan direccion (empresas)
queries.infoPopup = `SELECT NOMBRE, EMAIL, TLF, URL, DIR.TIPO_VIA, DIR.NOMBRE_VIA, DIR.NUMERO, L.FOTO  FROM USERS
JOIN (SELECT ID_USER,TIPO_VIA, NOMBRE_VIA, NUMERO FROM DIRECCIONES) AS DIR ON USERS.ID = DIR.ID_USER 
JOIN (SELECT ID_USER, IMG_NOMBRE AS FOTO FROM IMAGENES WHERE TIPO = 1) AS L ON USERS.ID = L.ID_USER WHERE USERS.ID  = ?`;
//query para extraer todas las empresas por categoria
queries.usersByCategoria = `SELECT NOMBRE, EMAIL, TLF, URL, DIR.TIPO_VIA, DIR.NOMBRE_VIA, DIR.NUMERO, L.FOTO  FROM USERS
JOIN (SELECT ID_USER,TIPO_VIA, NOMBRE_VIA, NUMERO FROM DIRECCIONES) AS DIR ON USERS.ID = DIR.ID_USER 
JOIN (SELECT ID_USER, IMG_NOMBRE AS FOTO FROM IMAGENES WHERE TIPO = 1) AS L ON USERS.ID = L.ID_USER 
WHERE USERS.ESTADO = 1 AND USERS.ID  = (SELECT ID_USER FROM OFERTANTE WHERE ID_CATEGORIA = ?)`
//query para extraer todas las empresas por sector
queries.usersBySector = `SELECT NOMBRE, EMAIL, TLF, URL, DIR.TIPO_VIA, DIR.NOMBRE_VIA, DIR.NUMERO, L.FOTO  FROM USERS
JOIN (SELECT ID_USER,TIPO_VIA, NOMBRE_VIA, NUMERO FROM DIRECCIONES) AS DIR ON USERS.ID = DIR.ID_USER 
JOIN (SELECT ID_USER, IMG_NOMBRE AS FOTO FROM IMAGENES WHERE TIPO = 1) AS L ON USERS.ID = L.ID_USER 
WHERE USERS.ESTADO = 1 AND USERS.ID  = (SELECT ID_USER FROM OFERTANTE WHERE ID_CATEGORIA = 
(SELECT ID FROM CATEGORIA WHERE ID_SECTOR = ?))`
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

//Consulta para obtener todas las preguntas de chatbox de un usuario
queries.getPreguntas = `select ID, PREGUNTA from CHATBOX where ID_USER = ?`
//Consulta para obtener la respuesta correspondiente a una pregunta
queries.getRespuesta = `SELECT RESPUESTA FROM CHATBOX WHERE ID = ?`
//Consulta de insercion en chatbox
queries.addPreguntaRespuesta = `INSERT INTO chatbox SET ?`
//Consulta de borrado de pregunta y respuesta en chatbox
queries.deletePreguntaRespuesta = `DELETE FROM CHATBOX WHERE ID = ?`
//Consulta de actualizado de preguntas y respuesta
queries.updatePreguntaRespuesta = `UPDATE chatbox SET ? WHERE id = ?`

module.exports = queries;
