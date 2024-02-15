const express = require("express");
const router = express.Router();
const { getDonationsByUserId } = require("../db/queries/myFoodDrive")

router.get('/', (req, res) => {
  console.log("UserId", req.query.userId);
  getDonationsByUserId(req.query.userId)
    .then(donations => {
      res.json(donations);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
