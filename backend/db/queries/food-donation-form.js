const db = require("../connection");

const savedDonationForm = async (subId) => {
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

module.exports = {
savedDonationForm
};
