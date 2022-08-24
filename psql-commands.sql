-- for help \?
-- to list databases \l
-- to connect to a different database \c <dbname>
-- list all tables \d
-- SELECT * FROM <tablename>


-- to add a column
-- alter table <tablename> add column <columnname> <type>;

CREATE TABLE IF NOT EXISTS restaurants (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(50) NOT NULL,
	location VARCHAR(50) NOT NULL,
	price_range INT NOT NULL check(price_range >= 1 and price_range <= 5));

CREATE TABLE IF NOT EXISTS reviews (
	review_id BIGSERIAL PRIMARY KEY NOT NULL,
	restaurant_id BIGINT REFERENCES restaurants(id) NOT NULL,
	username VARCHAR(20) NOT NULL,
	rating INT NOT NULL check(rating >= 1 and rating <= 5),
	review VARCHAR(500) NOT NULL
);


-- SQL commands

-- CREATE DATABASE <name>;