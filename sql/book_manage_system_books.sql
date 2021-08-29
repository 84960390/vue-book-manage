-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: book_manage_system
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookname` varchar(45) NOT NULL,
  `author` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  `booknumber` varchar(45) NOT NULL,
  `bookid` varchar(45) DEFAULT NULL,
  `picname` varchar(45) DEFAULT NULL,
  `lenddate` varchar(45) DEFAULT NULL,
  `returndate` varchar(45) DEFAULT NULL,
  `lenduserid` int DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `price` varchar(45) DEFAULT '00.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'javaScript高级程序设计','李松锋','人民邮电出版社','A001','A001-1','1.jpg','1629626378110','1632218378110',38,1,'99.00'),(2,'数据科学入门','岳冰','中国工信出版集团','A002','A002-2','2.jpg','1629626388520','1632218388520',38,1,'30.99'),(3,'项目管理新思维','金从军','人民邮电出版社','B001','B001-3','3.jpg','1629626403878','1632218403878',38,1,'20.00'),(4,'精益数据分析','韩知白','人民邮电出版社','A003','A003-4','4.jpg','1629626419240','1632218419240',39,1,'25.00'),(5,'你不知道的50个脑科学知识','荊妍','人民邮电出版社','C001','C001-5','5.jpg','1629626447511','1632218447511',39,1,'40.50'),(6,'证明达尔文','陈鹏','人民邮电出版社','D001','D001-6','6.jpg','1629626435554','1632218435554',39,1,'70.00'),(7,'信息流广告入门','李明','中国工信出版集团','B002','B002-7','7.jpg','1629628274949','1632220274949',40,1,'50.33'),(8,'精益品牌塑造','谢婷婷','中国工信出版集团','B003','B003-8','8.jpg','1629628518587','1632220518587',41,1,'68.00'),(9,'决策知识自动化','王飞燕','工业出版社','B004','B004-9','9.jpg','1629628553624','1632220553624',41,1,'44.00'),(10,'简单高校LATEX','吴康隆','人民邮电出版社','B005','B005-10','10.jpg',NULL,NULL,NULL,0,'62.00'),(11,'C语言程序设计现代方法','吕修锋','人民邮电出版社','A004','A004-11','11.jpg',NULL,NULL,NULL,0,'55.00'),(12,'超供电电压的电路设计','吴顺珉','工业出版社','E001','E001-12','12.jpg',NULL,NULL,NULL,0,'44.00'),(13,'数据驱动力企业分析实战','张奎','人民邮电出版社','B006','B006-13','13.jpg',NULL,NULL,NULL,0,'22.69'),(14,'简明的TensorFlow2','李双锋','人民邮电出版社','A005','A005-14','14.jpg',NULL,NULL,NULL,0,'70.52'),(15,'面向对象是怎样工作的','平泽章','中国工信出版集团','A006','A006-15','15.jpg',NULL,NULL,NULL,0,'80.00'),(16,'深入java虚拟机的算法与实现','中村成洋','人民邮电出版社','A007','A007-16','16.jpg',NULL,NULL,NULL,0,'19.99'),(17,'图解人工智能','多田智史','人民邮电出版社','A008','A008-17','17.jpg',NULL,NULL,NULL,0,'46.50'),(18,'微积分入门','小平邦彦','人民邮电出版社','F001','F001-18','18.jpg',NULL,NULL,NULL,0,'78.55'),(19,'概率论及其应用','郑元碌','人民邮电出版社','F002','F002-19','19.jpg',NULL,NULL,NULL,0,'46.32'),(29,'最后的数学问题','黄征','中国工信出版集团','F003','F003-20','0.jpg',NULL,NULL,NULL,0,'50.22');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-22 20:07:57
