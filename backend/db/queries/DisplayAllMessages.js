const db = require('../connection');

const displayAllMessages = () => {
  return db.query(
    //'SELECT name, email, message FROM messages'
    'SELECT messages.*, food_donations.user_id FROM messages JOIN food_donations ON messages.food_donation_id = food_donations.id'
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
