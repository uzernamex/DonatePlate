const db = require('../connection');

const getSingleDonationRequestById = (userId) => {
  return db.query(
    'SELECT food_donations.*, address.* FROM food_donations INNER JOIN address ON food_donations.id = address.food_donation_id WHERE food_donations.user_id = $1',
    [userId]
  )
    .then((result) => {
      const { rows } = result;
      return rows;
    })
    .catch((error) => {
      console.error(`Error fetching donations and address for user with id ${userId}:`, error);
      throw error;
    });
}

module.exports = {
  getSingleDonationRequestById
};




