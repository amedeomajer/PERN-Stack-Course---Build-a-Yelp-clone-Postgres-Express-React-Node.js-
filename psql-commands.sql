-- for help \?
-- to list databases \l
-- to connect to a different database \c <dbname>
-- list all tables \d
-- SELECT * FROM <tablename>


-- to add a column
-- alter table <tablename> add column <columnname> <type>;



CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	active_account BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS restaurants (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(50) NOT NULL,
	location VARCHAR(50) NOT NULL,
	price_range INT NOT NULL check(price_range >= 1 and price_range <= 5));



-- SQL commands

-- CREATE DATABASE <name>;