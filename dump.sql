-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: mainDB
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11),
  `username` varchar(100) DEFAULT NULL,
  `userType` varchar(100) DEFAULT NULL,
  `active` char(1) DEFAULT NULL,
  `loginTries` int(11) DEFAULT NULL,
   PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO `user` VALUES (1,'user1','noAdmin','Y',0),(2,'user2','noAdmin','Y',0),(3,'user3','noAdmin','Y',0),(4,'user4','noAdmin','Y',0),(5,'user5','noAdmin','Y',0);

CREATE TABLE `modules` (
  `id` int(11),
  `name` varchar(100) DEFAULT NULL,
  `user_modules_id` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_modules_id`) REFERENCES user(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




INSERT INTO `modules` VALUES (1,'m1',1),(2,'m2',1),(3,'m3',2);