const db = require('../connection');

const displayAllMessages = () => {
  return db.query(
    'SELECT name, email, message FROM messages'
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
