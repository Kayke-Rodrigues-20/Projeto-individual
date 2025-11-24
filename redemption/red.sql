CREATE DATABASE RED;
USE RED;
drop database RED;

CREATE TABLE console (
	id INT PRIMARY KEY AUTO_INCREMENT,
	plataforma VARCHAR(50),
	codigoPlataforma INT
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
select * from usuario;


insert into console (plataforma, codigoPlataforma) values ('Playstation', 1);
insert into console (plataforma, codigoPlataforma) values ('Xbox', 2);
insert into console (plataforma, codigoPlataforma) values ('Pc', 3);

select * from usuario;

