DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  sub_id VARCHAR(255) UNIQUE NOT NULL
  );

DROP TABLE IF EXISTS food_donations CASCADE;
CREATE TABLE food_donations (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  phone BIGINT,
  preferred_food VARCHAR(255),
  allergies TEXT, target_amount_in_grams BIGINT
 );

DROP TABLE IF EXISTS address CASCADE;
CREATE TABLE address (
  id SERIAL PRIMARY KEY NOT NULL,
  address_1 VARCHAR(255) NOT NULL,
  address_2 VARCHAR(255),
  city VARCHAR(255),
  province VARCHAR(255),
  postal_code VARCHAR(7),
  country VARCHAR(255) default 'Canada'
  );

DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255),
  messages TEXT,
  created_at DATE
  );
