const express = require('express');
const router = express.Router();
const { displayAllMessages } = require('../db/queries/DisplayAllMessages');

router.get('/', (req, res) => {
  console.log("UserId", req.query.userId);
  displayAllMessages(req.query.userId)
    .then(messages => {
      res.json(messages);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
