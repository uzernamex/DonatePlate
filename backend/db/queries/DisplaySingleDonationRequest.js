const db = require('../connection');

const getSingleDonationRequestById = (Id) => {
  return db.query(
    'SELECT food_donations.*, address.* FROM food_donations LEFT JOIN address ON food_donations.id = address.food_donation_id WHERE food_donations.id = $1',
    [Id]
  )
    .then((result) => {
      const { rows } = result;
      return rows;
    })
    .catch((error) => {
      console.error(`Error fetching donations and address for user with id ${Id}:`, error);
      throw error;
    });
}

module.exports = {
  getSingleDonationRequestById
};




