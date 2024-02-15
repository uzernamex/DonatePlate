const db = require("../connection");
const getDonationsByUserId = (userId) => {
  return db
    .query(`SELECT * FROM food_donations WHERE user_id = ${userId}`)
    .then((result) => {
      const { rows } = result;
      return rows;
    })
    .catch((error) => {
      console.error("Error fetching all messages:", error);
      throw error;
    });
};
module.exports = { getDonationsByUserId };
