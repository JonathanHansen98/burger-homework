DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
	id INT auto_increment not null,
    name VARCHAR(30) NOT NULL,
    devoured BOOL DEFAULT FALSE,
    createdAt TIMESTAMP NOT NULL default current_timestamp,
    
    PRIMARY KEY(id)
);