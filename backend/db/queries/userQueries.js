// userQueries.js
const db = require("../connection");

const getUserBySubId = async (subId) => {
  try {
    const { rows } = await db.query("SELECT * FROM users WHERE sub_id = $1", [
      subId,
    ]);
    return rows[0];
  } catch (error) {
    console.error(
      `Error executing query to get user with subId ${subId}:`,
      error
    );
    throw error;
  }
};

const insertUser = async (user) => {
  try {
    const keys = Object.keys(user);
    const name = user.given_name || user.name;
    const email = user.email || "no email";
    const subid = user.sub;

    console.log(`Executing query to insert user:`, user);
    const query = `INSERT INTO users(name,email,sub_id) VALUES($1, $2, $3) RETURNING *`;

    const { rows } = await db.query(query, [name, email, subid]);

    return rows[0];
  } catch (error) {
    console.error(`Error executing query to insert user:`, error);
    throw error;
  }
};

const getDonationsByUserId = async (userId) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM food_donations WHERE user_id = $1",
      [userId]
    );
    return rows;
  } catch (error) {
    console.error(
      `Error executing query to get donations for user with ID ${userId}:`,
      error
    );
    throw error;
  }
};

module.exports = {
  getUserBySubId,
  insertUser,
  getDonationsByUserId,
};
