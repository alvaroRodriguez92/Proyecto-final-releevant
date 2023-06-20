-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: prueba_mapas
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `ID_SECTOR` int NOT NULL,
  `NOMBRE_CATEGORIA` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `CATEGORIA_FK` (`ID_SECTOR`),
  CONSTRAINT `CATEGORIA_FK` FOREIGN KEY (`ID_SECTOR`) REFERENCES `sectores` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,7,'SIN CATEGORIA'),(2,8,'PSICOLOGIA'),(3,9,'REFORMAS'),(4,10,'PESCADERIA'),(5,10,'CARNICERIA'),(6,11,'ASESORIA LEGA'),(7,12,'QUIMICA'),(8,13,'ACADEMIA'),(9,13,'COLEGIO'),(10,14,'GIMNASIO'),(11,15,'IMAGEN Y SONIDO'),(12,15,'TELEFONIA'),(13,15,'INFORMATICA'),(14,16,'DECORACION'),(15,16,'TERRAZA Y JARDIN'),(16,16,'BAÑO'),(17,16,'COCINA'),(18,17,'VENTA VEHICULOS'),(19,17,'COMPRA VEHICULOS'),(20,17,'TALLER'),(21,18,'VIVIENDAS'),(22,18,'LOCALES'),(23,19,'MUSEO'),(24,20,'HOLTEL'),(25,20,'BAR'),(26,20,'RESTAURANTE');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chatbox`
--

DROP TABLE IF EXISTS `chatbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chatbox` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `PREGUNTA` text NOT NULL,
  `RESPUESTA` text NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `CHATBOX_FK` (`ID_USER`),
  CONSTRAINT `CHATBOX_FK` FOREIGN KEY (`ID_USER`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatbox`
--

