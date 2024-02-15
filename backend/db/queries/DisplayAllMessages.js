const db = require('../connection');

const displayAllMessages = (userId) => {
  return db.query(
    `SELECT messages.*, food_donations.user_id FROM messages JOIN food_donations ON messages.food_donation_id = food_donations.id WHERE user_id = ${userId}`
  )
    .then((result) => {
      const { rows } = result;
      return rows;
    })
    .catch((error) => {
      console.error('Error fetching all messages:', error);
      throw error;
    });
}

module.exports = {
  displayAllMessages
};
