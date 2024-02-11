const db = require('../connection');


const getFoodDonationId = (foodDonation) => {
  return db.query(
    'SELECT id FROM food_donations WHERE id = $1',
    [foodDonation]
  )
  .then((foodDonationResult) => {
    return foodDonationResult.rows[0].id;
  });
}

const insertMessage = (name, email, message, foodDonationId) => {
  const createdAt = new Date();

  return db.query(
    'INSERT INTO messages (name, email, message, created_at, food_donation_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, email, message, createdAt, foodDonationId]
  )
  .then((result) => {
    const { rows } = result;
    return rows[0];
  })
  .catch((error) => {
    console.error(`Error inserting message:`, error);
    throw error;
  });
}

module.exports = {
  getFoodDonationId,
  insertMessage
};
