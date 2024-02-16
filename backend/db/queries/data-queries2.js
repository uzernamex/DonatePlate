const db = require("../connection");


const getFoodDonations = () => {
  return db.query("SELECT * FROM food_donations;").then((data) => {
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
    user_id,

  } = formData;

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


const saveAddress = async (formData, food_donation_id) => {
  console.log("Saving Address");
  const { Address_1, Address_2, city, province, postal_code, Country } =
    formData;
  console.log({ Address_1, Address_2, city, province, postal_code, Country });
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
    Address_1,
    Address_2,
    city,
    province,
    postal_code,
    Country,
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
  getFoodDonations,

};
