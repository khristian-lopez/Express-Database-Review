-- Write our database schema here! --
DROP DATABASE dogdb;

CREATE DATABASE dogdb;

USE dogdb;

/* CREATE TABLE owners (
  id int primary key auto_increment,
  dogowner varchar(20)
); */

CREATE TABLE dogs (
  id int primary key auto_increment,
  dogname varchar(20) not null,
  breed varchar(20) not null,
  age int not null,
  dogowner varchar(20)
);

