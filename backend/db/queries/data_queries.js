const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const getFoodDonations = () => {
  return db.query("SELECT * FROM food_donations;").then((data) => {
    return data.rows;
  });
};

const getAddress = () => {
  return db.query("SELECT * FROM address;").then((data) => {
    return data.rows;
  });
};

const getMessages = () => {
  return db.query("SELECT * FROM messages;").then((data) => {
    return data.rows;
  });
};

const saveFoodDonation = (FormData) => {
  const {
    title,
    description,
    start_date,
    end_date,
    phone,
    preferred_food,
    allergies,
    target_amount_in_grams,
    Address_1,
    Address_2,
    City,
    Province,
    PostalCode,
    Country,
  } = formData;

  const query = `
    INSERT INTO food_donations (title, description, start_date, end_date, phone, preferred_food, allergies, target_amount_in_grams, Address_1, Address_2, City, Province, PostalCode, Country)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  `;

  const values = [
    title,
    description,
    start_date,
    end_date,
    phone,
    preferred_food,
    allergies,
    target_amount_in_grams,
    Address_1,
    Address_2,
    City,
    Province,
    PostalCode,
    Country,
  ];

  return db.query(query, values);
};

module.exports = {
  getUsers,
  getAddress,
  getMessages,
  getFoodDonations,
  saveFoodDonation,
};
