drop database civiqueirosABC;
CREATE DATABASE civiqueirosABC;


USE civiqueirosABC;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	tipoUsuario varchar(45),
	codigoAut char(6) unique
);

CREATE TABLE carro (
	idCarro int primary key AUTO_INCREMENT,
	modelo VARCHAR(100),
	geracao varchar(3),
	anoFabricacao YEAR,
	cor varchar(45),
	codigoAut char(6),
	FOREIGN KEY (codigoAut) REFERENCES usuario(codigoAut)
);

insert into usuario (nome, email, senha, tipoUsuario, codigoAut) values
('Carlos Eduardo', 'playspanorama2@gmail.com', 'Dudu1212', 'Desenvolvedor', 'SIVTEC');

insert into carro (modelo, geracao, anoFabricacao, cor, codigoAut) values
('Civic SI 1.8', 'G8', '2020', 'Preto', 'SIVTEC');

SELECT * from usuario;
SELECT * from carro;

SELECT geracao, COUNT(*) AS numeroDeCarros
FROM carro GROUP BY geracao ORDER BY numeroDeCarros DESC LIMIT 1;

select count(geracao) from carro group by geracao;
