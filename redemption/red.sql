CREATE DATABASE RED;
USE RED;

drop database RED;

CREATE TABLE console (
	id INT PRIMARY KEY AUTO_INCREMENT,
	plataforma VARCHAR(50),
	codigoPlataforma VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_console INT,
	FOREIGN KEY (fk_console) REFERENCES console(id)
);

select * from usuario;

create table msTempo (
id int primary key auto_increment,
ms int,
fkUsuario int,
constraint fkUser
foreign key (fkUsuario) references usuario(id)
);
select * from msTempo;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from usuario;

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_console INT,
	FOREIGN KEY (fk_console) REFERENCES console(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into console (plataforma, codigoPlataforma) values ('Playstation', 'playstation');
insert into console (plataforma, codigoPlataforma) values ('Xbox', 'xbox');
insert into console (plataforma, codigoPlataforma) values ('Pc', 'pc gamer');
insert into aquario (descricao, fk_console) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_console) values ('Aquário de Peixe-dourado', 2);
insert into aquario (descricao, fk_console) values ('Aquário de Peixe-dourado', 3);

delete from usuario
where id >= 7;

select * from usuario;
select * from empresa;
