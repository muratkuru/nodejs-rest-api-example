CREATE DATABASE IF NOT EXISTS `express_api_db` CHARACTER SET `utf8mb4` COLLATE `utf8mb4_turkish_ci`;

USE `express_api_db`;

CREATE TABLE  `Persons` (
    `PersonID` int,
    `FirstName` varchar(255),
    `LastName` varchar(255),
    `City` varchar(255)
) ENGINE=INNODB;

INSERT INTO Persons VALUES(1, 'Ali', 'Yıldırım', 'Eskişehir');
INSERT INTO Persons VALUES(2, 'Ayşe', 'Kova', 'Çorum');
INSERT INTO Persons VALUES(3, 'Osman', 'Er', 'Yozgat');
INSERT INTO Persons VALUES(4, 'Ayça', 'Yeşim', 'Kastamonu');
INSERT INTO Persons VALUES(5, 'Ahmet', 'Taş', 'Trabzon');
INSERT INTO Persons VALUES(6, 'Murat', 'Kumru', 'Adana');
INSERT INTO Persons VALUES(7, 'Cafer', 'Kaynakçı', 'Gümüşhane');
INSERT INTO Persons VALUES(8, 'Adem', 'Azal', 'Zonguldak');
INSERT INTO Persons VALUES(9, 'Erdinç', 'Karesi', 'Konya');