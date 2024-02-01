DROP TABLE IF EXISTS Users CASCADE;
CREATE TABLE Users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  sub_id VARCHAR(255)
);

DROP TABLE IF EXISTS FoodDonations CASCADE;
CREATE TABLE FoodDonations (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  phone BIGINT,
  preferred_food VARCHAR(255),
  allergies TEXT, target_amount_in_grams BIGINT
 );

 DROP TABLE IF EXISTS Address CASCADE;
CREATE TABLE Address (
  id SERIAL PRIMARY KEY NOT NULL,
  address_1 VARCHAR(255) NOT NULL,
  address_2 VARCHAR(255),
city VARCHAR(255),
province VARCHAR[],
postal_code VARCHAR(10),
country VARCHAR(255) default 'Canada'
);

DROP TABLE IF EXISTS Messages CASCADE;
CREATE TABLE Messages (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255),
  messages TEXT,
  created_at DATE
  );
