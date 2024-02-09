const db = require('../connection');

const insertMessage = (name, email, message, userId) => {
  const createdAt = new Date();


  return db.query(
    'SELECT id FROM food_donations WHERE user_id = $1',
    [userId]
  )
  .then((foodDonationResult) => {
    const foodDonationId = foodDonationResult.rows[0].id;


    return db.query(
      'INSERT INTO messages (name, email, message, created_at, food_donation_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, message, createdAt, foodDonationId]
    );
  })
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
  insertMessage
};
