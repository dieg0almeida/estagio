-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Mar-2020 às 01:23
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `estagio`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `owners`
--

CREATE TABLE `owners` (
  `owner_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `mother_name` text DEFAULT NULL,
  `father_name` text DEFAULT NULL,
  `rg` text DEFAULT NULL,
  `rg_expedition` text DEFAULT NULL,
  `cpf` text DEFAULT NULL,
  `birth` datetime DEFAULT NULL,
  `nationality` text DEFAULT NULL,
  `marital_status` text DEFAULT NULL,
  `marital_property_systems` text DEFAULT NULL,
  `ocupacy_situation` text DEFAULT NULL,
  `job` text DEFAULT NULL,
  `literate` tinyint(1) DEFAULT NULL,
  `company_job` text DEFAULT NULL,
  `clt` tinyint(1) DEFAULT NULL,
  `earning` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `square` text DEFAULT NULL,
  `lot` text DEFAULT NULL,
  `landmark` text DEFAULT NULL,
  `district` text DEFAULT NULL,
  `city` text DEFAULT NULL,
  `cell_phone_number` text DEFAULT NULL,
  `phone_number` text DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `owners_partners`
--

CREATE TABLE `owners_partners` (
  `partner_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `mother_name` text DEFAULT NULL,
  `father_name` text DEFAULT NULL,
  `rg` text DEFAULT NULL,
  `cpf` text DEFAULT NULL,
  `age` text DEFAULT NULL,
  `nationality` text DEFAULT NULL,
  `ocupacy_situation` text DEFAULT NULL,
  `job` text DEFAULT NULL,
  `literate` tinyint(1) DEFAULT NULL,
  `company_job` text DEFAULT NULL,
  `clt` tinyint(1) DEFAULT NULL,
  `earning` text DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`owner_id`);

--
-- Índices para tabela `owners_partners`
--
ALTER TABLE `owners_partners`
  ADD PRIMARY KEY (`partner_id`),
  ADD KEY `owner_id` (`owner_id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `owners`
--
ALTER TABLE `owners`
  MODIFY `owner_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `owners_partners`
--
ALTER TABLE `owners_partners`
  MODIFY `partner_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `owners_partners`
--
ALTER TABLE `owners_partners`
  ADD CONSTRAINT `owners_partners_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
