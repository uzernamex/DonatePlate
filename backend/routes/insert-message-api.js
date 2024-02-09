const express = require('express');
const router = express.Router();
const { insertMessage } = require('../db/queries/InsertMessage');

router.post('/', (req, res) => {
  const { name, email, message, userId } = req.body;

  if (!name || !email || !message || !userId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  insertMessage(name, email, message, userId)
    .then((insertedMessage) => {
      res.status(201).json(insertedMessage);
    })
    .catch((error) => {
      console.error('Error inserting message:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
