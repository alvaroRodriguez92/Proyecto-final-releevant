-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: localhost    Database: prueba_mapas
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `CATEGORIAS`
--

DROP TABLE IF EXISTS `CATEGORIAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CATEGORIAS` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOMBRE_CATEGORIA` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CATEGORIAS`
--

LOCK TABLES `CATEGORIAS` WRITE;
/*!40000 ALTER TABLE `CATEGORIAS` DISABLE KEYS */;
/*!40000 ALTER TABLE `CATEGORIAS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DIRECCIONES`
--

DROP TABLE IF EXISTS `DIRECCIONES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DIRECCIONES` (
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
  CONSTRAINT `DIRECCIONES_FK` FOREIGN KEY (`ID_USER`) REFERENCES `USERS` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DIRECCIONES`
--

LOCK TABLES `DIRECCIONES` WRITE;
/*!40000 ALTER TABLE `DIRECCIONES` DISABLE KEYS */;
INSERT INTO `DIRECCIONES` VALUES (2,14,'36.7185866','-4.4338799','CALLE','ESPERANTO',3,'','',2,'B','29007','MALAGA','MALAGA','ESPAÑA');
/*!40000 ALTER TABLE `DIRECCIONES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IMAGENES`
--

DROP TABLE IF EXISTS `IMAGENES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `IMAGENES` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `PATH` varchar(200) NOT NULL,
  `NOMBRE` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `IMAGENES_FK` (`ID_USER`),
  CONSTRAINT `IMAGENES_FK` FOREIGN KEY (`ID_USER`) REFERENCES `USERS` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IMAGENES`
--

LOCK TABLES `IMAGENES` WRITE;
/*!40000 ALTER TABLE `IMAGENES` DISABLE KEYS */;
INSERT INTO `IMAGENES` VALUES (19,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/logonuevamente.png','logonuevamente.png'),(20,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente001.png','nuevamente001.png'),(21,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente002.png','nuevamente002.png'),(22,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente003.png','nuevamente003.png'),(23,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente005.png','nuevamente005.png'),(24,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente004.png','nuevamente004.png'),(25,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente006.png','nuevamente006.png'),(26,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente007.png','nuevamente007.png'),(27,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente009.jpeg','nuevamente009.jpeg'),(28,14,'/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente008.jpeg','nuevamente008.jpeg');
/*!40000 ALTER TABLE `IMAGENES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LOGO`
--

DROP TABLE IF EXISTS `LOGO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LOGO` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `PATH` varchar(200) NOT NULL,
  `LOGO_NOMBRE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ESTADO` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`ID`),
  KEY `LOGO_FK` (`ID_USER`),
  CONSTRAINT `LOGO_FK` FOREIGN KEY (`ID_USER`) REFERENCES `USERS` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LOGO`
--

LOCK TABLES `LOGO` WRITE;
/*!40000 ALTER TABLE `LOGO` DISABLE KEYS */;
INSERT INTO `LOGO` VALUES (1,14,'/Users/Francis-Mac/Desktop/mapas/api/public/logo/logonuevamente.png','logonuevamente.png',1);
/*!40000 ALTER TABLE `LOGO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REDES`
--

DROP TABLE IF EXISTS `REDES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `REDES` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `NOMBRE` varchar(100) NOT NULL,
  `URL` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `REDES_FK` (`ID_USER`),
  CONSTRAINT `REDES_FK` FOREIGN KEY (`ID_USER`) REFERENCES `USERS` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REDES`
--

LOCK TABLES `REDES` WRITE;
/*!40000 ALTER TABLE `REDES` DISABLE KEYS */;
/*!40000 ALTER TABLE `REDES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USERS` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(100) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `TLF` varchar(12) DEFAULT NULL,
  `URL` varchar(100) DEFAULT NULL,
  `DESCRIPCION` text,
  `PASSWORD` varchar(100) NOT NULL,
  `FECHA_REG` datetime NOT NULL,
  `ESTADO` int NOT NULL DEFAULT '1',
  `TIPO` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERS`
--

LOCK TABLES `USERS` WRITE;
/*!40000 ALTER TABLE `USERS` DISABLE KEYS */;
INSERT INTO `USERS` VALUES (14,'NUEVA MENTE PSICOLOGOS','info@nuevamentepsicologos.com','951325269','nuevamentepsicologos.com','Gabinete Psicológico','81dc9bdb52d04dc20036dbd8313ed055','2023-05-31 12:15:58',1,0),(15,'FRANCISCO JOSE DEL RIO VELARDE','f.delrio.velarde@gmail.com','625376988',NULL,'ADMINISTRADOR','f813c705499c56d8cbce9349879dc048','2023-06-07 19:50:00',1,1);
/*!40000 ALTER TABLE `USERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VALORACIONES`
--

DROP TABLE IF EXISTS `VALORACIONES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VALORACIONES` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_USER` int NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `NOMBRE` varchar(100) DEFAULT NULL,
  `PUNTUACION` float(1,1) NOT NULL,
  `COMENTARIO` text NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `VALORACIONES_FK` (`ID_USER`),
  CONSTRAINT `VALORACIONES_FK` FOREIGN KEY (`ID_USER`) REFERENCES `USERS` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VALORACIONES`
--

LOCK TABLES `VALORACIONES` WRITE;
/*!40000 ALTER TABLE `VALORACIONES` DISABLE KEYS */;
/*!40000 ALTER TABLE `VALORACIONES` ENABLE KEYS */;
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

-- Dump completed on 2023-06-12 10:39:20
