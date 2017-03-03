### Schema

CREATE DATABASE lendowe_db;
USE lendowe_db;

CREATE TABLE users
(
	id int AUTO_INCREMENT,
	email varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	date_logged TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE items
(
	id int AUTO_INCREMENT,
	type varchar(100) NOT NULL,
	borrower_id varchar(100) NOT NULL,
	lender varchar(100) NOT NULL,
	notification_email varchar(100) NOT NULL,
	description varchar(100) NOT NULL,
	lent_at TIMESTAMP,
	notification_sent_at TIMESTAMP,
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP,
	PRIMARY KEY (id)
);

