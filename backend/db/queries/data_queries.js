// const { query } = require("express");
// const { all } = require("../../routes/food-donation-form");
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
}
// const savedDonationForm = async (FormData) => {
//   try {
//     const {
//       title,
//       description,
//       start_date,
//       end_date,
//       phone,
//       preferred_food,
//       allergies,
//       target_amount_in_grams,
//       Address_1,
//       Address_2,
//       City,
//       Province,
//       PostalCode,
//       Country,
//     } = FormData;
//     console.log(
//       "Connecting to SQL database to save donation form data",
//       formData
//     );

//     const query = `INSERT INTO food_donations (title, description, start_date, end_date, phone, preferred_food, allergies, target_amount_in_grams, address_1, address_2, city, province, postal_code, country)
// VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
// RETURNING *`;

//     const { rows } = await db.query(query, values);
//     return rows[0];
//   } catch (error) {
//     console.error("Error saving form data:", error);
//     throw error;
//   }
// };
module.exports = {
  getUsers,
  getAddress,
  getMessages,
  getFoodDonations,
  // savedDonationForm,
};
