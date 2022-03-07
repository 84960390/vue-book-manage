/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : books_manage_system

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 07/03/2022 15:43:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for administrator
-- ----------------------------
DROP TABLE IF EXISTS `administrator`;
CREATE TABLE `administrator`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`, `account`) USING BTREE,
  UNIQUE INDEX `id_UNIQUE`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of administrator
-- ----------------------------
INSERT INTO `administrator` VALUES (1, 'admin', 'admin');
INSERT INTO `administrator` VALUES (2, 'admin123', 'admin123');
INSERT INTO `administrator` VALUES (5, 'admin1', 'admin1');

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookname` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `author` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `company` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `booknumber` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `bookid` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `picname` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `lenddate` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `returndate` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `lenduserid` int NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `price` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '00.00',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id_UNIQUE`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES (1, 'javaScript高级程序设计', '李松锋', '人民邮电出版社', 'A001', 'A001-1', '1.jpg', '1629626378110', '1647770378110', 38, 1, '99.00');
INSERT INTO `books` VALUES (2, '数据科学入门', '岳冰', '中国工信出版集团', 'A002', 'A002-2', '2.jpg', '1629626388520', '1632218388520', 38, 1, '30.99');
INSERT INTO `books` VALUES (3, '项目管理新思维', '金从军', '人民邮电出版社', 'B001', 'B001-3', '3.jpg', '1629626403878', '1632218403878', 38, 1, '20.00');
INSERT INTO `books` VALUES (4, '精益数据分析', '韩知白', '人民邮电出版社', 'A003', 'A003-4', '4.jpg', '1629626419240', '1632218419240', 39, 1, '25.00');
INSERT INTO `books` VALUES (5, '你不知道的50个脑科学知识', '荊妍', '人民邮电出版社', 'C001', 'C001-5', '5.jpg', '1629626447511', '1632218447511', 39, 1, '40.50');
INSERT INTO `books` VALUES (6, '证明达尔文', '陈鹏', '人民邮电出版社', 'D001', 'D001-6', '6.jpg', '1629626435554', '1632218435554', 39, 1, '70.00');
INSERT INTO `books` VALUES (7, '信息流广告入门', '李明', '中国工信出版集团', 'B002', 'B002-7', '7.jpg', '1629628274949', '1632220274949', 40, 1, '50.33');
INSERT INTO `books` VALUES (8, '精益品牌塑造', '谢婷婷', '中国工信出版集团', 'B003', 'B003-8', '8.jpg', '1629628518587', '1632220518587', 41, 1, '68.00');
INSERT INTO `books` VALUES (9, '决策知识自动化', '王飞燕', '工业出版社', 'B004', 'B004-9', '9.jpg', '1629628553624', '1632220553624', 41, 1, '44.00');
INSERT INTO `books` VALUES (10, '简单高校LATEX', '吴康隆', '人民邮电出版社', 'B005', 'B005-10', '10.jpg', NULL, NULL, NULL, 0, '62.00');
INSERT INTO `books` VALUES (11, 'C语言程序设计现代方法', '吕修锋', '人民邮电出版社', 'A004', 'A004-11', '11.jpg', NULL, NULL, NULL, 0, '55.00');
INSERT INTO `books` VALUES (12, '超供电电压的电路设计', '吴顺珉', '工业出版社', 'E001', 'E001-12', '12.jpg', NULL, NULL, NULL, 0, '44.00');
INSERT INTO `books` VALUES (13, '数据驱动力企业分析实战', '张奎', '人民邮电出版社', 'B006', 'B006-13', '13.jpg', NULL, NULL, NULL, 0, '22.69');
INSERT INTO `books` VALUES (14, '简明的TensorFlow2', '李双锋', '人民邮电出版社', 'A005', 'A005-14', '14.jpg', NULL, NULL, NULL, 0, '70.52');
INSERT INTO `books` VALUES (15, '面向对象是怎样工作的', '平泽章', '中国工信出版集团', 'A006', 'A006-15', '15.jpg', NULL, NULL, NULL, 0, '80.00');
INSERT INTO `books` VALUES (16, '深入java虚拟机的算法与实现', '中村成洋', '人民邮电出版社', 'A007', 'A007-16', '16.jpg', NULL, NULL, NULL, 0, '19.99');
INSERT INTO `books` VALUES (17, '图解人工智能', '多田智史', '人民邮电出版社', 'A008', 'A008-17', '17.jpg', NULL, NULL, NULL, 0, '46.50');
INSERT INTO `books` VALUES (18, '微积分入门', '小平邦彦', '人民邮电出版社', 'F001', 'F001-18', '18.jpg', NULL, NULL, NULL, 0, '78.55');
INSERT INTO `books` VALUES (19, '概率论及其应用', '郑元碌', '人民邮电出版社', 'F002', 'F002-19', '19.jpg', NULL, NULL, NULL, 0, '46.32');
INSERT INTO `books` VALUES (29, '最后的数学问题', '黄征', '中国工信出版集团', 'F003', 'F003-20', '0.jpg', NULL, NULL, NULL, 0, '50.22');
INSERT INTO `books` VALUES (45, '14444', '144', '11', 'aa', 'aa-11', 'aa-11.jpg', NULL, NULL, NULL, 0, '12.00');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'admin123',
  `studentname` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `class` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '暂无信息',
  `schooldate` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '暂无信息',
  `gender` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '男',
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `lendbook` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `account`) USING BTREE,
  UNIQUE INDEX `idstudents_UNIQUE`(`id`) USING BTREE,
  UNIQUE INDEX `account_UNIQUE`(`account`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 42 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES (38, '1111111111', '111111', '李明', '2018机械1班', '1629624693156', '男', 0, '1,2,3,43');
INSERT INTO `students` VALUES (39, '2222222222', '11111', '小红', '2019级殡仪1班', '1629624693156', '女', 0, '4,6,5');
INSERT INTO `students` VALUES (40, '3333333333', '111111', '卡丁', '2017级土木工程1班', '1629624693156', '男', 0, '7');
INSERT INTO `students` VALUES (41, '5555555555', '111111', '机械狗', '2018级机械1班', '1629624693156', '男', 0, '8,9');

SET FOREIGN_KEY_CHECKS = 1;
