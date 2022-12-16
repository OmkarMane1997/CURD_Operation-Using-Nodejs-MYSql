-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2022 at 08:40 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `civil_engineer`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE `user_master` (
  `id` bigint(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` bigint(12) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `designation` longtext,
  `is_default` tinyint(4) DEFAULT '0',
  `is_on` tinyint(4) DEFAULT '1',
  `is_active` tinyint(4) DEFAULT '1',
  `created_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `deleted_date` datetime DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `delete_remark` varchar(200) DEFAULT NULL,
  `last_changed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`id`, `name`, `email`, `phone`, `password`, `designation`, `is_default`, `is_on`, `is_active`, `created_date`, `created_by`, `modified_date`, `modified_by`, `deleted_date`, `deleted_by`, `delete_remark`, `last_changed`) VALUES
(1, 'Shinchan', 'test@gmail.com', 7020301000, '$2a$10$MuCMuytRmAVD/Xx9lEZcQea7NW65wg3zhJ2f8nqkisIF8bOEXIH3q', 'React a  x js Devloper ', 0, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-15 16:57:48'),
(2, 'Omkar', 'Omkar@gmail.com', 7020898857, '$2a$10$I8n9c2ctDkUCKrx6BfewvOgGwZQ/ZnGgbDtjqEJEvnY0DJtHVWIf2', 'Web Devloper ', 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-15 16:58:14'),
(3, 'Omkar', 'google@gmail.com', 7020898857, '$2a$10$vA33WgSG4oYaShqH13Aeounqfsv4ibYZ5Yuj7f7wUA5we9NKLxmWi', 'Web Devloper ', 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-16 04:01:42'),
(4, 'Dorimon', 'Dorimon@gmail.com', 7020898857, '$2a$10$t110XvM4ri7fyYPcHq0Rm.RKJXgPG.Sjj7E5HCX0qXT5WagALNUyG', 'Web Devloper ', 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-16 04:04:07'),
(5, 'Parth', 'Parth@gmail.com', 7020898857, '$2a$10$1p66KCuRtG7a5F2xrMxaleL/Cv98vLKytiws4vmkEjsT4EiNITiOK', 'Web Devloper ', 0, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-16 04:15:02'),
(6, 'Gayu', 'Gayu@gmail.com', 7895663324, '$2a$10$jC3b4WVd1DVcUEK6bnOsj.9uckZyhRTG/OZYSJWq/IiQhDiFNCr4u', 'Senior Manager', 0, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-16 07:33:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
  MODIFY `id` bigint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