LOCK TABLES `chatbox` WRITE;
/*!40000 ALTER TABLE `chatbox` DISABLE KEYS */;
INSERT INTO `chatbox` VALUES (1,14,'¿Cuanto cuestan las sesiones?','60€'),(2,14,'¿Cuanto duran las sesiones?','Las sesiones son de una hora aproximadamente?');
/*!40000 ALTER TABLE `chatbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `LATITUD` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `LONGITUD` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `TIPO_VIA` varchar(50) NOT NULL,
  `NOMBRE_VIA` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `NUMERO` int NOT NULL,
  `URBANIZACION` varchar(100) DEFAULT NULL,
  `BLOQUE` varchar(100) DEFAULT NULL,
  `PISO` int DEFAULT NULL,
  `PUERTA` varchar(3) DEFAULT NULL,
  `CP` varchar(10) DEFAULT NULL,
  `LOCALIDAD` varchar(100) DEFAULT NULL,
  `PROVINCIA` varchar(100) DEFAULT NULL,
  `PAIS` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `DIRECCIONES_FK` (`ID_USER`),
  CONSTRAINT `DIRECCIONES_FK` FOREIGN KEY (`ID_USER`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (2,14,'36.7185866','-4.4338799','CALLE','ESPERANTO',3,'','',2,'B','29007','MALAGA','MALAGA','ESPAÑA');
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `PATH` varchar(200) NOT NULL,
  `IMG_NOMBRE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `TIPO` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `IMAGENES_FK` (`ID_USER`),
  CONSTRAINT `IMAGENES_FK` FOREIGN KEY (`ID_USER`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (19,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/logonuevamente.png','logonuevamente.png',1),(20,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente001.png','nuevamente001.png',0),(21,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente002.png','nuevamente002.png',0),(22,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente003.png','nuevamente003.png',0),(23,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente005.png','nuevamente005.png',0),(24,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente004.png','nuevamente004.png',0),(25,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente006.png','nuevamente006.png',0),(26,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente007.png','nuevamente007.png',0),(27,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente009.jpeg','nuevamente009.jpeg',0),(28,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente008.jpeg','nuevamente008.jpeg',0);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ofertante`
--

DROP TABLE IF EXISTS `ofertante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ofertante` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `ID_CATEGORIA` int unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `OFERTANTE_FK` (`ID_USER`),
  KEY `OFERTANTE_FK_1` (`ID_CATEGORIA`),
  CONSTRAINT `OFERTANTE_FK` FOREIGN KEY (`ID_USER`) REFERENCES `users` (`ID`),
  CONSTRAINT `OFERTANTE_FK_1` FOREIGN KEY (`ID_CATEGORIA`) REFERENCES `categoria` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ofertante`
--

LOCK TABLES `ofertante` WRITE;
/*!40000 ALTER TABLE `ofertante` DISABLE KEYS */;
INSERT INTO `ofertante` VALUES (1,14,2);
/*!40000 ALTER TABLE `ofertante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `redes`
--

DROP TABLE IF EXISTS `redes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `redes` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `NOMBRE` varchar(100) NOT NULL,
  `URL` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `REDES_FK` (`ID_USER`),
  CONSTRAINT `REDES_FK` FOREIGN KEY (`ID_USER`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redes`
--

LOCK TABLES `redes` WRITE;
/*!40000 ALTER TABLE `redes` DISABLE KEYS */;
/*!40000 ALTER TABLE `redes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuestas`
--

DROP TABLE IF EXISTS `respuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respuestas` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_VALORACION` int NOT NULL,
  `ID_COMENTADOR` int NOT NULL,
  `RESPUESTA` text NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `RESPUESTAS_FK` (`ID_VALORACION`),
  CONSTRAINT `RESPUESTAS_FK` FOREIGN KEY (`ID_VALORACION`) REFERENCES `valoraciones` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestas`
--

LOCK TABLES `respuestas` WRITE;
/*!40000 ALTER TABLE `respuestas` DISABLE KEYS */;
/*!40000 ALTER TABLE `respuestas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sectores`
--

DROP TABLE IF EXISTS `sectores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sectores` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOMBRE_SECTOR` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sectores`
--

LOCK TABLES `sectores` WRITE;
/*!40000 ALTER TABLE `sectores` DISABLE KEYS */;
INSERT INTO `sectores` VALUES (7,'SIN SECTOR'),(8,'SALUD'),(9,'CONSTRUCCION'),(10,'AGROALIMENTARIO'),(11,'LEGAL/ADMINISTRACION'),(12,'INDUSTRIA'),(13,'EDUCADION'),(14,'DEPORTE'),(15,'TECNOLOGIA'),(16,'HOGAR'),(17,'AUTOMOCION'),(18,'INMOBILIARIA'),(19,'CULTURA'),(20,'HOSTELERIA');
/*!40000 ALTER TABLE `sectores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `TLF` varchar(12) DEFAULT NULL,
  `URL` varchar(100) DEFAULT NULL,
  `DESCRIPCION` text,
  `PASSWORD` varchar(100) NOT NULL,
  `FECHA_REG` datetime NOT NULL,
  `ESTADO` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (14,'NUEVA MENTE PSICOLOGOS','info@nuevamentepsicologos.com','951325269','nuevamentepsicologos.com','Gabinete Psicológico','81dc9bdb52d04dc20036dbd8313ed055','2023-05-31 12:15:58',1),(15,'FRANCISCO JOSE DEL RIO VELARDE','f.delrio.velarde@gmail.com','625376988',NULL,'ADMINISTRADOR','f813c705499c56d8cbce9349879dc048','2023-06-07 19:50:00',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valoraciones`
--

DROP TABLE IF EXISTS `valoraciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valoraciones` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_COMENTADO` int NOT NULL,
  `PUNTUACION` float(1,1) NOT NULL,
  `COMENTARIO` text NOT NULL,
  `ID_COMENTADOR` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `VALORACIONES_FK` (`ID_COMENTADO`),
  KEY `VALORACIONES_FK_1` (`ID_COMENTADOR`),
  CONSTRAINT `VALORACIONES_FK` FOREIGN KEY (`ID_COMENTADO`) REFERENCES `users` (`ID`),
  CONSTRAINT `VALORACIONES_FK_1` FOREIGN KEY (`ID_COMENTADOR`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoraciones`
--

LOCK TABLES `valoraciones` WRITE;
/*!40000 ALTER TABLE `valoraciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `valoraciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'prueba_mapas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-19 20:33:38
