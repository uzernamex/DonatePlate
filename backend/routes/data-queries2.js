const db = require("../db/connection");

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

const saveFoodDonation = async (formData) => {
  const {
    title,
    description,
    start_date,
    end_date,
    phone,
    preferred_food,
    allergies,
    target_amount_in_grams,
  } = formData;

  const user_id = 1; //currently keeping as static; want to make this dynamic later on.
  const query = `
    INSERT INTO food_donations (title, description, start_date, end_date, phone, preferred_food, allergies, target_amount_in_grams, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
 RETURNING *;`;

  const values = [
    title,
    description,
    start_date,
    end_date,
    phone,
    preferred_food,
    allergies,
    target_amount_in_grams,
    user_id,
  ];

  try {
    const result = await db.query(query, values);

    return result.rows[0];
  } catch (error) {
    console.error("Error saving food donation", error);
    throw error;
  }
};

const saveAddress = async (formData) => {
  const { address_1, address_2, city, province, postal_code, country } =
    formData;

  const food_donation_id = 1; //currently keeping as static; want to make this dynamic later on.
  const query = `
    INSERT INTO address (    address_1,
      address_2,
      city,
      province,
      postal_code,
      country, food_donation_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
 RETURNING *;`;

  const addressValues = [
    address_1,
    address_2,
    city,
    province,
    postal_code,
    country,
    food_donation_id,
  ];

  try {
    const result = await db.query(query, addressValues);
    return result.rows[0];
  } catch (error) {
    console.error("Error saving address", error);
    throw error;
  }
};

module.exports = {
  saveFoodDonation,
  saveAddress,
  getUsers,
  getAddress,
  getMessages,
  getFoodDonations,
};
