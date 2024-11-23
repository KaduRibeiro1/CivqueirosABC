-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE civiqueirosABC;

USE civiqueirosABC;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	tipoUsuario varchar(45)
);

CREATE TABLE carro (
	idCarro int primary key AUTO_INCREMENT,
	modelo VARCHAR(100),
	anoFabricacao YEAR,
	cor varchar(45),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

insert into usuario (nome, email, senha, tipoUsuario) values
('Carlos Eduardo', 'playspanorama2@gmail.com', 'Dudu1212', 'Desenvolvedor');
