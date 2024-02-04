const db = require('../connection');

const getSingleDonationRequestById = (donationId) => {
  return db.query('SELECT * FROM food_donations WHERE id = $1', [donationId])
    .then((result) => {
      const { rows } = result;
      return rows[0];
    })
    .catch((error) => {
      console.error(`Error fetching donation with id ${donationId}:`, error);
      throw error;
    });
}

module.exports = {
  getSingleDonationRequestById
};

