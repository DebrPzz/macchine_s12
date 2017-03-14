-- Adminer 4.2.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `interventi`;
CREATE TABLE `interventi` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `macchine_id` int(10) unsigned NOT NULL,
  `dataintervento` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `descrizione` varchar(200) DEFAULT NULL,
  `tipologie_id` int(10) unsigned DEFAULT NULL,
  `km` int(10) unsigned DEFAULT NULL,
  `spesa` decimal(10,2) unsigned NOT NULL DEFAULT '0.00',
  `orelavoro` float(5,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tipologie_id` (`tipologie_id`),
  KEY `macchine_id` (`macchine_id`),
  CONSTRAINT `interventi_ibfk_1` FOREIGN KEY (`tipologie_id`) REFERENCES `tipologie` (`id`),
  CONSTRAINT `interventi_ibfk_2` FOREIGN KEY (`macchine_id`) REFERENCES `macchine` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `interventi` (`id`, `macchine_id`, `dataintervento`, `descrizione`, `tipologie_id`, `km`, `spesa`, `orelavoro`) VALUES
(1,	1,	'2017-02-01 09:31:41',	'Cambio olio e filtro',	5,	225300,	130.00,	1.15),
(2,	2,	'2017-02-10 10:32:20',	'Rabbocco liquido raffreddamento',	5,	163400,	5.00,	1.30);

DROP VIEW IF EXISTS `listainterventi`;
CREATE TABLE `listainterventi` (`id` int(10) unsigned, `dataintervento` timestamp, `macchina` varchar(50), `marca` varchar(50), `descrizione` varchar(200), `tipologia` varchar(80), `orelavoro` float(5,2), `spesa` decimal(10,2) unsigned);


DROP TABLE IF EXISTS `macchine`;
CREATE TABLE `macchine` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `macchina` varchar(50) NOT NULL,
  `marche_id` int(10) unsigned NOT NULL,
  `kw` int(4) NOT NULL,
  `anno` varchar(4) DEFAULT NULL,
  `descrizione` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `macchina` (`macchina`),
  KEY `marche_id` (`marche_id`),
  CONSTRAINT `macchine_ibfk_1` FOREIGN KEY (`marche_id`) REFERENCES `marche` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `macchine` (`id`, `macchina`, `marche_id`, `kw`, `anno`, `descrizione`) VALUES
(1,	'TRATTRICE DT5020',	1,	43,	'2014',	NULL),
(2,	'TRATTRICE 6230R',	2,	180,	'2015',	NULL);

DROP TABLE IF EXISTS `marche`;
CREATE TABLE `marche` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `marca` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `marca` (`marca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `marche` (`id`, `marca`) VALUES
(3,	'Echo'),
(6,	'gigino'),
(5,	'giotto'),
(2,	'John Deere'),
(1,	'Kubota');

DROP VIEW IF EXISTS `prova`;
CREATE TABLE `prova` (`id` int(10) unsigned, `dataintervento` timestamp, `descrizione` varchar(200), `tipologia` varchar(80), `km` int(10) unsigned, `spesa` decimal(10,2) unsigned, `orelavoro` float(5,2), `macchina` varchar(50), `anno` varchar(4));


DROP TABLE IF EXISTS `tipologie`;
CREATE TABLE `tipologie` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipologia` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `tipologie` (`id`, `tipologia`) VALUES
(4,	'Riparazione'),
(5,	'Manutenzione ordinaria');

DROP TABLE IF EXISTS `listainterventi`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER VIEW `listainterventi` AS select `interventi`.`id` AS `id`,`interventi`.`dataintervento` AS `dataintervento`,`macchine`.`macchina` AS `macchina`,`marche`.`marca` AS `marca`,`interventi`.`descrizione` AS `descrizione`,`tipologie`.`tipologia` AS `tipologia`,`interventi`.`orelavoro` AS `orelavoro`,`interventi`.`spesa` AS `spesa` from (((`interventi` left join `tipologie` on((`interventi`.`tipologie_id` = `tipologie`.`id`))) left join `macchine` on((`interventi`.`macchine_id` = `macchine`.`id`))) left join `marche` on((`macchine`.`marche_id` = `marche`.`id`)));

DROP TABLE IF EXISTS `prova`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER VIEW `prova` AS select `interventi`.`id` AS `id`,`interventi`.`dataintervento` AS `dataintervento`,`interventi`.`descrizione` AS `descrizione`,`tipologie`.`tipologia` AS `tipologia`,`interventi`.`km` AS `km`,`interventi`.`spesa` AS `spesa`,`interventi`.`orelavoro` AS `orelavoro`,`macchine`.`macchina` AS `macchina`,`macchine`.`anno` AS `anno` from ((`interventi` join `macchine` on((`macchine`.`id` = `interventi`.`macchine_id`))) join `tipologie` on((`tipologie`.`id` = `interventi`.`tipologie_id`)));

-- 2017-03-08 17:57:24
